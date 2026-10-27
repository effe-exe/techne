# Human Constants: What Won't Change in 10–50 Years, and How to Design Any New Paradigm From Them

> **Use this when:** designing for a new paradigm (AI agents, voice, spatial computing/visionOS, AR glasses, wearables, ambient displays, BCI) or judging whether a "UI of tomorrow" concept fits real people.
> **Also use when:** someone claims users "will adapt," "won't need screens," "will trust the AI," or "will talk to everything," or you need the stable constraints to anchor a futures exercise.
> **Skip when:** you need exact thresholds for today's 2D screens → `psychology/cognition-cheatsheet.md` and the detailed cognition files; you need the futures *methods* → `futures-methods.md`.

Evidence tags: [strong] · [moderate] · [weak/anecdotal] · [contested] · [speculative].
Builds on: `psychology/cognition-*` (numbers and laws for 2D UI, not repeated here), `future/human-ai-trust-trust-and-reliance.md` (trust calibration), `future/human-ai-trust-errors-uncertainty-oversight.md` (oversight), `interaction/accessibility.md`.

---

## 0. Point of view

**Technology changes on a scale of years; human biology changes on a scale of hundreds of thousands of years; human social norms change on a scale of decades.** So:
- **Biological constants** (perception, working memory, motor control, fatigue, circadian rhythm, aging) are **hard constraints**. Treat them like physics.
- **Psychological needs** (autonomy, competence, relatedness, control, predictability, fairness, belonging) are **stable goals**. Every paradigm that lasted served them.
- **Social norms** (privacy, recording, speaking in public, what is polite) are **slow variables**. They do change, but over decades, unevenly and with backlash. Never assume they'll change on your launch timeline.
- **Technology** (input modality, compute location, form factor, model capability) is the **fast variable**. It's the one thing you're allowed to assume will change.

Design rule: **design from the constants outward.** Write the constraints first, then ask what the new technology lets you do *within* them.

---

## 1. The constants table

| Constant | What stays true | Evidence | Design constraint for ANY paradigm |
|---|---|---|---|
| **Foveal vision is tiny** | Sharp vision covers ~1–2° of visual angle; the rest is peripheral, motion-sensitive and low-detail | [strong] | One focal point at a time. Peripheral space is for *ambient* status and motion cues, never for reading. Applies equally to screens, headsets and glasses HUDs |
| **Motion captures attention involuntarily** | People orient to movement and onsets in the periphery automatically | [strong]; Apple's visionOS HIG warns that peripheral motion pulls the eyes off the target | Animate only to explain. In spatial and ambient UIs, peripheral motion is an interruption, so budget it like a notification |
| **Eyes are for looking, not clicking** | Gaze is fast but also exploratory. Using dwell alone as "select" triggers unintended actions (the Midas touch problem, Jacob 1990) | [strong] | Look to target, then a separate deliberate act to commit (pinch, tap, voice, button). visionOS does this: gaze highlights, pinch selects |
| **Focus cues and depth** | Stereo displays with a fixed focal plane create vergence–accommodation conflict, which causes fatigue and discomfort (Hoffman et al., *J. Vision* 2008) | [strong] lab | Minimize depth changes; keep text flat and far enough away (visionOS: ≥ ~1 m for sustained reading); avoid repeating patterns filling the field of view |
| **Working memory ~4 chunks** | Cowan (2001): ~3–5 chunks, not 7±2. It doesn't grow with practice except through chunking | [strong] | Voice and agent UIs are **serial and transient**: listeners can't re-scan. Keep spoken output to 1–3 items, or pair it with a persistent visual summary. The system remembers, the person decides |
| **Recognition beats recall** | People recognize far more reliably than they recall | [strong] | "Screenless" and pure-chat UIs push everything to recall (what can I say?). Always provide visible options, suggestions or an overview of state |
| **Reading is faster than listening** | Silent reading ~238 wpm (Brysbaert 2019); conversational speech ~150–160 wpm; listening can't be skimmed | [strong] | Output long or comparative information as text and visuals, not speech. Use voice for input, alerts and hands-busy moments |
| **Speaking is faster than thumb typing** | Speech entry was ~3× faster than a smartphone keyboard, with fewer errors (Ruan et al., 2016, n=32) | [moderate] | Voice *input* is an opportunity; voice *output* is a bottleneck. Asymmetric multimodality (speak in, read out) fits humans |
| **Motor control obeys Fitts and steering laws** | Time scales with distance over target size, in any medium | [strong] | Holds for gaze-plus-pinch, pointing in AR, wrist gestures, cars. visionOS asks for ≥ 60 pt between target centers (or a 16 pt margin) because eyes jitter |
| **Arms tire fast in mid-air** | The "gorilla arm" effect: unsupported arm interaction fatigues within minutes. Measurable as Consumed Endurance (Hincapié-Ramos et al., CHI 2014) | [strong] | Prefer indirect input with hands at rest (visionOS: hands in lap). Direct touch in mid-air only for short, occasional actions, never at or above eye height |
| **Bodies have ergonomic limits** | Neck flexion, head weight, heat, sweat, skin contact, all-day wear | [strong] | Weight and comfort decide adoption more than features (Vision Pro vs glasses). Never anchor content to the head (visionOS HIG: it makes people feel stuck); anchor it in the world |
| **Response-time thresholds** | ~0.1 s feels instant, ~1 s keeps the flow of thought, ~10 s loses attention (Miller 1968; Card et al.; Nielsen) | [strong] | Agents and cloud AI routinely break 1 s. Acknowledge input in < 100 ms locally, stream partial results, show the plan, and let long tasks run in the background with honest progress |
| **Attention is scarce and fragments** | Gloria Mark's observational studies: average time on one screen before switching fell from ~2.5 min (2004) to ~47 s (2020s); interrupted work is done faster but with more stress (Mark, Gudith & Klocke, CHI 2008) | [moderate] | Every proactive AI message spends the user's attention. Batch, summarize, let people set when the system may interrupt, and measure interruptions per day as a cost |
| **Vigilance decays** | Monitoring rare events degrades within tens of minutes (Mackworth 1948); people over-trust automation that is usually right (complacency, Parasuraman & Manzey 2010) | [strong] | "A human will review it" is not a safety design if review is passive and rare. Design active checkpoints, highlight the anomalies, and keep error-catching tasks short |
| **Fatigue, sleep and circadian rhythm** | Performance and mood vary across the day; sleep loss impairs judgment | [strong] | Ambient and wearable systems know the time. Respect quiet hours, avoid high-stakes decisions late at night, and give the "do it tomorrow" option |
| **Basic psychological needs: autonomy, competence, relatedness** | Self-determination theory (Ryan & Deci 2000); applied to tech in METUX (Peters, Calvo & Ryan 2018) | [strong] for the theory; [moderate] for specific design applications | Agents can erode **autonomy** (decisions made for me), **competence** (skills atrophy) and **relatedness** (AI replaces people). Measure all three. Let people choose the level of delegation; keep humans connected to other humans |
| **Need for control and predictability** | People prefer systems they can predict and override; perceived lack of control raises stress and lowers trust | [strong] (Norman's gulfs; Shneiderman's "internal locus of control" rule) | Every autonomous action needs: preview, a stop button, undo, and a log. The more autonomy, the more visible the system's state must be |
| **Trust forms slowly and breaks fast** | Trust in automation tracks perceived performance, process and purpose, and drops sharply after visible errors (Lee & See 2004) | [strong] | Earn autonomy in steps (suggest → draft → act with approval → act and report). See `human-ai-trust-trust-and-reliance.md` |
| **Social proof and belonging** | People look to others when uncertain (Cialdini); the need to belong is fundamental (Baumeister & Leary 1995) | [strong] for the phenomena, effect sizes vary | Shared and multiplayer use is a durable value. Future UIs that isolate (headsets, private agents) must give back co-presence (SharePlay, shared views, "who else is here") |
| **Social acceptability and bystanders** | Willingness to gesture, speak or record depends on location and audience (Rico & Brewster, CHI 2010) | [moderate] | Design for the person *next to* the user: visible recording indicators, quiet input (subtle gestures, wrist EMG, touch), and a mode for public settings. Glass failed on this |
| **Embodiment** | Thinking uses the body and space: people arrange, point and gesture to think (Victor 2014, drawing on Bruner) | [moderate] | Spatial and tangible media can help *thinking*, not just viewing. But embodiment includes fatigue: use space for arrangement, not for constant reaching |
| **Aging and disability are universal** | Presbyopia affects nearly everyone after their mid-40s; ~1.3 billion people (16%) live with a significant disability (WHO) | [strong] | Every paradigm must support multiple input/output paths (visionOS HIG: "always give people multiple ways to interact"). Captions, adjustable text and contrast, and voice and switch alternatives are baseline |
| **Habits take weeks to form** | Median ~66 days to automaticity (Lally 2010, range 18–254) | [moderate] | New paradigms fight existing habits. Offer a bridge (the old way still works) and measure adoption at D30/D90, not on launch week |

---

## 2. What does change (the fast variables)

| Variable | 2024–2026 state | Direction | Tag |
|---|---|---|---|
| Input modality | Touch + keyboard dominant; voice input much better (LLM-era ASR); gaze + pinch (visionOS); wrist EMG (Meta Neural Band, 2025) | More modalities **added**, few removed | established / emerging |
| Output surface | Phone screens dominant; camera/audio glasses at multi-million scale; monocular display glasses at consumer price (2025); headsets niche | Glanceable, peripheral and audio outputs grow | emerging |
| Compute location | Cloud LLMs plus a growing on-device model share | Hybrid, with privacy and latency pushing on-device | emerging |
| Interface generation | Static, designed screens; early generative and adaptive UI | Parts of UI composed per task and user, inside a stable design system | emerging → speculative |
| Agency | Assistants that suggest; agents that browse, code and act with approval | Graduated delegation | emerging |
| Neural interfaces | Implanted BCIs in small clinical trials for paralysis; speech decoding at 62–78 wpm in research participants (Willett et al.; Metzger et al., *Nature* 2023) | Medical and assistive first; consumer use is [speculative] and decades out | emerging (clinical only) |

**Key point:** the fast variables change *what is possible*. The constants decide *what will be used*.

---

## 3. Applying the constants to each new paradigm

### 3.1 AI agents and intent-first UI
- **Constants in play:** working memory, recognition over recall, control and predictability, vigilance decay, autonomy and competence, trust.
- **Do:** show the plan before acting; give a persistent overview (what's running, what's done, what needs me); give a one-tap stop and undo; let people pick the delegation level per task; summarize in ≤ 3 items with drill-down.
- **Don't:** a blank prompt box as the only entry point (it forces recall; offer suggested intents); invisible background actions; "review all 40 changes" walls (vigilance fails, so surface only anomalies and exceptions).
- **Measure:** task success end to end, time to complete, correction and undo rate, interruptions per day, and a sample-based skill-retention check.

### 3.2 Voice and conversational audio
- **Constants:** serial, transient audio vs ~4-chunk memory; listening is slower than reading; social acceptability in public; accents and speech differences.
- **Do:** voice for input, hands-busy and eyes-busy moments, and short confirmations; read back only the decision-relevant bit; offer a screen handoff for lists and comparisons; support barge-in (interrupting the system mid-sentence).
- **Don't:** read out more than 3 options; voice-only flows for payments or irreversible actions without visual confirmation; assume people will talk to devices in open offices or on trains.
- **When not:** comparison shopping, editing, anything spatial.

### 3.3 Spatial computing (visionOS and similar)
Verified from Apple's visionOS HIG pages (Eyes; Spatial layout; Designing for visionOS):
- Center important content in the field of view; use the periphery for content needed only now and then.
- Anchor content in the world, **not to the head**.
- Keep reading content at least ~1 m away; avoid frequent depth changes, since refocusing tires the eyes.
- Prefer **indirect gestures** (look + pinch with hands at rest) over direct touch, which tires the arm.
- Space interactive items ≥ 60 pt apart center-to-center, or with a 16 pt margin; prefer rounded shapes (eyes are drawn to corners).
- Choose the **minimum immersion** each moment needs; avoid too many windows; design for shared presence.
- Apps don't get raw gaze data before a tap: a privacy constant built into the platform. Keep it that way in your own designs.
- **Measure:** session length vs self-reported comfort (e.g. a Borg CR10-style exertion rating or a simulator-sickness questionnaire), task time, and mis-selections.

### 3.4 AR and display glasses
- **Constants:** social acceptability (looks like normal eyewear), bystander privacy, weight and heat, foveal vs peripheral vision, divided attention while walking.
- **Do:** glanceable, short-lived overlays (≤ a few words or one icon); audio-first, display-second; visible capture indicators; quiet input (temple touch, wrist EMG, subtle voice); safety modes when the wearer is moving.
- **Don't:** reading-heavy HUDs; persistent overlays in the line of sight; features that record others without a clear signal.

### 3.5 Wearables (watch, ring, band, earbuds)
- **Constants:** tiny targets (Fitts), short glances (seconds), skin and comfort, sleep and circadian context, health anxiety.
- **Do:** a single glance answers a single question; haptics as the calm channel; batch the notifications; frame health data so it doesn't provoke anxiety, with context and trends over single readings.
- **Don't:** mirror the phone app on the wrist; buzz for anything that could wait.

### 3.6 Ambient and calm displays (home, car, workplace)
- **Constants:** periphery vs center of attention (Weiser & Brown), shared space with others, safety (driving).
- **Do:** encode state in peripheral cues (light, color, position, sound) that people can *ignore* until they need them; give a clear way to promote information to the center; make it household-aware (whose information shows on a shared screen?).
- **Don't:** push personal data onto shared surfaces; use flashing or motion for non-urgent states.

### 3.7 Brain–computer interfaces (caution)
- **Established:** implanted BCIs restore communication and cursor control for some people with paralysis in clinical trials [strong for feasibility, small n].
- **Speculative:** consumer "thought-controlled" UIs. Surgical risk, signal stability, privacy of neural data and consent make this [speculative] on any product horizon under ~10 years.
- **Design stance:** treat BCI as **assistive technology first**. Neural data is the most sensitive data there is: assume it needs explicit, revocable consent and on-device processing. Don't design visions that read intent without a deliberate act (the Midas touch problem gets worse with thoughts).

---

## 4. The constants as a design checklist (run on any future concept)

- [ ] **Focus:** one focal point at a time; the periphery is for ambient cues only.
- [ ] **Memory:** nothing the user must hold in mind across steps; ≤ 3–4 items per spoken or glanceable output; a persistent overview exists.
- [ ] **Recognition:** visible options or suggestions exist (no blank-slate-only entry).
- [ ] **Commit act:** looking or thinking never commits; a deliberate act does.
- [ ] **Body:** hands can rest; no sustained reaching; wearable weight and heat stated; sessions sized to comfort.
- [ ] **Time:** < 100 ms acknowledgment; streaming or a visible plan for anything > 1 s; background with progress for > 10 s.
- [ ] **Attention budget:** interruptions per day estimated and capped; quiet hours; batching.
- [ ] **Control:** preview, stop, undo, log, override; autonomy chosen by the user per task.
- [ ] **Needs:** autonomy, competence and relatedness each supported, not eroded (METUX check).
- [ ] **Trust:** autonomy earned in steps; errors visible and cheap.
- [ ] **Social:** bystanders considered; recording visible; a public-setting mode exists.
- [ ] **Inclusion:** at least two input and two output paths; works for older eyes, hearing loss, motor and cognitive differences.
- [ ] **Habit bridge:** the old way still works during the transition; adoption judged at D30/D90.

Score each item pass / risk / fail. Any **fail** on Commit act, Control or Social is a blocker for H1/H2 shipping.

---

## 5. Anti-patterns ("humans will adapt" fallacies)

| Claim | Why it's wrong | Constant |
|---|---|---|
| "Users will learn to remember the commands" | Recall is unreliable and working memory doesn't grow | Memory, recognition |
| "Screens are going away" | Reading and scanning beat listening for comparison and review | Reading vs listening |
| "Gaze will replace clicking" | Gaze is exploratory; dwell-to-click misfires | Midas touch |
| "People will wear it all day" | Weight, heat and social signal decide it | Embodiment, social |
| "A human in the loop makes it safe" | Passive monitoring of rare errors fails | Vigilance, complacency |
| "Users will trust it once they see how smart it is" | Trust follows visible performance and process, and breaks on visible errors | Trust |
| "Privacy norms are dead" | Norms shift slowly and with backlash (Glass, Humane) | Social |
| "The agent will just do it for them" | Removing choice reduces autonomy and satisfaction, even when outcomes are fine | SDT |

---

## 6. How to measure fit to humans in a new paradigm

- **Behavioral:** task success, time on task, error and mis-selection rate, undo/correction rate, abandonment, D30/D90 retention of the new behavior.
- **Physical:** session length before voluntary stop; exertion (Borg CR10); simulator-sickness or visual-fatigue questionnaires for headsets and glasses.
- **Attention:** interruptions per day, the share of notifications acted on vs dismissed, and self-reported interruption burden.
- **Psychological needs:** short autonomy/competence/relatedness scales (METUX/SDT-based) before and after 2–4 weeks.
- **Trust calibration:** acceptance rate when the AI is right vs wrong (from `human-ai-trust-trust-and-reliance.md`).
- **Social:** bystander comfort in a field study; the share of use in public vs private settings.
- **Inclusion:** task success with assistive tech and with older participants (≥ 1 in 5 sessions).

---

## Sources

- Apple. *Human Interface Guidelines: Eyes; Spatial layout; Designing for visionOS; Gestures*. https://developer.apple.com/design/human-interface-guidelines/eyes · https://developer.apple.com/design/human-interface-guidelines/spatial-layout · https://developer.apple.com/design/human-interface-guidelines/designing-for-visionos
- Cowan, N. (2001). *The magical number 4 in short-term memory*. Behavioral and Brain Sciences 24(1). https://doi.org/10.1017/S0140525X01003922
- Ryan, R.M. & Deci, E.L. (2000). *Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being*. American Psychologist 55(1). https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf
- Peters, D., Calvo, R.A., Ryan, R.M. (2018). *Designing for Motivation, Engagement and Wellbeing in Digital Experience*. Frontiers in Psychology 9:797. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5985470/
- Hoffman, D.M., Girshick, A.R., Akeley, K., Banks, M.S. (2008). *Vergence–accommodation conflicts hinder visual performance and cause visual fatigue*. Journal of Vision 8(3). https://pmc.ncbi.nlm.nih.gov/articles/PMC2879326
- Hincapié-Ramos, J.D., Guo, X., Moghadasian, P., Irani, P. (2014). *Consumed Endurance: A Metric to Quantify Arm Fatigue of Mid-Air Interactions*. CHI '14. https://hci.cs.umanitoba.ca/publications/details/consumed-endurance-a-metric-to-quantify-arm-fatigue-of-mid-air-interactions
- Rico, J. & Brewster, S. (2010). *Usable gestures for mobile interfaces: evaluating social acceptability*. CHI '10. https://eprints.gla.ac.uk/43829
- Jacob, R.J.K. (1990). *What you look at is what you get: eye movement-based interaction techniques*. CHI '90.
- Ruan, S., Wobbrock, J., Liou, K., Ng, A., Landay, J. (2016). *Speech Is 3x Faster than Typing for English and Mandarin Text Entry on Mobile Devices*. arXiv. https://hci.stanford.edu/research/speech/paper.html
- Mark, G. (2023). *Attention Span*. Hanover Square Press. Mark, G., Gudith, D., Klocke, U. (2008). *The cost of interrupted work: more speed and stress*. CHI '08.
- Mackworth, N.H. (1948). *The breakdown of vigilance during prolonged visual search*. Quarterly Journal of Experimental Psychology. Parasuraman, R. & Manzey, D. (2010). *Complacency and bias in human use of automation*. Human Factors 52(3).
- Lee, J.D. & See, K.A. (2004). *Trust in automation: designing for appropriate reliance*. Human Factors 46(1).
- Baumeister, R.F. & Leary, M.R. (1995). *The need to belong*. Psychological Bulletin 117(3).
- Willett, F. et al. (2023) and Metzger, S. et al. (2023). Speech neuroprostheses, *Nature* 620. https://ideas.repec.org/a/nat/nature/v620y2023i7976d10.1038_s41586-023-06443-4.html
- WHO. *Disability fact sheet* (1.3 billion, 16%). https://www.who.int/news-room/fact-sheets/detail/disability-and-health
- Lally, P. et al. (2010). *How are habits formed*. European Journal of Social Psychology 40(6).
