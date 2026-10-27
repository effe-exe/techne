---
title: "Designing Fluid Interfaces (WWDC 2018, session 803)"
author: "Chan Karunamuni, Nathan de Vries, Marcos Alonso (Apple Human Interface team)"
year: 2018
domains: [interaction, motion, gestures, touch, prototyping]
evidence: "moderate"
---

# Designing Fluid Interfaces (WWDC 2018) — Karunamuni, de Vries, Alonso

Use this when: designing or reviewing a gesture-driven surface (sheets, cards, swipe actions, drag-to-reorder, picture-in-picture, bottom drawers, carousels); tuning springs and deciding whether something should bounce; arguing that an interaction must be prototyped on a device rather than specified in static frames.

Source: https://developer.apple.com/videos/play/wwdc2018/803/ (Apple's official session page with its published transcript). Read the full transcript, all four parts (principles, dynamic motion, gestures, working in the medium). The on-screen demos and the code slide (the momentum projection function) are not in the transcript, so anything only shown visually is not covered here.

## The big idea (3 sentences)
An interface feels fluid when it behaves like an extension of the body and mind: it responds to every touch at once, can be redirected mid-motion, and moves according to continuous behaviors rather than fixed, timed animations. Motion should borrow the physical intuitions everyone already has (momentum, friction, elasticity) so it feels believable, with springs as the main tool, tuned through two designer-friendly parameters: damping and response. Gestures must track the finger one-to-one, give continuous feedback, use the gesture's velocity to infer intent, and be designed together with the visuals in working prototypes.

## Core concepts
- **Response** — people are extremely sensitive to latency; any lag makes a tool feel disconnected. Hunt for delays everywhere: taps and presses as well as swipes, plus timers you introduced yourself.
- **Redirection and interruption** — the iPhone X home gesture is one two-axis gesture (horizontal = switch apps, vertical = home, pause = multitasking). Because it can be redirected mid-gesture, thinking and acting happen in parallel instead of "decide, then gesture". You can also interrupt an app launch to go home or interact while it is still opening.
- **Detect intent from motion, not timers** — the multitasking pause is detected from a spike in finger acceleration, not from "velocity below X for Y ms", so a faster stop is detected faster.
- **Spatial consistency** — things leave and return by symmetric paths (push navigation slides in from the right and back out to the right). An asymmetric exit reads as "sent somewhere else".
- **Hint in the direction of the gesture** — intermediate states grow toward the final state (Control Center modules grow toward the finger as you press).
- **Lightweight input, amplified output** — a short flick carries momentum that the system extends (scrolling, swipe-home). Without it every action would need long, laborious drags.
- **Rubber-banding** — boundaries are soft: content keeps tracking with resistance at an edge, so "end of content" can't be mistaken for "frozen". Handoffs between tracked objects (dock to app) are smooth curves, not hard switches.
- **Smooth frames** — smoothness depends on how much changes between adjacent frames, not frame rate alone. Fast movement strobes. Higher frame rates, motion blur and motion stretching (the app icon stretching as it opens) add in-between information.
- **Behavior over animation** — designers no longer script frames while input is locked out; they define continuous behaviors that run alongside the person's input. Conceptual mass varies by object (photos are lighter than app cards).
- **Seamless motion** — position over time has no breaks or sudden changes of direction, and the stop is imperceptible (the car-braking analogy). Scrolling coasts with constant friction, which makes it predictable and easy to master.
- **Springs, simplified** — mass, stiffness and damping stay under the hood. Designers tune **damping** (100% = no overshoot, 0% = oscillates forever) and **response** (how quickly the value approaches the target). The talk deliberately avoids the word "duration" for springs. The technical terms are damping ratio and frequency response.
- **Purposeful bounce** — start at 100% damping. Add overshoot only when the driving gesture has momentum in that direction (Music: tap to open Now Playing = 100% damping; swipe to dismiss = 80% damping). Bounce can also teach: the Flashlight button bounces on a tap to hint that a firmer press is needed.
- **Multisensory character** — pair dynamic motion with matching sound and haptics. Keep a family of behaviors consistent across the app so learning one transfers to the others.
- **Projection** — to choose where a thrown object lands (the FaceTime PIP corners), project its resting position from release velocity and a scroll-like deceleration rate, then snap to the endpoint nearest that projection, not to the nearest point at release.
- **Tap anatomy** — highlight on touch-down, confirm on touch-up, extend the hit area beyond the visible bounds, cancel if the finger slides off, re-arm if it slides back.
- **Swipe anatomy** — a swipe starts only after the touch moves about 10 pt (hysteresis); that is also when to lock the axis. Keep the grab point where the finger touched (never snap the object's center to the finger), and use the touch history for release velocity.
- **One-to-one tracking and continuous feedback** — content moves with the finger. Feedback runs during the gesture (Flashlight button grows with pressure; the Apple TV focus engine shows direction before selection changes). Avoid recognizers that fire only at the end of a gesture.
- **Parallel gesture detection** — recognize all candidate gestures from touch-down and cancel the losers once intent is clear (press-to-preview vs scroll in Contacts). Double-tap forces about a half-second delay on every single tap (Photos), so avoid it where taps matter.
- **Teaching gestures** — visual cues (clipped content at the edge, page dots, grabber handles, interactive elements raised onto a separate plane such as the switch knob); discrete animations that mirror the gesture (Safari's close button slides the tab left, teaching swipe-left); explanations only for a gesture used repeatedly across the product, explained once.
- **Play and prototyping** — fluidity produces playfulness, and people learn by fiddling. Design interaction together with visuals. An interactive demo is "worth a million static designs" and sets the bar for engineering.

## Actionable heuristics for product design
- When any control (tap, press or swipe) shows a delay before responding, treat the delay as a bug: show the pressed state on touch-down, and audit timers and debounces you added yourself. Response is the foundation of perceived fluidity.
- When designing a multi-outcome gesture (home vs app switcher, dismiss vs expand), build it as one continuous gesture space that can be redirected mid-motion rather than separate gestures that must be chosen up front, because thinking with the gesture is faster than thinking before it, and the next gesture can be discovered along the path of a known one.
- When you need to detect a pause or change of intent mid-gesture, use acceleration and velocity changes rather than "held still for N ms" timers, because timers add latency and fast users stop faster.
- When something is dismissed, send it back the way it came (same edge, same path). Use a different exit only when you mean "this went somewhere else" (archive, move to folder).
- When a press or drag leads to a bigger state (expand, open, peek), grow the element toward its final state during the press, so the result is predictable before release.
- When a user reaches a scroll or drag limit, rubber-band with resistance and spring back instead of stopping hard; a hard stop looks identical to a frozen app.
- When an element moves fast across the screen, reduce the per-frame jump (shorter travel, motion blur or stretch) rather than relying on 60/120 fps alone, because large frame-to-frame changes strobe.
- When tuning a spring, start at 100% damping (critically damped, no overshoot) and adjust response. Add bounce (around 80% damping, the Music dismiss example) only when the user's gesture carries momentum in the direction of the motion, or when the bounce teaches something.
- When a tap triggers the motion (no momentum), don't overshoot, because a bounce that the input didn't cause feels gratuitous; when a flick triggers it and nothing overshoots, the motion can feel broken.
- When something can be thrown to one of several resting points (corners, snap points, detents, carousel pages), compute the projected landing from release velocity with the platform's scroll deceleration and snap to the nearest endpoint to that projection, so a light flick goes where the user aimed.
- When implementing a drag, require about 10 pt of movement before committing to a drag (and pick the axis then), keep the finger's original offset on the object, and transfer release velocity into the follow-up animation.
- When designing a tap target, highlight on touch-down, commit on touch-up, add an invisible margin around the target, and allow cancelling by sliding off. This forgiveness matters most for destructive or costly actions.
- When several gestures compete on one surface (tap, long-press, scroll, swipe actions), recognize them in parallel from the first touch and resolve as soon as intent is clear; don't wait for the gesture to finish before giving feedback.
- When you are tempted to add double-tap, remember it delays every single tap on that surface by roughly half a second. Use it only where single taps are rare or unimportant (zoomable media).
- When a gesture is the only way to do something, add a visible signifier (grabber, clipped edge, page dots, raised knob) or a button-triggered animation that mirrors the gesture. Use an explicit tutorial only for a gesture that recurs throughout the product, and explain it once.
- When writing a spec for a gesture-heavy feature, ship a working device prototype with the spec (see `references/build/swiftui-prototyping.md`), because static frames can't show interruption, velocity or spring feel, and the prototype becomes the engineering target.
- When defining the motion character of a product, define a small family of behaviors (e.g. one damping/response pair for UI controls, one for sheets, one for playful moments) and reuse it everywhere so learning transfers.

## Evidence & caveats
- This is expert practitioner guidance from Apple's Human Interface team, backed by the shipped iPhone X gesture system, not by published user studies. Rate it [moderate]: highly credible and consistent with HCI findings on latency and direct manipulation, but no data are presented.
- The latency claims ("people are really, really sensitive") have no numbers in the talk. Use the measured thresholds in `references/psychology/cognition-motor-control-and-timing.md` and `references/books/web-vitals.md` (100 ms perceived causality, INP ≤ 200 ms) when you need numbers.
- Specific values from the transcript: hysteresis about 10 pt; double-tap delay about 0.5 s; Now Playing dismissal at 80% damping vs 100% for the tap. The talk's projection code was shown only on a slide; the transcript says it uses UIScrollView's deceleration rate but does not read out the formula.
- Dated details: 3D Touch has since been removed from iPhones (now long-press/haptic touch); `UIScrollView.DecelerationRate` naming is UIKit-era. SwiftUI (iOS 17+) springs use `duration` + `bounce`, a re-parameterisation of the same idea, which slightly contradicts the talk's "don't call it duration" advice.
- Physical metaphors are a means, not a goal: the talk says explicitly that it isn't asking for perfect physics simulations, only believable motion.

## Disagreements with other references
- `references/interaction/microinteractions-and-motion.md` §7 summarizes this talk well but says "zero latency" and gives a projection formula "as presented". The transcript doesn't give the formula (it was on a slide), so keep that formula marked [moderate] and verify it against Apple sample code before relying on it. It also omits the "start at 100% damping; bounce only with momentum" rule and the 10 pt hysteresis, both of which should be added.
- The same file and `references/psychology/cognition-motor-control-and-timing.md` give swipe commit thresholds (~30–50% of distance or a velocity threshold). The talk's projection approach generalizes this: decide the endpoint from projected position, which combines distance and velocity in one rule. Prefer projection when there are more than two endpoints.
- `references/books/apple-hig.md` (Accessibility, Motion) asks for reduced motion: tighter springs, fades instead of translations. That is compatible: the talk's character and bounce are the default, and Reduce Motion should strip bounce and large travel.
- `SKILL.md` makes behavioral evidence the top tier. This talk is expert opinion, so it decides how a gesture *feels*. Whether a gesture-first design beats a button-first one for your users still needs a usability test or experiment, especially for discoverability.

## Best quotes (< 25 words each, max 5)
- "It's not that our interfaces should be fluid, it's that we're fluid, and our interfaces need to be able to respond to that."
- "It's not just about framerate. It's what's in the frames."
- "We recommend starting with 100% damping, or no overshoot when you're tuning elastic behaviors."
- "If a gesture has momentum, and there isn't any overshoot, it can often feel broken or unsatisfying."
- "The interactive demo we think is really worth a million static designs."

## Related
- `references/interaction/microinteractions-and-motion.md` (springs, durations, gesture thresholds, haptics)
- `references/build/swiftui-prototyping.md` (feel it on device)
- `references/psychology/cognition-motor-control-and-timing.md` (latency limits, Fitts, target sizes)
- `references/books/apple-hig.md` (current HIG on gestures, motion, haptics, accessibility)
- `references/interaction/platform-conventions.md` (iOS conventions)
- Bret Victor, *Magic Ink* (`references/books/magic-ink.md`) for the opposing emphasis: reduce interaction for information software
