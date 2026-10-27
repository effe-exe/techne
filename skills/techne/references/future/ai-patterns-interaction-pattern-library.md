# AI-Native Interaction Pattern Library

> **Use this when:** designing or critiquing any AI feature's interface (chat, inline assist, canvas, generative/adaptive UI, voice/multimodal, memory) or choosing *which* interaction model an AI capability should take.
> **Also use when:** someone says "just add a chatbot", proposes a UI that regenerates itself per user, or asks what "the UI of tomorrow" looks like and you need patterns that are grounded, not hype.
> **Skip when:** the task is an agent that acts on the user's behalf over many steps → `ai-patterns-agent-delegation-ux.md`; trust calibration and over-reliance → `human-ai-trust-trust-and-reliance.md`.

Evidence tags: **[strong]** replicated / large-sample · **[moderate]** · **[weak/anecdotal]** (incl. single product observations) · **[contested]** · **[speculative]** (informed forecast, label it when you use it). Each section separates **Established / Emerging / Speculative** where it matters. Status as of Oct 2026.

---

## 0. Point of view: design the future from the human constants outward

Models change every few months; human perception, memory, motor control, emotion and social instincts have barely moved in 10,000 years. So a pattern for AI is only as durable as the human constant it respects. Before you invent a new AI interaction, name the constant it serves:

| Human constant (stable) | What it means for AI UI | Detail file |
|---|---|---|
| Working memory ~4 chunks [strong] | Don't make people hold the prompt, the last 3 answers and the diff in their head. The UI remembers: show what changed, keep state visible. | `psychology/cognition-memory-cognitive-load.md` |
| Recognition beats recall [strong] | A blank text box is pure recall. Offer verbs, examples, templates, suggested next steps. | same |
| Response-time limits: 0.1 s / 1 s / 10 s [strong] | Models are slow: stream, show specific progress, let people do something else after ~10 s. | `psychology/cognition-motor-control-and-timing.md` |
| Articulation is effortful and unevenly distributed [moderate] | Writing intent as prose excludes many users (Nielsen's "articulation barrier"). Offer pointing, selecting, sliders, examples. | §1 |
| Direct manipulation builds mental models [strong] | People learn systems by acting and seeing immediate, reversible results. Keep a manipulable object, not just a thread. | §2 |
| Habit and spatial memory (median ~66 days to automaticity) [moderate] | UIs that rearrange themselves per user/task destroy motor memory. Adapt content, not the position of controls. | §4 P11 |
| Loss aversion and peak-end memory [strong] | One lost draft or a confidently wrong answer at the end defines the experience. Never lose user work; design graceful failure. | `psychology/cognition-emotion-experience-habit.md` |
| Social instincts: we anthropomorphize talking things [moderate] | A chatty persona raises trust without raising accuracy. Match tone to reliability. | `future/human-ai-trust-trust-and-reliance.md` |
| Agency: people want to feel the author of the outcome [moderate] | Keep the human the author: accept/reject, edit, revert, "make it mine". | §4 P5, P9 |

**Rule:** if a proposed "AI-native" pattern requires users to change one of these constants (memorize more, wait without feedback, read every line of a long diff, re-learn a layout weekly), it will fail no matter how capable the model is.

---

## 1. The paradigm shift: from commands to intent

**Established**
- Nielsen (2023) frames generative AI as the third UI paradigm after batch processing (~1945) and command-based interaction (~1964): *intent-based outcome specification*. Users say what outcome they want, not the steps, which "reverses the locus of control". [moderate: influential framing, not an empirical result]
- He also flags the cost: prose prompting assumes articulacy. He estimated, from literacy research, that about half the population of rich countries may struggle to get good results from prose-only bots. [weak/anecdotal: an estimate, not a measured study] He also predicted prompt engineering would not be a lasting job: the usability burden must move into the product.
- Command UIs allow *incremental* specification: you act, see the state, adjust. Pure intent UIs risk reverting to batch processing: specify everything up front, wait, get a whole result, start over. **The best AI UIs combine intent (say the goal) with command-style iteration (see, point, adjust).** [moderate]

**Emerging**
- Nielsen's follow-ups (2024–2025, UX Tigers) describe "intent by discovery": users rarely know their full intent up front; the interface must help them discover and refine it, including what the AI may assume and what it may do. [weak/anecdotal: essays]
- NN/g (Moran & Gibbons 2024) calls the design consequence *outcome-oriented design*: designers specify goals, constraints and guardrails ("must show / should show / never show") rather than every screen. [speculative but grounded]

**Design implication now:** every intent entry point needs (a) a way to state the goal cheaply, (b) a visible interpretation the user can correct before or while the AI works, (c) object-level iteration afterwards.

---

## 2. Why chat alone is not the future (and when it is fine)

**The critique (2022–2025, convergent across independent designers)** [moderate: expert consensus, partly backed by HCI fundamentals]
- **No affordances.** A text box looks identical to search, login and payment fields; it doesn't say what the tool can or can't do, so every user has to discover what works (Wattenberger 2023).
- **Prompts are a pile of context.** Role, audience, tone and constraints are typed again every time. Bake them into controls (Wattenberger's writing tool used type/audience/feel selectors and sliders for expertise). 
- **Responses are isolated.** Iterating on prose by re-asking forces people to diff two long answers by eye, which overloads working memory. Show changes in place (Wattenberger 2023).
- **Chat is the obvious first wrapper, not the best one.** Lee (2022) notes that the first interface to a new capability exposes the raw mechanism (completion, conversation), and later generations invent new metaphors (as files gave way to mobile's app-owned data). Appleton (2023) calls chat "the lazy solution" and sketches non-chat "epistemic" tools (e.g., "daemons" that critique your writing from different perspectives).
- **Copilots grab attention; instruments extend perception.** Litt (2025), building on Mark Weiser, argues for AI "HUDs": information in your field of view that makes you more aware without a conversation. Spellcheck is the everyday example: no dialog, just underlines.
- **Malleable software.** Ink & Switch (Litt, Horowitz, van Hardenberg, Matthews 2025) argue the bigger shift is users reshaping their own tools with AI (one-off GUIs, mods), while warning that AI code generation alone doesn't create that; you also need composable, user-owned data and tools. [speculative direction, grounded in decades of end-user programming research]

**When chat IS the right primary UI** [moderate]
- Open-ended exploration where the user can't yet name the object (brainstorming, Q&A, tutoring, "help me think").
- Low-frequency, high-variety tasks where building dedicated UI for each would cost more than it's worth.
- As a **fallback / escape hatch** beside structured UI ("ask anything about this view").

**When chat is the wrong primary UI**
- The user works *on an object* (doc, code, design, spreadsheet, itinerary): use canvas/inline patterns (P5, P6).
- The task is repeated daily with the same parameters: give it a button, template or automation.
- The output must be compared, filtered or acted on as data: render it as a table, map or form, not prose.
- The user is mobile, hands-busy, or low-literacy: prefer pointing, choices, voice + visual confirmation.

---

## 3. Choose the interaction model before the pixels

Six models, from least to most autonomous. Pick per task, not per product; one product usually needs 2–3.

| Model | What it feels like | Use when | Avoid when | Exemplar |
|---|---|---|---|---|
| **Ambient / HUD** | AI changes what you *see*, not what you say: highlights, underlines, badges, summaries in place | Signals are frequent, low-stakes and glanceable; the user should stay in flow | Errors are costly and hard to spot; it adds noise to an already dense view | Spellcheck, Litt's HUD argument |
| **Inline suggestion** | Ghost text or a proposal at the cursor; Tab to accept | High-frequency micro-decisions in a known medium | Suggestions are often wrong (accept-reflex risk), or the user is learning the skill | Code autocomplete (Cursor Tab, Copilot) |
| **Invoked assistant (copilot)** | User selects/asks; AI answers or transforms in context | Task is bounded and user-initiated | It becomes a chat sidebar unrelated to the object on screen | Notion AI on a selection, Apple Writing Tools |
| **Canvas / co-editing** | A shared work object beside or under the conversation | Iterating on a document, code, design or artifact | Quick one-shot answers (overhead) | Claude Artifacts, ChatGPT canvas, v0 |
| **Generative UI** | The answer arrives as purpose-built, interactive UI | Explanation, comparison, simulation, one-off tools | Repeated workflows that need stable, learnable controls | Google generative UI (Gemini dynamic view), MCP Apps |
| **Delegated agent** | User hands off a goal; agent plans and acts over minutes or hours | Well-specified, verifiable, reversible tasks | Ill-defined goals, irreversible steps without checkpoints | Coding agents, browser agents → see delegation file |

**Lens: instrumental vs engaged interfaces (Lee 2024).** If the user wants the *result* (file taxes, book a flight), lean toward delegation and outcome UIs. If the user wants to *understand or create* (write, design, research), lean toward instruments that help them "see and express"; automation that skips their thinking removes the value. [moderate: design theory; consistent with the deskilling evidence in `human-ai-trust-trust-and-reliance.md`]

---

## 4. Pattern library

Each pattern: **what** · **when / when not** · **rules** · **measure**.

### P1. Prompt-less affordances (suggested actions, examples, templates, verbs on selection)
- **What:** turn the blank box into recognizable choices: starter examples, context-aware next actions, templates, a verb menu on selected content ("Shorten", "Explain", "Make a table").
- **When:** first run; any open-ended input; after every result (suggest next steps); mobile.
- **When not:** expert users with a stable vocabulary (offer a command palette instead); suggestions that are generic marketing ("Write a poem!") instead of tied to the user's current object.
- **Rules:** suggestions come from the current context (selection, file type, last result); 3–5 at most (Hick + scanning cost); show the capability boundary honestly (HAX G1 *Make clear what the system can do*; Apple HIG: offer "curated suggestions" and diverse example inputs). Keep a visible free-text path.
- **Measure:** share of sessions started from a suggestion; first-attempt success; abandonment at the empty state; whether suggestion users retain better (cohort, not just clicks).

### P2. Structured intent capture (controls as context)
- **What:** encode recurring prompt context as UI: audience, tone, length, reading level, format, sources, constraints. ChatGPT canvas (Oct 2024) shipped exactly this as shortcuts: adjust length, change reading level (kindergarten→graduate), final polish, suggest edits.
- **When:** the same parameters recur; outputs vary along a few meaningful dimensions.
- **When not:** the parameter space is unknown (do research first) or controls would outnumber uses.
- **Rules:** controls are editable after generation and re-apply instantly (direct-manipulation loop); default values are what an informed user would pick; label in user language, not model language ("temperature" → "more surprising / more predictable").
- **Measure:** regeneration count per accepted output (should fall); time-to-acceptable-output.

### P3. Streaming and latency UX
- **Established:** the 0.1 s / 1 s / 10 s limits still apply [strong]. Apple HIG (2025, updated June 2026): design a loading experience or generate in the background; replace "Processing…" with specific status ("Summarizing key themes from your notes").
- **Rules:**
  - Acknowledge input in < 100 ms (echo the request, show a working state).
  - Stream text when the first tokens are useful; **don't stream** what can't be read partially (a chart, a JSON-driven UI, a short classification): show a skeleton, then the final.
  - Keep the layout stable while streaming (no reflow jumping the reading position; CLS rules apply). Auto-scroll only while the user is at the bottom; stop when they scroll up.
  - After ~10 s, give an honest stage indicator ("Searching 12 sources → Reading → Drafting") and allow backgrounding plus notification on completion.
  - Always offer **Stop**. Partial output stays usable and editable.
  - Pick the model for the latency budget: inline suggestions need sub-second responses or they arrive after the user has typed past them.
- **Measure:** time to first useful token (p50/p75), stop rate, abandonment during generation, perceived wait (survey) vs actual.

### P4. Multiple variants (choose, don't just accept)
- **What:** return 2–4 meaningfully different options (Midjourney grids, Apple Image Playground multiples).
- **When:** taste-driven outputs (images, headlines, layouts) where the model can't know the preference.
- **When not:** factual answers (variants imply uncertainty you should state directly), or when comparing them costs more than editing one.
- **Rules:** variants must differ on a named dimension (tone, structure, risk), not just random noise; let users combine ("this layout with that palette"); remember the choice as a preference signal (with consent, P10).
- **Measure:** pick rate by position (position bias check), edits after pick.

### P5. Inline diffs and granular accept/reject
- **What:** show AI edits as tracked changes on the object: red/green diff, per-hunk accept/reject, "accept all" (Cursor's editor diffs; canvas "Suggest edits"; Google Docs-style suggestions).
- **When:** any AI transformation of user-owned content.
- **When not:** generating net-new content in an empty doc (a diff of everything is noise; use a preview instead).
- **Rules:** change granularity matches review granularity (sentence / function, not character); unchanged regions stay put; keyboard shortcuts for accept/reject/next; the original is always one action away (P9); for large diffs, **summarize first, rank by risk** (what touches money, data, deletion), then detail.
- **Measure:** acceptance rate per hunk *with* a quality check (accepted-then-reverted, defects found later). High acceptance alone can mean rubber-stamping.

### P6. Artifact / canvas split (separate the conversation from the work)
- **What:** the thread holds intent and discussion; a persistent pane holds the versioned object (Claude Artifacts, June 2024: content "in a dedicated window alongside the conversation"; ChatGPT canvas, Oct 2024; v0's prompt → live preview → iterate).
- **When:** the output will be iterated, reused, shared or exported.
- **Rules:** the object has versions with a visible history and restore; users can edit the object directly (not only via prompts); selecting part of the object scopes the next request to it; the object is shareable/exportable without the chat.
- **Measure:** direct-edit share vs prompt-edit share; return-to-artifact rate; share/export rate.

### P7. Provenance and citations
- **What:** show where claims came from: inline numbered citations linking to the passage, source list up front (Perplexity's core pattern), "based on your notes from 12 Mar" for personal data.
- **When:** any factual, retrieved or personal-data claim; anything the user may forward.
- **When not:** purely creative generation (citations there are theater).
- **Rules:** citation links to the *specific* supporting passage, not a homepage; distinguish "source says" from "model infers"; show freshness (date); make missing support visible ("no source found for this sentence"). A citation the model invented is worse than none: verify links resolve and contain the claim before rendering, where feasible.
- **Evidence caution:** citations and explanations raise trust whether or not the answer is right (see `human-ai-trust-trust-and-reliance.md` §2.3). Use them to enable checking, and make checking cheap (hover preview of the quoted passage).
- **Measure:** citation click-through on high-stakes answers, citation precision in audits (does the source support the claim?).

### P8. Capability and uncertainty disclosure
- **What:** set expectations up front (HAX G1–G2: what it can do, *how well*), label AI-generated content, and show uncertainty where it changes the user's action.
- **Rules:** disclose at the moment of use, not only in onboarding; say what it's bad at, concretely ("may get dates and names wrong"); Apple HIG: never let people think AI content is human-authored. Apple's own fix after inaccurate notification summaries (Jan 2025): summaries rendered in italics and a per-app off switch on the Lock Screen, with news summaries paused.
- **Detail:** confidence displays and error states → `human-ai-trust-errors-uncertainty-oversight.md` if present; otherwise `human-ai-trust-trust-and-reliance.md`.

### P9. Correct, refine, retry, revert (efficient correction)
- **What:** the controls next to every output: Edit, Retry, Adjust, Undo/Revert, "Not this, because…". HAX G8–G9 (*efficient dismissal, efficient correction*); Apple HIG: "surfacing controls like Edit, Undo, Retry, or Adjust near generated content", and acknowledge when a correction takes effect.
- **Rules:** retry keeps the previous version (no destructive regenerate); corrections at the smallest scope possible (fix one sentence, not regenerate all); when blocked, coach (Apple Image Playground: "Unable to use that description" plus better examples) rather than dead-end.
- **Measure:** time from bad output to acceptable output; revert rate; repeated-correction loops (same correction 3+ times = model or UI failure).

### P10. Memory and personalization controls
- **Established product practice (2024–2026):** ChatGPT memory (Feb 2024; "reference chat history" added April 2025) with two toggles and Temporary Chat; Claude memory (Team/Enterprise Sept 2025, Pro/Max Oct 2025) scoped **per project**, viewable and editable, plus Incognito chats; Claude Projects (June 2024) as explicit, user-curated context.
- **Rules (HAX G12–G14, G17; Apple privacy guidance):**
  - **Visible:** a readable list/summary of what is remembered, reachable from where memory is used ("Remembered: you prefer metric units · Edit").
  - **Scoped:** memory partitions match the user's life (work project vs personal); never bleed context between them silently.
  - **Editable and forgettable:** delete one item, all items, or say "forget that"; confirm it took effect.
  - **Off-the-record mode** that is easy to enter and unmistakable while active.
  - **Adapt cautiously** (G14): change behavior gradually and say so ("Using your saved preference: concise answers").
  - Sensitive categories (health, finances, relationships) are not remembered by default.
  - Portable: export/import where possible.
- **When not:** don't personalize where consistency matters more than fit (legal, medical instructions, shared team outputs).
- **Measure:** memory edits/deletions (some is healthy; spikes signal creepy recalls), "how did it know that?" support tickets, opt-out rate, satisfaction for memory-on vs off cohorts.

### P11. Generative and adaptive UI (UI generated per user/task)
- **Established research (adaptive UIs, 2004–2008):**
  - Users preferred *adaptable* menus (user-controlled) over *adaptive* ones (system-rearranged) in Findlater & McGrenere (CHI 2004). [moderate]
  - **Predictability matters as much as accuracy**: Gajos et al. (CHI 2008) found adaptive interfaces help when adaptations are accurate *and* predictable; unpredictable adaptation hurt satisfaction even when accurate. [moderate]
  - Gajos et al. (AVI 2006): adaptations that *add* a shortcut while leaving the original in place beat ones that *move* things. [moderate]
- **Emerging (2024–2026):**
  - Google Research (Leviathan et al., Nov 2025) shipped generative UI in Gemini (dynamic view) and Search AI Mode; in their rater study generated interfaces were strongly preferred over standard LLM text/markdown, second only to human-expert-designed sites, **but the evaluation ignored generation speed**, and results can take a minute or more with occasional inaccuracies. [moderate, vendor study]
  - MCP Apps (official MCP extension, Nov 2025 → stable Jan 2026), building on MCP-UI and the OpenAI Apps SDK: tools return interactive components rendered in sandboxed iframes inside ChatGPT, Claude, VS Code and others. This makes "UI in the answer" a cross-vendor standard.
  - NN/g (2024) envisions per-person interfaces with designers defining guardrails.
- **Risks to the human constants:** learnability (nothing to learn if it changes every time), spatial/motor memory, documentation and support ("click the blue button" no longer exists), accessibility regressions in generated code, brand inconsistency, and testing (infinite states).
- **Rules:**
  1. **Generate content and layout of the answer; keep navigation, primary actions and controls stable.** Adaptation adds; it doesn't move.
  2. Generate *from the design system* (tokens, components) rather than raw HTML; constrain the model to a component vocabulary. Accessibility checks run on every generated surface.
  3. Make adaptations predictable and explainable ("Showing price first because you sorted by price last 3 times · Reset").
  4. Users can pin a generated tool so it stops changing (turn ephemeral into stable).
  5. Prefer *adaptable* (user tunes, AI suggests) over *adaptive* (AI silently changes) for frequent workflows.
- **When:** one-off explanations, comparisons, simulations, onboarding to a concept, long-tail tasks no team would build a screen for.
- **When not:** daily workflows, regulated flows (checkout, consent, cancellation: ethics gate applies; a per-user generated cancel flow is an invitation to dark patterns), anything users must teach each other.
- **Measure:** task success and time vs a static baseline; *second-use* performance (does it stay learnable?); generation latency p75; accessibility audit pass rate of generated output.

### P12. Multimodal input: voice + pointing + camera
- **Established:** combining speech with pointing ("put that there", Bolt 1980) resolves ambiguity that either alone can't; but multimodal ≠ "users always use all modes". Oviatt's "Ten myths of multimodal interaction" (1999): people mix modes selectively, speech is not always primary, and modes carry complementary rather than redundant information. [strong for the myths; decades of follow-up]
- **Current (2024–2026):** live camera + voice assistants (e.g., Gemini Live, ChatGPT voice with video) let users point a phone at the world and ask. Humane AI Pin (shut down Feb 2025 after HP bought its assets for ~$116M) showed the limits of voice-*only*, screenless general computing: latency, errors and missing basics like timers in reviews, plus heat and battery problems. [moderate: consistent review consensus]
- **Rules:**
  - Voice for intent, vision/pointing for reference ("this", "that one"), screen for confirmation and review. Speech is serial and ephemeral; anything to compare or verify needs a visual.
  - Show the transcript and the AI's interpretation; let users correct it by tapping, not re-speaking.
  - Barge-in: the user can interrupt the AI's speech at any time.
  - Respect social context: voice is unusable in offices, transit and late at night; never make it the only path (also an accessibility requirement both ways: speech for motor-impaired users, text/visual for deaf or speech-impaired users).
  - Camera: an obvious recording indicator; on-device processing where possible; ask before capturing other people.
- **Measure:** task completion by modality, correction turns per task, mode-switch rate.

### P13. Proactive / ambient assistance
- **What:** the AI surfaces something unasked: a summary, a reminder, a suggested reply.
- **Rules:** HAX G3 (*time services based on context*), G4 (*show contextually relevant information*), G8 (*efficient dismissal*). Interrupt only for what the user would thank you for; batch the rest. Every proactive item needs a "less like this" control and a global off switch (G17). Label it as AI.
- **Cautionary case:** Apple Intelligence notification summaries produced false news headlines (late 2024); after a BBC complaint Apple paused summaries for news and entertainment apps in iOS 18.3 beta (Jan 2025). Lesson: summarizing third-party content *in that content's voice* moves the blame for errors onto the source. Proactive AI on authoritative content needs higher accuracy than opt-in AI.

### P14. Feedback capture that actually helps
- **Rules:** voluntary and non-blocking (Apple HIG); thumbs up/down beside output plus optional reason chips ("wrong", "too long", "unsafe"); HAX G15 (*granular feedback*), G18 (*notify about changes*); close the loop ("Thanks, we'll use shorter answers"). Implicit signals (accept, edit, revert, copy) are richer than explicit ratings. Collect them with disclosure.

---

## 5. The official guideline sets, compressed

**Microsoft HAX: 18 Guidelines for Human-AI Interaction** (Amershi et al., CHI 2019, validated with 49 practitioners against 20 products) [strong as a consensus checklist]
- *Initially:* G1 make clear what the system can do · G2 make clear how well it can do it.
- *During interaction:* G3 time services based on context · G4 show contextually relevant info · G5 match relevant social norms · G6 mitigate social biases.
- *When wrong:* G7 support efficient invocation · G8 efficient dismissal · G9 efficient correction · G10 scope services when in doubt · G11 make clear why the system did what it did.
- *Over time:* G12 remember recent interactions · G13 learn from user behavior · G14 update and adapt cautiously · G15 encourage granular feedback · G16 convey the consequences of user actions · G17 provide global controls · G18 notify users about changes.
- Use: run the 18 as a heuristic evaluation pass on any AI feature (severity-rank violations as in `process/heuristics-and-critique.md`).

**Google PAIR People + AI Guidebook** (2019; 2nd edition 2021) [moderate: practitioner guidance]: six chapters: *User Needs + Defining Success* (does this need AI? automate vs augment), *Data Collection + Evaluation*, *Mental Models*, *Explainability + Trust* (calibrate, don't maximize), *Feedback + Control*, *Errors + Graceful Failure*. Most useful early question: *would a non-AI solution do the job?*

**Apple HIG: Generative AI** (new June 2025; updated June 8, 2026) [moderate: platform guidance]: keep people in control (dismiss, revert, retry); clearly identify AI; never imply human authorship; offer a non-AI fallback where possible; curated suggestions and example inputs; warn about hallucinations and avoid factual generation where errors could harm; **get permission before irreversible or problematic actions** (deleting photos, purchases); Edit/Undo/Retry/Adjust near outputs; specific progress messages; offer alternate versions; voluntary, non-interrupting feedback; prefer on-device models and disclose what goes to servers; decouple model from UX so it can be swapped. (Apple's separate *Machine learning* HIG page covers non-generative ML: calibrated confidence, corrections, implicit/explicit feedback.)

**Where they agree (treat as defaults):** say what it can and can't do; keep the human in control; make correction cheaper than acceptance-by-default; remember carefully and visibly; fail gracefully; label AI.

---

## 6. Anti-patterns

- **Chatbot-as-strategy:** a chat sidebar bolted onto a product whose users work on objects. Fix: inline verbs on selection + canvas.
- **Sparkle-button soup:** an "AI ✨" button on every surface with no stated capability. Fix: name the verb ("Summarize thread").
- **Destructive regenerate:** retry overwrites the previous version.
- **Wall-of-text diff:** returning a full rewritten document instead of changes.
- **Confident fabrication with decorative citations:** links that don't support the claim.
- **Shape-shifting UI:** generative layouts that move primary controls between visits.
- **Silent memory:** personalization the user can't see, scope or delete ("how does it know that?").
- **Voice-only for visual tasks:** asking people to compare options by listening.
- **Spinner for 40 seconds:** no stages, no stop, no background.
- **Anthropomorphic over-promise:** a warm persona and human name for a system with high error rates (trust without accuracy).
- **Ghost text that fights typing:** suggestions arriving late or replacing what the user is typing.
- **AI in the cancellation, consent or pricing path that personalizes friction:** a dark pattern at scale; the ethics gate applies (`psychology/behavior-ethics-dark-patterns.md`).

---

## 7. How to measure AI interaction quality

Satisfaction and "acceptance rate" alone mislead: people accept bad output and feel faster when they aren't (METR 2025 RCT: experienced developers were 19% *slower* with early-2025 AI tools while estimating they were ~20% faster [moderate: n=16, one context]).

| Question | Metric (primary) | Guardrail |
|---|---|---|
| Does it get the job done? | Task success rate on a benchmark task set, AI vs non-AI baseline | Error/defect rate found downstream |
| Is it faster for real? | Time-to-acceptable-output (measured, not self-reported) | Rework within 7 days |
| Is reliance calibrated? | Accept rate on *correct* vs *incorrect* outputs (seeded audits) | Over-reliance rate (accepting known-wrong output) |
| Is correction cheap? | Turns/time from bad output to good; revert rate | Repeated-correction loops |
| Is it learnable? | Second- and fifth-use success/time | Support tickets mentioning "where did X go" |
| Is memory welcome? | Retention/satisfaction memory-on vs off | Memory deletions, creepiness reports |
| Is it honest? | Citation precision in audits | Complaints about fabricated claims |

Tie these to HEART/OEC in `data-driven/metrics-frameworks.md`. A/B test AI features like any other, with novelty-effect cohorts: AI features often spike then decay.

---

## 8. Checklist (run on any AI feature)

- [ ] Named the interaction model (ambient / inline / copilot / canvas / generative UI / agent) and why it fits this task.
- [ ] Non-AI alternative considered; non-AI fallback exists where AI isn't essential.
- [ ] Empty state shows capability with context-aware suggestions (no blank box only).
- [ ] Recurring prompt context turned into controls.
- [ ] Ack < 100 ms; streaming or skeleton chosen deliberately; Stop available; specific stage messages after ~2 s; backgrounding after ~10 s.
- [ ] Edits shown as diffs with granular accept/reject; original always restorable; versions kept.
- [ ] Factual/personal claims carry checkable provenance.
- [ ] AI content labeled; limitations stated at point of use.
- [ ] Memory visible, scoped, editable, forgettable; incognito mode exists.
- [ ] Generated/adaptive UI keeps navigation and primary actions stable and uses design-system components.
- [ ] Multimodal: transcript + interpretation shown, tap-to-correct, barge-in, never voice-only.
- [ ] All AI states designed: thinking, streaming, partial, stopped, refused/blocked, wrong, offline/model unavailable, rate-limited (`process/states-and-edge-cases.md`).
- [ ] HAX 18 pass done; violations severity-ranked.
- [ ] Metrics include measured time and calibrated reliance, not just satisfaction and accept rate.

---

## Sources

- Nielsen, J. (2023). *AI: First New UI Paradigm in 60 Years.* NN/g. https://www.nngroup.com/articles/ai-paradigm/
- Nielsen, J. (2024–25). *Intent by Discovery: Designing the AI User Experience.* https://jakobnielsenphd.substack.com/p/intent-ux
- Moran, K. & Gibbons, S. (2024). *Generative UI and Outcome-Oriented Design.* NN/g. https://www.nngroup.com/articles/generative-ui/
- Wattenberger, A. (2023). *Why Chatbots Are Not the Future.* https://wattenberger.com/thoughts/boo-chatbots
- Appleton, M. (2023). *Language Model Sketchbook, or Why I Hate Chatbots.* https://maggieappleton.com/lm-sketchbook
- Lee, L. (2022). *Imagining better interfaces to language models.* https://thesephist.com/posts/latent/ · (2024) *What makes a good human interface?* https://thesephist.com/posts/dm/ · *Instrumental interfaces, engaged interfaces* https://thesephist.com/posts/interface/
- Litt, G. (2025). *Enough AI copilots! We need AI HUDs.* https://geoffreylitt.com/2025/07/27/enough-ai-copilots-we-need-ai-huds
- Litt, G., Horowitz, J., van Hardenberg, P., Matthews, T. (2025). *Malleable Software.* Ink & Switch. https://www.inkandswitch.com/essay/malleable-software/
- Amershi, S. et al. (2019). *Guidelines for Human-AI Interaction.* CHI. https://doi.org/10.1145/3290605.3300233 · HAX Toolkit https://www.microsoft.com/en-us/haxtoolkit/library/
- Google PAIR (2019/2021). *People + AI Guidebook.* https://pair.withgoogle.com/guidebook/
- Apple (2025, updated 2026). *Human Interface Guidelines: Generative AI.* https://developer.apple.com/design/human-interface-guidelines/generative-ai
- Findlater, L. & McGrenere, J. (2004). *A comparison of static, adaptive, and adaptable menus.* CHI. https://doi.org/10.1145/985692.985704
- Gajos, K. et al. (2006). *Exploring the design space for adaptive GUIs.* AVI. https://doi.org/10.1145/1133265.1133306
- Gajos, K. et al. (2008). *Predictability and accuracy in adaptive user interfaces.* CHI. https://doi.org/10.1145/1357054.1357252
- Leviathan, Y. et al. (2025). *Generative UI* (Google Research blog + paper "Generative UI: LLMs are Effective UI Generators"). https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/
- MCP (2025–26). *MCP Apps.* https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/
- Bolt, R. (1980). *"Put-that-there".* SIGGRAPH. https://doi.org/10.1145/800250.807503
- Oviatt, S. (1999). *Ten myths of multimodal interaction.* CACM. https://doi.org/10.1145/319382.319398
- OpenAI (2024). *Introducing canvas.* https://openai.com/index/introducing-canvas/ · (2024/2025) *Memory and new controls for ChatGPT.* https://openai.com/index/memory-and-new-controls-for-chatgpt/
- Anthropic (2024). *Claude 3.5 Sonnet* (Artifacts). https://www.anthropic.com/news/claude-3-5-sonnet · (2025) *Memory.* https://www.anthropic.com/news/memory
- TechCrunch (2025-01-16). *Apple pauses AI notification summaries for news.* https://techcrunch.com/2025/01/16/apple-pauses-ai-notification-summaries-for-news-after-generating-false-alerts
- METR (2025). *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.* https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
