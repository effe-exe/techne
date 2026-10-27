# Behavior: Ethics, Deceptive Patterns & the Manipulation Test

Use this when: any design changes what users choose, pay, consent to, share, or how long they stay - and ALWAYS alongside `behavior-persuasion-toolkit.md` or `behavior-pricing-and-choice.md`.
Use this when: reviewing a flow (signup, paywall, cancellation, cookie banner, notifications, checkout, account deletion) for dark patterns, or when a stakeholder asks for one.
Use this when: you need an ethical alternative that still meets the business goal, or need to push back with evidence.

---

## 0. The stance (non-negotiable for the agent)

1. **The agent does not design deceptive patterns.** Not as "a test," not "just for this market," not "because competitors do." If asked, it says no, explains the harm and legal exposure in one short paragraph, and proposes the strongest honest alternative that targets the same metric.
2. **Persuasion is welcome; manipulation is not.** Persuasion works through the user's reasoning (true information, clear choices, real value, well-timed prompts). Manipulation works around it (hidden influence, exploiting a bias or vulnerability, deception, coercion).
3. **Symmetry is the default ethic:** leaving, declining, rejecting and deleting must be no harder than joining, accepting, consenting and creating.
4. **Truth is binary.** Urgency, scarcity, social proof, reviews, prices and progress must be literally true at the moment they're shown.
5. **Vulnerable users raise the bar:** minors, people in financial distress, health contexts, grief, addiction-prone mechanics (gambling-like rewards), cognitive impairment, low digital literacy, non-native speakers.
6. **Business reality:** dark patterns do lift short-term metrics (see Luguri & Strahilevitz below). That is exactly why the stance must be explicit. The agent argues on long-term value, trust, retention, store policy and law - and it's right on all four.

---

## 1. Definitions worth citing

- **Dark patterns / deceptive patterns:** term coined by Harry Brignull, 2010; catalog now at deceptive.design (Brignull, *Deceptive Patterns*, book, 2023). Brignull moved from "dark" to "deceptive" for clarity.
- **Manipulation:** "hidden influence" that covertly subverts decision-making by exploiting vulnerabilities, so people cannot recognise the choice as fully their own (Susser, Roessler & Nissenbaum, "Online Manipulation: Hidden Influences in a Digital World," *Georgetown Law Technology Review*, 2019). It needs no lie, and it can occur **even when the person ends up where they would have chosen anyway** — the harm is to the decision process and autonomy, not only to outcomes. Targeting (individually adaptive "hypernudging") makes it worse. → references/books/online-manipulation-susser.md Sunstein ("Fifty Shades of Manipulation," *J. Marketing Behavior*, 2016): manipulation fails to sufficiently engage or appeal to people's capacity for reflection and deliberation.
- **Dark-pattern attributes** (Mathur, Mayer & Kshirsagar, "What Makes a Dark Pattern... Dark?", *CHI* 2021): **asymmetric, covert, deceptive, information-hiding, restrictive, disparate treatment.** (The 2019 "Dark Patterns at Scale" paper had the first five; *disparate treatment* was added in 2021.) Evaluate harms through four lenses: individual welfare, collective welfare, regulatory objectives, autonomy.
- **Taxonomy of strategies** (Gray, Kou, Battles, Hoggatt & Toombs, *CHI* 2018): nagging, obstruction, sneaking, interface interference, forced action.
- **Ethical nudging criteria** (Thaler, "The Power of Nudges, for Good and Bad," *NYT*, 2015): transparent and not misleading; easy to opt out ("one click"); strong reason to believe it improves welfare of those nudged.

---

## 2. Evidence: how common, how effective

- **Mathur et al., "Dark Patterns at Scale," *CSCW* 2019** [strong]: crawled ~53K product pages from ~11K shopping sites; found 1,818 dark-pattern instances on 1,254 sites (~11%), 15 types in 7 categories (sneaking, urgency, misdirection, social proof, scarcity, obstruction, forced action). 183 sites showed outright **deceptive** claims: 157 of the 393 countdown timers (on 140 sites, ~40%) reset or the offer survived expiry; 29 activity messages on 20 sites were randomly generated or hard-coded. Low-stock and high-demand messages shown on nearly every product (38 of 47 high-demand messages appeared regardless of product) count as patterns even where the claim isn't proven false. → references/books/dark-patterns-at-scale.md Identified 22 third-party vendors selling dark patterns as plug-ins. More popular sites were more likely to use them.
- **Di Geronimo et al., *CHI* 2020** [moderate]: 95% of 240 popular Android apps contained at least one dark pattern (avg ~7); most users did not notice them.
- **European Commission, behavioural study on unfair commercial practices in the digital environment, 2022** [moderate]: 97% of the most popular EU websites/apps examined used at least one dark pattern. EU CPC "sweep" 2022: ~148 of 399 online shops used at least one of fake countdowns, hidden information or interface steering [moderate].
- **Luguri & Strahilevitz, "Shining a Light on Dark Patterns," *J. Legal Analysis*, 2021** [strong, preregistered, US national sample ~2,000]: acceptance of a dubious paid "data protection" plan was 11.3% in control, 25.4% with mild dark patterns, 37.2% with aggressive ones, treating drop-outs as rejecting (as Brignull 2023 reports; excluding drop-outs gives 25.8% / 41.9%). State the denominator; cite the conservative figures [primary paper not re-read]. Mild patterns produced little backlash in measured mood - which makes them more insidious, not less. Aggressive patterns produced anger and backlash. Less-educated users were more susceptible.
- **Nouwens et al., "Dark Patterns after the GDPR," *CHI* 2020** [strong]: only ~11.8% of UK top-site consent management platforms met minimal GDPR requirements; removing "reject all" from the first layer increased consent by ~22-23 pp - showing interface design, not preference, drives "consent."
- Takeaway for stakeholders: dark patterns work in the short term because they bypass choice; the "consent" or "purchase" they produce is not real preference data. Building product decisions on it corrupts your own analytics.

---

## 3. The persuasion-vs-manipulation test (apply to every persuasive element)

Run all nine (including 6b). Any "fail" = redesign. Any "unsure" = escalate / test with users.

1. **Transparency test:** Would it still work if we explained exactly what we're doing on screen? ("We highlighted annual because most users save money with it" -> fine. "We hid the close button so you'd upgrade" -> fail.)
2. **Truth test:** Is every claim (number, deadline, stock, rating, "most popular," "free") literally true now, for this user?
3. **Reflective-endorsement test:** Would the typical user, a week later, with full information, be glad this happened? Proxy metrics: refunds, regret churn, complaints.
4. **Symmetry test:** Is the opposite choice (decline, cancel, reject, delete, unsubscribe) equally visible, equally sized, equally few steps, same channel?
5. **Reversibility test:** Can the user undo it easily and without penalty?
6. **Vulnerability test:** Does it disproportionately work on people who are young, distressed, rushed, less literate, or addiction-prone? If yes, remove it or protect those segments.
6b. **Targeting test:** Does the influence adapt to an inferred *individual* vulnerability or state (mood, fatigue, financial stress, susceptibility profile, timing)? Susser et al. treat targeting as what makes manipulation worse; personalised pressure needs a stronger justification than the same element shown to everyone.
7. **Newspaper / regulator test:** Would we be comfortable seeing a screenshot in a news story, an FTC complaint, or an EU enforcement decision? (They exist - see `behavior-law-consent-cancellation.md`.)
8. **Own-family test:** Would the designer be comfortable if their parent or child encountered this flow?

Score reporting format the agent should produce for reviews:
```
Element: "Only 2 left!" badge on PDP
Truth: FAIL (static string, not tied to inventory)
Transparency: FAIL | Symmetry: n/a | Vulnerability: medium
Verdict: Deceptive (fake scarcity). Replace with live inventory count shown only when stock < N, or remove.
```

---

## 4. Catalog: deceptive pattern -> what it is -> ethical alternative

(Types follow Brignull's deceptive.design catalog, which now lists 18 types — rows 17–18 below; it folds privacy zuckering and friend spam into *forced action*. Legal hooks in the law file. → references/books/deceptive-patterns-brignull.md)

| # | Pattern | What it looks like | Ethical alternative that still serves the goal |
|---|---|---|---|
| 1 | **Comparison prevention** | Plans/prices structured so they can't be compared (different units, hidden specs) | Aligned comparison table, same units, "compare" view; confident products win comparisons |
| 2 | **Confirmshaming** | "No thanks, I hate saving money" | Neutral decline: "No thanks" / "Not now"; express value on the accept side only |
| 3 | **Disguised ads** | Ads styled as content, results or download buttons | Clear "Ad"/"Sponsored" label, distinct styling |
| 4 | **Fake scarcity** | "Only 2 left" not tied to stock | Real inventory shown only when meaningful; restock alerts |
| 5 | **Fake social proof** | Invented "Ana from Milan just bought," fake reviews | Real, verifiable reviews (incl. negative), real aggregate counts with timeframe |
| 6 | **Fake urgency** | Countdown that resets on reload; perpetual "sale ends today" | Real deadlines with fixed date shown; event-based urgency ("Delivery by Fri if ordered in 3h" - computed) |
| 7 | **Forced action** | Must create account / share contacts / enable tracking to proceed | Guest checkout; ask for account after value ("Save your order history?"); permission asks with context and a working "no" |
| 8 | **Hard to cancel (roach motel)** | Sign up in 1 tap, cancel via phone call or 6-screen maze | Cancel in settings in ≤ same steps as signup; one optional save offer, then confirm; confirmation email |
| 9 | **Hidden costs** | Fees appear at last checkout step | All-in price from first display; fee breakdown on tap |
| 10 | **Hidden subscription** | One-off purchase that silently enrolls in recurring billing | Explicit separate opt-in for subscription, with price and period |
| 11 | **Nagging** | Repeated prompts to enable notifications/rate/upgrade after "no" | Respect "no" for a defined period (e.g., ≥ 30-90 days, or until context changes); "Don't ask again" option. **EU data/consent asks:** re-asking after a clear refusal is "continuous prompting" (EDPB) and makes consent not freely given — re-ask only on a material change, and persist the refusal across devices |
| 12 | **Obstruction** | Making privacy-protective or cheaper choices tedious | Equal-path design; deep links to settings; batch toggles |
| 13 | **Preselection** | Pre-checked add-ons, insurance, marketing consent, donations | Unchecked by default; recommend with a reason; defaults only for user-beneficial settings (e.g., security on) |
| 14 | **Sneaking** | Adding items to cart, changing terms quietly | Never add without action; diff summary on any change ("We updated your plan: here's what changed") |
| 15 | **Trick wording** | Double negatives, "Uncheck to not opt out" | Plain positive statements, one decision per control; test comprehension |
| 16 | **Visual interference** | Low-contrast decline, tiny close X, decoy button styling | Clear hierarchy that's honest: primary may be emphasized, but secondary must be readable (WCAG contrast ≥ 4.5:1 text), tappable (≥ 44pt/48dp), and labeled |
| 17 | **Addictive design** | Variable rewards, infinite feeds, streak loss with no stopping cues | Natural stopping points, session controls, protective defaults for minors (see "Engagement traps" below) |
| 18 | **Currency confusion** | Prices only in virtual coins sold in mismatched bundles | Show the real-money price next to every virtual-currency price; bundles that match item prices |
| — | **Pressured selling** (Mathur 2019) | Most expensive size/variant pre-selected | Default to the cheapest option or none |
| — | **Testimonials of uncertain origin** (Mathur 2019) | Same testimonials on different stores under different names | Keep a verifiable source for each testimonial; link to real reviews |

Additional patterns common in apps:
- **Engagement traps:** infinite scroll + autoplay + variable rewards with no stopping cues. Alternative: natural stopping points ("You're all caught up" - Instagram 2018), autoplay off by default for minors, session-time controls.
- **Privacy zuckering** (Brignull's older term): tricking users into sharing more data. Alternative: just-in-time, purpose-specific asks; private-by-default settings.
- **Bait and switch / misleading ad flows.** Alternative: the thing advertised is the thing delivered.
- **Gamified pressure on minors** (streak loss, loot boxes with obscured odds). Alternative: no paid random items for minors; show odds; streak freezes; parental controls.
- **AI/chatbot persuasion:** anthropomorphic guilt ("I'll be sad if you leave"), sycophantic upsell. Alternative: assistant states it's an AI, no emotional pressure, neutral on purchases.

**Legit emphasis vs visual interference:** It's fine for the primary action to be the filled button and the secondary to be a text/outline button. It becomes interference when the secondary is hard to find, read, or tap, or when the visual hierarchy flips between screens to trick muscle memory.

---

## 5. Honest versions of the high-pressure levers

### 5.1 Honest urgency
- Use only time limits that exist for operational/business reasons and apply to everyone: event start, real promo end date, shipping cutoffs, seat holds with a server-side timer.
- Show absolute dates ("Ends 31 Oct, 23:59 CET") rather than only a ticking clock.
- Never reset, extend silently, or personalize a deadline to make a user feel singled out.

### 5.2 Honest scarcity
- Tie to live inventory/capacity data. Show when it materially affects the decision (e.g., < 5 seats). Remove when untrue.

### 5.3 Honest social proof
- Real counts with a timeframe and population ("12,400 designers used this template this month").
- Reviews: show distribution, allow sorting by lowest, disclose incentivized reviews. Never gate review prompts to only happy users in a way that misrepresents ratings (FTC Consumer Reviews and Testimonials Rule, effective Oct 2024, bans fake reviews and review suppression) [law].

### 5.4 Cancellation that still retains (the "good save")
Goal: keep users who'd genuinely benefit from staying, let everyone else go fast.
1. Cancel entry visible in account/settings (and in-app where purchased; for app-store subs, deep link to the store's subscription page).
2. Optional one-screen "Before you go" with **at most one** offer relevant to the stated reason: too expensive -> pause or cheaper plan; not using -> pause 1-3 months; missing feature -> roadmap/workaround. Clear "Continue to cancel" button with equal prominence.
3. Confirm screen stating what happens and when access ends; no guilt copy.
4. Confirmation email/receipt; easy resubscribe; data retained for a stated period with export option.
- **Account erasure is stricter than subscription cancellation.** For GDPR deletion the EDPB treats a mandatory reason question, retention/solution pop-ups, emotional loss copy, a pre-selected "pause instead" and a data-download detour that doesn't return to deletion as unlawful hindrances (Art. 12(2)). One confirmation; any feedback question optional and *after* deletion. The one-save-offer rule above is for paid subscriptions only. → references/books/edpb-deceptive-design-patterns.md
5. Measure: save rate, but also reactivation rate, complaint rate and NPS of cancellers. Users who leave easily come back more often and don't leave 1-star reviews [weak/anecdotal - industry experience; test in your product].

### 5.5 Consent that's real
- First layer: "Accept all" and "Reject all" equal in size, style and position level; "Customize" available. No pre-ticked purposes. Withdrawing as easy as giving. See law file.

### 5.6 Notifications
- Ask permission in context after value is shown ("Get notified when your export is ready?"), not on cold start. Per-category controls; frequency caps; quiet hours.

---

## 6. How the agent handles a request for a dark pattern

Template response (short, firm, useful):
1. Name the pattern and the specific harm ("This is fake urgency: the timer resets, so the claim is false").
2. Name the risk concretely (store rejection, regulator enforcement under UCPD/DSA/FTC Act/ROSCA, refunds, trust) - one line.
3. Offer 2-3 honest alternatives aimed at the same metric, with an experiment design and guardrails.
4. If the requester insists, the agent still declines to produce the deceptive version, but can help document the decision for review (e.g., draft a note to legal/design leadership).

---

## 7. Ethics review checklist for any flow (quick pass)

- [ ] All quantitative claims (stock, viewers, reviews, savings, "%") traceable to real data.
- [ ] Prices: total shown, recurring terms clear before commitment.
- [ ] No pre-checked boxes for paid items, marketing or data sharing.
- [ ] Decline/close/reject options readable (contrast), tappable (size), labeled, and non-shaming.
- [ ] Cancel/delete/unsubscribe/withdraw-consent paths ≤ the effort of the opposite action.
- [ ] Repeated asks respect a cool-down after "no."
- [ ] Engagement mechanics have stopping cues; minors have protective defaults.
- [ ] Copy free of double negatives; comprehension tested with 5+ users for key consents.
- [ ] Experiments include harm guardrails (refunds, complaints, regret churn, opt-out rates).
- [ ] Accessibility: patterns that rely on visual hierarchy also work for screen reader order and focus.

---

## 8. Further reading

- Brignull, *Deceptive Patterns: Exposing the Tricks Tech Companies Use to Control You*, 2023; deceptive.design (catalog + case law).
- Mathur et al., "Dark Patterns at Scale," *Proc. ACM HCI (CSCW)*, 2019 (open access, arXiv 1907.07032).
- Gray et al., "The Dark (Patterns) Side of UX Design," *CHI* 2018.
- Luguri & Strahilevitz, *J. Legal Analysis*, 2021 (open access).
- Susser, Roessler & Nissenbaum, *Georgetown Law Technology Review*, 2019.
- FTC staff report, "Bringing Dark Patterns to Light," Sept 2022.
- EDPB Guidelines 03/2022 on deceptive design patterns in social media platform interfaces (v2, 2023).
- OECD, "Dark Commercial Patterns," Digital Economy Paper No. 336, 2022.
