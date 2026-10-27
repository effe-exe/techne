# Microinteractions, Feedback and Motion

> **Use this when:** designing or reviewing any state change, such as a tap, toggle, transition, loading state, gesture, haptic or animation.
> **Also when:** someone asks for "real values" (easing curves, durations, springs) for Figma Smart Animate, CSS, Framer Motion or SwiftUI.
> **Skip when:** the task is static layout or visual style only. Go to visual/ or platform-conventions.md instead.

---

## 0. Point of view (read first)

1. **Motion is a means of communication, not decoration.** Every animation must answer one of three questions. *What just happened?* (feedback). *Where did it go, or where did it come from?* (spatial continuity). *What can I do next?* (affordance). If it answers none of them, delete it.
2. **Fast beats pretty.** On a frequently repeated interaction, a 400 ms flourish turns into a tax. Users run it thousands of times, and you watched it in a prototype maybe 20 times.
3. **Interruptible beats choreographed.** Any animation the user can start must also be stoppable, reversible or redirectable mid-flight (Apple, *Designing Fluid Interfaces*, WWDC 2018).
4. **Motion has to survive `prefers-reduced-motion`.** Design the reduced variant at the same time as the full one, not afterwards.
5. **Measure it.** Motion changes perceived speed and error rates, so A/B test motion that sits on a hot path (for example a checkout confirmation or the feed's pull-to-refresh). Use task time, error rate and rage-tap rate as guardrails.

---

## 1. Dan Saffer's microinteraction model

Source: Dan Saffer, *Microinteractions: Designing with Details* (O'Reilly, 2013) [moderate: a practitioner framework that the field widely adopted, not an empirical finding].

A microinteraction is a contained product moment built around **one task**: toggling Wi-Fi, liking a post, setting an alarm, entering a password. It has four parts.

| Part | Question | Agent checklist |
|---|---|---|
| **Trigger** | What starts it? | Manual (the user does something) or system (a condition is met, such as a new message or low battery). Manual triggers must be visible and look the same every time they appear. The trigger should show the current state before anyone interacts (a toggle shows ON/OFF). Don't hide the most common action behind a gesture alone. |
| **Rules** | What happens, and in what order? | Write the rules as a small state machine *before* you draw anything. Constrain the inputs (disable an impossible action or explain why it is unavailable). Use smart defaults: Saffer's "don't start from zero" means using what you already know about the user or context. |
| **Feedback** | How does the user know what happened? | Send it through the least intrusive channel that will still be noticed: visual, then sound, then haptic. Attach the feedback to the element that was touched. Say something only when it adds information ("Saved", not "Button pressed"). |
| **Loops & modes** | What happens over time and on repeat? | Loops: duration, repetition, and long loops that remember state ("Welcome back, resume?"). Modes: avoid them. If a mode is unavoidable (for example edit mode), give it an obvious signifier and an obvious exit. Modes are a classic source of slips (Norman, 2013; Raskin, *The Humane Interface*, 2000). |

**Worked example: a "Save to collection" heart.**
- Trigger: a heart icon with a 44×44pt hit area, outlined when off and filled when on.
- Rules: a tap toggles the state optimistically. If the server fails, revert and show a toast with Retry. Double-tap on the image does the same thing (a secondary trigger, never the only one).
- Feedback: scale 1 → 1.2 → 1 on a spring, about 250 ms, plus a fill color change and a light impact haptic on iOS. The VoiceOver label changes from "Save" to "Saved".
- Loops: on the first save only, a one-time coach mark ("Find saves in Profile"). Never show it again.

---

## 2. Affordances, signifiers, feedback, mapping

- **Affordance** = the possible actions in the relationship between an agent and an object (J.J. Gibson, *The Ecological Approach to Visual Perception*, 1979). **Signifier** = the perceivable cue that tells you where and how to act (Don Norman, *The Design of Everyday Things*, revised ed. 2013). On screens you design **signifiers**, and "affordance" is often misused to mean them [strong, established terminology].
- **Gulf of execution / gulf of evaluation** (Norman & Draper, 1986): the user needs to know *how* to act and *whether it worked*. Feedback closes the second gulf. Use it as a review question for every screen.
- **Flat-design signifier cost:** NN/g eye-tracking found that weak signifiers (flat text that is actually a link, buttons without a container) made users take longer to find clickable elements and look at more of the page (Kate Moran, "Flat UI Elements Attract Less Attention and Cause Uncertainty", NN/g, 2017) [moderate, lab study with 71 participants]. Rule: primary actions get a container, links get color *plus* a non-color cue (underline or icon) in body text.
- **Mapping:** controls should be spatially analogous to their effect. Sliders move in the direction of the value, steppers put + on the right or top, and swipe direction matches the movement of the content.

---

## 3. Response-time thresholds (the physics of feeling fast)

| Threshold | Meaning | Source / strength |
|---|---|---|
| **≤100 ms** | Feels instantaneous, as if the user caused it directly. Press states and hover must land inside this window. | Miller 1968; Card, Robertson & Mackinlay 1991; Nielsen, *Usability Engineering*, 1993 [strong, long-standing] |
| **≤1 s** | The flow of thought stays intact and the user notices the delay. No loader is needed under about 1 s, although a subtle pressed state is still required. | same [strong] |
| **≤10 s** | The limit for keeping attention. Past 10 s, show percent-done progress and allow the user to leave or cancel. | same [strong] |
| **~400 ms** | The "Doherty threshold": the claim that productivity rises sharply when system response stays under 400 ms. | Doherty & Thadani, IBM, 1982 [weak/contested: industry paper from mainframe settings, often overstated online] |
| **INP ≤200 ms** | Google Core Web Vitals "good" Interaction to Next Paint (75th percentile; "poor" > 500 ms). INP replaced FID in March 2024. An achievability-based release gate, not the perceptual target (that's 100 ms). Also LCP ≤ 2.5 s / poor > 4 s; CLS ≤ 0.1 / poor > 0.25; diagnostics TTFB ≤ 0.8 s, FCP ≤ 1.8 s. | web.dev, Google [strong as an industry standard] → references/books/web-vitals.md |

**Loading-indicator decision tree** (NN/g, "Progress Indicators Make a Slow System Less Insufferable", 2001/2014 guidance) [moderate]:
- < 1 s: no indicator. Keep the old content and a pressed state.
- 1–2 s: optional. If the result can appear before ~300 ms, delay the indicator so it never flashes. When a loader does appear, keep it visible for at least ~500 ms to avoid flicker [weak, common engineering heuristic].
- 2–10 s: an indeterminate spinner, or better, a **skeleton** when you know the content's layout.
- > 10 s: a determinate progress bar with an estimate, plus permission to leave or background the task with a notification on completion. The long-wait state should also say the cause, answer the likely worry ("You won't be charged twice", "You can close this page") and, where possible, offer a related useful activity (Maister 1985). Never inflate the ETA so users feel lucky (Maister's restaurant tactic) — estimates must be true; use a real range or p90. → references/books/maister-waiting-lines.md
- **Progress rules (Apple HIG):** pace evenly (90% in 5 s, then a stall for the last 10%, "can even feel deceptive"); keep it moving; switch indeterminate → determinate when you can, but don't switch spinner ↔ bar; say what's happening instead of a vague "Loading"; offer Cancel, plus Pause when cancelling loses work.

**Skeleton screens**
- Use them for content-heavy views whose layout you know (feeds, cards, profile). They reduce *perceived* wait compared with a spinner in some studies, but the evidence is mixed [contested: e.g. Bill Chung's 2017 informal test and Viget's 2017 study found small or no differences; the skeleton has to match the real layout].
- Rules: match the real layout's geometry (no layout shift, CLS ≤ 0.1). CLS excludes shifts within 500 ms of a discrete input (tap, click, key) only; shifts during hover or scroll count, and removing a reserved slot shifts content as much as inserting one — keep the slot. Use a neutral low-contrast fill. If you add shimmer, sweep left to right on a 1.5–2 s loop and remove it under reduced motion. Don't put skeletons on views that take under ~300 ms.
- Never apply a skeleton to actions such as submit buttons. Use an inline spinner inside the button, keep the button's width, and disable repeat taps.

**Optimistic UI**
- Apply the result immediately and reconcile with the server in the background. Use it when (a) the success rate is very high (rule of thumb > 99%), (b) the action is reversible, and (c) failure can be reported without loss (keep the user's input).
- Don't use it for payments, irreversible deletes, sends to other people where a false "sent" would cause harm, or anything legal.
- On failure: revert visibly, explain the failure in one line, offer Retry, and preserve the input.
- Code: React 19 `useOptimistic`; SWR/TanStack Query `onMutate` with rollback in `onError`; SwiftUI mutates `@State` immediately and rolls it back in a `catch`.

---

## 4. Motion principles: Disney's 12 adapted to UI

Source: Frank Thomas & Ollie Johnston, *The Illusion of Life: Disney Animation* (1981). UI adaptations: Issara Willenskomer, "UX in Motion" 12 principles (2017); Val Head, *Designing Interface Animation* (Rosenfeld, 2016) [moderate as craft knowledge, not experimentally validated for UI].

| Disney principle | UI translation | Use / avoid |
|---|---|---|
| Squash & stretch | A subtle scale on press (0.96–0.98) or a "jelly" pull at a scroll boundary. | Use on press states. Avoid on text. |
| Anticipation | A small wind-up before a big move (a FAB shrinks before morphing). | Rarely useful, because it adds latency. Use only on delightful low-frequency moments. |
| Staging | Draw the eye to the one thing that changed: dim the background behind a sheet, keep only one hero motion at a time. | Always. |
| Straight-ahead vs pose-to-pose | Keyframes (pose-to-pose) vs physics (straight-ahead). | Physics/springs for gestures, keyframes for scripted transitions. |
| Follow-through & overlapping action | Children settle slightly after the parent stops; stagger list items by 20–50 ms. | Cap the total stagger at about 200–300 ms. Don't stagger more than ~6–8 items, and show the rest together. |
| Slow in & slow out | **Easing.** Nothing in the physical world moves at linear speed. | Linear only for opacity loops, progress bars and color cycling. |
| Arcs | Natural motion follows curves (Material "arc motion" for container transforms). | Large on-screen moves on expressive surfaces. |
| Secondary action | A supporting motion such as a checkmark drawing after the button morphs. | Must not delay the primary result. |
| Timing | Duration tells you size and weight. Small means fast, big means slower. | See the duration table. |
| Exaggeration | Overshoot or bounce on success and celebration. | Low frequency only. Never on errors or destructive actions. |
| Solid drawing | Consistent z-axis, light source and elevation logic. | Shadows and elevation have to agree with motion direction. |
| Appeal | Personality matched to the brand. | Expressive brands can use bounce; banking and medical apps stay critically damped. |

**UI-specific principles from Willenskomer (2017):** easing, offset & delay, parenting, transformation, value change, masking, overlay, cloning, obscuration, parallax, dimensionality, dolly & zoom. The useful summary: motion should explain **relationships** (parent/child, before/after, here/there).

---

## 5. Easing curves (real values)

### Material Design 3 (m3.material.io, "Easing and duration", 2022–2024) [strong as platform spec]
| Token | cubic-bezier | Use |
|---|---|---|
| `emphasized` | Path-based in M3. The CSS approximation is `cubic-bezier(0.2, 0, 0, 1)` | The default for most M3 transitions that begin and end on screen |
| `emphasized-decelerate` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Elements **entering** the screen |
| `emphasized-accelerate` | `cubic-bezier(0.3, 0, 0.8, 0.15)` | Elements **exiting** the screen |
| `standard` | `cubic-bezier(0.2, 0, 0, 1)` | Small utility transitions |
| `standard-decelerate` | `cubic-bezier(0, 0, 0, 1)` | Small entering elements |
| `standard-accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | Small exiting elements |
| `legacy` (M2 standard) | `cubic-bezier(0.4, 0, 0.2, 1)` | M2 "standard easing". Still the best general-purpose curve for the web |
| M2 decelerate / accelerate | `cubic-bezier(0, 0, 0.2, 1)` / `cubic-bezier(0.4, 0, 1, 1)` | enter / exit |

### CSS keywords (for comparison)
- `ease` = `cubic-bezier(0.25, 0.1, 0.25, 1)`, `ease-in` = `(0.42, 0, 1, 1)`, `ease-out` = `(0, 0, 0.58, 1)`, `ease-in-out` = `(0.42, 0, 0.58, 1)` (CSS Easing Functions Level 1) [strong].
- The keyword curves are weak. Prefer stronger "expo/quint-out" curves for UI: `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo-like) and `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutQuint-like), as catalogued at easings.net [moderate, community standard].

### Rules
- **Enter = ease-out (decelerate):** the element arrives fast and settles. **Exit = ease-in (accelerate):** it leaves and gets out of the way. **Move on screen = ease-in-out / emphasized.**
- Make exits **shorter** than enters, about 20–35% shorter. Users don't need to watch things leave.
- Never use `ease-in` alone for something the user is waiting on. It feels sluggish at the start.
- Choose one or two curves for the whole product and encode them as tokens (`motion.easing.standard`). Inconsistent curves feel "cheap" before anyone can explain why.

---

## 6. Durations

### Material 3 duration tokens [strong as platform spec]
`short1` 50 · `short2` 100 · `short3` 150 · `short4` 200 · `medium1` 250 · `medium2` 300 · `medium3` 350 · `medium4` 400 · `long1` 450 · `long2` 500 · `long3` 550 · `long4` 600 · `extra-long1–4` 700/800/900/1000 ms.

### Heuristics by size, distance and platform
| What | Duration | Notes |
|---|---|---|
| Press / hover / focus state | 0–100 ms | Must feel instant. Hover-out can run 150 ms. |
| Toggle, checkbox, radio, small icon morph | 100–200 ms | |
| Tooltip, menu, dropdown enter | 150–250 ms. Exit 75–150 ms. | |
| Snackbar/toast enter | 200–300 ms | Visible ≥4 s, scaled to reading length. Never auto-dismiss anything critical: the APG Alert pattern says alerts should not disappear on their own; announce via a status message (WCAG 4.1.3). (WCAG 2.2.1 governs content time limits, so it is a loose citation here.) |
| Bottom sheet, dialog, side panel | 250–400 ms | Larger surfaces take longer. |
| Full-screen / page / container transform | 300–500 ms | Over 500 ms only for rare, celebratory or onboarding moments. |
| Stagger offset between list items | 20–50 ms | Total stagger ≤ 300 ms. |
| Shimmer loop | 1.5–2 s | Linear, left to right in LTR languages. |

- **Platform modifiers** (Material Design v2 guidance, 2018) [moderate]: tablets about +30% longer (larger travel distance), wearables about −30% shorter. Desktop and web should be *faster* than mobile (pointer users are quicker, and hover interactions repeat constantly). Many web teams use 150–250 ms for most things.
- **Distance rule:** duration should grow with travel distance, but sub-linearly. An element that travels twice as far shouldn't take twice as long. Springs handle this automatically.
- **Frequency rule:** the more often an interaction happens, the shorter and subtler its motion should be. Keyboard-driven actions (command palettes, shortcuts) should have **no** animation or ≤100 ms. Linear and Raycast are reference examples [weak/anecdotal].

---

## 7. Springs and Apple fluid interfaces

### WWDC 2018 "Designing Fluid Interfaces" (Chan Karunamuni, Nathan de Vries, Marcos Alonso, Apple) [strong as platform design guidance]
Key ideas to apply:
1. **Respond instantly** to touch. The interface moves with the finger at 1:1; hunt down every delay, including timers you added. (The talk gives no latency numbers — use 100 ms perceived causality / INP ≤ 200 ms from §3.)
2. **Interruptible and redirectable:** a user can grab an animation mid-flight. Never block input during a transition.
3. **Preserve momentum:** a gesture's release velocity feeds into the animation that follows it.
4. **Spatial consistency:** things return the way they came, and a dismissed sheet goes back to where it was summoned.
5. **Projection:** predict where a flick will land using deceleration and snap to the nearest target. Commonly cited formula for UIScrollView-style deceleration: `projected = position + (velocity / 1000) * decelerationRate / (1 - decelerationRate)` with `decelerationRate` ≈ 0.998 (normal) [moderate: shown only on a slide, not in the transcript — verify against Apple sample code].
6. **Rubber-banding** at limits instead of hard stops, so the user can tell they've reached an edge.
7. Apple parameterises springs as **damping ratio** (1.0 = no overshoot, < 1 = bounce) and **response** (roughly the period, in seconds), which is more intuitive than mass/stiffness/damping.
8. **Start springs at 100% damping**; add overshoot (e.g. 80%, the Music Now Playing swipe-dismiss vs 100% for the tap-open) only when the driving gesture has momentum in that direction or the bounce teaches something.
9. **Gesture mechanics:** start a drag only after ~10 pt of movement (hysteresis) and lock the axis then; keep the finger's original offset on the object; use touch history for release velocity. Recognise competing gestures in parallel from touch-down. Double-tap delays every single tap by ~0.5 s — avoid it where taps matter. Detect pauses from acceleration, not "still for N ms" timers. → references/books/wwdc-fluid-interfaces.md

### SwiftUI springs (iOS 17+, WWDC 2023 "Animate with springs") [strong as API]
- `.spring(duration: 0.5, bounce: 0.0)` is the new default model. `bounce` runs from 0 (critically damped) to ~0.3 or more.
- Presets: `.smooth` (bounce 0), `.snappy` (small bounce, ~0.15), `.bouncy` (~0.3). Defaults use duration ≈ 0.5 s, and you can pass `.snappy(duration: 0.3)`.
- Legacy `.spring(response: 0.55, dampingFraction: 0.825)` was the pre-iOS 17 default [moderate].
- Since iOS 17, SwiftUI uses springs by default for `withAnimation` without an argument.
- Recommended starting points: UI controls `.snappy(duration: 0.25–0.35)`, sheets and cards `.smooth(duration: 0.4–0.5)`, playful success `.bouncy(duration: 0.5)`.

### Material 3 Expressive springs (2025, Jetpack Compose `MotionScheme`) [moderate: values reported from Compose motion tokens and third-party ports. **Verify** against androidx.compose.material3 `MotionScheme` source before shipping]
- **Spatial springs** (position, size, rotation; may overshoot). Standard scheme damping ≈ 0.9 with stiffness fast ≈ 1400, default ≈ 700, slow ≈ 300. Expressive scheme default ≈ stiffness 380, damping ≈ 0.7–0.8 (sources disagree), fast ≈ 800 / damping 0.6, slow ≈ 200.
- **Effects springs** (color, opacity; never overshoot). Damping 1.0, stiffness fast ≈ 3800, default ≈ 1600, slow ≈ 800.
- Principle: overshoot is allowed on *spatial* properties and never on *effects* (opacity overshoot is meaningless).

### Web springs (Framer Motion / Motion One / react-spring)
- Framer Motion `type: "spring"` defaults: `stiffness: 100, damping: 10, mass: 1` [moderate], which is bouncy. Product UI usually wants `stiffness 300–500, damping 30–40` (no visible bounce) or the `bounce: 0–0.2, duration: 0.3–0.5` form.
- Convert: damping ratio ζ = damping / (2·√(stiffness·mass)). ζ ≥ 1 means no overshoot. Target ζ 0.8–1.0 for productivity UI and 0.5–0.7 for playful moments.
- CSS now has `linear()` easing (2023, widely supported) for approximating springs without JavaScript.

---

## 8. Gestures

- **Every gesture needs a visible alternative.** Gestures are invisible (no signifier). WCAG 2.5.1 (Pointer Gestures, A) requires a single-pointer alternative for multipoint or path gestures. WCAG 2.5.7 (Dragging Movements, AA, new in 2.2) requires a non-drag alternative.
- **Standard gestures only, with their platform meanings.** iOS: an edge swipe from the left = back (never override it), swipe down = dismiss a sheet, long press = context menu. Android: system back gesture from either edge (predictive back since Android 13/14), long press = selection mode in lists.
- **Swipe actions on list rows:** reveal 1–3 actions. A full swipe triggers the primary action only if it's non-destructive, or if it's destructive with undo. Always mirror the actions in a long-press or overflow menu.
- **Thresholds:** commit a swipe or drag at ~30–50% of the distance or when velocity exceeds a threshold (both together). Snap back on a spring otherwise. Use 1:1 tracking during the drag, then a spring on release that carries the gesture's velocity.
- **When to commit:** lightweight, reversible reveals (search overlay, quick panel) may fire *during* the gesture once content reaches its resting position; destructive or committing actions (dismiss, delete, send) fire only on release and stay cancellable by reversing direction, whatever the distance (Rauno Freiberg, "Invisible Details of Interaction Design", 2023) [weak/anecdotal — expert practitioner essay].
- **Finger occlusion:** show what the finger covers (loupe, key preview); don't cancel a slider drag when the finger drifts off the track. **Scroll ownership:** a scroll started in one area must not be hijacked by a nested area the pointer passes over. → references/books/rauno-invisible-details.md
- **Pull-to-refresh** only on chronological feeds. It should trigger a light haptic at the commit threshold.
- **Avoid conflicts:** no horizontal swipe carousels inside horizontally swipeable tabs, and no custom gestures near system edges (the iOS home indicator area, Android gesture-nav insets).

---

## 9. Haptics

- **iOS** (UIKit `UIFeedbackGenerator`, SwiftUI `.sensoryFeedback` since iOS 17) [strong as API]:
  - `UIImpactFeedbackGenerator`: `.light`, `.medium`, `.heavy`, `.soft`, `.rigid` for physical collisions (snapping, reaching a detent).
  - `UISelectionFeedbackGenerator` for changing a selection (picker ticks, segmented control).
  - `UINotificationFeedbackGenerator`: `.success`, `.warning`, `.error` for task outcomes.
  - SwiftUI: `.sensoryFeedback(.success, trigger: value)`, `.selection`, `.impact(weight:intensity:)`, `.increase/.decrease`.
- **Android:** `View.performHapticFeedback(HapticFeedbackConstants.CONFIRM / REJECT / CLOCK_TICK / CONTEXT_CLICK / LONG_PRESS / GESTURE_START / GESTURE_END)`. Prefer these constants over raw `Vibrator` patterns because they respect user settings.
- **Web:** `navigator.vibrate()` is Android/Chrome only and poorly supported. Treat haptics as unavailable on the web.
- **Rules:** (1) Haptics confirm, they don't announce. Pair them with visual feedback and never use them alone. (2) Match intensity to meaning: selection is the lightest and errors use the notification pattern. (3) Never haptic on scroll or continuously (it drains battery and causes fatigue). (4) Respect the system setting automatically by using the system generators. (5) Apple HIG: use haptics consistently with the system's own meanings, and don't overuse them.

---

## 10. Forms: interaction rules

Sources: Luke Wroblewski, *Web Form Design: Filling in the Blanks* (Rosenfeld, 2008); Baymard Institute checkout research (ongoing, large-sample usability testing); NN/g form articles.

- **Labels above fields** for most forms. Matteo Penzo's eye-tracking study (UXmatters, 2006) found top-aligned labels were fastest to complete [moderate: small study, but consistent with later practice]. Left-aligned labels only for long, rarely completed admin forms where scanning labels matters more.
- **Never use the placeholder as the label.** The label disappears on typing, fails low-vision users and causes recall errors (NN/g, "Placeholders in Form Fields Are Harmful", 2014) [strong practice consensus]. Floating labels are untested (Baymard); if used, keep the label visible, pass contrast and test the error state.
- **Single column.** Multi-column forms cause skipped fields and misread order (CXL Institute study, 2016; Baymard) [moderate].
- **Inline validation:** Wroblewski and Etre (2009) reported +22% success, −22% errors and −42% completion time vs. submit-time validation [moderate: one study, widely cited]. Timing matters. Validate **on blur** (not on every keystroke) for easy fields; strict-rule fields (username availability, password rules) get live feedback with a short delay after typing pauses, and success shown persistently in words. Never show errors on focus. Remove the error as soon as the input becomes valid (the "reward early, punish late" pattern, Mihael Konjević, 2014) [weak/anecdotal but sound]. Exceptions: password strength and character counters can update live.
- **Error messages:** place them next to the field, say what's wrong and how to fix it, in plain language. Never rely on color alone (WCAG 1.4.1, 3.3.1, 3.3.3). On submit, move focus to the first error or show an error summary with links.
- **Minimise fields.** Baymard found the average US checkout has ~11 form fields, while 8 is achievable, and that complicated checkouts are a top abandonment reason (Baymard Institute, Checkout Usability benchmark, 2024) [strong: large ongoing research; exact numbers change yearly, so re-verify]. Every field you remove is a measurable win, so A/B test removals.
- **Input types and autofill:** `type="email|tel|url|number"` + `inputmode` + `autocomplete="email|given-name|postal-code|one-time-code|cc-number"` (WCAG 1.3.5 Identify Input Purpose, AA). iOS: `textContentType`, `.keyboardType`. Never block paste (it breaks password managers and fails WCAG 3.3.8 for authentication).
- **Mark required and optional** in checkouts and long forms (asterisk + "(optional)"): with only optional fields marked, 32% of Baymard's test users skipped a required field. Short forms can mark optional only. Be consistent.
- **Buttons:** primary action label = a verb plus an object ("Create account", not "Submit"). One primary per form. Disabled submit buttons hide the reason. Prefer an enabled button that validates on press and explains what's missing [moderate practice consensus; Adam Silver, *Form Design Patterns*, 2018].
- **Redundant entry:** don't ask for information the user already gave in the same flow (WCAG 3.3.7, A, new in 2.2).
- **Dark-pattern guardrail:** no pre-checked marketing consent (it is unlawful under GDPR per CJEU *Planet49*, 2019), no confirmshaming ("No thanks, I hate saving money"), and no hidden extra costs at the last step.

---

## 11. Reduced motion and vestibular safety

- Honour `@media (prefers-reduced-motion: reduce)` on the web, `UIAccessibility.isReduceMotionEnabled` / SwiftUI `@Environment(\.accessibilityReduceMotion)` on iOS, and `Settings.Global.ANIMATOR_DURATION_SCALE` on Android ("Remove animations").
- **Reduce, don't remove:** replace spatial moves, zooms, parallax and spins with crossfades (≤200 ms). Apple HIG adds: tighten springs to reduce bounce, replace x/y/z transitions with fades, and don't animate into or out of blur. Keep state feedback such as color, opacity and checkmarks. Remove parallax, auto-playing video and background motion entirely.
- WCAG 2.3.3 (Animation from Interactions, AAA) and 2.2.2 (Pause, Stop, Hide, A: anything moving or auto-updating for > 5 s must be pausable). WCAG 2.3.1: no more than 3 flashes per second (A).
- Triggers for vestibular disorders: large-area motion, parallax, zooming and spinning, and motion that doesn't follow the user's input (scroll-jacking).

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
(The blanket reset is a safety net. Still author an explicit crossfade alternative for meaningful transitions.)

---

## 12. Code snippets (designer vibe-coding)

**CSS tokens**
```css
:root {
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-enter: cubic-bezier(0.05, 0.7, 0.1, 1);
  --ease-exit: cubic-bezier(0.3, 0, 0.8, 0.15);
  --dur-fast: 150ms; --dur-base: 250ms; --dur-slow: 400ms;
}
.button { transition: transform var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) linear; }
.button:active { transform: scale(0.97); }
```

**React + Motion (Framer Motion)**
```tsx
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 4, transition: { duration: 0.15 } }}
  transition={{ type: "spring", bounce: 0, duration: 0.35 }}
/>
// Respect reduced motion globally:
<MotionConfig reducedMotion="user">{children}</MotionConfig>
```

**SwiftUI**
```swift
@Environment(\.accessibilityReduceMotion) var reduceMotion
withAnimation(reduceMotion ? .easeInOut(duration: 0.2) : .snappy(duration: 0.3)) { isExpanded.toggle() }
Button("Save") { save() }.sensoryFeedback(.success, trigger: saveCount)
```

**Figma:** Smart Animate supports "Spring" presets (Gentle, Quick, Bouncy, Slow) and custom bezier. Prototype with the same curve tokens as the code, and note the token name in the dev-mode annotation.

---

## 13. Anti-patterns (reject these in review)

- Animating `width/height/top/left` on the web (it forces layout). Animate `transform` and `opacity` instead and keep 60/120 fps.
- Animations that block input until they finish.
- Bounce or overshoot on errors, destructive confirmations or financial numbers.
- A spinner for 200 ms that flashes, or a spinner that replaces content the user was reading.
- Scroll-jacking, and "scrollytelling" on product surfaces.
- Celebration confetti on every action. It devalues the real milestones.
- Fake progress bars or a fake "analyzing your profile…" delay to manufacture perceived value. That is a **dark pattern** (artificial labour illusion used manipulatively). Some research shows showing *real* work increases perceived value (Buell & Norton, "The Labor Illusion", *Management Science*, 2011) [moderate], and that finding licenses honest transparency, not fake delays.
- Infinite looping attention-grabbers (pulsing badges) on non-urgent items, which also fails WCAG 2.2.2.

## 14. When NOT to add motion
- Data-dense pro tools and keyboard flows, where speed is the feature.
- Content that changes too often (live tickers): use a subtle color flash at most.
- When the transition hides latency the team should fix instead.
- When you can't build the reduced-motion variant or the interruptibility, ship it static.
