# Design Systems as AI Substrate, and Agents as a Second User

> **Use this when:** making a design system machine-readable so AI tools generate on-brand, correct UI (tokens, component docs, usage rules, Figma MCP, Code Connect, rules files), or designing a product that AI agents will read, operate or transact with on a human's behalf.
> **Also use when:** someone asks "should we add llms.txt / an MCP server / agent mode?", AI-generated screens keep drifting off-system, or a stakeholder says "agents will replace the UI".
> **Skip when:** designing the human-facing UX of your own AI feature → `ai-patterns-interaction-pattern-library.md`; general token and component craft → `interaction/design-systems.md`, `build/tokens-bridge.md`, `build/figma-craft-and-mcp.md`.

---

## 0. Point of view

1. **AI generates whatever your system makes easy.** If the system is ambiguous, undocumented or split between Figma and code, the model guesses and fills the gaps with the internet's median UI. A design system is now a *spec for machines* as much as a library for people.
2. **Write rules, not just parts.** Components tell a generator *what exists*. Usage rules (when and when not, hierarchy limits, content rules, states required) tell it *what is right*. Most systems ship the first and skip the second.
3. **The agent is a second user, and the human is still the principal.** Agents read your product through structure (accessibility tree, APIs, MCP tools, structured data). Design for them, but every agent action is ultimately judged by a human with ordinary perception, memory, trust and need for control. The human constants decide the confirmation, review and recourse design.
4. **Good accessibility work is agent work.** Semantic HTML, labelled controls and predictable structure serve screen readers and browser agents alike. Playwright MCP drives pages through the accessibility tree rather than pixels, so unlabelled `div` buttons are invisible to both [moderate].
5. **Don't chase every protocol.** Agent standards move monthly. Bet on durable layers (semantic structure, clean APIs, tokens in the open standard format, good docs), and be careful with formats that have no evidence of consumption (llms.txt for search, §3.3).

---

## 1. Established vs emerging vs speculative

| Claim | Status |
|---|---|
| Linking Figma components to code (Code Connect) improves AI reuse of real components; without it the model guesses | Established in vendor docs, consistent practitioner reports [moderate] |
| Design tokens have a stable, vendor-neutral format: DTCG spec 2025.10 (Oct 28 2025; Format, Color, Resolver modules; theming, multi-brand, OKLCH/P3) | Established [strong as a fact; adoption still growing] |
| MCP is the de facto standard for connecting agents to tools and data: launched by Anthropic Nov 2024; donated Dec 9 2025 to the Agentic AI Foundation (Linux Foundation) with OpenAI and Block; adopted by ChatGPT, Cursor, Gemini, VS Code; 10,000+ public servers (Anthropic's count) | Established [strong as a fact] |
| MCP Apps (SEP-1865): servers can return interactive HTML UI rendered inside the agent's chat, building on MCP-UI and the OpenAI Apps SDK; proposed Nov 2025, finalized early 2026 | Emerging [moderate] |
| Agentic checkout protocols (e.g. Stripe/OpenAI Agentic Commerce Protocol, Sept 2025: scoped payment tokens, merchant stays merchant of record) | Emerging [moderate as fact; UX evidence thin] |
| llms.txt improves AI search visibility | Not supported: Ahrefs (137k domains, May 2026) found 97% of llms.txt files received zero requests; Google said it doesn't use it [moderate, vendor data]. Useful mainly for developer docs read by coding agents [weak] |
| Browser/computer-use agents reliably operate arbitrary GUIs | Contested: OSWorld human baseline 72.36%; top verified agents ~60% (early 2026), self-reported claims higher; scores differ by version [moderate] |
| By 2030 a large share of transactions in some categories (travel, retail reorders, support) start from an agent | Speculative |

---

## 2. Design system as substrate: what to make machine-readable

### 2.1 The five layers (build in order)

1. **Tokens** in DTCG format, with role names (`color.bg.surface`, `space.inset.md`), not values (`blue-500`), plus modes (light/dark, density, brand) and *code syntax* on every Figma variable so tools emit `var(--color-bg-surface)`, not hex (`build/tokens-bridge.md`).
2. **Components** with the same names and props in Figma and code (`Variant=Primary` ↔ `variant="primary"`), mapped with Code Connect, and every state built (hover, focus, disabled, loading, error).
3. **Usage rules**, machine-readable: for each component, *use when / don't use when*, maximum per view (e.g. one primary button per view), allowed content lengths, required states, a11y requirements, and the do/don't pairs.
4. **Patterns and page templates:** compositions for recurring jobs (form, settings, empty state, error recovery, paywall) with rules about hierarchy and copy.
5. **Rules file for agents:** a concise instructions file in the repo (e.g. `AGENTS.md`, CLAUDE.md, Cursor rules, or Figma MCP's generated design-system rules) that tells the coding agent which components, tokens, conventions and checks to use. AGENTS.md is a founding project of the Agentic AI Foundation alongside MCP [moderate].

### 2.2 Component doc template (machine- and human-readable)

```md
## Button
Purpose: trigger one action. Import: `import { Button } from "@/components/ui/button"`
Props: variant = primary | secondary | ghost | destructive; size = sm | md | lg; loading: boolean
Use when: the action is immediate and labelled by a verb.
Don't use when: navigating (use Link); toggling state (use Switch); >1 primary per view.
Rules: label = verb + object, ≤ 3 words; destructive requires undo or a confirm with a specific verb;
       min target 44×44 px touch / 24×24 px pointer; never color-only state.
States required: default, hover, focus-visible, active, disabled, loading.
A11y: native <button>; aria-busy while loading; focus ring token `focus.ring`.
Example: <Button variant="primary">Save changes</Button>
Anti-example: <div onClick> styled as a button.
```

Put these next to the code (MDX/Storybook) *and* expose them to tools (the MCP server, repo rules files). One source of truth; generate the rest.

### 2.3 Workflow with Figma MCP / Code Connect (2025–2026)
- Connect the official Figma MCP server (remote or desktop) to the coding agent. `get_design_context` returns structure, styles and Code Connect snippets, and its output is a *reference to adapt* (`build/figma-craft-and-mcp.md` §7).
- Map the top ~20 most-used components with Code Connect first (Pareto). Unmapped components produce generated divs.
- Generate a design-system rules file (Figma's MCP offers one) and commit it with the repo's agent instructions.
- Name layers by anatomy; bind every value to a variable. The MCP output only knows what the file encodes.
- **Check AI output against the system automatically:** lint for raw hex/px values, unknown components and missing states; run axe for a11y; take visual regression screenshots of the key screens.

### 2.4 Measure the substrate
- **Token coverage** of generated code: share of style values that reference tokens (target ≥ 95%).
- **Component reuse rate:** share of generated UI elements that are system components vs ad-hoc.
- **Drift rate:** lint violations per AI-authored PR.
- **Edit distance from AI output to merged code** for system-related changes. This should fall as rules improve.
- **Time to first on-system prototype** from a brief.

### 2.5 Anti-patterns
- Feeding the agent screenshots only, with no tokens, components or rules.
- Rules written as vibes ("keep it clean") instead of testable constraints.
- Figma and code with different names: every generation becomes a translation guess.
- Letting AI *create* new components silently. New components go through governance.
- A system with only happy-path states: the generator will skip error and empty states too.

---

## 3. Designing for agents as users

### 3.1 Who the agent user is
An agent acts **for** a human principal (booking, buying, filing, triaging, coding), reads your product through structure, and has no patience, no peripheral vision, no brand memory and no common sense about ambiguous UI. It *is* vulnerable to hostile content in pages (prompt injection), so the human must stay in control of consequential actions (`ai-patterns-agent-delegation-ux.md` §4).

### 3.2 Interfaces agents use (pick by product type)

| Surface | Use when | Design work |
|---|---|---|
| **Semantic, accessible web UI** | Always; it's the fallback every browser agent uses | Native elements, labels, landmarks, stable names, no hover-only or drag-only critical actions, predictable URLs, clear error messages in text |
| **Public/partner API** | You have actions worth automating | Resource names matching user vocabulary, idempotent writes, clear errors, dry-run/preview endpoints |
| **MCP server** | Users work inside agents (Claude, ChatGPT, Cursor) and want your product's actions there | Few, well-named, task-level tools (not every endpoint), helpful descriptions, concise outputs, scoped permissions; evaluate tools with real agent tasks (Anthropic, *Writing effective tools for agents*, 2025) |
| **MCP Apps / Apps SDK UI** | The task needs visual choice or confirmation inside chat (seat map, product compare, chart) | Small, focused, accessible views; one decision per view; the confirm step lives in a UI the human sees |
| **Structured data** (schema.org, product feeds, OpenAPI) | Commerce, local, content discovery | Accurate, current prices/stock/policies; machine-readable return and cancellation terms |
| **llms.txt / markdown docs** | Developer products read by coding agents | Clean markdown docs; "copy as markdown"; versioned. Don't expect search gains (§1) |
| **Agentic checkout protocols** | You sell, and buyers delegate purchases | Scoped payment authority, order confirmation to the human, easy cancel and refund |

### 3.3 Principles
1. **One capability, two front doors.** Design the action model once (nouns, verbs, constraints, errors) and expose it to people as UI and to agents as tools. If they diverge, they will drift apart.
2. **Task-level tools, not endpoint dumps.** "Schedule meeting", not "list users + list events + create event". Agents choose better from fewer, clearer tools.
3. **Reversibility and preview are contracts.** Every write offers a preview/dry-run, idempotency and an undo window. Irreversible actions require explicit human confirmation in a human-visible surface.
4. **Scope authority to the job.** Spending limits, time windows and per-merchant tokens (ACP's scoped token is the model). The human sees and can revoke every delegation.
5. **Errors in plain language, machine-parseable.** Name the cause and the fix (`card_expired: ask the user for a new card`), never just a 500.
6. **Honesty to the agent is honesty to the user.** No hidden fees revealed only at the last step, no pre-checked add-ons in API defaults, no "agent-only" dark patterns. The ethics gate (SKILL.md §3) applies to machine-facing surfaces too, and regulators judge the outcome for the human.
7. **Report back to the human.** After an agent acts, send a human-readable receipt: what was done, for how much, how to undo it. This follows peak-end: the receipt *is* the ending.
8. **Don't break humans to serve agents.** Agent-friendliness never justifies removing the visual UI, the reading path or the support channel for people who don't use agents.

### 3.4 Patterns, with when / when not
- **Confirmation card in chat (MCP Apps):** use for purchases, sends and bookings. Don't use for reversible low-stakes actions, where it causes approval fatigue.
- **Agent activity log in your product:** list everything done by agents on the user's behalf, filterable, with undo. Always use it when agents write data.
- **"Connected agents" settings page:** permissions per agent, last used, revoke. Use it when you offer an MCP server or OAuth to agents.
- **Machine-readable policy pages** (returns, cancellation, pricing): use in commerce and subscriptions. They help agents and humans compare honestly.
- **Agent-detectable but not agent-hostile:** rate-limit and authenticate, but don't use CAPTCHAs on flows that users legitimately delegate. Offer the API or MCP route instead.

### 3.5 Measuring agent-facing surfaces
- **Agent task success** on a scripted benchmark of your top tasks (run real agents against staging weekly; track pass^k, see `ai-workflow-metrics-and-evals.md`).
- **Tool selection accuracy:** the agent picked the right tool on the first try.
- **Human-confirmation rate and reversal rate** for agent actions; complaints like "the agent bought the wrong thing".
- **Share of traffic or transactions agent-initiated** (via user agents, MCP calls) and their refund/support rate vs human-initiated.
- **Accessibility score** as a leading indicator of browser-agent success.

---

## 4. 2030 projection (informed speculation, labelled)

- **[speculative]** Products ship a "capability layer" (tools + rules + UI fragments) as a first-class artifact. The design system grows into a *behavior system*: tokens, components, rules, voice, and tool definitions with their confirmation patterns.
- **[speculative]** Generative UI composes screens per task from the system at runtime. That only works if the system's rules are explicit enough to keep hierarchy, conventions and accessibility intact. The human constants (one focal point, ≤ ~4 chunks, stable positions for habitual actions) become *runtime constraints* that the generator must obey, which is why designers will write them.
- **[speculative]** Many "visits" will be agents. The human-facing UI shifts toward moments of choice, trust, oversight and delight (comparisons, confirmations, receipts, exceptions), while routine steps move to delegation.
- **[speculative, high confidence in the constant]** Whatever the channel, people still need to see what was done for them, understand it in a glance, and undo it. Design those moments first.

---

## 5. Checklist

- [ ] Tokens in DTCG format, role-named, with modes and code syntax.
- [ ] Top components mapped with Code Connect; Figma and code share names and props.
- [ ] Each component has use/don't-use, limits, required states and a11y rules in a machine-readable doc.
- [ ] A repo rules file (AGENTS.md/CLAUDE.md/etc.) points agents to the system; lint plus axe run on AI-authored PRs.
- [ ] Substrate metrics tracked: token coverage, reuse rate, drift.
- [ ] Web UI is semantic and labelled (the browser-agent fallback works).
- [ ] Agent-facing actions are task-level, previewable, idempotent, scoped and revocable.
- [ ] Irreversible agent actions are confirmed by the human in a visible surface; a receipt with undo follows.
- [ ] No machine-facing dark patterns; prices, fees and policies are machine-readable and true.
- [ ] Agent task benchmark runs regularly; agent-initiated outcomes are compared with human-initiated ones.
- [ ] llms.txt (if any) justified by a developer-docs audience, not by SEO hopes.

---

## Sources

- Figma (2025–2026). *Figma MCP server* developer docs; Code Connect docs. https://developers.figma.com/docs/figma-mcp-server/ ; https://github.com/figma/mcp-server-guide [moderate: vendor]
- Design Tokens Community Group (2025, Oct 28). *Design Tokens specification reaches first stable version (2025.10).* https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/ ; https://www.designtokens.org/tr/2025.10/ [strong as a fact]
- Anthropic (2025, Dec 9). *Donating the Model Context Protocol and establishing the Agentic AI Foundation.* https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation [strong as a fact]
- MCP (2025–2026). *SEP-1865: MCP Apps — Interactive User Interfaces for MCP*; blog announcement 2025-11-21. https://modelcontextprotocol.io/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp ; https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/ [moderate]
- Anthropic Engineering (2025). *Writing effective tools for agents — with agents.* https://www.anthropic.com/engineering/writing-tools-for-agents [moderate: practitioner]
- Microsoft (2025). *Playwright MCP* (accessibility-tree-based browser automation). https://github.com/microsoft/playwright-mcp [moderate]
- Howard, J. (2024). *The /llms.txt file* proposal. https://llmstxt.org/ [proposal]
- Ahrefs (2026). *We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read.* https://ahrefs.com/blog/llmstxt-study/ [moderate: vendor data]
- Xie, T. et al. (2024). *OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments.* NeurIPS 2024. https://os-world.github.io/ [moderate]
- Stripe (2025, Sept). *Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol co-developed with OpenAI.* https://stripe.com/newsroom/news/stripe-openai-instant-checkout [moderate as fact]
- AGENTS.md (2025). Open format for agent instructions in repositories. https://agents.md/ [moderate as fact]
