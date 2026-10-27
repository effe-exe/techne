# The AI-Reshaped Design Workflow: What to Delegate, What to Keep, and the Loop techne Runs

> **Use this when:** planning how a designer or design team should work with AI tools (Claude Code, Cursor, v0, Figma Make, Claude Design, AI research tools), deciding what to hand to AI vs keep human, or running the AI-augmented design loop on a real task.
> **Also use when:** someone proposes synthetic users instead of research, "let AI generate 50 options and pick one", "designers don't need to code / designers must all code now", or asks how the designer's role and team shape change by 2030.
> **Skip when:** you are designing an AI *feature* for end users → `ai-patterns-interaction-pattern-library.md`; measuring one → `ai-workflow-metrics-and-evals.md`; making the design system machine-readable or designing for agents as users → `ai-workflow-design-systems-and-agents-as-users.md`.

---

## 0. Point of view

1. **AI made making cheap, so judgment is what's scarce now.** Generating a screen, a prototype or a synthesis now costs minutes. Knowing which problem to solve, which variant is right and whether it is ethical still costs expertise, and that is where a designer's value moves.
2. **The human constants don't move.** Users still have ~4-chunk working memory, a fixation budget, motor limits, habits, emotions and social context (`psychology/`). AI speeds up *our* workflow; it doesn't change *their* minds. Every AI-produced artifact gets judged against the same human-constant checklist as a hand-made one.
3. **Faster isn't the same as better, and feeling faster isn't the same as being faster.** In METR's 2025 RCT (n=16 experienced developers, 246 real tasks), people were ~19% slower with AI while believing they were ~20% faster [moderate]. METR's Feb 2026 follow-up shows a speed-up but calls the data "very weak evidence" because developers increasingly refused to work without AI [weak]. Measure your own loop; don't trust the feeling.
4. **AI raises the floor and compresses the spread.** It helps novices most and experts least: +15% resolutions/hour on average in customer support, largest for less experienced agents (Brynjolfsson, Li & Raymond, QJE 2025) [strong]; in BCG's 758-consultant experiment, quality rose on tasks inside the "jagged frontier" and fell on a task just outside it (Dell'Acqua et al. 2023) [strong]. Expect AI output to land at "competent median". Your job is the part above the median.
5. **AI homogenizes unless you design against it.** AI ideas made individual stories rate more creative but made the set of stories more similar to each other (Doshi & Hauser, Science Advances 2024) [strong]. Showing AI images during ideation increased fixation and cut the number, variety and originality of ideas (Wadinambiarachchi et al., CHI 2024, n=60) [moderate]. Divergence is a skill you protect, not one you outsource.

---

## 1. State of practice, separated by confidence

### (a) Established (2024–2026, multiple sources)
- **Adoption is near-universal and trust is low.** DORA 2025: ~90% of ~5,000 tech professionals use AI, and ~30% have little or no trust in its code [moderate: self-selected survey]. Stack Overflow 2025 (49k respondents): 46% distrust AI accuracy, up from 31% in 2024 [moderate]. Figma's 2025 AI report (2,500 builders, Jan 2025): designers were less satisfied than developers (69% vs 83%) and less likely to say it improves quality (54% vs 67%) [moderate: vendor survey].
- **AI amplifies the system it lands in.** DORA 2025's core finding: strong teams get faster, weak teams get their problems amplified. Gains come from platform quality, clear workflows and alignment [moderate].
- **Design→code collapse is real for prototypes.** Prompt-to-app tools (v0, Lovable, Bolt, Figma Make, which went GA in July 2025, and Claude Design, research preview April 2026) and coding agents (Claude Code, Cursor) let designers ship working prototypes and small production changes. Anthropic's own Product Design team feeds Figma files to Claude Code, runs loops where it writes code and tests and iterates, and maps error states and logic flows during design to catch edge cases early (Anthropic, Jul 2025) [weak/anecdotal: one company].
- **Generated code quality depends on the substrate.** Figma's MCP docs: Code Connect is "the best way to get consistent component reuse"; without it the model guesses [moderate: vendor docs, consistent practitioner reports] → `ai-workflow-design-systems-and-agents-as-users.md`.

### (b) Emerging (shipping, with thin evidence)
- Agents on the canvas: at Config 2026 Figma reported a Figma agent in open beta, generative plugins, agent skills and "Code Layers" (code on the canvas, waitlisted) [weak: launch coverage; check current status].
- Designers as the "last mile" of front-end polish: designers editing tokens, copy, spacing and states directly in the codebase via agents, with engineers reviewing the PR.
- AI-moderated interviews and AI-assisted synthesis at scale (dozens of interviews coded in hours).
- Generalists coming back: NN/g's State of UX 2026 says entry-level roles are scarce, generalists recover faster, and "just assembling components from a design system" is replaceable [moderate: expert synthesis].

### (c) Informed speculation (2030)
- **The deliverable changes from a picture to a running, instrumented artifact.** Most designs that matter will exist as code-backed prototypes connected to real data and a token system, not as static frames [speculative; follows from (a)].
- **Design systems become the main design surface.** Designers spend more time writing rules, constraints, tokens, usage docs and eval rubrics that AI generation obeys, and less time drawing screens one by one [speculative].
- **The designer works as an editor-in-chief of agents.** Briefing, constraining, critiquing and selecting become the core loop. Problem framing, research with real humans, ethics and stakeholder alignment stay human [speculative; consistent with the jagged frontier].
- **Two users per product: humans and their agents** → `ai-workflow-design-systems-and-agents-as-users.md`.
- What will *not* change by 2030: working memory, attention, Fitts, reading speed, habit formation, the peak-end rule, the need for control and recourse. Bet on those.

---

## 2. Delegate vs keep: the decision table

The rule: **delegate production and breadth; keep framing, judgment and accountability.** Delegate a task when its output is cheap to verify and the cost of a wrong output is low.

| Activity | AI does | Human keeps | Why [evidence] |
|---|---|---|---|
| Problem framing, choosing *what* to solve | Draft problem statements, surface analytics anomalies | Decide the problem, the bet, the success metric | Framing needs context, politics and values; AI output lands at the median [moderate] |
| Desk research, competitive scan | Gather, summarize, tabulate | Verify sources, judge relevance | Hallucinated citations are common; check every link [strong] |
| Interview/test moderation | Transcription, note-taking; AI-moderated for scale screeners | Live moderation of generative interviews, follow-ups on emotion | Rapport and probing are human; AI moderation is emerging [weak] |
| Research synthesis | First-pass coding, clustering, quote retrieval, deductive codes | Inductive themes, "so what", contradictions, prioritization | LLM deductive codes match humans; humans give richer inductive themes (2025 comparative study, arXiv 2507.08002) [moderate] |
| Synthetic users / digital twins | Pilot a discussion guide; stress-test a survey; generate hypotheses | All decisions about real behavior | See §3 [strong that they don't substitute] |
| Ideation | Breadth: 20–50 variants after your own sketches | The first sketches; selection; the one strong idea | Fixation and homogenization (Wadinambiarachchi 2024; Doshi & Hauser 2024) |
| Visual production | Layout variants, asset generation, states, responsive variants, dark mode | Art direction, hierarchy decisions, taste calls | AI defaults to generic; taste is selection |
| Copy | Variants, tone translations, localization drafts | Truth, voice, legal/ethical claims | Copy is a promise to users |
| Prototyping in code | Most of the code | Interaction feel, states, edge cases, accessibility review | Running prototypes answer questions statics can't |
| Design system upkeep | Token audits, docs, Code Connect suggestions, lint fixes | Naming, governance, what enters the system | The system is the contract AI generates from |
| Accessibility | Automated checks, contrast fixes, alt-text drafts | Screen-reader walk-throughs, cognitive load, final call | Automated tools catch only a part of WCAG issues [strong] |
| Ethics review | Flag patterns resembling dark patterns | The decision; the ethics gate in SKILL.md §3 | Accountability can't be delegated |
| Stakeholder alignment | Draft memos, decks, summaries | The conversation, trade-offs, trust | Organizational trust is human |
| Analysis of experiments | Run the stats script, draft readouts | Trust checks, decision, interpretation | Twyman's law; storytelling risk |

**When-not to delegate even production:** regulated copy (finance, health, legal), anything shown to vulnerable users without review, irreversible one-way-door decisions, and any artifact you can't verify in less time than it takes to make.

---

## 3. AI in research: accelerate synthesis, never replace people

### What works [moderate]
- Transcription, translation, tagging, timestamps and quote retrieval: near-free and good.
- First-pass deductive coding against your codebook: in a 2025 comparison, GPT-4o's deductive parent codes were comparable to human coders, while humans produced richer inductive child codes and theme synthesis (arXiv 2507.08002).
- Asking "show me every quote where users mention X": a retrieval task, verifiable by clicking through.

### What fails
- **Hallucinated findings and shallow summaries.** NN/g's tool testing found modest speed gains for experienced researchers, but tools hallucinated findings and missed meaningful patterns [moderate: practitioner evaluation].
- **Synthetic users don't substitute for real ones.** [strong, converging evidence]
  - NN/g re-ran three of its own studies with AI-simulated participants. Synthetic users were too shallow, praised every concept and reported finishing every course, while real learners drop out (NN/g, 2024–2025). Interview-based digital twins did better than generic synthetic users at population-level trends.
  - The digital-twin mega-study (Peng, Gui, Toubia et al., arXiv 2509.19088, 2025): 19 pre-registered studies, 164 outcomes, twins built from 500+ answers per person. Average correlation with the real person's answers was ~0.20, barely better than the base LLM. The authors name five distortions: stereotyping, insufficient individuation, representation bias, ideological bias and hyper-rationality. Twins were more accurate for educated, higher-income, moderate people, so they fail most for the users who most need design attention.
  - Variance gets compressed: synthetic respondents are less varied than people (NIM 2025; Peng et al. 2025). Design lives in the tails (edge cases, accessibility needs, outliers), so compressed variance is the worst failure for design.
- **Survey simulation is prompt-sensitive:** answers shift with option order and labeling (summarized in Twin-2K-500, arXiv 2505.17479).

### Rules
1. Use synthetic participants only to **pilot instruments** (catch confusing questions, timing) and to **generate hypotheses** you then test with people. Never report a synthetic finding as user evidence.
2. Every AI-generated insight must link to its raw quote or clip. No link, no claim.
3. Keep a human-coded sample (≥ 10–20% of sessions) and compare it against the AI coding before trusting the rest.
4. Spend the time AI saves on **more contact with real users**, not fewer studies. NN/g's 2026 framing: deep user understanding becomes *more* important when building is cheap.
5. Get consent for AI processing of participant data. Strip PII before sending transcripts to third-party models.

---

## 4. AI for exploration: when variants are free, selection is the skill

Pre-AI evidence still holds: designers who prototype several options in parallel produce better and more diverse results than those who iterate serially on one (Dow et al., ACM TOCHI 2010) [strong]. AI makes parallel cheap, but it adds a fixation risk.

**Protocol (use on any L2+ task):**
1. **Human first, briefly.** Write the one-sentence idea and sketch 3 directions yourself *before* prompting. This guards against fixation (Wadinambiarachchi 2024).
2. **Brief with constraints, not adjectives.** Give the job, user, constraints, tokens and component set, and what must not change. "Modern and clean" produces the median.
3. **Diverge on purpose.** Ask for variants along named axes (density, hierarchy model, navigation model, tone), not "10 versions". Push for one deliberately extreme variant per axis.
4. **Cull fast with criteria written beforehand:** does it serve the job, does it fit the human constants (one focal point, ≤ ~4 chunks, conventional where functional), and is it buildable with the system? Cut to 2–3 named directions (SKILL.md §2).
5. **Check for homogenization:** do the survivors look like every other AI output and every competitor? If yes, push the brand's "most advanced yet acceptable" edge (Loewy).
6. **Critique with evidence**, not vibes: `modes/critique.md`, plus references.

**Anti-patterns:** picking the prettiest of 50 (beauty bias, `psychology/`); showing stakeholders 12 options (choice paralysis, no point of view); letting the tool's default style become the brand; iterating prompts instead of rethinking the problem.

---

## 5. The AI-augmented design loop (techne follows this)

Each step has an exit criterion, so speed doesn't skip judgment.

| # | Step | AI does | Human/techne judgment | Exit criterion |
|---|---|---|---|---|
| 1 | **Brief** | Draft from inputs, pull analytics/research | One-line frame: who · situation · struggle · evidence · metric · riskiest assumption (SKILL.md §1) | Frame stated, assumptions explicit |
| 2 | **Ground** | Retrieve relevant references, existing system, prior tests | Pick the 1–3 references; list the binding human constants | Constraints list exists |
| 3 | **Explore N** | Generate variants along named axes (§4) | Human sketches first; diversity check | ≥ 3 genuinely different directions |
| 4 | **Critique with evidence** | Run heuristics, a11y checks, state matrix; red-team for dark patterns | Severity ranking, the ethics gate, taste call; cut to 2–3 | Each survivor has reasons + evidence tags |
| 5 | **Prototype in code** | Build with real tokens/components (Code Connect, MCP), all states | Interaction feel, edge cases, screen reader, reduced motion | Runs; screenshot; states covered |
| 6 | **Instrument** | Add events, eval hooks, feature flags | Pick primary metric + guardrail; pre-register (`modes/experiment.md`) | Metric spec + logging verified |
| 7 | **Test** | Recruit/schedule support, synthesis first pass | Real users (usability) → staged rollout/A/B; read results | Decision: ship / iterate / kill, written |
| 8 | **Learn** | Summarize; update library and system docs | What did we learn about *people*? Update the references | Learning recorded; system updated |

Loop sizes: an L0 tweak runs 1→4→5 in minutes. L1–L2 runs the full loop with usability testing at step 7. L3–L4 runs it repeatedly, with discovery (real research) before step 3.

**Time reallocation rule:** when AI saves time on steps 3 and 5, reinvest it in steps 1, 4 and 7, where the evidence is. A loop that gets faster only at making things just ships unvalidated work faster.

---

## 6. Team shape and the designer's career (2026 → 2030)

**What's happening [moderate]:** fewer pure production roles; generalists and design engineers in demand; entry-level roles scarce (NN/g State of UX 2026); designers expected to prototype in code and to understand AI feature design (UX Design Institute 2026 role list includes AI UX designer and conversation designer).

**Skills that rise in value** (ranked by how slowly AI erodes them):
1. **Problem framing and research with real humans.** Knowing the user is the moat.
2. **Taste and editing:** selecting, cutting, and keeping one strong idea. That is what "taste proposes, evidence decides" means in practice.
3. **Systems thinking:** tokens, components, rules and constraints that machines can follow (the design system as a spec for generation).
4. **Evaluation literacy:** writing rubrics, reading experiments, defining what "good" means for a non-deterministic output (`ai-workflow-metrics-and-evals.md`).
5. **Code fluency, enough to prototype and review**: read a diff, run the app, fix a token, judge an agent's PR. You don't need to be an engineer.
6. **AI interaction design:** autonomy, trust calibration, failure states, delegation (`ai-patterns-*`, `human-ai-trust-*`).
7. **Ethics and persuasion literacy:** AI personalization makes manipulation cheaper, so the ethics gate becomes a career skill.
8. **Stakeholder alignment and storytelling.** Organizations still decide through people.

**Skills that fall in value:** pixel production without judgment, redlines and specs nobody reads, static mockups as the final artifact, generic UI kit assembly.

**Team patterns:**
- *Pod with a design engineer:* designer + design engineer + PM + 1–2 engineers + agents. The designer ships front-end polish PRs. Use it when the product is UI-heavy and the codebase has a clean system. Avoid it when there's no review culture, because unreviewed designer PRs create debt.
- *System team as platform:* a small team owns tokens, components, docs, MCP/Code Connect and eval rubrics, and everyone else generates on top. Use it at scale (many teams, one brand).
- *Research as a shared service with AI-assisted ops:* researchers spend time with users and on framing; AI does ops and first-pass synthesis.

**Deskilling guardrail:** keep one "no-AI" exercise per month (sketch, critique, synthesis by hand) and occasionally compare AI-off vs AI-on quality. Skill decay with automation is well documented (`human-ai-trust-trust-and-reliance.md`).

---

## 7. Anti-patterns

- **Synthetic users as evidence.** "We tested it with 500 AI personas." That's a hypothesis, not a finding.
- **Feeling-based ROI.** "AI makes us 3× faster", self-reported. Measure logged time to an *accepted* outcome, including rework (METR lesson).
- **Prompting without a system.** Generating UI with no tokens, components or rules produces drift and one-off values that the system then has to absorb.
- **The 50-variant buffet.** Volume instead of axes; selecting on prettiness; no criteria written in advance.
- **Shipping the prototype.** Prompt-to-app code merged without engineering review, accessibility review or states.
- **Skipping step 1.** Faster making makes a wrong problem frame more expensive, not less.
- **AI-washed critique.** Asking the model "is this good?" and treating sycophantic praise as review. Ask for the three worst problems, with evidence.
- **Homogenized brand.** Every screen looks like the tool's default look.
- **Confidential leakage.** Pasting employer screens, data or participant PII into tools without approval (SKILL.md §6 privacy).

---

## 8. Checklist (run when planning AI into a design workflow)

- [ ] For each delegated step: is the output cheaper to verify than to make? Is a wrong output low-cost?
- [ ] Problem framing, final selection, ethics and stakeholder decisions are owned by a named human.
- [ ] Human sketches/directions exist before AI ideation starts.
- [ ] Variants explore named axes; selection criteria were written before generating.
- [ ] The design system (tokens, components, usage rules) is connected to generation (MCP / Code Connect / rules file).
- [ ] Every research insight links to a raw quote/clip; ≥ 10–20% human-coded calibration sample.
- [ ] No synthetic-user result is presented as user evidence.
- [ ] Prototype runs with real tokens, all states and an a11y pass.
- [ ] Metrics and guardrails are pre-registered; logged time (not felt time) is tracked for the workflow itself.
- [ ] Data and consent rules followed for any third-party AI processing.

## 9. Measuring the workflow itself

- **Cycle time** from brief to validated decision (not to first mockup).
- **Validated learning per cycle:** decisions made on real-user evidence per month.
- **Rework rate:** design or code redone within 2 weeks because of a missed state or edge case.
- **Defects found downstream:** a11y bugs, missing states, token violations per release.
- **Diversity of explored directions** (do concepts still differ on core axes?).
- **Logged vs felt time** on a sample of tasks, quarterly.

---

## Sources

- METR (2025). *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.* https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ [moderate]
- METR (2026, Feb 24). *We are Changing our Developer Productivity Experiment Design.* https://metr.org/blog/2026-02-24-uplift-update/ [weak]
- Brynjolfsson, E., Li, D., Raymond, L. (2025). *Generative AI at Work.* QJE (NBER w31161). https://www.nber.org/papers/w31161 [strong]
- Dell'Acqua, F. et al. (2023). *Navigating the Jagged Technological Frontier.* HBS WP 24-013 (Organization Science). [strong]
- Doshi, A. R., Hauser, O. P. (2024). *Generative AI enhances individual creativity but reduces the collective diversity of novel content.* Science Advances 10, eadn5290. https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532 [strong]
- Wadinambiarachchi, S. et al. (2024). *The Effects of Generative AI on Design Fixation and Divergent Thinking.* CHI 2024. https://arxiv.org/abs/2403.11164 [moderate]
- Dow, S. et al. (2010). *Parallel Prototyping Leads to Better Design Results, More Divergence, and Increased Self-Efficacy.* ACM TOCHI. [strong]
- Peng, T., Gui, G., Toubia, O. et al. (2025). *A Mega-Study of Digital Twins Reveals Strengths, Weaknesses and Opportunities for Further Improvement* / *Digital Twins as Funhouse Mirrors: Five Key Distortions.* arXiv 2509.19088. https://arxiv.org/abs/2509.19088 [strong]
- Toubia, O. et al. (2025). *Twin-2K-500 dataset.* arXiv 2505.17479. https://arxiv.org/abs/2505.17479 [moderate]
- NN/g (2025). *Evaluating AI-Simulated Behavior: Insights from Three Studies on Digital Twins and Synthetic Users.* https://www.nngroup.com/articles/ai-simulations-studies/ ; *Digital Twins: Simulating Humans with Generative AI.* https://www.nngroup.com/articles/digital-twins/ [moderate]
- NN/g (2026). *State of UX 2026.* https://www.nngroup.com/articles/state-of-ux-2026/ [moderate]
- *Human vs. LLM-Based Thematic Analysis for Digital Mental Health Research* (2025). arXiv 2507.08002. https://arxiv.org/abs/2507.08002 [moderate: proof of concept]
- DORA / Google Cloud (2025). *State of AI-assisted Software Development.* https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report [moderate]
- Stack Overflow (2025). *Developer Survey 2025: AI.* https://survey.stackoverflow.co/2025/ai [moderate]
- Figma (2025). *Figma 2025 AI Report.* https://www.figma.com/reports/ai-2025/ [moderate: vendor]
- Figma (2025). *Config 2025 recap* (Figma Make). https://www.figma.com/blog/config-2025-recap/ ; Figma MCP server docs. https://developers.figma.com/docs/figma-mcp-server/ [moderate]
- Anthropic (2025, Jul 24). *How Anthropic teams use Claude Code.* https://claude.com/blog/how-anthropic-teams-use-claude-code [weak/anecdotal]
- Anthropic (2026, Apr 17). *Introducing Claude Design by Anthropic Labs.* https://www.anthropic.com/news/claude-design-anthropic-labs [vendor; product facts only]
