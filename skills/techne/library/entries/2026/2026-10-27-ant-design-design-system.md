---
id: 2026-10-27-ant-design-design-system
title: "Ant Design — design system"
url: https://ant.design
found_via: "Ant Group (Alibaba) open-source enterprise React system, one of the most adopted UI frameworks; inspected live"
kind: design-system
tags: [domain:devtools,domain:enterprise,platform:web,surface:docs,quality:density,style:light,style:corporate,technique:dated-release-cards,technique:version-switcher,technique:bilingual-docs]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 4, originality: 3, transferability: 4, evidence: 4, ethics: pass }
total: 19
---

## What to steal (principle, 1–3 bullets)
- Treat the system homepage as a release desk: dated announcement cards (Pro V6, CLI, 6.0) and a version switcher keep a huge user base oriented on what changed.

## Why it works
- Centered 'Ant Design' title (~76px AlibabaSans bold) and subline 'AI friendly design system that combines beauty and intelligence…'; blue rgb(22,119,255) 'Getting Started' + outlined 'Design Language'.
- Three release cards with ISO dates (2026-05-08) and a red 'HOT' ribbon: 'Ant Design Pro V6 is out!', 'Ant Design CLI is released', 'Ant Design 6.0 is here!'.
- Header shows version selector '6.6.8', language toggle (En/中), RTL and theme icons — built for a bilingual, global audience. Text uses alpha blacks rgba(0,0,0,0.88/0.65/0.45) as the hierarchy.
- Mixed stack: -apple-system UI, AlibabaSans display; 6px controls; easing cubic-bezier(0.645,0.045,0.355,1); no reduced-motion CSS detected.

## Where it applies / where it doesn't
- Applies: enterprise admin and data-heavy products; systems with many consumers across regions.
- Doesn't: as visual inspiration for marketing — the landing is conventional; the value is in the component depth.

## Style DNA (optional, compact)
type: AlibabaSans display ~76/38, system UI 14–24 · color: white/rgb(245,248,255), alpha-black text 0.88/0.65/0.45, blue rgb(22,119,255) · shape: 6–8px · motion: 0.1–0.3s, no reduced-motion CSS

## Notes / open questions
DNA: library/dna/2026-10-27-ant-design-design-system.json (1440x900, one load).
