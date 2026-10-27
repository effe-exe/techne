---
title: "The Design of Everyday Things (Revised and Expanded Edition)"
author: "Don Norman"
year: 2013
domains: [interaction, psychology, human-centered-design, errors, masters]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# The Design of Everyday Things (Revised and Expanded Edition) — Don Norman

Use this when: users don't know where to tap, what something does, or whether their action worked; you are diagnosing "user error" and need to find the design cause; you are arguing about "affordances" in a critique; you are organizing features by logical category and wondering why the flow feels clumsy; you are choosing whether to follow a platform convention or invent a new interaction (including gestures).

Basis: the book was not read. These notes rest on Norman's own free writing on jnd.org: the revised edition's preface (which summarizes every chapter and what changed), and his essays and ACM *Interactions* columns that the book draws on or that extend it: "Signifiers, not affordances" (2008), "Affordances and Design", "Affordance, Conventions and Design" (1999), "Natural User Interfaces Are Not Natural" (2010), "Logic Versus Usage: The Case for Activity-Centered Design" (2006), "Human-Centered Design Considered Harmful" (2005), "Human Error? No, Bad Design" (2014), "Error Messages Are Evil" (2014), "The Four Fundamental Principles of Human-Centered Design", and the summary of his 1990 automation paper. Covered well: signifiers vs affordances, constraints and conventions, conceptual models, feedback, human error and design, activity-centered design, HCD process. Covered only as headlines: the seven stages of action and gulfs (Ch. 2), knowledge in the head vs the world and natural mappings (Ch. 3), forcing functions, the full slip/mistake taxonomy (Ch. 5), and the business chapter (Ch. 7).

## The big idea (3 sentences)
When people struggle with everyday things, the fault is usually the design, not the person: good design makes possible actions discoverable and outcomes understandable through signifiers, constraints, mappings, feedback and a coherent conceptual model. Because the psychology of people stays the same while technology changes, these principles last even as examples date, and errors should be treated as signals of design flaws, not as "human error" to punish. Designing well means observing real activity, solving the root problem rather than the symptom, and iterating with prototypes, while accepting that real products are shaped by schedules, budgets and business.

## Core concepts
- **Discoverability and understanding** — the two goals: can people figure out what actions are possible, and what the product is and how to use it?
- **Affordance (Gibson's sense)** — a relationship between an agent and the world: what actions are possible, whether or not visible. Norman admits that his 1988 use meant "perceived affordance".
- **Signifier** — any perceivable cue, deliberate or accidental, that signals what can be done and where; the main addition to Ch. 1 in the 2013 edition. Designers provide signifiers; on screens they mostly can't change real affordances (every pixel can be clicked).
- **Social signifiers** — traces of other people's behavior (a crowded or empty platform, desire paths, the bookmark's position, scrollbar thumb, "read wear").
- **Feedback vs affordance** — a cursor or highlight isn't an affordance; it is feedback that advertises one. Affordance, perceived affordance and feedback can each be designed separately.
- **Constraints** — physical (impossible actions), logical (reasoning shows what is left, e.g. one missing item means scroll), cultural (learned conventions such as the scrollbar). Forcing functions in the revised edition split into lock-in and lock-out (headline only).
- **Conventions are real constraints** — slow to form, slow to die; violating them (non-QWERTY, reversed scrolling, double-click links) usually fails even when the new way is "better". Standards matter more than optimality.
- **Four ways to teach a new screen** — follow conventions; use words; use metaphor (with care; Norman thinks metaphors do more harm than good); follow one coherent conceptual model so learning one part teaches the rest.
- **Conceptual model** — the most important and hardest part of design; everything else should be consistent with it. Models can be simplified, they only need to be good enough to guide action; a wrong model is worse than none.
- **Seven stages of action and three levels of processing** — Ch. 2's model of acting and evaluating, now tied to visceral, behavioral and reflective levels and to emotions at each stage (described in the preface; detail not in these sources).
- **Natural mapping and culture** — Ch. 3 adds that what feels "natural" differs between cultures (e.g. how time is laid out spatially).
- **Human error is usually design error** — when over 90% of accidents are blamed on people, the cause is systemic (Norman's ferry crash example: a subtle mode indicator caused a mode error). Slips (action-based and memory lapses) vs mistakes (rule-based, knowledge-based, memory lapses) map onto the stages of action; resilience engineering is the recommended approach.
- **Modes** — a common cause of error; avoid them, and if unavoidable, make the mode status obvious.
- **Error messages should collaborate** — tell requirements before input, keep the user's work, explain and offer the fix in place.
- **Automation's real problem** — not "too much automation" but too little feedback and interaction; mid-level automation handles normal cases silently, then hands abnormal ones to unprepared people.
- **Activity-centered design (taskonomy vs taxonomy)** — organize for how an activity flows (blacksmith keeps hammer by the anvil), not only by logical category (hardware store). Provide both: taxonomy for finding, taskonomy once an activity begins.
- **HCD process** — double diamond (find the right problem, then the right solution); observe, ideate, prototype, test; Norman's four principles: root problems not symptoms, people-centered, systems/activity view, rapid iteration with the intended people.
- **Norman's law and business reality** — a product team is already late and over budget on the day it is formed; featuritis; incremental innovation is common and HCD suits it; radical innovation is rare and slow.
- **"Natural" interfaces are not natural** — gestures lack visibility, feedback and a trace; they need conventions, undo, guides and standards like any other interface.

## Actionable heuristics for product design
- When a critique says something "has an affordance" on screen, rephrase it as "does the user perceive that this is actionable and what it will do?", and fix the signifier (container, label, icon, cursor, convention), because on screens nearly everything is clickable; what users lack is the cue.
- When an action is possible but unseen (swipe to delete, long-press menus, hidden gestures), add a visible signifier or a visible alternative path, because gestures without signifiers are undiscoverable and leave no feedback trail.
- When you introduce a gesture, pair it with feedback during and after (momentum with friction, visible state), an undo, and a non-gesture route for critical actions, because gestures are ambiguous and easy to trigger by accident.
- When you are tempted to invent a new control or reverse a convention, keep the convention unless the gain is large and you can measure the learning cost, because established conventions act as real constraints on users.
- When a screen has many parts, write down its conceptual model in one sentence (what the objects are, what actions apply to them) and check that every label, icon and behavior fits it, because a coherent model lets learning one part teach the rest.
- When users must find something you can't show at once, use logical constraints (e.g. "Step 2 of 4", a partly visible next card, counts) so they can infer what's missing, because people reason from visible structure.
- When a design requires a mode (edit mode, recording, a filter that changes everything), make the mode loud and persistent and provide an obvious exit, because mode errors are among the most common and dangerous slips.
- When an incident is attributed to "user error", ask "why?" until you reach the design or process cause (subtle indicators, missing feedback, interruptions, conflicting procedures), then fix that, because blaming the last person leaves the trap for the next one.
- When validating input, show the rules before the user types, accept common formats, and on failure keep the input and explain the fix in place, because error messages that scold and discard work punish people for not behaving like machines.
- When an error is unavoidable, put the remedy (and a one-click action if possible) inside the message, because a message that only names the problem leaves people stuck.
- When automating part of a task, keep the person informed of what the automation is doing and give early warning before it hands control back, because silent automation fails exactly when people need context (see `references/future/human-ai-trust-errors-uncertainty-oversight.md`).
- When an information architecture is organized by category (card sort output), check it against the main activities and add activity-based shortcuts (related actions, "next step", items used together), because logical grouping suits finding while activity grouping suits doing.
- When a post-action menu hides the obvious next steps (share, save, delete after a photo), surface those steps directly, because activity-centered design beats taxonomic menus for in-flow actions (Norman's Palm vs Windows Mobile comparison).
- When starting a project, spend the first diamond on the problem (observation, asking "why?" at each issue) before generating solutions, because the stated problem is often a symptom.
- When testing a prototype, test with the intended users doing real activities, and let decision-makers observe rather than participate, because stakeholders acting as testers skew the results.
- When designing for cultures beyond your own, test spatial mappings (time direction, reading order, gesture meanings) instead of assuming they are natural, because "natural" mappings are often cultural.
- When you need to show what others are doing (activity, popularity, recency), consider social signifiers (presence, wear, counts, trails), because people read others' traces to decide how to act; use them honestly (see `references/psychology/behavior-ethics-dark-patterns.md` on fake social proof).

## Evidence & caveats
- The principles rest on decades of cognitive psychology and human factors (Gibson, Reason's error research, Norman's own lab work) and are widely accepted as foundations; but the book is an argued synthesis with examples, not a set of experiments. Treat specific claims (e.g. "over 90% of accidents blamed on human error") as illustrative.
- The essays used here range from 1990 to 2019; the 2005 "HCD considered harmful" column is deliberately provocative and Norman later published a clarification. His 2023 book *Design for a Better World* moves further toward "humanity-centered" design.
- Norman's "words are understood more quickly than graphics; words plus graphics best" and "metaphors do more harm than good" are expert opinion in these essays, not demonstrated there.
- The seven-stage model, gulfs of execution/evaluation and the full error taxonomy are summarized in techne from secondary knowledge (`references/masters/master-lenses.md`, `references/process/heuristics-and-critique.md`); these notes could not verify the 2013 wording.
- Several essays note ACM copyright with permission for personal, non-commercial use; these notes paraphrase rather than reproduce them.

## Disagreements with other references
- `references/interaction/microinteractions-and-motion.md` §2 attributes "gulf of execution/evaluation" to Norman & Draper (1986) and defines signifiers as in the 2013 book; these notes agree and add that Norman calls cursors and highlights feedback, not affordances.
- `references/books/magic-ink.md` (Victor) argues against interaction and standard widgets in information software; Norman argues for conventions and visible controls. Both agree on feedback and visible state. Prefer convention for controls and Victor's inference for default content.
- `references/masters/timeless-principles.md` (convention vs invention) matches Norman. Norman's essay on HCD shows a tension with "know your user" dogma: activity understanding can matter more than user research for widely used tools. Use activity analysis plus testing, not one or the other.
- `references/books/mom-test.md` and Norman both favor observing real behavior over opinions; Norman adds that observation should happen in people's normal environment, not only in test labs.

## Best quotes (< 25 words each, max 5)
- "Forget affordances: what people need, and what design must provide, are signifiers." ("Signifiers, not affordances", 2008)
- "Don't speculate. Don't argue. Observe." ("Affordance, Conventions and Design", 1999)
- "Error messages punish people for not behaving like machines." ("Error Messages Are Evil", 2014)
- "Are natural user interfaces natural? No. But they will be useful." (*Interactions*, 2010)
- "Standards are more important than optimization." ("Natural User Interfaces Are Not Natural", 2010)

## Related
- `references/masters/master-lenses.md` (Norman lens), `references/masters/timeless-principles.md` §6
- `references/process/heuristics-and-critique.md` (H5 slips vs mistakes), `references/process/states-and-edge-cases.md`
- `references/interaction/microinteractions-and-motion.md` §2, `references/interaction/platform-conventions.md`
- `references/books/microinteractions-saffer.md` (Norman's foreword), `references/books/magic-ink.md`
- Norman, *Emotional Design* (2004), *Living with Complexity* (2010), *The Design of Future Things* (2007); Reason, *Human Error* (1990).

## Sources
- Preface to the revised edition (chapter-by-chapter changes): https://jnd.org/preface-design-of-everyday-things-revised-edition/
- "Signifiers, not affordances" (ACM *Interactions* 15(6), 2008): https://jnd.org/signifiers-not-affordances/
- "Affordances and Design": https://jnd.org/affordances-and-design/
- "Affordance, Conventions and Design (Part 2)" (*Interactions*, May 1999): https://jnd.org/affordance-conventions-and-design-part-2/
- "Natural User Interfaces Are Not Natural" (*Interactions* 17(3), 2010): https://jnd.org/natural-user-interfaces-are-not-natural/
- "Logic Versus Usage: The Case for Activity-Centered Design" (*Interactions* 13(6), 2006): https://jnd.org/logic-versus-usage-the-case-for-activity-centered-design/
- "Human-Centered Design Considered Harmful" (*Interactions* 12(4), 2005): https://jnd.org/human-centered-design-considered-harmful/
- "Human Error? No, Bad Design" (2014): https://jnd.org/human-error-no-bad-design/
- "Error Messages Are Evil" (2014): https://jnd.org/error-messages-are-evil/
- "The Four Fundamental Principles of Human-Centered Design and Application": https://jnd.org/the-four-fundamental-principles-ofhuman-centered-design-and-application/
- "Problem of Automation: Inappropriate feedback and interaction, not over-automation" (summary of Norman 1990): https://jnd.org/problem-of-automation-inappropriate-feedback-and-interaction-not-over-automation/
- "Videos from Design of Everyday Things" (1994 Voyager CD-ROM videos, now on IxDF): https://jnd.org/videos-from-design-of-everyday-things/
- Saved under `books/free/design-of-everyday-things/`. Not read: the 1994 videos (no transcripts), Norman's Udacity course, the full 1990 automation PDF.
