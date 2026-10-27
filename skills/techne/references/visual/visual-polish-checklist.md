# Visual Polish Checklist, Iconography, Imagery & Trends

> **Use this when:** reviewing any screen or component before handoff/ship ("make it look pro"), auditing a Figma file or a vibe-coded prototype, choosing icon sets or image/illustration direction, or judging whether a visual trend is worth adopting.
> **Skip when:** you need to build the underlying system from scratch (start with `typography.md`, `color.md`, `layout-spacing-elevation.md`, then come back here).
> **Output:** a scored audit (pass/fail per item, severity, exact fix values) and a short list of the top 5 fixes by impact.

---

## 0. How to run the audit (agent procedure)

1. **Get the artifact:** a Figma frame (screenshot plus inspect values) or a running page (screenshot plus DevTools computed styles). Check both light and dark mode, at mobile and desktop widths.
2. **Big picture first** (section A, 5 min): squint, grayscale, hierarchy. If A fails badly, fix that before the details. Fixing pixels on a broken hierarchy is wasted work.
3. **Then systematic passes** (sections B–H). Mark each item ✅ / ⚠️ / ❌, with severity: **S1** blocks use or accessibility, **S2** looks clearly unprofessional, **S3** craft refinement.
4. **Report the top 5 by impact,** not all 50. Each fix gets an exact change ("title 20→24px, weight 600; gap above section 16→32"), not "improve hierarchy".
5. **Respect the data:** if a "polish" fix touches a high-traffic conversion surface (paywall, checkout, signup), flag it as a test candidate rather than a silent change.
6. **Ethics gate:** if the "polish" request is to make a dark pattern look nicer (hidden cancel, disguised ads, fake urgency timers, pre-checked upsells, confirmshaming), refuse that part and propose an honest alternative.

---

## 1. The 50-point visual polish checklist

### A. Big picture (hierarchy and composition)
1. **One clear focal point:** blur or squint the screen. The primary element (title, key number or main CTA) is the first thing you see.
2. **Grouping is visible:** related items cluster, and space inside groups is smaller than space between them.
3. **Grayscale test passes:** with color removed, hierarchy and states (error, selected) are still clear.
4. **One primary action per view or section:** other actions are visibly secondary or tertiary.
5. **Consistent left edges:** count distinct left alignment lines per region. As few as possible, none off by 1–3px.
6. **Content width is controlled:** paragraphs ≤ ~75ch, and forms don't stretch across a 1440px screen (≈ 400–560px max for single-column forms).
7. **Whitespace is intentional:** no cramped edges (≥ 16px mobile margins) and no random voids. Big gaps mark big transitions.
8. **The screen looks like its category** (prototypicality): a settings page looks like settings, so users know where they are (Tuch et al. 2012).

### B. Typography
9. **≤ 2 families, ≤ 3–4 weights, ≤ 6–9 sizes** on a screen, all from tokens.
10. **Adjacent hierarchy steps are distinct:** at least 1.2× size or a full weight step apart, never 15 vs 16px.
11. **Body ≥ 16px** for reading (14px only in dense desktop tools). Labels ≥ 11–12px.
12. **Line height** around 1.4–1.6 for body and 1.1–1.3 for headings. Large text isn't "airy".
13. **Display text tightened** (−1 to −3% tracking). ALL-CAPS labels loosened (+5–12%).
14. **No widows/orphans in headings:** `text-wrap: balance`, or manual breaks in key headlines.
15. **Real punctuation:** curly quotes, apostrophes, en/em dashes, ellipsis character, × for multiplication, non-breaking spaces before units.
16. **Tabular figures** in tables, counters, prices in lists and timers. Numbers right-aligned in columns.
17. **No faux bold/italic,** no stretched or squashed text, no outlined text in UI.
18. **Truncation is designed:** a 2-line clamp, tooltips or expand. Nothing important (names, prices, legal) is cut.

### C. Color and contrast
19. **Text contrast ≥ 4.5:1** (≥ 3:1 for ≥ 24px or ≥ 18.66px bold), including placeholders and text on images.
20. **Meaningful icons, input borders, focus rings ≥ 3:1** against adjacent colors (WCAG 1.4.11).
21. **Color is never the only signal:** errors have an icon and a message, links in body text are underlined or otherwise distinguishable, charts have labels or patterns.
22. **Accent used only for interactive or primary elements,** not for decoration.
23. **Every color maps to a token.** No near-duplicates (#F5F5F5 and #F6F6F6 on the same screen).
24. **Neutrals are slightly tinted toward the brand hue** (or deliberately pure), and consistent everywhere.
25. **Status colors are consistent and reserved:** the same red means error everywhere, and is never decorative.
26. **Dark mode is designed, not inverted:** tonal elevation, desaturated accents, off-white text, dimmed images, and logos with dark variants.

### D. Spacing, sizing and alignment
27. **All spacing values on the 4/8 scale.** No 5, 7, 13 or 15px gaps.
28. **Padding is optically balanced:** text sits visually centered in buttons and chips, and icons are nudged to look centered.
29. **Icon ↔ label gaps are consistent** (typically 4–8px) across all buttons, menus and list items.
30. **Touch targets ≥ 44pt / 48dp on mobile,** and ≥ 24px everywhere (WCAG 2.5.8), including close buttons and inline links in dense lists.
31. **Baselines align** in rows that mix sizes (price + unit, avatar name + timestamp).
32. **Dividers are inset to the text column** in lists with leading icons or avatars (unless full-bleed is the system choice). They are consistently 1px (or hairline on @3x).
33. **Equal-height cards in rows,** with actions pinned to the same baseline at the bottom of each card.
34. **Responsive states exist:** at 320, 768, 1024 and 1440+ nothing overflows, overlaps or leaves orphaned single items on a row.

### E. Shape, depth and surfaces
35. **Radius scale is consistent per component type,** and nested radii are concentric (inner = outer − padding).
36. **Shadows share one light source,** are layered and soft, tinted not pure black, and map to an elevation scale.
37. **Border or shadow, not both heavy:** one separation technique per surface level.
38. **Modals and sheets have a scrim** and clear figure–ground separation. The background is inert.
39. **No "cardception":** containers are nested at most two levels, and plain sections replace cards where grouping is already clear.

### F. Iconography and imagery
40. **One icon family,** with consistent stroke width, corner style, fill logic and optical size, at 16/20/24 sizes on the pixel grid.
41. **Icon weight matches adjacent text weight** (SF Symbols does this automatically; on the web, match stroke to font weight, e.g. 1.5px stroke with 400–500 text at 16–20px).
42. **Icons have labels** unless they're universally understood (search, close, back, share is borderline). Icon-only buttons have an accessible name (`aria-label` / `accessibilityLabel`).
43. **Images are crisp and correctly cropped:** @2x/@3x or responsive `srcset`, `object-fit: cover` with a deliberate focal point, no stretched aspect ratios, consistent aspect ratios within a grid.
44. **Image and illustration style is consistent:** one illustration style, one photo treatment (color grade, lighting, framing), with diverse and authentic people (no obviously generic stock or uncanny AI faces).
45. **Avatars and logos have fallbacks** (initials on tinted backgrounds, and a subtle border so white logos don't vanish).

### G. States and real content
46. **All states designed:** default, hover, pressed, focus-visible, disabled, loading, empty, error, success, and offline where relevant.
47. **Skeletons or placeholders match the final layout** (no layout shift when content loads; CLS ≈ 0).
48. **Stress-tested with real content:** long names, 0 / 1 / 1,000,000 values, missing images, German strings (+35%), RTL if supported, and the largest Dynamic Type or 200% zoom.

### H. Motion and finish
49. **Motion is purposeful and quick:** ~100–200ms for micro-interactions, ~200–400ms for larger transitions; ease-out for entering, ease-in for exiting. Respects `prefers-reduced-motion` / Reduce Motion [craft standard; durations per Material/Apple motion guidance].
50. **Pixel-level finish:** no blurry assets or half-pixel borders, no visible tokens drift between Figma and code, favicon/app icon and status bar/safe areas handled, scrollbars not overlapping content, focus ring visible on keyboard navigation only (`:focus-visible`).

**Scoring:** S1 items must all pass. A "pro" screen has ≥ 45/50 with no S1/S2 failures.

---

## 2. Iconography guide

### 2.1 Icon systems (pick one family and stick to it)
| Library | Style | License | Notes |
|---|---|---|---|
| **SF Symbols** (Apple) | Weights matched to SF Pro; scales; rendering modes (monochrome, hierarchical, palette, multicolor); variable color; animations | Apple platforms only (Apple license) | Default for iOS/macOS. Never ship in Android or web |
| **Material Symbols** (Google) | Variable font with FILL, wght, GRAD, opsz axes; Outlined/Rounded/Sharp | Apache 2.0 | Excellent for Android/web; tune opsz to size |
| **Phosphor** | 6 weights (thin → fill + duotone) | MIT | Very flexible, friendly |
| **Lucide** (Feather fork) | 24px grid, 2px stroke, rounded | ISC | Default in shadcn/ui; huge coverage |
| **Heroicons** (Tailwind team) | Outline 24 / solid 20 / mini 16 | MIT | Clean, limited set |
| **Tabler Icons** | 24px, 2px stroke (adjustable) | MIT | Very large set |
| **Radix Icons** | 15×15 crisp | MIT | Great for dense UIs |
| **Iconoir, Remix Icon, Streamline** | various | check each (Streamline has free + paid tiers) | |

### 2.2 Icon craft rules
- **Grid and keylines:** design on a 24×24 grid with ~2px padding (live area 20×20). Use keyline shapes (circle, square, portrait and landscape rectangles) so different glyphs carry equal visual weight (Material icon design principles).
- **Stroke:** 1.5–2px at 24px. Scale the stroke with size (don't render a 24px icon at 16px with a 2px stroke). Use outlined for inactive and filled for active/selected (e.g. tab bars). This is a common, learned convention.
- **Optical size:** small icons need simpler shapes and heavier relative strokes. Use dedicated 16px versions where available.
- **Pixel snapping:** align strokes to whole pixels at 1×. Avoid 0.5px-offset blur, especially on Windows and 1× displays.
- **Color:** icons inherit text color (`currentColor`). Use the accent only when the icon is the interactive element.
- **Comprehension:** icons alone are often misunderstood. Labels plus icons outperform icons alone for unfamiliar functions (Wiedenbeck, "The use of icons and labels in an end user application program", *BIT* 1999 [moderate]; NN/g icon usability guidance [moderate]). The hamburger icon is now widely recognized, but hiding navigation behind it still reduces discoverability (NN/g 2016 [moderate]).
- **Accessibility:** decorative icons get `aria-hidden="true"`. Meaningful standalone icons get a label. Meaningful icon contrast ≥ 3:1.

---

## 3. Imagery and illustration direction

**Decide the role first:** does imagery inform (product photos, avatars, maps), create mood/brand (hero, onboarding), or explain (spot illustrations, diagrams)? Informative imagery deserves the most quality budget.

### 3.1 Photography
- Write a short art-direction spec: subject, lighting (natural / studio), color grade (warm / neutral / brand-tinted), framing (tight crops, negative space for text), people (diverse, authentic, doing real tasks), and what's banned (handshakes, laptop-with-glowing-code clichés, staged laughter).
- Keep consistent aspect ratios per context (e.g. 1:1 avatars, 4:3 or 3:2 cards, 16:9 heroes) and set `aspect-ratio` in CSS so images don't cause layout shift.
- Performance: AVIF/WebP with fallbacks, responsive `srcset`/`sizes`, lazy-load below the fold, and preload the LCP image. In Next.js use `next/image`. Aim for LCP ≤ 2.5s ("good" Core Web Vitals threshold, Google) [strong: published threshold].
- **Stock and AI imagery:** sources like Unsplash, Pexels and licensed libraries. Check the license and model releases for commercial use. AI-generated images: watch for uncanny hands/text and homogenized "AI look". Disclose them where your policy or law requires, and never use them to fake testimonials, reviews or real people.

### 3.2 Illustration
- Choose **one** style system: line, flat, 3D, textured or hand-drawn. Define a stroke width, palette subset (from color tokens), level of detail, character proportions and perspective.
- Illustrations in empty states or onboarding should *explain*, not just decorate, and must work in dark mode (separate variants or token-driven SVG fills via `currentColor`/CSS variables).
- Sources for inspiration and assets: Storyset, unDraw (customizable colors, MIT-like license; verify), Humaaans, Blush, Open Peeps. Overused "corporate memphis" (flat, faceless, big-limbed figures, late-2010s) now reads as generic. Use it knowingly or avoid it.
- 3D: consistent lighting and materials. Keep file sizes in check (Lottie/Rive for motion; static PNG/WebP fallbacks).

---

## 4. Aesthetic trends: a critical eye

**Principle:** trends are borrowed attention. Timeless qualities — clear hierarchy, readable type, consistent spacing, honest affordances, sufficient contrast — compound. Adopt a trend only for a *specific* communicative reason, never as the foundation of a product UI.

| Trend | Era | Verdict | Use it when / avoid when |
|---|---|---|---|
| **Flat design** (post-skeuomorphism) | 2012–13 (Windows Metro, iOS 7) | Lasting, with corrections | Pure flat removed affordances. "Flat 2.0" brought back subtle shadows/borders to show clickability. NN/g research found flat UIs with weak signifiers increase uncertainty and slow users down (Moran, NN/g 2017) [moderate] |
| **Neumorphism** | 2019–20 | **Fad; failed** | Low-contrast extruded shapes fail WCAG 1.4.11 and make states ambiguous. Avoid for controls |
| **Glassmorphism / translucency** | 2020–; Apple **Liquid Glass** (2025) | Context-dependent | Good for layered context (overlays, toolbars). Risky for text contrast. Apple's 2025 rollout drew public legibility criticism and adjustments [moderate; widely reported]. Always provide an opaque fallback |
| **Bento grids** | 2023– | Useful pattern, overused | Good for feature overviews and dashboards with mixed content sizes. Avoid as a default for every landing page |
| **Big, bold type / oversized headlines** | 2018– | Durable in marketing | Fine for heroes. In product UI, it wastes space |
| **Gradient meshes, aurora blurs, grain** | 2021– | Fad-adjacent | Good as brand atmosphere behind non-critical content. Check text contrast and GPU cost |
| **"AI aesthetic"** (purple-blue gradients, sparkle icons, glowing orbs) | 2023– | Already a cliché | Signals "AI feature" cheaply. Differentiate with real product value and restraint |
| **Brutalism / anti-design** | 2016– | Niche, valid | Works for editorial, art, fashion and portfolios. Hostile to tasks, so avoid in transactional flows |
| **Dark mode as default** | 2019– | Lasting as an *option* | Offer both, and follow the system setting |
| **Skeuomorphic and tactile revival** (textures, physicality, 3D icons) | 2023– | Partial return | Tactility helps affordance. Keep it light and performant |
| **Minimal monochrome + one accent** | timeless-ish | Safe and durable | Risk: "templated" sameness. Add personality via type, illustration and motion |
| **Variable fonts and kinetic type** | 2018– | Lasting tech, faddish uses | Use axes for real needs (optical size, weight tuning, responsive width). Don't animate type for its own sake |

**Fad detector (ask before adopting):**
1. Does it improve comprehension, affordance or brand recognition, or only novelty?
2. Does it pass contrast and target-size requirements in every state?
3. Will it still look intentional in 3 years? (Look at the 2013, 2016 and 2020 Dribbble hits.)
4. What does it cost in performance, especially on low-end Android?
5. Is it consistent with the platform's conventions? (Users spend most of their time in *other* apps: Jakob's Law, Nielsen [moderate; heuristic].)

---

## 5. Inspiration sources for visual craft (study, don't copy)

- **Web:** Awwwards (sites of the day), Siteinspire, Godly, Minimal Gallery, Land-book, Lapa Ninja, Httpster, One Page Love, Typewolf (type), Fonts In Use.
- **Apps/flows:** Mobbin (large library of real app screens and flows), Screenlane, Page Flows, UI Sources *(verify status)*, Refero.
- **Design systems to learn from:** Apple HIG, Material 3, IBM Carbon, Shopify Polaris, GitHub Primer, Atlassian, Microsoft Fluent 2, GOV.UK Design System (best-in-class evidence-based patterns), Radix/shadcn (code).
- **Craft writing:** *Refactoring UI* (Wathan & Schoger), Josh Comeau's blog (CSS craft), Rauno Freiberg's "Invisible Details of Interaction Design" (2023), Linear/Vercel/Stripe design blogs (practitioner case studies; marketing-adjacent, weigh accordingly).
- **Rule:** collect 5–10 references, name the *specific* quality being borrowed from each ("the type contrast of X, the density of Y"), then synthesize. Never lift a layout wholesale.

---

## 6. Myths to correct when you hear them

| Myth | Reality |
|---|---|
| "Golden ratio makes layouts beautiful" | No good evidence. People don't reliably prefer 1.618 rectangles (Markowsky 1992; reviews of Fechner-style studies are mixed) [myth] |
| "7±2 items max in a menu" | Miller (1956) was about short-term memory span for recall, not menus that users *see*. Working memory is closer to ~4 chunks (Cowan 2001). Menus are recognition tasks, so group and label them well rather than counting to 7 [myth as applied] |
| "Users don't scroll" | They do. Attention concentrates above the fold but doesn't stop there (NN/g) [myth] |
| "The 3-click rule" | Task success and user satisfaction don't drop after 3 clicks. Clear "scent" matters more (Porter, UIE 2003) [myth; weak-moderate evidence] |
| "Red/green buttons convert better" | Salience vs surroundings matters, not hue [myth as general rule] |
| "Serif for print, sans for screen" | Not supported at modern resolutions [contested → largely myth] |
| "Dark mode is better for your eyes" | Positive polarity generally reads better for normal vision. Dark mode is a preference or accessibility option [myth as general claim] |
| "Whitespace is wasted space" | Whitespace drives grouping and comprehension. Removing it hurts scanning [myth] |

## Sources
- Tuch, A. et al. *IJHCS* 2012; Wiedenbeck, S. *Behaviour & IT* 1999
- Moran, K. "Flat UI Elements Attract Less Attention and Cause Uncertainty", NN/g, 2017
- Nielsen Norman Group: "Hamburger Menus and Hidden Navigation Hurt UX Metrics" (2016); "Scrolling and Attention" (2010/2018); "Icon Usability" (2014)
- Miller, G. "The Magical Number Seven, Plus or Minus Two", 1956; Cowan, N. "The magical number 4 in short-term memory", *BBS* 2001
- Markowsky, G. "Misconceptions about the Golden Ratio", *College Mathematics Journal*, 1992
- Porter, J. "Testing the Three-Click Rule", UIE, 2003
- Google web.dev: Core Web Vitals thresholds (LCP, CLS, INP)
- Apple HIG (SF Symbols, Materials, Motion); Material Design 3 (Icons, Motion)
- W3C WCAG 2.2 (1.4.1, 1.4.3, 1.4.11, 2.4.7, 2.5.8)
- Freiberg, R. "Invisible Details of Interaction Design", rauno.me, 2023
- Wathan, A. & Schoger, S. *Refactoring UI*, 2018
