---
title: "Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems"
author: "Steve Krug"
year: 2010
domains: [process, research]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Rocket Surgery Made Easy — Steve Krug

Use this when: a team has no researcher and needs to start usability testing next week; planning a recurring lightweight test cadence; writing a facilitation script, observer handout or debrief agenda; deciding what to fix after a round of tests.

Basis note: built from what Krug and his publisher give away: the book's opening chapter ("Call me Ishmael", official excerpt), the full table of contents, and the companion files reprinted from the book (web and mobile test scripts, prep checklists, observer instructions with the "top three problems" sheet, hall monitor's guide, "things a therapist would say", consent form), plus the book page FAQ and a 2011 .net magazine interview in which Krug explains the method end to end. All read in full. The fixing chapters (10–13: debriefing, "the least you can do", the usual suspects, playing nicely with others) and remote-testing chapter are known only from the TOC and the interview, so their detailed examples are missing. `krug-dont-make-me-think.md` covers DMMT, which overlaps with this book's testing chapter; this file is about the testing method itself.

## The big idea (3 sentences)
Usability testing is the single most valuable thing a team can do to improve a product, and it rarely happens because people think it needs experts, labs and big budgets. Krug's answer is a deliberately simplified routine: one morning a month, three participants, think-aloud tasks, the whole team watching, and a same-day lunch debrief that picks the few most serious problems to fix before next month. The goal is not proof but insight plus action: find the worst problems early and fix them with the smallest change that works.

## Core concepts
- **Do-it-yourself (discount) testing** — small-sample, informal, qualitative testing for *finding and fixing* problems. Not for benchmarks, comparisons, statistics or safety-critical systems (Krug says those need large, rigorous studies).
- **A morning a month** — fixed recurring day; three sessions of about 50 minutes with breaks; debrief over lunch; done by early afternoon. A rhythm beats a big one-off study.
- **Three users** — enough to surface many of the most serious problems; by the fifth person you mostly see repeats. Krug admits the results are not statistically valid.
- **Test early** — the usual single consultant-run test near launch is the worst timing: deep problems are found when they can no longer be fixed. Test sketches, wireframes, prototypes, competitor sites.
- **Recruit loosely and grade on a curve** — the most serious problems are built into the design and hit almost anyone; target-audience match matters less than people think, especially at first. Adjust your interpretation for participants who differ from real users.
- **Test competitors' sites** — someone has built a full working prototype of your problem and left it out in the open; testing it also takes pressure off a first round.
- **The script** — welcome, "we're testing the site, not you", think aloud, consent to record, a few background questions, a home-page tour ("what strikes you, whose site, what can you do here?"), scenario tasks read aloud and handed on paper (often without search), observer questions, wrap-up.
- **Facilitator neutrality ("things a therapist would say")** — non-directive prompts ("What are you thinking?", "Is that what you expected?", "What would you do if I wasn't here?"), acknowledgment tokens, paraphrasing, narrating for observers; deflect requests for help until the end.
- **Make it a spectator sport** — the main payoff is team members watching real people struggle; observers note issues and each lists the top three problems after every session. Good snacks and lunch are a deliberate tactic.
- **Debrief and ruthless triage** — pool the observers' top threes, agree on the most serious problems, list resources needed, fix from the top until the month's capacity runs out, and do not get distracted by low-hanging fruit.
- **The least you can do** — prefer tweaks over redesigns: a small change that makes a problem stop being serious frees capacity to fix more of the list now, instead of waiting for "the redesign".
- **Checklists** — a three-weeks-to-test-day timeline (tasks, recruiting, rooms, incentives, pilot test, recording checks) so logistics never kill the round.
- **Remote testing** — screen sharing works fine for observers and widens recruiting; Krug advises facilitating a few sessions in person before facilitating remotely.

## Actionable heuristics for product design
- When a team has never tested, book a fixed monthly morning with three participants and a lunch debrief before you design anything else, because cadence and team viewing produce more change than one perfect study.
- When there is no product yet, test the competitor or the nearest analogue, then your sketch or wireframe, because early tests find deep problems while they are still cheap to fix.
- When recruiting stalls, widen the net (anyone who can plausibly use the product) for problem-finding rounds, and reserve tight screening for questions where domain knowledge changes behaviour (expert tools, regulated flows).
- When writing tasks, write scenarios with a goal and context, not instructions naming the UI ("You want to... "), pilot them once, and hand them on paper, because leading wording hides findability problems.
- When facilitating, read the script verbatim, say "we're testing the product, not you", ask for thinking aloud, and answer questions with questions; hold any help until the end, because coaching destroys the evidence.
- When a stakeholder doubts a problem, get them into the observation room; schedule tests on the same day each month and feed people, because watching is what changes minds.
- When the session ends, have every observer write their top three problems before discussing, then debrief the same day, because independent lists resist groupthink and fresh memory resists rationalising.
- When deciding what to fix, rank by severity, not ease; stop when this month's capacity is used; and choose the smallest change that defuses each problem, because tweaks ship now and redesigns slip.
- When a fix ships, test it in the next round, because "fixed" is a hypothesis too.
- When testing with AI features or agents, keep the same script but add a probe about expectations ("What do you expect it to do next?"), because mismatched mental models are the usual failure; record what the model actually output in each session.
- When you need a number (success rate, time on task, preference between designs), do not use this method; switch to a properly sized study (`quantifying-the-user-experience.md`) or an experiment.

## Evidence & caveats
- This is a practitioner's method, not research. Its claims ("it always works", "three users find most serious problems") rest on Krug's consulting and workshop experience and on Nielsen's discount-usability argument.
- The "few users" logic depends on problem frequency: common problems show up with three users; rare or segment-specific ones often don't. See the Nielsen–Landauer model and its critics in `references/process/research-methods-selector.md` (e.g. Spool & Schroeder found five users caught far fewer problems on complex sites).
- Think-aloud and lab settings change behaviour somewhat; tasks are artificial; participants try to please. Krug's script mitigates but does not remove this.
- "Recruit loosely" is good for generic usability problems and risky for specialised products, accessibility needs, or cultural and language differences; Krug's "grade on a curve" is a judgement call, not a rule.
- Krug openly says amateurs do worse than professionals and recommends hiring one when you can; his claim is that amateur testing is much better than none, which is plausible but anecdotal (he reports never receiving a credible case where amateur testing made something worse).
- The book (2010) assumes in-room observation and desktop web; the companion site adds mobile scripts, and remote moderated testing is now the norm.

## Disagreements with other references
- `references/process/research-methods-selector.md` says five users per distinct group for formative tests and never for rates. Krug uses three per monthly round. Both agree on "many small rounds"; for broad or segmented audiences, follow the selector and add users per segment.
- `krug-dont-make-me-think.md` covers the same testing advice in compressed form; use this file for the procedure and handouts, DMMT for design principles.
- `continuous-discovery-habits-torres.md` and `just-enough-research-hall.md` argue for a weekly habit and for interviews about needs; Krug's tests are evaluative (does the design work?), not generative (what should we build?). Use both, for different questions.
- `quantifying-the-user-experience.md` and the experimentation references dominate whenever the decision needs magnitude or confidence; Krug explicitly concedes this.

## Best quotes (< 25 words each, max 5)
- "Recruit loosely and grade on a curve." (maxim)
- "A morning a month, that's all we ask." (chapter title)
- "You need to focus ruthlessly on the most serious problems" (.net interview, 2011)
- "I'm trying to get people to think in terms of tweaking rather than redesigning" (.net interview, 2011)
- "Getting it done is far more important than doing it 'perfectly.'" (book page FAQ)

## Related
- `references/books/krug-dont-make-me-think.md`
- `references/process/research-methods-selector.md` (5-user debate, method choice), `references/process/heuristics-and-critique.md`
- `references/books/just-enough-research-hall.md`, `references/books/continuous-discovery-habits-torres.md`, `references/books/mom-test.md`
- `references/books/quantifying-the-user-experience.md` (when you need numbers)
- Nielsen, "Why You Only Need to Test with 5 Users" (2000); Dumas & Redish, *A Practical Guide to Usability Testing*; Rubin & Chisnell, *Handbook of Usability Testing*

## Sources
- Book page and FAQ: https://sensible.com/rocket-surgery-made-easy/
- Official sample chapter ("Call me Ishmael"): https://sensible.com/downloads/rsme-samplechapter.pdf
- Table of contents: https://sensible.com/downloads/rsme-toc.pdf
- Author's downloads page (scripts, checklists, observer and hall-monitor handouts, facilitator phrases, consent form, demo video link): https://sensible.com/download-files/
  - https://sensible.com/downloads/test-script-web.pdf
  - https://sensible.com/downloads/test-script-mobile-11-20.pdf
  - https://sensible.com/downloads/checklists.pdf
  - https://sensible.com/downloads/instructions-for-observers.pdf
  - https://sensible.com/downloads/hall-monitor-guide.pdf
  - https://sensible.com/downloads/things-a-therapist-would-say.pdf
  - https://sensible.com/downloads/permission-form.pdf
- Publisher page with TOC and demo video: https://www.informit.com/store/rocket-surgery-made-easy-the-do-it-yourself-guide-to-9780321657299 (video: https://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/videosampleclips/krug/RocketSurgeryMadeEasy_UsabilityDemo.mp4, not watched)
- Lindberg, O. (2011). "Steve Krug on DIY usability testing", .net magazine 215, republished by Creative Bloq: https://www.creativebloq.com/netmag/steve-krug-diy-usability-testing-6116958
