# Visions That Came True (and the Parts That Didn't): Lessons From 80 Years of "Future UI"

> **Use this when:** writing a product vision, north-star concept or "UI of 2030" deck and you want to calibrate ambition against how past visions actually played out.
> **Also use when:** a stakeholder pitches a "this replaces the smartphone" concept, or you need the long view (Bush, Licklider, Engelbart, Kay, Weiser, Victor, Knowledge Navigator) as a critique lens.
> **Skip when:** you need a method to run today → `futures-methods.md`; you need the human limits that bind any new paradigm → `futures-human-constants.md`.

Evidence tags: [strong] · [moderate] · [weak/anecdotal] · [contested] · [speculative]. Historical claims about what a document *says* are [strong] when the primary source is linked; claims about *why* a vision succeeded or failed are interpretation and tagged [moderate] or lower.
Builds on: `masters/master-lenses.md` (Victor lens), `masters/timeless-principles.md` (convention vs invention), `future/human-ai-trust-trust-and-reliance.md`.

---

## 0. Point of view

The visions that came true were about **what people would be able to do**, not about which device they'd hold. Bush described associative trails, not hyperlinks in HTML. Licklider described a partnership with a division of labor, not a chatbot. Engelbart described *augmenting* a human's ability to deal with complex problems, and the mouse was a side effect. The visions that failed mostly specified a form factor and a date.

**Rule for the agent:** when you write a vision, specify the *human capability* and the *division of labor* precisely, and keep the device and the timeline loose. That is the part history rewards.

---

## 1. The canon, compressed

| Vision | Year | What it proposed | What came true | What it got wrong or missed | Primary source |
|---|---|---|---|---|---|
| Vannevar Bush, "As We May Think" (*The Atlantic*) | 1945 | The memex: a desk holding a person's records, with **associative trails** linking items and shareable with others | Hypertext, the web, personal knowledge tools, bookmarks, shared trails (link lists, Are.na channels) | Assumed microfilm and a single private desk; underestimated **information overload** and the social web; trails became algorithmic feeds the user doesn't author | [theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/) |
| J.C.R. Licklider, "Man-Computer Symbiosis" (*IRE Trans. Human Factors in Electronics*) | 1960 | A close partnership: humans set goals, formulate hypotheses and judge; machines do routine work that prepares the way for insight. He logged that ~85% of his "thinking" time went into getting into a position to think (finding, plotting, converting data) | Interactive computing, time-sharing, ARPA networking (he funded it), and in 2023–26 the copilot/agent pattern is literally his division of labor | Put practical speech recognition "perhaps five years" out, and saw symbiosis as an interim era before machine-only AI (guessed ~1980); underrated how hard the *interface* for shared goals is (the open problem of AI agents today) | [groups.csail.mit.edu/medg/people/psz/Licklider.html](https://groups.csail.mit.edu/medg/people/psz/Licklider.html) |
| Douglas Engelbart, "Augmenting Human Intellect: A Conceptual Framework" (SRI report) | 1962 | Augment people's ability to approach complex problems through a co-evolving system of **language, artifacts, methods and training** (H-LAM/T) | Mouse, windows, hypertext, real-time collaborative editing and video conferencing, shown in the 1968 "Mother of All Demos" | The **training** half was lost: industry shipped "easy to use" instead of "powerful once learned." The expert-tool vision was only partially realized (IDEs, Figma, pro creative tools) | [dougengelbart.org/content/view/138](https://www.dougengelbart.org/content/view/138/) |
| Alan Kay, "A Personal Computer for Children of All Ages" | 1972 | The Dynabook: a notebook-sized, networked personal computer for **learning by making**: kids would write simulations, not just consume | Laptops and tablets (form factor nearly exact), the Xerox Alto "interim Dynabook," Smalltalk, overlapping windows | The **medium for thought** became a medium for consumption. Kay has said for decades that the iPad realized the hardware and missed the point [moderate] | Scan: [bitsavers mirror](https://kuiper.mirrorservice.org/sites/www.bitsavers.org/pdf/xerox/smalltalk/Kay__A_Personal_Computer_For_Children_Of_All_Ages_Aug72.pdf); transcription: [mprove.de](https://mprove.de/visionreality/media/kay72.html) |
| Apple, *Knowledge Navigator* (concept video) | 1987 | A tablet with a bow-tied agent that manages a professor's calendar, fetches research, places calls and negotiates with a colleague's agent | Voice assistants (Siri 2011), video calls, tablet form factor, and in 2024–26 LLM agents that browse, summarize and schedule | The **anthropomorphic butler** framing: people disliked chatty agents (Clippy, early Siri) and wanted reliability and control more than personality. Inter-agent negotiation is only emerging [speculative] | Widely archived; treat descriptions of on-screen dates as [weak/anecdotal] |
| Mark Weiser, "The Computer for the 21st Century" (*Scientific American*) | 1991 | Ubiquitous computing: tabs, pads and boards, hundreds of computers per person, receding into the background | Phones (pads), smartwatches and tags (tabs), shared screens (boards), sensors everywhere, the IoT | Ubiquity came, **calm didn't**: devices compete for attention instead of receding. Weiser predicted the hardware; the business model (attention capture) went the other way | [scientificamerican.com/article/the-computer-for-the-21st-century](https://www.scientificamerican.com/article/the-computer-for-the-21st-century/) |
| Weiser & John Seely Brown, "Designing Calm Technology" (PowerGrid Journal) | 1995–96 | Technology should engage both the **center and periphery** of attention and move between them; information should inform without overburdening | Ambient indicators, glanceable widgets, haptic taps, Live Activities, the "peripheral" design vocabulary; Amber Case's Calm Technology principles (2010s) | Rarely adopted as a product KPI. Notification volume grew, and calm is still a niche value proposition [moderate] | Coinage and principles: [calmtech.com/about](https://calmtech.com/about) |
| Bret Victor, "The Humane Representation of Thought" (UIST/SPLASH keynote) | 2014 | Paper and screens use a small subset of human capabilities (symbolic, visual) and neglect spatial, tactile, kinesthetic and social understanding. Build **dynamic, embodied media for thinking** | Dynamicland (a room-scale computing lab), explorable explanations, live-coding tools, the "immediate connection" principle in modern tools | Still mostly research. Mainstream "future UI" in 2024–26 went to glass slabs plus chat, the opposite of embodied [moderate] | [dynamicland.org/2014/The_Humane_Representation_of_Thought](https://dynamicland.org/2014/The_Humane_Representation_of_Thought/) · [vimeo.com/115154289](https://vimeo.com/115154289) |

Related: Victor, "A Brief Rant on the Future of Interaction Design" (2011): the "pictures under glass" critique of touchscreen futures, which ignore what hands can feel and do ([worrydream.com/ABriefRantOnTheFutureOfInteractionDesign](https://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/)).

---

## 2. Seven patterns across the canon

1. **Capability beats device.** [moderate] Bush's trails, Licklider's division of labor and Engelbart's augmentation came true in devices none of them specified. Kay's Dynabook nailed the device and lost the capability (learning by making).
   → In your vision, write the capability sentence first: "a nurse can see which of 30 patients needs her next, without opening anything."
2. **The timeline is almost always wrong, the direction often right.** [moderate] Licklider guessed practical speech recognition was ~5 years away (1960); robust everyday dictation took ~50, and conversational language models ~63. This is Amara's law in practice (see `futures-methods.md`).
   → Give ranges and horizons (H1/H2/H3), never a launch year for H3.
3. **Visions that assumed humans would change failed; visions that served stable human needs succeeded.** [moderate] Engelbart's training-heavy system was too costly to learn; the mass market took the parts that respected the ~4-chunk mind and recognition over recall (menus, WYSIWYG). See `futures-human-constants.md`.
4. **Business model decides whether the humane part survives.** [moderate] Weiser's ubiquity shipped; calm did not, because attention became the revenue. A vision without an incentive analysis predicts the hardware and gets the experience wrong.
   → Every vision should name who pays and what metric the system optimizes, and check it against the ethics gate (`psychology/behavior-ethics-dark-patterns.md`).
5. **Personality is overrated, reliability underrated.** [moderate] From Knowledge Navigator's butler to Clippy to the 2024 AI gadgets, anthropomorphic agents test well in demos and wear out in daily use. What lasts: predictability, interruptibility, undo (`human-ai-trust-errors-uncertainty-oversight.md`).
6. **The demo is the format, not the proof.** [strong] The Mother of All Demos (1968), Knowledge Navigator (1987) and Weiser's PARC prototypes changed minds because people could *see* a day in the future. But a scripted demo hides latency, error, social context and battery life, which are exactly what killed the Humane Ai Pin (§3).
   → Make visions tangible, then stress-test them as if they were live (§4).
7. **The future arrives first at the edges.** [moderate] Hypertext lived in research labs for 25 years before the web; touch lived in kiosks and PDAs before the iPhone. Scan edges (accessibility tech, pro tools, games, enterprise, other countries) for H3 signals.

---

## 3. Recent "future UI" failures, and the human constant each one ignored

| Product | What happened (verified) | Human constant ignored | Lesson |
|---|---|---|---|
| **Google Glass** (Explorer 2013; consumer ended 2015; Enterprise Edition sales ended 15 Mar 2023, support ended 15 Sep 2023) | Social backlash about bystander recording; later found a niche in warehouses and field work before the Enterprise line ended too ([9to5google, 2023](https://9to5google.com/2023/03/15/google-glass-enterprise-edition-discontinued/)) [strong] | **Social context and bystander consent**: people react to being recorded by someone else's face computer. Weak, unclear everyday value for consumers | Design for the **bystander** as a second user. Find the job where the hands-free value is overwhelming (enterprise) before going consumer |
| **Humane Ai Pin** ($699, 2024) | Poor reviews and high return rates; the company announced on 18 Feb 2025 that it was winding down, devices lost cloud features on 28 Feb 2025, and HP bought the IP and team for $116M ([PetaPixel, 2025](https://petapixel.com/2025/02/19/humanes-ai-pin-is-dead-and-all-devices-will-stop-working-in-10-days); [Android Central](https://androidcentral.com/apps-software/humane-announces-its-departure-from-the-ai-scene-hp-acquires-it-for-usd116-million)) [strong] | **Feedback timing** (multi-second voice round trips break the ~1 s flow of thought), **private output** (the projected palm display was hard to read in daylight), **thermal and battery comfort**, and the need for **control** (no screen meant no way to scan, compare or correct) | "Screenless" is not a benefit by itself. Removing the screen removes recognition, scanning and correction, which are human needs, not legacy habits. Also: a cloud-only device the user can't keep is a trust failure |
| **Rabbit R1** (2024) | Widely reviewed as unable to deliver its "large action model" promise at launch [moderate, press consensus] | **Reliability before novelty**: users forgive a plain UI but not an agent that fails silently | Show the agent's plan and status; build the honest fallback first |
| **Apple Vision Pro** (2024) | Strong craft and interaction model (eyes + pinch), but third-party estimates put sales at a few hundred thousand units, with reports of reduced production and marketing ([Road to VR](https://roadtovr.com/apple-halts-vision-pro-production-cutback/amp); Apple doesn't publish unit sales) [moderate] | **Embodiment and wear comfort**: weight on the face, session length, isolation from others in the room, and price | The interaction grammar (look to target, pinch to commit) is a durable contribution. The form factor didn't fit the human body for all-day use yet |
| **Ray-Ban Meta glasses** (contrast case, a *success*) | EssilorLuxottica reported ~7M Meta glasses sold in 2025, roughly triple 2024 ([UploadVR, 2026](https://uploadvr.com/meta-essilorluxottica-sold-7-million-smart-glasses-in-2025/)) [moderate, company-reported] | **Respected** the constants: looks like normal eyewear (social acceptability), light, audio-first with a camera and an LED recording indicator, and a few clear jobs (capture, listen, ask) | Start from an object people already wear and accept socially, and add a few high-value jobs. Fashion and comfort before features |

The pattern: the failures led with a **technology thesis** ("AI replaces apps," "computing moves to your face"). The success led with a **human acceptance thesis** ("people already wear glasses; add a camera, audio and an assistant").

---

## 4. Using the canon as a critique lens

Run these on any vision concept, yours included:

- **Bush test:** does the user *author* the structure of their knowledge (trails, collections, links), or does the system author it for them? Authored structure builds understanding; generated structure builds dependence. Offer both, with authored structure as a first-class option.
- **Licklider test:** write the division of labor as a two-column table (human does / machine does). Is the human doing goal-setting, judgment and evaluation, and the machine doing the clerical prep? If the human ends up proofreading the machine all day, the split is inverted. (METR's 2025 randomized trial found experienced developers were ~19% *slower* with AI tools while believing they were ~20% faster [moderate, n=16]; perceived augmentation isn't measured augmentation. [METR study coverage, The Register, 2025](https://www.theregister.com/2025/07/11/ai_code_tools_slow_down/))
- **Engelbart test:** what does the expert become able to do after 100 hours with this that they couldn't before? If the answer is "the same, slightly faster," it's automation, not augmentation. Design a skill ceiling, not just a floor.
- **Kay test:** can the user *make* something with it, such as a model, rule, automation or simulation, or only consume? Can a 12-year-old or a domain expert extend it without engineering help?
- **Weiser test:** where does this live in attention, center or periphery, and how does it move between them? Name the peripheral form (sound, light, haptic, glanceable state) and the trigger that promotes it to center.
- **Victor test:** which human capabilities does the representation use? Only reading and clicking? Could spatial layout, direct manipulation, sound, gesture or a shared physical space make the thinking better, not just flashier?
- **Knowledge Navigator test:** remove the personality. Does the concept still work? If it only works because the agent is charming, it will fail on day 30.

---

## 4b. Where the canon is replaying now (2024–2026)

Map today's signals to the vision they echo, so you can borrow the old lessons. Status tags: (a) established, (b) emerging, (c) speculative.

| Canon idea | 2024–26 echo | Status | Old lesson that applies |
|---|---|---|---|
| Licklider's division of labor | Copilots and coding/browsing agents that prep work for human judgment | (a) for suggestion and drafting; (b) for autonomous multi-step action | Measure the split. If the human became a full-time reviewer, the symbiosis is inverted |
| Bush's associative trails | AI that links your notes, mail and files on its own; "memory" features in assistants | (b) | Authored vs generated structure: let users see, edit and own the links, or understanding erodes |
| Engelbart's augmentation + training | Pro tools adding AI (design, code, data), with skill ceilings rising for experts | (a)/(b) | Design the learning curve on purpose; the expert path is where durable value lives |
| Kay's medium for making | Natural-language "vibe coding," end-user automation, generated mini-apps | (b) | Can people inspect and modify what was made? Otherwise they only consume generated output |
| Weiser's ubiquity | Camera/audio AI glasses at multi-million scale, wrist EMG input, ambient assistants | (b) | Ubiquity without calm repeats the notification era. Make periphery-first a requirement |
| Knowledge Navigator agent | Voice-and-chat assistants that schedule, search and act | (a) for Q&A; (b) for reliable action | Reliability and control beat personality; show state and let people interrupt |
| Victor's humane representation | Spatial computing interaction grammar (look + pinch), Dynamicland-style room computing | (b) niche | Use the body for arrangement and thinking, not for constant reaching. Fatigue is a constant |
| Interface that composes itself per task | Generative/adaptive UI experiments | (c) at product scale | Novel layouts each time break recognition and habit. Generate content and arrangement *inside* a stable system of positions and components |

## 4c. Vision brief template (one page)

```
CAPABILITY (interface-free): In <horizon>, <who> can <do what> without <current pain>.
DIVISION OF LABOR:   human does | system does   (Licklider table)
SKILL CEILING:       after 100 hours the expert can ... (Engelbart)
MAKING:              users can inspect/modify/build ... (Kay)
ATTENTION:           lives in the periphery as ..., promoted to the center when ... (Weiser)
REPRESENTATION:      uses which human capabilities beyond reading? (Victor)
NO-PERSONALITY TEST: still works if the agent has no persona? y/n
FAILURE FRAME:       worst plausible day, and what the person sees and can do
BYSTANDER FRAME:     who else is present and how they experience it
INCENTIVE:           who pays, what's optimized, does calm/control survive it?
STATUS TAGS:         each claim marked established / emerging / speculative
FIRST STEP:          the H1 change shipping next quarter + experiment + leading indicator
```

---

## 5. Anti-patterns in vision work

- **The device-first vision:** "In 2030 everything is AR glasses." It ages badly. Lead with the capability and the job.
- **Frictionless fantasy:** no latency, no errors, no ambiguity, no other people in the room. Real futures have all four. Storyboard the failure frame, not just the success frame.
- **The lone user:** visions show one person in an empty, beautiful room. Add the bystander, the family member, the colleague, the shared screen.
- **Replacement thesis:** "this replaces the phone/the app/the keyboard." Old interfaces persist for decades when they fit human constants (keyboards since the 1870s, the desktop metaphor since the 1970s). New paradigms usually *add* a layer. Bet on coexistence.
- **Timeline theater:** a precise year on an H3 concept. Use horizons and leading indicators instead.
- **Vision with no incentive model:** if you can't say who pays and what's optimized, you can't predict whether the humane parts survive (Weiser lesson).

---

## 6. What to measure when a vision ships its first step

A vision is only real when its first H1 step ships (`modes/envision.md` step 7). Track:
- **Capability metric:** time to complete the core job end to end (not per step), and task success without help.
- **Augmentation vs automation:** expert performance after 2–4 weeks (do people get better *with* the tool?), and skill retention with the tool removed, measured on a sample.
- **Attention cost:** interruptions per day caused by the feature, the share dismissed unread, and opt-out rate.
- **Trust calibration:** acceptance rate split by AI-correct vs AI-wrong cases (see `human-ai-trust-trust-and-reliance.md`).
- **Retention of the new behavior** at D30/D90. Novelty effects fade, so judge after the novelty window.

---

## Sources

- Bush, V. (1945). *As We May Think*. The Atlantic. https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/
- Licklider, J.C.R. (1960). *Man-Computer Symbiosis*. IRE Transactions on Human Factors in Electronics. https://groups.csail.mit.edu/medg/people/psz/Licklider.html
- Engelbart, D. (1962). *Augmenting Human Intellect: A Conceptual Framework*. SRI. https://www.dougengelbart.org/content/view/138/
- Kay, A. (1972). *A Personal Computer for Children of All Ages*. Proc. ACM National Conference. https://mprove.de/visionreality/media/kay72.html
- Weiser, M. (1991). *The Computer for the 21st Century*. Scientific American. https://www.scientificamerican.com/article/the-computer-for-the-21st-century/
- Weiser, M. & Seely Brown, J. (1996). *Designing Calm Technology*. PowerGrid Journal 1.01. Terms coined 1995, see https://calmtech.com/about
- Victor, B. (2014). *The Humane Representation of Thought*. UIST/SPLASH keynote. https://dynamicland.org/2014/The_Humane_Representation_of_Thought/
- Victor, B. (2011). *A Brief Rant on the Future of Interaction Design*. https://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/
- Google Glass Enterprise discontinuation (2023): https://9to5google.com/2023/03/15/google-glass-enterprise-edition-discontinued/
- Humane Ai Pin shutdown (2025): https://petapixel.com/2025/02/19/humanes-ai-pin-is-dead-and-all-devices-will-stop-working-in-10-days
- Meta/EssilorLuxottica glasses sales (2026 report on 2025): https://uploadvr.com/meta-essilorluxottica-sold-7-million-smart-glasses-in-2025/
- METR developer productivity RCT (2025), coverage: https://www.theregister.com/2025/07/11/ai_code_tools_slow_down/
