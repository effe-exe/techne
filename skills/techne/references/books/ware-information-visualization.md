---
title: "Information Visualization: Perception for Design (4th ed.)"
author: "Colin Ware"
year: 2019
domains: [visual, psychology, data-driven]
evidence: "strong"
basis: "author's free material, not the full book"
coverage: low
---

# Information Visualization: Perception for Design — Colin Ware

Use this when: you are choosing how to encode data in a chart, map, dashboard or diagram (which variable gets colour, position, size or motion); you must pick or audit a colormap for continuous data; you are designing navigation in a large information space (zoom vs multiple linked views, overview and detail); someone proposes 3D charts or many highlighted items at once.

Basis: the book (Morgan Kaufmann/Elsevier, 4th ed. 2019) was not read; no legal free copy was found. A library copy is the way to read it. These notes come from Ware's own free material: his VISSOFT 2003 keynote slides "Thinking with Interactive Visualization" (hosted by the conference), which summarise the book's model of visual thinking, preattentive processing, pattern perception, 2D vs 3D, working memory and the cost of knowledge; his 2013 Peter Wall Institute talk abstract "Visual Thinking Algorithms"; and his peer-reviewed open-access paper with Turton, Samsel, Bujack and Rogers, "Evaluating the Perceptual Uniformity of Color Sequences for Feature Discrimination" (EuroVis EuroRV3, 2017), read in full. The 4th edition's table of contents and description come from the publisher's page. Two later papers, "Measuring and Modeling the Feature Detection Threshold Functions of Colormaps" (IEEE TVCG 2019) and "Rainbow Colormaps Are Not All Bad" (IEEE CG&A 2023, CC BY), are cited from their published abstracts only, because their repository PDFs couldn't be downloaded. Not covered: most of the book's 12 chapters (optics and display, lightness and contrast, space perception, visual objects, narrative and gesture, the new "Designing for Perception" chapter) and its appendix of guidelines.

## The big idea (3 sentences)
Vision is a massively parallel pattern-finding system with a narrow serial bottleneck: low-level features (colour, orientation, size, motion) are processed everywhere at once, patterns are assembled from contours and regions, and only about three objects can be held in visual working memory at a time. Visualisation design should therefore put the most important data on channels that pop out preattentively, shape the display so that the patterns that matter form readily (using Gestalt cues such as proximity, connectedness, continuity and closure), and keep each "visual query" small enough to fit in working memory. Because thinking with a display is a loop of eye movements, queries and interactions, every navigation action has a cognitive cost, and good interactive design keeps the loop tight and context visible.

## Core concepts
- **Three-stage model** — (1) parallel, automatic extraction of features across the visual field; (2) pattern perception, where contours, regions and proto-objects form; (3) sequential, goal-directed processing through visual working memory and attention. Design for each stage.
- **Preattentive pop-out** — colour, shape, size, motion and simple shading can make a target pop out regardless of the number of distractors (search time flat, about 10 ms or less per item). Conjunctions of features generally do not pop out (a red square among red circles and blue squares needs serial search), with exceptions such as motion combined with form.
- **Gestalt cues as design tools** — proximity (closeness groups things), connectedness (lines bind things more strongly than proximity), continuity (smooth, continuous lines read as one path; use smooth connectors in diagrams), closure (closed contours define sets, as in Venn and Euler diagrams).
- **Visual working memory ≈ 3 objects** — change-detection studies (Vogel, Woodman and Luck 2001) show about three to four objects held over a one-second gap, where each object can be complex. Change blindness follows from this. Verbal working memory is better described by duration than by "7±2".
- **Visual queries** — thinking with a display means turning a problem into a visual pattern search ("find a smooth red connected path between two cities"), running it through eye movements, and holding partial results in working memory. Easy queries compare a single object at a time.
- **Epistemic actions and visual thinking algorithms** — people act on displays to learn (pan, brush, filter, sketch). Ware describes these dialogues as pseudo-code "algorithms" to help choose techniques: pathfinding on a map, design sketching, brushing, degree-of-relevance highlighting, generalised fisheye views, dynamic queries with scatter plots, monitoring.
- **Cost of knowledge** — approximate cost of getting more information: a glance within one fixation about 0.04 s, an eye movement about 0.5 s, a hypertext click about 1.5 s and loss of context, a pan or scroll about 3 s, simulated walking about 30 s. Navigation should use the cheapest means available, so make navigation visible, keep context, and avoid "walking".
- **Zoom vs multiple windows** — both try to keep focus and context. Because working memory is so limited, multiple linked views win as the number of things to compare grows; zooming suits few targets.
- **Dual coding and words + graphics** — graphics are good for structural relationships (who is connected to whom, what belongs where); words are better for procedural logic (if/then, while, but). Visual programming languages have mostly failed. Integrating labels with graphics beats separating them (Chandler & Sweller's split-attention effect).
- **2D vs 3D** — 3D with stereo and motion lets people read larger network structures with fewer errors, but adds interaction cost. Ware's "geon diagrams" (simple shaded 3D primitives for main entities, laid out mostly in a 2D plane) were easier to interpret and remember than flat UML, though weaker for text and layout.
- **Colormaps: uniformity for features, not just colour distance** — uniform colour spaces (CIELAB) were built from large colour patches. For small data features, sensitivity to chromatic differences falls and luminance dominates. A colormap that is "perceptually uniform" in CIELAB can still resolve features unevenly.
- **2017 colormap study** — using a test pattern (a ramp with a sine grating of decreasing amplitude) on Mechanical Turk (121 valid participants), the ParaView rainbow was highly non-uniform, with very poor resolution in the central green band. Viridis was the most uniform of the luminance-increasing maps. A perceptual grey had better overall resolving power. Two extended diverging maps (blue-orange, extended cool-warm) had the best resolving power with good uniformity.
- **2019 follow-up (abstract)** — neither CIELAB distance nor luminance alone predicted feature detection across nine colormaps. Down-weighting the red-green and blue-yellow terms gave a better model for small features.
- **Rainbows reconsidered (2023 abstract)** — rejecting all rainbow colormaps has become dogma. Rainbows have useful properties for some tasks (such as reading values against a key), while their non-monotonic luminance hides shape. Choose a colormap by task.

## Actionable heuristics for product design
- Decide what the viewer must spot first, and give only that one thing a unique preattentive feature (hue, size, motion or a strong luminance contrast). If two things share the highlight colour, neither pops out. Never rely on a conjunction (for example "the red bold ones") to make something findable.
- Put the most important quantitative comparison on position along a common scale, use luminance or lightness for ordered magnitude, and keep hue for categories. Ware's model explains why: luminance carries shape and fine detail, while chromatic differences fade for small features.
- For continuous data in heatmaps, maps or matrices, use a colormap whose lightness changes steadily (viridis family, perceptual grey) when shape and gradients matter. Use a diverging map with a meaningful midpoint when values sit above or below a reference. Avoid a standard rainbow when people must see structure, but allow rainbow-like or many-hue keys when the task is reading exact values from a legend. Check the colormap with a test pattern at the real feature size.
- Make small features and thin lines differ in luminance from their background, not just in hue. Hue-only contrast fails for fine detail, for people with colour-vision deficiency and on poor displays (`references/visual/color.md`, `references/books/oklab.md`).
- Use Gestalt cues on purpose in diagrams and dashboards: group related metrics by proximity, connect related items with lines when the relationship matters (connectedness beats proximity), draw links as smooth continuous curves, and use enclosing regions (closure) to show sets or groups.
- Keep each comparison within about three objects. Design views so the key question needs comparing two or three things, not seven. For comparisons across a large space, provide side-by-side linked views or small multiples rather than asking people to remember what they saw elsewhere.
- Minimise the cost of getting more information: show details on hover or in a side panel rather than on a new page, keep overview and detail visible together, and avoid navigation that loses context (full-page drill-downs, deep modal stacks). Every click that replaces the view costs memory as well as time.
- Choose zoom for exploring one area and multiple windows or linked views when comparing several distant areas. In maps and canvases, offer an overview inset or minimap so context stays visible during zoom.
- Integrate labels directly on or next to the marks (direct labelling) instead of separate legends wherever possible. Use words for conditions and logic, and graphics for structure and relationships.
- Avoid 3D for ordinary business charts: perspective distorts comparisons and costs interaction. Reserve 3D for genuinely spatial data or large network structures, with motion or stereo, and keep the layout mostly 2D.
- Use motion sparingly and purposefully. It is a strong preattentive cue, so use it for the one urgent change (a new alert, a live update), not for decoration, and respect reduced-motion settings.

## Evidence & caveats
- Ware's foundations are well-established vision science: visual search and pop-out (Treisman and successors), Gestalt grouping (see `references/books/wagemans-gestalt-century.md`), visual working memory limits (Luck & Vogel; see `references/books/magical-number-4-cowan.md`), contrast sensitivity for luminance vs chromatic gratings (Mullen 1985) and dual coding. These are strong, with the usual caveats: "preattentive" is now understood as a continuum of salience (guided search), not a strict binary, and conjunction search can be efficient in some cases.
- The cost-of-knowledge timings in the 2003 slides are rough illustrative magnitudes from his lab's models, not precise constants. The zoom vs multiple-windows finding comes from a specific lab study (Plumlee & Ware), so treat it as directional.
- The 2017 colormap study used crowdsourced participants on uncontrolled monitors (about 27–32 per colormap), with the authors' own colormaps among those tested. They argue this adds ecological validity; it also adds noise and a possible conflict of interest. The 2019 TVCG model refines it.
- The 2003 geon-diagram results come from Ware's own lab (with Irani) and haven't become mainstream practice; 2D diagrams remain the norm.
- Because the book itself wasn't read, many of its specific guidelines (for example on text legibility, colour for labelling, depth cues, motion and narrative) aren't captured here. Coverage is low. A library copy is recommended for detailed chart and diagram decisions.

## Disagreements with other references
- `references/books/tufte-visual-display.md` derives rules from design principles (data-ink, chartjunk). Ware derives them from perception. They usually agree (direct labels, small multiples, no 3D chart effects). Where Tufte's minimalism removes useful redundancy such as gridlines or extra encodings that aid pattern finding, prefer Ware's perceptual reasoning and test with users.
- `references/visual/color.md` currently recommends lightness-monotonic sequential palettes (viridis family) without qualification. Ware's 2017 and 2023 work agrees for shape and gradient tasks but shows that diverging extended maps can resolve features better, and that rainbow-like maps can suit value lookup. Add "choose by task" to that guidance.
- `references/psychology/cognition-perception-attention-reading.md` §1 lists preattentive channels for UI. Ware's slides add that conjunctions of motion and form can pop out. Both agree on "one pop-out per region".
- `references/books/ft-visual-vocabulary.md` chooses chart types by the data relationship. Ware adds the perceptual check for how each encoding will be seen. Use FT to pick the chart and Ware to tune the encoding.

## Best quotes (< 25 words each, max 5)
- "Conjunctions do not popout." (VISSOFT 2003 slides)
- "Do not ever make people walk." (VISSOFT 2003 slides, implications for navigation)
- "Make all navigation devices visible." (VISSOFT 2003 slides)
- "Uniform color spaces were created with the paint industry in mind." (Ware et al., EuroRV3 2017)

## Related
- `references/psychology/cognition-perception-attention-reading.md`, `references/psychology/cognition-memory-cognitive-load.md`
- `references/visual/color.md`, `references/books/oklab.md`, `references/books/albers-interaction-of-color.md`
- `references/books/tufte-visual-display.md`, `references/books/ft-visual-vocabulary.md`, `references/books/wagemans-gestalt-century.md`, `references/books/magical-number-4-cowan.md`
- Books: Ware, *Visual Thinking for Design* (2008; 2nd ed. *Visual Thinking for Information Design*, 2021); Munzner, *Visualization Analysis and Design* (2014)

## Sources
- https://webhome.cs.uvic.ca/~mstorey/vissoft2003/submissions/Colin_Ware.pdf (Ware, VISSOFT 2003 keynote slides, "Thinking with Interactive Visualization")
- https://slais.sites.olt.ubc.ca/files/2013/03/20130307_PWIAS-Talk_Colin-Ware-hr.pdf (Ware, 2013 talk abstract, "Visual Thinking Algorithms")
- https://diglib.eg.org/bitstream/handle/10.2312/eurorv320171107/007-011.pdf (Ware, Turton, Samsel, Bujack & Rogers, 2017, open access; read in full)
- https://scholars.unh.edu/ccom/1697 and https://repository.library.noaa.gov/view/noaa/60280 (Ware et al., IEEE TVCG 2019; abstract only)
- https://scholars.unh.edu/ccom/1477 and https://repository.library.noaa.gov/view/noaa/58953 (Ware, Stone & Szafir, IEEE CG&A 2023, CC BY; abstract only, PDF not retrievable)
- https://shop.elsevier.com/books/information-visualization/ware/978-0-12-812875-6 (publisher page: 4th ed. description and table of contents)
- https://vislab-ccom.unh.edu/people/colin_ware/ (author's lab page)
- https://scholars.unh.edu/ccom/143 (UNH repository record for the 2nd ed.; no full text)
