# Master Lenses: How the Greats Would Judge This Design

> Use this when: critiquing a screen, flow, component or system and you want a sharp, named point of view ("How would Rams judge this?").
> Use this when: stuck between options and need a principled tie-breaker, or need to explain a recommendation with authority.
> Skip when: the question is purely empirical (did variant B win?) — go to the experimentation references; lenses generate hypotheses, data selects.

## How to use these lenses (agent protocol)

1. Pick 2–4 lenses that fit the artifact. Do not run all 35; that produces mush.
   - Visual/brand surface: Rams, Swiss (Müller-Brockmann/Vignelli), Rand, Hara.
   - Interaction/flow: Norman, Raskin, Victor, Kowalski/Freiberg, Fukasawa.
   - Data/dashboards: Tufte, Victor (Magic Ink), Müller-Brockmann.
   - Persuasion/onboarding/paywall: Aristotle (rhetoric), Bass, ethics check from Rams #6 ("honest").
   - Whole product/system: Vitruvius, Alexander, Eames, Kay, Linear, Airbnb.
2. For each lens, state: the question it asks, the verdict, and one concrete change.
3. Name the tension when lenses disagree (e.g. Rams "remove" vs Alexander "add life"). Resolving tensions is the designer's job; say which way you lean and why.
4. Convert each concrete change into a testable hypothesis when the product has traffic (see data-driven references). A lens verdict is a prior, not proof.

Format for each lens below: **Core model** -> **Questions to ask** -> **Typical verdicts in UI** -> **Misuse / when not to apply**.

---

## Antiquity

### Vitruvius — firmitas, utilitas, venustas
Source: Vitruvius, *De architectura* (c. 30–15 BCE), Book I. [strong as a canonical framework; it is a lens, not an empirical finding]
- **Core model:** a good building is solid (firmitas), useful (utilitas), delightful (venustas) — in Morgan's translation, built "with due reference to durability, convenience, and beauty". All three, simultaneously ("any one missing is failure" is this skill's interpretation, not the text). Behind the triad sit six principles (Book I, ch. 2): order, arrangement, eurythmy, symmetry, propriety, economy.
- **Operational lessons:** build everything from one module, then make documented optical corrections (corner columns thickened, entasis) — the ancestor of a spacing scale plus deliberate exceptions; proportions are integer fractions and modules, not phi. The Ephesus law (overrun up to 25% paid by the state, beyond that by the architect) is a scoping rule. Callias' crane worked as a model and failed at full scale — a caution on prototypes. → references/books/vitruvius-ten-books.md
- **Digital translation:** firmitas = performance, reliability, accessibility, state coverage, code that does not break; utilitas = solves the job-to-be-done; venustas = craft, aesthetics, emotional resonance.
- **Questions:** Does it survive bad network, empty data, 200% text, a 320px screen? Does it do the job? Would anyone care if it disappeared?
- **Verdicts:** Dribbble shots fail firmitas; enterprise tools fail venustas; "growth hacks" fail utilitas for the user.
- **Misuse:** treating venustas as optional polish to add at the end. In consumer products delight is part of utility.

### Aristotle — Rhetoric (ethos, pathos, logos)
Source: Aristotle, *Rhetoric* (4th c. BCE). [canonical framework]
- **Core model:** persuasion works through the speaker's character *as shown in the speech itself* (ethos — not prior reputation; its parts are good sense, good character, goodwill), the audience's emotions (pathos), and the argument itself (logos). Testimony and prior judgments are "witnesses", non-technical proofs used as evidence. Each emotion has a state of mind, a target and grounds; fear needs a way out ("fear sets us thinking what can be done") — so a warning or security prompt must offer a concrete action. Aristotle insisted rhetoric must suit the audience and the occasion (kairos is a later-developed companion idea).
- **Digital translation:** every screen that asks for something (signup, permission, paywall, upgrade) is a speech. Ethos = competence (no errors), integrity (no hidden terms), goodwill (warns before an avoidable charge). Real social proof and endorsements are evidence (witnesses), not ethos. Pathos = imagery, tone, the felt outcome. Logos = clear value, comparisons, numbers.
- **Questions:** Which appeal is carrying this screen? Is any appeal fake (invented scarcity, fake reviews = counterfeit ethos)? Is the ask made at the right moment (after value was felt)?
- **Verdicts:** permission prompts shown on launch have no logos and no kairos — move them to the moment of need. Paywalls that are all pathos and no logos erode trust.
- **Misuse:** using rhetoric to persuade users against their interest. Aristotle separates the sophist by moral purpose, but the *Rhetoric* also teaches spurious arguments and tricks without condemning all of them — techne's ethics gate is stricter than Aristotle and wins. Dark patterns are counterfeit appeals. → references/books/aristotle-rhetoric.md

### Aristotle — Poetics (narrative structure)
Source: Aristotle, *Poetics* (c. 335 BCE). [canonical]
- **Core model:** a plot is a whole with beginning, middle, end; unity of action (one thing happens, not a list of episodes); complication and unraveling (desis/lusis) carry tension and resolution; reversal (peripeteia) and recognition (anagnorisis) create meaning. (Catharsis is a single contested clause in the text — don't build arguments on it.) Recognition through tokens or signs is the least artistic kind; recognition arising from the incidents is the best.
- **Digital translation:** onboarding, checkout, a first session, a case study, a pitch — all are plots. Unity of action = one goal per flow. Recognition = the "aha" moment where the user sees value. End = a satisfying, explicit completion state.
- **Questions:** What is the single action of this flow? Where is the recognition moment, and how early — and does the user reach it through their own data, or is it announced by a badge or confetti (a token, the weakest kind)? Does the flow end, or just stop? Removal test: "a thing whose presence or absence makes no visible difference is not an organic part of the whole" — which steps fail it? → references/books/aristotle-poetics.md
- **Verdicts:** onboarding that tours 9 features is episodic (Aristotle called episodic plots the worst). Cut to one action that produces recognition.
- **Misuse:** forcing drama into utilitarian tasks. A tax form should have no reversals.

---

## Modernism

### Bauhaus (1919–1933: Gropius, Moholy-Nagy, Albers, Breuer, Bayer)
- **Core model:** unify art, craft and industry; design for mass production; learn by making with real materials; the workshop over the academy. Albers's color teaching: color is relative — the same color reads differently by context (Josef Albers, *Interaction of Color*, 1963). [strong for the perception claim]
- **Questions:** Is this designed for the real material (the medium: pixels, the browser, the platform toolkit) or imitating another medium? Was it prototyped in the material?
- **Verdicts:** skeuomorphic leather in a calendar app ignores material; a Figma-only design never tested in code ignores material. Check color tokens in context, not in a swatch grid.
- **Myth flag:** "Form follows function" is Louis Sullivan (1896, "form ever follows function"), an American architect, not a Bauhaus slogan. [strong: attribution]
- **Misuse:** reading Bauhaus as "minimal and grey". The school was experimental, colorful and playful.

### Swiss / International Typographic Style — Josef Müller-Brockmann
Source: Müller-Brockmann, *Grid Systems in Graphic Design* (1981). [canonical]
- **Core model:** the grid is an ethical instrument: objective, rational order makes information clearer and more trustworthy. Asymmetric layouts, sans-serif type, flush-left ragged-right text, photography over illustration.
- **Questions:** What is the grid and does every element snap to it? Is hierarchy created by position and scale rather than decoration? Is alignment consistent across screens?
- **Verdicts:** inconsistent padding (13px here, 16px there) is not a small issue — it signals disorder. Use a spacing scale (4/8-based) and column grid; ragged-left body text is almost always wrong.
- **Misuse:** grids as prison. Müller-Brockmann wanted the grid to enable, and emotional/brand surfaces can break it deliberately — once you know where it is.

### Massimo Vignelli
Source: Vignelli, *The Vignelli Canon* (2010, free PDF published by the author). NYC subway diagram (1972). [canonical]
- **Core model:** design is one discipline at every scale ("If you can design one thing, you can design everything"). Semantics (meaning), syntactics (structure/grid), pragmatics (is it understood). Very few typefaces; timelessness over trend; discipline, appropriateness, ambiguity avoided.
- **Questions:** How many typefaces/weights/sizes are in use and can that halve? Is this styled for this year or for ten years? Is the meaning (semantics) clear before the style?
- **Verdicts:** a type scale with 14 sizes fails Vignelli; 5–7 sizes is usually enough for a product UI.
- **Cautionary tale:** the 1972 subway diagram was geometrically clean but distorted geography (Central Park as a square), and was replaced in 1979 partly due to public confusion. [moderate: well documented history] Lesson: elegance that ignores the user's mental model (pragmatics) loses.

### Dieter Rams (Braun, Vitsœ)
Source: Rams's ten principles of good design (formulated late 1970s/early 1980s; published by Vitsœ). Motto "Weniger, aber besser" — less, but better.
- **The ten:** good design is innovative; makes a product useful; is aesthetic; makes a product understandable; is unobtrusive; is honest; is long-lasting; is thorough down to the last detail; is environmentally friendly; is as little design as possible.
- **Questions (fast audit):** Can you remove an element and lose nothing? Does it explain itself without a tooltip? Does it pretend to be more than it is (honesty)? Will it look dated in three years? Is every state finished (thorough)?
- **Verdicts:** fake urgency timers violate "honest". Feature-flag sprawl visible in UI violates "as little design as possible". Missing empty/error states violate "thorough".
- **Misuse:** "less" as aesthetic minimalism that hides function (icon-only toolbars with no labels). Rams's "less" is less *non-essential*, never less understandable. Rams's devices had labels.

### Charles & Ray Eames
Sources: Eames Office; "Design Q&A" (1972 exhibition film); *Powers of Ten* (1977). Quote: "The details are not the details. They make the design." [attributed to Charles Eames, widely cited]
- **Core model:** design is solving within constraints ("Design depends largely on constraints" — Design Q&A); the best work sits in the overlap of the client's needs, the designer's concerns and society's interest (Eames design-process diagram, 1969). Be a good host: anticipate the guest's needs. Prototype relentlessly; play is serious.
- **Questions:** What are the real constraints and are we exploiting them? Is this a good host (anticipates what the user needs next)? Have we looked at it from 10x closer and 10x further away (Powers of Ten)?
- **Verdicts:** zoom out — does the screen fit the journey? Zoom in — does the 1px divider align?
- **Misuse:** treating constraints as excuses. Eames treated them as the brief.

### Paul Rand
Sources: *Thoughts on Design* (1947); *Design, Form, and Chaos* (1993). IBM (1956; 8-bar version 1972), ABC (1962), UPS (1961), NeXT (1986).
- **Core model:** design is putting form and content together; simplicity, wit and the universal; a logo identifies, it does not explain. Rand presented one solution and argued for it (the NeXT booklet is the famous example).
- **Questions:** Is there a single strong idea, or three timid ones? Is there wit — a moment of surprise that rewards attention? Does the brand mark need explaining?
- **Verdicts:** for an agent, Rand's lesson is *have a recommendation*. Present your best option first with a rationale; alternatives are supporting cast.
- **Misuse:** one-solution arrogance where uncertainty is real and testable. Rand was designing identities, not conversion funnels.

### Saul Bass
Sources: title sequences (*The Man with the Golden Arm* 1955, *Vertigo* 1958, *Psycho* 1960); identities (AT&T bell 1969 and globe 1983, United Airlines, Minolta). Quote attributed: "Design is thinking made visual." [attributed]
- **Core model:** symbolize and summarize — reduce a complex story to one simple, memorable image; set mood before content; motion as narrative.
- **Questions:** What is the single image that summarizes this product/feature? Does the first second (splash, hero, onboarding frame) set the right mood?
- **Verdicts:** an app icon with five elements fails Bass. A launch animation that conveys nothing but delay fails Bass.
- **Misuse:** symbolism that becomes cryptic. Summaries must still be recognized.

---

## Computing pioneers

### Alan Kay
Sources: "A Personal Computer for Children of All Ages" (1972, the Dynabook); Smalltalk at Xerox PARC; "User Interface: A Personal View" (1989) with "Doing with Images makes Symbols" (building on Bruner's enactive/iconic/symbolic modes). Quotes: "The best way to predict the future is to invent it" (1971); "Point of view is worth 80 IQ points" [attributed, 1980s talks].
- **Core model:** the computer is a medium for thought, not a tool for tasks; design for learners; interfaces should move users from doing (enactive) to seeing (iconic) to abstract reasoning (symbolic).
- **Questions:** Does this make users more capable over time, or just faster at one task? Is there a direct-manipulation path for novices and a symbolic path (shortcuts, commands) for experts? What new point of view does this design take?
- **Verdicts:** a product with only menus (no direct manipulation) or only gestures (no symbolic/keyboard path) serves half the learning curve.
- **Misuse:** visionary framing as an excuse to ignore today's users.

### Jef Raskin
Source: *The Humane Interface* (2000). Initiated the Macintosh project (1979); Canon Cat (1987).
- **Core model:** modes cause errors (the same action does different things depending on hidden state); users inevitably form habits, so design for habituation; never lose user work; measure efficiency (GOMS/keystroke-level, information-theoretic efficiency). Quasimodes (held keys, like Shift) are acceptable because the user physically maintains them.
- **Raskin's First Law (adapted from Asimov):** a computer shall not harm your work or, through inaction, allow your work to come to harm.
- **Questions:** Is there hidden state that changes what a tap does? Does any path lose unsaved input? Does a confirmation dialog get habituated into a reflexive "OK" (making it useless)?
- **Verdicts:** replace "Are you sure?" dialogs with undo (habituation makes confirmations worthless). Autosave drafts. Avoid toggle states that are not visible.
- **Misuse:** extreme anti-mode purism; many good tools have visible, well-signified modes (e.g. edit mode in a list).

### Bill Atkinson
Sources: QuickDraw, MacPaint (1984), HyperCard (1987); Andy Hertzfeld's folklore.org stories ("Round Rects Are Everywhere!", "-2000 Lines Of Code"). [anecdotal but primary-source memoir]
- **Core model:** craft lives in the engine; make the hard thing feel instant; let ordinary people author (HyperCard: stacks, cards, buttons — end-user programming). Folklore: Jobs pushed for rounded rectangles after walking around and pointing them out everywhere in the real world; Atkinson found a fast way to draw them.
- **Questions:** Is the primitive right (is everything built from a few powerful elements)? Could a non-expert make something with this? Does simplifying code also simplify the experience?
- **Verdicts:** HyperCard's lesson for design systems: few primitives with composability beats hundreds of bespoke components.
- **Misuse:** romanticizing heroics; the lesson is primitives and empowerment, not all-nighters.

### Don Norman
Sources: *The Design of Everyday Things* (1988 as *The Psychology of Everyday Things*; revised 2013); Norman & Draper, *User Centered System Design* (1986); *Emotional Design* (2004).
- **Core model:** affordances (what actions are possible) and signifiers (perceivable cues of where/how to act — the 2013 edition's correction, since designers misused "affordance"); mapping; feedback; constraints; conceptual models; the gulfs of execution (how do I do it?) and evaluation (did it work?); slips vs mistakes; emotion at visceral, behavioral, reflective levels.
- **Questions:** Can the user tell what is tappable? Does every action get feedback within ~100ms? Does the system image match the user's conceptual model? When users err, is it a slip (design for undo) or a mistake (fix the model)?
- **Verdicts:** "user error" is almost always design error. Flat buttons with no signifier fail. Silent saves fail the gulf of evaluation.
- **Misuse:** using Norman to justify only usability; he later argued strongly for emotion and for "humanity-centered" design.

### Bret Victor
Sources: "Magic Ink: Information Software and the Graphical Interface" (2006, worrydream.com — the source of the context order environment > history > interaction and of the "tight feedback loop / drop the Submit button" rule; → references/books/magic-ink.md); "Up and Down the Ladder of Abstraction" (2011); "Inventing on Principle" (talk, 2012); "Learnable Programming" (2012).
- **Core model:** creators need an immediate connection to what they create; most software is information software whose job is to answer questions, so interaction is a cost — prefer showing the answer, inferred from context and history; let people see and manipulate the system at multiple levels of abstraction. Work from a principle you can name.
- **Questions:** Could this screen answer the user's question without a single tap? Can the user see the effect of a change immediately (no compile/submit/refresh gap)? What principle does this product fight for?
- **Verdicts:** a flight search that requires 6 filters before showing results fails Magic Ink; show plausible results first, refine inline. Settings with no live preview, or results behind a Submit button, fail both Magic Ink and Inventing on Principle (high-stakes confirms excepted).
- **Misuse:** applying "eliminate interaction" to manipulation software (editors, games) where interaction is the point.

### Edward Tufte
Sources: *The Visual Display of Quantitative Information* (1983); *Envisioning Information* (1990); *Visual Explanations* (1997); *Beautiful Evidence* (2006); *The Cognitive Style of PowerPoint* (2003).
- **Core model:** above all else show the data; maximize data-ink ratio; erase chartjunk; small multiples for comparison; lie factor (visual effect size / data effect size, should be ~1); integrate words, numbers, images; sparklines as word-sized graphics.
- **Questions:** What comparison should the viewer make, and is it adjacent? Is the axis honest (zero baseline for bars)? What ink can be erased without losing information?
- **Verdicts:** 3D pie charts, dual axes without justification, gauges for single numbers all fail. Dashboards: prefer small multiples with shared scales.
- **Chart chooser — relationship first** (FT *Visual Vocabulary*): name the relationship, then pick: deviation → diverging bar; correlation → scatter; ranking → sorted bar; distribution → histogram/box/dot strip; change over time → line; magnitude → bar; part-to-whole → stacked bar or gridplot; spatial → choropleth/proportional symbol; flow → Sankey. The FT tolerates pie/donut for 2–3 parts and dual axes "used carefully"; this lens doesn't — default to sorted bars and lines. → references/books/ft-visual-vocabulary.md
- **Contested:** strict data-ink minimalism. Bateman et al. (2010, "Useful Junk?", CHI) found embellished charts were recalled better after 2–3 weeks with no comprehension loss; Borkin et al. (2013) found memorability rises with recognizable pictographs. [contested] Use minimalism for analysis tools, measured embellishment for communication.

---

## Apple lineage

### Steve Jobs (on taste and product)
Sources: *Triumph of the Nerds* (PBS, 1996) — "expose yourself to the best things that humans have done"; *New York Times Magazine* (2003) — "Design is not just what it looks like and feels like. Design is how it works"; *BusinessWeek* (1998) — simple can be harder than complex; focus means saying no. [interviews: primary sources]
- **Core model:** design is the whole product; focus is saying no to good ideas; the back of the fence (unseen parts) should be as good as the front (story from his father, via Isaacson's biography 2011) [anecdotal]; taste is cultivated by exposure to the best of humanity, including outside computing.
- **Questions:** What are we saying no to? Is the unseen work (error copy, loading states, accessibility labels) as good as the hero screen? Would we be proud to demo this?
- **Misuse:** "people don't know what they want" as permission to skip research. Apple did extensive internal testing and iteration; the "faster horses" Henry Ford quote often paired with this has no evidence Ford said it. [myth flag]

### Jony Ive / Apple Industrial Design
Sources: interviews and Apple design films (e.g. *Objectified*, 2009, dir. Gary Hustwit); Ive cites Rams as an influence.
- **Core model:** care is perceptible; simplicity is not the absence of clutter but the result of deeply understanding the product's essence; materials and manufacturing are part of the design; obsession with the "inevitable" form.
- **Questions:** Does this feel inevitable — as if it could not be otherwise? What is the essence of this product, and does the form express only that?
- **Misuse:** thinness-style obsessions that trade function for form (the much-criticized butterfly keyboard era is the cautionary tale) [moderate: widely reported].

### Ken Kocienda — *Creative Selection* (2018)
- **Core model:** ideas evolve through demos: build a concrete thing, show it, get decisive feedback, iterate. Seven essential elements he names: inspiration, collaboration, craft, diligence, decisiveness, taste, empathy. Example: the iPhone keyboard and autocorrect were selected over many demo rounds, with heuristics like enlarging invisible touch targets for predicted keys.
- **Questions:** Is there a working demo, or are we debating abstractions? Who decides, and when? Are we iterating in small, concrete increments?
- **Bridge to data:** creative selection is literally variation + selection. A/B tests are the scaled version; demos to taste-holders are the low-traffic version. Use both.
- **Misuse:** demo culture that depends on one executive's taste with no user evidence.

### Susan Kare
Sources: original Macintosh icons and fonts (Chicago, Geneva, 1983–84); later Windows 3.0 icons and Solitaire cards. Worked on 32x32 pixel grids, drawing early on graph paper. [well documented]
- **Core model:** icons are like traffic signs: meaning in the fewest marks; borrow metaphors people already know (trash can, scissors, paintbrush); personality through tiny details (the Happy Mac); the constraint of the pixel grid as creative medium.
- **Questions:** Is the icon recognizable at its smallest size? Does it rely on a metaphor users already hold? Does it have warmth, or is it generic clip-art?
- **Verdicts:** icons must be tested at real size, in grayscale, and with labels removed (if unrecognizable, keep the label — icon recognition alone is unreliable for abstract actions [moderate]).
- **Misuse:** metaphors from a culture or era users do not share (the floppy-disk save icon survives on convention only).

---

## Japan

### Kenya Hara (Muji, *Designing Design* 2007, *White* 2010 English ed.)
- **Core model:** emptiness (not simplicity) — an empty vessel invites the user to bring their own meaning; Muji aims for "this will do" (satisfied acceptance) rather than "this is what I want" (craving) — a design of rational sufficiency, not desire; "ex-formation": making the familiar unknown again to see it freshly.
- **Questions:** Does this leave room for the user, or impose the brand at every turn? Is it designed to provoke craving (bad) or calm sufficiency (good)? What would we see if we pretended never to have seen this category before?
- **Verdicts:** ethical counterweight to engagement maximization. A Hara product does not need streak guilt.
- **Misuse:** emptiness as lack of guidance. Empty is not the same as unclear.

### Naoto Fukasawa (Muji wall-mounted CD player 1999; *Super Normal* with Jasper Morrison 2006)
- **Core model:** "without thought" — design should fit behavior people already perform unconsciously; design dissolves into behavior. "Super normal": the ordinary object perfected so that it is quietly better, not attention-seeking.
- **Questions:** What do users already do here without thinking (habits, platform conventions)? Does the design fit that, or demand new learning? Is it trying to be noticed?
- **Verdicts:** do not reinvent standard controls (pull-to-refresh, back gestures, date pickers) unless the gain is large; Jakob's Law echoes this (users spend most time in other products) [moderate].
- **Misuse:** using "normal" to justify copying the market's mediocre conventions.

---

## Systems and wholeness

### Christopher Alexander
Sources: *Notes on the Synthesis of Form* (1964); "A City is Not a Tree" (1965); *A Pattern Language* (1977, 253 patterns); *The Timeless Way of Building* (1979); *The Nature of Order* (2002–2005, 15 properties).
- **Core model:** good design resolves conflicting forces in a context (the "fit" between form and context); patterns are named, reusable solutions to recurring problems, linked into a language; real structures are semi-lattices, not trees; living structure grows by small, structure-preserving transformations; the "quality without a name".
- **Fifteen properties (Nature of Order):** levels of scale, strong centers, thick boundaries, alternating repetition, positive space, good shape, local symmetries, deep interlock and ambiguity, contrast, gradients, roughness, echoes, the void, simplicity and inner calm, not-separateness.
- **Questions:** What forces conflict here (speed vs safety, discoverability vs density)? Does this change preserve the structure that already works (vital for redesigns of big products)? Is navigation forced into a tree when users think in a lattice?
- **Verdicts:** incremental, structure-preserving change is Alexander's method and matches data-driven iteration on mature products. Design systems are pattern languages: each component should document problem, context, forces, solution.
- **Influence:** inspired software design patterns (Gamma et al., 1994) and the wiki (Ward Cunningham). [strong: documented]
- **Misuse:** patterns as copy-paste templates without the forces.

---

## Modern digital masters

### Linear (Karri Saarinen et al.)
Source: "The Linear Method" (public essays on linear.app). [primary, company self-description]
- **Core model:** opinionated software: make decisions so users don't have to; speed as a feature (instant UI, optimistic updates, local-first sync); keyboard-first with command menu; quality as the strategy; design for the builder's focus, not the manager's reporting.
- **Questions:** What is the latency of every interaction (target: feels instant, <100ms)? Is there a keyboard path and a command palette? Where did we add a setting because we were afraid to decide?
- **Misuse:** the "Linear look" (dark, gradients, glow) copied without the speed and opinion. The look is not the lesson.

### Stripe
- **Core model:** developer experience is the product — documentation, API naming, error messages are design surfaces; extreme attention to detail as trust signal (money requires ethos); explain complex systems with crafted visuals and interactive docs.
- **Questions:** Is the error message actionable (what happened, why, how to fix)? Would a skeptical expert trust this with money? Are docs designed with the same care as marketing?
- **Misuse:** heavy animated gradients and polish on low-trust or performance-critical flows.

### Vercel / Rauno Freiberg
Sources: Freiberg, "Invisible Details of Interaction Design" (essay, 2023, rauno.me); Vercel's Geist design system and published web interface guidelines. [primary]
- **Core model:** great interaction feels like an extension of the body; details users never consciously notice (gesture velocity, interruptible animations, hit-area size, focus states, scroll restoration) produce the feeling of quality; borrow from physics and real-world metaphors.
- **Questions:** Can animations be interrupted and reversed mid-flight? Do gestures respect momentum? Is focus visible and logical for keyboard users? Does back restore scroll position?
- **Misuse:** micro-detail work before the flow is right.

### Emil Kowalski
Sources: open-source Sonner (toasts) and Vaul (drawer); essays and course (animations.dev). [primary, practitioner]
- **Core model:** animation must have a purpose (orientation, feedback, continuity); keep UI animations fast (typically under ~300ms); ease-out for entering elements; never animate high-frequency, keyboard-initiated actions (they become friction); respect `prefers-reduced-motion`.
- **Questions:** How many times a day will a user see this animation? (If hundreds, remove or shorten it.) Does it explain spatial relationships, or just decorate?
- **Misuse:** treating his numbers as laws; they are craft heuristics [weak/anecdotal but widely shared].

### Teenage Engineering (OP-1, 2011; Pocket Operators)
- **Core model:** product as instrument; deliberate constraints spark creativity; color-coded, tactile, legible controls; playfulness and humor without sacrificing function; strong, consistent visual language across products.
- **Questions:** Where could a constraint make this more fun and focused? Is there personality in the details? Does each control have one clear mapping?
- **Misuse:** constraints that frustrate mainstream users; TE designs for enthusiasts.

### The Browser Company (Arc, 2022–23; Dia, 2025)
- **Core model:** question category assumptions (tabs, bookmarks, the browser as window); "spaces", command bar, auto-archiving tabs; delight as differentiator.
- **Cautionary lesson:** in 2025 the company publicly acknowledged Arc was too different/complex for mainstream adoption and shifted focus to a simpler AI browser (Dia); the company was later acquired by Atlassian (announced 2025). [moderate: public statements; verify details before citing]
- **Questions:** How much novelty can our audience absorb? What is the learning cost vs the payoff, and for which segment?
- **Misuse:** novelty for its own sake in a category with deep habits (Fukasawa lens disagrees).

### Things / Cultured Code (Things 3, 2017)
- **Core model:** calm, crafted, focused tool; slow release cadence for polish; few features, each considered; delightful micro-interactions (the "Magic Plus" button that can be dragged to insert where you want).
- **Questions:** Does every feature earn its complexity? Is the app calm — no badges screaming, no streak guilt?
- **Misuse:** applying slow-craft cadence where the market moves weekly.

### Duolingo
Sources: Duolingo engineering/product blog posts on experimentation and streaks. [primary, company self-reported; numbers unverified by third parties]
- **Core model:** test almost everything; habit formation through streaks, reminders, gamification; a character (Duo) with personality; make learning feel like play.
- **Questions:** What habit loop are we building, and does it serve the user's goal (learning) or only the metric (DAU)? Do streak mechanics include forgiveness (freezes, repair)?
- **Ethical tension:** guilt-based notifications and loss-aversion mechanics can cross into manipulation. Apply the "would the user endorse this mechanic if they understood it?" test.
- **Misuse:** copying streaks onto products where daily use is not in the user's interest.

### Airbnb
Sources: Airbnb Design Language System (public articles, ~2016); storyboarding of the guest/host journey (widely reported, ~2012–13, inspired by Pixar-style storyboards) [moderate]; Lottie (open-source animation library, 2017); Brian Chesky's "11-star experience" thought exercise [anecdotal, talks].
- **Core model:** design the whole journey, including offline moments; a unified design language for consistency at scale; imagine absurdly great experiences (11 stars) then work backward to feasible ones.
- **Questions:** What happens before and after the screen? What would a 7-star version of this step look like, and what part is feasible now?
- **Misuse:** storyboards without data on where the real drop-offs are.

### Figma
- **Core model:** design is a team sport — multiplayer, browser-based, one source of truth; designers, engineers and PMs in the same file; community and shareable components.
- **Questions:** Can stakeholders comment on the real thing early? Is the file structured so others (and agents) can find components, tokens and states?
- **Misuse:** feedback-by-committee; multiplayer does not mean everyone decides.

---

## Quick lens picker

| Situation | Primary lenses | Typical killer question |
|---|---|---|
| Button padding / spacing tweak | Müller-Brockmann, Vignelli, Freiberg | Is it on the scale and grid? |
| New feature screen | Norman, Rams, Victor | Can a first-timer tell what to do and see that it worked? |
| Onboarding | Aristotle (Poetics), Fukasawa, Kay | Where is the recognition moment? |
| Paywall / upgrade | Aristotle (Rhetoric), Rams #6, Hara | Which appeal is doing the work, and is it honest? |
| Dashboard / analytics | Tufte, Victor (Magic Ink) | What comparison should the eye make? |
| Redesign of mature product | Alexander, Fukasawa, Kocienda | Does this preserve what already works? |
| New product / 0→1 | Kay, Eames, Airbnb, Browser Company | What new point of view, at what learning cost? |
| Design system | Alexander, Atkinson, Vignelli, Airbnb | Are these few, composable, named primitives? |
| Motion | Kowalski, Freiberg, Bass | Does motion explain, and is it fast enough to watch 100 times? |
| Icons / brand marks | Kare, Rand, Bass | Is it recognizable at 16px, and does it summarize? |
| Productivity tool | Linear, Raskin, Things | Is every action instant and undoable? |
