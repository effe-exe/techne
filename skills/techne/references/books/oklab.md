---
title: "A perceptual color space for image processing (Oklab)"
author: "Björn Ottosson"
year: 2020
domains: [color, visual, design-systems, tokens, data-viz]
evidence: "moderate"
---

# A Perceptual Color Space for Image Processing (Oklab) — Björn Ottosson

Use this when: building or auditing a tonal color scale, theme generator or token set; choosing how gradients, hover/pressed tints or chart ramps interpolate; someone proposes building a palette in HSL/HSV; explaining why `oklch()` is now the default advice and what it does not solve (gamut, contrast).

Source: https://bottosson.github.io/posts/oklab/ (original 2020 post with the 2025 introduction "From personal project to industry standard"). Read in full: introduction, definition, comparison with HSV, implementation (XYZ and linear-sRGB conversions, matrices updated 2021-01-25), motivation and requirements, review of existing models, derivation method, error table, Munsell, Luo-Rigg and blending comparisons. Also skimmed the follow-up post "Okhsv and Okhsl: two new color spaces for color picking" (https://bottosson.github.io/posts/colorpicker/, 2021) for its stated limits of Oklab in pickers. Code listings were not studied line by line.

## The big idea (3 sentences)
Common design color models (HSV/HSL) don't predict how light, colorful or what hue a color looks, and the perceptual spaces that do (CIELAB, CAM16) are either bad at hue (blue drifts to purple) or awkward to compute and blend. Oklab keeps the simple, invertible structure of IPT (linear map to cone-like responses, a cube root, another linear map) but fits it so its lightness, chroma and hue predictions are close to CAM16-UCS, with hue better than most. The result is a space where you can change one of L, C or h without visibly shifting the other two, and where blends between colors look even.

## Core concepts
- **Coordinates** — L (perceived lightness), a (green–red), b (blue–yellow); polar form LCh: C = √(a²+b²), h = atan2(b, a). In CSS these are `oklab()` and `oklch()`.
- **Requirements Ottosson set** — opponent space; good prediction of lightness, chroma and hue; perceptual orthogonality (edit one without the others); even blends (no detour through a warmer or different hue); D65 white (as sRGB, Display P3, Rec. 2020); numerically well behaved and differentiable; assumes normal well-lit viewing; scale-invariant (exposure change only scales coordinates, no fixed reference white).
- **Verdict on other models** — CIELAB/CIELUV: poor hue, especially blue. CIECAM02/CAM16-UCS: best overall uniformity but bad numerical behavior, not scale-invariant, chroma compression makes blends desaturate. OSA-UCS: good but no analytic inverse. IPT: great hue, poor lightness and chroma. JzAzBz: good, but HDR-oriented scale dependence. HSV: meets none except D65.
- **Derivation** — parameters optimized on three datasets: CAM16-generated equal-lightness pairs and equal-chroma pairs (within Pointer's gamut of surface colors) and IPT's equal-hue data; error measured by swapping the supposedly equal coordinate and computing CIEDE2000 differences. Cube-root exponent fixed at 1/3, blue constrained so the sRGB gamut stays convex.
- **Results (RMS error)** — lightness: Oklab 0.20 vs CIELAB 1.70, HSV 11.59; chroma: 0.81 vs CIELAB 1.84; hue: 0.49, similar to IPT (0.48) and JzAzBz (0.43) and better than CIELAB (0.69). Equal-lightness HSV hue sweeps show yellow, magenta and cyan far lighter than red and blue.
- **Blending** — white-to-blue blends shift toward purple in CIELAB, CIELUV and HSV; CAM16 desaturates too fast; Oklab stays blue.
- **Adoption (2025 note)** — Photoshop's default gradient interpolation, CSS Color 4/5 in major browsers, Unity gradients, Godot's color picker.
- **Limits (from the follow-up post)** — the sRGB gamut has an irregular shape in Oklab, so changing hue at fixed L and C can leave the gamut; naive clamping of RGB channels distorts hue, lightness and chroma. Because Oklab has no reference white, its L is a weaker lightness predictor in pickers with a defined white; Okhsl/Okhsv add a corrected lightness estimate (L_r, close to CIELAB L*) and map sRGB to a cylinder at some cost in uniformity.

Error comparison from the post (lower is better; CAM16-UCS generated the L and C test data, so it scores 0 there by construction):

| Model | Lightness RMS | Chroma RMS | Hue RMS |
|---|---|---|---|
| Oklab | 0.20 | 0.81 | 0.49 |
| CIELAB | 1.70 | 1.84 | 0.69 |
| CIELUV | 1.72 | 2.32 | 0.68 |
| OSA-UCS | 2.05 | 1.28 | 0.49 |
| IPT | 4.92 | 2.18 | 0.48 |
| JzAzBz | 2.38 | 1.79 | 0.43 |
| HSV (as a Lab-like grid) | 11.59 | 3.38 | 1.10 |
| CAM16-UCS | 0.00 | 0.00 | 0.59 |

How it is computed, in brief: linear sRGB (or XYZ, D65) → 3×3 matrix to approximate cone responses (l, m, s) → cube root of each → 3×3 matrix to L, a, b. The inverse is the same steps backwards, which is why it is cheap enough for per-pixel and per-frame use (gradients, animations, shaders).

CSS usage reminders (spec features, verify support for your targets):
- `color: oklch(0.62 0.15 250);` — L 0–1, C roughly 0–0.37, h in degrees.
- `background: linear-gradient(in oklab, var(--from), var(--to));`
- `color-mix(in oklch, var(--brand) 80%, white);` for tints.
- Relative colors, e.g. `oklch(from var(--brand) calc(l - 0.1) c h)`, for pressed or hover states.

## Actionable heuristics for product design
- When generating a tonal scale (50–950) for a brand or neutral color, step L evenly (finer at the light end for backgrounds) and hold hue constant in OKLCH, because equal L steps look like equal lightness steps across hues, which HSL steps do not.
- When building several hue scales that must feel equally strong (status colors, chart categories, avatar colors), give them the same L at each step and similar C, and expect yellows to need lower chroma and different handling to stay in gamut, because perceived lightness and available chroma differ by hue.
- When chroma is pushed at very light or very dark steps, lower it, because those regions hold little chroma inside sRGB, and out-of-gamut values get clipped unpredictably.
- When a color must stay in sRGB, gamut-map by reducing chroma at fixed L and h (the approach the CSS Color 4 spec uses for gamut mapping; spec knowledge, not from this post), never by clamping R, G, B independently, because channel clamping shifts hue and lightness.
- When interpolating gradients, hover/pressed tints, theme transitions or data ramps, interpolate in Oklab/OKLCH (`linear-gradient(in oklab, …)`, `color-mix(in oklch, …)`) instead of sRGB or HSL, because blends stay on hue and avoid muddy or purple midpoints. For two hues far apart, prefer `in oklab` (straight line) over `in oklch` (goes around the hue wheel) when you want to avoid passing through unrelated hues.
- When desaturating or making a grayscale version (disabled states, image filters, print previews), use Oklab L to keep perceived lightness constant.
- When building a sequential chart ramp, vary L monotonically and keep hue fixed or gently rotating, because lightness order is what readers decode; check the endpoints stay in gamut.
- When someone uses OKLCH L as a contrast guarantee, stop them: L is a perceptual lightness estimate, not WCAG or APCA contrast; verify text pairs with a contrast checker.
- When building a color picker or a theme editor for end users, prefer Okhsl/Okhsv-style controls (Oklab perception mapped to the sRGB cylinder), because raw OKLCH sliders easily produce out-of-gamut colors.

## Evidence & caveats
- Oklab is fitted to CAM16-generated lightness and chroma data, not to new human experiments; Ottosson says the comparison can't show which model best matches human perception, only that Oklab predicts hue well and is close to CAM16-UCS on L and C [moderate].
- Designed for "normal well lit viewing" and surface-color gamut; it does not model viewing conditions, adaptation, dark mode surround, HDR or small-field effects (thin text, chart lines) [design limit].
- Uniformity is about appearance of single colors, not contrast between two colors or legibility.
- The broad industry adoption (the author lists CSS, Photoshop, Unity and Godot; `references/visual/color.md` adds Tailwind v4) is strong evidence of practical usefulness, not of perceptual optimality [strong for adoption].
- Matrices changed slightly in 2021 (differences after the third decimal); implementations from before then can differ trivially.

## Disagreements with other references
- `references/visual/color.md` §1 says OKLCH is "perceptually uniform: Better" and "fixes LCH's blue hue shift". That matches this source. Add the nuance that Oklab's lightness is fitted without a reference white, and the author built Okhsl for pickers because of gamut shape and L in a fixed-white context; HCT (Material, not covered by this post) is an alternative built on CAM16 with different trade-offs.
- `references/visual/color.md` (Gradients bullet) recommends interpolating gradients `in oklch`. This source supports perceptual interpolation; note that polar (`oklch`) interpolation can swing through intermediate hues for distant colors, so `in oklab` is often safer for two-hue gradients.
- `references/visual/color.md` treats contrast with WCAG/APCA; Oklab has nothing to say about contrast, so there is no conflict, but don't let L stand in for contrast.
- `references/books/comeau-designing-shadows.md` explains shadow and saturation effects in HSL terms (very light or dark colors carry less saturation); in Oklab terms that's the chroma limit near very light and very dark L. Use Oklab for the actual values.

## Best quotes (< 25 words each, max 5)
- "It is called the Oklab color space, because it is an OK Lab color space."
- "Yellow, magenta and cyan appear much lighter than red and blue." (on HSV at constant value and saturation)
- "Blending two colors should result in even transitions."

## Related
- `references/visual/color.md`, `references/build/tokens-bridge.md`, `references/interaction/design-systems.md`, `references/interaction/accessibility.md`
- `references/books/comeau-designing-shadows.md`, `references/books/ft-visual-vocabulary.md` (chart color ramps)
- Ottosson, "Okhsv and Okhsl" (2021); CSS Color Module Level 4 (oklab/oklch, gamut mapping); Evil Martians oklch.com
