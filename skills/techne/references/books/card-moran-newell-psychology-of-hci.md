---
title: "The Psychology of Human-Computer Interaction"
author: "Stuart K. Card, Thomas P. Moran, Allen Newell"
year: 1983
domains: [psychology, hci, task-time-modeling, motor-control, evaluation, engineering-models]
evidence: "strong"
basis: "author's free material, not the full book"
coverage: medium
---

# The Psychology of Human-Computer Interaction — Card, Moran & Newell

Use this when: comparing two interaction designs for expert speed before anything is built (keyboard shortcut vs menu, one dialog vs two, typing vs pointing); estimating how much time a flow costs a frequent user per day; arguing for removing a decision point or a hand switch between devices; deciding whether a lab study is worth running or a back-of-envelope model is enough.

Basis: the book (Erlbaum 1983; CRC reprint) is not free. These notes rest on what the authors themselves put out and is legally free: (1) the full Keystroke-Level Model paper (Card, Moran & Newell, Communications of the ACM 23(7), 1980), which the book reprints in revised form as its KLM chapter, read in full from the scan in Carnegie Mellon's Allen Newell archive; (2) Stuart Card's 2020 oral history for the Charles Babbage Institute / ACM SIGCHI (50 pages, University of Minnesota repository), in which he describes the research programme, the Model Human Processor, the mouse/Fitts studies, how the book was written, and its stance. The book's Model Human Processor chapter (processor cycle times, memory parameters, the "principles of operation"), the full GOMS text-editing studies and the later chapters are **not** read here and are known only through Card's account.

## The big idea (3 sentences)
Psychology can be an engineering science for interface design: instead of only running experiments after the fact, designers can *calculate* how long skilled users will take, using a small set of operators and constants, early enough to change the design. The book packages this as the Model Human Processor (a simplified human with perceptual, cognitive and motor processors and memories), GOMS (Goals, Operators, Methods, Selection rules) for describing skilled behaviour, and the Keystroke-Level Model (KLM) as the quickest usable tool. The models are deliberately approximate and limited to error-free expert performance on routine tasks, but within those limits they predict well enough to choose between designs.

## Core concepts
- **Unit task** — people split big jobs into small, quasi-independent tasks (because of working-memory limits). Each has an acquisition phase (figuring out what to do next: about 2–3 s when read from a marked-up page, 5–30 s when generated in your head) and an execution phase (rarely over 20 s). The KLM predicts execution only.
- **Prediction needs the method** — the same task can be done by many methods with very different times, so you predict time *given* a method, and assume experts pick the fastest method they know.
- **KLM operators** (1980 values) — K keystroke or button press (0.08 s best typist to 1.2 s unfamiliar; 0.20 s average skilled; 0.28 s average non-secretary; 0.50 s random letters; 0.75 s complex codes; Shift or Ctrl counts as its own K). P point with a mouse (1.1 s average; range 0.8–1.5 s; button press is a separate K). H home hands between keyboard and mouse (0.4 s). D draw line segments (a narrow, system-specific operator). M mental preparation (1.35 s). R(t) system response time, counted only when the user actually has to wait.
- **Rules for placing M** — put an M before every K that isn't part of a typed argument and before every P that selects a command; then delete it when the action is fully anticipated (point-then-click is one chunk), when keys belong to one cognitive unit (a typed command name), when a key is a redundant terminator, or when a key ends a fixed string. Mental time comes in chunks, not per keystroke.
- **Accuracy** — tested on 1,280 observed interactions (28 expert users, 10 systems, 14 tasks; 855 usable error-free instances): root-mean-square error 21% per unit task, falling to about 5–6% for a sequence of tasks, because independent errors average out.
- **Simpler shortcuts are worse** — counting keystrokes only: 49% RMS error; prorating mental time on all physical operations: 45%; one constant time per operator (about 0.43–0.49 s): 34%; full KLM: about 21%. The M operator is what makes it a psychological model rather than a physical count.
- **Uses** — calculated benchmarks (POET vs SOS vs DISPED editors: predicted ratios 100:84:45, observed 100:93:46), parametric analysis (time as a function of task variables such as "n words back"), and sensitivity analysis (checking whether a conclusion survives plausible ranges of uncertain parameters such as typing speed or chunk size).
- **Explicit restrictions** — expert users only, routine unit tasks only, method fully specified, error-free execution. Experts still spend up to a quarter of their time correcting errors, and the model says nothing about learning, recall, fatigue, errors or satisfaction.
- **Fitts's law in the KLM** — pointing time ≈ 0.8 + 0.1·log2(d/s + 0.5) s, simplified to a constant 1.1 s. Card's mouse studies (as he recounts them) found the mouse ran near the hand's own limit, about 10 bits/s, so no wrist-driven device would beat it by much; finger-driven designs could, and head-driven ones (about 5 bits/s) couldn't.
- **The research stance (oral history)** — "zero-parameter prediction" like engineering physics; "nothing drives theory like a good applied problem"; theory lets you replace a six-month experiment with a ten-minute Fitts slope measurement; and the book carried Newell's view that design, not evaluation, is where the action is.

## Actionable heuristics for product design
- When choosing between two interaction designs for a frequent task, write the method for each as K/P/H/M/R operators and sum them before building anything. A 21% per-task error is good enough to rank designs that differ by more than that; for closer calls, the model can't tell them apart (the paper itself treats a 7% difference as within noise).
- Count decisions, not clicks. Each M (about 1.35 s) costs more than several keystrokes or a pointing move. Remove choice points users don't need (smart defaults, carrying forward the last value, one obvious next step), because removing an M saves more time than shaving a click.
- Count hand switches. Each move between keyboard and mouse (H, 0.4 s) plus the re-pointing that follows adds up. For keyboard-heavy flows (forms, editors, spreadsheets, command palettes) keep the whole task completable without the mouse; for pointer-heavy flows, avoid forcing a trip back to the keyboard mid-task.
- Group actions into chunks users already think of as one unit (point-and-click, a named command, a value plus Enter), because mental preparation happens between chunks, not inside them. Splitting one logical action across two screens or two dialogs adds an M.
- Don't make users wait on response time where they would otherwise be thinking. A system delay that overlaps an M costs little; a delay after a fully anticipated action (a click that should feel instant) is pure waste. Type-ahead and optimistic UI remove R from the critical path.
- Before running a costly study of a pointing or input device, measure its Fitts slope or throughput on a simple two-target task; the theory says that is the parameter that matters.
- When estimating the daily cost of a flow for power users (support agents, operators, developers), multiply KLM time by frequency. Seconds per task times hundreds of tasks per day is the business case for a shortcut or a bulk action.
- Use the model only for what it covers: expert, routine, error-free execution. For first-time users, learnability, errors, recall or satisfaction, run a usability test or another method (`references/process/research-methods-selector.md`). A design that is fastest for experts can still fail novices.
- For touch, voice or AI-agent interfaces, don't reuse the 1980 constants blindly. Rebuild the operator set (tap, swipe, dictate, wait for agent, review output) and calibrate times on your own users; the structure of the analysis transfers better than the numbers.

## Worked example (from the 1980 paper)
Task: replace a 5-letter word one line below the previous edit, for an average skilled typist (K = 0.2 s).
- Line editor (POET): M K[linefeed], M K[S], 5K[new word], M K[return], 5K[old word], M K[return], K[return] → 4M + 15K = 8.4 s.
- Display editor with mouse (DISPED): H[mouse], P[word], K[select], H[keyboard], M K[R], 5K[new word], M K[esc] → 2M + 8K + 2H + 1P = 6.2 s.
- The mouse version wins despite two hand moves, because it removes two mental steps and seven keystrokes. Observed times in the experiment were 7.8 s and 5.7 s.
- Parametric version: for fixing a typo n words back, the paper finds erasing backwards is fastest up to about 5 words and select-and-replace beyond that, and shows a proposed "skip back" command would win from about 3 to 10 words, before anyone built it.

## Evidence & caveats
- The KLM paper is one of the best-validated models in HCI: independent operator estimates, a sizeable multi-system test, honest reporting of error and of the one parameter (M) fitted from the same data. Its approach (method-level task-time models, Fitts's law for pointing) has been replicated and extended for decades (CogTool, touch KLM variants) [strong for the approach].
- The specific constants are dated and context-bound: 1980 editors, CRT displays, a "mouse" with wheels, expert PARC staff. M = 1.35 s was estimated from this experiment, and its spread was large (SD about 1.1 s). Pointing constants vary by device and lab (see `references/books/mackenzie-hci-empirical.md` on 4× differences between published Fitts equations). Treat the numbers as orders of magnitude.
- Placing Ms is the hard, subjective part; the authors say their rules are rough and ambiguous in many cases, and that experts differ in what chunks they have.
- Card's oral history is a 2020 recollection, not a peer-reviewed source; specific anecdotes (Apple asking for the mouse results, the tapping experiment with Licklider, the menu separator going into an Apple product in an afternoon) are his account. The transcript gives the corrected motor constant as "700 ms", which looks like a transcription error for the Model Human Processor's commonly cited 70 ms; check the book before quoting it.
- Not verified here: the Model Human Processor's cycle-time and memory constants as stated in the book, its ten "principles of operation", and the full GOMS analyses. Commonly cited values (perceptual about 100 ms, cognitive about 70 ms, motor about 70 ms) come from secondary sources and are not confirmed by this file.

## Disagreements with other references
- `references/psychology/cognition-motor-control-and-timing.md` §5 already uses the KLM operators; it matches the 1980 paper (K 0.2 s average, P 1.1 s, M 1.35 s). This file adds the M-placement rules, the 21% error and the explicit restrictions; trust the paper's own limits over any wider use.
- `references/books/raskin-humane-interface.md` builds on GOMS keystroke-level analysis to argue for efficiency and fewer modes. Raskin's design conclusions go beyond what the model shows; the model measures expert time, not "humaneness".
- `references/books/nielsen-landauer-problem-discovery.md` and `references/books/usability-engineering-nielsen.md` favour cheap empirical testing. The KLM is complementary: use it to compare expert efficiency before building, and testing to find problems the model can't see (confusion, errors, learnability).
- The 1983 book predates the CHI emphasis on design methods; Card's own recollection is that the designer community and the modelling community were hard to keep together. Don't use a KLM result to overrule qualitative evidence about whether users understand a design.

## Best quotes (< 25 words each, max 5)
- "Scientific models do not eliminate the design problem, but only help the designer control the different aspects." (Card, Moran & Newell 1980)
- "Any new proposal must do better than the Keystroke-Level Model" (1980, on the model as a lower bound for HCI theories)
- "Nothing drives basic research like a good, applied problem." (Card, oral history 2020)
- "just follow a data path outward from the computer's central processor until you stumble across a human being." (Newell's line in the book, as quoted by Card, 2020)

## Related
- `references/psychology/cognition-motor-control-and-timing.md` (Fitts, KLM table, timing bands)
- `references/books/mackenzie-hci-empirical.md` (Fitts throughput, measurement discipline)
- `references/books/raskin-humane-interface.md` (GOMS-based efficiency arguments)
- `references/books/magical-number-4-cowan.md` (working-memory limits behind unit tasks and chunks)
- `references/psychology/cognition-memory-cognitive-load.md`
- Other: Card, English & Burr (1978) mouse vs joystick study; John & Kieras (1996) on GOMS family models; CogTool.

## Sources
- Card, Moran & Newell, "The Keystroke-Level Model for User Performance Time with Interactive Systems", Communications of the ACM 23(7), 396–410, July 1980; scan in the Allen Newell Papers, Carnegie Mellon University Libraries: https://iiif.library.cmu.edu/file/Newell_box00072_fld05094_doc0001/Newell_box00072_fld05094_doc0001.pdf
- Oral history interview with Stuart Card, conducted by Jeffrey Yost, 17 Feb 2020, Charles Babbage Institute (CBI 576), University of Minnesota Digital Conservancy: https://conservancy.umn.edu/items/c5d087d2-6f88-474a-98c5-4b90528bc100 (PDF: https://conservancy.umn.edu/server/api/core/bitstreams/d43c830a-a24e-4d40-99d9-17a1c35875b0/content; handle https://conservancy.umn.edu/handle/11299/218989)
- Not used (legality not confirmed, or not author-posted): Xerox PARC technical reports mirrored on bitsavers; a Stanford course copy of Card, English & Burr 1978.
