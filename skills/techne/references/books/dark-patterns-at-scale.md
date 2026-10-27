---
title: "Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites"
author: "Arunesh Mathur, Gunes Acar, Michael J. Friedman, Elena Lucherini, Jonathan Mayer, Marshini Chetty, Arvind Narayanan"
year: 2019
domains: [ethics, law, psychology, conversion]
evidence: "strong"
---

# Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites — Mathur et al.

Use this when: auditing an e-commerce product page, cart or checkout for urgency, scarcity, social-proof or sneaking patterns; a stakeholder wants to install a "FOMO", "sales pop", countdown or low-stock plugin; you need hard prevalence numbers or a precise, citable definition of a specific pattern (countdown timer, limited-time message, activity message, low-stock message, pressured selling, trick question) to explain why a design crosses the line.

Source: https://arxiv.org/abs/1907.07032 (arXiv v2, the camera-ready of Proc. ACM HCI 3, CSCW, Article 81, Nov 2019; 32 pages). Read in full, including method, findings, third-party ecosystem, discussion, limitations and appendix.

## The big idea (3 sentences)
The authors built a crawler that walked the purchase path (product page, add to cart, cart, checkout) of ~11K popular English-language shopping sites, clustered ~13M text segments, and had experts label what they found: 1,818 dark-pattern instances on 1,254 sites (~11.1%), in 15 types and 7 categories. They then re-visited dynamic patterns every 4 hours for 5 days to catch outright lies, finding 234 deceptive instances on 183 sites (resetting timers, randomly generated stock counts and "just bought" messages). Much of this is not hand-built but bought: 22 third-party vendors sell these patterns as turnkey scripts and platform plugins, and some openly advertise fake ones.

## Core concepts
- **Definition** — interface choices that benefit the service by coercing, steering or deceiving users into decisions they would not make if fully informed and able to choose otherwise.
- **Five characteristics (the first version of the later six-attribute model)** — *asymmetric* (unequal burden on the choices), *covert* (the influence mechanism is hidden), *deceptive* (induces false beliefs by misstatement, misleading statement or omission), *hides information* (obscures or delays what the user needs), *restrictive* (removes choices). `what-makes-dark-pattern-dark.md` later adds *disparate treatment*.
- **Seven categories, 15 types, with counts (instances / sites):**
  - Sneaking: sneak into basket (7/7), hidden costs (5/5), hidden subscription (14/13).
  - Urgency: countdown timer (393/361), limited-time message with no deadline (88/84).
  - Misdirection: confirmshaming (169/164), visual interference (25/24), trick questions (9/9), pressured selling (67/62).
  - Social proof: activity message (313/264), testimonials of uncertain origin (12/12).
  - Scarcity: low-stock message (632/581), high-demand message (47/43).
  - Obstruction: hard to cancel (31/31).
  - Forced action: forced enrollment (6/6).
- **Cognitive biases each pattern leans on** — anchoring, bandwagon, default effect, framing, scarcity bias, sunk cost. Hidden costs lean on sunk cost (fees revealed after the user has typed shipping and billing details); sneak into basket and pressured selling lean on defaults.
- **Deception tests used** — a timer is deceptive if it resets with the same offer or if the offer survives expiry; 157 of the countdown timers on 140 sites failed (40% of the timers the authors found). Stock counts were deceptive when they fell on a fixed schedule or were random on page load (17 sites). Activity messages were deceptive when the page source generated names, places or counts randomly or hard-coded them (29 instances on 20 sites).
- **Third-party ecosystem** — 22 vendors (Beeketing on 406 shopping sites, then Dynamic Yield, Yieldify, Fomo, Fresh Relevance and others) on 1,066 of the 11K sites. Two openly advertised fake orders ("Fake it till you make it"). Shopify pulled Beeketing's Sales Pop for allowing fabricated sales.
- **Popularity correlation** — more popular sites (by Alexa rank) were more likely to show at least one pattern (Spearman's rho = −0.62 between rank number and prevalence).
- **Scale of the crawl** — 361K Alexa sites, classified down to 46.6K shopping sites and then 19.5K in English (Aug 2018). Product pages were found on 11,286 sites (53,180 pages, at most 5 per site), giving ~13M text segments, ~1.3M after removing duplicates, and 10,277 clusters (HDBSCAN), of which 1,768 were inspected by hand.
- **Not every persuasive element is a dark pattern** — the authors separate their list from Moser et al.'s 64 impulse-buying features. Free returns or multiple product photos persuade without subverting the decision, so they are not dark patterns.
- **Characteristics per type (examples)** — confirmshaming is asymmetric but *not* covert (users see the pressure); sneak into basket and hidden costs are deceptive and info-hiding but not covert (the item or fee is visible once noticed); countdown timers and low-stock messages are partly covert (they raise impulsivity without users realising) and sometimes deceptive; hard to cancel is restrictive, and info-hiding when the policy isn't disclosed upfront.
- **Visual interference examples** — the opt-out greyed so it looks disabled though it is clickable (greenfingers.com); "free gifts" used to inflate the savings shown at checkout even when nothing was discounted; a "lucky draw" of deals whose outcome was in fact fixed.
- **Cart-stage urgency** — besides site-wide sales, timers appeared on cart reservations ("Your cart will expire in 10:00 minutes"), which a user can't verify.

## Actionable heuristics for product design
- When anyone proposes a countdown timer, require that the deadline be server-side, the same for every user and final (the offer really ends at zero). The paper's test is simple: if the timer resets or the offer survives expiry, it is deceptive. 40% of the timers in the wild failed that test.
- When a "sale ends soon" banner has no date, add the exact end date and time or remove the banner. A limited-time message with no stated deadline counts as information-hiding even when no lie is told.
- When showing stock, bind the number to live inventory and show it only when it is low enough to matter. Never show it on every product: 6pm.com showing "Only X left" on nearly everything, and fashionnova.com showing "selling out fast" for every cart item (38 of 47 high-demand messages showed regardless of product) are listed as patterns even where the numbers were not proven false.
- When showing activity ("Ana in Milan just bought…", "35 people have this in cart"), generate it from real events with an honest timestamp ("4 hours ago", not "just") and the matching scope (same item, same dates). If the business cannot audit the feed, do not ship it.
- When evaluating a conversion plugin (Shopify, WooCommerce, Magento) that offers "urgency", "scarcity" or "social proof", read its admin settings before installing. Defaults such as "restart campaign when timer ends" or "random location" make the store deceptive by configuration. 22 vendors sell exactly this.
- When showing testimonials, keep a record of where each one came from and link them to verifiable reviews. The authors found the same testimonials on two different stores under different customer names.
- When adding a decline link to an email-capture or discount pop-up, use neutral copy ("No thanks"). Confirmshaming was the most common misdirection type (169 instances), almost all in exactly this pop-up.
- When an opt-out uses a checkbox, phrase it so ticking means yes to the thing named, and never open with an affirmative statement of the practice you want ("We'd like to send you emails… tick to not receive"). The authors count those as trick questions and flag even the plainer "tick to opt out" form as a concern (23 more instances).
- When choosing a default size or variant, default to the cheapest one or to none. Pre-selecting the most expensive option (pressured selling) makes it the anchor.
- When an add-on (insurance, a greeting card, a charger) could go into the cart, add it only on an explicit action, never with a pre-ticked box. Sneak into basket is likely unlawful under the EU Consumer Rights Directive.
- When fees exist, show them on the product page and in the first cart view, not after shipping details. Hidden costs work through sunk cost because they are revealed late.
- When a membership is recurring, say "renews annually at $89" next to the price, not behind "Learn more". Make cancellation available in the same channel the user signed up in, and say so before purchase. Hidden subscription often came paired with phone-only cancellation.
- When showing a "you saved" figure, compute it only from real discounts on the items bought. Do not count free gifts as savings, and do not show savings on items that were never discounted.
- When an option can be clicked, never style it as disabled. A greyed-but-active opt-out is visual interference. If you de-emphasise a secondary action, it must still look interactive and meet contrast minimums.
- When gating browsing behind sign-up (e.g. product listings shown only to account holders), remove the gate or offer guest browsing. Forced enrollment through a pop-up you can't dismiss was one of the forced-action types found.
- When combining consent with the terms of service in one checkbox ("I agree to the terms and to receive emails"), split it into separate checkboxes. A single bundled box counts as forced enrollment, an all-or-nothing choice that is asymmetric and restrictive (four of the six forced-enrollment sites did this). The authors note that consent obtained through trick questions or visual interference is not valid GDPR consent; for bundling, see the EDPB rules in `books/edpb-deceptive-design-patterns.md`.
- When a reservation timer in the cart is real (a seat or ticket hold), show what happens at zero ("seats released at 14:32") and enforce it server-side. Otherwise don't show one.
- When building any automated personalisation of urgency or social proof (e.g. vendor features that tailor activity notifications to the user's background), treat it as higher risk. Covert patterns personalised per user are harder for users and regulators to see.
- When auditing your own product, walk the full purchase path and capture every transient element (pop-ups, timers, toasts) over several days. A single screenshot misses resetting timers and scheduled stock decrements. Copy the paper's method: revisit every 4 hours for 5 days.

## Evidence & caveats
- Strong as a prevalence study: a large, systematic crawl, inter-rater agreement on a 200-cluster sample of Cohen's kappa = 0.74, code and data published. The deception findings rest on direct observation of page source and repeated visits, not on inference.
- All counts are lower bounds. The crawler read only text (purely visual patterns such as colour, size and hierarchy are undercounted: visual interference shows only 25), visited at most 5 product pages per site, did not buy anything (so post-purchase upsells were missed), covered English-language sites only, and completed checkout on only 66 of 100 test pages.
- It measures presence, not effect. The paper does not show that these patterns lift conversion or harm users. For effect sizes see Luguri & Strahilevitz (cited in `psychology/behavior-ethics-dark-patterns.md`).
- The bias mappings (scarcity bias, sunk cost and so on) are the authors' interpretation, and they say the links may be more nuanced. Some patterns sit in a grey zone (e.g. a free-shipping cutoff timer) and experts and users may disagree.
- Classifier and crawler accuracy is reported honestly: the product-URL classifier was 83% accurate in cross-validation, product pages were extracted correctly on 86 of 100 sampled sites, and checkout was reached on 66 of 100 pages. Server-side activity messages were excluded from the deception test because their truth couldn't be checked, so deceptive social proof is undercounted.
- The authors propose countermeasures (a public site scoring stores on their dark patterns, browser extensions that flag known patterns, adding the 22 vendors to tracker blocklists). These are suggestions, not evaluated tools.
- Dated: the data comes from 2018 crawls, Alexa rankings no longer exist, and several named vendors and plugins have since been removed or changed. The legal claims (FTC Act §5, UCPD, CRD, GDPR) are the authors' reading, not court findings.

## Disagreements with other references
- `psychology/behavior-ethics-dark-patterns.md` §2 summarises this paper accurately (1,818 / 1,254 / 15 types / 7 categories / 183 deceptive sites / 22 vendors). One nuance to add: the five characteristics here (asymmetric, covert, deceptive, hides information, restrictive) are the 2019 originals, and *disparate treatment* comes from the 2021 CHI follow-up, which the ethics file merges into one list. Its catalog row "Fake scarcity — Only 2 left not tied to stock" is narrower than this paper, which also flags true-but-ubiquitous low-stock and high-demand messages.
- `psychology/behavior-persuasion-toolkit.md` treats scarcity and social proof as legitimate levers when real. This paper agrees on the line (real versus fabricated) but adds a second test the toolkit lacks: even true claims become a pattern when they are shown indiscriminately, or with a vague scope or time, because they are then covert and partly information-hiding. Trust the stricter version for e-commerce.
- `data-driven/conversion-checkout-forms-signup-landing.md` §5 allows "live activity counters only if real and meaningful". That is consistent. This paper supplies the concrete audit (source-code generation, scope of dates, "just" versus actual timestamp).

## Best quotes (< 25 words each, max 5)
- "We discover 1,818 dark pattern instances, together representing 15 types and 7 broader categories."
- "We uncovered 234 instances of dark patterns—across 183 websites—that exhibit deceptive behavior."
- "The plugin will create fake orders of the selected products" (vendor marketing copy quoted by the authors)

## Related
- `psychology/behavior-ethics-dark-patterns.md`, `psychology/behavior-law-consent-cancellation.md`, `psychology/behavior-persuasion-toolkit.md`, `data-driven/conversion-checkout-forms-signup-landing.md`
- `books/what-makes-dark-pattern-dark.md` (the normative follow-up by the same lead author), `books/deceptive-patterns-brignull.md` (Brignull adopts this taxonomy for expert-witness work)
