---
id: 2026-10-27-shopify-dev-docs-polaris-references
title: "Shopify dev docs — Polaris references"
url: https://shopify.dev/docs/api/polaris
found_via: "Seed gallery #81 (Shopify Polaris); polaris.shopify.com now redirects here; inspected live"
kind: design-system
tags: [domain:devtools,domain:commerce,platform:web,surface:docs,quality:clarity,style:light,technique:agent-ready-docs,technique:copy-as-markdown,technique:three-pane-docs]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 4, originality: 3, transferability: 4, evidence: 3, ethics: pass }
total: 18
---

## What to steal (principle, 1–3 bullets)
- Make each docs page agent-ready: 'Copy MD', 'Ask about this page' and an installable AI toolkit next to the H1, so humans and coding agents read the same source.

## Why it works
- The standalone Polaris site was retired: polaris.shopify.com and polaris-react.shopify.com redirect to shopify.dev/docs/api/polaris, where Polaris is now a web-components framework documented per surface.
- Three-pane layout: filterable left nav (Polaris → App Home, Admin, Checkout, POS…), 16/1.5 Inter body at ~93ch, right 'on this page' rail.
- Header actions beside the 32/600 H1: Install AI Toolkit, Ask about this page, Copy MD; global 'Ask assistant /' button.
- Choice cards (App Home iframe vs UI extension) with pixel-art icons, 8px radius; muted blue links rgb(71,95,145) underlined.

## Where it applies / where it doesn't
- Applies: any API/docs site that expects LLM agents as readers; platform docs with many surfaces.
- Doesn't: as a reference for Polaris content guidelines — the old voice/grammar guidance is no longer the front door; verify before citing.

## Style DNA (optional, compact)
type: Inter 32/24/16/14, 600 headings · color: white, rgb(32,34,35) ink, rgb(71,95,145) links, green active marker · shape: 8px cards, 3–4px controls · motion: 0.1–0.3s, reduced-motion honored

## Notes / open questions
Supersedes seed-gallery claim about polaris.shopify.com content guidelines; that site now redirects. DNA: library/dna/2026-10-27-shopify-dev-docs-polaris-references.json.
