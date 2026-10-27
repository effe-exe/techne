---
id: 2026-10-27-obsidian-marketing-site
title: "Obsidian — marketing site"
url: https://obsidian.md
found_via: "Design-community canon for local-first tools; techne seed gallery #21"
kind: website
tags: [domain:productivity,platform:web,platform:cross,surface:landing,quality:clarity,quality:trust,style:dark,style:minimal,technique:os-detected-cta,technique:product-ui-hero]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 5, originality: 3, transferability: 4, evidence: 3, ethics: pass }
total: 19
---

## What to steal (principle, 1–3 bullets)
- Make the primary download button name the visitor's exact platform and package ('Get Obsidian for Linux (AppImage)') with a single 'More platforms' escape hatch.

## Why it works
- Headline 'Sharpen your thinking.' in the system ui-sans-serif at 60px/600 (-1.2px tracking) with a 36px light-grey subhead — the whole pitch fits in two lines.
- One saturated accent only: violet CTA rgb(124,58,237) with white 20px/500 label, echoed in tag pills and links (text rgb(167,139,250)); everything else is neutral greys rgb(15,15,15) to rgb(238,238,238).
- Hero screenshot shows real Obsidian content (file tree, a note titled 'Writing is telepathy', graph view, phone) — the graph view, the product's signature, is visible above the fold.
- No newsletter or account wall before download; transitions 0.15s. No reduced-motion CSS detected (a WebGL/canvas element is present).

## Where it applies / where it doesn't
- Applies: Downloadable desktop/mobile software; developer tools; any product with several install targets.
- Doesn't: Pure web apps (nothing to download); OS detection must fail gracefully — show all platforms when unsure.

## Style DNA (optional, compact)
type: system ui-sans-serif 60/36/24/16/14 · color: rgb(15,15,15) bg, grey surfaces rgb(23-38), single violet rgb(124,58,237) · shape: 4px dominant, 8px buttons · motion: 0.15s cubic-bezier(0.4,0,0.2,1), no reduced-motion CSS detected

## Notes / open questions
