---
title: "Hooked: How to Build Habit-Forming Products"
author: "Nir Eyal (with Ryan Hoover)"
year: 2014
domains: [psychology, data-driven, ethics, retention]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: medium
---

# Hooked — Nir Eyal

Use this when: someone proposes "add a hook" or a variable reward to lift retention; you need to diagnose why a product isn't becoming a habit (which step of the loop breaks); you are deciding whether a product even belongs in the "habit zone"; you must judge the ethics of a retention mechanic (feeds, streaks, notifications, badges) before building it.

Basis: the book (Portfolio/Penguin, 2014; revised edition 2024) was not read. These notes rest on Eyal's own free essays on nirandfar.com that present the book's model, most written as the book was drafted. Read in full: "The Hooked Model: How to Manufacture Desire in 4 Steps" (the four phases); "Variable Rewards: Want to Hook Users? Drive Them Crazy" (tribe, hunt, self); "The Morality of Manipulation" (the Manipulation Matrix, which is the book's ethics chapter); "The Habit Zone" (frequency × perceived utility); "How to Hook Users in 3 Steps: An Intro to Habit Testing" (identify, codify, modify); "How to Trigger Product Usage That Sticks" (a guest post on his site quoting the model, used for context only); and two later essays that show his revised stance, "Can We Please Stop Calling Everyone 'Addicted'?" (2020) and an internal-triggers essay from his follow-up book *Indistractable* (2019). Covered well: the four phases, reward types, investment, the habit zone, habit testing and the ethics matrix. Not covered: the book's detailed case studies (Pinterest, Instagram, Twitter, Bible app), the trigger-design and "action" chapters beyond the summary (which adapt Fogg's model), the full investment chapter (his investment slide deck is on Scribd and was not used), and the 2024 edition's changes.

## The big idea (3 sentences)
Products that form habits win because users come back on their own, cued by "internal triggers" (emotions such as boredom, loneliness or uncertainty) rather than by costly marketing, so "the first-to-mind solution wins." Habits are built by repeatedly cycling users through a four-step Hook: an external then internal **trigger**, a simple **action** done in anticipation of reward, a **variable reward** (of the tribe, the hunt or the self) that creates wanting, and an **investment** of time, data, effort, social capital or money that makes the product better and loads the next trigger. Because this is a "super power" that can build healthy routines or "wasteful addictions", makers should ask whether they should hook users at all: build what you would use yourself and what materially improves users' lives.

## Core concepts
- **Habit** — behavior done with little or no conscious thought. Products build habits by attaching to existing routines and emotions until users "self-trigger".
- **Trigger** — the "spark plug". *External* triggers (email, link, app icon, notification) start the loop. With repetition, *internal* triggers (a feeling, a situation, a routine) take over, e.g. "I'm bored" → Facebook, "what's going on?" → Twitter.
- **Action** — the simplest behavior done in anticipation of reward (click, scroll, search). It relies on Fogg's levers of motivation and ability: make it as easy as possible while motivation is present.
- **Variable reward** — what separates a Hook from a plain feedback loop. Predictable feedback (the fridge light) doesn't create desire. Variability (Skinner's intermittent reinforcement) creates a "frenzied hunting state". Eyal leans on dopamine-anticipation research: the system drives searching ("wanting") more than enjoying.
- **Three reward types** — *tribe* (social validation: likes, replies, inclusion), *hunt* (resources and information: deals, feeds, search results), *self* (mastery, completion, competence: clearing an inbox, levels, to-dos). Email is sticky because it mixes all three, and the pull vanishes once the inbox is cleared and the mystery is gone.
- **Investment** — the user does "a bit of work" that improves the next pass (content, data, followers, preferences, reputation, learned features). It loads the next trigger and makes the action easier and the reward richer. Unlike a funnel, it has no endpoint. It also raises switching costs.
- **Habit zone** — plot a behavior by frequency and perceived utility. Very frequent behaviors (search) can become habits even with modest utility. Rare ones need high utility (Amazon as the default store). Infrequent products (travel booking) aren't habit-forming and must keep competing for attention.
- **Habit testing** — (1) *Identify*: define how often a habitual user "should" use the product and find who meets that bar (cohort analysis). His rule of thumb: at least 5% habitual users before optimizing. (2) *Codify*: find the "habit path" shared by devotees (Twitter: following enough accounts early). (3) *Modify*: steer new users down that path and re-test.
- **Manipulation Matrix** — two questions: "Would I use it myself?" and "Will it materially improve users' lives?" Yes/yes = *Facilitator* (go ahead). Improves lives but you wouldn't use it = *Peddler* (not immoral, but likely to fail: badges and points nobody wants). You'd use it but it doesn't improve lives = *Entertainer* (art, hits-driven, fades). Neither = *Dealer* (exploitation, like Bogost's Cow Clicker).
- **Responsibility** — the original essay puts final responsibility on users for overuse once makers pass the matrix. His later writing rejects calling heavy users "addicted" (he cites about 15% of lab rats preferring alcohol and a similar share of humans with alcoholism) and pushes self-regulation tools such as noticing internal triggers, the "ten-minute rule" and "surfing the urge".

## Actionable heuristics for product design
- Before designing any loop, place the core behavior in the habit zone: how often should a real user need this, and how useful does it feel each time? If it's infrequent (insurance, travel, tax), don't force a habit with notifications. Design for easy return and trustworthy reminders instead.
- Name the internal trigger honestly: which feeling or situation should bring the user back (uncertainty about a project, wanting to learn, needing to coordinate)? If the only answer is boredom or anxiety you'd have to provoke, stop and run the Manipulation Matrix.
- Make external triggers carry value in themselves (the reminder shows the user's own goals or the actual new content) and let users choose and schedule them. Taper triggers as the routine forms rather than escalating them.
- Make the core action the easiest thing on the screen: one tap from the trigger, no login wall, defaults pre-filled (see `references/books/fogg-behavior-model.md`).
- Use variability only where the variability *is* the value: genuinely new messages, new relevant items, real discoveries. Never add artificial randomness (slot-style pulls, random badges, loot boxes) to inflate sessions. techne's ethics gate forbids variable rewards engineered to prolong use beyond the user's intent.
- Give the "hunt" an honest end: when users have seen everything new, say so ("You're all caught up"), and let the cleared state feel rewarding (Eyal's own inbox example shows completion ends the pull).
- Prefer "self" rewards tied to real competence (progress in a skill, a finished task, a better result) over "tribe" rewards that feed social comparison, especially for teens.
- Design investments that compound value *for the user*: their content, settings, history, followers, templates, trained recommendations. Ask for the investment right after a reward, when it improves the next visit. Don't use investment mainly to raise switching costs or block export. Let users take their data with them.
- Run habit testing on real data: set the expected frequency for a habitual user, measure what share of a cohort meets it, find the common early actions of retained users, then test (with experiments, not just correlation) whether nudging new users down that path causes retention.
- Treat the "habit path" as a hypothesis. Twitter-style "follow N accounts" findings are correlational. Validate with A/B tests and guardrails (see `references/data-driven/experimentation-playbook.md`).
- Run the Manipulation Matrix in kickoff for any engagement feature, and write down the answers. If the team wouldn't use it themselves or can't say how it materially improves users' lives, don't ship it.
- Offer self-control tools in habit-forming products: usage dashboards, quiet hours, notification controls, session reminders. Eyal's later work recommends them, and they protect long-term trust.

## Evidence & caveats
- **The model is a synthesis of case studies and existing theory, not tested as a whole.** Its parts come from Fogg (action), Skinner's reinforcement schedules (variable reward) and commitment and IKEA-effect research (investment). There is no controlled evidence that products built with the Hook model retain users better.
- **Variable reinforcement** is strongly established in animal learning, and slot machines show its power in humans (`references/books/addiction-by-design-schull.md`). Its benefits for *beneficial* app habits are little tested. Wood & Neal note few human interventions have tested uncertain rewards.
- **Dopamine claims are simplified.** Dopamine signals reward prediction and incentive salience ("wanting"), roughly as he says, but "swimming in dopamine" and "removing its defenses" are rhetoric, not findings.
- **Internal triggers in the book are often negative emotions.** Designing products to relieve boredom, loneliness or FOMO risks training avoidance and compulsive checking. This is the core ethical critique (Center for Humane Technology, Schüll).
- **Habit research disagrees on triggers:** Wood's work shows reminders increase repetition but can block automaticity, and stable context cues matter more than prompts (`references/books/good-habits-bad-habits-wood.md`).
- **Specific numbers** (5% devotees, Progressive's insurance figures, the 15% rats statistic) are his examples or rules of thumb, not established benchmarks.
- **His stance moved.** The 2013–14 essays frame users as responsible for overuse. *Indistractable* (2019) and later essays focus on self-control and reject the "addiction" label, while critics read it as a partial acknowledgment of harm.
- The book's case studies date from 2012–2014 (Pinterest, Instagram, early Twitter). Platform rules, regulation (EU, UK and US actions on addictive design) and norms have changed.

## Disagreements with other references
- `references/psychology/behavior-persuasion-toolkit.md` §2 already grades the model [weak/anecdotal] and sets agent rules: investment is the most defensible part, and engineered variable rewards and anxiety-based triggers are forbidden. This file adds the source detail (habit zone, habit testing, the full matrix). The toolkit's rules take precedence.
- `references/books/good-habits-bad-habits-wood.md`: Wood finds durable habits come from stable context cues, action-specific rewards and repetition, with reminders as scaffolding that can impede automaticity. Eyal centers triggers and variable rewards. Trust Wood for what makes habits last, and use Eyal's loop only as a diagnostic vocabulary.
- `references/books/addiction-by-design-schull.md` documents the dark endpoint of variable rewards plus continuity: the "machine zone". The Manipulation Matrix's "Dealer" quadrant is Schüll's subject. Use Schüll to judge risk.
- `references/books/fogg-behavior-model.md` supplies the "action" step. Both share the weakness that prompts can be over-used.
- `references/books/flow-csikszentmihalyi.md`: real flow requires skill and growth. Hooked's "frenzied hunting state" is absorption without growth. Don't confuse the two in engagement metrics.
- `references/psychology/behavior-ethics-dark-patterns.md` and `references/future/ai-ethics-gate.md` list infinite scroll, autoplay and punitive streaks as addictive design. They override any Hooked-derived recommendation.

## Best quotes (< 25 words each, max 5)
- "The first-to-mind solution wins." ("How to Manufacture Desire")
- "Predictable ones don't create desire." (on feedback loops, "How to Manufacture Desire")
- "If used to exploit, habits can turn into wasteful addictions." ("How to Manufacture Desire")
- "The matrix seeks to help you answer not, 'Can I hook users?' but 'Should I attempt to?'" ("The Morality of Manipulation")

## Related
- `references/psychology/behavior-persuasion-toolkit.md`, `references/psychology/cognition-emotion-experience-habit.md` (§8), `references/psychology/behavior-ethics-dark-patterns.md`
- `references/books/fogg-behavior-model.md`, `references/books/good-habits-bad-habits-wood.md`, `references/books/addiction-by-design-schull.md`, `references/books/flow-csikszentmihalyi.md`
- `references/data-driven/conversion-onboarding-activation-retention.md`, `references/data-driven/metrics-frameworks.md`, `references/future/ai-ethics-gate.md`
- Books: Eyal, *Indistractable* (2019); Fogg, *Tiny Habits* (2019); Schüll, *Addiction by Design* (2012)

## Sources
- Eyal, "The Hooked Model: How to Manufacture Desire in 4 Steps": https://www.nirandfar.com/how-to-manufacture-desire/
- Eyal, "Variable Rewards: Want to Hook Users? Drive Them Crazy": https://www.nirandfar.com/want-to-hook-your-users-drive-them-crazy/
- Eyal, "The Morality of Manipulation" (Manipulation Matrix): https://www.nirandfar.com/the-art-of-manipulation/
- Eyal, "The Habit Zone": https://www.nirandfar.com/habit-zone/
- Eyal, "How to Hook Users in 3 Steps: An Intro to Habit Testing": https://www.nirandfar.com/hooking-users-in-3-steps/ (video intro: https://www.nirandfar.com/habit-testing/)
- Eyal, "Can We Please Stop Calling Everyone 'Addicted'?" (2020): https://www.nirandfar.com/stop-calling-everyone-addicted/
- Eyal, internal-triggers essay (from *Indistractable* material): https://www.nirandfar.com/internal-triggers/
- Context only (guest post on the author's site, not by Eyal): "How to Trigger Product Usage That Sticks": https://www.nirandfar.com/how-to-trigger-product-usage-that-sticks/
- Book page: https://www.nirandfar.com/hooked/
- Downloads saved under books/free/hooked-eyal/
