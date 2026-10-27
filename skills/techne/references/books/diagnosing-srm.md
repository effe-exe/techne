---
title: "Diagnosing Sample Ratio Mismatch in Online Controlled Experiments: A Taxonomy and Rules of Thumb for Practitioners"
author: "Aleksander Fabijan, Jayant Gupchup, Somit Gupta, Jeff Omhover, Wen Qin, Lukas Vermeer, Pavel Dmitriev"
year: 2019
domains: [data-driven, experimentation, instrumentation]
evidence: "moderate"
---

# Diagnosing Sample Ratio Mismatch — Fabijan, Vermeer, Dmitriev et al.

Use this when: an experiment's user counts per arm don't match the configured split; a result looks
surprisingly bad (or good) and you need to rule out broken data before believing it; you are
designing a variant, its logging, a redirect, a trigger condition or a bot filter and want to avoid
creating an SRM; you only have summary counts from a third-party tool and need a quick validity
check.

## The big idea (3 sentences)
A Sample Ratio Mismatch (observed share of users per variant significantly different from the
configured share) works like a fever: a simple symptom that points to a wide range of underlying
data problems, and in most cases it completely invalidates the experiment's causal conclusion
through selection bias. Drawing on four companies (Microsoft, Booking.com, Outreach.io, Online
Dialogue), 14 analyst interviews and over 10,000 experiments, the authors sort SRM causes by
experiment stage: assignment, execution, log processing, analysis and interference. They give a real
example for each and ten rules of thumb for locating the root cause. About 6% of Microsoft
experiments showed an SRM, and many can be prevented by better design of variants, telemetry and
platform guardrails.

## Core concepts
- **Detection** — a chi-square goodness-of-fit test of observed counts against the configured split
  (it works for any split, e.g. 80/20). Even 50.2/49.8 on ~1.6M users (821,588 vs 815,482) has a
  chance probability under 1 in 500k. The authors' SRM Checker flagged at p < 0.01.
- **Why it matters** — users go missing (or appear) *because of* the treatment, so the remaining
  samples are no longer comparable. Example: the MSN carousel went from 12 to 16 cards and looked
  negative because the most engaged treatment users were classed as bots. After fixing this, it was
  significantly positive.
- **Stage 1, assignment** — bucketing bugs (one bucket short gives 49.9/50), faulty randomisation,
  corrupted or unstable IDs, carry-over from earlier experiments, correlated hash seeds (birthday
  paradox: with 365 seeds, ~23 experiments give 50% odds of a shared seed), and interacting
  experiments that crash together.
- **Stage 2, execution** — variants started at different times, delayed filters, redirecting only
  one arm, telemetry added to or removed from one arm, a variant changing speed (slower means users
  leave before logging; faster means more get logged), a variant changing engagement (more events
  means a lower chance that all of a user's events are lost), crashes, client-side batching and
  caching, and loss in transmission. Example: Skype refreshed config mid-call, mislabelling ~30% of
  sessions.
- **Stage 3, log processing** — bot removal using post-treatment behaviour, incorrect joins, delayed
  logs, and approximate counting (HyperLogLog++ makes frequent spurious SRMs, per the microsite).
- **Stage 4, analysis** — wrong trigger or filter condition, wrong starting point, missing
  counterfactual logging in control. Example: a Teams first-run page where the slower control lost
  more "saw the page" events, so the triggered analysis had an SRM while the full analysis did not.
- **Stage 5, interference** — a misconfigured campaign URL forcing users into one arm, debug "force
  variant" parameters leaking, pausing or unevenly ramping variants, users sharing self-assign
  links, ad blockers, and telemetry injection attacks.
- **Positive SRMs** — sometimes the imbalance comes from a real improvement (a faster page logs more
  users). The direction of the metric difference is then real, but the size is still biased.
- **Extreme value bounds** (microsite FAQ, after Gerber & Green) — if you must salvage a result,
  assume the missing users all failed (lower bound) or all succeeded (upper bound). The bounds are
  usually too wide to exclude zero.

## Actionable heuristics for product design
- When any experiment finishes, run the SRM chi-square before looking at any metric. If p is below
  your threshold (0.01 in the SRM Checker; stricter like 0.001 or 0.0005 on platforms running
  thousands of tests), treat the result as invalid until the root cause is found.
- When the SRM appears only in a triggered or filtered scorecard and not in the all-users scorecard,
  the trigger is wrong. Relax it to an event *before* the changed UI (e.g. "logged in" rather than
  "saw new page"), because the treatment itself affects whether the trigger fires.
- When designing a variant that needs a redirect, redirect *both* arms (control to an identical
  copy), because failed redirects drop users only from the redirected arm.
- When adding new tracking events to a treatment, add the same events (or counterfactual logs) to
  control, because extra telemetry recovers one-time users only in the treated arm and makes it look
  bigger.
- When a variant changes load speed, expect an SRM. If the slower arm has fewer users, its true harm
  is *larger* than measured, because the worst-hit users never got logged.
- When a variant raises engagement a lot (more clicks, more events), check that bot or outlier
  filters don't remove your best users. Fix bot status and other filtering attributes at first
  exposure, as Booking.com does, never using post-treatment behaviour.
- When implementing exposure logging, fire a "first signal" before any other product code runs (and
  confirm enrolment from the server on mobile), so each user's presence is recorded independently of
  what the variant does next.
- When the SRM is strongest on day 1 and fades, suspect caching or a variant that started late, and
  start the analysis at the true common start time.
- When one segment (an old browser, an OS version) carries the SRM, look for a capability the
  treatment needs that the segment lacks, such as crypto, an API or a codec.
- When many unrelated experiments show SRMs, or an A/A test does, suspect platform-level causes
  (assignment service, hashing seeds, pipeline) rather than your variant.
- When campaigns, deep links or QA tools can force a variant, restrict forced assignment to internal
  networks, alert on assignment-rate changes over time, and warn experimenters before they pause or
  edit a running variant.
- When two experiments might interact badly (e.g. crash together), make them mutually exclusive
  instead of overlapping them independently.
- When stakeholders want to "just segment out" bad users to save an SRM'd test, do so only if the
  cause is fully understood and pre-treatment. Otherwise rerun, because most SRMs cannot be fixed
  after the fact.
- When using a third-party A/B tool that shows no SRM warning, check it yourself from the visitor
  counts (e.g. scipy.stats.chisquare), because many tools did not alert users.

## Evidence & caveats
- Strong on prevalence and mechanisms: the incidence (~6% at Microsoft; ~10% of triggered analyses
  at LinkedIn, per cited work) and each example come from real production experiments.
- The taxonomy and rules of thumb are qualitative case-study synthesis (literature review, internal
  documents, 14 semi-structured interviews). They are expert heuristics, not tested diagnostic
  procedures, and the authors say the taxonomy is likely incomplete. The paper counts 25 distinct
  causes. The microsite lists a slightly updated set.
- Incidence figures come from mature platforms that actively hunt SRMs. Smaller or client-side-only
  setups may see more.
- The microsite (lukasvermeer.nl/srm) notes the SRM Checker Chrome extension is retired, because
  most major platforms now run built-in SRM checks. The FAQ's "SRM applies to Bayesian analysis too"
  and its extreme value bounds method are additions beyond the paper.
- Some examples use Microsoft-specific infrastructure (scorecards, dual pipelines). The principle
  (compare at several pipeline stages) transfers, but the tooling may not exist in your stack.

## Disagreements with other references
- `references/data-driven/experimentation-playbook.md` (trust checks) flags SRM at p < 0.001, and
  `statistics-cheatsheet.md` §7 at p < 0.001 (or 0.0005). The authors' SRM Checker used 0.01. Both
  are defensible: stricter thresholds suit platforms running thousands of tests (fewer false
  alarms), and 0.01 suits occasional tests on third-party tools. Choose by test volume, and
  investigate rather than ignore borderline cases.
- The playbook rates the 6% Microsoft figure "[moderate, secondary reports]". It is a primary figure
  from this paper. Prevalence is primary; the taxonomy itself is moderate.
- The cheatsheet's cause list matches this taxonomy but leaves out several design-relevant causes:
  telemetry added to only one arm, variant speed or engagement changing logging, client batching,
  campaign or forced-variant interference, correlated hash seeds and HyperLogLog counts.
- `references/books/ab-testing-intuition-busters.md` adds that unequal variant sizes plus
  cookie-to-user mapping cause SRMs. That is consistent with this paper's assignment and execution
  categories.

## Best quotes (< 25 words each, max 5)
- "Just like fever is a symptom for multiple types of illness, an SRM is a symptom for a variety of
  data quality issues."
- "Sample Ratio Mismatch in most cases completely invalidates experiment results."
- "The analysis is completely untrustworthy." (analyst interview)
- "The biggest driver of incorrect conclusions when comparing two datasets is bias."

## Related
- references/data-driven/statistics-cheatsheet.md §7 (SRM chi-square code)
- references/data-driven/experimentation-playbook.md (trust checks, ramps, A/A)
- references/build/web-prototyping.md (instrumenting variants: log exposure early, log both arms)
- references/books/ab-testing-intuition-busters.md (unequal variants, data-processing degrees of
  freedom)
- Kohavi, Tang, Xu (2020) *Trustworthy Online Controlled Experiments* ch. 21; Chen et al. (LinkedIn)
  "Automatic detection and diagnosis of biased online experiments"; Dmitriev et al. (2017) "A Dirty
  Dozen"

Source: start URL https://lukasvermeer.nl/srm/ (I read the home, FAQ and Taxonomy of Causes pages) →
paper PDF https://exp-platform.com/Documents/2019_KDDFabijanGupchupFuptaOmhoverVermeerDmitriev.pdf
(authors' version, KDD '19). I read the full paper text, sections 1–7. Figures were read from
captions only.
