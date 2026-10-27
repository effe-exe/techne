# Perception, Attention and Reading: How Eyes and Brains Parse a Screen

Use this when: setting visual hierarchy, grouping, spacing, contrast, emphasis, alerts, or layout of a screen/page.
Also when: diagnosing "users didn't see X" (banner/change/inattentional blindness) or planning scannable content.
Skip when: the question is about memory load, timing, motor targets (see memory-cognitive-load.md, motor-control-and-timing.md).

Evidence tags: [strong] replicated / large-sample, [moderate] some replication or solid single studies,
[weak/anecdotal] practitioner lore or small studies, [contested] conflicting evidence. Myths are flagged MYTH.

---

## 0. Point of view (read first)

- The eye does not read a screen; it samples it. Sharp vision covers only ~1-2 degrees of visual angle
  (the fovea, roughly a thumbnail at arm's length), so users see a few words per fixation and infer the rest
  [strong, standard vision science; e.g. Rayner 1998, "Eye movements in reading and information processing"].
- Fixations last ~200-300 ms in reading/scanning; between them, saccades, during which vision is suppressed
  [strong, Rayner 1998]. A user can make only ~3-4 fixations per second. Design for few fixations.
- Therefore: hierarchy is not decoration, it is a fixation budget. Every element that pulls a fixation
  is spending the user's attention. Ask of each emphasized element: "Is this worth one of their ~10 fixations
  on this screen?"
- Perception is predictive (the brain guesses from priors). Conventions are priors. Breaking a convention
  costs fixations and errors; do it only when the gain is measurable.

---

## 1. Preattentive attributes: what pops out "for free"

Some visual features are detected in parallel across the whole field in under ~200-250 ms, regardless of how
many distractors exist (flat search slope). Combinations (conjunctions) of features are NOT preattentive and
require serial search [strong; Treisman & Gelade 1980, Feature Integration Theory; review Healey & Enns 2012,
"Attention and visual memory in visualization and computer graphics", IEEE TVCG].

Reliable preattentive channels for UI (strongest first, practical ordering — [moderate], depends on magnitude):

| Channel | UI use | Caution |
|---|---|---|
| Color hue (distinct from neighbors) | Status, primary CTA, errors | ~8% of men / ~0.5% of women of N. European descent have color vision deficiency [strong]; never color alone (WCAG 1.4.1) |
| Luminance / contrast | Primary vs secondary hierarchy | The single most robust hierarchy lever |
| Size | Headline, key number | Needs large ratio (≥1.5x) to pop reliably [weak/anecdotal] |
| Motion / flicker / abrupt onset | Live alerts, new item arrival | Captures attention involuntarily [strong; Yantis & Jonides 1984; Abrams & Christ 2003 motion onset] — easy to abuse |
| Orientation, shape, enclosure | Icons, badges, grouping | Shape differences are weaker than color/size |
| Spatial position / isolation | Hero element, floating action | Whitespace isolation = emphasis |

Decision rules:
- One pop-out per region. If two things are red, neither pops. Unique feature = pop-out; shared feature = noise.
- Pop-out strength depends on target-distractor DIFFERENCE and distractor HOMOGENEITY [strong; Duncan &
  Humphreys 1989]. A clean, uniform background makes the one accent work; a busy UI kills every accent.
- Do not encode critical distinctions as conjunctions ("the small red bold item") — that forces serial search.
- Subitizing: people perceive counts of up to ~4 items instantly without counting [strong; Kaufman et al. 1949].
  Pagination dots, rating pips, step indicators: ≤4-5 is glanceable; beyond that show a number ("Step 3 of 7").
- Motion is the strongest attention grabber. Reserve it for state changes the user must notice. Respect
  `prefers-reduced-motion` (CSS) / `accessibilityReduceMotion` (SwiftUI). Never flash >3 times/second
  (WCAG 2.3.1, seizure risk).

---

## 2. Gestalt grouping: how the brain decides what belongs together

Origin: Wertheimer 1923; Koffka 1935; modern extensions by Palmer 1992 (common region) and Palmer & Rock 1994
(uniform connectedness). Review: Wagemans et al. 2012, "A century of Gestalt psychology in visual perception",
Psychological Bulletin [strong].

| Principle | What it says | UI application |
|---|---|---|
| Proximity | Near things group | The primary tool for structure. Label-to-field gap < field-to-next-field gap |
| Similarity | Same color/shape/size group | All links one color; all destructive actions one treatment |
| Common region | Things inside a boundary group | Cards, sections, grouped list insets |
| Uniform connectedness | Connected elements group | Lines in steppers, connected chips, timelines |
| Closure | Mind completes shapes | Icons can be outlines; partial cards signal "more to scroll" |
| Continuity | Eyes follow smooth lines/alignment | Strong left edge alignment guides scanning |
| Common fate | Things moving together group | Animate whole natural groups together; motion that cuts across existing groups (contra-structural) confuses, and the moved items regroup |
| Figure-ground | One region read as object, rest as background | Modals need scrim; elevation/shadow defines figure (Rubin 1915) |
| Prägnanz (simplicity) | Simplest interpretation wins | Ambiguous layouts get resolved the "simple" way, maybe not yours |
| Prägnanzstufen (stable regions) | Near-miss values (93° angles, almost-equal gaps) read as vaguely "wrong" | Make values clearly equal or clearly different — the perceptual case for snapping to a spacing scale/grid |
| Objective set | Earlier items in a sequence fix how an ambiguous later arrangement is grouped | Keep grouping conventions consistent across flow steps; don't rely on ambiguous layouts read out of sequence (deep links) |

Strength hierarchy (useful when principles conflict):
- Common region and uniform connectedness can override proximity [moderate; Palmer 1992; Palmer & Rock 1994].
  A card boundary beats spacing. Use this: if spacing alone is ambiguous, add a container — but containers cost
  visual weight, so prefer spacing first.
- Proximity generally beats similarity in typical layouts [moderate; depends on magnitudes, e.g. Quinlan &
  Wilton 1998 show the interaction is complex]. Don't rely on color alone to group things placed far apart.

Spacing heuristics (practitioner, [weak/anecdotal] but widely effective):
- Internal spacing < external spacing. Gap between groups ≥ ~2x the gap within a group — a floor: Wertheimer's
  compelling demo used 1:4, and near-equal gaps dissolve into uniformity. → references/books/wertheimer-gestalt-laws.md
- Label belongs to its field: label-field gap ≤ half the field-to-next-label gap.
- Use a spacing scale (4/8 pt base: 4, 8, 12, 16, 24, 32, 48, 64). Fewer distinct values = clearer grouping.
- Mis-grouping is a top cause of "users clicked the wrong thing": check that each action sits closest to the
  object it acts on.

Figure-ground checklist for overlays:
- Scrim behind modal (commonly ~30-60% black opacity; tune for contrast) so the modal reads as figure.
- Elevation (shadow) only means "on top" if used consistently; random shadows destroy the depth model.
- Bottom sheets: visible top edge + grabber = figure, plus partial view of content behind = context retained.

---

## 3. Visual hierarchy: ordering the fixation budget

Hierarchy is produced by: size, luminance contrast, color saturation, weight, position (top-left in LTR),
isolation (whitespace), and motion. Contrast relative to surroundings matters more than absolute values.

Rules:
1. Decide the reading order BEFORE styling: list elements 1..N by importance for the primary task.
2. Express at most 3-4 levels of emphasis per screen (e.g. headline / section / body / meta). More levels
   blur into one [weak/anecdotal; consistent with JND logic].
3. One primary action per view. Secondary actions get lower contrast (outline / text buttons).
4. Squint/blur test: blur the screen (Gaussian ~5-10 px or squint). What you still see is the hierarchy.
   If the primary CTA disappears or an ad/promo dominates, fix it.
5. Type scale ratio ~1.2-1.333 for dense product UI; larger (1.414-1.618) for editorial/marketing. Differences
   below ~2 px at body sizes are below a reliable just-noticeable difference for hierarchy [weak/anecdotal].
6. Weber's law: perceived difference is relative (ΔI/I ≈ constant) [strong for many sensory dimensions; Fechner
   1860]. A 2 px change on 12 px text is noticeable; on 48 px it is not. Scale emphasis proportionally.

First impressions are fast and sticky:
- Users form reliable aesthetic judgments of web pages in ~50 ms, consistent with longer viewing [moderate;
  Lindgaard, Fernandes, Dudek & Brown 2006, Behaviour & IT]. Tuch et al. 2012 (Google; Int. J. Human-Computer
  Studies) found judgments at 17-50 ms driven by visual complexity and prototypicality: low complexity + high
  prototypicality = most liked [moderate].
- Reinecke et al. 2013 (CHI, ~40k ratings) modeled first-impression appeal from colorfulness and complexity,
  with preferences varying by demographics [moderate].
- Implication: "looks like the category" (prototypical) is an asset, not a lack of creativity. Innovate on
  value, not on where the navigation lives.

MYTH — golden ratio as a UI law. There is no robust evidence people prefer 1.618 proportions; classic Fechner-
style findings did not replicate cleanly [contested -> MYTH for UI; Markowsky 1992, "Misconceptions about the
golden ratio", College Math Journal; McManus 1980]. Use it as one possible ratio, never as justification.

---

## 4. Contrast sensitivity and legibility

- Legibility is driven by LUMINANCE contrast, not hue difference. Red-on-green or blue-on-red can have high hue
  difference but low luminance contrast (and saturated red/blue cause chromostereopsis "vibration").
- WCAG 2.x minimums (the legal/industry baseline; current at time of writing, WCAG 2.2, 2023):
  - Body text: ≥ 4.5:1 (SC 1.4.3, AA). Enhanced 7:1 (1.4.6, AAA).
  - Large text (≥ 24 px regular or ≥ ~18.66 px bold; i.e. 18 pt / 14 pt bold): ≥ 3:1.
  - Non-text UI components and meaningful graphics (borders of inputs, icons, focus rings): ≥ 3:1 (SC 1.4.11).
  - Focus indicators: see SC 2.4.11 / 2.4.13 (2.2).
- APCA (Advanced Perceptual Contrast Algorithm, proposed for WCAG 3) models polarity and font weight better,
  but WCAG 3 is a draft [contested/in-progress]. Ship WCAG 2.x compliance; optionally check APCA for dark mode.
- Contrast sensitivity declines with age; older adults need more contrast and larger text, especially in low
  light [strong; e.g. Owsley 2011 review, "Aging and vision", Vision Research]. If your audience skews 50+, treat
  4.5:1 as a floor, not a target.
- Gray-on-gray "elegant" placeholder and disabled text is the most common contrast failure. Placeholder text is
  not a label (it disappears and is low contrast) [moderate; NN/g, Sherwin 2014, "Placeholders in form fields
  are harmful"].
- Dark mode: avoid pure #FFFFFF on #000000 for long text (halation for astigmatic users [weak/anecdotal]); use
  off-white on dark gray, recheck contrast, reduce saturation of accent colors.
- Minimum body text: 16 px web (also prevents iOS Safari zoom-on-focus for inputs <16 px); iOS default body
  17 pt (Apple HIG); Android body ~14-16 sp (Material). Support Dynamic Type / user font scaling.

Line length and reading:
- Classic print advice: 45-75 characters per line, ~66 ideal [weak/anecdotal for screens; Bringhurst 1992, The
  Elements of Typographic Style]. Screen studies: longer lines (~95-100 cpl) can be read faster but comprehension
  and preference often favor moderate lengths [contested; Dyson & Haselgrove 2001; Dyson 2004 review].
  Default: 50-75 cpl for prose; line-height 1.4-1.6 for body.
- Size floor: reading speed is flat across x-heights of ~0.2°–2° of visual angle and falls sharply below the
  critical print size (≈0.2°), which is ≥ 2× the acuity limit (much more for low vision) — legible is not fluent
  (Legge & Bigelow 2011) [strong]. At small sizes crowding, driven by letter spacing (Bouma's law), limits the
  visual span; extra-wide letter spacing does not speed reading. → references/books/legge-bigelow-print-size.md

---

## 5. Attention: what users notice and fail to notice

Selective attention: people filter heavily and early. Classic: Cherry 1953 (cocktail party), Broadbent 1958
filter model, Treisman 1964 attenuation [strong]. Users attend to what matches their current goal; everything
else is filtered — even large, bright things.

### 5.1 Inattentional blindness
- When attention is engaged in a task, salient unexpected objects are often missed: ~50% of observers missed a
  person in a gorilla suit while counting basketball passes [strong; Simons & Chabris 1999; many replications].
- UI implication: a message placed outside the task path (e.g. a banner at the top while the user fills a
  form at the bottom) is likely unseen no matter how colorful. Put critical info IN the task path: inline,
  adjacent to the field/button the user is fixating.

### 5.2 Change blindness
- People miss large changes when the change coincides with a disruption (blink, saccade, flicker, page reload,
  scroll) [strong; Rensink, O'Regan & Clark 1997 flicker paradigm; Simons & Levin 1998 door study].
- UI implications:
  - Full-page reloads hide what changed. After an action, animate or highlight the changed item (e.g. a
    300-1000 ms background flash on the updated row; a counter that ticks).
  - Updating content off-screen or during a transition = users won't know. Announce it (toast, badge,
    `aria-live` region for screen readers).
  - Moving a control in a redesign: users won't "notice it moved" — they'll notice it's missing. Provide
    transitional cues (coach mark at the old location, release notes) when relocating high-frequency actions.
  - The *stopping* of a long-constant stimulus is noticed (James 1890: the ticking clock): removing a
    long-standing element is more conspicuous than adding one, while constant badges and banners fade into
    inattention. → references/books/james-principles.md

### 5.3 Banner blindness
- Users ignore elements that look like ads or that sit in ad-typical locations (top banner, right rail), even
  when they contain the answer [strong; Benway & Lane 1998; NN/g eyetracking, Nielsen 2007; Pernice 2018 update
  "Banner blindness revisited"].
- Triggers: boxed/colored rectangles that resemble ads, animated content, stock imagery, placement near real
  ads, promo-style copy.
- Rules: Don't style important product info like a promo. Don't put critical warnings in a carousel or hero
  banner. Native, content-styled, inline placement beats a big colorful box. Carousels: later slides get very
  few views [weak/anecdotal to moderate; Runyon/Notre Dame data 2013 ~1% clicks, mostly slide 1].

### 5.4 Attention capture vs. distraction
- Abrupt onsets and motion capture attention involuntarily [strong]. Using them for engagement (badges that
  pulse, autoplay) taxes the primary task. Ethical rule: interrupt only for things the user would, on
  reflection, want to be interrupted for.
- Interruptions carry a resumption cost; people need time to recover task context [moderate; Altmann & Trafton
  2002 memory-for-goals; Mark, Gudith & Klocke 2008 found interrupted work is done faster but with more stress].
  The popular "23 minutes to refocus" figure is from interviews/field observation, not a precise constant
  [weak/anecdotal — do not cite as a law].
- Notification design: batch non-urgent items, default to quiet, let users tune. Each unnecessary alert trains
  users to dismiss all alerts (alarm fatigue; [strong] in clinical literature, e.g. Cvach 2012).

---

## 6. Reading and scanning behavior (eyetracking)

Core fact: on the web, most users scan rather than read word-by-word [strong; Nielsen 1997, "How users read on
the web" — 79% scanned; concise + scannable + objective text improved measured usability by 124% in that study,
small sample, treat the exact number as moderate].
- Users read on average at most ~20-28% of words on a page during a typical visit [moderate; Weinreich, Obendorf,
  Herder & Mayer 2008, ACM TWEB; Nielsen 2008].
- Average silent reading speed for adults ~238 wpm (non-fiction) [strong; Brysbaert 2019 meta-analysis] — use for
  estimating "time to read" a screen. 100 words ≈ 25 s of fully attentive reading; most won't give it.

Scanning patterns (NN/g eyetracking; Nielsen 2006 "F-shaped pattern"; Pernice 2017 "F-shaped pattern of reading
on the web: misunderstood, but still relevant") [moderate-strong; large eyetracking corpora, qualitative coding]:

| Pattern | When it appears | Design response |
|---|---|---|
| F-pattern | Text without strong formatting/headings; low motivation | It's a FAILURE mode. Break up text: headings, bullets, bold keywords, front-loaded sentences |
| Layer-cake | Clear, descriptive subheadings | The GOAL pattern: users read headings, dive where relevant. Write headings that carry meaning alone |
| Spotted | Looking for a specific thing (number, link, keyword) | Make targets visually distinct (numbers as digits, links styled as links) |
| Marking | Eyes fixed while scrolling (common on mobile) | Keep key content at consistent horizontal position |
| Bypassing | Users skip the first words of repeated-start lines | Don't start every list item with the same words ("Click here to...") |
| Commitment | Highly motivated readers read everything | Rare; don't design for it by default |

Left side bias (LTR): users spend ~69-80% of viewing time on the left half of pages [moderate; Fessenden/NN/g
2010 and 2017 updates]. Put scannable anchors (labels, key words, icons) on the left; front-load sentences and
link text ("Pricing for teams", not "Click here to see pricing for teams").

The fold — what's true and what's a myth:
- MYTH: "Users don't scroll." Users do scroll, especially on mobile; analytics firms report substantial attention
  below the fold (e.g. Chartbeat, Haile 2013, Time.com analysis) [moderate].
- TRUE: attention still decays with distance. NN/g found ~57% of viewing time in the first screenful, ~74% in
  the first two and ~81% in the first three — the "fold" moved to about the third screen (Fessenden 2018,
  120 participants, desktop 1920×1080 only; 2010 study: ~80% above the fold) [moderate]. Within the first
  screen, >65% of viewing is in the top half of the viewport (>75% on search results). → references/books/nngroup-scrolling-attention.md
- Rule: put the value proposition and the primary action in the first screenful; use visual cues that more
  content exists (cut-off cards, no "false floor" — a full-width horizontal band at the fold that looks like the
  page end).

Writing for scanners (checklist):
- [ ] Headings and subheadings are informative statements, not puns.
- [ ] First 2 words of each heading/link/list item carry the meaning.
- [ ] One idea per paragraph; paragraphs ≤ 3-4 lines on mobile.
- [ ] Numbers as numerals ("3 steps", not "three steps") — they attract fixations in spotted scanning [moderate;
      NN/g, Nielsen 2007].
- [ ] Bold only keywords, not whole sentences (bolding everything = bolding nothing).
- [ ] Inverted pyramid: conclusion first.

---

## 7. Worked examples

Example A — "Users don't see the free-shipping threshold message."
- Diagnosis: message is a colored banner at page top (banner blindness) while attention is on the cart total
  (inattentional blindness).
- Fix: place "Add $8 to get free shipping" directly adjacent to the cart total, same type style as content,
  with a progress bar (goal-gradient, see emotion-behavior-habit.md). Measure: % of carts crossing threshold.

Example B — Settings list where users toggle the wrong switch.
- Diagnosis: label-to-toggle gap larger than row gap; toggles are ambiguous between rows (proximity failure).
- Fix: full-width row containers (common region), reduce label-control gap, increase inter-row separation or
  add dividers. Test: misclick rate on toggles before/after.

Example C — Dashboard with 6 red KPI cards.
- Diagnosis: color-coded everything → nothing pops; also color-only encoding.
- Fix: neutral cards; only metrics outside threshold get an accent + icon + text label ("−12% vs last week").

Example D — Redesign moved "Export" from toolbar to overflow menu; support tickets spike.
- Diagnosis: change blindness + broken habit; users scan old location and conclude it's gone.
- Fix: temporary pointer at old location for N sessions; search that finds "Export"; measure feature usage
  recovery curve vs. control cohort.

---

## 8. Anti-patterns

- Using motion/autoplay to "increase engagement" on non-essential elements (attention theft).
- Grey-on-grey low-contrast text for "minimalism".
- Encoding status by color only (fails ~1 in 12 men).
- Placing critical warnings in carousels, hero banners, or the right rail.
- Too many emphasized elements: multiple primaries, every heading bold-colored.
- Long undifferentiated text blocks → F-pattern → users miss the second half.
- False floors at the fold.
- Changing layout during load (layout shift) — breaks spatial memory and causes misclicks; Core Web Vitals CLS
  target ≤ 0.1 (Google web.dev).

## 9. When NOT to apply

- Immersive / editorial / brand experiences may intentionally slow scanning; F/layer-cake advice is for
  task-oriented and informational content.
- Expert tools (trading, IDEs, pro audio) tolerate high density; experts have learned the layout. Don't "clean
  up" density that power users rely on without data from those users.
- Eyetracking patterns are descriptive averages; your audience/locale (RTL languages, CJK vertical text, kids)
  may differ. Validate with your own heatmaps/recordings.
