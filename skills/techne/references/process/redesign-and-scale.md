# Redesign Strategy & Designing at Scale

> **Use this when:** deciding whether to iterate on or rebuild an existing product/area, planning a redesign rollout, managing design debt and consistency in a large product, or migrating users and components to a new system.
> **Covers:** iterate-vs-rebuild decision, Spolsky's warning, Gall's law, local-maximum problem, redesign rollout and measurement, change aversion, design debt audits, consistency governance, migration (strangler pattern).
> **Pair with:** the data-driven/experimentation references for test design and statistics.

---

## 1. The point of view

- **Default to evolution.** In a product with millions of users, accumulated learning lives in the details of the current design: every odd edge case was probably a bug report once. Rebuilding throws that knowledge away unless you deliberately harvest it.
- **But don't worship the hill you're on.** Incremental A/B testing converges to a local maximum. Step changes require a different kind of evidence (concept research, prototypes, staged launches), not the absence of evidence.
- **A redesign is a migration, not a launch.** Most of the risk is in moving existing users, content, habits, and components, not in drawing the new screens.

---

## 2. The two warnings

### Spolsky: "Things You Should Never Do, Part I" (2000)
Joel Spolsky argued Netscape's decision to rewrite its browser from scratch was "the single worst strategic mistake" a software company can make: old code is ugly because it contains years of bug fixes, and a rewrite hands competitors years of lead time [weak/anecdotal: one case, strongly argued, widely accepted in engineering]. Design translation: the old UI's "weird" bits often encode real user needs (an obscure setting used by 4% of power users who generate 30% of revenue). **Before removing anything, find out why it exists and who uses it.**

### Gall's Law (John Gall, *Systemantics*, 1975)
"A complex system that works is invariably found to have evolved from a simple system that worked." A complex system designed from scratch tends not to work and can't be patched into working [weak/anecdotal as empirical claim; robust as heuristic]. Design translation: for new products and design systems, **ship a small working core and grow it.** Don't launch a 200-component design system; launch 10 used components.

---

## 3. Iterate vs rebuild: decision guide

Score each factor; rebuild only when most point right.

| Factor | → Iterate | → Rebuild / redesign |
|---|---|---|
| Core model (IA, mental model, navigation) | Still matches users' jobs | Fundamentally mismatched; users fight it (evidence: tree tests, task failure) |
| Problem distribution | Problems are local, many small | Problems are systemic, same root cause everywhere |
| Metrics trend | Improving with iterations | Flat despite repeated iterations (local max) |
| Platform/tech | Supports needed changes | Blocks them (no tokens, no components, can't do dark mode/a11y) |
| Brand/strategy | Unchanged | Repositioning, new audience, new business model |
| User base | Large, habituated, high switching pain | Small, or mostly new users coming |
| Accessibility | Fixable in place | Requires structural change |
| Team capacity | Limited | Can sustain parallel old + new for months |

Strong signals to rebuild: the same usability problem reappears in every area because the IA is wrong; adding features requires workarounds every time; the product's job has changed.
Weak signals (do not justify a rebuild alone): "it looks dated", a new leader's taste, a competitor's redesign, designers are bored.

**Middle path (usually right): redesign the model, migrate incrementally.** Define the target vision (north star prototype), then reach it through a series of shippable, measurable steps.

---

## 4. The local maximum problem

- A/B testing optimizes within the neighborhood of the current design; it rarely discovers a different design concept, because tests compare small variations [strong as reasoning; e.g. Kohavi, Tang & Xu, 2020, discuss limits of incremental testing].
- Many tested changes don't win: in large organizations, a majority of experiments show no significant improvement (Kohavi et al. report roughly 1/3 positive, 1/3 flat, 1/3 negative at Microsoft; lower success rates elsewhere) [moderate].
- Portfolio heuristic for a mature product team (weak/anecdotal, adapt): ~70% incremental optimization, ~20% bigger bets on known opportunities, ~10% exploratory concepts.
- How to evaluate step changes: concept tests and prototype usability on the new model, then a **long-running** experiment (weeks), segmented by new vs existing users, with guardrails.

---

## 5. Change aversion and novelty

- **Change aversion:** existing users often react negatively to change initially, even when the new design is better; metrics and sentiment dip and then recover (Google UX research, Aaron Sedley & Hendrik Müller, "Minimizing change aversion for the Google Drive launch", CHI EA 2013) [moderate].
- **Novelty effect:** the opposite: a temporary lift because something is new.
- **Primacy effect** (experimentation term): existing users' learned behavior temporarily depresses a better new design [strong as observed phenomenon; Kohavi et al., 2020].

Implications:
- Analyze **new users separately** from existing users; new users show the design's steady-state effect without learned habits.
- Run long enough to see the curve flatten (plot treatment effect by day since exposure).
- Mitigations from the Google Drive case and general practice: advance notice, explain what changed and why, an opt-in preview period, temporary "switch back" (with an end date), in-product tours for moved items, feedback channel, and visible responsiveness to feedback.
- Don't move high-frequency controls without a strong reason; muscle memory is user value.

---

## 6. Redesign rollout playbook

1. **Harvest knowledge**: inventory every feature, setting, and state in the old design; attach usage data; list support tickets and known edge cases. Nothing is removed without an owner's decision and data.
2. **Baseline metrics**: task success (benchmark test), key funnel rates, retention, support contact rate, performance, accessibility audit score, SUS/UMUX-Lite.
3. **Define success and guardrails** before building. Example: primary = task completion time −20% on top 5 tasks; guardrails = no drop in week-4 retention, support contacts not up >10%, revenue per user flat or up.
4. **North-star prototype**: the full vision, tested qualitatively (5–8 users per segment, 2–3 rounds).
5. **Slice it**: find the sequence of independently shippable steps that each moves toward the north star and is measurable.
6. **Opt-in beta** for power users and internal → **staged rollout** (1% → 5% → 25% → 50% → 100%) with feature flags and a kill switch.
7. **Measure** by cohort (new vs existing, platform, segment). Watch for change-aversion curve.
8. **Sunset** the old version with a date; remove the switch-back.
9. **Post-launch review**: what we predicted vs what happened; update the playbook.

---

## 7. Design debt

Definition: the accumulated cost of design decisions that were expedient at the time and now slow the team or hurt users: inconsistent patterns, one-off components, unhandled states, inaccessible elements, outdated IA (analogy to technical debt: Ward Cunningham, 1992) [practice concept].

Types:
- **Visual inconsistency**: 14 greys, 9 button styles, arbitrary spacing.
- **Pattern inconsistency**: three different ways to filter, two date pickers.
- **Structural debt**: IA that grew by accretion; features bolted where there was room.
- **State debt**: missing empty/error/offline states.
- **Accessibility debt**.
- **Copy debt**: same concept named differently.

### Design debt audit (procedure)
1. **Interface inventory** (Brad Frost, *Atomic Design*, 2016): screenshot every instance of each UI element type across the product (buttons, inputs, modals, colors, type sizes, icons) and group them [practice canon].
2. Count variants per element; for code, grep for hard-coded values (hex colors, px sizes) vs token use.
3. Score each debt item: **user impact** (1–5) × **reach** (traffic share) ÷ **fix effort**.
4. Separate quick wins (token swaps) from structural work (pattern consolidation, IA).
5. Pay down continuously: e.g. a fixed share of each cycle, or "boy scout rule" (leave each touched screen more consistent than you found it).
6. Track: % of screens on current components, token adoption rate, number of variants per element, a11y violations count.

---

## 8. Consistency governance in big products

- **Design system as product**: owners, roadmap, versioning, changelog, contribution model (Nathan Curtis's essays on design systems team models, e.g. centralized vs federated, 2015–) [practice].
- **Decision rule for deviating** from the system: a deviation must be backed by evidence that the system pattern fails for this use case; then either the system changes (if general) or the exception is documented (if local).
- **Contribution flow**: propose → check for existing pattern → prototype in context → review → add to library with all states/variants → announce.
- **Deprecation**: mark deprecated, offer migration path and codemods, set removal date, measure usage down to zero.
- **Consistency vs optimization**: a locally better variant (won an A/B in one surface) should be promoted to the system if it generalizes; otherwise you get "winning" divergence everywhere.

---

## 9. Migration patterns

- **Strangler fig** (Martin Fowler, 2004): grow the new system around the old one, route traffic piece by piece, until the old one can be removed [strong as engineering practice]. Design equivalent: new components and screens replace old ones flow by flow, behind flags, with shared tokens bridging the visual gap.
- **Token-first migration**: introduce semantic tokens mapped to old values (no visual change), then remap tokens to new values (global visual change in one switch), then refactor components. Lowest-risk route to a visual refresh.
- **Bridge period rules**: never ship a screen that mixes old and new patterns for the same control type; migrate by complete flows, not random screens.
- **Data/content migration**: users' saved settings, layouts, and content must carry over; anything that can't is announced in advance with export.

---

## 10. Worked example: "Our settings page is a mess, redesign it"

1. Classify: L3 if it's a structural mess across 60+ settings; L1 if it's visual only.
2. Inventory: list all settings, usage per setting (analytics), tickets mentioning settings.
3. Evidence: tree test current structure on top 10 find-tasks (n≈50). Suppose success 48%.
4. Open card sort (n≈20) → proposed groups; tree test proposed (n≈50) → success 81%.
5. Keep: deep links to settings that external docs reference (redirect them).
6. Ship by group behind a flag; existing users see "Settings have moved" with search highlighted.
7. Measure: settings-related support contacts, search-in-settings usage, task success in follow-up benchmark.
8. Remove old pages after 2 release cycles.

## 11. Redesign brief template (agent output)

```
REDESIGN BRIEF: [area]
Why now: [evidence: metrics trend, research findings, platform blockers], strength-tagged
Iterate-vs-rebuild score: [table from Section 3, with verdict]
Knowledge harvested: [features/settings/edge cases inventory link; what must survive]
North star: [prototype link + 3 principles it embodies]
Slices: [ordered list; each with metric and rollback plan]
Success metric + guardrails + decision rule
Change-aversion plan: [notice, preview, switch-back window, tours]
Cohort analysis plan: [new vs existing, platform, segment]
Sunset date for old version
Risks & open questions (owner, date)
```

## Anti-patterns
- Big-bang redesign revealed at launch with no beta, no switch-back, no baseline.
- Removing "unused" features without checking who uses them and how much they're worth.
- Declaring the redesign a success from a 1-week test dominated by novelty.
- A design system created in a vacuum, adopted by no one (violates Gall's law).
- Rebuilding because it "looks old" while the real problems are structural (or vice versa).
