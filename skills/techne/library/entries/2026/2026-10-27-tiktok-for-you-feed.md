---
id: 2026-10-27-tiktok-for-you-feed
title: "TikTok — For You feed"
url: https://www.tiktok.com
found_via: "European Commission preliminary DSA findings on addictive design, 6 Feb 2026; inspected tiktok.com live"
kind: app
tags: [platform:ios,platform:android,platform:web,domain:social,domain:media,surface:feed,quality:performance,technique:infinite-scroll,technique:autoplay,technique:algorithmic-feed,technique:login-wall]
role: anti-example
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 4, clarity: 4, originality: 5, transferability: 3, evidence: 5, ethics: fail }
total: 21
---

## What to steal (principle, 1–3 bullets)
- A zero-decision, full-screen autoplay feed is the most powerful engagement loop in consumer software — which is exactly why it needs stopping cues, time breaks and a non-algorithmic option.

## Why it works
- Live web: a 9:16 video autoplays centred, with an avatar + red follow badge and a vertical rail of like/comment/save/share counts (25.6M / 246.8K / 2M / 3.3M) to its right, and up/down chevrons at the far right; left nav leads with 'For You'. The feed starts before any choice is made.
- A 'Log in to TikTok' modal (QR code, phone/email, Facebook, Google, Apple) overlays the playing video but has a 'Skip' — the content keeps running behind the ask.
- Evidence: on 6 Feb 2026 the European Commission preliminarily found TikTok in breach of the DSA for addictive design (infinite scroll, autoplay, push notifications, highly personalised recommender) and suggested screen-time breaks and limiting these features [strong — regulator finding, preliminary, not final].
- TikTokFont/TikTokDisplayFont, near-black rgb(22,24,35) text, accent rgb(254,44,85); 6/16/24px and 999px radii; 0.25–0.4s transitions.

## Where it applies / where it doesn't
- Lesson applies: any feed, autoplay or recommendation surface — design natural stopping points (end-of-session cards, 'you're caught up'), default-on time limits for minors, and a chronological/Following alternative.
- Don't copy: autoplay-into-infinite-scroll as a default for products whose goal is the user's outcome rather than time spent.

## Style DNA (optional, compact)
type: TikTokFont 14–17 UI, TikTokDisplayFont heads · color: white/grey web chrome, rgb(22,24,35) text, rgb(254,44,85) accent · shape: 999px pills, 16–24px cards · motion: autoplay video, 0.25–0.4s UI transitions

## Notes / open questions
Craft and originality are genuinely high; it is listed as an anti-example for the engagement model, not the visual design. Findings are preliminary as of capture.
