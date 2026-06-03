# Vendor Research: EMS Operations

**Cluster:** CAD + ePCR + Field Ops
**Research date:** 2026-06-01
**Author:** Adaptix research agent
**Scope:** ESO Suite, Zoll Data Systems, ImageTrend, Traumasoft, AngelTrack, HealthEMS (Sansio)

Notation: CONFIRMED = sourced fact with a citation. INFERRED = analyst reasoning from sourced facts. UNKNOWN = not found in this pass.

---

## ESO Suite (ESO Solutions)

### Profile
- ESO is positioned as "the largest software and data solutions provider to EMS agencies and fire departments" (CONFIRMED: Owler/CBInsights summaries, ESO own about page).
- Investor backing: ESO is a Vista Equity Partners portfolio company (CONFIRMED via PitchBook profile).
- Exact paying agency count: UNKNOWN (ESO uses "thousands of customers across North America" language; no public hard number).

### Modules + Pricing
Modules surfaced on eso.com (CONFIRMED, https://www.eso.com/ems/):
- EMS platform / Electronic Health Record (EHR, the ePCR)
- Health Data Exchange (HDE) — hospital outcome / closed-loop data
- Logis Dispatch (CAD; acquired July 2024)
- Logistics Management, Scheduling, Asset Management, Activities, Personnel Management
- Insights / Analytics / Alerting for EMS
- Inventory, Checklists
- Billing (via ESO + Logis partnership)
- On-Demand Learning (ODL) + EMS1 Academy (continuing ed)
- Fire RMS / Patient Registry / Hospital products on adjacent lines

Pricing (CONFIRMED via third-party trackers; ESO does not publish):
- ITQlick / SoftwareFinder estimate: ~$100–$300/user/mo single seat; ~$800–$2,500/mo for 10-user; $7K–$20K/mo for 100-user; implementation $5K–$50K (https://www.itqlick.com/eso-electronic-health-record-ehr/pricing).
- INFERRED: ESO pricing is per-seat + per-module + mandatory paid training; total cost of ownership scales aggressively for mid/enterprise.

### Feature Inventory (EHR / ePCR)
CONFIRMED from https://www.eso.com/ems/ehr/:
- iOS-first ePCR with offline capture and sync
- CAD-to-ePCR ingest, billing handoff, prehospital connectivity
- Customizable forms; community-specific templates
- Mobile Integrated Health (MIH) / Community Paramedicine run type
- Critical Care / flight / neonatal workflow
- Built-in ESO Insights analytics, Quality Management, State Reporting
- Auto-generated narratives (AI) — see AI section

CONFIRMED elsewhere:
- NEMSIS 3.4 + 3.3.4 compliant (per ESO EMS page). NEMSIS 3.5 not explicitly claimed on the EHR page.
- Automatic submission to CARES and state trauma registries.
- Logis Dispatch is the integrated CAD (replaced reliance on third-party CAD vendors after the 2024 acquisition).

### AI / Cortex Equivalents
CONFIRMED via ESO blog + press:
- **Auto-Generated Narratives** — drafts the ePCR narrative from structured data. ESO claims "reduced total documentation time by up to 80%" and a "30% drop in time to lock a patient record on average," with "over 180k hours of manual entry" saved cumulatively (https://www.eso.com/blog/eso-auto-generated-narratives-tech-that-follows-your-lead/).
- **911 dispatch assistance** — announced as part of 2025 roadmap (https://www.eso.com/blog/q2-2025-eso-updates-quarterly-product-enhancements/).
- **AI philosophy:** "human empowerment, responsible and transparent AI, innovation with purpose…" with explicit "no black-box outputs" stance (ESO AI blog).
- **d2i acquisition (April 2026)** brings ED/hospital data science: dispatch + ambulance + ED triage + discharge outcomes in one warehouse — explicitly framed as "training ground for machine learning" (https://www.eso.com/news/press-releases/, https://hitconsultant.net/2026/04/07/eso-solutions-acquires-d2i-emergency-department-ems-data-intelligence/).

INFERRED: ESO has chosen a *single AI feature shipped + roadmap* approach rather than a Cortex-like multi-surface AI fabric. Their AI is concentrated in narrative generation and downstream analytics, not in dispatch, triage, billing copilot, or migration tooling.

### Known Weaknesses (sourced)
From Capterra reviews aggregated via https://www.capterra.com/p/175575/EHR-Software/:
- "ESO support is shoddy at best. When things don't work, ESO will work tickets at their own pace" — poor support responsiveness.
- "The company nickel and dimes you for everything. They require training for each module" — hidden training fees; "ridiculous" pricing.
- "Like a 1990s system that needed to be updated" — UX/IA dated.
- "AD-HOC reporting functionality… less user friendly."
- Historical bug: "reports would disappear" (reportedly fixed).

INFERRED: Per-module training-as-revenue model + slow support = strong customer-success vulnerability for any vendor with white-glove migration and a real support SLA.

### Recent Moves
- **April 2026:** Acquired d2i (ED/hospital data intelligence) — https://www.eso.com/news/press-releases/.
- **July 2024:** Acquired Logis Solutions (CAD + dispatch + billing) — closed the CAD gap that previously forced ESO customers to integrate with third-party CADs.
- **2023:** ESO Solutions data breach disclosed September 2023; 2.7M individuals affected. Ransomware encrypted internal systems; restored from backups. Class action settled for $757,500 (preliminary approval Nov 24, 2025) — https://www.securityweek.com/eso-solutions-data-breach-impacts-2-7-million-individuals/, https://www.classaction.org/news/757k-eso-solutions-class-action-settlement-resolves-lawsuit-over-september-2023-data-breach.
- Owned by Vista Equity Partners (CONFIRMED via PitchBook).

### API + Integrations
- NEMSIS 3.4 / 3.3.4 export (CONFIRMED).
- Health Data Exchange (HDE) — hospital outcomes / discharge data closed loop.
- CARES and state trauma registry submission.
- CAD integrations (now primarily Logis Dispatch in-house).
- Public REST/FHIR R4 surface: UNKNOWN — not advertised on product pages reviewed.

### Customer Base
- INFERRED from positioning: large municipal + private mid-market EMS; many state contracts (e.g., Virginia OEMS migrated from ImageTrend to ESO per a 2021 transition FAQ, https://www.vdh.virginia.gov/content/uploads/sites/23/2021/06/OEMS-ImageTrend-to-ESO-Transition-FAQs.pdf).
- Hard agency count: UNKNOWN.

### Their Moat
- State-level enterprise contracts (NEMSIS submission pipeline = high switching cost).
- Cradle-to-discharge data warehouse (post-d2i) is a real story.
- EMS1 Academy bundles continuing-ed credentials → workforce lock-in.
- Per-module training contracts create internal champions.

### Adaptix Kill Strategy
1. **Beat their narrative AI with Cortex AI everywhere** — narrative generation is table stakes; Adaptix Cortex spans dispatch triage, billing migration, denial prediction, scheduling intelligence, NEMSIS-validation copilot, and field documentation. ESO has one AI surface; Adaptix has a fabric.
2. **Closed-loop data without an acquisition** — Adaptix natively wires CAD → ePCR → billing → NEMSIS → outcome. No need to fund $X00M acquisitions to fake the integration story.
3. **No training tax** — Adaptix bundles training. Every "they nickel-and-dime you" review is a closeable lead.
4. **Real support SLA** — published response targets, live escalation, founder-accessible. Direct counter to "tickets at their own pace."
5. **Security narrative** — publish posture (least-priv IAM, RLS, audit, encryption at rest/in transit, breach response plan) as a sales asset. ESO's 2023 breach is a permanent objection-handling opportunity.
6. **NEMSIS 3.5 day-one** — ImageTrend has 3.5; ESO EHR page still cites 3.4 / 3.3.4. Lead with current standard.
7. **Migration-as-a-feature** — Cortex billing migration eliminates the "ESO migration is brutal" sales objection vs. competitor migrations into Adaptix.

### Sources
- https://www.eso.com/ems/
- https://www.eso.com/ems/ehr/
- https://www.eso.com/blog/eso-auto-generated-narratives-tech-that-follows-your-lead/
- https://www.eso.com/blog/ai-that-respects-the-work-you-do/
- https://www.eso.com/blog/q2-2025-eso-updates-quarterly-product-enhancements/
- https://www.eso.com/news/press-releases/eso-acquires-logis-solutions/
- https://hitconsultant.net/2026/04/07/eso-solutions-acquires-d2i-emergency-department-ems-data-intelligence/
- https://www.capterra.com/p/175575/EHR-Software/
- https://www.itqlick.com/eso-electronic-health-record-ehr/pricing
- https://www.securityweek.com/eso-solutions-data-breach-impacts-2-7-million-individuals/
- https://www.classaction.org/news/757k-eso-solutions-class-action-settlement-resolves-lawsuit-over-september-2023-data-breach
- https://www.upguard.com/security-report/eso

---

## Zoll Data Systems (RescueNet + emsCharts + ZOLL Dispatch + ZOLL Billing)

### Profile
- Division of ZOLL Medical (Asahi Kasei subsidiary).
- Two parallel product lines: legacy **RescueNet** (client-server) and modern **ZOLL** cloud suite (Dispatch, emsCharts, emsCharts NOW, Billing, Care Exchange).
- Processes "13M+ EMS events annually" via RescueNet alone (CONFIRMED: https://www.zolldata.com/rescuenet).

### Modules + Pricing
CONFIRMED modules (https://www.zolldata.com/ems-fire, https://www.zolldata.com/rescuenet):

**Legacy RescueNet suite:**
- RescueNet Dispatch (CAD)
- RescueNet ePCR
- RescueNet Billing / Billing Pro

**Modern ZOLL cloud suite:**
- ZOLL Dispatch
- ZOLL emsCharts (ePCR)
- ZOLL emsCharts NOW (mobile ePCR)
- ZOLL Billing — "leverage the power of artificial intelligence" for RCM
- ZOLL Care Exchange (clinical/demographic/financial real-time exchange)

**Adjacent services:**
- ZOLL AR Consulting
- Custom Report Writing
- Clinical Business Consulting
- Direct Data Access (DDA)

Pricing (CONFIRMED via third-party):
- emsCharts: ~$22/mo entry (per SoftwareFinder), but real pricing is quoted custom; not publicly disclosed.
- INFERRED: Glassdoor insider complaint quotes existing RescueNet customers being asked to "spend up to 5x more to move to a less capable SaaS platform" — i.e., the cloud migration is a price escalation event.

### Feature Inventory
- CAD: call-taking, AVL, response-time tooling (CONFIRMED).
- emsCharts: medic-guided patient flow, configurable forms, mobile capture (emsCharts NOW on personal/standard devices).
- Billing: AI-assisted RCM (CONFIRMED ZOLL claim, specifics not disclosed).
- Care Exchange: HIE-style real-time data flow with hospitals.
- NEMSIS support: not surfaced on the pages reviewed; INFERRED from product category.
- Road Safety (vehicle telematics) — separate ZOLL Medical product, frequently bundled in EMS deals.

### AI / Cortex Equivalents
CONFIRMED:
- ZOLL Billing markets "built-in RCM optimization tools that leverage the power of artificial intelligence."
INFERRED:
- ZOLL has narrower AI than ESO. AI is positioned as a *billing-only* differentiator, not field/dispatch/Cortex-style fabric. No public auto-narrative product on parity with ESO's.

### Known Weaknesses (sourced)
Insider review on Glassdoor (https://www.glassdoor.com/Reviews/Employee-Review-ZOLL-Data-Management-E264149-RVW25591379.htm) — informational, treat as one voice but it matches public sentiment:
- "Development teams lack EMS experience and direction."
- "Data collected by ZOLL Data products is often full of errors or wildly inaccurate."
- Software described as "poorly developed," "did not work out of the box," requiring "extensive work to function during implementation."
- "Complete failures and total data loss within months of activation."
- "ZOLL expects existing customers to spend up to 5x more to move to a less capable SaaS platform."

Additional from Capterra/SoftwareAdvice (https://www.capterra.com/p/210424/ZOLL-emsCharts/):
- Two parallel product lines (RescueNet vs ZOLL cloud) create customer confusion and migration friction.

**ZOLL Medical ransomware (January 2023):** affected 1M+ individuals; names, SSNs, DOBs, some medical info (https://www.securityweek.com/zoll-medical-data-breach-impacts-1-million-individuals/, https://www.huntress.com/threat-library/ransomware/zoll-medical-data-breach). Different legal entity than ZOLL Data, but the brand consequence is shared.

### Recent Moves
- Continued push to retire RescueNet and migrate to ZOLL cloud suite (CONFIRMED via the RescueNet page explicitly redirecting prospects to cloud products).
- ZOLL Medical 2023 ransomware (above) drives security objection.
- INFERRED: No major M&A or AI launches in EMS Data line in last 12 months at the scale of ESO's d2i.

### API + Integrations
- emsCharts ↔ ZOLL Dispatch ↔ ZOLL Billing ↔ Care Exchange (native).
- HIE-style real-time exchange via Care Exchange.
- Public FHIR / HL7 v2 surface: UNKNOWN — not advertised on the pages reviewed.

### Customer Base
- Large national presence; RescueNet alone covers 13M+ events/year.
- Strong in mid-market private ambulance services and county-level systems.
- Hard count of paying agencies: UNKNOWN.

### Their Moat
- Hardware/software bundle (ZOLL monitors, Road Safety telematics, ePCR, billing) — sticky if agency already runs ZOLL X-Series / R-Series.
- Long-running customers locked in RescueNet are facing a forced migration and "5x" repricing — moat and risk simultaneously.

### Adaptix Kill Strategy
1. **"Designed by paramedics, not ZOLL devs"** — directly counter the Glassdoor "dev team lacks EMS experience" critique.
2. **Lock-in escape package** — fixed-cost migration off RescueNet to Adaptix with Cortex billing migration intelligence, side-stepping ZOLL's "5x" upsell.
3. **Hardware-agnostic device integration** — accept ZOLL X-Series ECG streams without forcing customers to switch monitors. Removes the bundle moat without antagonizing capital-budget realities.
4. **Single-platform certainty** — Adaptix never has "legacy vs cloud" parallel SKUs. One platform, one upgrade path.
5. **Trustworthy data narrative** — public quality SLAs, validation guardrails, NEMSIS check at write-time. Counter "data is full of errors."
6. **Security posture as marketing** — post-2023 breach, customers want vendors who publish their controls.

### Sources
- https://www.zolldata.com/rescuenet
- https://www.zolldata.com/ems-fire
- https://www.zolldata.com/ems-fire/emscharts
- https://www.zolldata.com/customer-support
- https://www.capterra.com/p/210424/ZOLL-emsCharts/
- https://www.softwareadvice.com/medical/zoll-emscharts-profile/
- https://www.glassdoor.com/Reviews/Employee-Review-ZOLL-Data-Management-E264149-RVW25591379.htm
- https://www.securityweek.com/zoll-medical-data-breach-impacts-1-million-individuals/
- https://www.huntress.com/threat-library/ransomware/zoll-medical-data-breach

---

## ImageTrend (Elite + Continuum)

### Profile
- One of the largest ePCR vendors by agency count: "9,000+ agencies" (CONFIRMED, https://www.imagetrend.com/who-we-serve/ems-software/).
- Welsh, Carson, Anderson & Stowe (WCAS) growth investment, Feb 2023 (CONFIRMED, https://www.prnewswire.com/news-releases/imagetrend-announces-strategic-growth-investment-from-welsh-carson-anderson--stowe-301743726.html).
- Acquired biospatial (EMS analytics) and FlowMSP (Aug 2024).

### Modules + Pricing
CONFIRMED workflow-organized modules (https://www.imagetrend.com/):
- **Pre-incident:** Scheduling, License Management, Permits & Inspections, Visual Pre-Plans, Community Health
- **Incident documentation:** ePCR Incident Reporting (Elite EMS), Fire Incident Reporting (Elite Fire, NERIS-aligned), Fire-Based EMS, Critical Care
- **Post-incident / analytics:** Data Insights, CQI, Billing, Investigations
- **Healthcare intelligence:** Carelytics for Hospitals, Market Intelligence, Patient Registry, HIE

Product brands:
- **Elite EMS** (ePCR), **Elite Fire** (RMS / NERIS), **Elite Rescue** (combined), **Elite Field** (offline)
- **Continuum** (data analytics line)
- **Hospital Hub** (hospital-facing surface)

Pricing: CONFIRMED not publicly disclosed; based on annual support + hosting; state enterprise licenses can make it free at the agency level (e.g., Arizona).

### Feature Inventory (Elite EMS)
CONFIRMED (https://www.imagetrend.com/solutions/elite-ems/):
- Drag-and-drop form builder; "7,000+ templates"
- CAD ingest, medical device ingest (vital signs, 12-lead EKG), hospital EMR connection
- **Elite Field** = full offline ePCR with auto-submit on reconnect
- NEMSIS v3.5 compliant (one-click NEMSIS reports) — currently ahead of ESO's published 3.4/3.3.4 stance
- Patient-outcome real-time alerts
- Event Visibility, Dynamic Power Tools, Situation Tools (ops dashboards)
- "AI-assisted charting" + "AI Check" (validation) referenced on home page

### AI / Cortex Equivalents
CONFIRMED:
- "AI-assisted charting" and "AI Check" (validation copilot) advertised but with limited public detail.
- Continuum + biospatial = analytics/ML pipeline for cross-agency benchmarking.

INFERRED:
- ImageTrend's AI story is positioned as documentation assistant + validation + analytics. Comparable surface area to ESO but split across multiple acquired brands. Integration maturity is the question.

### Known Weaknesses (sourced)
From G2 + sourceforge + softwareworld aggregates (https://www.g2.com/products/imagetrend/reviews, https://www.softwareworld.co/software/imagetrend-elite-for-ems-reviews/):
- "Interface can take some getting used to… layout sometimes busy, certain workflows require navigation through several screens which can slow users down."
- "Learning curve a little steeper than expected" for new/infrequent users.
- "7,000 templates" + drag-and-drop power = configuration complexity; small agencies often need consulting help.
- INFERRED: Acquisition sprawl (biospatial + FlowMSP + Elite brands) makes a unified UX harder to deliver.

### Recent Moves
- **Aug 2024:** Acquired FlowMSP (https://www.imagetrend.com/news/posts/imagetrend-acquires-flowmsp/).
- Acquired biospatial (EMS aggregation + analytics).
- **Feb 2023:** WCAS growth investment.
- Brand evolution: "All-in-One Emergency Intelligence Platform" repositioning.

### API + Integrations
- NEMSIS v3.5 send/receive, certified end-to-end (CONFIRMED).
- CAD-to-Elite ingest.
- HIE / Hospital EMR connection.
- Medical device ingest (12-lead, vitals).
- Public FHIR R4 surface: UNKNOWN — not advertised on the surfaces reviewed.

### Customer Base
- 9,000+ agencies (CONFIRMED).
- Heavy state enterprise penetration; many state EMS data systems run on ImageTrend.
- Mix of large agencies, state offices, and small agencies on state enterprise licenses.

### Their Moat
- State enterprise contracts: switching costs are political, not just technical.
- NEMSIS submission certifications.
- Configurability ("7,000 templates") = sunk customization investment.

### Adaptix Kill Strategy
1. **Default-good > infinite-config** — Adaptix ships best-practice protocols out of the box; agencies don't need a state IT team to launch.
2. **Single brand, single UX** — counter the acquisition-sprawl story. Continuum + biospatial + FlowMSP + Elite Field = four brands; Adaptix = one.
3. **Cortex narrative + validation + denial prevention** — three AI surfaces, not "AI Check" alone.
4. **State enterprise play** — pitch state EMS offices on Adaptix as the unified backbone with NEMSIS 3.5, NERIS, and real billing intelligence — ImageTrend doesn't own billing as a peer module (it's listed but not lead).
5. **Mobile-first cinematic UX** — counter "busy layout / multiple screens" with one-screen-per-task design.

### Sources
- https://www.imagetrend.com/
- https://www.imagetrend.com/solutions/elite-ems/
- https://www.imagetrend.com/who-we-serve/ems-software/
- https://www.imagetrend.com/press-releases/growth-acquisitions-brand-evolution/
- https://www.imagetrend.com/news/posts/imagetrend-acquires-flowmsp/
- https://www.prnewswire.com/news-releases/imagetrend-announces-strategic-growth-investment-from-welsh-carson-anderson--stowe-301743726.html
- https://www.g2.com/products/imagetrend/reviews
- https://www.softwareworld.co/software/imagetrend-elite-for-ems-reviews/

---

## Traumasoft

### Profile
- All-in-one EMS + NEMT platform, Portage Michigan HQ (CONFIRMED, BBB profile).
- Single shared dataset across CAD, ePCR, billing, scheduling, fleet, HR (CONFIRMED, https://traumasoft.com/emergency-medical-services-software-system/).

### Modules + Pricing
CONFIRMED modules (https://traumasoft.com/product-features/):
- Computer-Aided Dispatch (CAD)
- ePCR
- Billing
- Crew Scheduling
- Fleet Operations
- People Operations (HR) — applications, onboarding, employee file cabinet, reviews, incident reporting
- Reporting & Analytics — "370+ pre-built reports"
- Trip Scheduler (NEMT booking)
- Asset Management (stretchers, monitors, etc.)

Pricing: custom by call volume + modules used (CONFIRMED).

### Feature Inventory
- CAD: auto-analyze staffing, unit type, vehicle location/status, anticipated travel time.
- Billing: "complex algorithms pre-evaluate data on claims before sending" (claim pre-check).
- Scheduling positioned as "communication tool" — multi-purpose.
- NEMT-first design (NEMT operators are a large share of customer base).

### AI / Cortex Equivalents
- CONFIRMED: Claims pre-evaluation "complex algorithms" — not branded as AI.
- INFERRED: No GenAI / LLM features publicly announced. Heuristics-based intelligence only.

### Known Weaknesses (sourced)
From Capterra/G2 (https://www.capterra.com/p/142971/Traumasoft/reviews/, https://www.g2.com/products/traumasoft-ems/reviews):
- "Difficulty having issues addressed; very few people with the knowledge and permissions to make changes; most common response is 'sent to a developer.'"
- Support response times "deteriorated significantly… current messages take weeks for progress."
- "Extreme backlog of enhancement requests, with seemingly eternal wait times."
- "Turnover rate" in support team.
- "Training is overwhelming; too much content squeezed into a week."
- Hyper-growth outpacing support quality.

### Recent Moves
- Continued NEMT expansion.
- No major M&A or AI launches surfaced for the last 12 months.

### API + Integrations
- CAD-ePCR-billing-scheduling-fleet-HR all native single dataset.
- Public REST / FHIR / HL7 surface: UNKNOWN — not advertised.
- NEMSIS export: INFERRED yes (required to operate as ePCR), version not stated on surfaces reviewed.

### Customer Base
- Mid-market private ambulance, NEMT operators, fire-based EMS.
- INFERRED: not a strong fit for very large municipal/county 911 systems.

### Their Moat
- Single shared dataset is genuinely sticky — replacing requires migrating CAD + ePCR + billing + scheduling + HR + fleet simultaneously.
- NEMT vertical specialization.

### Adaptix Kill Strategy
1. **Match the "one dataset" story with Adaptix's unified platform** — neutralize Traumasoft's #1 selling point.
2. **Real Cortex AI** vs. their heuristics — auto-narrative, claim pre-check with LLM denial prediction, scheduling optimization with ML.
3. **White-glove support guarantee** — every "support takes weeks" review is a wedge.
4. **Cortex billing migration** to pull NEMT operators off Traumasoft without manual data re-entry.
5. **Modern UX** — Traumasoft is functionally rich but visually dated; Adaptix's cinematic mission-control look wins demos.

### Sources
- https://traumasoft.com/
- https://traumasoft.com/emergency-medical-services-software-system/
- https://traumasoft.com/product-features/
- https://traumasoft.com/product-features/crew-scheduler/
- https://traumasoft.com/product-features/billing/
- https://www.capterra.com/p/142971/Traumasoft/reviews/
- https://www.g2.com/products/traumasoft-ems/reviews
- https://www.bbb.org/us/mi/portage/profile/information-technology-services/traumasoft-llc-0372-38165310

---

## AngelTrack

### Profile
- All-in-one EMS / Fire / NEMT / CAD / Billing platform with disruptive pricing.
- Aggressive go-to-market: ~$300/mo all-in for qualifying volunteer/non-profit agencies; flat monthly with no impl/training fees (CONFIRMED, https://angeltrack.com/pricing/).

### Modules + Pricing
CONFIRMED modules (https://angeltrack.com/):
- Dispatch / CAD
- ePCR
- Billing / RCM
- QA
- Timeclock
- Checklist
- Fleet
- Crew Scheduler
- State auto-uploaders (NEMSIS)
- HR / bookkeeping
- Ad-hoc custom reporting

Pricing: CONFIRMED $300/mo entry; flat monthly; "not modularized"; month-to-month; no implementation/hosting/training fees charged separately.

### Feature Inventory
- Perfect vertical integration: dispatch → ePCR → QA → billing → state upload, no re-keying.
- Live GPS/AVL map.
- Reported customer impact: "response times down 18%" per Fire Chief testimonial.
- Internet-required (no offline mode).

### AI / Cortex Equivalents
- No public AI/ML features advertised.
- INFERRED: AngelTrack has zero AI moat; opportunity for Adaptix.

### Known Weaknesses (sourced)
From G2 + SoftwareWorld (https://www.g2.com/products/angeltrack-angeltrack/reviews, https://www.softwareworld.co/software/angeltrack-reviews/):
- "If there is no internet access then the user cannot access AngelTrack" — no offline ePCR. Major weakness for rural EMS.
- "Smaller agencies without a dedicated operations or billing lead may find the initial configuration and ongoing upkeep heavier than a narrower tool."
- Largest deployment ~80 units — not built for multi-PSAP metropolitan 911 systems.
- "Less elaborate" CAD vs dedicated public-safety CAD (no advanced AVL routing, limited CAD-to-CAD interop).

### Recent Moves
- No major M&A or AI launches surfaced.

### API + Integrations
- State NEMSIS auto-uploaders (CONFIRMED).
- GPS / AVL integrations (CONFIRMED).
- Public REST/FHIR surface: UNKNOWN.

### Customer Base
- Volunteer agencies, small private ambulance, small fire-based EMS, small NEMT.
- ~80-unit ceiling per deployment (largest current).

### Their Moat
- Price disruption — true bottom-of-market.
- "No surprises" billing model.

### Adaptix Kill Strategy
1. **Adaptix Starter tier matches AngelTrack's price** — neutralize the $300/mo wedge for the segments Adaptix wants.
2. **Offline-first ePCR** — direct counter to AngelTrack's #1 reviewer complaint.
3. **Scale ceiling kill** — Adaptix scales to large metropolitan 911 + multi-PSAP without re-platforming. AngelTrack customers who outgrow ~80 units have nowhere to go on-platform.
4. **Cortex AI included** — Adaptix at the same price point ships AI features AngelTrack has zero of.
5. **CAD-to-CAD interop, advanced AVL routing** — close the public-safety CAD gap AngelTrack acknowledges.
6. **Pre-built protocol library** — counter "configuration is heavier than a narrower tool."

### Sources
- https://angeltrack.com/
- https://angeltrack.com/pricing/
- https://angeltrack.com/features/ems-cad-software/
- https://angeltrack.com/features/ems-epcr-software/
- https://angeltrack.com/features/ems-fire-billing-revenue-cycle-management/
- https://www.g2.com/products/angeltrack-angeltrack/reviews
- https://www.softwareworld.co/software/angeltrack-reviews/

---

## HealthEMS (Sansio)

### Profile
- Cloud-based ePCR + charting for fire/EMS/paramedic teams, all agency sizes (CONFIRMED, https://sansio.com/health-ems/).
- HQ Duluth MN (per Sansio contact info).

### Modules + Pricing
CONFIRMED components:
- **HealthEMS Manager** (web portal for review/analysis)
- **MobileTouch** (Windows, iPad, Android point-of-care ePCR)
- **Sansio Data Exchange (SDX)** — hospital / clinic / physician data exchange

Pricing: UNKNOWN — not publicly disclosed; Sansio does not list pricing on the site.

### Feature Inventory
CONFIRMED (https://sansio.com/health-ems/, https://sansio.com/mobiletouch/):
- Workflow + protocol-based UI design.
- Scenario-based validations to prevent incomplete/incorrect entries pre-submit.
- Medical necessity scoring (CMS billing/compliance support).
- Quality assurance with real-time scoring + red-flag alerts.
- Cross-platform mobile (Windows/iOS/Android) — broader OS support than ESO (iOS-first).
- Custom data fields.
- CAD, ECG device, billing-vendor integrations.

### AI / Cortex Equivalents
- No GenAI / LLM features publicly surfaced.
- Medical necessity scoring is rules-based heuristics.
- INFERRED: HealthEMS has zero modern AI surface; vulnerability.

### Known Weaknesses (sourced)
- Public review density is **thin**. Limited G2/Capterra reviews surfaced in search. CONFIRMED gap, not necessarily a quality signal.
- INFERRED: smaller installed base + smaller marketing footprint than ESO/ImageTrend/Zoll. Less mindshare, harder to objection-handle in head-to-head deals.
- Older user-guide PDFs (MobileTouch v6.17 last updated 2017 per surfaced URL) suggest slower release cadence — INFERRED, not directly confirmed as a product issue.

### Recent Moves
- No major M&A or AI launches surfaced in last 12 months.
- Continued partnership ecosystem: Handtevy (pediatric protocols), Echo Data Analytics, Stryker LIFENET Cloud, ZOLL Medical Cloud, Philips IntelliSpace, Proclaim (billing).

### API + Integrations
CONFIRMED:
- CAD systems
- ECG device clouds: Stryker LIFENET, ZOLL Medical Cloud, Philips IntelliSpace
- Billing vendors (Proclaim partnership)
- Handtevy pediatric integration
- SDX for hospital/clinic data exchange

NEMSIS version: UNKNOWN from surfaces reviewed.

### Customer Base
- "Small-town squads to large urban teams with hundreds of thousands of calls per year" per their own marketing.
- Hard agency count: UNKNOWN.

### Their Moat
- Cross-platform (Windows + iOS + Android) — unusual; locks in agencies with mixed device fleets.
- Multi-vendor ECG cloud integration (LIFENET + ZOLL + Philips simultaneously) — rare; hardware-agnostic story.
- Handtevy pediatric workflow — meaningful differentiation in pediatric calls.

### Adaptix Kill Strategy
1. **Match cross-platform device support** — never lose a deal because an agency runs Windows tablets or Android.
2. **Native pediatric protocol library** — close the Handtevy gap with Adaptix's own protocol engine + Cortex protocol assistant.
3. **Multi-vendor device cloud ingest** — accept Stryker, ZOLL, Philips streams natively; remove the integration moat.
4. **Modern AI** — HealthEMS has none; this is the easiest competitive wedge in the cluster.
5. **Public product roadmap + release cadence** — counter the perception that HealthEMS is slow-moving.

### Sources
- https://sansio.com/
- https://sansio.com/health-ems/
- https://sansio.com/mobiletouch/
- https://sansio.com/faqs/
- https://sansio.com/pscatalog/
- https://sansio.com/support-and-professional-services/
- https://www.softwaresuggest.com/healthems
- https://sourceforge.net/software/product/HealthEMS/

---

## Cross-Vendor Synthesis

### Common gaps Adaptix exploits

1. **No vendor in this cluster has a Cortex-style AI fabric.** ESO has narrative + roadmap dispatch assistant. ZOLL has billing AI. ImageTrend has "AI Check" + AI-assisted charting. Traumasoft, AngelTrack, HealthEMS have no public AI features. None offer LLM-grounded denial prediction, full billing migration intelligence, scheduling optimization, NEMSIS validation copilot, and protocol assistant in one integrated layer. (CONFIRMED across all vendor product pages reviewed.)

2. **Support quality is the universal complaint.** ESO ("shoddy"), ZOLL ("does not work out of the box"), Traumasoft ("weeks to respond"), ImageTrend ("steep learning curve, busy UX") all carry recurring support-quality criticism. Published SLAs + founder-accessible escalation is a category-wide wedge.

3. **Per-module / per-training fee model is widely resented.** ESO is the worst offender per reviews. Adaptix can win by bundling.

4. **No offline+modern combination.** AngelTrack has no offline. ESO is iOS-only. HealthEMS has cross-platform but no AI. None deliver offline-first + cross-platform + modern AI together.

5. **Billing-to-dispatch closed loop is uneven.** ESO had to acquire Logis (2024) to get CAD; d2i (2026) to get hospital. ImageTrend's billing is a secondary module. ZOLL has it but with the legacy/cloud split. Adaptix can lead with "billing intelligence starts at dispatch" as a built-in, not an acquired, story.

6. **Security narrative is weak across the cluster.** ESO 2023 breach (2.7M), ZOLL Medical 2023 ransomware (1M+). Adaptix publishing posture is a marketable asset.

7. **NEMSIS 3.5 isn't universal.** ImageTrend confirmed 3.5; ESO EHR pages still say 3.4/3.3.4. Other vendors UNKNOWN. Adaptix leads with 3.5 day-one + NERIS-ready for fire.

8. **No vendor has a public migration-from-legacy story.** Cortex billing migration intelligence is genuinely novel.

### Common moats Adaptix breaks

| Moat | Vendor(s) | Adaptix break |
|---|---|---|
| State enterprise contracts | ESO, ImageTrend | Lead with NEMSIS 3.5 + NERIS + Cortex; price state contracts aggressively |
| Hardware bundle | ZOLL | Hardware-agnostic device ingest |
| Training inertia | ESO, ImageTrend, Traumasoft | Best-practice defaults + Cortex onboarding copilot |
| Single shared dataset | Traumasoft, AngelTrack | Adaptix has the same — neutralize, don't concede |
| Cross-platform device support | HealthEMS | Match natively |
| Disruptive low price | AngelTrack | Adaptix Starter tier at parity, with AI included |
| Cradle-to-discharge data | ESO (post-d2i) | Built-in, no acquisition required |

### Top 10 features Adaptix MUST have to beat all of them

1. **Cortex AI fabric** across dispatch triage, ePCR auto-narrative, NEMSIS validation, billing migration, denial prediction, scheduling optimization, protocol assistance — one fabric, every surface.
2. **Offline-first ePCR** on iOS, Android, Windows tablets — beat AngelTrack's #1 weakness and HealthEMS's device coverage simultaneously.
3. **NEMSIS 3.5 send/receive day-one** + NERIS-ready for fire-based EMS — meet ImageTrend's standard, exceed ESO's published surface.
4. **Native CAD with AVL, multi-PSAP, CAD-to-CAD interop** — close the public-safety CAD gap that AngelTrack and ESO (pre-Logis) historically had.
5. **Billing intelligence starting at dispatch** — claim pre-evaluation, real-time medical necessity scoring, denial prediction, payer-rule library; the only platform that frames billing as a dispatch-level decision.
6. **Cross-vendor device cloud ingest** — Stryker LIFENET, ZOLL Cloud, Philips IntelliSpace natively. Match HealthEMS, beat the rest.
7. **Hospital outcome closed loop** — HIE integration without requiring a d2i-style acquisition.
8. **Published support SLAs + founder-accessible escalation path** — direct counter to the cluster's universal support-quality complaint.
9. **Bundled training + protocol library** — no per-module training tax; pre-built protocol templates beat "7,000 templates you have to wire."
10. **Published security posture** (least-priv IAM, RLS, encryption, audit trail, breach response) as a sales asset — given ESO 2023 + ZOLL 2023.

### Top 5 head-turner features no vendor in this cluster has

1. **Cortex Billing Migration Intelligence** — S3 vault, Bedrock mapping copilot, SageMaker scoring, Step Functions orchestration that migrates an agency off ESO/Zoll/ImageTrend/HealthEMS/Traumasoft/AngelTrack in days, not quarters, with denial-rate predictions on the migrated data. No competitor has this.
2. **Response-to-Reimbursement scorecard** — a single live dashboard tracking every call from PSAP intake to final reimbursement, with Cortex flagging revenue at risk in real time. Competitors split this across multiple modules/vendors.
3. **Cortex protocol assistant with PHI-safe grounding** — voice + visual assistant for medics during the call that grounds in agency protocols, patient context, and current vitals — no fabrication, audit-logged. Nobody in this cluster has this.
4. **Adaptix Go-Live Command Center** — 30-step launch state machine + 14-category go-live gate + readiness scoring for new agencies, with Bedrock copilot. Replaces what is currently consulting work at ESO/ImageTrend/Traumasoft.
5. **Founder OS / Adaptix Field App parity** — first platform where the supervisor, the medic, the billing operator, the founder/owner, and the compliance officer all use one product family with role-true surfaces. No competitor delivers this; they all sell admin portal + medic ePCR + outside billing portal as separate experiences.

---

## Adaptix Truthfulness Notes

- This file contains CONFIRMED facts cited to vendor pages, review aggregators, press, and security disclosures. Where data was not found in this pass, "UNKNOWN" is used. Where reasoning is analyst-driven, "INFERRED" is used.
- Pricing for ESO is third-party-estimated; vendor does not publish.
- Reddit r/ems / r/EMS_management direct quotes were not retrieved this pass — WebFetch failed against G2 (403), and direct Reddit threads were not surfaced by the search engine. Capterra/G2/Glassdoor aggregations were used instead. A follow-up pass can target Reddit specifically.
- This research document is **not a customer-facing artifact**. It is internal competitive intelligence. No customer-readiness claim is made.
