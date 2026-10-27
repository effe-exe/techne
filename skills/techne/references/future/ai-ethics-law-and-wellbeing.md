# AI Law, Labeling & Wellbeing: Dated Status and Evidence Behind the Ethics Gate

> **Use this when:** you need the *current* legal facts behind an AI design decision (EU AI Act dates, Article 50, US FTC and state companion-chatbot laws, children's rules), dated and sourced.
> **Use this when:** designing AI-content labels and provenance (C2PA, watermarks), memory and data controls, AI accessibility features, or environmental-cost disclosures.
> **Also use when:** someone makes a strong claim about AI and wellbeing ("chatbots cause loneliness", "attention economy is destroying us") and you need to know how good the evidence is.

**Status date: 26 Oct 2026.** Law moves. Re-verify anything with legal consequences, and treat this as design guidance, not legal advice. The operational checklist is `ai-ethics-gate.md`. General consent and cancellation law is in `psychology/behavior-law-consent-cancellation.md`, and this file does not repeat it.

Evidence tags: [strong] [moderate] [weak/anecdotal] [contested] [speculative]. Legal facts are tagged [law] when confirmed from the statute or official text, and [law, secondary] when confirmed only from law-firm summaries.

---

## 1. EU AI Act: where it stands in late 2026

### 1.1 The timeline (as amended by the Digital Omnibus on AI)

The **Digital Omnibus on AI**, Regulation (EU) 2026/1744 of 8 July 2026, was published in the Official Journal on 24 July 2026. It entered into force three days later [law, secondary: Cuatrecasas 2026].

| Date | What applies | Design implication |
|---|---|---|
| 1 Aug 2024 | AI Act in force | n/a |
| **2 Feb 2025** | **Art. 5 prohibited practices** + Art. 4 AI literacy | Manipulative or exploitative designs are banned outright (§1.2) |
| 2 Aug 2025 | General-purpose AI model obligations; penalties regime | Mostly model providers. You inherit their documentation |
| **2 Aug 2026** | **Art. 50 transparency obligations** (not delayed) | Chatbot disclosure, machine-readable marking, deepfake labels (§1.3) |
| 2 Dec 2026 | End of the Art. 50(2) marking grace period, only for gen-AI systems **already on the market before 2 Aug 2026** | New systems must mark from launch |
| **2 Dec 2027** | **Annex III high-risk** obligations (moved from 2 Aug 2026) | Hiring, education, credit, essential services, biometrics |
| 2 Aug 2028 | Annex I product-embedded high-risk (moved from 2 Aug 2027) | AI inside regulated products |

Other Omnibus changes that matter to designers [law, secondary]:
- **New Art. 5 prohibitions.** Systems that generate or manipulate realistic intimate imagery of an identifiable person without consent ("nudifiers"), and AI-generated CSAM. For providers, the ban is triggered when this is the intended purpose *or* is reasonably foreseeable from the design without adequate safeguards. **Applies from 2 Dec 2026** [law, secondary: Digital Policy Alert; Cuatrecasas]. For deployers, the ban bites only when they use a system for that purpose. Edits that don't expose more intimate parts don't count as "manipulation". Design consequence: image and video generators need guardrails against undressing real people as a product requirement, not a moderation afterthought.
- **AI literacy (Art. 4) kept but softened**, to "support" the literacy of staff and operators. In-product explanations of limits help here.
- **Article 4a** gives a narrow legal basis for processing sensitive data to detect and correct bias, under "strict necessity".

Fines (original Act): up to €35M or 7% of global turnover for prohibited practices, and up to €15M or 3% for most other breaches [law].

### 1.2 Article 5 prohibitions most relevant to product design [law]
(Text in force since 2 Feb 2025. The Commission published guidelines on prohibited practices in Feb 2025.)
- **5(1)(a)** Subliminal, purposefully manipulative or deceptive techniques that materially distort behavior and impair informed decisions, causing or likely to cause significant harm.
- **5(1)(b)** Exploiting vulnerabilities due to **age, disability or social or economic situation** to distort behavior with significant harm.
- **5(1)(f)** Emotion recognition in **workplaces and education** (except medical and safety uses).
- Social scoring, untargeted facial scraping, some predictive policing, real-time remote biometric ID (with exceptions).

**Design reading.** The "significant harm" threshold is high, so most dark patterns fall under consumer law (UCPD, DSA Art. 25) rather than Art. 5. But a companion bot that exploits a minor's loneliness to drive spending, or emotion detection in a learning app, is exactly the Art. 5 territory [moderate: interpretation; little case law yet].

### 1.3 Article 50 transparency: what to build [law]
| Paragraph | Duty holder | Requirement | UI pattern |
|---|---|---|---|
| 50(1) | Provider | People must be informed they're interacting with an AI, unless obvious from context to a reasonably well-informed person | Persistent "AI" identity in chat header; first-turn disclosure; voice: spoken disclosure at start |
| 50(2) | Provider of gen-AI | Synthetic audio, image, video and text outputs marked in a **machine-readable, detectable** way, as far as technically feasible | C2PA manifest + watermark; exemption for assistive editing that doesn't substantially alter input |
| 50(3) | Deployer | Inform people exposed to **emotion recognition or biometric categorisation** | Pre-capture notice; off switch |
| 50(4) | Deployer | Disclose **deepfakes**; disclose AI-generated **text published to inform the public on matters of public interest** (unless human-reviewed with editorial responsibility). Artistic or satirical works: lighter, non-intrusive disclosure | Visible label on the asset; byline note for AI-written news |
| 50(5) | All | Info given clearly, **at the latest at first interaction or exposure**, and meeting accessibility requirements | Labels must be screen-reader readable, not color-only |

**Code of Practice on marking and labelling AI-generated content:** the final text was published 10 June 2026 [law, secondary: Jones Day 2026; SCL]. It is voluntary but expected to be the reference for showing Art. 50 compliance. It has a provider section (machine-readable marking) and a deployer section (labels, including an EU icon or equivalent). It openly concedes that **no single marking technique meets all requirements** (effectiveness, interoperability, robustness, reliability), so layering is expected. **Commission Art. 50 guidelines:** final, non-binding text published 20 Jul 2026, after a March draft and a May revision; formal adoption follows once all language versions are available [law, secondary: Stephenson Harwood; Pearl Cohen 2026]. Commentators flag a *narrow* reading of when AI interaction is "obvious" (don't rely on context alone: disclose) and a strict human-review test for the editorial-responsibility exception for public-interest text.

---

## 2. United States: FTC and state law

### 2.1 FTC (no AI-specific rule; enforcement through Section 5)
- **Operation AI Comply** (Sept 2024 onward) targets deceptive AI claims and AI-powered scams. **DoNotPay** ("robot lawyer"): $193k, with notice to subscribers about its limits; order finalized Jan 2025 [law, secondary]. Business-opportunity schemes promising AI income received bans in 2025.
- **accessiBe** (final order Apr 2025): $1M. The company is barred from claiming its automated overlay makes sites WCAG-compliant without evidence, and from presenting paid reviews as independent [law: FTC press release]. Direct lesson for AI accessibility claims (§5).
- **Rytr** (AI review-writing tool) consent order **set aside** (late 2025 / early 2026; dates differ across sources) on the reasoning that concrete harm wasn't shown [law, secondary]. Read it as a signal: the current FTC is less likely to pursue "means and instrumentalities" theories against general tools. Deception about your own product's capabilities is still actively enforced.
- **Quiet terms changes** for AI training: the FTC's Feb 2024 post warned that retroactively loosening privacy promises to train AI can be unfair or deceptive [law, secondary].
- **Section 6(b) companion-chatbot inquiry** (11 Sept 2025, 3–0 vote): orders to Alphabet, Character Technologies, Instagram, Meta, OpenAI, Snap and xAI on how they test and monitor harms to children and teens, monetize engagement, and use conversation data. It is a study, not an enforcement action [law, secondary: AP].
- The 2024 FTC rule banning fake reviews and testimonials covers AI-generated ones [law].

### 2.2 State law on companion chatbots and AI in mental health [law, secondary unless noted]
| State | Law | In force | Key design duties |
|---|---|---|---|
| **New York** | AI companion safeguards (Gen. Bus. Law) | 5 Nov 2025 | Detect and address suicidal ideation and self-harm; refer to crisis services; notify that the user is talking to AI at start and at least every 3 hours of continued use. AG enforcement, up to $15k/day. (One summary quotes a "once per day" cap: check statute text) |
| **California** | **SB 243** companion chatbots | 1 Jan 2026 (reporting from 1 Jul 2027) | Clear AI disclosure; crisis protocols, with annual reporting on crisis referrals to the Office of Suicide Prevention; **minors: break reminders, block sexually explicit content**; no posing as a health professional. **Private right of action**, ≥$1,000 per violation |
| **California** | **SB 942** AI Transparency Act, amended by **AB 853** | 2 Aug 2026 (platforms 1 Jan 2027; capture devices 1 Jan 2028) | Gen-AI providers with over 1M monthly users: free detection tool, latent (machine-readable) disclosures, and optional visible disclosures for **image, video, audio** (not text). $5k per violation per day |
| **Illinois** | HB 1806 Wellness and Oversight for Psychological Resources Act | signed Aug 2025 | AI may not provide therapy independently; licensed clinicians must review AI therapeutic output; fines up to $10k |
| **Utah** | HB 452 mental-health chatbots | 7 May 2025 | Disclosure; limits on selling or sharing user data and on advertising. Not a clinical ban |
| **Nevada** | AI in behavioral health restriction | signed Jun 2025 | Restricts AI use by mental-health providers |

**Federal GUARD Act** (S. 3062): advanced unanimously by Senate Judiciary on 30 Apr 2026. It would require age verification and **bar minors from AI companions**. It has not passed as of this writing [law, secondary]. Critics (ITIF, Jun 2026) argue it is an over-broad ban [contested].

### 2.3 Litigation shaping the norm
- **Garcia v. Character Technologies** and four other family suits: **settled** with Character.AI and Google (Jan 2026, terms confidential) [moderate: news reports of court filings].
- **Raine v. OpenAI** (filed Aug 2025, wrongful death): pending as of Oct 2026. OpenAI argues misuse and circumvention of safeguards [moderate].
- Industry responses: Character.AI ended open-ended chat for under-18s (effective 25 Nov 2025), with a shrinking daily limit before that. OpenAI launched parental controls (29 Sept 2025) with distress alerts reviewed by humans, plus age prediction defaulting uncertain users to the teen experience. Teens can unlink accounts, and parents can't read transcripts [moderate].

**Design reading.** In 2026 the US direction of travel is **design duties for companions**: disclosure cadence, break reminders, crisis routing, and no sexual content for minors. Liability arrives through private suits, not just regulators.

---

## 3. Elsewhere (selected)
- **Italy, Garante v. Luka (Replika):** €5M GDPR fine (decision 10 Apr 2025). Grounds: no legal basis for processing, a non-transparent English-only privacy policy, and **no effective age verification** (users could just change their birth date). A separate probe into training on user data was opened [law, secondary].
- **Australia, eSafety:** age-restricted-material codes covering **AI companion chatbots** applied from **9 Mar 2026**. Services must prevent children's access to sexual and other age-inappropriate content (by not generating it, or by age assurance) and provide crisis information. Penalties go up to A$49.5M. eSafety's 24 Mar 2026 transparency report found none of four providers had robust age verification, and three didn't refer self-harm chats to support. One provider geo-blocked Australia [law, secondary + regulator release].
- **UK:** Online Safety Act duties apply to chatbots that let users share content or that search; Ofcom has said generative chatbots can be in scope [moderate; verify specifics].

---

## 4. Labeling AI content: provenance that survives humans and pipelines

### 4.1 What's established
- **C2PA content credentials** are a signed manifest stating who or what made an asset and how it was edited. Adobe, Microsoft, OpenAI, Google and others attach them. Google's **Pixel 10** signs camera captures with hardware-backed keys. Cloudflare Images can preserve credentials [moderate: vendor and secondary sources].
- **Metadata is fragile.** Screenshots, re-encoding and many social platforms strip manifests (reports of Facebook removing credentials on upload) [moderate]. **Watermarks** embedded in pixels or audio (e.g., Google SynthID) survive more transformations but are vendor-specific and can be degraded [moderate].
- The EU Code of Practice concedes that no single technique suffices, so **layer**: manifest + watermark + visible label + server-side records [law, secondary].

### 4.2 Label design patterns
| Pattern | When | When not |
|---|---|---|
| **Visible chip on asset** ("AI-generated" / "Edited with AI") with tap-to-details | Photoreal media, anything about real people or events, ads | Tiny on-canvas UI icons in your own product, where context is obvious |
| **Detail sheet** (who made it, tool, date, edits, "credentials verified / missing") | Newsrooms, marketplaces, social feeds | Do not show "verified" if you only checked self-declared metadata |
| **"Origin unknown" state** (neutral, not accusatory) | Content without credentials. Most content today | Never imply that "no credential" means "fake". That trains false confidence |
| **Byline disclosure for AI text** ("Drafted with AI, reviewed by [editor]") | Public-interest text under 50(4); reviews; health and finance content | Private drafting help (autocomplete in the user's own email) |
| **Graduated labels**: generated vs substantially edited vs assistive edit | Creative tools | Collapsing everything into one "AI" badge: users can't tell a red-eye fix from a fabricated scene |

**Human constants check.** People skim. A label must be readable at a glance (5-second test), placed where the content is consumed, and readable by screen readers (Art. 50(5)). Over-labeling causes **label blindness**, and mislabeling real photos as AI erodes trust in true content [moderate: early platform experiences with "Made with AI" tags on lightly edited photos, 2024].

---

## 5. Accessibility: AI's biggest honest win, with sharp edges

### 5.1 Opportunities [moderate to strong]
- **Image description on demand** (e.g., Be My Eyes' Be My AI, Microsoft Seeing AI). Blind users value richer, more systematic descriptions than sighted helpers typically give (Adnin & Das, ASSETS 2024, interviews n=19) [moderate].
- **Live captions and transcription** everywhere, including in-person conversation [strong for availability; quality varies].
- **Plain-language rewriting, summarization and translation** for cognitive, language and literacy needs [moderate].
- **Voice and multimodal input** for motor impairments [moderate].

### 5.2 Failure modes to design against
| Failure | Example | Design response |
|---|---|---|
| **Confident wrong descriptions** | Hallucinated objects, text or people in a photo; wrong medication label | Mark as AI description; offer "ask a follow-up" and "get human help"; never auto-act on read text for high-stakes tasks |
| **Caption errors that flip meaning** | A dropped "not"; misheard numbers and names | W3C WAI: automatic captions are not sufficient unless confirmed accurate. Human-review captions for published media; let users report errors |
| **Simplification that drops facts** | A plain-language rewrite omits a dosage, deadline or exception | Keep the original one tap away; highlight numbers and negations; test for factual preservation |
| **Inaccessible AI UIs** | Chat interfaces that are hard to navigate with a screen reader; streaming text that re-announces itself | Use ARIA live regions politely; give a "response complete" announcement; keep focus stable (`interaction/accessibility.md`) |
| **"AI makes you compliant" claims** | Overlays sold as automatic WCAG compliance | The FTC accessiBe order. Never claim compliance from automation alone |
| **Bias in descriptions** | Gendered or racial assumptions about people in images | Describe what's visible. Avoid inferring identity attributes unless the user asks |

**Measure.** Description accuracy rated by blind users on *your* content. Caption word error rate split by accent and speaker. Fact-preservation rate in simplification. Task success with a screen reader on the AI surface itself.

---

## 6. Memory, personalization and consent

Established guidance and enforcement point the same way [law + moderate]:
- **Separate purposes:** using chats to *improve models* is a different choice from using them to *remember you*. Bundling them fails GDPR's "specific" consent and confuses users.
- **Defaults are decisions.** If the default favors training, expect criticism even with a clear prompt (Anthropic's Sept 2025 change: training on consumer chats unless the user opted out, retention up to 5 years for those who allowed it, toggle reported as pre-set on) [moderate: press coverage].
- **Retroactivity is the red line** (FTC 2024). New uses apply to new data, after notice.
- **Special-category inferences** (health, sexuality, religion, politics) should never be silently stored as memory.
- **Minors:** parents may need memory off by default (OpenAI's parental controls include disabling memory) [moderate].

**Patterns:** a just-in-time "saved to memory" toast with undo; a memory manager with per-item edit and delete and a "why do you know this?" trace; a temporary chat; data export; a training toggle visible in chat settings; a retention period stated in days.

---

## 7. Attention, agency and wellbeing: what the evidence actually says

| Claim | Evidence quality | Use it as |
|---|---|---|
| Companion apps use manipulative farewells that boost engagement | [moderate] audit of 1,200 farewells + 4 preregistered experiments, n≈3,300 (De Freitas et al., 2025) | A specific, testable pattern to ban (gate G3) |
| Heavy chatbot use goes with loneliness and emotional dependence | [moderate, correlational] 4-week RCT n=981: no significant effect *of condition*; heavier use was associated with worse outcomes (Fang et al., 2025). Large log analysis: affective use concentrated in a small group of heavy users (Phang et al., 2025) | A reason to monitor heavy-use cohorts, not proof that chatbots cause loneliness |
| Sycophancy is systematic in preference-trained models | [strong] (Sharma et al., ICLR 2024); real-world rollback of an over-sycophantic model update (OpenAI, Apr 2025) | Required regression evals (gate G2) |
| Screen time broadly harms adolescent wellbeing | [contested] Effect sizes in large datasets are small, depending heavily on analytic choices (Orben & Przybylski, 2019); disputed by Twenge, Haidt et al. | Don't cite "screens are destroying kids" as settled. Design against *specific* mechanisms instead |
| The "attention economy" is engineered to exploit us (Center for Humane Technology's framing) | [weak/anecdotal → moderate] Strong as an advocacy lens with insider testimony; specific causal claims are often ahead of the data. CHT supported litigation against Character.AI | A useful *critique frame* and source of questions. Back specific design claims with studies |

**Agency principle.** Optimize for what the user would endorse on reflection (Anthropic's constitution language; Susser et al.'s manipulation as "hidden influence"). Make this operational with regretted-use surveys, self-set limits the product respects, and session-end summaries instead of hooks.

---

## 8. Environmental cost transparency

### 8.1 What's published [moderate: vendor self-reports; scopes differ]
- **Google (Aug 2025):** median Gemini Apps text prompt ≈ **0.24 Wh, 0.03 gCO2e, 0.26 mL water**, counting accelerators, host CPU and DRAM, idle capacity and data-center overhead. It excludes training, networking and end-user devices. Counting active accelerators only gives 0.10 Wh. Google reports 33x lower energy per prompt over 12 months. Critics say the scope omits indirect water and manufacturing [contested on scope].
- **Mistral (Jul 2025, with Carbone 4 and ADEME, peer-reviewed by Resilio and Hubblo):** marginal **400-token Le Chat response ≈ 1.14 gCO2e, 45 mL water**. Training Large 2 (through Jan 2025) ≈ 20.4 ktCO2e and 281,000 m³ water. This is a fuller life-cycle scope, including hardware manufacturing.
- The two are **not comparable**. The ~40x gap in carbon and ~170x gap in water per response come largely from **scope and method**, not from efficiency alone. Image, video and long agent runs cost far more than a text prompt [moderate].

### 8.2 Design guidance
- **When to show it:** heavy actions (video generation, batch jobs, long agent runs), sustainability-focused products, B2B dashboards. **When not:** every chat message. That adds guilt and noise for a cost the user can't act on.
- **How:** state the scope ("estimate: inference only, excludes training"), use relative framing the user can act on ("the smaller model uses ~X% less energy for this task"), and offer **efficient defaults** (smaller models for simple tasks, preview before full render).
- **Never** greenwash ("carbon-neutral AI") without verifiable scope. That is a misleading environmental claim under EU consumer law [law, secondary].

---

## 9. Established vs emerging vs speculative (summary)

- **Established:** chatbot disclosure duties (EU Art. 50 from Aug 2026; CA, NY); deceptive AI claims are enforced (FTC); companion design duties for minors (CA, NY, Australia); sycophancy is real and measurable; automatic captions need human verification; metadata provenance is fragile.
- **Emerging:** the EU labeling Code of Practice becoming the de facto standard; age assurance as a baseline for companion apps; hardware-signed camera provenance; vendor energy disclosures; litigation as the main US enforcement path; regulators naming conversational patterns (exit, escalation) directly.
- **Speculative:** a federal US companion ban for minors (GUARD Act); per-action energy labels becoming expected; provenance "unknown" becoming the default suspicion state online; Art. 5 manipulation cases against conversational systems.

---

## Sources

- Regulation (EU) 2024/1689 (AI Act). https://eur-lex.europa.eu/eli/reg/2024/1689/oj ; Article 50: https://artificialintelligenceact.eu/article/50/
- Cuatrecasas (2026, Jul 24). *Digital Omnibus on AI has been published.* https://www.cuatrecasas.com/en/spain/intellectual-property/art/digital-omnibus-ai-has-been-published
- Stephenson Harwood (2026). *EU AI Act Update: European Commission Adopts Guidelines on Article 50 Transparency Obligations.* https://www.stephensonharwood.com/post/102nfqh/eu-ai-act-update-european-commission-adopts-guidelines-on-article-50-transparency-obligations/ ; Pearl Cohen: https://www.pearlcohen.com/european-commission-publishes-final-guidelines-on-ai-transparency-obligations/
- Digital Policy Alert. *Digital Omnibus on AI: prohibition of nudification apps and AI CSAM becomes applicable.* https://digitalpolicyalert.org/event/42386-digital-omnibus-on-ai-regulation-prohibiting-nudification-apps-and-ai-systems-generating-or-manipulating-child-sexual-abuse-material-becomes-applicable
- Jones Day (2026, Jun). *European Commission Publishes Final Code of Practice on Marking and Labelling AI-Generated Content.* https://www.jonesday.com/en/insights/2026/06/european-commission-publishes-final-code-of-practice-on-marking-and-labelling-aigenerated-content
- SCL (2026). *European Commission publishes Code of Practice on marking and labelling AI-generated content.* https://www.scl.org/european-commission-publishes-code-of-practice-on-marking-and-labelling-ai-generated-content/
- AP via WEAU (2025, Sep 11). *FTC launches inquiry into AI chatbots acting as companions.* https://www.weau.com/2025/09/11/ftc-launces-inquiry-into-ai-chatbots-acting-companions-their-effects-children/
- FTC (2025, Apr). *FTC Approves Final Order Requiring accessiBe to Pay $1 Million.* https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million
- FTC Technology Blog (2024, Feb). *AI (and other) Companies: Quietly Changing Your Terms of Service Could Be Unfair or Deceptive.* https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2024/02/ai-other-companies-quietly-changing-your-terms-service-could-be-unfair-or-deceptive
- Holland & Knight (2026, Aug). *Operation AI Comply: 2 Years Later.* https://www.hklaw.com/en/insights/publications/2026/08/operation-ai-comply-2-years-later-continued-enforcement
- Skadden (2025, Oct). *New California 'Companion Chatbot' Law.* https://skadden.com/insights/publications/2025/10/new-california-companion-chatbot-law
- Orrick (2025, Oct 17). *California delays its AI Transparency Act.* https://infobytes.orrick.com/2025-10-17/california-delays-its-ai-transparency-act-and-passes-new-content-laws/
- NY Governor (2025, Nov 10). *Letter to AI companion companies.* https://www.governor.ny.gov/news/governor-hochul-pens-letter-ai-companion-companies-notifying-them-safeguard-requirements-are ; Fenwick: https://www.fenwick.com/insights/publications/new-yorks-ai-companion-safeguard-law-takes-effect
- TechTarget (2025). *Illinois 1st US state to ban AI in mental healthcare.* https://www.techtarget.com/healthtechanalytics/news/366628773/Illinois-1st-US-state-to-ban-AI-in-mental-healthcare
- Covington Global Policy Watch (2026, May). *Senate Judiciary Committee advances GUARD Act.* https://www.globalpolicywatch.com/2026/05/senate-judiciary-committee-advances-guard-act-regulating-minor-use-of-ai/ ; ITIF critique (2026, Jun 29): https://itif.org/publications/2026/06/29/the-guard-act-fails-to-guard-kids-best-interests-on-ai-companions/
- eSafety Commissioner (2026, Mar). *eSafety report shows AI companions are putting children at risk.* https://esafety.gov.au/newsroom/media-releases/esafety-report-shows-ai-companions-are-putting-children-at-risk
- Digital Policy Alert (2025). *Garante fined Luka (Replika) EUR 5 million.* https://digitalpolicyalert.org/event/30071-data-protection-authority-fined-replika-chatbot-provider-luka-eur-5-million-for-gdpr-violations-related-to-legal-basis-for-data-processing-and-age-verification
- CNN via KVIA (2026, Jan 7). *Character.AI and Google agree to settle lawsuits.* https://kvia.com/news/business-technology/cnn-business-consumer/2026/01/07/character-ai-and-google-agree-to-settle-lawsuits-over-teen-mental-health-harms-and-suicides/
- Wikipedia. *Raine v. OpenAI.* https://en.wikipedia.org/wiki/Raine_v._OpenAI [weak as source; use for docket pointers]
- TechCrunch (2025, Oct 29). *Character.AI is ending its chatbot experience for kids.* https://techcrunch.com/2025/10/29/character-ai-is-killing-the-chatbot-experience-for-minors/
- Axios (2025, Sep 29). *How OpenAI's new ChatGPT parental controls work.* https://www.axios.com/2025/09/29/chatgpt-openai-parental-controls ; OpenAI: https://openai.com/index/building-towards-age-prediction/
- TechCrunch (2025, Aug 28). *Anthropic users face a new choice: opt out or share your data for AI training.* https://www.techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training
- De Freitas, J. et al. (2025). *Emotional Manipulation by AI Companions.* https://arxiv.org/abs/2508.19258
- Fang, C. M. et al. (2025). Longitudinal RCT on chatbot psychosocial effects. https://arxiv.org/abs/2503.17473 ; Phang, J. et al. (2025). https://arxiv.org/abs/2504.03888
- Orben, A., Przybylski, A. (2019). *Screens, Teens, and Psychological Well-Being.* Psychological Science. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7040178/
- Adnin, R., Das, M. (2024). *"I look at it as the king of knowledge": How Blind People Use and Understand Generative AI Tools.* ASSETS. (Summary: https://a11y-paradise.onrender.com/reviews/69ae0b021ee16af4bcdca238)
- W3C WAI. *Captions/Subtitles.* https://www.w3.org/WAI/media/av/captions/
- Google Cloud (2025, Aug). *Measuring the environmental impact of AI inference.* https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference
- Mistral AI (2025, Jul). *Our contribution to a global environmental standard for AI.* https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai
- Mozilla Foundation (2025). Meta AI Discover feed campaign. https://www.mozillafoundation.org/en/campaigns/meta-help-users-stop-accidentally-sharing-private-ai-conversations/
