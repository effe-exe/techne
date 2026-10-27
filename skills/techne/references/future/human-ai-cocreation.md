# Human–AI Co-Creation in Product Design: A Collaboration Protocol

> **Use this when:** a designer (or techne itself) is working *with* an AI on design work: framing, research synthesis, ideation, directions, critique, prototyping, copy. Or when deciding what to delegate, how to brief the AI, how to hand it taste and references, when to keep thinking human-only, and how the AI should push back.
> **Also use when:** someone says "just have the AI generate 50 options", "AI says it looks great", "the AI mock is done, ship it", or worries that AI is making the team's work look the same or making juniors worse.
> **Skip when:** designing an AI *feature* for end users → `ai-patterns-interaction-pattern-library.md`, `human-ai-trust-trust-and-reliance.md`, `human-ai-trust-errors-uncertainty-oversight.md`. For Anthropic source details → `anthropic-resources.md`.

Evidence tags: **[strong]** replicated / large-sample / meta-analysis · **[moderate]** · **[weak/anecdotal]** · **[contested]** · **[speculative]**. Most co-creation studies are recent, short-term and lab- or single-firm-based. Treat effects as *direction and mechanism*, not as stable magnitudes. Status: Oct 2026.

## Contents
1. The protocol in ten lines
2. What the evidence says (and doesn't)
3. Division of labor: who frames, who explores, who judges
4. The 4Ds applied to design
5. Briefing: the design brief for an AI, and how to hand over taste
6. Diverging without fixating or homogenizing
7. Iteration and critique loops
8. Pushback, not sycophancy
9. Verification habits
10. Keeping the designer skilled
11. Anti-patterns
12. How techne behaves as a collaborator

---

## 1. The protocol in ten lines

1. **The human owns *what* and *done*; the AI owns breadth and execution.** People make about 70% of planning decisions and AI about 80% of execution decisions in successful agentic work, and domain expertise is the multiplier [moderate].
2. **Frame before you prompt.** Write the job, the metric, the constraint and the definition of done yourself (problem awareness). AI output is only as good as the problem statement.
3. **Think first, then prompt** on novel problems: a short human-only ideation burst *before* seeing AI output. AI examples cause fixation and group-level sameness [moderate].
4. **Brief with three descriptions:** the *product* (deliverable), the *process* (how to approach it) and the *performance* (how to behave: "critical, push back, ask before inventing").
5. **Hand over taste as properties, not pictures:** for each reference, the one quality to take and what to leave behind, plus anti-references.
6. **Iterate, don't one-shot.** Experienced users iterate more and succeed more often [moderate]. Treat the first output as a probe.
7. **Separate making from judging.** AI self-evaluation of design is lenient. Use explicit criteria, a separate reviewer (a fresh AI context and/or a human) and screenshots of the real artifact [weak/anecdotal, but consistent].
8. **Distrust polish.** People check *less* exactly when AI output looks finished [moderate]. The prettier the mock, the harder the questions.
9. **Demand pushback.** Models drift toward agreement [strong]. Tell the AI to disagree with evidence, and reward it when it does.
10. **Own the result (diligence).** Disclose AI's role where it matters, verify before shipping, and protect the craft skills you need in order to judge AI work.

---

## 2. What the evidence says (and doesn't)

### 2.1 Performance: when human+AI helps

| Finding | Source | Tag | Design implication |
|---|---|---|---|
| A **jagged frontier**: inside AI's capability frontier, consultants did 12.2% more tasks, 25.1% faster, at >40% higher quality, with the biggest lift for weaker performers. On a task *outside* the frontier, AI users were 19 pp *less* likely to be correct. | Dell'Acqua et al. 2023, BCG field experiment, n = 758 | [moderate→strong] (one firm, large RCT) | Know which design tasks are inside the frontier (production, variants, copy permutations, states) and which are outside (novel product judgment, the "why" behind data). Over-trust outside the frontier is the main risk. |
| Two successful styles: **centaurs** (divide the work, hand off whole sub-tasks) and **cyborgs** (interleave continuously). | same | [moderate] | Both work. Pick one per phase on purpose: centaur for production, cyborg for exploration. |
| On average human+AI combinations did **worse than the best of human or AI alone**, but did **better on creation tasks** than on decision tasks, and better when the human alone outperformed the AI. | Vaccaro, Almaatouq & Malone 2024, meta-analysis of 106 experiments | [strong] (publication-bias caveat) | Co-creation suits making things. For *decisions* (which direction wins, is this accessible) prefer explicit criteria and data over "human glances at AI suggestion". |
| ChatGPT cut writing time by about 40% and raised quality by about 18%, compressing gaps between workers. | Noy & Zhang 2023, *Science*, n = 453 | [strong] | Routine writing artifacts (specs, UX copy drafts, readouts) are safe to accelerate, as long as they're reviewed. |
| Customer-support AI raised productivity by about 14% overall and about 34% for novices, with little effect for top performers. | Brynjolfsson, Li & Raymond 2025, *QJE*, n ≈ 5,000 | [strong] | AI spreads experts' tacit knowledge. Juniors gain most and are also most exposed to deskilling (§10). |
| Individuals with AI matched the quality of *teams without AI*, and AI broke functional silos. | Dell'Acqua et al. 2025, "Cybernetic Teammate", P&G, n = 776 | [moderate] (working paper) | AI can stand in for a missing perspective (engineering, marketing) in early concepting. It doesn't stand in for the user. |
| Experienced developers were **19% slower** with AI on their own repos, yet *believed* they were about 20% faster. | METR 2025 RCT, n = 16 devs / 246 tasks | [moderate] | Self-reported AI speedups (including your own) aren't evidence. Measure cycle time and rework. |
| Experienced Claude users iterate more, delegate less, and are about 3–4 pp more successful within the same task. | Anthropic Economic Index, Mar 2026 | [moderate] (observational) | Iteration is the expert pattern. |
| Domain experts direct coding agents more successfully and recover from misunderstandings faster. Coding skill matters less. | Anthropic, Claude Code expertise, Jun 2026, ~400k sessions | [moderate] | Design expertise transfers directly into better agent direction. |

### 2.2 Creativity: individual lift, collective sameness

| Finding | Source | Tag |
|---|---|---|
| Access to AI story ideas made individual stories more creative and better written (mostly for less-creative writers), but **the stories became more similar to each other**, reducing collective novelty. | Doshi & Hauser 2024, *Science Advances* | [moderate] |
| ChatGPT-assisted brainstorming produced **narrower idea sets** (diversity drop significant in 37 of 45 comparisons). In one task, nine people independently produced the same product name. | Meincke, Nave & Terwiesch 2025, *Nature Human Behaviour* | [moderate→strong] |
| LLM-assisted ideation was **less semantically distinct at group level**, and users felt less ownership of their ideas. | Anderson, Shah & Kreminski 2024, C&C | [moderate] |
| Designers using an AI image generator during ideation showed **more fixation, fewer ideas, less variety and lower originality** than a baseline. | Wadinambiarachchi et al. 2024, CHI, n = 60 | [moderate] |
| Showing designers an example makes them reproduce its features, flaws included (**design fixation**). | Jansson & Smith 1991, and many replications | [strong] |
| Unsteered models sample "the high-probability center" of design (distributional convergence). The wording of a design rubric itself made outputs converge. | Anthropic, frontend-skills post Nov 2025 and harness post Mar 2026 | [weak/anecdotal] |
| Model output on design and build tasks carries the most *unrequested* decisions (the highest-autonomy artifacts), and the response reads above the prompt. | Anthropic Economic Index, Jun 2026 | [moderate] |

**Read:** AI raises the *floor* and the speed of individual output, and pulls the *field* toward the center. The design response is procedural: protect human-first divergence, diversify inputs, and check deliberately for sameness (§6).

### 2.3 Judgment: polish lowers scrutiny, agreement is the default

| Finding | Source | Tag |
|---|---|---|
| When conversations produce artifacts, users give *more* direction but check facts, flag missing context and question reasoning *less*. | Anthropic AI Fluency Index 2026, n = 9,830 | [moderate] |
| Higher confidence in GenAI goes with less critical thinking, and higher self-confidence with more. Thinking shifts toward verification, integration and "task stewardship". | Lee et al. 2025, CHI (Microsoft/CMU), n = 319 | [moderate] (self-report) |
| RLHF assistants are consistently sycophantic, and humans *prefer* convincing sycophantic answers over correct ones a non-negligible fraction of the time. | Sharma et al. 2023/ICLR 2024 (Anthropic) | [strong] |
| Agents grading their own designs "confidently praise" mediocre work. A separate, tuned skeptical evaluator is more tractable. | Anthropic harness post, Mar 2026 | [weak/anecdotal] |
| Explanations raised acceptance of AI advice whether or not it was right. | Bansal et al. 2021, CHI | [moderate] |
| Cognitive forcing (decide first, or wait before seeing the AI answer) reduced over-reliance, but people liked it less. | Buçinca, Malaya & Gajos 2021, CSCW | [moderate] |

### 2.4 Learning: how you use AI decides whether you grow

| Finding | Source | Tag |
|---|---|---|
| Developers learning a new library with AI scored 17% lower on mastery, worst on debugging. *Conceptual inquiry* and *generate-then-ask-why* users kept high scores. Full delegators didn't. | Shen & Tamkin 2026 (Anthropic) RCT, n = 52 | [moderate] (small, short-term) |
| Unrestricted GPT access raised practice performance but **lowered exam scores by about 17%**. A tutor version that gave hints instead of answers avoided the harm. | Bastani et al. 2025, *PNAS*, n ≈ 1,000 students | [strong] |
| At Anthropic, people "fully delegate" only 0–20% of their work. They keep "taste" tasks, and fear the atrophy of the skills needed to critique AI output. | Anthropic, Dec 2025, n = 132 | [weak/anecdotal] |

### 2.5 What we don't know yet
Long-term effects on design skill and on market-level visual diversity. Whether homogenization persists with better prompting and with newer models. The effect of AI critique on *user* outcomes (no shipped-product RCTs that I know of). Treat confident claims in either direction as [speculative].

---

## 3. Division of labor: who frames, who explores, who judges

| Phase | Human leads | AI does | Guard against |
|---|---|---|---|
| **Frame** (job, user, metric, constraints, done) | writes the one-line frame. Decides what problem is worth solving | interviews the designer ("ask me the hard questions"), surfaces missing context and assumptions, proposes a metric and a guardrail | AI-reframed problems that drift toward what it can generate |
| **Research synthesis** | decides what is true and what matters. Reads raw data | clusters, counts, finds disconfirming evidence, drafts quotes **linked to the raw source** | invented or smoothed quotes. Themes that come from the model, not the data |
| **Diverge** | a solo burst first (§6) | then widens: distant analogies, opposite directions, constraint flips, parallel variants | fixation, sameness |
| **Converge** | sets the criteria and makes the call | scores options against the stated rubric, steelmans each, plays devil's advocate, names the riskiest assumption | sycophancy. Criteria invented after the fact |
| **Make** | directs and reviews diffs. Keeps the token and system rules | executes: tokens, components, every state, variants, copy permutations, code | over-engineering. Taste drift. Unrequested decisions |
| **Verify** | final eyes on taste and ethics | renders, screenshots at breakpoints, runs a11y and contrast checks, walks every state, reviews in a fresh context | the polished-output trap. Self-grading |
| **Ship and learn** | owns the decision and the disclosure | instruments, analyzes, drafts the readout, flags SRM and peeking | storytelling from data |

**Human-only zones** (don't delegate even when you could):
- The first framing of a new problem.
- The first ideation burst on a novel brief.
- The final taste call.
- Any persuasion or ethics decision.
- Contact with real users: AI drafts scripts and analyzes, people listen.
- Practice on skills you're still building.

**Delegate freely** what is verifiable, low-stakes or boring [weak/anecdotal: Anthropic internal heuristic]. Delegation should scale with how cheaply you can check the result.

---

## 4. The 4Ds applied to design (AI Fluency Framework, Dakan & Feller with Anthropic, CC BY-NC-SA; paraphrased)

| D | Sub-skill | In design work |
|---|---|---|
| **Delegation** | problem awareness | the frame and the definition of done exist *before* the first prompt |
| | platform awareness | know the tool's frontier: strong at production, states, copy variants and code. Weak at novel product judgment, real user needs and subtle visual QA (it can't see the way users do, and it can't hear) |
| | task delegation | choose centaur or cyborg per phase. Keep the human-only zones |
| **Description** | product | deliverable, fidelity, platform, design system, required states, real content |
| | process | "diverge into 3 named directions before building", "plan, then build", "cite evidence", "render and screenshot" |
| | performance | "be a critical senior reviewer", "push back with evidence", "ask before inventing content", "tell me what you're unsure about" |
| **Discernment** | product | does it solve the job? Is it accessible? Are all the states there? Is it generic (would any similar prompt produce this)? |
| | process | which assumptions did it make? Which decisions did it take that I didn't ask for? |
| | performance | is it flattering me? Did it follow the brief or drift? |
| **Diligence** | creation | no confidential screens or data in tools that aren't approved for them |
| | transparency | disclose AI-generated assets and research synthesis where stakeholders rely on them |
| | deployment | you own what ships: verify, test with users, measure |

The **Description–Discernment loop** is the core of co-creation. Each judgment becomes a better description. Only about 30% of users ever state how the AI should behave [moderate], so performance description is the cheapest upgrade available.

---

## 5. Briefing: the design brief for an AI

```text
ROLE & BEHAVIOR: <senior product designer for X>. Be critical. Push back with reasons
  when my brief or the evidence disagrees. Ask before inventing content. Say what you're unsure of.
JOB: <who> · <situation> · <struggle> · <success metric + guardrail> · <riskiest assumption>
CONTEXT: product, users, platform, design system/tokens (link), brand constraints, what exists now, data.
DELIVERABLE: <artifact, fidelity, format>, with states: empty/loading/error/… · real content, not lorem.
PROCESS: first propose 2–3 named directions (one convention-heavy baseline), wait for my pick,
  then build. Render and screenshot at 375 px and 1440 px and compare with this brief before saying done.
REFERENCES (3–5, diverse): <ref> → take <one property>; leave <what not to copy>.
ANTI-REFERENCES: <looks/patterns to avoid, and why>.
DONE WHEN: <acceptance criteria / rubric>; WCAG 2.2 AA; no invented claims.
OPEN QUESTIONS: <what I don't know yet>.
```

- **Say why.** Constraints with reasons generalize better than bare rules [weak/anecdotal: Anthropic prompting docs].
- **Use the colleague test:** would a designer new to the project understand this brief? If not, neither will the model.
- **Let it interview you** for bigger work: "Interview me about users, edge cases and trade-offs, then write the spec." That forces problem awareness on both sides.
- **Keep a design-context file** (CLAUDE.md or a project doc): users, principles, tokens, decisions *with reasons*, rejected directions. Keep it short and pointer-based. Long context files get half-ignored [weak/anecdotal]. State your skill level and your preferred change size (Anthropic's Product Design team does) [weak/anecdotal].

### Handing over taste
- **Properties, not pastiche.** "Take Linear's density and keyboard-first feel, not its purple." Extract style DNA (→ `inspiration/inspiration-method.md`) and turn it into tokens. The AI follows tokens more reliably than adjectives.
- **Diverse references.** Several *different* references reduce fixation on any one of them [moderate: fixation literature]. Include at least one from outside the category.
- **Name the defaults you reject** and say why (generic SaaS card kit, an untouched library theme). Avoid bans without reasons, which push the output into the *next* cliché.
- **Calibrate with scored examples.** Show 2–3 past designs with "keep / kill / why". Few-shot calibration aligned Anthropic's design evaluator with its author's taste [weak/anecdotal].
- **Watch your own adjectives.** Rubric words steer the output. "Museum quality" made designs converge [weak/anecdotal]. Describe the user's experience ("calm under time pressure"), not prestige.

---

## 6. Diverging without fixating or homogenizing

1. **Human-first burst:** 5–15 minutes of sketches or bullets before opening the AI on a novel brief. That puts the human's ideas on the table before AI examples can anchor them [moderate: fixation + forcing-function evidence].
2. **Then widen, deliberately:** ask for directions that are *far apart* (opposite tone, different metaphor, a different primary action), an analogy from another domain, and "the version a competitor would never ship". Ask for the *reasoning* behind each, not only renders.
3. **Run the sameness check:** "Would any team prompting this brief get this?" If so, you have the center of the distribution. Push one axis (structure, metaphor, typography, interaction) away from it, *for the user's reason, not for novelty's sake*.
4. **Vary the inputs, not just the seed:** different references, different constraints, different models or tools, a human sketch as input. In the brainstorming studies, human ideas plus search produced the most unique concepts [moderate].
5. **Keep a rejected-directions log** so iteration doesn't quietly return to the default.
6. **Converge on criteria, not on charm.** Write the rubric before seeing the options. Include a convention-heavy baseline on mature products (techne §2).
7. **Don't confuse distinctive with good.** On functional surfaces (forms, checkout, settings, navigation), convention wins. Sameness there isn't a problem. Spend divergence where the product competes.

---

## 7. Iteration and critique loops

- **The loop is describe → generate → judge → re-describe.** Judge against the stated criteria and done-definition, never against "do I like it" alone.
- **Course-correct early.** Interrupt as soon as the direction is wrong. **After two failed corrections, stop patching:** start a clean session and rewrite the brief with what you learned [weak/anecdotal: Claude Code practice].
- **Make the critique concrete:** point at elements ("the CTA competes with the price"), give exact values, and keep one change theme per round. Direct-manipulation refinement (comments on elements, sliders) beats prose once a draft exists.
- **Refine or pivot, explicitly.** Each round, decide whether the direction is improving (refine) or plateaued (pivot to a different direction) [weak/anecdotal: harness post]. Later isn't always better, so keep earlier iterations to compare against.
- **Separate the judge.** For subjective quality, use a fresh-context reviewer with the rubric and screenshots of the *live* artifact, plus a human. Never accept "I reviewed my work and it looks great" as evidence. For objective quality, run real checks (contrast, the states walk, tests, Lighthouse).
- **Rubric for design reviews** (adapted from the harness post, reweighted to techne): **functionality and job fit** (can a user find the primary action and finish the task?), **craft** (hierarchy, spacing, type, contrast, states), **coherence** (one idea, one mood, system consistency), **distinctiveness where it pays** (deliberate choices on the surfaces that differentiate). Hard floors: accessibility AA, no deception.

---

## 8. Pushback, not sycophancy

**Why it matters:** preference training rewards agreement, and humans often prefer pleasant wrong answers [strong]. A design partner that agrees is worse than none, because it adds false confidence. Sycophancy shows up as reflexive praise, caving under repetition, and vague "both are great" answers (epistemic cowardice).

**When the AI should push back** (and techne must):
- Evidence contradicts the request (a myth, a pattern that tests poorly, a metric without a guardrail).
- An accessibility or usability floor is broken.
- A dark pattern or deceptive claim is requested (→ the ethics gate. Refuse in one line and offer 2–3 honest alternatives).
- The brief's goal and its proposed solution don't match.
- Scope or risk is being underestimated (a one-way door treated as two-way).

**How:**
1. Lead with the disagreement and the reason: "I'd push back on X: [mechanism], [evidence + tag]."
2. Separate the *kind* of disagreement. **Evidence:** firm, cite it. **Taste:** offer both, recommend one, and accept the designer's call. **Ethics:** non-negotiable.
3. Give the best version of what they asked for if it's legitimate, plus the cheapest test that would settle it.
4. **Hold the position under mere repetition.** Update *visibly* when a new argument or data arrives ("That changes it, because…").
5. Keep it short and kind, and pick the top 1–3 issues. Pushback on everything is noise, and excessive pushback is a real cost [weak/anecdotal: Anthropic wellbeing evals].
6. Praise only what is specific and earned ("the empty state teaches the first action, keep it").

**For the designer:** ask "What are the three weakest parts and why?" instead of "Is this good?". Set the terms up front ("disagree with me when the evidence does"). Be suspicious of any session in which the AI never disagreed.

---

## 9. Verification habits

The more finished it looks, the more you check [moderate].
- **Render it and look:** at least 2 viewport widths, dark mode, Dynamic Type or 200% zoom, reduced motion. Compare against the brief and list the differences.
- **Walk every state** (→ `process/states-and-edge-cases.md`). Agents are good at *enumerating* states from code, so ask for the list and then check it.
- **Check facts and content:** no invented stats, testimonials, prices or quotes. Real content at real lengths.
- **Run the floors:** contrast, focus order, target sizes, labels (→ `interaction/accessibility.md`).
- **Ask what it decided for you:** "List the decisions you made that I didn't specify." Build-type tasks hide the most autonomous choices [moderate].
- **Verify behavior with people:** a usability test or a measured rollout beats any AI judgment (techne's evidence hierarchy).
- **If you can't verify it, don't ship it** [weak/anecdotal, but a sound rule].

---

## 10. Keeping the designer skilled

- **Use AI to understand, not only to produce:** the people who kept their mastery asked conceptual questions or asked *why* after generating [moderate]. A hint-giving tutor protected learning where a full-answer tool harmed it [strong].
- **For juniors and for new skills** (motion, code, type, research), attempt it first, then compare with the AI's version and ask for the principle. Use learning or explanatory modes.
- **Keep the critique muscles in practice:** regularly design or critique without AI. The skill you need in order to supervise AI work is the one that atrophies first (debugging, in the RCT).
- **Preserve mentorship:** AI as the "first stop" reduced juniors' questions to seniors [weak/anecdotal]. Keep human design crits.

---

## 11. Anti-patterns

| Anti-pattern | Why it fails | Instead |
|---|---|---|
| "Generate 50 options and pick the best" with no criteria | volume isn't diversity. It converges to the center, and choice by charm | human burst + 3 far-apart directions + a rubric written first |
| Prompt-and-pray one-shot for a product screen | novice pattern. Hidden decisions | brief → directions → pick → build → verify |
| "Make it pop / modern / clean" | adjectives sample the default | properties from references, tokens, the user's experience |
| Asking the AI whether its own design is good | lenient self-evaluation and sycophancy | separate judge with a rubric, screenshots, a human |
| Correcting the same thing five times | context polluted with failed attempts | after two misses, clean session + rewritten brief |
| Treating the AI's synthesis as research | the themes can come from the model | trace every claim to raw data |
| Banning fonts and colors as "AI slop" by rule | creates the next cliché. Can conflict with legibility | reject *unchosen defaults*, choose for the reading load |
| Shipping a polished AI mock as the spec | the polished-output trap | states matrix + floors + usability check |
| Full delegation while learning | measurable skill loss | conceptual inquiry, hints, attempt first |

---

## 12. How techne behaves as a collaborator

- **Frame first:** state the one-line frame and the definition of done (inferred if needed) before making anything.
- **Diverge, then ask:** for L1+ creative work, offer 2–3 named directions, including a convention-heavy baseline, and let the designer choose. Don't silently pick taste on their behalf.
- **Label decisions:** after any artifact, give a short "decisions I made / assumptions / not verified" list.
- **Push back with evidence and kindness** (§8). Hold under repetition, update on new evidence, praise specifically.
- **Close the loop:** render, screenshot, compare. Prefer a fresh-context critique pass or the user's eyes over self-grading on taste.
- **Respect human-only zones,** and when the brief is novel, suggest the designer sketch first.
- **Teach on request:** when the user wants to learn, explain the principle, ask a check question, and let them make the move.
- **One reflective nudge at most:** when a recommendation rests on an inferred assumption, end with one or two *specific* "worth checking" questions, once per conversation (pattern from Anthropic's discernment-nudge skill).
