---
title: "Laws of UX (website)"
author: "Jon Yablonski"
year: 2024
domains: [psychology, heuristics, interaction, gestalt, critique]
evidence: "mixed"
---

# Laws of UX — Jon Yablonski

Use this when: a stakeholder cites a "law" (Hick, Miller, Fitts, Jakob, Doherty, Zeigarnik) and you need to know what it actually says and how far it holds; building a shared critique vocabulary for a team; checking a design against a quick list of psychology principles before a deeper review.

Source: https://lawsofux.com/ (site as of 2026; there is also an O'Reilly book of the same name, not read). Read in full: all 30 entries via the site's markdown pages (definition, takeaways, examples where present, origins). Skipped: the "Further reading" link lists, articles section and posters.

## The big idea (3 sentences)
Laws of UX packages 30 principles from psychology, perception and engineering lore into one-line laws with three or four design takeaways each, so designers can apply known human tendencies instead of guessing. Its real value is as a shared vocabulary and a reminder list: group things that belong together, respect limits of attention and memory, reduce needless choice and waiting, follow conventions, and design peaks and endings. The entries mix well-replicated laws (Fitts, Hick within scope, Gestalt grouping, serial position) with weak or contested ones (Doherty, Zeigarnik, choice overload, Parkinson), and they are presented with equal confidence, which is the main thing to correct.

## Core concepts (all 30, grouped; our evidence tag in brackets)
- **Perception & grouping (Gestalt)** — Proximity (near things group) [strong]; Similarity (color, shape, size, orientation, motion group; make links look different from text) [strong]; Common Region (a border or background groups) [strong]; Uniform Connectedness (lines/frames connect) [strong]; Prägnanz (people see the simplest form) [moderate].
- **Attention** — Selective Attention (goal-directed filtering; banner blindness; change blindness when several changes compete) [strong]; Von Restorff (the distinct item is remembered; use emphasis sparingly; don't rely on color alone; watch motion sensitivity) [strong].
- **Memory** — Miller's Law (7±2; the site itself says not to use it to justify arbitrary limits) [superseded: ~4 chunks]; Working Memory (4–7 chunks, fading in 20–30 s; recognition over recall; carry information across screens) [strong for limits]; Chunking [strong]; Serial Position (first and last remembered best) [strong for lists in memory tests]; Zeigarnik (interrupted tasks remembered better) [contested].
- **Decision & choice** — Hick's Law (decision time grows with number and complexity of choices) [strong within scope]; Choice Overload (too many options overwhelm; offer comparison, featured picks, filters) [contested, near-zero mean effect]; Cognitive Bias [strong as a category]; Cognitive Load (intrinsic vs extraneous) [strong]; Mental Model [strong as a concept]; Jakob's Law (users expect your site to work like the others they use) [moderate, convention-based].
- **Motor & timing** — Fitts's Law (time depends on distance and size; big, well-spaced, reachable targets) [strong]; Doherty Threshold (<400 ms system response keeps people engaged) [weak, one 1982 IBM paper]; Parkinson's Law (tasks expand to the time available) [anecdotal, a 1955 satirical essay]; Goal-Gradient (effort rises near the goal; show progress) [moderate–strong].
- **Experience & emotion** — Aesthetic-Usability Effect (attractive looks perceived as more usable; it can mask problems in testing) [moderate]; Peak-End Rule (experiences judged by peak and end; negatives recalled more vividly) [moderate–strong]; Flow (challenge matched to skill, feedback, no friction) [moderate].
- **Design-practice maxims** — Tesler's Law (irreducible complexity must be absorbed by the system or the user) [principle]; Postel's Law (accept varied input, be strict in output) [engineering principle]; Occam's Razor (fewest assumptions; remove elements until function suffers) [principle]; Pareto (80/20) [heuristic]; Paradox of the Active User (people skip manuals and start using; put help in context) [moderate, Carroll & Rosson 1987].

Evidence grades for the 30 entries (our grading, drawing on the techne psychology files):

| Strong | Moderate | Weak / contested | Principles, not findings |
|---|---|---|---|
| Fitts, Hick (in scope), Proximity, Similarity, Common Region, Uniform Connectedness, Selective Attention, Von Restorff, Working Memory (~4 chunks), Chunking, Serial Position, Cognitive Load, Cognitive Bias | Aesthetic-Usability, Peak-End, Goal-Gradient, Flow, Jakob's Law, Mental Model, Prägnanz, Paradox of the Active User | Doherty (400 ms), Zeigarnik, Choice Overload, Miller's 7±2, Parkinson's Law | Tesler, Postel, Occam's Razor, Pareto |

## Actionable heuristics for product design
- When grouping UI, make space inside a group clearly smaller than between groups before adding borders or backgrounds; add a common region (card, background) only when proximity alone fails, because proximity and common region are the strongest grouping cues.
- When styling links and interactive elements, make them visually different from static text in more than color, because similarity groups things that look alike and color alone excludes some users.
- When emphasizing one key action or fact, make it the single distinctive element in its area; if two things compete for distinctiveness, neither wins, and ad-like styling triggers banner blindness.
- When several things change on screen at once (after a save, filter or live update), sequence or highlight the important change, because change blindness hides simultaneous changes.
- When a flow asks users to remember something between screens (a code, a choice, a price), carry it forward on screen, because working memory holds only a few chunks for a few seconds.
- When a decision must be fast (navigation, primary actions, alerts), reduce and rank the options and highlight a recommended one, but don't cut options users need; for searchable or browsable sets, add grouping, search and filters instead.
- When people must compare options (plans, products), give a side-by-side comparison with the same attributes in the same order.
- When designing a long list or nav, put the most important items first and last, and keep their positions stable so recall can take over.
- When sizing and placing touch targets, make frequent ones large, well spaced and in easy reach (see the numeric floors in `references/psychology/cognition-motor-control-and-timing.md`).
- When a response can't be instant, give feedback immediately and show honest progress; treat 400 ms as a design target, not a law.
- When redesigning a familiar product, keep conventions and offer a transition (preview, temporary switch-back), as YouTube did with its 2017 redesign, because users carry mental models from other products.
- When complexity can't be removed (taxes, permissions, configuration), move it into the system (defaults, autofill, inference) rather than onto the user, and make in-context help available, because users don't read manuals.
- When accepting user input (phone numbers, dates, names), be liberal: accept formats and normalize them, then give clear feedback, rather than rejecting non-standard but meaningful input.
- When designing endings (checkout success, cancellation, task completion, error recovery), make the end state good and fix the worst moment first, because peaks and ends dominate memory.
- When usability-testing a polished prototype, probe beyond satisfaction (task success, errors), because attractive designs get more forgiveness and can hide problems.
- When a screen feels busy, remove extraneous elements one at a time until removing more would cost function (Occam's razor, extraneous cognitive load), then stop.
- When prioritizing design effort, find the few flows and features that most users depend on (Pareto) and polish those first.
- When designing for expert or repeated use, match difficulty to skill, give immediate feedback and remove friction so users can stay in flow; for novices, disclose features progressively (the site's Slack example).
- When designing icons and marks, prefer simple, closed, regular shapes, because people interpret ambiguous figures as the simplest form.
- When you see a "Laws of UX" takeaway that recommends manipulation (artificial progress, deliberately added delays to raise perceived value), apply the ethics gate: progress and waits must be true. Use real progress (account created = step 1) and labor-illusion messages only when work is genuinely happening.

## Evidence & caveats
- The site is a curated popularization; entries summarize original sources in a few lines and sometimes overstate them [mixed].
- Strong: Fitts, Hick (familiar, equiprobable choices), Gestalt grouping, working-memory limits, serial position, selective attention and change blindness, peak-end (lab and some field evidence).
- Weak or contested: Doherty threshold (single 1982 industry report), Zeigarnik (poor replication), choice overload (meta-analytic mean effect near zero, strong moderators), Parkinson's law (satire), Miller's 7±2 (superseded by ~4 chunks; the site's own takeaways warn against misusing it), aesthetic-usability (moderate; original was a correlational ATM rating study, 252 participants).
- Some takeaways go beyond the cited origin: "progress bars help make wait times tolerable, regardless of their accuracy" and "purposefully adding a delay ... can increase perceived value" are presented without evidence or ethical limits; "Providing artificial progress" appears under both Goal-Gradient and Zeigarnik.
- The Goal-Gradient "Origins" text reads as text lifted from an academic paper's introduction (it matches the framing of Kivetz, Urminsky & Zheng 2006 on reward programs) rather than a summary of findings.
- Examples (Google, Apple TV remote, Slack onboarding, Mailchimp, Uber) are illustrations, not tests.

## Disagreements with other references
- `references/psychology/cognition-cheatsheet.md` and `references/psychology/cognition-motor-control-and-timing.md` grade these same laws with explicit evidence tags and flag overclaims (Hick ≠ "fewer options convert better", Doherty not a hard law, Zeigarnik contested). Trust those files over the site's flat presentation.
- SKILL.md and `references/books/magical-number-4-cowan.md` say working memory is ~4 chunks, not 7±2. The site's Miller entry still headlines 7±2, while its Working Memory entry says 4–7. Use ~4.
- `references/books/choice-overload-meta-analysis.md` and `references/books/chernev-choice-overload-2015.md` show choice overload is not a reliable law; the site's Choice Overload entry states it as one. Use the meta-analyses and their moderators.
- `references/psychology/cognition-emotion-experience-habit.md` treats Zeigarnik as contested and recommends the Ovsiankina effect (urge to resume) instead; prefer that.
- `references/psychology/behavior-ethics-dark-patterns.md` requires progress and urgency to be literally true; the site's "artificial progress" and "purposeful delay" takeaways need that constraint. `references/books/maister-waiting-lines.md` gives the honest version of wait-time design.
- `references/books/wertheimer-gestalt-laws.md` and `references/books/wagemans-gestalt-century.md` are the stronger sources for the grouping laws.

## Best quotes (< 25 words each, max 5)
- "Don't use the 'magical number seven' to justify unnecessary design limitations." (Miller's Law takeaway)
- "Visually pleasing design can mask usability problems and prevent issues from being discovered during usability testing."
- "Users spend most of their time on other sites." (Jakob's Law)
- "All processes have a core of complexity that cannot be designed away." (Tesler's Law)

## Related
- `references/psychology/cognition-cheatsheet.md`, `references/psychology/cognition-motor-control-and-timing.md`, `references/psychology/cognition-memory-cognitive-load.md`, `references/psychology/cognition-perception-attention-reading.md`, `references/psychology/cognition-emotion-experience-habit.md`
- `references/process/heuristics-and-critique.md`, `references/psychology/behavior-ethics-dark-patterns.md`
- `references/books/magical-number-4-cowan.md`, `references/books/choice-overload-meta-analysis.md`, `references/books/wertheimer-gestalt-laws.md`, `references/books/maister-waiting-lines.md`
- Yablonski, *Laws of UX* (O'Reilly book; not read)
