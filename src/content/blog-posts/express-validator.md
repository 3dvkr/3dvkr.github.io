---
title: "Express-validator middleware"
date: 2021-09-24
tags: ["javascript"]
excerpt: "Rough notes to poke and prod at what this package does."
---
## Where is this code from?

This code is from a project covered in a tutorial for server-side authentication, where the main focus was not `express-validator`. The project followed an MVC pattern, and used Node, Express, Mongoose and JWTs. These are my rough notes from exploring the express-validator middleware. Some of the code in these notes is there to peer into what the middleware functions are doing, rather than to work towards the overall server-side project.

##  Creating the schema using mongoose
In `model/User.js`:
```javascript
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
 username: {
     required: true,
     type: String,
     unique: true
 },
 password: {
     required: true,
     type: String
 },
 email: {
     required: true,
     type: String
 },
}, { timestamps: true });

module.exports = model('User', UserSchema);
```

Note that we decide rules and structure with the schema. When we compile the schema (`model('User', UserSchema);`), we're using the schema to make a model. The model is the interface to the database for CRUD operations.

## Setting up server-side validation

We'll need the schema from the last section and the express-validator package. From its website, Express Validator is a set of Express.js middleware that wraps validator.js, a library that provides *validator* and *sanitizer* functions. Write this in the `routes/user.js` file:

```javascript
const express = require("express");
const { check, validationResult } = require("express-validator"); 

const router = express.Router();
```

After this, write a function to check if the route is working (same file):

```javascript
function checkRoute(req, res, next) {
  console.log(Object.keys(req).includes('express-validator#contexts'));
  next();
}
```

What we're doing with this function is seeing if the `req` object has a certain property or key. It won't, because we'll call this function before the validator middleware runs, i.e. before `express-validator` does its checks on the data we're submitting. 

Then we add the main post route that we actually care about:

```javascript
router.post(
  "/user", // this is the path for this post route
  [
    checkRoute, // here's where we check
    check("username").isEmail(),
    check("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    // These two lines can give us insight on the validator API; see notes below
    console.log(Object.keys(req).includes('express-validator#contexts')); 
    // ^ same line from the `checkRoutes` function, which now says 'true'
    console.log(req['express-validator#contexts'][0]._errors);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
```

Some notes about this:

1. `check()` is from the Check API of the express-validator package. It takes in two optional parameters: the field name, and a string which it can use instead of the default "Invalid value" error message.
2. The `.isEmail` and `.isLength` methods are making use of the Validator *Chain* API of the express-validator package. When we tack on these methods after the `check(...)`'s, we're checking if the values meet certain criteria--either in-built into the method or by passing in more parameters, like `{ min: 5 }`.
3. After the validation, the `req` object has the `'express-validator#contexts'` property. Before the validation, it does not. This property holds the outcomes of the checks: 

```
   [
  Context {
    fields: [ 'username' ],
    locations: [ 'body', 'cookies', 'headers', 'params', 'query' ],
    stack: [ [StandardValidation] ],
    optional: false,
    message: undefined,
    _errors: [ [Object] ],
    dataMap: Map(5) {
      'body:username' => [Object],
      'cookies:username' => [Object],
      'headers:username' => [Object],
      'params:username' => [Object],
      'query:username' => [Object]
    }
  },
  Context {
    fields: [ 'password' ],
    locations: [ 'body', 'cookies', 'headers', 'params', 'query' ],
    stack: [ [StandardValidation] ],
    optional: false,
    message: undefined,
    _errors: [ [Object] ],
    dataMap: Map(5) {
      'body:password' => [Object],
      'cookies:password' => [Object],
      'headers:password' => [Object],
      'params:password' => [Object],
      'query:password' => [Object]
    }
  }
]
```

Going into the first element of the array above, the `_errors` property looks like this:

```
[
  {
    value: undefined,
    msg: 'Invalid value',
    param: 'username',
    location: 'body'
  }
]
```

4. 

The `errors` object looks like this when we do a POST request with no input email and password

```
Result {
  formatter: [Function: formatter],
  errors: [
    {
      value: undefined,
      msg: 'Invalid value',
      param: 'username',
      location: 'body'
    },
    {
      value: undefined,
      msg: 'Invalid value',
      param: 'password',
      location: 'body'
    }
  ]
}
```

## Adding the user route

In `routes/user.js`, add these lines at the top:

```javascript
// other imports
const bcrypt = require("bcryptjs");

const User = require("../model/User");
```

In the `/signup` POST route, we'll:

1. change the last callback function into an async function
2. extract the three pieces of information we need about a new user
3. search to see if a user with that email already exists in our database
4. make a new instance of the model `User` with the username, email and password provided from the POST request
5. salt and hash the password using `bcryptjs`
6. save the user with the hashed password.
7. Authentication, e.g. JWT 
8. error handling

Here's the callback function

```javascript
async (req, res) => { // (#1) change to async because 
                    //we need to await the database looking up a user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    // (#2) we'll expect the HTTP request to send the following data:
    const { username, email, password } = req.body;

    try {
      // (#3) check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      // (#4) if user does not exist, we've already declared the user 
        // variable, which would be undefined
        // so we can reassign it to a new user, created from the User model:
      user = new User({ username, email, password });

      // (#5) do *not* save the user yet. We need to hash the password first:
        // first generate the salt, then generate the hash:
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // then assign the new hashed password to user.password:
      user.password = hashedPassword;

      // (#6) save the user to the database:
      await user.save();

      // (#7) TODO: JWT code goes here.
    
      return res.status(200).json({ message: "User created successfully" });
    // (#8) error handling:
    } catch (err) {
      console.log(`
            user account error:
            ${err}
        `);
    }
  }
```

Here's the **same** function without all the comments:

```javascript
async (req, res) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      user = new User({ username, email, password });
      const salt = await bcrpt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user.password = hashedPassword;
      await user.save();

      return res.status(200).json({ message: "User created successfully" });
    } catch (err) {
      console.log(`
            user account error:
            ${err}
        `);
    }
  }
```