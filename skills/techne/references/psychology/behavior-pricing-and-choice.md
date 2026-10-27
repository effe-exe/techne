# Behavior: Pricing Psychology, Choice Sets & Paywalls

Use this when: designing pricing pages, paywalls, plan pickers, trials, upgrade/downgrade flows, checkout, bundles, or any screen presenting a set of options.
Use this when: someone proposes "fewer options," "add a decoy," "charm prices," "annual default," or "show savings" and you need evidence and limits.
Use this when: deciding how many items/plans to show, what to preselect, and how to frame recurring costs honestly.

---

## 0. Point of view

- **The price the user sees must be the price the user pays**, shown before commitment, in the unit they'll be billed in. Everything else is optimization within that constraint.
- **Choice-set design is mostly about decision difficulty, not count.** "Fewer options always converts better" is an over-simplification of a contested literature.
- **Monetization that relies on users forgetting, misreading or being unable to leave is borrowed revenue** - it is repaid in chargebacks, refunds, store penalties, regulator fines and brand damage.

---

## 1. Choice overload: the jam study and what happened next

**Original:** Iyengar & Lepper, *JPSP*, 2000. Supermarket tasting booth: 24 jams vs 6 jams. 60% of passers-by stopped at the 24 display vs 40% at the 6; but ~3% of those who stopped at 24 bought vs ~30% at 6. Also replicated in their chocolate and essay studies. Evidence then: [moderate, single lab].

**Replication & meta-analysis:**
- Scheibehenne, Greifeneder & Todd, *J. Consumer Research*, 2010: meta-analysis of 50 experiments (N ≈ 5,000). **Mean effect ≈ zero** (d ≈ 0.02) with large heterogeneity: some studies show overload, some show more choice is better [strong that the average effect is ~0].
- Chernev, Böckenholt & Goodman, *J. Consumer Psychology*, 2015: meta-analysis of ~99 effects; overall effect small, but **reliable when four moderators are present** [strong]:
  1. **Choice-set complexity** - options hard to compare, many attributes, no dominant option.
  2. **Decision-task difficulty** - time pressure, high accountability, complex presentation.
  3. **Preference uncertainty** - user lacks a clear ideal point or expertise.
  4. **Decision goal** - user must choose (commit) rather than browse.
- Status: the jam study is a **widely over-cited finding**. Do not cite it as "more options kill conversion." Cite it as "overload can occur under specific conditions."

**Agent heuristics**
- Many options are fine (even preferred) when users know what they want and you give strong filtering/search (e-commerce catalogs, music libraries).
- Reduce or structure options when: users are novices, options differ on many attributes, the decision is consequential (plans, insurance), or they must commit now.
- Tools before cutting: sensible default/recommended option, categorization (Mogilner, Rudnick & Iyengar, *JCR*, 2008: categories reduce overload, even meaningless ones) [moderate], progressive disclosure, comparison tables with aligned attributes, a "help me choose" quiz.
- Pricing plans: 3 tiers is a common pattern; 2-4 is the usual range. Evidence for "3 is optimal" is [weak/anecdotal] - mainly practitioner A/B reports. Test it.
- **Myth flag:** Miller's "7 ± 2" (1956) is about short-term memory span for unrelated items, not menu or plan count. Later work suggests ~4 chunks (Cowan, 2001). It does not prescribe navigation size.

---

## 2. Context effects on option sets

### 2.1 Decoy / asymmetric dominance (attraction effect)
- Huber, Payne & Puto, *J. Consumer Research*, 1982: adding an option that is clearly worse than target A (but not than B) increases A's share [moderate-strong in lab].
- Famous example: Ariely, *Predictably Irrational*, 2008 - The Economist subscription (web $59 / print $125 / print+web $125). With the dominated print-only decoy, 84% of MIT students chose print+web; without it, 68% chose web-only. Classroom demo, n ≈ 100 [weak]. Note: Ariely's work has faced credibility concerns (a 2012 PNAS honesty study he co-authored was retracted in 2021 over fabricated data, unrelated to this demo). Prefer primary decoy literature.
- Frederick, Lee & Baskin, *J. Marketing Research*, 2014: attraction effect often weak or absent with realistic, pictorial or qualitative stimuli; Huber, Payne & Puto (2014 reply) say it holds when dominance is clear and attributes numeric [contested].
- **Agent rule:** a "decoy" tier is acceptable only if it is a real, purchasable option someone could rationally want, not a phantom built to look bad. Best practice is simpler: make the recommended plan genuinely the best value for most users and label it honestly.

### 2.2 Compromise effect (extremeness aversion)
- Simonson, *J. Consumer Research*, 1989: people disproportionately choose middle options [strong, widely replicated].
- Implication: the middle tier attracts share. Put your genuinely-best-for-most plan there; don't put a bad-value plan in the middle to exploit the effect.

### 2.3 Anchoring in tier order
- Showing the highest tier first (left on desktop, top on mobile) can raise average order value via anchoring [moderate in lab; practitioner A/B reports weak]. Accessibility check: the order must also make sense read linearly by screen readers.
- Reference prices ("was $99, now $49") must be genuine. EU: Price Indication Directive Art. 6a (added by Omnibus Directive 2019/2161, applies since May 2022) requires the prior price to be the lowest price in the 30 days before the reduction [strong - law].

### 2.4 The zero-price effect
- Shampanier, Mazar & Ariely, *Marketing Science*, 2007: dropping both prices by 1 cent so one becomes free shifts choice disproportionately to the free item [moderate].
- Implication: "free" is a categorical shift. Free tiers/trials attract strongly - which is exactly why "free" that silently converts to paid is so harmful.

---

## 3. Price presentation

### 3.1 Charm / left-digit pricing
- Thomas & Morwitz, *J. Consumer Research*, 2005: left-digit effect - $2.99 perceived meaningfully lower than $3.00 when the left digit changes [strong in lab].
- Anderson & Simester, *Quantitative Marketing and Economics*, 2003: mail-order catalog field experiments; a dress priced $39 outsold the same dress at $34 and $44 [moderate, field].
- Round prices fit "feeling"/premium/hedonic decisions, precise or .99 prices fit "value"/utilitarian (Wadhwa & Zhang, *JCR*, 2015) [moderate].
- **Agent heuristic:** for a premium/brand-led product, round prices ($10, $100) signal quality and simplicity; for value-oriented products, charm prices are acceptable. Charm pricing is not deceptive per se (the price is fully shown). Store-tier constraints (App Store price points) often decide for you.

### 3.2 Temporal reframing ("pennies a day")
- Gourville, *J. Consumer Research*, 1998: expressing an annual cost as a small daily amount increases compliance for modest amounts [moderate]; for large amounts, the reframing can backfire.
- Rule: per-day/per-month equivalents are fine **alongside** the total actually billed, in at least equal clarity. Never let "$0.27/day" hide "$99 billed today."

### 3.3 Annual vs monthly framing
Legitimate patterns:
- Show the monthly equivalent of the annual plan ("$5/mo, billed $60 yearly") with the billed amount in the same visual weight or one step below - never only in fine print.
- State the saving accurately ("Save 17%" or "2 months free" vs. 12 × monthly).
- Default selection: preselecting annual is common and lawful in most jurisdictions if clearly shown, but **ask the reflective-endorsement question**: would most users choosing this plan be glad on renewal day? If annual drives high refund requests or regret, default to monthly or offer a clear toggle with no preselection.
- Payment depreciation: Gourville & Soman, *J. Consumer Research*, 1998 / HBR 2002: prepaid annual members' usage declines over the year as the payment fades, then they lapse at renewal; monthly payers' usage stays steadier [moderate]. Design implication: annual plans need ongoing value reminders and pre-renewal notices, not silent renewal.

### 3.4 Pain of paying & payment mode
- Prelec & Loewenstein, *Marketing Science*, 1998 ("The red and the black"): separating payment from consumption reduces pain; flat rates feel better than meters ("taxi-meter effect") [moderate].
- Prelec & Simester, *Marketing Letters*, 2001: willingness to pay higher with credit cards than cash for sports tickets [moderate; magnitude contested in replications].
- Implication: subscriptions and stored payment reduce pain of paying - which is also why they need extra transparency (receipts, usage summaries, renewal reminders).

### 3.5 Drip pricing and hidden fees
- Blake, Moshary, Sweeney & Tadelis, *Marketing Science* / NBER, 2021 (StubHub field experiment): users shown fees only at checkout spent ~21% more and were ~14% more likely to buy than users shown all-in prices [strong field]. This is the empirical case for why drip pricing works - and why regulators ban it.
- US FTC Rule on Unfair or Deceptive Fees (final Dec 2024, effective 12 May 2025) requires all-in pricing for live-event tickets and short-term lodging [strong - law; scope narrower than proposed]. EU: hidden costs are a misleading omission under the UCPD, and the CRD requires total price before ordering.
- **Rule:** show the total (taxes/mandatory fees included where possible; otherwise "plus tax" clearly) at first price display.

---

## 4. Present bias, mental accounting, sunk cost

### 4.1 Present bias / hyperbolic discounting [strong]
- Laibson, *QJE*, 1997; O'Donoghue & Rabin, *AER*, 1999. People overweight immediate costs/benefits.
- DellaVigna & Malmendier, *AER*, 2006, "Paying Not to Go to the Gym": monthly-contract members paid ~$70/mo, averaged ~4 visits, ~$17 per visit, when a $10 per-visit pass existed; and they were slow to cancel [strong field].
- Product implications:
  - Ethical use: deliver value now (instant result, aha moment in session one), make the beneficial future action easy to schedule now (commitment).
  - Exploitative use (never): free trials that auto-renew without reminders, relying on users' predictable failure to cancel. That is the core of "subscription traps."
  - **Required counter-design:** trial-end reminder 2-3 days before charge (Apple and Google show subscription management; EU/US state laws increasingly require notices - e.g., California's Automatic Renewal Law amendments effective 1 July 2025 require consent, annual reminders and click-to-cancel) [law - verify current text], one-tap cancel during trial, "remind me before trial ends" opt-in toggle in the trial screen.

### 4.2 Mental accounting [strong]
- Thaler, *Marketing Science*, 1985; "Mental Accounting Matters," *J. Behavioral Decision Making*, 1999. People budget in categories, treat windfalls differently, and evaluate gains/losses in separate accounts.
- Hedonic editing (Thaler 1985): segregate gains ("you get X, Y, and Z"), integrate losses (one combined charge feels better than several). Bundles leverage this.
- Credits/coins: virtual currencies decouple spending from money and can obscure real cost. **Rule:** always show the real-money equivalent of virtual currency; never sell coin packs that leave unusable remainders by design (a deceptive pattern flagged in EU CPC network "Key principles on in-game virtual currencies," 2024).

### 4.3 Sunk cost [moderate]
- Arkes & Blumer, *OBHDP*, 1985: prior investment increases persistence. Can be used to remind users of real accumulated value at cancellation ("you've saved 340 notes" - true), never to shame.

---

## 5. Paywall and plan-picker design checklist

Clarity
- [ ] Price, billing period and total billed today visible without scrolling on the paywall.
- [ ] What happens at trial end: date, amount, how to cancel - stated before the "Start trial" button.
- [ ] Plan differences in aligned comparison rows (same attribute order across tiers).
- [ ] A recommended plan labeled with an honest reason ("Most popular with teams of 5-20" only if true).

Control
- [ ] Close / "Not now" is visible, adequately sized (≥ 44×44 pt iOS / 48×48 dp Android), and labeled - no tiny grey X with delayed appearance.
- [ ] No preselected add-ons, insurance or donations.
- [ ] Trial reminder offered or sent automatically.
- [ ] Downgrade and cancel paths exist in settings and are no harder than upgrade.

Persuasion (legit)
- [ ] Value framed in user outcomes ("Unlimited exports for your client work").
- [ ] Real social proof (ratings, testimonials with names/roles, user counts) - auditable.
- [ ] Contextual triggering: show the paywall at the moment of experienced value or a real limit, not on cold launch with no context.
- [ ] Real deadline only (launch discount expiring on a stated date, applied consistently to everyone).

Measurement
- [ ] Primary: paid conversion; guardrails: refund rate, 7-day cancellation, store complaints, support tickets, D30 retention of converters.
- [ ] Segment results by new vs existing, platform, country (legal regimes differ).

---

## 6. Worked example: annual-plan default test

Proposal: preselect annual on the paywall (monthly visible as second option).
1. Ethics pre-check: both prices and the billed annual total visible? Yes. Users can switch with one tap? Yes. Reminder before renewal? Add if missing.
2. Hypothesis: preselection raises annual share via default effect; risk: more refunds from users who didn't notice.
3. Metrics: primary = 12-month projected revenue per paywall view; guardrails = refund requests within 14 days, "accidental purchase" support tags, store refund rate.
4. Decision rule: ship only if revenue lift holds AND refund/complaint guardrails don't worsen beyond a pre-registered threshold (e.g., not more than +0.5 pp refund rate).
5. If guardrails worsen: the default is extracting from inattentive users - revert and try honest alternatives (clear "Save 40%" badge, toggle with no preselection, annual offered after week-1 value).

---

## 7. Anti-patterns (and the honest swap)

| Anti-pattern | Why it fails | Honest swap |
|---|---|---|
| "$0.99/week" headline, $51.48 yearly in footnote | Deceptive framing, store rejection risk, refunds | Show yearly total with equal weight |
| Fake "was" price | Illegal in EU (30-day rule), deceptive | Real launch price with real end date |
| Phantom decoy tier nobody can buy | Deceptive comparison | Real tiers; honest "best for most" label |
| Delayed or hidden close button on paywall | Obstruction, rage-quits, 1-star reviews | Immediate visible close |
| Free trial that requires card and auto-renews silently | Subscription trap; ROSCA/UCPD exposure | Reminder + 1-tap cancel; or no-card trial |
| Coin packs misaligned with item prices | Obscures real cost | Show money equivalent; packs that match item prices |
