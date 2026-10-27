# techne evals

How we check that techne makes design work better rather than just longer.

## Method: blind A/B
1. **Same brief, two designers, run in parallel.** One must use techne (reads `SKILL.md`, follows the modes). The other must not read the repo.
2. **Deliverables for both:** `brief.md`, `concepts.md`, `flows.md` (mermaid), `test-plan.md`, `decisions.md`, and a Next.js prototype. The prototype must build and be screenshotted at 390 and 1440 px.
3. **A blind judge** (a principal product designer persona) compares run-x and run-y without knowing which one used techne. It scores each criterion 1–10 with evidence from the files and lists the top 5 weaknesses of each run.
4. **The weaknesses of the techne run become skill fixes.** Re-run after fixing and compare.

## Rubric
1. Problem framing & use of evidence
2. Human-centredness (cognition, control, trust calibration)
3. AI interaction patterns (autonomy, failure/uncertainty states, undo, provenance)
4. Ethics, privacy & abuse resistance
5. Data-driven rollout (metrics, guardrails, sizing realism)
6. Originality / vision
7a. Tool craft (typography, hierarchy, states, polish)
7b. Brand distinctiveness, scored against the category leader's real screen as the bar (logo-off test)
8. Honesty about assumptions

## Scenarios
Each folder in `evals/scenarios/` has `brief.md`, a `fixture/` and a hidden `answer-key.md` with planted issues. Designers must never read the keys, and judges score recall against them. Run each scenario as techne vs baseline into a scratch folder outside the repo.
- `tweak-cta` (L0), `critique-signup` (L1), `paywall-meditation` (L2/L3), `ds-audit` (L4 system)
Keep briefs about public product categories and use public information only. Never use employer-confidential material. Outputs live outside the repo unless they're generic.

- `ai-file-transfer`: "Design the AI-enhanced version of a mature large-file-transfer service (tens of millions of users)."

## Log
- **2026-10-26 · ai-file-transfer.** techne 62, baseline 61 (narrow win). techne was stronger on rollout rigour (guardrail-driven sizing, a 3-arm test of AI against deterministic grouping, a 90-day holdback, a seeded-error over-reliance test) and on honesty. It was weaker on consent defaults (AI on by default, including the recipient-facing summary), had no anti-phishing design, leaked internal jargon, kept a low-value AI feature, and let safety states fail to update the AI summary. **Fixes shipped:** AI-on-content opt-in rule, mandatory abuse lens, "kill weak AI" step, a state-consistency check, and a ban on leaking skill internals into deliverables.
- **2026-10-27 · ai-file-transfer, round 2 (blind, 3-way).** **techne v2 (with taste library) 70/80** · techne v1 output 54 · fresh baseline 52. v2 was the only run where the abuse model shaped both concept and UI: AI may describe a transfer but never call it safe, a blocked file changes every dependent surface, and it was the only distinctive visual identity (serif = a person, sans = the product, mono = checkable facts, a dashed chip = AI). Its experiment sizing also checked out. Remaining weaknesses: unverified-sender state kept full trust styling, little AI value for recipients, warnings not ranked by severity, verification scope and cost unsized, design rationale leaking into product copy, some specified states not built. **Fixes shipped:** visual weight follows trust and severity, build-what-you-specify, ethics-is-a-constraint-not-an-exit, no rationale in product copy.
- **2026-10-27 · user review.** Compared side by side with the real category leader's homepage, techne v2's "Parcel" was clearly weaker on brand. It had no ownable world (display voice, colour world, brand object), only a well-made tool layer. Causes: the brief said "neutral, no brand assets", the taste model's restraint norm wasn't balanced by a signature requirement, and the judge scored taste only against the other runs. **Fixes shipped:** taste model §4b (brand signature, brand layer vs tool layer, logo-off test, stand-next-to-the-leader check), the brand step in `visual` mode, and the rubric split into 7a tool craft / 7b brand distinctiveness scored against the leader.
- **2026-10-27 · ai-file-transfer, round 3 (brand, benchmarked against the leader's real homepage screenshot).** **techne v3 74.5/90** · techne v2 output 67 (it answered the earlier neutral brief) · fresh baseline 66.5. techne v3's "Ferry" was the only brand the judge said could stand next to the leader: a signal-yellow field, condensed stencil type, a luggage-tag send tool and per-transfer signal flags. It passed the logo-off test, borrowed none of the leader's assets, and kept the disciplined AI and abuse patterns (off by default, file names only, the fix as the primary action on high-cost warnings). Brand distinctiveness went from 3 to 8. The judge rated it about 8/10, not parity. Weaknesses: the stencil hero fragmented at size, Send fell below the fold, there was no imagery or warmth below the fold, distinctive branding helps phishing kits, and process jargon leaked again. **Fixes shipped:** craft the signature hardest (stress-test at 390, 1440 and in dark mode), the primary action must be in the first viewport, carry the signature below the fold, anti-cloning cues, and evidence tags and process notes moved to an appendix.
- **2026-10-27 · scenarios round 1 (blind vs baseline, scored against hidden answer keys, /100).** tweak-cta **87** vs 82 · critique-signup **88** vs 85 · paywall-meditation **90** vs 79 · ds-audit 85 vs **90** (lost). techne found all 12 planted signup issues with no invented claims and ranked the ethics items first. Its paywall fixed transparency for everyone untested and used refund-adjusted metrics. **It lost the system audit:** an issue it saw in its inventory went unnamed, the type scale was cut too far, the DTCG tiers were unclear, Button had no size prop, and it built an unrequested dark theme. **Fixes shipped:** exhaustive inventory in `system` mode (name every inconsistency), a 5–6-step type scale, named DTCG tiers, complete component APIs, scope control, exact length in `tweak` mode, one mechanism per variant, chargebacks as a guardrail.
