---
title: "Designing with Type: The Essential Guide to Typography (5th ed.)"
author: "James Craig, Irene Korol Scala (5th ed. revision)"
year: 2006
domains: [typography, visual, craft, education]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Designing with Type — James Craig

Use this when: you are teaching or onboarding someone to typography and want a structured, exercise-based path; you need a quick reminder of how the five classic type categories (Old Style, Transitional, Modern, Egyptian, sans serif) differ and what that means for leading; you are reviewing ragged-right text, paragraph indication or emphasis styles and want a checklist; you want designers to compare several typographic treatments of the same copy before choosing one.

Source basis: the book is in print with no free edition. These notes use only the author's official companion
sites, designingwithtype.com (original site, built by Craig for his Cooper Union students) and
designingwithtype.com/5 (companion to the 5th edition): the full 5th-edition table of contents, Craig's own
introductions to the five classic typefaces, the twelve Cooper Union project briefs drawn from the book, and
an annotated "design concerns" figure for ragged text. Most of the companion site is galleries of student work
(images), so the book's explanatory chapters on spacing, leading, measure, grids, display type and colour
were not available. Coverage is low; this file is mainly a pointer plus the few rules the site states.

## The big idea (3 sentences)
Learn typography by working deeply with a handful of classic typefaces instead of skimming hundreds, because
seeing how small changes in letterform change texture and readability trains the eye.
The book moves from basics (terminology, measurement) through text type (spacing, leading, measure,
arrangement, paragraphs, emphasis, grids) to display type, colour and a sequence of graded projects.
Its method is practice: set the same copy many ways, compare, and judge readability with your own eyes.

## Core concepts
- **Five classic typefaces as a curriculum** — Garamond (French Old Style), Baskerville (English Transitional,
  1757), Bodoni (Italian Modern, late 1700s), Century Expanded (American Egyptian/slab, 1894) and Helvetica
  (Swiss sans serif, 1957). Each stands for a stage in type history and is still widely used.
- **Old Style** — little thick–thin contrast, heavily bracketed serifs, oblique stress, caps shorter than
  ascenders, open round forms; described as extremely readable.
- **Transitional** — more contrast, lighter bracketing, near-vertical stress; Baskerville is wide for its
  x-height, closely fitted and "pleasant and readable".
- **Modern** — strong contrast, unbracketed hairline serifs, vertical stress; Bodoni has a small x-height but
  looks wide and black, so Craig says it should be well leaded.
- **Egyptian / slab** — thick slab serifs and low contrast; Century Expanded's large x-height and simple forms
  make it very legible.
- **Sans serif** — little stress, optically equal strokes; Helvetica's large x-height and slightly condensed
  letters make it readable, and Craig says sans serifs should always be leaded.
- **Text type topics (from the 5th-ed. contents)** — letterspacing and wordspacing, linespacing (leading),
  line length (measure), type arrangements (justified, flush left, flush right, centred, random), paragraph
  indications, creating emphasis, grids.
- **Display type topics** — selecting and arranging display type, optical considerations, punctuation,
  display initials, modifying type.
- **Ragged-text "design concerns"** (annotated figure on the companion site) — avoid lines of equal length,
  lines ending or starting with the same word, predictable steps, very short words at the end (or start) of
  the measure, single words stranded after punctuation, lines that are too long or too short, and widows.
- **Graded projects** — comping type by hand and copyfitting, setting the same text on computer, typestyles
  (roman, italic, bold, all caps, caps and small caps, tight vs normal spacing, lining vs oldstyle figures),
  paragraph indications from conservative to outrageous, expressive words, enhanced quotation, an early
  letterform piece with three comps, double-page spread, 8-page brochure on a grid, experimental typography,
  ransom note, and logos from two or three letters.

## Actionable heuristics for product design
- When choosing a UI or reading face, judge it by its category traits, not its name: high-contrast Modern
  faces (Didone-style) need extra leading and generous size, so keep them for display and large editorial
  text; low-contrast, large-x-height faces (slab, sans, many Old Style text cuts) suit body and small sizes.
- When setting sans-serif body text, never set it solid; give it real leading (in UI terms, a line-height
  well above 1.2, typically 1.4–1.6), because Craig's rule that sans serifs "should always be leaded" matches
  the guidance for large-x-height UI faces in `references/visual/typography.md`.
- When text is flush left / ragged right (the default for product UI), review the rag as a shape: no long
  run of equal-length lines, no staircase pattern, no tiny word hanging at line end, no one-word last line.
  On the web, use `text-wrap: pretty` for paragraphs and `text-wrap: balance` for headings, and edit copy
  where a bad rag persists.
- When choosing between emphasis styles (italic, bold, caps, small caps) or figure styles (lining vs oldstyle),
  set the same paragraph in each and compare texture, length and readability side by side before deciding,
  as in Craig's typestyles project; do the same for paragraph separation (indent vs space vs other).
- When exploring an expressive treatment (hero, campaign, empty state), produce several distinct options on
  purpose: one where the image or symbol dominates, one where display type dominates, one where text dominates
  (Craig's three-comp brief), then pick, instead of polishing the first idea.
- When onboarding junior designers or engineers to type, use a small fixed set of faces and repeated exercises
  with the same copy, because Craig's curriculum is built on the claim that comparing a few classics trains
  the eye faster than browsing many fonts.
- When a logo or monogram must work small, design the range from conservative (legibility first) to
  experimental (impact first) and test the conservative end at real UI sizes.

## Evidence & caveats
- This is a craft textbook. Its rules are expert convention from print practice, not experimental findings.
  The companion site gives no data. Rate the advice as opinion that agrees with the wider tradition.
- The category descriptions are standard type history; the claim that Jannon, not Garamond, cut the type
  often sold as "Garamond" (stated on the site) is well established in type history.
- "Extremely readable" or "very legible" for specific faces is impressionistic; reading research finds small
  differences between ordinary text faces at normal sizes (see `references/books/tinker-legibility-of-print.md`
  and `references/books/legge-bigelow-print-size.md`; x-height matters more than category).
- The book is print-first (picas, points, comping, copyfitting); translate to screen units, responsive
  measures and variable fonts yourself.
- Not read: the chapters themselves (spacing, leading, measure, grids, display type, colour), so any specific
  numbers the book gives are not captured here.

## Disagreements with other references
- `references/books/practical-typography.md` (Butterick) and `references/visual/typography.md` already cover
  the same ground with screen-specific values; prefer them for numbers. Use Craig for the exercise-based
  method and the category-to-leading link.
- Craig's "random" arrangement and outrageous paragraph indications are teaching exercises; product UI should
  stay with flush-left text, as `references/visual/typography.md` advises (centred only for ≤ 3 lines).

## Best quotes (< 25 words each, max 5)
- "Because of the strong vertical stress, accentuated by its heavy thicks and hairline thins, Bodoni should be well leaded."
- "In general, sans serif typefaces have relatively little stress, with optically equal strokes, and should always be leaded."
- "There is no better way to train the eye to typographic subtleties than by studying the changing forms in typeface design over the centuries"
- "Avoid predictable steps." / "…and avoid widows!" (annotations on the ragged-text figure)

## Related
- `references/visual/typography.md`, `references/visual/fonts-foundries-catalog.md`
- `references/books/lupton-thinking-with-type.md`, `references/books/practical-typography.md`,
  `references/books/hochuli-detail-in-typography.md`, `references/books/tinker-legibility-of-print.md`
- `references/books/grid-systems-muller-brockmann.md` (grids chapter not read here)

## Sources
- Original companion site (about the site, Craig's bio): https://www.designingwithtype.com/
- 5th-edition companion site, home page with the full table of contents: https://www.designingwithtype.com/5/home.php
- Craig's introductions to the five classic typefaces: https://www.designingwithtype.com/5/fiveclassic.php?whatImage=3
  (through `whatImage=7`)
- Ragged-text design concerns figure: https://www.designingwithtype.com/5/Proj_text_arrangements.php?whatImage=4
  (and `=5`, `=7`; figure images under /5/projtypearrangements/images/)
- Comping brief: https://www.designingwithtype.com/5/comping.php
- Cooper Union project list and the twelve project briefs: https://www.designingwithtype.com/cooperunion.html,
  https://www.designingwithtype.com/cooper0/index.html, https://www.designingwithtype.com/cooper1/1_intro.html
  … https://www.designingwithtype.com/cooper12/12_intro.html
- Book description page: https://www.designingwithtype.com/resources_book_dwt5.html
- Checked, no excerpt available: https://www.penguinrandomhouse.com/books/33163/designing-with-type-5th-edition-by-james-craig-and-irene-korol-scala/
- Local copies: books/free/craig-designing-with-type/ (git-ignored).
