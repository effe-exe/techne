# Motor Control, Choice Time and Response-Time Limits

Use this when: sizing/placing buttons and touch targets, choosing menu types, designing gestures, hover menus,
setting animation durations, loading/progress states, performance budgets, or estimating task time.
Skip when: the question is about meaning, emotion or visual grouping (see other cognition-* files).

Evidence tags: [strong] [moderate] [weak/anecdotal] [contested]. Myths flagged MYTH.

---

## 0. Point of view

- Physical effort and waiting are the most measurable costs in UI, so they are the easiest to optimize with data.
  Bigger + closer targets and faster feedback are almost never wrong for primary actions.
- The inverse is a design tool: make DESTRUCTIVE or irreversible actions smaller, farther, or confirmable —
  never make the "cancel subscription" path tiny to suppress it (that's a dark pattern; ethics wins).
- Perceived speed matters as much as actual speed, but don't fake progress. Honest feedback within 100 ms,
  honest progress after 1 s.

---

## 1. Fitts's law (pointing)

Formula (Shannon formulation, standard in HCI; MacKenzie 1992):

  MT = a + b · log2(D / W + 1)

- MT = movement time; D = distance to target center; W = target width along the axis of motion;
  a, b = empirically fitted constants (device and user dependent). log2(D/W+1) = Index of Difficulty (ID, bits).
- Original: Fitts 1954, Journal of Experimental Psychology [strong; one of the most replicated laws in HCI].
- Throughput (bits/s) per ISO 9241-9 / ISO 9241-411 is the standard way to compare pointing devices
  [strong; Soukoreff & MacKenzie 2004]. Reference values: mouse ~3.7–4.9; phone finger touch 6.85 (1D 7.43 /
  2D 6.27; n = 16, cross-study); trackball ~3.0; touchpad ~2.9; joystick ~1.8 bits/s. Dwell selection is slower
  than an explicit press (eye tracker IP 9.3 vs 13.7 bits/s) — offer explicit confirm for frequent selections.
- Absolute constants are fragile: published Fitts prediction equations vary ~4× between labs (mouse IP 10.4 vs
  2.6 bits/s; MacKenzie 1992). Trust rankings within a study over cross-study numbers, and run an ISO 2D tapping
  test with a baseline device when a decision depends on it. → references/books/mackenzie-hci-empirical.md

What it implies:
- Doubling width ≈ doubling distance tolerance. Increasing size helps most when targets are small; there are
  diminishing returns beyond comfortable size (log curve).
- W is measured along the movement direction. A wide-but-short button is easy to hit horizontally, harder
  vertically. Make full-row list items tappable (huge effective width).
- Screen edges and corners are "infinitely deep" for mice: the cursor stops at the edge, so edge targets have
  effectively infinite W (macOS menu bar, Windows Start in corner) [strong for mouse; NOT for touch — there's no
  edge-stop on touchscreens, and edges are often hard to reach with thumbs].
- Pop-up / context menus at the pointer location minimize D [strong]. Pie/radial menus give every item equal
  distance and are faster than linear menus for small item counts [moderate; Callahan, Hopkins, Weiser &
  Shneiderman 1988].
- Expand the HIT AREA without expanding the visual (padding, invisible hit slop): SwiftUI `.contentShape()`,
  `.frame(minWidth: 44, minHeight: 44)`; CSS padding or a pseudo-element; React Native `hitSlop`.
- Keep the next likely action near the current focus (e.g. "Next" close to the last field).

---

## 2. Touch targets: the numbers

Platform and standards:
| Source | Minimum | Notes |
|---|---|---|
| Apple Human Interface Guidelines | 44 × 44 pt default; 28 × 28 pt absolute minimum | Current HIG: iOS 44/28 pt, macOS 28/20 pt, visionOS 60/28 pt (default/minimum); ~12 pt padding around bezeled and ~24 pt around borderless controls. Keep 44 pt as the touch default; 28 pt only for dense secondary controls with that spacing |
| Material Design (Google) | 48 × 48 dp | Visual can be smaller (e.g. 24 dp icon) with padding to 48 |
| WCAG 2.2 SC 2.5.8 Target Size (Minimum), AA | 24 × 24 CSS px | Or sufficient spacing so a 24 px circle around each target doesn't overlap others; exceptions apply |
| WCAG 2.1/2.2 SC 2.5.5 Target Size (Enhanced), AAA | 44 × 44 CSS px | |

Research:
- Thumb input on phones: error rates drop and plateau at targets of roughly 9-10 mm (Parhi, Karlson & Bederson
  2006: ~9.2 mm for discrete taps, ~9.6 mm for serial taps) [moderate-strong].
- Index fingertip contact widths ~8-10 mm, finger pads ~10-14 mm [moderate; Dandekar, Raju & Srinivasan 2003].
- Touch accuracy varies by screen region: center is most accurate; top and bottom edges need larger targets
  (roughly 7 mm center vs ~11-12 mm at top/bottom edges) [moderate; Hoober, "Touch target sizes" UXmatters,
  ~2013-2015, field observation of many users].
- How people hold phones: ~49% one-handed, ~36% cradled, ~15% two-handed in a 1,333-person field observation;
  users shift grip frequently [moderate; Hoober 2013, UXmatters].
- 44 pt ≈ 7 mm on many iPhones; 48 dp ≈ 9 mm. So the platform minima are at/below research comfort levels —
  treat them as FLOORS for primary actions, not targets.

Rules of thumb:
- Primary actions on mobile: ≥ 48 px/pt tall, full-width or wide when possible.
- Spacing between adjacent targets: ≥ 8 px/pt (Material recommends ≥ 8 dp); destructive actions should not sit
  directly adjacent to frequent ones.
- Thumb zone: on large phones, the top corners are hardest to reach one-handed [moderate; Hoober 2013; Clark
  2015, Designing for Touch]. Put frequent actions in the bottom half (bottom tab bars, bottom sheets, bottom-
  anchored primary buttons); put rare/destructive actions higher.
- Small inline text links in body copy are poor touch targets — make critical links buttons or give them padding.
- Pointer devices (desktop) tolerate smaller targets (~24-32 px) but keep ≥ 24 px for accessibility; users with
  tremor or low motor control need more.

---

## 3. Steering law (moving through tunnels)

Formula (Accot & Zhai 1997, CHI):  T = a + b · (A / W)
- A = path length, W = tunnel width. Time grows LINEARLY with A/W (worse than Fitts's logarithmic growth)
  [strong in lab studies].

UI implications:
- Cascading (hover) submenus are steering tasks: long, narrow paths through the parent item to reach the
  submenu. Errors = submenu closes.
  - Keep submenus short; widen the parent row; add a hover-intent delay or "safe triangle" (cursor moving toward
    the submenu keeps it open) [weak/anecdotal but widely adopted; popularized by Kamens 2013 blog on Amazon's
    mega-dropdown].
  - Prefer click-to-open mega menus or flat menus over multi-level hover cascades.
- Sliders and drag-to-reorder: give wide tracks, allow tapping a position, provide keyboard/stepper alternatives
  (WCAG 2.5.7 Dragging Movements, AA in 2.2: a single-pointer non-dragging alternative is required).
- Gestures on mobile requiring precise paths (e.g. narrow swipe areas) generate errors; give large swipe areas
  and a visible alternative.

---

## 4. Hick-Hyman law (choice reaction time) — and its limits

Formula: RT = a + b · log2(n + 1)  (n equally likely alternatives; +1 accounts for uncertainty of whether to act)
- Hick 1952; Hyman 1953 (extended to unequal probabilities: RT scales with information/entropy H) [strong for
  its domain].

Where it applies:
- Choosing among a FAMILIAR set of options with practiced stimulus-response mapping (e.g. an expert picking from
  a known menu, choosing a key).
- Ordered menus where users know the item's label and can predict position: selection time grows roughly
  logarithmically [moderate; Landauer & Nachbar 1985].

Where it DOESN'T (common misuse):
- Searching an unfamiliar, unordered list is a visual search task: time grows roughly LINEARLY with items
  scanned, not logarithmically [strong; e.g. Sears & Shneiderman 1994; Cockburn, Gutwin & Greenberg 2007 model
  menus as a transition from search (linear) to decision (Hick) with expertise].
- Real decisions (which plan, which product) are dominated by deliberation, values, and uncertainty, not RT.
  Hick says nothing about choice quality or satisfaction.
- MYTH: "Hick's law proves fewer options always convert better." The famous "jam study" choice-overload effect
  (Iyengar & Lepper 2000) has an average effect near zero in meta-analysis (Scheibehenne, Greifeneder & Todd
  2010) [contested]; overload appears under specific moderators — complex options, no clear preference, hard
  comparison, time pressure (Chernev, Böckenholt & Goodman 2015) [moderate].

Practical rules:
- Reduce options when they are similar, hard to compare, and users lack preferences: offer a recommended
  default, highlight "most popular", group, or use progressive narrowing (filters).
- Keep options when users have strong, specific preferences (they search, they don't browse) — instead improve
  sorting, filtering and search.
- Order options by likelihood (frequency/recency) or by a predictable key (alphabetical, numeric), not
  arbitrarily. Predictable order lets experts move from search to Hick-style recall.

---

## 5. Task-time estimation: Keystroke-Level Model

KLM (Card, Moran & Newell 1980, CACM; The Psychology of Human-Computer Interaction 1983) [strong as an
engineering approximation, ±20% typical]. Operator times:
| Operator | Meaning | Time |
|---|---|---|
| K | Keystroke/button press | ~0.2 s average skilled typist (0.08 s expert – 1.2 s novice) |
| P | Point with mouse to target | ~1.1 s (from one 1978 text-selection study — rough; compute via Fitts or measure) |
| B | Mouse button press/release | ~0.1 s |
| H | Home hands keyboard↔mouse | ~0.4 s |
| M | Mental preparation | ~1.35 s |
| R | System response | measured |

Use: compare two designs for a high-frequency task (e.g. 3 taps + 1 decision vs 1 tap + 2 decisions). Every
removed M (decision) saves ~1.35 s — decisions are expensive. For touch, extensions exist (e.g. Rice & Lartigue
2014 touch-KLM) [moderate].

### 5.1 Text entry
- Entry speed (wpm) = (n − 1 characters, first to last keystroke) / seconds × 12 (a "word" = 5 chars). Always
  report an error rate next to it: total = corrected + uncorrected (Soukoreff & MacKenzie 2003) [strong method].
  Log keystrokes incl. Backspace in analytics; the final value hides fixed errors.
- Benchmarks: touch typing 40–60+ wpm; hunt-and-peck 20–40; handwriting 15–25 (so even perfect handwriting
  recognition caps speed) [moderate; dated pre-smartphone surveys].
- Novel layouts start slower than Qwerty (OPTI 17 vs 28 wpm walk-up) and needed ~4 h of practice to overtake it —
  default consumer products to familiar layouts; make novel ones optional. → references/books/mackenzie-hci-empirical.md

---

## 6. Response-time limits and perceived performance

Classic limits (Miller 1968, "Response time in man-computer conversational transactions"; Card, Robertson &
Mackinlay 1991; Nielsen 1993, Usability Engineering) [strong as practical guidelines, grounded in perception
research]:
| Delay | Perception | Design requirement |
|---|---|---|
| ≤ ~0.1 s (100 ms) | Feels instantaneous; direct manipulation | No indicator needed. Visual feedback for taps/presses must land here |
| ~0.1 – 1 s | Delay noticed, flow of thought intact | No spinner needed (spinners < 1 s cause flashing); maybe subtle state change |
| ~1 – 10 s | Attention starts to wander | Show busy indicator; ≥ ~2-4 s use determinate progress if possible |
| > ~10 s | Attention lost; users task-switch | Percent-done progress, time estimate, allow background/cancel, notify on completion |

Doherty threshold: Doherty & Thadani 1982 (IBM technical report) argued productivity rises sharply when
system response < 400 ms [moderate/weak — single industry report with productivity metrics, widely cited,
plausible but not a precise constant]. Use as "aim for under ~400 ms for conversational interactions".

Modern web budgets (Google, web.dev; measured at the 75th percentile of page loads):
- Core Web Vitals: LCP ≤ 2.5 s; INP (Interaction to Next Paint, replaced FID in March 2024) ≤ 200 ms;
  CLS ≤ 0.1 [strong as industry standard; thresholds are Google's, based on its research and field data].
  "Poor" bounds: LCP > 4 s, INP > 500 ms, CLS > 0.25. Diagnostics: TTFB ≤ 0.8 s, FCP ≤ 1.8 s. The "good"
  levels are achievability-based release gates (set by what real mobile sites can hit), not perception targets —
  100 ms remains the perceptual target for feedback. → references/books/web-vitals.md
- RAIL model: respond to input within 100 ms (process within ~50 ms), produce animation frames within ~16 ms
  (60 fps), use idle time in ≤ 50 ms chunks.
- Direct-manipulation touch latency: users detect touch latency down to ~ single-digit to tens of ms in dragging
  tasks [moderate; Ng, Lepinski, Wigdor, Sanders & Dietz 2012, UIST — perceptible down to ~1-10 ms for
  dragging]. You cannot get there in software, but it shows why 100 ms is not "instant" for drag.

Perceived waiting (honest techniques):
- Users prefer seeing progress bars to no feedback [moderate; Myers 1985, CHI].
- Progress bars that accelerate toward the end are perceived as faster than ones that decelerate
  [moderate; Harrison, Amento, Kuznetsov & Bell 2007, UIST; Harrison et al. 2010].
- Occupied/explained waits feel shorter than unexplained ones [moderate, resting on later wait-perception
  studies; Maister 1985, "The psychology of waiting lines", is itself [weak] — hypotheses and anecdotes, no data,
  service operations]. His other propositions, translated: **pre-process waits feel longer** (acknowledge input
  instantly); **uncertain waits feel longer** (give an honest estimate — an ETA is a promise; once it passes,
  tolerance collapses, the "appointment syndrome"); **unfair waits feel longer** (visible order, explicit priority
  rules); **post-process waits feel longest** (no waits after the value is delivered: logout, receipts, cancel);
  **anxiety lengthens waits** (answer the likely worry on screen). → references/books/maister-waiting-lines.md
- Skeleton screens vs spinners: evidence is mixed; skeletons can reduce perceived wait when layout is
  predictable [weak/contested; small studies, vendor blogs]. Never show a skeleton that doesn't match the final
  layout (causes layout shift).
- Optimistic UI (show success immediately, reconcile in background) is right for low-risk, high-success actions
  (likes, toggles); wrong for payments or irreversible actions.
- Never fake progress (fake "analyzing your answers..." delays to build anticipation are manipulative unless
  they reflect real processing).

---

## 7. Animation timing (motion as feedback)

- Animations should support comprehension (where did this come from? what changed?) — they also hide change
  blindness (see perception file).
- Typical durations: micro-interactions ~100-200 ms; component transitions ~200-300 ms; larger/full-screen
  transitions ~300-500 ms. Material 3 motion tokens span ~50 ms (short1) to ~1000 ms (extra-long4); iOS
  system transitions are typically ~0.25-0.5 s [moderate as platform practice, not research constants].
- Exits faster than entrances; larger travel distances take slightly longer; use easing (ease-out for entering,
  ease-in for exiting) rather than linear for spatial motion [weak/anecdotal — platform convention].
- Nothing that blocks input should exceed ~300-400 ms; users repeating a frequent action will feel it.
- Respect reduced motion settings; replace motion with fades or instant changes.

---

## 8. Timing constants for interaction details (practitioner defaults, [weak/anecdotal] unless noted)

- Long-press: ~500 ms (Android default long-press timeout ~400-500 ms; iOS ~0.5 s).
- Double-click threshold: OS default ~500 ms (Windows default 500 ms).
- Tooltip show delay: ~300-700 ms (avoids flicker as pointer passes); hide quickly.
- Hover-intent for menus: ~100-300 ms delay before opening/closing.
- Toasts/snackbars: 4-10 s; longer for text-heavy; must be pausable/accessible (WCAG 2.2.1 Timing Adjustable);
  actions in toasts must also be reachable elsewhere.
- Undo window for destructive actions: commonly 5-10 s (e.g. Gmail "Undo send" configurable 5-30 s).
- Debounce search-as-you-type: ~150-300 ms.

---

## 9. Worked examples

Example A — Mobile checkout "Pay" button small and at top-right.
- Fitts + thumb zone: move to bottom, full-width, ≥ 48 pt tall, sticky above keyboard/safe area. Expected effect:
  fewer mis-taps and faster completion; A/B test with completion rate, time-to-pay, and error taps as metrics.

Example B — Hover cascade menu with 3 levels in a desktop app; users complain menu "closes on its own".
- Steering law: replace with click-to-open flyout or a flat mega menu; if keeping cascade, add hover-intent delay
  and safe triangle; widen items.

Example C — Report generation takes 6-20 s; users click "Generate" repeatedly.
- Response-time limits: immediate (≤ 100 ms) button state change + disable; determinate progress with steps;
  allow navigation away with completion notification. Metric: duplicate requests, abandonment during wait.

Example D — Settings list with 40 options; team proposes cutting to 7 "because Hick's law".
- Hick doesn't apply to searching an unfamiliar list. Better: group into sections, add search, order by frequency
  (from analytics), keep rarely used items. Measure time-to-find in tree test / first-click test.

---

## 10. Anti-patterns

- Tiny close (×) buttons on modals/ads, or making "decline" small and "accept" huge — manipulative (asymmetric
  friction).
- Spinners for sub-second operations (flicker) and no feedback for multi-second ones.
- Layout shift moving targets just as users tap (CLS) — causes accidental taps on ads/wrong items.
- Hover-only affordances on touch devices (no hover exists).
- Drag-only interactions with no tap/keyboard alternative.
- Citing Hick's law to justify removing choices users need.

## 11. When NOT to apply

- Making targets big everywhere can destroy density for expert desktop tools; scale by input modality and
  frequency of use.
- Fitts's law models pointing time, not decision time or discoverability; a huge button with an unclear label
  is still slow.
- Adding friction (distance, confirmation) is right for destructive, irreversible, or high-risk actions — but
  apply it symmetrically and honestly, never to obstruct users from leaving/cancelling.
