# References changelog

## 2026-10-26 — Primary-source corrections pass (core domain files)

172 proposed updates from 53 distilled sources (`references/books/*.md`). Each claim was checked against its backing notes file before editing. Result: **166 applied** (45 of them merged into 19 combined edits), **6 skipped**. No file grew by more than ~25% (largest: `statistics-cheatsheet.md` +27.5% for 18 updates).

### data-driven/statistics-cheatsheet.md
- §1 p-values: added ASA principle 6, plus principles 3 (don't decide on the threshold alone) and 4 (report every test, flat ones too).
- §2.1: assumed effect for power/MDE must come from external evidence, computed over a range (Gelman & Carlin 2014).
- §2.3: CUPED no longer listed as a revenue fix (<5% variance cut at Bing); added absolute per-user cap.
- §2.3: added n ≥ 355·s² minimum for skewed metrics (Bing s = 17.9 → 114k; capped s = 5.2 → 9.7k).
- §3.3: "sometimes by 2x" replaced by power-linked exaggeration ratios (1.1x/1.4x/2.5x/3.7x) and Type S risk below ~10% power.
- §3.4: π defined as P(idea works) vs Kohavi 2022's P(H0); added 20%-power FPR column.
- §4.1 CUPED: 1–2 week pre-period, same-metric covariate, never post-exposure covariates (Bing sign flip), entry-day covariate ~9–10%.
- §5 peeking: Miller's corrected nominal thresholds per planned peek and the 26.1% worst case; Bing O'Brien–Fleming alert example (5×10⁻⁸ → 0.040).
- §6: iteration false-positive arithmetic (1 − 0.975^k), p < 1e-4 for unplanned slices, outlier trimming → 43% FP (Andre attribution dropped; not in notes).
- §7 SRM: threshold note (checker uses 0.01), missed design-relevant causes, prevention rules, diagnosis order, extreme-value bounds caveat; Fabijan prevalence.
- §8.2: collider-bias rationale for pre-treatment segments (−1 → +0.6).
- §10: RDD separated from time series and ranked first; DiD needs parallel *counterfactual* trends (untestable); falsification tests.
- §11 myths: post-hoc power myth; second reason against 90/10 splits (left-tail Type I ≈ doubled, ~400x convergence) and shared-control saving <10%.

### data-driven/experimentation-playbook.md
- §2.3: check CUPED before declaring a test infeasible.
- §2.4: page regions differ for latency (right pane vs server delay) and task-based time metrics; re-implementations need a no-degradation A/B bar; bundle small fixes.
- §2.6: ramp harm checks vs 98% control inflate left-tail alarms; dashboards show progress and detectable δ, not live significance.
- §2.7: Fabijan 6% SRM is a primary figure [strong]; checker threshold note.
- §4.2: novelty qualified as uncommon (Seven Rules); Hohnhold 2015 corrected — long-term effect of mobile ad-load increase ≈ zero, correct method names, holdback only in staggered rollout; new "quality-driven user learning" point with half-life/Q numbers.
- §4.3: per-feature holdback vs program-level holdout (Bing 10%, 25–30 ms cost).
- §4.4/4.4b: ITT under non-compliance; eBay brand-keyword case as the targeted-treatment warning.
- §5.4: manipulation test design against a neutral control (choice rate, preference match, comprehension; pre-registered threshold).

### data-driven/metrics-frameworks.md
- OEC rules: worked long-term OEC (Δrevenue + Q × learned change), pre- and post-click quality terms; Rule 5 (clicks shift, abandonment rarely moves; dilute segment lifts).
- §3 HEART: tag changed [strong] → [moderate, unvalidated]; PULSE contrast; signal rules; ≥5-of-7-days engagement metric; include/exclude note.

### data-driven/conversion-checkout-forms-signup-landing.md
- Baselines: 70.22% over 50 studies; forced-account 18–19% vs 24% (2022); 5.1 steps / 11.3 fields [moderate].
- Checkout rules: StubHub drip-pricing evidence (pointer to pricing file); guest checkout with matching email, password rule; card data preserved, card formatting, adaptive errors; delivery dates and cutoff countdown, no Apply/Save buttons; order-bump COGA caveat and segment guardrail.
- Inline validation corrected (live-with-delay for strict fields, on-focus worst, errors = left at submit); persistent worded success on hard fields.
- Floating labels softened to untested; mark required AND optional in long forms (32%); trust seals = perceived security only.

### data-driven/conversion-paywalls-pricing-subscriptions.md
- §1: SOSA 2026 equal Y1 retention and similar refunds for hard vs freemium; dropped 2025 secondary refund claim; SOSA web-edition inconsistency caveat.
- §2: day-0 trial-start figures upgraded (78–90%, 50.6%, 55.4%).
- §3: plan-duration retention, first-renewal and Play billing-error benchmarks; paywall-norm and intro-offer data.

### data-driven/decisions-from-data-examples.md
- Fitts predicts time at ~4% error; error reduction from larger targets is a separate finding (Parhi 2006).

### psychology/behavior-ethics-dark-patterns.md
- §1: Susser definition corrected (process/autonomy harm, even when outcome matches); Mathur, Mayer & Kshirsagar author order; five vs six attributes.
- §2: deceptive-timer/activity-message counts; Luguri & Strahilevitz conservative figures with denominator stated.
- §3: new 6b targeting test.
- §4: catalog now 18 types (addictive design, currency confusion), plus pressured selling and testimonials of uncertain origin; EU continuous-prompting rule in nagging row.
- §5.4: account erasure (EDPB Art. 12(2)) distinguished from subscription cancellation.

### psychology/behavior-law-consent-cancellation.md
- §1.5: 16 EDPB types under 6 categories; "highlight only the most protective option" rule.
- §3.1: Arena v. Intuit (reversed on appeal) as a design lesson.
- §5: Apple HIG pre-permission, ATT and notification-level rules.

### psychology/behavior-persuasion-toolkit.md
- §0: "always ethical" qualified (Fogg's Facebook example).
- §1: Fogg model downgraded to [weak] as science, prescription kept [moderate]; wrong-prompt-type backfire; prevention rule.

### psychology/cognition-perception-attention-reading.md
- §2: Prägnanzstufen and objective-set rows; contra-structural common fate; 2× spacing as a floor (Wertheimer 1:4).
- §4: critical print size, crowding/Bouma, letter spacing doesn't speed reading.
- §5.2: stopping of a constant stimulus is noticed (James).
- §6 fold: 81% within three screens, top-half-of-viewport data, desktop-only caveat.

### psychology/cognition-memory-cognitive-load.md
- §6: Ebbinghaus savings figures with "savings ≠ recall" caveat, spacing (38 vs 68), sequence associations → stable order.

### psychology/cognition-emotion-experience-habit.md
- §5: Ebbinghaus 1885 removed as serial-position citation.
- §8: James/Bain "never suffer an exception" flagged against Lally; action-slip (capture error) rule for divergent flows.

### psychology/cognition-motor-control-and-timing.md
- §1: reference throughputs, dwell vs press, 4× between-lab variation.
- §2: HIG 44 pt default / 28 pt minimum and padding.
- §5: KLM 1.1 s pointing constant flagged as one 1978 study; new §5.1 text entry (wpm formula, error rates, benchmarks, novel layouts).
- §6: Web Vitals poor bounds and diagnostics, achievability vs perception; Maister rated [weak] with his other propositions translated.

### psychology/cognition-cheatsheet.md
- Myths: Laws of UX "artificial progress / added delay" takeaways flagged as unsupported and an ethics fail.

### interaction/accessibility.md
- §0: persona-spectrum figures (illustrative) and the toolkit's warning on simulation.
- §1: conformance scope (full page, complete process, non-interference, no site-wide AAA); 1.4.2; 1.4.10 256 px height; 2.5.8 exceptions; 3.3.8/3.3.9 mechanism and exceptions.
- §4: WCAG focus requirements clarified (2.4.7 + 1.4.11 at AA; 2.4.13 measurement); APG initial-focus, dialog, tabs, aria-disabled, composite thresholds.
- §5: landmark rules; APG naming rules; aria-label translation (Pickering).
- §8: COGA numeric rules and missing patterns; 2.2.1 timeout options corrected (not "warn ≥ 20 s before").
- §10: Inclusive Components anti-patterns (ARIA menus for nav, navigating select, title tooltips, describedby toggletips, auto carousels).

### interaction/design-systems.md
- §2: pattern lineage; name by structure.
- §3.2: 3-uses → token rule and local-first promotion.
- §3.3: DTCG status, confirmed value shapes, $root/$extends/$ref/$deprecated/$extensions, Resolver Module, naming-guidance note on `bg`.
- §3.5: Curtis "no prevailing order" and principles; proportional space names; 4-pt scale as one convention vs doubling-from-16; space concepts.
- §4.1: APG keyboard table and toggle-button rule in the spec template.
- §8: federated staffing and skeptic tactic; contribution definition and two workflows; Frost's second-team bar; visual breaking-change criteria.
- §9: Frost's interface-inventory protocol and category checklist.

### interaction/microinteractions-and-motion.md
- §3: Web Vitals poor bounds, INP as release gate; Maister long-wait content and no inflated ETAs; HIG progress rules; CLS input-exclusion and slot-removal detail.
- §6: toast citation moved from 2.2.1 to APG Alert + 4.1.3.
- §7: "zero latency" softened; projection formula marked slide-only; 100%-damping start; hysteresis, parallel gestures, double-tap delay, acceleration-based pauses.
- §8: when-to-commit rule and finger occlusion / scroll ownership (Rauno, [weak/anecdotal]).
- §10: strict-rule-field validation exception; floating labels and required/optional marking aligned with Baymard.
- §11: HIG Reduce Motion additions.

### interaction/platform-conventions.md
- §0: HIG design principles (June 2026).
- §1: HIG 44/28 pt default/minimum and padding.
- §2: HIG alert rules; Liquid Glass variants, dimming, content-layer rule.
- §3: auto-dismissing notifications only for info discoverable elsewhere.

### visual/color.md
- §1: chroma-reduction gamut mapping (never clamp RGB); Oklab limits (CAM16-fitted, no reference white, Okhsl L_r).
- §5: HIG 7:1 for small text and increased-contrast variants.
- §7: palette type mapped to FT chart relationships.
- §8: `in oklab` for distant-hue gradients.

### visual/typography.md
- §3.1: Butterick dissent on modular scales.
- §3.4: critical-print-size check (17–18px for long desktop reading; 14px for labels); match by x-height.
- §4/§5: Butterick outer bounds (1.2–1.45; 45–90 cpl; 15–25px).
- §6: extra letter-spacing doesn't speed reading.
- §9: nominal-number alignment, no padded precision, table borders off by default.

### visual/layout-spacing-elevation.md
- §4.4: fold numbers verified (57/74/81%), "(verify)" removed; sparse-page counterweight (NN/g opinion).
- §7.2: Comeau attribution fixed (3–5 doubling layers, 1:2 offset) vs contact+ambient recipe; --shadow-color token pattern; drop-shadow() for shapes.

### masters/master-lenses.md
- Vitruvius: Morgan wording, six principles, "any one missing" marked interpretation; module + optical corrections, Ephesus 25% rule, Callias; integer fractions not phi.
- Aristotle Rhetoric: ethos as shown in the speech (good sense, character, goodwill); social proof moved to witnesses; emotion triad and "fear needs a way out"; deception claim softened.
- Aristotle Poetics: complication/unraveling replaces catharsis; token recognition weakest; removal test.
- Bret Victor: Magic Ink credited for context order and no-Submit rule.
- Tufte: relationship-first chart chooser (FT) with pie/dual-axis caveat.

### masters/taste.md
- Graham's "past taste looks worse" answer to "design is subjective", calibration stays the decider.

### masters/timeless-principles.md
- §2: NN/g sparse-pages counterweight to "less, but better".

### process/process-playbook.md
- §2.1: Singer's "when did it come up" narrowing and grab-bag rule.
- §2.2: Adams 2013 Intercom post cited for the job story.
- §2.4: Shape Up targets only not-shipping risk; building-phase practices, extension rule, cool-down, product phases.
- §5: 20-second gut test and style-tile → collage → comp → browser ladder.

### process/heuristics-and-critique.md
- §4.2: Adams's four-layer review order and product architecture as framing artefact.

### process/research-methods-selector.md
- §5.4: within-subjects + balanced Latin square + group-effect check; accuracy with speed; COGA testing protocol.

### process/states-and-edge-cases.md
- §3.3: strict-rule-field validation exception.
- §6: focus-on-delete rule with polite announcement.

### inspiration/inspiration-method.md
- §3: "transform from what users love" and "mods as a pipeline" as direction sources.
- §8: Ferguson's Studio/Sting example; Ferguson more permissive than these rules (learning vs shipped work).

### build/tokens-bridge.md
- §5: DTCG letterSpacing must be px/rem; springs in $extensions.
- §6: color example updated to the 2025.10 object form; legacy-pipeline note.

### build/web-prototyping.md
- Motion: margin/border animation CLS evidence.
- Web Vitals: LCP image in initial HTML, fetchpriority, no lazy-load; INP paint-first, defer, break >50 ms tasks.

### future/ai-ethics-gate.md
- §1: Microsoft toolkit's five AI bias checks as a data/training-stage review.

### Skipped
- #52 (Fogg "always ethical" in SKILL.md §2) — SKILL.md is out of scope. The same qualification was applied to `psychology/behavior-persuasion-toolkit.md` §0; SKILL.md still says "always ethical".
- #55 (Wertheimer 1:4 note on SKILL.md §2 "≥ ~2×") — SKILL.md out of scope; applied in `cognition-perception-attention-reading.md` §2 instead.
- #79 (Vitruvius / golden-ratio myth in SKILL.md §7) — SKILL.md out of scope; covered in the Vitruvius lens in `masters/master-lenses.md`.
- #95 (100 ms vs INP 200 ms in SKILL.md §2) — SKILL.md out of scope; covered in `cognition-motor-control-and-timing.md` §6 and `microinteractions-and-motion.md` §3.
- #68 (broken `inventing-on-principle.md` link in `books/magic-ink.md`) — `references/books/` is owned by another swarm.
- #69 (Vignelli Canon source URL dead / now sold by Lars Müller) — no backing notes file (`notes` empty) and no Vignelli notes in `references/books/`; unverified.
- Partial: #5 applied without the "Andre 2021" attribution, which the notes don't contain. #38 applied with both denominators stated; the primary Luguri & Strahilevitz paper was not re-read.
