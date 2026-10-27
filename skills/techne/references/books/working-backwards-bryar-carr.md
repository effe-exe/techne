---
title: "Working Backwards: Insights, Stories, and Secrets from Inside Amazon"
author: "Colin Bryar, Bill Carr"
year: 2021
domains: [process, product-strategy, decision-making, metrics, writing, org-design]
evidence: "weak"
basis: "author's free material, not the full book"
coverage: medium
---

# Working Backwards — Colin Bryar & Bill Carr

Use this when: a team wants to start building before it can say who the customer is, what problem it solves and why it beats what people use today; you need a written format for proposing a new product or a big redesign (PR/FAQ); design reviews are slide shows that end without decisions; choosing which metrics a team should own (controllable inputs vs outputs) and how to review them every week; a team is blocked by dependencies on other teams.

Basis: the book (St. Martin's Press, 2021) is not free. These notes rest on the authors' own free material on their official site, workingbackwards.com, read in full: the concept articles on the Working Backwards PR/FAQ process (with its standard FAQ list and "watch-outs"), Narratives & Decision Making (six-page memos), Input Metrics & the Weekly Business Review, and Single-Threaded Teams; the PR/FAQ instructions-and-template page; the Correction of Errors (COE) template; and two of Bill Carr's blog posts (2026) on PR/FAQ reviews and data-based customer problems. Also read: the authors' a16z Podcast interview at the book's launch (2021, full transcript). The site's other concept pages (operating cadence, QBR/MBR, Bar Raiser hiring, leadership principles) were skimmed. Not covered: the book's Part Two case studies (Kindle, Prime, Prime Video, AWS) beyond short anecdotes, its hiring and Leadership Principles chapters in depth, and its appendices beyond the published template.

## The big idea (3 sentences)
Amazon scaled invention by turning Bezos-style thinking into repeatable mechanisms: start from the customer experience and work backwards to what must be built, written as a press release plus FAQ before any code; run decisions on six-page narratives read silently in the meeting instead of slides; manage through controllable, customer-facing input metrics reviewed weekly; and give each initiative a single-threaded leader with few dependencies. The PR/FAQ is a filter, a funnel not a tunnel: most ideas die on paper, cheaply, and the survivors arrive at build time with the hard problems, constraints and economics already written down. The authors' recurring theme is truth-seeking over selling: documents, tenets and data force clarity of thought and stop charisma from deciding.

## Core concepts
- **Working Backwards** — define the customer experience first, then iterate backwards until the team knows what to build. Opposed to "skills forward" (what are we good at, what are competitors doing) and to SWOT-style analysis, which the authors note has no "C" for customer.
- **Press release (about one page)** — heading (product name a customer would understand); subheading (the specific customer and benefit, "if you think your product is for everyone, you are mistaken"); summary with a realistic launch date; problem paragraph from the customer's view; solution paragraph(s) that address the problem directly, with clarity and brevity, and say how it beats what customers use today; a company quote, a customer quote, and how to get started.
- **FAQ** — external (price, how it works, support, where to buy) and internal (current alternatives, demand and market size, willingness to pay, unit economics, upfront investment, dependencies, legal issues, hard problems still unsolved, "what needs to be true", "top three reasons this will fail").
- **Better, cheaper or faster** — if the solution solves the same problem in roughly the same way as existing products, go back to the drawing board. A great PR should require solving at least one hard problem.
- **Funnel, not a tunnel** — first drafts take hours, so many ideas can be written and most killed. Reasons for "no": copycat, market too small, too much upfront risk, a blocking unsolved problem, or lower priority than the backlog.
- **The review meeting** — 15–20 minutes of silent reading with inline comments, then about 40 minutes of discussion, page by page or around the room; the most senior person speaks last. Reviewers check seven things: customer defined, problem defined, solution fits, will customers change behaviour, better/cheaper/faster on which dimension, market and payback big enough, and the constraints.
- **Speed vs velocity** — months of PR/FAQ iteration (AWS took over a year of documents) bought direction, so building could go fast. PR/FAQ comes before Agile, not instead of it.
- **Viable in MVP** — Carr's critique: teams optimise the "minimum" and forget "viable", shipping many tiny things whose best outcome is small. Bryar's test: read the press release; if you wouldn't want to buy or use it, it isn't viable.
- **Narratives** — six pages maximum for a one-hour meeting (three for 30 minutes), full sentences with specific numbers instead of bullet fragments, optional appendix not required reading, an FAQ section, and **tenets** (the design criteria the team won't compromise on) stated up front so disputes land on the tenet instead of every downstream choice.
- **Controllable input metrics** — inputs a team can move and that improve the customer experience (selection, price, delivery speed, page latency), versus outputs (revenue, orders, churn) that can't be moved directly. Find inputs by metrics mapping (recursive "what drives this?"), the flywheel, customer-journey mapping (speed, quality, cost per step), support-contact data, and asking after each defect "what metric would have predicted this?".
- **Weekly Business Review** — hundreds of metrics reviewed in an hour by their business owners, almost all in one identical chart format (last 6 weeks and last 12 months, each against the prior year, plus a summary row), so attention goes to the data rather than to decoding charts. The authors reject "One Metric That Matters" as one-dimensional.
- **Single-threaded leader** — the most senior person working full time on one initiative, with the skills and the resources to deliver it. Their teams aim for more than 80% of time spent on their own initiative, by removing dependencies (shared databases, deployment trains, approval chains, "roadmap roulette").
- **Correction of Errors** — a blameless written root-cause review: impact (customer and financial), triggering events, five whys, corrective actions, and lessons learned both bad and good, shared widely.
- **Customer problems from data** (Carr, 2026) — the most common PR/FAQ failure is an anecdotal problem section; ground it in direct customer questions or instrumented journey data (Amazon's c. 1999 survey answers about shipping cost, selection, price and speed are cited as the seed of Prime).

## Actionable heuristics for product design
- Before designing a new product, feature area or big redesign, write a one-page press release from the user's point of view: who exactly it is for, the problem in their words, what changes for them and why it beats what they do today. If you can't write a press release you'd be excited to read, don't open the design tool yet. This is techne's "one strong idea" rule (`SKILL.md`) applied to products.
- Name the current alternative explicitly ("Today, people do X with a spreadsheet and email"), including doing nothing. If the design is not clearly better, faster or cheaper on at least one dimension users care about, change the concept, not the visuals.
- Write the internal FAQ before high-fidelity design: unit economics, dependencies, legal and accessibility issues, the hardest unsolved problem, "what must be true", and the top three reasons it will fail. Turn the riskiest "must be true" into the riskiest-assumption test in techne's framing line (`references/process/process-playbook.md`).
- Start design reviews with a short written narrative (goal, user, problem, tenets, decision needed) and a few minutes of silent reading, then look at mockups. Bryar reports this stops reviews from turning into everyone's pixel preferences. Put the decisions you need at the end, and have the most senior person speak last.
- State design tenets at the top of every design document for a product area ("We never hide the price", "Undo beats confirm") and resolve disputes at the tenet level. Agreed tenets also stop new team members from reopening settled decisions.
- Keep design documents short: about six pages for a one-hour review, with specific numbers in sentences ("checkout completion fell from 61% to 54% after the address step changed") rather than bullet fragments ("conversion down").
- Ground the problem section in data, not anecdote: support-contact volumes by issue, measured speed, quality and cost of each journey step, or a simple question asked of many users ("Why don't you use us more often?"). Pair it with qualitative "why" from research (`references/books/continuous-discovery-habits-torres.md`).
- For each design team, choose controllable, user-facing input metrics it can move (task success, time to first value, search success, page latency, error rate per step) and review them weekly next to the output metrics they are supposed to drive. Show every metric in the same chart format so changes stand out.
- After each serious UX failure (a confusing release, a harmful pattern, an accessibility regression), write a blameless COE: impact, five whys, corrective actions, and "what metric would have caught this earlier?" Then instrument that metric.
- Use the PR/FAQ to kill ideas cheaply. Treat a high kill rate as the process working, and keep killed PR/FAQs as a searchable archive of reasoning.
- Don't use a PR/FAQ as a sales document for a design you already love; the authors insist on truth-seeking over selling. If the FAQ has no hard questions, it isn't done.
- If you write a press release about a fictional future product, label it as an internal working document. Never publish or circulate a mock press release that could be mistaken for a real announcement (`references/future/futures-methods.md`).

## Evidence & caveats
- This is practitioner testimony by two former Amazon VPs who now sell courses and consulting on these methods; the free articles all end in course offers. Treat it as a well-described method with a strong survivorship bias, not as tested evidence [weak as evidence of effect, strong as a description of Amazon practice].
- No controlled comparison shows PR/FAQs or narratives produce better products than other methods. Success stories (Kindle, AWS, Prime) are offset by failures the authors acknowledge (Fire Phone: "great product, wrong problem"), and we don't see the base rate of approved PR/FAQs that failed.
- Specific numbers are the authors' claims: narratives carry "about 10 times" the information of slides; a 75/25 presenting/discussion split for slide meetings vs the reverse for narratives; executives spending 10–20 hours a week in PR/FAQ meetings; approved work often waiting 12–18 months to start. None of these is independently measured.
- The authors reject a single north-star metric and say "swim in a sea of input metrics". That works at Amazon's data maturity and staffing; small teams can drown in hundreds of metrics. Many-metric dashboards also invite forking paths when used to judge experiments.
- The method is built for new businesses and large initiatives. The authors themselves say small iterative test-and-learn suits areas like search ranking. Don't force a PR/FAQ on a button change.
- Writing culture favours people comfortable with long-form English prose. The authors claim the best thinkers, including non-native speakers, write the best narratives; that is an assertion, and teams should watch for exclusion.

## Disagreements with other references
- `references/books/lean-analytics-croll-yoskovitz.md` recommends one stage-specific "One Metric That Matters". Bryar and Carr call that philosophy fundamentally flawed and prefer many controllable inputs reviewed weekly. Resolve it this way: one primary metric per *experiment* (techne's pre-registration rule), a broad input-metric dashboard for *operating* a product. `references/data-driven/metrics-frameworks.md` already cites the book for controllable inputs.
- Lean startup and MVP thinking (`references/books/mom-test.md`, `references/books/continuous-discovery-habits-torres.md`) push small, fast tests. Carr argues MVP culture produces too many small, low-value launches. Both can be right: use PR/FAQ to decide *what is worth building at all*, then test its riskiest assumptions cheaply before and during the build.
- `references/books/creative-selection-kocienda.md` describes Apple's demo-driven process, where documents matter less than working prototypes. Use PR/FAQ to choose direction and economics, and prototypes to judge the interaction itself; a press release can't tell you whether typing on glass feels right.
- `references/books/shape-up.md` uses written pitches with fixed appetite. Pitches and PR/FAQs are compatible; Shape Up adds explicit time budgets the PR/FAQ lacks, and the PR/FAQ adds customer economics Shape Up leaves out.
- `references/books/tufte-visual-display.md` is the origin of the narratives switch (Bezos read Tufte's essay on PowerPoint). The WBR's uniform small-multiples charts follow the same idea.

## Best quotes (< 25 words each, max 5)
- "If you think your product is for everyone, you are mistaken." (PR/FAQ article)
- "A great product development process should be a funnel, not a tunnel." (PR/FAQ article)
- "Weak thinking has no room to hide behind weak writing." (Narratives article)
- "To me, viable means you read the press release of what you're trying to build, and you want to buy or use the product." (Bryar, a16z 2021)
- "there's not one thing on there you'd write a press release about — then, like, you've got a problem." (Carr on a new company's roadmap, a16z 2021)

## Related
- `references/data-driven/metrics-frameworks.md` (inputs vs outputs, North Star, guardrails)
- `references/process/process-playbook.md`, `references/process/redesign-and-scale.md`
- `references/books/lean-analytics-croll-yoskovitz.md`, `references/books/continuous-discovery-habits-torres.md`, `references/books/shape-up.md`, `references/books/creative-selection-kocienda.md`
- `references/books/articulating-design-decisions-greever.md`, `references/books/connor-irizarry-discussing-design.md` (running reviews)
- `references/books/tufte-visual-display.md`
- `references/future/futures-methods.md` (labelling fictional artefacts)

## Sources
- Working Backwards PR/FAQ process (authors' article): https://workingbackwards.com/concepts/working-backwards-pr-faq-process/
- PR/FAQ instructions & template: https://workingbackwards.com/resources/working-backwards-pr-faq/
- Narratives & Decision Making: https://workingbackwards.com/concepts/narratives-decision-making/
- Input Metrics & Weekly Business Review: https://workingbackwards.com/concepts/input-metrics/
- Single-Threaded Teams: https://workingbackwards.com/concepts/amazon-single-threaded-teams/
- Correction of Errors template: https://workingbackwards.com/resources/correction-of-errors-coe/
- Skimmed: https://workingbackwards.com/concepts/amazon-operating-cadence/ ; https://workingbackwards.com/concepts/quarterly-monthly-business-reviews/ ; https://workingbackwards.com/concepts/bar-raiser-hiring/ ; https://workingbackwards.com/concepts/leadership-principles/
- Bill Carr, "How Amazon executives operate three years in the future" (blog, 2026): https://workingbackwards.com/blog/how-amazon-executives-operate-three-years-in-the-future/
- Bill Carr, "Start PR/FAQ with data-driven customer problems today" (blog, 2026): https://workingbackwards.com/blog/start-pr-faq-with-data-driven-customer-problems-today/
- a16z Podcast, "Amazon Narratives — Memos, Working Backwards from Release, More" (Bryar & Carr with Sonal Chokshi, 2021, transcript): https://a16z.com/podcast/amazon-narratives-memos-working-backwards-from-release-more/
- Authors' home page: https://workingbackwards.com/
