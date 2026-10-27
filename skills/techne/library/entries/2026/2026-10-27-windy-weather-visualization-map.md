---
id: 2026-10-27-windy-weather-visualization-map
title: "Windy — weather visualization map"
url: https://www.windy.com
found_via: "Dataviz canon (Windy.com, Czech-built global forecast visualiser; widely used by sailors, pilots and storm-watchers)"
kind: data-viz
tags: [platform:web,platform:cross,surface:data-viz,surface:dashboard,quality:density,quality:clarity,quality:trust,style:technical,technique:particle-flow-overlay,technique:layer-rail,technique:model-switcher,technique:time-scrubber,domain:travel]
role: exemplar
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 4, originality: 4, transferability: 4, evidence: 3, ethics: pass }
total: 19
---

## What to steal (principle, 1–3 bullets)
- Expose the data source as a first-class switch (ECMWF / GFS / ICON with resolutions) next to the legend, so users can compare forecasts instead of trusting one hidden model.

## Why it works
- Full-bleed map with animated wind particles over a continuous colour field, city labels with temperatures (e.g. 'Denver 41°'), and a 'particles animation' toggle plus 'pressure' toggle at bottom-right — the decoration can be switched off.
- Right-edge layer rail of round thumbnail buttons (Weather radar, Satellite, Wind, Rain/thunder, Temperature, Hurricane tracker, Clouds, Waves, Rain accumulation, Thunderstorms, More layers…, Altitude): each layer is previewed by its own colour signature.
- Bottom: play button, a '9 AM' time flag and a day-by-day scrubber (Tue 27 … Tue 10); above the legend, a model switcher 'ECMWF 9km · GFS 22km · ICON 13km · 2 more…' and a kt scale 0–60.
- Top-left forecast card (search 'Cheney', 61°, 4-day mini forecast with a temperature gradient bar). Upsells are present ('Go Premium', an org-dashboard promo card with close ×) but dismissible.

## Where it applies / where it doesn't
- Applies: Any geo/time data product (logistics, energy, agriculture, air quality) where users need layers, time and source transparency.
- Doesn't: Casual consumer weather where a single forecast and plain words beat a pro instrument panel.

## Style DNA (optional, compact)
type: system UI 10–16px labels · color: continuous wind palette (blue→green→orange→red), dark translucent panels, amber #D49500 'Premium' accent · shape: round layer thumbnails, 9–14px panel radii · motion: particle flow animation (toggleable), 0.3–0.7s panel transitions, WebGL

## Notes / open questions
