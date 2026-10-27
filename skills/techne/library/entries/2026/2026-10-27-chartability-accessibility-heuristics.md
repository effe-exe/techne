---
id: 2026-10-27-chartability-accessibility-heuristics
title: "Chartability — accessibility heuristics"
url: https://chartability.fizz.studio
found_via: "Accessibility-led dataviz canon (Chartability by Frank Elavsky; heuristics published with academic research on accessible data visualisation)"
kind: data-viz
tags: [platform:web,surface:docs,surface:data-viz,quality:accessibility,quality:clarity,style:plain-html,technique:testable-heuristics,technique:before-after-example,technique:skip-link]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 3, clarity: 5, originality: 4, transferability: 5, evidence: 4, ethics: pass }
total: 21
---

## What to steal (principle, 1–3 bullets)
- Turn accessibility from advice into testable questions, and show each failure as a before/after (a 1.06:1 contrast bar chart fixed with outlined bars).

## Why it works
- Starts with a visible 'skip to main content' link and plain underlined blue #0000EE nav links (What is Chartability?, Get the Workbook, Get Help, Learn More, Support Us, Credits): the site practises what it audits.
- Definition first, in plain language: 'a set of heuristics (testable questions) for ensuring that data visualizations, systems, and interfaces are accessible', organised into principles with testable criteria.
- The lead illustration is a before/after: a pale bar chart with a Contrast Checker showing 'Contrast Ratio 1.06:1' (#F0FAFA on #FFFFFF), an arrow, and the same chart with outlined bars and value labels.
- Typography is Noto Sans throughout (a wide-script family), 16px body at line-height 1.5, a 158px tracked masthead on navy #21224A; weakness: body measure ~126ch is too long.

## Where it applies / where it doesn't
- Applies: Any team shipping charts, dashboards or design systems; audits and checklists that need to be actionable.
- Doesn't: Not a visual-style reference; its plain HTML is intentional, not aspirational.

## Style DNA (optional, compact)
type: Noto Sans 16/18.7/24px, 158px masthead · color: #FBFDFF ground, navy #21224A / #111A52 text, default link blue #0000EE · shape: none · motion: none

## Notes / open questions
