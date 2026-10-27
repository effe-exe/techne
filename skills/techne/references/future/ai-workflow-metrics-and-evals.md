# Measuring AI Features: Metrics, Evals, Rubrics and Experiments for Non-Deterministic Products

> **Use this when:** defining success metrics for an AI feature or agent, writing an eval set or a quality rubric, deciding whether an LLM-as-judge can be trusted, or designing an A/B test for a feature whose output changes run to run.
> **Also use when:** someone reports "acceptance rate is up", "users love it (CSAT 4.6)", "the new prompt is better" from five examples, or wants to swap the model mid-experiment.
> **Skip when:** the question is trust calibration or over-reliance metrics specifically → `human-ai-trust-trust-and-reliance.md` §7; agent-delegation metrics → `ai-patterns-agent-delegation-ux.md` §7; generic A/B mechanics → `data-driven/experimentation-playbook.md`.

---

## 0. Point of view

1. **An AI feature is two products: the experience and the output.** Measure both. A beautiful interface on wrong answers fails, and so does a correct model behind an interface where nobody can check the answer.
2. **Evals are the design spec for non-deterministic behavior.** For deterministic UI you draw the states. For AI you write down what "good" means, as examples and a rubric, before you build. Designers are well placed to write them because they know the user's job.
3. **Proxy metrics lie more often for AI.** Acceptance, thumbs-up and CSAT measure how output *feels*. People accept wrong output and feel faster when they aren't (METR 2025) [moderate]. Every proxy needs a ground-truth check and a guardrail.
4. **Variance is a feature you must measure.** The same input gives different outputs. Users experience the *distribution*, including the worst case, so report reliability (does it work every time?), not just the average.
5. **Cost and latency are UX metrics.** Cost per task decides whether the feature survives, and latency decides whether people wait for it (feedback < 100 ms, flow < 1 s, progress after ~2–10 s; `psychology/`).

---

## 1. The AI metric stack (pick one per layer)

| Layer | Question | Primary metric | Guardrail / companion |
|---|---|---|---|
| **Outcome** (the job) | Did the user get the job done? | Task success rate on real or representative tasks, verified (not self-reported) | Downstream error/defect rate; rework within 7 days |
| **Quality** (the output) | Is the output good by our definition? | Rubric pass rate on an eval set (human-graded or validated judge) | Severe-failure rate (harmful, false, policy-breaking) per 1,000 |
| **Behavior** (the interaction) | How do people use what it produced? | Acceptance-with-retention: accepted *and* still present after N minutes/days | Edit distance on accepted output; regenerate/undo rate; over-reliance (seeded errors) |
| **Efficiency** | Is it actually faster? | Logged time-to-value: from intent to accepted, kept outcome | Felt-vs-logged time gap; human review minutes |
| **Adoption & retention** | Does it earn a place? | Repeat use at week 4 among users who tried it; D30 retention vs holdout | Novelty decay curve; feature disable rate |
| **Economics** | Can we afford success? | Cost per *successful* task (tokens + tools + human review) | p95 latency; cost at p95 heavy user |
| **Safety & trust** | Is reliance calibrated, is it honest? | Over-reliance rate; citation precision | Complaints about fabrication; sycophancy probe score |

Tie the outcome layer to your OEC (Overall Evaluation Criterion) and HEART metrics (`data-driven/metrics-frameworks.md`). Ship-blocking metrics are the outcome primary plus the severe-failure guardrail; the rest are for diagnosis.

### Definitions that matter

- **Task success**: a binary, pre-defined end state ("invoice sent with correct total", "PR merged without revert in 7 days"). For agents, compare the final state with the goal state the way τ-bench does: check the end database state, not the transcript (Yao et al. 2024).
- **Acceptance rate**: accepted ÷ shown. In Copilot's 2,047-user study it was the strongest predictor of *perceived* productivity (Ziegler et al. 2022) [moderate]. That makes it a satisfaction proxy, not proof of quality. Always pair it with **persistence** (still in the document/code after N min/days) and **edit distance**.
- **Edit rate / edit distance**: the share of accepted outputs later changed, and by how much (normalized character or token diff). High acceptance with heavy edits means "useful start". High acceptance with zero edits on long outputs can mean rubber-stamping, so check verification behavior.
- **Time-to-value (TTV)**: from first intent (prompt, click) to an accepted and *kept* outcome, including regenerations, reading time and fixes. Measure it against a non-AI baseline on the same tasks.
- **Cost per successful task** = (model + tool + infra cost + human review minutes × loaded rate) ÷ successful tasks. A cheaper model that fails more can cost more per success.
- **Reliability (pass^k)**: the probability that *all* k runs of the same task succeed. τ-bench found GPT-4o-class agents under 50% task success, with pass^8 under 25% in retail (Yao et al. 2024) [moderate]. Users who repeat a task feel pass^k, not pass@1.

---

## 2. Evals: the designer's version

An eval is a set of inputs plus a way to judge outputs, run on every prompt, model or UI change. Without one, "the new prompt is better" is an anecdote.

### 2.1 Build the eval set (start with 30–100 cases, grow from production)
1. **Start from real traces** (logs, support tickets, research sessions), not imagined prompts. Anonymize them.
2. **Stratify:** typical cases (~60%), hard and edge cases (~25%: long inputs, ambiguity, missing data, non-English, accessibility needs, low-literacy phrasing), and adversarial/safety cases (~15%: prompt injection, requests for harmful output, attempts to get the system to manipulate the user).
3. **Include the human-constant cases:** a user who is rushed, one who is confused, one who is distressed, one who is a novice and one who is an expert. Design for the tails, which are what synthetic data compresses (`ai-workflow-designer-workflow.md` §3).
4. **Freeze a holdout** that prompt authors never see, to avoid overfitting.
5. **Refresh monthly** from new production failures. Every bug becomes a test case.

### 2.2 Do error analysis before writing metrics
Practitioner consensus (Husain 2024–2025; Shankar et al. 2024) [moderate]: **look at the data first.**
1. Read 50–100 real outputs. For each one write a short note on what's wrong (open coding).
2. Cluster the notes into failure modes ("ignores user's constraint", "invents a price", "too long for mobile", "wrong tone in error").
3. Count them. Fix the most frequent and most severe first.
4. Only then write evaluators for the failure modes that matter.

The reason: **criteria drift.** Shankar et al. (UIST 2024) found that people can't fully specify criteria until they've graded outputs, and grading changes the criteria. Write your rubric, grade, revise, and expect it to happen.

### 2.3 Write rubrics designers can own
Rules:
- **Binary pass/fail per criterion, with a written critique.** Avoid 1–5 scales: graders disagree on what a "3" means. Husain recommends a domain expert's pass/fail plus a critique ("critique shadowing") [moderate: practitioner].
- **One criterion = one observable property.** Not "high quality", but "states the billed amount and term".
- **Tie each criterion to a human constant or a product rule**, so it is defensible.
- **Include at least one "would a careful user be misled?" criterion.** This is the ethics gate as an eval.

**Rubric template (copy into feature briefs):**

| # | Criterion (observable) | Why (constant / rule) | Pass example | Fail example | Severity |
|---|---|---|---|---|---|
| 1 | Answers the user's actual question in the first sentence | Fixation budget; F-pattern scanning | "Yes, you can cancel anytime from Settings → Plan." | Two paragraphs of context first | Major |
| 2 | Every factual claim has a working source or is marked uncertain | Calibrated trust | Claim + link that supports it | Confident claim, no source | Critical |
| 3 | ≤ ~4 new concepts or steps before a pause or a structure | Working memory ~4 chunks | Numbered 3 steps | 9-step wall of text | Major |
| 4 | Doesn't pressure, flatter or create false urgency | Ethics gate | Neutral options with trade-offs | "Only today!" (false) | Critical |
| 5 | Respects stated constraints (budget, dates, tone) | User control | Within budget | Suggests over-budget option first | Major |
| 6 | Recoverable: offers edit/undo/alternative when unsure | Need for control | "Here's a draft. Edit or regenerate." | Executes without preview | Critical (agents) |
| 7 | Length fits the surface (mobile ≤ ~60 words unless asked) | Reading cost | Short + "more" | Full essay in a toast | Minor |

Aggregate as: **critical-pass rate** (all critical criteria pass), plus a per-criterion pass rate for diagnosis. Don't average everything into one score.

### 2.4 LLM-as-judge: use it, but validate it
- Strong judges agreed with human preferences ~80% of the time on MT-Bench/Chatbot Arena, about the same as humans agree with each other, but showed **position, verbosity and self-enhancement biases** (Zheng et al., NeurIPS 2023) [strong for those setups].
- Protocol:
  1. A human expert grades 100+ outputs pass/fail with critiques.
  2. Write the judge prompt for **one criterion at a time**, with the critiques as few-shot examples.
  3. Measure agreement with the human labels on a held-out set and report true-positive and true-negative rates separately (a judge that always says "pass" scores well on raw agreement).
  4. Ship the judge only when agreement is acceptable for that criterion's severity. Keep humans grading critical criteria.
  5. Re-validate on every model change. Judges drift too.
- Mitigate the biases: randomize or swap the order in pairwise comparisons, control for length, and never let a model judge its own outputs without validation.

### 2.5 Human evals in research sessions
- **Seeded-error tasks:** insert known-wrong outputs (with consent and debrief) and measure the catch rate. This is over-reliance in the wild (`human-ai-trust-trust-and-reliance.md`).
- **Think-aloud on verification:** what do people check, what do they skip, where do they hesitate?
- **AI vs non-AI baseline:** the same tasks, counterbalanced, with logged time and success. Ask perceived time too and report the gap.
- **Second- and fifth-use tests:** AI features often wow on first use and annoy by the fifth (novelty decay).

---

## 3. A/B testing non-deterministic features

Standard experimentation still applies (`data-driven/experimentation-playbook.md`): pre-register, one primary metric, guardrails, SRM checks. Add the following.

**Why it's harder:**
- **"Deterministic" settings aren't.** Five LLMs at temperature 0 showed accuracy varying up to ~15% across identical runs (Atil et al. 2024, arXiv 2408.04667) [moderate]. Thinking Machines (2025) traced much of this to batch-size-dependent inference kernels: 1,000 identical temperature-0 runs produced 80 distinct completions until batch-invariant kernels were used [moderate: vendor research, reproduced code].
- **The treatment can change under you:** provider model updates, prompt edits, retrieval index changes.
- **Outcomes have extra variance** (within-user variance across runs), so the power you need is higher than for a button-color test.

**Rules:**
1. **Pin everything in the treatment:** model version/snapshot, system prompt hash, tools, retrieval index version, temperature. Log them on every event. A change mid-test means a new experiment.
2. **Randomize by user (or account)**, not by request, so each person gets a consistent experience. For multi-turn features, at least keep a conversation in one arm.
3. **Run the offline eval first.** An A/B test is expensive, so only variants that pass the eval gate go online. The eval says *whether it is good*; the A/B test says *whether it changes behavior*.
4. **Choose outcome metrics over proxies:** task success, retention and kept output beat thumbs-up. Use acceptance only as a secondary.
5. **Size for more variance.** Estimate variance from a pilot or an A/A test on the AI feature itself, and use `scripts/sample_size.py` with that variance. Don't reuse the variance from non-AI metrics.
6. **Account for novelty:** AI features often spike and then decay. Run ≥ 2 weekly cycles, plot daily effects, and cohort by exposure count. Keep a long-term holdback for big launches.
7. **Cost and latency are guardrails in every AI test.** A variant that wins on success but doubles cost per success or p95 latency needs an explicit trade-off decision.
8. **Monitor severe failures per 1,000 sessions** with a kill switch. Rare harms don't show up in averages.
9. **Interleaving and side-by-side preference** (show both outputs, ask which helps) are efficient for ranking-type outputs; validate them against real outcomes.
10. **Read segments as hypotheses** (novices vs experts benefit differently: Brynjolfsson et al. 2025; Dell'Acqua et al. 2023).

**When not to A/B test:** safety fixes, accuracy fixes for known-wrong outputs, accessibility. Ship them, monitor, and add them to the eval set.

---

## 4. Instrumentation spec (hand this to engineering)

Log per AI interaction:
- `ai_request` (feature, model version, prompt hash, tools, input size, user segment, experiment arm)
- `ai_response` (latency to first token / complete, output size, cost, safety flags, cited sources)
- `ai_shown`, `ai_accepted`, `ai_edited` (diff size), `ai_regenerated`, `ai_undone`, `ai_rejected` (with an optional reason picker: wrong, unsafe, too long, off-tone, other)
- `ai_source_opened` / `ai_diff_expanded` (verification behavior)
- `ai_outcome` (task success event, defined per feature) and `ai_output_persisted_Nd`
- An opt-in feedback text sample for error analysis, privacy-reviewed

Dashboard: success rate · critical-pass rate (sampled judged traffic) · acceptance-with-persistence · edit distance · TTV p50/p90 · cost per success · p95 latency · severe failures/1k · week-4 repeat use. Segment by model version.

---

## 5. Anti-patterns

- **Vibe evals:** "I tried five prompts and it seemed better."
- **Acceptance as the north star.** It rewards confident, agreeable output, which means sycophancy.
- **CSAT/thumbs as quality.** People rate fluent wrong answers highly, and few people rate at all.
- **One averaged "quality score" from 1–5 scales.** It hides critical failures.
- **Unvalidated LLM judge** grading its own model's outputs.
- **Model swapped mid-test** or unlogged prompt edits.
- **Eval set of happy paths only.** No edge cases, no adversarial cases, no distressed or novice users.
- **Measuring only first use.** No novelty-decay view, no fifth-use test.
- **Ignoring cost** until finance notices.
- **Synthetic users as the eval's ground truth.** Synthetic data can *generate* test inputs; humans or real outcomes must *grade* them.

---

## 6. Checklist

- [ ] Job-level task success defined as a verifiable end state.
- [ ] Eval set: ≥ 30–100 real-derived cases, stratified (typical/edge/adversarial), frozen holdout, monthly refresh.
- [ ] Error analysis done on real outputs before evaluators were written.
- [ ] Rubric: binary criteria, observable, each tied to a human constant or rule, with a "misleading?" criterion.
- [ ] LLM judges validated per criterion against human labels (TPR/TNR reported); re-validated on model change.
- [ ] Reliability (pass^k or repeat-run consistency) reported for important tasks.
- [ ] A/B: model/prompt/tool versions pinned and logged; user-level randomization; variance from an A/A or pilot; novelty cohorts; cost, latency and severe-failure guardrails; kill switch.
- [ ] Acceptance paired with persistence and edit distance; felt vs logged time both measured.
- [ ] Cost per successful task tracked.

---

## Sources

- Zheng, L. et al. (2023). *Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena.* NeurIPS 2023 Datasets & Benchmarks. https://arxiv.org/abs/2306.05685 [strong]
- Shankar, S., Zamfirescu-Pereira, J. D., Hartmann, B., Parameswaran, A., Arawjo, I. (2024). *Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences.* UIST 2024. https://arxiv.org/abs/2404.12272 [moderate]
- Husain, H. (2024). *Your AI Product Needs Evals*; *Creating a LLM-as-a-Judge That Drives Business Results*; *LLM Evals FAQ* (2025). https://hamel.dev/blog/posts/evals/ , https://hamel.dev/blog/posts/llm-judge/ , https://hamel.dev/blog/posts/evals-faq/ [moderate: practitioner]
- Yao, S., Shinn, N., Razavi, P., Narasimhan, K. (2024). *τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains.* https://arxiv.org/abs/2406.12045 [moderate]
- Ziegler, A. et al. (2022). *Productivity Assessment of Neural Code Completion.* MAPS '22. https://arxiv.org/abs/2205.06537 [moderate]
- Atil, B. et al. (2024). *Non-Determinism of "Deterministic" LLM Settings.* https://arxiv.org/abs/2408.04667 [moderate]
- He, H. / Thinking Machines Lab (2025). *Defeating Nondeterminism in LLM Inference.* https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/ [moderate]
- METR (2025). *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.* https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ [moderate]
- Brynjolfsson, E., Li, D., Raymond, L. (2025). *Generative AI at Work.* QJE. https://www.nber.org/papers/w31161 [strong]
- Dell'Acqua, F. et al. (2023). *Navigating the Jagged Technological Frontier.* HBS WP 24-013. [strong]
- Kohavi, R., Tang, D., Xu, Y. (2020). *Trustworthy Online Controlled Experiments.* Cambridge UP (novelty effects, SRM, OEC). [strong]
