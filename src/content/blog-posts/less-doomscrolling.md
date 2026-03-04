---
title: "Less Doomscrolling"
date: 2026-03-03
tags: ["ux"]
excerpt: ""
---

At the start of this year, I really wanted to do something about my doomscrolling. It had started to feel like chunks of time would just vanish, and I would have liked to put them to better use. After reading [Megan Sullivan's blogpost](https://meganesulli.com/blog/shortcut-stop-scrolling/) on iOS automations and making a few tweaks, I've got a little tool to help dial it down. 

I kept the first part the same as Megan's automation. When I opened an app out of habit, I had the automation snap me out of it with the same question: "Why are you here?" I took a moment to understand this wasn't a source of judgement and shame; it was just a way to check in. My options were to look up something specific, ask for a time-boxed doom-scrolling session, or acknowledge a negative emotion. 

For the quick look-up option, I needed to use a `Wait` action, which only let me set an amount of time in seconds. It's different from a timer, which would take me away from the doom-scrolling app when it ran out. This could have worked, but if I was looking up something important and needed a bit more time, I didn't want to lose my train of though with the timer going off. I also didn't want to get in the habit of over-riding this redirection to just return back to the app. To keep this option from turning into a hallpass, it adds a timestamp to an Apple Note specifically for doomscrolling if I'm still on the app after the two minutes are over, and does start a timer for ten minutes.

I put the option to doomscroll in the middle, because to me it looks more hidden there. There's a quick and friendly note that pops up as a reminder to stay within the preset time. Once I close out of that message, the ten-minute countdown starts right away and adds a timestamp to my Apple Note.

The automation uses the settings in the Clock app's timer when you create the automation or make any changes to it. It's a bit of a detour from the Shortcuts app. From the list of tones, I chose "Stop Playing" which locks my phone when the time is up instead of switching to the Clock app while playing a sound.

The third option takes me to the Apple note right away, where I can write about what was going on. I haven't actually done this, but it's enough of a nudge to make me consider not doom-scrolling.

Now what might we do with all these timestamps I'm collecting...

Further reading:
[How to Create an iOS Shortcut to Prevent Mindless Scrolling](https://meganesulli.com/blog/shortcut-stop-scrolling/)
[Is your wellness app making you anxious?](https://afterburnout.co/p/your-wellness-app-is-making-you-anxious)
