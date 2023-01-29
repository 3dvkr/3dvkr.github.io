---
title: "How to answer questions badly"
date: 2022-04-22
tags: ["notes"]
excerpt: "Four strategies you already use!"
featured: true
---

Since January, I've met with hundreds of people who are learning how to code. I've listened to the questions they've asked, and the answers they've gotten—maybe a little too obsessively, which explains the hiatus from blogging. I saw an unusual pattern in some of the back-and-forth. It's unusual, because I'd only ever come across it in conversations between experts and beginners. I couldn't really figure out what was so different. Then I stumbled on an article about a gif with ducks.

## Ducks?
Here's a link to an [article about a duck gif by Dr. Gretchen McCulloch](http://www.slate.com/blogs/lexicon_valley/2014/06/20/at_least_ten_ducks_why_this_caption_is_funny_explained_by_gricean_maxims.html). If you'd like to skip the article for now, the gif shows ducks completely covering a road in a large city, to the point that the actual road is barely visible. They're all running in the same direction. The top comment on the gif reads, "Look at all these ducks there are at least ten [sic]." 

That's really funny, but why? And what does it have to do with possibly improving conversations between expert and beginner developers?

## The Cooperative Principle
The cooperative principle is from an area of linguistics called *pragmatics*. When we communicate with each other, the cooperative principle outlines four main assumptions, or maxims, when we're trying to understand the other person. In short, we assume: 
1. Quantity: the person will provide not too much and not too little information
2. Quality: the person will provide information that is true or geniune
3. Relevance: the information provided is related to the context of the conversation
4. Manner: the information is communicated in a clear and efficient way

Gretchen McCulloch's article dives into how "there are at least ten" violates this principle for the sake of humour. We're going to see how much of this principle is upheld in conversations between experts and beginners, what that depends on, and the consequences of 'bad' answers.

<details>
<summary>An important note before we go any further</summary>
I've never formally studied linguistics. It is a descriptive field, with no evaluative or prescriptive goals. In my searching and reaching out to linguistics scholars, I couldn't find an example of the cooperative principle being used to 'grade' conversations between experts and learners. My repurposing of it here is only to move forward a discussion I've been trying to have, and is not based on some fundamental function of the cooperative principle in research or real life.
</details>

## Chunking
Chunking is the process where we take bits of information and group, or chunk, them together to store in our long-term memory. Our working memory is only able to hold a few chunks of information. Lets say we're working on a problem, and it requires us to draw connections between more pieces of information than our working memory's limit. If all of that information was unchunked, then the problem would feel unsolvable. If all the information required was grouped in three or four larger chunks, we'd have everything we need to solve the problem without exceeding our working memory's limit. 

Here's an example: 'dfghs' and 'apple' both have five pieces of information, or five letters, and yet 'apple' feels easier to remember, because the letters are chunked together into one word that we understand. That's because we speak English. What if we gave this task to someone that doesn't speak English, but can recognize letters from a Latin script? What about someone who was unfamiliar with both English and Latin script? People from all three of these groups would be capable of remembering both sets of letters, but are dealing with differently formed chunks. This is makes a significant impact on how easy it would be to remember 'dfghs' and 'apple.' 

The *ways* and the *extent* that information has been chunked will also impact how we make sense of an answer.

The chunking process has an impact on the cooperativeness of our answers. If we're unaware of this impact, we're going to see some very unwanted outcomes in recognizing competance, and in teaching newer developers. We'll see how in the next two sections.

## The curse of knowledge
The curse of knowledge is where we forget what it's like to *not* know something after we've learned it, which makes it hard to explain a concept to someone who doesn't know about it yet. The default is to assume everyone has the same information that you have. What if there's another level to it: assuming everyone has the same information, and it all happens to be connected or chunked the same way?

Lets say two people both have the pieces of information A, B, and C in their long-term memories. One person understands the information chunked together as AB and C. The other understands chunks the information as A and BC. We'll assume both ways are valid. In a scenario like a job interview, what if we asked about concept B immediately after asking about concept C, because that's how it's stored in our brains, too? The second person would probably look smarter, because while both people have the same information, the way we're asking them to retrieve that information gives one of them an unfair advantage. 

We may believe that if someone is unable to answer our question, then they don't know that information at all, and they shouldn't move forward. Based on our thought experiment in the last paragraph, we could actually be rejecting someone because they don't think the same way that we do. **We're shrinking the diversity of thought on our dev teams.**

## What happens when we don't give 'cooperative' answers?
At this point, we know that it's not up to the answer-giver to decide whether an answer is 'cooperative.' The cooperativeness of an answer depends on the answer-reciever, and how they've chunked information in their mind.

This is in contrast to a general idea that if an answer is correct, then it is useful, because we're not factoring in the person receiving the answer at all. These kinds of answers can be of high *quality*, but any jargon or tangents result in the answer failing to meet the other three maxims (quantity, relevance, and manner).

When we talk, we assume all four maxims are being observed. We assume the answers we recieve will address the pain point we're trying to resolve. And when an answer is consistently hard to understand, beginners in particular will question whether they belong in this field rather than the source from which they are seeking help. 

**When an answer is uncooperative, it is a probably unintentional but very real way to exclude someone from tech.**

## Final notes
I'm still trying to distill my steps for giving cooperative answers. It will probably have to do with detecting mental models and the way that ideas are pre-chunked. This might be a future blog post.

I'm grateful to [@DevEdBookClub](https://twitter.com/DevEdBookClub) for their weekly discussions, where the gears for this post really started to turn. We're currently reading *The Programmer's Brain* by Felienne Hermans.

Special thanks also to Dr. Sylvia Sierra ([@sociolinguista](https://twitter.com/sociolinguista)) for the insightful advice about the research and literature on pragmatics, and for her recommendations for reading.

### Links
- [Crash Course video on Pragmatics](https://www.youtube.com/watch?v=MPwpk-YgvjQ)
- [Gretchen McCulloch's Slate article on the duck gif](http://www.slate.com/blogs/lexicon_valley/2014/06/20/at_least_ten_ducks_why_this_caption_is_funny_explained_by_gricean_maxims.html)
- [*The Programmer's Brain* by Felienne Hermans](https://www.manning.com/books/the-programmers-brain)
- [The DevEd Book Club](https://dev.to/devedbookclub)