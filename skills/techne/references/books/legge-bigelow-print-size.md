---
title: "Does print size matter for reading? A review of findings from vision science and typography"
author: "Gordon E. Legge & Charles A. Bigelow"
year: 2011
domains: [typography, perception, reading, accessibility, vision-science]
evidence: "strong"
---

# Does Print Size Matter for Reading? — Legge & Bigelow (Journal of Vision 11(5):8)

Use this when: choosing the minimum text size for anything people read at length (body, help, legal, chat, transcripts); arguing for larger default type on desktop, for older users or for low vision; defending x-height (not nominal font size) as the thing to compare across fonts; deciding how big the steps between text levels (body, subhead, headline) should be.

Source: open-access full text via PubMed Central, https://pmc.ncbi.nlm.nih.gov/articles/PMC3428264/ (DOI 10.1167/11.5.8; the JOV page at jov.arvojournals.org was bot-blocked). Read in full: all sections (metrics, fluent range, three explanations, contemporary book/newspaper surveys, historical surveys, digital screens, discussion). Figures were not viewable as images; their captions and the tables were read.

## The big idea (3 sentences)
People with normal vision read at maximum speed over a wide plateau of print sizes, roughly 0.2° to 2° of visual angle in x-height (about 1.4 mm to 14 mm at 40 cm), with a sharp drop below the small end (the critical print size, CPS) and a gentle drop above the large end. Surveys of hundreds of newspapers and novels, and of type from the 15th to 18th centuries, show running text clusters just above the CPS (mean about 0.23–0.24°), suggesting human vision, not economics or technology, sets the floor of practical type sizes. Size should be specified as x-height in visual angle, because nominal point size varies with font design and apparent size depends on viewing distance.

## Core concepts
- **Visual angle** — angle (deg) ≈ 57.3 × size / viewing distance. Rule of thumb at 40 cm: degrees ≈ points / 20; 1.4 mm = 4 pt ≈ 0.2°.
- **x-height as the size metric** — 94.5% of English text is lowercase, ~87% of a letter's ink sits in the x-height band, and x-height predicts perceived size and mean lowercase width (ratio ≈ 1.03). x-height fraction of body size ranges 0.28–0.58 across 1,049 typefaces (mean 0.46).
- **Fluent range** — the 10× size range (≈0.2°–2° x-height) where reading speed is at maximum. RSVP gives much higher speeds than static text (≈1171 vs 303 wpm in one study) but the same size range.
- **Critical print size (CPS)** — the smallest size that still allows maximum reading speed; consensus ≈ 0.2° x-height for normal vision (individual range ≈ 0.15–0.3°). It is at least 2× the letter acuity limit, and much more than 2× for low vision. Being able to read something is not the same as reading it fluently.
- **Why the curve has this shape** — not eye-movement limits (the same curve appears in RSVP); contrast sensitivity at different spatial frequencies plays a role (low contrast narrows the plateau, first at the extremes); the visual span (letters recognized per fixation) shrinks outside the fluent range, and crowding, driven by letter spacing (Bouma's law), is the main limit at small sizes. Extra-wide letter spacing does not speed reading.
- **Optical scale** — small sizes are read from coarse features, so small-size designs need bigger x-height, wider letters, sturdier details and looser spacing; fine detail matters only at large sizes (e.g. Arno caption vs display: +6% x-height, +15% width).
- **Ecological hypothesis** — print sizes in use fall inside the fluent range. Running text: newspapers 0.20–0.26° (mean 0.23°), hardcover 0.20–0.28°, paperback 0.20–0.25° (both mean 0.24°). No running text below 0.2° despite paper costs.
- **Display sizes** — newspaper headline levels step by about 2× each (running text 0.23° → subheads 0.43° → smallest headlines 0.76° → largest 1.71°); ~20% of the largest headlines exceed 2°, but they average 3 words, so slower reading barely matters.
- **x-height fraction rises as size falls** — newspapers pick high-x-height faces at small body sizes (r = −0.71 between body size and x-height fraction). Mean x-height fraction: hardcover faces 0.42, newspapers 0.48, screen-designed faces 0.52.
- **Screens (2011 survey of 30 US news sites, default Safari, 132 ppi at 40 cm)** — home-page snippet text averaged 0.19° (min 0.16°), below CPS; article body averaged 0.21°, just above it. Online headlines were far smaller than print (0.31–0.37° vs 1.71°), driven by competition for screen space and attention, not paper cost.
- **Screen legibility and x-height** — citing Sheedy et al. (2005): at equal body size, higher-x-height fonts (Verdana 0.55) were more legible than Times New Roman (0.45); more pixels per x-height improved legibility.

Quick numbers (all x-heights; angles at the 40 cm reading distance the paper uses):

| Item | Value |
|---|---|
| Conversion | degrees ≈ 57.3 × size / distance; at 40 cm, degrees ≈ points / 20, mm ≈ 7 × degrees |
| Fluent range | ≈ 0.2°–2° (1.4–14 mm; 4–40 pt x-height) |
| Critical print size | ≈ 0.2° (individuals 0.15–0.3°); Times New Roman at 0.2° ≈ 9 pt body |
| Reading slows above | ≈ 2° (onset 1–3°), gently |
| Newspaper body | 0.20–0.26°, mean 0.23° (1.64 mm) |
| Novels (hardcover / paperback) | mean 0.24° |
| Newspaper levels | body 0.23° → subheads 0.43° → small heads 0.76° → large heads 1.71° |
| Online news, 2011 | home-page snippets mean 0.19° (min 0.16°); article body mean 0.21° |
| x-height fraction | typefaces 0.28–0.58 (mean 0.46); screen-designed faces mean 0.52 |
| CSS reference pixel (CSS spec, not the paper) | ≈ 0.0213° per px |

## Actionable heuristics for product design
- When setting a minimum size for text people must read in full (body, error explanations, terms, chat, transcripts), keep the x-height at or above ~0.2° at the real viewing distance, with headroom, because below the CPS reading speed falls sharply, while above it the curve is flat.
- When comparing fonts or swapping a font, match x-height, not font-size, because x-height fractions vary from about 0.28 to 0.58 and readers perceive size by x-height.
- When converting to screen units, use the CSS reference pixel (defined as about 0.0213° of visual angle) as a sanity check. Our calculation, not the paper's: a 16 px font with a 0.5 x-height has an 8 px x-height ≈ 0.17° at the reference distance, below the 0.2° CPS; 18 px gives ≈ 0.19°; you need about 9.4 px of x-height (≈ 17–19 px for typical UI faces) to clear 0.2°. Desktop and laptop reading distances (often ~50 cm or more) make this worse; phones held at ~30 cm make it better. So treat 16 px as a floor for desktop reading text, and prefer 17–18 px for long reading [moderate: derived from the paper's CPS plus the CSS spec, not tested directly].
- When designers want small type for density (feeds, cards, tables), keep it for short, skimmable snippets and labels, and make sure any text people need to read continuously is at least body size, because the paper found sub-CPS sizes are tolerated only for short texts (stock listings, classifieds, home-page teasers).
- When serving older users, low-vision users or any accessibility-sensitive context, size for the critical print size, not the acuity limit ("can they make it out?"), and support user scaling (Dynamic Type, browser zoom), because CPS is ≥ 2× acuity and the gap widens with low vision, low contrast, glare and poor lighting.
- When choosing a face for small sizes (captions, metadata, mobile), pick high x-height, wider, sturdier designs or the font's caption/text optical size, and leave tracking at normal or slightly loose; don't use thin weights or display cuts small.
- When text contrast is low (gray-on-gray, text over images, disabled states that still carry information), expect the comfortable size range to shrink, and raise contrast before raising size, because low contrast cuts reading speed at the extremes first.
- When building a type hierarchy, make steps between text levels big enough to see at a glance (roughly 1.5–2× between body, subhead and headline in editorial layouts), because functionally different levels benefit from clear size differences.
- When tempted to add letter-spacing to "improve readability" of body text, don't; wider-than-normal spacing did not enlarge the visual span or speed reading. Normal spacing is already above the crowding limit at fluent sizes.
- When making very large display text (hero, billboard-style headings above ~2° at viewing distance), keep it to a few words, because reading slows gently above the fluent range.

## Evidence & caveats
- The reading-speed-vs-size curve is a robust, replicated psychophysical finding across methods (scrolling text, RSVP, eye movements; e.g. Legge et al. 1985, Akutsu et al. 1991, Chung et al. 1998, Legge et al. 2007) [strong]. Sample sizes per study are small (4–16 subjects) but effects are large and consistent.
- The CPS value of 0.2° is a consensus for normally sighted young adults; it varies with font, method and individual (0.15–0.3°), and with age and low vision [strong for existence, moderate for the exact value].
- The "ecological hypothesis" is correlational, and the authors say causation is hard to prove [moderate]. Economic and social forces (paper cost, clandestine Bibles) produced sub-CPS sizes historically.
- Reading speed is the outcome; comprehension, fatigue and preference were not studied here. Reading of simple text was used so language wouldn't limit speed.
- The screen survey is 2011, one laptop and browser at default zoom, 30 news sites; screens and default sizes have grown since [dated].
- The mechanism section (spatial-frequency channels vs crowding) is presented by the authors as unresolved.

## Disagreements with other references
- `references/visual/typography.md` recommends 16px web body and allows 14px for dense desktop tools. The derived calculation above suggests 14–16px body sits at or below the CPS on desktop at common distances for typical x-heights; for reading-heavy desktop surfaces, prefer typography.md's upper range (17–18px) or larger, and keep 14px for labels and short UI strings. typography.md's "large x-height" advice for UI faces is consistent with this paper.
- `references/books/practical-typography.md` (Butterick) wants heading emphasis by the "smallest visible increments"; this paper's newspaper data show ~2× steps between functional text levels. Use Butterick within running text (emphasis), and clear steps between levels (hierarchy), as typography.md also says (≥ 1.2× or a weight change).
- `references/visual/typography.md` on tracking (loosen small text slightly, never wide-track body) agrees with the finding that extra spacing doesn't speed reading.
- `references/interaction/accessibility.md` (WCAG resize text to 200%) is a floor; this paper explains why defaults matter even when zoom exists: many people never zoom, and CPS is where fluency ends.

## Best quotes (< 25 words each, max 5)
- "The fluent range extends over a factor of 10 in angular print size (x-height) from approximately 0.2° to 2°."
- "Across studies, a consensus value for the critical print size for normally sighted readers is 0.2° x-height."
- "The critical print size is at least two times larger than acuity letters for normally sighted subjects."
- "Extra-wide spacing does not enlarge the visual span nor increase reading speed."

## Related
- `references/visual/typography.md`, `references/interaction/accessibility.md`, `references/books/wcag-22.md`
- `references/psychology/cognition-perception-attention-reading.md` (reading and attention; it does not yet cover crowding or critical print size)
- `references/books/practical-typography.md`
- Legge, *Psychophysics of Reading in Normal and Low Vision* (2007); Tinker, *Legibility of Print* (1963); Pelli et al. (2007) on crowding; MNREAD chart
