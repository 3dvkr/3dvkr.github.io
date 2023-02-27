---
title: "Whitespace Collapsing"
date: 2023-02-27
tags: ['html', 'css']
---

This is a recent debugging session I had with a developer, working with Express and EJS. We were looking at two views in their app: one where users can enter or edit entries to save to a database, and one where the retrieves all of the user's saved entries as read-only text. For the editing page, it used a `textarea` element to capture what the user wrote, and for the reading page, each entry's text content went in its own HTML element. 

The problem: when the user entered the text content, it included multiple paragraphs. When it was rendered on the read-only page, the text appeared as one paragraph, as if the newline characters were all gone. How do we make sure the paragraphs intented in the plaintext content would show up?

## Code
To follow along, I've made [a CodePen demo](https://codepen.io/dvkr/pen/PodMGaB). Here, the text content doesn't make that round trip from the client to a server and then back again, since we're only interested in rendering it. The sample text content will have two paragraphs from the author, and we'll look at how to make sure they are visible as two separate paragraphs when we look at the actual website. If I'm talking about paragraphs as in the HTML element, I'll call them *paragraph tags* or `<p>` tags to avoid confusing them with the author's intended paragraphs within the text content. 

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="PodMGaB" data-user="dvkr" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/dvkr/pen/PodMGaB">
  whitespace-test</a> by dvkr (<a href="https://codepen.io/dvkr">@dvkr</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Whitespace collapse
Whitespace in HTML gets condensed or collapsed in the browser. We can see this in the CodePen demo with the text in the `div` with the `static` class, which looks like two paragraphs in the HTML editor, but like one paragraph in the actual preview of the site.

Now we want to look into using JavaScript to add this text content to an element on the page. Let's look at some strategies. 

## Using `innerText`
This is a property of an HTML element, where we can add our text in between the opening and closing HTML tags. In the demo, we're selecting the second `div` on line 1, and can use this strategy by uncommenting line 7. If we open the console within the demo, we'll see that `innerText` preserves whitespace by converting newline characters to `<br>` tags. This gives us a visual break between the intended paragraphs, but screen readers would not be able to skip between them. For larger blocks of text, this is not ideal. 

## Using `textContent`
The `textContent` property is another way to add our two paragraphs. In the demo, comment out line 7 and uncomment line 9 in the JavaScript editor. At this point, the two `div` elements look identical. We can confirm this by looking at the preview and what's printed in the console. 

To show the two separate paragraphs, we can add the `white-space` property using CSS. There are  [many values](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space#values) for the `white-space` property. For the  `div.js` element, we'll need `pre-line` (uncomment line 19 in the demo). The text content will now preserve white-space from newline characters, but collapse other whitespace like sequences of spaces. 

With this solution and the previous one with `innerText`, we're making sure the intended paragraphs are showing up visually on the page, but hard to navigate with assistive technologies. We can fix this with the right HTML. 

## Adding more `<p>` tags
We need to have each paragraph in the text in between `<p>` tags. The strategy is to split the text by the new line characters, loop through the individual paragraphs as strings, and surround them with `<p>` tags before nesting them in a parent element. We're using imperative JavaScript, but it would be the same idea with EJS, React, etc.

In the demo, comment out lines 7 and 9, and uncomment everything else. For every intended paragraph in the text, we're creating a `<p>` element and, after adding the text paragraph's content into it, appending it inside the `box` node. 