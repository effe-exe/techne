---
id: 2026-10-27-cloudflare-docs-developer-docs
title: "Cloudflare Docs — developer docs"
url: https://developers.cloudflare.com
found_via: "Cloudflare developer docs (large multi-product docs); inspected live"
kind: website
tags: [domain:devtools,platform:web,surface:docs,quality:clarity,style:light,technique:tool-preference-toggle,technique:copy-prompt,technique:three-pane-docs,technique:command-search]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 5, originality: 3, transferability: 5, evidence: 3, ethics: pass }
total: 20
---

## What to steal (principle, 1–3 bullets)
- Let readers set their toolchain once: a 'Select your preferred CLI: Wrangler | CF' toggle above code samples, plus a 'Copy prompt' for agents next to Get started.

## Why it works
- Docs home: 56/500 Inter 'Cloudflare Developer Docs', orange oklch(0.687 0.208 38.8) 'Get started' pill and a 'Copy prompt' pill with agent/IDE icons.
- 'Powerful primitives, seamlessly integrated' section uses Compute / AI / Storage & Databases / Media tabs; each shows a one-command install ('npm create cloudflare@latest my-app') with copy button and product chips (Workers, Containers, Durable Objects, Queues).
- A 'Select your preferred CLI' segmented control (Wrangler / CF) sits above the samples; left sidebar has 'Filter sidebar /', grouped sections (Get started, Developer tools, Build, Protect & connect) and an 'Agent Setup' page.
- Inter Variable + JetBrains Mono; oklch greys; 8px radii; 298 links on one page handled by strict grouping; reduced-motion honored.

## Where it applies / where it doesn't
- Applies: multi-product docs, SDKs with multiple CLIs/languages, anything with reader-specific variants.
- Doesn't: single-tool docs; preference toggles need persistence or they annoy.

## Style DNA (optional, compact)
type: Inter Variable 56/30/15, JetBrains Mono · color: oklch(0.99) bg, oklch(0.21) ink, oklch(0.556) secondary, Cloudflare orange · shape: 6–8px, pill CTAs · motion: 0.15–0.4s, reduced-motion honored

## Notes / open questions
DNA: library/dna/2026-10-27-cloudflare-docs-developer-docs.json (1440x900, one load).
