---
id: 2026-10-27-gapminder-tools-bubble-chart
title: "Gapminder Tools — bubble chart"
url: https://www.gapminder.org/tools/
found_via: "Dataviz canon (Gapminder/Hans Rosling's Trendalyzer bubble chart; widely taught, TED talk 2006)"
kind: data-viz
tags: [platform:web,surface:data-viz,quality:clarity,quality:trust,quality:delight,style:playful,technique:time-watermark,technique:play-through-time,technique:map-as-legend,technique:data-doubts-link,domain:education]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 4, originality: 5, transferability: 5, evidence: 4, ethics: pass }
total: 22
---

## What to steal (principle, 1–3 bullets)
- Put time in the background as a giant watermark year and give the chart a play button, so change over time becomes a story the user can scrub; add an explicit 'Data doubts' link next to the axis.

## Why it works
- A scatter of country bubbles (life expectancy vs GDP per capita on a log axis 1000–128k, bubble size = population) sits over a huge pale-grey '2025' watermark; a round play button and a full-width timeline slider sit underneath.
- The colour legend is a mini world map (World Regions in cyan, green, yellow, pink): the key teaches geography at the same time as encoding.
- Top of the plot is annotated with 'INCOME LEVEL 1 · LEVEL 2 · LEVEL 3 · LEVEL 4' bands — an interpretive layer over raw axes. An orange '⚠ DATA DOUBTS' link sits by the x-axis label.
- Right panel: Color/Size dropdowns, a country search with checkbox list, Zoom tools and Options/Present/Expand; '?' help icons next to each control. Yellow #FFCA34 accent.

## Where it applies / where it doesn't
- Applies: Any time-series of entities (cities, products, customers) where motion through time is the insight; dashboards that should admit data caveats.
- Doesn't: Small datasets or precise lookup tasks; animated bubbles hinder exact reading.

## Style DNA (optional, compact)
type: Brand Sans Body/Alt 12.8/16/18px · color: white, #222/#666 text, yellow #FFCA34 accent, four region hues · shape: circles, 4px controls · motion: animated time playback, WebGL

## Notes / open questions
