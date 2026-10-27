---
title: "Attention web designers: You have 50 milliseconds to make a good first impression!"
author: "Gitte Lindgaard, Gary Fernandes, Cathy Dudek, J. Brown"
year: 2006
domains: [visual, psychology]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: low
---

# Attention web designers: You have 50 milliseconds — Lindgaard, Fernandes, Dudek & Brown

Use this when: someone cites "users judge a site in 50 ms" to argue for a visual overhaul, or to argue that content and usability don't matter; you are planning a first-impression or 5-second test; you need to explain why visual appeal colours later judgements of usability, trust and satisfaction.

Basis: the paper (*Behaviour & Information Technology* 25(2), 115–126, 2006) is paywalled, and OpenAlex reports no open repository copy. A fresh search found no author-archived version, so the full text was not read. These notes rest on two legal sources: **the publisher's abstract** (via OpenAlex), which states the design and headline result; and **an interview with Lindgaard in *MMI-Interaktiv* 13 (2007)**, published open access in the German Informatics Society's digital library, in which she explains what the 50 ms study was meant to show, how she reads it, and the research it came from (read in full). Coverage is low: the study design and conclusion are known, but its stimuli, sample sizes, statistics and the per-dimension results are not. For the closest follow-up with full methods, see `references/books/tuch-visual-complexity-prototypicality.md`.

## The big idea (3 sentences)
People form a judgement of a web page's visual appeal extremely fast: ratings after a 50 ms glimpse correlated highly with ratings after 500 ms, and repeated ratings were consistent. Lindgaard reads this as an affective "mere exposure" response ("what my body tells me to feel") rather than a reasoned evaluation. Because first impressions set the scene for later judgements, which people then justify after the fact, visual appeal is an important part of satisfaction even though, as she stresses, it says nothing on its own about usability or what users will do.

## Core concepts
- **Three studies** (abstract):
  1. Participants twice rated the visual appeal of homepages shown for 500 ms each.
  2. The same, plus ratings on seven specific design dimensions. Visual appeal was closely related to most of them.
  3. The 500 ms condition again, plus a 50 ms condition with the same pages.
  Ratings were highly correlated across phases and between 50 and 500 ms.
- **Mere exposure** (Zajonc, 1980) — the purpose of the 50 ms condition was to test whether the first impression forms too fast for deliberate thought. Lindgaard says this, not the headline number, was "the big deal".
- **First impression as anchor** — she argues that decisions are often made affectively and then rationalised (citing Kahneman, Slovic & Tversky and Klayman), so an early impression shapes what follows.
- **Aesthetics as part of satisfaction** — the research line began with a usability test of a Danish government site: people who only browsed (and hit no usability problems) were as dissatisfied as those who failed half their tasks. She suspected the clashing saturated blue and yellow. Later work (Lindgaard & Dudek, 2003) found aesthetics to be one component of user satisfaction.
- **Visual appeal is not just prettiness** — her telecom network-management example: greying the background so a single red critical node stands out, plus a red "C" callout, made the critical problem instantly visible and kept operators "in flow". That visual language went on to be proposed as an International Telecommunication Union (ITU) standard for network management displays.
- **Context dependence** — single-feature questions ("does white space help?", "do photos of people build trust?") usually come out "it depends" on task, page type, message and purpose. A student's study found no effect of white space on finding and pointing to items.
- **Energy and flow** — her working model: annoyance with tools uses up some of the limited energy available for a complex task, which leads to overload, stress and loss of Csikszentmihalyi's "flow". Calm, clear visuals protect it.
- **Measurement methods borrowed from the natural sciences** — she argues that isolating single features answers only narrow questions, and calls for more holistic, contextual research on aesthetics.
- **Definitional problem** — Lavie and Tractinsky's split between "classical" and "expressive" aesthetics is useful but circular in places. It is unresolved whether aesthetics is a property of the object or the viewer's response.
- **Open questions she named in 2007** — what aesthetics even is (object property or response), its link to perceived usability and trust, multisensory aesthetics, and what happens to first impressions over time.

## Actionable heuristics for product design
- When designing any entry surface (landing page, app store screenshots, onboarding first screen, empty state), treat the first glance as a real design target: a clear focal point, controlled colour (avoid clashing saturated primaries), low clutter and a recognisable layout for the category. That impression forms before reading and colours what comes next.
- When someone uses "50 ms" to argue that only looks matter, push back with Lindgaard's own framing: the study measured *liking*, not comprehension, trust, task success or conversion. Pair any appearance change with task and outcome metrics.
- When running a first-impression test, show each design very briefly (and mask afterwards, per Tuch et al.), ask for one clearly anchored rating, and compare against a longer exposure. If the brief and long ratings disagree, the design depends on reading, not glance appeal.
- When users report low satisfaction but usability metrics look fine (or the reverse), check the visual layer separately. Lindgaard's Danish case shows appearance can drag satisfaction down even when nothing blocks the task.
- When designing dense operational or expert interfaces (dashboards, monitoring, admin consoles), apply her network-display lesson: mute the background and reserve saturated colour for the one thing that needs action, so appeal comes from clarity and calm rather than decoration.
- When a stakeholder asks "does X (white space, photos of people, a hero image) improve trust?", don't answer from a general finding. Specify the context (task, page type, audience) and test it, because single-feature effects are context-dependent.
- When choosing between visual directions early, run a quick brief-exposure preference test with real users before investing in detailed design. Fast judgements are cheap to collect and fairly consistent in aggregate, so they are good for screening, though not for deciding alone.
- When the product's job is trust (finance, health, government), don't rely on appeal alone. Lindgaard's open question was exactly how appeal, perceived usability and trust relate. Pair an appealing first screen with trust signals that hold up on inspection (clear ownership, contact, security, plain pricing).
- When designing for a culture or category different from your own, test first impressions with that audience. What counts as appealing and typical for the category varies (see Tuch on prototypicality).
- When a redesign mainly changes look and feel, expect returning users' first impression to be reset and possibly worse at first. Measure over a longer period, as first impressions may change with use (an open question Lindgaard named).

## Evidence & caveats
- **Replicated direction:** fast, consistent visual-appeal judgements have been reproduced by other groups, including at 17–50 ms (Tuch et al., 2012, with full methods in techne). The 50 ms figure is widely cited and robust as a *rough* order of magnitude.
- **What it measures:** correlations of *visual appeal* ratings, which as reported in the abstract appear to be agreement in mean ratings across pages. Strong agreement in average ratings across many pages does not mean every individual's 50 ms judgement matches their 500 ms one. This study does not show that users leave sites within 50 ms, or that first impressions predict behaviour.
- **Author's own caution:** Lindgaard calls the media attention a matter of "scandals and miracles" and says the press missed the finer details. The scientific point was mere exposure, not a design rule.
- **Not checked here:** sample sizes, number and type of pages, rating scales, the seven design dimensions and exact correlations. Don't quote numbers beyond "50 ms" and "500 ms" from this file.
- The interview is the author's own retrospective view a year later, not peer-reviewed findings. Its anecdotes (the Danish site, the Nortel display) illustrate her reasoning but are not controlled studies.
- 2006 homepages differ from today's responsive and mobile pages. The mechanism (fast affective judgement) is likely general; specific design preferences are not.

## Disagreements with other references
- `references/psychology/cognition-cheatsheet.md` already lists "users decide in 50 ms so content doesn't matter" as an overclaim. That matches Lindgaard's own reading of the study: trust the cheatsheet.
- `references/psychology/cognition-perception-attention-reading.md` and `references/inspiration/inspiration-method.md` describe the 50 ms judgements as "reliable" and "sticky". That is fair for aggregate agreement. `references/books/tuch-visual-complexity-prototypicality.md` warns that pooled analyses can overstate individual consistency, which is the more careful reading.
- `references/visual/color.md` cites the study alongside Tuch for "colourful, complex sites hurt first impressions". Lindgaard's Danish example (saturated blue on yellow) is anecdotal support for the colour point; the controlled evidence for complexity comes from Tuch.
- `references/masters/timeless-principles.md` uses the finding to support visual polish. Agree, but polish here means clarity and calm (her network display), not ornament.

## Best quotes (< 25 words each, max 5)
- "Visual appeal can be assessed within 50 ms, suggesting that web designers have about 50 ms to make a good first impression." (abstract)
- "The first impression is 'what my body tells me to feel' rather than 'what my brain tells me to think.'" (2007 interview)
- "This is why the first impression is so important – it sets the scene for what will come after." (2007 interview)

## Related
- `references/books/tuch-visual-complexity-prototypicality.md` (follow-up with full methods)
- `references/psychology/cognition-perception-attention-reading.md`, `references/psychology/cognition-emotion-experience-habit.md` (visceral level, Norman), `references/psychology/cognition-cheatsheet.md`
- `references/visual/color.md`, `references/visual/visual-polish-checklist.md`, `references/masters/timeless-principles.md`
- `references/inspiration/inspiration-method.md` (first impressions in art direction)
- `references/books/thinking-fast-and-slow-kahneman.md` (affect heuristic, post-hoc rationalisation)
- `references/books/cognitive-load-theory-sweller.md` (why clutter costs effort beyond liking)
- `references/process/research-methods-selector.md` (when to use 5-second and first-impression tests)
- Papers: Lindgaard & Dudek (2003), *Interacting with Computers*; Lindgaard (2007), *Australian Journal of Emerging Technologies and Society* 5(1); Tractinsky et al. (2006), *IJHCS*

## Sources
- Lindgaard, G., Fernandes, G., Dudek, C. & Brown, J. (2006). *Behaviour & Information Technology* 25(2), 115–126, DOI https://doi.org/10.1080/01449290500330448. Abstract and open-access status via OpenAlex: https://api.openalex.org/works/doi:10.1080/01449290500330448 (status "closed", no repository full text)
- Mahlke, S. (2007). "Interview with Gitte Lindgaard on visual appeal and aesthetics in human-technology interaction", *MMI-Interaktiv* 13, German Informatics Society digital library: https://dl.gi.de/items/d2e86a34-2f0e-4866-9665-469110e1583b/full (PDF: https://dl.gi.de/bitstreams/775b97f9-3b46-4c8a-a4a5-13a75b248c07/download; read in full; saved under books/free/lindgaard-50ms/)
- Searched without finding a legal full text: an author self-archive, Carleton University repositories, and Lindgaard's 2007 AJETS paper (old Swinburne host URLs return 404).
