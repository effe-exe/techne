---
title: "Laws of Organization in Perceptual Forms"
author: "Max Wertheimer"
year: 1923
domains: [psychology, perception, visual, layout]
evidence: "strong"
---

# Laws of Organization in Perceptual Forms — Max Wertheimer

Use this when: you are setting spacing, alignment and styling so that the right things read as groups; a layout looks "off" and you can't say why (near-misses in spacing or alignment); you are animating groups of elements; you need the original source behind "Gestalt principles" rather than a poster version.

Source: https://psychclassics.yorku.ca/Wertheimer/Forms/forms.htm (Classics in the History of Psychology; W. Ellis's 1938 English translation of "Untersuchungen zur Lehre von der Gestalt II", *Psychologische Forschung* 4, 1923). Read in full, sections I–IX plus footnotes. The online version is the Ellis selection (pp. 71–88), not the complete 50-page German paper, and the dot figures are not reproduced in the text, so some examples are described only in words.

## The big idea (3 sentences)
We don't see a scene as a sum of separate dots, brightnesses or tones; we see wholes, and the way the field splits into wholes follows definite laws, not personal whim. A small set of factors (proximity, similarity, common fate, set, direction or good continuation, closure, and to a lesser degree past experience) decides which parts belong together, and the "natural" grouping is stable while an "artificial" one is hard to hold and soon collapses back. Organization goes from the whole downward: parts get their character from the whole they sit in, so the same element looks different, or even disappears, in a different context.

## Core concepts
- **Factor of proximity** — with alternating gaps of 3 mm and 12 mm, a row of dots is seen as pairs separated by the small gaps; the opposite grouping is, for most people, impossible to see across the whole row. Same in sound (tap-tap, pause).
- **More items do not weaken natural grouping** — adding dots makes the *unnatural* grouping harder, never the natural one. A long row is never seen as single dots instead of pairs. Fewer items make the grouping easier to reverse.
- **Factor of similarity** — with equal spacing, like parts (same color, same loudness) band together. It is graded: more vs less dissimilarity also groups, and the same laws apply across form, color and sound.
- **Cooperation and conflict of factors** — proximity and similarity can reinforce each other (strongest grouping) or be pitted against each other; similarity can win over proximity when strong enough. Gradually widening an interval finds the tipping point, which is a way to measure factor strength.
- **Factor of common fate ("uniform destiny")** — if part of a row shifts, a shift that moves a whole natural group (pro-structural) is barely remarked on; a shift that cuts across groups (contra-structural) feels confusing and discomforting, and the moved dots may form a new group of their own.
- **Prägnanzstufen (regions of stability)** — perception is not equally sensitive across a range. Varying one dot's position between two others gives three stable impressions: grouped left, evenly spaced, grouped right. Intermediate rows are vague and get read as the nearest stable form ("not quite equally spaced"). Likewise angles fall into acute, right and obtuse; 93° reads as a slightly wrong right angle, and observers say it is "somehow wrong" without being able to say in which direction.
- **Factor of objective set (Einstellung)** — when a series is shown in sequence, the grouping seen earlier persists past the midpoint before flipping. An ambiguous arrangement becomes unambiguous when it is part of a sequence. Wertheimer calls this factor very strong.
- **Factor of direction / good continuation** — lines join the line they continue smoothly, and other strokes read as appendages, even when they are spatially closer. A "good" continuation follows the inner logic of the whole; simplicity is a property of the whole, not of its parts.
- **Factor of closure** — parts that form self-enclosed units group together, though closure can lose to a strong good curve.
- **Pro- and contra-structural additions** — adding pieces that complete "good" sub-figures against the original structure can make a familiar figure unrecognizable, even to someone who knows it well.
- **Factor of past experience (habit)** — real (e.g. "314 cm" is read as number + unit), but Wertheimer argues it cannot explain the other factors: a W placed over an M is seen as a symmetric wave between two uprights, not as two familiar letters.
- **Figure and ground** — a homogeneous field resists being split; a figure needs strong differentiation. The best figure is a closed, simple surface of a different color; the ground seems to continue unbroken underneath it, and the figure's contour belongs to the figure only.
- **Attention follows structure** — fixation and attention are secondary to the organization already given by the whole. Emphasis that comes from the structure differs from attention forced artificially.

## Actionable heuristics for product design
- When you need elements to read as groups, make within-group spacing clearly smaller than between-group spacing. Wertheimer's compelling case used a 1:4 ratio (3 mm vs 12 mm). Near-equal gaps (his 11:11 row) read as one uniform run, so avoid ratios that sit between "equal" and "clearly different".
- When two spacings or sizes are meant to be equal, make them exactly equal; when they are meant to differ, make the difference obvious. Near-misses (a 15 px gap next to a 16 px one, a 2° tilt, 93° corners) land between stable regions and read as mistakes users can't articulate. This is the perceptual case for a spacing scale and snapping to a grid.
- When a list or grid gets long, don't add extra dividers just because there are more items: consistent natural grouping does not degrade with count. Fix the spacing rhythm instead of adding boxes.
- When spacing and styling disagree (two items close together but styled differently), the stronger factor wins, and it may not be the one you meant. Make proximity and similarity say the same thing; the paper shows cooperating factors give the strongest grouping.
- When you want one item to break out of a group (a selected card, a destructive action), use a strong difference in one factor rather than several weak differences, and check it by squinting: the grouping should still read as intended.
- When animating, move whole natural groups together (pro-structural common fate). Don't animate a subset that cuts across visual groups (e.g. every second row, or items from two sections), because Wertheimer's observers found that confusing and the moved items regroup themselves.
- When something moves or changes, expect it to be read as belonging with whatever moves with it: elements that animate in together will be read as related, so stagger unrelated items.
- When a screen follows another in a flow, remember that the earlier layout sets how an ambiguous later one is read (objective set). Keep grouping conventions consistent across steps, and don't rely on an ambiguous layout being read "correctly" out of sequence (deep links, screenshots).
- When aligning, use continuation: items on a shared edge or line read as one system; something that sticks off the line reads as an appendage. Put related controls on the same alignment line instead of only near each other.
- When a region must read as one unit, close it (a container, a background, a boundary). But don't box everything: a strong continuous line or curve can override closure, and containers add weight.
- When you add decoration, badges or ornament around a familiar element (logo, icon, key number), check that the additions don't complete a stronger competing shape (contra-structural), which can make the familiar element hard to find even for regular users.
- When relying on user familiarity ("they know this icon") to override a layout, don't. Past experience is the weakest of the factors here; structural grouping wins.
- When making a modal, toast or focal card, give it a closed simple shape that clearly differs from the ground; the ground should look continuous underneath (scrim, consistent background), not cut out around it.
- When you need attention on something, get it from structure (isolation, grouping, contrast) rather than add-ons like arrows and flashing, because attention is drawn by the organization of the whole.
- When testing a grouping, use Wertheimer's own method: vary one gap step by step and see where the reading flips. In a design review, nudge spacing until the grouping changes, then set the real value well clear of that point.

Factor checklist for a layout review (this note's summary of the paper's factors):

| Factor | Question to ask of the screen | Typical failure |
|---|---|---|
| Proximity | Are within-group gaps clearly smaller than between-group gaps? | Label equidistant between two fields |
| Similarity | Do same-role items share one treatment, and only they? | Links and plain bold text share a color |
| Common fate | Do things that move together belong together? | Animating a cross-section of two groups |
| Objective set | Does the previous screen prime the right reading? | Step 3 groups differently from steps 1–2 |
| Direction | Do related items share an edge or line? | Controls near each other but off-axis |
| Closure | Is each unit closed, and only where needed? | Every element boxed, so nothing stands out |
| Prägnanzstufen | Are values clearly equal or clearly different? | 15 vs 16 px gaps, 1° misalignments |
| Past experience | Are we relying on familiarity to fix a weak layout? | "Users know this icon" next to a stronger shape |

## Evidence & caveats
- Strong for the core phenomena: proximity, similarity, common fate, good continuation and closure have been replicated and extended for a century (see the Wagemans et al. 2012 review cited in `references/psychology/cognition-perception-attention-reading.md`). Later work added factors Wertheimer didn't name, notably common region and uniform connectedness (Palmer).
- The paper's method is demonstration and phenomenology: figures shown to observers, not measured trials with statistics. It reports no sample sizes. The quantitative-sounding parts (the 2 mm–20 mm series of rows) are schematic; footnote 2 says real experiments need many more rows.
- The 3 mm/12 mm and 2/20 mm values are viewing-distance-dependent print examples, not screen rules. Translate them as ratios, not pixel values.
- His argument against past experience as the basis of grouping is a theoretical position from the Gestalt vs associationist debate; modern work finds both stimulus structure and learning matter.
- The idea of a universal law of Prägnanz (the simplest whole wins) is vaguer than the specific factors. Use the specific factors when making decisions.
- Translation: Ellis 1938 abridged selection; some phrasing ("uniform destiny") is the translator's.

## Disagreements with other references
- `references/psychology/cognition-perception-attention-reading.md` §2 and `references/visual/layout-spacing-elevation.md` list the principles correctly and credit Wertheimer. Neither mentions two of his factors that matter for product work: **objective set** (sequence context changes grouping) and **Prägnanzstufen** (near-miss values read as errors). This note adds both.
- The perception file says proximity generally beats similarity; Wertheimer shows similarity can win when strong enough. Both are right: it depends on magnitudes, which is why the reliable rule is to make the factors agree rather than to rank them.
- `SKILL.md` §2 says group spacing should differ by "≥ ~2×". Wertheimer's compelling example is 4×; his near-equal rows show where grouping dissolves. Use 2× as a floor and larger ratios when grouping must be unmistakable.
- The perception file's table attributes "Prägnanz (simplicity)" as a principle. In this text Wertheimer is careful that simplicity belongs to wholes, not parts: a "simple" addition can make a whole less coherent. Don't use "simpler parts" as a proxy for a clearer layout.

## Best quotes (< 25 words each, max 5)
- "I have sky, house, and trees. It is impossible to achieve '327' as such."
- "Instead larger wholes separated from and related to one another are given in experience."
- "'Simplicity' does not refer to the properties of individual parts; simplicity is a property of wholes."
- "In this way a person thoroughly familiar with O can be made quite blind to its existence."

## Related
- `references/psychology/cognition-perception-attention-reading.md` (§2 Gestalt grouping and strength hierarchy)
- `references/visual/layout-spacing-elevation.md` (spacing scale, grids, hierarchy)
- `references/interaction/microinteractions-and-motion.md` (choreography, staggering)
- `references/books/james-principles.md` (perception as "the probable thing", preperception)
- `references/books/wagemans-gestalt-century.md` (Wagemans et al. 2012, the modern review of these factors)
