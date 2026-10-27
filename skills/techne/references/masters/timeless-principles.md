# Timeless Principles: What the Masters Agree On (and Where They Fight)

> Use this when: you need the core, cross-era rules of good design to make or defend a decision, set a design direction, or write design principles for a team/system.
> Use this when: reconciling craft intuition with experiment data, or debunking a design myth someone cited.
> Skip when: you need per-designer critique voices (load master-lenses.md) or the practice of taste (load taste.md).

These principles appear independently across 2,000+ years — from Vitruvius to Linear. Convergence across eras, media and cultures is the evidence that they are not fashion. Each lists: the principle, who converges on it, the evidence base, how to apply it in product work, and when not to.

Evidence tags: [strong] replicated/large-sample · [moderate] · [weak/anecdotal] · [contested].

---

## The 14 principles

### 1. Design is how it works, not how it looks
- **Converging voices:** Vitruvius (utilitas before venustas is not enough — all three), Bauhaus, Rams #2 (useful), Jobs (NYT 2003), Norman, Eames ("a plan for arranging elements to accomplish a purpose").
- **Apply:** begin every task by stating the user's job and the success signal. A visual-only change still must say what behavior it should change.
- **Evidence:** aesthetic-usability effect — attractive interfaces are *perceived* as more usable (Kurosu & Kashimura 1995; Tractinsky 2000, replication in Israel) [moderate]. So looks matter, but they shift perception, not actual task success; a beautiful broken flow still loses in the metrics.
- **Not when:** pure brand/expressive pieces (campaign sites, motion identities), where feeling is the function.

### 2. Less, but better (subtract the non-essential, never the essential)
- **Voices:** Rams, Jobs (focus = saying no), Vignelli (few typefaces), Saint-Exupéry (perfection when there is nothing left to take away; *Terre des hommes*, 1939), Hara (emptiness), Things.
- **Apply:** for every element, ask "what breaks if removed?" If nothing measurable or meaningful, remove. Prefer removing options to adding explanations.
- **Evidence:** choice overload is [contested] — the famous jam study (Iyengar & Lepper 2000) has inconsistent replications; a meta-analysis (Scheibehenne, Greifeneder & Todd 2010) found a mean effect near zero with high variance, while Chernev et al. (2015) identified moderators (complex choices, unclear preferences, time pressure). Simplification helps under those moderators.
- **Not when:** expert tools where density is efficiency (trading terminals, DAWs, IDEs). Tufte: clutter is a failure of design, not of information density.
- **Counterweight:** less content is not more whitespace. NN/g (2018) judges modern pages "too sparse" (opinion), and its data show attention falling off after the second screenful (74% of viewing time), so whitespace that pushes key content down has a real cost. Reduce content before adding space. → references/books/nngroup-scrolling-attention.md
- **Myth:** "less is more" means minimal aesthetic. Mies van der Rohe popularized the phrase (Robert Browning used it in 1855); it is about essence, not grey flatness.

### 3. Honesty: the design must not deceive
- **Voices:** Rams #6 (honest — does not manipulate the consumer with promises that cannot be kept), Aristotle (ethos must be real), Hara ("this will do", not craving), Tufte (lie factor), Stripe (trust as product).
- **Apply:** no fake scarcity, no hidden costs, no confirmshaming, no roach-motel cancellation, no pre-checked consent, honest chart axes. Cancel must be as easy as subscribe.
- **Evidence:** dark patterns are widespread: Mathur et al. (2019, "Dark Patterns at Scale", ~11K shopping sites) found ~11% contained them [strong as a measurement]; Luguri & Strahilevitz (2021) showed mild dark patterns roughly doubled acceptance in a controlled experiment while aggressive ones triggered backlash [moderate]. Regulators (FTC, EU DSA/consumer law) now act on them. Short-term lift, long-term trust and legal debt.
- **Rule for the agent:** if a variant wins only because users misunderstand it, it did not win. Refuse to design it and propose an honest alternative.

### 4. Consistency and the grid: order creates trust
- **Voices:** Müller-Brockmann, Vignelli, Swiss style, Alexander (echoes, alternating repetition), Airbnb DLS, every modern design system.
- **Apply:** one spacing scale (4- or 8-based), one type scale (5–7 sizes for most products), one icon style, tokens not hard-coded values. Internal consistency first, platform consistency (HIG / Material) second, external convention third.
- **Evidence:** consistency reduces learning time and errors (Nielsen's heuristic #4, 1994, derived from factor analysis of usability problems) [moderate].
- **Not when:** consistency would make different things look the same — things that behave differently must look different (Norman: signifiers). Foolish consistency over meaning loses.

### 5. Respect what users already know (convention and behavior)
- **Voices:** Fukasawa ("without thought"), Kare (borrowed metaphors), Norman (conceptual models), Jakob's Law (Nielsen: users spend most time on *other* sites), Alexander (structure-preserving change).
- **Apply:** use platform-standard controls and gestures. Spend your novelty budget only where it creates the product's differentiating value. For redesigns of big products, preserve learned locations and names unless the data shows they fail.
- **Evidence:** large redesigns commonly produce short-term metric dips ("change aversion") that recover; Google researchers documented change aversion and how to manage it (Sedley & Müller, "Minimizing Change Aversion for the Google Drive Launch", CHI 2013) [moderate]. Run redesigns long enough to separate novelty/change aversion from real effects.
- **Not when:** the convention is the problem (e.g. Arc questioned tabs — but see the cost; novelty must pay for itself).

### 6. Make it visible: signifiers, feedback, state
- **Voices:** Norman (gulfs of execution/evaluation), Raskin (no hidden modes), Victor (immediate connection), Freiberg (invisible details), Linear (instant feedback).
- **Apply:** every interactive element looks interactive; every action gets feedback; system state is always visible. Response-time thresholds: ~0.1 s feels instantaneous, ~1 s keeps flow, ~10 s loses attention (Miller 1968; Card, Robertson & Mackinlay 1991; popularized by Nielsen 1993) [moderate–strong, long-standing].
- **Not when:** never fully skip; but ambient/calm tech hides state deliberately until needed.

### 7. Protect the user's work and attention
- **Voices:** Raskin's First Law, Norman (design for error: slips need undo), Things (calm), Hara, Kowalski (no animation on frequent actions).
- **Apply:** autosave; undo over confirmation dialogs; never clear a form on error; notifications only when they serve the user's goal; batch, don't interrupt.
- **Evidence:** interruptions measurably raise stress and time cost (Mark, Gudith & Klocke, CHI 2008) [moderate]. Habituated confirmation dialogs are clicked through without reading (Raskin 2000; security-warning habituation studies, e.g. Anderson et al., fMRI work 2015–16) [moderate].

### 8. Details are the design
- **Voices:** Eames, Rams #8 (thorough), Jobs (back of the fence), Freiberg, Kowalski, Stripe, Kocienda (craft, diligence).
- **Apply:** design every state: empty, loading, partial, error, success, offline, permission-denied, long content, RTL, Dynamic Type/200% zoom, dark mode, reduced motion. A design is not done until its states are.
- **Evidence:** first impressions of visual appeal form within ~50 ms and correlate with later judgments (Lindgaard et al. 2006) [moderate]; credibility judgments rely heavily on visual polish (Fogg et al. 2003, Stanford Web Credibility, ~2,500 participants) [moderate].

### 9. Fit the form to the context (forces, not templates)
- **Voices:** Alexander (fit between form and context, resolving forces), Vitruvius (decorum), Aristotle (fit the speech to audience and occasion), Vignelli (appropriateness), Eames (constraints).
- **Apply:** before reusing a pattern, write the forces it resolves; check they exist here. A pattern from a social app (infinite feed) can be wrong for a utility app.
- **Not when:** under deadline in a well-understood problem — then use the established pattern and move on.

### 10. Show the data, honestly, and let comparison happen
- **Voices:** Tufte, Victor (Magic Ink: answer the question), Müller-Brockmann (objective presentation), Bertin (*Semiology of Graphics*, 1967).
- **Apply:** put compared things adjacent and on shared scales; position and length beat angle, area and color for quantitative reading (Cleveland & McGill 1984; replicated by Heer & Bostock 2010 via crowdsourcing) [strong].
- **Contested:** strict chartjunk elimination — embellishment can aid memorability (Bateman et al. 2010; Borkin et al. 2013) [contested].

### 11. One strong idea, summarized
- **Voices:** Rand, Bass ("symbolize and summarize"), Aristotle (unity of action), Jobs (focus), Linear (opinionated).
- **Apply:** every screen has one primary action; every flow has one goal; every product has one sentence. If you cannot say it in one sentence, the design will not say it either.

### 12. Iterate by making: variation and selection
- **Voices:** Bauhaus workshop, Eames (prototyping), Kocienda (*Creative Selection*: demo, critique, refine), Victor (immediate feedback loops), Alexander (piecemeal growth), modern experimentation culture (Kohavi, Tang & Xu, *Trustworthy Online Controlled Experiments*, 2020).
- **Apply:** generate several real variants, put them in front of users or into an experiment, select, repeat. Prefer working prototypes (code, Figma prototype) to static mocks.
- **Evidence:** most ideas fail when tested: Kohavi et al. report that at Microsoft roughly one-third of ideas improve the target metric, one-third are flat and one-third hurt; at mature, well-optimized products success rates can be lower (Kohavi, Tang & Xu 2020) [strong: large-scale, multiple companies]. Implication: your taste is a hypothesis generator, not an oracle.

### 13. Delight is earned after clarity
- **Voices:** Vitruvius (venustas), Norman (*Emotional Design*: visceral, behavioral, reflective), Kare (personality), Teenage Engineering, Duolingo, Airbnb.
- **Apply:** delight hierarchy — functional → reliable → usable → pleasurable (an adaptation of Maslow-style needs, popularized by Aarron Walter, *Designing for Emotion*, 2011) [weak/framework]. Add personality only where it does not slow the task: empty states, completions, milestones.
- **Not when:** in error states involving money, health or loss. Jokes there are disrespectful.

### 14. Design for the long term (and for people who are not in the room)
- **Voices:** Rams #7 (long-lasting) and #9 (environmentally friendly), Vignelli (timeless), Hara, Alexander ("timeless way"), Eames (society's interest in the overlap diagram).
- **Apply:** choose durable patterns over trends; design for accessibility from the start (WCAG 2.2 AA as floor: 4.5:1 text contrast, 3:1 UI components, 24x24 CSS px minimum target with spacing exceptions; platform guidance 44pt iOS / 48dp Android) [strong: standards]; count second-order effects on users' time, wellbeing and society.
- **Not when:** campaign/ephemeral work can and should be of its moment.

---

## Where the masters disagree (tensions you must resolve, not hide)

| Tension | Side A | Side B | Resolution heuristic |
|---|---|---|---|
| Minimal vs rich | Rams, Swiss, Tufte: remove | Alexander (15 properties: roughness, levels of scale), Teenage Engineering, Kare: life comes from texture and personality | Minimal for tools used daily and data; richness at moments of meaning and in brand surfaces. Never let either reduce comprehension. |
| Convention vs invention | Fukasawa, Nielsen, Norman | Kay, Victor, Browser Company | Innovate in the core value; be conventional everywhere else. Measure learning cost. |
| Intuition vs data | Jobs, Rand (one solution, conviction) | Kohavi/experiment culture, Duolingo (test everything) | Taste generates and kills ideas cheaply; experiments select among survivors on high-traffic surfaces. Low traffic or 0→1 → taste + qualitative research. |
| Speed vs craft | Duolingo / growth cadence | Things / Cultured Code slow polish | Ship small, reversible changes fast; hold irreversible or brand-defining changes to a higher craft bar. |
| Engagement vs calm | Duolingo streaks | Hara, Things, Raskin | Engagement is legitimate only if the user would endorse the mechanism knowing how it works and the behavior serves their stated goal. |
| Grid discipline vs expression | Müller-Brockmann | Bass, Carson-style expressive typography | Grid for product UI; break it deliberately and rarely for emphasis. |
| Opinionated vs configurable | Linear, Jobs | Enterprise/power-user demands | Default opinionated; add configuration only when data shows distinct segments with incompatible needs. |

---

## Myths and misattributions (flag them when you hear them)

- **Golden ratio makes UI beautiful.** [myth] No reliable evidence that people prefer 1.618 proportions; Markowsky ("Misconceptions about the Golden Ratio", *College Mathematics Journal*, 1992) debunked many claimed uses; preference studies are inconsistent. Use modular scales (1.2, 1.25, 1.333) because they create harmony through consistency, not magic.
- **7±2 items in a menu/nav.** [myth as applied] Miller (1956) described limits on absolute judgment and immediate memory span, not menu length; working memory is more like ~4 chunks (Cowan 2001). Menus are recognized, not recalled — length should be set by scannability and grouping, not by 7.
- **"Form follows function" is Bauhaus.** [misattribution] Louis Sullivan, 1896.
- **"Users don't scroll."** [myth] Users scroll when content signals continuation; attention does concentrate above the fold (eye-tracking, NN/g reported ~57% of viewing time above the fold, 2018 update) [moderate]. Put priority content high, but do not cram.
- **"If I'd asked people they'd have said faster horses" — Henry Ford.** [no evidence Ford said it]
- **"Three-click rule."** [myth] Task success and satisfaction do not drop at 3 clicks when each step is clear (Porter 2003, UIE study) [weak–moderate]. Information scent matters more than click count.
- **"Steve Jobs never did research."** [myth] Apple ran extensive internal usability/iteration; Jobs dismissed *focus groups for invention*, not evidence.
- **"Flat design is always more usable."** [contested] NN/g eye-tracking (2017) found weak signifiers in flat UIs increased uncertainty and time on page [moderate]. Flat is fine; signifier-free is not.
- **"Dark mode saves battery everywhere."** Only meaningfully on OLED and at high brightness (Purdue study, Dash & Hu 2021) [moderate].

---

## Turning principles into team principles (template)

When asked to write design principles for a product, avoid platitudes ("simple", "delightful"). A good principle:
1. Takes a side that a reasonable team could reject ("Fast over flexible" — Linear-style).
2. Has a tie-breaker test ("When in doubt, remove the setting and pick a default").
3. Includes an example of what it rules out.
4. Is short enough to be quoted in critique.

Example set for a large consumer app:
- **Honest by default.** If a metric wins because users misunderstood, it lost. Rules out: pre-selected annual plans, hidden cancel.
- **Evidence over eloquence.** Opinions are welcome as hypotheses; decisions on high-traffic surfaces need data. Rules out: shipping a redesign with no holdout.
- **Every state is the product.** Rules out: designs handed off with only the happy path.
- **Spend novelty only where we win.** Rules out: custom pickers and bespoke gestures in commodity flows.
- **Calm over clamor.** Notifications and badges must serve the user's goal. Rules out: guilt-based re-engagement copy.

---

## 60-second principle audit (run before any handoff)

1. Job and success signal stated? (P1)
2. Anything removable without loss? (P2)
3. Any element that only works if the user misunderstands? (P3)
4. All spacing/type/color from tokens and scales? (P4)
5. Any non-standard control without a clear payoff? (P5)
6. Every action has a visible signifier and feedback <100ms? (P6)
7. Can the user lose work, or get interrupted without benefit? (P7)
8. All states designed (empty/loading/error/long/accessibility)? (P8)
9. Pattern's forces actually present here? (P9)
10. Charts honest and comparisons adjacent? (P10)
11. One primary action per screen? (P11)
12. Is there a plan to test or validate? (P12)
13. Delight placed after clarity, absent from painful moments? (P13)
14. WCAG 2.2 AA met, and would this look right in 3 years? (P14)
