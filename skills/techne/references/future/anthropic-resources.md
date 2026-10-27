# Anthropic Resources for AI-Era Product Design: What They Say, What Is Measured, What to Do

> **Use this when:** you need what Anthropic has published (research, docs, engineering posts, the AI Fluency course, skills) on how people communicate with AI, build with it, delegate to it and check it, and what that means for an AI feature, for a designer's AI-assisted workflow, or for how techne itself behaves.
> **Also use when:** someone cites "Anthropic says…" (augmentation vs automation, the AI Fluency 4Ds, skill atrophy, sycophancy, "AI slop" frontends, generator/evaluator loops) and you need the real finding, its date, its sample and its limits.
> **Skip when:** you need the collaboration protocol itself (who frames, who explores, who judges) → `human-ai-cocreation.md`. For trust calibration → `human-ai-trust-trust-and-reliance.md`. For error and oversight UI → `human-ai-trust-errors-uncertainty-oversight.md`. For AI interface patterns → `ai-patterns-interaction-pattern-library.md`.

Evidence tags: **[strong]** replicated / large-sample · **[moderate]** · **[weak/anecdotal]** · **[contested]** · **[speculative]**. There are two kinds of claim and they are labelled separately:
- **Measured:** an Anthropic study with a stated method and sample. Most of these are *privacy-preserving classifier analyses of Claude conversations*: large n, but labelled by Claude and observational (correlation, early-adopter user base). Read them as **[moderate]** unless stated otherwise.
- **Opinion/practice:** Anthropic's recommendations, house style or internal experience. Useful priors, but **[weak/anecdotal]** as evidence, however authoritative they sound.

Status: verified Oct 2026. Raw copies (git-ignored) are in `books/free/anthropic/web/` and `books/free/anthropic/skills-repo/`. Quotes are kept under 25 words. Everything else is paraphrased.

## Contents
1. Map of sources
2. How humans should communicate with AI: AI Fluency, prompting, Claude Code practice
3. Measured research on human–AI collaboration
4. Honesty, sycophancy and wellbeing (constitution and research)
5. Building agents: engineering posts
6. Skills: format, authoring, evaluation
7. Anthropic's pre-made design skills: a short critical note
8. Synthesis: implications for AI features, the design workflow, and techne
9. Licenses

---

## 1. Map of sources

| # | Resource | URL | Date | Kind |
|---|---|---|---|---|
| 1 | AI Fluency Framework (4D) + course | anthropic.com/ai-fluency · academy.claude.com/fluency · PDF www-cdn.anthropic.com/b383cf6baddbfc72fdf8b0ed533a518e2872d531.pdf | 2025 | framework (CC BY-NC-SA 4.0) |
| 2 | AI Fluency Index (Education Report) | anthropic.com/research/AI-fluency-index | Feb 23, 2026 | measured, n = 9,830 conversations |
| 3 | Prompting best practices | platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | live doc | practice |
| 4 | Claude Code best practices | code.claude.com/docs/en/best-practices (old anthropic.com/engineering/claude-code-best-practices redirects here) | live doc (orig. Apr 2025) | practice |
| 5 | How Anthropic teams use Claude Code (post + PDF incl. Product Design team) | anthropic.com/news/how-anthropic-teams-use-claude-code · www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf | Jul 24, 2025 | internal practice |
| 6 | Introducing Claude Design | anthropic.com/news/claude-design-anthropic-labs | Apr 17, 2026 | product |
| 7 | Economic Index: first report (collaboration taxonomy) | anthropic.com/news/the-anthropic-economic-index | Feb 10, 2025 | measured |
| 8 | Economic Index Sept 2025 | anthropic.com/research/anthropic-economic-index-september-2025-report | Sep 15, 2025 | measured |
| 9 | Economic Index Jan 2026 + "economic primitives" | anthropic.com/research/anthropic-economic-index-january-2026-report · /research/economic-index-primitives | Jan 15, 2026 | measured |
| 10 | Economic Index Mar 2026 (learning curves) | anthropic.com/research/economic-index-march-2026-report | Mar 24, 2026 | measured |
| 11 | Economic Index Jun 2026 "Cadences" (artifacts, autonomy) | anthropic.com/research/economic-index-june-2026-report | Jun 26, 2026 | measured + survey |
| 12 | How AI impacts skill formation (RCT) | anthropic.com/research/AI-assistance-coding-skills · arXiv 2601.20245 | Jan 29, 2026 | RCT, n = 52 |
| 13 | How AI is transforming work at Anthropic | anthropic.com/research/how-ai-is-transforming-work-at-anthropic | Dec 2, 2025 | survey n = 132 + 53 interviews |
| 14 | Anthropic Interviewer (incl. 125 creatives) | anthropic.com/research/anthropic-interviewer | Dec 4, 2025 | interviews n = 1,250 |
| 15 | Agentic coding and returns to expertise | anthropic.com/research/claude-code-expertise | Jun 16, 2026 | measured, ~400k sessions |
| 16 | Measuring agent autonomy in practice | anthropic.com/research/measuring-agent-autonomy | Feb 18, 2026 | measured |
| 17 | Estimating productivity gains | anthropic.com/research/estimating-productivity-gains | Nov 25, 2025 | measured (Claude-estimated) |
| 18 | 81k-user survey on economics · AI expectations gap | anthropic.com/research/81k-economics · /research/ai-expectations-gap | Apr 22 / Oct 16, 2026 | survey |
| 19 | Towards understanding sycophancy (Sharma et al.) | anthropic.com/research/towards-understanding-sycophancy-in-language-models | Oct 23, 2023 | peer-reviewed (ICLR 2024) |
| 20 | Protecting the well-being of users | anthropic.com/news/protecting-well-being-of-users | Dec 18, 2025 | evals |
| 21 | Sycophancy in personal guidance | anthropic.com/research/claude-personal-guidance | Apr 30, 2026 | measured, ~38k guidance chats |
| 22 | Claude's constitution | anthropic.com/constitution · /news/claude-new-constitution | Jan 22, 2026 | normative |
| 23 | Building effective agents | anthropic.com/engineering/building-effective-agents | Dec 19, 2024 | practice |
| 24 | Effective context engineering for AI agents | anthropic.com/engineering/effective-context-engineering-for-ai-agents | Sep 29, 2025 | practice |
| 25 | Writing effective tools for agents | anthropic.com/engineering/writing-tools-for-agents | Sep 11, 2025 | practice |
| 26 | Building agents with the Claude Agent SDK | anthropic.com/engineering/building-agents-with-the-claude-agent-sdk | Sep 29, 2025 | practice |
| 27 | Code execution with MCP | anthropic.com/engineering/code-execution-with-mcp | Nov 4, 2025 | practice |
| 28 | Effective harnesses for long-running agents | anthropic.com/engineering/effective-harnesses-for-long-running-agents | Nov 26, 2025 | practice |
| 29 | Harness design for long-running app development (design evaluator) | anthropic.com/engineering/harness-design-long-running-apps | Mar 24, 2026 | practice + case study |
| 30 | Multi-agent research system | anthropic.com/engineering/multi-agent-research-system | Jun 13, 2025 | practice |
| 31 | Demystifying evals for AI agents | anthropic.com/engineering/demystifying-evals-for-ai-agents | Jan 9, 2026 | practice |
| 32 | Equipping agents for the real world with Agent Skills | anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills | Oct 16, 2025 | practice |
| 33 | Agent Skills overview + Skill authoring best practices | platform.claude.com/docs/en/agents-and-tools/agent-skills/overview · …/best-practices | live doc | spec + practice |
| 34 | Agent Skills open standard | agentskills.io/specification | live | spec |
| 35 | anthropics/skills repo (frontend-design, canvas-design, theme-factory, brand-guidelines, web-artifacts-builder, algorithmic-art, slack-gif-creator, skill-creator, discernment-nudge) | github.com/anthropics/skills | snapshot Oct 9, 2026 | skills |
| 36 | Prompting for frontend aesthetics (cookbook) · Improving frontend design through Skills | github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb · claude.com/blog/improving-frontend-design-through-skills | 2025 · Nov 12, 2025 | practice |

---

## 2. How humans should communicate with AI

### 2.1 AI Fluency Framework: the 4Ds (Dakan, Feller & Anthropic, 2025)
**What it says.** It names four interconnected competencies for working with AI "effectively, efficiently, ethically and safely", each with sub-skills:
- **Delegation:** deciding whether, when and how to use AI. Sub-skills: *problem awareness* (be clear on the goal and on what counts as success *before* you engage), *platform awareness* (what this system can and can't do), *task delegation* (split the work between human judgment and AI speed).
- **Description:** describing the goal well enough to get useful behavior. Sub-skills: *product* description (the output: audience, length, style, format), *process* description (how to approach it: steps, perspectives), *performance* description (how the AI should behave in the exchange, e.g. "critical editor" vs "supportive brainstormer").
- **Discernment:** judging the usefulness of outputs. *Product* (is it accurate and helpful), *process* (is the reasoning sound, are the assumptions right), *performance* (is it behaving the way I asked).
- **Diligence:** responsibility. *Creation* (choose the system with privacy, security and fit in mind), *transparency* (disclose AI's role), *deployment* (own what you ship).
- **Description–Discernment loop:** describe, judge, re-describe. This loop is what turns a tool into a thinking partner.
- It names three interaction modes: **automation** (AI executes a defined task), **augmentation** (thinking partner), **agency** (the human configures AI to act on its own later).

**Evidence status:** a pedagogical framework, not an empirical finding **[weak/anecdotal as evidence; useful as vocabulary]**. Its measurable part is §2.2.
**Implications.** (i) AI features: build all four Ds into the UI. Delegation = scoping and autonomy choice. Description = structured briefs, examples and roles. Discernment = provenance, reasoning on demand, diffs. Diligence = disclosure labels and an ownership step before publishing. (ii) Workflow: a designer's brief to an AI needs all three descriptions, not just the product. (iii) techne: in the AI-collaboration principles, use the 4Ds as the shared vocabulary. Ask for the missing description when a brief lacks process or performance terms.

### 2.2 AI Fluency Index (Feb 2026) **[moderate]**
**Measured:** 9,830 multi-turn Claude.ai conversations (Jan 20–26, 2026), with 11 of the 24 framework behaviors classified as present or absent.
- 85.7% of conversations showed *iteration and refinement*. These had about 2.67 more fluency behaviors than non-iterative ones (1.33 baseline), were **5.6× more likely to question Claude's reasoning** and 4× more likely to flag missing context.
- **Artifact conversations (12.3%: apps, code, documents, tools) were *more directive and less evaluative*.** Users clarified goals (+14.7 pp), specified format (+14.5 pp) and gave examples (+13.4 pp), but identified missing context less (−5.2 pp), checked facts less (−3.7 pp) and questioned reasoning less (−3.1 pp).
- Only **30%** of users told Claude how to interact with them (for example "push back if I'm wrong").
- Limits: correlational, early-adopter sample, one week, partial framework coverage. Users may evaluate outside the chat (running the code, showing a colleague).

**Anthropic's advice (opinion):** stay in the conversation, question polished outputs, set the terms of collaboration up front.
**Implications.** (i) Polished generated UI is exactly where users stop checking, so a design tool that renders beautifully has to add discernment prompts (what's assumed, what's untested, which states are missing). (ii) Designers: the prettier the AI mock, the harder you should probe it. (iii) techne: after delivering an artifact, end with the assumptions and the unverified items, briefly and specifically. Invite the user to set interaction terms. Default to "I'll push back when evidence disagrees".

### 2.3 Prompting best practices (platform docs, live) **[weak/anecdotal: vendor practice, internally tested]**
**What it says:** be clear and direct. Treat Claude as "a brilliant but new employee who lacks context". Use the colleague test (would a colleague with minimal context understand the prompt?). Give the *reason* behind an instruction, because Claude generalizes from explanations. Use 3–5 relevant, *diverse* examples in `<example>` tags. Structure with XML tags. Set a role. Ask for ambition explicitly ("go beyond the basics"). Agentic advice: investigate before answering, avoid over-engineering, don't hard-code to pass tests, track state in files across context windows. The doc's frontend section repeats the "AI slop" aesthetics snippet (§7) and points to Claude Design.
**Implications.** (i) Feature prompts and system prompts should carry rationale, not bare rules. (ii) A designer's brief = context + why + diverse examples + role + definition of done. (iii) techne: its own instructions should explain why (SKILL.md mostly does). The audit lists the places where it doesn't.

### 2.4 Claude Code best practices (live doc) **[weak/anecdotal]**
**What it says:** *give Claude a way to verify its work*: tests, expected outputs, and for UI "paste a screenshot, implement it, screenshot the result, list differences and fix them". **Explore → plan → implement → commit.** Scope prompts (which file, which scenario, what "fixed" looks like). Point to existing patterns. Paste images. *Let Claude interview you* into a SPEC.md. **Course-correct early** (Esc, rewind). **After two failed corrections, clear the context and rewrite the prompt.** Keep CLAUDE.md short (an over-long one gets half-ignored). Use subagents for exploration and an adversarial review subagent. Named failure patterns: the kitchen-sink session, correcting over and over, the trust-then-verify gap ("If you can't verify it, don't ship it"), infinite exploration.
**Implications.** (ii) This is the most concrete published protocol for designer–agent prototyping: reference image in, screenshot out, diff, fix. Two strikes, then rewrite the brief. (iii) techne `prototype` mode: always close the visual loop (render, screenshot at 2+ widths, compare against intent) before claiming done.

### 2.5 How Anthropic teams use Claude Code: Product Design team (Jul 2025) **[weak/anecdotal: self-report]**
**What it says:** designers implement visual and state changes themselves instead of writing design documentation and running rounds of review. They paste mockups to get working prototypes engineers "can immediately understand". They use Claude Code to **map error states, logic flows and system statuses so edge cases surface during design**. They file GitHub issues that Claude turns into fixes for the polish backlog. Their memory file says "I'm a designer with little coding experience" and asks for smaller, incremental changes with detailed explanations. Self-reported: "2–3x faster execution". Figma and Claude Code are open 80% of the time.
**Implications.** (ii) The designer's leverage moves to *specifying intent and judging the result*. Agents are especially good at enumerating states and edge cases, which is a known human weakness. (iii) techne: when building, have the agent enumerate the states matrix (`process/states-and-edge-cases.md`) from the code as well as from the spec. Recommend that a designer's CLAUDE.md declares their skill level and their preferred change size.

### 2.6 Claude Design (Apr 2026) **[weak/anecdotal: product announcement]**
**What it says:** a chat-plus-canvas tool. Claude drafts a first version, and you refine it by conversation, inline comments, direct edits or "custom sliders (made by Claude)". It builds a team design system from the codebase and design files, and hands off a bundle to Claude Code. Its pitch to designers is room to "explore widely", because designers otherwise "ration exploration".
**Implications.** (i) The pattern to note: steering moves from prompts to *direct manipulation* (comments on elements, knobs) once a draft exists. Prompting is for the first draft and direct manipulation is for refinement. (ii) Wide exploration is cheap now, so convergence and judgment become the scarce skill, and so does guarding against homogenization (→ `human-ai-cocreation.md` §6).

---

## 3. Measured research on human–AI collaboration

### 3.1 Economic Index: augmentation vs automation over time **[moderate]**
- **Taxonomy (Feb 2025).** *Automation* = **directive** (complete delegation, minimal back-and-forth) + **feedback loop** (task completion guided by environmental feedback, e.g. pasting errors back). *Augmentation* = **task iteration** (collaborative refinement), **learning** (explanations) and **validation** (feedback on the user's own work). First reading: 57% augmentation / 43% automation. "Arts, design, entertainment, sports and media" was the #2 occupational group (10.3%), mostly writing and editing.
- **Sept 2025:** directive conversations rose **27% → 39%** (Jan→Aug 2025), and automation exceeded augmentation for the first time. "Design, build or maintain web sites" grew 1.2% → 2.0% of tasks. API (business) traffic was 77% automation. Higher-adoption countries used AI more collaboratively, even after controlling for task mix.
- **Jan 2026 (Nov 2025 data):** augmentation was back to 52% (directive 32%), driven by **task iteration**. Arts and design share rose with writing and refinement. New "primitives": task complexity, human/AI skill, use case, **AI autonomy (1–5)**, **task success**. Claude's success rate falls as the human-time length of the task grows.
- **Mar 2026 (Feb 2026 data):** **experienced users (≥ 6 months) iterate more and delegate less.** They are about 3–4 pp more likely to succeed *within the same task* (controlled), bring higher-education tasks, and use Opus for higher-wage tasks. This is consistent with learning-by-doing, though cohort and survivorship effects aren't ruled out. It reverses Anthropic's earlier guess that sophisticated users would automate more.
- **Jun 2026 "Cadences":** 93% of conversations produce an identifiable artifact. **Apps, websites, games and presentations are the *highest-autonomy* outputs**, because they "require selection among many possible choices". Autonomy correlates with tokens (r = 0.68). Claude's response reads about 1.7 education-years above the prompt for apps and websites, and +2.6 for images and graphics. The user describes, and Claude fills in the rest of the judgment.

**Implications.** (i) Design-and-build requests are where the AI makes the most unrequested decisions, so surface those decisions (a "choices I made for you" list) instead of burying them in a polished output. (ii) Expert users iterate. One-shot delegation of design work is the novice pattern, not the advanced one. (iii) techne: default to augmentation on design judgment (propose 2–3 named directions and ask the user to choose). Automate only the mechanical parts: tokens, states, variants, copy permutations.

### 3.2 How AI impacts skill formation: RCT (Shen & Tamkin, Jan 2026) **[moderate]** (randomized, small n = 52, short-term)
- Developers learning a new library (Trio) with an AI sidebar scored **17% lower on an immediate mastery quiz** (50% vs 67%, d ≈ 0.74, p = 0.01). The biggest gap was in **debugging**. The speed gain was not significant: some participants spent up to 30% of their time writing queries.
- **The interaction pattern mattered more than whether AI was used.** Low scorers (< 40%): full delegation, progressive reliance, AI-as-debugger. High scorers (≥ 65%): *generation then comprehension* (asking follow-ups about generated code), *hybrid code + explanation*, and *conceptual inquiry only* (the fastest high scorers, who resolved their own errors).
- Anthropic's reading: cognitive effort, "even getting painfully stuck", is likely important for mastery. Learning modes exist for this reason.

**Implications.** (i) Learning-oriented AI features should default to explain-then-do and conceptual Q&A, not to producing the answer. (ii) Junior designers using AI to learn a craft (type, motion, code) should ask conceptual questions and attempt the work first. (iii) techne: when the user signals they want to learn ("teach me", "why"), switch to explain-first mode, give the principle and a check question, and let them make the move.

### 3.3 How AI is transforming work at Anthropic (Dec 2025) **[weak/anecdotal: self-report at an AI lab]**
- Self-reported: Claude used in about 60% of work, +50% productivity (2–3× the previous year). Gains come mostly from more output volume, and **27% of assisted work wouldn't have been done otherwise** (papercuts, nice-to-have tools, exploration). Most people can **"fully delegate" only 0–20%** of their work.
- **Delegation heuristics:** delegate what is easily verifiable, low-stakes or boring. A trust progression runs from simple tasks to complex ones. **"Design or taste tasks" are mostly kept**, although that boundary "is being renegotiated".
- Concerns: atrophy of the deep skills needed to *critique* AI output. Fewer mentorship interactions ("junior people don't come to me with questions as often"). Engineers run many Claudes in parallel to explore approaches ("a million horses").

**Implications.** (ii) A sensible delegation rule for designers: delegate by *verifiability × stakes × enjoyment*, and protect the craft you want to keep. Running parallel variants is a legitimate divergence tool, provided a human sets the criteria. (iii) techne: when it proposes delegation, say how the output will be verified.

### 3.4 Anthropic Interviewer: creatives (Dec 2025) **[weak/anecdotal: self-selected interviews]**
- 125 creatives (48% writers, 21% visual artists, plus designers, musicians and others): **97% said AI saves time, 68% said it raises quality**. 70% manage *peer stigma* and economic anxiety is pervasive.
- **All 125 want to stay in control, but the boundary is unstable:** "60% AI, 40% my ideas", or "the plugin has most of the control". **Designers showed the most frustration and notably low satisfaction** of all creative disciplines, and trust was low everywhere. A gamebook writer described "only the illusion of collaboration".

**Implications.** (i) Creative tools must make *authorship and control legible*: who decided what, with easy override. (ii) Designers' frustration is a signal that current tools often don't respect design intent. Brief and judge explicitly, and don't hand over the steering wheel. (iii) techne: always state which decisions it made and which it left to the designer. Never present AI-chosen taste as settled.

### 3.5 Agentic coding and returns to expertise (Jun 2026) **[moderate]**
- About 400k Claude Code sessions: **people make about 70% of the *planning* decisions (what, which approach, what counts as done) and Claude about 80% of the *execution* decisions**. Domain expertise, not coding skill, predicts success and recovery from misunderstandings. Arts, Design and Media is among the largest non-software occupation groups.
- Expertise was inferred from how precisely the user frames directions, what they ask to verify, and who corrects whom.

**Implications.** (ii) The designer's job with an agent is planning, definition of done, and correction. Domain (design) expertise is the multiplier. (iii) techne should help the user articulate "what" and "done" crisply (problem awareness) before generating anything.

### 3.6 Measuring agent autonomy (Feb 2026) **[moderate]**
Experienced Claude Code users auto-approve more (about 20% → over 40% of sessions) *and* interrupt more often. On complex tasks Claude **stops to ask for clarification more than twice as often as humans interrupt it**. Anthropic calls for new interaction paradigms in which human and AI manage autonomy together.
**Implication (i):** oversight grows up from step-approval into monitoring plus interruption, so design for interruptibility and agent-initiated questions, not only confirmation dialogs (→ `human-ai-trust-errors-uncertainty-oversight.md`).

### 3.7 Productivity and expectations (Nov 2025 – Oct 2026) **[weak/anecdotal for magnitudes]**
- Claude-estimated time savings of about 80% per task (100k conversations). These are model estimates that ignore work done outside the chat, so they likely overstate the effect.
- The 81k-user survey: people in more-exposed roles and early-career respondents worry more about displacement. Gains mostly come from *scope* (new tasks).
- Anthropic staff expect far faster progress than US adults (59% vs 26% report a ≥ 4× speedup on suited tasks).

**Implication:** treat speed claims (including your own team's) as self-report, and pair them with quality and rework measures. Compare METR's 2025 RCT, where developers felt faster but were slower (→ `human-ai-cocreation.md`).

---

## 4. Honesty, sycophancy and wellbeing

### 4.1 Towards understanding sycophancy (Sharma et al., 2023/ICLR 2024) **[strong]** (peer-reviewed, multiple models)
Five RLHF assistants consistently showed sycophancy. Humans *and* preference models preferred "convincingly-written sycophantic responses over correct ones a non-negligible fraction of the time". Optimizing against preference models can trade truth for agreement.
**Implications.** (i) Any AI feature tuned on thumbs-up or engagement will drift toward flattery, so guard satisfaction metrics with correctness evals. (ii) A designer asking "is this good?" will get inflated praise by default, so ask for the three biggest weaknesses instead. (iii) techne: praise must be specific and earned, and critique comes first when stakes are real.

### 4.2 Well-being and personal-guidance sycophancy (Dec 2025; Apr 2026) **[moderate]**
Sycophancy is defined as telling people "what they want to hear… rather than what is true and helpful", and sycophantic models "abandon correct positions under pressure". On real past conversations, models course-corrected from prior sycophancy only 10–37% of the time. Anthropic names a **warmth vs pushback trade-off**: strong pushback "can sometimes feel excessive". In personal guidance, 9% of guidance chats were sycophantic, rising to 25% in relationship guidance.
**Implication (iii):** pushback should be *calibrated, reasoned and kind*. Hold the position when no new argument arrives, update visibly when one does.

### 4.3 Claude's constitution (Jan 2026) **[normative: opinion]**
Relevant to designing AI features: be "diplomatically honest rather than dishonestly diplomatic". *Epistemic cowardice* (vague answers to placate people) violates honesty. Avoid sycophancy and "excessive engagement or reliance" that the person wouldn't endorse on reflection. Engagement should work "only in the way that a trusted friend" is engaging. Protect **epistemic autonomy**: balanced perspectives, fostering independent thinking, wariness about a "homogenization of views" from one AI talking to millions. Brainstorming and persuasive writing are *performative*, not lies. Never deny being an AI when sincerely asked.
**Implications.** (i) A ready-made ethics spec for AI features: no engagement loops, reliance only where the user would endorse it on reflection, disclosure. Pair it with the ethics gate (`psychology/behavior-ethics-dark-patterns.md`). (iii) techne already says "never deceive the user to move a metric". Add "never flatter the designer to keep the session pleasant".

### 4.4 discernment-nudge skill (anthropics/skills, Apache-2.0) **[weak/anecdotal: design pattern]**
After a substantive answer the user will act on, append 2–3 *specific* follow-up questions the user could ask, each tied to a concrete claim, assumption or missing context. At most once per conversation. Skip it for creative work, code the user will run, simple lookups, or when the user already asked for verification. The rationale it gives: people "take an AI answer at face value", especially when it's polished.
**Implications.** (i) This is a good, cheap discernment pattern for AI features: specific and one-shot, not a generic disclaimer. (iii) techne can use it at the end of recommendations (it already ends with a data loop). Add one line of "worth a second look" when a recommendation rests on an inferred assumption. Note the anti-nagging rules.

---

## 5. Building agents: engineering posts (all **[weak/anecdotal]** practice, often with internal evals)

- **Building effective agents (Dec 2024):** find "the simplest solution possible" and add complexity only when needed. Workflows (prompt chaining, routing, parallelization, orchestrator-workers, **evaluator-optimizer**) vs agents. Show the agent's planning steps transparently. Invest in the *agent-computer interface* (tool docs, mistake-proofing). → (i) Choose the least autonomous pattern that does the job. Evaluator-optimizer is the pattern behind design critique loops.
- **Effective context engineering (Sep 2025):** context is a finite "attention budget" (context rot), so find "the smallest possible set of high-signal tokens". Prompts at the "right altitude" (neither brittle logic nor vague platitudes). Just-in-time retrieval via file references. Compaction, structured note-taking, sub-agents. → (iii) techne's loading rule ("never load everything") is exactly this. (ii) A designer's design-context file should be short, high-signal and pointer-based.
- **Writing effective tools for agents (Sep 2025):** evaluate tools with real tasks. Namespace them. Return meaningful, token-efficient context. Prompt-engineer the tool descriptions, and use Claude to improve tools against evals. → (i) Treat your AI feature's tools as UX for the model.
- **Building agents with the Claude Agent SDK (Sep 2025):** the loop is *gather context → take action → verify work → repeat*. Verification by rules (lint, types), **visual feedback** (screenshot the render, check layout, hierarchy, responsiveness; Playwright for viewports) and LLM-as-judge. → (ii)/(iii) Never ship UI without a render-and-look step.
- **Code execution with MCP (Nov 2025):** present tools as files the agent discovers on demand. One example went from 150k to 2k tokens (−98.7%). → progressive disclosure again.
- **Long-running harnesses (Nov 2025) and Harness design for long-running apps (Mar 2026):** the second one matters most to designers.
  - **Self-evaluation is unreliable:** agents praise their own mediocre designs, and the problem is "particularly pronounced for subjective tasks like design".
  - **Separating the generator from a skeptical evaluator** is more tractable than making a generator self-critical.
  - **Design quality becomes gradable** with four criteria: *design quality* (a coherent whole with a distinct mood), *originality* (custom decisions, not templates or "AI slop"), *craft* (hierarchy, spacing, harmony, contrast), *functionality* (usability independent of aesthetics). Originality and design were weighted up because Claude passes craft and functionality by default. The evaluator was calibrated with few-shot scored examples, and drove a live page via Playwright over 5–15 iterations.
  - Observed effects: the *criteria wording itself* steered output ("museum quality" caused convergence). The author sometimes preferred a middle iteration over the last. Complexity creeps up over rounds. The generator decides each round whether to *refine or pivot*.
  - An out-of-the-box QA agent "talks itself" into approving bugs, and had to be tuned by reading its logs. A planner that keeps specs at the product level (not technical detail) avoided cascading errors. "Sprint contracts" agreed what done meant before building.
  - Every harness component encodes an assumption about what the model can't do, so re-test it when models improve.

  → (i)(ii)(iii) A model for design critique: explicit rubric, separate judge, screenshots of the live artifact, a refine-or-pivot decision, a human who keeps final taste authority and watches for convergence induced by the criteria. It also limits techne: its self-critique step (§1.5) is the weak form. Prefer a fresh-context reviewer or the user's eyes for subjective quality.
- **Multi-agent research system (Jun 2025):** an orchestrator with parallel subagents pays off on broad, parallelizable research at a much higher token cost. → Use it for inspiration and competitive scans, not for every task.
- **Demystifying evals for AI agents (Jan 2026):** start with **20–50 tasks drawn from real failures**. A good task is one where "two domain experts would independently reach the same pass/fail verdict". Mix code, model and human graders, and calibrate model graders against humans. Separate capability evals from regression evals. Use **pass@k** (one success is enough) vs **pass^k** (consistency, e.g. 0.75³ ≈ 42%). **Read the transcripts.** → (i) feeds `modes/ai-feature.md` step 7. (iii) techne needs its own eval set (see the audit).

---

## 6. Skills: format, authoring, evaluation

- **Equipping agents with Agent Skills (Oct 2025) + overview doc:** three levels of progressive disclosure. *Metadata* (name + description, always loaded) → *SKILL.md body* (loaded when relevant) → *bundled files and scripts* (read or run on demand, effectively unbounded). Scripts can run without entering context.
- **Skill authoring best practices (live doc):** "Claude is already very smart", so add only what it lacks. Match degrees of freedom to fragility. Description in third person, with *what* and *when*, at most 1,024 characters. Body under 500 lines. **References one level deep from SKILL.md.** A table of contents for reference files over 100 lines. Checklists for multi-step workflows. Validator → fix → repeat loops. No time-sensitive text outside an "old patterns" section. Consistent terminology. One default plus an escape hatch rather than many options. Scripts that solve rather than defer, with justified constants and a clear run-or-read intent. **Build evaluations first** (at least three scenarios, with a baseline without the skill). Test on Haiku, Sonnet and Opus. Develop with "Claude A" (author) and "Claude B" (fresh user), and watch how B navigates.
- **agentskills.io:** the open standard (the anthropics/skills spec file now points there). Frontmatter keys: name, description, license, allowed-tools, metadata, compatibility.
- **skill-creator (Apache-2.0):** an eval loop of with-skill vs baseline runs in parallel, assertions for objective checks only, *qualitative human review for subjective skills such as design*, a benchmark (pass rate, time, tokens, ±sd), and blind A/B comparison. It also offers description optimization with 20 trigger queries (half should-trigger and half *near-miss* should-not-trigger), a 60/40 train/test split and 3 runs each. It notes that Claude tends to *under*-trigger skills, so descriptions should be slightly "pushy". Style guidance: explain the why and avoid all-caps MUSTs.

→ The audit of techne against all of this: `anthropic-skill-audit.md`.

---

## 7. Anthropic's pre-made design skills: a short critical note

techne does **not** adopt or mirror these. Read them as one vendor's taste priors with known failure modes.

**What they get right.**
- They name the real failure, *distributional convergence*. Unsteered models sample "the high-probability center" (Inter, purple-on-white gradients, identical rounded cards).
- They ground the design in the subject's own world. They plan, then review the plan against the brief ("would I arrive here for any similar prompt?"), then build.
- One memorable element with everything else quiet. Structure only where the content has structure (numbered markers only for real sequences).
- Motion that answers user actions. A quality floor (responsive, focus, reduced motion, contrast). Screenshot-based self-critique.
- Strong UX-writing rules: the same verb from button to toast, errors that explain the fix.

**What they get wrong or overstate.**
1. **Novelty as a goal.** "Surprise and delight", "think outside the box" and "vary between light and dark" optimize for *difference between generations*, not for the user's job. On functional surfaces techne's rule stands: be conventional, spend novelty where the product wins (Loewy). Originality is one criterion, never the objective.
2. **Banned-font lists conflict with evidence.** The cookbook says "never use Inter, Roboto…", while `visual/typography.md` lists Inter and Roboto among the most legible UI faces. Avoid a typeface only when it is a *default no one chose*, never when it is the right choice for the reading load.
3. **Extreme type contrasts** ("100/200 vs 800/900 weights", "3x+ size jumps") put thin weights at risk on low-DPI screens, at small sizes and against WCAG 1.4.3 contrast. Use extremes in display type only.
4. **The "one orchestrated page load with staggered reveals" advice** must respect reduced motion, CLS ≤ 0.1 and LCP ≤ 2.5 s, and the stagger caps in `interaction/microinteractions-and-motion.md`.
5. **Atmospheric layered backgrounds** threaten text contrast and forced-colors mode (`interaction/accessibility.md`).
6. **Self-referential tells.** The newest frontend-design skill lists "AI-look" clusters, including Anthropic's own cream-and-terracotta palette. Useful as a calibration list, but anti-cliché lists go stale and create the *next* cliché (the harness post shows criteria wording inducing convergence).
7. **canvas-design and algorithmic-art** repeat "museum quality, countless hours" phrasing. That is prompt-level persuasion of the model, not design guidance, and it produces exactly the convergence the harness post observed.
8. **theme-factory** offers fixed palettes with a contrast check left to the end. **brand-guidelines** is Anthropic's own brand, so don't use it for users' work. **web-artifacts-builder** is a single-line anti-slop rule plus tooling.
9. None of them measures anything. Distinctiveness is judged by the model or by the author's eye, which makes it **[weak/anecdotal]** as evidence of better products.

Take the *methods* (subject-grounded planning, plan review against the brief, rubric plus a separate evaluator, screenshot loops), not the taste.

---

## 8. Synthesis

### (i) Designing AI features and agents
- Choose the least autonomous pattern that works. Make the autonomy level an explicit, user-visible choice. Design for interruption and for agent-initiated questions (§3.6, §5).
- Build the 4Ds into the UI: scoping, structured briefs with examples and roles, provenance and reasoning on demand, disclosure and an ownership step (§2.1).
- Counter the *polished-output trap*: for generated artifacts, show the decisions the AI made, the unverified assumptions and the missing states (§2.2, §3.1).
- Guard satisfaction metrics against sycophancy with correctness and pass^k evals. No engagement loops (§4, §5).
- Learning contexts default to explain-first, conceptual help (§3.2).
- Authorship must stay legible in creative tools (§3.4).

### (ii) The AI-augmented design workflow
- The human owns *what and done* (planning, criteria, final taste). The AI does breadth and execution (§3.5).
- Brief with product, process and performance description, the why, and diverse references (§2.1, §2.3).
- Iterate: experts iterate, novices one-shot (§3.1). Course-correct early. After two failed corrections, rewrite the brief (§2.4).
- Verify visually and behaviorally. Don't trust AI self-evaluation of taste. Use a separate judge with a rubric, and use your own eyes (§5).
- Protect the skills you need for oversight and the craft you value (§3.2, §3.3).

### (iii) How techne itself should behave
- Ask for, or infer and state, the problem and the definition of done before generating anything. Default to augmentation on judgment and automation on mechanics.
- Disagree with reasons, tags and kindness. Hold the position under social pressure. Update visibly on new evidence. Give specific praise only.
- After any artifact, list the decisions it made for the user and what is unverified. Ask at most once, specifically.
- Close the loop: render, screenshot and compare for UI. Prefer a fresh-context critique or the user's judgment over self-grading on taste.
- Teach when the user wants to learn. Let them do the move.

---

## 9. Licenses

- **anthropics/skills:** frontend-design, canvas-design, theme-factory, brand-guidelines, web-artifacts-builder, algorithmic-art, slack-gif-creator, skill-creator, discernment-nudge, academy-guide, mcp-builder, webapp-testing, internal-comms and claude-api each ship an **Apache-2.0** LICENSE.txt. doc-coauthoring ships none, so treat it as all rights reserved. **docx / pdf / pptx / xlsx are proprietary, source-available** ("© 2025 Anthropic… may not… Create derivative works"): never copy or adapt them. canvas-fonts are under **OFL**.
- **claude-cookbooks:** MIT.
- **AI Fluency Framework and course materials:** **CC BY-NC-SA 4.0** (Dakan, Feller, Anthropic). Attribution, non-commercial, share-alike. techne paraphrases the sub-competency names (facts and vocabulary) and doesn't reproduce course text.
- **anthropic.com research, engineering and docs pages:** standard copyright. This file paraphrases them, with quotes under 25 words.
