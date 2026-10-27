---
title: "Invisible Details of Interaction Design"
author: "Rauno Freiberg"
year: 2023
domains: [interaction, motion, gestures, touch, craft]
evidence: "weak"
---

# Invisible Details of Interaction Design — Rauno Freiberg

Use this when: designing or reviewing gestures (swipe, pinch, drag, dismiss), deciding when a swipe should commit, deciding whether a frequent interaction should animate at all, designing where an opened view should come from, handling fingers that cover content (sliders, scrubbers, carets), or building a shared vocabulary for "why this feels right".

Source: https://rauno.me/craft/interaction-design (essay, July 2023). Read in full (all sections from "Metaphors" to "Closing thoughts" and the resource list). The essay relies on embedded videos and interactive demos that could not be watched; the notes use the prose descriptions of them.

## The big idea (3 sentences)
Interaction design is the craft of making interfaces respond fluidly to human intent, and its best decisions are invisible: nobody notices them when they work. Most of them can be explained by borrowing from the physical world (metaphors, momentum, interruptibility, spatial continuity) and from attention to context (how often an action happens, how risky it is, what the finger hides). Analyzing why something feels right, by rebuilding and slow-motion study, is how a designer builds taste and a vocabulary.

## Core concepts
- **Learnable metaphors compound** — iOS teaches one explicit gesture (swipe up to unlock); the sliding motion reveals the interface as stacked layers, which teaches swipe-down for system layers and swipe-up to dismiss an app. Horizontal swipe for pages borrows from books; pinch borrows from the precision grip.
- **Pinch anchoring** — precise zoom starts with fingers close together (the anchor point is chosen precisely); zooming out from spread fingers needs less origin precision.
- **Kinetic physics** — thrown elements keep their momentum and angle (dismissing an app into the Dynamic Island is never perfectly centered or identically timed); "lighter" objects bounce less.
- **When a swipe triggers** — lightweight, reversible actions (revealing an overlay or search) can fire during the gesture once a distance is crossed or once moving elements reach their logical final position; destructive or committing actions (dismissing an app in the switcher) fire only when the gesture ends, whatever the distance, so the user can change their mind mid-swipe; peeks don't commit until release.
- **Responsive gestures** — apply the gesture's effect continuously from the first pixel (scale follows the pinch), then animate past a threshold; a dead zone followed by a jump gives no affordance.
- **Interruptibility** — users must be able to reverse an animation they triggered by mistake (the iOS Settings push can't be interrupted by swiping back, which feels worse than the app switcher).
- **Spatial consistency** — a view should open from where it conceptually lives: from the Dynamic Island for a compact activity, from its app icon when several sources could be confused (which music app is playing), from the right when it joins the app-switcher stack. The Clock timer always comes from the Island because only one app can own it.
- **Fluid morphing** — the app-to-icon morph stretches the icon to fill the frame; it depends on icons respecting the platform's safe zone (an icon ignoring it shows a cropped, repeated band).
- **Frequency and novelty** — animation is justified by object permanence, focal point and delight, but on actions done hundreds of times a day (command menus, keyboard navigation, right-click menus, the macOS app switcher) motion becomes a cognitive burden and feels slow. Remove it. macOS context menus appear instantly, flash the selected item, then fade out.
- **Skip the UI when intent is clear** — a fast Cmd-Tab switches windows without showing the switcher.
- **Fidgetability** — some delight comes from satisfying, repeatable physical interaction (AirPods case, Pencil tip) with no task purpose; the author notes no research supports the attention benefits.
- **Scroll landmarks and minimaps** — prototypes for returning to a reading position (double-tap the scrollbar to drop a landmark), building on the already-interactive scrollbar.
- **Touch content visibility** — when a finger covers the target, show what's under it (text loupe, key preview), hide the loupe when not needed, and don't cancel a slider drag when the finger wanders off the track.
- **Implicit input** — context as input (Maps showing navigation on a glance, Wallet raising brightness for a pass, blurring sensitive app content in the switcher for privacy).
- **Fitts's law in practice** — screen corners are "infinite" targets; radial menus put all actions equidistant from the pointer and become muscle memory.
- **Scroll ownership** — a scroll started in one window should not be hijacked by another window the pointer passes over.

Decision table distilled from the essay (our synthesis):

| Situation | When to commit | Motion | Why |
|---|---|---|---|
| Lightweight reveal (overlay, search, peek) | During the gesture, once content reaches its resting position | Track the finger, snap at rest | Waiting for release feels broken |
| Destructive or committing action (dismiss, delete) | Only on release, cancellable by reversing | Track the finger, no commit mid-swipe | People change their minds mid-swipe |
| Peek at another screen | Only on release | Track, allow direction change | Look without committing |
| Pinch / scale | Continuous from first movement, animate past threshold | 1:1 then spring | Immediate response is the affordance |
| High-frequency keyboard/pointer UI (command menu, context menu, app switcher) | Immediately | None on entry; brief selection flash or exit fade at most | Frequency kills novelty; motion reads as lag |
| Opening a view | — | From its conceptual source (icon, island, stack position) | Spatial continuity tells users where things live |

## Actionable heuristics for product design
- When a gesture reveals something lightweight and reversible (search overlay, peek, quick panel), trigger it during the swipe as soon as the content reaches its resting position, because waiting for release feels broken.
- When a gesture commits something destructive or hard to undo (dismiss, delete, archive, send), commit only on gesture end and let the user cancel by reversing direction, regardless of distance travelled, because people change their minds mid-swipe.
- When implementing pinch, drag or scale, map the gesture to the effect 1:1 from the first movement, then hand off to an animation past the threshold, because continuous response is the affordance that tells users the gesture works.
- When a user can trigger a transition by mistake (push navigation, sheet open), make it interruptible and reversible mid-flight, because waiting out an animation you didn't want is the most noticeable kind of friction.
- When a thrown element settles (dismissing a card, flicking to a target), carry the release velocity and direction into the settle animation, and give "lighter" objects less bounce.
- When opening a view, animate it from the element or region it conceptually comes from, and disambiguate the source when several candidates exist, because spatial continuity tells users where things live and how to get back.
- When an interaction is used many times a day, especially from the keyboard (command palette, list navigation, menus, tab switching), show it with no entrance animation, keep at most a brief exit fade or selection flash for confirmation, and let fast expert input skip the UI entirely, because frequency kills novelty and motion reads as lag.
- When animating a list or selection indicator in a productivity tool, live with it for several days before shipping, because it can feel delightful in a demo and sluggish by day three (the author removed motion from his own bookmarking tool for this reason).
- When a finger may cover what it controls (sliders, scrubbers, carets, small pickers), show a magnified or offset preview of the covered content and keep the drag alive when the finger drifts off the control.
- When the screen shows something sensitive (finance, health), obscure it in the app switcher snapshot.
- When placing high-frequency pointer targets, use screen edges and corners or pointer-relative menus (context/radial), because edge targets can't be overshot.
- When building custom scroll containers, keep scroll momentum bound to the container where the scroll began.
- When critiquing "it feels off", record the interaction, play it back in slow motion next to a reference, and name the specific property (trigger point, momentum, origin, interruptibility, frequency), because naming the mechanism is what makes the fix transferable.

## Evidence & caveats
- An essayist's observations and reverse-engineering of Apple platforms, not studies [weak/anecdotal]. It explicitly says it is "not a tutorial nor a collection of guidelines".
- Apple-centric (iOS, macOS, Magic Mouse); Android and web conventions may differ.
- The frequency argument is consistent with response-time research (input feedback should be immediate), but how frequent is "too frequent" is not quantified.
- Fidgeting benefits: the author cites a 2020 thesis and notes no science supports the claim.
- No numbers are given for swipe thresholds, durations or spring parameters; take those from the references below.

## Disagreements with other references
- `references/interaction/microinteractions-and-motion.md` gives swipe commit thresholds (~30–50% of distance or a velocity threshold, on release). Rauno adds a distinction that file lacks: lightweight reveals can commit *during* the gesture, while destructive actions commit only *on release* and stay cancellable. Use both: the threshold decides whether, the action's risk decides when.
- The same file's frequency rule (keyboard actions: no animation or ≤ 100 ms) agrees with Rauno; he goes further by keeping a brief exit fade and selection flash for confirmation. Compatible.
- `references/books/wwdc-fluid-interfaces.md` (Apple 2018) is the source of most of these ideas (interruptibility, momentum, 1:1 tracking, spatial consistency) and cites the same principles; Rauno's essay adds the frequency/novelty and finger-occlusion cases. No conflict.
- `references/psychology/cognition-motor-control-and-timing.md` covers Fitts's law, edge targets and radial menus with stronger evidence; Rauno's examples illustrate rather than test them.

## Best quotes (< 25 words each, max 5)
- "Interaction design is an artform to make experiences that fluidly respond to human intent."
- "Great interactions are modeled after properties from the real world, like interruptability."
- "Truly fluid gestures are immediately responsive."
- "Analyzing and making sense of design details beyond just 'it feels nice' helps nurture taste."

## Related
- `references/interaction/microinteractions-and-motion.md`, `references/interaction/platform-conventions.md`, `references/books/wwdc-fluid-interfaces.md`
- `references/psychology/cognition-motor-control-and-timing.md`, `references/build/swiftui-prototyping.md`, `references/masters/taste.md`
- Karunamuni, de Vries & Alonso, "Designing Fluid Interfaces" (WWDC 2018); Jason Yuan, MercuryOS
