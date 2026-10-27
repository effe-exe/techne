---
title: "Jobs to Be Done: Theory to Practice"
author: "Anthony W. Ulwick"
year: 2016
domains: [process, data-driven]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: medium
---

# Jobs to Be Done: Theory to Practice — Anthony W. Ulwick

Use this when: you have many candidate needs or feature requests for a mature product and must decide which to work on; you are defining "the market" for a product or a redesign and keep slipping into product categories or personas; you need need-statements that engineering, design and marketing can all score against before anyone sketches a solution.

Basis: the book (IDEA BITE PRESS, 2016) is offered free by the author's firm, but only behind an email lead form on jobs-to-be-done-book.com. Submitting someone's email to get it was out of scope, so the book text itself was not read. These notes are built from Ulwick's own free material on strategyn.com, read in full: the book's official landing page (its chapter-level summary), the JTBD comprehensive guide, the ODI process guide, and the pages on customer needs, the opportunity algorithm, outcome-based segmentation, the job map (the public summary of his 2008 HBR article with Bettencourt), JTBD theory, pricing and positioning. These pages carry the book's main frameworks: the needs framework, the job map, desired outcomes, the opportunity algorithm, outcome-based segmentation and the growth strategy matrix. Not covered: the 84-step ODI procedure, the six full case studies, survey design details, the tutorials and templates, and the full "language of innovation" glossary.

## The big idea (3 sentences)
People buy products to get a job done, and while products come and go the job is stable, so the job (not the product, the technology or the demographic) should be the unit of analysis for strategy and design. Customer needs are best defined as the metrics people use to judge how well a job gets done ("desired outcomes", usually 50–150 per job), which makes it possible to capture all needs before ideation and to measure, by survey, which are important but poorly satisfied. Innovation then becomes targeting: pick the underserved outcomes (and the segments that struggle with them) and build the solution that gets the whole job done markedly better, instead of generating ideas and hoping one fits.

## Core concepts
- **Market = job executor + core functional job** — "parents trying to pass life lessons to their children" is a market; "parenting apps" is not. Defined this way, the market stays stable as technologies change (records, cassettes, CDs, MP3s, streaming all served "listen to music on the go").
- **Needs framework** — layers of needs around the job: the core functional job and its desired outcomes; related jobs done before, during and after; emotional and social jobs (how people want to feel and be seen); consumption chain jobs (install, learn, maintain, repair, dispose); and financial desired outcomes that the buyer uses in purchase decisions.
- **Three customer roles** — the job executor (user), the product lifecycle support team (who installs, maintains, upgrades or disposes), and the buyer. In consumer products they are often the same person; in B2B they are rarely the same, and each has its own needs.
- **Job map** — every job breaks down into eight universal steps: define, locate, prepare, confirm, execute, monitor, modify, conclude. A job map describes what the customer is trying to accomplish at each step in ideal order, not what they do today, so it is not a journey map or a process map. A typical job has 10–20 steps at this level.
- **Validating a step** — keep a step only if it states a goal rather than a current method, and if it applies to anyone doing the job, not just to how one customer happens to do it.
- **Desired outcome statement** — a solution-free, measurable need tied to a job step, phrased as a direction plus a metric plus the thing being controlled (Ulwick's example from music: minimize the time it takes to find desired songs). Statements should be stable over time, controllable through design and free of any solution or technology. A one-hour interview yields about 20–30; a full job has 50–150.
- **Needs vs wants** — a want is a solution ("a cup holder"); the need is the outcome it serves (minimize the likelihood of spilling a drink while driving), which a different solution might meet better later.
- **Opportunity algorithm** — survey a representative sample (Strategyn cites 180 to 3,000 respondents) on the importance and current satisfaction of every outcome, then score opportunity = importance + max(0, importance − satisfaction). High scores are underserved and worth investing in. Outcomes that are well satisfied but not very important are overserved, which points to cost reduction or simplification.
- **Opportunity landscape** — importance plotted against satisfaction for every outcome, showing at a glance whether a market is underserved (room for a better, pricier product) or overserved (ripe for a simpler, cheaper one).
- **Outcome-based segmentation** — segments exist because people face different complexity and struggle differently with the same job. Cluster respondents on their unmet outcomes rather than on demographics, which Ulwick calls "phantom targets". His Motorola two-way radio example found three segments (covert communication 40%, clear communication in danger 28%, team coordination 32%) that vertical-industry segments had hidden.
- **Growth strategy matrix** — five strategies by whether the product gets the job done better or worse and costs more or less: differentiated (better, pricier, for underserved people willing to pay), dominant (better and cheaper, for everyone), disruptive (worse but cheaper, for overserved people and non-consumers), discrete (for situations where people have few or no alternatives, so a worse or pricier offer can still win) and sustaining (slightly better or cheaper, for mostly satisfied customers; suits incumbents).
- **Get the entire job done** — people dislike stitching several products together. Products that cover more of the job (Keurig covering "prepare a hot beverage" rather than "boil water") displace point solutions.
- **Ideas are outputs, not inputs** — the "ideas-first" process (brainstorm, filter, test) evaluates concepts against needs nobody wrote down. ODI is "needs-first": know all the needs and which are unmet, then design against them.
- **Pricing and positioning** — customers pay to get a job done, not for a product, so asking what they would pay for a feature is the wrong question. Ask what getting the job done perfectly is worth, and position on the functional job first and on the emotional jobs second.

## Actionable heuristics for product design
- When a brief names a product category ("a budgeting app", "a better dashboard"), restate the market as "[executor] trying to [job]" before any research or design. If the job statement mentions your product or a technology, it is at the wrong level. Go up one level by asking "why are they doing that?" until the job would still exist if your product didn't.
- Before a redesign, build a job map with the eight steps and check where your product is absent. Missing steps (locate, confirm, monitor, conclude) are common places where users work around the product with spreadsheets, notes or a second app. Those workarounds are prime design opportunities and a sign of "cobbling" that a competitor covering the whole job can exploit.
- At each job step ask the step-level questions: what makes this step slow, what makes its result vary or go off track, who struggles more here (novice vs expert), and what would ideal output look like? Turn each answer into an outcome statement (direction + metric + object), not a feature.
- Rewrite every feature request in the backlog as the outcome it serves ("export to CSV" → "minimize the time it takes to get my data into the tool where I report it"). Requests that share an outcome usually have a better single solution, and requests with no outcome can be dropped.
- Use outcome statements as acceptance criteria and as the scoring rubric for design concepts. In a critique, compare concepts by how much each one improves the top underserved outcomes, rather than by preference. This gives design reviews a shared, non-aesthetic yardstick (see `references/books/articulating-design-decisions-greever.md`).
- When you can run a survey, rate importance and satisfaction for each outcome on the same scale and compute importance + max(0, importance − satisfaction). Treat the ranking as a prioritisation input with error bars, not a verdict. Validate the top two or three with prototypes or experiments (`references/data-driven/experimentation-playbook.md`) before committing a roadmap.
- Look for overserved outcomes too. Features that score high on satisfaction but low on importance are where to simplify, hide behind progressive disclosure, or cut, and where a cheaper "good enough" tier can succeed (the disruptive quadrant).
- Segment on struggle, not on persona labels. If two groups rate the same outcome very differently (e.g. solo users vs teams on "minimize the time it takes to hand work to someone else"), design and price for them separately. A single blended product often serves neither.
- In B2B, map needs for all three roles: the user, the admin or IT person who sets it up and maintains it, and the buyer. Admin consoles, migration, permissions and billing are consumption chain jobs and deserve real design.
- Write positioning and landing-page copy in this order: the functional job done better (with the specific outcome improved), then the emotional or social payoff. Copy that leads with emotion but cannot explain the functional gain tends to slow adoption (Ulwick's claim; test it).
- For pricing research, don't ask "what would you pay for this feature?" Ask what the current way of getting the job done costs and what doing it perfectly would be worth, then anchor the price to the improvement. Pair this with `references/psychology/behavior-pricing-and-choice.md`.
- Keep outcome statements free of solutions and of combined goals. "Minimize the time and effort to…" hides two metrics, and "using drag and drop" is a solution. Badly written statements distort importance ratings.

## Evidence & caveats
- The headline evidence is Strategyn's own. The "86% success rate" is reported on strategyn.com as 18 of 21 launches rated successful by the sponsoring client companies, compared with a roughly 17% industry average compiled from secondary sources. That is a small sample, self-rated by paying clients, with no control group and survivorship risk. The case results (Cordis going from about 1% to 20% share, Kroll Ontrack from $11M to $200M) are uncontrolled before-and-after stories told by the vendor.
- The opportunity algorithm is a heuristic, not a validated model. It adds and subtracts ratings that are ordinal, it counts importance twice by design, and its ranking depends on scale and on how satisfaction is measured (Strategyn reportedly uses top-box percentages). No independent replication of its predictive validity was found. It is still a transparent and reasonable way to rank a long list of needs, and it agrees with the general importance-performance analysis used in marketing research since the 1970s.
- "Customers can't tell you solutions, but they can tell you outcomes" is plausible and consistent with research on poor introspection into preferences. But the claim that the needs set is "complete" and "stable for years" is the author's assertion. Needs also shift when new solutions reset expectations.
- Ulwick places emotional jobs under the functional job ("get the functional job wrong and nothing saves the product"). That is opinion. Christensen and Moesta, and the emotional design literature, give social, emotional and aesthetic factors more weight, as does `references/books/emotional-design-norman.md`.
- The history ("Ulwick introduced Christensen to JTBD") is Strategyn's account. Christensen's books credit Ulwick's work but present their own lineage. Treat it as a priority claim, not settled history.
- The method is expensive at full scale (qualitative interviews, a quantitative survey of hundreds of people, cluster analysis). The job map, outcome statements and the "ideas are outputs" stance can be used cheaply. The survey and segmentation steps need a real research budget and survey design skills (`references/books/quantifying-the-user-experience.md`).

## Disagreements with other references
- `references/books/christensen-competing-against-luck.md` and `references/books/moesta-demand-side-sales.md` treat a job as progress in a circumstance, discovered through stories of switching, with emotional and social forces at the centre. Ulwick treats it as a stable functional process measured by outcome metrics. Use Moesta and Christensen to learn why people switch or stall (conversion, onboarding, churn). Use Ulwick to prioritise among many needs in a known job (roadmaps, redesigns of mature products). They are complementary lenses, not rival truths; `references/process/process-playbook.md` §2.2 already frames them as three schools.
- `references/books/continuous-discovery-habits-torres.md` favours small, weekly, continuous interviews and an opportunity solution tree. Ulwick favours a large upfront study that defines all needs before ideation, and calls build-measure-learn wasteful. For most product teams, Torres's cadence is more realistic. Ulwick's outcome statements make good nodes in Torres's tree.
- `references/books/shape-up.md` and lean experimentation (`references/data-driven/experimentation-playbook.md`) treat learning by shipping as essential. Ulwick says knowing the needs makes shipping-to-learn largely unnecessary. Trust experiments for whether a solution works. Ulwick's survey can only say where to aim.
- `references/books/mom-test.md` agrees with Ulwick that you shouldn't ask customers for solutions or prices for features, but warns about leading questions in any interview. Apply its rules when collecting outcome statements.

## Best quotes (< 25 words each, max 5)
- "A job map is not a process map or a customer journey map." (strategyn.com, JTBD guide)
- "An idea is the output of the innovation process, not the starting point." (strategyn.com, innovation process guide)
- "Market opportunity = importance + max(0, importance – satisfaction)." (strategyn.com, market opportunity page)

## Related
- `references/books/christensen-competing-against-luck.md`, `references/books/moesta-demand-side-sales.md` (other JTBD schools)
- `references/process/process-playbook.md` §2.2 (JTBD schools), `references/process/research-methods-selector.md`
- `references/books/continuous-discovery-habits-torres.md`, `references/books/mom-test.md`
- `references/psychology/behavior-pricing-and-choice.md`, `references/data-driven/experimentation-playbook.md`
- Books: Ulwick, *What Customers Want* (2005); Ulwick & Bettencourt, "The Customer-Centered Innovation Map", HBR 2008; Ulwick, "Turn Customer Input into Innovation", HBR 2002 (all paywalled or for sale, not read)

## Sources
- https://jobs-to-be-done-book.com/ (official book page and chapter-level summary; free download behind an email form, not used)
- https://strategyn.com/jobs-to-be-done/ (JTBD comprehensive guide, Ulwick)
- https://strategyn.com/outcome-driven-innovation-process/ (ODI process guide, Ulwick)
- https://strategyn.com/outcome-driven-innovation/understanding-customer-needs/
- https://strategyn.com/outcome-driven-innovation/market-opportunity/
- https://strategyn.com/outcome-driven-innovation/market-segmentation-process/
- https://strategyn.com/jobs-to-be-done/customer-centered-innovation-map/
- https://strategyn.com/jobs-to-be-done/jobs-to-be-done-theory/
- https://strategyn.com/outcome-driven-innovation/pricing-strategy-framework/
- https://strategyn.com/outcome-driven-innovation/product-positioning/
