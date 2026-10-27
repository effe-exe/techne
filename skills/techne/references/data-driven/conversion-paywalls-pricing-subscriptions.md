# Conversion: Paywalls, Subscriptions, Pricing Pages

> **Use this when:** designing or testing a mobile/web paywall, trial structure, plan picker, pricing page, upgrade prompt, cancellation flow, or any monetization surface.
> **Also load when:** the target metric is trial start rate, trial-to-paid, ARPU/LTV, refund rate, or churn.
> **Skip when:** the product is ad-supported only or the task is not about the moment of payment/commitment.

Evidence tags: **[strong]** · **[moderate]** · **[weak/anecdotal]** · **[contested]** · **[unverified]** (see onboarding file for definitions). Benchmarks below are medians across many apps; your category can differ by 2–5x. Re-check the latest RevenueCat report before quoting numbers in a deliverable.

---

## 0. Point of view

1. **Optimize for revenue per install over 12 months net of refunds and chargebacks, not for paywall conversion.** A paywall that converts 20% more but refunds 30% more, or churns faster, is worse.
2. **The paywall is a product page, not a trap.** Its job is to make the value and the exact commitment unmistakable. Clarity converts the right users; confusion converts the wrong ones and they come back as refunds, chargebacks, and 1-star reviews.
3. **Cancellation must be as easy as signup.** This is the ethical floor and, in many jurisdictions, the legal one.

---

## 1. Hard vs soft (freemium) paywall

**Public benchmark data — RevenueCat "State of Subscription Apps" (SOSA):**
- SOSA 2025 (75k+ apps): median download-to-paid by day 35 ≈ **12.1% for hard-paywall apps vs ≈ 2.2% for freemium** **[moderate — large N, vendor, observational]**.
- SOSA 2026 (115k apps): hard paywall median ≈ **10.7%**, freemium ≈ **2.1%** **[moderate]**. But **Y1 retention is the same** (yearly 27% vs 28%; monthly 9% vs 8%) and refund rates are similar (2.5% vs 2.9%), so access model is a conversion/cash-flow choice, not a retention lever. (The 2025 secondary claim that hard paywalls refund more is not borne out in 2026.) → references/books/revenuecat-sosa-2026.md
- **Caveat on SOSA 2026 web edition:** it has internal inconsistencies (iOS vs Play D35 "2.9% vs 2.6%" in a summary vs "2.6% vs 0.9%" in the chart; the AI apps' "trial-to-paid" 8.5% vs 5.6% is actually trial start rate). Quote chart-level figures and say which one you used.

**Critical caveat:** observational. Apps that choose hard paywalls differ (category, ad spend, high-intent paid traffic, utility apps). This does *not* prove switching your app to a hard paywall multiplies revenue 5x. Freemium apps can win on total reach, virality, word of mouth, and long-tail conversion.

### Decision heuristic
Choose **hard paywall (no core use without paying/trial)** when:
- Value can be demonstrated *before* the paywall (onboarding shows the plan, preview, or result), and
- The product has high marginal cost (AI compute, human coaching, content licensing), or
- Acquisition is mostly paid with high-intent users.

Choose **freemium / soft paywall** when:
- Network effects or virality drive growth (collaboration, social, sharing).
- Value accrues over time (notes, storage, history) — users need time to build switching costs.
- The free tier is a genuinely useful product, not a crippled demo.

Hybrids: **reverse trial** (start with full premium for N days, then drop to free tier — popularized in SaaS growth writing, e.g., Elena Verna) **[weak/anecdotal]**; **metered** (N free uses/articles per month — news, AI apps); **usage paywall** (hit limit → upgrade).

---

## 2. Trials

### Trial length
- SOSA 2026: trials of **17–32 days** showed ≈ **42.5%** median trial-to-paid vs ≈ **25.5%** for trials **≤ 4 days** **[moderate, observational]**. SOSA 2025 reported a similar direction (≈45.7% for 17–32 day trials, secondary coverage) **[unverified exact]**.
- Caveat: longer trials are often used by apps with habit-forming value (fitness, language) and annual plans; short trials by utilities. Also, longer trials delay revenue and expose more users to forgetting to cancel — which inflates "conversion" in a way that may return as refunds or anger.
- **Heuristic:** trial length ≈ time needed to experience the core value at least 2–3 times. A meditation app's value needs a week; a photo-filter app's needs one session.

### Trial timing
- Most trial starts happen on **day 0** — SOSA 2026: 78–90% of trial starts on day 0 by category (Business 89.9%, Productivity 78%); 50.6% of paid conversions on day 0; 55.4% of 3-day-trial cancellations on day 0 **[moderate]**. Implication: the onboarding-end paywall is the single most important monetization screen. But don't let that crowd out a well-designed *second chance* paywall (after first value, at a usage limit, on day 3).

### Opt-in (no card) vs opt-out (card required) trials
- Commonly repeated SaaS data: card-required trials have far higher trial-to-paid (~50%+) but far fewer trial starts; no-card trials convert ~15–25% of a much larger pool (older Totango/ChartMogul-era analyses) **[weak, dated]**. Net revenue depends on traffic intent.
- On app stores, trials are typically opt-out by nature (store holds the payment method).

### Trial transparency (non-negotiable)
- Show **trial end date** ("You'll be charged $59.99 on 12 May unless you cancel") and **send a reminder before conversion** (e.g., 2–3 days before). Blinkist publicly described adding a trial-reminder timeline and reported fewer complaints and stable or better conversion (company blog, ~2018) **[weak/anecdotal]**; this pattern (a timeline: Today → Day 5 reminder → Day 7 charge) is now widely copied.
- Some app-store-level protections exist (Apple sends renewal emails for some subscriptions; check current policy) but do not rely on them.

---

## 3. Plan presentation

### Number of plans
- 2–3 plans is the practical norm on mobile; more options can increase deliberation. **Choice overload** (Iyengar & Lepper 2000 jam study) is **[contested]**: Scheibehenne, Greifeneder & Todd's 2010 meta-analysis found a mean effect near zero; Chernev, Böckenholt & Goodman 2015 found it appears under specific conditions (complex options, unclear preferences, time pressure). Practical reading: keep plans few *when they are hard to compare*.

### Default selection (annual pre-selected)
- Defaults are powerful: meta-analysis of default nudges (Jachimowicz et al., *Behavioural Public Policy*, 2019) found a substantial average effect (d ≈ 0.68) **[strong]**.
- App-specific claim: pre-selecting annual yields ~69% annual selection vs ~28% when monthly is default (attributed to Adapty 2025 data via a secondary article) **[unverified]**.
- **Ethical rule:** pre-selecting annual is acceptable *if* the total billed amount and term are equally visible as the monthly option and switching is one tap. It is a dark pattern if the default hides that the user is committing to a year.

### Price framing
- **Per-period equivalents** ("$4.99/month, billed $59.99 yearly") help comparison. **Apple's guidelines require the billed amount to be clear and prominent** — do not make "$1.15/week" larger than the real charge **[strong — policy; verify current App Review Guideline 3.1.2 wording]**.
- **Savings badges** ("Save 50%") relative to monthly price — accurate math only.
- **Charm pricing** (.99 endings): field experiments in mail-order catalogs found 9-endings increased demand (Anderson & Simester, *Quantitative Marketing and Economics*, 2003) **[moderate]**; effect varies by category; premium brands often use round numbers.
- **Anchoring / decoy:** the decoy effect (Huber, Payne & Puto 1982) is **[contested]** in realistic settings (Frederick, Lee & Baskin 2014 found weak/absent effects with perceptual/real stimuli). Ariely's *Economist* subscription anecdote is illustrative, not evidence. Compromise effect (people choose the middle option; Simonson 1989) **[moderate]**. Center-stage effect (Valenzuela & Raghubir 2009) **[moderate]**.
- **Weekly plans:** popular in some utility/AI categories (high price-per-year, low retention). SOSA reports weekly plans have the lowest retention of common durations **[moderate]**. Use with care; weekly plans aimed at users who won't notice recurring charges are ethically dubious.
- **Plan-duration benchmarks (SOSA 2026) [moderate]:** Y1 retention medians weekly ~1–2%, monthly 6–14%, yearly 20–40%; active renewal 18.7% / 39.2% / 83.4%. The **first renewal** is where users drop (renewal: weekly 35–58%, monthly 53–61%, annual 23–40%); survivors converge to ~74–85% by the third. On Google Play 32.2% of cancellations are billing errors (vs 15.2% App Store) — build billing-failure recovery (grace period, retry, in-app "update payment").

### Paywall content (what tends to work — mostly practitioner evidence)
- **Benefit-led headline tied to the user's stated goal** from onboarding ("Your 12-week Spanish plan is ready") **[weak/anecdotal, very consistent across vendors]**.
- **3–5 concrete benefits**, icons optional, no feature dumps.
- **Social proof** that is *real*: rating + count ("4.8 from 120k ratings"), press, or testimonial with attribution. Fabricated reviews are banned under the FTC's 2024 fake-reviews rule **[strong]**.
- **One primary CTA** with action + offer ("Start 7-day free trial"); secondary "Restore purchases" and "Terms/Privacy" visible.
- **Close button:** visible. Delayed or tiny "X" buttons are a known dark pattern and frequent cause of App Review rejection and user anger.
- **Paywall norms (SOSA 2026) [moderate — descriptive, not causal]:** two-plan layouts are the mode (41–60% of paywalls); countdown timers (≤1.4%) and progress bars (≤0.2%) are almost absent; only 9.3% of apps use promotional offers; median intro discount −50%. Intro offers bring 65–99% of new payers for hobby-tier apps vs 0–10% for top performers — high offer reliance is a warning sign, and −50% is a ceiling to test down from.
- Superwall testimonials report single-page paywalls beating multi-page, visual/feature-led beating text-heavy, and price increases sometimes *raising* proceeds per user **[weak/anecdotal — vendor testimonials, no sample sizes]**. Treat as test ideas.
- Adapty's 2026 analysis reports "annual plan, no trial" among the weakest setups by 1-year LTV in its dataset **[weak/moderate — vendor]**. Philips Pregnancy+ case study: trial variant ~140% more revenue than discounted control **[weak/anecdotal]**.

### Price testing
- Test price *levels* with revenue-per-visitor (or 12-month LTV) as primary metric, not conversion rate. Conversion almost always drops when price rises; revenue may not.
- Respect store rules: on iOS, price tests are usually run via different product IDs/offerings; you cannot show different prices for the identical product arbitrarily in some contexts. Localize prices by purchasing power (store price tiers + local testing).
- Run long enough to observe renewals for monthly plans (at least one renewal cycle) before declaring LTV winners. Early reads overweight first-payment conversion.

---

## 4. Paywall placement

| Placement | Strength | Risk |
|---|---|---|
| End of onboarding | Highest intent; most trial starts are day 0 | Seen before real value; refunds if expectations mismatch |
| Feature gate (tap premium feature → paywall) | Contextual, high relevance | Users feel teased if too many locks |
| Usage limit (N free uses) | Value proven first | Limit tuning is hard; too generous = no conversion |
| Session N / day N re-offer | Second chance for undecided | Nagging; cap frequency |
| Abandoned-transaction offer | Recover failed or cancelled purchase | Discount training |
| Cancellation flow offer | Save churners (pause, downgrade, discount) | Becomes obstruction if it blocks cancel |

**Rule:** a dismissed paywall should not reappear in the same session unless the user takes a premium action.

---

## 5. Pricing pages (web/SaaS)

Practitioner consensus, mostly **[weak/anecdotal]** but consistent (Price Intelligently/ProfitWell writing, Patrick Campbell; Stripe Atlas guides; Kyle Poyar / OpenView):
1. **3–4 tiers** max, named by audience/use (Free / Pro / Team / Enterprise), with one **"Most popular"** highlight (compromise + center-stage effects).
2. **Monthly/annual toggle** defaulting to annual with honest savings ("2 months free"). Show both prices clearly.
3. **Value metric** (per seat, per usage, per project) that scales with customer value. Wrong value metric is the most expensive pricing mistake (Campbell, ProfitWell, various talks) **[weak/anecdotal]**.
4. **Feature comparison table** below the fold; above the fold: tier name, price, one-line who-it's-for, 3–5 key differentiators, CTA.
5. **"Contact sales" only for enterprise**; never hide all prices (users interpret it as expensive and lose trust).
6. **FAQ** addressing billing, cancellation, refunds, data export — objections answered near the CTA.
7. **Free tier or trial CTA** visually distinct from paid.
8. **Currency localization** and tax clarity (incl./excl. VAT).

Anti-patterns: tiers differing on 40 checkmarks nobody reads; asterisks hiding limits; "Starting at $X" when X isn't really purchasable; price increases with no grandfathering communication.

---

## 6. Upgrade prompts inside the product

- Trigger on **demonstrated need** (hit storage limit, invite 4th teammate, export in HD), not on a timer.
- Show what they get *right now* ("Unlock this export in 4K") with a preview of the premium result where possible (watermarked output, blurred insight).
- Respect "No thanks": cooldown period; never block the free task that was already allowed.

---

## 7. Cancellation, retention offers, and the ethical/legal floor

**Legal context (verify current status before advising):**
- FTC "Click-to-Cancel" (Negative Option) Rule finalized in 2024 was **vacated by the 8th Circuit in July 2025** on procedural grounds; however ROSCA, FTC Act §5, and state auto-renewal laws (e.g., California's, amended to require online cancellation) still apply **[strong — legal reporting]**.
- FTC actions: Epic Games (2022, $245M refunds over dark patterns in purchases) **[strong]**; Amazon Prime case (FTC complaint 2023 over enrolment and the "Iliad" cancellation flow; Amazon agreed to a reported $2.5B settlement in Sept 2025) **[strong — reported; verify details]**.
- EU: Digital Services Act Art. 25 prohibits deceptive interface design on online platforms; EU consumer law and the UK's DMCC Act 2024 cover subscription traps **[strong — statutes; check scope]**.
- FTC staff report "Bringing Dark Patterns to Light" (Sept 2022) catalogues subscription traps, hidden costs, and obstruction **[strong as regulatory guidance]**.

**Design rules:**
1. Cancel path discoverable from account/settings in ≤ 3 taps/clicks; on iOS, deep-link to the system subscription management page.
2. One retention offer (pause, downgrade, discount) maximum, then cancel proceeds. No forced chat with an agent, no multi-page guilt.
3. Ask *why* (one optional question) — the single richest churn-research dataset you'll get.
4. Confirm cancellation clearly with end-of-access date.
5. Pause options often save a meaningful share of churners in seasonal categories (fitness, education) **[weak/anecdotal]**.

**Evidence that dark patterns "work" (and why that's not permission):** Luguri & Strahilevitz ("Shining a Light on Dark Patterns", *Journal of Legal Analysis*, 2021) found mild dark patterns roughly doubled acceptance of a dubious subscription offer vs control, and aggressive ones raised it further — while aggressive versions triggered backlash **[moderate — large online experiment]**. Mathur et al. (Princeton, CSCW 2019) found ~1,800 dark-pattern instances across ~11k shopping sites **[strong]**. So: dark patterns produce short-term conversion; the skill's position is that this is borrowing against trust, legal exposure, and refunds, and we don't do it.

---

## 8. Paywall experiment cookbook (in priority order)

1. **Offer structure** (trial vs no trial, trial length, plan durations) — largest effects in vendor data.
2. **Price level** by country.
3. **Default plan** and plan order.
4. **Placement and timing** (onboarding-end vs post-value vs both).
5. **Headline / benefit framing** tied to user's goal.
6. **Social proof and trust elements.**
7. **Visual design details** (colors, layouts) — usually smallest effects; test last.

Primary metric: revenue per install (or per paywall view) at a fixed horizon (e.g., D30 proceeds, ideally projected 12-month LTV). Guardrails: refund rate, trial cancellation rate within 24h (signal of accidental/regretted starts), D30 retention, support tickets, store rating.

**Red flag:** high trial-start rate + high same-day trial cancellation = users feel tricked or were confused. Fix clarity, don't celebrate.

---

## 9. Quick myths list

- "Always pre-select the most expensive plan" — only ethical and effective if the commitment is clear; otherwise drives refunds. **[myth as universal rule]**
- "Red CTA buttons convert better" — no universal color effect; contrast and clarity matter. **[myth]**
- "Removing the close button raises conversion" — may raise taps, raises rejections, refunds, and hatred. **[myth/unethical]**
- "Price ending in .99 always wins" — category-dependent. **[contested]**
- "Hard paywalls convert 5x better so switch" — observational, confounded. **[myth as causal claim]**
