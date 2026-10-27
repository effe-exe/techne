# Memory, Cognitive Load and Mental Effort in Interfaces

Use this when: deciding how much to show per screen, splitting flows into steps, designing forms, onboarding,
navigation labels, menus, settings, or anything where users must remember, compare, or learn.
Skip when: the issue is purely visual grouping/contrast (cognition-perception-attention-reading.md) or speed/targets.

Evidence tags: [strong] [moderate] [weak/anecdotal] [contested]. Myths flagged MYTH.

---

## 0. Point of view

- Working memory is the narrowest pipe in the whole system. Every bit of information a user must hold in their
  head while operating your UI is a tax that raises error rates and abandonment. The interface should be the
  memory; the user should only have to recognize.
- "Simple" does not mean "fewer things on screen". It means less to hold in mind, decide, and translate.
  Sometimes showing MORE (e.g. a visible comparison table) reduces load versus hiding info behind taps.
- Remove extraneous load ruthlessly; manage intrinsic load by sequencing; never remove the information a user
  needs to decide well (that is not simplicity, it is manipulation).

---

## 1. Working memory: the real numbers

MYTH — "7 ± 2 items, so menus should have at most 7 items."
- Miller 1956 ("The magical number seven, plus or minus two") was about absolute judgment of unidimensional
  stimuli and immediate memory span, and Miller himself was half-joking about the "magic". It says nothing about
  menus, which are VISIBLE (recognition, not recall) [strong that this is a misapplication].
- Modern estimate of working-memory capacity when rehearsal and chunking are controlled: about 3-5 chunks,
  "4 ± 1" [strong; Cowan 2001, "The magical number 4 in short-term memory", Behavioral and Brain Sciences;
  Cowan 2010 review].
- Unrehearsed items fade within seconds, and interference from new input is the main killer [moderate-strong;
  Peterson & Peterson 1959 showed rapid loss over ~18 s; later work attributes much of it to interference,
  Keppel & Underwood 1962].
- Baddeley & Hitch 1974 multi-component model: phonological loop (verbal), visuospatial sketchpad, central
  executive; Baddeley 2000 added episodic buffer [strong as a framework]. Verbal and visual stores are partly
  separate: a voice prompt + a visual map interfere less than two visual streams [moderate].

Practical thresholds:
- Never require users to carry more than ~3-4 new items across screens (codes, prices, options, names).
- One-time codes: show them with grouping ("482 913" not "482913"), support autofill (iOS `oneTimeCode`
  textContentType, HTML `autocomplete="one-time-code"`), never make users copy across apps manually if avoidable.
- Comparisons: if users must compare >2-3 attributes across >2 options, show a side-by-side table; don't make
  them flip between detail pages (that forces recall).
- Phone/IVR-style sequential presentation of options is the worst case — all recall, no recognition.

---

## 2. Recognition over recall

- Recognition (identify among visible options) is far easier and more accurate than recall (generate from
  memory) [strong; classic memory research, e.g. Shepard 1967 picture recognition ~98% after a single viewing of
  hundreds of images; Standing 1973 thousands of pictures].
- Nielsen's heuristic #6 "Recognition rather than recall" [strong as practice; Nielsen 1994, Usability
  Inspection Methods].

Apply it:
- Show recent searches, recent files, recently used items, smart defaults.
- Keep labels visible: no placeholder-as-label, no icon-only nav for non-universal concepts. Icon recognition
  outside a small universal set (home, search, close, back, settings) is poor; label icons
  [moderate; NN/g, Harley 2014 "Icon usability"; hidden navigation is discovered and used less than
  visible tabs — moderate, multiple A/B reports e.g. NN/g Pernice & Budiu 2016 "Hamburger menus and hidden
  navigation hurt UX metrics"].
- Command palettes/search are recall-based; great for experts, insufficient as the ONLY path for novices.
- Show the state of things (selected filters as chips; current step; what's in the cart) so users don't need to
  remember what they did.
- Error messages must say what was entered and how to fix it — don't make users recall the rule.

---

## 3. Chunking

- Experts perceive larger meaningful chunks (chess masters recall real board positions, not random ones)
  [strong; Chase & Simon 1973; de Groot 1965].
- Chunking makes long info fit working memory: phone numbers, IBANs, card numbers grouped in 3-4 digit blocks.
- UI chunking = progressive disclosure, sections, steps, cards, and consistent groupings that become familiar
  "units" over time.

Rules:
- Format long strings in groups of 3-4 characters (card numbers: 4-4-4-4; IBAN: groups of 4). Auto-format as the
  user types but don't block paste.
- Group form fields into labeled sections of ~3-7 related fields [weak/anecdotal threshold; the principle is
  moderate].
- Long lists: group by meaningful category, sort by the user's likely lookup key (alphabetical for known names,
  frequency/recency for repeated actions, chronological for history).

---

## 4. Cognitive Load Theory (Sweller)

Sweller 1988 ("Cognitive load during problem solving", Cognitive Science); Sweller, van Merriënboer & Paas 1998
and 2019 updates [strong in instructional design; transfer to UI is reasonable but less directly tested — moderate].

Three types:
| Type | Definition | Designer's job |
|---|---|---|
| Intrinsic | Complexity inherent to the task (e.g. choosing a mortgage) | Can't remove; sequence it, scaffold it, give defaults |
| Extraneous | Load created by the presentation (bad layout, jargon, hunting) | ELIMINATE |
| Germane | Effort that builds understanding/schemas | Support where learning matters (onboarding, pro tools) |
(Note: later formulations fold germane into intrinsic "element interactivity" — Sweller 2010 [contested taxonomy,
practical value intact].)

Key effects with UI translations:
- Split-attention effect: having to mentally integrate separated sources (e.g. legend far from chart, help text
  in a separate page, instructions on step 1 needed on step 3) increases load [strong; Chandler & Sweller 1991].
  → Put labels on chart lines directly; put help next to the field; carry needed info forward.
- Redundancy effect: adding the same information in another form can HURT when the learner doesn't need it
  [strong; Sweller 2005]. → Don't caption an obvious icon AND add a tooltip AND a paragraph.
- Modality effect: splitting info across visual + auditory channels can reduce load [moderate].
- Expertise reversal effect: guidance that helps novices hurts experts [strong; Kalyuga, Ayres, Chandler &
  Sweller 2003]. → Tutorials, coach marks, and verbose labels must be dismissible and fade with usage. Provide
  shortcuts and density options for experts.
- Worked-example effect: showing a completed example reduces load for novices [strong]. → Templates, example
  inputs ("e.g. Paris"), prefilled demo projects beat blank canvases.

Measuring load (when you need evidence, not opinion):
- NASA-TLX (Hart & Staveland 1988): 6 subscales, widely used [strong as an instrument].
- Paas 1992 single-item 9-point mental effort rating — cheap, sensitive [moderate-strong].
- SEQ (Single Ease Question, 7-point) after each task — practical UX standard [moderate; Sauro & Dumas 2009].
- Behavioral proxies: time-on-task, errors, backtracks, help opens, field corrections, rage taps, drop-off per step.
- Pupil dilation/eyetracking: research-grade only.

---

## 5. Decision rules for common product situations

### 5.1 One page vs multi-step flow
- Multi-step (wizard) when: steps are sequentially dependent, intrinsic load is high, or later steps depend on
  earlier answers. Show progress ("Step 2 of 4"), allow back without data loss, summarize before commit.
- Single page when: few fields (≲ 6-8), users need to see everything to decide, or experts repeat the task often.
- Evidence on which converts better is context-specific [contested; vendor A/B case studies go both ways] —
  A/B test it; measure completion AND downstream quality (errors, refunds, support contacts).

### 5.2 Forms (load hot spot)
- Top-aligned labels are scanned fastest; left-aligned labels slower but OK for scanning label lists
  [moderate; Penzo 2006 eyetracking, UXmatters; Wroblewski 2008, Web Form Design].
- Ask only what you need now; every optional field reduces completion [moderate; many field-level studies,
  e.g. Baymard Institute checkout research reports average checkout has far more fields than needed].
- Inline validation after the field loses focus (not on every keystroke) [moderate; Wroblewski 2009 study, small
  sample].
- Use the right keyboard (`inputmode`, `type="email"`, SwiftUI `.keyboardType`) and autofill
  (`autocomplete`, `.textContentType`) — this offloads memory and motor work.
- Don't split a single concept across fields (first/last name when one "full name" works; date in 3 dropdowns).

### 5.3 Menus and navigation
- Breadth beats depth in most menu studies: one level with more items outperforms deep hierarchies, as long as
  items are well-grouped and labeled [moderate; Miller 1981; Kiger 1984 (8x8 best of tested); Larson & Czerwinski
  1998; Zaphiris & Mtei 1997]. Deep trees multiply the chance of a wrong turn at each level.
- Number of items is less important than information scent (Pirolli & Card 1999, information foraging theory
  [strong as theory]): users follow labels that look like they lead to their goal. Test labels with tree testing
  (target: ≥ ~70-80% task success is a common practitioner bar [weak/anecdotal]).
- Mobile bottom tab bar: 3-5 destinations (Apple HIG, Material guidelines) — this is a motor/space constraint
  more than a memory one.

### 5.4 Progressive disclosure
- Show the common 80% up front; put advanced options one click away, clearly signposted ("Advanced settings").
  [moderate; Nielsen 2006 "Progressive disclosure"].
- Never hide things users need to make a fair decision (price, renewal terms, cancellation) behind disclosure —
  that is a dark pattern (see ethics references).
- Disclosure has a cost: each hidden layer reduces discoverability. If analytics show >~30-40% of users opening an
  "advanced" panel, it isn't advanced — promote it [weak/anecdotal threshold].

### 5.5 Onboarding
- Contextual just-in-time hints > front-loaded tutorial carousels (users skip and forget carousels)
  [moderate; NN/g, Joyce 2020 "Mobile-app onboarding"; consistent with CLT and recall limits].
- Learn by doing with a worked example (sample data) reduces blank-slate load.
- Defer account creation until value is shown when possible (reduces upfront load; measure activation).

---

## 6. Mental models and consistency (memory over time)

- Users bring expectations from other products: "Jakob's Law" — users spend most of their time on other sites,
  so they expect yours to work the same way [weak as formal evidence, strong as observation; Nielsen 2000].
- Consistency lets users transfer learned chunks: same action, same place, same label, same icon across the
  product. Internal consistency > novelty.
- Platform conventions (iOS HIG, Material, web patterns) are pre-loaded schemas. Deviating costs learning time;
  require a measurable benefit.
- Spatial memory is powerful: people remember WHERE things are [moderate-strong; e.g. Scarr, Cockburn & Gutwin
  2012-2013 on spatial memory in command interfaces]. Stable layouts let experts go fast; reflowing or "smart"
  adaptive menus that reorder items often hurt performance [moderate; Findlater & McGrenere 2004; Sears &
  Shneiderman 1994 split menus help only when predictable].
- Forgetting is fast then slow (Ebbinghaus 1885; n = 1, nonsense syllables): **savings** in relearning were
  58.2% at ~20 min, 44.2% at 1 h, 35.8% at ~9 h, 33.7% at 1 day, 27.8% at 2 days, 25.4% at 6 days, 21.1% at
  31 days [strong — replicated shape]. "Savings" is relearning effort saved, not percent recalled, so popular
  "you forget 70% in a day" graphs misstate it. Spacing beats massing: 38 repetitions over three days matched 68
  massed. Learned sequences carry forward and (weaker) backward links; the same items reshuffled gave almost no
  savings — another reason to keep step and menu order stable in redesigns. → references/books/ebbinghaus-memory.md

---

## 7. Data-driven checks for load problems

Signals that suggest excess cognitive load (look for these in analytics/session replays):
- Long hesitation (time-to-first-interaction) on a step relative to its complexity.
- Back-and-forth navigation between two screens (user is comparing or re-checking → recall burden).
- Repeated edits to the same field; validation errors clustered on one field.
- High help/tooltip opens, high support contacts tagged "how do I".
- Drop-off concentrated on the step that introduces a new concept.

Experiment ideas that target load (each a small, testable change):
- Add a visible summary/recap of previous choices on the final step.
- Replace free-text with selectable options where the answer set is known (recall → recognition).
- Prefill/smart default from previous behavior (and let users change it).
- Merge two screens where users bounce back and forth; or split a screen with a long tail of rarely used fields.
- Rewrite labels for scent (tree test first, then A/B).
Metrics: completion rate, time-on-task, error rate, SEQ, downstream quality (refunds, support, retention).

---

## 8. Anti-patterns

- Asking users to remember info from a previous screen (codes, prices, choices) instead of carrying it forward.
- Icon-only navigation for non-universal actions.
- Placeholder text as the only label.
- Tutorial carousels that dump 5 concepts before the user has a goal.
- Adaptive menus that reorder by frequency (break spatial memory).
- Hiding fees/terms behind disclosure to "reduce load" (manipulation dressed up as simplicity).
- Deep navigation trees (> 3 levels) for frequently used content.
- Citing "7±2" to cap menu length.

## 9. When NOT to apply

- Expert, high-frequency tools: dense screens and recall-based shortcuts (keyboard commands, command palettes)
  are right for experts — add, don't replace.
- Learning products: some "desirable difficulty" improves retention [moderate; Bjork 1994]; but MYTH-adjacent:
  disfluent fonts do NOT reliably improve learning (Diemand-Yauman et al. 2011 effect failed large replications,
  e.g. Meyer et al. 2015) [contested → treat as not real].
- Security: some friction (re-auth before destructive actions) is intentional load. Keep it, but make it clear.
