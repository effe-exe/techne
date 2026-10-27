---
title: "Designing Products People Love: How Great Designers Create Successful Products"
author: "Scott Hurff"
year: 2016
domains: [process, interaction, visual]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Designing Products People Love — Scott Hurff

Use this when: specifying every state of a screen (empty, loading, partial, error, ideal) and the transitions between them; designing first-run and zero-result empty states; choosing touch target sizes and thumb-reachable placement on phones; arguing for interactive prototypes over static mocks.

Basis note: the book is not free (O'Reilly, paid platform). These notes rest on Hurff's own free material: the UI Stack chapter, which he published on his blog as an official excerpt of the book (read in full); his O'Reilly Design Podcast interview summary about the book; and his blog posts on thumb zones, tappable sizes, prototyping and lessons from shipping the Tappy app (read in full). The book's other parts — finding a problem worth solving, customer research, defining the customer, scoping, using data, working with engineering, shipping, and the 20+ designer interviews — are known only from the publisher blurb and the interview, so coverage is low. The UI Stack is already the backbone of `process/states-and-edge-cases.md`.

## The big idea (3 sentences)
"Awkward UI" — a blank screen with no loader, a scary error, a graph that looks broken with two data points — comes from designing only the ideal state and bolting on the rest. Every screen has up to five states (ideal, empty, error, partial, loading), and a designer's job is to design each one and the transitions between them, because users move through all of them. More broadly, the book frames product design as a process run at the right time: understand the customer and problem, prototype in the real medium, and sweat the details that make the product feel human.

## Core concepts
- **Awkward UI** — moments where the product feels lifeless or alarming because a state or transition was never designed (no activity indicator, vague error, abrupt pop-in).
- **The UI Stack** — five states per screen, stacked "vertically" so the product can call any of them at any time. An extension of 37signals' 2004 "three state solution" (regular, blank, error) for the AJAX and mobile era.
- **Ideal state first** — design the full, valuable, populated screen first; it sets the tone for the others, and all other states should lead users towards it.
- **Empty state, three kinds** — first use (one shot at a first impression: say what to do and why, show what the full screen will look like, or use real content to teach); user-cleared ("inbox zero": reward and suggest the next action); no results (infer intent, correct spelling, show closest matches and what didn't match, offer another path).
- **Against coach marks** — instructional overlays put the burden of learning on the user and interrupt; prefer teaching through content and the empty state.
- **Error state** — never destroy user input (Raskin's "first law"); validate inline instead of reloading the page; messages should be calm, concise, specific and say what to do, tuned to the audience's expertise.
- **Partial state** — sparse data (one row, a half-filled profile) risks discouragement; guide people to the ideal state with progress cues (LinkedIn profile completeness, Dropbox's storage rewards). Hurff explicitly rejects grind mechanics while borrowing game "acceleration".
- **Loading state and perceived speed** — spinners make people watch the clock (Wroblewski's Polar finding); skeleton screens put attention on structure and content; Pinterest's average-colour placeholders preview content; optimistic actions (Instagram likes, uploading after the filter step) make work appear instant.
- **Transitions between states** — a messaging thread shows all five: empty conversation, first message (partial), typing indicator and sending (loading), failed send (error, with tap to retry), conversation (ideal). Disabled vs enabled send button is state awareness too.
- **Thumb Zone** — based on Hoober's observation of 1,333 people, most use one hand with the thumb anchored low; the comfortable area stays roughly constant as phones grow, so bigger screens add hard-to-reach space, and large phones change grips.
- **Truly tappable** — Hurff's synthesis of two touch studies (errors rise below ~9.2–9.6 mm in one; below ~12–15 mm and sharply under 8 mm in a large game-based dataset) plus vendor guidelines: minimum about 10 mm, optimum about 13 mm, with diminishing returns beyond ~12–15 mm (Fitts's law is logarithmic).
- **Prototype in the medium** — interactive prototypes expose timing, physics and gesture problems static mocks hide, give engineers exact values, and speed team feedback; motion is part of the interface. Hurff found key-flow animations should stay under ~0.2 s.
- **Personality through copy** — pick a tone early; it makes copy easier and carries into errors, notifications and onboarding (with a warning about tipping into "Clippy").
- **Research is the core skill** — in the interview, Hurff names interpreting and doing customer research as designers' most important future skill, because building for the wrong customer wastes the most time and money.

## Actionable heuristics for product design
- When specifying any screen, deliver all five UI Stack states plus the transitions between them in the same review, because engineers otherwise improvise the non-ideal states and those are where users get scared or stuck.
- When designing a first-use empty state, state the value, show exactly which action to take, and preview the populated screen (sample or stand-in content), because a blank "nothing here" both teaches nothing and feels like failure.
- When the user empties a list themselves, confirm the achievement and offer the next useful thing, because that user is engaged and the dead end wastes the moment.
- When a search returns nothing, correct spelling, show the closest results and which terms were dropped, and offer a way to broaden, because a zero-result wall ends the journey.
- When an error occurs, keep every piece of input, explain what happened and how to fix it next to the field, and avoid jargon or alarm, because data loss and scary codes are what users remember.
- When data is sparse, design the partial state so it still looks intentional and shows the next step to the full value, using honest progress (not coercive streaks), because sparse screens trigger abandonment.
- When content takes more than a moment to load, show a skeleton of the layout rather than a lone spinner, and fill it progressively, because attention on progress, not waiting, raises perceived speed (pair with techne's timing rules).
- When an action almost always succeeds (like, save, send), update the UI optimistically and reconcile in the background, with a clear failure-and-retry state, because it removes perceived latency without hiding real errors.
- When designing for phones, put frequent and primary actions in the lower, thumb-reachable area and keep rare or destructive ones out of easy reach, because the thumb's comfortable arc does not grow with screen size.
- When sizing touch targets, aim for about 10 mm minimum and ~13 mm for primary actions (roughly 44–48 pt/dp or more), because error rates climb steeply below that and gains flatten above ~12–15 mm.
- When motion or gesture matters, prototype it interactively before handoff and hand engineers the timings, because static mocks cannot reveal feel, and specs from a working prototype are exact.
- When writing for the product, fix a voice early and apply it to errors and notifications too, but keep instructions plain, because tone helps only when clarity comes first.

## Evidence & caveats
- The UI Stack is a practitioner framework, not a research finding: useful, widely adopted, and consistent with heuristics such as visibility of system status and error recovery, but untested as such.
- Skeleton screens: the Polar anecdote is one team's user comments, not a measured result. Evidence on skeletons vs spinners was not reviewed for this note; do not promise big perceived-speed gains without testing.
- Optimistic UI is sound when failures are rare and reversible; for payments, sends to others or irreversible actions it can mislead, so show pending state honestly.
- Touch-size numbers come from real studies (Parhi et al. 2006; Henze et al. 2011 game data), but Hurff's 10/13 mm synthesis is his own and the mm-to-pt maths assumes specific devices. Platform minimums in techne (`parhi-thumb-target-size.md`, `SKILL.md` §2) are the better default.
- The Thumb Zone heat map is an illustrative guess built on Hoober's grip observations, not measured reach data; grips shift constantly.
- Partial-state "acceleration" and progress bars can slide into manipulative gamification; techne's ethics gate applies (`deceptive-patterns-brignull.md`).
- Examples are 2014–2016 apps (Mailbox, Paper, Quartz Composer); the tools are dated, the principles are not.

## Disagreements with other references
- `process/states-and-edge-cases.md` extends Hurff's five states to about 18 (offline, permission, stale, disabled, success). Trust techne's table for coverage; use Hurff for the reasoning behind each core state.
- `psychology/cognition-motor-control-and-timing.md` §6 gives timing thresholds for when to show any indicator (none under ~1 s); Hurff's skeleton advice applies only to waits long enough to see. Don't flash skeletons for 200 ms loads.
- `parhi-thumb-target-size.md` and platform guidelines (`apple-hig.md`: 44 pt) are the authority on sizes; Hurff's ~13 mm optimum is larger than the HIG minimum, which is fine for primary actions.
- `raskin-humane-interface.md` is the source of the "never harm user work" rule Hurff quotes; Raskin also argues against confirmation dialogs in favour of undo, which fits optimistic actions with undo.

## Best quotes (< 25 words each, max 5)
- "Every screen you interact with in a digital product has multiple personalities." (UI Stack excerpt)
- Awkward UI exists because "computers are lazy" about helping people understand what happened and what to do next. (UI Stack excerpt)

## Related
- `references/process/states-and-edge-cases.md`
- `references/psychology/cognition-motor-control-and-timing.md` (§6 response time), `references/books/maister-waiting-lines.md`
- `references/books/parhi-thumb-target-size.md`, `references/books/apple-hig.md`
- `references/books/raskin-humane-interface.md`, `references/books/microinteractions-saffer.md`
- `references/books/web-form-design-wroblewski.md`, `references/books/wroblewski-inline-validation.md`

## Sources
- Scott Hurff, "Why your user interface is awkward: you're ignoring the UI stack" (official book excerpt): https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/
- O'Reilly Design Podcast, "Scott Hurff on designing at Tinder" (interview about the book): https://www.oreilly.com/content/scott-hurff-on-designing-at-tinder/
- O'Reilly, "Computers are lazy: Fight back with the UI stack" (talk page, summary only): https://www.oreilly.com/content/computers-are-lazy-fight-back-with-the-ui-stack/
- Scott Hurff, "How to design for thumbs in the era of huge screens": https://www.scotthurff.com/posts/how-to-design-for-thumbs-in-the-era-of-huge-screens/
- Scott Hurff, "How to make truly tappable user interfaces": https://www.scotthurff.com/posts/how-to-make-truly-tappable-user-interfaces/
- Scott Hurff, "Steal these four things I learned building an App Store featured app": https://www.scotthurff.com/posts/steal-four-things-i-learned-building-an-app-store-featured-app/
- Scott Hurff, "How to build interactive prototypes": https://www.scotthurff.com/posts/how-to-build-interactive-prototypes/
- Scott Hurff, "Content is the hero": https://www.scotthurff.com/posts/content-is-the-hero/
