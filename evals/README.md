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
Keep briefs about public product categories and use public information only. Never use employer-confidential material. Outputs live outside the repo unless they're generic.

- `ai-file-transfer`: "Design the AI-enhanced version of a mature large-file-transfer service (tens of millions of users)."

## Log
- **2026-10-26 · ai-file-transfer.** techne 62, baseline 61 (narrow win). techne was stronger on rollout rigour (guardrail-driven sizing, a 3-arm test of AI against deterministic grouping, a 90-day holdback, a seeded-error over-reliance test) and on honesty. It was weaker on consent defaults (AI on by default, including the recipient-facing summary), had no anti-phishing design, leaked internal jargon, kept a low-value AI feature, and let safety states fail to update the AI summary. **Fixes shipped:** AI-on-content opt-in rule, mandatory abuse lens, "kill weak AI" step, a state-consistency check, and a ban on leaking skill internals into deliverables.
- **2026-10-27 · ai-file-transfer, round 2 (blind, 3-way).** **techne v2 (with taste library) 70/80** · techne v1 output 54 · fresh baseline 52. v2 was the only run where the abuse model shaped both concept and UI: AI may describe a transfer but never call it safe, a blocked file changes every dependent surface, and it was the only distinctive visual identity (serif = a person, sans = the product, mono = checkable facts, a dashed chip = AI). Its experiment sizing also checked out. Remaining weaknesses: unverified-sender state kept full trust styling, little AI value for recipients, warnings not ranked by severity, verification scope and cost unsized, design rationale leaking into product copy, some specified states not built. **Fixes shipped:** visual weight follows trust and severity, build-what-you-specify, ethics-is-a-constraint-not-an-exit, no rationale in product copy.
- **2026-10-27 · user review.** Compared side by side with the real category leader's homepage, techne v2's "Parcel" was clearly weaker on brand. It had no ownable world (display voice, colour world, brand object), only a well-made tool layer. Causes: the brief said "neutral, no brand assets", the taste model's restraint norm wasn't balanced by a signature requirement, and the judge scored taste only against the other runs. **Fixes shipped:** taste model §4b (brand signature, brand layer vs tool layer, logo-off test, stand-next-to-the-leader check), the brand step in `visual` mode, and the rubric split into 7a tool craft / 7b brand distinctiveness scored against the leader.
