---
title: "Visual Vocabulary (FT chart chooser)"
author: "Financial Times Visual Journalism Team (Alan Smith, Chris Campbell, Ian Bott, Liz Faunce, Graham Parrish, Billy Ehrenberg-Shannon, Paul McCallum, Martin Stabe)"
year: 2016-2019
domains: [data-viz, dashboards, charts, information-design]
evidence: "moderate"
---

# Visual Vocabulary — Financial Times graphics desk

Use this when: choosing a chart type for a dashboard, report, analytics view, in-product metric or slide; a team defaults to bar/line/pie for everything; reviewing a chart that "doesn't say anything"; teaching non-designers (PMs, analysts) to pick charts by the message rather than by the data shape.

Source: https://github.com/Financial-Times/chart-doctor/tree/main/visual-vocabulary. Read in full: the README (described as "the full content of the poster", with related-reading links per chart) and the English poster image (poster.png, © FT 2016–2019, CC BY-SA 4.0), including the intro text and the chart types present only on the poster (bullet, grouped symbol, bump, frequency polygons, beeswarm, vertical timeline, streamgraph, marimekko, candlestick). The poster PDF links were dead (404). The linked articles (Chart Doctor columns, Cleveland & McGill, etc.) were not read.

## The big idea (3 sentences)
Pick a chart by first deciding which data relationship matters most to your story, then choose among the chart types listed for that relationship. The poster sorts about 70 chart types into nine relationships: deviation, correlation, ranking, distribution, change over time, magnitude, part-to-whole, spatial and flow. It is a starting point for forming ideas, not an exhaustive list and not a wizard.

## Core concepts
- **Relationship first** — the nine categories are reader questions, not data types. The same table can be shown as change over time, ranking or deviation depending on the point.
- **Deviation** — variation (+/−) from a reference (zero, target, long-term average), including sentiment. Diverging bar, diverging stacked bar (survey agree/disagree), spine, surplus/deficit filled line.
- **Correlation** — relationship between two or more variables; warn that readers assume causation. Scatterplot, column + line (amount vs rate, dual axis, used carefully), connected scatterplot (relationship over time), bubble (third variable as size), XY heatmap (patterns, not fine differences).
- **Ranking** — when position in an ordered list matters more than value; highlight the points of interest. Ordered bar/column (sort it), ordered proportional symbol, dot strip, slope, lollipop, bump (rank changes over many dates).
- **Distribution** — values and how often they occur; the shape (skew) shows inequality. Histogram (small gaps), dot plot, dot strip, barcode, boxplot, violin, population pyramid, cumulative curve, frequency polygons (max 3–4 series), beeswarm (medium-sized datasets).
- **Change over time** — trends from intra-day to centuries; the chosen time period sets context. Line (markers if irregular), column (best with one series), column + line, slope (2–3 points), area (good for totals, poor for components), candlestick/stock price, fan chart (projection uncertainty), connected scatterplot, calendar heatmap (daily/weekly patterns, low precision), Priestley timeline (date and duration), circle timeline, vertical timeline (works when scrolling on mobile), seismogram, streamgraph (proportions over time, not exact values).
- **Magnitude** — size comparisons, usually counted numbers rather than rates. Column/bar (must start at 0; bar for long labels), paired column/bar (tricky beyond 2 series), marimekko, proportional symbol, isotype (whole numbers only), lollipop (needn't start at 0, but preferable), radar and parallel coordinates (variable order matters), bullet (value against target or range), grouped symbol (countable items).
- **Part-to-whole** — how one entity breaks into components; if only component size matters, use a magnitude chart instead. Stacked column/bar (few components), marimekko, pie and donut (hard to compare segment sizes; donut hole can hold the total), treemap (hierarchies; many small segments are hard), Voronoi, arc (parliament seats), gridplot (percentages, whole numbers, small multiples), Venn (schematic only), waterfall (with negative components).
- **Spatial** — only when precise location or geographic pattern matters more than anything else. Choropleth (always rates, sensible base geography), proportional symbol map (totals), flow map, contour map, equalized cartogram, scaled cartogram, dot density (annotate patterns), heat map.
- **Flow** — volumes or intensity of movement between states or places. Sankey, waterfall, chord (two-way flows in a matrix), network.
- **Not finished** — the README's to-do list names uncertainty, animation, interactivity, map projections and colour as missing sections.

Product-analytics translation (our mapping of common product questions to the FT categories):

| Product question | FT relationship | First choices |
|---|---|---|
| Are we on target this month? | Deviation / magnitude | Bullet, diverging bar from target |
| How did signups change since launch? | Change over time | Line; column for one discrete series |
| Which plans or features are used most? | Ranking / magnitude | Sorted horizontal bar, lollipop |
| How long do page loads or sessions take? | Distribution | Histogram, boxplot, beeswarm |
| What share of revenue comes from each plan? | Part-to-whole | Stacked bar, gridplot (pie only for 2–3 parts) |
| Do users who do X also do Y? | Correlation | Scatterplot (state that it isn't causal) |
| Where do users drop out between steps? | Flow | Sankey, waterfall |
| Which regions grow fastest? | Spatial (only if geography matters) | Choropleth of rates; else a sorted bar |
| When during the week does usage peak? | Change over time | Calendar heatmap, XY heatmap |

## Actionable heuristics for product design
- When a dashboard or report needs a chart, write the one-sentence message first ("signups fell below target in March"), name its relationship (here: deviation from target, or change over time), and only then pick a chart from that category.
- When comparing amounts across categories, use sorted bars (horizontal when labels are long) with a zero baseline, because length from a common baseline is the easiest comparison and sorting reveals rank.
- When showing a metric against a goal or a normal range (KPI tiles, quota, SLA), use a bullet chart or a diverging bar from the target, rather than a gauge or a donut.
- When showing change over time with one or two series, use a line (with markers for irregular intervals); use columns only for one discrete series; use slope charts when only start and end matter.
- When the question is "how is it spread?" (latency, order values, session length), show the distribution (histogram, boxplot, dot strip, beeswarm), not just the average, because skew and outliers are the story.
- When showing part-to-whole with more than a few parts, or when readers must compare parts, prefer a stacked bar, gridplot or plain sorted bar over a pie; reserve pie/donut for 2–3 parts.
- When the parts are hierarchical (storage by folder, spend by team), use a treemap, and add labels or drill-down for the small segments.
- When putting data on a map, map rates (per capita, %) not totals in choropleths, and use proportional symbols for totals; use a map only when geography is the point.
- When plotting two variables against each other, label the relationship as correlation, not cause, because readers infer causality.
- When using a dual-axis column + line chart (amount vs rate), make sure both scales are honest and labeled; consider two aligned charts instead.
- When showing a projection or forecast, show uncertainty (fan chart) rather than a single confident line.
- When showing rank changes (leaderboards, app-store position), use slope or bump charts and highlight the items the reader cares about.
- When showing flows through a funnel or between states, use a Sankey or waterfall instead of a row of disconnected numbers.
- When designing on mobile, prefer vertical layouts (vertical timeline, horizontal bars) that work with scrolling.

## Evidence & caveats
- A newsroom practice guide, not a study [moderate as expert consensus]. It lists Cleveland & McGill's graphical-perception research in related reading, which supports position-on-a-common-scale over angle and area, consistent with its warnings about pies, proportional symbols and areas.
- Descriptions are one-liners; they don't give data-size limits, color rules, labeling or interaction guidance, and the colour, uncertainty and interactivity sections were never written.
- Built for editorial graphics (explanatory, one message) rather than exploratory analytics tools; dashboards need extra rules (shared scales, small multiples, filtering).
- Inspired by the Graphic Continuum (Schwabish & Ribecca); README copyright "all rights reserved" while the poster itself is CC BY-SA 4.0.

## Disagreements with other references
- `references/masters/master-lenses.md` (Tufte lens) condemns 3D pies, unjustified dual axes and gauges. The FT poster is more permissive: it lists pie, donut, radar and column + line as acceptable with care. Use the FT categories to pick a family, then apply the Tufte lens to the specific chart; when in doubt, prefer bars and lines.
- `references/books/tufte-visual-display.md` is a low-coverage pointer file; this poster is a better working tool for chart choice, but says little about integrity or data-ink, where Tufte is stronger.
- `references/visual/color.md` covers data-viz palettes; the FT poster has no color guidance. Use sequential ramps for distribution and spatial rates, diverging ramps for deviation (`references/books/oklab.md` for building them).

## Best quotes (< 25 words each, max 5)
- "Use the categories across the top to decide which data relationship is most important in your story." (poster intro)
- "This list is not meant to be exhaustive, nor a wizard." (poster intro)
- "Must always start at 0 on the axis." (column)
- "Be mindful that, unless you tell them otherwise, many readers will assume the relationships you show them to be causal." (correlation)

## Related
- `references/masters/master-lenses.md`, `references/books/tufte-visual-display.md`, `references/visual/color.md`, `references/data-driven/metrics-frameworks.md`
- `references/books/oklab.md` (perceptual ramps), `references/books/magic-ink.md` (information software)
- Cleveland & McGill (1984), "Graphical Perception"; Schwabish & Ribecca, Graphic Continuum; FT Chart Doctor columns; ft-interactive/visual-vocabulary (D3 templates)
