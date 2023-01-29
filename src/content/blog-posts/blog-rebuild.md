---
title: "I rebuilt my blog from scratch using 11ty"
date: 2021-06-28
tags: ['project']
excerpt: "Isn't it shiny?"
---

My blog used to use Jekyll. I'd set it up before I even knew how GitHub worked. I used a theme, which got my blog up and running quickly, but was difficult to customize. Things got hacky and disorganized. I wanted a better workflow, and I wanted more control over what files my static site generator was outputing. 

Then Piccalil.li tweeted that his thirty-one-part tutorial on 11ty was available for free. I went through it from start to finish. To build this blog, I only needed parts 1-8, 10, and 12, but it was still very useful to have gone through the entire tutorial. I hit a speed bump when I went to deploy on GitHub Pages—the relative links weren't working, but the `url` filter fixed that. In addition to the tutorial, Stephanie Eckles' 11ty.rocks site and youtube videos helped a lot of things click. 

Here's what I like about my new 11ty setup so far:

## It's lightweight
My entire output folder is under 300kB. Roughly, that means each HTML file generated averages 26kB. This isn't necessarily a result of using 11ty. I avoid images whenever possible. There is no client-side JavaScript (yet). I opted for inbuilt browser fonts, and wrote my own CSS with only the styles I need. 

A lightweight site is accessible to more people, on more kinds of connections, on more devices, and pollutes less (see link below). 

## It's easy to update and deploy
I have my output folder on a branch, `gh-pages`, in my blog's repo separate from the source code. I set GitHub Pages to deploy `gh-pages` instead of `main`. I run 11ty locally after writing a new blog post, push the output folder to `gh-pages`, and my blog is updated. 

## It uses markdown
I write my blog posts in markdown. There is a front matter section at the beginning of each file, which lets me label different information. I can use labels that 11ty already knows. For example, `layout: <name of layout>` is the way I choose what HTML goes around my markdown file's content to generate that blog post's page. I can also pick labels I need, and specify where that information should go in the layout I picked. It lets me focus on the content, because I've already set up where it should show up, and how I want it styled when I made the layouts.

## It displays code snippets and chunks nicely
Prism.js was surprisingly painless to use. I added the JavaScript to the `head` section of my base layout, so that Prism.js is available on every page that 11ty generates. That makes anything between a pair of three backticks show up as code. As long as I keep each line of code from getting too long (e.g. by chaining too many array methods), it's fairly pleasant to read.

## It has the option to add more features
With the volume of posts I have, my current set up works fine. As I write more, I could see navigation becoming an issue. I could automate some things. It would be nice to have an archive page by months, more collections/groupings of posts, and an RSS feed. I've skimmed the docs on these features, and they seem like manageable and modular additions to what I've got so far.

## Links
- [Picalil.li's course](https://piccalil.li/course/learn-eleventy-from-scratch/)
- [11ty.rocks](https://11ty.rocks)
- [Stephanie Eckles' video](https://www.youtube.com/watch?v=KKSEs0m6eVY)
- The case for [sustainable web design](https://branch.climateaction.tech/issues/issue-1/hands-on-sustainable-web-design/)

