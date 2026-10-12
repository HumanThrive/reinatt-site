---
title: "3 Stages of How I Actually Work With AI"
date: 2026-07-23
excerpt: "From single chats, to multiple contexts, to a persona system that governs AI like a company: the three stages of how I use AI, and why none of them is wrong."
cover: "/writing/3-stages-cover.png"
coverAlt: "3 Stages of How I Actually Work With AI"
draft: false
originalUrl: "https://www.linkedin.com/pulse/3-stages-how-i-actually-work-ai-rei-nuttanon-7trpc/"
---

*First published on [LinkedIn](https://www.linkedin.com/pulse/3-stages-how-i-actually-work-ai-rei-nuttanon-7trpc/), 23 July 2026.*

![3 Stages of How I Actually Work With AI](/writing/3-stages-cover.png)

For the entire past 3 months, I worked on designing and building multiple architectures to find a suitable way to integrate AI into my workflow and to govern it so it can produce reliable deterministic outcomes (well, as close as possible) for given tasks.

Although I use Claude Code as my main AI infra, I'm sure we are now in a year (2026) that, besides cost efficiency, any AI models from any major AI providers should already be capable of achieving most of our daily work. So I'd rather focus on building architecture to govern and enhance AI, and redefine workflow altogether, than sourcing for the newest model.

Now on my story, there are 3 major stages of evolution.

## Stage 1

The same as many, I was starting from chatting to resolve one problem at a time. It worked well when I didn't need to handle large and complicated problems.

For example, I was building my Japanese language study program to take the JLPT exam through the chat. It did well when asking it to design a program in a constrained timeframe with a clear goal. In my case, to pass the JLPT N3 exam (I also asked it to build a PDF, HTML format to make it easier to read).

That's because a background context, a problem statement, and an expected output can be packed into a single prompt. A conversation that does not require multiple round-trips.

Until I ran into a complicated problem that required multiple contexts to solve.

## Stage 2

Solving problems requires multiple contexts.

Now, I need to build my finance forecast tool to help me get a second opinion on my purchase decisions.

- I discuss with Claude in a chat about my yearly finance forecast.
- In another chat, I discuss over my purchase history, and my track record on purchasing habits.
- In another chat, I discuss with Claude about my savings, assets, and monthly expense trends.
- I also discuss my relationship with money to form a hypothesis on the spending patterns and habits behind the numbers (to make good judgement, psychology matters).

A single chat alone does not work with me anymore. I need to keep being aware that I will max out the context window that AI can process before it compacts the context or loses its context integrity. Multiple topics are required to be discussed to build context and solve adjacent problems before getting a resolution to a main problem.

I went with organizing files and folders and using Claude Project to manage files across chat sessions. When I need to purchase a big item, then I can give all of my financial activities as references for Claude to form a decision based on past contexts.

Repeatedly, under multiple chat sessions and multiple file management, to solve a single complicated problem. I call it stage 2.

..

So far, stage 1 and 2 are working just fine. But you might notice, they are all working in their silos.

Later, new problems arrived and evolved into complex problems.

To clarify, what I meant by "problem" is basically whatever things are blocking you from achieving a goal that you set.

The goal of my stage-1 example was that I want to pass the JLPT exam, so the problem is I need study material customized to my circumstances.

The goal of my stage-2 example was that I need a second opinion over my purchase. The problem asks, if the purchase is sound. To answer, multiple contexts are required.

My next goal and problems are the two above combined. Each problem has its own depth. And to solve the main problem requires a horizontal view of each adjacent problem. A stage 3 is designed to break the silo.

## Stage 3

And not everyone needs to reach this stage. It can easily be overkill if not needed. So for the example that I will give, it may not apply to you.

At this stage, I started to integrate Claude Code into my laptop. The goal is no longer something that can be achieved by resolving a set of problems. It becomes: how to organize AI so it works as expected on both vertical level and horizontal level.

I am a business founder and provide AI-integration consulting and software development services for my clients. There are layers of work complexity that I need AI to be governed in a way that it can both work as a silo (vertically, focus on its task) and have clarity on what's going on for my entire business (horizontal awareness of surrounding contexts from multiple viewpoints).

On my first architecture, the rationale behind it, I use a mental model from how a traditional company is organized. Well, the most important thing to me is people and how they work together within the org.

So I design the persona system by assuming persona is an employee. Appoint the right persona to the right task. Scope its point of view. Add brains to the personas (memory management). Add conducts, principles, and protocols on how each persona operates. Develop a clear workflow and operation pipeline.

So I have Chief of Staff, CEO, Product Lead, Lead Dev, etc. And adding workspaces for them to operate in. Say, I have 3 projects simultaneously running, I will create a folder "projects". In the projects folder, I have "project-a", "project-b", "project-c". Deploying project-scoped awareness persona such as Product Lead and Lead Dev into the project. And having global-scoped awareness such as the CEO persona, to sit above all projects and oversee all of them.

This is also where the Finance Advisor persona comes in. On stage-2, I named it: Finance Advisor persona. Now Finance Advisor oversees my finance and CEO oversees business and projects, so I can have a second opinion on when to pursue an idea, and when to back off when it's (likely) tanking.

This architecture lets me both go in-depth and ensure that each AI makes decisions with the awareness of the bigger picture when needed. But it is not magic. It is an ongoing work that still needs to be supervised. I created a workflow hypothesis, let the persona run, see what works and what breaks, and ask it to synthesize that into its memory. Then later I come in and calibrate it. Clean up its memory and relocate synthesized knowledge to official documents. Then loop to try again.

Now as a bottom line, I've listed my AI architecture evolution in 3 stages but I want to state this one more thing.

Every stage is working for its cases. There is no such thing as "you are using AI wrong if you only do [x]".

You are doing fine. Just ask it: "Is there a better, more efficient way to do what I'm doing?" and let your use cases evolve how you use AI.
