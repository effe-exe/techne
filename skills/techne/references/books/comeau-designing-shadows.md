---
title: "Designing Beautiful Shadows in CSS"
author: "Josh W. Comeau"
year: 2021
domains: [visual, elevation, css, design-tokens, craft]
evidence: "weak"
---

# Designing Beautiful Shadows in CSS — Josh W. Comeau

Use this when: defining elevation/shadow tokens for a design system; a UI's cards and dialogs look like "fuzzy grey boxes"; shadows on colored or tinted backgrounds look dirty; deciding between `box-shadow` and `filter: drop-shadow()` for non-rectangular shapes (tooltips with tails, cut-out images).

Source: https://www.joshwcomeau.com/css/designing-shadows/ (2021, adapted from his CSS course). Read in full, including the collapsed "relationship between saturation and lightness" aside, the tokenization example, and the drop-shadow section. Interactive demos were read as their code and captions, not used live. The course promotion block was skipped.

## The big idea (3 sentences)
Shadows imply elevation, and elevation directs attention: the element that seems closest to us gets looked at first. That only works if every shadow on the page belongs to one consistent lighting environment: one light source, offsets in a fixed ratio, and blur and opacity that change together with height. Two cheap tricks make CSS shadows look far more real: layer several shadows with doubling offsets and blur, and tint shadows with the background's hue instead of using transparent black.

## Core concepts
- **Two reasons to use a shadow** — to make one element more prominent (direct attention via perceived closeness) or to make the whole UI feel tactile and physical. Otherwise, skip it.
- **One light source** — treat the light as distant (like the sun), so every element casts its shadow at the same angle. Comeau's default: light from above and slightly to the left, giving x:y offsets in a fixed 1:2 ratio (e.g. 2px 4px).
- **Elevation changes four values together** — as an element rises: offsets grow, blur radius grows, opacity drops (and optionally the element scales up slightly). Check with your hand over a desk: the shadow moves away, blurs and fades.
- **Layering** — `box-shadow` uses a crude blur, so stack several shadows (after Tobias Ahlin): e.g. five layers at 1, 2, 4, 8, 16px offset with matching blur and equal low opacity (0.075 each) instead of one 6px shadow at 0.3.
- **Color-matched shadows** — semi-transparent black over a colored background darkens and desaturates it ("washed out"). Use the background's hue with reduced saturation and lightness (on `hsl(220 100% 80%)`, a shadow color like `hsl(220 60% 50%)`); full saturation looks like a glow.
- **Why lightness eats saturation** — at very high or very low lightness a color can't carry much "pigment", so HSL saturation has less visible effect; that's why the shadow needs lower saturation as well as lower lightness to look right.
- **Tokenized elevations** — three elevation tokens (small, medium, large) whose color component is a CSS variable (`--shadow-color: 220deg 60% 50%`) set on each background container, so children inherit a correctly tinted shadow when the surface color changes.
- **drop-shadow vs box-shadow** — `filter: drop-shadow()` follows the element's actual shape (transparent PNGs, tooltip tails, clipped shapes) and uses a different (Gaussian) blur; it can be GPU-accelerated, but Safari showed input lag when the filter wraps a text input.
- **Why CSS shadows look fake** — renderers like Blender raytrace light bounces (minutes per frame); `box-shadow` just blurs a box in the element's shape, so layering is a cheap approximation of soft real shadows.
- **Performance** — five layers mean roughly five times the shadow work; usually fine on modern hardware, but test on cheap phones and avoid animating layered shadows.

Comeau's three reference elevations (light from the top-left, x:y = 1:2, one tint):

| Level | Layers | Offsets (x y) and blur | Alpha per layer |
|---|---|---|---|
| Low (e.g. 50px element) | 1 | 0.5px 1px, blur 1px | 0.7 |
| Medium (e.g. 100px element) | 3 | 1px 2px / 2px 4px / 3px 6px, blur = y | 0.333 |
| High (e.g. 150px element) | 5 | 1px 2px / 2px 4px / 4px 8px / 8px 16px / 16px 32px, blur = y | 0.2 |

Tokens in his example: the shadow strings reference `hsl(var(--shadow-color) / alpha)`, and each surface sets `--shadow-color` (his example uses `220deg 60% 50%` for a light blue `hsl(220deg 100% 80%)` section; each background gets its own value), so the same elevation token re-tints itself per background.

## Actionable heuristics for product design
- When defining shadow tokens, pick one light direction for the whole product and keep the x:y offset ratio identical in every token (Comeau's example: x = y/2, light from the top-left), because mismatched angles break the illusion and read as blurry borders.
- When deciding the number of elevation levels, start with three (e.g. resting card, raised/hover, overlay/dialog) and map them to components, because each level must be visibly different and few products need more.
- When moving an element up a level, increase offset and blur together and lower per-layer opacity, because that's how physical shadows behave and users read it as "closer".
- When a shadow looks like a smudge, replace the single shadow with 3–5 layers whose offset and blur double each step (1, 2, 4, 8, 16px) at equal low alpha; smaller elements and lower elevations use fewer layers.
- Use Comeau's reference values as a starting point, all in one hue:
  - low: `0.5px 1px 1px hsl(var(--shadow-color) / 0.7)`
  - medium: three layers of `1px 2px 2px`, `2px 4px 4px`, `3px 6px 6px` at alpha 0.333
  - high: five layers of `1px 2px 2px` through `16px 32px 32px` at alpha 0.2
- When the surface behind a shadow is colored or tinted, set the shadow color to that hue with lower saturation and lightness, not transparent black, because black over color desaturates it and looks dirty.
- When building themes, expose the shadow color as a variable set per surface (page, panel, colored section), so components inherit the right tint automatically.
- When a shadow is needed on a non-rectangular shape (tooltip with an arrow, product cut-out, icon), use `filter: drop-shadow()`, but test inputs inside filtered elements in Safari.
- When tempted to animate a shadow on hover, animate `transform` (and maybe opacity of a pre-rendered shadow layer) rather than the layered `box-shadow` itself, because shadow animation repaints every frame.
- When elevation is meant to pull attention to a dialog over a page, give the dialog the highest shadow and keep the header or nav lower, because perceived closeness ranks attention.

- When a component lifts on hover or drag, you may also scale it up slightly with the shadow change for extra realism, but Comeau notes it's fine to skip that step.
- When you're unsure whether a shadow change reads as higher or lower, check it against a physical reference (lift your hand off a lit desk: the shadow moves away, softens and fades), because people judge shadows by lifelong experience, not by rules.
- When the performance budget is tight (low-end Android, long lists of cards), cut layers on repeated elements first and keep the rich stack for the few elevated ones (dialogs, popovers).
- When a design system audit finds one-off shadows tuned "until it looked alright", replace them with the shared elevation tokens, because isolated shadows can't share a light source.

## Evidence & caveats
- Craft opinion from a respected educator, grounded in everyday observation of real shadows and in Tobias Ahlin's layering technique; no user testing of shadows or attention is reported [weak/anecdotal as evidence; widely adopted craft].
- The claim that elevated elements draw attention first is plausible (depth and figure–ground cues) but not measured here.
- All color advice is in HSL. HSL is not perceptually uniform (see `references/books/oklab.md`), so the "Goldilocks" shadow color still needs eyeballing; OKLCH gives more predictable results for the same intent.
- Dark mode is not covered. Shadows mostly disappear on dark surfaces.
- Performance claims are anecdotal ("in my experience"); test on low-end devices.

## Disagreements with other references
- `references/visual/layout-spacing-elevation.md` §7.2 cites this article for "layer 2–3 shadows per level, a tight dark one (contact) plus a soft wide one (ambient)". That's not what Comeau describes: his layers are 3–5 copies with doubling offset and blur and *equal* opacity, and the top level uses five. The contact-plus-ambient recipe is a different (Material-style) tradition. Both work; attribute correctly, and use Comeau's doubling stack when you want soft, realistic depth.
- The same file says "one light source, usually above, so shadows fall downward (positive y offset)". Comeau goes further: a fixed x:y ratio with a slight horizontal offset (top-left light). A purely vertical light is also consistent; the rule that matters is the same ratio everywhere.
- The same file and `references/visual/color.md` recommend tonal elevation (lighter surfaces) in dark mode, which this article doesn't address; follow those files for dark themes.
- The same file says to tint shadows with the background hue, using an OKLCH example. That agrees with Comeau, and OKLCH is the better space for picking the value.
- `references/books/refactoring-ui.md` also uses shadows as elevation with two-part shadows; compatible, different recipe.

## Best quotes (< 25 words each, max 5)
- "Shadows imply elevation, and bigger shadows imply more elevation."
- "We can use elevation as a tool to direct attention."
- "Every shadow on the page should share the same ratio."
- "When we layer black over our background color, it doesn't just make it darker; it also desaturates it quite a bit."

## Related
- `references/visual/layout-spacing-elevation.md`, `references/visual/color.md`, `references/build/tokens-bridge.md`, `references/interaction/design-systems.md`
- `references/books/oklab.md`, `references/books/refactoring-ui.md`
- Tobias Ahlin, "Smoother and Sharper Shadows with Layered box-shadow"; Comeau's Shadow Palette Generator (tool)
