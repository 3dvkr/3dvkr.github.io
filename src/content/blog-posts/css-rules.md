---
title: "How I come up with CSS from scratch"
date: 2021-06-14
tags: ['css']
excerpt: "I've come up with a few rules of thumb to keep my stylesheets organized."
---
This has worked well for smaller-sized projects. For more complex apps, a methodology like BEM or even a CSS framework might be a better option.

## Mobile first
Websites, especially with semantically correct HTML, naturally have the elements in a column. This works really well for small screens. 

If I wrote CSS with a desktop-first approach, I'd be changing the layout to have certain elements side-by-side, only to undo this for smaller screens in a media query. With mobile-first, I only write the side-by-side layout rules in a media query for larger screens. In other words, I write less code that is easier to maintain.

## Starting structure
I copy and paste Normalize and Reset at the start of my CSS. Next comes any rules I write that affect the layout of the page. This is anything involving margin, padding, and display. Then I write any rules affecting the styling--text decoration, hover effects, border styling and shapes, etc. These rules are separate from the layout rules section. This may mean I have multiple rules for the same selector, but it makes debugging considerably easier.

## Extras
There are separate sections for:
- rules that I add and remove with JavaScript (e.g. `.hide {display:none;}`)
- rules that control animations or transitions
- media queries