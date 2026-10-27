---
title: "Web Vitals (LCP, INP, CLS) and the Core Web Vitals thresholds"
author: "Google Chrome team / web.dev (Philip Walton, Barry Pollard, Bryan McQuade, Milica Mihajlija et al.)"
year: 2020-2025
domains: [performance, interaction, measurement, web]
evidence: "moderate"
---

# Web Vitals (LCP, INP, CLS) — Google / web.dev

Use this when: setting performance budgets or success metrics for a web product; designing loading, skeleton, banner, ad-slot, infinite-scroll or "load more" behavior; reviewing a prototype or page where things jump, freeze after a tap, or show the main content late; explaining to stakeholders why "it's fast on my machine" doesn't count.

Source: web.dev articles, read in full: "Web Vitals" (https://web.dev/articles/vitals, updated Oct 2024), "Largest Contentful Paint", "Interaction to Next Paint", "Cumulative Layout Shift" (metric pages, updated 2025), "How the Core Web Vitals metrics thresholds were defined" (updated May 2025), "The most effective ways to improve Core Web Vitals" (Oct 2024 version). Skimmed for key guidance: "Optimize LCP", "Optimize INP", "Optimize CLS", "Time to First Byte", "First Contentful Paint". Code samples and the in-page quizzes were skipped.

## The big idea (3 sentences)
Google reduces web user experience quality to three field-measured, user-centric metrics: loading (LCP: when the main content appears), responsiveness (INP: how long until the screen visibly reacts to a tap, click or key press) and visual stability (CLS: how much visible content jumps unexpectedly). A page "passes" only if the 75th percentile of real page views meets all three "good" thresholds (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1), segmented by mobile and desktop. The thresholds are a compromise between human-perception research and what real sites can achieve, so treat them as a floor, not as perfection.

## Core concepts
- **Core Web Vitals** — the stable subset that applies to every page and appears in all Google tools (CrUX, PageSpeed Insights, Search Console, DevTools). Metrics go through experimental → pending (at least 6 months) → stable, and change at most once a year. FID was retired in favor of INP in 2024.
- **Thresholds (good / poor, at p75):** LCP ≤ 2500 ms / > 4000 ms; INP ≤ 200 ms / > 500 ms; CLS ≤ 0.1 / > 0.25. Supporting metrics: TTFB ≤ 0.8 s / > 1.8 s; FCP ≤ 1.8 s / > 3.0 s.
- **Why p75** — high enough that 3 of 4 visits meet the target, low enough that a few flaky connections don't decide the verdict (at p95, 5 outliers in 100 visits would).
- **How thresholds were chosen** — (1) the "good" level should mean a high-quality experience, based on perception research where it exists; (2) at least 10% of origins must already meet it, and well-optimized sites must meet it consistently; (3) "poor" is set so roughly the worst 10–30% of origins fall into it. The same thresholds apply to mobile and desktop because expectations don't depend on device; in practice they are set by mobile achievability.
- **LCP** — render time of the largest image, text block or video visible in the viewport, measured from navigation start (so it includes redirects, connection setup and TTFB). Invisible elements, full-viewport backgrounds and low-entropy placeholders don't count. It stops updating at the first user interaction.
- **LCP subparts** — TTFB (~40% of LCP on a well-optimized page), resource load delay (< 10%), resource load duration (~40%), element render delay (< 10%). The two "delay" parts should be near zero, and shrinking one part can just move the time into another.
- **INP** — for every click, tap and key press during the whole visit: input delay + processing time + presentation delay until the next frame is painted. Reported value ≈ the worst interaction (one outlier ignored per 50 interactions). Scroll, hover and zoom are not counted. It measures the time until the *first visual feedback*, not until the whole operation finishes.
- **90% of time on a page is spent after it loads** (Chrome usage data), which is why responsiveness through the whole lifecycle matters more than first-input delay.
- **CLS** — the largest burst ("session window": shifts less than 1 s apart, window at most 5 s) of unexpected layout shifts. Each shift scores impact fraction × distance fraction (e.g. an element covering half the viewport moving down 25% gives 0.75 × 0.25 ≈ 0.19, already "poor" on its own).
- **Expected vs unexpected shifts** — shifts within 500 ms of a discrete input (tap, click, key press) are excluded. Scroll, drag, pinch and hover don't count as input, so content that moves while you scroll or hover is penalized.
- **Field vs lab** — CrUX/RUM show what real users get; Lighthouse cannot measure INP (Total Blocking Time is its proxy) and only sees load-time CLS. When lab and field disagree, trust field data.
- **Perception research behind the numbers** — feedback within about 100 ms is perceived as caused by the input (Michotte; Miller; Card; Nielsen). In a touchscreen study (Kaaresoja et al.), feedback at ≤ 85 ms felt simultaneous 75% of the time, and perceived quality fell for delays of 300 ms or more. Losing focus while waiting happens across a range of roughly 0.3–3 s, not at exactly 1 s. No prior research existed for CLS; Google's internal testing found shifts of 0.15 and above consistently disruptive.

Threshold summary (all at p75 of real page views, mobile and desktop assessed separately):

| Metric | Measures | Good | Poor | Research anchor | Main design levers |
|---|---|---|---|---|---|
| LCP | main content visible | ≤ 2.5 s | > 4.0 s | 0.3–3 s focus range | LCP element in HTML, priority, no lazy-load, prerender |
| INP | next paint after tap/click/key | ≤ 200 ms | > 500 ms | ~100 ms causality | paint feedback first, yield, smaller DOM |
| CLS | unexpected visual shifts | ≤ 0.1 | > 0.25 | internal tests (≥ 0.15 disruptive) | reserve space, transform-only animation, user-initiated loads |
| TTFB (diagnostic) | server response | ≤ 0.8 s | > 1.8 s | — | CDN, edge caching |
| FCP (diagnostic) | first content | ≤ 1.8 s | > 3.0 s | — | fewer render-blocking assets |

## Actionable heuristics for product design
- When you set performance success criteria, write them as "p75 of real visits, mobile and desktop separately: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1" and measure with RUM (e.g. the `web-vitals` library), because lab runs on a fast laptop miss slow devices, real networks and post-load behavior.
- When the 200 ms INP target is met, still aim for visual feedback within 100 ms on primary actions, because 200 ms is the achievability compromise and 100 ms is where the research says feedback feels instant.
- When an action takes longer than a frame (network save, search, checkout), paint immediate feedback first (pressed state, spinner inside the button, optimistic state) and do the rest afterwards, because INP and perceived responsiveness stop at the next paint, not when the work completes.
- When a tap triggers heavy work, split it: render the visual update first and defer non-visual work (analytics, saving, recalculating counts) to a later task. Treat any main-thread task over 50 ms as a long task to break up.
- When designing the first screen, decide which element is the LCP element (usually the hero image or headline), make sure it is in the initial HTML (not behind JS, `data-src` or a carousel script), don't lazy-load it, and give it high fetch priority, because poor-LCP pages wait about 1.3 s (p75) before even starting to load the LCP image.
- When choosing between a big hero image and a big text headline above the fold, remember that text can paint as soon as the font is ready, while images add download time. A large text LCP is often the cheaper way to a fast LCP.
- When anything loads after first paint (images, ads, embeds, banners, personalized modules), reserve its space in advance with width/height, `aspect-ratio` or a `min-height` placeholder, because 66% of pages have at least one unsized image and an empty element starts at 0 px.
- When you can't know the final size (ads, third-party embeds), reserve the most likely or smallest size, keep the slot even if nothing fills it (collapsing it shifts content too), and place injected content lower on the page, because shifts near the top move more content.
- When adding cookie notices, promo banners or "download our app" bars, overlay them or reserve their space; never push page content down after load.
- When new content arrives in a feed or list, let the user trigger it ("Load more", "N new posts" pill) or insert it off-screen, because user-initiated shifts within 500 ms of the tap are expected and don't count, while unprompted ones do.
- When a tap starts a fetch that will change layout, reserve the space and show the loading state within 500 ms of the tap; otherwise the later shift counts as unexpected and users may tap something that moves under them (the docs' example: confirming a large order the user meant to cancel).
- When animating, animate `transform` and `opacity`, never `top/left/width/height/margin/border`, because layout-property animations cause shifts even for absolutely positioned elements. Pages that animate margin or border widths are rated "poor" for CLS almost twice as often as pages overall. Respect `prefers-reduced-motion`.
- When designing hover effects, don't change layout on hover; hover isn't "input" for CLS, so shifts on hover count against you.
- When back/forward navigation is common (search results, catalogs), keep pages eligible for the browser's back/forward cache (avoid `unload` handlers and `Cache-Control: no-store` on non-sensitive pages), because restored pages are instant and have no shifts; bfcache was the biggest single CLS improvement Google saw in 2022.
- When the next page is predictable (top search result, next checkout step), prerender or prefetch it (Speculation Rules) in proportion to your confidence, because the best LCP is a navigation that is already rendered.
- When reviewing a design for speed, check the empty and loading states at the real size of the final content (skeletons that match the final geometry) as part of the visual spec, not as an engineering afterthought.
- When a business case needs a target stricter than "good", correlate your own vitals with conversion or retention; Google itself says many sites benefit from going beyond the thresholds.

## Evidence & caveats
- Strong as an industry standard and as Google's measurement definition; it is what Search Console and PageSpeed report. The *thresholds* are partly evidence (perception research for INP and LCP) and partly policy (achievability: at least 10% of origins passing; 10–30% poor). The LCP "good" value of 2.5 s was chosen because 1.5–2 s weren't consistently achievable, not because 2.5 s is a perceptual boundary.
- CLS thresholds rest on Google's internal evaluations, not published studies.
- The articles show no causal link from vitals to business outcomes (conversion, retention). Any such claim you meet elsewhere comes from vendor case studies, which `SKILL.md` treats as weak. Test your own.
- The metrics are Chrome-centric: the CrUX data come from Chrome users, and some APIs (e.g. `scheduler.yield()`) aren't in Safari. Metric definitions change (CLS moved from a lifetime sum to session windows; FID was replaced by INP), so pin the definition version when comparing over time.
- INP ignores scrolling and hover; a page can pass INP and still have janky scrolling or slow hover menus.
- Statistics cited inside the guides (73% of mobile LCP elements are images; 35% of LCP images not discoverable in HTML; 15% using `fetchpriority`; 33% of HTML served from CDNs) come from the HTTP Archive 2024 Web Almanac and will date.

## Disagreements with other references
- `SKILL.md` §2 says "feedback < 100 ms" and also lists INP ≤ 200 ms. Both are right but measure different things: 100 ms is the perceptual target (Michotte/Miller/Kaaresoja, cited here); 200 ms is the p75 pass line chosen for achievability. Use 100 ms as the design target and 200 ms as the release gate.
- `references/psychology/cognition-motor-control-and-timing.md` and `references/interaction/microinteractions-and-motion.md` state the thresholds correctly. Add the "poor" bounds (LCP > 4 s, INP > 500 ms, CLS > 0.25), the 500 ms input-exclusion window for CLS, and the fact that hover and scroll shifts are penalized.
- `references/interaction/microinteractions-and-motion.md` recommends skeletons that "match the real layout's geometry (no layout shift, CLS ≤ 0.1)". That is consistent; this source adds that removing a reserved slot shifts content as much as inserting it.
- `references/build/web-prototyping.md` relies on `next/image` and `next/font` to prevent CLS, which is consistent with "set explicit sizes". It doesn't cover INP; add "yield after the visual update" for prototypes with heavy handlers.
- `references/books/wwdc-fluid-interfaces.md` says to remove all latency without numbers; Web Vitals supplies the numbers (100 ms ideal, 200 ms acceptable at p75).

## Best quotes (< 25 words each, max 5)
- "A layout shift is only bad if the user isn't expecting it."
- "Chrome usage data shows that 90% of a user's time on a page is spent after it loads."
- "Many sites would benefit from optimizing even beyond the 'good' thresholds."
- "As a general rule, never animate or transition CSS properties that require the browser to update the page layout."

## Related
- `references/psychology/cognition-motor-control-and-timing.md` (response-time limits)
- `references/interaction/microinteractions-and-motion.md` (loading indicators, skeletons, optimistic UI)
- `references/build/web-prototyping.md` (Next.js images, fonts, perf checklist)
- `references/books/maister-waiting-lines.md` (how the wait feels, beyond how long it is)
- `references/data-driven/metrics-frameworks.md` (performance as a guardrail metric)
- `references/process/states-and-edge-cases.md` (loading and empty states)
