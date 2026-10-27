---
title: "Scrolling and Attention"
author: "Therese Fessenden (Nielsen Norman Group)"
year: 2018
domains: [interaction, attention, layout, content-strategy, eyetracking]
evidence: "moderate"
---

# Scrolling and Attention — Therese Fessenden, Nielsen Norman Group

Use this when: deciding what goes in the first screenful of a page; someone says "users don't scroll" or, the opposite, "the fold doesn't matter anymore"; setting page length, whitespace and density on long marketing or content pages; ordering results in lists and search pages.

Source: https://www.nngroup.com/articles/scrolling-and-attention/ (NN/g article, April 15, 2018), read in full. Also read the 2010 article it updates, Jakob Nielsen's "Scrolling and Attention (Original Research Study)" (https://www.nngroup.com/articles/scrolling-and-attention-original-research/), for the baseline and its design guidance. Note: the task listed Kara Pernice as author; the article's byline is Therese Fessenden.

## The big idea (3 sentences)
People scroll more than they did in 2010, but attention still drops sharply below the fold: in 2018, 57% of page-viewing time was in the first screenful and 74% in the first two. What changed is that the fold, as a practical barrier, has moved down to roughly the third screenful, partly because designers now spread content out with large amounts of whitespace. The closer information is to the top of the page, and of each screen, the more likely it is to be seen, so prioritizing content order remains the job.

## Core concepts
- **Study (2018)** — 120 participants, more than 130,000 fixations, 1920×1080 desktop screens, thousands of sites across news, ecommerce, blogs, FAQs and encyclopedic pages, a broad range of tasks. Compared with NN/g's earlier study on 1024×768 monitors.
- **Distribution by screenful** — first screenful (above the fold) 57% of viewing time; second screenful about 17%; first two screenfuls together 74% (up to 2160 px); first three about 81%; the remaining viewing time is a long tail spread in small amounts down the page.
- **2010 baseline** — 80% of viewing time above the fold. In 2018, 81% falls within three screenfuls: the fold moved down, it didn't disappear.
- **Distribution by page fraction** — on general sites, more than 42% of viewing time in the top 20% of the page and more than 65% in the top 40%. On search-results pages, 47% in the top 20% and more than 75% in the top 40%.
- **Within the first screen** — more than 65% of above-the-fold viewing time is in the top half of the viewport; on search-results pages, more than 75%.
- **Patterns** — on poorly structured text, people show an F-pattern (thorough at the top, sparser lower down). On structured lists they spend extra time at the top learning how the page is organized, then jump efficiently to what's relevant.
- **Why things changed** — bigger screens and new design trends (responsive layouts, minimalism, long pages with negative space); the study can't separate the two. Possible readings: designers counter the "illusion of completeness" better, and users have been conditioned to scroll, to a point.
- **Density** — larger screens did not reduce scrolling because content was spread out rather than using the space; NN/g's view is that early pages were too dense and current pages "definitely tend to be too sparse".
- **Information scent (2010 article)** — users scroll below the fold only if what they see above it suggests the rest is worth it; scrolling is extra work (interaction cost).
- **Scrolling vs paging (2010 article)** — a long article is better as one scrolling page than split across pages, because continuing is easier than deciding to click "next".

Planning table (2018 desktop data, 1080 px screenfuls; this note's arrangement of the article's numbers):

| Position on the page | Share of viewing time | Use it for |
|---|---|---|
| Top half of first screenful | ~37% of all viewing (65% of the 57%) | Value proposition, the one primary action, the answer |
| First screenful (0–1080 px) | 57% | Key goals, primary CTA, critical terms |
| Second screenful (1080–2160 px) | ~17% | Supporting evidence, secondary actions |
| Third screenful | ~7% (81% cumulative) | Details for interested users |
| Everything below | ~19%, thin long tail | Reference, FAQs, legal detail repeated from above |

## Actionable heuristics for product design
- When deciding what goes on a page, put the key user and business goals in the first screenful and the most important of those in its top half, because more than half of all viewing time is above the fold and two thirds of that is in the top half of the viewport.
- When content must be seen by most visitors, keep it within the first two screenfuls (74% of viewing time) and certainly within three (81%). Treat anything below that as reference material that only motivated users will reach.
- When ordering lists, feeds and search results, put the best answer first and second. On results pages, attention concentrates even more at the top (47% of time in the top 20%), so ranking quality matters more than layout below position 3–4.
- When a page uses big hero images and generous whitespace, check how much real content sits in the first two screenfuls. If the hero pushes the value proposition below the fold, you are spending the most-viewed area on decoration.
- When a design has a full-width band, a hard horizontal line or a "complete-looking" first screen, add signifiers that more content follows (cut-off text or cards, partial images), because false floors stop scrolling.
- When users need to find sections on a long page, make headings and bold key phrases visually distinct and consistent, because people use them to decide where to stop scanning.
- When you have a long article, keep it on one scrolling page rather than paginating it, and support it with a table of contents or jump links for long documents (2010 article guidance).
- When a stakeholder insists everything must be above the fold, push back with the data: people do scroll, so cramming everything into the first screen (overly dense layouts) is the opposite mistake. Prioritize instead.
- When deciding page length, test with representative users and check scroll-depth analytics for your own pages, because NN/g says the right length is page- and task-specific; their numbers describe averages across many sites.
- When content is critical for safety, legal or pricing (fees, cancellation terms, the billed amount on a paywall), don't rely on users scrolling to it: put it in the first screenful near the decision.
- When users first land on a structured page (a list, a pricing table, a directory), spend design effort on making the organization obvious at the top (clear column headers, filters, a summary), because NN/g saw people use their early fixations to learn the page's structure before jumping to what they need.
- When you redesign for larger screens, use the extra space to show more meaningful content rather than to spread the same content further apart; bigger monitors in 2018 did not reduce scrolling because the content was spread out.
- When viewing time and conversion disagree, trust conversion for placement decisions. Viewing time tells you what was seen, not what persuaded.

## Evidence & caveats
- Moderate: large fixation dataset (130,000+ fixations, 120 people) across many sites and tasks, but it's a descriptive analysis in an article, not a peer-reviewed paper. Sampling, task details and per-site variance aren't reported, and there are no confidence intervals.
- Desktop only (1920×1080). Mobile fold behavior, thumb scrolling and app screens may differ substantially; don't apply the percentages directly to phones.
- The analysis ignores page length: some of the top-heavy distribution comes from short pages, or from people giving up after two screens. The authors say so.
- Partly circular: people look where content is. Viewing time follows the designs that were tested, which were themselves top-loaded.
- 2010 vs 2018 differences mix two causes (screen size and design trends) that can't be separated, as the article notes.
- Eye-tracking in lab tasks measures attention, not purchase or comprehension. It does not show that a CTA must be above the fold to convert.
- The "too sparse" judgment about modern page density is NN/g's opinion, not a measured result.

## Disagreements with other references
- `references/data-driven/conversion-checkout-forms-signup-landing.md` says CTAs needn't be above the fold and long pages for complex offers often benefit from repeated CTAs after key sections. This article says to keep major CTAs above the fold. Both can be true: put a primary CTA in the first screenful *and* repeat it where users have enough information to act. For the placement decision, conversion data outranks viewing-time data.
- `references/visual/layout-spacing-elevation.md` (§4) gives "~57% in their 2018 analysis; verify". Verified: 57% of viewing time above the fold, 74% in two screenfuls, 81% in three (2018, desktop).
- `references/psychology/cognition-perception-attention-reading.md` and `references/interaction/platform-conventions.md` cite the 57%/74% figures correctly. They can add two useful numbers: about 81% of viewing time within three screenfuls, and more than 65% of first-screen viewing time in the top half of the viewport.
- `SKILL.md` §2 and `references/masters/timeless-principles.md` push "less, but better" and generous whitespace. NN/g's finding that modern pages are too sparse is a counterweight: whitespace that pushes important content below the second screenful has a measurable attention cost. Reduce content before you add space.

## Best quotes (< 25 words each, max 5)
- "New eyetracking data shows that they will still look more above the page fold than below it."
- "The closer a piece of information is to the top of the page, the higher the chance that it will be read."
- "Information density was probably too high … in the early days of the web, but page designs definitely tend to be too sparse now."
- "Users will scroll below the fold only if the information above makes them believe the rest of the page will be valuable." (Nielsen, 2010)

## Related
- `references/psychology/cognition-perception-attention-reading.md` (fold myth, scanning patterns, left-side bias)
- `references/visual/layout-spacing-elevation.md` (hierarchy, density, F-pattern)
- `references/data-driven/conversion-checkout-forms-signup-landing.md` (CTA placement, landing pages)
- `references/interaction/platform-conventions.md` (scroll and navigation conventions)
- `references/books/james-principles.md` (attention is selective; voluntary attention is brief)
