---
title: "Where does a linked list live?"
date: 2021-11-21
tags: ["javascript"]
excerpt: "A model to think about simple data structures"
---

The topic of linked lists is a common gateway into the world of data structures. I started paying attention to how someone comes to understand why we'd care about something that, at first, looks a lot like an array—and I saw a trend. Most explanations either emphasize the definition of a linked list conceptually with no mention of what the code looks like, or they walk through code without mentioning the reason for all this trouble when arrays look so much easier to write

I made up a model to see if linked list behavior could feel intuitive.

## How are arrays stored?

Imagine an empty chess board. We're going to use this to visualize where data lives. First we'll look at arrays. Suppose we want to store `[1, 2, 3, 4, 5]`. Since this is an array, each number will get its own square. The squares will need to be right next to each other. Since our chess board is empty, we have lots of options for where this array's home will start and end.

But what if we had placed other things on our chess board? What if a lot of the squares were already holding other data, like strings, or booleans, or numbers? What if we technically did have several unoccupied squares, but could only find at most three squares in a row? In this case, we would not be able to store our array. 

One option around this would be to give each of the five numbers their own variable, and store them as separate numbers. This means our code won't understand them as a group, and they won't have an order or positions. 

## A quick detour into objects

Objects are another way to store information that should be grouped together. Instead of labelling that information with an index, we can choose a more meaningful label for the information. These labels are called the object's *properties*. We're about to create several small objects in the following section To keep things simple, we can imagine these objects take up one square on our chess board.

## How are linked lists stored?

Our first option was to separately store the five numbers, which had some drawbacks. A second option would be using a linked list. This means we'll store each value in our array, and tie to it the location of the next value. Each square will need to contain both these pieces of information, which means it makes sense to store them in one object with two properties: `value` and `next`.  Each object is called a *node*, and a sequence of nodes makes a linked list. This makes it possible for the numbers in our array to live in squares far apart, while still being part of a larger structure in an order that we choose. 

We don't quite have everything that we had with an array though. There's no way to jump around based on the index, because there is no index. In our array, we could ask for the element at index 2, and get back `3`, since indexes start at zero. In our linked list, the only way to get to `3` is to find out the location of the square that comes before. The only way to find out the location of that previous square is to find the one before the previous square. Now we're at the beginning of our list, which we can find by using the variable that points to the linked list. The only way to a node in the middle of a linked list is to visit all the nodes that come before.

## All models are wrong, but some models are useful

I've loosely drawn on how arrays are handled in other languages, and pretended JavaScript also handles them the same way. Arrays in JavaScript are well-disguised objects, and elements aren't always stored in a contiguous memory block.

Special thanks to [verolafox](https://twitch.tv/verolafox) for letting me try this explanation out on them. You can [watch Vero use this model](https://twitter.com/hufflepuffcodes/status/1461862870182862849) to figure out how to traverse a linked list. Special thanks also to [Wolfgang](https://github.com/Wolfgang-stack) for proof-reading and clarifying the boundaries of this model.

### For further reading:

[Computer science in JavaScript: Linked list](https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/)

[An Array By Any Other Name](https://indifferentg.host/type-checking-arrays)

[Passing by Value vs. by Reference](https://blog.penjee.com/passing-by-value-vs-by-reference-java-graphical/)


