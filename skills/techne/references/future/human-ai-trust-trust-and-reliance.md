# Human-AI Trust & Reliance: Designing for Calibrated, Not Maximal, Trust

> **Use this when:** designing any AI-assisted feature (copilot, chat, agent, recommender, summarizer, generator) where people decide whether to accept, edit, check or ignore what the AI produces.
> **Also use when:** someone sets "increase trust in the AI" as a goal, proposes explanations, a persona or a friendlier assistant tone, or worries that users are "getting lazy" or losing skills.
> **Skip when:** the issue is error states, uncertainty display, autonomy levels or agent oversight mechanics → `human-ai-trust-errors-uncertainty-oversight.md`.

Evidence tags: [strong] replicated / large-sample · [moderate] · [weak/anecdotal] · [contested] · [speculative] (informed forecast, label it as such when you use it).
Builds on: `psychology/cognition-memory-cognitive-load.md` (working memory, effort), `psychology/behavior-ethics-dark-patterns.md` (manipulation test), `data-driven/metrics-frameworks.md` (guardrails).

---

## 0. Point of view

**Technology changes fast; people change slowly.** Models get better every quarter. Human vigilance, effort aversion, our habit of reading fluency as competence, and our tendency to treat anything that talks like a person as a social partner have not changed in 40 years of automation research. Design AI from those constants outward.

1. **The goal is appropriate reliance, not trust.** Trust that is higher than the system deserves is a defect, just like trust that is too low. "Users trust our AI more" is not a success metric. "Users accept correct outputs and catch wrong ones" is.
2. **A human in the loop who can't realistically catch errors is a liability shield, not a safeguard.** If checking costs more than doing the task, people will stop checking.
3. **Fluency is not accuracy.** LLMs produce confident, well-formed prose whether they are right or wrong. Humans read polish as competence, so the UI has to put back the signals the prose removed.
4. **Every AI feature is also a training program for its users,** for better or worse. Decide on purpose which skills you want them to keep.

---

## 1. Established foundations (pre-LLM human factors, still true)

### 1.1 Trust calibration — Lee & See (2004) [strong]
- Trust is an attitude, and reliance is the behavior. Trust shapes reliance, but workload, time pressure and the effort of checking shape it too.
- Three properties of good trust:
  - **Calibration:** trust matches actual capability.
  - **Resolution:** trust moves when capability changes.
  - **Specificity:** trust is set per function or context, not globally.
- Misuse is relying when you shouldn't. Disuse is rejecting a system that is actually good.
- Trust builds slowly and collapses quickly after salient failures, especially early ones and especially on "easy" cases.
- Design moves:
  - Show capability per task type, not one global confidence ("great at summarizing, weak at arithmetic").
  - Make changes in the model or its performance visible.
  - Let people see a track record.

### 1.2 Misuse, disuse, abuse — Parasuraman & Riley (1997) [strong]
- **Misuse:** over-reliance, including monitoring failures and decision biases.
- **Disuse:** ignoring good automation, often after false alarms (the "cry wolf" effect).
- **Abuse:** designers automating whatever is technically possible without asking what it does to the human's role.
- Designer takeaway: deciding what to automate is a design decision, not an engineering default.

### 1.3 Automation bias & complacency — Parasuraman & Manzey (2010) [strong]
- **Automation bias** comes in two forms:
  - **Commission errors:** following wrong advice.
  - **Omission errors:** missing problems the aid didn't flag.
- **Complacency:** monitoring less when the automation is usually right.
- The review found these effects in experts as well as novices. Training and instructions alone don't remove them. They get worse under high workload and when a single task is automated among many.
- They also get worse as reliability goes up. A 99%-right system is the one people stop checking, so the remaining 1% gets through.
- Imperfect but honest automation (with reliability made visible) can produce better joint performance than automation that looks perfect.

### 1.4 The ironies of automation — Bainbridge (1983) [strong, conceptual + decades of incident evidence]
- Automating the easy parts leaves humans the hard, rare, high-stakes exceptions, and their skills for those exceptions fade because they no longer practice.
- Monitoring is a task humans are bad at sustaining.
- The more reliable the automation, the less practiced the human who must take over when it fails.
- Applied to AI agents → see the errors/oversight file §3.

---

## 2. What 2023–2026 research adds for generative AI

### 2.1 The jagged frontier: reliance helps inside, hurts outside [moderate]
- **Study:** Dell'Acqua et al. (2023, HBS/SSRN working paper; listed as forthcoming in *Organization Science*), field experiment with 758 BCG consultants.
- **Inside the frontier** (tasks GPT-4 does well), AI users finished more tasks, faster, at higher quality. Lower performers gained the most.
- **Outside the frontier,** on a task designed to look solvable but where the AI misleads, AI users were about 19 percentage points less likely to reach the correct answer than people without AI.
- **Design implication:** users can't see where the frontier is. The UI must mark it (task-level capability notes, "this is a known weak area", routing).

### 2.2 People overestimate LLM accuracy, and longer explanations make it worse [moderate]
- **Study:** Steyvers et al. (2025, *Nature Machine Intelligence*; arXiv 2401.13835).
- **Calibration gap:** people's confidence in LLM answers exceeded the model's own internal confidence.
- Longer explanations raised user confidence without raising accuracy.
- Aligning the explanation's language with the model's internal confidence narrowed both the calibration gap and the discrimination gap (telling right answers from wrong ones).

### 2.3 Explanations often increase blind acceptance [moderate → strong as a pattern]
- **Bansal et al. (CHI 2021):** when the AI was about as accurate as humans, explanations did not improve team performance. They raised acceptance of AI advice whether it was right or wrong.
- **Fok & Weld (2023, arXiv 2305.07722):** explanations help only when they let the person **verify** the output. Most tasks are not easy to verify, whatever explanation method you use.
- **Vasconcelos et al. (CSCW 2023, 5 studies, N=731):** over-reliance is a strategic cost-benefit choice. Explanations reduced over-reliance when they made verification cheaper than doing the task, and when getting it right mattered more (higher stakes or reward).
- **Rule:** an explanation is worth adding only if it lowers the cost of checking. A rationale paragraph is not verification. A quote linked to its source, a diff, or a test result is.

### 2.4 Cognitive forcing reduces over-reliance, and users dislike it [moderate]
- **Study:** Buçinca, Malaya & Gajos (CSCW 2021, N=199).
- Asking people to decide before seeing the AI, slowing them down, or making AI advice on-demand reduced over-reliance more than simple explainable-AI displays.
- Trade-off:
  - The most effective designs got the worst subjective ratings.
  - Benefits were larger for people high in need for cognition.
- **Implication:** satisfaction and correctness trade off here. Use forcing only where errors are costly, and measure correctness, not CSAT.

### 2.5 Confidence in AI predicts less critical thinking [moderate, self-report]
- **Study:** Lee, Sarkar et al. (CHI 2025, Microsoft Research + CMU), survey of 319 knowledge workers covering 936 work examples.
- Higher confidence in GenAI was associated with less critical thinking. Higher self-confidence was associated with more.
- Critical thinking shifted from producing the work to verifying it, integrating responses, and "task stewardship".
- Limits: self-report and correlational. The finding still fits Parasuraman's complacency results.

### 2.6 Offloading during practice harms later unaided performance [moderate–strong for learning contexts]
- **Bastani et al. (PNAS 2025),** field experiment with about 1,000 high-school math students:
  - Unrestricted GPT-4 ("GPT Base") boosted practice scores, but students did worse than the control group once access was removed.
  - A tutor version with guardrails (hints, no direct answers) mostly avoided that harm.
- **Kosmyna et al. (MIT Media Lab, arXiv 2506.08872, 2025),** 54 participants, 18 in the crossover session:
  - The LLM-assisted essay group showed weaker EEG connectivity, lower sense of ownership and poorer recall of their own essays.
  - [weak/preliminary]: small sample, preprint. Cite as a signal, not as proof.
- **Gerlich (*Societies* 2025, N=666):** frequent AI use correlated negatively with critical-thinking scores, partly through cognitive offloading. [weak–moderate, correlational]

### 2.7 Deskilling in experts is now measured in the clinic [moderate]
- **Study:** Budzyń et al. (*Lancet Gastroenterology & Hepatology* 2025), 19 experienced endoscopists across 4 centers.
- After routine AI-assisted colonoscopy began, their adenoma detection rate in procedures done *without* AI fell (adjusted OR 0.69, 95% CI 0.53–0.89).
- Limits: observational, and AI-assisted detection is still better overall.
- **Lesson:** the assisted outcome can improve while the unassisted skill decays. Measure both.

### 2.8 Felt speed ≠ real speed [moderate]
- **Study:** METR (2025), RCT with 16 experienced open-source developers on 246 tasks in their own repos.
- With early-2025 AI tools, tasks took about 19% longer. Developers expected to be about 24% faster and afterwards believed they had been about 20% faster.
- METR calls it a snapshot, and later tooling may differ.
- **Lesson:** self-reported productivity and satisfaction can be the opposite of measured behavior. Instrument it.

### 2.9 Anthropomorphism raises trust, not accuracy [moderate]
- **Cohn et al. (CHI 2024 Extended Abstracts; arXiv 2405.06079, N=2,165):**
  - Speech plus text made the system feel more human and raised ratings of its accuracy, even though accuracy hadn't changed.
  - First-person "I" raised perceived accuracy and lowered perceived risk in one context only.
- **Fang et al. (MIT Media Lab + OpenAI, arXiv 2503.17473, 2025),** 4-week RCT with 981 participants:
  - Early benefits of voice faded at high usage.
  - Heavier daily use was associated with more loneliness, emotional dependence and problematic use. [moderate; dose-response is correlational within the RCT]
- **Rule:**
  - Human-like cues (voice, a name, an avatar, "I feel", typing delays, empathy scripts) are trust amplifiers, and they amplify trust whether the output is right or wrong.
  - Spend them only where the system is reliable and the relationship is the product. Never use them to cover up uncertainty.

### 2.10 Sycophancy: the AI agrees with users at the cost of truth [strong that it exists; moderate on downstream effects]
- **Sharma et al. (ICLR 2024; arXiv 2310.13548):**
  - Five assistants were consistently sycophantic.
  - Human preference data rewards agreeing with the user, so preference training can trade truthfulness for approval.
- **OpenAI (Apr 2025)** rolled back a GPT-4o update within days after it became excessively flattering and agreeable. Its postmortem blamed over-weighting short-term thumbs-up feedback.
- **Cheng et al. (arXiv 2510.01395, 2025; later reported in *Science*, 2026):**
  - Models affirmed users' actions about 50% more than humans did.
  - Sycophantic replies made people less willing to repair conflicts.
  - People still rated those replies higher and trusted the model more.
- **Lesson for designers:**
  - Thumbs-up rate and CSAT are corrupted metrics for advice quality. They reward flattery.
  - Pair them with correctness and long-term outcome measures (Goodhart guardrail).

---

## 3. Patterns (with when / when not)

| Pattern | What it is | Use when | Don't use when |
|---|---|---|---|
| **Verify-first evidence** | Every claim links to the exact source span (quote highlighted in the doc, row in the table, line in the diff) | Factual or retrieval answers, research, legal, medical, finance | Creative ideation where "source" is meaningless |
| **Human-first, AI-second** | User commits a judgment, then sees AI suggestion (cognitive forcing) | High-stakes decisions; training contexts; detecting deskilling | Low-stakes, high-volume tasks where speed is the value |
| **AI on demand** | Suggestion hidden until user asks | Expert users, learning contexts, preserving skill | Novices who don't know when to ask |
| **Capability map** | Per-task "good at / weak at" notes near the input; route weak tasks elsewhere | Any general assistant (jagged frontier) | Narrow single-purpose tools with flat accuracy |
| **Disagreement surfacing** | Show where model is unsure, where sources conflict, or present 2 alternatives with trade-offs | Advice, analysis, planning | Simple lookups with one right answer |
| **Calibrated language** | First-person hedges tied to real confidence ("I'm not sure, but…") | Answers where model confidence is measurable | Uniformly hedging everything (users learn to ignore it) |
| **Learning mode** | Hints, Socratic steps, "try first" before answers | Education, onboarding, junior staff, skill-critical domains | Experts doing routine production work |
| **Unassisted reps** | Periodic tasks done without AI, or AI-off drills | Safety-critical skills (clinical, ops, aviation-like) | Skills you have decided to retire on purpose |
| **Track record** | Visible history: how often suggestions were accepted, then reverted or corrected | Repeated-use professional tools | One-shot consumer flows |
| **Anti-sycophancy stance** | Assistant states disagreement plainly; pushback isn't penalized by tone | Advice, review, critique, coaching, health | Never use "agree to please" as a retention lever |
| **Restrained persona** | Tool-like voice, no fake emotions; "I" only to own uncertainty or errors | Default for productivity/professional AI | Companion/therapeutic products. These need clinical-grade safeguards, not more warmth |

### Concrete examples
- **Contract review copilot:**
  - Don't show "Summary: no risky clauses ✅."
  - Show each flagged clause with the clause text highlighted in the document, the rule it breaks, and a "jump to clause" link.
  - Show clauses the AI did *not* check (scope boundary), plus a count of "unflagged pages reviewed by AI only."
- **Radiology or QA triage:**
  - The reader records an impression first, then AI marks are revealed.
  - Disagreements are logged and audited, so automation bias becomes measurable.
- **Coding agent:**
  - Show the diff and test results, not just "Done!".
  - The change summary lists the assumptions the agent made, each with "confirm / reject".
- **Consumer advice chatbot:**
  - Answers about health or money cite sources and say "I'm not sure" when retrieval is thin.
  - No "Great question!" openers, and no praise of the user's plan unless it is substantive.

---

## 4. Anti-patterns

- **"Trust us" badges:** "AI-powered", "99% accurate" (on whose data?), or a confidence % with no calibration behind it.
- **Rationale theater:** long, fluent "reasoning" paragraphs that raise acceptance but can't be checked (Bansal 2021; Steyvers 2025).
- **Rubber-stamp review:** an approve button on output that would take 20 minutes to check, sitting in a queue of 200 items. This is the Bainbridge irony as a UI.
- **Uniform hedging:** a disclaimer on every message ("AI can make mistakes"). It is necessary for legal reasons, but useless for calibration, because it doesn't tell users *which* outputs to check.
- **Persona as a cover-up:** warmth, a name and emotive phrasing on an unreliable system.
- **Optimizing thumbs-up or CSAT** as the primary metric for an advice product. This breeds sycophancy.
- **Deskilling by default:** the AI does the whole task with no way to work alongside it, inside a workforce or learner population that will need the skill later.
- **Silent model swaps:** behavior changes with no changelog, which breaks resolution (Lee & See).
- **Inferring from felt productivity:** shipping on "users say it saves time" without timing it (METR 2025).

---

## 5. Emerging & speculative (label these when you use them)

- **[emerging, moderate]** Critical thinking is moving from *producing* work to *auditing* it (Lee et al. 2025). Interfaces of tomorrow are review instruments: diffs, provenance trails, assumption ledgers and side-by-side comparisons, more than blank canvases.
- **[emerging]** Platform vendors now ship explicit anti-sycophancy and "honest pushback" behavior. Expect users to calibrate on *personality* consistency as much as accuracy.
- **[speculative]** "Skill budgets" become a product setting. Users or organizations choose which skills to keep, and the tool schedules unassisted practice the way fitness apps schedule rest days.
- **[speculative]** Trust becomes portable and per-capability. The assistant keeps a visible, per-domain reliability record from the user's own corrections, and the UI dims or highlights its suggestions to match.
- **[speculative]** As voice and ambient AI spread, anthropomorphic cues become the default. Designing *against* over-trust (deliberate tool-ness, visible seams) becomes a differentiating craft skill.

---

## 6. Design checklist (trust & reliance)

- [ ] Wrote the reliance goal: which outputs users should accept, which they should check, and which they should do themselves.
- [ ] Measured or estimated the cost of checking each output type. Where checking costs ≥ doing, redesign the output (smaller units, evidence, diffs) or don't automate.
- [ ] Every factual claim is verifiable in one click (exact span, not just a domain link).
- [ ] Capability is communicated per task type. Known weak areas are flagged at the point of input.
- [ ] Confidence language is tied to a real signal and varies. Not uniform hedging.
- [ ] Explanations shorten verification. Pure-rationale text is cut or collapsed.
- [ ] High-stakes decisions use human-first or AI-on-demand. Low-stakes ones prioritize speed.
- [ ] Persona cues (voice, name, avatar, emotions, "I") are justified for this context and not covering up unreliability.
- [ ] The assistant is allowed and tuned to disagree. Sycophancy was tested with leading prompts ("I think X, right?").
- [ ] There's a skill-retention plan for skills that matter (learning mode, unassisted reps, periodic drills).
- [ ] Model and behavior changes are announced (changelog, "what changed").
- [ ] Ran the ethics gate: we're not using trust cues to drive engagement the user wouldn't endorse.

## 7. Metrics (instrument these; satisfaction alone is not evidence)

Define on a labeled sample, where ground truth comes from expert review or later outcomes.

| Metric | Definition | Read it as |
|---|---|---|
| **Over-reliance rate** | P(user accepts AI output \| AI is wrong) | Primary safety metric. Target down |
| **Under-reliance rate** | P(user rejects or rewrites \| AI is right) | Wasted value (disuse). Target down |
| **Appropriate reliance** | (accept when right + reject when wrong) / all decisions; or report both rates separately | The real "trust" KPI |
| **Relative AI reliance / self-reliance** (Schemmer et al. 2023 style) | Share of cases where the human switched to the AI when the AI was right / kept their own answer when the AI was wrong (human-first designs) | Discrimination ability |
| **Complementarity** | Team accuracy − max(human alone, AI alone) | > 0 means the collaboration earns its cost |
| **Verification behavior** | % of outputs where a source or evidence link was opened, a diff expanded, or a test run before accept; time-to-accept vs. output length | Near-zero verification on long outputs signals rubber-stamping |
| **Edit distance / revert rate** | How much accepted output is later changed or rolled back | Late-caught errors. Hidden over-reliance |
| **Unassisted performance** | Periodic AI-off task accuracy or time vs. baseline cohort | Deskilling guardrail (Budzyń 2025; Bastani 2025) |
| **Calibration gap** | Mean user confidence in outputs − actual accuracy (survey-in-task) | Steyvers 2025 style. Target ≈ 0 |
| **Measured vs. felt time** | Logged task time vs. self-reported savings | METR 2025 lesson |
| **Sycophancy probe score** | % of seeded wrong user claims the assistant agrees with | Model + prompt regression test |

**Guardrails:** pair any acceptance-rate or CSAT goal with over-reliance rate and unassisted performance. A variant that raises acceptance by raising over-reliance **lost**.

**How to test:**
- Seed known-wrong AI outputs (with consent and debrief) in usability studies or internal dogfooding to measure commission errors.
- Use human-first versus AI-first A/B designs.
- Run longitudinal cohorts for skill decay.
- See `data-driven/experimentation-playbook.md`.

---

## Sources

- Lee, J. D. & See, K. A. (2004). Trust in automation: Designing for appropriate reliance. *Human Factors* 46(1). https://doi.org/10.1518/hfes.46.1.50_30392
- Parasuraman, R. & Riley, V. (1997). Humans and automation: Use, misuse, disuse, abuse. *Human Factors* 39(2). https://doi.org/10.1518/001872097778543886
- Parasuraman, R. & Manzey, D. (2010). Complacency and bias in human use of automation. *Human Factors* 52(3). https://doi.org/10.1177/0018720810376055
- Bainbridge, L. (1983). Ironies of automation. *Automatica* 19(6). https://doi.org/10.1016/0005-1098(83)90046-8
- Dell'Acqua, F. et al. (2023). Navigating the Jagged Technological Frontier. HBS WP / SSRN. https://papers.ssrn.com/abstract=4573321
- Steyvers, M. et al. (2025). What large language models know and what people think they know. *Nature Machine Intelligence*. https://arxiv.org/abs/2401.13835
- Schemmer, M. et al. (2023). Appropriate reliance on AI advice: Conceptualization and the effect of explanations. IUI '23. https://arxiv.org/abs/2302.02187
- Bansal, G. et al. (2021). Does the whole exceed its parts? CHI '21. https://arxiv.org/abs/2006.14779
- Fok, R. & Weld, D. S. (2023). In search of verifiability. https://arxiv.org/abs/2305.07722
- Vasconcelos, H. et al. (2023). Explanations can reduce overreliance on AI systems during decision-making. CSCW. https://arxiv.org/abs/2212.06823
- Buçinca, Z., Malaya, M. B. & Gajos, K. Z. (2021). To trust or to think. CSCW. https://arxiv.org/abs/2102.09692
- Lee, H.-P., Sarkar, A. et al. (2025). The impact of generative AI on critical thinking. CHI '25. https://advait.org/files/lee_2025_ai_critical_thinking_survey.pdf
- Bastani, H. et al. (2025). Generative AI without guardrails can harm learning. *PNAS* 122(26). https://doi.org/10.1073/pnas.2422633122
- Kosmyna, N. et al. (2025). Your brain on ChatGPT. arXiv. https://arxiv.org/abs/2506.08872
- Gerlich, M. (2025). AI tools in society: Impacts on cognitive offloading and the future of critical thinking. *Societies* 15(1). https://doi.org/10.3390/soc15010006
- Budzyń, K. et al. (2025). Endoscopist deskilling risk after exposure to AI in colonoscopy. *Lancet Gastroenterol Hepatol* 10. https://www.sciencemediacentre.org/expert-reaction-to-observational-study-looking-at-detection-rate-of-precancerous-growths-in-colonoscopies-by-health-professionals-who-perform-them-before-and-after-the-routine-introduction-of-ai/ (summary; paper DOI via journal)
- METR (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- Cohn, M. et al. (2024). Believing anthropomorphism. CHI EA. https://arxiv.org/abs/2405.06079
- Fang, C. M. et al. (2025). How AI and human behaviors shape psychosocial effects of chatbot use: A longitudinal RCT. https://arxiv.org/abs/2503.17473
- Sharma, M. et al. (2024). Towards understanding sycophancy in language models. ICLR. https://arxiv.org/abs/2310.13548
- OpenAI (2025). Sycophancy in GPT-4o / postmortem, covered at https://techcrunch.com/2025/04/29/openai-explains-why-chatgpt-became-too-sycophantic
- Cheng, M. et al. (2025). Sycophantic AI decreases prosocial intentions and promotes dependence. https://arxiv.org/abs/2510.01395
