# Web Prototyping for Designers (Next.js + React + Tailwind + shadcn/ui + Radix + Motion)

> **Use this when:** a design must become a working web prototype: to feel an interaction, test with users, run an instrumented experiment, or hand engineers a living reference.
> **Also load:** `tokens-bridge.md` (wire tokens), `figma-craft-and-mcp.md` (pull from Figma); the data-driven references for experiment design and metrics.
> **Skip when:** a static Figma prototype answers the question (layout comprehension, flow order). See the decision table in `figma-craft-and-mcp.md` §5.

---

## 0. Point of view

1. **A prototype exists to answer a question.** Before writing code, write the hypothesis in one line: *"If we [change], then [metric] will [move] because [evidence]."* No question means no prototype.
2. **Fake the backend, never the experience.** Hard-code data, stub APIs, skip auth. But states, motion, real text lengths and accessibility must be real, or the test result is fiction.
3. **Readable over clever.** The audience is a designer six weeks from now and an engineer who will rebuild it. Use plain components, obvious file names, comments that say *why*, and no premature abstraction.
4. **Use the system.** Pull tokens from the design system and primitives from shadcn/Radix. Hand-rolled dropdowns and dialogs are where accessibility bugs live.
5. **Honest prototypes only.** No fake countdown timers, fake scarcity, pre-ticked consent or "confirmshaming" copy, even "just for the test". If it would be a dark pattern in production, it is one in the test. It also contaminates what you learn (Mathur et al., "Dark Patterns at Scale", CSCW 2019 [strong, 11K-site crawl]; Luguri & Strahilevitz, "Shining a Light on Dark Patterns", J. Legal Analysis 2021 [strong, large experiments showing dark patterns raise compliance, so a "win" from one measures manipulation, not value]).

---

## 1. When to use which stack

| Situation | Choose |
|---|---|
| Web product, responsive site, dashboard, marketing page, any test you want to share by link | **Next.js + Tailwind + shadcn/ui** (this file) |
| iOS-native feel: gestures, haptics, sheets, Dynamic Type, widgets | **SwiftUI** (`swiftui-prototyping.md`) |
| Single interaction study, no routing | One React component in a sandbox (CodeSandbox/StackBlitz), or a Next.js page |
| Pure animation exploration | Motion in a single page, or Figma motion tools / Rive |
| Cross-platform mobile feel "good enough" for a usability test | Web prototype in a mobile viewport, added to the home screen. State its limits. |

**Version caution:** Next.js, Tailwind and shadcn ship breaking changes often (Next.js App Router async request APIs; Tailwind v4 CSS-first config). Before writing code in an existing project, check the installed versions in `package.json`. If the project ships version-specific docs (for example `node_modules/next/dist/docs/`), read them. Do not rely on memory.

---

## 2. Scaffold recipe (about 5 minutes)

```bash
# 1. Create app (TypeScript, Tailwind, App Router, ESLint, src dir, @/ alias)
npx create-next-app@latest my-proto --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-proto

# 2. shadcn/ui (copies accessible Radix-based components INTO your repo)
npx shadcn@latest init
npx shadcn@latest add button card input label dialog sheet tabs toast skeleton badge

# 3. Motion (formerly Framer Motion) + optional fake data
npm i motion
npm i -D @faker-js/faker

# 4. Run
npm run dev   # http://localhost:3000
```

**Folder layout that designers can navigate**

```
src/
  app/
    layout.tsx            # fonts, theme, analytics provider
    page.tsx              # index: links to every prototype screen/variant
    checkout/page.tsx     # one folder per flow
    checkout/variant-b/page.tsx
  components/
    ui/                   # shadcn primitives (do not edit casually)
    checkout/             # feature components
  data/
    fixtures.ts           # fake data, including edge cases
  lib/
    analytics.ts          # track() wrapper
    experiment.ts         # variant assignment
  styles/ (or app/globals.css)  # tokens as CSS variables
```

- Put an **index page** at `/` listing every screen and variant with one-line descriptions. Testers and stakeholders start there.
- Use one route per state when you need to demo it: `/checkout?state=error`, or a small floating "state switcher" panel visible only when `?debug=1`.

---

## 3. React and Next.js essentials an agent must get right

- **Server vs client components.** In the App Router, components are Server Components by default. Anything with `useState`, `useEffect`, event handlers, Motion or browser APIs needs `"use client"` at the top of the file. Keep pages server-side and push `"use client"` down to the interactive leaf.
- **Async request props.** In recent Next.js versions, `params` and `searchParams` passed to pages are Promises:

```tsx
// src/app/checkout/page.tsx
export default async function Page({
  searchParams,
}: { searchParams: Promise<{ v?: string; state?: string }> }) {
  const { v = "a", state = "default" } = await searchParams;
  return <Checkout variant={v === "b" ? "b" : "a"} state={state} />;
}
```

- **Images and fonts.** Use `next/image` (it reserves space and prevents CLS) and `next/font` (self-hosts fonts, avoids layout shift from font swap).
- **Links.** Use `next/link`, not `<a>`, for internal navigation.
- **State.** `useState` is enough for prototypes. Reach for a store (Zustand) only when several routes share state. Persist to `localStorage` inside try/catch if a flow spans reloads.

---

## 4. shadcn/ui + Radix: how to use them well

- shadcn/ui is **not a dependency**. It copies component source into `src/components/ui`. You own and restyle it through tokens (CSS variables) rather than one-off classes.
- Radix primitives give you focus management, keyboard support, ARIA roles, portals and dismiss behaviour for Dialog, Popover, DropdownMenu, Tabs, Tooltip and others. **Never rebuild these from `div`s.**
- Variants use `class-variance-authority` (cva). Add a variant there instead of passing ad-hoc classes:

```tsx
// excerpt of components/ui/button.tsx (cva)
variants: {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  },
  size: { sm: "h-9 px-3", default: "h-10 px-4 py-2", lg: "h-11 px-8" },
},
```
- **Small-change discipline:** "make the primary button taller" means editing `size.default` or the spacing token once, not adding `className="h-12"` in 14 places.

---

## 5. Motion (motion.dev)

```tsx
"use client";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function Toast({ open, children }: { open: boolean; children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 8 }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className="rounded-lg bg-foreground px-4 py-3 text-background"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Rules of thumb**
- UI transitions mostly sit in the 100–300 ms range. Small elements are faster, large surfaces slower (Material Design motion guidance; NN/g "Animation duration", 2020) [moderate, practitioner guidance].
- Animate `transform` and `opacity` only. Animating `width`, `height`, `top`, `left`, `margin` or `border` triggers layout work, jank and layout shifts (pages animating margin/border widths are rated "poor" for CLS about twice as often as pages overall; web.dev). Use Motion's `layout` prop for size and position changes.
- Respect `prefers-reduced-motion`. Replace movement with fades and never remove the feedback itself. WCAG 2.3.3 (AAA) covers animation from interactions [strong standard].
- Motion should explain (where did it come from, where did it go), not decorate.

---

## 6. Fake data that tells the truth

```ts
// src/data/fixtures.ts
import { faker } from "@faker-js/faker";
faker.seed(42); // deterministic: same data every reload, every tester

export type Item = { id: string; title: string; price: number; img: string };

export const items: Item[] = Array.from({ length: 24 }, (_, i) => ({
  id: String(i),
  title: faker.commerce.productName(),
  price: Number(faker.commerce.price({ min: 3, max: 400 })),
  img: `https://picsum.photos/seed/${i}/400/300`,
}));

// Edge cases: ALWAYS include these alongside the happy path
export const edgeItems: Item[] = [
  { id: "long", title: "An extraordinarily long product name that will definitely wrap onto three lines in most layouts", price: 1299.99, img: "" },
  { id: "short", title: "Ox", price: 0, img: "" },
];
export const emptyList: Item[] = [];
```

Checklist for fixtures: empty, one item, typical, many (hundreds), very long strings, missing image, zero/negative/huge numbers, non-Latin script, RTL (Arabic/Hebrew) if you ship there, slow network (artificial delay), error response.

```ts
// Simulate latency and failure in one place
export async function fakeFetch<T>(data: T, { ms = 600, failRate = 0 } = {}): Promise<T> {
  await new Promise((r) => setTimeout(r, ms));
  if (Math.random() < failRate) throw new Error("Simulated network error");
  return data;
}
```

---

## 7. Wiring analytics to test a hypothesis

### 7.1 Event design (before code)
Write a tiny tracking plan next to the hypothesis:

| Event | When | Properties | Role |
|---|---|---|---|
| `experiment_exposed` | variant actually rendered on screen | `experiment`, `variant` | Exposure (denominator) |
| `checkout_viewed` | page visible | `variant` | Funnel step |
| `payment_method_selected` | user picks a method | `method`, `variant` | Behaviour |
| `order_submitted` | submit clicked and valid | `variant`, `value` | **Primary metric** |
| `form_error_shown` | validation error displayed | `field`, `variant` | **Guardrail** |

- Naming: `object_action`, past tense, snake_case, consistent across the product (Segment/Twilio tracking-plan conventions [moderate, industry practice]).
- Log exposure **when the variant is seen**, not at assignment. Otherwise the analysis is diluted by users who never saw the change (Kohavi, Tang & Xu, *Trustworthy Online Controlled Experiments*, 2020) [strong].
- Pick **one primary metric**, a few **guardrails** (errors, latency, refunds, unsubscribes) and decide the minimum detectable effect *before* launch. See the data-driven references.

### 7.2 A vendor-agnostic `track()` wrapper

```ts
// src/lib/analytics.ts  (call from client components / event handlers)
type Props = Record<string, string | number | boolean | undefined>;

export function track(event: string, props: Props = {}) {
  const payload = { event, ...props, ts: Date.now() };
  if (process.env.NODE_ENV !== "production") console.info("[track]", payload);
  // Plug a real tool here (keep it in ONE place):
  // posthog.capture(event, props);           // PostHog (posthog-js)
  // vercelTrack(event, props);  // import { track as vercelTrack } from "@vercel/analytics"
  // window.gtag?.("event", event, props);    // GA4
}
```

### 7.3 Variant assignment (prototype-grade)

```ts
// src/lib/experiment.ts
// Sticky 50/50 split by a stable id; ?v=a|b overrides for demos and QA.
export function assignVariant(userId: string, experiment: string): "a" | "b" {
  let h = 0;
  for (const c of experiment + ":" + userId) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h % 2 === 0 ? "a" : "b";
}
```
For real traffic use the product's experimentation platform (feature flags with sticky bucketing, e.g. PostHog, Statsig, LaunchDarkly, Optimizely, GrowthBook) instead of homemade splits. They handle sample-ratio mismatch checks and stats. A prototype split is fine for moderated tests and small betas, not for decisions on revenue.

### 7.4 Qualitative pairing
For moderated tests, turn on session recording only with consent. Add a visible "This is a prototype" banner and keep a one-click way to reset state (`/reset`).

### 7.5 Privacy
No real personal data in prototypes. Do not send PII in event properties. If the prototype goes to the public, show consent for analytics cookies where the law requires it (GDPR/ePrivacy in the EU) [strong legal requirement; details vary].

---

## 8. Deploying a preview

| Option | How | Notes |
|---|---|---|
| **Vercel** | `npx vercel` (preview), `npx vercel --prod`; or connect the Git repo so every branch/PR gets a preview URL | First-party for Next.js. Supports password protection / deployment protection on some plans. |
| **Netlify** | `npx netlify deploy` (draft URL), `--prod` for production; or connect Git for deploy previews | Next.js supported through its runtime adapter. |
| Local share | `npm run dev` + a tunnel (e.g. `npx localtunnel --port 3000`) | Quick moderated sessions only. |
| Static export | `output: "export"` in `next.config` → any static host | Loses server features (route handlers, dynamic server rendering). |

- Name previews clearly (`checkout-variant-b.vercel.app`). Pin the URL in the Figma file's README and in the test plan.
- Add `<meta name="robots" content="noindex">` to prototypes so search engines do not index them.

---

## 9. Quality bar: "done" for a prototype

### 9.1 States (every interactive surface)
- [ ] Default, hover, pressed/active, **focus-visible**, disabled, loading, success, error
- [ ] Data: empty, one, many, very long text, missing media, slow, offline/failed
- [ ] First-run vs returning user if the flow differs
- [ ] Destructive actions have confirmation or undo (undo is usually better for frequent actions; Raskin, *The Humane Interface*, 2000) [moderate]

### 9.2 Responsiveness
- [ ] Test at 360, 390, 768, 1024, 1280 and 1440+ px widths. No horizontal scroll at 320 CSS px (WCAG 2.2 1.4.10 Reflow, AA) [strong]
- [ ] Use mobile-first Tailwind (`base` = mobile, `md:`, `lg:` add up), fluid type with `clamp()` for headings, and container queries (`@container`) for components that live in different column widths
- [ ] Touch targets at least 24×24 CSS px (WCAG 2.2 2.5.8, AA). Aim for 44×44 (Apple HIG; WCAG 2.5.5 AAA) [strong standard]
- [ ] Text zoom to 200% without loss (WCAG 1.4.4)

### 9.3 Accessibility (minimum)
- [ ] Semantic elements: `button` for actions, `a` for navigation, real `label`s, a heading order with no skipped levels, and landmarks (`header`, `main`, `nav`)
- [ ] Full keyboard path: Tab order follows the visual order, focus is visible, no keyboard traps, `Esc` closes overlays (Radix does this for you)
- [ ] Contrast: 4.5:1 for body text, 3:1 for large text and UI component boundaries/icons (WCAG 1.4.3, 1.4.11) [strong]
- [ ] Color is never the only signal (errors get an icon and text)
- [ ] Images have `alt` (empty `alt=""` for decorative ones). Icon-only buttons have `aria-label`
- [ ] Dynamic messages are announced (`role="status"` / `aria-live="polite"`)
- [ ] Run axe DevTools or Lighthouse a11y, then do a 5-minute screen reader pass (VoiceOver: Cmd+F5 on macOS). Automated tools find only part of the issues: Deque reported about 57% of issues by volume in its 2021 audit dataset [moderate, vendor study]. Manual checks are mandatory.
- Context: the WebAIM Million survey finds detectable WCAG failures on roughly 95% of top home pages, year after year (2019–2025) [strong, annual 1M-page crawl]. The bar is low, so clear it.

### 9.4 Performance: Core Web Vitals basics
Google's thresholds, assessed at the **75th percentile** of page loads (web.dev, 2020; INP replaced FID in March 2024) [strong, official]:

| Metric | Measures | Good | Poor |
|---|---|---|---|
| **LCP** Largest Contentful Paint | loading of main content | ≤ 2.5 s | > 4.0 s |
| **INP** Interaction to Next Paint | responsiveness to input | ≤ 200 ms | > 500 ms |
| **CLS** Cumulative Layout Shift | visual stability | ≤ 0.1 | > 0.25 |

Designer-level fixes:
- **LCP:** hero image through `next/image` with `priority` (or the current equivalent in your Next version) and correct `sizes`; no giant autoplay video above the fold; fonts through `next/font`. The LCP image must be discoverable in the initial HTML (not behind JS, `data-src` or a carousel script), never lazy-loaded, with `fetchpriority="high"`.
- **INP:** keep handlers light; paint the visual update first and defer non-visual work (analytics, saving, recounts) to a later task; break up any main-thread task over 50 ms; show instant feedback (pressed state, optimistic UI) before slow work; avoid re-rendering huge lists on every keystroke (debounce, virtualise lists of more than a few hundred rows).
- **CLS:** always reserve space for images, ads, embeds and late banners (explicit width/height or `aspect-ratio`); skeletons the same size as the final content; never insert content above what the user is reading.
- Measure: Chrome DevTools Performance panel, Lighthouse (lab), PageSpeed Insights / CrUX (field). A prototype's lab score is a smoke test, not proof.
- Perceived speed: Doherty & Thadani (IBM, 1982) argued productivity rises sharply when system response is under about 400 ms [weak/moderate, old context]. Nielsen's 0.1 s / 1 s / 10 s response-time limits (1993, based on Miller 1968 and Card et al. 1991) [moderate, widely used heuristic] are good design targets for feedback.

### 9.5 Readability of the code (for designers)
- [ ] One component per file, named after what it is (`PriceSummary.tsx`), under about 150 lines
- [ ] Tokens, never raw hex/px, in classes (`bg-primary`, not `bg-[#3b82f6]`)
- [ ] Comments explain intent and link the hypothesis/Figma node
- [ ] `README.md`: question, hypothesis, how to run, routes, variants, events, known shortcuts/fakes

---

## 10. Anti-patterns

- Arbitrary values everywhere (`mt-[13px]`, `text-[#333]`). This drifts from the system immediately.
- `div onClick` for buttons: no keyboard support, no role.
- Copying generated code from Figma wholesale (absolute positioning, fixed sizes). Rebuild with layout primitives and system components.
- Testing only the happy path with perfect data, then being surprised in production.
- Running an "A/B test" on 40 users and reading the result as significant. Use moderated tests for qualitative signal and real experimentation infrastructure for quantitative decisions.
- Shipping prototype code as production code without engineering review.

## Sources
- Next.js docs (App Router, Image, Font), React docs, Tailwind CSS docs, shadcn/ui docs, Radix UI docs, motion.dev docs (2024–2026). [strong for API facts; check installed versions]
- web.dev, "Web Vitals" and "INP" articles (Google, 2020–2024). [strong]
- W3C, *WCAG 2.2* (2023). [strong]
- R. Kohavi, D. Tang, Y. Xu, *Trustworthy Online Controlled Experiments* (2020). [strong]
- A. Mathur et al., "Dark Patterns at Scale", Proc. ACM HCI / CSCW (2019). [strong]
- J. Luguri, L. Strahilevitz, "Shining a Light on Dark Patterns", *Journal of Legal Analysis* (2021). [strong]
- WebAIM, "The WebAIM Million" (annual, 2019–2025). [strong]
- Deque Systems, "Automated testing study" (2021). [moderate, vendor data]
- J. Nielsen, *Usability Engineering* (1993), response time limits. [moderate]
- W. Doherty, A. Thadani, "The Economic Value of Rapid Response Time", IBM (1982). [weak/moderate, dated]
- J. Raskin, *The Humane Interface* (2000). [moderate]
