# SwiftUI Prototyping for Designers

> **Use this when:** an iOS/iPadOS (or other Apple platform) interaction must be felt on a real device: gestures, sheets, haptics, Dynamic Type, native navigation, widgets. Also use it when translating a Figma screen into SwiftUI.
> **Also load:** `tokens-bridge.md` (colors/type/spacing into Swift), `figma-craft-and-mcp.md` (reading the design).
> **Skip when:** the question is about layout or comprehension only (use Figma), or the product is web-first (use `web-prototyping.md`).

---

## 0. Point of view

1. **Native first, custom second.** iOS users have years of muscle memory for `NavigationStack`, sheets, swipe-back, `List` and system controls. Rebuilding them "to match the mock" usually loses accessibility, haptics and gesture behaviour for nothing. Change the mock or argue for the deviation with evidence.
2. **Feel is the reason to be in SwiftUI.** If the test does not depend on touch, physics, haptics, keyboard behaviour or Dynamic Type, a Figma prototype is cheaper.
3. **Previews are your artboards.** One `#Preview` per meaningful state (empty, loaded, error, dark, largest text). If you cannot preview a state, you have not designed it.
4. **Same honesty rules as web.** No fake urgency, no hidden opt-outs, no misleading paywalls in test builds. Apple's App Review Guidelines also reject many of these patterns, for example misleading subscription terms (Guideline 3.1.2) [strong, platform policy].

---

## 1. Scaffold recipe

**Requirements:** a Mac with Xcode (free, Mac App Store). Install on your own device with a free Apple ID (builds expire after about 7 days). TestFlight distribution needs the paid Apple Developer Program. **Swift Playgrounds** (iPad/Mac) can also build simple SwiftUI apps without Xcode [moderate; capability varies by version].

1. Xcode → File → New → Project → **iOS → App**.
2. Interface: **SwiftUI**. Language: **Swift**. Storage: None (add SwiftData later only if you need persistence).
3. Set the minimum deployment target. iOS 17+ unlocks `@Observable`, `#Preview`, `.sensoryFeedback`, `.symbolEffect`, `PhaseAnimator` and `KeyframeAnimator`, which simplify prototype code a lot. Check which OS the target users actually run. For newer design language APIs (e.g. iOS 26 "Liquid Glass" materials and `.glassEffect()`), gate them with `if #available` [moderate; verify against current SDK].
4. Run on a simulator (Cmd+R). Plug in your iPhone to test touch and haptics. **Simulators do not produce haptics, and their performance is not representative.**

**Folder layout**
```
MyProto/
  MyProtoApp.swift          // @main, injects environment (store, analytics, variant)
  DesignSystem/
    Tokens.swift            // colors, spacing, radii, type (see tokens-bridge.md)
    Components/             // PrimaryButton.swift, Card.swift ...
  Features/
    Checkout/CheckoutView.swift
    Checkout/CheckoutModel.swift
  Data/
    Fixtures.swift          // sample data incl. edge cases
  Support/
    Analytics.swift
    Experiment.swift
  Assets.xcassets           // color sets (Any/Dark), app icon, images
```

---

## 2. SwiftUI mental model (for people who think in Figma)

| Figma | SwiftUI |
|---|---|
| Frame with vertical auto layout | `VStack(alignment: .leading, spacing: 12)` |
| Horizontal auto layout | `HStack(spacing: 8)` |
| Absolute/overlap | `ZStack`, `.overlay {}`, `.background {}` |
| Fill container | `.frame(maxWidth: .infinity)` |
| Hug | default (views size to content) |
| Space between | `Spacer()` |
| Padding | `.padding(16)` / `.padding(.horizontal, 16)` |
| Corner radius | `.clipShape(.rect(cornerRadius: 12))` |
| Component + variants | `struct PrimaryButton: View` with an `enum Style` |
| Component property (text/bool) | stored properties / init parameters |
| Scroll/overflow | `ScrollView`, `List`, `LazyVStack` |
| Prototype interaction | `@State` + `withAnimation` |

**Modifier order matters.** Each modifier wraps the view before it:
```swift
Text("Pay").padding(16).background(.blue)   // blue includes the padding
Text("Pay").background(.blue).padding(16)   // blue hugs the text, padding outside
```

**State in one paragraph:** `@State` holds local view state. `@Binding` passes write access to a child. An `@Observable` class holds screen or app models and is shared with `.environment(model)` and read with `@Environment(Model.self)`. Views are cheap, short-lived descriptions, so never do heavy work inside `body`.

---

## 3. A complete, readable example

```swift
import SwiftUI

// MARK: Model (fake data, deterministic)
struct Plan: Identifiable, Hashable {
    let id: String
    let name: String
    let pricePerMonth: Decimal
    let note: String?
}

enum Fixtures {
    static let plans: [Plan] = [
        .init(id: "m", name: "Monthly", pricePerMonth: 9.99, note: nil),
        .init(id: "y", name: "Yearly", pricePerMonth: 4.99, note: "Billed 59.88 per year"),
    ]
    static let empty: [Plan] = []
}

// MARK: View
struct PlanPicker: View {
    let plans: [Plan]
    @State private var selected: Plan.ID?
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        VStack(alignment: .leading, spacing: Space.m) {
            Text("Choose a plan")
                .font(.title2.bold())                      // Dynamic Type aware

            if plans.isEmpty {
                ContentUnavailableView("No plans available",
                                       systemImage: "creditcard.trianglebadge.exclamationmark",
                                       description: Text("Try again later."))
            } else {
                ForEach(plans) { plan in
                    PlanRow(plan: plan, isSelected: plan.id == selected)
                        .onTapGesture {
                            withAnimation(reduceMotion ? nil : .snappy) { selected = plan.id }
                            Analytics.track("plan_selected", ["plan": plan.id])
                        }
                }
            }

            Button("Continue") { Analytics.track("plan_continue_tapped", ["plan": selected ?? "none"]) }
                .buttonStyle(.borderedProminent)
                .controlSize(.large)
                .frame(maxWidth: .infinity)
                .disabled(selected == nil)
        }
        .padding(Space.l)
        .sensoryFeedback(.selection, trigger: selected)   // haptic on change (iOS 17+)
        .onAppear { Analytics.track("plan_picker_viewed") }
    }
}

struct PlanRow: View {
    let plan: Plan
    let isSelected: Bool

    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: Space.xs) {
                Text(plan.name).font(.headline)
                if let note = plan.note {
                    Text(note).font(.subheadline).foregroundStyle(.secondary)
                }
            }
            Spacer()
            Text(plan.pricePerMonth, format: .currency(code: "EUR")).font(.headline)
            Image(systemName: isSelected ? "checkmark.circle.fill" : "circle")
                .foregroundStyle(isSelected ? Color.accentColor : .secondary)
                .contentTransition(.symbolEffect(.replace))
                .accessibilityHidden(true)
        }
        .padding(Space.m)
        .frame(minHeight: 44)                                  // HIG minimum hit target
        .background(.background.secondary, in: .rect(cornerRadius: Radius.m))
        .overlay {
            RoundedRectangle(cornerRadius: Radius.m)
                .strokeBorder(isSelected ? Color.accentColor : .clear, lineWidth: 2)
        }
        .contentShape(.rect)                                   // whole row is tappable
        .accessibilityElement(children: .combine)
        .accessibilityAddTraits(isSelected ? [.isButton, .isSelected] : .isButton)
    }
}

// MARK: Previews = artboards
#Preview("Loaded") { PlanPicker(plans: Fixtures.plans) }
#Preview("Empty")  { PlanPicker(plans: Fixtures.empty) }
#Preview("Dark, XXXL text") {
    PlanPicker(plans: Fixtures.plans)
        .preferredColorScheme(.dark)
        .dynamicTypeSize(.accessibility3)
}
```
(`Space` and `Radius` come from `Tokens.swift`; see `tokens-bridge.md`.)

---

## 4. Navigation and presentation patterns

| Need | Use | Notes |
|---|---|---|
| Drill-down hierarchy | `NavigationStack` + `navigationDestination(for:)` | Swipe-back for free |
| Sidebar/split (iPad, Mac) | `NavigationSplitView` | Collapses to a stack on iPhone |
| Peer sections | `TabView` | 3–5 tabs (Apple HIG guidance) [moderate] |
| Focused sub-task | `.sheet` with `.presentationDetents([.medium, .large])` | Half-sheets keep context |
| Destructive confirm | `.confirmationDialog` | System styling, accessible |
| Blocking message | `.alert` | Use sparingly |
| Full-screen flow (onboarding, camera) | `.fullScreenCover` | Always provide a clear exit |

---

## 5. Motion and haptics

- `withAnimation(.spring(duration: 0.35, bounce: 0.2)) { … }` for state-driven changes. Use `.animation(.snappy, value: x)` scoped to one value. Never use the unscoped `.animation()` (deprecated and unpredictable).
- `matchedGeometryEffect` for hero transitions between two views in the same hierarchy. On iOS 18+, `.navigationTransition(.zoom(sourceID:in:))` covers card-to-detail pushes [moderate; check SDK].
- `.contentTransition(.numericText())` for counters and prices. `PhaseAnimator` and `KeyframeAnimator` for multi-step choreography.
- SF Symbols: `Image(systemName:)` scales with text and supports `.symbolRenderingMode(.hierarchical)` and `.symbolEffect(.bounce, value:)`. Browse names in Apple's free **SF Symbols** app. Symbols are licensed for use on Apple platforms only [strong, Apple license terms], so do not ship them in Android/web products.
- Haptics: `.sensoryFeedback(.success, trigger:)`. Use them for confirmations and selections, not for every tap. Overuse trains users to ignore them (Apple HIG, "Playing haptics") [moderate].
- Respect **Reduce Motion** (`accessibilityReduceMotion`): swap slides and zooms for cross-fades.

---

## 6. Fake data, variants and analytics

**Variant switching without rebuilds**
```swift
// Support/Experiment.swift
enum Variant: String { case a, b }

enum Experiment {
    /// Order: launch argument (-variant b) > debug menu (UserDefaults) > sticky hash.
    static func current(userID: String) -> Variant {
        if let arg = UserDefaults.standard.string(forKey: "variant"), let v = Variant(rawValue: arg) { return v }
        // Stable hash (Swift's hashValue is randomised per launch, so never use it for bucketing)
        let h = userID.unicodeScalars.reduce(UInt32(0)) { ($0 &* 31) &+ $1.value }
        return h % 2 == 0 ? .a : .b
    }
}
```
Launch arguments like `-variant b` (Edit Scheme → Arguments) populate `UserDefaults`, so QA can force a variant. For real experiments, use the company's feature-flag/experimentation SDK.

**Analytics wrapper (one choke point)**
```swift
// Support/Analytics.swift
enum Analytics {
    static func track(_ event: String, _ props: [String: String] = [:]) {
        #if DEBUG
        print("[track]", event, props)
        #endif
        // Real SDK call goes here (e.g. PostHog, TelemetryDeck, Firebase, Amplitude).
    }
}
```
The event naming, exposure logging, primary metric and guardrail rules from `web-prototyping.md` §7 apply unchanged. Before any App Store build that tracks users across apps or sites, Apple requires App Tracking Transparency consent and accurate privacy "nutrition labels" [strong, platform policy].

**Fixtures:** cover the same edge cases as web: empty, one, many, long strings (and German or Finnish copy), missing images, errors, slow responses (`try await Task.sleep(for: .seconds(1))`), right-to-left (`.environment(\.layoutDirection, .rightToLeft)` in a preview).

---

## 7. Sharing the prototype

| Option | Audience | Notes |
|---|---|---|
| Run from Xcode on your device | You, in-person tests | Free Apple ID builds expire after about 7 days |
| **TestFlight** internal testing | Up to 100 team members | No review for internal builds |
| **TestFlight** external testing | Up to 10,000 testers via email or public link | First build needs a light Beta App Review (Apple docs) [strong] |
| Screen recording / Xcode Previews screenshots | Stakeholders | Use the Simulator's record feature (File → Record Screen) |
| Push the screen back into Figma | Design file | Use a SwiftUI→Figma workflow (Figma MCP / skill) where available, then swap in library instances |

---

## 8. Quality bar (iOS-specific additions)

- [ ] **Dynamic Type** from xSmall to AX5. Use text styles (`.body`, `.headline`), not fixed sizes. Use `@ScaledMetric` for custom spacing or icon sizes that should grow with text. Layouts switch from `HStack` to `VStack` at accessibility sizes (`ViewThatFits` or a check on `dynamicTypeSize.isAccessibilitySize`).
- [ ] **VoiceOver**: every control has a meaningful label, rows are combined, decorative images are hidden, and the reading order is logical. Test on device (triple-click side button shortcut).
- [ ] **Hit targets** ≥ 44×44 pt (Apple HIG) [strong platform guideline].
- [ ] **Contrast** ≥ 4.5:1 for text, in both Light and Dark, and with "Increase Contrast" on [strong, WCAG; Apple supports high-contrast color variants in asset catalogs].
- [ ] **Safe areas** respected. Content is not hidden under the home indicator, Dynamic Island or keyboard (`.safeAreaInset`, `.scrollDismissesKeyboard`).
- [ ] **All states** previewed: loading (`ProgressView` / `.redacted(reason: .placeholder)`), empty (`ContentUnavailableView`), error, offline, permission denied.
- [ ] **Orientation and size classes** checked if iPad is supported. Check iPhone SE (small) and Pro Max (large).
- [ ] **Performance**: smooth scrolling on a real device; `LazyVStack`/`List` for long collections; no network or decoding in `body`. Apple treats main-thread blocks of 250 ms or more as hangs (Xcode Organizer / Instruments "Hangs") [moderate, Apple tooling definition]. Profile with the Instruments **SwiftUI** template when something feels slow.
- [ ] Localisation-ready: strings in `Text("key")` resolve through String Catalogs. Use `.formatted()` for numbers, dates and currency. Never concatenate translated fragments.

---

## 9. Anti-patterns

- Fixed `.frame(width: 375)` layouts copied from a Figma frame. Use flexible stacks and `maxWidth`.
- `.font(.system(size: 17))` everywhere. This kills Dynamic Type. Use text styles or `.custom(_, size:, relativeTo:)`.
- Custom back buttons that break swipe-to-go-back.
- Gesture-only actions with no visible or accessible alternative (WCAG 2.5.1 Pointer Gestures [strong]).
- `onTapGesture` on non-button views without `.isButton` traits. Prefer `Button` with a custom `ButtonStyle`.
- Giant single-file views. Extract subviews at about 100 lines. Subviews are free in SwiftUI.

## Sources
- Apple, *Human Interface Guidelines* (layout, typography, haptics, accessibility, tab bars) (living document, 2014–2026). [strong as platform guidance]
- Apple Developer documentation: SwiftUI, Observation, SF Symbols, TestFlight, App Review Guidelines, App Tracking Transparency (2019–2026). [strong for API/policy facts; verify current OS]
- WWDC sessions: "Demystify SwiftUI" (2021), "Discover Observation in SwiftUI" (2023), "Animate with springs" (2023), "Explore SwiftUI animation" (2023). [strong as vendor documentation]
- W3C, *WCAG 2.2* (2023). [strong]
