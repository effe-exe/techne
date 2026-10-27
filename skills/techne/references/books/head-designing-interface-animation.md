---
title: "Designing Interface Animation: Meaningful Motion for User Experience"
author: "Val Head"
year: 2016
domains: [interaction, visual, build]
evidence: "mixed"
basis: "author's free material, not the full book"
coverage: medium
---

# Designing Interface Animation — Val Head

Use this when: animation in a product feels arbitrary, inconsistent or "tacked on"; you need motion principles, durations and easing tokens for a design system; you are deciding what to do for users with motion sensitivity; you want a structured way (motion audit) to evaluate the motion you already ship.

Basis: the book (Rosenfeld Media, 2016) was not read in full. These notes come from Head's own free material, all read in full: Chapter 9 of the book, published by A List Apart with the publisher's discount code (brand in motion, motion audits, translating brand adjectives into easing); the official "Book in Brief" excerpt of Chapter 4 on Boxes and Arrows (animation for orientation and context); her A List Apart interview at the book's launch; her free Adobe eBook *Animation in Design Systems* (2019, written and laid out by Head, which expands the book's style-guide material); her A List Apart article "Designing Safer Web Animation for Motion Sensitivity" (2015) and its Smashing Magazine follow-up on `prefers-reduced-motion` (2020), which cover the book's "animating responsibly" chapter; and an Adobe interview setting out her six principles for UI animation. Coverage is good for the brand, style-guide and accessibility chapters, partial for the UX purposes chapters (4–8: orientation, feedback, attention, demonstration, expression) and thin for the fundamentals chapters (12 principles, easing and timing basics) and for her chapters on prototyping and communicating animation.

## The big idea (3 sentences)
Interface animation is a design tool like type or color: it can orient people in space, give feedback, direct attention and express personality, but only if it has a purpose and is designed from the start, not added at the end as decoration. Each animation tells a small story, and together they reveal the brand's personality, so teams should decide deliberately how their product moves and write it down as motion principles, a small set of custom easing curves and duration ranges, choreography rules and tokens. Because motion can also make people physically ill, responsible animation means knowing which motion is triggering, designing a reduced version of it, and giving users control.

## Core concepts
- **Purposeful motion** — her test is that if she can't explain the purpose of an interface animation, she can probably do without it. Purposes include orientation and context, feedback, directing attention, demonstrating and showing change, and expressing brand.
- **Motion vs animation** — animation is any property changing over time. It doesn't need movement: opacity, color and blur changes are animation that feels calm and stable.
- **Spatial orientation** — motion can create a mental model of what is off-screen (layers, off-canvas navigation, sheets). Elements should leave the way they came in, so it is clear where they "live".
- **Visual continuity** — keep persistent elements in place across screen transitions instead of clearing and re-adding everything. That kind of continuity error confuses people.
- **Motion as the loudest voice** — motion climbs the visual hierarchy faster than any other tool, so use it sparingly and only for things users care about.
- **Six practical principles (Adobe interview)** — timing (quick but not too quick, about 300 ms for a menu slide), easing (organic acceleration, not linear), spatial orientation, directing focus, visual continuity, and clarity (stagger and overlap rather than animating everything at once; know each animation's purpose).
- **Brand in motion** — easing and timing convey personality. Overshoot and follow-through read as energetic and friendly. Squash and stretch reads as playful (and childish if overdone). Ease-in-out reads as decisive and stable. Small distances read as calm. Opacity and blur only read as stable and soft. Quick moves with sharp direction changes read as urgent or curt.
- **Motion audit** — screen-record every animation in the product (including all states, logged-in areas and sign-up), put them in one shared document grouped by purpose, and note properties, duration, easing and the personality each conveys. Then evaluate as a group: does the personality fit the brand, does each animation have a purpose, which are redundant, which easings could be consolidated? If the result is incoherent, start again from the top down.
- **Bottom-up vs top-down** — for existing products, begin with the audit. For new ones, start from brand adjectives (taken from voice and tone guidelines) and translate them into motion. Real-world references help too: IBM's "Machines in Motion" mapped old IBM hardware movements to UI motion.
- **Motion principles** — high-level statements of why and how the system uses motion (Fluent: physical, functional, continuous, contextual; Spectrum: purposeful, intuitive, seamless). A good motion principle has a meaningful opposite and can be judged objectively, so it can settle "do you like it?" arguments.
- **Building blocks with smart defaults** — durations (shorter for small, simple changes; longer for large or complex ones; adjust for viewport size), animatable properties, and custom easing. Three custom curves are enough: ease-out for entrances, ease-in for exits, and ease-in-out for moves from point to point. An optional easing hierarchy adds a more dramatic curve for emphasis. Productive and expressive motion can have separate sets (IBM Carbon).
- **Motion studies** — animate simple shapes (fade, scale, move) and try easing variations against three brand attributes until the motion feels right, then test it in prototypes.
- **Choreography** — entrances inform exits; sequence complex transitions so the eye can follow; use overlapping action (staggered small delays) for groups; choose straight or curved motion paths deliberately. Curves feel organic and soft, straight lines feel efficient and urgent.
- **Motion tokens** — durations and easings as design tokens, the single source of truth across platforms.
- **Vestibular safety** — three factors trigger symptoms: motion that is large relative to the viewport, mismatched direction or speed (parallax, scroll-jacking, horizontal moves while scrolling down) and large perceived distance (3D zooms). Non-movement properties are unlikely to cause problems. Design safer motion by being purposeful, giving context (signalling heavy motion in advance), and giving control (a site toggle as well as `prefers-reduced-motion`).

## Actionable heuristics for product design
- Before adding any animation, write one line on what it does for the user (orients, confirms, directs attention, shows change, expresses brand). If you can't, cut it.
- Bring motion into design early, in the same conversations as layout and flows. Prototype it rather than describing it in tickets, because animation designed last becomes decoration.
- Run a motion audit before writing motion guidelines. Record every animation, list duration, easing and property, group them by purpose, and consolidate them into the smallest number of patterns. Expect to find redundant curves and conflicting styles.
- Define three custom curves (enter = ease-out, exit = ease-in, move = ease-in-out) plus duration ranges by size and complexity. Publish them as tokens (`motion.easing.enter`, `motion.duration.short`) so following the guidelines is the easiest option. Use platform-native motion for OS components.
- Derive motion personality from your voice and tone words. "Friendly, charming, clear" might mean a slight overshoot on a straight path. "Calm, trustworthy" might mean small distances, ease-in-out, or opacity-only changes. Check the result with a motion study before applying it widely.
- Match motion intensity to context and frequency. Use expressive motion for onboarding, marketing and celebrations, and productive, near-invisible motion in task flows, especially frequent ones.
- When elements enter from one side, have them leave the same way. Keep shared elements on screen through transitions, so the transition explains where things are.
- Use motion to direct attention only to things the user cares about (a finished download, an expiring session, a validation error). Never animate several competing elements at once. Stagger groups with small offsets.
- For every parallax, large zoom, spin, full-screen wipe, auto-playing animated illustration or scroll-linked effect, design a reduced version at the same time: crossfade instead of a spatial move, a static frame chosen for meaning, or play-on-demand. Trigger it with `prefers-reduced-motion: reduce`. Treat "no-preference" as unknown, not as consent to heavy motion.
- On motion-heavy storytelling pages, add a visible motion toggle that respects the operating-system setting and remembers the choice. On product surfaces, put the toggle in settings. Warn people before linking to heavy-motion experiences.
- Write motion principles that have a clear opposite and can be evaluated ("motion never distracts from the primary task", not "motion should be delightful"). Use them in critique to move debates from taste to purpose.
- Ship version one of the motion guidelines quickly, interview the designers and engineers who use them, and iterate. Interview them first too, to learn their pain points (handoff of easing values, "no time to implement").

## Evidence & caveats
- Most of the book's guidance is craft opinion from a respected practitioner, consistent with Disney's 12 principles and with Material, Carbon and Fluent motion guidance. The mapping of easing to personality ("overshoot = friendly") is an informed convention, not a measured perceptual finding. Test it with users if brand perception matters.
- The cognitive claims in the 2015 article (animation lowers cognitive load, helps spatial learning and decisions, prevents change blindness) cite real research, but the effects depend heavily on context. The broader multimedia-learning literature finds animation helps for depicting change and can hurt when it's decorative or too fast (see `references/psychology/cognition-memory-cognitive-load.md`). Treat "animation reduces cognitive load" as conditional.
- The vestibular guidance comes from interviews with affected people and from WCAG 2.3.3 (animation from interactions). The specific trigger list matches accessibility consensus, but there are no prevalence data for any particular audience. The cited US figures (about 8 million adults with chronic balance problems) are general population estimates from vestibular.org.
- The specific duration figure (about 300 ms for a menu) is a rule of thumb. Compare it with the ranges and frequency rule in `references/interaction/microinteractions-and-motion.md`.
- The Adobe eBook and interview were published by Adobe, her employer at the time, and promote Adobe XD. The method doesn't depend on the tool.

## Disagreements with other references
- `references/interaction/microinteractions-and-motion.md` is broadly consistent (purpose first, reduced motion, tokens). It pushes harder on "frequent actions → no animation" and on measuring motion on critical paths with A/B tests. Head is more brand-expressive. For high-frequency productivity surfaces follow the microinteractions file; for brand moments use Head's adjective-to-easing method.
- `references/books/wwdc-fluid-interfaces.md` (Apple) favors interruptible, gesture-driven spring physics over fixed duration-and-easing pairs. Head's curve-and-duration tokens fit web and CSS. On touch platforms, prefer springs and treat her curves as the web equivalent.
- `references/books/microinteractions-saffer.md` frames motion as feedback within the trigger → rules → feedback → loops structure. Head adds the system-level view (audit, principles, tokens). Use both together.
- `references/books/wcag-22.md`: WCAG 2.2.2 (pause, stop, hide) and 2.3.3 are the baseline. Head's toggle and context advice go beyond the minimum, and that is the better standard.

## Best quotes (< 25 words each, max 5)
- "Animation has the power to suggest space and movement in ways that none of your other design tools really can." (Chapter 4 excerpt)
- "A motion audit gathers up all the interface animations you're currently using to identify patterns and evaluate their effectiveness as a group." (Chapter 9)
- "If I can't explain the purpose, that's a sign I could probably do without it." (Adobe interview, 2019)
- "A strong motion principle should be something that it's easy to say the opposite of." (*Animation in Design Systems*, 2019)

## Related
- `references/interaction/microinteractions-and-motion.md`, `references/interaction/design-systems.md`, `references/interaction/accessibility.md`
- `references/books/microinteractions-saffer.md`, `references/books/wwdc-fluid-interfaces.md`, `references/books/wcag-22.md`, `references/books/design-tokens-format-2025.md`
- `references/build/tokens-bridge.md` (motion tokens in code)
- Books: Rachel Nabors, *Animation at Work*; Thomas & Johnston, *The Illusion of Life* (12 principles)

## Sources
- Head, V. "Designing Interface Animation" (Chapter 9 excerpt), A List Apart, 2016: https://alistapart.com/article/designing-interface-animation/
- Head, V. "Book in Brief: Designing Interface Animation" (Chapter 4 excerpt), Boxes and Arrows: https://boxesandarrows.com/book-in-brief-designing-interface-animation/
- "Designing Interface Animation: an Interview with Val Head," A List Apart: https://alistapart.com/article/designing-interface-animation-interview-with-val-head/
- Head, V. *Animation in Design Systems* (free eBook, Adobe, 2019): https://xd.adobe.com/ideas/wp-content/uploads/2021/06/Animation-in-Design-Systems.pdf
- Head, V. "Designing Safer Web Animation for Motion Sensitivity," A List Apart, 2015: https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/
- Head, V. "Designing With Reduced Motion For Motion Sensitivities," Smashing Magazine, 2020: https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/
- "Six Principles of Using Animation in UX Design" (interview with Val Head), Adobe Blog, 2019: https://blog.adobe.com/en/publish/2019/06/19/designing-animation-six-principles-using-animation-ux
- Publisher page (not reachable from this environment, Cloudflare block): https://rosenfeldmedia.com/books/designing-interface-animation/
- Downloads saved under books/free/head-designing-interface-animation/
