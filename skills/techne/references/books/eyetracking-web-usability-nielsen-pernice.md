---
title: "Eyetracking Web Usability"
author: "Jakob Nielsen, Kara Pernice"
year: 2010
domains: [psychology, visual, interaction, research]
evidence: "moderate"
basis: "author's free material, not the full book"
coverage: medium
---

# Eyetracking Web Usability — Jakob Nielsen & Kara Pernice

Use this when: choosing or cutting images on a page; a key message or feature is being ignored and you suspect it looks like an ad; deciding where priority content goes horizontally and vertically; someone proposes heatmaps or an eyetracking study as evidence; writing content that users will scan rather than read.

Basis: the book (New Riders, 2010 [copyright], released late 2009) was not read. Read in full: the official free excerpt, the first 32 pages of Chapter 6 "Images", published by Pearson and linked from NN/g's book page; and the authors' free NN/g report *How to Conduct Eyetracking Studies* (Pernice & Nielsen, 2009, about 160 pages, skimmed in its tips and sample-size sections). That report covers the method material in the book's chapters 1–2 ("Why Many Eyetracking Studies Are Bogus"). Also read in full: the authors' NN/g articles based on the same research program, Nielsen's "F-Shaped Pattern for Reading Web Content" (2006), "Fancy Formatting, Fancy Words = Looks Like a Promotion = Ignored" (2007), "Horizontal Attention Leans Left" (2010) and "Photos as Web Content" (2010); and Pernice's "F-Shaped Pattern of Reading: Misunderstood, But Still Relevant" (2017) and "Banner Blindness Revisited" (2018), which defines the book's "hot potato" behavior. For context only: Fessenden's 2017 NN/g update of the left-attention data (same company, not the book's authors). Not covered: the chapters on page layout, navigation, homepage elements (logos, carts, forms), advertising placement in detail, the second half of Chapter 6 and most of Chapter 8 (viewing behaviors such as momentum, logging, post-click and perpetual viewing).

## The big idea (3 sentences)
Users are "miserly with their fixations": they scan, spend looks only where peripheral vision promises value, and skip anything that looks generic, decorative, low-contrast or ad-like, so much of what designers put on a page is never seen. The book documents this from a three-year study (232 users in the 2006 phase; about 1.5 million fixations overall), finding that conventions and plain, well-formatted, information-carrying content get attention, while filler images, fancy formatting, marketing names and content near ads are ignored. Eyetracking itself is a costly, easily misused method: heatmaps need about 30 good recordings, and the big usability problems can be found without any tracker.

## Core concepts
- **Fixations are a budget** — people look at only 42% of images, for under two-tenths of a second on average. They decide during the first peripheral glimpse whether an image is worth a look.
- **What images get looked at** — high contrast and quality; cropped, not shrunk; simple, almost iconic; closely related to the page content; "magnetic" features (smiling, approachable faces looking at the camera, appetizing food, sexual cues, clear instructions or information). Ignored: low contrast, busy, ad-like, unrelated, boring, obvious stock, "cold, fake, or too polished".
- **Numbers from Chapter 6** — content-related images got looked at 29% of the time vs 14% for unrelated or loosely related ones. Stock images were ignored 85% of the time. Single objects 26% vs multiple objects 20%; simple background 28% vs crowded 14%.
- **Images as obstacles** — pages full of filler images become an obstacle course. Users look around them, which adds cognitive load instead of giving the eyes "a break".
- **Motivation overrides quality** — when users chose a photo tab or gallery, they looked at images they ignored elsewhere. They expect larger views there (Nielsen: enlargements should be at least twice as big).
- **Iconic images and icon inflation** — an icon is iconic only if it is understood instantly. Adding an icon to every link (Pernice's Lotus SmartIcons story) produces a page of tiny meaningless images.
- **F-pattern** — two horizontal sweeps near the top of the content area, then a vertical scan down the left. It appears when text is unformatted, the user wants efficiency and isn't committed. Pernice (2017) calls it bad for users and businesses, not a layout goal. Other patterns: layer-cake (headings only), spotted (hunting for a specific thing), marking (eyes fixed while scrolling, common on mobile), bypassing (skipping repeated line starts), commitment (reading everything). The F flips in right-to-left languages.
- **Attention leans left** — 69% of viewing time on the left half of a 1024-px screen in 2010. Peak attention is one-third to halfway across. Content beyond a horizontal scroll got 1%.
- **Banner blindness and the hot potato** — users ignore anything with ad placement (top banner, right rail), ad styling (boxes, color fills, animation, text in images) or proximity to ads. After one bad look at a region they avoid it, on that page and later pages ("hot potato"): 0.8% of fixations fell in a right rail that took 25% of the content area.
- **Fancy formatting = ignored** — on the U.S. Census homepage, only 14% of users found the current population, shown in big red numbers under the label "Population Clock". Heavy styling and made-up names ("QuickFacts") read as promotion.
- **User strategies** — search-dominant (57% on Census), navigation-dominant, tool-dominant (drawn to interactive widgets), plus behaviors the book names: exhaustive review, selective disregard, miscues.
- **Method** — heatmaps look qualitative but are statistical: 30 usable users per heatmap, so about 39 recruited (about 23% lose calibration). For qualitative findings watch about six users' gaze replays instead. Think-aloud distorts gaze (users "survey" the page as tour guides), so don't use it for pure heatmaps. Ad-industry studies that inflate ad attention often use such "surveying" setups. Most teams shouldn't eyetrack until they've run about a hundred ordinary usability rounds.

## Actionable heuristics for product design
- For every image, ask "what information does this carry for the task on this page?" If the answer is mood or "jazz", cut it and use the space for whitespace, larger text or one strong, relevant image.
- Prefer real people (your team, your customers, the author) and actual products over stock. If you must use stock, avoid the clichés (headset-wearing support agent, handshake, generic office) that users have learned to skip.
- Make images legible at a glance: high subject–background contrast, one main subject, simple background, crop in instead of shrinking a wide scene into a thumbnail. Avoid washed-out grayscale.
- Give product photos detail where they help choice (furniture, apparel) and don't bother where they don't (identical-looking TVs or phones: let specs and text do the work). When users ask for a bigger image, make it much bigger.
- Don't put an icon on every link or menu item for "consistency". Use icons only where they are instantly recognizable or form a learnable code (rating blocks, status colors).
- Never style important content like an ad: no boxed, brightly filled, animated or image-with-baked-in-text treatments for key facts, and keep it away from ad slots and the right rail. Test critical messages (errors, prices, legal, the main answer) for banner blindness.
- Name things in plain words. "Population of the United States: …" beats "Population Clock". Branded feature names and marketing copy lower attention as well as comprehension.
- Put priority content top-left of the content area and front-load it: the most important point in the first two paragraphs, headings and links that start with the information-carrying words (users read the first two words of a line much more than the third).
- Defeat the F-pattern with formatting: clear visual hierarchy of headings, bold key phrases, bullets and numbered steps, grouped short chunks, descriptive link text, and cut unnecessary text.
- Keep navigation at the conventions (top or far left) and secondary content to the right. If something on the right must be seen, raise its visual prominence and make sure it doesn't look like a promotion. Avoid horizontal scrolling for content.
- Remember the hot potato: one irrelevant or ad-like item in a region can make users skip that region site-wide. Keep sponsored items visually and spatially separate from useful related links.
- Design for selective motivation: put galleries, zoom and rich media behind explicit choices ("Photos", "See more"), where users want them, instead of forcing them into task pages.
- Don't commission an eyetracking study to find big problems. Run cheap think-aloud tests first. Use eyetracking for fine questions (did they see X, why do they miss Y) and analyze gaze replays of about six users. Only treat heatmaps as evidence with about 30 clean recordings per design and no think-aloud.
- Be skeptical of heatmaps in decks: ask how many users, what task, whether they thought aloud, and who paid for the study.

## Evidence & caveats
- The data come from NN/g's own large lab studies (232 users in 2006; 1.5 million fixations claimed for the book). Methods are described in the free report but the studies aren't peer reviewed. Many specific percentages come from task-based desktop web sessions in 2006–2009, and the book's screenshots are from sites of that era.
- Core patterns have replicated across time: the F-pattern and banner blindness were seen again in NN/g's 2017–2018 studies on desktop and mobile, and banner blindness goes back to Benway & Lane (1998) and is supported by independent work. Left-attention grew stronger on wider monitors (Fessenden 2017: 80% left half on 1920-px screens).
- Eyetracking measures where the fovea points, not attention or comprehension. Peripheral vision gathers information without fixation, and a fixation doesn't mean understanding (Census users fixated on the number but didn't read it). The "mind–eye hypothesis" the book relies on is a useful but imperfect assumption.
- The image percentages are descriptive averages across mixed tasks and sites, not experiments that manipulated one attribute at a time. Contrast, relevance and stock-ness are confounded.
- Patterns are task-dependent. The authors themselves say tasks determine looks: a browsing user or a committed reader behaves differently. Mobile, RTL scripts and app interfaces shift details.
- Some claims are the authors' strong opinion ("generic and pointless images are about as compelling as a garden slug"). The underlying observation is sound, but don't treat zero fixation on an image as zero effect: decorative imagery can still shape brand impressions peripherally, which eyetracking can't measure.

## Disagreements with other references
- `references/books/nngroup-scrolling-attention.md` covers vertical attention (57% of time above the fold in 2018). This file adds horizontal attention, images and ad-likeness from the same research program. They agree.
- `references/psychology/cognition-perception-attention-reading.md` §5.3 and §6 already summarize banner blindness and scanning patterns and match these findings. Use this file for the image rules, the hot-potato effect and study-method guidance.
- `references/visual/layout-spacing-elevation.md` lists the F-pattern as a failure mode, consistent with Pernice 2017. Some design blogs present the F or Z pattern as a layout template. Trust the authors: it's a symptom of unformatted text.
- `references/books/emotional-design-norman.md` argues for visceral appeal and attractiveness. Nielsen and Pernice show decorative images get no fixations. They reconcile: aesthetic quality of the whole page matters for first impressions (`references/books/lindgaard-50ms-first-impression.md`), but individual filler images don't carry information and cost space. Spend beauty on hierarchy, type and one meaningful image, not on stock decoration.
- `references/books/refactoring-ui.md` adds polish through small accents rather than new imagery, which fits these findings.

## Best quotes (< 25 words each, max 5)
- "People ignore more images than they look at on the Web, and they look at images for just a fraction of a second." (Ch. 6 excerpt)
- "People ignore stock images 85 percent of the time." (Ch. 6 excerpt)
- "If users wonder even for a moment what an image is, it is not iconic." (Ch. 6 excerpt)
- "Let go of the fancy formatting and the fancy words." (Nielsen, 2007)
- "Conducting or analyzing results of a research study erroneously is worse than not doing any research at all." (Pernice & Nielsen, 2009 report)

## Related
- `references/books/nngroup-scrolling-attention.md`, `references/psychology/cognition-perception-attention-reading.md`
- `references/visual/layout-spacing-elevation.md`, `references/visual/visual-polish-checklist.md`, `references/data-driven/conversion-checkout-forms-signup-landing.md`
- `references/books/krug-dont-make-me-think.md` (scanning, conventions), `references/books/laws-of-ux.md` (Jakob's law)
- `references/process/heuristics-and-critique.md`
- Book: Pernice & Nielsen, *How People Read on the Web: The Eyetracking Evidence* (NN/g report)

## Sources
- NN/g book page with link to the excerpt: https://www.nngroup.com/books/eyetracking-web-usability/
- Official free excerpt, Chapter 6 "Images", pp. 195–226 (Pearson/New Riders): https://ptgmedia.pearsoncmg.com/images/9780321498366/excerpts/EyetrackWebU_06To226.pdf
- Pernice & Nielsen (2009), *How to Conduct Eyetracking Studies* (free NN/g report): https://www.nngroup.com/reports/how-to-conduct-eyetracking-studies/
- Nielsen (2006), "F-Shaped Pattern for Reading Web Content": https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/
- Pernice (2017), "F-Shaped Pattern of Reading: Misunderstood, But Still Relevant": https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- Nielsen (2007), "Fancy Formatting, Fancy Words = Looks Like a Promotion = Ignored": https://www.nngroup.com/articles/fancy-formatting-looks-like-an-ad/
- Nielsen (2010), "Horizontal Attention Leans Left" (original research): https://www.nngroup.com/articles/horizontal-attention-original-research/
- Nielsen (2010), "Photos as Web Content": https://www.nngroup.com/articles/photos-as-web-content/
- Pernice (2018), "Banner Blindness Revisited: Users Dodge Ads on Mobile and Desktop": https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/
- Context only (NN/g, not the book's authors): Fessenden (2017), "Horizontal Attention Leans Left" (update): https://www.nngroup.com/articles/horizontal-attention-leans-left/
- Downloads saved under books/free/eyetracking-web-usability/
