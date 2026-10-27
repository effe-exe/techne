# AI Interfaces: Shipped Exemplars, Instructive Failures, and the UI of Tomorrow

> **Use this when:** you need real precedents for an AI feature ("who does this well, and what went wrong for whom?"), a teardown of AI products, or a grounded vision of where AI interfaces are heading for a roadmap, concept or pitch.
> **Also use when:** a stakeholder says "make it like ChatGPT/Cursor/Perplexity", proposes an AI gadget or a screenless product, or asks "what will UI look like in 5 years?".
> **Skip when:** you need the pattern rules themselves → `ai-patterns-interaction-pattern-library.md`; agent oversight mechanics → `ai-patterns-agent-delegation-ux.md`.

Evidence tags: **[strong]** · **[moderate]** · **[weak/anecdotal]** (single product observation, press reports) · **[contested]** · **[speculative]**. Product facts reflect public announcements and reporting up to Oct 2026. Products change monthly: re-check the live product before citing a detail in a deliverable. **Copy the principle, never assume the result** (`SKILL.md` §2).

---

## 1. Exemplars: what to steal and why it works

Each entry: **pattern** · **why it works (human constant)** · **caveat**.

### Claude Artifacts & Projects (Anthropic, June 2024 →)
- **Pattern:** generated content (code, docs, diagrams, small apps) opens in a dedicated pane beside the conversation, versioned and iterable; Projects hold curated, user-chosen context; memory (2025) is scoped per project, viewable, editable, with Incognito chats.
- **Why it works:** separates *talking about* the work from *the work* (object permanence, less working-memory load); explicit, user-curated context beats invisible inference for predictability.
- **Caveat:** two panes are heavy on phones; iteration still runs mostly through prompts, not direct edits.

### ChatGPT canvas & memory (OpenAI, Oct 2024 / Feb 2024, Apr 2025)
- **Pattern:** a co-editing surface with inline "suggest edits", shortcuts as controls (length, reading level, polish; for code: review, add logs, fix bugs, port language). Memory has two toggles (saved memories, chat history reference) plus Temporary Chat.
- **Why it works:** turns recurring prompt context into recognizable controls (recognition over recall); memory controls make personalization inspectable.
- **Caveat:** whole-chat-history reference makes it harder for users to predict what the model "knows" (predictability: Gajos et al. 2008).

### Cursor (AI code editor)
- **Pattern:** a spectrum of autonomy in one tool: Tab completion (inline), selection-scoped edit with inline diff accept/reject, agent mode for multi-file tasks with checkpoints to restore.
- **Why it works:** users pick the autonomy level per task; diffs keep the human as reviewer at the right granularity. [weak/anecdotal: product observation]
- **Caveat:** METR's 2025 RCT (n=16 experienced developers, mostly Cursor + Claude 3.5/3.7 Sonnet) found tasks took 19% longer with AI while devs believed they were faster [moderate]. Tooling has changed since, but the felt-vs-real-speed gap is the lesson.

### v0 (Vercel)
- **Pattern:** prompt → live rendered preview → iterate → code alongside; generation constrained to a known component stack (React + Tailwind + shadcn/ui).
- **Why it works:** immediate visual feedback restores the command-paradigm loop (see, adjust) inside an intent UI; constraining to a design system raises consistency.
- **Caveat:** generic outputs converge on the same look; taste and the brand system still have to come from you (`modes/visual.md`).

### Perplexity
- **Pattern:** answers with numbered inline citations and sources shown up front; suggested follow-ups.
- **Why it works:** makes checking cheap (trust calibration); follow-ups are prompt-less affordances for the next step.
- **Caveat:** citations raise trust even when the cited source doesn't support the sentence; audit citation precision [moderate: general finding that explanations/citations inflate trust].

### Granola (meeting notes)
- **Pattern:** the user takes their own sparse notes during the meeting; AI enhances them afterward from the transcript, with the user's words kept visually distinct from AI additions.
- **Why it works:** keeps the human as author and keeps their attention in the meeting (agency, generation effect); AI fills gaps instead of replacing thinking. [weak/anecdotal: product observation]
- **Caveat:** recording consent of other participants is a social and legal design problem, not a setting.

### Notion AI / Apple Writing Tools / Figma AI (embedded verbs)
- **Pattern:** AI as verbs on a selection inside the existing tool (summarize, rewrite, translate, generate) instead of a separate chat app.
- **Why it works:** zero context switch; the object is already the context. [moderate as a principle]
- **Cautionary event:** Figma temporarily disabled its "Make Designs" generator (July 2024) after it produced near-copies of Apple's Weather app; CEO Dylan Field cited a rushed release and weak QA of the underlying design system. Lesson: generative design features need originality checks and an owned, reviewed component corpus.

### Arc → Dia (The Browser Company; acquired by Atlassian, Sept 2025, ~$610M)
- **Pattern:** the browser itself becomes the AI surface: ask about open tabs, act across pages, with the page as shared context.
- **Why it matters:** the team discontinued Arc's ambitious novel UI to focus on an AI-first browser. Lesson: novelty in *chrome and navigation* has high learning costs; AI value came from context (what you're looking at), not new UI furniture. [weak/anecdotal: interpretation of public strategy]

### Google generative UI (Gemini dynamic view, Search AI Mode, Nov 2025)
- **Pattern:** the model writes a custom interactive interface per prompt (simulations, explorable explanations).
- **Evidence:** raters preferred it strongly over text/markdown answers and only slightly less than human-expert-made sites, with speed excluded from the evaluation; generation can take a minute or more [moderate: vendor study].
- **Caveat:** great for one-off explanation, risky for repeated workflows (learnability; see pattern P11).

### MCP Apps (cross-vendor standard, 2025–2026)
- **Pattern:** tools return interactive UI components rendered in the chat (sandboxed), building on MCP-UI and the OpenAI Apps SDK; supported by ChatGPT, Claude, VS Code and others.
- **Why it matters:** chat is becoming a *container for small apps*, so the old craft (forms, tables, pickers, states) comes back inside the conversation. Design those components with the same rigor as any product UI.

---

## 2. Instructive failures (and the human constant they ignored)

| Case | What happened | Constant ignored | Lesson |
|---|---|---|---|
| **Humane AI Pin** (2024–Feb 2025) | $699 + $24/month screenless wearable; reviews cited latency, errors, missing basics (timers), heat, ~4h battery; charging case flagged as a fire hazard; servers shut down Feb 28 2025 after HP bought assets/team for ~$116M. | Speech is serial and ephemeral; people compare and verify **visually**; social context limits voice; response-time limits. | Don't remove the screen to look futuristic. Voice for intent, screen for review. Hardware can't hide model latency. |
| **Rabbit R1** (2024) | $199 device marketed on a "large action model" that would operate apps for you; reviews described a beta-like product that didn't meet CES hype; security issues around exposed API keys reported. | Trust is set by the first failures (peak-end); delegation requires visible, verifiable action. | Don't sell autonomy you can't show. Prove reliability on narrow tasks first; show what the agent did. |
| **Apple Intelligence notification summaries** (late 2024–Jan 2025) | Summaries produced false headlines attributed to news outlets (BBC complained); Apple paused news/entertainment summaries in iOS 18.3 beta, added italics to mark summaries and a per-app toggle. | Authority attribution: people read a notification as the *source's* voice. | Proactive AI on authoritative content needs a higher accuracy bar, clear AI labeling and easy per-source opt-out. |
| **Figma Make Designs** (July 2024) | Generated near-replicas of Apple Weather; pulled. | Designers' and brands' expectation of originality; reputational risk. | Constrain generation to owned, reviewed systems; check outputs for similarity before shipping. |
| **Chat-bolted-on features** (widespread 2023–2025) | "Ask AI" sidebars added to products where users work on objects; low engagement is commonly reported. [weak/anecdotal] | Recognition over recall; context switch cost. | Put verbs on the object; chat as fallback. |

---

## 3. The UI of tomorrow: an evidence-graded vision

**Method:** start from what humans can't change, add what technology now allows, and grade each forecast. Use these as *directions to prototype and test*, not as facts. Each forecast lists a signal that would prove it wrong.

### 3.1 From threads to objects [moderate→speculative]
The center of gravity moves from chat transcripts to **persistent work objects** (documents, boards, datasets, itineraries, codebases) that both human and AI edit. Conversation becomes the margin: comments, intents, history.
- *Constant:* object permanence, spatial memory, working-memory limits.
- *Already visible:* Artifacts, canvas, v0, Cursor, MCP Apps.
- *Would be wrong if:* power users keep choosing transcripts over objects for iterative work.

### 3.2 Intent + direct manipulation, not intent instead of it [moderate]
Say the goal, then **point, drag, select and adjust**; the AI translates gestures on the object into edits. Prompts get shorter as the UI carries the context.
- *Constant:* articulation is hard; direct manipulation gives immediate, reversible feedback.
- *Design move:* every generated output exposes its parameters as handles (sliders, chips, toggles) you can grab.

### 3.3 Instruments and HUDs over assistants [speculative]
Much AI becomes **perception** rather than conversation: highlights, overlays, risk badges, inline annotations, "you're about to email the wrong Alex" warnings (Litt 2025).
- *Constant:* attention is the scarcest resource; interruptions cost resumption time.
- *Design move:* design the "glance layer" of your product; make each signal dismissible and tunable (HAX G8, G17).

### 3.4 Delegation inboxes and review-first work [speculative]
For instrumental tasks (expenses, scheduling, triage, routine code), people increasingly **review proposed outcomes** in a queue rather than perform steps. The core screens become: brief, plan, approvals, review, audit.
- *Constant:* humans are good at judging, bad at monitoring.
- *Would be wrong if:* review cost per task stays above doing it yourself (watch human-minutes/task).

### 3.5 Stable shells, generated insides [moderate on the rule, speculative on adoption]
Apps keep a **stable frame** (navigation, primary actions, settings, brand) while **content regions are generated** per task: comparisons, explanations, one-off tools. Users can pin a generated tool to keep it.
- *Constant:* motor and spatial memory; habits take weeks.
- *Evidence:* adaptive-UI research favors predictable, additive adaptation (Findlater & McGrenere 2004; Gajos et al. 2006, 2008).

### 3.6 Malleable, user-shaped software [speculative]
Users ask for small modifications ("add a column for tip", "hide this panel") and get them on the spot; teams ship primitives and policies, users compose (Ink & Switch 2025; Litt 2023).
- *Constant:* people adapt their environments (workshops, kitchens); one-size-fits-all fits no one well.
- *Risks:* support, security, shared mental models in teams. Design an undo for customization and a "reset to standard" path.

### 3.7 Multimodal by default, screen as the truth [moderate]
Voice and camera become normal *inputs*; the screen (phone, glasses, laptop) remains where you **verify**. Glasses-style displays matter only if they show the HUD layer glanceably.
- *Constant:* vision is the high-bandwidth parallel channel; speech is serial (Oviatt 1999).
- *Would be wrong if:* screenless devices reach mass adoption for verification-heavy tasks (Humane suggests not, yet).

### 3.8 Memory as a user-owned asset [speculative]
Personal context (preferences, projects, people) becomes portable, inspectable and scoped (already: per-project memory, import/export between assistants). The design problem shifts to **consent, scope and forgetting**.
- *Constant:* people want to control self-presentation differently by context (work vs home).

### 3.9 What will NOT change (bet on these)
- Feedback in < 100 ms; flow breaks after ~1 s; attention leaves after ~10 s.
- ~4 chunks of working memory; recognition over recall.
- Fitts's law for anything touched or pointed at; 44pt targets.
- People remember peaks and endings; one irreversible error outweighs many successes.
- People want to feel they are the author of what matters to them, and want to delegate what doesn't.
- Trust is earned through consistent, checkable behavior, not by tone or persona.
- Accessibility needs (vision, hearing, motor, cognition) persist and multiply with an aging population.

---

## 4. Using this file in design work

1. **Teardown:** for any AI feature, map it to an interaction model (pattern library §3), list which exemplar it resembles, and check the failure table for the constant it might ignore.
2. **Vision work:** pick 1–2 forecasts from §3, write the bet as a hypothesis with its "would be wrong if" signal, prototype the riskiest interaction (`modes/prototype.md`), and test it with real tasks, measuring time and success, not just preference.
3. **Pitch hygiene:** label speculative claims as speculative; cite exemplars as patterns, never as proof of results.

### Checklist
- [ ] Each referenced product checked live (features change monthly).
- [ ] Every "future" claim tagged [speculative] with a falsifying signal.
- [ ] The human constant behind each idea named.
- [ ] Failures reviewed: no screenless verification, no unshown autonomy, no unlabeled proactive summaries of others' content, no unchecked generated designs.

---

## Sources

- Anthropic (2024). *Claude 3.5 Sonnet* (introduces Artifacts). https://www.anthropic.com/news/claude-3-5-sonnet · (2025) *Memory.* https://www.anthropic.com/news/memory
- OpenAI (2024). *Introducing canvas.* https://openai.com/index/introducing-canvas/ · *Memory and new controls for ChatGPT.* https://openai.com/index/memory-and-new-controls-for-chatgpt/
- METR (2025). *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.* https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- Cursor https://cursor.com · v0 https://v0.app · Perplexity https://www.perplexity.ai · Granola https://www.granola.ai (product observation)
- The Register (2024-07-03). *Figma pulls AI tool after Apple Weather resemblance.* https://www.theregister.com/2024/07/03/figma_plagiarizes_apple/
- TidBITS (2025-09-04). *Atlassian acquires The Browser Company for $610 million.* https://tidbits.com/2025/09/04/atlassian-acquires-the-browser-company-for-610-million/
- Leviathan, Y. et al. (2025). *Generative UI.* Google Research. https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/
- Model Context Protocol (2026). *MCP Apps.* https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/
- Lowyat (2025). *Humane shutting down AI Pin, selling remains to HP.* https://lowyat.net/2025/343054/humane-shutting-down-ai-pin-selling-remains-to-hp · Benzinga (2025-02). https://www.benzinga.com/tech/25/02/43803887/humanes-ai-pin-dubbed-as-potential-iphone-killer-dies-this-month-as-company-sells-to-hp-for-116-million-amid
- Gizmodo (2024). *Rabbit R1 review.* https://gizmodo.com/rabbit-r1-review-ai-companion-performance-1851452097 · Wikipedia, *Rabbit r1.* https://en.wikipedia.org/wiki/Rabbit_r1
- TechCrunch (2025-01-16). *Apple pauses AI notification summaries for news.* https://techcrunch.com/2025/01/16/apple-pauses-ai-notification-summaries-for-news-after-generating-false-alerts
- Litt, G. (2025). *Enough AI copilots! We need AI HUDs.* https://geoffreylitt.com/2025/07/27/enough-ai-copilots-we-need-ai-huds · (2023) *Malleable software in the age of LLMs.* https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming
- Litt, G. et al. (2025). *Malleable Software.* Ink & Switch. https://www.inkandswitch.com/essay/malleable-software/
- Findlater & McGrenere (2004) https://doi.org/10.1145/985692.985704 · Gajos et al. (2006) https://doi.org/10.1145/1133265.1133306 · Gajos et al. (2008) https://doi.org/10.1145/1357054.1357252
- Oviatt, S. (1999). *Ten myths of multimodal interaction.* https://doi.org/10.1145/319382.319398
