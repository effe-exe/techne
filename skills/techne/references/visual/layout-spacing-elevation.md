# Layout, Spacing, Hierarchy & Elevation

> **Use this when:** laying out a screen, setting grids/breakpoints, choosing spacing values or a spacing scale, fixing "cluttered" or "floaty" layouts, tuning density, or defining corner radii, shadows and elevation.
> **Skip when:** the question is purely typographic or about color (see `typography.md`, `color.md`).
> **Output:** concrete values (spacing tokens, grid specs, breakpoints, shadow tokens) or a ranked fix list for a screen.

---

## 0. Point of view

1. **Spacing is the main tool for showing relationships.** Before adding a border, a divider, a card or a color, try moving things closer or farther apart.
2. **Use a scale, not a ruler.** Every gap comes from a small set of tokens. "13px" is never a design decision.
3. **Hierarchy is a budget.** Each screen gets one primary focal point, a few secondary ones and lots of quiet. If everything is emphasized, nothing is.
4. **Align everything to something.** Every edge should line up with another edge or a grid line. Random alignment is what makes a screen look amateur.
5. **Content defines breakpoints.** Devices change every year; the point where your content breaks doesn't.
6. **Use depth only when it means something.** Elevation should say "this is on top / temporary / movable", not decorate.

---

## 1. Gestalt and perception (the evidence base)

| Principle | What it means for UI | Source / strength |
|---|---|---|
| **Proximity** | Items close together are seen as a group. It's the strongest cheap grouping tool | Wertheimer, 1923 [strong; classic, replicated] |
| **Similarity** | Same color, shape or size reads as the same type or function, e.g. all links share a style | Wertheimer, 1923 [strong] |
| **Common region** | A shared background or border groups items (cards, sections) and can override proximity | Palmer, 1992 [strong] |
| **Uniform connectedness** | Lines connecting elements (steppers, timelines) group most strongly | Palmer & Rock, 1994 [strong] |
| **Continuity / alignment** | Elements on a shared line read as related; this is what grids exploit | Wertheimer; Wagemans et al. review, *Psych. Bulletin* 2012 [strong] |
| **Figure–ground** | Modals, sheets and popovers must clearly separate from the background (scrim, elevation) | Rubin, 1915 [strong] |
| **Isolation (von Restorff)** | The one different element gets noticed and remembered. That's how a primary CTA works | von Restorff, 1933 [strong] |
| **Aesthetic–usability effect** | Attractive interfaces are *perceived* as easier to use and earn more patience with flaws | Kurosu & Kashimura, 1995; Tractinsky et al., 2000 [moderate] |
| **Visual complexity** | Lower complexity and higher prototypicality (looks like its category) get better first impressions | Tuch et al., 2012 [moderate] |

**Agent heuristic, the "internal ≤ external" rule:** the space *inside* a group must be smaller than the space *between* groups. A label 8px above its field and 24px from the previous field is correct. 16px/16px is ambiguous. This one rule fixes most "messy forms".

---

## 2. Spacing system

### 2.1 Base unit: 4 and 8
- **8pt grid** for layout and component sizing (Material Design's 8dp grid; widely adopted). **4pt half-step** for small adjustments: icon gaps, tight labels, line-heights.
- Why 8: it divides cleanly at common screen densities (1×, 1.5×, 2×, 3×) and gives enough distinct steps. The value of it is consistency, not magic.
- **Line heights also on 4** (16/20/24/28/32…), so text boxes snap to the same rhythm.

### 2.2 Recommended scale (tokens)
```
space-0    0
space-0.5  2    hairline nudges (avoid in layout)
space-1    4    icon ↔ label gap (small), badge padding
space-2    8    icon ↔ label gap, tight stacks, chip padding-x
space-3    12   input padding-y, compact list item gaps
space-4    16   default padding, mobile screen margin, card padding (compact)
space-5    20   (optional)
space-6    24   card padding, gap between form fields, tablet margin
space-8    32   gap between sections within a card/page section
space-10   40
space-12   48   section separation (mobile)
space-16   64   section separation (desktop)
space-20   80
space-24   96   major section breaks (marketing)
space-32   128  hero/marketing vertical rhythm
```
- Steps grow roughly geometrically. At larger sizes, a 4px difference is invisible, so skip values.
- Name tokens by **step** (`space-4`) or **t-shirt** (`md`), not by use-case ("form-gap"), unless it's a component-level alias.

### 2.3 Padding recipes (component defaults)
| Component | Height | Padding (x / y) | Notes |
|---|---|---|---|
| Button (md) | 40 (web) / 44–50 (mobile) | 16 / 10 | Horizontal padding ≈ 1.5–2× vertical. Icon-only buttons are square |
| Button (sm) | 32 | 12 / 6 | Touch target must still be ≥ 24px (WCAG 2.5.8 AA) and ideally 44pt/48dp |
| Button (lg) | 48–56 | 20–24 / 14 | Primary mobile CTAs |
| Text input | 40–48 | 12–16 / 10–12 | 16px font on mobile web (prevents iOS zoom) |
| Card | — | 16 (compact) / 24 (default) / 32 (spacious) | Card padding ≥ the gap between cards' internal elements |
| List row | 44–56 mobile; 32–40 desktop dense | 16 / 12 | Leading icon 24 + 16 gap |
| Modal/dialog | — | 24 (desktop), 16–20 (mobile sheet) | Title → body 8–12, body → actions 24 |
| Table cell | 32 (compact) / 40 / 52 (comfortable) | 12–16 / 8 | Left-align text, right-align numbers |

**Optical vs mathematical padding:** text boxes include internal leading, so a button with equal padding often *looks* bottom-heavy or top-heavy. Trust the eye and adjust by 1–2px, or use cap-height trimming (`text-box-trim` in CSS, "vertical trim" in Figma). Icons next to text also often need −1/+1px nudges to look centered.

### 2.4 Touch and pointer targets
- **WCAG 2.2 SC 2.5.8 (AA):** targets ≥ **24×24 CSS px**, or enough spacing that a 24px circle around each doesn't overlap a neighbor.
- **Platform guidance:** Apple HIG ≥ **44×44 pt**; Material ≥ **48×48 dp** (visual element can be smaller, with the hit area extended).
- Fitts's law: movement time grows with distance and shrinks with target size (Fitts, 1954) [strong]. Make frequent and primary actions big and close to where the thumb or cursor already is. Put destructive actions far from the primary one.
- Thumb zones: the "thumb zone" (Hoober, 2013 observational study of ~1,300 people) shows most one-handed phone use favors the lower-middle of the screen [moderate; observational]. It supports bottom navigation and bottom sheets for primary mobile actions.

---

## 3. Grids and layout

### 3.1 Column grids
| Context | Columns | Gutter | Margin | Max content width |
|---|---|---|---|---|
| Mobile (< 600) | 4 | 16 | 16 (20–24 on large phones is fine) | full |
| Tablet (600–1023) | 8 | 16–24 | 24–32 | full or ~720 |
| Desktop (≥ 1024) | 12 | 24–32 | 32–80 / auto | 1120–1280 content; 1440 for app shells |
(Based on Material Design layout guidance; values are common defaults [craft standard])

- 12 columns divide into 2, 3, 4 and 6, which is why they're the web default.
- For apps and dashboards, **layout regions** often matter more than columns: nav rail/sidebar (e.g. 240–280 px expanded, 64–80 collapsed), a fluid main area, an optional inspector (320–400 px).
- Text inside wide layouts needs its own max-width (`65ch`) even if the grid is wider.
- **Baseline grids** (every text baseline on a 4/8 rhythm) are rigorous in print. On the web they're fragile and usually not worth enforcing; the 4px line-height grid gets most of the benefit [contested/craft].

### 3.2 Breakpoints
- Material 3 window size classes: **compact < 600**, **medium 600–839**, **expanded 840–1199**, **large 1200–1599**, **extra-large ≥ 1600** dp (m3.material.io; verify).
- Tailwind defaults: sm 640, md 768, lg 1024, xl 1280, 2xl 1536.
- Apple: **size classes** (compact/regular, per axis), not pixel breakpoints. In SwiftUI, use `horizontalSizeClass`, `ViewThatFits` and adaptive stacks.
- **Rules:** design at least 3 states (mobile, tablet/small laptop, wide desktop). Add a breakpoint *where the layout breaks*, not where a device sits. Prefer **container queries** (`@container`) for components that live in different widths (cards in sidebars vs main areas).
- Test the awkward widths: 320px (small phones, 400% zoom equivalent; WCAG 1.4.10 Reflow requires no 2D scrolling at 320 CSS px), 768, 1024, 1280 and 1920+.

### 3.3 Alignment rules
- Use **one left edge per region**. Count the distinct left edges in a screen; fewer is better.
- Align text by the **baseline or cap-height**, not by the bounding box, when mixing sizes in one row (e.g. a price with a currency unit).
- **Optical alignment:** round and pointed shapes (play icons, "O", "A") need to overshoot the edge slightly to look aligned. Center a play triangle by its visual mass, not its box.
- Center alignment suits isolated, short, symmetric content (empty states, dialogs on mobile, hero). Left alignment suits everything that is scanned.
- Icon + text rows: center the icon to the **first line's** x-height/cap-height, not to the whole multi-line block.

---

## 4. Visual hierarchy recipes

### 4.1 The levers (use 2–3 per element, not all)
Size · Weight · Color/contrast · Position (top-left in LTR reading order, near the start of the flow) · Whitespace around it · Shape/containment · Motion (rarely).

### 4.2 Recipe: one screen, three levels
1. **Primary (1 thing):** the page title *or* the main CTA *or* the key number. It gets the highest contrast, the largest size or the accent fill, plus whitespace.
2. **Secondary (2–5 things):** section titles, key data, secondary actions. Medium weight, primary text color, normal size.
3. **Tertiary (everything else):** metadata, helper text, timestamps. Smaller size, secondary text color, and still ≥ 4.5:1 contrast.
Then check it with a **squint/blur test**: blur the screenshot (about 5–8px Gaussian, or squint). The primary element should be the first blob you see, and groups should be visible as blobs.

### 4.3 Button hierarchy
- One **primary** (solid accent) per view or per section. Secondary is outline or tonal. Tertiary is text/ghost.
- Destructive actions are secondary in style until the confirmation step, where the confirm button becomes solid danger.
- Put the primary action where the platform puts it: bottom-right in desktop dialogs (Windows conventions differ; follow the target OS), full-width at the bottom of mobile sheets, trailing in iOS navigation bars.

### 4.4 Scanning patterns: what's real
- **F-pattern** (NN/g eye-tracking, Nielsen 2006; Pernice 2017) appears when text is *unstructured*. It describes a failure mode, not a goal. Good formatting (headings, bold keywords, bullets) produces "layer-cake" scanning instead [moderate].
- **"Users don't scroll" is a myth.** Users do scroll, though attention drops below the fold. NN/g found 57% of viewing time above the fold, 74% within two screenfuls and 81% within three (Fessenden 2018; desktop 1920×1080, 120 participants, 130,000+ fixations) [moderate]. NN/g's view (opinion, not measured) is that modern pages tend to be too sparse; whitespace that pushes key content below the second screenful costs attention — cut content before adding space. **Implication:** put the value proposition and primary action above the fold, and design scroll cues (cut-off content). Don't cram everything up top.
- **Z-pattern** for sparse marketing layouts is a craft heuristic [weak].
- **Banner blindness:** users ignore ad-like rectangles and over-styled promos (Benway & Lane, 1998; NN/g 2018 update) [strong]. Don't make important content look like an ad.

---

## 5. Density

| Mode | When | Typical values |
|---|---|---|
| Spacious | Consumer, onboarding, marketing, first-time users | 16–18px body, 56–64 list rows, 24–32 card padding |
| Comfortable (default) | Most product UI | 14–16px body, 44–52 rows, 16–24 padding |
| Compact | Expert tools, tables, dashboards, admin | 13–14px body, 32–40 rows, 8–12 padding |

- Material 3 density scale: each step down (−1, −2, −3) reduces component height by 4dp *(verify)*.
- **Offer density as a user setting** in data tools rather than choosing for everyone.
- Density does not mean clutter. Compact UIs need *stricter* alignment and fewer decorative elements. Remove borders and backgrounds before you remove whitespace.
- Data-driven check: for expert tools, measure tasks per minute and error rates. Experts often prefer seeing more rows despite saying the UI "looks busy".

---

## 6. Shape: corner radius

- Pick a **radius scale**: 0, 4, 8, 12, 16, 24, full (pill). Small elements get a small radius, large containers a larger one.
- **Concentric (nested) radii:** inner radius = outer radius − padding. A card with 24px radius and 8px padding holds an image with 16px radius. Mismatched nested corners are a top polish flaw.
- Radius signals personality: 0–4 is serious/technical/editorial, 8–12 is neutral modern product, 16–24+ and pills are friendly/consumer. Apple platforms use continuous-curvature corners ("squircles"; `RoundedRectangle(cornerRadius:style: .continuous)` in SwiftUI; CSS `corner-shape: squircle` is emerging, verify support).
- Keep radius consistent per component type across the product.

---

## 7. Depth and elevation

### 7.1 What elevation means
Elevation communicates **layer order and temporariness**: base surface < raised card < sticky header < dropdown/popover < modal/sheet < toast. Define 4–6 levels and map them to components, not to taste.

### 7.2 Shadow craft (light mode)
- **One light source** for the whole product, usually above, so shadows fall downward (positive y offset).
- **Layer shadows** instead of one heavy one. Two recipes:
  - *Comeau* ("Designing Beautiful Shadows in CSS", 2021 [craft]): 3–5 layers whose offsets and blur double each step (1, 2, 4, 8, 16px) at equal low opacity per layer, with a fixed x:y offset ratio of 1:2 (light from the top-left); lower elevations use fewer layers. → references/books/comeau-designing-shadows.md
  - *Contact + ambient* (Material-style, as in the token set below): a tight dark contact shadow plus a soft wide ambient one, 2 layers.
- Higher elevation means larger blur, larger y-offset and *lower* opacity per layer.
- **Tint shadows** with the background hue (e.g. `oklch(0.3 0.03 265 / 0.12)` on a blue-tinted neutral) instead of pure black. Tokenise it: write elevation tokens against a `--shadow-color` variable and have each surface set its own value, so the same token re-tints per background.
- Non-rectangular shapes (tooltip tails, cut-out PNGs): `filter: drop-shadow()` follows the real shape; avoid wrapping text inputs in it (Safari input lag).
- Example token set:
```
elev-1: 0 1px 2px rgb(16 24 40 / .06), 0 1px 3px rgb(16 24 40 / .10)            cards on gray bg
elev-2: 0 2px 4px rgb(16 24 40 / .06), 0 4px 8px rgb(16 24 40 / .08)            hover/raised
elev-3: 0 4px 6px rgb(16 24 40 / .05), 0 12px 16px rgb(16 24 40 / .08)          dropdowns, popovers
elev-4: 0 8px 8px rgb(16 24 40 / .04), 0 20px 24px rgb(16 24 40 / .10)          modals, sheets
elev-5: 0 24px 48px rgb(16 24 40 / .18)                                          spotlight / command palette
```
- Choose **either a border or a shadow** for separating cards. Using both heavily is noise. A 1px subtle border plus `elev-1` is a common refined combination.

### 7.3 Dark mode depth
Shadows are mostly invisible on dark. Use **lighter surfaces for higher elevation** (tonal elevation, Material 3) plus subtle 1px top/inner borders (~6–12% white). A scrim behind modals is still needed (40–60% black).

### 7.4 Material and translucency
- Blur/translucent materials (iOS materials, Apple's Liquid Glass introduced in 2025, Windows Mica/Acrylic) give context and layering. **Risk:** text contrast varies with whatever is behind it. Always guarantee legibility with a sufficiently opaque material, vibrancy-aware text colors, or a fallback when "Reduce Transparency" is on (iOS accessibility setting; CSS `prefers-reduced-transparency`, limited support).
- Use backdrop-filter sparingly on the web. It's expensive on low-end devices and when scrolling.

### 7.5 Z-index discipline (code)
Define z-index tokens: `base 0, raised 10, sticky 100, dropdown 1000, overlay 1100, modal 1200, toast 1300, tooltip 1400`. Never use `z-index: 9999`.

---

## 8. Worked example: fixing a cluttered settings screen

**Before:** 14 rows, each in its own bordered card. 16px between everything. Section titles same size as row labels. Three accent-colored buttons.
**Diagnosis:** no grouping (uniform spacing), common region overused (14 borders), no hierarchy (titles = labels), accent diluted.
**Fix:**
1. Group the rows into 3–4 sections by meaning (card sorting data if available).
2. One container per *section*, with rows inside separated by subtle dividers (inset 16px from the left, aligned with the text, not the icon).
3. Spacing: row height 52, 16px padding, section gap 32 (mobile) / 48 (desktop), section title 8px above its container. That makes internal < external.
4. Section titles: label-sm, uppercase +8% tracking *or* title-sm sentence case, in secondary color.
5. One primary button (Save) and the others secondary/text. Destructive "Delete account" goes in its own section at the bottom in danger text style.
6. Squint test → 4 clear blobs + 1 primary action. Done.

---

## 9. Anti-patterns

- Equal spacing everywhere, so no grouping is visible
- Arbitrary values (13, 17, 22px) and mixed 5px/8px systems
- Cards inside cards inside cards ("cardception"); borders on every element
- Multiple primary buttons; accent color used for decoration
- Full-width text on desktop; content glued to screen edges (< 16px margin on mobile)
- Mismatched nested radii; mixed radius styles on similar components
- Heavy single black shadows; shadows in dark mode instead of tonal elevation
- Hit targets smaller than 24px; tiny close "×" icons in corners
- Layout that breaks at 320px or at 200% zoom
- Hamburger-hiding primary navigation on desktop (reduces discoverability: NN/g 2016 hidden-navigation study [moderate])

## 10. When NOT to apply
- **Expressive/editorial/marketing:** broken grids, overlap and extreme whitespace are legitimate brand tools when content remains readable and navigable.
- **Platform conventions win** over your system for native components (iOS nav bars, Android top app bars, system sheets).
- **Data overrides taste:** if a denser layout measurably improves task completion for your users without hurting accessibility, ship density.

## Sources
- Wertheimer, M. "Laws of Organization in Perceptual Forms", 1923; Wagemans, J. et al. "A century of Gestalt psychology in visual perception", *Psychological Bulletin*, 2012
- Palmer, S. "Common region", *Cognitive Psychology*, 1992; Palmer, S. & Rock, I. "Rethinking perceptual organization", 1994
- von Restorff, H. 1933; Fitts, P. "The information capacity of the human motor system", 1954
- Kurosu, M. & Kashimura, K. CHI 1995; Tractinsky, N., Katz, A., Ikar, D. "What is beautiful is usable", 2000
- Tuch, A. et al. *IJHCS*, 2012
- Hoober, S. "How Do Users Really Hold Mobile Devices?", UXmatters, 2013
- Nielsen, J. "F-Shaped Pattern for Reading Web Content", NN/g 2006; Pernice, K. NN/g 2017
- Benway, J. & Lane, D. "Banner Blindness", 1998
- Müller-Brockmann, J. *Grid Systems in Graphic Design*, 1981
- Wathan, A. & Schoger, S. *Refactoring UI*, 2018
- Material Design 3 (layout, density, elevation); Apple Human Interface Guidelines (layout, materials)
- W3C WCAG 2.2: SC 1.4.10 Reflow, 2.5.8 Target Size (Minimum)
- Comeau, J. "Designing Beautiful Shadows in CSS", joshwcomeau.com, 2021
