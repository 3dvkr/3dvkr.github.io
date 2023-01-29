---
title: "Franken-fixing git repositories"
date: 2021-08-18
tags: ["git"]
excerpt: "I wouldn't understand why I'd blend together two repos except for what happened here."
---

In short, `--allow-unrelated-histories` saved the day. This is what happened.

## The mistake

Imagine this. You're setting up a repo for a full stack application. You start with a blank folder, add a README.md, commit the file, and push to your remote. Then you set up the back end files, and create a folder for the front-end with `npx create-react-app client`. Knowing that `create-react-app` makes another git repo, you delete the client folder's `.git` folder, so it doesn't clash with the one in the root of the project. At least, that's what you *think* you've done.

You clean out other files in the React app's `src` folder, add a few more lines of code, and think, *This is probably a good time for another commit.* You try to add the changes, and out of no where, you're met with this: `fatal: not a git repository (or any of the parent directories): .git`. Oh no.

## The panic

You can't just clone the repo again. That would undo all your work. So you try a new `git init`, and see if you can just join this history up with the one on the remote repo. In fact, you make a new branch, named `dev`, so that you can do a pull request on GitHub. You search for the button, but it's not there. GitHub is not giving you the option to do a PR, because the main branch and new branch have "unrelated histories."

You're not that far into the project. You could delete the remote repo, make a new one, and have this be your first commit. If you don't admit to any of this in a blogpost, no one would even know. But on second thought—

## The fix

Okay. Recap: The remote has two branches: `main` which only has a README.md, and `dev` which contains all of the work since. We can't merge them, because they have unrelated histories. On our local machine, we have two branches. They both contain the all the code since the first commit.

### Step 1

Switch to the `main` branch, and run `git fetch --all`. This makes your local machine know what's the state of all remote branches.

### Step 2

Run `git reset --hard origin/main`. Now, the local machine branches are like the ones in the remote repo. Our `main `branch only has the README.md, and our `dev` branch has all the work since.

### Step 3

We know `git merge dev` won't work, because of the "unrelated histories," as we saw on GitHub. We'll need something stronger. Run `git merge dev --allow-unrelated-histories`—what a sensibly named flag—and `git push` the changes to the remote repo. The `main` branch now has the second commit.

### Step 4

Realize that `git pull --allow-unrelated-histories` was an option way back in Step 1, but with the slower way, you could keep an eye on what was happening. We generally don't want to mix together two repos.

