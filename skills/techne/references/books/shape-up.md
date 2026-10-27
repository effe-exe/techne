---
title: "Shape Up: Stop Running in Circles and Ship Work that Matters"
author: "Ryan Singer (Basecamp)"
year: 2019
domains: [process, product-management, scoping, design-engineering, planning]
evidence: "weak"
---

# Shape Up — Ryan Singer

Use this when: a raw request ("add a calendar", "redesign Files") needs to be turned into a bounded project; writing a pitch or brief for an L2–L4 task; deciding how much fidelity to give a team (breadboard vs fat-marker sketch vs mockup); a project keeps slipping and you need scope-cutting language, status without micromanagement, or a rule for when to stop.

Source: https://basecamp.com/shapeup (the free official web edition by Basecamp). Read in full: Foreword (Jason Fried), chapters 1–15, Conclusion, and Appendices 1–3 (implementing in Basecamp, adjusting to your size, how to begin), plus the glossary (~30,000 words). Figures were not viewable; their captions were read. The online edition includes post-2019 material (the HEY launch in July 2020 and the "Look Where You Are" new-product chapter).

## The big idea (3 sentences)
Basecamp ships by separating *shaping* (senior people privately turning a raw idea into a rough, solved and bounded concept sized to an "appetite") from *building* (a small designer + programmer team given the whole project, uninterrupted, for a fixed six-week cycle). Leadership places *bets* one cycle at a time from a handful of pitches, with no backlog, and a circuit breaker: a project that doesn't ship in its cycle is not extended by default, so the most you can lose is the appetite. Inside the cycle, teams discover tasks by doing real work, integrate one vertical slice early, organise work into "scopes", report uphill (unknown) vs downhill (known) status on hill charts, and hammer scope against the customer's baseline rather than an ideal.

## Core concepts
- **Target risk = not shipping.** The method explicitly does *not* address building the wrong thing (Singer points to *Competing Against Luck* for that). Fix shipping first, then improve discovery.
- **Appetite, not estimate.** "Estimates start with a design and end with a number. Appetites start with a number and end with a design." Small batch = 1 designer + 1–2 programmers for 1–2 weeks; big batch = the same team for six weeks. Fixed time, variable scope.
- **Shaped work is rough, solved and bounded.** Too concrete (wireframes) boxes designers in and hides complexity in estimates; too abstract ("build a calendar view") grows without limit.
- **Four shaping steps:** set boundaries (appetite + narrowed problem) → rough out the elements → address risks and rabbit holes → write the pitch.
- **Narrow the problem.** Ask *when* the customer wanted the feature, not what it should look like. The "calendar" request became "see free spaces" (Dot Grid: a 2-month read-only grid with dots plus an agenda list). A request for complex permissions became a one-day warning on the archive action instead of a six-week project.
- **Grab-bags.** "Redesign the Files section" or anything labelled "2.0" isn't a project. Restate it around one problem ("sharing multiple files takes too many steps") or split it into smaller ones.
- **Breadboarding.** Places (underlined), affordances (listed under them; interface copy counts as an affordance), connection lines. Words only, no layout.
- **Fat-marker sketches.** For problems that are inherently 2D: strokes so broad that detail is impossible.
- **Rabbit holes, patches, no-gos.** Walk the use case in slow motion; ask whether it needs new technical work, assumes how parts fit, assumes a design solution exists, or leaves a hard decision for the team. Patch holes by dictating a simple answer (e.g. leave completed to-dos as they were and append the group name). Declare cases out of bounds. Ask experts "is X possible in six weeks?", never "is X possible?".
- **Pitch** = problem (ideally one specific story), appetite, solution (embedded or annotated fat-marker sketches), rabbit holes, no-gos. It is posted asynchronously and commented on to poke holes, not to vote.
- **No backlog.** Default answer to a raw idea: "Interesting. Maybe some day." Departments keep their own lists; important ideas come back.
- **Betting table.** During cool-down, a few senior people (CEO, CTO, a senior programmer, the product strategist) pick from recent pitches in a meeting of 1–2 hours. There is no second approval step. Questions: does the problem matter, is the appetite right, is the solution attractive (screen real estate is a cost), is this the right time, are the right people available.
- **Cycles.** Six weeks of work, then two weeks of cool-down (bugs, exploration, planning). Two-week sprints were too short to finish anything and too costly in planning. Bet one cycle at a time; multi-cycle work is shaped as a six-week target that delivers something working.
- **Circuit breaker.** No automatic extension. A miss means the shaping was wrong: reshape it, then re-pitch.
- **Bugs.** Only crises interrupt (data loss, the app halting, many customers seeing the wrong thing). Everything else goes to cool-down, the betting table, or an annual "bug smash" cycle.
- **Building.** Assign projects, not tasks. Expect 2–3 days of quiet orientation. Imagined tasks give way to discovered tasks. Done means deployed, including QA. Docs and marketing can follow in cool-down.
- **Get one piece done.** Integrate one vertical slice (UI + code) in the first week. Choose it by being *core*, *small* and *novel*. Start in the middle (not at login), stub the rest, design with affordances before pixels, and program just enough for the next step.
- **Scopes.** Independent, nameable slices discovered after real work (end of week 1 or start of week 2), tracked as to-do lists. Signs they're right: you can see the whole project, conversations flow, new tasks have an obvious home. Signs they're wrong: "done" is hard to judge, names like "front-end" or "bugs", or a scope too big to finish soon. Layer cakes integrate UI and code together; icebergs (or upside-down icebergs) split UI from back-end, after questioning whether the complexity is necessary.
- **Hill charts.** Uphill = figuring out, downhill = executing. A dot that doesn't move is a raised hand. The history of updates shows what is stuck.
- **Deciding when to stop.** Compare down to the baseline (what customers do today), not up to the ideal. Scope grows like grass, and cutting scope is differentiation, not lower quality. QA (one person at Basecamp's size) hunts edge cases; their findings are nice-to-haves by default. Code review is optional teaching, not a gate.
- **Product phases.** New products run *R&D mode* (senior team spikes, no shipping expected), then *production mode* (normal shaping; "ship" = merge to main), then *cleanup mode* (no shaping, a free-for-all of must-haves, at most two cycles, final-cut decisions). HEY: about a year of R&D, about a year of production, two cleanup cycles, launched July 2020 with the feature set cut back.
- **Size-dependence.** Two or three people can drop cycles, pitches and betting tables but should still shape, set appetites and bet deliberately. Structure pays off once coordination starts eating time.

## Actionable heuristics for product design
- When a request arrives, don't say yes or no on first contact. Reply "interesting, maybe some day", then ask the requester *when* it came up and what they were doing, because the narrowed job ("see free spaces") is usually far smaller than the requested solution ("a calendar").
- When framing any L2+ task, state an appetite before designing (1–2 weeks or 6 weeks for a 1-designer + 1–2-programmer team) and let it pick the solution. If it can't fit six weeks, narrow the problem or carve off a meaningful six-week part.
- When the brief is "redesign X" or "X 2.0", refuse the grab-bag: rewrite it as one problem with one context, or split it into separately appetised projects.
- When exploring flows, breadboard in words (places / affordances / connections) and switch to fat-marker sketches only when the 2D arrangement *is* the problem. Don't hand wireframes to designers you want ideas from, because seniors' mockups get treated as direction.
- Before handing work to a team, run the rabbit-hole check: walk the use case step by step; list new tech, assumed integrations, assumed-but-unfound design solutions, and unmade hard decisions; then patch, cut or declare out of bounds. Mark nice-to-haves (e.g. color-coding groups) as cuttable from the start.
- When writing a brief or pitch, use the five ingredients (problem story, appetite, solution sketch, rabbit holes, no-gos), and add a note telling designers which parts of any sketch they may ignore.
- When asking engineers about feasibility, ask "is this possible in N weeks?" and say you're hunting for time bombs.
- When a team starts, don't ask for status during the first few days of orientation. If there's still silence after **3 days**, check in.
- When building, finish one core, small, novel slice end-to-end in the first week (raw HTML affordances wired to real data), because a clickable slice retires more risk than many half-done layers. "First make it work, then make it beautiful."
- When organising tasks, group them by structure (scopes that can be finished independently), not by person or discipline. If the "chowder" list of loose tasks grows past **3–5 items**, a scope is missing.
- When reporting status, place each scope on a hill: the first third uphill is "I've thought about it", the second "I've validated the approach", the top "built enough that no unknowns remain". Push the scariest unknowns uphill first; leave routine work (an email template) for last.
- When a scope sits still on the hill, check whether it's really two or three scopes (Notify = email design + delivery + in-app display) before assuming the team is stuck.
- When a "wouldn't it be better if…" or a new edge case appears, ask: must-have? can we ship without it? new or pre-existing problem? how likely is it, who sees it, what's the impact, and is it our intended audience? Prefix nice-to-haves with `~`.
- When judging "good enough", compare to the customer's current workaround, not to the ideal design.
- When a project overruns, extend it (by about two weeks at most) only if every remaining task is a true must-have *and* downhill. Any uphill work at the deadline means reshaping, not extending.
- When a launch triggers "change it back!" feedback, give it a few days to settle, and treat the requests as raw ideas to shape for a later cycle rather than promising fixes (staying "debt-free").
- When building a new product, label the phase. In R&D, senior people build and you expect spikes, not ships. Don't delegate until the load-bearing architecture and UI patterns exist. Cap cleanup at two cycles.
- When on a 2–3 person team, keep the thinking (appetite, shaping, deliberate bets) and drop the ceremony (cycles, pitches, betting table).
- When adopting the method, start with one six-week experiment: one well-shaped project, one designer and two programmers, guaranteed no interruptions, and push for "get one piece done" before introducing scopes and hill charts.

## Evidence & caveats
- This is one company's account of its own process (Basecamp, ~50 people, ~12 on product, millions of users). There are no measurements, comparisons or failure rates beyond anecdotes (the abandoned client-projects home screen, the "Files 2.0" mess). [weak/anecdotal; widely adopted but unevaluated]
- It deliberately leaves out discovery and validation. Nothing in the method checks whether a shipped bet moved a metric; bets are judged by the betting table's taste and context. Pair it with an experiment or measurement plan.
- The model assumes senior shapers who are design-led, technically literate and trusted; a CEO who is "the last word on product"; and teams that can work without cross-team dependencies. Large organisations with platform dependencies, regulated release trains or shared roadmaps will struggle with the circuit breaker and "no backlog".
- "Most bugs can wait six weeks" depends on Basecamp having separate SIP, Ops and technical Support teams that absorb interrupts. Without them, cycles get interrupted anyway.
- Shaping is described as private and closed-door. That is fast, but it concentrates judgement in a few senior people and can exclude researchers and junior designers. Make the pitch's problem story evidence-based to compensate.
- The six-week number came from Basecamp's experimentation, not from any general law. Singer says your time frame may differ, but the principles (deliberate bets, capped downside) hold.
- Dated parts: Basecamp-specific tooling (the appendix is partly product marketing for Basecamp). The core ideas haven't dated.

## Disagreements with other references
- `references/process/process-playbook.md` §2.4 summarises the method accurately but says not to use it in "heavily experiment-driven orgs where scope is set by test results". Singer would partly agree (it doesn't address discovery) but doesn't see it as a conflict: shape the bet, then measure it. techne's position: use appetite, shaping and scope hammering for *how much* to build; use the experimentation references (`references/data-driven/experimentation-playbook.md`) for *whether it worked*.
- SKILL.md §1 and `references/process/process-playbook.md` start with evidence and discovery ("one-way doors: discovery first"). Shape Up says "fix shipping first" and leaves discovery out. Trust techne's ordering for one-way doors and new products, and Shape Up's ordering when a team's real failure is never finishing.
- SKILL.md §2 says a design isn't done until every state is designed or marked N/A. Shape Up's "compare to baseline" and "QA findings are nice-to-haves by default" can be read as permission to skip states. Reconcile them: error, empty, loading and accessibility states are must-haves (part of basic quality, which Singer says the team owns); edge-case polish is what gets hammered.
- `references/process/redesign-and-scale.md` asks for cohorting, holdbacks and abort criteria on big redesigns. Shape Up's "let the storm pass" only advises patience with change-averse feedback. Use the redesign file to tell real regressions from change aversion, instead of waiting it out blindly.
- `references/books/atomic-design.md` (Frost) and Shape Up agree on rough-first fidelity and getting into the real medium early (Frost's "deciding in the browser" ≈ Singer's "affordances before pixel-perfect screens").

## Best quotes (< 25 words each, max 5)
- "Estimates start with a design and end with a number. Appetites start with a number and end with a design."
- "Our default response to any idea that comes up should be: 'Interesting. Maybe some day.'"
- "In software, everything is possible but nothing is free."
- "First make it work, then make it beautiful."
- "Make scope cuts by comparing down to baseline instead of up to some perfect ideal"

## Related
- `references/process/process-playbook.md` (§2.4 Shape Up summary and breadboard notation; §5 fidelity), `references/process/states-and-edge-cases.md`, `references/process/redesign-and-scale.md`, `references/data-driven/experimentation-playbook.md`, `references/data-driven/metrics-frameworks.md`
- `references/books/atomic-design.md`, `references/books/dribbblisation-of-design.md` (another Basecamp/Intercom-era argument for problem-first design)
- Clayton Christensen et al., *Competing Against Luck* (recommended by Singer for the "build the right thing" risk).
