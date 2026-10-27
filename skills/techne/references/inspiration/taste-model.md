# Taste Model: What Great Measurably Looks Like

> **Use this when:** you are about to do visual work (a screen, a landing page, a restyle, art direction) and need to calibrate against the best work on the market before you draw anything.
> **Use this when:** you are critiquing a design and need a number or a named exemplar ("body 14px vs exemplar median 16–17px"; "this is the Reflect-style purple glow that got rejected") instead of "feels off".
> **Use this when:** you must decide which conventions of a category to follow and which single one to break on purpose.
> **Do not use as evidence of performance:** this describes craft that experts and juries rate highly. It does not prove conversion or retention. Taste proposes, data decides (`references/data-driven/`).

---

## 0. What this is built from

- **Sample:** 345 library entries (`library/entries/2026/`), split into 312 exemplars, 21 techniques and 12 anti-examples. 328 of them have measured style DNA (`library/dna/<id>.json`, 1440×900, one headless load). The other 17 are native apps that were judged from jury citations and official sites.
- **Control group:** the DNA of 68 sites that curators **rejected** (`library/rejected.yaml`) was measured on 2026-10-27. Those files were later lost and re-measured into `library/dna/rejected/` (one file per URL that still loads), so a re-run of the stats can differ slightly from the numbers below. Comparing exemplars against rejects shows what separates "chosen" from "competent but generic".
- **Categories** (about 30–37 entries each): SaaS/productivity, fintech/commerce, AI products, award/expressive, editorial/culture, brand/product marketing, Apple Design Award apps, consumer mobile at scale, devtools/docs/design systems, and type/data-viz/motion tools.
- **Reading the numbers:** medians are given with the p10–p90 range in brackets. "Top" means entries scoring at least 21/25 on the library rubric (n=98). Section 7 lists what the DNA can and cannot see. Read it before treating a number as a rule.

---

## 1. What great measurably looks like

### 1.1 Overall norms (exemplars vs top vs rejected)

| Metric | Exemplars | Top (≥21) | Rejected | How to read it |
|---|---|---|---|---|
| Body size | **16.7px** (13–24) | 17px (13–28.5) | 16px (13–24) | Body size does not separate good from generic. It is a floor, not a differentiator. 48% of exemplars use ≥17px. |
| Body line-height | **1.40** (1.15–1.57) | 1.40 (1.20–1.56) | 1.43 (1.06–1.60) | 1.4–1.5 for reading. Below 1.2 appears only on poster-like pages. |
| Display (largest) size | **60px** (28–120) | 60px (28–108) | 53px (32–80) | The rejects bunch in the safe middle. 17% of exemplars go ≥96px, but only 6% of rejects do. |
| Display ÷ body | **3.6×** (1.7–7.0) | 3.4× | 3.0× (1.8–5.3) | The best pages commit: either a quiet ~2× (editorial, docs) or a loud 5–7× (brand). Rejects hover around 3×. |
| Adjacent type-scale step | **1.17** (1.10–1.35) | 1.18 | 1.17 | The type scale is a minor third or tighter. Dramatic pages get there by skipping sizes, not by a bigger ratio. |
| Distinct sizes on page | 8 (3–12) | 8 (4–12) | 8 | Technique and award pages use a median of 3.5–4 sizes. Constraint is a signature (§3). |
| Font families | **2** (1–3) | 2 | 2 (1–4) | 77% use ≤2 families and 38% use exactly one. Three is the ceiling. |
| Display tracking negative (< −1%) | 39% | 42% | 26% | Tight display tracking (−1% to −5%) marks deliberate type. Untouched default tracking is a sign of a generic page. |
| Display line-height | 1.10 (0.95–1.40) | 1.10 | 1.10 | Headlines are set solid or tighter (0.85–1.05 on brand pages). |
| Display weight ≤400 | 35% | 36% | 39% | Weight is not a quality signal. Light-at-large (Stripe 300, Shopify 300, Oura 300) and heavy (Wise 900, Notion 600) both appear at the top. |
| Serif display face | ~10% (14% of entries mention a serif display) | 9% | **0%** | No rejected page used a serif display. It is the clearest "chosen voice" marker in 2026 (§2.3). |
| Saturated accent colours in text | **1** (0–2) | 1 | 0.5 | 77% of exemplars use ≤1 saturated text accent. One accent, everything else neutral. |
| Dark background (body) | 25% | 23% | 24% | Light is the default. Dark is a category choice (devtools, award, studio), not a quality choice. |
| CTA radius | 0–8px for 70%; pill 17% | pill 19% | pill 8% | Shape is a brand decision. Pills are common in consumer, AI and Apple-like pages; square in editorial, award and luxury pages. |
| Transition duration | **200ms** (150–400) | 200ms (140–350) | 250ms | UI motion is 150–250ms. Award pages run 300–1000ms for scene moves. |
| Most common easings | `cubic-bezier(0.4,0,0.2,1)`, `ease-in-out`, `ease-out` | same | same | Award pages favour expo-out `cubic-bezier(0.16,1,0.3,1)` and `(0.165,0.84,0.44,1)`. |
| Reduced-motion CSS present | **58%** | 60% | 44% | Rejects ship less reduced-motion support, even though it is a matter of care, not effort. Award sites: 22%. |
| Canvas/WebGL present | 22% | 27% | 25% | 3D does not predict quality. Technique entries use it in 75% of cases. |
| Media coverage of page | 0.39 (0.05–1.5) | 0.30 | 0.34 | The best pages are not image-heavy. Type and product UI carry them. |
| Widest container | ~1400px (1024–1800) | 1340px | 1340px | Content sits at about 1200–1440px. Award pages go full-bleed. |

**What actually separates kept from rejected pages:** body text is the same. The difference is commitment. Kept pages have bigger and tighter display type, a chosen voice (serif or proprietary face), one accent, and reduced-motion support. A typical reject is a "competent Inter 64/600 centred hero + two buttons + logo wall" (Brex, Loom, Whimsical, Readwise Reader, Reflect).

### 1.2 Category norms (exemplars + techniques with DNA)

| Category | n | Body | Line-h | Display | Ratio | Families | Dark | Canvas | Reduced-motion | Tight display tracking | CTA radius |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SaaS / productivity | 32 | 16 (14–20) | 1.40 | 64 (42–108) | **4.5×** | 2 | **41%** | 38% | 72% | **67%** | 8px |
| Fintech / commerce | 35 | 16 (14–32) | 1.40 | 65 (32–148) | 4.0× | 2 | 14% | 26% | 63% | 41% | 0 / pill split |
| AI products | 35 | 16 (13–22) | 1.42 | 60 (26–96) | 3.5× | 2 | 26% | 31% | **74%** | 65% | 4px, 24% pill |
| Award / expressive | 32 | 16 (11–26) | **1.23** | **80 (16–236)** | 4.6× (1–12.5) | **1** | **44%** | **72%** | **22%** | 19% | 0 |
| Editorial / culture | 36 | 16 (12–25) | 1.35 | **39 (24–90)** | **2.5×** | 2 | 17% | 6% | 61% | 9% | **0** |
| Brand / product marketing | 31 | 16 (13–27) | 1.38 | 64 (34–128) | 4.0× | 2 | 19% | 10% | 68% | 31% | 0 |
| Apple Design Award apps | 28 | **18.6** (14–28.5) | 1.40 | 59 (32–80) | 3.0× | 1.5 | 29% | 7% | 50% | 35% | 3.5px |
| Consumer mobile at scale | 25 | **18** (14–20) | **1.43** | 58 (28–120) | 3.7× | 2 | **12%** | 12% | 48% | 14% | **12px, 36% pill** |
| Devtools / docs / systems | 37 | **18** (14–24) | **1.49** | 56 (36–96) | 3.3× | 2 (sans + mono) | 27% | 27% | 62% | 49% | 4px (≤10) |
| Type / data-viz / motion tools | 37 | 18 (14–28.5) | 1.37 | 56 (18–96) | 3.3× | **1** | 24% | 22% | 32% | 32% | 5px |

**Defaults to start from (then calibrate with §6):**
- **Product UI and docs:** body 16–18px at 1.4–1.5, display 48–64px at about 3–4× body, tracking −1% to −3%, two families (sans plus mono or serif), one accent, radius 4–8px, motion 150–200ms with `cubic-bezier(0.4,0,0.2,1)`.
- **Brand surface:** display 80–130px at 5–8× body, line-height 0.85–1.0, tracking −3% to −5%, one owned face, one signature colour, motion up to 300–600ms. Ship a pause control and reduced-motion CSS.
- **Editorial surface:** display 32–60px (2–3× body), square corners, metadata in mono or small caps, a serif or condensed face for headlines.

---

## 2. Recurring qualitative traits of the best work

Each trait lists the entry ids to open (`library/entries/2026/2026-10-27-<id>.md`) and what to do with it.

### 2.1 The real product is the hero
The top pages show the working product, not an illustration of it: Linear's full-fidelity issue view (`linear-marketing-site`), Cursor's agent queue with "READY FOR REVIEW 4" and diffs (`cursor-marketing-site`), Cal.com's live booking widget (`cal-com-marketing-site`), Tally's editor mid-typing (`tally-form-builder-site`), Wise's send/receive calculator (`wise-homepage`), the Where/When/Who pill on Airbnb (`airbnb-homepage-search`), Uber's pickup/dropoff + "See prices" (`uber-rider-app`), Perplexity's logged-out app (`perplexity-answer-engine`), iA Writer's Focus Mode (`ia-writer-focused-markdown-writing-app`), Clerk's live sign-in component (`clerk-marketing-homepage`), Stripe Checkout's itemised total (`stripe-checkout-hosted-payment-page-demo`).
**Apply:** if the core job fits in one component, put that component, working, above the fold. Keep the headline short and let the UI carry the argument. Cursor's headline is 26px.

### 2.2 One accent, everything else neutral
Ramp's lime on monochrome (`ramp-homepage`), Obsidian's single violet (`obsidian-marketing-site`), Figma's black-and-white chrome so customer work supplies the colour (`figma-marketing-site`), The Verge's electric violet (`the-verge-homepage`), Walker's one blue (`walker-art-center-homepage`), Stedelijk's green ticket button (`stedelijk-museum-homepage`), Darkroom's single red on black (`darkroom-engineering-studio-site`). The measured median is one saturated text accent.
**Apply:** give the accent one job, either action or brand. Pick one. The product's own content (calendar colours, art, charts) may add more colour. Chrome may not.

### 2.3 A typographic voice, not a type default
- **An owned face, used everywhere:** MoMA Sans, Union at Stedelijk, haas at Whitney, RijksText, Ndot at Nothing (`nothing-us-store`), Spotify Mix, Instagram Sans, WhatsApp Sans. Owned faces are the norm in brand and museum work.
- **A register switch inside one line:** Anthropic's sans claim that continues in serif (`anthropic-homepage`), Wispr Flow's roman "Don't type," then italic "just speak." (`wispr-flow-dictation-site`), Hex's grotesk then italic serif "for humans and agents" (`hex-ai-data-notebook-site`), Stripe's same-size dark sentence then grey continuation (`stripe-homepage`).
- **The serif revival as the anti-AI-gradient signal:** Granola, Claude, Cursor (paper), Elicit, Harvey, Exa, Tana, Dia, Arc, Monarch, Oura, Robinhood, Resend, Radix, Railway, Hinge and Tinder. No rejected page used a serif display.
**Apply:** choose a face for a reason you can say in one sentence. If you can't license one, get the voice from one gesture: a two-tone headline, an italic turn, or tracked mono labels.

### 2.4 Facts at the point of decision
Put the fact the visitor needs right under the button: "No signup required" (Tally), "macOS Tahoe and Apple Silicon required" (`raycast-marketing-site`, `raycast-ai-product-page`), the $249 Buy pill that follows the reader (`apple-airpods-pro-product-page`), "✓ IN STOCK · SHIPS IN 3–5 BUSINESS DAYS" (`daylight-computer-homepage`), the trial and post-trial price (`spotify-premium-plans-page`), "The first 50 searches are on us" (`kagi-search-site`), "The museum is open 10:30–5:30 today" (`moma-homepage`), "Free admission" on every card (`tate-homepage`), and "a 501(c)(3) nonprofit" in the subhead (`watch-duty-wildfire-alerts-and-maps`).
**Apply:** list the visitor's top three objections and answer each one in 12px directly under the commitment it blocks.

### 2.5 Proof you can inspect
Bun's benchmark states its method and has a "reproduce" link (`bun-runtime-homepage`). It is the only clearly falsifiable performance claim in devtools. Also: Devin's PR proof card with "5 tests passed" (`devin-autonomous-engineer-site`), Inngest's COMPLETED / FAILED | RETRYING badges (`inngest-marketing-homepage`), OWID's source and licence under each chart (`our-world-in-data-grapher-chart-page`), Gapminder's "Data doubts" link (`gapminder-tools-bubble-chart`), Windy's forecast-model switch (`windy-weather-visualization-map`), Exa's latency per depth (`exa-search-api-site`), and Chartability's 1.06:1 failure shown as a before/after (`chartability-accessibility-heuristics`).
**Apply:** turn each adjective in the copy (fast, reliable, accurate) into an artefact the visitor can check, or delete the adjective.

### 2.6 Restraint and bounded models
Things' four-list model and its single-link site (`things-3-task-manager-app`), Tot's seven slots (`tot-tiny-text-scratchpad`), Streaks' 24 tasks, Rooms' one room, Ollama's homepage that fits one 1440×900 viewport (`ollama-local-models-site`), PlanetScale's single 16px mono size (`planetscale-marketing-homepage`), Are.na's three-item list (`are-na-homepage`), and Kinfolk's issue-only fold (`kinfolk-homepage`).
**Apply:** a constraint you state out loud ("up to 24", "seven", "one room") is a feature, and it gives the page its shape.

### 2.7 Density that fits the task
OWID, Fontshare (tester above the catalogue, `fontshare-free-font-library`), Basecamp's index of honest one-liners (`basecamp-marketing-site`), Hugging Face's faceted browser (`hugging-face-hub-homepage`) and Cooper Hewitt's full sitemap header are dense *because* the visitor came to look things up. Overcast, Things and Kinfolk are sparse because the visitor needs one decision.
**Apply:** count the questions a first-time visitor brings. One question calls for one screen and one action. Many lookup questions call for a dense, scannable index with counts (Basecamp, Basement's "Showcase (26)").

### 2.8 Motion that explains, with an off switch
Motion is a demonstration when it shows the mechanism: Wispr's raw-to-clean speech ribbon, Anime.js's easing dial (`anime-js-animation-library-site`), GSAP's letters swapped for shapes, CapWords' "peel a sticker" moment that covers API latency (`capwords-photo-to-sticker-vocabulary-app`), Gapminder's play button over time. The best motion also ships its controls: pause buttons on AirPods, Apple Pay, Retool, Barbican and Spotify, Lineto's mute and hide-animation toggles (`lineto-one-point-zero-foundry-site`), and Unseen's "Enter without audio" (`unseen-studio-studio-site`).
**Apply:** each animation must answer "what does this teach?" Autoplaying media gets a visible pause control, and the page gets `prefers-reduced-motion` CSS.

### 2.9 Honesty as craft
About 40 entries are tagged for equal-weight consent. Examples: GOV.UK and NHS (identical green Accept and Reject buttons, `gov-uk-design-system-docs`, `nhs-service-manual-design-system`), Monzo, Attio, Webflow, Works in Progress (a banner in the brand's own voice), OWID, Porsche ("The GPC signal is honored"), Oatly and B&O. Other honest touches: "never stored or trained on" (Ollama, Moises), Mercury's regulatory disclaimer designed as a calm floating bar (`mercury-homepage`), Pok Pok's "Non-addictive" promise (`pok-pok-montessori-play-app-for-kids`), and Hinge's "designed to be deleted".
**Apply:** consent, pricing, cancellation and limits are part of the visual system. Design them at the same quality as the hero.

### 2.10 Warmth against the category default
Claude's paper and documentary photography (`claude-product-site`), Granola's olive and paper (`granola-marketing-site`), Railway's painted night sky (`railway-marketing-homepage`), Fly.io's hand-drawn birds, Charm's hot-pink 3D (`charm-terminal-tools-site`), Zed's printed-catalogue look, Clay's claymation pipeline (`clay-marketing-site`), Dovetail's googly-eyed photocopier, Plaid's banknote engraving.
**Apply:** find the category's visual default (dark gradient, purple glow, stock smiles) and move one axis away from it, such as material, temperature or medium. The product claim stays sober.

### 2.11 Labels that are the thing itself
Fonts In Use sets each typeface name in that typeface (`fonts-in-use-homepage`). Grilli and Commercial Type list families in themselves. Tailwind labels its own headline with the classes that built it (`tailwind-css-homepage-and-docs`). React Aria draws leader lines to "SearchField" and "Table" (`react-aria-accessible-hooks-docs`). Typotheque annotates its variable axes (`typotheque-foundry-site`). Brand New puts BEFORE/AFTER in every card.
**Apply:** when the product is a vocabulary (fonts, components, classes, chart types), make the UI demonstrate the vocabulary.

---

## 3. Deliberate breaks, and why they work

The best work breaks a norm on purpose. **Each successful break comes with stricter discipline somewhere else.** The DNA shows this: technique entries use a median of 1 family, 1 text colour and 3.5 type sizes, so they spend their boldness in one place and hold the rest still.

| Break | Who | Why it works | Compensating discipline |
|---|---|---|---|
| **Tiny headline** (22–26px) | Cursor, Ollama, Perplexity, Zed (25.6px) | The product window or input is the argument. A big headline would compete with it. | A full-width product frame and one CTA. |
| **Giant type that crops** (100–225px) | A24 225px at −5% (`a24-homepage`), Stedelijk 104px rows, Rijks full-width wordmark, Darkroom 200px, Wise 89/900 caps | One message, brand surface, nothing else to read on the fold. | One family, one weight, near-zero chrome (A24's nav is 12px caps). |
| **One type size** | Obys (11px for all 258 nodes, `obys-agency-site`), PlanetScale (16px mono), Locomotive (nav as a sentence at body size) | Hierarchy moves to position, weight, image scale and motion. | A strict grid and lots of space. |
| **No marketing copy at all** | Midjourney explore feed, Three.js wall of projects, earth.nullschool globe | The output is the pitch, and showing more output beats describing it. | Invisible chrome (DM Sans 14–18px only; one "earth ≡" menu). |
| **Serif in a sans category** | Linear Method's 128px Tiempos (the only serif on linear.app, `linear-method-practices-page`), Resend's Domaine, Radix's Adobe Text, Hinge's Tiempos in dating | The typeface change marks a change of register ("this is a manifesto", "this is premium"). | Same nav, greys and chrome as the parent system. |
| **Paragraph as headline** | Stripe (48px/300, two-tone), Anthropic (sans→serif) | One gesture carries both the claim and the scope. Colour does the hierarchy, not size. | Hierarchy by colour only, no size jump, no competing CTA (Anthropic has none above the fold). |
| **Personality in a trust category** | Up Bank's mascot (`up-bank-homepage`), Sentry's "Marketing Mode ON" toggle, PostHog's desktop OS, CARROT's snark layer | The audience distrusts polish, so candour reads as honesty. | Serious data stays serious ("the joke is optional, the forecast is not"). |
| **One colour field, edge to edge** | Wise lime, Cash App green (`cash-app-homepage`), Tony's red, Fairphone deep green + lime | The colour itself is the brand asset. | Everything else is ink on field, with no secondary palette. |
| **A preloader as ceremony** | Dennis Snellenberg's nine-language "Hello", OFF+BRAND "BUILD 37", Immersive Garden counter | On a portfolio, waiting is part of the show. | Never in product UI. The loader still needs a skip, and the site needs an HTML fallback (see Active Theory, §5). |
| **A game as the interface** | Bruno Simon (`bruno-simon-driveable-3d-portfolio`), Poolsuite OS metaphor, Don't Board Me's ball gate | One metaphor carried end to end uses rules everyone already knows. | Escape hatches: "I'm stuck" respawn, control maps, quality toggle, mute. |

**Rule:** you may break one norm per surface. Write down which norm you break, why it serves the goal, which other norm you tighten to pay for it, and what result would make you undo it.

---

## 4. Category signatures

**SaaS / productivity.** The darkest and tightest category: 41% dark grounds, 67% negative display tracking and a 4.5× display-to-body ratio. A full-fidelity product shot is standard (Linear, Attio, Notion, Basecamp). Serif display is the 2026 differentiator (Granola, Tana, Dia, Arc, mymind, Linear Method). Facts sit under the CTA: "No credit card required", OS requirements, money-back guarantee. Trap: the prompt-box hero (Pitch, Retool, Framer) is now a commodity, so the differentiator has to be the claim ("every change stays editable").

*Start here:* excalidraw-whiteboard-app (23), tally-form-builder-site (22), linear-marketing-site (22), granola-marketing-site (21), basecamp-marketing-site (21), cal-com-marketing-site (21), linear-method-practices-page (21).

**Fintech / commerce.** The price or the calculation is the hero: the Wise calculator, Stripe's single big rate (`stripe-pricing-page`), Paddle's "5% + 50¢" in display serif, Affirm's "$124.73/mo for 6 months", the Apple Store "Take your pick" row (`apple-store-buy-iphone-flow`). Display type is light and tight (Stripe Söhne 300 at −2%, Shopify-Inter 300, Affirm Axiforma 300 at −4%) or warmly editorial (Monarch Copernicus, Oura Editorial New). Two-tone same-size headlines are common (Stripe, Apple, Shopify). Light grounds (86%). Consent quality divides the field. Trap: first-visit discount modals (Allbirds, On and Everlane were all rejected for them).

*Start here:* apple-airpods-pro-product-page (23), wise-homepage (22), stripe-pricing-page (22), stripe-checkout-hosted-payment-page-demo (22), apple-store-buy-iphone-flow (22), monzo-homepage (20), mercury-homepage (20). Technique: up-bank-homepage.

**AI products.** The product is the homepage (Perplexity, Kimi, v0, Bolt, Suno, Midjourney). The best ones defeat the blank prompt with example chips, shuffle, templates, imports and an "Advanced" toggle. Agent work is shown as something to review: task boards, "ready for review", diffs, test recordings, plan checklists (Devin, Cursor, Warp, Elicit, Claude Code, Raycast AI). The warm editorial look replaced the purple glow: 26% serif display (the highest share of any category), paper grounds, and 74% reduced-motion support. Trap: a bare prompt box on a dark gradient (Manus, DeepSeek, Krea, Hume, Pika were rejected).

*Start here:* wispr-flow-dictation-site (22), claude-code-product-page (22), cursor-marketing-site (21), devin-autonomous-engineer-site (21), perplexity-answer-engine (21), warp-agent-factory-site (21), exa-search-api-site (20). Cautions: replika-companion-site, cluely-meeting-assistant-site.

**Award / expressive.** A poster's type system: 1 family, a median of 4 sizes, display 80px (p90 236px), line-height 0.8–0.9, tracking −4% to −8%. 72% canvas/WebGL, 44% dark, 300–1000ms expo-out motion. Only 22% honour reduced motion. The highest-scoring entries keep the spectacle *and* add plain usability: Shopify Editions' dated timeline index (`shopify-editions-release-microsite`), AirPods' pause and sticky Buy, Basement's counts in the nav. Trap: capability gates, zoom lock and no HTML fallback.

*Start here:* shopify-editions-release-microsite (23), oryzo-lusion-product-concept-site (21), locomotive-agency-site (21), darkroom-engineering-studio-site (21), rauno-freiberg-interaction-portfolio (20). Techniques: bruno-simon-driveable-3d-portfolio, unseen-studio-studio-site, lusion-studio-portfolio. Caution: active-theory-studio-portfolio.

**Editorial / culture.** The quietest display (39px median, 2.5× body), square corners (median radius 0), and almost no WebGL (6%). Voice comes from mono metadata plus a serif or condensed headline (Rest of World, Wired, Marshall Project, Aeon, The Verge), or from one proprietary museum face at giant size with zero radius (Stedelijk, Whitney, MoMA, Cooper Hewitt). Today's status goes in the hero (MoMA hours, Whitney "Closed today", NTS LIVE NOW). Trap: ad slots and stacked overlays sank Pitchfork, Dezeen, Monocle, V&A and Le Monde.

*Start here:* our-world-in-data-grapher-chart-page (23), whitney-museum-homepage (22), the-pudding-visual-essays-homepage (22), gapminder-tools-bubble-chart (22), stedelijk-museum-homepage (21), fonts-in-use-homepage (21), are-na-homepage (21). Caution: scroll-homepage.

**Brand / product marketing.** One owned face and one signature colour (Daylight orange, Playdate purple, Fairphone lime, Sweetgreen lime). Full-bleed photo or video with a pause control. Price and availability next to the button on hardware pages (`apple-macbook-pro-product-page`, `apple-vision-pro-product-page`, Daylight). Honest forks for two audiences (Herman Miller home/workplace, Analogue's diagonal split). Trap: overlay stacking (Mailchimp's quiz + cookie + family bar; Polestar's three layers).

*Start here:* apple-vision-pro-product-page (22), apple-macbook-pro-product-page (22), playdate-homepage (21), daylight-computer-homepage (21), analogue-homepage (21), teenage-engineering-homepage (20), oatly-homepage (20). Technique: liquid-death-homepage. Caution: polestar-homepage-consent-dialog.

**Apple Design Award apps.** The largest body text (18.6px) and the fewest families. Juries reward restraint (bounded sets, one opinionated model), compassion (Gentler Streak, Pok Pok, Primary's "no clickbait"), physical metaphor (Halide's lens ticks, (Not Boring)'s haptics), and accessibility as the core interaction (Guitar Wiz, oko). Their marketing sites are often weak because the craft lives in the app, so read the jury citation, not just the DNA.

*Start here:* watch-duty-wildfire-alerts-and-maps (23), things-3-task-manager-app (23), ia-writer-focused-markdown-writing-app (23), flighty-live-flight-tracker-app (23), gentler-streak-compassionate-fitness-tracker (23), capwords-photo-to-sticker-vocabulary-app (23), pok-pok-montessori-play-app-for-kids (22). Technique: grug-hand-drawn-daily-wisdom-app.

**Consumer mobile at scale.** Light (88%), rounded (36% pill CTAs, the highest share), 18px body, the least tight tracking (14%). The landing page is the app: Uber, Wolt's address field, Citymapper's planner, Airbnb's pill, Cash App's keypad. This is the only category with outcome evidence: Duolingo's streak decoupling (+3.3% D14 retention, `duolingo-streak-mechanic`), Spotify Wrapped's reach (`spotify-wrapped-year-in-review`) and Airbnb's total-price display. Trap: the anti-examples here are the most expensive (TikTok, Temu, Noom, Amazon Prime, Booking.com; see §5).

*Start here:* spotify-wrapped-year-in-review (24), duolingo-streak-mechanic (24), airbnb-homepage-search (23), calm-sleep-and-meditation-app (22), uber-rider-app (21), whatsapp-messaging-app (21), cash-app-keypad-home (21), hinge-dating-app (20).

**Devtools / docs / design systems.** The best reading set in the library: 18px body, line-height 1.49, sans + mono, small radii (≤10px), short motion (150ms). The install command sits beside the signup (Bun, Motion, Storybook, Convex). Docs are written for agents as well as people ("Copy prompt", "Copy MD"). Public-sector systems set the ethics bar (GOV.UK, NHS, USWDS's "Here's how you know"). Warmth separates the best from the default dark centred hero (Fly.io, Railway, Sentry, Charm, PostHog).

*Start here:* bun-runtime-homepage (23), shadcn-ui-component-docs (23), tailwind-css-homepage-and-docs (22), stripe-docs-api-reference-and-guides (22), gov-uk-design-system-docs (22), react-aria-accessible-hooks-docs (22), railway-marketing-homepage (21).

**Type / data-viz / motion tools.** One family, and the product demonstrates itself: names set in their own face, live variable axes, a tester above the catalogue, a chart chooser organised by intent (`ft-visual-vocabulary-chart-chooser`). Data products are honest about uncertainty (Windy's model switch, Gapminder's "Data doubts"). Instrument language works as brand (Felt's LAT/LON/ZOOM bar, Anime.js's gauge). Trap: motion-heavy sites without reduced motion (only 32% comply).

*Start here:* ft-visual-vocabulary-chart-chooser (22), fontshare-free-font-library (22), typotheque-foundry-site (21), grilli-type-type-foundry-site (21), felt-collaborative-maps-site (21), chartability-accessibility-heuristics (21), anime-js-animation-library-site (21). Techniques: earth-nullschool-global-wind-map, lineto-one-point-zero-foundry-site.

---

## 4b. Brand signature: restraint is the norm, a signature is the win

The library norms (one accent, ≤2 families, neutral surfaces) describe **tool craft**. Category leaders in consumer and creative products also have a **brand signature**: a few ownable assets you'd recognise with the logo removed. Restraint without a signature reads as "competent, forgettable". That's the most common failure of agent-made UI.

**Rule:** for any consumer-facing product or marketing surface, define 1–3 signature assets before designing screens, and say where each one lives:

| Asset | Examples of what it can be | Where it's loud | Where it's quiet |
|---|---|---|---|
| Display voice | a heavy or idiosyncratic display face, extreme size contrast, a tagline cadence | hero, campaign, empty states, milestones | forms, settings, errors |
| Colour world | a saturated pair or gradient that is the brand's alone, full-bleed canvases | marketing canvas, onboarding, celebrations | the tool surface (neutral, high-contrast) |
| Brand object | the product's subject matter turned into a motif (file tiles, cards, stamps, tickets) | hero composition, transitions, loading | data-dense views |
| Motion signature | one recognisable easing or choreography | hero, state changes that matter | frequent micro-interactions (stay fast) |
| Voice | short, confident lines | headlines, CTAs | errors and legal (plain, precise) |

**Two layers:** design the **brand layer** (expressive, immersive) and the **tool layer** (quiet, utilitarian, fast) as separate systems that share tokens. The best consumer products put a small, plain tool *inside* a loud brand canvas. The tool stays usable, and the canvas makes the brand memorable.

**The "logo-off" test:** remove the logo and name. Could someone still tell whose product this is? If not, the signature is missing.

**The "stand next to the leader" check:** put your key screen beside the category leader's real current screen (ask the user for a screenshot when the site blocks bots). The bar is *as distinctive as the leader, without borrowing any of its assets*. If yours looks like a neutral template next to it, push the signature further.

**Craft the signature hardest.** The signature asset must be the *best*-crafted thing on the page, not the roughest. Stress-test it at 390px, at 1440px, in dark mode and with long or localized strings. A display face that fragments or collides at size fails, so tighten line-height, size or cut before shipping.

**First viewport earns the action:** at 1440×900 and 390×844, the primary tool action (e.g. Send) is visible without scrolling. The brand canvas frames the tool; it never pushes it below the fold.

**Don't drop to a template below the fold:** carry the signature (type, colour, brand object, imagery or editorial content) through the whole page. For creative audiences, add warmth: real work, imagery or editorial voice. A generic features/pricing grid under a bold hero breaks the brand.

**Distinctive brands are easier to fake:** pair a strong signature with anti-cloning cues the attacker can't copy, like per-transfer codes that match across channels or verified domains, and say plainly where the real product lives.

**Ethics and accessibility still apply.** The brand layer never hides the tool's controls or weakens its contrast, and it never puts decoration on top of a warning.

## 5. Anti-patterns (from rejected, technique and anti-example entries)

1. **The commodity hero.** Dark purple glow + centred Inter + badge chip + two buttons + glowing product shot (`Reflect`, rejected 15/25). Also: an email-capture hero with a 3D card render (`Brex`), and a prompt box at 180px (`Pitch`). Expo was rejected for copying Vercel's hero, and Next.js for using Vercel's design language. *Detector:* if you could swap the logo for a competitor's and nothing breaks, it is a commodity.
2. **Overlay stacking.** Several asks at once on the first screen. Scroll (anti-example, 12/25) shows a membership banner, an accept-only cookie bar and an app-install card. Mailchimp stacks a quiz modal, a cookie bar and a family bar. Polestar shows a promo bar, a consent dialog and a lease offer. Booking.com puts a sign-in modal over the search box. Pitchfork's fold is an empty ad slot. *Rule:* one ask per screen, consent first.
3. **Asymmetric or fake consent.** Accept-only banners (Sunsama, Plain, monopo); optional toggles pre-switched on (`polestar-homepage-consent-dialog`); pay-or-consent with no free reject (`kitchen-stories-pay-or-consent-cookie-wall`); "by continuing you agree" (Fin). *Rule:* Reject is the same size, shape and colour as Accept, and optional categories default to off.
4. **Engagement against the user.** Autoplay feeds with no stopping cues (`tiktok-for-you-feed`, EU DSA preliminary findings). Cancellation mazes (`amazon-prime-enrollment-and-cancellation-flow`, the FTC $2.5B settlement; `noom-subscription-onboarding`). Gamified risk (`robinhood-homepage`: top-tier type next to a crypto sweepstakes banner). Intimacy hooks (`replika-companion-site`). Deception as a feature (`cluely-meeting-assistant-site`). *Rule:* craft does not excuse incentive design. Cancelling must be as easy as signing up.
5. **Capability gates and zoom lock.** Active Theory showed only "YOUR BROWSER IS NOT SUPPORTED" headless and sets `user-scalable=no`. Oryzo, Garden Eight and Dennis Snellenberg lock zoom. *Rule:* there is always an HTML layer, and pinch-zoom always works.
6. **Motion without an off switch.** Autoplay video without pause, no `prefers-reduced-motion`. Absent on 42% of exemplars and 78% of award sites, which makes it the most common craft gap in the library.
7. **A fragile hero.** Heroes that did not render at capture (Airtable, Our Place, Jitter, Kepler.gl). A lifestyle video with no headline or product (Structured). *Rule:* the fold must make sense with media blocked, slow or failed.
8. **Unverifiable proof.** Live counters (Stripe's GDP ticker, Ramp's receipts) build trust only if the numbers are real. Unattributed five-star snippets (HEY) are weaker than one named, photographed testimonial (CleanShot).
9. **Stale or compromised.** A mid-rebrand page (Coda), a shutdown banner (Universe), injected casino SEO spam (anydistance.club). Re-verify before citing any reference.

---

## 6. Taste calibration: run this before any visual work

> For consumer-facing work, complete §4b (brand signature, two layers) as part of calibration.

Allow about 10 minutes. The output is a calibration note that goes into your direction or rationale.

**Step 1 — Frame the surface.** Name the category (one of the ten in §1.2) and the surface (landing, pricing, onboarding, editor, docs, feed, checkout). Decide whether it is **convention-first** (product UI, forms, checkout, settings) or **expression-first** (hero, brand moment, empty state, portfolio). See `inspiration-method.md` §0.

**Step 2 — Pull 5–8 nearest exemplars.** All search terms must match.
```bash
python3 scripts/library.py search fintech pricing          # category + surface
python3 scripts/library.py search ai agent review          # category + mechanism
python3 scripts/library.py search editorial serif          # category + voice
python3 scripts/library.py search honest-consent           # cross-category technique
```
Mix the set: 3–4 from the target category, 1–2 from an adjacent category (the steal often comes from outside), and 1 technique entry for the break. Include one anti-example only as a caution. Prefer entries with total ≥20. If the brief is non-Western, mobile-native or accessibility-led, look for those deliberately (Toss, Kimi, Nubank, 29LT, Be My Eyes, oko), because the sample under-represents them.

**Step 3 — Read the principle, not the pixels.** For each pick, read "What to steal" and "Where it doesn't apply". Discard any pick whose "doesn't apply" describes your case.

**Step 4 — Extract their DNA side by side.**
```bash
python3 - <<'EOF'
import json, sys
ids = ["2026-10-27-stripe-pricing-page", "2026-10-27-wise-homepage", "2026-10-27-paddle-pricing-page"]  # your picks
for i in ids:
    try: d = json.load(open(f"library/dna/{i}.json"))
    except FileNotFoundError: print(i, "no DNA (app entry)"); continue
    f, m = d["fonts"], d["motion"]
    h1, b = f.get("h1") or {}, f.get("body") or {}
    print(i[11:], "| body", b.get("size"), "/", b.get("lineHeight"), "| h1", h1.get("family"), h1.get("size"), h1.get("weight"), h1.get("tracking"),
          "| fams", [x["family"] for x in f["families"][:3]], "| bg", d["color"]["background"],
          "| cta r", [c["radius"] for c in d["color"]["ctas"][:3]], "| dur", [t["duration"] for t in m["transitions"][:3]],
          "| prm", m["prefersReducedMotionCSS"])
EOF
```
Open the screenshots too (`library/.shots/<id>.png`), since the DNA cannot see composition.

**Step 5 — Write the norms sheet.** For each of type size and scale, families, palette and accent, radius, density and motion, record the exemplar median, your category norm (§1.2), and your decision. Default to the norm on every axis you have no reason to change.

**Step 6 — Choose exactly one deliberate break.** Pick it from §3 or invent one. State:
- the norm you break and the goal it serves;
- the norm you **tighten** to pay for it;
- the signal that would make you undo it (a test metric or a critique finding).

**Step 7 — Check the hard floors.** No break may cross these:
- Body ≥16px for product reading text, line-height 1.4–1.6, measure about 45–75ch for long text, WCAG 2.2 AA contrast.
- `prefers-reduced-motion` CSS, a visible pause on autoplay media, no zoom lock, and an HTML fallback for canvas experiences.
- Consent with equal-weight reject and optional categories off. One ask per screen.
- The decisive fact (price, requirement, availability, trial terms) next to the commitment it affects.

**Step 8 — Write the calibration note** (5–8 lines):
```
Category/surface: fintech · pricing (convention-first)
Nearest exemplars: stripe-pricing-page (22), wise-pricing-and-fee-calculator (21), paddle-pricing-page (19), mercury-pricing-page (20), ableton-shop (19, adjacent)
Follow: body 16/1.4, display 64 at −2% light weight, 2 families, one accent on the primary CTA, radius 8, 200ms
Break: price set as 120px display serif (Paddle-style) instead of a tier grid
Tighten: no other colour, no illustration, single CTA
Undo if: plan-selection rate or price comprehension (5-second test) drops vs control
Floors: equal-weight consent, total incl. tax stated, reduced motion ✓
```

**Step 9 — Taste proposes, data decides.** On an existing product, the break is a hypothesis: write the metric and the cheapest test (`references/data-driven/experimentation-playbook.md`). In critique, compare against the same exemplars and name the gap with a number.

### Quick red-flag check (critique mode)

Use these as triggers for a closer look, not as automatic failures. Each one has exemplars that break it on purpose (§3).

| Signal in the design or its DNA | Why it is a flag | Compare with |
|---|---|---|
| Body <16px on reading text (product or docs) | Below the 16.7px exemplar median; devtools and ADA sites sit at 18px. | `stripe-docs-api-reference-and-guides`, `gov-uk-design-system-docs` |
| Body line-height <1.3 on paragraphs | Exemplar p10 is 1.15, but only on poster pages. | `react-react-dev-docs` (docs), `arc-farewell-sunset-page` (long-form) |
| Display 48–64px, default tracking, centred, sans 600 | The rejected "safe middle"; rejects top out at 80px (p90). | `linear-marketing-site`, `granola-marketing-site` |
| 3+ font families | 77% of exemplars use ≤2. | `figma-marketing-site` (one owned face + mono) |
| 2+ saturated accents in chrome | 77% of exemplars use ≤1. | `ramp-homepage`, `obsidian-marketing-site` |
| Transitions >400ms on UI (not scene) motion | Exemplar p90 is 400ms. UI motion is 150–250ms. | `linear-marketing-site`, devtools norms in §1.2 |
| No `prefers-reduced-motion`, or autoplay without a pause | Absent on 42% of exemplars, the most common craft gap. | `apple-airpods-pro-product-page`, `barbican-homepage` |
| Hero is an illustration of the product, not the product | The top entries show the working UI or component. | `cal-com-marketing-site`, `wise-homepage` |
| Requirement, price or trial terms only after the click | The best put them under the CTA. | `raycast-marketing-site`, `spotify-premium-plans-page` |
| More than one overlay on first load | The most common reason otherwise-strong sites were rejected. | `scroll-homepage` (anti), `works-in-progress-magazine-homepage` |
| Reject smaller or weaker than Accept | An ethics fail that is visible at a glance. | `monzo-homepage`, `nhs-service-manual-design-system` |
| Dark purple glow / prompt box / logo wall | A commodity look in 2026. | `reflect` and `pitch` in `rejected.yaml` |

---

## 7. Honest caveats

- **Sample bias.** The library over-represents award winners, design-community canon and products that are visibly well designed. It is mostly Western, desktop-web and English-language. Non-Western picks are few (Toss, Nubank, Up, Taobao, Kimi, 29LT, Fontshare, SCMP, Rest of World), as are native-mobile in-app screens. Many canonical sites blocked the headless scanner and are absent: NYT, Bloomberg, FT, Economist, Tesla, Aesop, Patagonia, Hermès, Lego, Muji, Grab, Gojek and Swiggy. Absence is not a verdict.
- **The DNA measures one landing page at 1440×900, once, headless.** It does not see mobile layouts, logged-in product screens, scroll states or interaction. Award sites were often captured mid-preloader.
- **Known measurement limits** (from `scripts/style-dna.mjs`):
  - "Body" is the first visible `<p>`, which can be a caption or footnote.
  - Size distribution is capped at 12 values and text colours at 6, so counts near those caps are floors.
  - "WebGL" means any `<canvas>`.
  - Reduced-motion detection misses rules in cross-origin stylesheets (false negatives), so the true share is somewhat higher.
  - CTA radius comes from the first five button-like elements, which include text links, so a median of 0px overstates square buttons.
  - "Dark" reads only the `<body>` background, so dark heroes on a white body count as light.
  - Media coverage counts SVG icons and overlapping media, and can exceed 1.
  - Serif detection uses family names (e.g. "Tiempos", "Copernicus", "serif"), so custom serifs with opaque names are missed.
- **Categories were inferred** from the ten curator runs. A few entries sit on a boundary (e.g. Pangram Pangram is filed under award, Warp under AI).
- **Scores are one rubric applied by agents**, with screenshots checked by eye. Use "top ≥21" as a reading aid, not a ranking.
- **Popularity ≠ performance.** Only a handful of entries carry outcome data: Duolingo's streak results, Spotify Wrapped's reach, Airbnb's total-price adoption, and regulator findings for the anti-examples. Everything else is expert judgement of craft. A norm here tells you what the best-looking work does, not what converts for your audience.
- **This is a snapshot (2026-10-27).** The serif revival, warm paper grounds and agent-review heroes are 2026 trends and will age. Recompute the medians from `library/dna/*.json` (the Step 4 snippet is the starting point) whenever the library grows by more than about 20%, and re-verify any entry older than a year before citing it.

---

## See also
- `inspiration-method.md`: from brief to style DNA to tokens, plus the anti-plagiarism check.
- `gallery.md`, `library-update.md`: the seed gallery, entry template and rubric.
- `../masters/taste.md`: what taste is and how to build and express it.
- `../visual/typography.md`, `../visual/visual-polish-checklist.md`: craft details behind the numbers.
- `../data-driven/experimentation-playbook.md`: how to test the one norm you break.
