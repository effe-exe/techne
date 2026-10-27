---
title: "Detail in Typography (Das Detail in der Typografie)"
author: "Jost Hochuli"
year: 1987
domains: [typography, visual, craft, reading]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: low
---

# Detail in Typography — Jost Hochuli

Use this when: polishing micro-typography in a product (letter spacing, word spacing, leading, punctuation, dashes, lists, quotation marks); choosing a text face versus a display face; arguing that body text should be invisible rather than "interesting"; deciding how much leading a given face, size and measure needs; reviewing dense reference UIs (settings, docs, tables) that need many levels of distinction.

Source basis: the book is in print only (Hyphen Press English edition; Niggli German edition). These notes are
based on the official preview the German publisher Niggli posts on the product page: five double-page spreads of
the new, expanded German edition (pp. 10–13, 28–29, 40–41, 48–49, about 10 of 68 pages) covering the letter,
letter spacing, the line (punctuation and dashes) and line spacing/columns, plus the publisher's description.
I read the German original and summarise it in English; the English translation was not seen. Chapters on the
word, word spacing, reading physiology and the "Anmutung" (character) of typefaces were not available.

## The big idea (3 sentences)
The legibility of continuous text is decided in the details: letters, letter spacing, words, word spacing,
lines, line spacing and columns, each judged by how it serves reading rather than how it looks on its own.
Readers of long texts are conservative and want meaning, not interesting letters, so text faces must be
familiar and only subtly distinctive, while unusual faces belong to short display uses.
Spacing is optical, not arithmetic: equal-looking space between letters, lines and words depends on the shapes,
the colour of the face and the line length, so it has to be adjusted by eye and by rule of thumb together.

## Core concepts
- **Two ways of receiving type** — actual reading (turning letter sequences into meaning) and mostly
  unconscious "pictorial seeing" that triggers associations and feelings. Both always happen.
- **No face is good or bad in general** — text faces and headline/poster/decorative faces have different
  criteria. Hard-to-read faces, used sparingly and skilfully, can catch attention and pull readers in.
- **The conservative reader** — readers of longer texts reject experiments at letter level. Hochuli cites
  Stanley Morison: text letters should be neither very "different" nor "famous". It is a bad sign when a lay
  reader notices the letter shapes while reading a book.
- **Why fashionable faces date** — German "artist" faces of the early 1900s and Bauhaus geometric alphabets
  (e.g. Herbert Bayer's universal alphabet) failed for the same reason: form for its own sake, designed as
  isolated letters rather than letters in words. Futura survived because it met the wish for clear, impersonal
  form without moving too far from the traditional letter image.
- **Familiarity and distinctness** — letters must share a common formal language yet each must be clearly
  different from the others; the eye must not snag on an unfamiliar form.
- **Letter spacing is about area, not distance** — light flows into the gaps from above and below, so equal
  distances do not look equal; spacing must look equal in area (Tschichold's rule), and even that needs
  optical correction (e.g. L–T, round vs straight sides, A–V).
- **Phototype and digital setting can also tighten** — lead type could only add space; photo/digital type can
  remove it, which tempts setters into spacing that is too tight.
- **Punctuation and dashes (German conventions, pp. 40–41)** — ellipsis spacing depends on whether it marks a
  truncated word or omitted words; the hyphen is for hyphenation and compounds only; the en dash is used as a
  thought dash, a range dash ("bis-Strich") and a route dash, with small equal spaces on both sides, never
  touching letters or figures; list dashes or centred dots sit a word space from the text, either flush with the
  text edge or hanging; slashes between multi-word names need spaces or the grouping is torn apart; the
  multiplication sign stands out too much in running text, so use the font's x; abbreviations in full caps
  disturb the line, so set them in small caps.
- **Quotation marks** — German rules allow double or single forms; Hochuli prefers single marks for the
  common case and double for quotes within quotes; guillemets point inward in Germany, outward in Switzerland
  and France.
- **Line spacing (pp. 48–49)** — legibility depends on face, size, letter and word spacing, line length, and
  also on leading (body size plus extra lead). Hochuli cites Tinker on how leading, size and line length
  depend on each other.
  - Wider lines need more leading at the same face and size.
  - Lighter faces, usually those with large counters (inner spaces), need more leading than darker ones;
    the counters affect letter spacing, word spacing and leading alike.
  - Leading changes the "colour", the grey value, of a text block.
- **Justified setting** — optical margin alignment matters more at larger sizes but should be used wherever
  technically possible; an old compositor's rule allows no more than three hyphenated line ends in a row, but big holes from
  re-breaking would be worse than four or five hyphens; when
  word spaces line up into vertical "rivers" across lines, re-break the lines.
- **Reference texts are different** — dictionaries and encyclopedias need many levels of distinction (italic,
  bold, small caps, spacing, a second colour, tints); the result is restless and slows linear reading, which is
  acceptable for look-up texts, and can feel fresh in experimental books.

## Actionable heuristics for product design
- When choosing a body face for an app or docs, pick one readers will not notice: familiar letterforms, clear
  differences between similar letters (l/I/1, rn/m, a/o), no novelty construction; save quirky or geometric
  faces for logos, headlines and short marketing lines.
- When a brand wants a distinctive or hard-to-read display face, allow it only in short, large, high-attention
  spots (hero, campaign, splash), never in navigation, forms, errors or body copy.
- When adjusting tracking, judge spacing by the look of equal area between letters, and check the trouble
  pairs (T, L, V, A, round letters next to straight ones); fix with kerning in the font or `font-kerning`,
  not by tightening tracking overall.
- When tightening text to fit (cards, buttons, truncation), don't squeeze letter spacing below the font's
  default for body sizes, because digital setting makes too-tight spacing easy and it hurts legibility.
- When setting leading, scale it with the measure and the face: longer lines need more line-height, and so do
  open, light faces with large counters; short lines in a dark, compact face can use less. Treat line-height
  as a variable per text style, not one global value.
- When writing UI strings, use the right dash: en dash with thin or equal small spaces for ranges ("9–17 h",
  "Mon–Fri"), a real minus or multiplication sign only where it is needed (dimensions can use x), a hyphen only
  for compounds; put spaces around slashes that join multi-word items ("Sales / Marketing / Support").
- When showing acronyms inside running text (API, URL, PDF), consider small caps or a slightly smaller,
  slightly tracked size (`font-variant-caps: all-small-caps` if the font has real small caps), because full
  caps punch holes in the line.
- When localising, follow each locale's quotation and punctuation conventions (« » vs „ " vs " "; Swiss vs
  German guillemet direction), and put them in the i18n layer, not in hard-coded strings.
- When justified text is unavoidable (print exports, e-readers, PDFs), turn on hyphenation, limit consecutive
  hyphens to about three unless that opens big gaps, check for rivers, and use optical margin alignment where the renderer supports it
  (e.g. `hanging-punctuation` in Safari).
- When designing dense reference surfaces (settings, API docs, data tables), accept more levels of
  distinction than in reading text, but give each level one job (italic = term, bold = key, mono = code) so
  the page does not become restless.

## Evidence & caveats
- Hochuli's book is expert craft knowledge from a master book designer, grounded in reading physiology (he cites
  Tinker) but not itself empirical. Treat the rules as strong convention, not measured effects.
- Only about 15% of the (new German) edition was read, in German; wording and emphasis may differ in the English
  edition, and the expanded edition may differ from the 1987 original.
- The punctuation rules shown are German-language conventions; English (Chicago, Oxford) practice differs,
  e.g. em dashes without spaces in US English.
- Claims like "readers are conservative" fit the familiarity findings in reading research (e.g. caps and
  italics read slower partly from lack of practice, `references/books/tinker-legibility-of-print.md`).

## Disagreements with other references
- `references/visual/typography.md` gives numeric tracking and line-height defaults; Hochuli would say those
  are starting points that must be tuned by eye per face, size and measure. Use the numbers, then look.
- `references/books/practical-typography.md` (Butterick) prefers double quotation marks for English and no
  small-caps acronyms by default; follow locale conventions. Hochuli's preferences are for German text.
- Hochuli's caution about "interesting" text faces is stronger than expressive-type advice in
  `references/books/expressive-design-systems-perez-cruz.md`; resolve by role: expressive for display,
  invisible for text.

## Best quotes (< 25 words each, max 5)
- "Es ist kein gutes Zeichen, wenn ein Laie beim Lesen eines Buches die Form der Lettern wahrnimmt" (it is not a good sign when a lay reader notices the letterforms)
- "Je breiter eine Zeile ist, desto mehr Durchschuss verlangt sie bei gleichem Schrifttyp und gleicher Schriftgröße." (the wider the line, the more leading)
- "Der Durchschuss ist ein wichtiges Mittel, um die ‹Farbe›, den Grauwert eines Satzbildes zu verändern" (leading changes the grey value of the text)

## Related
- `references/visual/typography.md`, `references/visual/visual-polish-checklist.md`
- `references/books/practical-typography.md`, `references/books/lupton-thinking-with-type.md`,
  `references/books/beier-reading-letters.md`, `references/books/tinker-legibility-of-print.md`,
  `references/books/craig-designing-with-type.md`
- Tschichold, *Meisterbuch der Schrift* (cited by Hochuli for area-equal letter spacing)

## Sources
- Niggli product page for *Das Detail in der Typografie* (publisher description and five preview spreads,
  pp. 10–13, 28–29, 40–41, 48–49, all read): https://niggli.ch/en/products/das-detail-in-der-typografie
- Not found: any free English excerpt from Hyphen Press or Typotheque; Typotheque's page could not be reached.
- Local copies of the preview images: books/free/hochuli-detail-in-typography/ (git-ignored).
