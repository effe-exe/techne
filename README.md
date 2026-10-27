# techne

*τέχνη: craft knowledge that can give an account of why it works.*

A product design skill for Claude that puts evidence first. It works for any digital product design task, from changing a button's padding to designing a full product or design system. It is **data-driven first**, **ethical** (it refuses dark patterns and offers honest alternatives) and **opinionated** (it leads with a recommendation, the evidence for it and how confident it is).

## What's inside

```
skills/techne/
  SKILL.md              core: operating loop, principles, ethics gate, mode router
  modes/                18 modes (see below)
  references/           domain knowledge, loaded on demand (see references/INDEX.md)
    data-driven/        experimentation playbook, stats cheat-sheet, metrics, decisions from data, conversion evidence
    psychology/         perception, attention, memory, load, motor/timing, emotion/habit, persuasion, pricing, ethics, law
    masters/            master lenses (Vitruvius → Rams → Victor → Linear), timeless principles, taste
    process/            process playbook, research selector, heuristics & critique, states & edge cases, redesign at scale
    visual/             typography, foundries catalog, color (OKLCH), layout & spacing, polish checklist
    interaction/        motion (real values), platform conventions, accessibility (WCAG 2.2), design systems
    build/              Figma craft & MCP, Next.js/React prototyping, SwiftUI, tokens bridge
    inspiration/        taste model (what great measurably looks like), source registry, brief → style DNA → tokens method, seed gallery, library update procedure
    future/             AI-native patterns, agent UX, trust, futures methods, human constants, AI workflow, AI ethics
    books/              133 source notes: 64 from full free texts, 69 from authors' own free material
  library/              the taste library: 345 curated websites & apps, scored, with "what to steal" and measured style DNA
  scripts/              sample_size.py · library.py · style-dna.mjs · arena.py · ingest.py · build_index.py · build_books_index.py
  templates/            test brief · book notes · library-update scheduled prompt
commands/               /techne:<mode> slash commands for Claude Code
SOURCES.md              every source and how it is covered (full free text / author's free material / not covered)
books/                  optional: files you own, for ingestion (git-ignored)
evals/                  blind A/B evaluation method + log
```

## Modes

Use a mode directly in Claude Code (`/techne:<mode> <your prompt>`), or just describe the task and techne picks the mode. Modes chain: `from-scratch` runs most of the others in order.

### Start from nothing

| Mode | Try it with | You get |
|---|---|---|
| `from-scratch` | `/techne:from-scratch A habit-tracking app for people with ADHD. It has to stand next to Streaks and Finch.` | The whole product in one folder: brief with evidence, brand, 3 concepts plus a recommendation, flows, a working prototype with screenshots, a test plan with real sample sizes, and a list of decisions and assumptions |
| `brand` | `/techne:brand A specialty-coffee subscription for offices. Category leader: Trade.` | Brand idea, name options, 1–3 ownable signature assets with a loud/quiet map, tokens, and proof on a home page, a product screen and an icon. Checked with the logo-off test and a side-by-side against the leader |
| `envision` | `/techne:envision What does a banking app look like in 2030 when an agent does most of the work?` | Human constants, signals, 3 horizon concepts (now / hybrid / native), a human stress test, and the first shippable step |

### Improve what exists (data-driven)

| Mode | Try it with | You get |
|---|---|---|
| `optimize` | `/techne:optimize Our checkout converts 41% → 22% → 18% from cart to pay. Here's the flow: …` | Flow map with drop-offs, diagnosis, ranked opportunities, 3 test briefs |
| `experiment` | `/techne:experiment Should we test an annual-first plan picker? Baseline 3% trial start, 60k visitors/week.` | Hypothesis, metric + guardrails, sample size and duration, decision rule, or a readout of your results |
| `redesign` | `/techne:redesign Our settings area has grown to 140 options. Redesign it without breaking power users.` | Iterate-vs-rebuild call, 3 concepts, chosen direction, staged rollout with holdback |
| `critique` | `/techne:critique` + a screenshot, Figma link or URL | A verdict, severity-ranked issues, the top 3 fixes with exact values, what to keep, and what to test |

### Make and refine

| Mode | Try it with | You get |
|---|---|---|
| `visual` | `/techne:visual A calm, premium dashboard for a solar-panel owner app` | Taste calibration against the library, style DNA, tokens, screens |
| `flow` | `/techne:flow Password reset with SMS fallback and a locked-account path` | Mermaid flow including failure states, a step table, analytics events |
| `system` | `/techne:system Audit our 4 button variants and propose tokens` | Value inventory, every inconsistency named, DTCG tokens, a refactored component |
| `tweak` | `/techne:tweak This CTA feels weak` + snippet | Exact before → after values using your tokens, one-line reason, ship-or-test call |
| `copy` | `/techne:copy Error message when a card is declined` | Final copy + 2 alternatives, character counts, rationale |
| `inspire` | `/techne:inspire Like Teenage Engineering, but for a note-taking app` + links or images | 5–15 references with what to steal, measured style DNA, starter tokens |
| `research` | `/techne:research Why do trial users never invite teammates?` | Method choice, interview guide, or a synthesis into insights and hypotheses |

### AI, tools and upkeep

| Mode | Try it with | You get |
|---|---|---|
| `ai-feature` | `/techne:ai-feature Add an AI assistant to our expense app` | AI-fit verdict, autonomy level, the full loop incl. failure states, abuse and consent checks, metrics + eval rubric |
| `prototype` | `/techne:prototype Build the onboarding from this spec in Next.js` | Working code with all states reachable, screenshots, how to run it |
| `figma` | `/techne:figma <figma link> Make the empty state for this list` | Edits built with your file's components and variables |
| `library` | `/techne:library add https://example.com` or `ingest books/<file>.pdf` | Scored library entry with measured style DNA, or distilled book notes |

## Example: from one prompt to a branded product

This is the flow techne ran in its third blind test (`evals/README.md`). Prompt:

> `/techne:from-scratch` Design the AI-enhanced version of a large-file-transfer service with tens of millions of users, and give it a brand that can stand next to the category leader. Here's the leader's homepage: [screenshot].

What techne did, in order:
1. **Framed it:** the jobs of senders and recipients, public evidence (including a 2025 backlash over AI terms in the category), and success metrics with guardrails.
2. **Abuse first:** phishing and impersonation are the category's real threat. That shaped the concept: AI may *describe* a transfer but never call it safe.
3. **Concepts:** three far-apart directions, one recommended.
4. **Brand:** an original name and idea. Its signature assets: a signal-yellow field, condensed stencil display type, a luggage-tag send tool, and per-transfer signal flags that match across email and download page, which also act as an anti-phishing cue. None of the leader's assets were borrowed.
5. **Calibrated taste** against the nearest exemplars in the taste library, then designed the home page with the send tool inside it, the send flow and the recipient page.
6. **Prototype:** Next.js, every state reachable (verified, first-time sender, blocked file, expired, password, interrupted download), screenshots at 390 and 1440 in light and dark.
7. **Self-checks:** the logo-off test, a side-by-side against the leader, state consistency (a blocked file changes every surface), and visual weight following trust.
8. **Ship plan:** AI off by default and file names only, three experiments with computed sample sizes, a staged rollout with a holdback, and pre-registered decision rules.

A blind judge ranked it first of three (74.5/90). It was the only brand they said could stand next to the leader.

## Install

**Claude Code (plugin, gives you `/techne:<mode>` commands)**
```
/plugin marketplace add effe-exe/techne
/plugin install techne@techne
```
Or for one project: copy `skills/techne` to `.claude/skills/techne`. For all projects: copy it to `~/.claude/skills/techne`.

**claude.ai / Claude desktop / Cowork:** run `./scripts/package.sh`, then upload `dist/techne.zip` under Settings → Capabilities → Skills.

**Figma:** connect the Figma connector (claude.ai) or the Figma MCP server (Claude Code). The `figma` mode uses it.

## Growing it

- **Sources:** legally free material only. To add a book you own, put it in `books/` and run `/techne:library ingest books/<file>.pdf`.
- **References:** run `/techne:library add <url>`. A weekly scheduled refresh opens a PR with new curated entries (prompt: `skills/techne/templates/library-update-prompt.md`).
- **Index:** after adding or editing reference files, run `python3 skills/techne/scripts/build_index.py`.

## Rules for this repo

- Never commit employer-confidential material: screens, data, metrics or names.
- Never commit copyrighted source files or long verbatim passages. Only distilled notes.

## License

Code under MIT (`LICENSE`); written content under CC BY 4.0 (`LICENSE-CONTENT`). Third-party material keeps its own terms; see `NOTICE.md`.
