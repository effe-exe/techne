# Mode: ai-feature — design AI-powered features and agents (today)

Use for: copilots, assistants, chat, generative features (text/image/code), agents that act on the user's behalf, recommendations, summarization, AI search, "add AI to X".

Load: `references/future/ai-patterns-interaction-pattern-library.md` (always). Add `ai-patterns-agent-delegation-ux.md` for agents that act, `human-ai-trust-errors-uncertainty-oversight.md` for failure states, `ai-workflow-metrics-and-evals.md` for measurement, and `ai-ethics-gate.md` (always, before delivering). Cognition limits: `references/psychology/cognition-cheatsheet.md`.

## Steps
1. **Is AI the right tool?** Name the job and the failure cost. If a deterministic UI solves it in fewer steps, ship that. Chat is an interface choice, not a default: prefer embedding AI where the work happens (inline suggestions, suggested actions, structured outputs) over a blank prompt box.
2. **Pick the autonomy level** honestly: suggest → draft for approval → act with confirmation → act and report → fully autonomous. Raise autonomy only where errors are cheap, visible and reversible.
3. **Design the loop:**
   - **Intent capture:** examples, templates, suggested prompts, structured inputs.
   - **Plan preview:** for multi-step agents, show the plan before acting.
   - **Progress:** streaming, steps, time estimates. The user can interrupt at any point.
   - **Output:** editable, with diffs, citations/provenance and confidence when it is meaningful.
   - **Control:** accept/reject/regenerate, undo/rollback, permission scopes.
   - **Memory:** visible, editable, deletable.
4. **Design failure first:** wrong answers, refusals, partial results, timeouts, cost limits, offline. Make errors cheap to detect and fix. Avoid unearned confidence (no fake precision, and an honest "I'm not sure").
5. **Calibrate trust:** disclose that it's AI, set expectations in onboarding (what it can and can't do), and add friction where verification matters. Watch for over-reliance and deskilling in high-stakes tasks.
6. **Run the AI ethics gate** (`references/future/ai-ethics-gate.md`): no sycophancy, no manipulative anthropomorphism, no engagement-maximizing loops, clear data/training use, EU AI Act transparency, labeling of AI-generated content.
7. **Measure it:** task success, acceptance/edit rate, time-to-value, retention among users of the feature, cost per task, and human-rated quality evals with a rubric. For A/B tests of non-deterministic features, fix the model version, use larger samples and run per-task evals (→ `modes/experiment.md`).

8. **Kill weak AI:** for every AI feature, name the deterministic alternative (rules, grouping, templates, a plain link). Keep the AI only if it plausibly beats that alternative, and test it as a separate arm (plain / deterministic / AI). Features that mostly answer "I can't see that, ask the sender" should be cut.
9. **Abuse & consent check:** apply the abuse lens and the AI-on-content defaults from the SKILL.md ethics gate. Ask who sees the AI output, whether they consented, and what an attacker would do with it.

## Output
Job & AI-fit verdict → autonomy level with rationale → interaction loop spec (states including failures) → trust & ethics checks → metrics + eval rubric → prototype (→ `modes/prototype.md`).
