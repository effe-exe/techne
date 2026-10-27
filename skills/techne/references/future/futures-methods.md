# Futures Methods a Designer Can Run in a Day

> **Use this when:** asked "what will this product/workflow look like in 3, 5 or 10 years?", "how will AI change this job?", or to produce a vision, north-star concept, scenario set or design fiction.
> **Also use when:** a roadmap debate is really a disagreement about the future (two people assuming different scenarios), or a stakeholder is over- or under-hyping a technology.
> **Skip when:** the question is about the next sprint on a live product → `modes/optimize.md`; for what history teaches → `futures-visions-that-came-true.md`; for the human limits → `futures-human-constants.md`.

Evidence tags: [strong] · [moderate] · [weak/anecdotal] · [contested] · [speculative]. Futures methods are **structured imagination tools**, not prediction engines. Their value is that they surface assumptions, widen options and align teams, and that value is mostly practitioner-reported [moderate/weak]. No method here "predicts" anything. Never present scenario output as forecast.
Used by: `modes/envision.md` steps 3–5 and 7.

---

## 0. Point of view

1. **Separate three kinds of statement, every time:** (a) *established*: shipping, measured, documented; (b) *emerging*: in labs, betas, early adopters, with a credible path; (c) *speculative*: plausible but unproven. Label every claim in a vision deliverable with one of the three. Mixing them is how vision decks mislead.
2. **The futures are plural.** Plan for a range and pick a *preferable* one to steer toward. A single "the future" slide is a sales pitch.
3. **Start from the human job and the constants** (`futures-human-constants.md`), not the technology. Methods below plug technology signals into a frame that people bound.
4. **Always backcast to a shippable step.** A vision that doesn't change what ships next quarter is a poster.

---

## 1. Calibration laws (use these to argue with hype in both directions)

| Law / model | What it says | Evidence | How to use it |
|---|---|---|---|
| **Amara's law** (Roy Amara, Institute for the Future, attributed, c. 1960s–70s) | We overestimate a technology's short-run effect and underestimate its long-run effect | [moderate] heuristic, widely observed (the web, mobile, e-commerce), never formally tested | Expect the 2025–27 AI hype to underdeliver on timelines and overdeliver over 10–15 years. Plan H1 conservatively and H3 boldly |
| **Lindy effect** (Goldman 1964 → Mandelbrot → Taleb, *Antifragile*, 2012) | For non-perishable things (ideas, conventions, tools), each year of survival increases expected remaining life | [moderate] as a heuristic. Statistically it fits some power-law survival data; it is **not** a law of nature | Old interface conventions (QWERTY ~150 yrs, the desktop metaphor ~50, scroll, the button, the list, the calendar grid) will outlive most new paradigms. Design new layers that **coexist** with them |
| **Diffusion of innovations** (Everett Rogers, 1962; 5th ed. 2003) | Adoption follows an S-curve: innovators ~2.5%, early adopters 13.5%, early majority 34%, late majority 34%, laggards 16%. Speed depends on 5 attributes: **relative advantage, compatibility, complexity, trialability, observability** | [strong] as a descriptive model across thousands of studies; the category percentages are definitional (standard deviations), not empirical | Score any future concept on the 5 attributes (§6). Low compatibility and observability explain most failed "future UI" |
| **Crossing the chasm** (Geoffrey Moore, 1991) | Early adopters (visionaries) and the early majority (pragmatists) want different things. Pragmatists need a complete solution for one niche and references from peers | [moderate] practitioner framework | Glass found its niche in enterprise, Ray-Ban Meta in "capture and listen." Pick the beachhead job |
| **Gartner Hype Cycle** | Trigger → peak of inflated expectations → trough → slope → plateau | [contested]: Dedehayir & Steinert (2016) found Gartner's own data inconsistent with the model; hype patterns vary a lot | Use as a vocabulary for sentiment, **never** as a timing model. Don't say "AI agents will exit the trough in 2027" |
| **Generative AI adoption pace** | US adoption of generative AI was faster than PCs or the internet: ~45% of 18–64-year-olds used it by late 2024, ~27% of workers used it for work in a given week | [moderate]: Bick, Blandin & Deming, NBER WP 32966 (revised 2025), survey, not peer-reviewed | Adoption of *use* is fast. Adoption of *changed workflows* is slower (habits take weeks to months, org processes take years). Design for the gap |
| **Perceived vs measured gains** | In METR's 2025 RCT (16 experienced devs, 246 tasks), AI tools made developers ~19% slower while they believed they were ~20% faster | [moderate]: one small, well-designed RCT; other settings show speedups | In AI-workflow visions, measure time-on-task and quality, never just self-reported productivity |

---

## 2. The method menu (pick ONE per timebox)

| Method | Time | Best for | Output | Don't use when |
|---|---|---|---|---|
| Signals scan (§3) | 1–3 h | Grounding any vision in what already exists | 15–30 tagged signals → 3–6 trends → 2–4 drivers | Never skip it; every other method needs it |
| Futures cone (§4) | 1 h | Widening the range, then choosing a preferable future | Probable / plausible / possible / preferable statements | The team already agrees on a direction and needs a plan (use backcasting) |
| Three Horizons (§5) | 2–3 h | Roadmaps; aligning "keep the lights on" with "the next thing" | H1/H2/H3 concepts + transition moves | You only have one horizon in scope |
| Scenario 2×2 (§6) | 3–4 h | High uncertainty from two independent drivers (regulation × capability, trust × cost) | 4 named worlds + a strategy that is robust across them | Uncertainties aren't independent, or a 3rd driver dominates |
| Backcasting (§7) | 1–2 h | Turning a preferable future into the next quarter's work | Milestone chain from 2030 to now + first experiment | You haven't chosen a preferable future yet |
| Speculative / critical design (§8) | ½–1 day | Provoking debate about values and consequences, and surfacing ethical risk | A provocative artifact + discussion questions | You need a shippable roadmap (it's for asking questions, not answering them) |
| Design fiction (§9) | ½ day | Making a future tangible and testable with users and stakeholders | A diegetic prototype: a fake manual, ad, receipt, settings page, support ticket, review | You can't label it clearly as fiction to everyone who sees it |
| Futures wheel (Jerome Glenn, 1971) | 45 min | Second- and third-order effects of one change ("what if every form is filled by an agent?") | A ring diagram of consequences | You need options rather than consequences |
| Pre-mortem (Gary Klein, HBR 2007) | 30 min | Stress-testing any vision | "It's 2029 and this failed. Why?" list → risks | Never skip it on a vision you plan to fund |

**One-day recipe (solo agent or small team):** signals scan (2 h) → futures cone (1 h) → Three Horizons concepts (2 h) → human stress test with `futures-human-constants.md` (1 h) → backcast and first experiment (1 h) → design fiction artifact for the H2/H3 concept (1 h).

---

## 3. Signals → trends → drivers

**Definitions.** A *signal* is a specific, dated, sourced instance of change: a launch, a paper, a regulation, a behavior seen in the wild. A *trend* is a direction several signals share. A *driver* is the underlying force (technical, economic, social, regulatory, environmental) pushing trends. Use STEEP(LE) to cover the categories: Social, Technological, Economic, Environmental, Political, Legal, Ethical.

**Procedure**
1. Collect 15–30 signals with date, source URL and one line on why it matters. Mix the mainstream with the **edges**: accessibility tech, pro tools, games, enterprise, other regions, teen behavior, regulation drafts.
2. Tag each one: *established / emerging / speculative*, plus evidence strength.
3. Cluster into 3–6 trends. Name each as a direction ("interfaces generated per user and per moment," not "GenUI").
4. Name the 2–4 drivers and mark which are **most uncertain** and **most impactful**. Those two axes feed the 2×2 (§6).
5. Add the **counter-signals**: evidence the trend is stalling. A scan without counter-signals is confirmation bias.

**Example signals for "AI reshaping workflows" (as of Oct 2026; re-verify before reuse)**

| Signal | Status | Source |
|---|---|---|
| Generative AI used by ~45% of US adults 18–64 by late 2024 | established [moderate] | Bick, Blandin & Deming, NBER w32966 |
| Experienced devs slower with AI in one RCT despite feeling faster | established finding, narrow scope [moderate] | METR 2025 |
| Display smart glasses with a wrist EMG band ship at consumer price ($799, Sept 2025) | emerging | Meta Ray-Ban Display + Neural Band, [Tom's Guide](https://www.tomsguide.com/computing/smart-glasses/meta-ray-ban-display-glasses-features-neural-link-price-and-availability) |
| Camera/audio AI glasses at scale (~7M sold in 2025) | emerging → established for a niche | [UploadVR](https://uploadvr.com/meta-essilorluxottica-sold-7-million-smart-glasses-in-2025/) |
| A screenless AI wearable shut down within a year of launch | counter-signal | Humane Ai Pin, Feb 2025 |
| Generative voice assistant reached all US users nearly a year after early access (Alexa+, Feb 2026), after a slow early rollout | emerging, slower than announced | [TechRepublic](https://techrepublic.com/article/news-amazon-alexa-ai-all-us-users) |
| Spatial headset with an excellent interaction model sells modestly at $3,499 | counter-signal for the form factor, signal for the interaction grammar | Vision Pro, third-party estimates |
| Speech BCIs decode 62–78 wpm in paralysis trials | emerging, clinical only | Willett et al. 2023; Metzger et al. 2023, *Nature* |

---

## 4. Futures cone (Voros)

Joseph Voros adapted the cone from Hancock & Bezold (1994), building on Henchey's taxonomy (late 1970s), in "A generic foresight process framework" (*Foresight* 5(3), 2003) and later extended it ([thevoroscope.com, 2017](https://thevoroscope.com/2017/02/24/the-futures-cone-use-and-history/)).

| Class | Question | Design use |
|---|---|---|
| Projected | What happens if nothing changes? (the baseline) | Your "do nothing" concept: is it actually fine? |
| Probable | What is likely given current trends? | H1 roadmap |
| Plausible | What could happen given what we know? | H2 concepts, scenario worlds |
| Possible | What might happen with knowledge we don't have yet? | H3 provocations |
| Preposterous | What seems impossible today? | 10 minutes of it frees thinking, then drop it |
| **Preferable** | What *should* happen, by our values and users' interests? | A normative choice: the target you backcast from |

**Run it:** for the product's core job, write 2–3 statements per class (sticky notes or a table). Then argue for one preferable future, and state whose values it encodes. "Preferable" for the business must also be preferable for users, or it fails the ethics gate.

---

## 5. Three Horizons

Origin: adapted from McKinsey's "three horizons of growth" into a futures practice by Curry, Hodgson, Sharpe and colleagues. Reference paper: Sharpe, Hodgson, Leicester, Lyon & Fazey, "Three horizons: a pathways practice for transformation," *Ecology and Society* 21(2):47, 2016 ([PDF](https://discovery.dundee.ac.uk/ws/files/9835190/ES_2016_8388.pdf)).

- **H1:** the current system, declining in fit. *In product terms:* today's UI, with AI added inside it (autocomplete, summaries, smart defaults). Shippable now.
- **H2:** the transition zone, where innovations either get **captured** by H1 (H2−, extending the old) or **build toward** H3 (H2+). *In product terms:* hybrid UIs where an agent and the user share the work: the agent drafts, the UI shows the plan, the human approves.
- **H3:** the emerging future system, visible today only in pockets. *In product terms:* an intent-first, ambient, multimodal paradigm where the "app" may dissolve into tasks.

**Run it:** list what in H1 must be **kept** (it fits human constants: the list, the undo, the overview), what must be **retired**, which H3 pockets exist today (find them in the signals), and which H2 moves are H2+ (build toward H3) vs H2− (just prop up H1). Concept directions for `modes/envision.md` step 5 come straight out of this.

**When not:** a single-horizon question ("redesign onboarding for Q3"). Using Three Horizons there is theater.

---

## 6. Scenario 2×2 (Shell / GBN tradition; Peter Schwartz, *The Art of the Long View*, 1991)

1. Take the two drivers from §3 that are **most uncertain and most impactful**, and **independent** of each other.
2. Make each one an axis with two extreme poles. Example for an AI-assisted finance app:
   - X axis: *AI reliability for consequential actions*: low (frequent subtle errors) ↔ high (auditable, near-zero error).
   - Y axis: *regulatory and social stance on delegation*: restrictive (human sign-off required) ↔ permissive.
3. Name the 4 worlds vividly ("Supervised Copilot," "Autopilot With Receipts," "Paper Trail Bureaucracy," "Wild West Agents"). Write a day in each one from the user's point of view, in 5 lines.
4. For each world: what does the UI need to do? What fails?
5. **Find the robust moves:** design elements that are good in all four worlds. These are the safe bets (typically: visible plans, undo, audit logs, a clear human override, an overview of everything the agent touched). Find the **signposts:** observable events that tell you which world you're entering.

**Anti-patterns:** axes that are really one variable; picking the "good" quadrant and ignoring the others; scenarios with no named signposts.

---

## 7. Backcasting (John Robinson, 1982/1990; used widely in sustainability planning)

1. State the preferable future (from §4) as a concrete scene: who, where, doing what, what the UI shows, and **what the human decides**.
2. Ask: "what must be true one step before this?" Repeat back to today: 2030 → 2028 → 2027 → next quarter.
3. At each step, list the capability, the trust or behavior change, and the data or evidence needed.
4. The last step is a **shippable H1 change plus an experiment** (→ `modes/experiment.md`) with a leading indicator. For example: "preferable 2030: the agent reconciles expenses and the human reviews only exceptions" → next quarter: "auto-categorize with a confidence badge and one-tap correction; measure correction rate and time-to-close."
5. Kill criteria: what result would tell us this path is wrong?

---

## 8. Speculative and critical design (Dunne & Raby)

Anthony Dunne and Fiona Raby, *Speculative Everything: Design, Fiction, and Social Dreaming* (MIT Press, 2013): design as a way to ask "what if?" and open debate about which futures we want, as opposed to design that solves problems for the present.

- **Use it for:** values conflicts (surveillance, delegation, emotional AI, kids and AI companions), ethics reviews before building, and helping stakeholders *feel* a second-order consequence.
- **Make:** a physical or digital artifact from a world where a trend has played out. For example, a "Delegation Receipt" that shows everything an agent did on your behalf this month, including the three things it decided not to tell you.
- **When not:** as a substitute for user research or a roadmap. And don't let a provocation be mistaken for a product commitment.
- **Critique to keep in mind:** [contested] speculative design has been criticized for presenting futures from a privileged, Global-North viewpoint and for staying in galleries. Prado & Oliveira's "Questioning the 'critical' in speculative & critical design" (2014) is the well-known version. Mitigate by co-creating with the people the future would affect, including bystanders and vulnerable users.

---

## 9. Design fiction (Julian Bleecker)

Bleecker, *Design Fiction: A Short Essay on Design, Science, Fact and Fiction* (Near Future Laboratory, 2009) ([nearfuturelaboratory.com](https://nearfuturelaboratory.com/essays/2009/design-fiction-a-short-essay-on-design-science-fact-and-fiction/)). The core idea is the **diegetic prototype**: an object that exists *inside* the story world and makes the future feel ordinary. Bleecker's "future mundane" stance applies: the future is mostly normal life with new stuff in it, not chrome and holograms.

**High-yield artifacts for product teams**
- The **settings page** of the future product (it reveals the control model, the defaults and the ethics instantly).
- The **support ticket / bug report** ("my agent booked the wrong flight and I couldn't see why"). It reveals the failure modes.
- The **app-store review**, 2 stars and 5 stars. It reveals what people will actually care about.
- The **onboarding email**, the **pricing page**, the **notification log** for one day.
- A **"day in 2030" storyboard** with at least one failure frame and one bystander frame.

**Run it:** pick the H2 or H3 concept, make 2–3 artifacts in an hour, show them to 5 users or stakeholders, and ask "what would you do next? what worries you?" Record reactions as hypotheses, not validation. Stated reactions to a future are weak evidence ([weak]: people are poor at predicting their own future behavior and feelings; see affective-forecasting research, e.g. Wilson & Gilbert, "Affective Forecasting: Knowing What to Want," *Current Directions in Psychological Science*, 2005). Follow up with behavioral tests (painted door, Wizard-of-Oz prototype) before you believe it.

**Ethics:** label fiction as fiction on the artifact itself. Never publish a fake product page, press release or review that could be mistaken for a real one, or that imitates a real company.

---

## 10. "The future, but human" checks (run on every concept)

Combine with the full table in `futures-human-constants.md`.

1. **Job check:** is the human job stated without reference to any interface?
2. **Constant check:** which perception, memory, motor, attention, emotional and social constants does the concept rely on? Does any assume humans will change (read faster, remember more, tolerate more interruptions, stop caring about privacy)? If yes, it's wrong.
3. **Control check:** can the person predict, see, interrupt, undo and override? Is there a calm overview of what the system did?
4. **Bystander check:** who else is in the scene, and how do they experience it?
5. **Failure frame:** storyboard the worst plausible day (wrong action, no network, dead battery, misheard command).
6. **Skill check:** after a year, is the person more capable or more dependent? (Engelbart test, in `futures-visions-that-came-true.md`.)
7. **Diffusion check:** score relative advantage, compatibility, complexity, trialability and observability from 1 to 5. Any 1–2 is a stop sign to redesign before investing.
8. **Incentive check:** who pays, and what metric is optimized? Would the humane features survive that metric?
9. **Accessibility check:** does it work for low vision, hearing loss, motor impairment, cognitive load, older adults, situational impairments (driving, cooking, a noisy street)?
10. **Label check:** is every claim tagged established / emerging / speculative?

---

## 11. Why most "future UI" demos fail (diagnostic)

| Failure | Tell | Example |
|---|---|---|
| Technology thesis without a job | "It does everything" | Humane Ai Pin's "replace your phone" positioning |
| Ignored the social context | Bystanders feel watched; the user feels silly | Google Glass consumer edition |
| Latency and errors hidden in the demo | Scripted, single-take, perfect network | Most AI gadget launch videos 2024 |
| Wrong form factor for the body | Weight, heat, sweat, session length | Headsets for all-day work |
| Removed recognition and overview | No screen to scan, compare, correct | Voice-only shopping and booking |
| Low compatibility with existing habits | Needs new behavior *and* new hardware *and* new trust at once | Several 2024 AI devices |
| Personality over reliability | Charming agent, unclear state | Knowledge Navigator → Clippy lineage |

**Fix pattern:** change only one of {hardware, behavior, trust} at a time. Ray-Ban Meta kept the hardware familiar (glasses) and the behavior familiar (take a photo, listen), and asked for new trust only in small steps.

---

## 12. Deliverable template

```
VISION: <product/workflow>, horizon <H1/H2/H3>, scope <years>
Human job (interface-free): ...
Binding human constants: ... (from futures-human-constants.md)
Signals (tagged established/emerging/speculative + source): ...
Counter-signals: ...
Method used: <cone | 3H | 2x2 | backcast> — why this one
Concepts (H1/H2/H3): core interaction · what the human controls · what the system does alone · failure frame · bystander frame
"Future, but human" scores (10 checks): ...
Robust moves (good in all scenarios): ...
Signposts to watch: ...
Backcast: next-quarter step + experiment + leading indicator + kill criteria
Artifacts: storyboard / design fiction (labeled as fiction)
```

**How to measure the futures work itself:** decisions changed (did the roadmap change?), assumptions surfaced and tested within 90 days, signposts tracked monthly, and the share of H1 work explicitly linked to an H2/H3 direction.

---

## Sources

- Voros, J. (2003). *A generic foresight process framework*. Foresight 5(3):10–21. https://www.emerald.com/fs/article/5/3/10/90919/A-generic-foresight-process-framework · Futures cone history (2017): https://thevoroscope.com/2017/02/24/the-futures-cone-use-and-history/
- Sharpe, B., Hodgson, A., Leicester, G., Lyon, A., Fazey, I. (2016). *Three horizons: a pathways practice for transformation*. Ecology and Society 21(2):47. https://discovery.dundee.ac.uk/ws/files/9835190/ES_2016_8388.pdf
- Dunne, A. & Raby, F. (2013). *Speculative Everything*. MIT Press. https://mitpress.mit.edu/9780262019842/speculative-everything/
- Bleecker, J. (2009). *Design Fiction: A Short Essay on Design, Science, Fact and Fiction*. https://nearfuturelaboratory.com/essays/2009/design-fiction-a-short-essay-on-design-science-fact-and-fiction/
- Rogers, E. (1962/2003). *Diffusion of Innovations* (5th ed.). Free Press.
- Moore, G. (1991). *Crossing the Chasm*. HarperBusiness.
- Taleb, N.N. (2012). *Antifragile* (Lindy effect). Random House.
- Schwartz, P. (1991). *The Art of the Long View*. Doubleday.
- Dedehayir, O. & Steinert, M. (2016). *The hype cycle model: a review and future directions*. Technological Forecasting and Social Change 108:28–41. https://ideas.repec.org/a/eee/tefoso/v108y2016icp28-41.html
- Bick, A., Blandin, A., Deming, D. (2024/2025). *The Rapid Adoption of Generative AI*. NBER WP 32966. https://www.nber.org/system/files/working_papers/w32966/w32966.pdf
- METR (2025). RCT of AI tools and experienced OSS developers, coverage: https://www.theregister.com/2025/07/11/ai_code_tools_slow_down/
- Klein, G. (2007). *Performing a Project Premortem*. Harvard Business Review.
