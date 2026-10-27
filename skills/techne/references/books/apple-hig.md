---
title: "Human Interface Guidelines (selected pages, 2026 edition)"
author: "Apple"
year: 2026
domains: [platform, ios, interaction, accessibility, visual, ux-writing, privacy]
evidence: "moderate"
---

# Apple Human Interface Guidelines — Apple

Use this when: designing or critiquing anything for iOS/iPadOS/macOS (and as a well-argued second opinion for any touch UI); choosing between alert, action sheet, sheet, full-screen modal or inline feedback; setting type, color, Dark Mode, target sizes and Dynamic Type behavior; writing alerts, errors, permission prompts and button labels; reviewing onboarding, sign-in, notifications and account deletion for platform rules and App Review risk.

Source: https://developer.apple.com/design/human-interface-guidelines/ (Apple's official pages, fetched as their published JSON, October 2026). Read in full, iOS/iPadOS and macOS parts (tvOS, visionOS and watchOS sections mostly skipped; very long spec tables sampled): Design principles, Accessibility, Layout, Typography, Color, Dark Mode, Materials, Motion, Gestures, Feedback, Loading, Progress indicators, Playing haptics, Modality, Alerts, Sheets, Onboarding, Launching, Writing, Managing notifications, Privacy, Buttons, Tab bars, Toolbars, Entering data, Text fields, Managing accounts, Undo and redo, Settings, Searching (30 pages). Not read: most other component pages (menus, lists, pickers, toggles, sidebars, search fields, segmented controls, popovers and others were downloaded but not studied), icons/SF Symbols, app icons, games, spatial/visionOS, widgets, Live Activities, Siri, CarPlay.

## The big idea (3 sentences)
The HIG asks you to build on what people already know from the platform (system components, standard gestures, semantic colors, text styles) so your app inherits accessibility, adaptation and familiarity, and to spend custom design only where it adds real value. Its 2026 principles (Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity, Craft, Delight) translate into concrete rules: get people to their task, let them recover from mistakes, be transparent about data, adapt to every size, input and ability, and interrupt only in proportion to importance. In the Liquid Glass era, controls and navigation float on a functional glass layer above content, and color and effects there should be used sparingly.

## Core concepts
- **Design principles (reintroduced June 2026)** — Purpose (make something meaningful; focus), Agency (stay out of the way; freedom to explore; forgiveness), Responsibility (transparency; collect only what you need), Familiarity (known concepts; consistency; clear feedback), Flexibility (design for everyone; preserve context; many inputs), Simplicity ("isn't minimalism"; include what's necessary; hierarchy), Craft (prototype and iterate; maintain), Delight ("don't mistake delight for decoration").
- **Accessibility numbers** — text should scale to at least 200%. Default / minimum text size: iOS 17/11 pt, macOS 13/10 pt. Contrast (WCAG AA): 4.5:1 up to 17 pt, 3:1 at 18 pt or bold. Default / minimum control size: iOS 44×44 / 28×28 pt, macOS 28×28 / 20×20 pt, visionOS 60×60 / 28×28 pt. Spacing: about 12 pt padding around bezeled controls and 24 pt around borderless ones.
- **Reduce Motion response** — tighten springs to reduce bounce, track gestures directly, avoid z-axis depth animation, replace x/y/z transitions with fades, avoid animating into or out of blur.
- **Cognitive accessibility** — prefer system gestures; avoid auto-dismissing, time-boxed UI; let people control autoplay; in Assistive Access, one interaction per screen and a double confirmation for hard-to-reverse actions.
- **Layout** — order content by importance in reading order; alignment implies relationship and indentation implies subordination; use progressive disclosure; decide layout by size class (compact/regular), not by device or orientation; keep functionality the same across size classes (show more or less of it, e.g. tab bar → sidebar); respect safe areas; reflow for large text (stack side-by-side items, reduce columns).
- **Typography** — the iOS default (Large) Dynamic Type body is 17/22 pt (Large Title 34, Title 1 28, Title 2 22, Title 3 20, Headline 17 semibold, Callout 16, Subhead 15, Footnote 13, Caption 12/11); at AX5 body reaches 53 pt. Avoid Ultralight/Thin/Light weights; minimize the number of typefaces; avoid tight leading for 3+ lines; scale what matters when text grows (content, not tab titles); keep truncation minimal at accessibility sizes.
- **Color** — one color, one meaning (don't use the interactive tint on non-interactive text); every custom color needs light, dark and increased-contrast variants; use semantic dynamic colors by purpose, never hard-code system values, never repurpose (e.g. separator color as text); test in sunlight and dim light; consider cultural meanings of color.
- **Dark Mode** — respect the system setting and avoid an app-specific appearance switch; dark colors aren't simple inversions; minimum 4.5:1, and strive for 7:1 for custom colors, especially small text; dim white-background images; iOS uses base vs elevated backgrounds for layered dark surfaces.
- **Materials / Liquid Glass** — glass is the functional layer for controls and navigation, never the content layer; use it sparingly on custom controls; regular variant for text-heavy components, clear variant only over rich media (add a ~35% dark dimming layer over bright content); color on glass is for the primary action's background, not many controls.
- **Motion** — purposeful, never the only carrier of information, brief and precise; avoid custom motion on frequent interactions; let people cancel or interrupt animations.
- **Feedback** — match the delivery to the significance: passive status inline; alerts only for critical, actionable information; warn only before unexpected, irreversible data loss; confirm only significant completions (Apple Pay), because people assume success and need to hear about failure.
- **Loading and progress** — show something immediately (placeholders); let people do other things meanwhile; prefer determinate progress, paced evenly (90% in 5 s then 5 minutes for the last 10% "can even feel deceptive"); keep indicators moving; switch indeterminate → determinate when possible; don't switch spinner ↔ bar; avoid vague labels like "Loading"; offer Cancel (and Pause if cancelling loses work).
- **Haptics** — use system patterns by their documented meaning (notification, impact, selection), consistently, as a complement to visual and audio feedback, short and sparing, and always optional.
- **Modality, alerts, sheets** — use modality only with a clear benefit; keep modal tasks short, with no app-within-an-app hierarchies; always an obvious dismissal; confirm before discarding user content; one sheet and one alert at a time. Alerts have a title and up to three buttons; avoid informational-only alerts, alerts at launch and alerts for common undoable deletes. Sheets pair Done with Cancel or Back, support swipe-to-dismiss (with a confirm if there are unsaved changes), and use medium/large detents with a grabber.
- **Onboarding and launch** — launch instantly; the launch screen mimics the first screen (no text, no branding); restore previous state; onboarding is optional, short, interactive, and replaceable by contextual tips; postpone setup; ask for ratings or purchases only after engagement.
- **Writing** — define a voice with a term list, vary tone with context; verb-first labels ("Send", not "Let's do it!"); avoid "we" in errors ("Unable to load content"); errors go next to the problem, without blame, and say how to fix it ("Choose a password with at least 8 characters"); describe gestures by device ("tap", not "click"); empty states give a next step; settings labels describe the on state.
- **Notifications** — interruption levels Passive, Active (default), Time Sensitive (happening now or within an hour), Critical (entitlement only). Marketing notifications require explicit opt-in, must never use Time Sensitive, and need an in-app settings control.
- **Privacy** — request only what's needed, at the moment of use (not at launch unless core); purpose strings as one active, specific sentence. A pre-permission screen may have exactly one button labeled like "Continue" (not "Allow") and no way to skip the system prompt; incentives or fake-alert screens before tracking prompts cause App Review rejection. Prefer passkeys / Sign in with Apple over passwords.
- **Buttons, bars, fields** — hit region at least 44×44 pt; every custom button needs a press state; 1–2 prominent buttons per view; distinguish the preferred option by style, not size; never give the primary role to a destructive action. Tab bars are for navigation, not actions; never hide or disable tabs; default to 5 or fewer. Toolbar titles under 15 characters; at most about 3 item groups; one prominent primary action on the trailing side. Validate email when the user leaves the field, but usernames and passwords before they leave; never prefill passwords; prefer choices over typing.
- **Accounts** — delay sign-in as long as possible (browse first, sign in to buy); in-app account deletion (not just deactivation) as easy as on the web, with a status and completion notice and an explanation of subscription billing.
- **Undo, settings, search** — unlimited, labeled undo ("Undo Typing") that scrolls to show its result; few settings with good defaults, task-specific options in context, no duplicates of system settings; one search location, a visible scope, recent searches you can clear.

## Actionable heuristics for product design
- When something is about to interrupt the user, pick the channel by importance: inline status for information; an alert only for critical and actionable issues; an action sheet for choices following an intentional action. No alerts at launch or for undoable deletes, because frequent alerts train people to dismiss them unread.
- When a destructive action is undoable and expected (delete an email), skip the confirmation and offer undo; when it is rare and irreversible, confirm with a specific verb button ("Erase", "Delete 3 photos") plus "Cancel", and don't make the destructive button the default.
- When labeling alert buttons, use 1–2 word verbs tied to the title; reserve "OK" for purely informational alerts and always call the cancel button "Cancel".
- When styling a destructive button in a confirmation the user explicitly requested (Empty Trash), don't use red; use the destructive style only for a destructive option the user didn't originally choose.
- When a view has several actions, give at most one or two the prominent (filled/tinted) style and differentiate by style, not by button size.
- When sizing touch targets on iOS, use 44×44 pt as the default hit region; 28×28 pt is the absolute minimum for dense UI, and then add ~12 pt padding around bezeled controls or ~24 pt around borderless ones so mis-taps stay rare.
- When setting body text on iOS, use the Body text style (17 pt at the default setting, never below 11 pt), support Dynamic Type to AX5 (body ≈ 53 pt) and test the largest and smallest sizes first; at large sizes stack horizontal rows and reduce columns instead of truncating.
- When defining custom colors, ship light, dark and increased-contrast values per token, target 4.5:1 minimum and ~7:1 for small custom text in Dark Mode, and never reuse one color for both "interactive" and "decorative".
- When tempted to add an in-app light/dark switch on Apple platforms, don't; follow the system appearance. (Media-viewing apps may be permanently dark.)
- When using Liquid Glass (iOS 26+), keep it on bars and controls only; color at most the one primary action's background; over photos or video use the clear variant with a ~35% dimming layer if the content is bright.
- When something takes more than a moment, show placeholders immediately, use a determinate indicator if you can estimate, pace it evenly (no 90% jump then a stall), keep it moving, say specifically what is happening, and offer Cancel; add Pause when cancelling would throw away progress.
- When a custom animation plays on a frequent interaction, remove or shorten it, and make every animation interruptible. Under Reduce Motion, replace translations with fades and remove bounce.
- When a gesture performs an action, provide a visible alternative (button or menu item), and never repurpose standard gestures (tap, swipe-back, three-finger undo) for app-specific meanings.
- When onboarding, prefer contextual tips over a front-loaded tour; if a tutorial is needed, make it short, interactive and skippable, don't show it again after a skip, and keep it findable in settings or help.
- When you need a permission, ask at the moment the feature is used; write the purpose string as one active sentence that says what and why ("The app records during the night to detect snoring sounds"). If you add a priming screen, give it a single "Continue" button that opens the system prompt and no way around it.
- When requiring an account, let people browse first and ask at the point of commitment (purchase, save, sync); offer passkeys or Sign in with Apple; label the method ("Sign In with Face ID").
- When building account deletion, put it in the app (or a direct, easy-to-find link), make it no harder than on the web, show status and completion, and explain that subscription billing continues until cancelled.
- When sending notifications, use the honest interruption level: Time Sensitive only for things happening now or within an hour; marketing only after explicit opt-in, never Time Sensitive, and always switch-off-able in-app.
- When writing an error message, put it next to the field, state the fix ("Use only letters for your name"), avoid "we", "oops" and blame; if many people hit the same error, redesign the interaction instead of rewording it.
- When validating forms, validate as soon as a value is complete (email on blur; username and password rules before leaving the field), keep Continue disabled until required data are present, and prefill or fetch what the system already knows.
- When designing navigation, use a tab bar (5 or fewer tabs by default, single-word labels, filled symbols) only for top-level sections, keep it visible, never disable or hide tabs (explain empty sections instead), and put actions in toolbars.
- When a sheet holds user input, support swipe-to-dismiss but intercept it with "Discard / Save / Keep editing" if there are unsaved changes; never stack a second sheet on a first.
- When a launch or splash screen is planned, make the launch screen a textless replica of the first screen and restore the user's last state, because launch should feel instant and branding there just delays the task.

## Evidence & caveats
- Platform authority, not research: the HIG presents rules with rationale, rarely with data. Rate it [strong] as a platform convention and App Review requirement (permissions, account deletion, tracking prompts and marketing notifications are enforced), and [moderate] as evidence that a pattern works better.
- Numbers it gives are design defaults, not measured optima; the 44 pt target and 4.5:1 contrast trace back to WCAG and long-standing practice. The new 28 pt "minimum control size" is a floor for dense interfaces, not a recommendation.
- It changes every year (Liquid Glass in 2025; principles reintroduced June 2026; layout updated September 2026). Re-check before citing Liquid Glass specifics; they are the least settled guidance here.
- Some guidance serves Apple's ecosystem interests (Sign in with Apple, system settings over in-app ones); weigh it against cross-platform consistency for products that also ship on Android and web.
- The Dynamic Type and tracking tables were checked for the iOS Large (default) size and AX sizes; other platform tables were not studied.

## Disagreements with other references
- `SKILL.md` and `references/psychology/cognition-motor-control-and-timing.md` treat 44 pt as a floor. The current HIG separates a default (44×44 pt) from an absolute minimum (28×28 pt on iOS, 20×20 pt on macOS). Keep 44 pt as techne's default for touch; accept 28 pt only for dense secondary controls with the HIG's spacing (12/24 pt), consistent with WCAG 2.2's 24 px AA minimum.
- `references/interaction/platform-conventions.md` says alerts should ideally have ≤ 2 buttons; the HIG allows up to three, but no informational-only alerts. No real conflict; add "never at launch, never for undoable deletes".
- `references/visual/color.md` uses WCAG AA 4.5:1 as the floor; the HIG Dark Mode page asks to "strive for" 7:1 for custom colors in small text. Use 4.5:1 as the gate and 7:1 as the target for small custom text on dark surfaces.
- Web practice (and techne's own artifact pages, which support a `data-theme` override) often offers a theme toggle; the HIG advises against an app-specific appearance setting on Apple platforms. Follow the HIG in native apps; on the web a toggle is acceptable if it defaults to the system setting.
- `references/books/wwdc-fluid-interfaces.md` encourages bounce when gestures carry momentum; the HIG Accessibility page requires tightening springs under Reduce Motion. Both apply: bounce by default, none under Reduce Motion.
- `references/psychology/behavior-persuasion-toolkit.md` and conversion references may recommend permission priming screens; the HIG restricts them (one "Continue" button, no "Allow" wording, no skip, no incentives for tracking). On iOS the HIG is the binding constraint.

## Best quotes (< 25 words each, max 5)
- "Simplicity isn't minimalism."
- "Don't mistake delight for decoration."
- "The best content-loading experience finishes before people become aware of it."
- "Showing 90 percent completion in five seconds and the last 10 percent in 5 minutes ... can even feel deceptive."
- "People often abandon apps when they're forced to sign in before they can do anything useful."

## Related
- `references/interaction/platform-conventions.md` (iOS / Material / web conventions side by side)
- `references/interaction/accessibility.md` (WCAG 2.2 AA)
- `references/visual/typography.md`, `references/visual/color.md`
- `references/interaction/microinteractions-and-motion.md`, `references/books/wwdc-fluid-interfaces.md`
- `references/psychology/behavior-law-consent-cancellation.md` (consent, deletion, subscriptions)
- `references/build/swiftui-prototyping.md`
