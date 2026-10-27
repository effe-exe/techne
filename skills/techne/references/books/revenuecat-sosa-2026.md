---
title: "State of Subscription Apps 2026"
author: "RevenueCat (with guest commentary from growth practitioners)"
year: 2026 (data year 2025)
domains: [data-driven, monetization, paywalls, pricing, subscriptions, retention, mobile]
evidence: "moderate"
---

# State of Subscription Apps 2026 — RevenueCat

Use this when: setting targets or sanity-checking numbers for a subscription app's funnel (download → trial → paid → renewal); choosing a paywall model, trial length, plan mix or price point; deciding where in onboarding to invest; explaining to stakeholders why one "conversion win" may not survive renewals; benchmarking an AI app against non-AI apps.

Source: https://www.revenuecat.com/state-of-subscription-apps/ — the full free web edition (2026), read in full: founder's letter, methodology, key insights, and all chapters (state of the market; store and revenue economics; funnel performance; pricing and packaging; paywalls and offers; retention and billing health; reactivation; categories/stores/frameworks/AI), including all "key takeaway / benchmarks / what stands out" blocks and practitioner sidebars. Not read: the 330+-page PDF (behind an email/newsletter sign-up) with extra segment splits and 11 category breakouts. The web text gives medians and quartiles; the charts' per-percentile values are only partly reproduced in the text.

## The big idea (3 sentences)
Drawing on 115,000+ apps, $16B+ revenue and 1B+ transactions processed through RevenueCat in 2025, the report shows that subscription outcomes are extremely skewed: the median app grew MRR 5.3% year on year, while the top decile grew 306%+ and only 4.6% of new apps reach $10K monthly revenue within two years. Almost everything is decided early. Half of paid conversions, roughly 80–90% of trial starts and the largest share of trial cancellations all happen on day 0, and survival through the first renewal is the main retention checkpoint. Structural choices (hard paywall vs freemium, plan duration, price tier, trial length) move early conversion and revenue a lot, while retention depends mostly on plan duration, category and the value the product keeps delivering.

## Core concepts
- **Funnel metrics** — download-to-trial (D30), trial-to-paid, download-to-paid by day 35 (D35), revenue per install (RPI at D14/D60), realized LTV per payer (RLTV, month 1 and year 1), renewal rates (1st/2nd/3rd), Y1 retention, refund rate, reactivation within 12 months.
- **Access model** — "hard paywall" (pay or trial before core use) vs "freemium". Hard paywalls have a median D35 download-to-paid of 10.7% (Q3 20%, P90 38.7%) vs 2.1% for freemium (Q3 4.5%). D14 RPI is $2.32 vs $0.27. **Y1 retention is the same** (yearly plans 27% vs 28%; monthly 9% vs 8%). In other words, access model is a conversion and cash-flow choice, not a retention one.
- **Day-0 compression** — 50.6% of paid conversions happen on install day (Productivity 72%, Education 28.5%). Trial starts on day 0 range from 78–90% by category. Cancellations: 55.4% of 3-day-trial cancellations and 31.1% of 30-day-trial cancellations occur on day 0. For freemium apps, about 23% of conversions happen after week 6 (19% across all apps).
- **Trial length** — median trial-to-paid is 25.5% for trials of 4 days or less, 37.4% for 5–9 days and 42.5% for 17–32 days (the 10–16-day bucket is highly dispersed). Yet the share of trials of 4 days or less rose from 42.1% to 46.5%.
- **Plan duration and retention** — Y1 retention medians are about 1–2% for weekly plans, 6–14% for monthly and 20–40% for yearly (2024 cohort overall: yearly 28%, monthly 8%, weekly 1.2%, all slightly down year on year). Active renewal rates are 18.7% weekly, 39.2% monthly and 83.4% yearly. First renewals are where users drop off: weekly 35–58%, monthly 53–61%, annual 23–40%. By the third renewal survivors converge at about 74–85%.
- **Price tier** — higher-priced apps convert better (download-to-trial 8.9% vs 4.4% for low-priced; D35 2.8% vs 1.4%) and earn more per payer (Y1 RLTV $62 vs $11). But they refund more (4.5% vs 2.7%) and lose more yearly subscribers at the first renewal (24% vs 37% renew). Low-priced yearly plans retain best (36% Y1).
- **Pricing anchors** — the most common prices are $5 weekly, $10 monthly and $30 yearly. Median yearly price rose from $31.60 to $34.80, and $9.99 per month is the structural anchor. IN/SEA prices are about 45–54% of North American levels.
- **Paywall norms** — 2 plans is the modal layout (41–60% of paywalls). Highlighted pricing appears on 74.5%, multi-plan options on 59% and free-trial messaging on 54%. Most paywalls scroll (59–76%) and are text-heavy (45–63%). Countdown timers (≤1.4%) and progress bars (≤0.2%) are almost absent. "Continue" is the most common CTA.
- **Offers** — only 9.3% of apps use promotional offers. Intro offers bring in about 30% of new payers at the median, but 65–99% for hobby-tier apps and 0–10% for top performers. The median intro discount is −50%.
- **Churn causes** — on Google Play, 32.2% of cancellations are billing errors (vs 15.2% on the App Store). In Play churn surveys, "cost" (25–45%) and "not enough usage" (26–40%) dominate; "found a better app" and technical issues are minor. 35% of annual-plan cancellations happen in month 1, with an 11% spike in month 12.
- **AI apps** (27% of subscription apps) — start trials more (8.5% vs 5.6%), convert slightly better (D35 2.4% vs 2.0%) and earn ~40% more per payer (Y1 RLTV $30 vs $21). But they retain worse (annual Y1 21% vs 31%), refund more (4.2% vs 3.5%) and are monthly-first (60% of plans sold).

## Actionable heuristics for product design
- When designing onboarding for a subscription app, treat the first session as the conversion window: show the product's core value before the paywall and put the strongest paywall moment at the end of onboarding. About half of all paid conversions and 80–90% of trial starts happen on day 0, and users who don't try immediately rarely try later.
- When choosing hard paywall vs freemium, decide on unit economics and the product's growth loop, not on retention. Hard paywalls convert about 5× better and earn about 8–9× more per install by D14, but Y1 retention is identical. Pick freemium when free users drive word of mouth, network effects or long-term value accrual, and pick a hard paywall when marginal cost is high (AI compute) or traffic is paid and high-intent.
- When running freemium, measure conversion over at least 6+ weeks before judging a cohort or ROAS, because about 23% of freemium conversions arrive after week 6. A day-7 read undercounts them.
- When picking trial length, match it to how long users need to experience the core value a few times. Don't default to 3 days: 3–4-day trials convert at a median of about 25% vs about 37% for 5–9 days, and 55% of 3-day cancellations happen within hours. Test 7 days as the baseline and compare net revenue after refunds, not just trial-to-paid.
- When a trial starts, show a plain timeline (today → reminder → charge date and amount) and send the reminder (Duolingo's sidebar reports that clarity and even a user-chosen reminder day raised conversions). Fewer than 2% of paywalls use countdown timers, so urgency gimmicks aren't the norm, and techne's ethics gate rules out fake ones anyway.
- When offering plan durations, show two plans with yearly framed as the value option and the billed amount clearly visible. Yearly plans renew at about 83% (active renewal) and retain 20–40% at Y1, vs about 1–2% for weekly. Use weekly plans only where value really comes week by week, never to profit from users forgetting recurring charges.
- When setting the yearly price, start from the market anchors ($29.99–$39.99 per year, $9.99 per month in North America; Education and Health & Fitness sustain $40–45 per year) and localize: IN/SEA prices are about half, and a Latin America test framing yearly as "just $X/month" lifted trial starts 30% (one practitioner anecdote).
- When raising price, expect better conversion and RLTV per payer but more refunds and more first-renewal churn on yearly plans (24% vs 37% first renewal for high- vs low-priced). Check cohorts at the first renewal before calling the change a win.
- When evaluating any paywall or pricing A/B test, recheck the winning cohort at 3 and 6 months, including refunds and chargebacks, because short-term conversion lifts often don't show up in top-line growth (the Yousician sidebar's warning, which the renewal data supports).
- When designing for retention, invest in getting users to value before the first renewal. This is where most loss happens: 1st→2nd renewal rates jump 18–30 points, 35% of annual cancellations happen in month 1, and the leading churn reasons are cost and "not enough usage", not competitors.
- When shipping an Android subscription, build billing-failure recovery (grace periods, account-hold messaging, payment-update prompts), because about 1 in 3 Play cancellations is a billing error, more than twice the App Store rate.
- When planning win-back, put effort into monthly-plan churners (≈18–24% reactivate within a year) rather than annual churners (≈5%). Let users pause instead of cancel, and make returning frictionless (keep saved payment, one tap).
- When relying on intro discounts, track the share of new payers who come in through offers. A share above ~65% looks like hobby-tier apps, while top performers sit at 0–10%. The −50% norm is a ceiling to test down from, not a target.
- When building an AI feature behind a subscription, plan retention mechanics from day one (recurring value, habit, memory of user context), because AI apps sell better but lose about a third more annual subscribers by Y1 and refund more.
- When benchmarking your app, compare against your own category, region, store and price tier, never against the global median. RPI differs about 5× between North America and IN/SEA, D35 conversion about 3× across categories, and App Store D35 conversion is about 2.9× Google Play's.

Quick benchmark table (global medians, 2025 data; use your own category, region and store before setting targets):

| Metric | Median | Upper quartile / note |
|---|---|---|
| D30 download-to-trial | ~5–6% (NA 7.1%) | Business 9.1%; top 10% NA ~25% |
| Trial-to-paid | ~32% (NA 34%, IN/SEA 15%) | Travel 43.5%, Photo & Video 22% |
| D35 download-to-paid | 2.0% (iOS 2.6%, Play 0.9%) | hard paywall 10.7%, freemium 2.1% |
| RPI D14 / D60 | $0.23 / $0.34 | Health & Fitness $0.48 / $0.66 |
| Y1 RLTV per payer | ~$23 | top quartile $44+ |
| Y1 retention by plan | weekly ~1%, monthly ~8%, yearly ~28% | yearly top quartile 32–59% |
| Refund rate | ~3–4% | IN/SEA 7.7%; AI 4.2% |
| Monthly revenue 1 yr after launch | ~$72 | top quartile $429, top 10% $2,574 |

## Evidence & caveats
- **Scale is real, but the data is observational and vendor-sourced.** It covers only apps that use RevenueCat, so it skews toward iOS-first, indie-to-mid-size, US-led developers and away from the biggest in-house billing stacks. Every comparison (hard paywall vs freemium, short vs long trials, AI vs non-AI, React Native vs native) mixes choice of model with category, traffic, team and price. It shows correlations, not effects of switching. Treat it as [moderate] for benchmarks and [weak] for causal "do X to get Y" claims.
- **Selection effects are obvious in places.** Long trials are used by habit categories (Health & Fitness, Education), and short trials by Gaming and Photo & Video, so the trial-length gap is partly a category gap. "React Native earns 50% more RLTV" almost certainly reflects who uses it, as the report itself says execution matters more than framework.
- **Internal inconsistencies in the web edition:** the AI summary calls the 8.5% vs 5.6% figure "trial-to-paid" while the chart is labeled trial start rate; the store summary says D35 is 2.9% vs 2.6% while the chart says 2.6% vs 0.9% (2.9×); D60 RPI is $0.42 vs $0.16 in the chart but $0.23 in the summary; AI weekly retention is 1.2% vs 1.7% in the chart but 2.5% vs 3.4% in the summary; high-priced month-1 RLTV is $35.89 or $34.82; the billing-error share is 31%/14% or 32.2%/15.2%; one chart says Productivity is 77% monthly and another 77% yearly; day-0 paid conversion is "50.6%" by category but "1/3" by access method. Quote the chart-level figure, say which one you used, and check the PDF before putting numbers in a deliverable.
- **Medians hide wide spreads.** Hard-paywall D35 runs from 4.2% to 38.7% (P10 to P90), so "execution matters more than model" is the report's own reading.
- **Year-on-year changes are small** (e.g. Y1 yearly retention 31% → 28%), and the report itself says some are probably noise.
- **Practitioner sidebars are opinion or single-company anecdotes** (reverse trial "0.4% → 4.5%", Mojo's Japan paywall +20%, Tinder's single-product ML paywall, Duolingo's reminder test, Rise's paid trials). Many authors sell growth consulting. Treat them as hypotheses to test, [weak/anecdotal].
- **Dated quickly:** this is an annual series with shifting definitions (the 2025 edition reported hard paywall D35 ≈12.1% on 75k apps). Re-check the latest edition before quoting.

## Disagreements with other references
- `references/data-driven/conversion-paywalls-pricing-subscriptions.md` cites SOSA 2026 trial-length medians (42.5% vs 25.5%) and hard vs freemium (10.7% vs 2.1%). These match the report. It marks "~80% of trial starts on day 0" as "exact % unverified"; the 2026 web edition gives 78–90% by category (Business 89.9%, Productivity 78%), so that can be upgraded. It notes higher hard-paywall refunds for 2025 (via secondary coverage). In the 2026 edition, refund rates are similar (2.5% hard vs 2.9% freemium, which the report calls noise), so drop the claim that hard paywalls refund more unless a newer source shows it.
- The same file lists the reverse trial as [weak/anecdotal]. SOSA's only support is one consultant's sidebar (0.4% → 4.5%), so keep the tag.
- `references/data-driven/conversion-onboarding-activation-retention.md` rates claims that long quiz onboarding raises paywall conversion as [weak/anecdotal] from RevenueCat/Adapty/Superwall content. SOSA 2026 has no data on quiz length. Its day-0 data supports investing in the first session, but not making onboarding longer.
- `references/books/paying-not-to-go-to-the-gym.md` (gym contracts: people overpay for flexible plans they underuse) fits SOSA's finding that yearly plans retain far better and that "not enough usage" is a top churn reason. It also warns that some yearly "retention" is inertia, not value. Read high annual renewal rates as partly inertia, and keep cancellation symmetric (see `references/psychology/behavior-law-consent-cancellation.md`).
- `references/books/focusing-on-the-long-term.md` and `references/data-driven/experimentation-playbook.md` warn that short-term metric wins can reverse. SOSA's renewal and refund data back this up: judge paywall tests on 3–6 month net revenue.

## Best quotes (< 25 words each, max 5)
- "The battle for the subscriber is won or lost in the first session" (Key insights)
- "access method is a conversion choice, not a retention strategy." (Retention and billing health)
- "Retention doesn't erode gradually — it breaks at commitment checkpoints." (Asya Paloni, Welltory sidebar)
- "If your A/B test wins aren't showing up in top-line growth, something is wrong." (Sara Grana, Yousician sidebar)

## Related
- references/data-driven/conversion-paywalls-pricing-subscriptions.md — main paywall/pricing playbook; this note supplies the 2026 benchmark detail
- references/data-driven/conversion-onboarding-activation-retention.md — activation and day-0 design
- references/data-driven/metrics-frameworks.md — RPI, LTV and retention definitions
- references/psychology/behavior-pricing-and-choice.md, references/psychology/behavior-ethics-dark-patterns.md — anchoring, defaults, urgency limits
- references/books/paying-not-to-go-to-the-gym.md, references/books/focusing-on-the-long-term.md
