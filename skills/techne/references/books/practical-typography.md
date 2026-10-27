---
title: "Butterick's Practical Typography (2nd ed., online)"
author: "Matthew Butterick"
year: 2013-2023
domains: [typography, visual, layout, web, craft]
evidence: "weak"
---

# Butterick's Practical Typography — Matthew Butterick

Use this when: setting up body text for any reading surface (docs, help center, long-form product pages, emails, slides); someone needs a short, defensible rule list for type ("why 16px and not 12?", "why not all caps?"); a stakeholder asks for more emphasis and you need ways to get it without adding noise; reviewing numeric tables, headings or a slide deck.

Source: https://practicaltypography.com (free online book, 2nd edition; pages dated up to 2023). Read in full: introduction, why typography matters (all 6 pages), typography in ten minutes, summary of key rules, the full text-formatting chapter (point size, line spacing, line length, page margins, bold/italic, underlining, all caps, small caps, letterspacing, kerning, ligatures, centered/justified text, hyphenation, first-line indents, paragraph spacing, space above/below, headings, hierarchical headings, lists, tables, grids of numbers, rules and borders, color, alternate figures, OpenType, metrics vs optical spacing, widows/orphans), font basics and recommendations overview, system/free/bad/goofy/monospaced fonts, mixing fonts, the page-layout chapter (maxims, grids, columns, responsive web design, screen-reading considerations, websites), presentations, emails, typewriter habits, key type-composition pages (one space, quotes, dashes), "Drowning the crystal goblet", "Are two spaces better than one", and the 2020/2024 campaign-site reviews (skimmed). Skipped: the per-font "alternatives" pages, MB-font product pages, sample documents (legal), most character-by-character composition pages (ampersands, ordinals, etc.), and the Racket/essays appendix.

## The big idea (3 sentences)
Typography exists to conserve the reader's attention, which is finite and revocable, so good typography is judged by whether it reinforces the meaning of the text, not by taste. Most bad typography is inherited habit (typewriter and 1990s-web workarounds) that survives after the technical constraint is gone. Fix body text first (size, leading, measure, font), because there is more of it than anything else, then make every other change in the smallest visible increment.

## Core concepts
- **Attention as the scarce resource** — readers are always hunting for a reason to stop; typography lowers the cost of reading so more attention goes to the message.
- **Butterick's First and Second Laws** — the harder it is to judge substance, the more readers judge by typography; readers short on attention judge by typography more. (The two-résumé demo: identical content, the better-set one wins a two-second screen.)
- **Utilitarian yardstick** — typography is good if it serves the text's goal; ugly-but-effective beats pretty-but-ineffective (highway signage vs script fonts). Many solutions can be equally good.
- **Body text first** — four choices dominate: point size, line spacing, line length, font.
- **Smallest visible increment** — emphasis should be added in small steps (half points, a little space) until it is just visible; it takes less than you think.
- **Foreground vs background** — decide what is foreground (usually body text) and never let background elements (logos, nav, rules, colored blocks) upstage it.
- **Typewriter habits** — straight quotes, two spaces, underlining, all-caps paragraphs, 12 pt default, double spacing, 1-inch margins, monospaced body: workarounds for old machines, now just noise.
- **Against the crystal goblet** — typography is not "invisible"; text has no visual form without it, so presentation always adds meaning (Warde's 1932 metaphor rejected).
- **Spacing is the essence of a font** — the designer's metrics/kerning matter more than the black shapes; never let software re-space a good font (InDesign "optical" spacing).
- **Legibility research is narrow** — useful when the context is specific (signage, newsprint, screen fonts), weak at settling general conventions; conventions are set by professional practice.

Value cheat-sheet (Butterick's numbers, with the CSS he suggests):

| Decision | Butterick's value | CSS |
|---|---|---|
| Body size, print | 10–12 pt | — |
| Body size, web | 15–25 px, tuned per font | `font-size` |
| Line spacing | 120–145% of size | `line-height: 1.2–1.45` (unitless) |
| Line length | 45–90 characters incl. spaces (2–3 alphabets) | `max-width` on the text block |
| Caps / small caps tracking | +5–12% | `letter-spacing: 0.05–0.12em` |
| Paragraph signal | indent 1–4× size, or 50–100% of size as space (one, not both) | `text-indent` / `margin-bottom` |
| Heading levels | ≤ 3 (2 better) | — |
| Fonts per document | 1–2 (3 rarely) | — |
| Rules and borders | 0.5–1 pt, solid | `border` |
| Kerning | always on | `font-kerning: normal` / `kern` |
| Hyphenation | mandatory with justified text | `hyphens: auto` + `lang` |
| Slides | black background, text from 50% gray up, 12–15 lines fit | — |

## Actionable heuristics for product design
- When setting web body text, use 15–25 px with line-height 1.2–1.45 (unitless in CSS), then fine-tune by eye per font, because fonts at the same nominal size differ in apparent size (x-height on the em).
- When choosing a reading width, keep average line length at 45–90 characters including spaces (2–3 lowercase alphabets), and enforce it with `max-width` on the text element, not the page, because long lines make the return sweep to the next line hard to track.
- When a layout is responsive, keep line length in range at every breakpoint: scale font size and container width together (e.g. with `vw`) or cap width; the rules don't change with screen size. Don't trust `ch` as a proxy for average character width (it is the width of the zero).
- When you reduce type size (captions, dense tables, mobile), also reduce line spacing and line length, as newspapers do.
- When someone wants more emphasis, try in this order: space above/below, a half-step size increase, bold; avoid stacking bold + italic + caps + underline + color, because emphasis on everything is emphasis on nothing.
- When choosing emphasis in a sans serif UI font, use bold (or semibold), not italic, because most sans italics are just slanted and barely stand out.
- When using all caps, keep it under one line (labels, short headings, buttons, captions), add 5–12% tracking (`letter-spacing: 0.05–0.12em`), and never set paragraphs in caps (legal disclaimers included), because caps are slower to read and readers skip what is hard to read.
- When the font has no real small caps, don't fake them with `font-variant` scaling; synthetic small caps are too light and too tall.
- When writing headings, use at most 3 levels (2 is better), sentence case (avoid Title Case), no underline, no centering, bold if anything, a small size increase, and more space above than below so the heading belongs to the text it introduces.
- When numbering a deep hierarchy (docs, settings, legal), use tiered numbers (1.2.3) instead of mixed roman numerals and letters, because each label is unique and unambiguous.
- When signaling paragraphs, use either a first-line indent (1–4× the font size) or 50–100% of the font size as space between paragraphs, never both.
- When aligning text blocks, left-align body text in browsers and word processors; justify only with hyphenation and a good engine, and center only short titles and phrases.
- When building a table, start with no cell borders and add rules only where needed (0.5–1 pt solid), increase cell padding before adding lines, and remove color fills that don't encode data.
- When setting numbers in columns, use tabular lining figures (`font-variant-numeric: tabular-nums lining-nums`); align quantities right (or on the decimal), align nominal numbers (IDs, zip codes) by their own logic, keep units and precision honest (don't pad 98 to 98.000), and add the thousands comma whenever values are mixed in a column.
- When using color for text, keep body text black or near-black, and remember small text needs louder color to be noticed; on screens, consider dark gray text to soften glare. Use one hue in several shades rather than several contrasting hues.
- When mixing fonts, give each font a consistent role (body vs headings, or center vs edges) and stop at two; pairing two serifs or two sans is fine if they are clearly different, and same-designer pairings are a reliable shortcut.
- When picking a free font for a product, start from well-crafted open families (IBM Plex, Source Serif/Code, Charter, Cooper Hewitt) rather than the long tail of free fonts.
- When typing UI copy, use real typographic characters (curly quotes and apostrophes, en dash for ranges, em dash for breaks, the ellipsis character, × not x); keep straight quotes in code.
- When designing slides for a darkened room, use a black background, start text at ~50% gray and brighten until legible, keep a constant base size that would fit 12–15 lines, and avoid centered text.
- When you can't decide between two typographic options, render both and look; don't settle it with a ratio or logic.

## Evidence & caveats
- Almost entirely expert opinion grounded in professional print practice (books, newspapers, magazines) and one designer's taste [weak as evidence, strong as craft consensus for the conventions it reports]. Butterick says so himself: conventions, not science.
- The numbers (15–25 px, 120–145%, 45–90 characters, 5–12% caps tracking) are practice ranges, not measured optima. Reading research (Legge & Bigelow) supports a broad plateau of sizes, which is consistent with wide ranges rather than precise values.
- Dated or contestable: the anti-underlined-links stance ignores accessibility (WCAG 1.4.1: color alone can't mark links in running text unless contrast with surrounding text is ≥ 3:1 plus another cue on focus/hover); "screen optimization no longer matters" holds for high-DPI screens but many users still have low-DPI desktop monitors; the system-font F list (e.g. Verdana, Tahoma, Trebuchet) reflects document typography, not UI; he sells fonts and says so.
- The two-spaces study critique is a fair example of methods reading: a ~3% speed gain only for habitual two-spacers, monospaced font on an old CRT.
- Written for documents; UI concerns (dense controls, Dynamic Type, localization, contrast ratios) are mostly out of scope.

## Disagreements with other references
- `references/visual/typography.md` sets body line-height at 1.4–1.6 and measure at 45–75ch (~66 ideal, Bringhurst). Butterick's 1.2–1.45 and 45–90 are looser on length and tighter on leading. Trust typography.md for UI defaults (large-x-height UI faces need more leading, and WCAG 1.4.12 assumes text survives 1.5); use Butterick's ranges as acceptable outer bounds.
- `references/visual/typography.md` §3.1 recommends modular-ratio type scales; Butterick rejects modular scales and asks for minimal increments judged by eye. Use a curated token scale (needed for systems), but adjust steps visually; neither side has outcome data. Note that Legge & Bigelow (`references/books/legge-bigelow-print-size.md`) found ~2× steps between text levels in newspapers, so "minimal increments" is about emphasis within text, not hierarchy between levels.
- `references/visual/typography.md` says "Underline only links"; Butterick wants links not underlined. For accessibility, side with typography.md and `references/interaction/accessibility.md` (color-only links fail unless contrast and a non-color cue are added).
- `references/books/refactoring-ui.md` and typography.md favor color/weight de-emphasis (gray secondary text); Butterick agrees on restraint but is warier of colored text at body sizes. Compatible.
- `references/visual/color.md` suggests near-black on off-white as optional; Butterick suggests dark gray on screens. Both mark this as preference; verify contrast.

## Best quotes (< 25 words each, max 5)
- "Typography matters because it helps conserve the most valuable resource you have as a writer—reader attention."
- "Good typography reinforces the meaning of the text."
- "Make adjustments with the smallest visible increments."
- "If you think you need three colors and five fonts, think again."
- "If the text looks good, the white space will take care of itself."

## Related
- `references/visual/typography.md`, `references/visual/layout-spacing-elevation.md`, `references/visual/visual-polish-checklist.md`, `references/visual/fonts-foundries-catalog.md`
- `references/books/legge-bigelow-print-size.md` (the vision-science side of size), `references/books/refactoring-ui.md`, `references/books/tufte-visual-display.md` (chartjunk, cited by Butterick for table rules)
- Bringhurst, *The Elements of Typographic Style*; Beier, *Reading Letters*; Butterick, *Typography for Lawyers*
