---
title: "Lean Analytics: Use Data to Build a Better Startup Faster"
author: "Alistair Croll & Benjamin Yoskovitz"
year: 2013
domains: [data-driven, process]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: medium
---

# Lean Analytics — Alistair Croll & Benjamin Yoskovitz

Use this when: a team has a dashboard full of numbers and can't say which one should drive this month's design work; you must define "active user" or a success threshold for an MVP, beta or new feature; you want cheap ways to test whether a feature is wanted before building it.

Basis: the book (O'Reilly, 2013) was not read. These notes come from the authors' own free material on leananalyticsbook.com, read in full. The main source is the official "sneak peek" PDF the authors released in 2012 for free distribution: draft chapters 1–6 covering the introduction, "We're all liars", "How to keep score" (qualitative vs quantitative, vanity vs actionable, exploratory vs reporting metrics, what makes a good metric), the Lean Canvas with metrics per box, and "data-driven vs data-informed". These chapters were later revised, so wording differs from the published book. Also read: the authors' blog posts "The One Metric That Matters", "How to Score Problem Interviews", "Minimum Viable Feature analysis", "Freemium and the feature/business tension", "Fast boat, fast river", "Buyer Mindsets" (material cut from the book), "The 7 Myths of Lean" and "Lean Analytics for Intrapreneurs", plus several guest posts by readers applying the book (onboarding, interview scoring, a SaaS beta, an enterprise experiment canvas). Coverage of the core thinking (OMTM, vanity metrics, the stage and business-model lens, lines in the sand, data-informed caution) is good. Not covered: the six business-model chapters in full, the five-stage chapters (Empathy, Stickiness, Virality, Revenue, Scale) beyond their names, most of the 30+ case studies, and the book's tables of "what's normal" benchmarks, which are the parts most often quoted.

## The big idea (3 sentences)
In a startup or new product, the purpose of analytics is to find the right product and market before the money runs out, and founders lie to themselves, so data is the counterweight to their reality distortion field. At any moment, focus on the One Metric That Matters (OMTM), chosen by the kind of business you are, the stage you are at and the audience you report to, and set a target for it in advance (a "line in the sand"). A good metric is a comparative, understandable rate or ratio that will change what you do. Vanity counts that only go "up and to the right" should not guide decisions, and optimisation by numbers must be guided by human judgement to avoid local maxima.

## Core concepts
- **We're all liars** — founders need some self-deception to survive, but believing their own hype kills companies. Customers also lie, out of politeness. Instincts are experiments and data is the proof.
- **Three metric distinctions** — qualitative (why) vs quantitative (what and how much); vanity (feels good, changes nothing) vs actionable (changes what you do); exploratory (searching for unknown unknowns) vs reporting (tracking known operations, best automated).
- **Vanity metrics** — hits, pageviews, visits, unique visitors, followers and likes, time on site, emails collected and downloads. "Total users" only grows; "percent of users who are active" can go down, so you can learn from it.
- **What makes a good metric** — it is comparative (against last week, a cohort or a segment), understandable ("no more complicated than a golf handicap"), a rate or ratio (speed, not distance) and suited to its audience. Above all, it changes behaviour: agree before collecting data what you will do for each result.
- **Ratios for tensions** — ratios can balance opposed goals, such as paying users against churn for a freemium product, or revenue today against the same weekday last year (GSI Commerce's stall alarm).
- **One Metric That Matters** — at any time, one metric matters above all others. It is chosen by the business model, the stage and the audience. A wise CEO's answer to "which metric matters most?" was "the one that's most broken". Optimising it squeezes the problem elsewhere, which shows you the next metric.
- **Business models drive KPIs** — transactional (conversion, basket size, abandonment), collaborative or UGC (the ratio of lurkers to creators, good vs bad content), SaaS (time to complete a task, recency of use, uptime, churn), media (clickthrough, time on page), games (ARPU, lifetime ARPU) and apps (installs, active versions, uninstalls, ratings). Real companies mix models.
- **Stages** — the book's five stages are Empathy, Stickiness, Virality, Revenue and Scale. In the draft, four validation steps (problem, solution, market or revenue, channels and ecosystem) map to them. Each stage has its own OMTM. Spending on acquisition during the stickiness stage is mostly waste.
- **Line in the sand** — set a target value up front, ambitious but adjustable. It can be redrawn when you learn how real customers use the product (HighScore House lowered its "four uses a week" active-family bar after phoning users who were happy at once or twice). Lowering a target just to pass it is cheating.
- **Qual + quant** — numbers show where; calls and interviews show why. Circle of Friends found its pivot to Circle of Moms by digging through its data for an engaged segment. HighScore House found its definition of value by calling inactive users.
- **Scored problem interviews** — score each problem interview: did they rank the problems, are they actively trying to solve them, were they engaged, did they refer others, did they offer to pay. Add up the scores and look for a high-scoring subgroup with similar rankings; that is your early-adopter segment.
- **Minimum viable feature tests** — a one-question embedded survey, "phone a friend" (have someone explain your product to a friend while you listen), watching people use a competitor's feature, a "button to nowhere" leading to "what were you hoping to find?", a sign-up form for a feature, prototype tasks measured as funnels, "what would Bob do?" (asking about others to reduce false consensus), and false payment.
- **Data-informed, not only data-driven** — machine optimisation finds local maxima (the best tricycle, never the car) and can learn harmful things (provocative images raise clickthrough but damage the brand). Quantitative data is good for testing hypotheses and poor for generating them.
- **Feature vs business tension** — moving from stickiness (what users want) to revenue (what the company wants) creates tension. Deliberately weakened usability that pushes upgrades (the Skitch/Evernote sync nags, LinkedIn blocking link copying) turns strong business metrics into weak product metrics and drives users away.
- **Buyer mindsets** (cut from the book) — straight rebuy (habitual; watch for drift), modified rebuy (open to switching; upsell or unseat an incumbent) and completely novel buy (you can set the buying criteria; reviews and search matter most).

## Actionable heuristics for product design
- Before a design sprint, name the one metric this work is meant to move, its current baseline, the target and what you'll do if it misses. If you can't name a baseline, instrumentation is the first deliverable. Keep a guardrail next to it, because one metric optimised alone will distort others (removing a complaint form takes complaints to zero but does nothing for satisfaction).
- Replace every count on a design dashboard with a rate: "% of new users who complete setup within 24 h", not "setups completed"; "% of weekly active teams that invite a teammate", not "invites sent". If a number can only go up, remove it from decision reviews.
- Define "active" by the moment real value is delivered, not by login or creation. A proposal tool counts "sent a proposal this month", not "created a proposal". Blank-canvas creation is not use. Validate the definition by calling both active and inactive users. If people who report getting value fall below your threshold, redefine it and write down why.
- Choose the OMTM by stage. Before retention is proven, design for stickiness (activation, repeat use, depth of the core action) and hold off on acquisition work, landing-page tuning and growth loops. Only after stickiness is proven should virality and pricing work get design time.
- Pick metrics by business model. For SaaS, design to reduce time to complete the key task and to raise recency. For marketplaces and UGC, track the creator-to-lurker ratio and content quality, not raw posts. For transactional products, track conversion and basket size across the long funnel, including the source.
- Before building a feature, run the cheapest test that is close to real use. A "button to nowhere" (with honest copy such as "not built yet, tell us what you hoped for") tests names and placement and collects requirements. Watching ten people use a competitor's version shows the common path to build first. Prototype tasks should be measured as funnels: success, time, back-steps, stall points.
- Be careful with fake-door and false-payment tests: label them honestly at the point of contact, never take money, and don't run them on the same users repeatedly. Pricing shown in a test anchors users; Croll warns about this himself. Check against `references/psychology/behavior-ethics-dark-patterns.md`.
- When asking for permissions or registration, wait for the user's own signal of intent (a flight-alert request before asking for notifications; registration at "Buy" or "Save"), explain the benefit first, allow skipping, teach one thing at a time in context, and never show a blank screen. One reader's onboarding funnel went from 50% to 95%; that is self-reported and uncontrolled.
- Use scored problem interviews to avoid fooling yourself. After each discovery interview, score pain signals (actively working around the problem, engagement, referrals, offers to pay). Sort by score and look for the segment that clusters at the top. Combine this with the no-leading-questions rules in `references/books/mom-test.md`.
- In freemium products, don't create upgrade pressure by degrading the free core experience with nags, broken sharing or interrupted workflows. Gate on additional value, not on deliberately broken basics. Track a ratio that holds both sides (conversion to paid against churn or free retention).
- Pair every optimisation programme with periodic stepping back. After a run of small A/B wins on one screen, ask whether a different concept would beat the local maximum, and test larger changes alongside the small ones (`references/data-driven/experimentation-playbook.md`).
- Present different metrics to different audiences: experiment metrics to the team, accounting metrics (revenue, churn, unit economics) to the board, and vanity numbers only for press. Never let a press number turn into a decision metric.

## Evidence & caveats
- This is a practitioner synthesis by two founder-mentors, with no controlled evidence. Its proof is case studies, many from the authors' own accelerator portfolio (Year One Labs) or from readers' guest posts: qidiq's response rate jumping from 10–25% to 70–90% after dropping sign-up, onboarding conversion going from 50% to 95%, and Airbnb's claim that professionally photographed listings got two to three times more bookings. These are self-reported before-and-after numbers and are subject to survivorship bias.
- The interview scoring weights and thresholds (a total of 25, later 31, depending on the version) are arbitrary and were openly presented by the authors as an experiment. They change between the blog and book versions. Use the idea of scoring and sorting, not the exact cut-offs.
- The OMTM idea is useful focus advice, but it conflicts with experimentation practice that calls for an overall evaluation criterion plus guardrails. Optimising a single metric invites Goodhart effects. The authors acknowledge the "squeeze toy" effect but give little on guardrails.
- The book's benchmark tables ("what's normal" for churn, conversion and virality) were not read here. They are 2012–2013 figures from varied sources. Don't use them as current targets; use `references/books/revenuecat-sosa-2026.md` and `references/data-driven/conversion-onboarding-activation-retention.md` instead.
- Some examples date the book: Orbitz showing Mac users pricier hotels, and optimisation software learning that "scantily clad women" raise clickthrough. The authors use these as warnings, but they show how little attention 2013 growth culture gave to ethics. "Running campaigns through time segments" was acknowledged in the draft as imprecise; prefer concurrent randomised cohorts.
- The free material includes a few statistical slips, such as using "regression analysis" to pick a button label. Use proper A/B testing and the power and peeking guidance in `references/data-driven/statistics-cheatsheet.md`.

## Disagreements with other references
- `references/data-driven/metrics-frameworks.md` (North Star, HEART, OEC, guardrails) and `references/books/trustworthy-online-controlled-experiments.md` prefer a durable north-star metric or OEC plus explicit guardrail metrics. Lean Analytics prefers a single, stage-specific metric that changes over time. Use the OMTM for focus in early discovery. Once you run experiments at scale, use an OEC with guardrails.
- `references/books/focusing-on-the-long-term.md` shows that short-term metric wins can hurt long-term outcomes. That is the same local-maximum warning as the "data-informed" chapter, but with real evidence. Trust it over anecdotes.
- `references/books/mom-test.md` and `references/books/continuous-discovery-habits-torres.md` agree that people lie in interviews. Lean Analytics adds quantitative scoring of interviews, which can make a small, biased sample feel precise. Use scores only to sort and spot segments, not as proof of demand.
- `references/books/shape-up.md` and `references/books/creative-selection-kocienda.md` rely on judgement and demos more than on metrics. Lean Analytics agrees that "humans are good at inspiration", so the books are compatible on the split between generating ideas (judgement) and validating them (data).

## Best quotes (< 25 words each, max 5)
- "Instincts are experiments. Data is proof." (sneak peek, ch. 3)
- "If you have a piece of data on which you cannot act, you're simply collecting it to stroke your own ego." (sneak peek, ch. 4)
- "Quantitative data is great for testing hypotheses, but it's lousy for generating new ones." (sneak peek, ch. 6)
- "The one that's most broken." (a CEO's answer to which metric matters most, quoted in "The One Metric That Matters")

## Related
- `references/data-driven/metrics-frameworks.md`, `references/data-driven/experimentation-playbook.md`, `references/data-driven/statistics-cheatsheet.md`
- `references/data-driven/conversion-onboarding-activation-retention.md`, `references/data-driven/conversion-paywalls-pricing-subscriptions.md`
- `references/books/mom-test.md`, `references/books/continuous-discovery-habits-torres.md`, `references/books/heart-framework.md`, `references/books/focusing-on-the-long-term.md`
- Books: Ries, *The Lean Startup*; Maurya, *Running Lean* (Lean Canvas); Blank, *The Four Steps to the Epiphany*

## Sources
- https://leananalyticsbook.com/wp-content/uploads/2012/09/Lean-Analytics-sneak-peek.pdf (official free draft of chs. 1–6, released by the authors for free distribution)
- https://leananalyticsbook.com/get-a-sneak-peek-at-lean-analytics-book/
- https://leananalyticsbook.com/one-metric-that-matters/
- https://leananalyticsbook.com/scoring-problem-interviews/
- https://leananalyticsbook.com/minimum-viable-feature-analysis/
- https://leananalyticsbook.com/feature-business-tension/
- https://leananalyticsbook.com/fast-boat-fast-river/
- https://leananalyticsbook.com/buyer-mindsets/
- https://leananalyticsbook.com/the-7-myths-of-lean-and-how-analytics-can-help/
- https://leananalyticsbook.com/lean-analytics-for-intrapreneurs/
- https://leananalyticsbook.com/introducing-lean-analytics/
- Guest posts on the official blog (readers applying the book; weaker evidence): https://leananalyticsbook.com/seven-onboarding-mistakes-you-dont-want-to-make/, https://leananalyticsbook.com/quantitative-interviews-the-importance-of-scoring-customer-feedback/, https://leananalyticsbook.com/how-lean-analytics-changed-our-beta-launch-strategy/, https://leananalyticsbook.com/the-lean-enterprise-experiment-canvas/, https://leananalyticsbook.com/guest-post-vanity-celebrations/
