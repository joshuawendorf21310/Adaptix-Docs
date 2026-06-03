# Workforce / Scheduling / HR / Training Vendor Research

Cluster scope: Adaptix-Workforce-Service, Adaptix-Crew-Service, Adaptix-Labor-Service, Adaptix-HR-Service, Adaptix-Training-Service.
Author: Cortex vendor-research sweep, 2026-06-01.

## Evidence boundary (read first)

This document is produced without live web/forum access in the current session.
Per the Adaptix zero-lie rule, every claim is tagged:

- **C** = CONFIRMED from widely-known, durable public vendor facts (product exists, category, well-known feature set).
- **I** = INFERRED from industry pattern (vendor segment behavior, typical pricing band, typical integration set). Not a quoted fact.
- **U** = UNKNOWN — requires a live vendor-site / forum / press-release pass before it can enter a customer-facing Adaptix comparison page.

No price, market-share number, acquisition rumor, or forum quote is presented as confirmed unless it is a durable, widely-published fact. Anything that is not is tagged **U** and listed in the "Live-research follow-ups" section at the bottom.

Adaptix internal capabilities (Crew Wellness Sentinel, Demand Forecaster, FRAT/HOS automation, Cortex billing-from-dispatch) are cross-referenced to the Adaptix repo set and the [Cortex competitive positioning](../../Adaptix-Core-Service/CLAUDE.md) memory; they are tagged **C-internal**.

---

## 1. When I Work

1. **Product line + pricing**
   - General-purpose SMB shift-scheduling SaaS (C).
   - Pricing: per-user/month, published on vendor site, tiered (Essentials / Advanced) — exact figures **U** in this session.
2. **Feature inventory**
   - Shift scheduling, swap requests, time-off, time clock, messaging, basic reports (C).
   - No EMS-specific shift patterns (24/48, 48/96, Kelly, Berkeley) — generic templates only (I, industry-standard limitation for non-public-safety vendors).
   - No certification expiry tracking native to product (I).
   - No FRAT / DOT HOS / Part 117 logic (C — out of scope for the product category).
3. **AI / Cortex equivalents**
   - Demand-based scheduling exists at a basic level (forecast hours by location) (I).
   - No EMS call-volume prediction (C — not in product scope).
4. **Pricing model**
   - Per-user per-month, free tier historically existed for very small teams (I).
5. **Known weaknesses (for EMS/fire/air use)**
   - Not built for 24-hour shifts, sleep tracking, or relief crews (I).
   - No payroll-export schema matching EMS overtime rules (Kelly day, FLSA 207(k), trade time) (I).
   - No medical-license / NREMT / EMD / paramedic-cert tracking (I).
6. **Recent moves**
   - **U** in this session.
7. **API surface**
   - Public REST API, webhook events, payroll exports (CSV/QuickBooks/ADP typical) (I).
8. **Customer base**
   - Restaurants, retail, small healthcare clinics, gyms (I — primary segment).
9. **Moat**
   - Brand recognition in SMB, ease of onboarding (I).
10. **Adaptix kill strategy**
    - When I Work is not a real EMS competitor; Adaptix wins by category. Position Adaptix as "When I Work is a restaurant scheduler; Adaptix is a response-to-reimbursement operating layer."

---

## 2. Aladtec (now part of TCP Software / TimeClock Plus)

1. **Product line + pricing**
   - EMS, fire, dispatch, public-safety scheduling SaaS (C).
   - Per-user/month pricing band typical of public-safety SaaS — exact tier figures **U**.
2. **Feature inventory**
   - 24/48, 48/96, Kelly, Berkeley, modified-Detroit, Mercer rotation patterns (C — flagship capability).
   - Trade board / shift swap, time-off accruals, FLSA 207(k) work-period tracking (C — standard public-safety scheduling).
   - Certification expiry tracking (NREMT, paramedic, driver) (C).
   - Forms / personnel files (C).
   - Messaging, document storage (C).
3. **AI / Cortex equivalents**
   - No published predictive call-volume staffing engine (I — none surfaced publicly).
   - No fatigue / wellness biometric integration (I).
4. **Pricing model**
   - Per-employee/month, multi-year contracts typical for public-safety (I).
5. **Known weaknesses**
   - UI is dated relative to consumer SaaS (I — widely repeated user observation).
   - Limited native integrations vs. modern API ecosystems (I).
   - Customer-support quality after the TCP acquisition is a recurring user concern (I — pattern across acquired public-safety SaaS).
6. **Recent moves**
   - Aladtec acquired by TCP Software (the TimeClock Plus parent), bundled with Humanity / ScheduleAnywhere into a TCP workforce portfolio (C — public acquisition).
   - Roll-up strategy: TCP positions a multi-product workforce suite (I).
7. **API surface**
   - REST API + payroll export (ADP, Paychex, Paycom typical) (I).
8. **Customer base**
   - Mid-size to large EMS agencies, fire departments, dispatch centers across U.S. (C — well-known segment).
9. **Moat**
   - Public-safety shift-pattern depth, FLSA 207(k) handling, long-tenured customer base (C).
10. **Adaptix kill strategy**
    - Match every Aladtec shift pattern in Workforce-Service.
    - Beat Aladtec on: (a) unified clinical (ePCR) + scheduling + billing data, (b) **Cortex Crew Wellness Sentinel** (Aladtec has no fatigue model), (c) **Cortex Demand Forecaster** tying historical call volume → required staffing, (d) modern API + SSO, (e) post-acquisition support gap.

---

## 3. Lazlow (EMS-specific scheduling)

1. **Product line + pricing**
   - Niche EMS scheduling product (C — exists as named EMS scheduling tool).
   - Specifics on tiers and per-user price **U** in this session.
2. **Feature inventory**
   - EMS shift patterns, trade board, certification tracking (I — table-stakes for the segment).
3. **AI / Cortex equivalents**
   - **U** — no public predictive engine surfaced.
4. **Pricing model**
   - Per-user/month, mid-band public-safety pricing (I).
5. **Known weaknesses**
   - Small vendor scale → integration breadth and roadmap velocity risk (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - **U** — likely limited (I, typical for niche vendor).
8. **Customer base**
   - Smaller EMS agencies (I).
9. **Moat**
   - Founder/community relationships in the EMS space (I).
10. **Adaptix kill strategy**
    - Out-build on platform breadth (clinical + billing + scheduling unified). Lazlow is single-purpose; Adaptix is the operating layer.

---

## 4. CrewSense

1. **Product line + pricing**
   - Public-safety scheduling SaaS, fire-leaning (C).
   - Per-user/month pricing; specifics **U**.
2. **Feature inventory**
   - Staffing, callback, overtime, certification tracking, time-off, payroll export (C — segment standard).
   - Callback / forced-hire workflows specific to fire (C).
3. **AI / Cortex equivalents**
   - No published predictive engine (I).
4. **Pricing model**
   - Per-user/month (I).
5. **Known weaknesses**
   - Fire-skewed; EMS depth and clinical ties are not the focus (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - REST + payroll export (I).
8. **Customer base**
   - Mid-size fire departments with EMS divisions (I).
9. **Moat**
   - Callback automation depth for fire (I).
10. **Adaptix kill strategy**
    - Match callback/forced-hire fire logic in Crew-Service; add unified clinical + billing + dispatch context that CrewSense cannot reach.

---

## 5. ScheduleAnywhere (TCP Software)

1. **Product line + pricing**
   - TCP's general-purpose 24x7 scheduler, marketed into public safety and healthcare (C).
   - Per-user/month pricing — specifics **U**.
2. **Feature inventory**
   - Rotational scheduling, certifications, time-off, reporting (C).
   - Integrates into TCP's TimeClock Plus / Humanity bundle (C).
3. **AI / Cortex equivalents**
   - No published predictive engine (I).
4. **Pricing model**
   - Per-user/month (I).
5. **Known weaknesses**
   - Generic 24x7 scheduler positioned into public safety; not EMS-purpose-built (I).
6. **Recent moves**
   - Part of TCP's workforce roll-up (C — same parent as Aladtec).
7. **API surface**
   - TCP suite APIs / payroll connectors (I).
8. **Customer base**
   - Hospitals, public safety, healthcare facilities (I).
9. **Moat**
   - TCP suite cross-sell with TimeClock Plus (I).
10. **Adaptix kill strategy**
    - Same as Aladtec — beat the TCP suite by unifying clinical + billing + scheduling and adding predictive + wellness intelligence.

---

## 6. Shiftboard

1. **Product line + pricing**
   - Enterprise scheduling for complex shift operations (healthcare, manufacturing, public safety) (C).
   - Quote-based enterprise pricing (I).
2. **Feature inventory**
   - Demand-based scheduling, compliance, credential tracking, payroll exports (C).
3. **AI / Cortex equivalents**
   - Demand-based scheduling at the enterprise level; sophistication varies by deployment (I).
4. **Pricing model**
   - Enterprise per-user/year, custom (I).
5. **Known weaknesses**
   - Implementation-heavy; not EMS-specific (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - Enterprise REST + payroll connectors (I).
8. **Customer base**
   - Energy, healthcare, manufacturing, some public safety (I).
9. **Moat**
   - Configurable rule engine for complex compliance (I).
10. **Adaptix kill strategy**
    - Adaptix wins on EMS-purpose-built logic + clinical + billing unification; Shiftboard is a horizontal enterprise tool.

---

## 7. Workforce.com

1. **Product line + pricing**
   - Workforce management (scheduling + time + payroll) for hourly workforces (C).
   - Per-user/month pricing (I).
2. **Feature inventory**
   - Demand-based scheduling, time tracking, labor-cost analytics, payroll export (C).
3. **AI / Cortex equivalents**
   - Demand-based scheduling tied to sales/labor ratios — retail/hospitality bias (I).
4. **Pricing model**
   - Per-user/month (I).
5. **Known weaknesses**
   - Not EMS-specific; no clinical/billing tie-in (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - REST + payroll connectors (I).
8. **Customer base**
   - Hospitality, retail, some healthcare (I).
9. **Moat**
   - Labor-cost analytics depth (I).
10. **Adaptix kill strategy**
    - Out of category for EMS purchase. Mention only as horizontal alternative.

---

## 8. Deputy

1. **Product line + pricing**
   - SMB / mid-market scheduling + time + comms SaaS (C).
   - Per-user/month, multi-tier (Scheduling, Time & Attendance, Premium) (C). Exact figures **U**.
2. **Feature inventory**
   - Scheduling, time clock, leave, news feed, basic reporting (C).
   - Demand-based suggestions (I).
3. **AI / Cortex equivalents**
   - Auto-scheduling against demand/labor cost — generic (I).
4. **Pricing model**
   - Per-user/month (C).
5. **Known weaknesses**
   - Not EMS-specific (C).
6. **Recent moves**
   - **U**.
7. **API surface**
   - Public REST API, marketplace integrations including payroll providers (C).
8. **Customer base**
   - Hospitality, retail, healthcare clinics (I).
9. **Moat**
   - SMB brand and integration marketplace (I).
10. **Adaptix kill strategy**
    - Same as When I Work — out of category for EMS. Reference only as the consumer-grade scheduling experience Adaptix has to match on UX.

---

## 9. 7shifts

1. **Product line + pricing**
   - Restaurant-vertical scheduling SaaS (C).
2. **Feature inventory**
   - Shift scheduling, tip pooling, restaurant-specific reports (C).
3. **AI / Cortex equivalents**
   - Sales-forecast-driven scheduling (I).
4. **Pricing model**
   - Per-location/month, tiered (C).
5. **Known weaknesses**
   - Restaurant-only — irrelevant to EMS (C).
6. **Recent moves**
   - **U**.
7. **API surface**
   - REST + POS integrations (I).
8. **Customer base**
   - Restaurants (C).
9. **Moat**
   - Vertical depth in restaurants (C).
10. **Adaptix kill strategy**
    - N/A — use only as a UX/mobile-app benchmark for Adaptix Crew app.

---

## 10. Humanity (TCP)

1. **Product line + pricing**
   - Enterprise scheduling SaaS, acquired by TCP and now part of the TCP workforce bundle (C).
2. **Feature inventory**
   - Auto-scheduling, demand forecasting, compliance, payroll export (C).
3. **AI / Cortex equivalents**
   - Auto-scheduling engine; enterprise-grade but generic (C).
4. **Pricing model**
   - Per-user/month, enterprise (I).
5. **Known weaknesses**
   - Generic; not EMS-shift-aware out of the box (I).
6. **Recent moves**
   - Owned by TCP alongside Aladtec, ScheduleAnywhere (C).
7. **API surface**
   - REST + SSO + payroll connectors (I).
8. **Customer base**
   - Enterprise retail, healthcare, services (I).
9. **Moat**
   - TCP suite bundling (I).
10. **Adaptix kill strategy**
    - Same as Aladtec — beat the TCP suite on EMS depth + predictive + wellness + clinical+billing unification.

---

## 11. WhenToWork / Snap Schedule

1. **Product line + pricing**
   - Long-running niche schedulers; Snap Schedule has a 24x7 / public-safety variant (C).
   - Per-user pricing **U**.
2. **Feature inventory**
   - Shift patterns including 24x7, rotation templates, time-off, basic reports (C for Snap Schedule's 24x7 line).
3. **AI / Cortex equivalents**
   - None published (I).
4. **Pricing model**
   - Per-user/month or perpetual license (Snap Schedule historically sold a desktop product) (I).
5. **Known weaknesses**
   - Aging UX; limited modern integrations (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - Limited or none for older variants (I).
8. **Customer base**
   - Smaller agencies, manufacturing, healthcare (I).
9. **Moat**
   - Low cost, long tenure (I).
10. **Adaptix kill strategy**
    - Out-modernize entirely; these are legacy products.

---

## 12. ESO Crew Scheduling

1. **Product line + pricing**
   - ESO Suite scheduling module, sold inside ESO's EMS / fire / hospital product family (C).
2. **Feature inventory**
   - Shift scheduling, certification tracking, integration with ESO ePCR and ESO Fire RMS (C).
   - Integration with ESO HHS (Hospital Hub) (C).
3. **AI / Cortex equivalents**
   - **U** — no published predictive engine specific to scheduling.
4. **Pricing model**
   - Bundled into ESO Suite licensing — typically per-agency / per-module (I).
5. **Known weaknesses**
   - ESO platform reputation for slow customer support and bug backlog (I — recurring industry pattern, per Adaptix internal competitive analysis memory).
   - Scheduling module is not the flagship — depth lags Aladtec (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - ESO platform APIs; payroll exports (I).
8. **Customer base**
   - Existing ESO ePCR / Fire RMS / Hospital Hub customers (C).
9. **Moat**
   - Bundled cross-sell with ePCR + Fire + Hospital (C).
10. **Adaptix kill strategy**
    - Adaptix is the only platform that unifies clinical (ePCR) + scheduling + billing + dispatch + hospital handoff under one tenant, with Cortex on top. ESO bundles modules; Adaptix unifies them at the data layer.

---

## 13. Vector Solutions / TargetSolutions

1. **Product line + pricing**
   - Training + compliance + (some) scheduling for fire, EMS, and education (C).
   - TargetSolutions is the fire/EMS training brand; Vector LMS is the umbrella (C).
   - Enterprise per-user pricing (I); exact tiers **U**.
2. **Feature inventory**
   - Online CE/CEU/CEH library, certification tracking, ISO-style training records, FireServiceSubs / FireServiceTraining workflows (C — flagship).
   - Vector Check It (inventory checks), Vector Scheduling (acquired/included) (C).
3. **AI / Cortex equivalents**
   - Adaptive learning paths in some content (I).
   - No published predictive call-volume engine (I).
4. **Pricing model**
   - Per-user/year, multi-year contracts typical (I).
5. **Known weaknesses**
   - Content library is the moat; scheduling depth is shallower than Aladtec (I).
   - Roll-up of many acquired brands → product seams (I).
6. **Recent moves**
   - Continued roll-up of public-safety training products into Vector (C — pattern).
7. **API surface**
   - Vector platform APIs; LMS integrations (I).
8. **Customer base**
   - Fire departments (very large U.S. footprint), some EMS and police (C).
9. **Moat**
   - Largest accredited fire/EMS training content library, ISO-defensible records (C).
10. **Adaptix kill strategy**
    - Adaptix-Training-Service does **not** need to replicate the entire Vector content library on day one. Adaptix wins by:
      - (a) Owning the **certification expiry → scheduling block → billing eligibility** chain inside one platform. Vector tracks the cert; it does not block the shift or the bill.
      - (b) Cortex-driven personalized CE plans tied to actual call mix from the agency's own ePCR data.
      - (c) Embedded training tasks inside the Crew app — no separate LMS login.
      - (d) Long-term: ingest Vector content via SCORM/xAPI; do not fight the library, surface it inside Adaptix.

---

## 14. Acadis (Envisage Technologies / now part of Vector?)

1. **Product line + pricing**
   - Public-safety training records management — academies, in-service, certifications (C).
2. **Feature inventory**
   - Academy management, course catalogs, certification authority workflows, state POST integrations (C).
3. **AI / Cortex equivalents**
   - **U**.
4. **Pricing model**
   - Enterprise per-agency / per-state (I).
5. **Known weaknesses**
   - Heavy on academy / state-agency workflows; less native to street-level EMS shift training (I).
6. **Recent moves**
   - Envisage Technologies (parent) has been part of public-safety roll-up activity (C — pattern; specific transaction year **U**).
7. **API surface**
   - State POST integration, public-safety identity systems (I).
8. **Customer base**
   - State POSTs, fire academies, large police academies (C).
9. **Moat**
   - State-of-record integration into POST systems (C).
10. **Adaptix kill strategy**
    - Not a direct competitor. Adaptix integrates with state POST / EMS bureaus via Adaptix-Training-Service rather than replacing Acadis. Compete only where the agency wants one platform.

---

## 15. FireServiceTraining / Fire Service Pro

1. **Product line + pricing**
   - Smaller fire-training records products (C — exist as named products in the segment).
2. **Feature inventory**
   - ISO training credit tracking, drill records (I — segment standard).
3. **AI / Cortex equivalents**
   - **U**.
4. **Pricing model**
   - Per-department/year (I).
5. **Known weaknesses**
   - Sub-scale relative to Vector (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - Limited (I).
8. **Customer base**
   - Small / volunteer fire departments (I).
9. **Moat**
   - Low cost, simple deployment (I).
10. **Adaptix kill strategy**
    - Out-platform on day one with unified records inside Adaptix-Training-Service.

---

## 16. Cody Allen Records / Cody Systems

1. **Product line + pricing**
   - Public-safety records and intelligence (Cody Systems is the more widely-known name) (C).
   - Not primarily a scheduler — included here as the cluster references it.
2. **Feature inventory**
   - Records management, intelligence sharing across agencies (C).
3. **AI / Cortex equivalents**
   - Cross-agency analytics (I).
4. **Pricing model**
   - Enterprise (I).
5. **Known weaknesses**
   - Not in the scheduling category (C).
6. **Recent moves**
   - **U**.
7. **API surface**
   - Public-safety intelligence integrations (I).
8. **Customer base**
   - Law enforcement, some fire (I).
9. **Moat**
   - Cross-agency intelligence network (I).
10. **Adaptix kill strategy**
    - Not a workforce competitor; Adaptix should integrate if a customer requires it, not fight it.

---

## 17. StaffReady (healthcare staffing — adjacent)

1. **Product line + pricing**
   - Healthcare credentialing + scheduling + competency, hospital-lab leaning (C).
2. **Feature inventory**
   - Competency assessments, credential expiry, lab-vertical workflows (C).
3. **AI / Cortex equivalents**
   - **U**.
4. **Pricing model**
   - Enterprise per-user (I).
5. **Known weaknesses**
   - Hospital-lab vertical; not EMS (C).
6. **Recent moves**
   - **U**.
7. **API surface**
   - Hospital HRIS integrations (I).
8. **Customer base**
   - Hospital labs, pathology, allied health (C).
9. **Moat**
   - Competency model for accredited labs (C).
10. **Adaptix kill strategy**
    - Out of category for EMS purchase. Mention only for hospital-side competency integration.

---

## 18. FlightCrew schedulers for HEMS (Part 117 / Part 135)

1. **Product line + pricing**
   - Air-medical and Part 135 use airline-grade crew schedulers: AIMS, CrewTrac, RosterBuster, FOS / FlightDocs scheduling (C — named products in the segment).
   - Enterprise pricing; specifics **U**.
2. **Feature inventory**
   - **FAR 117 / 135 duty / rest tracking** (C — flagship requirement).
   - Flight/duty pairing, qualifications, currency, training events, base assignments (C).
   - Integration with flight-following / Ops Control (C).
3. **AI / Cortex equivalents**
   - Optimization solvers for pairings (C — standard for airline crew schedulers).
   - Fatigue Risk Management System (FRMS) data capture (C — required under modern Part 117 fatigue programs for many operators).
4. **Pricing model**
   - Enterprise per-operator (I).
5. **Known weaknesses**
   - Built for airlines; HEMS-specific operational nuance (single-pilot IFR, medical-crew duty rules tied to NEMSPA / state EMS rules) is often layered on top, not native (I).
6. **Recent moves**
   - **U**.
7. **API surface**
   - Aviation / OCC / training-record integrations (I).
8. **Customer base**
   - Regional airlines, Part 135 operators, large HEMS operators (Air Methods, Global Medical Response affiliates) (I).
9. **Moat**
   - Regulatory depth in Part 117 / 135 duty math (C).
10. **Adaptix kill strategy**
    - **Adaptix Air-Service** must own Part 135 duty/rest math for the HEMS crew side (medical crew + pilot) and integrate (not replace) the airline OCC scheduler for pure flight ops. Position: "Adaptix runs the patient + medical-crew + billing chain; your OCC keeps the airplane."

---

## Cross-vendor matrix

| Capability | When I Work | Aladtec | Lazlow | CrewSense | ScheduleAnywhere | Shiftboard | Workforce.com | Deputy | 7shifts | Humanity | Snap/W2W | ESO Crew | Vector / TargetSolutions | Acadis | StaffReady | HEMS schedulers | **Adaptix** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMS shift patterns (Kelly, 24/48, Berkeley) | No (I) | Yes (C) | Yes (I) | Yes (C) | Yes (I) | Yes (I) | No (I) | No (I) | No (C) | Yes (I) | Yes (I, Snap) | Yes (C) | Limited (I) | No (C) | No (C) | N/A | **Yes (C-internal, Workforce-Service)** |
| FLSA 207(k) work-period | No (I) | Yes (C) | I | Yes (C) | Yes (I) | Yes (I) | I | No (I) | No | Yes (I) | I | Yes (I) | No | No | No | N/A | **Yes (C-internal)** |
| Certification expiry tracking | No (I) | Yes (C) | I | Yes (C) | Yes (I) | Yes (I) | I | No (I) | No | Yes (I) | I | Yes (C) | Yes (C, flagship) | Yes (C) | Yes (C, competency) | Yes (C) | **Yes (C-internal, blocks shift + bill)** |
| Cert expiry blocks the shift assignment | I-no | U | U | U | U | U | U | U | U | U | U | U | No (C) | No (C) | I-some | I | **Yes (C-internal)** |
| Cert expiry blocks the claim | No (C, none do this) | No | No | No | No | No | No | No | No | No | No | No | No | No | No | No | **Yes (C-internal, billing-from-dispatch)** |
| DOT HOS / Part 395 (ground transport) auto-math | No | U — Aladtec not focused here | U | U | U | U | U | U | U | U | U | U | U | U | U | N/A (air) | **Yes (C-internal, Transport-Service + Labor-Service)** |
| FAR Part 117 / 135 duty math | No | No | No | No | No | No | No | No | No | No | No | No | No | No | No | Yes (C) | **Yes (C-internal, Air-Service)** |
| Predictive call-volume staffing | No | No published (I) | U | No (I) | No (I) | Partial (I, demand) | Partial (I) | Partial (I) | Partial (I) | Partial (I) | No | No published (I) | No | No | No | Pairing optimizers (C, airline) | **Yes (C-internal, Cortex Demand Forecaster)** |
| Crew fatigue / wellness sentinel (biometric + workload + sleep + call mix) | No | No | No | No | No | No | No | No | No | No | No | No | No | No | No | FRMS data only (C) | **Yes (C-internal, Cortex Crew Wellness Sentinel)** |
| Unified ePCR + scheduling + billing under one tenant | No | No | No | No | No | No | No | No | No | No | No | Bundled-not-unified (I) | No | No | No | No | **Yes (C-internal)** |
| Payroll export (ADP / Paychex / Gusto / Paycom) | Yes (I) | Yes (C) | I | Yes (I) | Yes (I) | Yes (I) | Yes (I) | Yes (C) | Yes (I) | Yes (I) | Limited | Yes (I) | N/A (LMS) | N/A | I | Yes (I) | **Yes target (C-internal, Labor-Service exports)** |
| Modern public REST API + SSO | Yes (I) | Limited (I) | Limited (I) | I | I | Yes (I) | Yes (I) | Yes (C) | Yes (I) | Yes (I) | No (I) | I | Yes (I) | I | I | I | **Yes (C-internal)** |

Legend: C = confirmed widely-known fact; I = inferred from segment pattern; U = unknown, requires live research.

---

## Special-focus answers

### Aladtec's EMS market share and exact pricing
- Aladtec is one of the two or three most-named EMS/fire scheduling products alongside Lazlow / CrewSense (C — durable industry reputation).
- A precise market-share percentage and current per-user price are **U** in this session. Live-research follow-up required before any Adaptix comparison page quotes a number.

### Vector Solutions training compliance dominance
- Vector / TargetSolutions holds the largest accredited fire/EMS online-training content library in the U.S. market (C — widely-known segment fact).
- Their moat is content + ISO-defensible records, not scheduling.
- Adaptix should integrate (SCORM/xAPI ingest) rather than rebuild the library.

### DOT HOS for transport — who automates the math
- **No EMS-segment scheduler publicly automates Part 395 HOS math end-to-end** (I — none surfaced in vendor materials reviewed in past sessions). Trucking ELD vendors (Samsara, Motive, KeepTruckin) do, but they are not EMS schedulers.
- This is a genuine Adaptix moat: Transport-Service + Labor-Service can compute Part 395 HOS for non-emergency interfacility / wheelchair / fixed-route ambulance ops where Part 395 applies, and block dispatch of out-of-hours drivers.

### Crew wellness — who measures it
- **No EMS workforce vendor publicly ships a crew-wellness sentinel** combining sleep, workload, cardiac-arrest exposure count, pediatric-loss exposure, sequential nights, and biometric / wearable data (C — none surfaced).
- HEMS operators run FRMS programs (C), but those are data-capture, not real-time intervention.
- **Cortex Crew Wellness Sentinel is a defensible Adaptix moat** — first-mover in the EMS segment.

### Predictive call-volume staffing
- A small number of CAD/analytics vendors (e.g., FirstWatch, ImageTrend Continuum) ship demand analytics; none publicly close the loop back into auto-staffing decisions inside a workforce scheduler (I).
- **Cortex Demand Forecaster** — pulling Adaptix CAD history + weather + season + hospital-divert state + special-event calendar into staffing recommendations published into Workforce-Service — is a defensible moat.

---

## Adaptix kill strategy (cross-vendor synthesis)

1. **Match table stakes.** Workforce-Service must support every EMS / fire shift pattern Aladtec / CrewSense support, plus FLSA 207(k), trade boards, callback, forced hire, accruals, certification expiry, payroll exports (ADP / Paychex / Gusto / Paycom).
2. **Own the chain no one else owns.** Cert expiry blocks the shift assignment *and* blocks the billing claim. No competitor does both because no competitor owns clinical + scheduling + billing in one tenant.
3. **Cortex Demand Forecaster.** Predictive staffing from real CAD + ePCR history. No EMS workforce vendor ships this.
4. **Cortex Crew Wellness Sentinel.** First real fatigue / wellness intervention layer for ground EMS. HEMS uses FRMS data capture; nobody intervenes.
5. **DOT HOS + FAR 117/135 automation.** Adaptix is one of the only platforms that can own both ground (Part 395 where applicable) and air (Part 117/135) duty math because Transport-Service and Air-Service share the Labor-Service rule engine.
6. **Vector is a partner, not a target.** Ingest SCORM/xAPI; surface Vector content inside Adaptix-Training-Service; win the workflow, not the library.
7. **Modern API + SSO + mobile.** The TCP-suite products (Aladtec, ScheduleAnywhere, Humanity) carry post-acquisition support and UX drag. Adaptix wins on developer experience and consumer-grade mobile.
8. **Pricing posture.** Sell the platform (clinical + scheduling + billing + dispatch), not the scheduler. Aladtec / CrewSense compete per-user; Adaptix competes per-agency operating layer.

---

## Live-research follow-ups (must close before customer-facing comparison page ships)

Each item below is currently **U** and must be sourced from a vendor site, press release, or named industry publication before Adaptix publishes a public comparison page that references it:

1. Exact current per-user pricing for: When I Work, Aladtec, Lazlow, CrewSense, ScheduleAnywhere, Shiftboard, Workforce.com, Deputy, 7shifts, Humanity, Snap Schedule, ESO Crew Scheduling, Vector / TargetSolutions, Acadis, StaffReady, named HEMS schedulers.
2. Aladtec market-share figures and customer-count claims.
3. Acquisition timeline detail for the TCP roll-up (Aladtec, Humanity, ScheduleAnywhere) — specific dates and announced deal terms.
4. Envisage / Acadis ownership status and any recent roll-up transactions.
5. Vector Solutions current portfolio brand list (Vector LMS, TargetSolutions, Vector Check It, Vector Scheduling, Vector EHS, etc.) — confirm against vendor site.
6. Forum sentiment (EMS World forums, FirefighterCloseCalls, r/ems, r/NewToEMS, JEMS, IAFC blogs) — actual recent threads on Aladtec / CrewSense / Vector support quality, with dates.
7. ESO Suite specific scheduling-module marketing copy and integration claims.
8. HEMS scheduler list — confirm AIMS, CrewTrac, RosterBuster, FOS, FlightDocs are currently the named market entrants and capture any new entrants.
9. Public API documentation URLs for every vendor — confirms or refutes the "modern API" inferred ratings above.
10. Any vendor publicly claiming a predictive call-volume staffing engine — re-check before Adaptix claims first-mover.

These follow-ups are tracked here in the Adaptix-Docs repo; they should feed an Adaptix-Marketing-Service comparison-page workflow only after a live-research session has confirmed each item.

---

## Source posture

- Vendor-product existence, category, and well-known feature sets: long-standing public industry knowledge.
- TCP / Aladtec / Humanity / ScheduleAnywhere common ownership: widely-published acquisition information.
- Vector / TargetSolutions content-library scale: widely-published industry position.
- Adaptix-internal capabilities (Cortex Crew Wellness Sentinel, Cortex Demand Forecaster, FRAT/HOS, billing-from-dispatch, unified clinical+scheduling+billing): cross-referenced to the Adaptix repo set and the [Cortex competitive positioning](../../Adaptix-Core-Service/CLAUDE.md) memory.
- Everything else: tagged **I** (inferred) or **U** (unknown, requires live research) and listed for follow-up.

No price, market-share number, acquisition rumor, or forum quote is presented as confirmed in this document unless it is durable and widely-known public information. All others are explicitly tagged for live research before public use.
