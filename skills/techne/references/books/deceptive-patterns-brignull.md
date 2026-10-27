---
title: "Deceptive Patterns: Exposing the Tricks Tech Companies Use to Control You (book) + deceptive.design pattern catalog"
author: "Harry Brignull"
year: 2023
domains: [ethics, law, psychology, process]
evidence: "mixed"
---

# Deceptive Patterns (book and site) — Harry Brignull

Use this when: naming a pattern precisely in a critique or ethics review (18 catalog types with definitions); explaining to a PM or legal *why* a winning variant is deceptive (A/B tests reward deception); arguing in the language of risk (laws, enforcement, fines) rather than ethics; designing the honest version of a paywall, share dialog, cancellation, cookie banner, review prompt or upsell.

Source: https://www.deceptive.design/ — the author's free online edition of the book (https://www.deceptive.design/book/contents/prologue/; prologue, Parts 1–6, chapters 1–34 and epilogue, read in full) plus the catalog: the types index, all 18 type pages (definition, flagship example, references, related laws and enforcement), the about, laws and books pages. Hall-of-shame entries, individual enforcement pages and the slide deck were not read.

## The big idea (3 sentences)
Deceptive (formerly "dark") patterns are a rational product of metrics-driven, A/B-tested design in an under-enforced market: tricking or trapping users usually beats honest persuasion on the chosen metric, and persuasion plus a hidden trick gets "two shots" at the conversion. Eight exploitative strategies (perception, comprehension, decision-making biases, expectations, resource depletion, forcing and blocking, emotion, addiction) combine into many surface patterns, so any taxonomy is a map rather than the territory. Codes of ethics, education, "bright patterns" and naming-and-shaming have failed; what changes behaviour is regulation plus enforcement that moves these patterns into the red zone of a company's legal risk matrix.

## Core concepts
- **Catalog of 18 types** (deceptive.design, 2026): addictive design, comparison prevention, confirmshaming, currency confusion, disguised ads, fake scarcity, fake social proof, fake urgency, forced action, hard to cancel, hidden costs, hidden subscription, nagging, obstruction, preselection, sneaking, trick wording, visual interference. Each type is linked to the laws it breaks and to enforcement actions. Hard to cancel has the most hall-of-shame examples (135); sneaking and forced action have the most enforcements (60 and 59).
- **Eight exploitative strategies** (building on Gray et al.) — exploit perception (low contrast, small type, below the fold); comprehension (complex terms, scan-reading); decision biases (default, anchoring and framing, decoy, social proof, scarcity, sunk cost, reciprocity); expectations (subverting conventions, e.g. "rate" replacing "play" in the same spot); resource depletion and pressure (sludge, nagging, deadlines); forcing and blocking (mandatory steps, removing export); emotion (guilt, shame, fear); addiction (variable rewards, infinite scroll, autoplay, streaks, loot boxes).
- **Taxonomy of record** — for expert-witness work he uses Mathur et al. 2019 (`dark-patterns-at-scale.md`) and renames "trick questions" to "trick wording".
- **Why it spreads** — cheap tracking, cheap A/B testing that "doesn't judge whether a design is better for the user", copycat design, stack-ranking incentives, euphemism inside companies ("uninterrupted service" for silent auto-renewal), users reduced to dashboards. Sometimes a pattern is an accident (sloppy subscription copy) that the business comes to depend on.
- **Persuasion versus manipulation** — direct deception (a false claim) is a clear line; indirect deception (omission, ambiguity) is a spectrum; manipulation can be entirely truthful (emotional coercion). His practical rule: no false claims, know your laws, avoid anything resembling the catalog, research for harm outcomes because good intentions are not a defence.
- **Harms** — individual (money, time, unintended contracts such as arbitration, privacy, psychological, freedom of thought); groups (time-poor, less educated, low income and mobile-only, second-language, cognitive disability, young and old, contextual vulnerability); market (blocks comparison, locks users in, starves honest competitors).
- **Selected catalog definitions (paraphrased)**:
  - *Comparison prevention* — features and prices bundled so options can't be weighed (T-Mobile: taxes included in two plans but not the third; the cheapest plan hidden behind a link).
  - *Currency confusion* — real money converted into a virtual currency sold in fixed bundles, so the true price disappears.
  - *Disguised ads* — ads styled as interface or content (a fake "Download" button).
  - *Preselection* — a default chosen for the user to steer the decision, often reinforced by social proof or authority.
  - *Trick wording* — exploits scan-reading (Ryanair hid "No travel insurance required" in a country-of-residence dropdown).
  - *Nagging* — an "adversarial resource depletion" tax on attention.
  - *Obstruction* — exhausts users, or softens them up for a bigger deception.
- **Laws used against each pattern** — EU: UCPD (general clause, misleading and aggressive practices, an Annex I blacklist of 31 practices including fake urgency, bait and switch, hidden advertorials and fake "free"); GDPR (Art. 25 by design and default, Art. 4(11) consent, Art. 5(1)(a) transparency); CRD (pre-ticked boxes for extra payments banned, fees disclosed before the contract, 14-day withdrawal); DMA (gatekeepers may not re-ask for consent more than once a year after a refusal); DSA Art. 25 and Recital 67 ("on purpose or in effect"; non-neutral prominence, repeated requests, harder termination). US: FTC Act §5 deception test (a representation likely to mislead a reasonable consumer, and material) and unfairness test (substantial, not reasonably avoidable, not outweighed by benefits); ROSCA; CPRA and the Colorado Privacy Act definitions.
- **Visibility spectrum** (Leiser & Santos) — self-evident (confirmshaming, nagging), hidden but on-screen (sneaking, misdirection), multistep business logic, complex algorithms, AI. Most scrutiny so far covers the top layers only, and persuasion profiling and hypernudging are the next risk.

## Actionable heuristics for product design
- When a variant wins an A/B test, ask whether it won by persuading or by catching people who didn't notice (a pre-ticked box under persuasive copy). Check comprehension, refunds and cancellations before calling it a win. Deceptive variants reliably beat neutral ones on the chosen metric.
- When fees exist, show the all-in price from the first price the user sees. StubHub's own large A/B test found hiding fees until checkout made users spend about 21% more and 14.1% more likely to buy. That is the money at stake, and it is why regulators (Australia's ACCC, EU) force all-in pricing. Airbnb showed totals in the UK and EU but not, at the time, in the US.
- When a share or invite action creates a charge (Figma and Airtable "can edit" seats), say so in the dialog itself ("Adds a paid seat: $X/month") and confirm before billing. Silent charges on a card on file count as a hidden subscription.
- When a decline option is needed (newsletter, trial, insurance), label it plainly ("No thanks", "Skip"). Never use derogatory copy, and never put it in the footer zone below the visual boundary of the card (Trello's "Start without Business Class"), nor as a tiny or low-contrast X (YouTube).
- When legal terms ride on a primary button ("By clicking Create Account you agree to arbitration"), make that text the same contrast and size as the surrounding body copy. In *Arena v. Intuit* the judge found faint text less noticeable, and Intuit's own data showed under 0.55% of users clicked the link.
- When purchases can be one-tap with a stored card (games, in-app upgrades, a $4,000 software unlock), add a confirmation step and a refund window for accidental buys. The FTC settled with Epic Games for $245M over one-button purchases, and Tesla added a 48-hour cancellation window after accidental purchases.
- When showing prices in a virtual currency, show the real-money equivalent next to each item. Converting at purchase time is a memory and arithmetic burden many users fail (the V-Bucks example works out to about 0.62p each).
- When requesting a review, route everyone to the same honest choice ("Leave a public review" / "Email us privately") rather than filtering happy users to the store and unhappy ones to support. Review gating is banned by both app stores and misrepresents ratings.
- When placing a high-value action where users expect a frequent one, don't. Swapping "Play" for "Rate" in the same spot is how Flappy Bird harvested reviews. Keep key positions stable and never re-map a familiar control.
- When a feature requires data (address book, email inbox), state exactly what is taken and what happens to it, put an equally weighted "Skip" next to "Continue", and do not disguise the access step as routine. LinkedIn's address-book harvesting cost $13M.
- When designing cancellation, give a button in the same channel the user signed up in. Do not use a phone line or a chat-retention script: the NYT took about 7 minutes by chat (over 800× a ~500 ms button) and settled for $5M under California law. Amazon's internal data showed 67% of Prime cancellation requests handled by the Prime team were "accidental sign-ups".
- When asked to "maximise opt-in" on a consent banner, refuse the CMP-vendor playbook (A/B testing for consent rate). The IAB TCF v1 flows (one-click accept, hundreds of partners to untick one by one) were found to breach GDPR.
- When you want true urgency or scarcity, use real constraints (seat holds, shipping cutoffs, real stock below a threshold) and avoid plugins whose defaults are "evergreen" timers or randomly generated stock (Hurrify, Hey!Scarcity, Sales Pop).
- When pressing a request repeatedly (notifications, app install, upgrade), offer a real "No" that sticks. "Not now" as the only refusal is nagging (Instagram, 2018).
- When building engagement loops (streaks, variable rewards, autoplay, infinite scroll), add stopping cues and limits. Brignull treats Hooked-style loops as a rebranded dopamine cycle, and regulators (EU on Meta, NCC on games) increasingly do too.
- When pricing plans, align the units, show taxes and fees the same way for every plan, and display the cheapest plan with its price alongside the others. Comparison prevention steers users to the expensive plans by making the cheap one effortful to evaluate.
- When building for mobile-first or low-income users, check that key terms, fees and opt-outs are visible without scrolling on small screens. The FTC staff report Brignull cites notes that such users more often rely only on a phone, where scrolling hides information.
- When a cancellation journey includes a save attempt, keep it to one screen with a clear "Continue to cancel". Amazon's 12-step Prime cancellation flow (as documented by the Norwegian Consumer Council) drew complaints from 16 consumer groups, an EU order and the FTC case.
- When using AI tools to generate UI ("a cookie dialog that encourages opt-in"), review the output for catalog patterns before shipping. Generators trained on today's web will reproduce its deceptive patterns, and smaller teams leave fewer reviewers to catch them.
- When running automated ad or variant optimisation (bandits, auto-winner selection), add ethical and legal guardrails (truth of claims, comprehension, complaint rate). Optimisation with no humans in the loop converges on whatever extracts clicks.
- When choosing a persuasion tactic per user from inferred susceptibility ("persuasion profiling", hypernudging), don't. Targeting a person's dyslexia with trick wording or their dyscalculia with confusing bundles is the extreme Brignull warns about.
- When documenting decisions, keep design rationales, A/B test records and analytics. In lawsuits they are subpoenaed (Intuit's click data, Amazon's leaked "unintentional sign-ups erode customer trust" memo, Marriott's internal research on fee transparency), and the PM is usually the person deposed.
- When writing to legal or leadership, bring the specific law, the similar enforcement case and the fine, not an ethics argument. That is what moves a risk matrix. deceptive.design links each type to laws and enforcement for exactly this purpose.

## Evidence & caveats
- Mixed. The core claims about prevalence and effect rest on strong external studies (Mathur et al. crawl; Luguri & Strahilevitz preregistered experiment; Blake et al. StubHub field test with several million transactions; Nouwens et al. consent experiment up to +23 pp; SERNAC 70K-participant cookie-default study, +86 pp rejection when opted out by default). He reports these accurately but second-hand.
- Much of the book is case-based advocacy: screenshots, tweets, journalism (NYT on the Trump campaign's pre-ticked "money bomb", which led to $122M in refunds versus $21M for Biden), and the author's expert-witness experience. These are vivid and mostly well sourced but not controlled evidence. He discloses that he works as a paid expert witness for plaintiffs.
- Several cited behavioural studies are small or old (Worchel cookie jar n=146; Ariely's Economist decoy n=200; Krishen & Bui fear ad n=122). Treat them as illustrations, not effect sizes for your product.
- He presents the Hooked model as near-identical to addiction-by-design. That is a strong opinion; the evidence for clinical "addiction" to most apps is contested.
- Dated or moving parts: written mid-2023 (FTC v. Amazon described as pending; it settled in 2025 for $2.5B per `psychology/behavior-law-consent-cancellation.md`). The proposed FTC click-to-cancel rule he cites was later vacated (July 2025). *Arena v. Intuit* was reversed by the Ninth Circuit, as he notes in a footnote. The site is updated continuously (2026 hall-of-shame entries).
- The site's enforcement tallies are skewed toward GDPR and Spanish DPA cases and are not a measure of legal risk by pattern.

## Disagreements with other references
- **Luguri & Strahilevitz numbers.** `psychology/behavior-ethics-dark-patterns.md` §2 gives acceptance as 11.3% / 25.8% / 41.9% (control / mild / aggressive). Brignull's footnote gives 11.3% / 25.4% / 37.2%, "treating drop-outs as rejecting". Both are probably correct under different denominators (excluding versus counting people who quit), and the primary paper should be cited with its denominator stated. Prefer the conservative figures when making a claim.
- `psychology/behavior-persuasion-toolkit.md` treats Hooked as a "[weak]" model usable for content discovery with guardrails. Brignull is harsher, calling it rebranded addiction. Follow the toolkit's conditional use, add his stopping cues, and refuse it for minors and money.
- `psychology/behavior-ethics-dark-patterns.md` §4 uses a 16-row catalog. The current site has 18 types, adding *addictive design* and *currency confusion* as first-class types and folding "privacy zuckering" and "friend spam" into *forced action*. Map our rows onto the site's names when citing.
- Brignull says bright patterns or fair patterns are "just yet more educational materials". Our modes nonetheless prescribe honest alternatives. There is no real conflict: the alternatives serve the designer, while his point concerns industry-wide change, where regulation is needed.

## Best quotes (< 25 words each, max 5)
- "A/B testing doesn't judge whether a particular design is actually better or worse for the user."
- "Deceptive patterns are actually a rational response to an under-regulated and under-enforced marketplace."
- "Good intentions don't absolve you from the responsibility of preventing outcomes of harm."
- "It shouldn't be harder to cancel a service than it was to subscribe for it" (President Biden, quoted)

## Related
- `psychology/behavior-ethics-dark-patterns.md`, `psychology/behavior-law-consent-cancellation.md`, `psychology/behavior-persuasion-toolkit.md`, `data-driven/conversion-paywalls-pricing-subscriptions.md`, `data-driven/experimentation-playbook.md`, `process/heuristics-and-critique.md`
- `books/dark-patterns-at-scale.md`, `books/what-makes-dark-pattern-dark.md`, `books/edpb-deceptive-design-patterns.md`, `books/online-manipulation-susser.md`
