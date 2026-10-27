---
id: 2026-10-27-exa-search-api-site
title: "Exa — search API site"
url: https://exa.ai
found_via: "techne category brief (AI infrastructure for agents); devtools design canon for live-playground heroes"
kind: website
tags: [domain:ai,domain:devtools,platform:web,surface:landing,surface:search,quality:clarity,quality:performance,style:editorial,style:minimal,technique:live-playground,technique:latency-tradeoff-control,technique:output-format-toggle]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 4, originality: 4, transferability: 5, evidence: 3, ethics: pass }
total: 20
---

## What to steal (principle, 1–3 bullets)
- Expose the speed–quality trade-off as an explicit control with real costs on each option — 'Lite 450ms · Auto 1s · Deep ~10s' — so users choose depth knowingly instead of waiting blindly.

## Why it works
- Serif headline (Arizona 63px, -1.9px) 'The world's data for AI agents', one-line subhead and a single black 'Try API for free' — an infra product with an editorial voice.
- Directly below, a working playground: query field ('Latest open source LLMs') with Search | Agent toggle, a LATENCY segmented control annotated with times in mono, CATEGORY chips (Full Web, News, Companies, Research, People, Financials) and an OUTPUT toggle (Results / Answer / Structured), plus 'API Playground' and code buttons.
- Mono uppercase micro-labels (GeistMono) over grey rgb(242,241,240) panels keep the controls legible as a spec sheet; electric-blue submit is the only saturated colour.
- On our headless visit the output pane showed 'We couldn't verify your browser… Sign in to continue' — the demo degrades with an honest message rather than a blank. Reduced-motion CSS present.

## Where it applies / where it doesn't
- Applies: any AI/API product with tiers of speed, cost or depth (search, rendering, model size); developer landing pages.
- Doesn't: consumer products where latency numbers are noise; only quote timings you can keep.

## Style DNA (optional, compact)
type: Arizona 63/41.6 serif display (-1.9px), ABCDiatype/Suisse 12-22 UI, GeistMono uppercase labels · color: white, ink rgb(0,0,0)/rgb(68,68,68), warm greys rgb(242,241,240)/rgb(226,223,218), electric-blue submit · shape: 2-8px controls, 9999px pills · motion: 0.15-0.7s, cubic-bezier(0.65,0,0.35,1), WebGL, reduced-motion CSS

## Notes / open questions
