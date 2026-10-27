---
title: "Articulating Design Decisions (2nd ed.)"
author: "Tom Greever"
year: 2020
domains: [process, stakeholders, communication]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Articulating Design Decisions (2nd ed.) — Tom Greever

Use this when: you have to present a design to stakeholders who will push back (executives, a product owner who built v1, engineers, sales); a review meeting keeps getting derailed by side issues or the same objection; you need a design rationale written so that a non-designer would accept it.

Basis: the book (O'Reilly, 2015; 2nd ed. 2020) was not read. These notes rest on legally free material by Greever himself: **Chapter 4, "Reducing Cognitive Load"** of the 1st edition, republished in full by UXmatters with his permission (read in full); a long **UX Mastery podcast interview with full transcript** (2016) in which he answers practitioner questions using the book's tactics; and a **2023 written interview (The X-Mentor)** about Chapter 7 ("Choose a Message"), "appeal to a nobler motive" and earning a seat at the table. His site lists other talks and articles, but they were not reachable from here. So one chapter is covered in depth and the book's other key ideas only through his own summaries. Coverage is low. The 2nd edition's changes are not covered.

## The big idea (3 sentences)
A design that stakeholders don't approve never ships, so explaining a decision is part of the design work, arguably as important as the design itself, and how well a designer moves work forward is what separates a good designer from a great one. Treat stakeholders as users of your process: learn what each one cares about, cut the clutter from the conversation as you would from an interface, and frame every decision around the goal you share with them (the "nobler motive"), not your taste. This is a learnable, repeatable skill built from preparation, listening and rehearsed responses, not natural charisma.

## Core concepts
- **Communication outranks the artifact** — if you can't convince the people who oversee the project, they will override the decision or the design won't ship. A fluent but wrong salesperson wins over an inarticulate right designer.
- **Stakeholders are users** — apply UX methods to them: learn their goals, predict their behavior, reduce their cognitive load. Ch. 4 frames the meeting as a usability problem.
- **Reactions are predictable** — Greever's half-joking formula is personality + role/values + observed reactions ≈ predictable behavior. The detail-focused manager will ask about colors, the data-minded developer will ask for analytics, the executive will ask about conversion.
- **Remove distractions** — placeholder content and rough artifacts trigger off-topic debates. His examples: a stock photo of a competitor's store, an engine part that was being discontinued, lorem ipsum that a client tried to translate, a Google Maps screenshot when the client used another provider, misaligned wireframes, an ugly stock icon, Axure's sitemap panel that a client wanted as the real navigation. His rule: "Distractions should only happen once."
- **Anticipate reactions, in writing** — list the objections you expect, with who is likely to raise them and your planned reply.
- **Bring alternatives** — answer "why is this better than the alternative?" (one of the questions from Ch. 2) by bringing the options you rejected, and the one stakeholders asked for if they did. Present their version first if that's what they expect. Without prepared alternatives, people grab the first example they find on their phone.
- **Data in your pocket** — have analytics and research ready, but show them only when there is real disagreement, because data shown too early ends discussion.
- **Support network and "ringers"** — line up teammates and, more importantly, respected people outside your team who agree and will speak up. Do it openly, in one-on-ones before the meeting, because people rarely disagree publicly with an executive.
- **Dress rehearsal** — keep an agenda (printed), practice the meeting out loud, and brief your supporters for 5–10 minutes beforehand. In his words, rehearsal is the usability test of being articulate.
- **Mindset** (interview) — let go of control (the stakeholder owns the product), assume the best about difficult people (he suggests dropping the "HiPPO" label), and lead with a yes ("Yes, I agree we need to solve X…").
- **When someone stonewalls** — look for a hidden cause before calling them unreasonable: misread goals, recent changes, politics, or a simple misunderstanding (his client who misread what "carousel" meant).
- **Painting a duck** — the book's anecdote about a designer who added an obvious, removable element so a product owner who always needed one more change had something to cut. Greever tells it as a story, not as a recommended tactic (see caveats).
- **Choose a message (Ch. 7)** — the book gives four categories of rationale. The interview names the first as business goals: draw the line from the design decision to product metrics to the business goal, and say it out loud, because people don't keep goals in mind day to day.
- **Appeal to a nobler motive** — borrowed from Carnegie's *How to Win Friends and Influence People*: frame the decision around the goal you both want, usually a business goal you defined together.
- **Earn the seat by bringing work first** — nobody will invite design into strategy. Show up with a draft strategy or framework, which busy executives usually welcome as a starting point.

## Actionable heuristics for product design
- Before every design review, write three short lists: the decisions you need approved, the objections you expect (with names), and the reply plus the evidence for each. techne can generate this from the design and the attendee list.
- For each key decision, prepare the rationale as a chain from decision to user behavior to product metric to business goal ("Moving the plan picker above the fold should cut drop-off at step 2, which feeds trial-to-paid"). Say the chain out loud, because stakeholders rarely keep it in mind.
- Replace placeholder content that could distract with plausible, neutral, on-brand content: real product names, the client's own imagery, real copy for headlines and CTAs. Align wireframes neatly if anyone in the room cares about polish. Fix whatever caused a tangent before the next meeting.
- Hide tool chrome and irrelevant legacy UI in what you show (prototype sitemaps, old nav that annoys someone), so the discussion stays on the decision at hand.
- Bring the main alternatives you rejected, including the stakeholder's own suggestion, side by side with the reasons each lost. Comparing options you prepared beats debating ideas made up in the room.
- Keep data ready but don't open with it. Show it when there is real disagreement, so the room still feels free to raise concerns that might reveal a missing requirement.
- Line up one or two respected allies outside the design team in one-on-ones before a contentious review. Share the agenda and rationale and ask them openly to speak if a specific point is contested. Never stage fake enthusiasm.
- Start every reply to pushback with genuine agreement on the goal ("Yes, we need more sign-ups"). Then explain the decision or propose a test. This matches the "yes, and" template in `references/process/process-playbook.md` §8.
- When the same person blocks again and again despite good evidence, check for a misunderstanding first: re-show the options visually, ask what outcome they are protecting, and ask whether goals have changed. Only then treat it as politics.
- Rehearse high-stakes reviews out loud, with mock questions, before the meeting. Speaking your reasons often reveals reasons you hadn't made explicit, and weak ones.
- If research time is never granted, do small research anyway (30-minute interviews, analytics pulls), bring the findings to the next review, and block research days in the calendar as you would time off. Showing value earns budget.
- In portfolios and case studies, lead with the problem, the decision, the alternatives and the measured result, not glossy screens. Greever says he weighs this reasoning above visual polish when hiring.

## Evidence & caveats
- The book is practitioner advice from one consultant and design leader's experience. Its anecdotes are illustrative and selected, and no claim is tested. Treat it as craft knowledge, not evidence.
- Ch. 4 borrows "cognitive load" as a metaphor for meeting preparation. It is not a claim from cognitive load research, and `references/psychology/cognition-memory-cognitive-load.md` covers the actual construct.
- The interview cites psychology research suggesting that acting confident builds real confidence. This sits close to the power-posing literature, whose headline effects failed to replicate (Ranehill et al. 2015). Don't rely on faked confidence as a technique. Rehearsal is the better-supported route.
- The "ringer" and pre-meeting coalition tactics persuade through social proof, not argument quality. They can be manipulative if the allies don't really agree. Greever's own line is to ask openly and never deceive. techne should frame it as gathering informed, honest support.
- "Painting a duck" is a decoy tactic. Spending effort on a deliberate flaw to manage someone wastes time and erodes trust if discovered. techne should not recommend it. Use it only as a diagnostic: if you're tempted, the review process is broken.
- The goal-chain advice assumes metrics are clear. Greever himself admits linking design to numbers is often "fuzzy science", so state the expected direction and how you'll measure it, not invented figures.

## Disagreements with other references
- `references/process/process-playbook.md` §8 already summarizes Greever, including "three questions" (what problem does it solve, how does it affect the user, why is it better than the alternatives) and an evidence ladder. The free sources confirm only the third question directly, so treat the other two as plausible but unverified paraphrase. The evidence ladder is techne's synthesis, not Greever's.
- `references/data-driven/experimentation-playbook.md` would settle many disputes with a test. Greever puts persuasion and coalition-building first. When a decision is cheap to test and high-traffic, prefer the experiment. Use Greever's tactics to get agreement to run it, and for decisions that can't be tested.
- `references/books/aristotle-rhetoric.md`: Greever's nobler motive and audience analysis are applied ethos and pathos. Aristotle's preference for argument over crowd effects is a useful check on the ringer tactic.

## Best quotes (< 25 words each, max 5)
- "Distractions should only happen once." (Ch. 4)
- "Practicing for a meeting is the usability test of being articulate." (Ch. 4)
- "Where it goes off the rails is when we present Design exclusively in terms of why it's important to us." (X-Mentor interview, 2023)
- "All UX is articulating design decisions." (UX Mastery podcast, 2016)

## Related
- `references/process/process-playbook.md` (§8 stakeholder template), `references/process/heuristics-and-critique.md` (giving and receiving critique)
- `references/data-driven/decisions-from-data-examples.md`, `references/data-driven/metrics-frameworks.md` (building the decision-to-metric chain)
- `references/books/aristotle-rhetoric.md`, `references/psychology/behavior-persuasion-toolkit.md` (social proof behind ringers)
- Books: Connor & Irizarry, *Discussing Design* (Greever recommends it for critique); Carnegie, *How to Win Friends and Influence People*

## Sources
- Greever, T. (2015). Chapter 4, "Reducing Cognitive Load", *Articulating Design Decisions*, republished with the author's permission: https://www.uxmatters.com/mt/archives/2016/04/articulating-design-decisions.php (read in full; saved under books/free/articulating-design-decisions/)
- UX Mastery Podcast #10, "Design Decisions with Tom Greever" (2016), full transcript: https://uxmastery.com/ux-mastery-podcast-10-design-decisions-tom-greever/
- The X-Mentor, "Tom Greever on Design Value Conversations" (2023 interview): https://xmentor.substack.com/p/the-x-interviews-articulating-design
- Author's site, list of talks, articles and book resources: https://tomgreever.com/ and https://tomgreever.com/articulating-design-decisions-book/
- Listed but not reachable or not read: UX Booth articles "Great Designers are Great Communicators" and "Stakeholders are People Too"; UX Podcast #119 (audio only); conference talk videos linked from tomgreever.com.
