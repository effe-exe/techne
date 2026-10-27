---
title: "Nudge: The Final Edition"
author: "Richard H. Thaler & Cass R. Sunstein"
year: 2021
domains: [psychology, data-driven]
evidence: "mixed"
basis: "author's free material, not the full book"
coverage: medium
---

# Nudge: The Final Edition — Richard H. Thaler & Cass R. Sunstein

Use this when: you are choosing a default (a plan, a setting, a pre-filled value, an opt-in vs opt-out); you are deciding how many options to offer and whether to force a choice; you are auditing a flow for "sludge" (friction that makes the good choice harder); a stakeholder justifies steering users with "it's just a nudge" and you need the authors' own test for when steering is legitimate.

Basis: the book (Penguin, 2021; first edition 2008) was not read. These notes rest on the authors' own free material: Thaler's **Nobel Prize lecture "From Cashews to Nudges" (2017)**, which tells the story of nudging, defaults, Save More Tomorrow, the Swedish pension defaults and introduces "sludge" (read in full); the **preface to the Final Edition**, republished by Chicago Booth Review with the publisher's permission, which lists what changed (read in full); and the authors' draft of **"Libertarian Paternalism Is Not an Oxymoron" (Sunstein & Thaler, 2003)**, the 52-page paper the book grew out of, hosted by the Boston Fed conference where it was presented (the argument, toolbox and "how much choice" sections were read in full; the objections section was skimmed). Coverage is medium: the conceptual core (libertarian paternalism, choice architecture, defaults, forced choice, option-set size, sludge, how long nudges last) is covered from primary text. The Final Edition's new chapters on smart disclosure, choice engines, personalised defaults, curation, "make it fun", climate, credit cards, mortgages, health plans and the rewritten organ-donation chapter are known only from the preface's one-paragraph descriptions.

## The big idea (3 sentences)
Someone always designs the context in which people choose (the menu, the form, the default, the order of options), so there is no neutral design. "Choice architects" should therefore deliberately steer people towards the options those people would pick for themselves if they were fully informed and calm, while keeping every option available and cheap to choose ("libertarian paternalism"). The Final Edition adds the mirror image: "sludge", friction that makes good choices harder, which should be hunted down and removed.

## Core concepts
- **Econs vs Humans** — Econs (rational agents) would not care whether a box is pre-ticked, since clicking is cheap; Humans do, so small features of design matter.
- **Choice architecture and choice architects** — the environment in which decisions are made, and whoever builds it. Thaler gives the examples himself: menus are a restaurant's choice architecture, and the user interface is a smartphone's. The book's choice-architecture ideas were influenced by Norman's *The Psychology of Everyday Things*.
- **Nudge** — a feature of the choice architecture that changes behaviour without changing objective payoffs or incentives and without removing options. A GPS route is the model: you pick the destination, it proposes a route, you can ignore it.
- **Libertarian paternalism** — "paternalism" means trying to make people better off *as judged by themselves* (what they would choose in a cold, informed state); "libertarian" means nobody is forced and opting out stays cheap.
- **Paternalism is unavoidable** — the cafeteria director must order the food somehow. Of the options (what's best for diners, random, what makes them fattest, what they'd choose anyway), the last is often undefined, because preferences are formed by the arrangement itself.
- **Defaults are sticky** — automatic 401(k) enrolment raised initial enrolment from 49% to 86% in Madrian and Shea's firm. Car insurance in New Jersey vs Pennsylvania: most drivers kept whichever right-to-sue default their state set. A default vacation right roughly doubled the price law students demanded to give it up ($6,000 to pay vs $13,000 to accept).
- **Defaults also act as suggestions** — a low default savings rate (3%) became the rate most people kept, so some saved *less* than they would have chosen. Every default needs its level chosen, not just its direction.
- **Save More Tomorrow** — commit now to saving more *later*, timed to pay rises so take-home pay never falls, and staying on until you opt out. It uses present bias, loss aversion and inertia for the saver's own goal. In the first firm, about 80% of those offered joined and savings rose from 3.5% to 13.6% over four raises.
- **Forced (active) choice** — require an explicit answer instead of setting a default. It raised enrolment above opt-in but below opt-out, and it annoys people who would rather not choose.
- **Three rules of thumb for picking a design when you can't measure welfare directly** — what an informed majority would choose; force an explicit choice; or pick the design with the fewest opt-outs. Experiment where you can, and scale only designs that repeated tests show work.
- **How much choice to offer** — more options help when choosers have informed preferences, when the mapping from option to outcome is transparent (ice-cream flavours, not fund portfolios), when tastes truly vary (smoking rooms, not mattresses), and when people enjoy choosing. Otherwise a few well-chosen options plus a good default serve them better. Sweden's 450-fund pension menu is the cautionary example.
- **How long nudges last** — in Sweden's pension system, the 2000 campaign urging people to pick their own funds left 97% of those "active choosers" still in their original portfolios 17 years later, and fewer than 10% traded in a typical year. Later entrants, without the campaign, chose the default fund nearly 99% of the time, and almost nobody reacted when that fund added 50% leverage. Where feedback is rare, defaults can last nearly forever.
- **Sludge** (Final Edition) — the "exact opposite of nudging for good": friction and behaviourally informed tricks that make wise choices harder (contracts you click through unread, long forms, hard cancellation). The authors call for a "seek-and-destroy mission" in every organisation.
- **New Final-Edition tools** (from the preface) — Smart Disclosure (machine-readable disclosure that powers "choice engines"), personalised defaults, curation, "make it fun". The authors restate that they do *not* support presumed consent for organ donation. The preface doesn't say what they propose instead; the 2003 paper floated a forced choice when people apply for a driving licence.

## Actionable heuristics for product design
- When you set any default (plan tier, notification level, privacy setting, auto-renew, tip amount, pre-filled quantity), assume most people will keep it, for months or years if feedback is rare. Choose the option an informed user in a calm state would pick for themselves, not the one that maximises your metric. If you can't defend the default to the user's face, it isn't a nudge.
- When a default has a *level* (savings rate, donation amount, storage plan, notification frequency), choose the level as carefully as the direction. A too-low or too-high default is taken as advice and pulls people away from what they would have chosen.
- When users' needs differ a lot and you know enough about them, use a personalised default (from role, locale, past behaviour) instead of one default for all. Show it visibly and make changing it one action.
- When the right answer varies by person and the stakes are real (organ donation, data sharing, health or financial plans), prefer active choice: ask, explain both options neutrally, and don't pre-select. Reserve opt-out defaults for cases where nearly everyone benefits and opting out is trivial.
- When deciding how many options to show, run the four checks: are users informed, is the option-to-outcome mapping clear, do tastes vary, do they enjoy choosing? If mostly no, offer a short curated set with a recommended option. If mostly yes (themes, flavours, fonts), offer breadth with good search and filters.
- When users must pick among complex options (plans, insurance, portfolios), translate options into outcomes they care about ("what you'd pay this year given your usage"). This is the choice-engine idea, and the transparency test above shows why it matters.
- When users are present-biased about something they want (saving, learning, exercise, finishing a course), let them commit now to act later, tie increases to moments that don't feel like losses, and keep the commitment running until they opt out. Keep exit easy, or it stops being a nudge.
- When auditing a flow, list every step between a user and their goal (sign-up, claim, refund, cancel, export, delete) and remove any that exist only to discourage. Pre-fill what you already know (the pre-filled tax return is the authors' model). Make leaving as easy as joining.
- When a stakeholder proposes friction "to reduce churn" (phone-only cancellation, retention mazes, hidden downgrade paths), name it as sludge. Thaler's lecture makes the business case too: a reputation for being sludge-free may be the winning long-run strategy.
- When someone wants a stronger push ("let's make the default the annual plan"), apply the authors' test: would most users, fully informed and unhurried, choose this for themselves? Measure the opt-out and complaint rate after launch; high opt-outs mean the default is wrong.
- When you nudge, do it in the open. Defaults and order should be visible, explainable and reversible. Measure outcomes for users, not just conversion.
- When designing competing nudges (your default vs a campaign urging people to change it), expect the louder, one-time push to have long-lasting effects on the people it reaches, and the default to win for everyone after it.

## Evidence & caveats
- **Strong:** default effects on pension enrolment and contribution rates (replicated across many firms and countries), Save More Tomorrow (replicated in several plans), the stickiness of defaults in insurance and in Sweden's pension data, and the cost of complex option sets for savers.
- **Weaker than the book's popularity suggests:** across all nudge types, a 2022 meta-analysis (Mertens et al., *PNAS*) reported a moderate average effect, but a reply (Maier et al., *PNAS*, 2022) found little evidence for an average effect after correcting for publication bias. Nudge-unit trials at scale averaged about 1.4 percentage points, against about 8.7 in academic papers (DellaVigna & Linos, *Econometrica*, 2022). These are cited from `references/psychology/behavior-persuasion-toolkit.md`, not re-read here. Defaults and friction changes hold up; framing, social-norm and reminder nudges vary a lot.
- **Organ donation:** the 2003 paper read the gap between presumed-consent countries (90%+ registered) and the US (under 20%) as mostly a default effect and leaned towards the European rule. The Final Edition preface says the authors now explicitly oppose presumed consent. Registration rates are not the same as actual donations, which depend on family consent and infrastructure. Don't cite the 90%/20% gap as proof that defaults save lives.
- **Enrolment numbers differ by cohort definition:** the 2003 paper reports 49% to 86% initial enrolment, while techne's persuasion toolkit cites about 37% to 86% from the same study. Both are from Madrian & Shea; quote the cohort when you cite them.
- **Opinion, not data:** whether a nudge serves users "as judged by themselves" is a value judgement, and the authors admit it can be hard to apply. Critics argue that nudges can be manipulative when hidden; techne's dark-pattern references set that line more sharply than the book does.
- Most of the book's examples are public policy and finance. Product contexts differ: firms profit from sludge, and markets don't reliably punish it, so the libertarian safeguard ("easy to opt out") must be checked, not assumed.

## Disagreements with other references
- `references/psychology/behavior-persuasion-toolkit.md` treats defaults as strong and framing as fragile. Agree, and this file adds the authors' rules for *which* default and *how many* options.
- `references/psychology/behavior-ethics-dark-patterns.md` and `references/books/deceptive-patterns-brignull.md` classify pre-selected options (preselection) as a dark pattern. The book permits defaults that serve users. Resolve it this way: a default is acceptable only if it is in the user's interest by their own lights, visible and one action to change. Pre-ticked paid add-ons, marketing consent or data sharing fail that test, and under GDPR consent cannot be a default at all (`references/psychology/behavior-law-consent-cancellation.md`). Follow the stricter files whenever money, data or consent is involved.
- `references/books/choice-overload-meta-analysis.md` and `references/books/chernev-choice-overload-2015.md` show that "fewer options" is not a universal rule. The book's four questions are compatible: they say *when* a smaller set helps, which matches the moderators those meta-analyses found.
- `references/books/online-manipulation-susser.md` argues that covert influence that bypasses reasoning is manipulation even when well-meant. That is a stricter standard than libertarian paternalism. For product work, use Susser's transparency test on top of Thaler and Sunstein's "as judged by themselves" test.
- `references/books/fogg-behavior-model.md` offers a complementary diagnosis (motivation, ability, prompt). Sludge removal is the "ability" lever; defaults reduce the need for any prompt at all.

## Best quotes (< 25 words each, max 5)
- "The user interface is the choice architecture of smart phones." (Thaler, Nobel lecture)
- "Good choice architecture, like good design, makes the world easier to navigate." (Thaler, Nobel lecture)
- "Every organization should create a seek-and-destroy mission for unnecessary sludge." (Final Edition preface)
- "We do not support the policy called 'presumed consent.'" (Final Edition preface)

## Related
- `references/psychology/behavior-persuasion-toolkit.md` (defaults, framing, evidence tags), `references/psychology/behavior-pricing-and-choice.md`, `references/psychology/behavior-ethics-dark-patterns.md`, `references/psychology/behavior-law-consent-cancellation.md`
- `references/books/thinking-fast-and-slow-kahneman.md` (the psychology underneath), `references/books/paying-not-to-go-to-the-gym.md` (present bias in subscriptions), `references/books/design-of-everyday-things.md` (Norman, an acknowledged influence)
- `references/data-driven/conversion-paywalls-pricing-subscriptions.md`, `references/data-driven/conversion-onboarding-activation-retention.md`
- Books: Thaler, *Misbehaving* (2015); Sunstein, *Sludge* (MIT Press, 2021)

## Sources
- Thaler, R. H. (2017). "From Cashews to Nudges: The Evolution of Behavioral Economics", Nobel Prize lecture: https://www.nobelprize.org/uploads/2018/01/thaler-lecture.pdf (from https://www.nobelprize.org/prizes/economic-sciences/2017/thaler/lecture/; read in full; saved under books/free/nudge/)
- Thaler, R. H. & Sunstein, C. R. (2021). Preface to *Nudge: The Final Edition*, excerpt published by Chicago Booth Review with Penguin's permission: https://www.chicagobooth.edu/review/nudge-preface-final-edition (read in full)
- Sunstein, C. R. & Thaler, R. H. (2003). "Libertarian Paternalism Is Not an Oxymoron", preliminary draft (4/3/03), hosted by the Federal Reserve Bank of Boston conference: https://www.bostonfed.org/economic/conf/conf48/papers/thaler.pdf. The published version (University of Chicago Law Review 70(4)) is listed at https://chicagounbound.uchicago.edu/uclrev/vol70/iss4/1; its PDF download refused automated access.
- Not obtained: Sunstein, "Sludge and Ordeals" (Duke Law Journal, 2019; repository behind a bot check, not bypassed); Sunstein, "Nudging: A Very Short Guide" (Harvard DASH rate-limited the request).
