---
title: "Legibility of Print"
author: "Miles A. Tinker (with Donald G. Paterson for the underlying studies)"
year: 1963
domains: [typography, reading, legibility, visual, data-driven]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: low
---

# Legibility of Print — Miles A. Tinker

Use this when: someone argues for ALL CAPS body text, long italic passages, tiny or oversized body type, or very long or very short lines; you need the historical experimental basis (not just craft opinion) behind "lowercase, moderate size, moderate measure"; you want a model of how to run a fair legibility test (alternate forms, counterbalancing, comprehension check, large samples).

Source basis: the 1963 book is only available as a library loan, so these notes distil Tinker's own earlier
papers that the book summarises: the Tinker & Paterson series "Studies of typographical factors influencing
speed of reading" and related papers in the *Journal of Applied Psychology* (1928–1930), read in full from
public-domain scans (US publications from before 1931). The book's later chapters (leading, colour of print and
paper, bold, margins, newspapers, typeface comparisons, the 1940s–1960s studies) were not available.

## The big idea (3 sentences)
Legibility can be measured, not argued: give hundreds of readers equivalent texts that differ in one typographic
variable and compare how much they read in a fixed time, with a built-in check that they understood it.
Measured this way, all-capital text is read about 13% slower than lowercase, italic about 3% slower, and both
type size and line length have a "middle" optimum, with every move away from it costing roughly 3–11% in speed.
Small percentages matter because they apply to everything people read, and because the variables interact
(the best size depends on the line length, and vice versa).

## Core concepts
- **Speed of reading as the legibility measure** — the Chapman-Cook test: 30-word paragraphs in which one word
  in the second half spoils the meaning; readers cross it out, which proves comprehension. Score = paragraphs
  read in 1¾ minutes; 99.7% of marked paragraphs were correct, so speed is what varies.
- **Method controls** — alternate forms A and B, an A-B-B-A sequence to cancel practice and form difficulty,
  80 students per subgroup (320–640 per study), the purpose hidden from readers, and test reliability checked
  (r ≈ 0.70–0.85 between forms). A later paper found the forms stay equivalent only for first-time readers.
- **Type form (1928, 640 readers, 10 pt old style, 80 mm line)** — lowercase 5.38 words/s vs all caps
  4.74 words/s: lowercase 13.4% faster, a large and reliable difference. Italic 5.08 vs lowercase 5.22 words/s:
  lowercase 2.8% faster, consistent in every subgroup but statistically weaker.
- **Why caps are slow (authors' explanations)** — caps took 35% more space, so more fixations; word shapes are
  less distinctive in caps; readers are unpractised at caps. Novelty might raise effort but did not close the gap.
- **Type size (1929, 320 readers, 80 mm line held constant)** — 10 pt was read faster than 6, 8, 12 and 14 pt;
  every other size was 5.2–6.9% slower. Small sizes lose letter legibility; large sizes spread words over
  more horizontal space (12 pt took 37% more space than 10 pt, 14 pt 87% more).
- **Line length (1929, 560 readers, 10 pt Scotch Roman)** — 80 mm beat 59, 97, 114, 136, 152, 168 and 186 mm;
  losses ranged from 2.8% (97 mm) to 11.4%. The authors recommend 75–90 mm for 10 pt. Their own data show
  a 30-word paragraph took 3.1 lines at 80 mm, i.e. about 10 words (roughly 55 characters) per line.
- **Why line length matters (authors' explanation)** — long lines weaken peripheral preview and make the return
  sweep to the next line inaccurate (re-reading or skipping lines); very short lines break the rhythm of eye
  movements and add more long fixations at line starts.
- **Compactness helps** — arithmetic problems with numerals were read with fewer fixations and faster than
  the same problems with numbers spelled as words (eye-movement photography, 4 + 40 readers).

## Actionable heuristics for product design
- When a style guide or brand wants ALL CAPS for paragraphs, descriptions, legal text or long buttons, keep
  caps to short labels and headings, because running caps text was read about 13% slower than lowercase in
  a 640-person test, and caps also take about a third more space.
- When using italic for whole passages (quotes, disclaimers, testimonials, AI "thinking" text), keep it short
  or switch to roman with another cue (colour, indent, a rule), because italic cost a small but consistent
  ~3% in reading speed; italic for emphasis of a few words is fine.
- When choosing body size and measure, choose them together, not one at a time, because the 1929 studies show
  optimum size depends on the line length used, and the authors warn their 10 pt optimum holds for an 80 mm line.
- When a content column runs wide on desktop, cap the measure (e.g. `max-width: 60–70ch`), because lines
  far beyond the optimum lost up to 11% in speed, mostly from harder return sweeps. The 75–90 mm print
  optimum is roughly 50–60 characters, which agrees with the 45–75ch range in `references/visual/typography.md`.
- When a narrow layout (cards, side panels, chat bubbles) forces very short lines, avoid going far below about
  35–40 characters for anything read at length, because the shortest line tested (59 mm, about 40 characters
  by our estimate) was 7.3% slower than 80 mm.
- When showing numbers in UI copy, prices, specs or instructions, use numerals rather than spelled-out numbers
  ("3 steps", not "three steps"), because the compact form was read with fewer fixations and faster.
- When you need evidence for a typographic choice, copy Tinker's design rather than asking people which they
  prefer: same text in equivalent forms, counterbalanced order, a comprehension check, enough readers to see
  a 3–5% difference, and readers who have not seen the test material before.
- When a test shows "only" a 3–6% speed difference, do not dismiss it for long-form or high-volume reading
  (docs, feeds, onboarding), because small per-line costs compound; but for short UI strings, prefer other
  criteria (scanability, hierarchy, brand), since these studies measured continuous prose only.

## Evidence & caveats
- Strengths: large samples for the era (320–640 per study), explicit controls for practice and form difficulty,
  objective comprehension check, and effects that have broadly held up (lowercase vs caps, moderate measure).
- Limits: readers were US college sophomores; material was simple prose in print; tests lasted 1¾ minutes, so
  fatigue and long reading were not measured. The authors themselves say the caps ratio may not hold over
  longer periods.
- Speed is not the only outcome. Comprehension of hard text, preference, and skimming were not measured.
- Statistics are 1920s style (probable errors, critical ratios). The authors corrected an error in their first
  paper's significance formula in the second paper; the corrected values made the results stronger, not weaker.
- The "word shape" explanation for caps is the authors' 1928 view; later reading research largely explains
  word recognition by parallel letter recognition (see `references/visual/typography.md`, which still
  rates caps as somewhat slower). Treat the effect as better supported than the mechanism.
- Results are for 1920s metal type at specific sizes (6–14 pt) and print. Point sizes do not transfer directly
  to screens; use x-height and visual angle instead (`references/books/legge-bigelow-print-size.md`).
- Not read: the 1963 book itself, including its synthesis of later studies on leading, colour, paper,
  and newspapers. Anything attributed to the book beyond these papers is unverified here.

## Disagreements with other references
- `references/books/legge-bigelow-print-size.md` finds a wide flat plateau of reading speed across a 10×
  range of sizes, while Tinker & Paterson found 10 pt clearly best among 6–14 pt. They are compatible: Tinker
  held line length fixed, so larger sizes also meant fewer words per line, and 6 pt is near the critical print
  size. Trust Legge & Bigelow on size as such, and Tinker on the size × measure interaction.
- `references/visual/typography.md` gives 45–75 characters (66 ideal, Bringhurst) for measure; Tinker's
  measured optimum (about 50–60 characters) sits inside it, toward the shorter end. Use the typography file's
  range and treat 75+ as the zone where losses start.
- `references/books/practical-typography.md` (Butterick) tolerates up to 90 characters; Tinker's data suggest
  speed losses well before that for continuous reading.

## Best quotes (< 25 words each, max 5)
- "The text in lower case letters was read 13.4 per cent faster than that in all capitals." (Tinker & Paterson, 1928)
- "Text printed in italics is slightly less legible than material in lower case letters and decreases speed of reading somewhat." (1928)
- "Apparently, length of line exerts as great an effect as size of type on speed of reading." (1929)
- "In the total amount of reading done in the lifetime of millions of people a saving of 5 per cent bulks extremely large." (1929)

## Related
- `references/visual/typography.md` (measure, caps, tracking), `references/books/legge-bigelow-print-size.md`
- `references/books/practical-typography.md`, `references/books/beier-reading-letters.md`,
  `references/books/lupton-thinking-with-type.md`
- `references/psychology/cognition-perception-attention-reading.md`
- `references/books/hochuli-detail-in-typography.md` (Hochuli cites Tinker on the interdependence of leading,
  size and line length)

## Sources
- Tinker, M. A. & Paterson, D. G. (1928). "Influence of type form on speed of reading." *Journal of Applied
  Psychology* 12(4), 359–368. Read in full: https://archive.org/details/sim_journal-of-applied-psychology_1928-08_12_4
- Tinker, M. A. (1928). "Numerals versus words for efficiency in reading." *J. Appl. Psychol.* 12(2), 190–199.
  Read in full: https://archive.org/details/sim_journal-of-applied-psychology_1928-04_12_2
- Paterson, D. G. & Tinker, M. A. (1929). "Studies of typographical factors influencing speed of reading.
  II. Size of type." *J. Appl. Psychol.* 13(2), 120–130. Read in full:
  https://archive.org/details/sim_journal-of-applied-psychology_1929-04_13_2
- Tinker, M. A. & Paterson, D. G. (1929). "… III. Length of line." *J. Appl. Psychol.* 13(3), from p. 205.
  Read in full: https://archive.org/details/sim_journal-of-applied-psychology_1929-06_13_3
- Paterson, D. G. & Tinker, M. A. (1930). "… IV. Effect of practice on equivalence of test forms."
  *J. Appl. Psychol.* 14(3), from p. 211. Read (method and summary):
  https://archive.org/details/sim_journal-of-applied-psychology_1930-06_14_3
- Other 1928–1930 issues of the journal were downloaded and scanned for further Tinker papers; none beyond the above.
- Not used: the book itself (archive.org copy is borrow-only): https://archive.org/details/legibilityofprin0000tink
- Local copies: books/free/tinker-legibility-of-print/ (git-ignored).
