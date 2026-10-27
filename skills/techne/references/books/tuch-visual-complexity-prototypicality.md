---
title: "The role of visual complexity and prototypicality regarding first impression of websites: Working towards understanding aesthetic judgments"
author: "Alexandre N. Tuch, Eva E. Presslaber, Markus Stöcklin, Klaus Opwis, Javier A. Bargas-Avila"
year: 2012
domains: [visual, psychology, inspiration]
evidence: "moderate"
---

# The role of visual complexity and prototypicality regarding first impression of websites — Tuch et al. (IJHCS 2012)

Use this when: deciding how far a landing page, homepage or marketing surface may depart from what its category looks like; arguing for simplification in a busy layout; planning a 5-second / first-impression test; someone cites "users judge in 50 ms" and you need to know what that does and does not mean.

Source: https://research.google.com/pubs/archive/38315.pdf (authors' preprint, dated 17 August 2012, self-archived in the Google Research publications archive, the employer of co-author Bargas-Avila; published version: *International Journal of Human-Computer Studies* 70(11), 794–811). Read in full, including the appendix of stimuli.

## The big idea (3 sentences)
Two lab experiments showed people real company homepages for between 17 ms and 1 s and asked how beautiful each looked: pages with low visual complexity and high prototypicality (looking like a typical company site) were rated most beautiful, and the effects were large. Both factors already mattered at 17 ms, but complexity mattered more than prototypicality at the shortest exposure, while by 33–50 ms prototypicality had caught up, consistent with complexity being processed earlier than "does this look like its kind?". The two factors interact: when a page is atypical, being simple helps little, and when a page is cluttered, being typical helps little, so either failure alone drags the first impression down.

## Core concepts
- **Visual complexity (VC)** — treated as *perceived* complexity, not an objective metric; rated by viewers ("this website is of high visual complexity"). Agreement between raters was high (ICC ≈ .82).
- **Prototypicality (PT)** — how representative an object is of its class ("looks like a typical company website"); grounded in mental models people build from experience (Roth et al. 2010 found consistent mental models for company sites). Rater agreement ICC ≈ .78.
- **Stimulus design** — 464 top company sites in seven industries were filtered to 270 (no intro pages, shops, ads, archives; English or German), rated online by 267 people, then 120 were assigned to a 3 (VC low/medium/high) × 2 (PT low/high) grid with 20 sites per cell. A manipulation check confirmed VC and PT were varied independently. A separate study (n = 86) confirmed the sites and brands were unfamiliar to Swiss participants; removing the few familiar ones did not change results.
- **Study 1** — 59 participants (mostly psychology undergraduates, no design training), presentation 50, 500 or 1000 ms (between subjects), masked with a noise pattern so the image could not linger; beauty rated on an ugly–beautiful visual analog scale (converted to 1–9).
- **Study 1 results** — big main effects of VC (η²p = .58) and PT (η²p = .81), no effect of exposure time between 50 and 1000 ms, and a strong VC × PT interaction (η²p = .60). Typical vs atypical differed by d ≈ 1.8–2.0 at low and medium complexity but only d ≈ .24 at high complexity. Complexity effects were clear among typical sites, small among atypical ones. Best cell: low VC + high PT (mean ≈ 5.5 of 9); atypical sites sat around 3.8–4.4 whatever their complexity.
- **Study 2** — 82 new participants, VC reduced to low/high, exposures 17, 33, 50 ms (limited by a 60 Hz screen). At 17 ms VC had the larger effect (η²p .38 vs .19 for PT); at 33 and 50 ms the effects were about equal (≈ .57–.66). A significant PT × time interaction, none for VC × time.
- **Leder et al. (2004) stage model** — aesthetic processing runs from perceptual analysis (complexity, symmetry) to implicit memory integration (familiarity, prototypicality) and later explicit, expertise-driven stages. The 17 ms data give "some support" that complexity is read before typicality.
- **Linear, not inverted-U** — Berlyne predicts moderate complexity is most pleasant; here beauty fell roughly linearly with complexity. The authors' reading: websites are already complex stimuli, so they sit on the declining side of Berlyne's curve.
- **Latency claim debunked** — Tractinsky et al. (2006) said extreme ratings come faster (an inverted-U of latency vs rating), so latency could be a hidden preference measure. Tuch et al. reproduced the pooled result but showed it is an aggregation artifact: one participant supplied 28% of ratings at one scale end, the pooled ANOVA treated 2,261 non-independent ratings as independent, and per person only 18–28% fit an inverted U, with tiny added variance (2–3%).

## Actionable heuristics for product design
- When designing a homepage, landing page or first screen, make it look like its category first (familiar layout regions, conventional nav position, expected elements) and then polish, because typicality had the largest effect on first-impression beauty and atypical pages scored poorly even when simple.
- When a page must be distinctive, spend the novelty on one or two expressive elements (imagery, type, color) while keeping the layout skeleton prototypical, because the paper's data (and Hekkert's MAYA work it cites) show novelty is liked only while typicality survives.
- When a first screen feels "busy", cut the number of competing regions, images and text blocks before restyling, because complexity is read within 17 ms and higher complexity lowered beauty in a near-linear way: there was no sweet spot of "moderate clutter" on websites.
- When you simplify, do not drift away from the category pattern, because simplicity's benefit was largest on typical pages and nearly vanished on atypical ones.
- When benchmarking typicality, ground it in your users' category, not designers' taste: collect 10–20 competitor or category screens, and have target users rate "looks like a typical X" on your candidates, because PT is defined by users' mental models and raters agree strongly.
- When running a first-impression or 5-second test, mask or blank the screen after exposure and use a scale anchored on one attribute, because without masking the image persists ~250 ms and the "exposure time" is not what you think.
- When someone proposes measuring preference by how fast users click or rate, refuse to treat speed as a preference signal unless it is analyzed per person, because the latency–extremity link was mostly an artifact of pooling.
- When a visual redesign scores higher on first-impression appeal, still test the task, because the paper measures passive viewing of screenshots only; appeal shapes expectations but does not show usability.
- When a design is for a category with weak or shifting conventions (new product types, AI-native surfaces), expect weaker typicality benefits and test with real users, because the study only covers company sites, where mental models are strong.
- When stakeholders want "something nobody has done before" on a functional surface, show them the VC × PT cell means: the atypical cells were all near the bottom regardless of complexity.

## Evidence & caveats
- Strengths: careful stimulus selection with independent manipulation checks, real (not synthetic) websites, masking, two studies with consistent large effects, and an honest replication-plus-critique of a prior claim.
- Samples are small (59 and 82), young, mostly psychology students in Basel; cultures, ages and design-literate audiences were not tested. The authors list this as a limitation.
- One site category (company homepages, 2010 designs) on desktop screens; results may differ for shops, news, apps, mobile, or today's visual conventions. Prototypes drift as the web changes, so "typical" must be re-measured, not remembered.
- Passive viewing of screenshots, single beauty rating. No behavioral outcome (bounce, conversion, trust, task success). Treat as a first-impression lens, not a conversion predictor.
- VC and PT were perceived ratings; the paper cannot say *which* visual features (color, density, alignment, imagery) drive them. Use it to set direction, not pixel rules.
- The stage-model support is partial: study 1 found no time interaction above 50 ms; only the sub-50 ms study showed it.
- The specific website stimuli are listed, so the study is replicable; we found no failed replication in this reading, but we did not search for one.

## Disagreements with other references
- `references/inspiration/inspiration-method.md` tags the first-impression and Tuch finding as [strong]; `references/visual/color.md` and `references/visual/layout-spacing-elevation.md` tag Tuch as [moderate]. Having read the paper, moderate is right: large, consistent effects, but small student samples, one website type, and only passive ratings.
- SKILL.md's "be conventional on functional surfaces ... most advanced, yet acceptable" is supported here for first impressions of company homepages; the paper is not direct evidence about forms, checkout or settings, which rest more on learnability and mental models (`references/psychology/cognition-memory-cognitive-load.md`).
- `references/psychology/cognition-perception-attention-reading.md` cites Lindgaard's 50 ms result as "reliable judgments". This paper shows judgments form even faster (17 ms) but also shows that pooled analyses in this literature can mislead; prefer per-participant evidence when citing speed claims.
- Berlyne's inverted-U (moderate complexity is best), sometimes repeated in design writing, is not supported for websites here; trust this paper for screens: less complexity is better, within the range of real sites.

## Best quotes (< 25 words each, max 5)
- "websites with low VC and high PT were perceived as highly appealing."
- "Websites of low prototypicality are generaly judged as being unattractive – in fact, this counts for websites of high as well as low complexity."
- "Designs that contradict what users typically expect of a website may trigger a suboptimal first impression"

## Related
- `references/inspiration/inspiration-method.md` (MAYA boundary)
- `references/visual/layout-spacing-elevation.md`, `references/visual/visual-polish-checklist.md` (item 8, prototypicality), `references/visual/color.md`
- `references/psychology/cognition-perception-attention-reading.md` (first impressions, 50 ms)
- `references/process/research-methods-selector.md` (first-impression testing)
- Hekkert, Snelders & van Wieringen 2003 (MAYA, not freely available); Lindgaard et al. 2006; Leder et al. 2004; Roth et al. 2010 (mental models for web objects)
