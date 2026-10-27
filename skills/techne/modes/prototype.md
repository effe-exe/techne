# Mode: prototype — vibe-code working prototypes (for designers)

Use for: testing an interaction or a feature for real, building clickable/working prototypes, turning a design into code, motion studies.

## Stack defaults
- **Web:** Next.js (App Router) + React + TypeScript + Tailwind + shadcn/ui (Radix) + Motion (Framer Motion). Deploy previews on Vercel/Netlify.
- **iOS:** SwiftUI with Xcode Previews and SF Symbols.
- Other stacks only when the user asks.
Read `references/build/web-prototyping.md` or `references/build/swiftui-prototyping.md` before writing code, plus `tokens-bridge.md` if tokens move between Figma and code.

## Rules for designer-friendly code
- One screen = one file where possible. Tokens live in one place (CSS variables / Tailwind theme / a SwiftUI `Theme`). Use plain names and comments where a designer would be confused.
- Use real content and fake data from a local JSON. Every state must be reachable (add a dev toggle for empty/loading/error).
- Instrument the hypothesis: `track('event', props)` stub that logs to console, so the prototype can be used for testing.
- A11y by default: semantic elements, focus states, labels, reduced-motion support, Dynamic Type on iOS.
- Motion: use the durations/easings/springs from `references/interaction/microinteractions-and-motion.md`, not arbitrary ones.
- Run it. Verify it builds, open it, take a screenshot (Playwright if available), and critique it before handing over.

## Output
Working code + how to run it (1–3 commands) + what's real vs faked + what to test with users.
