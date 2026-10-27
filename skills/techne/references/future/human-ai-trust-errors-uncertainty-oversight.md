# AI Errors, Uncertainty & Human Oversight: Designing for a System That Will Be Wrong

> **Use this when:** designing how an AI feature or agent shows confidence, fails, hallucinates, asks permission, acts on the user's behalf, or hands control back; or choosing how much autonomy to give it.
> **Also use when:** writing the states matrix for an AI surface, designing approval/review queues, agent run logs, undo for AI actions, or "human in the loop" requirements.
> **Skip when:** the question is whether users trust or over-rely in general → `human-ai-trust-trust-and-reliance.md` (read it first for the metrics).

Evidence tags: [strong] · [moderate] · [weak/anecdotal] · [contested] · [speculative].
Builds on: `process/states-and-edge-cases.md` (add the AI states below to it), `interaction/microinteractions-and-motion.md` (feedback timing), `psychology/cognition-memory-cognitive-load.md`.

---

## 0. Point of view

1. **Design the wrong case first.** A deterministic button either works or it's a bug. An AI output is right *some fraction of the time*, by design. The error path is the main path for some share of users, every day.
2. **Autonomy is a dial per action, not a property of the product.** Choose it by reversibility, stakes and how cheap checking is, not by how impressive the demo looks.
3. **Oversight people can't realistically do is fake oversight.** Humans are poor at sustained monitoring (Bainbridge 1983; Parasuraman & Manzey 2010). If the plan is "a human reviews everything," design what they review so it can be reviewed in seconds, or admit the plan won't work.
4. **The human constants decide the design:**
   - Vigilance drops within minutes of monotonous checking.
   - Working memory holds about 4 chunks.
   - People fill gaps with what they expect to see.
   - Losing work causes outsized anger (peak-end).
   - People accept responsibility only for what they understood when they approved it.

---

## 1. Levels of automation: pick a level per stage, per action

### 1.1 Established frameworks [strong]
- **Sheridan & Verplank (1978)** set out 10 levels, from "the computer offers no help" through "suggests one alternative", "executes if the human approves", "executes and informs" and "informs only if asked" to "acts fully autonomously".
- **Parasuraman, Sheridan & Wickens (2000)** applied levels separately to four stages:
  - **(1)** information acquisition
  - **(2)** information analysis
  - **(3)** decision selection
  - **(4)** action implementation
- Their key advice:
  - High automation of stages 1–2 is usually safer than high automation of 3–4.
  - Judge each level by its effects on mental workload, situation awareness, complacency and skill decay, not by capability alone.
- **Shneiderman, Human-Centered AI (2020, IJHCI; book 2022)** rejects the single autonomy axis. Control and automation are two dimensions, and the target is **high automation AND high human control**. Familiar examples:
  - Digital cameras automate exposure, but the user frames and chooses the moment.
  - Elevators automate the motion, but people pick the floor.
- **Horvitz (1999), mixed-initiative principles:**
  - Act on inferred intent only when expected value beats the cost of interrupting or of being wrong.
  - Under uncertainty, ask (dialog) rather than act.
  - Scale the precision of the service to the uncertainty.
  - Allow cheap invocation *and* cheap dismissal.
  - Keep a memory of what the user corrected.

### 1.2 Autonomy selection table for AI features

| Action property | Default level | UI pattern |
|---|---|---|
| Read-only, reversible (search, summarize, draft) | Act, show result | Inline output + evidence + "regenerate / edit" |
| Writes user's own data, reversible (edit doc, refactor code) | Act on a copy, human merges | Diff / track changes / branch; accept per hunk |
| Affects others, reversible within window (send email, post, comment) | Propose; execute after confirm or after a hold period | Preview + "Send in 10s · Undo" |
| Costs money, irreversible, legal, safety, deletes | Propose; explicit approval with the specific consequence named | Confirmation with specific verb + amount + recipient; never batched blind |
| Long-running agent task | Plan-then-act with checkpoints | Plan preview, step log, interrupt, resume |

**Rule:** the level of automation must never be higher than your ability to *undo*. If you can't build undo, step down one level.

---

## 2. Uncertainty & confidence display

### 2.1 What works [moderate]
- **Natural-language hedges in the first person** reduced over-reliance and improved accuracy:
  - Study: Kim et al. (FAccT 2024, preregistered, N=404, medical Q&A). "I'm not sure, but…" lowered agreement with the system's answers and raised participants' accuracy.
  - Impersonal hedges ("It's not clear, but…") had weaker, non-significant effects.
  - The exact wording matters, so test it.
- **Tying language to model confidence:**
  - Study: Steyvers et al. (2025). Matching explanation language to the model's internal confidence narrowed the human–model calibration gap.
  - Default verbose explanations made it wider.
- **Numeric confidence** helps only if it is calibrated and users understand it. Rules:
  - Prefer frequency framing ("right about 7 in 10 times on questions like this") or 3 levels backed by evals over a raw "87%".
  - Never show a number you haven't validated against real accuracy on this task distribution.

### 2.2 Uncertainty patterns

| Pattern | When | Not when |
|---|---|---|
| **Span-level highlighting** of low-confidence tokens or claims | Long text, code, transcription, OCR, translation | When per-token confidence is not meaningful (creative writing) |
| **Abstain / "I don't know"** with next step (who or what can answer) | Retrieval found nothing solid; out-of-scope | Never replace with a fluent guess |
| **Alternatives with trade-offs** | Ambiguous intent, judgment calls | Single-answer lookups |
| **Clarifying question** before acting | Intent uncertain AND acting wrongly is costly (Horvitz) | Cheap, reversible actions. Just act and show |
| **Source agreement indicator** ("3 sources agree · 1 conflicts") | Research, news, health, finance | Single-source tools |
| **Scope statement** ("Checked pages 1–40 of 62") | Partial coverage, truncated context, rate limits | Never omit when coverage is partial |

### 2.3 Rules
- Vary the signal. If everything is hedged, nothing is.
- Uncertainty should change the *interaction* (ask, show alternatives, route to a human), not just add a label.
- Put the uncertainty cue *at the claim*, not in a footer.
- Check contrast and non-color encoding for confidence markers (`interaction/accessibility.md`).

---

## 3. Bainbridge's ironies applied to AI agents [conceptual: strong; agent-specific data: emerging]

| Irony (1983) | Agent-era form | Design response |
|---|---|---|
| Automating the easy leaves humans the hard exceptions | Agents finish 95% of steps; human gets paged for the weird 5% with no context | Handoff packet: goal, what was done, what failed, what the agent tried, what it needs, and a recommended next step |
| Operators lose skill they no longer practice | Users stop writing SQL, reading code, drafting contracts | Collaboration modes, unassisted reps, "explain this diff" quizzes (see trust file §3) |
| Monitoring is a task humans can't sustain | Approval prompts every 30 s → reflexive "Allow" | Batch low-risk, gate only high-risk; make risk visible per prompt; measure approval latency |
| Takeover is needed exactly when the situation is hardest to understand | Agent stuck mid-task in a half-modified state | Checkpoints, resumable state, a clear "current state of the world" view, one-click rollback |
| The more reliable, the less ready the human | Long autonomous runs → unfamiliar workspace on return | Run summary on return; "what changed since you left" view |

**Emerging field data [moderate, vendor-reported]:**
- Anthropic's "Measuring AI agent autonomy in practice" (Feb 2026) analyzed Claude Code and API usage:
  - The longest autonomous runs roughly doubled over about 3 months.
  - Experienced users auto-approved *more* and also *interrupted more*. Their oversight moved from approving each action to monitoring and stepping in.
  - The authors argue that capability users could hand over already exceeds what they actually delegate, and that oversight will need new interaction designs.
- **Design implication:**
  - Support both modes on purpose: step-approval for novices and high-risk work, watch-and-interrupt for experts.
  - The interrupt has to be instant, safe at any point, and leave a coherent state behind.

---

## 4. Error & hallucination UX

### 4.1 AI-specific states to add to every states matrix
1. **Confidently wrong** (the hallucination). Designed defense: verifiable evidence, plus a cheap way to report it and fix it.
2. **Partially right:** some claims supported, some not. Mark claim by claim.
3. **Refused or abstained.** Explain why in plain terms and offer a path forward. Never blame the user.
4. **Off-intent:** a correct answer to the wrong question. Show the interpreted intent ("Interpreted as: …, change").
5. **Stale:** knowledge cutoff, or a cached index. Show the as-of date.
6. **Partial coverage:** truncated input or a context limit. Show the scope statement.
7. **Slow or streaming:** show progress honestly and let the user stop it. Partial output stays usable.
8. **Agent stuck or looping:** detect it, stop, summarize what happened and ask for help.
9. **Model changed:** behavior differs from yesterday. Say so in a changelog or a "what's new" note.
10. **Tool or action failed mid-run:** say what got done, what didn't, and offer rollback.

### 4.2 Patterns
- **Grounded citations:** link to the exact span, and open it side-by-side. Check that the citation actually supports the claim. A citation that doesn't support its claim is worse than no citation, because it borrows trust.
- **Diff, not replace:** AI edits show as track changes. The user accepts per change, and the original is always one click away.
- **Hold-to-send / undo window** for outbound actions (email, messages, posts, payments where rails allow).
- **Staged execution:** dry run → preview of effects ("will modify 14 files, delete 2, email 3 people") → execute.
- **Blast-radius labels** on each permission prompt: read / write-own / write-shared / external / spend / delete.
- **Correction loop:**
  - Make "this is wrong" one tap, with an optional reason.
  - The correction visibly sticks: the system remembers it this session and says so.
  - Never answer a correction with a sycophantic flip and no evidence. Re-check, then state what changed.
- **Graceful degradation:** when the model is down or unsure, the manual path still works. The AI accelerates the task, and the task never depends on it.
- **Error copy:**
  - Be specific, own the error, and give a next step.
  - "I couldn't find a source for the 2019 figure, so I removed it" beats "Something went wrong."

### 4.3 Anti-patterns
- Fluent fabricated citations, or citations to the homepage rather than the passage.
- The agent reports "Done ✅" with no evidence (tests, links, screenshots).
- Approval prompts that are vague ("Allow tool use?") or batched ("Approve all 37 actions").
- AI-applied changes with no undo, or undo that only reverts the last step of a multi-step run.
- Hiding failures to protect the "magic" feeling. One discovered cover-up destroys calibration (Lee & See: trust collapses fast).
- Hedging boilerplate as the only uncertainty signal.
- Making the user re-explain context after a handoff.

---

## 5. Oversight & review design (the humans in the loop are human)

- **Make review units small:**
  - Review per claim, per hunk, per row, never per 3,000-word blob.
  - Aim for unit review time ≤ ~30 s. For longer units, add structure (summary of changes, risk flags).
- **Rank by risk, not chronology:** surface the riskiest items first, and auto-pass low-risk ones with sampling audits.
- **Seed known errors (canaries)** into review queues where it's ethical and agreed with reviewers. This measures real vigilance, as airport security screening does with threat image projection.
- **Rotate and limit queue length.** Vigilance decrement is among the most replicated findings in human factors. [strong]
- **Show why an item is in review** (low confidence, policy hit, novelty). Reviewers calibrate better when they know what to look for.
- **Accountability matches understanding:** an approval records what was shown at approval time, so people can't be blamed for what the UI hid.
- **Escalation, not just approve/reject:** add "unsure → escalate" so ambiguity doesn't turn into a rubber stamp.

---

## 6. Emerging & speculative

- **[emerging]** Interfaces built for verification: provenance panes, claim-level evidence, diff-first editors and agent run logs are becoming standard surfaces in coding, research and document tools.
- **[emerging]** Permission models move from per-call prompts to **policies**: allow-lists, budgets, scopes and time windows, with live monitoring and a kill switch. This mirrors the shift Anthropic observed among experienced users.
- **[speculative]** "Flight recorder" for agents: a scrubbable timeline of every observation and action that can replay from any checkpoint. It will become the standard way to take over from an agent, like video scrubbing.
- **[speculative]** Calibrated confidence becomes a design-system token class (e.g., `confidence.high/medium/low` with fixed visual and verbal treatments across a product), so users learn one vocabulary.
- **[speculative]** Regulation (e.g., EU AI Act human-oversight duties for high-risk systems) pushes "meaningful human oversight" from a checkbox toward measurable reviewer performance. Treat it as a direction, and consult counsel for the specifics.

---

## 7. Design checklist (errors, uncertainty, oversight)

- [ ] Each AI action has an autonomy level chosen by reversibility × stakes × verification cost (table §1.2). No level exceeds what we can undo.
- [ ] Information and analysis stages may be highly automated. Decision and action stages for high-stakes actions need explicit, specific approval.
- [ ] All 10 AI states (§4.1) are designed or marked N/A.
- [ ] Confidence is shown at the claim, tied to a validated signal, and changes the interaction (ask, alternatives, route).
- [ ] Abstaining is allowed and designed, with a next step.
- [ ] Every citation lands on a supporting span. Citation support has been spot-checked.
- [ ] AI edits are diffs and AI outbound actions have an undo or hold window. Multi-step runs have checkpoints and rollback.
- [ ] Permission prompts name the blast radius and the specific consequence. Low-risk actions aren't prompting people into approval fatigue.
- [ ] Interrupt works at any moment and leaves a coherent state. The return-from-autonomy summary exists.
- [ ] Handoff packets give the human the goal, what was done, what failed and the recommended next step.
- [ ] Review units are small, ranked by risk, with an escalate option. Queue length and rotation are planned.
- [ ] The manual path still works when the AI is unavailable.
- [ ] Model changes are communicated.

## 8. Metrics

| Metric | Definition | Target / read |
|---|---|---|
| **Over-reliance rate** | Accepts \| AI wrong (from labeled samples or seeded canaries) | Down. Primary guardrail |
| **Appropriate reliance** | Accept-when-right + reject-when-wrong, reported as two rates | Up on both |
| **Canary catch rate** | % of seeded errors caught by reviewers | Tracks vigilance. Watch the decline over shift or queue length |
| **Approval latency vs. content size** | Seconds to approve ÷ size or risk of item | Flat near-zero latency on large or risky items = rubber-stamping |
| **Verification actions** | Source opened, diff expanded, test run before accept | Up for high-stakes items |
| **Interrupt / takeover success** | % of interrupts that leave a recoverable state; time to resume | ~100% recoverable |
| **Undo / revert rate of AI actions** | Share of AI-applied changes undone within N days | Spikes = hidden errors or off-intent |
| **Abstention quality** | Precision of "I don't know" (was the answer really unavailable?) and the hallucination rate on unanswerable probes | Hallucination on unanswerables → 0 |
| **Citation support rate** | % of citations whose span actually supports the claim (audit sample) | ≥ agreed bar per domain |
| **Calibration (ECE or reliability curve)** of displayed confidence | Shown confidence vs. observed accuracy per bucket | Diagonal. Re-check after model updates |
| **Error-recovery time** | Time from AI error to corrected state | Down |
| **Unassisted skill check** | Periodic AI-off performance for critical skills | No decline vs. baseline cohort |

**Measurement notes:**
- Ground truth needs expert labels or later outcomes, so budget for audit sampling.
- Seeded-error studies need consent and debriefing.
- Model updates invalidate calibration, so re-run the calibration and over-reliance probes on each model change, the same way you re-run regression tests.

---

## Sources

- Sheridan, T. B. & Verplank, W. L. (1978). Human and computer control of undersea teleoperators. MIT Man-Machine Systems Lab. https://apps.dtic.mil/sti/citations/ADA057655
- Parasuraman, R., Sheridan, T. B. & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Trans. SMC-A* 30(3). https://doi.org/10.1109/3468.844354
- Shneiderman, B. (2020). Human-centered artificial intelligence: Reliable, safe & trustworthy. *IJHCI* 36(6). https://doi.org/10.1080/10447318.2020.1741118 · book *Human-Centered AI* (OUP, 2022)
- Horvitz, E. (1999). Principles of mixed-initiative user interfaces. CHI '99. https://erichorvitz.com/uiact.htm
- Amershi, S. et al. (2019). Guidelines for human-AI interaction. CHI '19. https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/
- Bainbridge, L. (1983). Ironies of automation. *Automatica* 19(6). https://doi.org/10.1016/0005-1098(83)90046-8
- Parasuraman, R. & Manzey, D. (2010). Complacency and bias in human use of automation. *Human Factors* 52(3). https://doi.org/10.1177/0018720810376055
- Kim, S. S. Y., Liao, Q. V., Vorvoreanu, M., Ballard, S. & Vaughan, J. W. (2024). "I'm not sure, but…". FAccT '24. https://arxiv.org/abs/2405.00623
- Steyvers, M. et al. (2025). What large language models know and what people think they know. *Nature Machine Intelligence*. https://arxiv.org/abs/2401.13835
- Anthropic (2026). Measuring AI agent autonomy in practice. https://www.anthropic.com/research/measuring-agent-autonomy
- Fok, R. & Weld, D. S. (2023). In search of verifiability. https://arxiv.org/abs/2305.07722
- Lee, J. D. & See, K. A. (2004). Trust in automation. *Human Factors* 46(1). https://doi.org/10.1518/hfes.46.1.50_30392
