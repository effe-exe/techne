# Cognition Cheat Sheet: Numbers, Laws, Myths (compressed)

Use this when: you need a quick number/threshold or to sanity-check a "psychology says..." claim during any
design task, critique, or experiment proposal. Load the detailed cognition-* file for reasoning and examples.
Skip when: you already loaded the specific detailed file for this topic.

Tags: [strong] [moderate] [weak/anecdotal] [contested]. Sources in detailed files.

---

## 1. Numbers to remember

| Topic | Number | Strength | Detail file |
|---|---|---|---|
| Foveal (sharp) vision | ~1-2° visual angle | strong | perception |
| Fixation duration | ~200-300 ms | strong | perception |
| Preattentive pop-out | < ~200-250 ms, parallel | strong | perception |
| Subitizing (instant count) | ≤ ~4 items | strong | perception |
| First aesthetic impression | ~50 ms (down to 17 ms) | moderate | perception |
| Text contrast (WCAG AA) | 4.5:1 body, 3:1 large (≥24 px / ≥18.66 px bold) | standard | perception |
| Non-text UI contrast | 3:1 | standard | perception |
| Flashing limit | ≤ 3 flashes / s | standard | perception |
| Color vision deficiency | ~8% men, ~0.5% women (N. European ancestry) | strong | perception |
| Line length (prose) | ~50-75 characters | weak/contested | perception |
| Silent reading speed | ~238 wpm | strong | perception |
| Words read per page visit | ≤ ~20-28% | moderate | perception |
| Attention in 1st screenful | ~57% (2 screens ~74%) | moderate | perception |
| Left-half viewing time (LTR) | ~69-80% | moderate | perception |
| Working memory | ~4 ± 1 chunks (not 7±2) | strong | memory |
| Chunk long strings | groups of 3-4 chars | moderate | memory |
| Touch target iOS / Android | 44 pt / 48 dp | standard | motor |
| WCAG target size | 24 px AA (2.5.8), 44 px AAA (2.5.5) | standard | motor |
| Thumb-comfort target | ~9-10 mm | moderate | motor |
| Edge targets on touch | ~11-12 mm vs ~7 mm center | moderate | motor |
| Phone grip | ~49% one-hand, 36% cradle, 15% two-hand | moderate | motor |
| Fitts | MT = a + b·log2(D/W + 1) | strong | motor |
| Steering | T = a + b·(A/W) | strong | motor |
| Hick-Hyman | RT = a + b·log2(n + 1) (familiar, equiprobable only) | strong-in-scope | motor |
| KLM mental prep | ~1.35 s per decision | strong (approx.) | motor |
| Instant feedback | ≤ 100 ms | strong | motor |
| Flow of thought kept | ≤ 1 s | strong | motor |
| Attention lost | > 10 s | strong | motor |
| Doherty threshold | < 400 ms | moderate/weak | motor |
| Core Web Vitals (p75) | LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 | standard | motor |
| UI transitions | ~100-200 ms micro, 200-300 ms components, ≤ 500 ms large | weak (convention) | motor |
| Habit automaticity | median ~66 days, range 18-254 | moderate | emotion |
| Daily behavior habitual | ~43% | moderate | emotion |
| Endowed progress | ~19% → ~34% completion | moderate | emotion |

## 2. Laws in one line each

- Gestalt: proximity is your main grouping tool; common region (containers) overrides proximity; similarity
  groups by style; figure-ground needs a clear depth model.
- Hierarchy: one primary per view, 3-4 emphasis levels max, verify with a blur/squint test.
- Pop-out works only if the feature is unique and the background is homogeneous.
- Inattentional blindness: put critical info in the task path, not in banners.
- Change blindness: animate/highlight what changed; reloads hide changes.
- Banner blindness: never style important content like an ad.
- Recognition over recall: the interface is the memory.
- Cognitive load: eliminate extraneous, sequence intrinsic, support germane; guidance must fade for experts
  (expertise reversal).
- Fitts: bigger + closer for frequent actions; full-row hit areas; bottom of screen on mobile.
- Steering: avoid long narrow hover paths; click-to-open menus.
- Hick: applies to familiar choices, not searching unfamiliar lists or real-world deliberation.
- Response times: 0.1 / 1 / 10 s.
- Peak-end: fix the worst moment, design the ending (including cancellation).
- Serial position: first and last items stick; randomize order in research.
- Goal-gradient & endowed progress: honest progress indicators speed completion.
- Flow: clear goals, immediate feedback, challenge ≈ skill, no interruptions.
- Habit: stable cue + small action + immediate reward; redesigns break habits (expect change aversion; measure
  over weeks; separate new vs existing users).
- Aesthetic-usability: beauty raises perceived usability and trust, but never replaces task success — pair
  self-report with behavioral metrics.
- Fluency: easy-to-process = liked/trusted/believed → make the true and important things fluent.

## 3. Myths and overclaims to reject (say so when a stakeholder cites them)

| Claim | Verdict |
|---|---|
| "Menus should have 7±2 items" | MYTH — Miller 1956 was about span/absolute judgment; menus are recognition; WM is ~4 chunks anyway |
| "Users don't scroll" | MYTH — they scroll; attention decays with depth, so prioritize, but don't cram |
| "Golden ratio makes UI beautiful" | MYTH — no robust preference evidence |
| "Hick's law: fewer options always convert better" | OVERCLAIM — scope-limited; choice overload meta-effect ≈ 0 with moderators |
| "Users decide in 50 ms so content doesn't matter" | OVERCLAIM — aesthetic first impression ≠ task success or conversion |
| "21 days to form a habit" | MYTH — median ~66 days, huge variance |
| "Zeigarnik: users remember unfinished tasks" | CONTESTED — memory effect weak; the urge to resume (Ovsiankina) is more reliable |
| "Disfluent fonts improve learning" | FAILED REPLICATION |
| "Ego depletion: users run out of willpower" | CONTESTED — large multi-lab replication near zero |
| "We only use 10% of our brain" / "left vs right-brain users" | MYTH |
| "Learning styles (visual/auditory learners)" | MYTH — no evidence for matching instruction to styles (Pashler et al. 2008) |
| "Attention span shorter than a goldfish (8 s)" | MYTH — untraceable statistic |
| "Skeleton screens always feel faster" | WEAK/CONTESTED — test it |
| "Doherty threshold 400 ms is a hard law" | OVERCLAIM — single 1982 industry report; use as a target |
| Laws of UX: "progress bars help regardless of accuracy", "adding a delay increases perceived value", "provide artificial progress" (Goal-Gradient/Zeigarnik) | UNSUPPORTED + ETHICS FAIL — no evidence given; progress and waits must be real (labor illusion only when work is happening). → references/books/laws-of-ux.md |

## 4. Five-question cognitive review (run on any screen)

1. Fixations: what are the first 3 things the eye lands on (blur test)? Are they the 3 most important?
2. Grouping: does every control sit closest to what it affects? Any ambiguous spacing?
3. Memory: does the user need to remember anything from elsewhere? Can it be shown here instead?
4. Motor/time: are primary targets ≥ 44-48 pt and reachable; does every tap give feedback ≤ 100 ms?
5. Feeling/ending: what's the worst moment and the last moment of this flow, and are they handled honestly?

## 5. Turning cognition into experiments (data-driven loop)

- Every cognitive hypothesis becomes: "Because [principle + source], changing [element] will change [behavioral
  metric] for [segment], measured by [primary metric] with [guardrail metrics]."
- Example: "Because of inattentional blindness (Simons & Chabris 1999), moving the shipping-threshold message
  next to the cart total will increase % of carts above threshold; guardrails: AOV, checkout completion, refunds."
- Principles generate hypotheses; your users' data decides. Report the result even when the principle "failed" —
  context beats textbook.

## 6. Scale-appropriate use (from a padding tweak to a full system)

| Task size | Which cognition checks matter most |
|---|---|
| Single property (padding, color, size) | Gestalt proximity (does the gap change grouping?), contrast ratio, target size, Weber/JND (is the change perceptible at this size?) |
| Component (button, field, card) | Hit area vs visual size, states with ≤100 ms feedback, label visibility (recognition), color-not-alone, focus ring ≥3:1 |
| Screen | Fixation budget + blur test, one primary action, scanning pattern (layer-cake), first-screenful priority, banner blindness |
| Flow | Working-memory carry-over between steps, progress (goal-gradient), response-time states, peak and end moments, resumption (Ovsiankina) |
| Redesign of a habitual product | Habit discontinuity, change aversion, spatial memory of top actions, staged rollout, long-horizon metrics |
| Design system | Spacing scale (few values → clearer grouping), type scale ratio (1.2-1.333 for product UI), motion tokens (100-500 ms), contrast-safe color tokens in light AND dark, target-size tokens (44/48), reduced-motion variants |

## 7. Code hooks (for designers who prototype)

- Web hit area: `min-height: 44px; min-width: 44px;` or padding; keep visual small if needed.
- Web reduced motion: `@media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }`
  (better: swap to opacity fades instead of removing all feedback).
- Web autofill/keyboard: `autocomplete="one-time-code"`, `inputmode="numeric"`, `type="email"`.
- Web live updates for change blindness / screen readers: `aria-live="polite"` region for status changes.
- SwiftUI hit area: `.frame(minWidth: 44, minHeight: 44).contentShape(Rectangle())`.
- SwiftUI reduced motion: `@Environment(\.accessibilityReduceMotion) var reduceMotion`.
- SwiftUI Dynamic Type: use text styles (`.font(.body)`), avoid fixed point sizes.
- SwiftUI autofill: `.textContentType(.oneTimeCode)`, `.keyboardType(.numberPad)`.
- Performance: measure INP/LCP/CLS with web-vitals library or Lighthouse; on iOS, keep main-thread work off
  touch handlers so feedback lands ≤ 100 ms.

## 8. Evidence etiquette for the agent

- When citing a principle in a critique, state: principle, source (author, year), strength tag, and the
  behavioral metric that would confirm it in THIS product.
- If you cannot recall a source precisely, say "unverified" rather than inventing a citation or number.
- Prefer "[strong]" principles for unilateral recommendations; for "[moderate]" and below, recommend a test.
- Never use cognitive principles to justify manipulative patterns; if a requested design exploits a bias
  against the user's interest, name the bias, explain the harm, and propose an honest alternative.
