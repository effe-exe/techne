# From Brief or Reference to Style DNA and Tokens

> **Use this when:** the user gives a brief, a mood word ("calm, premium, playful"), a reference image, a URL or a competitor, and you need to find inspiration and turn it into a usable direction.
> **Use this when:** you need to extract a structured "style DNA" from references and convert it into design tokens (CSS vars / Tailwind / SwiftUI / Figma variables).
> **Use this when:** you must check that the result transforms its references instead of copying them.

---

## 0. Point of view (read first)

- **References answer "what is possible", data answers "what works".** Collect references broadly, but every adopted pattern on an existing product becomes a hypothesis with a metric (see data-driven references). For big products, a reference justifies *a test*, not *a ship*.
- **Convention first for product UI, expression first for brand surfaces.** Jakob's Law: users spend most of their time on *other* products, so they expect yours to work the same way (Nielsen, "End of Web Design", NN/g, 2000; popularised as Jakob's Law in Yablonski, *Laws of UX*, 2020). [moderate — strong observational support, framed as heuristic]. Navigation, forms, checkout, settings: conventional. Hero, onboarding illustration, empty states, brand moments: room for expression.
- **The "MAYA" boundary:** Raymond Loewy's "Most Advanced Yet Acceptable" — push novelty only as far as users can still recognise the familiar (Loewy, *Never Leave Well Enough Alone*, 1951). Empirical support: Hekkert, Snelders & van Wieringen, "Most advanced, yet acceptable: typicality and novelty as joint predictors of aesthetic preference", *British Journal of Psychology*, 2003. [moderate]
- **First impressions are fast and sticky.** Users form visual-appeal judgements of web pages in ~50 ms, and those judgements correlate strongly with longer-exposure judgements (Lindgaard et al., *Behaviour & Information Technology*, 2006). Low visual complexity and high prototypicality are preferred (Tuch et al., "The role of visual complexity and prototypicality regarding first impression of websites", *IJHCS*, 2012). [strong] → Prototypical-but-polished beats novel-but-unfamiliar for most product surfaces.
- **Aesthetic-usability effect:** attractive interfaces are perceived as easier to use (Kurosu & Kashimura, CHI 1995; Tractinsky, Katz & Ikar, 2000). [moderate — replicated, but perception ≠ performance; beauty can mask usability problems in tests]
- **Never copy dark patterns from a reference**, however "best in class" the source is.

---

## 1. Pipeline overview

```
Brief / image / URL
   │
   ▼
1. Decode intent  ──►  2. Query matrix  ──►  3. Collect 15–40 refs
                                                   │
                                                   ▼
6. Tokens  ◄──  5. Style DNA (YAML)  ◄──  4. Cluster into 2–3 directions
   │
   ▼
7. Transform check (anti-plagiarism)  ──►  8. Present directions + hypotheses
```

Scale it to the task: a padding fix skips to step 5 using the product's *existing* DNA; a full redesign runs everything.

| Task size | Steps | Ref count |
|---|---|---|
| Micro (button, spacing, one component) | 1, 3 (3–5 refs from design systems), 5 (read existing tokens), 7 | 3–5 |
| Feature / flow | 1–5, 7, 8 | 10–20 |
| Redesign / new product / design system | all | 30–60 |

---

## 2. Step 1 — Decode intent

Extract into a short brief table before searching. Ask the user only for what is missing and blocking.

```yaml
surface: paywall | onboarding | dashboard | landing | settings | component:<name> | brand
platform: ios | android | web-desktop | web-responsive | cross
audience: who, expertise, context of use (one-handed? at desk? stressed?)
job_to_be_done: "When <situation>, I want <motivation>, so I can <outcome>"
business_goal: metric to move (activation, trial start, retention D7, task success)
guardrails: metrics that must NOT drop (refunds, support tickets, unsubscribes, a11y)
brand_attributes: 3–5 adjectives, each with its opposite ("calm, not sleepy")
constraints: existing design system? tech stack? content? localisation? deadlines?
anti_references: things the user explicitly does NOT want
```

**Adjective pairs are the key move.** "Premium" alone retrieves black-and-gold clichés. "Premium = restraint, precise type, generous space; NOT luxury-ornament, NOT dark-mode-by-default" retrieves useful references.

Adjective → visual translation starter table (heuristic, [weak/practitioner]):

| Attribute | Typical visual levers |
|---|---|
| Trustworthy / serious | Neutral palette, one restrained accent, high contrast, conventional layout, numeric precision (tabular figures), low motion |
| Calm | Low saturation, warm neutrals, larger line-height (1.5–1.7 body), generous spacing, slow easing (300–500 ms), few simultaneous elements |
| Playful | Rounded geometry (radius ≥ 12–16 px on cards), saturated secondary palette, illustration/3D characters, springy motion, sentence-case friendly copy |
| Precise / technical | Grotesk or mono accents, tight grid, small radius (2–6 px), dense tables, keyboard-first affordances, subtle 1px borders over shadows |
| Editorial / cultural | Serif or high-contrast display type, asymmetric grid, large type scale ratio (≥1.333), photography-led |
| Energetic | High contrast, bold weights, saturated accent, fast motion (150–250 ms), diagonal or overlapping composition |
| Accessible / inclusive | Large default text (≥17 pt iOS body / 16 px web), contrast ≥ WCAG AA, visible focus, plain language, no colour-only meaning |

---

## 3. Step 2 — Build a query matrix

Generate queries along four axes and route each to the right source (see `source-registry.md` §10).

1. **Pattern query** (what it is): "paywall", "plan picker", "onboarding personalization quiz", "empty state", "bulk edit table".
2. **Domain query** (who did it): competitors + adjacent domains. Adjacent domains are where originality comes from: a meditation app's onboarding can inspire a banking onboarding.
3. **Style query** (how it feels): adjective pairs → visual terms: "warm minimal", "swiss grid", "neo-brutalist", "editorial serif", "soft 3D", "monochrome + one accent".
4. **Technique query** (how it moves/works): "scroll-linked", "shared element transition", "spring bottom sheet", "skeleton loading", "command palette".

Template:
```
For each source S in route(surface, platform):
  q1 = <pattern> [+ platform]
  q2 = <pattern> + <domain or competitor>
  q3 = <style term> + <surface>
  q4 = <technique> (motion/interaction sources only)
```

Worked example — brief: "Redesign the paywall of a habit-tracking iOS app. Calm, honest, premium-not-luxury. Goal: trial starts; guardrail: refund rate and 1-star reviews mentioning 'scam'."

| Source | Query |
|---|---|
| Mobbin (iOS) | "paywall" filtered to Health & Fitness, Productivity; "free trial timeline"; "plan selection" |
| Refero (MCP if connected) | "paywall annual monthly toggle", "trial reminder" |
| Page Flows | "upgrade flow" for Headspace/Calm/Duolingo-like apps |
| ADA winners | Inclusivity & Delight winners for calm visual language |
| Fonts In Use | "app" format + humanist sans |
| Anti-reference | deceptive.design hall of shame: hidden cancellation, pre-selected weekly plan |

Then add **one wildcard domain** (e.g. premium hotel booking confirmation pages) to avoid the category's homogeneity.

Two more sources of *direction* (Ferguson, *Everything is a Remix*, 2023): **transform from what users already love** — the feature people keep using in your own product or a failed one (Discord kept a failed game's chat, Pinterest a catalogue's clipping tool, TikTok moved from lip-sync to short video); and **mods as a pipeline** — what power users hack, script or extend around the product (DOTA began as a Warcraft III map) is a ranked list of unmet needs. → references/books/everything-is-a-remix.md

---

## 4. Step 3 — Collect references (with hygiene)

For each reference capture: URL (canonical), source, date seen, screenshot (if user-provided or fetchable), and a one-line "why this". Rules:

- **Trace originals.** For any image from Pinterest/Savee/Cosmos, find the original author/product (reverse-image search) or mark `attribution: unknown — do not cite`.
- **Shipped vs concept flag** on every item. Concept = Dribbble/Behance spec work, unreleased redesigns.
- **Capture states, not just heroes.** For product UI get: default, loading, empty, error, long-content, success. A reference missing these is half a reference.
- **Diversity quota:** ≥ 3 distinct sources, ≥ 2 non-competitor domains, ≤ 30% from any single brand.
- **Recency check:** note the date; trends decay (glassmorphism ~2020–21, neumorphism ~2020, bento grids ~2023–24, liquid-glass-like translucency after Apple's 2025 "Liquid Glass" OS redesign). Use trend refs knowingly. [weak — trend timing is observational]

---

## 5. Step 4 — Cluster into 2–3 directions

Sort references into **2–3 distinct directions** (not 1, not 7). Name each with a two-word handle plus a one-line rationale tied to the brief:

- **A. "Quiet Ledger"** — monochrome, typographic, numbers-first; for users who want control.
- **B. "Warm Coach"** — soft colour, illustration, conversational copy; for users who need encouragement.
- **C. "Native Plus"** — near-stock iOS with one signature moment; lowest risk, fastest to ship.

Always include one **low-risk, convention-heavy direction** for big products — it is often the right answer and the cleanest A/B baseline.

Give the user a recommendation with your reasoning (have a point of view), and the hypothesis each direction would test.

---

## 6. Step 5 — Extract Style DNA

Describe each direction (or a single reference) in this schema. Fill from observation; mark estimates with `~`.

```yaml
style_dna:
  name: "Quiet Ledger"
  references: [<urls>]
  typography:
    families: { display: "neo-grotesk (e.g. Inter Display/Söhne-like)", text: "same", mono: "for figures?" }
    classification: neo-grotesk | geometric | humanist | grotesk | transitional serif | didone | slab | mono
    scale_ratio: ~1.25          # minor third 1.2, major third 1.25, perfect fourth 1.333
    base_size: 16px / 17pt
    weights_used: [400, 500, 600]
    case: sentence | title | upper-labels
    tracking: tight-display (-1% to -3%), normal text
    numerals: tabular | proportional
    line_height: { display: 1.1, body: 1.5 }
  color:
    mode: light-first | dark-first | both
    neutrals: warm | cool | true-gray
    accent_count: 1
    saturation: low | medium | high
    contrast_strategy: "text ≥ 7:1, UI borders ≥ 3:1"
    proportion: "~85% neutral / 10% surface tint / 5% accent"   # observation, not a law
    semantic: { success, warning, danger, info }
  layout:
    grid: "12-col web / 4-col mobile, 16–24 px gutters"
    max_content_width: ~1200px
    alignment: left-aligned | centered | asymmetric
    spacing_base: 4 | 8
    density: compact | comfortable | spacious
  shape:
    radius: { small: 6, medium: 10, large: 16, pill: 999 }
    borders_vs_shadows: borders
    elevation_levels: 2
  imagery:
    kind: none | photography | illustration | 3D | data-as-image | product-shots
    treatment: "duotone, grain, cut-out, full-bleed…"
    iconography: "outline 1.5px, 24 grid (e.g. SF Symbols / Lucide-like)"
  motion:
    personality: crisp | soft | springy | cinematic | minimal
    durations: { micro: 120–200ms, standard: 200–300ms, large: 300–500ms }
    easing: "ease-out for enter, ease-in for exit; springs for gestures"
    signature_moment: "number ticker on balance update"
    reduced_motion: "crossfade fallback"
  voice_and_tone:
    register: plain | witty | formal | warm
    person: "you / we"
    sample_microcopy: ["Start free trial", "You won't be charged until May 12"]
  interaction:
    primary_navigation: tab bar | sidebar | top nav | command palette
    input_modality: touch | pointer | keyboard-first
    feedback: haptics / inline validation / toasts
  differentiator: "what makes this not generic, in one sentence"
  risks: ["low colour may hurt scanability of categories", ...]
```

**Extraction tips when reading a screenshot:**
- Type scale: measure 3–4 visible sizes, compute ratios between consecutive steps; snap to the nearest standard ratio.
- Spacing base: find the smallest repeated gap; check if others are multiples of 4 or 8.
- Colour: identify background, surface, text-primary, text-secondary, border, accent; estimate hex; then *re-derive* (don't copy) in your own palette tool (e.g. OKLCH ramps).
- Motion: from video/flow recordings, count frames (at 30/60 fps) to estimate durations.
- If you cannot see it (no screenshot, page blocked), write `unknown`, never invent.

**Myths to avoid while extracting** (flag if the user invokes them):
- *Golden ratio in UI* — no evidence that φ-based layouts/scales outperform others; aesthetic preference for φ rectangles has failed to replicate reliably (see Green, "All that glitters: a review of psychological research on the aesthetics of the golden section", *Perception*, 1995). Use φ only if you like it. [contested → treat as myth for performance claims]
- *60-30-10 colour rule* — interior-design heuristic, no UI evidence. [weak]
- *"7±2 items max in menus"* — Miller (1956) was about short-term memory span for unrelated items, not recognition-based menus; Cowan (2001) revised capacity to ~4 chunks; neither licenses menu limits. [myth for menus]
- *"Users don't scroll"* — scrolling is ubiquitous; content above the fold still gets more attention (NN/g eye-tracking: ~57% of viewing time above the fold in 2018 study). Design for both: strong first screen, clear scroll cues. [strong]

---

## 7. Step 6 — Convert Style DNA into tokens

Produce tokens in three tiers: **primitive → semantic → component**. Use the W3C Design Tokens Community Group (DTCG) format (`$value`, `$type`; first stable spec published 2025 — verify version) so they port into Figma variables, Style Dictionary, Tailwind and SwiftUI.

```json
{
  "color": {
    "neutral": { "0": {"$type":"color","$value":"#FFFFFF"}, "900": {"$type":"color","$value":"#16181D"} },
    "accent":  { "500": {"$type":"color","$value":"#3D5AFE"} }
  },
  "semantic": {
    "bg":        {"$type":"color","$value":"{color.neutral.0}"},
    "text":      {"$type":"color","$value":"{color.neutral.900}"},
    "action":    {"$type":"color","$value":"{color.accent.500}"}
  },
  "space": { "1": {"$type":"dimension","$value":"4px"}, "2": {"$type":"dimension","$value":"8px"}, "4": {"$type":"dimension","$value":"16px"} },
  "radius": { "md": {"$type":"dimension","$value":"10px"} },
  "font": { "body": {"$type":"typography","$value":{"fontFamily":"Inter","fontSize":"16px","fontWeight":400,"lineHeight":1.5}} },
  "motion": { "standard": {"$type":"duration","$value":"240ms"}, "ease-out": {"$type":"cubicBezier","$value":[0.2,0,0,1]} }
}
```

Mapping cheatsheet:

| Token tier | CSS / Next.js | Tailwind v4 | SwiftUI | Figma |
|---|---|---|---|---|
| Primitive | `--color-neutral-900` | `@theme { --color-neutral-900: … }` | `Color("Neutral900")` in asset catalog | Variable collection "Primitives" |
| Semantic | `--color-text: var(--color-neutral-900)` | `text-[--color-text]` or theme alias | `extension Color { static let textPrimary = Color("Neutral900") }` | Collection "Semantic" with Light/Dark modes |
| Component | `--button-bg: var(--color-action)` | component class | `ButtonStyle` using semantic colours | Component properties bound to variables |

Rules:
- **Never bind components to primitives directly**; always through semantic tokens (enables dark mode, theming, A/B variants).
- **Run contrast checks on semantic pairs** (text/bg, action/bg, border/bg) for both modes before presenting. WCAG 2.2 AA: 4.5:1 normal text, 3:1 large text and UI components. [strong — standard]
- For existing products: **diff the new DNA against the current tokens** and change the minimum set. Small token changes are cheap to A/B; full re-skins confound attribution.

---

## 8. Step 7 — Transform, don't copy (anti-plagiarism check)

Kleon's "steal like an artist" and Ferguson's *Everything is a Remix* (2010–) are about **studying and recombining influences**, not tracing. Operational rules:

1. **Rule of three+**: the final direction must draw from ≥ 3 references, none contributing more than ~40% of visible decisions. Ferguson's own example of copying "too much from one place": the poster for *The Studio* (2025) takes everything around its central image from *The Sting* (1973). Note Ferguson is more permissive than these rules (heavy sampling and copying are fine as learning); keep the strict rules for shipped work, his latitude for exercises and internal exploration.
2. **Abstract before you apply**: write the *principle* ("numbers are the hero; chrome recedes"), then design from the principle, not from the screenshot.
3. **Never reuse**: logos, wordmarks, illustrations, photography, icons sets under licence, proprietary typefaces without licence, marketing copy, distinctive mascots, or distinctive layouts that function as trade dress.
4. **Change at least three of five "signature" dimensions** relative to the closest reference: typeface, colour system, layout composition, imagery style, motion signature.
5. **Side-by-side test**: put your design next to the closest reference at thumbnail size. If a stranger could mistake one for the other, transform further.
6. **Code reuse**: forkable code (CodePen, Codrops demos, templates) carries a licence — check it and keep attribution where required.
7. **Patterns are free, expressions are not.** "Annual/monthly toggle with savings badge" is a pattern anyone may use. A pixel-matched copy of a specific app's paywall art is not.

Not legal advice: copyright, trade dress and design-right rules differ by jurisdiction; escalate real disputes to counsel.

---

## 9. Step 8 — Present

For each direction deliver: name + one-liner, 4–6 reference thumbnails with credits, style DNA summary, 1 key screen, token diff vs current (if any), **hypothesis + primary metric + guardrail**, risks, and your recommendation. Example:

> **Recommend B "Warm Coach".** Hypothesis: showing a 3-step trial timeline (today / day 5 reminder / day 7 charge) increases trial starts without raising refunds, because uncertainty about being charged is the main objection in reviews. Primary: trial-start rate. Guardrails: refund rate, "scam/charged" mentions in reviews, D7 cancellation. Precedent: Blinkist publicly reported conversion and complaint improvements after an honest-trial redesign — company-reported, treat as [weak/anecdotal].

---

## 10. Anti-patterns

- Mood boards with 50 images and no stated principle.
- One direction only ("here's the design") on a redesign — no choice, no contrast.
- Pulling trends into a big product without a test ("everyone does bento now").
- Copying a competitor's flow including their dark pattern.
- Using award sites for enterprise form design.
- Inventing hex values or fonts for a page you could not load.
- Treating a Dribbble shot's fake data as realistic content length.

## 11. When NOT to run this method

- The product has a mature design system and the task is a token-level fix → read the system, don't seek outside inspiration.
- The question is "which variant performs better" → this is an experiment-design question, not an inspiration one.
- Accessibility or legal compliance fixes → follow the standard (WCAG, platform guidelines), not references.
