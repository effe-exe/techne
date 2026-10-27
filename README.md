# techne

*τέχνη: craft knowledge that can give an account of why it works.*

A product design skill for Claude that puts evidence first. It works for any digital product design task, from changing a button's padding to designing a full product or design system. It is **data-driven first**, **ethical** (it refuses dark patterns and offers honest alternatives) and **opinionated** (it leads with a recommendation, the evidence for it and how confident it is).

## What's inside

```
skills/techne/
  SKILL.md              core: operating loop, principles, ethics gate, mode router
  modes/                16 modes (see below)
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
  scripts/              sample_size.py · library.py · arena.py · ingest.py · build_index.py
  templates/            test brief · book notes · library-update scheduled prompt
commands/               /techne:<mode> slash commands for Claude Code
SOURCES.md              every source and how it is covered (full free text / author's free material / not covered)
books/                  optional: files you own, for ingestion (git-ignored)
evals/                  blind A/B evaluation method + log
```

## Modes

| | Mode | For |
|---|---|---|
| S | `tweak` | one property or element |
| S | `critique` | severity-ranked, opinionated review |
| S | `copy` | microcopy, errors, CTAs, paywall text |
| **Data** | `experiment` | hypotheses, metrics, sample size, reading results |
| **Data** | `optimize` | funnel diagnosis → next small wins |
| M | `flow` | user flows, IA, navigation |
| M | `visual` | screens and art direction |
| M | `inspire` | references from your input → style DNA → tokens |
| M | `research` | research plans and synthesis |
| L | `redesign` | new products and full redesigns |
| L | `system` | design systems and tokens |
| Tool | `figma` | read, build or edit in Figma (Figma MCP) |
| Tool | `prototype` | Next.js/React or SwiftUI prototypes |
| Tool | `library` | add references, scheduled refresh, ingest books |
| **Future** | `ai-feature` | AI features & agents: autonomy, trust, failure, evals |
| **Future** | `envision` | the UI of tomorrow, designed from human constants outward |

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
- **References:** run `/techne:library add <url>`, or schedule a weekly refresh using `skills/techne/templates/library-update-prompt.md`.
- **Index:** after adding or editing reference files, run `python3 skills/techne/scripts/build_index.py`.

## Rules for this repo

- Never commit employer-confidential material: screens, data, metrics or names.
- Never commit copyrighted source files or long verbatim passages. Only distilled notes.

## License

Code under MIT (`LICENSE`); written content under CC BY 4.0 (`LICENSE-CONTENT`). Third-party material keeps its own terms; see `NOTICE.md`.
