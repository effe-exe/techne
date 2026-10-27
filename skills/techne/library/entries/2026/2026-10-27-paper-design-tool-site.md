---
id: 2026-10-27-paper-design-tool-site
title: "Paper — design tool site"
url: https://paper.design
found_via: "Design-tool community canon 2025-26 (Paper, web-standards design canvas; widely shared by design engineers)"
kind: website
tags: [platform:web,platform:mac,surface:landing,quality:typography,quality:clarity,style:warm-neutral,style:lowercase,technique:two-tone-headline,technique:agent-log-in-hero,technique:product-ui-hero,domain:devtools]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 4, originality: 4, transferability: 4, evidence: 3, ethics: pass }
total: 20
---

## What to steal (principle, 1–3 bullets)
- Show the agent's actual tool-call log inside the product screenshot (read_file, fetch → 200 OK, create_artboard, write_html) so 'works with agents' is demonstrated, not asserted.

## Why it works
- All-lowercase voice: nav 'pricing, roadmap, blog, changelog, docs, sign up' and a two-tone 48px headline in Matter at weight 360 (tracking -0.96px) — 'design incredible' in near-black, 'the connected canvas for teams shipping with agents' in mid-grey.
- CTA pair is a black 'download Paper' block and a text link 'open Paper in the browser →': native and web paths, clearly ranked.
- The hero screenshot is the real editor (tabs Dashboard / Log in page / UI V2 / Brand / Marketing, Pages list, inspector with X/Y/W/H, Flex, Radius) overlaid with a terminal pane '../Github/overflow-app' listing MCP calls: 'paper - read_file (MCP)', 'fetch(...) 200 OK · 10 tracks', 'paper - create_artboard (MCP) 1075×649', 'paper - write_html (MCP)'.
- Warm paper ground (lab 94) with a folded-corner ruler graphic top-right; colours are specified in CIE Lab; easing cubic-bezier(0.16,1,0.3,1). No reduced-motion CSS detected.

## Where it applies / where it doesn't
- Applies: AI/agent-enabled tools that need to prove integration; dev-design tools that span app and browser.
- Doesn't: Consumer products where a log pane would intimidate.

## Style DNA (optional, compact)
type: Matter 48/360 headlines (-0.96px), 18px body, Paper Mono for logs · color: warm paper lab(94) ground, near-black lab(8) text, grey lab(43) secondary · shape: 4–6px radii, macOS window chrome · motion: cubic-bezier(0.16,1,0.3,1), WebGL

## Notes / open questions
