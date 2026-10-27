---
id: 2026-10-27-svelte-interactive-tutorial
title: "Svelte — interactive tutorial"
url: https://svelte.dev/tutorial
found_via: "Official Svelte tutorial, frequently cited as a gold standard for in-browser learning; inspected live"
kind: website
tags: [domain:devtools,domain:education,platform:web,surface:docs,surface:editor,quality:clarity,style:editorial,technique:split-pane-tutorial,technique:solve-button,technique:in-browser-compiler]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 5, originality: 4, transferability: 5, evidence: 3, ethics: pass }
total: 21
---

## What to steal (principle, 1–3 bullets)
- Teach in the real tool: prose on the left, a live editor and preview on the right, and a 'solve' button so nobody gets stuck.

## Why it works
- Three-region layout: lesson prose (Georgia-like serif 18/1.5, DM Serif Display 30 headings) on the left ~42ch; file tree + code editor top right; live preview bottom right with 'loading svelte compiler' state.
- Breadcrumb 'Basic Svelte / Introduction / Welcome to Svelte' with back/forward arrows and a 'solve' button top-right of the lesson.
- Fira Sans UI, Fira Mono code; Svelte orange rgb(212,48,8) only for the active tab, current file and the conference banner.
- Small radii (2–4px), almost no shadows; header with Ctrl K search, font toggle 'A' and dark mode.

## Where it applies / where it doesn't
- Applies: any learning or onboarding where the user must practise; interactive product tours.
- Doesn't: content that cannot run in the browser; heavy compilers need good loading states.

## Style DNA (optional, compact)
type: serif prose 18/1.5, DM Serif Display 30, Fira Sans UI, Fira Mono · color: white/rgb(250,250,250), rgb(38,38,38) ink, Svelte orange rgb(212,48,8) · shape: 2–4px · motion: 0.1–0.2s

## Notes / open questions
DNA: library/dna/2026-10-27-svelte-interactive-tutorial.json (1440x900, one load).
