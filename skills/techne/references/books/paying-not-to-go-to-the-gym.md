---
title: "Paying Not to Go to the Gym"
author: "Stefano DellaVigna, Ulrike Malmendier"
year: 2006
domains: [psychology, data-driven, pricing, subscriptions, ethics]
evidence: "strong"   # large real-world panel, clean measurement; the mechanism (naive overconfidence) is inferred, not proven
---

# Paying Not to Go to the Gym — DellaVigna & Malmendier

Use this when: designing a plan picker (flat-rate vs pay-per-use vs annual); designing auto-renew, trials or cancellation; reading retention data for an auto-renewing subscription; estimating demand or "value" from which plan users chose; someone argues that low-usage subscribers are fine because "they chose it".

Source: https://eml.berkeley.edu/~ulrike/Papers/gym.pdf (published AER 96(3), 2006, pp. 694–719, posted on co-author Ulrike Malmendier's Berkeley faculty site). Legal basis: author self-archived copy. Read in full.

## The big idea (3 sentences)
Using billing and day-by-day attendance records for 7,752 members of three New England health clubs (1997–2001), the authors show that people systematically pick contracts that are bad for them given how they actually behave: monthly members paying over $70 visit about 4.3 times a month, i.e. over $17 a visit when a $10 ten-visit pass was available. Members of the auto-renewing monthly plan are also slower to quit, leaving about 2.3 months between their last visit and cancellation and making them more likely to still be enrolled after a year than members whose annual plan simply expires. The best single explanation is overconfidence: people overestimate both how much they will use the product and how promptly they will cancel, and firms' contract designs (flat fees, auto-renewal, small friction to cancel) are well suited to profit from that.

## Core concepts
- **The menu** — monthly contract (auto-renews until cancelled in person or in writing), annual contract (ten times the monthly fee, expires unless renewed, with a reminder card), and pay-per-visit ($12, or $100 for ten).
- **Finding 1: overpaying for flat rate** — unsubsidised monthly members pay $17.27 per average visit in months 1–6; annual members $15.22. Only about 20% (monthly) and 24% (annual) pay under $10 a visit. Average forgone saving: about $614 per membership, 43% of the ~$1,423 spent.
- **Finding 2: sorting works a bit** — annual joiners attend ~10% more in months 2–4, so people do have some insight into their own type.
- **Finding 3: forecasts are double reality** — in a small mall survey (n = 48), gym members forecast 9.5 visits next month vs the ~4.2 actually observed in the data (different samples, so indicative only). Given realistic attendance, most respondents said they'd take the ten-visit pass.
- **Finding 4: cancellation lag** — on average 2.31 full months (~$187 in fees) between last visit and termination; 20% wait 4+ months. A rational model with a cancellation cost under $15 predicts a delay of days, not months.
- **Finding 5: the default flips retention** — after ~14 months, monthly-plan joiners are about 17% more likely (relative) to still be enrolled than annual joiners (+4.8 to +6.6 pp on a ~40% base), despite paying more for the right to leave each month. Annual expiry acts as a free exit.
- **Findings 6–7: opposite dynamics** — annual stayers attend more in year 2 (low users drop out at expiry); monthly stayers attend less over time (low users linger).
- **Finding 8: one trait drives both** — people who overpay per visit early also have longer cancellation lags, suggesting a single underlying overconfidence.
- **Explanations tested** — risk aversion, transaction costs, "membership feels virtuous", mean-reverting enthusiasm, forgetting, and sophisticated present bias each fail to explain all findings. Partially naive present bias (people who know they procrastinate but underestimate how much) fits all of them; calibrated at β ≈ 0.7 it reproduces the 60+ day lag and the 20% share waiting over 4 months. Overestimating future efficiency fits too. Salesperson persuasion explains some findings but not the forecasts.
- **Informed users still overpay** — HMO members who were explicitly shown both a discounted flat rate and a $6 per-visit option still paid $10.31 per visit on flat rate.
- **Firm side** — profit-maximising contracts for overconfident consumers price usage below cost, charge a flat fee, and auto-renew with a small cancellation cost; Boston-area clubs use exactly that design.
- **Inference warning** — reading preferences from chosen plans under rational expectations would have implied members go twice a week; they don't.

## Actionable heuristics for product design
- When a plan picker offers flat-rate vs pay-as-you-go, show each user's expected cost per use based on *actual* usage of similar users (or their own history), because people pick plans using an inflated forecast of their own usage.
- When a subscriber has stopped using the product, tell them (usage summary, "you haven't used X in 30 days — pause or cancel?") and offer a one-tap pause or downgrade, because the paper shows months of paid non-use driven by procrastination, not by choice; this builds trust and is increasingly a legal expectation.
- When you compare retention across plan types, do not read higher monthly-plan survival as "more loyal" or "more value", because auto-renew plus cancellation friction alone can produce higher survival among people who no longer use the product.
- When reporting subscription health, track active usage among paying users (e.g., paid-but-inactive share, days since last use) alongside churn, because revenue from paid non-use is fragile and is exactly what regulators and refunds target.
- When designing a trial or annual plan, consider letting term-limited plans expire by default or send a pre-renewal reminder, because the annual plan's automatic expiry is what cut lingering non-users here.
- When using chosen plan or stated intent to size demand or forecast engagement, discount it heavily, because choices and forecasts reflect overconfident self-prediction (9.5 forecast vs ~4 actual).
- When onboarding a habit product (fitness, learning, wellbeing), deliver value in the first sessions and help users schedule the next use, because attendance decays after sign-up enthusiasm and present bias makes the effortful action lose to "later".
- When someone proposes adding friction to cancellation "because users can always leave", reject it, because the study shows a small cancellation cost (in person or by letter) yields months of extra payment from inactive users, which is the mechanism behind subscription-trap dark patterns.
- When offering commitment devices (annual prepay, streaks, pledges), make the commitment and its exit explicit, because demand for commitment is real for some users but naive users overestimate how much it will change their behaviour.
- When an A/B test shows a plan, price or flow "wins" on revenue, check refund-adjusted, 12-month value and the paid-but-inactive share in each arm, because a variant can win by recruiting more people who will pay without using.
- When you add a usage-based or credit-pack option, keep it as simple to buy and use as the subscription (same card, same entry), because the authors rule out transaction cost only because the ten-visit pass was easy; if pay-per-use is a hassle, users will be pushed into flat rates for that reason alone.
- When a user upgrades or prepays, show a short honest "people like you typically use this N times a month" check, because even well-informed users in the paper still chose the costlier flat rate; a plain comparison is the minimum fair disclosure.
- When you design a cancellation flow, measure the gap between last meaningful use and cancellation as a health metric, and treat a growing gap as a defect, because in this data the gap is where users lose money they did not intend to spend.

**Quick numbers to remember:**
| Measure | Value |
|---|---|
| Members / clubs / years | 7,752 / 3 / ~3 |
| Price per average visit, monthly plan (months 1–6) | $17.27 vs $10 per-visit alternative |
| Share who would have saved on pay-per-visit | ~80% (monthly), ~76% (annual) |
| Average forgone saving per membership | ~$614 (43% of spend) |
| Forecast vs actual monthly visits | 9.5 vs ~4.2 |
| Last visit → cancellation (monthly) | 2.31 months, ~$187; 20% wait 4+ months |
| Survival after ~14 months, monthly vs annual joiners | ~17% higher (relative) for monthly |

## Evidence & caveats
- Strong measurement: real billing records and staff-swiped attendance (high recording accuracy, day-of-week dummies explain ~88% of daily variance), clear menu with a dominated option for most users, many robustness checks.
- Limited scope: three clubs in one US region, late 1990s; in-person or written cancellation, which is more friction than one-tap app-store cancellation. Magnitudes will differ for digital subscriptions; the direction is widely corroborated (subscription trap research, regulator actions).
- Pay-per-visit users' attendance is not observed, so the counterfactual saving assumes the same visits; the authors note this understates the saving.
- The forecast evidence is a 48-person mall survey in another state, not the club members: suggestive only.
- The mechanism is inferred by elimination and calibration; "overestimating future efficiency" and naive present bias are not separately identified, and salesperson persuasion is not ruled out for every finding.
- Some benefit of commitment is real: a flat fee may raise attendance for some people, so not all overpayment is pure loss.

## Disagreements with other references
- `references/psychology/behavior-pricing-and-choice.md` §4.1 cites this paper accurately (~$70/month, ~4 visits, ~$17 per visit, slow to cancel). This file adds the retention reversal (monthly beats annual survival by ~17% relative) and the 2.3-month lag, which strengthen its "required counter-design" for trial reminders and one-tap cancel.
- `references/data-driven/conversion-paywalls-pricing-subscriptions.md` recommends defaulting the toggle to annual with honest savings. This paper suggests annual plans that *expire or remind* are also more user-protective than monthly auto-renew; the two agree on transparency. Where a vendor benchmark claims monthly plans "retain better", check whether that's cancellation inertia before trusting it.
- `references/psychology/behavior-persuasion-toolkit.md` notes nudges shrink in the field (DellaVigna & Linos 2022); this paper is the opposite case, a large field effect, because it measures money lost to inertia, not a nudge effect.
- `references/psychology/behavior-law-consent-cancellation.md` covers ROSCA and auto-renewal laws; this paper is the behavioural evidence for why those rules exist.

## Best quotes (< 25 words each, max 5)
- "They pay a price per expected visit of more than $17, even though they could pay $10 per visit using a 10-visit pass."
- "Overconfident agents overestimate attendance as well as the cancellation probability of automatically renewed contracts."
- "monthly members pay higher fees for the option to cancel each month."

## Related
- `references/psychology/behavior-pricing-and-choice.md` (present bias, subscription traps)
- `references/data-driven/conversion-paywalls-pricing-subscriptions.md` (plan pickers, trials, cancellation)
- `references/psychology/behavior-law-consent-cancellation.md` (ROSCA, auto-renewal laws)
- `references/books/deceptive-patterns-brignull.md` (subscription traps)
- DellaVigna & Malmendier, "Contract Design and Self-Control", QJE 2004; O'Donoghue & Rabin, "Choice and Procrastination", QJE 2001
