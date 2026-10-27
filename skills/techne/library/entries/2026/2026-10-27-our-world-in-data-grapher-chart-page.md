---
id: 2026-10-27-our-world-in-data-grapher-chart-page
title: "Our World in Data — grapher chart page"
url: https://ourworldindata.org/grapher/life-expectancy
found_via: "Data-viz canon; OWID Grapher open-source charting tool"
kind: data-viz
tags: [domain:education,platform:web,surface:data-viz,quality:clarity,quality:trust,quality:accessibility,technique:direct-labels,technique:view-switcher,technique:time-scrubber,technique:citable-source]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 5, clarity: 5, originality: 4, transferability: 5, evidence: 4, ethics: pass }
total: 23
---

## What to steal (principle, 1–3 bullets)
- Ship every chart as a tool: same data switchable Table / Map / Line / Bar, direct end-of-line labels instead of a legend, a time scrubber, and the full source citation and licence under the plot.

## Why it works
- Series are labelled directly at the line ends (Oceania, Europe, Americas…) with small info icons — no legend lookup.
- Right panel is a searchable, sortable country list whose rows double as horizontal bar backgrounds showing the 2023 value (79.1, 79.1, 77.3…).
- Definition is the subtitle: 'Period life expectancy is…' with the term dotted-underlined for a tooltip; source line names datasets and 'CC BY'.
- Play button + 1770–2023 range slider; Download / Share / Enter full-screen sit under the chart. Lato 13–15px with 2px radii (75 uses).

## Where it applies / where it doesn't
- Applies: any analytics, dashboard or report chart that users will cite, compare or reuse.
- Doesn't: one-off narrative graphics where controls distract from the argument.

## Style DNA (optional, compact)
type: Playfair Display 25/600 title, Lato 12–15 UI, 12/900 caps +1.2px section labels · color: white, grey axes, categorical palette with muted reds/teals · shape: 2–4px · motion: 0.1s ease-out, reduced-motion CSS present

## Notes / open questions
- DNA: library/dna/2026-10-27-our-world-in-data-grapher-chart-page.json (captured 2026-10-27, 1440x900).
