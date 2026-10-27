# Figma Craft and the Figma MCP Server

> **Use this when:** the task touches a Figma file: reading a design to build it, editing or creating frames/components/variables, auditing file hygiene, or setting up a library.
> **Also load:** `tokens-bridge.md` when variables or tokens move between Figma and code; `web-prototyping.md` / `swiftui-prototyping.md` when the output is code.
> **Skip when:** the work is pure strategy, research synthesis or copy, with no file to touch.

---

## 0. Point of view (read first)

1. **Reuse before you create.** The file's own design system is the contract. A new hex value, a new text style or a detached instance means you are making a fork. Search the system first, extend it second, and invent only when the gap is real and you write it down.
2. **Structure is the design.** A frame that looks right but is built from absolutely positioned rectangles is not finished. It cannot resize, cannot be handed off and cannot be maintained. Auto layout plus components plus variables is the minimum.
3. **Name things the way code names them.** A Figma property `Variant=Primary, Size=Large, State=Hover` maps one-to-one to `<Button variant="primary" size="lg">`. When the names diverge, every handoff becomes a translation job.
4. **The smallest edit that solves the problem.** "Change the button padding" means editing a token or the component's main padding. It does not mean overriding 40 instances by hand.
5. **Leave the file better than you found it**, but never do a silent refactor. If you rename layers or restructure variants, say so in your summary. Other people's prototypes and instances depend on them.

---

## 1. Auto layout: rules that matter

Auto layout is Figma's version of CSS flexbox (and, more recently, grid). Treat it as code.

| Concept | Figma | CSS equivalent | SwiftUI equivalent |
|---|---|---|---|
| Direction | Horizontal / Vertical / Wrap | `flex-direction`, `flex-wrap` | `HStack` / `VStack` / custom `Layout` |
| Gap | Spacing between items | `gap` | `spacing:` |
| Padding | Per-side padding | `padding` | `.padding()` |
| Hug | Size to content | `width: fit-content` / auto | intrinsic size (default) |
| Fill | Take remaining space | `flex: 1` / `width: 100%` | `.frame(maxWidth: .infinity)` |
| Fixed | Explicit size | `width: 320px` | `.frame(width: 320)` |
| Min/Max W/H | Constraints | `min-width` / `max-width` | `.frame(minWidth:maxWidth:)` |
| Absolute position | Ignore auto layout | `position: absolute` | `.overlay` / `ZStack` |
| Alignment | 9-point grid | `justify-content` / `align-items` | `alignment:` param |
| Space between | "Auto" gap | `justify-content: space-between` | `Spacer()` |

**Heuristics**
- Every container that holds more than one child gets auto layout. Exceptions are illustrations, decorative compositions and charts. [strong as practice, Figma docs]
- Nest shallowly. Three to four levels per component is normal. If you are at eight, the component is probably two components.
- Use **Fill** for anything that must stretch (text in cards, inputs in forms) and **Hug** for anything content-driven (buttons, chips, tags).
- Put **min/max width** on text containers so they cannot be stretched into unreadable lines. Readable measure is about 45–75 characters per line (Bringhurst, *The Elements of Typographic Style*, 1992) [moderate; a typographic convention backed by older legibility research].
- Use spacing values from the spacing scale only (usually a 4- or 8-pt base). Bind padding and gap to number variables if the file has them.
- Text layers: use "auto height" for wrapping copy and "auto width" for single-line labels. Fixed-size text boxes are the top cause of clipped strings after localisation. German strings commonly run about 30% longer than English (W3C i18n guidance) [moderate].
- Turn on "clip content" only when it is intended (carousels, masks). Unintended clipping hides overflow bugs.

**Anti-patterns:** spacer rectangles used for padding; groups instead of frames; negative gaps used to fake overlap (prefer absolute position plus a clear name); a frame set to Fixed inside a parent set to Hug (circular intent).

---

## 2. Components, variants, properties

**Anatomy of a good component**
- One **component set** per concept (Button), with variant properties that mirror code props: `Variant` (primary/secondary/ghost/destructive), `Size` (sm/md/lg), `State` (default/hover/pressed/focus/disabled/loading).
- **Component properties** remove variant explosion:
  - *Boolean* for show/hide (`Has icon`, `Show badge`).
  - *Text* for editable labels (`Label`).
  - *Instance swap* for icons and nested slots (`Leading icon`), restricted with "preferred values".
  - *Variant* only for things that change structure or style in a discrete way.
- Rule of thumb: if a variant matrix goes past about 50 combinations, move some axes into booleans or instance swaps, or split the component. [weak/practitioner consensus]
- Include **focus** and **disabled** states in the set. A component without a visible focus state fails WCAG 2.4.7 (Focus Visible, AA) when it ships [strong, normative standard].
- Build from the **inside out**: icon → label → button → button group. Base components (often prefixed `.` or `_` so they stay hidden from publishing) carry shared structure.

**Naming**
- Components: `Button`, `Input/Text`, `Navigation/Tab bar`. A slash creates folders in the assets panel.
- Layers inside components: semantic names (`label`, `icon-leading`, `container`), never `Frame 4271`. Code generators and the MCP server read layer names, so bad names produce bad code.
- Property names: Title Case in Figma (`Size`); values lower-case and code-like (`sm`, `md`, `lg`).

**Instances**
- Override only text, instance swaps and exposed properties. **Never detach** to make a one-off change. If the change is needed, it belongs in the component (new variant or property) or the instance should not exist.
- Use "Reset all changes" and "Select matching layers" during audits.

---

## 3. Variables, modes, styles

**Variables** (Figma, 2023 onwards) hold reusable values: `color`, `number`, `string`, `boolean`. They can **alias** other variables, carry **modes** (light/dark, brand A/B, compact/comfortable, locale) and have **scopes** that limit where they appear in pickers.

- Organise in **collections** by tier (see `tokens-bridge.md`):
  - `Primitives`: raw palette and scales (`blue/500`, `space/4`). Hidden from publishing or scoped to nothing, so designers do not pick them directly.
  - `Semantic`: intent (`color/bg/surface`, `color/text/primary`, `color/border/focus`). Modes live here (Light/Dark).
  - Optional `Component`: `button/primary/bg`. Use these only when a component truly needs to vary on its own.
- **Scope every variable.** A color meant for text should not appear in the fill picker for frames. Correct scoping is the cheapest guardrail against misuse.
- Add **code syntax** to each variable (Web: `var(--color-bg-surface)`, iOS: `Color.bgSurface`). Dev Mode and the MCP server then emit the real token name instead of a hex value.
- The number of modes per collection depends on your plan. Check current Figma pricing docs [unverified exact limits].
- **Styles** are still the right tool for **composite** values that variables cannot hold yet, or hold poorly: text styles (font family + size + line height + weight + letter-spacing), effect styles (shadows, blurs), gradient paints and layout grids. Bind the inner fields of a text style to number/string variables where supported.
- Typography variables: bind font size and line height to number variables so a "compact" mode can resize the whole UI.

**Prototype logic with variables:** `set variable`, conditionals (`if/else`) and expressions let one frame simulate a cart count, a toggle or a multi-step form without dozens of duplicate frames. Use this for usability tests that need realistic state. Use code (web/SwiftUI files) once you need real data, real input or analytics.

---

## 4. File organisation

A file someone else can open cold:

```
Cover                         (thumbnail: title, status, owner, last updated)
README / Changelog            (what, why, links to PRD, research, experiment)
---
Explorations                  (messy is fine; dated sections)
Flows / [Feature]             (user flows, end-to-end)
Specs / [Feature] — Ready     (final frames, annotated, "Ready for dev")
Archive                       (superseded work, never deleted)
---
Components (local, if any)    (only if not in the library yet)
```

- **Sections** group frames by flow. Mark them "Ready for dev" in Dev Mode only when they are final.
- **Status labels** on sections or covers: `Exploring → In review → Ready for dev → Shipped`.
- **Branching** (Organization plan and above): use branches for big refactors of a library or a shared spec. Merge with review.
- **One library, many consumers.** Product files consume the library. Edit components in the library and publish with a changelog note. Never fork a library component locally to "test something" without labelling it `DRAFT —`.
- Frame naming for screens: `[Flow] / [Step] / [State]`, e.g. `Checkout / 02 Payment / Error`.
- Document **every** state per screen: empty, loading, partial, error, success, offline, permission denied, first-run. See the quality bar in `web-prototyping.md`.

---

## 5. Prototyping in Figma: when it is enough

| Question being tested | Figma prototype | Code prototype |
|---|---|---|
| Comprehension of layout/copy (5-second test, first-click) | Yes | Overkill |
| Navigation and flow order | Yes | Optional |
| Micro-interaction feel (spring, drag, scroll physics) | Weak (smart animate is limited) | Yes |
| Real data volume, long lists, search, typing | No | Yes |
| Performance or perceived speed | No | Yes |
| A/B test or instrumented beta | No | Yes |
| Accessibility with a real screen reader | No | Yes |

- Use **interactive components** for hover/press/toggle once in the component, not on every screen.
- Smart Animate matches layers **by name and hierarchy**. Mismatched names cause cross-fades instead of motion.
- Keep prototype flows **named with starting points** (`Flow: Onboarding happy path`, `Flow: Onboarding — skip`).

---

## 6. Dev Mode and handoff

- Dev Mode shows inspect values, variable names (via code syntax), component properties, **annotations**, measurements and "compare changes" between versions.
- Before marking anything Ready for dev:
  1. All colors, spacing, radii and type come from variables/styles (the "detached values" check is zero).
  2. All components are library instances, with no detached copies.
  3. Every interactive element has its states drawn or referenced.
  4. Annotations cover behaviour that cannot be seen: truncation rules, max lengths, sort order, empty logic, analytics events, a11y labels, focus order.
  5. Responsive behaviour is shown (at least the smallest and largest supported widths) or stated in an annotation.
- **Code Connect** maps library components to real code components, so Dev Mode and the MCP server show `<Button variant="primary">` instead of generated divs. It is the highest-leverage handoff investment for a mature system [moderate; Figma documentation, practitioner reports].

---

## 7. Operating the Figma MCP server (agent playbook)

Tool names below follow the official Figma MCP server. Names and parameters change, so trust the live tool list over this file.

### 7.1 Parse the URL
- `figma.com/design/:fileKey/:name?node-id=1-23` → `fileKey`, `nodeId = "1:23"` (replace `-` with `:`).
- Branch URLs: `/design/:fileKey/branch/:branchKey/...` → use `branchKey` as the file key.
- `/board/...` is FigJam (use `get_figjam`). `/make/...` is a Make file.
- If the server requires it, open a **session** for the file key first (`create_session`) and reuse the session id.

### 7.2 Read tools: pick the cheapest that answers the question
| Need | Tool | Notes |
|---|---|---|
| What is on this page/frame? Layer tree, sizes, names | `get_metadata` | Cheap. Use it first on big frames to find the right child node instead of pulling everything. |
| What does it look like? | `get_screenshot` | Always grab one before and after any write, so you have visual ground truth. |
| Code-ready structure, styles, components, Code Connect snippets | `get_design_context` | Primary design-to-code tool. Its output is a **reference to adapt**, not code to paste. On a large selection, call it on child nodes. |
| Which tokens are used? | `get_variable_defs` | Returns the variables and styles bound in the selection. Use these names in code, never the raw hex. |
| Is a component mapped to code? | `get_code_connect_map` | If mapped, import the real component instead of rebuilding it. |
| What exists in the design system? | `search_design_system` (and `get_libraries`) | **Always the first call before creating anything.** Search components, variables and styles by intent ("primary button", "surface color", "heading large"). |

### 7.3 Write tools
| Need | Tool | Notes |
|---|---|---|
| New blank file | `create_new_file` | Then open a session on the returned key. Load the platform's "create new file" skill first if one is provided. |
| Create/edit nodes, variables, components, auto layout | `use_figma` | Runs Plugin-API JavaScript in the file. **Load the `figma-use` skill before every first call.** Work in small, verifiable steps. |
| Push a coded page into Figma as layers | code-to-design tools (e.g. `generate_figma_design` / `send_code_to_figma`, where available) | Then replace the generated primitives with library instances. |
| Map component to code | `add_code_connect_map` / Code Connect CLI | See 7.6. |

### 7.4 Workflow: design → code
1. `get_metadata` on the frame → identify sections and component instances.
2. `get_screenshot` → visual target.
3. `get_variable_defs` → token names to use.
4. `get_code_connect_map` → which components already exist in code.
5. `get_design_context` per section → structure and styles.
6. Build in the project's stack, **reusing project components and tokens first**. Generated Tailwind classes or absolute values are hints, not truth.
7. Run it, screenshot it, compare it with the Figma screenshot at the same width, and fix the deltas. State what you could not match and why.

### 7.5 Workflow: intent or code → Figma
1. `search_design_system` for every element you plan to draw (button, input, card, nav, color/surface, type/heading).
2. If the target file has screens already, `get_metadata` and `get_screenshot` on one. Copy its grid, spacing and section conventions.
3. Build **section by section** with `use_figma`: create an auto layout frame → insert library **instances** → bind fills/strokes/spacing to **variables** → name layers semantically.
4. Screenshot after each section. Never batch 20 operations blind.
5. Only if the library has no fitting component: build a local component that follows section 2, label it `PROPOSED —`, and list it in your summary as a library gap.

### 7.6 Code Connect basics
A Code Connect file (React example) tells Figma how a component's properties map to code props:

```tsx
// Button.figma.tsx
import figma from "@figma/code-connect";
import { Button } from "@/components/ui/button";

figma.connect(Button, "https://www.figma.com/design/FILE_KEY/Library?node-id=10-200", {
  props: {
    label: figma.string("Label"),
    variant: figma.enum("Variant", {
      Primary: "default",
      Secondary: "secondary",
      Ghost: "ghost",
      Destructive: "destructive",
    }),
    size: figma.enum("Size", { sm: "sm", md: "default", lg: "lg" }),
    disabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ label, variant, size, disabled }) => (
    <Button variant={variant} size={size} disabled={disabled}>{label}</Button>
  ),
});
```
Publish with the Code Connect CLI (`npx figma connect publish`, needs a Figma access token). SwiftUI is supported with Swift files using the `FigmaConnect` package. Check the current docs for the exact API [moderate; API evolves].

### 7.7 Safety rules for writes
- Never delete or rename published library components or variables without explicit user approval. Instances in other files break or detach.
- Prefer **adding** a variant or property over changing an existing one.
- Write to a new page or section (`AI draft — [date]`) unless the user asked you to edit in place.
- After writing, report: what you changed, which library assets you reused, what you created new (with reasons), and screenshots.

---

## 8. Scale-of-task recipes

| Request | Minimum correct action |
|---|---|
| "Increase button padding" | Find the padding variable or the component's main padding. Change it once. Check every size variant and a sample of real screens for overflow. Note any token used elsewhere. |
| "Make this card dark-mode ready" | Replace every raw fill/stroke/text color with semantic variables. Verify both modes, and check contrast in both (4.5:1 body text, 3:1 large text and UI parts; WCAG 2.x 1.4.3/1.4.11) [strong]. |
| "New screen for feature X" | Search the system → reuse a screen template → build with instances → document all states → annotate events and a11y. |
| "Audit this file" | Count detached instances, raw values (unbound colors/spacing), missing states, unnamed layers and inconsistent spacing. Report top issues by impact. Fix only with approval. |
| "Build a design system" | Order: primitives → semantic variables + modes → text/effect styles → icon set → base components (button, input, select, checkbox, radio, switch, card, list item, nav, dialog, toast) → patterns → docs page per component → Code Connect. Load the library-generation skill if available. |

---

## 9. Myths and cautions
- **"Pixel-perfect handoff is the goal."** [contested] The goal is a token- and component-accurate build. A 1-px difference from sub-pixel rendering does not matter. A wrong token does.
- **"Golden ratio layouts."** [myth for UI] No evidence links golden-ratio proportions to usability or preference in interfaces. Use a spacing scale and content needs.
- **"Generated code from Figma is production code."** [weak] MCP/Dev Mode output is a starting reference. Its quality depends on file structure, names and Code Connect.
- **"More variants = more complete."** [weak] Variant explosion slows the file and confuses consumers. Properties and composition scale better.

## Sources
- Figma Help Center: auto layout, variables and modes, component properties, Dev Mode, Code Connect, MCP server docs (2023–2026). [strong for tool behaviour; check current versions]
- W3C, *WCAG 2.2* (2023): 1.4.3, 1.4.11, 2.4.7, 2.5.8. [strong]
- Brad Frost, *Atomic Design* (2016). [moderate, influential framework, not empirical]
- Robert Bringhurst, *The Elements of Typographic Style* (1992). [moderate]
- Nathan Curtis / EightShapes, articles on component APIs and tokens (2016–2024). [moderate, practitioner]
