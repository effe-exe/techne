---
id: 2026-10-27-booking-com-homepage
title: "Booking.com — homepage"
url: https://www.booking.com
found_via: "UK CMA enforcement on hotel booking sites (Feb 2019 commitments on pressure selling and hidden charges, incl. Booking.com); inspected live"
kind: website
tags: [platform:web,platform:ios,platform:android,domain:travel,domain:commerce,surface:landing,surface:search,quality:trust,technique:interstitial-sign-in,technique:loyalty-discount,technique:natural-language-search,technique:pressure-selling]
role: anti-example
shipped: true
added: 2026-10-27
seen_on: 2026-10-27
status: active
score: { craft: 3, clarity: 3, originality: 3, transferability: 4, evidence: 4, ethics: fail }
total: 17
---

## What to steal (principle, 1–3 bullets)
- Don't interrupt the primary task: a sign-in modal over the search box on first visit taxes everyone to sell a discount to some.

## Why it works
- On first load a 'Genius — Sign in, save money / Sign in to save 10% or more' modal covered the search bar; behind it, a '$5,000 Cruise Giveaway' hero and a yellow-bordered rgb(255,183,0) search bar whose first field now reads 'Search in your own words' (natural-language search).
- Below: four reassurance cards ('Book now, pay at the property — FREE cancellation on most rooms', '300M+ reviews', '2+ million properties', 'Trusted 24/7 customer service').
- History: in 2019 the UK CMA secured commitments from major hotel booking sites including Booking.com to stop misleading urgency/scarcity claims, pressure selling and hidden charges [strong — regulator]. Results-page urgency labels were not inspected in this capture.

## Where it applies / where it doesn't
- Lesson applies: travel/commerce homepages — ask for sign-in after the user has expressed intent (e.g. at price display), not before; keep scarcity messages strictly factual.
- What's worth keeping: the high-contrast single search bar and the trip-type tabs.

## Style DNA (optional, compact)
type: BlinkMacSystemFont/system 14–24 UI, Avenir Next 24/700 heads · color: Booking blue rgb(0,59,149), action blue rgb(0,108,228), yellow rgb(255,183,0) search frame · shape: 8px cards, 4px buttons · motion: not measured

## Notes / open questions
Anti-example for interruption and historical pressure-selling, not for the visual system.
