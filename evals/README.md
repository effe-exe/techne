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
7. Visual & interaction craft (screenshots)
8. Honesty about assumptions

## Scenarios
Keep briefs about public product categories and use public information only. Never use employer-confidential material. Outputs live outside the repo unless they're generic.

- `ai-file-transfer`: "Design the AI-enhanced version of a mature large-file-transfer service (tens of millions of users)."

## Log
- **2026-10-26 · ai-file-transfer.** techne 62, baseline 61 (narrow win). techne was stronger on rollout rigour (guardrail-driven sizing, a 3-arm test of AI against deterministic grouping, a 90-day holdback, a seeded-error over-reliance test) and on honesty. It was weaker on consent defaults (AI on by default, including the recipient-facing summary), had no anti-phishing design, leaked internal jargon, kept a low-value AI feature, and let safety states fail to update the AI summary. **Fixes shipped:** AI-on-content opt-in rule, mandatory abuse lens, "kill weak AI" step, a state-consistency check, and a ban on leaking skill internals into deliverables.
