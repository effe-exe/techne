# Mode: from-scratch — from one prompt to a branded, tested product

Use for: "design X from scratch", a new product or a reinvention of a category, when the user wants the whole thing — brand, product, prototype and how to ship it. This is a chain of modes run in order; skip steps that don't apply and say so.

## Pipeline
1. **Frame** (→ `modes/redesign.md` phase 1): the job, users, evidence (public sources you actually read), success metric + guardrails, riskiest assumption. If the user gave a leader or references, collect them now. Bot-blocked sites → ask for screenshots.
2. **Abuse & ethics first** (SKILL.md §3): list how the product can be misused, before designing the happy path. If it involves AI (→ `modes/ai-feature.md`): autonomy level, opt-in for AI on content, and a kill-weak-AI check against deterministic alternatives.
3. **Concepts:** 3 far-apart directions (one safe, one bold, one strange), each with a one-line bet. Recommend one and graft the best parts of the others.
4. **Brand** (→ `modes/brand.md`): idea, name, 1–3 signature assets, loud/quiet map, tokens.
5. **Flows** (→ `modes/flow.md`): mermaid flows, including failure, blocked, expired, first-time and abuse states.
6. **Screens & prototype** (→ `modes/visual.md` + `modes/prototype.md`): the home page with the core tool inside it, plus the 2–3 key screens with every state reachable. Build it, run it, and screenshot it at 390/1440 in light and dark.
7. **Self-check, then fix:**
   - critique your own output (→ `modes/critique.md`), or better, a fresh-context reviewer
   - logo-off test and the stand-next-to-the-leader check
   - state consistency: a blocked item changes every surface
   - visual weight follows trust and severity
   - build what you specify
8. **Ship plan** (→ `modes/experiment.md`): validation steps, experiments with real sizing (`scripts/sample_size.py`), staged rollout and holdback, decision rules.
9. **Handover:** a short README for the folder, then list the decisions, assumptions and what is unverified. Keep process vocabulary in an appendix.

## Deliverables (one folder)
`brief.md` · `brand.md` · `concepts.md` · `flows.md` · `test-plan.md` · `decisions.md` · `prototype/` (builds, with screenshots)
