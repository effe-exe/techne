# Agent Delegation UX: Handing Work to AI Without Losing Control

> **Use this when:** designing any feature where an AI agent acts on the user's behalf across several steps (coding agents, browser/computer-use agents, research agents, ops automations, booking, email triage), or choosing how autonomous it should be.
> **Also use when:** writing the task-specification, plan, progress, approval, permission, checkpoint, undo or review screens for an agent, or someone proposes "fully autonomous" or "approve every step".
> **Skip when:** the AI only suggests or transforms content the user then accepts → `ai-patterns-interaction-pattern-library.md`; trust calibration and deskilling evidence → `human-ai-trust-trust-and-reliance.md`.

Evidence tags: **[strong]** · **[moderate]** · **[weak/anecdotal]** · **[contested]** · **[speculative]**. Status as of Oct 2026. Product behaviors cited are from vendors' own docs or posts; treat them as *shipped patterns*, not proof of effectiveness.

---

## 0. Point of view

Delegation is not a feature; it's a **contract** between a principal (the human) and an agent. Good human managers already know the contract: say what done looks like, agree the plan, set limits on authority and budget, check in at the risky moments, review the result, and keep the ability to undo. Agent UX is that contract made visible.

The human constants that shape it:
- **People are poor monitors.** Vigilance drops within minutes of passive watching; supervisors of automation miss rare failures (automation complacency, Parasuraman & Manzey 2010) [strong]. "Watch the agent work" is not oversight.
- **Approval fatigue is real and measured.** Anthropic reports Claude Code users accept **93%** of manual permission prompts (Mar 2026) [moderate: vendor telemetry], and it names "approval fatigue" as the reason to redesign prompts. A prompt that's almost always "yes" trains the reflex to say yes to the 7% that matters.
- **Ironies of automation** (Bainbridge 1983) [strong]: the more you automate, the more the remaining human role is the hardest part (handling exceptions), done by a person whose skills are fading and who lacks context.
- **Working memory ~4 chunks** [strong]: a 40-step log is unreviewable. Summaries, risk ranking and diffs are the interface.
- **Loss aversion / peak-end** [strong]: one irreversible mistake (a sent email, a deleted database, a purchase) defines the whole relationship.

**Therefore:** design so that the human's attention is spent only where their judgment adds value: at **specification**, at **high-consequence moments**, and at **review**. Everything else should run inside boundaries that make mistakes cheap.

---

## 1. Established vs emerging vs speculative

**Established**
- Levels of automation are per *function*, not per system: information acquisition, analysis, decision selection, action implementation can each be automated to different degrees (Parasuraman, Sheridan & Wickens 2000) [strong].
- Mixed-initiative principles (Horvitz 1999): consider uncertainty about user goals, the cost of acting wrongly vs not acting, and allow efficient invocation, dismissal and correction; scale the system's initiative to its confidence [strong, foundational].
- Humans misuse (over-trust) and disuse (under-trust) automation; calibration, not maximal trust, is the goal (Parasuraman & Riley 1997) [strong].
- Confirm irreversible actions; prefer undo for reversible ones (standard HCI; Apple HIG generative AI: "get permission before performing irreversible or potentially problematic tasks").

**Emerging (2024–2026, shipped and studied)**
- Autonomy as a *design decision* separate from capability: five levels defined by the user's role: operator, collaborator, consultant, approver, observer (Feng, McDonald & Zhang 2025) [moderate: framework paper].
- Shipped oversight mechanisms converge: plan-before-act (co-planning), take-over/hand-back (co-tasking), action guards on high-impact steps, site/resource permissions, sandboxes, sensitive-site supervision, logged-out modes (OpenAI Operator Jan 2025; Microsoft Magentic-UI 2025; Claude for Chrome Aug 2025; ChatGPT Atlas agent mode Oct 2025; Claude Code sandboxing Oct 2025 and auto mode Mar 2026).
- Classifier-mediated approvals: a model reviews each action against user intent so the human isn't asked about routine ones (Claude Code auto mode) [moderate: vendor-evaluated].
- Developers supervising coding agents concentrate effort in *planning*, delegate supervision to other agents, and turn recurring guidance into reusable assets (Park et al. 2026, 19 developers) [weak→moderate: qualitative, under review].
- Delegation is partial in practice: Anthropic engineers report using AI in ~60% of their work but being able to "fully delegate" only 0–20% of tasks (Anthropic 2026 Agentic Coding Trends Report) [moderate: self-report, vendor].

**Speculative**
- Agent "inboxes" replace many app UIs: people review proposed outcomes rather than perform steps. [speculative]
- Autonomy certificates or standardized permission manifests per agent, readable like nutrition labels (suggested by Feng et al. 2025). [speculative]
- Verification capacity, not agent capability, becomes the bottleneck of adoption, so review tooling is where design value concentrates. [speculative, increasingly argued in 2026 commentary]

---

## 2. Choose the autonomy level per task (the autonomy dial)

**Feng et al. (2025) levels, by the user's role:**

| Level | User role | Agent does | Typical UI |
|---|---|---|---|
| L1 | Operator | Executes what the user directs, step by step | Command/tool UI with AI help |
| L2 | Collaborator | Shares planning and execution; either can take over | Co-planning + co-tasking (Magentic-UI) |
| L3 | Consultant | Leads; asks the user for input/preferences at key points | Clarifying questions, choice cards |
| L4 | Approver | Acts; user approves only high-consequence steps | Action guards, confirmations, review queue |
| L5 | Observer | Acts autonomously; user monitors and can stop | Activity log, alerts, kill switch |

**Pick the level from four task properties** (score each low/high):

| Property | Pushes toward LOWER autonomy when… |
|---|---|
| **Reversibility** | Actions can't be undone (send, pay, delete, publish, deploy to prod) |
| **Stakes** | Errors cost money, safety, reputation, legal exposure, or other people |
| **Verifiability** | The user can't cheaply check the result (no tests, no ground truth, subjective) |
| **Specifiability** | The goal is ambiguous or preference-laden ("plan a nice trip") |

Rules of thumb [moderate: synthesis of the sources above]:
- All four favorable (reversible, low stakes, verifiable, well-specified) → L4–L5 inside a sandbox. Example: refactor with tests passing, in a branch.
- Irreversible or high-stakes step anywhere → that **step** drops to L4 approval even if the rest runs at L5. Autonomy is per action class, not per agent.
- Low verifiability → don't raise autonomy; invest in verification UI first (§6).
- Low specifiability → L2–L3: ask, show the plan, offer choices before acting.
- **Let the user set the dial**, with a safe default, per scope (per project / per site / per action type), and show the current level persistently.
- **Earned autonomy:** raise the default only after a track record the user can see ("12 of the last 12 refunds under $20 were approved unchanged · Auto-approve these?"). Never raise it silently (HAX G14, G18).

---

## 3. The delegation lifecycle: patterns for each stage

### 3.1 Specify the task (intent → contract)
- **Pattern: the task brief.** Structure the handoff the way a good manager would: goal, definition of done, constraints (budget, time, sources, style), what it may NOT do, who to ask. Prefill from context; let free text fill the rest.
- **Clarify before acting** when ambiguity is high and acting wrongly is costly (Horvitz: cost of wrong action vs cost of asking). Ask 1–3 targeted questions with choices, not an interrogation.
- **Reusable instructions:** let users save recurring guidance as project rules/skills/templates (developers already do this, Park et al. 2026).
- **Anti-pattern:** a single prompt box for a 2-hour task.

### 3.2 Show the plan before acting (co-planning)
- **Pattern:** the agent proposes a numbered, editable plan; the user can reorder, delete, add or annotate steps before execution (Magentic-UI's plan editor; plan modes in coding agents). Anthropic's agent guidance: "prioritize transparency by explicitly showing the agent's planning steps."
- **Rules:** steps are in outcome language ("Find 3 flights under €300 arriving before 18:00"), not tool calls; flag which steps will need approval (lock icon) and which touch external systems; show an estimate of time/cost when meaningful.
- **When not:** trivial, fully reversible tasks; plan review there is friction without value.

### 3.3 Grant scoped permissions (least privilege)
- **Scope by:** resource (which folders, repos, sites, accounts), action verb (read / draft / write / send / pay / delete), budget (money, API spend, time), duration (this task / this session / always), audience (only me / my team / external people).
- **Shipped patterns:**
  - Site-level permissions granted/revoked any time (Claude for Chrome, Aug 2025).
  - Logged-out agent mode that doesn't use your cookies or accounts unless you approve (ChatGPT Atlas).
  - OS-level sandbox: filesystem and network boundaries inside which the agent runs without prompts. Anthropic reports sandboxing cut permission prompts by **84%** in internal use (Oct 2025) [moderate: vendor].
  - Takeover for credentials and payments: the human types passwords/card details; the agent doesn't see or screenshot them (OpenAI Operator).
- **Rules:** ask for permission at the moment of need, with the specific scope ("Allow access to `calendar.google.com` for this task?"), not a blanket up-front grant; show all active grants in one place with revoke (HAX G17 global controls); expire task-scoped grants automatically.

### 3.4 Execute with legible progress
- **Pattern: progress as a story, not a log.** A short headline of the current step ("Comparing 4 hotels near the venue"), a step checklist with states (done / running / waiting for you / failed), elapsed time, and an expandable raw trace for experts.
- **Rules:**
  - Ground truth over narration: show evidence of progress (tests passing, page reached, file written), not the agent's self-report alone. Anthropic: agents should gain "ground truth" from the environment at each step.
  - Long tasks run in the background; notify on completion, on blockers, and on approvals needed, nothing else (respect attention; batch).
  - Make "waiting for you" impossible to miss and easy to answer from the notification.
  - Show cost/budget consumption when it can surprise.

### 3.5 Interrupt, steer, take over (co-tasking)
- **Pattern:** Pause / Stop always visible; "take over" hands the controls to the human mid-task and "hand back" resumes with the human's changes as context (Magentic-UI co-tasking; Operator takeover).
- **Rules:** stopping is instant and safe (no half-written records; the agent finishes or rolls back the atomic step); steering messages can be sent while it works without restarting the task; the agent confirms how the steer changed the plan.

### 3.6 Checkpoints and action guards
- **Pattern:** the agent stops before high-impact actions and asks for approval with a **specific** preview: "Send this email to 3 external recipients?" with the email visible, not "Continue?".
- **Shipped:** confirmations before submitting orders or sending email (Operator); approvals before publishing, purchasing or sharing personal data (Claude for Chrome); action guards whose frequency the user sets (Magentic-UI); "watch mode" requiring active supervision on sensitive sites like email and banking (Operator).
- **Rules against approval fatigue:**
  1. **Ask rarely, ask well.** Only consequential, irreversible or out-of-scope actions prompt. If the approval rate for a prompt type is > ~95%, it's a candidate for auto-approve or a sandbox boundary (93% telemetry above).
  2. **Risk-tier the prompt's visual weight**: routine = inline, quiet; destructive/external = modal with the consequence named and the specific object shown.
  3. **Make the safe choice the easy one**: default focus on "Review" or "Cancel" for destructive steps; the verb names the action ("Delete 214 files"), never "OK".
  4. **Batch** similar low-risk approvals into one reviewable list.
  5. Where a classifier decides on behalf of the human (auto mode), log every blocked/allowed decision and let users audit and adjust.

### 3.7 Review the result (verification UX)
- Verification is the new bottleneck: the human can't re-do the work to check it.
- **Patterns:** an outcome summary first (what was done, what wasn't, what needs your decision); **risk-ranked changes** (money, deletions, external communication, security first); diffs for anything modified (`ai-patterns-interaction-pattern-library.md` P5); evidence attached to claims (screenshots, test output, sources); explicit list of assumptions the agent made; "spot-check" sampling for large batches ("Here are 5 random items of 200 to verify").
- **Rules:** never bury failures in a success-colored summary; distinguish "verified by test/tool" from "the agent believes"; make rejecting part of the result as easy as accepting all.

### 3.8 Undo and rollback
- **Pattern:** checkpoints at every step with one-click restore (coding agents' checkpoint/restore, version history); "undo send" windows; staging/draft modes where the agent produces drafts and the human publishes.
- **Rules:** design actions to be reversible *before* adding approvals ("draft, don't send"; "move to trash, don't delete"; "branch, don't push to main"); where reversal is impossible, say so in the approval itself; keep an audit log of what the agent did, when, with which permission.

### 3.9 Learn and remember (with consent)
- Turn corrections into reusable rules the user can see and edit ("Noted: always CC finance on invoices > €5k · Edit rule"). HAX G13–G14: learn from behavior, adapt cautiously, notify about changes.

---

## 4. Safety-critical design inputs (agents read the hostile web)

- **Prompt injection is unsolved.** Anthropic's red-teaming of Claude for Chrome measured a 23.6% attack success rate without mitigations and 11.2% with them in autonomous mode (Aug 2025) [moderate: vendor]. OpenAI warns Atlas agent mode is vulnerable to prompt injection.
- Design consequences: the agent's authority must be bounded by **permissions and sandboxes**, not by the agent's judgment; treat content the agent reads as untrusted (it can't grant itself permissions); require human approval when an action's target or recipient came from untrusted content; use logged-out or isolated modes for browsing unknown sites; surface "this page tried to instruct the agent" warnings.
- **Stopping conditions:** maximum steps, time and spend per task, after which the agent stops and reports (Anthropic: include stopping conditions "to maintain control").

---

## 5. Keeping humans capable (anti-deskilling)

- Ironies of automation predict that well-functioning agents erode the skills needed to supervise them [strong theory]. Knowledge workers with higher confidence in GenAI reported less critical thinking (Lee et al., CHI 2025, n=319, self-report) [moderate].
- **Patterns:** show reasoning-relevant intermediate artifacts (the plan, the evidence) rather than only final outputs; offer "do it with me" modes (L2) for learning contexts; ask the user to make the key judgment call themselves where it's their expertise; periodically route a sample of tasks to manual review.
- **When this matters most:** education, onboarding junior staff, safety-critical domains, and any role whose value is judgment.

---

## 6. Ethics of acting on someone's behalf

Run the techne ethics gate (`psychology/behavior-ethics-dark-patterns.md`) with these additions:
- **Authority is explicit.** The agent never spends, sends, signs, shares personal data or commits the user to anything without a permission the user knowingly granted for that scope.
- **No dark patterns *against* the principal.** An agent that steers the user toward the operator's own products, upsells, or hides cheaper options betrays the delegation contract. Disclose sponsored or affiliated choices.
- **Disclosure to third parties.** When an agent emails, calls or chats with other people, it identifies itself as AI acting for a named person (Apple HIG: never trick people into thinking they're interacting with a human).
- **Accountability trail.** Every external action is logged with the permission that allowed it.
- **Symmetric exits.** Revoking the agent's access is as easy as granting it.

---

## 7. How to measure delegation UX

| Question | Metric | Guardrail |
|---|---|---|
| Does delegation produce correct outcomes? | Task success rate on representative tasks (verified, not self-reported) | Severe-error rate (irreversible wrong actions per 1,000 tasks) |
| Is the human's time actually saved? | Total human minutes per task (spec + approvals + review + fixing) vs doing it manually | Rework within 7 days |
| Are approvals meaningful? | Approval rate per prompt type; time spent per approval | Seeded-error catch rate (insert known-bad actions in tests: do reviewers catch them?) |
| Is oversight sustainable? | Prompts per task-hour; interruptions per task | Users switching to "skip all permissions" modes |
| Is the plan useful? | Plan edit rate; success when plan edited vs not | Plan-review abandonment |
| Can users recover? | Undo/rollback usage and success | Unrecoverable incidents |
| Is autonomy calibrated? | Share of tasks at each autonomy level over time; incidents by level | Autonomy raised without track record |

Measure felt vs real speed separately: METR's 2025 RCT found experienced developers were 19% slower with AI while believing they were ~20% faster [moderate: n=16]. Self-reported productivity is not evidence.

---

## 8. Template: delegation spec (put this in any agent feature brief)

```
Agent: <name> · Principal: <who it acts for>
Goal & definition of done: <observable end state>
Autonomy level default: L<1–5> · user-adjustable per: <project/site/action>
Action classes & policy:
  read          → auto
  draft/create  → auto in sandbox
  modify        → auto + checkpoint + diff in review
  send/publish  → approval with preview
  pay/delete    → approval + takeover for credentials; never auto
Permissions & scope: <resources, verbs, budget, duration, expiry>
Stopping conditions: <max steps / time / spend>, stop on <blockers>
Progress UI: headline + step checklist + background + notify on {done, blocked, approval}
Review UI: outcome summary, risk-ranked changes, evidence, assumptions, spot-check
Undo: <checkpoint granularity, reversible-by-design choices, non-reversible list>
Untrusted input handling: <injection policy, logged-out mode>
Metrics: success, human-minutes/task, seeded-error catch rate, severe-error rate
```

---

## 9. Anti-patterns

- **"Approve every step"**: maximal prompts → rubber-stamping (93% acceptance) → worse safety than fewer, better prompts.
- **"Fully autonomous" by default** on irreversible actions.
- **Generic confirmations** ("Continue?") that don't show the object and consequence.
- **Narrated progress without ground truth** ("Done!" with failing tests).
- **Success-colored summaries hiding partial failure.**
- **Unbounded permissions** granted once at onboarding, never visible again.
- **No take-over path**: the user can only stop and restart from zero.
- **Logs as the review UI**: 300 lines of tool calls instead of a risk-ranked summary.
- **Silent autonomy creep**: the agent starts doing more without telling the user.
- **Anthropomorphized agent with a human name** contacting third parties without disclosure.

---

## 10. Checklist

- [ ] Autonomy level chosen per action class from reversibility, stakes, verifiability, specifiability; user-adjustable; visible.
- [ ] Task brief captures goal, done-definition, constraints, forbidden actions.
- [ ] Plan shown and editable before consequential execution.
- [ ] Permissions scoped (resource, verb, budget, duration), granted at need, listed in one place, revocable, expiring.
- [ ] Reversible-by-design actions preferred (draft, branch, trash) before adding approvals.
- [ ] Approvals rare, specific, risk-tiered, with object + consequence visible; approval rates monitored.
- [ ] Progress legible at a glance; background + notifications for done/blocked/approval only.
- [ ] Pause/stop/take-over/hand-back available at all times.
- [ ] Review UI: summary, risk-ranked diffs, evidence, assumptions, sampling.
- [ ] Checkpoints and rollback; audit log of actions with the permission used.
- [ ] Prompt-injection posture: untrusted content can't expand authority; isolated modes available.
- [ ] Stopping conditions on steps/time/spend.
- [ ] Third-party disclosure when acting toward other people.
- [ ] Metrics include human-minutes/task and seeded-error catch rate.

---

## Sources

- Feng, K. J. K., McDonald, D. W., Zhang, A. X. (2025). *Levels of Autonomy for AI Agents.* arXiv:2506.12469. https://arxiv.org/abs/2506.12469
- Parasuraman, R., Sheridan, T., Wickens, C. (2000). *A model for types and levels of human interaction with automation.* IEEE SMC-A. https://doi.org/10.1109/3468.844354
- Parasuraman, R. & Riley, V. (1997). *Humans and Automation: Use, Misuse, Disuse, Abuse.* Human Factors. https://doi.org/10.1518/001872097778543886
- Parasuraman, R. & Manzey, D. (2010). *Complacency and Bias in Human Use of Automation.* Human Factors. https://doi.org/10.1177/0018720810376055
- Bainbridge, L. (1983). *Ironies of automation.* Automatica. https://doi.org/10.1016/0005-1098(83)90046-8
- Horvitz, E. (1999). *Principles of mixed-initiative user interfaces.* CHI. https://doi.org/10.1145/302979.303030
- Anthropic (2024). *Building effective agents.* https://www.anthropic.com/research/building-effective-agents
- Anthropic (2025). *Piloting Claude for Chrome.* https://www.anthropic.com/news/claude-for-chrome
- Anthropic (2025). *Beyond permission prompts: making Claude Code more secure and autonomous* (sandboxing). https://www.anthropic.com/engineering/claude-code-sandboxing
- Anthropic (2026). *How we built Claude Code auto mode.* https://www.anthropic.com/engineering/claude-code-auto-mode
- Anthropic (2026). *2026 Agentic Coding Trends Report.* https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf
- OpenAI (2025). *Introducing Operator.* https://openai.com/index/introducing-operator/
- OpenAI Help Center (2025). *ChatGPT Atlas agent mode.* https://help.openai.com/en/articles/12628199-chatgpt-atlas-agent-mode
- Microsoft Research (2025). *Magentic-UI: an experimental human-centered web agent.* https://www.microsoft.com/en-us/research/blog/magentic-ui-an-experimental-human-centered-web-agent/ · report arXiv:2507.22358
- Park, Y. S. et al. (2026). *The Work Behind Delegation: A Framework for Supervising AI Coding Agents.* arXiv:2609.24234. https://arxiv.org/abs/2609.24234
- Lee, H.-P. et al. (2025). *The Impact of Generative AI on Critical Thinking.* CHI '25. https://advait.org/files/lee_2025_ai_critical_thinking_survey.pdf
- METR (2025). *Early-2025 AI and experienced open-source developer productivity.* https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- Apple (2025/2026). *HIG: Generative AI.* https://developer.apple.com/design/human-interface-guidelines/generative-ai
- Willison, S. (2025). *Piloting Claude for Chrome* (critique of residual injection risk). https://simonwillison.net/2025/Aug/26/piloting-claude-for-chrome/
