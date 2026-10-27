# Typography for Digital Products

> **Use this when:** choosing typefaces, building or fixing a type scale, setting line length, line height or tracking, defining text styles/tokens (Figma, CSS, SwiftUI Dynamic Type), or diagnosing "the text feels off".
> **Skip when:** the task is only colour, spacing or layout (see `color.md`, `layout-spacing-elevation.md`). For *which* font to license, see `fonts-foundries-catalog.md`.
> **Output:** a type system (roles, sizes, weights, line heights, tracking), or a concrete fix list with values.

---

## 0. Point of view

Most of the interface is text. Get the type right and the product looks finished with almost no other styling. Get it wrong and nothing else can save it. Our defaults:

1. **Readability comes before personality.** Brand voice goes in display sizes, headlines and one accent face. Body and UI text exist to be read fast.
2. **Use few styles.** A good product UI needs 6–9 text styles. If you have 20, you have no hierarchy, only noise.
3. **Size by role, not by taste.** Every text element maps to a named token (`title-lg`, `body`, `label-sm`). Hard-coded sizes do not ship.
4. **Respect the user's settings.** Dynamic Type on iOS, rem units and browser zoom on the web. Layouts that break at 200% text size are bugs (WCAG 1.4.4).
5. **Evidence is thinner than folklore.** Many typography "rules" are craft conventions, not research findings. Treat them as strong defaults, not laws, and follow the evidence tags below.

---

## 1. What the research actually says (and doesn't)

| Claim | Verdict | Source / strength |
|---|---|---|
| Bigger text (up to a point) is read faster and understood better on screens | True. For general audiences, readability improved up to about 18–26px equivalents | Rello, Pielot & Marcos, "Make It Big!", CHI 2016 [moderate]; Legge & Bigelow, "Does print size matter for reading?", *J. Vision* 2011: reading speed plateaus above a "critical print size" [strong] |
| There is one "most readable" font | False. Different readers do best with different fonts, and the gains from finding the right one are large | Wallace et al., "Towards Individuated Reading Experiences", *ACM TOCHI* 2022 [moderate] |
| Serif vs sans matters for on-screen readability | Mostly a non-effect at modern resolutions | Reviews of legibility research, e.g. Beier, *Reading Letters*, 2012 [moderate]; older CRT-era findings don't carry over [contested] |
| We read by "word shape" (bouma), so ALL CAPS is unreadable | Word-shape theory is largely rejected: letters are recognised in parallel. All caps *is* still somewhat slower for running text, mainly because it's unfamiliar and lacks ascender/descender cues | Larson, "The Science of Word Recognition", Microsoft, 2004 [moderate]; Tinker, *Legibility of Print*, 1963 [moderate] |
| 45–75 characters per line is optimal | It's a craft convention (Bringhurst) with mixed experimental support. Longer lines (~95–100 cpl) were sometimes *read faster* but liked less | Bringhurst, *The Elements of Typographic Style*, 1992; Dyson & Haselgrove 2001; Dyson, "How physical text layout affects reading from screen", 2004 [contested on speed, solid on preference] |
| Users prefer and trust better-typeset text | Good typography improves mood and perceived ease, even when comprehension scores don't move | Larson & Picard, "The Aesthetics of Reading", 2005 [weak/moderate] |
| Dyslexia fonts (OpenDyslexic, Dyslexie) help dyslexic readers | No reliable benefit. Size, spacing and plain sans/roman faces matter more | Rello & Baeza-Yates 2013; Wery & Diliberto 2017 [moderate] |
| Light text weights on screens hurt legibility | True in practice, especially at small sizes, low contrast and on low-DPI screens | Craft consensus plus contrast research [moderate] |

**Agent rule:** use 45–75ch (target ~66) for long-form reading because users *prefer* it and it is a safe default. Don't claim it maximises reading speed.

---

## 2. Choosing a typeface for UI

### 2.1 UI faces vs display faces
- **UI/text faces**: large x-height (roughly 0.5–0.55 of the em or more), open apertures (c, e, s don't close up), distinct shapes for `Il1`, `O0`, `rn/m`, moderate contrast, generous default spacing, many weights, tabular figures. Examples: Inter, SF Pro, Roboto, IBM Plex Sans, Söhne, Graphik, Untitled Sans, Geist, Atkinson Hyperlegible.
- **Display faces**: tight spacing, high contrast or quirky detail, often optical sizes designed for 32px and up. They fail at 13px. Examples: Druk, Canela, PP Editorial New, GT Super, Ogg.
- **Test it:** set `Illegal 1lI 0O rn m, $1,089.00, 3:45 PM` at 12–14px on a non-retina screen and on a phone at arm's length. If any pair is ambiguous, the face is out for UI.

### 2.2 Selection checklist (score each 0–2; ship ≥ 14/18)
1. Legible at 12–13px (small labels) on a 1x screen
2. At least 4 usable weights (400/500/600/700), or a variable `wght` axis
3. Tabular *and* proportional figures (`tnum`, `pnum`), plus slashed or distinct zero if you show codes
4. Language coverage for your markets (Latin Extended, Cyrillic, Greek, Vietnamese; CJK/Arabic/Devanagari fallbacks planned)
5. Variable font or small WOFF2 files (each static weight ≲ 30–60 KB subset Latin)
6. License fits all uses: web, app embedding, ads, broadcast, ePub (see catalog file)
7. Hinting and rendering hold up on Windows (ClearType) if you have desktop web users
8. Has optical sizes or behaves well at both 12px and 48px
9. Personality fits the product's job: neutral for tools, warmer or more expressive for consumer and editorial

### 2.3 Pairing logic
- **Default: one family.** Use one superfamily (e.g. Inter + Inter Display, IBM Plex Sans + Mono + Serif) and build hierarchy with size and weight. It is the safest and most common choice in great product UI.
- **Two families max** in product UI, three in marketing (display, text, mono).
- Pair by **contrast in one dimension, kinship in another.** Example: a serif display with a sans body, with similar x-height and similar proportions (both humanist, or both geometric).
- Match **x-heights** so mixed inline text doesn't jump. CSS `font-size-adjust: ex-height 0.53` (or a matching value) normalises fallbacks and pairs.
- Avoid pairing two faces that are *nearly* the same (Helvetica + Arial, two geometric sans). It reads as a mistake.
- A monospace face is for code, data IDs and numeric tables. It is not a "techy" aesthetic for body text.

---

## 3. Type scales

### 3.1 Modular ratios
A modular scale multiplies a base size by a fixed ratio (Tim Brown, "More Meaningful Typography", *A List Apart* 2011; modularscale.com).

| Ratio | Name | Use |
|---|---|---|
| 1.067–1.125 | minor second / major second | Dense apps, dashboards, mobile UI (small range) |
| 1.2 | minor third | **General product UI default** |
| 1.25 | major third | Product + marketing hybrid, content apps |
| 1.333 | perfect fourth | Editorial, marketing, landing pages |
| 1.5–1.618 | perfect fifth / golden | Display-heavy marketing pages only. Too big a jump for UI |

**Dissent:** Butterick (*Practical Typography*) rejects modular scales and asks for the smallest visible increments judged by eye. Treat a ratio as a starting point for a curated token scale, then adjust steps visually; neither side has outcome data. → references/books/practical-typography.md

**Myth flag (golden ratio):** 1.618 has no special perceptual power in UI. It's just one ratio among many, and often too large for product scales [myth; no supporting evidence for perceptual superiority — see Markowsky, "Misconceptions about the Golden Ratio", 1992].

### 3.2 Don't follow a pure ratio blindly
Pure ratios produce fractional sizes (19.2px, 23.04px). Round to whole pixels, and preferably to a 4px line-height grid. In practice, curated scales outperform pure math. Two proven product scales:

```
Apple iOS default (Large/default Dynamic Type, pt):
Large Title 34 / Title1 28 / Title2 22 / Title3 20 / Headline 17 semibold /
Body 17 / Callout 16 / Subheadline 15 / Footnote 13 / Caption1 12 / Caption2 11
(Apple Human Interface Guidelines, Typography; verify against current HIG)

Material 3 (sp): Display 57/45/36, Headline 32/28/24, Title 22/16/14,
Body 16/14/12, Label 14/12/11  (m3.material.io, Typography)
```

Recommended **web product scale** (px, line-height in brackets), roughly a 1.2 ratio rounded to a 4px grid:
```
12 [16]  label-sm / caption
14 [20]  label / body-sm (dense UI)
16 [24]  body (default; never below 16 for long-form on mobile)
18 [28]  body-lg / lead
20 [28]  title-sm
24 [32]  title
30 [36]  headline
36 [44]  display-sm
48 [56]  display
60–72 [1.0–1.1] hero (marketing only)
```

### 3.3 Fluid type (web)
Use `clamp()` to interpolate between a mobile and a desktop scale, as in the Utopia method (utopia.fyi, Clearleft): e.g. `font-size: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);`. Rules:
- Body text should stay mostly fixed (16–18px). Fluidity belongs to display sizes.
- Always combine `vw` with `rem` in the preferred value so browser zoom still scales the text (WCAG 1.4.4). Pure `vw` text fails zoom.

### 3.4 Minimums (defaults, not laws)
- Body text: **16px web / 17pt iOS / 16sp Android** for reading content. 14px is acceptable for dense desktop tools — for labels and short UI strings, not long reading.
- **Critical print size check (Legge & Bigelow 2011):** reading speed is flat from ≈0.2° to ≈2° of x-height and falls sharply below ≈0.2°. A 16px font with a 0.5 x-height is ≈0.17° at the CSS reference distance (derived, not tested), so treat 16px as the desktop floor and prefer **17–18px for long reading**; phones held closer fare better [moderate]. → references/books/legge-bigelow-print-size.md
- **Compare and match fonts by x-height, not font-size:** x-height fractions range 0.28–0.58 of the em across typefaces, so "16px" can mean very different apparent sizes.
- Smallest legible label: **11–12px**, and only for metadata. Never for actionable text or prices.
- iOS: Safari zooms the page when a focused input's font-size is below 16px. Use ≥16px on form inputs in mobile web.

---

## 4. Line height (leading)

Line height should go *down* as size goes *up*:

| Size | Line height (unitless) |
|---|---|
| 11–14px labels, UI single-line | 1.2–1.45 (snap to 16/20px) |
| 15–18px body | **1.4–1.6** (1.5 is a safe default) |
| 20–30px titles | 1.2–1.3 |
| 32–48px display | 1.05–1.2 |
| 60px+ hero | 0.95–1.1 (check that descenders and accents don't collide) |

- Wider measure → more leading. Narrow mobile columns can use slightly less.
- Acceptable outer bounds (Butterick): line-height 1.2–1.45, web body 15–25px tuned per font. Keep 1.4–1.6 as the UI default (large-x-height UI faces need it, and WCAG 1.4.12 assumes 1.5).
- Large x-height faces (Inter, Roboto) need more leading than small x-height faces (Garamond).
- **WCAG 1.4.12 Text Spacing (AA):** the layout must survive users overriding line-height to 1.5, paragraph spacing to 2× the font size, letter spacing to 0.12em and word spacing to 0.16em. That means no fixed-height text containers.
- Use unitless line-height in CSS (`1.5`, not `24px`), so children inherit the ratio, not the value. In design tokens, store px values on a 4px grid for Figma parity.

**Vertical trim:** browsers add half-leading above and below text, so a "16px gap" in Figma renders as ~20px. Use CSS `text-box: trim-both cap alphabetic` where supported (Safari 18.2+, Chromium 133+; verify current support) or Figma's "vertical trim" setting to match design and code.

---

## 5. Line length (measure)

- Long-form reading: **45–75 characters, ~66 ideal** (Bringhurst). In CSS: `max-width: 65ch` on the text block, not the page.
- UI copy (descriptions, helper text, empty states): 40–60ch. Wrap the text, don't stretch it across a 1440px card.
- Mobile: 30–45 cpl is normal and fine.
- Outer bound: Butterick accepts 45–90 characters including spaces; use it as the tolerable range, 45–75 as the default.
- Multi-column text on screens: avoid it for anything users scroll, because they have to scroll back up to read the next column.
- Center-aligned text only for ≤ 3 lines (headlines, empty states, short dialogs). Centered paragraphs make every line start at a different place.
- Justified text on the web: avoid it unless you have `hyphens: auto` plus a correct `lang` attribute. Otherwise you get rivers.

---

## 6. Tracking (letter-spacing) by size

Fonts are spaced for an assumed size, usually text sizes. Rules:
- **Large display text: tighten** (−1% to −3%, i.e. `-0.01em` to `-0.03em`). Big text looks loosely spaced at default tracking.
- **Small text (≤ 12px): loosen slightly** (+0.5% to +2%).
- **ALL CAPS and small caps: always loosen** (+5% to +12%), because capitals were designed to sit next to lowercase.
- **Never track lowercase body text wide.** It breaks word shapes and reads as amateur — and extra letter-spacing does not speed reading of body text (Legge & Bigelow 2011).
- Inter publishes a "dynamic metrics" formula, `tracking(em) = a + b·e^(c·size)` with a ≈ −0.0223, b ≈ 0.185, c ≈ −0.1745 (rsms.me/inter/dynmetrics, Rasmus Andersson). It is a good model of how tracking should vary with size for any neo-grotesque.
- Apple's SF Pro bakes size-specific tracking into its system font and switches between Text and Display optical designs around 20pt. Use system text styles rather than fixed tracking when you build in SwiftUI.

**In Figma**, letter-spacing is in % of font size. **In CSS**, use `em`. To convert: −2% = `-0.02em`.

---

## 7. Weight, emphasis and hierarchy

- Practical weight set: **400 regular, 500 medium, 600 semibold, 700 bold.** Weights below 400 for UI text under 20px are a legibility risk. 300 is only for display sizes on high-contrast backgrounds.
- Separate adjacent levels with **at least one clear step** in weight, or a ≥ 1.2× step in size. "15px vs 16px" is not a hierarchy, it's a bug.
- **Build hierarchy by demoting, not promoting.** Make secondary text smaller, lighter or lower contrast instead of making the primary text huge and bold (Wathan & Schoger, *Refactoring UI*, 2018 [craft consensus]).
- Use colour or opacity to make text secondary, but keep it at or above contrast minimums (4.5:1, see `color.md`). Grey-on-grey "aesthetic" text is the #1 accessibility failure in Dribbble-style work.
- Use italics for emphasis inside running text. Bold is for scanning anchors. Underline only links.
- Dark mode: the same weight looks bolder on dark backgrounds (irradiation). Consider dropping −1 grade/weight step, or use a `GRAD` axis (Roboto Flex, Material Symbols) to change weight without changing width.

---

## 8. Optical sizing and variable fonts

- **Optical sizes** are designs tuned for a size range. Small sizes get bigger x-height, lower contrast, looser spacing and sturdier hairlines. Large sizes are tighter and finer. Examples: SF Pro Text/Display, Inter vs Inter Display (Inter 4.0 includes `opsz`), Roboto Flex, Fraunces, Literata, GT Super Text/Display.
- CSS `font-optical-sizing: auto` (default) maps the `opsz` axis to font-size automatically when the font has one.
- **Variable fonts:** one file contains a continuous design space (`wght`, `wdth`, `opsz`, `ital`, `slnt`, `GRAD`, plus custom axes). Benefits: fewer requests, fine-tuned weights (e.g. 450 for body on dark), responsive width. Cost: a single variable file can be larger than 2 static weights. Use variable only if you use ≥ 3 weights or need axes.
- Don't animate font weight on hover in running UI. Width changes cause layout shift unless the face is uniwidth (Recursive, some "grade"-axis faces).

---

## 9. Numbers, data and details

- **Tabular figures** (`font-variant-numeric: tabular-nums`) for anything that updates, aligns in columns or counts: prices in tables, timers, stats, charts. Use proportional figures in running text.
- Right-align numeric columns (quantities), and align on the decimal point when decimals vary. Align nominal numbers (IDs, ZIP codes, phone numbers) by their own logic, usually left. Don't pad precision (98, not 98.000).
- **Tables:** borders off by default; increase cell padding first, then add 0.5–1pt rules only where needed; remove fills that don't encode data (Butterick).
- Use lining figures in UI. Oldstyle figures are for editorial body text only.
- Use real typographic characters: curly quotes “ ” ‘ ’, apostrophe ’, en dash – for ranges (9–5), em dash — or spaced en dash for breaks, ellipsis …, multiplication × (2×), minus − in data, non-breaking space between number and unit (`10 km`, `€ 5`, following the locale's convention).
- `text-wrap: balance` for headings (≤ ~6 lines) and `text-wrap: pretty` for paragraphs, to avoid orphans. Both are progressive enhancement.
- Truncation: one-line truncation with an ellipsis needs a tooltip or full-text path. Prefer 2–3 line clamps for titles. Never truncate prices, names in confirmations or legal text.
- Localization: German and Finnish run ~30–40% longer than English, so design with +35% length headroom. CJK needs line-height 1.6–1.8, no italics and no letter-spacing tricks. Arabic and Hebrew need RTL mirroring.

---

## 10. Web font performance (vibe-coders: do this)

1. **WOFF2 only.** Subset to the scripts you need (`unicode-range`). Latin subsets are typically 15–40 KB per style.
2. **Preload only the 1–2 critical files** (body regular, maybe heading): `<link rel="preload" as="font" type="font/woff2" crossorigin>`.
3. Choose your **`font-display`** policy. `swap` shows fallback text immediately and then swaps (risk: layout shift). `optional` uses the web font only if it is cached or arrives within ~100ms (best for CLS, but the brand font may not show on first visit). `block` is for icon fonts only. Avoid it otherwise.
4. **Kill layout shift** with metric-matched fallbacks: `size-adjust`, `ascent-override`, `descent-override` and `line-gap-override` on a local fallback `@font-face`. **Next.js `next/font`** generates these automatically, self-hosts and preloads. Use it in Next projects instead of a Google Fonts `<link>`.
5. Self-host rather than hot-linking third-party CDNs. Browsers no longer share cross-site caches, and self-hosting also avoids privacy/GDPR exposure (a German court ruled against Google Fonts hot-linking in 2022 — LG München, 3 O 17493/20 [moderate; legal context, not universal]).
6. Budget: ≤ 4 font files on the critical path, ≤ ~150 KB total fonts for a content page.
7. System font stacks are a legitimate, fast, native-feeling choice for tools: `font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;`.

### SwiftUI notes
- Use semantic styles (`.font(.body)`, `.title2`, `.caption`). They scale with Dynamic Type for free.
- Custom fonts: `Font.custom("Name", size: 17, relativeTo: .body)` keeps Dynamic Type scaling.
- Test at the largest accessibility sizes (AX1–AX5). Layouts should reflow (`ViewThatFits`, vertical stacking) rather than truncate.
- Use `.monospacedDigit()` for changing numbers.

---

## 11. Text style token template

```
Token            Size/LH    Weight  Tracking  Use
display          48/56      700     -0.02em   marketing hero, onboarding
headline         30/36      700     -0.015em  page titles (web)
title            24/32      600     -0.01em   section titles, modal titles
title-sm         20/28      600     -0.005em  card titles
body-lg          18/28      400     0         lead paragraphs
body             16/24      400     0         default text
body-strong      16/24      600     0         inline emphasis, list titles
label            14/20      500     0.005em   buttons, tabs, form labels
caption          12/16      400     0.01em    metadata, timestamps
overline         12/16      600     0.08em    UPPERCASE eyebrow labels (sparingly)
mono             14/20      400     0         code, IDs
```
Name tokens by **role** (`title`, `label`), never by value (`text-24-bold`). Values change; roles don't.

---

## 12. Anti-patterns (instant amateur signals)

- More than 2 families in product UI, or 4+ weights on one screen
- Adjacent sizes 1–2px apart (15/16/17 all in use)
- Body text < 14px, or light/thin weights at small sizes
- Grey text below 4.5:1 to "look elegant"
- Wide-tracked lowercase, or untracked ALL CAPS
- Centered paragraphs; justified text without hyphenation
- Full-width paragraphs on desktop (120+ cpl)
- Straight quotes, hyphens as dashes, "..." instead of …
- Proportional figures in a changing counter or price column, so the digits jiggle
- Faux bold or faux italic (the browser synthesises them when the weight file is missing). Set `font-synthesis: none` to catch it.
- Fixed-height text containers that clip at larger Dynamic Type sizes or with translations
- Display face used at 12px; text face used at 96px without tightening

## 13. When NOT to apply these defaults

- **Brand/editorial/expressive work:** breaking rules (huge tracking, tight leading, giant ratios) is valid when deliberate, tested for legibility, and limited to non-critical text.
- **Data-dense pro tools** (trading, IDEs, analytics): 12–13px base, tight leading (1.3) and 1.067–1.125 ratios are correct. Expert users trade comfort for density.
- **Platform-native apps:** use the platform's system text styles first (SF Pro / Dynamic Type, Roboto / Material type roles). Users' muscle memory beats your scale.
- **A/B evidence beats the rules:** if a well-powered test shows a variant wins on your real metric without hurting accessibility or guardrail metrics, the data wins. Then try to understand why.

## Sources (key)
- Bringhurst, R. *The Elements of Typographic Style*, 1992 (4th ed. 2012)
- Brown, T. "More Meaningful Typography", *A List Apart*, 2011
- Legge, G. & Bigelow, C. "Does print size matter for reading?", *Journal of Vision*, 2011
- Rello, L., Pielot, M., Marcos, M.-C. "Make It Big!", CHI 2016
- Wallace, S. et al. "Towards Individuated Reading Experiences", *ACM TOCHI*, 2022
- Dyson, M. C. "How physical text layout affects reading from screen", *Behaviour & IT*, 2004
- Larson, K. "The Science of Word Recognition", Microsoft Typography, 2004
- Beier, S. *Reading Letters: Designing for Legibility*, 2012
- Tinker, M. *Legibility of Print*, 1963
- Wathan, A. & Schoger, S. *Refactoring UI*, 2018
- Butterick, M. *Practical Typography* (practicaltypography.com, free online)
- Apple Human Interface Guidelines: Typography; Material Design 3: Typography
- W3C WCAG 2.2: SC 1.4.4 Resize Text, 1.4.12 Text Spacing
