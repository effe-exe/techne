---
title: "Magic Ink: Information Software and the Graphical Interface"
author: "Bret Victor"
year: 2006
domains: [masters, information-design, interaction, data-visualization, personalization, future]
evidence: "weak"
---

# Magic Ink: Information Software and the Graphical Interface — Bret Victor

Use this when: you are designing a screen whose job is to help someone decide or understand (search results, listings, schedules, dashboards, calendars, comparison pages, status views) and the current design makes them click, filter or submit before they see anything useful; you are deciding how much to infer from time, location, history or other context instead of asking; you are designing settings or configuration and want an alternative to forms and dialogs.

Source: https://worrydream.com/MagicInk/ (author's site, HTML draft released March 15, 2006). Read the whole essay including sidenotes, the BART widget case study, the design-tool, history-inference and "information ecosystem" engineering sections, and the summary. The many images (redesigns of Amazon, Yahoo! Movies, U-Haul, Teleflora, Southwest, BART) were not viewable in the text extraction; I rely on Victor's prose descriptions of them.

## The big idea (3 sentences)
Most software is not a machine people operate but a medium they read: "information software" exists to help a person ask and answer questions, compare and decide, so designing it is first a graphic-design problem (what to show and how to arrange it), not a matter of specifying functions. Unlike print, a screen can tailor its graphic to the reader, inferring context from the environment (now, here, other open documents) and from history (what this person did before), so it shows only what is relevant. Asking the user via interaction is the last and most expensive source of context; whatever interaction remains should happen in an informative graphical domain, correct a predicted starting point rather than build one from scratch, and give instant feedback.

## Core concepts
- **Three kinds of software** — information software (learn: build a model in your head), manipulation software (create: change an external model, e.g. drawing, writing, music tools), communication software (share a model; treated as the other two glued together).
- **Software = graphic design + industrial design** — the pictures users read are graphic design; the pseudo-mechanical controls they push are a virtual industrial design. Designers do both whether they realize it or not.
- **Most software is information software** — even calendars, finance, retail and email are mostly about understanding a situation; the "manipulation" (entering an appointment, filing a message, the cart) is a small step that reifies a decision. Ask of any product "why is a person using this?"; the answer is usually "to learn".
- **Print is the baseline** — if software can't show its data at least as well as a good timetable, map or catalogue page, it hasn't progressed.
- **Show the data / arrange the data** — the Amazon redesign puts enough information on one page (synopsis, contents, rating distribution, related titles) to decide without clicking; the Yahoo! Movies redesign groups theatres by movie and plots showtimes on a time axis, shading the past.
- **Navigate by eye, not by hand** — clicking into each item forces comparison "across time instead of space", i.e. from memory.
- **Context-sensitive information graphics** — software can infer context, winnow irrelevant data, and generate a graphic for this reader now. Pixels are "magic ink".
- **Three context sources, in order of preference** — environment (date/time, location, weather, open documents, email), history (what the user did before), interaction (asking the user).
- **Last-value vs learning predictors** — last-value: assume today's context equals the last one (yesterday's apartment search). Learning: find patterns (genre streak, the morning/evening commute) and pre-select.
- **"Now" and "here" are the prime landmarks** — a bus schedule should never make you hunt for the next bus.
- **Interactivity considered harmful (for information software)** — all interaction there is navigation, and navigation is excise (Cooper). Interaction requires knowing what you want and how to ask, creates state you can get lost in, and is slow because the hand is far slower than the eye.
- **Three ways to reduce remaining interaction** — graphical manipulation domains (pick places on a map, dates on a calendar, not drop-downs), relative navigation (correct a predicted starting point), tight feedback loops (each input visibly changes the graphic so users stop when close enough).
- **Configuration as a sentence** — the BART widget's announcement settings are a readable sentence whose red words are editable in place; no OK button; the sentence always shows the current state. Parameters get meaning from surrounding words, so it scales better than a dialog.
- **Hide controls until wanted** — the widget shows a pure graphic; buttons appear only on hover.
- **Feature creep turns information software into machines** — adding another menu item is easier than redesigning a graphic, so after ten versions users spend more time in menus than reading.
- **Tool vs platform** — the designer controls the tool; the recipient supplies the platform, which therefore must be simple and general. Victor argues CSS fails as both.
- **Drawing dynamic graphics by example** — a proposed design tool where designers draw snapshots for sample data and the tool infers the data-to-graphic mapping, with visible feedback examples and editable curves, so designers don't need engineers for every detail.
- **Information ecosystem** — a proposed platform where views nominate topics and request types, translators convert between types, every topic carries a confidence (0–1) that dilutes through translation and drives visual emphasis, and user feedback backpropagates.
- **The future is context-sensitive, not interactive** — display, storage and sensing improve by orders of magnitude, input bandwidth doesn't, so interaction becomes the bottleneck.

## Actionable heuristics for product design
- When a screen exists to help someone choose (search results, product lists, flights, showtimes), first write down the 3–6 questions the user is asking and the decision they're making, then check that each question is answered on the list itself without a click, because Victor's redesigns are built entirely from that question list.
- When users must open item after item to compare them, bring the deciding attributes onto the list in one row per item, because comparing by eye across space beats comparing from memory across clicks.
- When showing star ratings, show the distribution (a small histogram or whiskers) and count, not just the average, because a unanimous 3.0 and a loved-and-hated 3.0 mean different things and the count signals how far to trust it.
- When the primary question has two dimensions (which movie × what time; which flight × when), map them to the two axes of the screen instead of nesting one inside the other, because spatial arrangement lets the eye answer "what's on around 7?" by scanning one column.
- When data has a time dimension, anchor the view on "now": start the list at the next item, shade the past, keep the most important item (the next train) in a fixed position, because "now" is almost always the landmark and a constant position lets an experienced user answer at a glance.
- When the user returns to a view, restore their last context (route, filters, location, search) by default, because last-value prediction is cheap and usually right; then consider learned patterns (time-of-day, weekday) only once you can show they beat last-value.
- When you have an empty "start from scratch" state (a map showing the whole continent, a blank form), replace it with a predicted starting point plus a short list of likely alternatives (recent, saved, inferred from context), because correcting a guess is less work and less stressful than constructing context.
- When the user must specify a place or date, use a map or calendar in place, not drop-downs or free-text fields, because people already understand these graphical forms and they inform while you choose.
- When an input changes results, update results live as the user types or drags, and drop the Submit/Apply button where you can, because each input should visibly change the graphic; long feedback loops make users over-specify and backtrack.
- When precise absolute input is tedious (time of day, zoom level), offer a coarse jump followed by fine relative adjustment while the user watches the results, not a precise picker, because eyes should stay on the information, not the control.
- When designing settings, try writing the configuration as a sentence describing what the software will do ("Announce trains leaving in 12 minutes"), with the variable words editable in place and no OK button, because users read the current state instead of decoding isolated labelled fields.
- When a product mainly displays information, hide manipulation controls until the user signals intent (hover, focus, tap to edit), because chrome competes with the data (Tufte's "administrative debris").
- When a feature request adds a menu item, dialog or filter to an information view, first ask whether better default content or arrangement would answer the same question, because interaction accretes over versions and is rarely removed.
- When something runs in the background (an alert, a voice announcement, auto-recording), make its active state visible where it can be switched off, because hidden modes are where users get lost.
- When you surface inferred suggestions, encode confidence visually (size, contrast, saturation, grouping) and drop low-confidence items below a threshold, because Victor's own platform design shows that nominating everything makes the view useless.
- When users ignore or dismiss an inferred item, treat it as negative feedback and de-emphasize it over time; when they act on one, strengthen it, because the system should tune itself without a settings page.
- When reviewing a design for an information product, ask "could this be a piece of paper?" — if the paper version would be clearer (a printed timetable, a map), the software has regressed.
- When designers must hand dynamic behavior to engineers via static mockups, shorten the loop: prototype in code or with data-driven components so designers see real data states in seconds, because day-long loops kill the detail work (like the BART widget's short-trip label alignment).

## Evidence & caveats
- This is an argued essay with redesign sketches and one shipped case study (the BART widget won a 2007 Apple Design Award). There is no user testing of the redesigns beyond anecdotal user feedback; the history-predictor results come from simulated users, not real ones. Treat it as a strong lens, not evidence.
- The Netflix figure (about two-thirds of selections come from recommendations) is cited from a 2006 New York Times article, not measured by Victor.
- Prediction and inference have costs Victor underplays: wrong guesses, unpredictability, privacy. Later research on adaptive UIs (see `references/future/ai-patterns-interaction-pattern-library.md` P11) found adaptation helps only when accurate *and* predictable; reading a user's email to infer interests now raises consent and data-protection issues he doesn't address.
- Dated specifics: written for desktop software in 2006 (Dashboard widgets, mice, drop-downs, GPS-in-laptops). Many predictions came true in spirit: phones know "here" and "now", maps open at your location, Live Activities and transit apps show the next departure with no interaction, and system-level suggestions (Siri Suggestions, data detectors) resemble the "information ecosystem". His paper-thin foldable computer has not.
- The claim that drop-downs will be gone in 25 years and the CSS critique are opinion; the essay is deliberately polemical.
- The "interaction is a curse" claim is scoped to information software. It does not apply to manipulation tools (editors, design tools, games), which Victor says are harder and need excellent interaction.

## Disagreements with other references
- `references/process/heuristics-and-critique.md` (Nielsen H3 user control and freedom) and `references/future/ai-patterns-interaction-pattern-library.md` P10–P11 (visible, editable memory; adaptable beats adaptive; add shortcuts rather than move things) push for user control and predictability. Victor favours inference over asking. Reconcile: predict the *default view* (start point, ordering, emphasis), but keep the original navigation available, make the inference visible and correctable, and never silently reorganize. Trust the measured adaptive-UI findings when they conflict.
- `references/masters/master-lenses.md` (Victor lens) attributes "settings with no live preview fail Inventing on Principle"; the live-feedback point is equally in Magic Ink ("tight feedback loops"), with the specific claim that any form with a Submit button fails it. Note that in high-stakes flows (payments, destructive actions) an explicit confirm step is still right; see `references/process/states-and-edge-cases.md` §6.
- `references/process/states-and-edge-cases.md` §3.7 (first-run vs power user) treats empty first-run states as places for guidance; Victor would fill them with a predicted start. Both apply: predict when you have signal (location, time, last session), guide when you don't.
- `references/psychology/cognition-memory-cognitive-load.md` (recognition over recall) agrees: comparing on one screen removes working-memory load. Victor gives the information-design mechanism (compare across space, not time).
- `references/interaction/platform-conventions.md` favours standard controls; Victor argues standard GUI widgets are an impoverished "pidgin". Use custom graphical controls (map, timeline, sentence) only where they carry information the standard control can't; otherwise convention wins (see `references/masters/timeless-principles.md`, convention vs invention).

## Best quotes (< 25 words each, max 5)
- "Interactivity is actually a curse for users and a crutch for designers."
- "If information software can't present its data at least as well as a piece of paper, how have we progressed?"
- "Geographical locations belong on maps, and dates belong on calendars."
- "Software that doesn't learn from history dooms users to repeat it."
- "The future will be context-sensitive. The future will not be interactive."

## Related
- `references/masters/master-lenses.md` (Bret Victor lens; Tufte lens)
- `references/masters/timeless-principles.md` (answer the question; convention vs invention)
- `references/future/ai-patterns-interaction-pattern-library.md` (memory and adaptive UI rules that bound Victor's inference ideas)
- `references/future/futures-visions-that-came-true.md` (Victor's later talks; long view)
- `references/books/inventing-on-principle.md` (immediate connection between creator and creation)
- Tufte, *The Visual Display of Quantitative Information*; Cooper, *About Face* (excise); McCloud, *Understanding Comics*
