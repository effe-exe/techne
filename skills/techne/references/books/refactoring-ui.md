---
title: "Refactoring UI"
author: "Adam Wathan & Steve Schoger"
year: 2018
domains: [visual, layout, color, typography, hierarchy, design-systems]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Refactoring UI — Adam Wathan & Steve Schoger

Use this when: a developer-built screen "looks wrong" and you need concrete, mechanical fixes rather than theory; you are de-emphasizing secondary content, choosing button styles for several actions, or replacing borders; you are building a grey and brand color scale with fixed shades before writing components.

Basis: the book (a ~218-page PDF sold only by the authors) was not read. These notes rest on the authors' free material: the book's official site and full table of contents, the "Building Your Color Palette" preview adapted from the book on refactoringui.com, and their two Refactoring UI Medium articles ("7 Practical Tips for Cheating at Design", "Redesigning Laravel.io"), which present tips the book expands. The site advertises "two free chapters" behind an email form; I did not sign up, so those chapters were not read. About a dozen of the book's ~50 chapter topics are covered by these sources; the rest are known only by their titles.

## The big idea (3 sentences)
Good-looking interfaces mostly come from a set of learnable tactics, not artistic talent: once you can name a problem (too many borders, everything the same weight, grey text on color), you can apply a known fix. Visual hierarchy is the central job, and it is created more by contrast, weight and color than by size, and more by de-emphasizing the secondary than by shouting the primary. Systems decided up front (a spacing scale, a type scale, nine shades per color) prevent the slow drift into dozens of nearly identical values.

## Core concepts
- **Tactics, not talent** — the book's premise; each chapter names one problem and one fix, readable in any order.
- **Hierarchy through color and weight** — use 2–3 text colors (dark not-black for primary, grey for secondary, lighter grey for ancillary) and 2 weights (400/500 normal, 600/700 emphasis); avoid weights under 400 for UI text.
- **De-emphasize to emphasize** — when the active item doesn't stand out, make the others lighter rather than making it heavier (the Laravel.io nav).
- **Contrast, not grey** — grey on white works because it lowers contrast; on colored backgrounds use white at reduced opacity or a hand-picked color of the background's hue.
- **Separate visual hierarchy from document hierarchy** — a page title can be an `h1` and still be small; in app UIs the data (e.g. a revenue figure) may deserve the biggest type (Baremetrics example).
- **Labels are a last resort; semantics are secondary** — two chapter titles; the Medium article shows the button version: primary actions solid and high-contrast, secondary outlined or low-contrast, tertiary styled as links; a destructive action gets big red styling only when it is the primary action (e.g. in its confirmation dialog).
- **Use fewer borders** — separate elements with a shadow, a slightly different background, or more space instead.
- **Offset shadows** — a vertical offset mimics light from above and looks more natural than big blur and spread; the book's depth chapters cover a single light source, elevation, two-part shadows.
- **Icons have an intended size** — icons drawn for 16–24px look chunky when scaled 3–4×; enclose them in a colored shape or use an icon set drawn for large sizes.
- **Accent borders** — a colored strip on an alert, active tab or page top adds personality cheaply.
- **Link-heavy UIs** — when nearly everything is a link, don't color them all; use bold dark text (as YouTube does) and reserve link color for links inside prose.
- **Put the important content first; move metadata down and make it quieter** (Laravel.io thread cards).
- **Colour palettes need many shades** — 8–10 greys, 5–10 shades of each primary, several accent colors with shades; a complex UI may need ~10 colors × 5–10 shades.
- **Define shades up front** — no on-the-fly `lighten()`/`darken()`; pick a base (good as a button background), then darkest (text) and lightest (tinted background, e.g. alerts), then fill 700/300, then the gaps on a 100–900 scale.
- **Trust your eyes, not the math** — adjust saturation and lightness by eye; hue-wheel "harmony" generators produce five unusable swatches.
- **Other chapter topics (titles only, not read)** — start with a feature not a layout; detail comes later; choose a personality; limit your choices; start with too much white space; grids are overrated; relative sizing doesn't scale; avoid ambiguous spacing; baseline not center; line-height is proportional; ditch hex for HSL; don't let lightness kill your saturation; greys don't have to be grey; accessible doesn't have to mean ugly; text needs consistent contrast; beware user-uploaded content; don't overlook empty states.

## Actionable heuristics for product design
- When a text element needs more or less importance, change color and weight before font size, because size-only hierarchy forces huge headings and tiny secondary text that hurts legibility.
- When everything on a screen feels equally loud, pick the one primary element per region and make its neighbors lighter or smaller, because emphasis is relative and de-emphasis keeps the palette calm.
- When secondary text sits on a colored or image background, use white (or near-white) at reduced opacity, or a darker or lighter shade of the background hue, never neutral grey, because grey on color looks dirty and the real goal is lower contrast.
- When a page has several actions, rank them before styling: one solid primary, outlined or tinted secondaries, link-style tertiaries, because semantic colors (green = good, red = delete) can make a rarely used destructive action the loudest thing on the page.
- When a destructive action is secondary on its page, style it as secondary or tertiary and give it full red emphasis only in the confirmation step, because that's where it becomes the primary action (pair with an undo or confirm pattern from `references/process/states-and-edge-cases.md`).
- When you reach for a border to separate two things, first try more space, then a subtle background difference, then a soft shadow, because stacked borders make dense UIs look busy.
- When a card list has borders on every card, try collapsing them into one bordered list with dividers or into a shared background, because unified components fit more content and read as one thing.
- When shadows look fake, reduce blur and spread and add a small positive y-offset, keeping one light source across the product, because people expect light from above.
- When an app page title competes with the content, shrink it (the Laravel.io title went from 39px to 24px; the sidebar heading from 26px to 12px set in bold caps with letter-spacing), because the user came for the content, not the label.
- When you use all-caps for small headings, add a little letter-spacing, because capitals set tight at small sizes are hard to read.
- When nearly everything is clickable (lists, feeds, tables), style titles as bold dark text and drop the link color, because uniform bright links overwhelm scanning; keep link color for inline links.
- When metadata (author, time, tags) sits above the title in a card, move it below and make it smaller and lighter, because users scan by title.
- When you place icons in large feature tiles, keep them near their designed size inside a colored circle or rounded square, or buy a large-format set, because enlarged small icons look crude.
- When a design feels plain, add one accent: a colored top bar, a left border on alerts, an underline on the active tab, because a small, consistent dose of brand color reads as "designed" without new imagery.
- When starting a design system, define a 100–900 scale for greys, primary and each accent before building components, and choose new shades by eye on real components, because shades generated on the fly multiply into near-duplicates and break consistency.
- When picking the extremes of a scale, choose the darkest shade as a text color and the lightest as a tinted background, using an alert component as the test, because those are the two places extremes are used.
- When you pick a base color for a scale, choose the shade that works as a button background, because that's the most demanding everyday use.
- When text fails contrast checks in a brand color (light green usernames), darken that shade rather than abandoning the color, because accessible contrast and brand character can coexist.
- When the audience is technical (developers, analysts), it's fine to tighten padding and list spacing, because dense layouts like Hacker News suit them; check this with your own users rather than assuming.

## Evidence & caveats
- Practitioner advice from a designer–developer pair, illustrated with redesigns. There is no user testing or measurement; "looks better" is the authors' judgement. Treat it as craft heuristics, not evidence.
- Several tactics agree with stronger sources: separate by spacing (Gestalt proximity, `references/books/wertheimer-gestalt-laws.md`); one primary action per region (`references/visual/layout-spacing-elevation.md` §4.3); contrast requirements (`references/books/wcag-22.md`).
- The color advice predates perceptual color spaces in CSS. The book's "Ditch hex for HSL" chapter is now outdated: HSL lightness is not perceptual, so steps look uneven (see `references/visual/color.md`, which recommends OKLCH). The "pick by eye" process in the preview still works and is compatible with OKLCH tools.
- "Reduce the opacity of white text" can fail WCAG contrast on mid-tone backgrounds; always check the computed contrast.
- The two Medium articles date from 2017–2018 and were written to promote the book. The table of contents is accurate for the current edition, but I could not verify how the book develops each chapter.

## Disagreements with other references
- `references/visual/color.md` recommends OKLCH/perceptual scales; Refactoring UI (in its chapter titles) recommends HSL. Trust `color.md` for the color space; keep Refactoring UI's workflow (fixed shades, base → extremes → fill gaps, adjust by eye).
- `references/visual/layout-spacing-elevation.md` §7 suggests choosing either a border or a shadow per card and tinted multi-layer shadows; this agrees with "use fewer borders" and "offset shadows". Both are fine together.
- `references/visual/typography.md` sets body weight and contrast rules from legibility research; Refactoring UI's "no weights under 400 for UI text" is consistent and more blunt.
- Brand-heavy marketing pages may need richer decoration than Refactoring UI's restrained app-UI tactics; see `references/masters/timeless-principles.md` (minimal vs rich).

## Best quotes (< 25 words each, max 5)
- "Design with tactics, not talent." (refactoringui.com)
- "Making the text closer to the background color is what actually helps create hierarchy, not making it light grey." (Medium, "7 Practical Tips")
- "You can't build anything with five hex codes." ("Building Your Color Palette")
- "Trust your eyes, not the numbers." ("Building Your Color Palette")

## Related
- `references/visual/color.md`, `references/visual/layout-spacing-elevation.md`, `references/visual/typography.md`, `references/visual/visual-polish-checklist.md`
- `references/interaction/design-systems.md`, `references/build/tokens-bridge.md`
- Tailwind CSS default palette and spacing scale (same authors) as an applied version of these systems.

## Sources
- Official site with full table of contents and the "use fewer borders" sample tactic: https://www.refactoringui.com/
- "Building Your Color Palette" (adapted from the book): https://refactoringui.com/previews/building-your-color-palette
- Wathan & Schoger, "7 Practical Tips for Cheating at Design" (Refactoring UI on Medium): https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886
- Wathan & Schoger, "Redesigning Laravel.io" (Refactoring UI on Medium): https://medium.com/refactoring-ui/redesigning-laravel-io-c47ac495dff0
- Saved under `books/free/refactoring-ui/`. Not read: the two free chapters offered by email; Steve Schoger's video tips (YouTube, no transcripts); the authors' Twitter tips.
