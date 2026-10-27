# States & Edge-Cases Checklist

> **Use this when:** designing or reviewing any screen, component, or flow before handoff; writing a states matrix in a spec; doing design QA on a build; vibe-coding a prototype that must survive real data.
> **Covers:** the full UI state model, per-state design rules with numbers, content/data extremes, platform/environment edge cases, permissions, first-run vs power user, a states matrix template, and code patterns (React/SwiftUI).
> **Rule:** a design is not done until every applicable state is designed or explicitly marked N/A with a reason.

---

## 1. The point of view

- **The happy path is the minority of screens.** Real users spend a meaningful share of their time in loading, empty, error, and partial states. Designing only the ideal state ships the hardest parts to engineers to improvise.
- **Every state is a chance to help.** Empty states teach, errors recover, loading reassures. None of them is a dead end.
- **Never lose user work.** Any state that destroys input or progress is severity 4.

---

## 2. The core state model

Scott Hurff's "UI stack" (*Designing Products People Love*, 2016; blog 2015) [practice canon] names five: **ideal, empty, error, partial, loading**. Extend it to the full set below.

| State | Question it answers | Must include |
|---|---|---|
| **Ideal** | Normal populated use | Realistic data volume, not the 3-item mock |
| **Empty: first use** | "What is this and what do I do?" | Value explanation, one primary action, optional sample content |
| **Empty: user-cleared** | "I finished / deleted everything" | Positive confirmation ("All caught up"), next step |
| **Empty: no results** | "My search/filter found nothing" | Echo the query, suggestions, clear-filters action, spelling tolerance |
| **Loading: initial** | "Is it working?" | Skeleton or spinner per timing rules below |
| **Loading: incremental** | Pagination, infinite scroll, refresh | Inline loader at the edge, keep existing content |
| **Loading: action in progress** | Button tapped, submit | Disable + in-button progress, prevent double submit |
| **Partial** | Some data, some missing/failed | Show what you have; mark what's missing; per-item retry |
| **Error: recoverable** | Validation, network, timeout | What happened, how to fix, retry, preserve input |
| **Error: blocking** | Server down, account suspended, forced update | Explanation, status/ETA if known, support path |
| **Error: not found / gone** | 404, deleted item, expired link | What happened, where to go next |
| **Success / confirmation** | "Did it work?" | Clear feedback, undo if possible, next action |
| **Offline / degraded** | No or poor connection | Cached content, queued actions with status, sync indicator |
| **Permission: not asked** | Feature needs OS permission | Pre-permission explanation in context, then OS prompt |
| **Permission: denied** | User said no | Feature works degraded or explains how to enable in Settings, no nagging |
| **Permission: role/plan-gated** | User lacks rights or tier | Explain why, who can grant it, or honest upgrade path |
| **Disabled** | Action not available now | Explain why (tooltip/helper text), or hide if never available |
| **Stale / conflict** | Data changed elsewhere | Indicate freshness; resolve conflicts without silent overwrite |
| **First-run / onboarding** | New user | Progressive disclosure, skippable, value before sign-up where possible |
| **Power user / at scale** | 10,000 items, 200 tags | Search, filter, bulk actions, keyboard, density options |
| **Logged-out / guest** | Unauthenticated | What's visible, what prompts sign-in, preserve intent after login |

---

## 3. Per-state design rules (with numbers)

### 3.1 Loading
Response-time thresholds (Miller, 1968; Card, Robertson & Mackinlay, 1991; Nielsen, 1993) [strong]:
- **< 0.1 s**: feels instant; no indicator needed, just the result.
- **0.1–1 s**: user notices delay but flow holds; no spinner (it would flash). Show pressed state.
- **1–10 s**: show an indicator; skeleton for content layouts, spinner for short actions.
- **> 10 s**: determinate progress (percent or steps), allow cancel and background use, notify on completion.
- Avoid flashing loaders: delay showing an indicator ~300–500 ms, and once shown keep it ≥ ~500 ms [weak/anecdotal; common engineering practice].
- **Skeletons** reduce perceived wait vs spinners in some studies, but evidence is mixed and depends on layout matching the final content [contested]. Rule: skeleton must match the real layout; otherwise layout shift destroys the benefit.
- **Optimistic UI** for low-risk, high-success actions (like, add to list, reorder): update immediately, reconcile in background, roll back visibly on failure. Not for payments or irreversible actions.
- Doherty threshold (~400 ms system response sustains productivity; Doherty & Thadani, IBM, 1982) [contested/dated, era of mainframes; treat as directional].
- No layout shift on load (Core Web Vitals CLS "good" ≤ 0.1; Google web.dev) [strong as standard].

### 3.2 Empty
- First-use empty state = the most-viewed onboarding screen. Include: what this area is for (1 line), the single best first action (button), optionally a sample/template.
- Don't show an empty table with column headers and zero rows as the empty state.
- No-results: echo the query ("No results for 'recipt'"), offer "Did you mean 'receipt'?", show how to broaden (remove filter chips), and popular alternatives.
- Celebrate the user-cleared empty (inbox zero) differently from the never-used empty.

### 3.3 Errors
Message anatomy: **[what happened] + [why, if it helps] + [what to do]**, plus action button. Plain language, no blame, no codes as headline (code as small secondary text for support is fine).
- Inline validation: validate on blur or on submit, not on every keystroke for most fields — except strict-rule fields (username availability, password rules), which get live feedback with a short delay; never show errors on focus; show success persistently and in words on hard fields only; place message adjacent to the field; keep focus management accessible (Wroblewski, "Inline Validation in Web Forms", 2009, reported faster completion and fewer errors with inline validation) [moderate].
- Never clear the user's input on error.
- Network errors: auto-retry with backoff for idempotent requests; manual "Try again" visible.
- Error summary at top of long forms with links to each field (GOV.UK Design System pattern) [strong as accessible practice].
- Distinguish "you can fix this" vs "we're fixing this".
- Error color is not the only signal: icon + text (WCAG 1.4.1 Use of Color).

### 3.4 Partial
- Render available data; mark failed sections with inline retry; never block the whole screen for one failed widget.
- Partial uploads/sync: per-item status (queued, uploading %, failed + retry, done).
- Partial profile/data completeness: show what's missing and why it matters, without nagging.

### 3.5 Offline
- Decide per feature: **available offline**, **queued**, or **requires connection**. Document it in the spec.
- Show connection state unobtrusively; don't block reading cached content.
- Queued actions show pending state and survive app restart.
- On reconnect: sync, then resolve conflicts (last-write-wins only when safe; otherwise show both).

### 3.6 Permissions (OS)
- Ask **in context**, at the moment of need, never at cold start for everything.
- Pre-permission ("priming") screen explaining value, then system prompt. On iOS you generally get one system prompt per permission; after denial you can only deep-link to Settings (Apple HIG) [strong, platform behavior].
- Denied: feature degrades gracefully (e.g. manual entry instead of camera scan). Offer a Settings path once, in the feature's own context; no repeat nags.
- Location/camera/mic/notifications/contacts/photos (limited library on iOS 14+) / tracking (ATT): each has its own copy and fallback.

### 3.7 First-run vs power user
- First-run: get to value fast (time-to-first-value is the onboarding metric); defer account creation where feasible; skippable tours; contextual tips over front-loaded carousels (carousel/tutorial screens are widely skipped) [moderate].
- Power user: keyboard shortcuts, bulk select, saved views, density toggle, undo history, export. Verify the design at 10× and 1000× typical data volume.
- **Progressive disclosure** (Nielsen, 2006): basics first, advanced on request [strong as practice].

---

## 4. Content & data extremes (test every component)

Text
- [ ] Shortest (1 char) and longest realistic value (names up to 50+ chars; German compound words; titles of 200 chars)
- [ ] Truncation rule defined: ellipsis position, line clamp count, tooltip/expand for full text
- [ ] Localization expansion: plan for ~30–40% longer strings vs English for many European languages; short strings can expand 100%+ (IBM globalization guidelines) [moderate]
- [ ] RTL (Arabic, Hebrew): mirrored layout, icons with direction flipped where semantic
- [ ] CJK and scripts with taller glyphs (Thai, Devanagari): line-height room
- [ ] Emoji, special characters, user-generated HTML-like text
- [ ] Pluralization (0, 1, 2, few, many per CLDR rules), not "1 item(s)"

Numbers, dates, money
- [ ] 0, negative, very large (1,000,000+), decimals, locale formats (1.000,00 vs 1,000.00)
- [ ] Currency symbol placement; multiple currencies
- [ ] Dates: relative vs absolute, time zones, 12/24 h, "yesterday" across midnight
- [ ] Durations over 24 h; counts over 99 ("99+")

Media & identity
- [ ] Missing avatar (initials fallback), broken image, slow image (placeholder with fixed aspect ratio)
- [ ] Portrait vs landscape vs extreme aspect ratio media
- [ ] Names without surname, single-name users, very long names

Lists & collections
- [ ] 0, 1, 2, typical, 1,000+, 100,000+ (pagination/virtualization, search)
- [ ] Mixed item types; deleted/archived items; items being edited by someone else
- [ ] Sort and filter combinations that produce empty

---

## 5. Environment & accessibility edge cases

- [ ] Smallest supported screen (e.g. 320 CSS px width / iPhone SE class) and largest (desktop ultrawide, iPad landscape, foldables)
- [ ] Orientation change mid-task preserves state
- [ ] **Dynamic Type / text scaling** up to the largest accessibility sizes (iOS AX5; Android 200%); layout reflows, nothing clipped (WCAG 1.4.4 resize text 200%; 1.4.10 reflow at 320 CSS px) [strong, standard]
- [ ] Dark mode and high-contrast mode; contrast ratios hold in both
- [ ] Screen reader: labels, roles, reading order, announcements for state changes (live regions / accessibility notifications)
- [ ] Keyboard-only: focus visible, logical order, no traps, skip links (web)
- [ ] Reduced motion: replace large motion with fades (prefers-reduced-motion / Reduce Motion)
- [ ] Touch targets ≥ 44×44 pt (iOS) / 48×48 dp (Android); WCAG 2.2 minimum 24×24 CSS px with spacing
- [ ] Slow network (3G throttling), high latency, request timeout
- [ ] Interrupted flows: incoming call, app backgrounded, session expired mid-form (preserve data, re-auth, resume)
- [ ] Deep link into a mid-flow screen, logged out and logged in
- [ ] Notification tapped for deleted content
- [ ] Multiple devices / tabs editing the same thing
- [ ] Old app version vs new server (forced or soft update UI)

---

## 6. Destructive & sensitive actions

- Prefer **undo** (snackbar, ~5–10 s) over confirmation dialogs for reversible actions; confirmations get habituated and clicked through [moderate].
- Use **confirmation** for irreversible, high-cost actions: state the consequence specifically ("Delete 'Q3 Report' and its 12 comments? This can't be undone."), make the destructive button label the verb ("Delete"), not "OK".
- For extreme cases (delete account, delete workspace), require typed confirmation or a cooling-off period.
- Soft delete / trash with retention window where feasible.
- **Focus on delete:** when a focused item is removed, move focus deliberately — to the first remaining item, or to the list heading (`tabindex="-1"`) if the list is now empty — and announce the deletion via a polite live region (Pickering, *Inclusive Components*). → references/books/inclusive-components.md

---

## 7. States matrix template (put in every spec)

```
| Screen / component | Ideal | Empty (first) | Empty (no results) | Loading | Partial | Error | Offline | Permission | First-run | Power user |
|---|---|---|---|---|---|---|---|---|---|---|
| Inbox list         | ✓ F12 | ✓ F13 | ✓ F14 | skeleton F15 | per-row retry | banner + retry | cached + badge | N/A | tip card | bulk select |
| Compose            | ✓ | N/A (always editable) | N/A | send-in-progress | attachment failed | inline field errors | queued "will send" | contacts denied → manual | — | shortcuts |
```
Each cell: frame reference, short description, or "N/A: [reason]".

---

## 8. Code patterns for prototypes

### React / Next.js: model state explicitly, not with booleans
```tsx
type Async<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "empty" }
  | { status: "error"; error: string; retry: () => void }
  | { status: "partial"; data: T; failed: string[] }
  | { status: "success"; data: T };

function ListView({ state }: { state: Async<Item[]> }) {
  switch (state.status) {
    case "loading": return <ListSkeleton rows={6} />;
    case "empty":   return <EmptyState title="No projects yet" action="Create project" />;
    case "error":   return <ErrorState message={state.error} onRetry={state.retry} />;
    case "partial": return <><List items={state.data} /><InlineRetry ids={state.failed} /></>;
    case "success": return <List items={state.data} />;
    default:        return null;
  }
}
```
A discriminated union makes impossible states ("loading and error") unrepresentable, and the type checker flags any unhandled state.

### SwiftUI
```swift
enum LoadState<T> { case loading, empty, failed(Error), partial(T, failedIDs: [ID]), loaded(T) }

@ViewBuilder func content(_ state: LoadState<[Item]>) -> some View {
  switch state {
  case .loading: ProgressView().accessibilityLabel("Loading items")
  case .empty: ContentUnavailableView("No items", systemImage: "tray",
                 description: Text("Items you add will appear here."))
  case .failed(let e): ErrorView(error: e, retry: reload)
  case .partial(let items, let ids): ItemList(items: items, failed: ids)
  case .loaded(let items): ItemList(items: items)
  }
}
```
`ContentUnavailableView` (iOS 17+) gives platform-consistent empty and no-results states, including `.search` [platform API].

Prototype test harness: add a debug menu or query param (`?state=empty|error|slow`) to flip every state, plus fixtures for longest text, 0 items, and 1,000 items. Throttle network in devtools; on iOS use Network Link Conditioner.

---

## 9. Pre-handoff gate (copy into reviews)

- [ ] Every screen has the applicable states from Section 2, or N/A with reason
- [ ] Copy for every state written and keyed
- [ ] Loading timing behavior specified (threshold, skeleton vs spinner, min display)
- [ ] Error messages: what/why/how, input preserved, retry defined
- [ ] Offline behavior per feature documented
- [ ] Permission ask moment, priming copy, and denied fallback designed
- [ ] Extremes tested: longest text, 0/1/many, localization, RTL if supported
- [ ] Accessibility: text scaling, contrast both themes, screen reader labels, focus order, reduced motion, target sizes
- [ ] Destructive actions: undo or specific confirmation
- [ ] Deep-link, interruption, session-expiry behavior defined
- [ ] Analytics events fire in non-happy states too (errors and empties are signal)

## Anti-patterns
- Generic "Something went wrong" with no action.
- Spinner for everything, or full-screen spinner blocking cached content.
- Empty state that is just blank space or a sad illustration with no action.
- Disabled button with no explanation of why.
- Permission prompts on launch.
- Errors as disappearing toasts for things the user must fix.
- Designing only at 3 items and English-length strings.
