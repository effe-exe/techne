---
title: "Designing with the Mind in Mind (3rd ed.)"
author: "Jeff Johnson"
year: 2020
domains: [psychology, interaction, accessibility]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: low
---

# Designing with the Mind in Mind (3rd ed.) — Jeff Johnson

Use this when: you need to explain *why* a UI guideline holds (so you can judge when it applies and how to trade it off against another one); you are designing destructive actions, confirmations, modes, undo or voice-input error handling; you are reviewing a flow for the errors users are likely to make.

Basis: the book (Morgan Kaufmann/Elsevier, 2020) was not read. These notes rest on three legal sources by Johnson: **Chapter 15, "We Make Errors"**, the 3rd edition's new chapter, republished in full by UXmatters as an authorized sample (read in full); his **2012 UXmatters interview** about the 1st edition; and the outline of his **HCI International 2026 course** based on the 3rd edition, which lists each chapter's core claim. The book's chapter list comes from the publisher's page. Coverage is low: one chapter in full, the rest only as chapter-level claims. For perception, attention, memory, Fitts's law and timing, rely on techne's own psychology files, which cover the same science from primary sources.

## The big idea (3 sentences)
UI design guidelines aren't arbitrary rules. They follow from how human perception and cognition work, and designers who understand the psychology can judge when a guideline applies, which wins when two conflict, and how to explain the choice. The book walks through that psychology in chapter-sized claims: perception is biased, vision looks for structure, color and peripheral vision are limited, reading is unnatural, attention and memory are limited, recognition is easier than recall, learned actions are easy while problem solving is hard, decisions are rarely rational, hand-eye coordination follows laws (Fitts, steering), people have time requirements, and people make errors. Good design expects those limits and errors instead of blaming users for them.

## Core concepts
- **Chapter claims (3rd ed.):**
  1. Our perception is biased (by experience, context and goals).
  2. Our vision is optimized to see structure (Gestalt).
  3. We seek and use visual structure.
  4. Our color vision is limited.
  5. Our peripheral vision is poor (visual search is linear unless a target "pops").
  6. Reading is unnatural.
  7. Our attention is limited and our memory is imperfect.
  8. Limits on attention shape thought and action (e.g. change blindness).
  9. Recognition is easy; recall is hard.
  10. Learning from experience and performing learned actions are easy; problem solving and calculation are hard (System 1 / System 2).
  11. Many factors affect learning.
  12. Human decision-making is rarely rational.
  13. Our hand-eye coordination follows laws.
  14. We have time requirements.
  15. We make errors.
- **New in the 3rd edition** — persuasion, cognitive economics and decision making, emotion, trust, habit formation and speech UIs.
- **The 1% fovea** (interview) — only about 1% of the visual field is high resolution. The other 99% mostly detects motion and irregularities to steer the eyes. Anything users don't look at directly goes unseen, which is why brief motion (a shaking field) is used to draw attention to errors.
- **Vocabulary affects learning** (interview, Ch. 11) — inconsistent, unfamiliar or goal-unrelated terminology makes software harder to learn.
- **"I'm in a hurry, so I'll do it the long way"** (interview) — people stick with a slow method they know rather than learn a faster one. An expert path that fails once may never get a second try.
- **Mistakes vs slips** (Ch. 15, after Norman) — *mistakes* are errors of intention: a wrong choice made from a faulty mental model or missing information, visible only through feedback afterwards. *Slips* are unintended actions. The same act (Reply All) can be either.
- **Eight slip types** (Ch. 15):
  - *capture*: a more practiced sequence takes over, e.g. clicking "Yes, close without saving" on autopilot;
  - *description*: right action on the wrong object, e.g. two-finger swipe zooming instead of scrolling in Google Maps;
  - *data-driven*: outside information hijacks attention (flashing ads, the Stroop effect);
  - *loss of activation*: the goal falls out of working memory;
  - *closure*: the last step is dropped once the main goal is met (leaving the original on the copier, not submitting a form);
  - *mode*: right action, wrong system state;
  - *attention*: missing a key detail, e.g. a price per person, not per room;
  - *motor*: fingers or voice miss.
- **Hawaii missile alert (2018)** — drill and live alerts had the same UI and confirmation, and one person could both issue and confirm. A design that invites slips turns an operator's error into a disaster. The regulator (the FCC) criticized exactly those two points.
- **Habituated confirmations stop working** — when "OK" is usually correct, confirming becomes automatic (System 1) and is itself a capture slip.
- **Voice misrecognition is the system's error, not the user's** — speech UIs should use confidence thresholds: ask again when confidence is low, read back the interpretation when it's high.

## Actionable heuristics for product design
- Prevent **mistakes** by giving accurate, comparable information before the decision. Flight-search-style comparison tables, data visualization and clear totals ("price per room, 2 guests") beat warnings after the fact.
- Prevent **capture slips** by making the paths for dangerous and routine tasks look and feel different. Never let a drill/test mode share the exact UI and confirmation wording of the live action. Give different operations no shared steps where possible.
- Prevent **description slips** by keeping gestures and commands consistent across objects. Where an area truly behaves differently (a map in a scrolling page), mark it clearly or require activation first.
- Prevent **data-driven slips** in critical flows by removing distractions (ads, promos, unrelated links) from checkout, sign-up and setup. Use a process funnel that keeps people on the path to their goal.
- Prevent **loss-of-activation slips** with visible progress, saved drafts and reminders of what the user came to do, especially after interruptions or deep links.
- Prevent **closure slips** by warning about incomplete tasks ("You haven't submitted — submit now?", "Attachment mentioned but not attached"), or by finishing them automatically (auto-logout on shared devices, autosave).
- Prevent **mode slips**: show the current mode clearly and strongly, return to the normal mode after a timeout (Johnson suggests more than about 10 seconds, roughly one unit task) or on re-entry, prefer spring-loaded modes (held, like Shift) and avoid modes where you can. Separate controls for every function bring their own description slips, so it's a trade-off.
- Prevent **attention slips** by putting the decisive detail at the top of the visual hierarchy (pop-out, motion, haptic) and by blocking nonsensical input: don't let a return date precede departure and then scold the user.
- Prevent **motor slips** with large targets, generous spacing, clickable labels and icons together, simple alternatives to complex gestures (buttons for pinch-zoom), and no multilevel pull-right menus.
- Support recovery: make actions two-way (trash before permanent delete, cancel windows on orders and bookings), provide multi-step UNDO across edits, moves and deletions, and let voice UIs "undo" the last command.
- Make dangerous operations harder in proportion to their cost. Default the confirmation to Cancel, add a deliberate extra step for mass deletes, and for mission-critical actions require a second person (initiator plus approver), as with large purchases or public alerts.
- Don't rely on routine confirmation dialogs alone, because users habituate. Use them rarely, make them specific about consequences, and prefer undo over confirmation for reversible actions.
- For voice and AI input, treat misrecognition as a system error. Below the confidence threshold, ask to repeat or rephrase. Above it, read back the interpretation before acting on anything consequential.
- When adding a faster expert path (shortcuts, automation), keep the slow familiar path working and make the fast one forgiving on first use, because users who fail once go back to "the long way".

## Evidence & caveats
- The slip taxonomy comes from Norman (1983) and is a descriptive classification from cases and diary-style observation. It is very useful for design, but it is not a set of measured effect sizes. Johnson's guidelines are expert derivations from it.
- The 10-second mode timeout is Johnson's own heuristic (from his 1990 paper), tied to an "average unit task duration". It is a rule of thumb, not a tested threshold. Tune it to the task.
- "1% of the visual field is high resolution" is a loose figure. The fovea covers about 1–2° of visual angle (`references/psychology/cognition-cheatsheet.md`). The design implication (users miss what they don't fixate) is well supported.
- The 3rd edition's System 1/System 2 framing follows Kahneman. Parts of the priming and ego-depletion literature that popular System 1 accounts lean on did not replicate. The core dual-process distinction (automatic vs effortful processing) is robust, but don't cite specific priming effects from it. I couldn't check how the book handles persuasion and habit (new chapters).
- The rest of the book's science (Gestalt, color vision, Fitts and steering laws, response-time requirements) is mainstream HCI with strong support. My coverage of how Johnson presents it is from chapter titles only.

## Disagreements with other references
- `references/psychology/cognition-memory-cognitive-load.md`, `references/psychology/cognition-perception-attention-reading.md` and `references/psychology/cognition-motor-control-and-timing.md` cover Johnson's chapters 1–14 from primary sources with evidence tags. Use those files for numbers. This file adds the error chapter.
- `references/process/states-and-edge-cases.md` covers error states and messages. Johnson's slip taxonomy is the prevention layer in front of it: classify the likely slip first, then design the state.
- `references/books/designing-interfaces-tidwell.md` (Reality Check, Go Back One Step) and `references/books/human-centered-ai-shneiderman.md` (interlocks, reversible actions) point the same way. Shneiderman's two-person and interlock examples match Johnson's mission-critical guidance.
- Johnson's "Prompt users to confirm actions" for capture slips seems to clash with his own warning that habituated confirmations fail. Resolve it as he does: confirm rarely, default to Cancel, add a deliberate extra step, and prefer undo.

## Best quotes (< 25 words each, max 5)
- "In engineering terms, we say mistakes can be detected only with feedback." (Ch. 15)
- "The user did not make an error. The system made the error." (Ch. 15, on voice misrecognition)
- "I'm in a hurry, so I'll do it the long way." (usability-test participant, quoted in the 2012 interview)

## Related
- `references/psychology/cognition-cheatsheet.md`, `references/psychology/cognition-memory-cognitive-load.md`, `references/psychology/cognition-perception-attention-reading.md`, `references/psychology/cognition-motor-control-and-timing.md`
- `references/process/states-and-edge-cases.md`, `references/process/heuristics-and-critique.md`
- `references/books/parhi-thumb-target-size.md` (motor slips, target size)
- Books: Don Norman, *The Design of Everyday Things*; Johnson & Henderson, *Conceptual Models*; Johnson & Finn, *Designing User Interfaces for an Aging Population*

## Sources
- Johnson, J. (2020). Chapter 15, "We Make Errors", *Designing with the Mind in Mind*, 3rd ed., authorized sample chapter: https://www.uxmatters.com/mt/archives/2020/11/designing-with-the-mind-in-mind-1.php (read in full; saved under books/free/designing-with-the-mind-in-mind/)
- Mausser, K. (2012). "Designing with the Mind in Mind: An Interview with Jeff Johnson", UXmatters: https://www.uxmatters.com/mt/archives/2012/02/designing-with-the-mind-in-mind-an-interview-with-jeff-johnson.php
- Johnson, J. HCI International 2026 course C08 outline, based on the 3rd edition: https://2026.hci.international/C08.html
- Publisher page (description, new topics, TOC): https://shop.elsevier.com/books/designing-with-the-mind-in-mind/johnson/978-0-12-818202-4
- Not reachable: uiwizards.com (author's consultancy site, expired TLS certificate; not bypassed). Authors@Google talks (2013, 2017) exist on YouTube but no transcript was obtained.
