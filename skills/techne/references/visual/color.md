# Color Systems for Digital Products

> **Use this when:** building or auditing a palette, tonal scales, semantic color tokens, dark mode, data-viz colors or contrast; or when a stakeholder claims "green converts better" or "blue means trust".
> **Skip when:** the issue is hierarchy or spacing rather than color (try a grayscale squint test first: most "color problems" are hierarchy problems).
> **Output:** a token set (primitives → semantic roles → components) with OKLCH values and verified contrast, or a fix list with specific values.

---

## 0. Point of view

1. **Color is a system, not a picker.** Every color in the UI comes from a token with a role. If an agent can't name a color's role, it shouldn't exist.
2. **Design in grayscale first.** Hierarchy should work without color. Then color adds *meaning* (state, brand, category), not structure.
3. **One accent does the work.** Product UIs typically need 1 brand/accent hue, 1 neutral ramp and 4 status hues. More accent hues dilute what a "tap here" color means.
4. **Perceptual uniformity is worth it.** Build scales in OKLCH (or HCT) so a step of 10 in lightness *looks* like the same step for every hue.
5. **Contrast is not optional, and WCAG 2 math isn't perfect.** Pass WCAG 2.2 AA because it's the legal baseline. Use APCA as a second opinion, especially for dark mode and large thin text.
6. **Color psychology is mostly folklore.** Don't justify palette decisions with "red = urgency boosts conversions". Justify them with role, contrast, brand and tests.

---

## 1. Color spaces: why OKLCH

| Space | Perceptually uniform? | Notes |
|---|---|---|
| sRGB hex/RGB | No | Device encoding. Equal numeric steps ≠ equal visual steps |
| HSL/HSB | **No** | `hsl(60 100% 50%)` yellow looks far lighter than `hsl(240 100% 50%)` blue at the "same" lightness. HSL-built scales are uneven |
| CIELAB / LCH (1976) | Roughly | Hue shifts in blues (blue drifts purple as chroma drops) |
| **OKLab / OKLCH** (Ottosson, 2020) | Better | Fixes LCH's blue hue shift. Simple math. In CSS Color 4: `oklch(L C H)`; supported in all major browsers since ~2023 [strong: spec + broad support] |
| HCT (Google, Material 3) | Good | Hue/Chroma from CAM16 + Tone from L*. Powers Material's dynamic color. Tone maps directly to contrast |

**OKLCH cheat-sheet**
- `L` lightness 0–1 (or 0–100%): perceived lightness. Equal ΔL ≈ equal perceived steps.
- `C` chroma 0 to ~0.37: colorfulness. Real-world UI rarely exceeds ~0.25. Max chroma depends on hue and L.
- `H` hue 0–360°: ~25 red, ~70 orange, ~100 yellow, ~145 green, ~230 cyan, ~265 blue, ~300 violet, ~350 pink (approximate).
- **Gamut:** many OKLCH colors fall outside sRGB. Browsers gamut-map, but results vary. Keep chroma within sRGB for the base set, and optionally add P3-boosted variants inside `@media (color-gamut: p3)`. When mapping, **reduce chroma at fixed L and h** — never clamp RGB channels, which distorts hue, lightness and chroma.
- **Limits:** Oklab's L/C were fitted to CAM16-generated data (not new human experiments), and its L has no reference white, so it is a weaker lightness predictor in pickers; Ottosson's Okhsl adds a corrected L_r for that (Ottosson 2020/2021). → references/books/oklab.md
- Tools: oklch.com (Evil Martians), Huetone (contrast-aware scales), Adobe Leonardo (contrast-ratio-driven palettes), Radix Colors (prebuilt 12-step scales), Material Theme Builder (HCT), Tailwind CSS v4 (default palette defined in OKLCH).

---

## 2. Building tonal scales

### 2.1 The anatomy of a good scale
- **10–12 steps** per hue, e.g. 50, 100–900, 950 (Tailwind style) or 1–12 (Radix style).
- **Lightness**: roughly even steps in OKLCH L, from ~0.98 (tint) to ~0.20–0.25 (shade). Make the steps finer at the light end, where backgrounds need subtle differences.
- **Chroma**: rises from low at the extremes to a peak around the middle steps (≈ 500–600), then falls. Very light and very dark colors can't hold much chroma, and forcing it creates garish or out-of-gamut colors.
- **Hue drift (optional, craft)**: many palettes rotate hue slightly across the scale, e.g. yellows toward orange as they darken (pure dark yellow reads as olive/brown), blues slightly toward cyan when light. This is a craft practice [weak/anecdotal but widely used].
- **Each hue has its own sweet spot.** Yellow peaks in chroma at high L (~0.85–0.9), blue peaks at low L (~0.5). So the "brand 500" of yellow and of blue will not share an L value, and that's correct.

### 2.2 Step → role mapping (Radix Colors model; a great default)
| Steps | Role |
|---|---|
| 1–2 | App background, subtle background (cards, striped rows) |
| 3–5 | Component backgrounds: normal / hover / pressed-selected |
| 6–8 | Borders: subtle separators / default borders & input outlines / strong borders & focus rings |
| 9–10 | Solid fills: primary buttons, badges (9 is the purest brand color; 10 is hover) |
| 11 | Low-contrast text (still ≥ 4.5:1 on step 1–2) |
| 12 | High-contrast text |
(radix-ui.com/colors, "Understanding the scale" [craft standard])

### 2.3 Recipe: generate a scale in OKLCH (agent procedure)
1. Take the brand color and convert it to OKLCH, e.g. `oklch(0.58 0.19 265)`.
2. Fix hue H (optionally ±5–10° drift across the ends).
3. Set the L targets, for example: `0.985, 0.965, 0.93, 0.88, 0.80, 0.70, 0.60, 0.52, 0.44, 0.37, 0.29, 0.22` (12 steps).
4. Set chroma as a curve peaking at the brand step (e.g. 0.02 → 0.19 → 0.07), then clamp each step into the sRGB gamut.
5. Place the brand color at its natural step (it may not be the middle one).
6. **Verify contrast** for the pairs you'll use: text step on background step, white text on solid step 9, and so on. Adjust L, not hue, to fix contrast.
7. Generate the neutral scale the same way with chroma 0.005–0.02, tinted toward the brand hue. Pure grays (C = 0) feel colder and more "default". Slightly tinted neutrals feel designed.

### 2.4 Neutrals carry 80–90% of the UI
Most screens are neutral surfaces and text. Spend time here:
- Text: 3 levels max — primary (≈ step 12), secondary (≈ step 11), disabled/placeholder (≈ step 9–10, which may fall below 4.5:1 *only* when disabled; WCAG exempts inactive components).
- Borders: 2–3 levels. Prefer subtle borders *or* background contrast for separation, rarely both.
- Avoid pure `#000` text on pure `#FFF` for long reading if it feels harsh. Near-black (`oklch(0.2 0.01 H)`) on off-white is softer and still ~16:1. Pure black/white isn't "wrong" [preference, weak evidence either way].

---

## 3. Semantic color roles (tokens)

### 3.1 Three tiers
```
Primitive   blue-600 = oklch(0.52 0.19 265)          (no meaning; never used directly in components)
Semantic    color.action.primary.bg = {blue-600}     (meaning; this layer swaps for themes/dark mode)
Component   button.primary.bg = {color.action.primary.bg}   (optional; for large systems)
```
In Figma: primitives in one Variables collection (single mode), semantic tokens in a second collection with Light/Dark (and brand) modes aliasing primitives. In code: CSS custom properties, or Tailwind theme variables. In SwiftUI: Asset Catalog colors with Any/Dark appearances, or a `Color` extension mapping roles.

### 3.2 Minimum semantic set
```
bg.canvas, bg.surface, bg.surface-raised, bg.surface-sunken, bg.overlay (scrim)
text.primary, text.secondary, text.tertiary, text.disabled, text.on-accent, text.link
border.subtle, border.default, border.strong, border.focus
accent.solid, accent.solid-hover, accent.solid-pressed, accent.subtle-bg, accent.text
status.{success|warning|danger|info}.{solid, subtle-bg, border, text, on-solid}
data.categorical.1–8, data.sequential, data.diverging    (see dataviz guidance)
```
Rules:
- Name tokens by **role**, never by hue (`danger`, not `red`). Brands get rebranded; meanings don't.
- **Danger ≠ brand.** If the brand is red, choose a distinguishable danger hue or rely on icon + text for errors.
- Warning yellow needs dark text on it. White on yellow fails contrast almost always.
- Every `solid` token needs a paired `on-solid` text token with verified contrast.

---

## 4. Contrast

### 4.1 WCAG 2.2 (the legal baseline in most jurisdictions; e.g. EN 301 549 / European Accessibility Act, ADA case law)
| Requirement | AA | AAA |
|---|---|---|
| Body text (SC 1.4.3) | **4.5:1** | 7:1 (SC 1.4.6) |
| Large text: ≥ 24px regular, or ≥ 18.66px (14pt) bold | **3:1** | 4.5:1 |
| Non-text: UI component boundaries, icons needed to understand, focus indicators, chart elements (SC 1.4.11) | **3:1** against adjacent colors | — |
| Use of color (SC 1.4.1) | Color must not be the *only* means of conveying information (add icon, text, pattern or underline) | |
| Focus appearance (SC 2.4.13, new in 2.2) | — | AAA: ≥ 2px-perimeter-equivalent area, 3:1 change |
Exemptions: disabled controls, logos, pure decoration. **Placeholder text is NOT exempt** — it's text. Make it ≥ 4.5:1, or don't rely on it (labels above fields).
Sources: W3C WCAG 2.2 Recommendation, 2023 [strong: normative standard].

### 4.2 Known WCAG 2 contrast weaknesses [contested → well-documented]
- The formula isn't perceptually uniform. It **overstates contrast of dark color pairs** (e.g. mid-gray text on black can pass but look weak) and can **understate** some light pairs (white on mid-orange/blue can fail while looking readable).
- It ignores font weight/size beyond a binary "large" threshold, and ignores polarity (light-on-dark vs dark-on-light).

### 4.3 APCA (Accessible Perceptual Contrast Algorithm; Myndex/Andrew Somers)
- Outputs **Lc** (lightness contrast) from about 0 to ~106 (dark on light positive, light on dark negative). Polarity-aware, and pairs thresholds with font size and weight.
- Guideline levels (APCA "Bronze" simple mode; verify against current APCA docs):
  - **Lc 90**: preferred for body text columns
  - **Lc 75**: minimum for body text (≈ 16px/400)
  - **Lc 60**: minimum for other content text (≈ 24px/400 or 16px/700), labels
  - **Lc 45**: large/heavy headlines (≈ 36px/400, 24px/700), and meaningful icons/pictograms
  - **Lc 30**: absolute minimum for any text: placeholders, disabled, copyright
  - **Lc 15**: minimum for non-text "is something there" elements: dividers, outlines
- **Status:** APCA was explored for WCAG 3 drafts, but WCAG 3 is not final, and APCA's inclusion is **not settled** [contested]. It is not a legal standard.
- **Agent policy:** ship colors that pass **WCAG 2.2 AA**. For dark mode, thin fonts and large display text, also check APCA, and prefer the stricter result.

### 4.4 Practical contrast rules of thumb
- White text on a solid brand fill: the fill needs roughly OKLCH L ≤ ~0.6 to reach 4.5:1 (hue-dependent; verify).
- Light-gray secondary text on white: `#767676` is the lightest neutral gray that passes 4.5:1 on white. It's a famous threshold [strong: computable].
- Text on images: use a scrim (gradient overlay of 40–70% black), a text shadow, or a solid chip. Then check contrast against the *lightest* region behind the text.
- Focus ring: 2px solid, ≥ 3:1 against both the component and the background, with a 2px offset. A two-tone ring (light + dark) works on any background.

---

## 5. Dark mode

Dark mode is a second theme with its own design decisions, not an inversion.

1. **Surfaces:** avoid pure black for main surfaces in most apps. Use dark grays (e.g. Material's baseline `#121212`; OKLCH L ≈ 0.15–0.22), which leave room for elevation and reduce smearing on OLED during scrolling [craft/vendor guidance; moderate]. Pure black (`#000`) is valid for OLED-first, media/photo and "true black" settings (Apple uses it for system backgrounds in dark mode).
2. **Elevation = lighter.** Raised surfaces get *lighter*, not shadowed (shadows are nearly invisible on dark). Material uses tonal overlays; Apple uses "elevated" background variants.
3. **Desaturate and lighten accents.** Saturated colors vibrate on dark backgrounds. Use lighter tones (≈ step 4–5 in a light-theme scale moved toward 200–400) with reduced chroma for text and icons. Solid buttons can keep the brand fill if contrast holds.
3b. **Apple HIG:** custom colors should strive for **7:1** for small text (4.5:1 minimum), and every custom color needs light, dark *and* increased-contrast variants.
4. **Text:** not pure white for large bodies of text. Use ~87–92% white (or OKLCH L ≈ 0.92–0.95), with secondary text ~60–70%. Re-check contrast; opacity-based text depends on the surface.
5. **Weight:** light text on dark looks heavier and blurrier (irradiation/halation, worse with astigmatism). Consider a slightly lighter weight or a grade axis, and slightly more letter-spacing for small text.
6. **Imagery:** dim bright images a little (e.g. 90% brightness), and provide dark variants of illustrations and logos.
7. **Shadows → borders.** Use 1px subtle light borders (`border.subtle`, ~8–12% white) to separate surfaces.
8. **Evidence on readability:** dark-on-light (positive polarity) generally gives better reading performance and proofreading accuracy for people with normal vision (Piepenbrock, Mayr, Mund & Buchner, *Ergonomics* 2013) [moderate]. Some users with low vision or photophobia benefit from dark mode. **Conclusion:** offer both, default to system preference, and don't claim dark mode is "healthier" or "saves eyes" [myth]. It does save battery on OLED at high brightness [moderate; device-dependent].

Implementation: CSS `color-scheme: light dark;` plus `light-dark()` or `prefers-color-scheme` media queries. Swap at the semantic token layer only. SwiftUI: asset catalog appearances, `@Environment(\.colorScheme)`. Test both themes for every screen. Dark mode bugs are the most common regression.

---

## 6. Color psychology: myths vs evidence

| Claim | Status |
|---|---|
| "Red buttons/green buttons convert better" | **Myth as a general rule.** Famous button-color A/B tests (e.g. HubSpot's red vs green) are anecdotal single-site results; the effect, when real, comes from *contrast with surroundings* (salience, the von Restorff isolation effect: von Restorff, 1933), not from the hue [weak/anecdotal] |
| "Blue = trust, so banks use blue" | Associations exist but are culture- and context-dependent, and weak predictors of behaviour [weak]. Elliot & Maier's review (*Annual Review of Psychology*, 2014) calls the field promising but young, with many findings needing replication |
| "Red enhances attention to detail / impairs performance on tests" | Original effects (Elliot et al., *J. Exp. Psych.: General* 2007) have had **replication problems**: later larger/preregistered studies reported small or null effects (specific citations unverified) [contested] |
| Colors carry brand personality | Some systematic links between hue/saturation/value and perceived brand traits (Labrecque & Milne, *JAMS* 2012) [moderate] |
| Saturated warm colors feel "energetic", desaturated cool feel "calm" | Arousal correlates more with **saturation and lightness** than with hue (Valdez & Mehrabian, *J. Exp. Psych.: General*, 1994) [moderate] |
| Colorful, complex sites hurt first impressions | People form aesthetic judgments within ~50ms (Lindgaard et al., *BIT* 2006) [moderate]; low visual complexity and high prototypicality are preferred (Tuch et al., *IJHCS* 2012) [moderate]; preferred colorfulness varies by demographics (Reinecke & Gajos, CHI 2014) [moderate] |
| Color meanings are universal | **Myth.** White = mourning in parts of East Asia; red = luck/prosperity in China; green/red for finance is reversed in China (red = up). Localize status colors for markets like CN/JP/KR finance |

**Agent stance:** pick color for **role, contrast, salience, brand consistency and cultural context**. If a stakeholder wants a color change "because psychology", propose an A/B test with a primary metric and guardrails (see the data-driven reference). Expect any effect to come from salience, not hue.

---

## 7. Color vision deficiency (CVD)

- ~8% of men and ~0.5% of women of Northern European ancestry have red-green CVD (lower in many other populations) [strong; e.g. Birch, *JOSA A* 2012].
- Never encode meaning with red vs green alone (success/error, up/down, map categories). Add icons (✓ ✕), labels, position or patterns.
- Status hues should differ in **lightness**, not just hue. A grayscale screenshot should still distinguish success, warning and error.
- Simulate in Figma (plugins like Stark, Color Blind) or Chrome DevTools → Rendering → "Emulate vision deficiencies".
- Data-viz: use CVD-safe categorical palettes (e.g. Okabe & Ito, 2008; Paul Tol's schemes) and sequential palettes that vary monotonically in lightness (viridis family). Map palette type to the chart's relationship (FT Visual Vocabulary categories): **sequential** for distribution and spatial rates, **diverging** for deviation from a reference, **categorical** for ranking/part-to-whole series.

---

## 8. Palette composition heuristics

- **Proportion:** neutrals dominate, the accent is scarce. The "60-30-10" rule is an interior-design heuristic, not evidence [weak]. For UI, aim for accent coverage well under 10% of pixels, so that it signals interactivity.
- **Interactive color = one hue.** If your accent blue marks links and buttons, don't also use it for decorative headings or illustration fills.
- **Status colors are reserved.** Don't use the danger red as a decorative brand moment, or users will learn to ignore it.
- **Gradients:** interpolate in OKLab/OKLCH to avoid the gray "dead zone" sRGB produces between complementary hues. For two distant hues prefer `linear-gradient(in oklab, …)` (a straight line); `in oklch` goes around the hue wheel and can pass through unrelated hues. Keep gradients to brand surfaces, not to text that must be read.
- **Tinted shadows and borders:** shadows tinted with the surface hue (not pure black at 25%) look more natural (see `layout-spacing-elevation.md`).
- **Brand vs product color:** marketing can use a wide, expressive palette. The product UI should use a restrained subset. Don't import a campaign palette into core flows.

---

## 9. Audit procedure (run on any screen)

1. Grayscale it. Does the hierarchy still work? Are status states still distinguishable?
2. List every distinct color on the screen (DevTools CSS Overview, or Figma "Selection colors"). More than ~12 non-image colors usually means token drift.
3. Map each color to a token. Anything unmappable is a fix.
4. Check contrast: all text (≥ 4.5:1 / 3:1 large), icons and borders that carry meaning (≥ 3:1), and focus rings.
5. Toggle dark mode. Check surfaces, elevation, accents, images and logos.
6. Run a CVD simulation (protanopia, deuteranopia, tritanopia).
7. Check the accent: is it only on interactive or primary elements?
8. Check against cultural/market context if the product is global.

## Sources
- Ottosson, B. "A perceptual color space for image processing" (OKLab), 2020, bottosson.github.io
- W3C CSS Color Module Level 4; W3C WCAG 2.2 (2023)
- Somers, A. APCA documentation (git.apcacontrast.com / readtech.org) — verify current thresholds
- Radix Colors documentation; Material Design 3 Color system & HCT (Google, 2021–)
- Piepenbrock, C. et al. "Positive display polarity is advantageous for both younger and older adults", *Ergonomics*, 2013
- Elliot, A. & Maier, M. "Color psychology", *Annual Review of Psychology*, 2014
- Elliot, A. et al. "Color and psychological functioning: the effect of red on performance attainment", *J. Exp. Psych.: General*, 2007
- Labrecque, L. & Milne, G. "Exciting red and competent blue", *J. Academy of Marketing Science*, 2012
- Valdez, P. & Mehrabian, A. "Effects of color on emotions", *J. Exp. Psych.: General*, 1994
- Lindgaard, G. et al. "Attention web designers: You have 50 milliseconds…", *Behaviour & IT*, 2006
- Tuch, A. et al. "The role of visual complexity and prototypicality…", *IJHCS*, 2012
- Reinecke, K. & Gajos, K. "Quantifying visual preferences around the world", CHI 2014
- Okabe, M. & Ito, K. "Color Universal Design", 2008
- Albers, J. *Interaction of Color*, 1963 (relativity of color perception; still essential)
