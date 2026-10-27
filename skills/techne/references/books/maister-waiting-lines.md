---
title: "The Psychology of Waiting Lines"
author: "David H. Maister"
year: 1985
domains: [psychology, service-design, loading-states, perceived-performance]
evidence: "weak"
---

# The Psychology of Waiting Lines — David H. Maister

Use this when: designing loading, processing, queue, upload, support-wait or delivery-wait states; writing copy for delays, ETAs and outages; deciding whether to spend effort on faster systems or on how the wait feels; designing priority or premium tiers that make some people wait less than others.

Source: https://davidmaister.com/articles/the-psychology-of-waiting-lines/ (author's site; full text of the chapter from *The Service Encounter*, Czepiel, Solomon & Surprenant eds., Lexington Books, 1985). Read in full, including notes and references. The linked PDF version returned an HTML page, so the web text was used.

## The big idea (3 sentences)
How long a wait *feels* matters as much as how long it is, and because satisfaction is perception minus expectation, both the felt wait and the expected wait can be managed. Maister lists eight propositions about what makes a wait feel longer: idle time, waiting before the service has started, anxiety, uncertainty, no explanation, unfairness, low value of what you're waiting for, and waiting alone. Because early moments color the whole encounter (his "second law": it is hard to play catch-up), the first stage of a service deserves the most care.

## Core concepts
- **First Law of Service: S = P − E** — satisfaction equals perception minus expectation. Both are psychological; the same service can satisfy or disappoint depending on what was expected. Managers should track what was done, what was perceived and what was expected.
- **Second Law of Service: hard to play catch-up** (printed on the site as "plan catch-up ball", evidently a typo) — early stages of a service create a halo; a customer who starts annoyed looks for faults. Improvements pay back most in the early stages.
- **Example of managing perception** — mirrors beside hotel elevators cut complaints about waiting without changing the wait.
- **Example of managing expectation** — restaurants quoting a longer wait than expected so guests are pleased to be seated early (see the ethics caveat below).
- **1. Occupied time feels shorter than unoccupied time** — best fillers are useful in themselves and related to the coming service (menus in the queue speed up ordering too). Unrelated filler such as hold music often annoys. A sports team that played last week's highlights to callers on hold is his best example.
- **2. People want to get started: pre-process waits feel longer than in-process waits** — the fear is of being forgotten. A clinic that added a triage nurse at the door, without changing time to treatment, got reports of shorter waits because patients felt they had been entered into the system.
- **3. Anxiety makes waits seem longer** — worry about being in the wrong line, about getting on the plane, about losing control (an agent holding your ticket on standby). Prescription: ask what customers might be worrying about, rationally or not, and remove the worry.
- **4. Uncertain waits are longer than known, finite waits** — "the doctor will be 30 minutes" lets people settle; "soon" keeps them on edge. The appointment syndrome: early arrivals wait calmly until the appointed time, then even 10 minutes past it grates, because a wait beyond a promise has no known limit. An appointment is an expectation that must be met.
- **5. Unexplained waits are longer than explained waits** — a reason (snow, an emergency, air traffic) restores patience; no explanation creates powerlessness and rudeness toward staff. Seeing apparently idle servers while you wait is an unexplained wait in itself.
- **6. Unfair waits are longer than equitable waits** — being overtaken by later arrivals infuriates people. Take-a-number systems and visible "now serving" displays calm crowds. Departures from first-in-first-out are accepted when customers see them as fair (express checkout) and resented when they don't (seating by party size); premium service is often kept out of sight of regular customers.
- **7. The more valuable the service, the longer people will wait** — tolerance scales with perceived value. Post-process waits (deplaning, baggage, hotel checkout) feel longest of all because no more value is coming. Splitting simple and complex transactions into separate lines spreads waiting fairly.
- **8. Solo waits feel longer than group waits** — shared delays turn strangers into a group; theme-park lines become part of the experience.
- **Not covered, by his own note** — apologies and tone, and cultural and class differences in tolerance for waiting.

## Actionable heuristics for product design
- When a process takes time, let the user do the next useful step during the wait (fill in details while a file uploads, review the order while payment authorizes, preview while rendering), because related, useful activity both shortens the felt wait and the real total time. Avoid unrelated filler (spinners with jokes, generic animations) for long waits.
- When a request is received, acknowledge it immediately with a visible "received, in progress" state and a reference the user can return to, because waits before the service has visibly started feel longest. Confirm submissions instantly (see the 100 ms feedback rule in `SKILL.md`) even if processing takes minutes.
- When a wait is longer than a few seconds, give a concrete, honest estimate ("about 2 minutes", "usually under 10 minutes") instead of "almost done" or "just a moment", because uncertain waits feel longer and repeated vague promises feel dishonest.
- When you show an ETA, treat it as a promise: once the estimate passes, tolerance collapses (the appointment syndrome). Update the estimate before it expires and say why, rather than letting a countdown sit at 0.
- When estimating, make the estimate conservative but still true (a real range, the 90th percentile). Don't inflate ETAs on purpose to make users feel lucky; techne's ethics gate requires progress and timing claims to be literally true.
- When something is slow because of a cause users would accept (high demand, a large file, a bank's processing window), say so. An explanation, even one that doesn't excuse you, beats silence.
- When there is a queue (support chat, waitlists, ticket drops), show the user's position and that order is preserved, and make any priority rule explicit and fair-seeming (e.g. urgent safety issues first). Being overtaken without explanation is the strongest irritant Maister lists.
- When you offer paid priority or premium lanes, make the rule transparent at the point of purchase and don't degrade the free path to sell it. Maister notes firms hide premium service to avoid resentment; in software, hidden tiering that slows other users is a trust risk.
- When users are anxious during a wait (payments, flight check-in, medical results), find what they might be worrying about (Did it go through? Will I be charged twice? Is my place saved?) and answer it on screen ("You won't be charged twice", "You can close this page").
- When a wait requires holding something of the user's (a payment authorization, a reserved seat, their data in processing), keep them in control: show they can cancel, and what happens if they leave.
- When the valuable part of the experience is over (after purchase, after a video ends, at logout, account deletion, downloading a receipt), remove waiting entirely, because post-process waits feel longest of all; this is also where dark-pattern "save" flows do the most damage.
- When some tasks are simple and others complex, give simple tasks a fast path (express lanes: quick actions, one-tap reorders) so users with small needs don't wait behind complex flows.
- When users wait together (live events, launches, shared queues), it is acceptable to show real collective context (e.g. a real count of people in the queue), which can make waiting more tolerable. Never fabricate it.
- When choosing where to invest in a flow, start with the first moments (landing, first response, first load), because Maister's second law says early experience colors everything after.
- When evaluating "make it faster" vs "make it feel faster", do both, and measure both: actual latency at p75 and perceived wait (post-task rating, abandonment during wait). Perception work does not excuse slow systems.

Proposition-to-screen checklist for any wait over ~2 s (this note's mapping):

| Maister proposition | Question for the wait state | Example of honest copy or UI |
|---|---|---|
| Occupied vs unoccupied | Is there something useful to do now? | "While we process your photos, add captions" |
| Pre-process vs in-process | Does the user see it has started? | Instant "Received · Order #4821" state |
| Anxiety | What might they be worried about? | "You can close this tab; we'll email you" |
| Uncertain vs known | Is there a real estimate? | "About 3 minutes left" (updated, never stuck at 0) |
| Unexplained vs explained | Is the cause stated? | "Large file: 2.1 GB takes longer to upload" |
| Unfair vs equitable | Is the order visible and fair? | "You're 4th in line; urgent safety issues go first" |
| Value of the service | Is the wait proportionate to value? | No waits on logout, receipts, cancel |
| Solo vs group | Is real shared context available? | Live viewer count at a launch event (real only) |

## Evidence & caveats
- An essay of propositions, offered explicitly as hypotheses for future research, supported by anecdotes from restaurants, airlines, clinics and banks. No data of its own.
- Several propositions are supported by later research in service operations and HCI (e.g. operational transparency reduces perceived wait, Buell & Norton 2011, as cited in `references/data-driven/conversion-product-teardowns.md`; progress feedback studies in `references/psychology/cognition-motor-control-and-timing.md`). Treat them as [moderate] where later evidence exists and [weak] otherwise, e.g. "group waits feel shorter".
- Physical queues differ from digital waits: digital users can leave in one tap, multitask, and compare instantly. Proportions like "pre-process waits feel longer" transfer; specific tactics (mirrors, bars) don't.
- The restaurant tactic of quoting longer waits than expected is, in a product, deliberate misinformation if the estimate is knowingly false. Use honest conservative estimates instead.
- The "First Law" is a heuristic identity, not a measured model; expectation also shapes perception, not only the difference between them.

## Disagreements with other references
- `references/psychology/cognition-motor-control-and-timing.md` (perceived waiting) cites Maister for "occupied/explained waits feel shorter" and correctly labels it a service-operations essay [moderate]. Having read it, the core essay is [weak] (no data); the [moderate] rating rests on later studies, not on Maister.
- `references/interaction/microinteractions-and-motion.md` gives the latency bands (≤1 s, 2–10 s spinner or skeleton, >10 s determinate progress with permission to leave). Maister adds what the >10 s state should say: an honest estimate, a reason, reassurance about what the user is anxious about, and something useful to do. No conflict.
- Maister endorses inflating ETAs to delight customers (restaurant example); `SKILL.md` §3 requires progress and urgency claims to be literally true. In product work, follow `SKILL.md`.
- `references/psychology/cognition-emotion-experience-habit.md` (peak-end) says endings dominate memory; Maister's second law emphasizes beginnings. Both apply: the start sets the halo during the experience, the end shapes the memory afterward. Fix the worst wait first, wherever it is.

## Best quotes (< 25 words each, max 5)
- "We must learn to influence how the customer feels about a given length of waiting time."
- "Ask yourself what customers might be worrying about (rationally or irrationally), and find ways to remove the worry."
- "An appointment defines an expectation that must be met."
- "Waiting to get out when there is no more value to be received is aggravating."

## Related
- `references/interaction/microinteractions-and-motion.md` (loading-indicator decision tree, skeletons)
- `references/psychology/cognition-motor-control-and-timing.md` (response-time limits, perceived waiting)
- `references/process/states-and-edge-cases.md` (loading, partial, offline and error states)
- `references/psychology/behavior-ethics-dark-patterns.md` (honest progress, no fake urgency)
- `references/books/james-principles.md` (attention to the passage of time; expectation)
