# Platform Conventions: iOS (HIG), Android (Material 3), Web

> **Use this when:** designing or reviewing screens for a specific platform, or choosing navigation patterns, touch targets, safe areas, sheets, bars or adaptive layouts.
> **Also when:** translating a design between iOS, Android and web, or building native-feeling prototypes in SwiftUI or React/Next.js.
> **Skip when:** the question is about motion values (microinteractions-and-motion.md) or token architecture (design-systems.md).

---

## 0. Point of view

1. **Jakob's Law first:** users spend most of their time in *other* products, so they expect yours to work the same way (Jakob Nielsen, 2000) [strong as a principle; the strength comes from familiarity effects in usability testing]. Break a convention only when you can show, with data, that the new pattern wins on task success and not only on novelty.
2. **Native over uniform.** One brand, platform-correct behaviour. Share tokens, illustration and voice across platforms. **Don't** share navigation chrome, back behaviour, date pickers or share sheets.
3. **Platforms evolve every year** (iOS 26 "Liquid Glass" in 2025, Material 3 Expressive in 2025). Values below are stable baselines. Re-check developer.apple.com/design/human-interface-guidelines and m3.material.io before shipping, and mark anything not re-verified.
4. **The system component wins.** A system component brings accessibility, Dynamic Type, RTL, dark mode and future OS redesigns for free. Customise only when a measured problem justifies it.
5. **Apple's HIG design principles were reintroduced in June 2026:** Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity ("isn't minimalism"), Craft, Delight ("don't mistake delight for decoration"). Useful as critique vocabulary for Apple platforms. → references/books/apple-hig.md

---

## 1. Touch targets and pointer targets

| Spec | Minimum | Source / strength |
|---|---|---|
| Apple HIG | **44 × 44 pt** default hit target; **28 × 28 pt** absolute minimum for dense UI (macOS 28/20 pt, visionOS 60/28 pt default/minimum), with ~12 pt padding around bezeled and ~24 pt around borderless controls | Apple HIG, 2026 [strong as platform rule] |
| Material 3 | **48 × 48 dp** touch target, ≥ 8 dp between targets. The visual element can be smaller (e.g. a 24 dp icon) as long as the hit area is 48. | m3.material.io [strong] |
| WCAG 2.2 SC 2.5.8 Target Size (Minimum), AA | **24 × 24 CSS px** or enough spacing that a 24 px circle around each target doesn't overlap another. Exceptions: inline text links, equivalents, user-agent controls, essential. | W3C 2023 [strong, legal baseline in many jurisdictions] |
| WCAG 2.5.5 Target Size (Enhanced), AAA | 44 × 44 CSS px | W3C [strong] |
| Research | ~9.6 mm targets gave the best accuracy for one-thumb use, and errors rose sharply below ~7 mm. | Parhi, Karlson & Bederson, MobileHCI 2006 [moderate, n=20] |
| Thumb zone | ~49% of observed users held the phone one-handed. Bottom-centre is easiest to reach and top corners hardest on large phones. | Steven Hoober, "How Do Users Really Hold Mobile Devices?", UXmatters 2013, n≈1,333 street observations [moderate; device sizes have grown since] |

**Agent rules**
- Default to 44pt (iOS) / 48dp (Android) / 44 CSS px (touch web) hit areas. Desktop-only dense UI can go to 24–32 px with ≥ 8 px spacing.
- Expand the hit area with padding or `contentShape` (SwiftUI) / `::before` pseudo-elements (CSS), not by enlarging the visual.
- **Fitts's Law** (Fitts, 1954) [strong]: time to target grows with distance and shrinks with size. Put frequent and primary actions near the thumb (bottom) on mobile and near the current focus on desktop. Screen edges and corners are "infinite" targets for mouse users only, not for touch.
- Destructive actions shouldn't be adjacent to frequent ones. Separate them by space or a confirmation step.

---

## 2. Apple Human Interface Guidelines: key rules

### Layout and safe areas
- Respect **safe areas** (status bar, Dynamic Island, home indicator, rounded corners). Backgrounds can bleed to the edges; interactive content stays inside. SwiftUI places content in the safe area by default, and `.ignoresSafeArea()` should be applied to backgrounds only.
- Standard margins: 16pt on compact iPhone widths and 20pt on larger ones (layout margins adapt to the system readable width) [moderate: depends on device and size class].
- **Size classes:** compact/regular width and height. Design at minimum for iPhone compact portrait, iPhone landscape (compact height), and iPad regular width with split view and Stage Manager resizing.

### Typography (iOS)
- System font SF Pro. Default **Body = 17pt** at the "Large" Dynamic Type setting. Text styles: Large Title 34, Title1 28, Title2 22, Title3 20, Headline 17 semibold, Body 17, Callout 16, Subheadline 15, Footnote 13, Caption1 12, Caption2 11 [strong as published values at default size].
- **Minimum 11pt.** Always use text styles (`.font(.body)`) so Dynamic Type scales across 7 standard sizes plus 5 accessibility sizes (AX1–AX5, where body reaches ~53pt).

### Navigation
- **Tab bar** for 3–5 top-level peer destinations. Up to 5 on iPhone, with "More" beyond that (avoid it). Tabs never disappear when you drill down within a tab (exception: modal and full-screen content). Tapping the active tab pops to root and scrolls to top. Tab bar height is 49pt plus the home indicator inset (~83pt total on Face ID phones) [moderate: changes with iOS 26 floating tab bar].
- **Navigation bar** with hierarchical push. Back button top-left shows the previous title (or "Back"), and the left-edge swipe back must keep working. Large titles collapse on scroll for top-level screens.
- **Modality:** use sheets for scoped tasks. Give the sheet a clear "Cancel" (leading) and "Done/Save" (trailing) when it edits data. Sheets have detents (`.medium`, `.large`, custom) via `presentationDetents`, and swipe-down dismisses (confirm first if there are unsaved changes). Full-screen covers are for immersive tasks (camera, media).
- **Alerts:** only for critical information and confirmations. ≤ 2 buttons ideally. The destructive button gets the `.destructive` role (red), and Cancel gets the `.cancel` role. Use **action sheets / confirmation dialogs** for choices that follow a user action. HIG rules: no alerts at launch; none for common, undoable deletes (offer undo instead); avoid "OK" except on purely informational alerts; use the destructive style only for destructive options the person didn't deliberately choose; never make the destructive button the default.
- **Context menus** (long press) for secondary actions. Always duplicate them somewhere visible.
- iPad and Mac: prefer **sidebar / split view** (`NavigationSplitView`) over a tab bar on regular width.

### Controls and feedback
- Use system controls: `Toggle`, `Picker`, `DatePicker`, `Menu`, `ShareLink`, `PhotosPicker`. Custom pickers break muscle memory and accessibility.
- Buttons: `.borderedProminent` for the primary action, `.bordered` for secondary, plain for tertiary. Use one prominent button per view.
- Pull-to-refresh via `.refreshable`. Search via `.searchable`, which provides the system search field placement.
- **SF Symbols** (6,000+ symbols, multiple weights and scales, align to text baseline) [strong]. Match symbol weight to the adjacent text weight.

### iOS 26 / Liquid Glass (2025)
- The 2025 redesign introduced translucent "Liquid Glass" materials for controls and navigation layers, floating tab bars that minimise on scroll, and concentric corner radii. Guidance: **let the system apply glass to bars and controls; never to the content layer**, and don't stack glass on glass. Use the regular variant for text-heavy components and the clear variant only over rich media, with a ~35% dimming layer over bright content; color on glass only for the primary action's background [strong as platform rule — HIG 2026]. Check legibility over busy content, and remember that the Reduce Transparency and Increase Contrast settings change the look.

---

## 3. Material Design 3: key rules

### Layout: window size classes (m3.material.io, Compose `WindowSizeClass`) [strong]
| Class | Width (dp) | Typical nav | Panes |
|---|---|---|---|
| Compact | < 600 | Navigation bar (bottom) | 1 |
| Medium | 600–839 | Navigation rail | 1 (2 optional) |
| Expanded | 840–1199 | Navigation rail or drawer | 2 (list-detail) |
| Large | 1200–1599 | Navigation drawer / rail | 2 |
| Extra-large | ≥ 1600 | Drawer | 2–3 |
(Large and Extra-large were added in 2024–2025 updates [moderate: verify].)
- Margins: 16dp on compact, 24dp from medium upward. Grid of 4/8/12 columns. Spacing on a **4dp baseline grid, 8dp layout grid**.
- Canonical layouts: **list-detail, supporting pane, feed**.

### Navigation
- **Navigation bar** (bottom): 3–5 destinations, 80dp height (M3 baseline). Icons with labels, and the active indicator is a pill. Don't use it for a single-task app or more than 5 destinations.
- **Navigation rail** for medium and expanded widths, with 3–7 destinations. **Navigation drawer** for 5+ destinations or deep hierarchies. A modal drawer on compact widths is acceptable, though a "hamburger" hides destinations (see §5).
- **Top app bar:** small (64dp), center-aligned, medium and large variants. Large collapses on scroll.
- **System back** is required. Since Android 13/14 there is **predictive back**: the user previews the destination during the back gesture. Opt in with `android:enableOnBackInvokedCallback`, and never trap the back gesture except to confirm discarding work.
- **Edge-to-edge** is enforced for apps targeting Android 15 (SDK 35): draw behind the system bars and handle insets (`WindowInsets`, `Modifier.safeDrawingPadding()`) [strong, platform change 2024].

### Components (selected)
- **FAB:** one per screen, for the single most important *constructive* action (Compose, Create). Never use it for destructive actions or navigation. Sizes are 40 (small, M3E), 56 (regular) and 96dp (large). The extended FAB shows a label.
- **Buttons, in order of emphasis:** filled → tonal → elevated → outlined → text. Use one filled per region.
- **Bottom sheets:** standard (co-exists with content) and modal (scrim, dismiss on swipe or scrim tap). Include a drag handle.
- **Dialogs:** only for interruptions requiring a decision. Use a title plus supporting text, confirm on the right and dismiss on the left (text buttons). Use a **full-screen dialog** on compact widths for complex input.
- **Snackbar:** a brief message at the bottom with at most one action ("Undo"), 4–10 s. Never use it for critical errors. It must not cover the FAB or bottom nav. Auto-dismissing notifications may only carry information that is also discoverable elsewhere in the UI (presence lists, history, an undo in the menu) — never errors or sole-source actions (APG Alert pattern; Pickering, *Inclusive Components*).
- **Chips:** assist, filter, input, suggestion. Use filter chips for multi-select filters.
- **Shape scale:** none 0, extra-small 4, small 8, medium 12, large 16, extra-large 28dp, full (pill). M3 Expressive adds more shapes (the 35-shape library and morphing) [moderate].
- **Dynamic color:** M3 derives tonal palettes from a seed color or wallpaper (Android 12+), with the HCT color space and tone-based roles (primary, on-primary, primary-container, surface-container levels). Brand apps can disable it, but should still map their colors onto the role system.
- **Type scale:** Display/Headline/Title/Body/Label × L/M/S. Body Large is 16sp. Use **sp** for text so it scales with the user's font scale (up to 200% since Android 14, with non-linear scaling for large text) [strong].

### Material 3 Expressive (May 2025)
- Google's update added springier motion (the `MotionScheme` with spatial and effects springs), new components (button groups, split buttons, FAB menu, loading indicator, toolbars), bolder shapes and typography emphasis. Google reported internal research claiming users identify key elements faster with expressive designs, but that research is not independently replicated [weak: vendor claim]. Use Expressive where brand and emotion matter. Keep productivity surfaces calm.

---

## 4. Web conventions

- **Responsive breakpoints (practical):** 360–480 (phone), 768 (tablet), 1024 (small laptop), 1280–1440 (desktop), ≥ 1920 (wide). Design **content-first breakpoints** (where the layout breaks) rather than device lists. Use container queries for components (supported in all evergreen browsers since 2023).
- **Readable line length:** ~45–75 characters for body text (Bringhurst, *The Elements of Typographic Style*, 1992; widely used, and the evidence on speed is mixed [moderate]). Cap at `max-width: 65–75ch`.
- **Links look like links:** underlined in body copy. The cursor is a pointer only on clickable elements. Links navigate and buttons act; never swap these roles (it breaks screen readers, middle-click and cmd-click).
- **Focus:** a visible `:focus-visible` ring on every interactive element (see accessibility.md).
- **Hover doesn't exist on touch.** Never put essential information or actions behind hover only. Use `@media (hover: hover) and (pointer: fine)` to gate hover affordances.
- **Back button and URLs:** every meaningful state (tab, filter, modal with a deep link, pagination) should be URL-addressable. The browser Back button must undo the last navigation-like change, not exit the app. In Next.js App Router, use route segments and `searchParams` for filters, and intercepting/parallel routes for modals with URLs.
- **Scrolling:** native scroll only. No scroll-jacking. `scroll-behavior: smooth` only for in-page anchors, disabled under reduced motion.
- **Sticky headers:** keep them ≤ ~10–15% of viewport height on mobile. Hide-on-scroll-down and reveal-on-scroll-up is acceptable. Make sure sticky elements don't obscure focused elements (WCAG 2.4.11).
- **Modals on web:** use the native `<dialog>` element with `showModal()` (focus trap, Esc, inert background), or Radix/React Aria primitives. Return focus to the trigger on close.
- **Performance is UX:** Core Web Vitals "good" thresholds are LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile (web.dev) [strong]. Reserve space for images and ads (aspect-ratio) to prevent layout shift.

---

## 5. Navigation patterns: decision guide

| Situation | Mobile pattern | Web/desktop pattern |
|---|---|---|
| 2–5 frequent peer destinations | Tab bar (iOS) / Navigation bar (Android) | Top nav or left sidebar |
| 6+ destinations, infrequent | Tab bar for the top 4 + "More"/Profile hub, or a drawer | Sidebar with groups |
| Deep hierarchy (settings, catalog) | Push navigation with back | Sidebar + breadcrumbs |
| Single primary task (camera, editor) | No global nav. Full-screen with exit. | Focused canvas plus a minimal toolbar |
| Switching between peer views of the same content | Segmented control (iOS) / tabs (Material) | Tabs |
| Content discovery | Search + feed + filters | Search-first (⌘K command palette for power users) |

- **Hamburger menus reduce discoverability.** NN/g found hidden navigation was used less and made task completion slower than visible navigation, especially on desktop (Kara Pernice & Raluca Budiu, "Hamburger Menus and Hidden Navigation Hurt UX Metrics", NN/g, 2016, n=179) [moderate-strong]. On mobile it's acceptable only for secondary destinations.
- **Myth: the "3-click rule".** Users don't abandon after 3 clicks. Task success depends on scent and confidence, not click count (Joshua Porter, 2003; Jakob Nielsen; UIE study) [myth, weak original basis]. Optimise information scent instead.
- **Myth: "7±2 menu items".** Miller's 1956 paper concerns short-term memory span for unrelated items held in mind, not menus you can *see*. Visible menus rely on recognition, not recall, so the limit doesn't apply (Miller, 1956; later Cowan, 2001, suggests ~4 chunks for working memory anyway) [myth when applied to menus]. Group and order by frequency instead.
- **Myth: "users don't scroll".** Users scroll extensively, but attention decays below the fold. NN/g eye-tracking found ~57% of viewing time above the fold and ~74% in the first two screenfuls (Fessenden, NN/g, 2018) [moderate]. Put the most important content first and give clear cues that more content follows.
- **Hick's Law** (Hick 1952; Hyman 1953) [strong in lab for choice reaction time; weaker for real UI where users scan and recognise]. Fewer equally weighted choices make decisions faster, but a visual hierarchy (one primary) matters more than raw count.

---

## 6. Sheets, dialogs, toasts: which surface?

| Need | Use | Not |
|---|---|---|
| Confirm an irreversible action | Alert/Dialog with a specific verb ("Delete 3 photos") | A toast |
| Offer undo for a reversible action | Snackbar/Toast with "Undo" (≥ 5 s, focusable) | A confirmation dialog (prefer undo over confirm, per Raskin 2000) |
| Scoped sub-task (filter, share, pick) | Bottom sheet / popover (iPad/web) | Full-page navigation |
| Long or complex form | Full-screen sheet / page with its own URL | A small modal |
| Non-blocking status | Inline message near the source | A modal |
| System-level problem (offline) | Persistent banner | A disappearing toast |

Rule: **prefer undo over confirmation** for reversible actions. Confirmation dialogs get habituated and clicked through [moderate; Raskin, *The Humane Interface*, 2000; NN/g].

---

## 7. Cross-platform translation checklist

When porting iOS ↔ Android ↔ web, change these and keep the rest:
- [ ] Back: iOS top-left button plus edge swipe / Android system back plus predictive back / web browser back plus URL.
- [ ] Primary action: iOS nav-bar trailing button or a bottom button / Android FAB or bottom button / web a primary button in the content flow.
- [ ] Tabs: iOS tab bar / Android navigation bar (with a pill active indicator) / web top nav or sidebar.
- [ ] Pickers, date and time: always the native control.
- [ ] Alerts: iOS stacked or side-by-side buttons with Cancel by role / Android text buttons right-aligned, confirm on the right.
- [ ] Typography: SF Pro + Dynamic Type / Roboto or brand font in sp / web rem units with `font-size: 100%` root.
- [ ] Icons: SF Symbols / Material Symbols / an SVG set aligned with the brand.
- [ ] Share: system share sheet (`ShareLink`, `Intent.ACTION_SEND`, `navigator.share()`).
- [ ] Haptics: present on native, absent on web.
- [ ] Safe areas and insets: `safeAreaInset` / `WindowInsets` / `env(safe-area-inset-*)` plus `viewport-fit=cover`.

---

## 8. Code snippets

**SwiftUI navigation skeleton**
```swift
TabView {
  Tab("Home", systemImage: "house") { NavigationStack { HomeView() } }
  Tab("Search", systemImage: "magnifyingglass") { NavigationStack { SearchView() } }
  Tab("Profile", systemImage: "person.crop.circle") { NavigationStack { ProfileView() } }
}
.sheet(isPresented: $showFilters) {
  FiltersView().presentationDetents([.medium, .large]).presentationDragIndicator(.visible)
}
```
(The `Tab` initialiser is iOS 18+. Older targets use `.tabItem`.)

**Web safe-area and hit-area**
```css
.bottom-bar { padding-bottom: max(12px, env(safe-area-inset-bottom)); }
.icon-btn { position: relative; width: 24px; height: 24px; }
.icon-btn::before { content: ""; position: absolute; inset: -10px; } /* 44px hit area */
```

**Next.js: modal with a URL (App Router intercepting route)**
- `app/@modal/(.)photo/[id]/page.tsx` renders the modal over the feed, and `app/photo/[id]/page.tsx` renders the full page on direct load or refresh. This keeps Back, sharing and deep links correct.

---

## 9. Anti-patterns
- An iOS-style back chevron on Android, or a hamburger on iOS used as the primary nav.
- A custom bottom nav that hides on every scroll, so users lose their place.
- Tab bars that change their items depending on context.
- Hover-only actions on touch-capable web.
- Overriding the system edge-swipe or back gesture with a carousel.
- Modals launching modals (nested sheets more than one level deep).
- Disabling pinch-zoom on the web (`user-scalable=no`), which fails WCAG 1.4.4.

## 10. When NOT to follow convention
- Immersive and creative tools (games, camera, canvas editors) can define their own chrome. They still need an escape path and a non-gesture alternative.
- A truly novel interaction that shows a measured gain in usability tests and an A/B test. Keep a fallback and onboarding for it.
- Platform conventions that conflict with accessibility: accessibility wins.
