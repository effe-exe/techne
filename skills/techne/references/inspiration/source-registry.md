# Inspiration Source Registry

> **Use this when:** you need reference material (sites, app screens, flows, type, motion, brand, data-viz) before designing or critiquing.
> **Use this when:** you must decide WHICH source to query for a given brief, and HOW an agent can reach it (public / API / MCP / login / bot-blocked).
> **Do not use for:** the method of turning references into a style (see `inspiration-method.md`) or the curated seed list (see `gallery.md`).

---

## 0. Ground rules for an agent using these sources

1. **Inspiration is a hypothesis generator, not evidence.** A pattern appearing in 40 apps proves it is *common*, not that it *performs*. Survivorship and copy-cascades are real: teams copy the leader, the leader may never have tested it. Treat any reference as "worth testing", then route to the data-driven references for validation. [strong — general survivorship-bias reasoning; see Wald's WWII aircraft analysis as retold in Mangel & Samaniego, *JASA*, 1984]
2. **Award galleries optimise for jurors, not users.** Awwwards scores are weighted Design 40% / Usability 30% / Creativity 20% / Content 10% (Awwwards evaluation system, as published on awwwards.com; verify current weights). Usability is judged by peers looking at a site, not by task-success data. Use award sites for *craft and expression*, never as proof of conversion. [moderate]
3. **Shipped beats concept.** Prefer libraries of real, shipped product screens (Mobbin, Refero, Page Flows, Screenlane) over concept shots (Dribbble, Behance) for product UI. Concept shots routinely ignore real content length, error states, localisation and accessibility. The critique is old and still valid: Paul Adams, "The Dribbblisation of Design", Intercom blog, 2013. [moderate — expert essay, widely echoed]
4. **Respect access rules.** Do not bulk-scrape, bypass logins, or evade bot protection. If a source blocks automated access or needs the user's account, **ask the user for screenshots, exports, or to run the search themselves** and paste results. Are.na's own developer docs explicitly prohibit bulk crawling. [verified via Are.na developer docs search snippet, 2026]
5. **Ethics filter on input.** If a reference uses a dark pattern (confirmshaming, pre-ticked add-ons, roach-motel cancellation, fake scarcity), you may cite it only as an anti-example. Taxonomy: Brignull, *Deceptive Patterns*, 2023 (deceptive.design); Mathur et al., "Dark Patterns at Scale", CSCW 2019 (found dark patterns on ~11% of ~11K shopping sites). [strong]

### Access legend
- **PUB** — public HTML pages; WebFetch usually works.
- **API** — documented public API.
- **MCP** — an MCP server exists (needs user's subscription/connection).
- **LOGIN** — meaningful content requires an account (often paid).
- **BOT** — known or likely to block automated fetches (Cloudflare, JS-only rendering, infinite scroll). Fallback: ask the user for screenshots/links.
- **JS** — content rendered client-side; fetch may return an empty shell.

Access status changes often. If a fetch fails, do not retry in a loop; downgrade to "ask the user" immediately.

---

## 1. Web galleries (marketing sites, landing pages, expressive web)

| Source | URL | Best for | Access | How to query |
|---|---|---|---|---|
| **Awwwards** | awwwards.com | Experimental, high-craft web; motion; WebGL; agency/portfolio sites. SOTD (Site of the Day), SOTM, SOTY (Site of the Year), Developer Award, Honorable Mention. | PUB/BOT (heavy JS, rate-limited). No official RSS found as of 2026 (only an unofficial npm scraper). | Paths: `/websites/sites_of_the_day/`, `/websites/` with filters for category, tag, colour, technology. Search tags: e.g. "fintech", "minimal", "typography", "3D". Annual: `/annual-awards/` for SOTY. |
| **Godly** | godly.website | Cutting-edge web with video previews; strong on animation, AI/startup landing pages, portfolios. | PUB/JS | Browse by type/style; limited filtering (reviewers note few filters). Best used visually: ask user for screenshots if fetch is empty. |
| **Siteinspire** | siteinspire.com | Calm, editorial, typographic, studio and cultural sites. Good taxonomy. | PUB | Filter by Style (minimal, typographic, flat…), Type (portfolio, e-commerce…), Subject. |
| **Lapa Ninja** | lapa.ninja | Large landing-page library by category (SaaS, finance, AI). | PUB | Category pages; search box. Good for section-level patterns (hero, pricing, testimonials). |
| **Land-book** | land-book.com | Landing pages, portfolios, blogs, e-commerce; filterable by industry/style. | PUB/JS | Category + style filters; also colour filter. |
| **One Page Love** | onepagelove.com | Single-page sites, templates, launch/"coming soon" pages. | PUB | Category archives (portfolio, app, product launch). |
| **Minimal Gallery** | minimal.gallery | Restrained, whitespace-heavy, minimal web. | PUB | Category tags. Use for "quiet luxury" or editorial tone. |
| **Httpster** | httpster.net | Edgier, type-led, indie/studio sites. | PUB | Filter by type and style. |
| **SaaS Landing Page** | saaslandingpage.com | SaaS-specific landing sections (pricing, features, CTAs). | PUB | Filter by section type. |
| **Navbar / Footer / Darkmode galleries** | e.g. darkmodedesign.com | Niche single-component galleries. | PUB | Use when solving one component only. Existence/maintenance of smaller niche galleries is volatile; verify. |
| **Codrops** | tympanus.net/codrops | Experimental interaction/motion demos with source code and tutorials. | PUB | Search by technique ("scroll animation", "WebGL distortion", "grid layout"). |
| **GSAP showcase** | gsap.com/showcase | Production motion on the web. | PUB | Browse; inspect site for motion timing. |
| **CodePen** | codepen.io | Isolated UI experiments, micro-interactions, CSS techniques; forkable code. | PUB/JS | `codepen.io/search/pens?q=<term>`; "Picked Pens"; tags. Code is user-licensed (CodePen public pens are MIT by default per CodePen's licensing page; verify per pen). |

---

## 2. Product UI libraries (shipped app & web-app screens and flows)

These are the **highest-value sources for product designers** because they show real, shipped states.

| Source | URL | Best for | Access | How to query |
|---|---|---|---|---|
| **Mobbin** | mobbin.com | Largest library of iOS, Android and web app screens + full flows; searchable by screen type, UI element, flow. | LOGIN (free tier is heavily limited; flows/search behind Pro per Mobbin pricing page, 2026). | Search by **screen pattern** ("paywall", "onboarding", "empty state", "settings", "checkout"), **UI element** ("bottom sheet", "stepper", "toast"), **flow** ("cancel subscription", "add payment method"), or app name. Ask the user to run searches and share screenshots/collections. |
| **Refero** | refero.design | Web + iOS screens and flows, organised by page type, UX pattern, UI element, font. | LOGIN; **MCP** at `https://api.refero.design/mcp` (requires Refero Pro; tools cover styles, screens, images, similar screens, flows; ~8,000 calls/month on Pro per Refero docs, 2026). | Query concrete elements ("pricing toggle", "plan comparison table"), not adjectives ("user-friendly pricing"). If the user has the MCP connected, prefer it: it is the most agent-native product-UI source available. |
| **Page Flows** | pageflows.com | Video recordings of complete user flows (onboarding, upgrade, cancel, invite). Best for *sequence and timing*. | LOGIN (paid) | Search by flow type or company. Ask user for screen recordings or exported frames. |
| **Screenlane** | screenlane.com | Mobile and web screens by pattern; lighter-weight than Mobbin. | PUB/LOGIN partial | Pattern categories. |
| **UI Sources** | uisources.com | Historically: iOS interaction videos with timelines. | Status **unverified** — may be dormant. Check before recommending. | — |
| **Nicelydone** | nicelydone.club | SaaS web-app flows and components. | PUB/LOGIN partial | Flow and component categories. Verify current state. |
| **Growth.design case studies** | growth.design/case-studies | Comic-format teardowns of real onboarding/paywall flows with psychology annotations. | PUB | Use for *rationale*, not visuals. Claims inside are expert opinion unless they cite data. [moderate] |
| **Baymard Institute** | baymard.com | Research-backed e-commerce UX: checkout, product pages, search, with benchmark scores from large-scale usability testing. | PUB articles; LOGIN (paid) for full guidelines & benchmark. | Search their blog for the pattern ("checkout guest", "product list filters"). This is **evidence**, not inspiration. [strong for e-commerce] |
| **App Store / Google Play** | apps.apple.com, play.google.com | Store screenshots, Editors' Choice, "App of the Day". | PUB/JS | Use for marketing screenshots and positioning; store screenshots are idealised. |
| **Component Gallery** | component.gallery | Same component (e.g. "tabs", "toast") compared across ~dozens of public design systems with naming and docs. | PUB | Look up component name; compare anatomy, naming, a11y notes. Excellent for design-system work. |
| **Adele (UXPin)** | adele.uxpin.com | Repository of public design systems and their attributes. | PUB | Filter by company, framework, tokens availability. |

---

## 3. Visual mood / curation platforms

| Source | URL | Best for | Access | How to query |
|---|---|---|---|---|
| **Are.na** | are.na | Research-grade curated channels (typography, interfaces, brand systems, art direction). Less trend-driven than Pinterest. | **API** (see below). | Find channels by keyword; then pull channel contents. |
| **Savee** | savee.it | Designer bookmarking; high-taste imagery, branding, editorial. | LOGIN (largely) / BOT | Ask the user for board exports or screenshots. |
| **Cosmos** | cosmos.so | Visual curation with AI search ("clusters"); clean, ad-free. | LOGIN/JS | Ask user; or public cluster URLs may render. |
| **Pinterest** | pinterest.com | Breadth (branding, illustration, packaging, colour). Low signal-to-noise for product UI; many reposts without attribution. | BOT/LOGIN; official API requires an app and auth. | Use only for broad mood; always trace an image back to its original author before citing. |
| **same.energy** | same.energy | Visual similarity search engine ("find more like this image"). | PUB/JS (beta; availability varies) | Upload/point to a reference image to expand a mood. Ask user to run it if JS-only. |
| **Google Lens / reverse image search** | lens.google.com | Finding the **original source** of an uncredited image (attribution check). | User-run | Mandatory before citing a Pinterest/Savee image. |
| **Directors Library** | directorslibrary.com | Film/commercial/music-video directors and stills: cinematic art direction, colour grading, framing for brand and motion work. | PUB/JS (verify) | Search by director or visual style. Use for brand film / hero imagery tone, not UI. |
| **Behance** | behance.net | Brand identity case studies, full project narratives, Adobe "Best of Behance". | PUB/JS | Search projects by field ("UI/UX", "Branding") + keyword. **Caveat:** many are unshipped concepts or speculative redesigns of real brands — label as such. |
| **Dribbble** | dribbble.com | Visual polish, icon/illustration style, micro-interaction loops, colour exploration. | PUB/JS | Search shots by tag. **Critical caveats:** (a) mostly concepts, not shipped; (b) idealised content (perfect names, short strings, no errors); (c) frequently low contrast and poor accessibility; (d) homogeneous trend cycles (glassmorphism, neumorphism). Never use Dribbble as evidence that a UI works. Use only for visual vocabulary. |

### Are.na API — agent notes
Two API generations exist (per Are.na developer docs, as indexed in 2026):
- **v2 (stable)** — base `https://api.are.na/v2`. Common endpoints:
  - `GET /channels/{slug}` — channel metadata + first page of contents.
  - `GET /channels/{slug}/contents?page=&per=` — blocks in a channel (images, links, text, attachments, nested channels).
  - `GET /blocks/{id}` — single block (image URLs, source URL, title, description).
  - `GET /search?q=` and the scoped `GET /search/channels?q=`, `/search/blocks?q=`, `/search/users?q=`.
- **v3 (under active development; docs say breaking changes may occur and recommend v2 for production)** — `GET /v3/channels/{id-or-slug}`, `/v3/channels/{id}/contents`, `/connections`, `/followers`; `GET /v3/search` covers blocks, channels, users, groups but is **Premium-only**. OpenAPI spec at `https://api.are.na/v3/openapi.json`.
- **Pagination:** `page` and `per` (max 100).
- **Rate limits (v3 docs):** per minute by tier — guest 30, free 120, premium 300, supporter 600; 429 on overflow; 304s still count.
- **Auth:** most reads work unauthenticated; bearer token for private channels/higher limits.
- **Policy:** no bulk crawling. Pull a handful of channels relevant to the brief, not the whole site.
- Endpoint names above are from documentation indexes, not a live call in this research session; **verify against the OpenAPI spec before writing code**.

Query recipe: `search/channels?q=<style keyword>` (e.g. "swiss typography", "fintech ui", "brutalist web") → pick channels with high follower counts and recent updates → `channels/{slug}/contents?per=50` → keep Image and Link blocks → record `source.url` for attribution.

---

## 4. Typography & brand

| Source | URL | Best for | Access |
|---|---|---|---|
| **Fonts In Use** | fontsinuse.com | Real-world typeface usage, searchable by typeface, format (web, app, packaging), industry, period. The best "what typeface is that and where has it worked" resource. | PUB |
| **Typewolf** | typewolf.com | Curated font pairings on live sites, "site of the day" with font credits, guides to free alternatives to premium fonts. | PUB |
| **Pangram Pangram** | pangrampangram.com | Contemporary display/grotesk foundry; free personal-use trials; type-in-use showcases. | PUB |
| **Fontshare** | fontshare.com | Free-for-commercial-use quality fonts (Indian Type Foundry). Good for prototypes and indie products. | PUB |
| **Google Fonts** | fonts.google.com | Open-licence fonts; variable fonts; knowledge articles on type. | PUB/API |
| **Brand New (UnderConsideration)** | underconsideration.com/brandnew | Critique of corporate & brand identity redesigns with before/after. Read the comment debates for multiple viewpoints. | PUB |
| **It's Nice That** | itsnicethat.com | Graphic design, illustration, art direction culture; emerging creatives. | PUB |
| **BP&O** | bpando.org | Branding, packaging & opinion; identity critique. | PUB |
| **Identity guidelines archives** | e.g. standardsmanual.com (reissued NASA, NYCTA manuals) | Systems thinking for brand; historical rigour. | PUB (books are paid) |

---

## 5. Craft, interaction & motion (individual practitioners and tools)

| Source | URL | Best for | Access |
|---|---|---|---|
| **Rauno Freiberg** | rauno.me (see "craft" section) | Interaction-detail essays and prototypes; "Invisible Details of Interaction Design" essay. Benchmark for micro-interaction quality. | PUB |
| **Emil Kowalski** | emilkowal.ski; course at animations.dev | Web animation craft: springs, easing, gesture, toast/drawer components (Sonner, Vaul). Practical timing advice. | PUB (course paid) |
| **Paco Coursey** | paco.me | Minimal, high-craft personal site and components (cmdk). | PUB |
| **Sidebar** | sidebar.io | 5 curated design links per day — good daily trend/feed input. | PUB (also newsletter) |
| **Rive Community** | rive.app/community | Interactive state-machine animations (remixable files). | PUB/JS |
| **LottieFiles** | lottiefiles.com | Lottie animations (free & paid), icons, loaders. Watch licence per file. | PUB/JS (API exists for some features; verify) |
| **Motion (motion.dev) examples** | motion.dev | React/JS animation patterns with code. | PUB |
| **Apple HIG — Motion** | developer.apple.com/design/human-interface-guidelines/motion | Platform-native motion norms, reduced-motion expectations. | PUB |
| **Material 3 — Motion** | m3.material.io/styles/motion | Easing/duration tokens; transition patterns. | PUB/JS |

---

## 6. Awards & institutional curation (high signal, low frequency)

| Source | URL | Cadence | Best for |
|---|---|---|---|
| **Apple Design Awards** | developer.apple.com/design/awards | Yearly (around WWDC, June). Since 2022: six categories (Delight and Fun, Innovation, Interaction, Inclusivity, Social Impact, Visuals and Graphics), one app + one game winner each, plus finalists. 2025 app winners included CapWords, Play, Taobao, Speechify, Watch Duty (Apple Newsroom, June 2025). | Native iOS/macOS craft; inclusivity; platform-idiomatic interaction. Also browse past winners & finalists. |
| **Webby Awards** | webbyawards.com | Yearly (winners ~April–May). Judges + People's Voice. | Broad category coverage (apps, sites, AI, social); popularity signal. |
| **Red Dot (Brands & Communication / Interface)** | red-dot.org | Yearly | Interface & UX category; industrial-design rigour. Paid-entry award: winners are self-selected entrants. |
| **iF Design Award** | ifdesign.com | Yearly | UX/UI and product; large searchable database. Paid entry. |
| **D&AD** | dandad.org | Yearly | Digital design, UI, branding; "Pencils" are hard to win (high bar). |
| **Information is Beautiful Awards** | informationisbeautifulawards.com | Yearly (verify current status) | Data visualisation. |
| **Google Play Best of** / **App Store Awards** | Annual year-end lists | Yearly (Dec) | Mainstream quality signal; editorial, not design-only. |

Caveat on paid-entry awards (Red Dot, iF, Webby, Awwwards): only entrants can win; absence from a list means nothing. [moderate]

---

## 7. Templates, components & code-ready references

| Source | URL | Best for |
|---|---|---|
| **Figma Community** | figma.com/community | Files, UI kits, plugins, design systems (Material 3 kit, iOS kits by Apple). Check licence per file. Search "iOS 26 UI kit" / "design system" / pattern name. |
| **Apple Design Resources** | developer.apple.com/design/resources | Official iOS/macOS/watchOS/visionOS Figma & Sketch kits, SF Symbols. |
| **Vercel Templates** | vercel.com/templates | Next.js starter apps (SaaS, AI chat, commerce, blog): realistic code baselines for vibe-coded prototypes. |
| **Framer Marketplace** | framer.com/marketplace | Polished marketing-site templates and components; good for motion-heavy marketing pages. |
| **shadcn/ui** | ui.shadcn.com | Copy-in React components on Radix primitives + Tailwind; "blocks" for dashboards, auth, sidebars. Strong default for React/Next prototypes. |
| **Radix / Radix Colors** | radix-ui.com | Accessible primitives; a 12-step colour scale system with documented intended use per step. |
| **Tailwind UI / Tailwind Plus** | tailwindcss.com/plus | Paid professionally designed sections and app UI. |
| **Storybook showcase** | storybook.js.org/showcase | Public component libraries of real companies. |

---

## 8. Design-system references (for systems work)

Material 3 (m3.material.io) · Apple HIG (developer.apple.com/design/human-interface-guidelines) · Shopify Polaris (polaris.shopify.com) · IBM Carbon (carbondesignsystem.com) · Atlassian (atlassian.design) · GitHub Primer (primer.style) · Microsoft Fluent 2 (fluent2.microsoft.design) · GOV.UK Design System (design-system.service.gov.uk — the benchmark for research-backed, accessible patterns) · Salesforce Lightning (lightningdesignsystem.com) · Adobe Spectrum (spectrum.adobe.com).

Use: compare **component anatomy, state coverage, token naming, and contribution model**. GOV.UK is notable because many patterns document the user research behind them. [strong as practice reference]

---

## 9. Data-visualisation references

| Source | URL | Best for |
|---|---|---|
| **FT Visual Vocabulary** | github.com/Financial-Times/chart-doctor (visual-vocabulary) | Choosing a chart by the relationship you want to show (deviation, correlation, ranking, distribution, change over time, magnitude, part-to-whole, spatial, flow). |
| **Data Viz Catalogue** | datavizcatalogue.com | Chart type reference with anatomy and uses. |
| **Datawrapper Academy & blog** | datawrapper.de/academy | Practical rules for readable charts (labels, colour, accessibility). |
| **Our World in Data** | ourworldindata.org | Clear, sourced, consistent chart system at scale. |
| **The Pudding** | pudding.cool | Narrative/scrollytelling visual essays. |
| **NYT Graphics / The Upshot** | nytimes.com/section/upshot | Editorial data viz, annotation craft. |
| **Reuters Graphics** | graphics.reuters.com | High-quality explanatory graphics. |
| **Observable** | observablehq.com | Notebooks with D3/Plot examples (forkable code). |
| **FlowingData** | flowingdata.com | Examples + tutorials (Nathan Yau). |
| **Storytelling with Data** | storytellingwithdata.com | Business-chart decluttering (Cole Nussbaumer Knaflic). |
| **Dashboards: real product dashboards** | Mobbin/Refero searches for "dashboard", "analytics" | Product-dashboard patterns (better than Dribbble dashboards, which are typically fictional data). |

---

## 10. Choosing sources by task (routing table)

| Task | Primary | Secondary | Avoid as evidence |
|---|---|---|---|
| Tweak a component (padding, button, toast) | Component Gallery, design-system docs, Rauno/Emil | Mobbin element search | Dribbble |
| Redesign a flow in a big product | Mobbin/Refero/Page Flows (flow search), Baymard (if commerce), Growth.design | Own product analytics (data-driven refs) | Awwwards |
| Paywall / pricing | Mobbin "paywall", Refero "pricing", Page Flows "upgrade" | Store screenshots of top grossing apps | Any reference without trial/cancel clarity |
| New brand-led marketing site | Awwwards, Godly, Siteinspire, Httpster, Fonts In Use | Are.na, Savee, Cosmos | — |
| Design system from scratch | Component Gallery, Adele, Polaris/Carbon/GOV.UK/Material/HIG | shadcn/Radix | Concept UI kits |
| Native iOS feature | Apple HIG, ADA winners, Mobbin iOS | Apple Design Resources kits | Android-first patterns ported blindly |
| Data-heavy dashboard | FT Visual Vocabulary, Datawrapper, OWID | Mobbin/Refero dashboard screens | Dribbble dashboards |
| Motion / micro-interaction | Rauno, Emil, Rive, Codrops, GSAP showcase | LottieFiles | Animations without reduced-motion handling |
| Typography choice | Fonts In Use, Typewolf | Google Fonts, Fontshare, Pangram Pangram | Pinterest type posters (unattributed) |

---

## 11. When the source is blocked: user-assist protocol

Say, concisely: "Source X needs your login / blocks automated access. Could you (a) search for `<exact query>`, (b) screenshot 5–10 results that feel closest, and (c) paste the URLs?" Then proceed with the method in `inspiration-method.md`. Never fabricate what a blocked page "probably" contains.
