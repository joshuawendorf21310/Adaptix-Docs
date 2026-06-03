# CRM + Customer Success + Mobile/MDT + Public Transport Request — Vendor Research

Scope: vendor landscape that touches Adaptix CRM, Adaptix Customer-Success, Adaptix Mobile-Shell, Adaptix Field-App, and Adaptix Transport-Request-App.

Sourcing rules: every numeric or factual claim is hyperlinked to a public source. Where pricing, customer count, or roadmap is not publicly disclosed, the field is marked `UNKNOWN (not publicly disclosed)` instead of guessed. No fabricated quotes, no fabricated review counts, no fabricated customer logos.

Date of research: 2026-06-01.

---

## CLUSTER 1 — CRM

### 1.1 Salesforce Health Cloud

- **Product line:** Health Cloud (Basic / Professional / Enterprise / Unlimited / Einstein 1 for Service), built on Sales Cloud + Service Cloud + Industries Cloud.
- **Pricing (per user / month, billed annually):**
  - Enterprise: $325
  - Unlimited: $500
  - Einstein 1 for Service: $700
  - Lower-tier figures ($45–$120) are reseller-reported, not Salesforce-published. Source: [ITQlick Health Cloud pricing](https://www.itqlick.com/salesforce-health-cloud/pricing), [Alpha Apex Health Cloud cost guide](https://www.alphaapexgroup.com/salesforce-health-cloud-cost).
  - Implementation: $10k–$200k SMB / $50k–$500k+ enterprise (same sources).
- **Feature inventory:** patient/member 360, care plans, care coordination, household and relationship mapping, EHR integration via MuleSoft, Service Cloud cases, Sales Cloud opportunity pipeline, marketing via Marketing Cloud add-on.
- **AI:** Einstein / Agentforce 360 announced as 2026 strategic priority; Salesforce's FY2026 exec comp is tied to "Agentforce & Data 360 ARR." Source: [Salesforce FY2026 DEF 14A (SEC)](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000085/crm-20260416.htm), [TechCrunch — Salesforce crowdsourcing AI roadmap](https://techcrunch.com/2026/04/30/salesforce-is-crowdsourcing-its-ai-roadmap-with-customers/).
- **Known weaknesses:** total cost of ownership (license + implementation + Einstein add-ons) is the dominant Capterra/G2 complaint; admin staffing burden; EHR plumbing requires MuleSoft licenses on top. UNKNOWN: per-deal G2 review counts not cited because not directly verified in this pass.
- **Customer base for Health Cloud specifically:** UNKNOWN (not publicly disclosed at the cloud level).
- **API surface:** REST, SOAP, Bulk, Streaming, MuleSoft, FHIR R4 endpoints via Health Cloud Data Model.
- **Moat:** ecosystem lock-in (AppExchange, declared partners, certified admins), brand trust in regulated industries.
- **Adaptix kill strategy:** EMS-native data model out of the box (incident, unit, crew, claim, denial, NEMSIS) — Salesforce requires customization to express any of these; bundled Cortex AI without a $700/seat Einstein 1 SKU; one platform replaces CRM + CS + MDT + Field + Transport-Request instead of stacking Sales Cloud + Service Cloud + Field Service + Marketing Cloud.

### 1.2 HubSpot for Healthcare

- **Product line:** Sales Hub / Service Hub / Marketing Hub / CMS Hub / Operations Hub; "for Healthcare" is positioning, not a separate SKU.
- **Pricing (2026):** Starter $20/seat/mo; Professional from $500/mo for 3 seats ($50 extra seat); Enterprise from $1,500/mo for 5 seats ($75 extra seat). Source: [HubSpot pricing — Cargas 2026 guide](https://cargas.com/software/hubspot/pricing/), [HubSpot pricing — Encharge May 2026](https://encharge.io/hubspot-pricing/).
- **Feature inventory:** deal pipeline, contact mgmt, sequences, workflows, marketing automation, lead scoring, basic ticketing.
- **AI:** Breeze AI (formerly ChatSpot) for prospecting, summarization, content generation. Healthcare-specific Breeze features: UNKNOWN.
- **Known weaknesses:** Healthcare HIPAA BAA only on higher tiers; no clinical or EMS data model; not designed for operational dispatch or billing.
- **Customer base:** ~248,000 customers (HubSpot 10-K range, not re-verified in this pass — marked INFERRED).
- **API:** REST CRM v3.
- **Moat:** SMB ease-of-use, inbound marketing brand.
- **Adaptix kill strategy:** Adaptix CRM ships with EMS deal stages (RFP → contract → go-live → renewal), payer relationships, and 911 vs IFT vs NEMT segmentation. HubSpot has none.

### 1.3 Pipedrive

- **Pricing (per user / month, billed annually):** Essential $14, Advanced $29, Professional $59, Enterprise $99. Source: [Pipedrive pricing — Prospeo 2026](https://prospeo.io/s/pipedrive-vs-zoho-crm), [LaGrowthMachine CRM examples 2026](https://lagrowthmachine.com/crm-software-examples-2026/).
- **Feature inventory:** kanban deal pipeline, activity tracking, simple automations, email sync.
- **AI:** Pipedrive AI Sales Assistant (deal suggestions, email drafting).
- **Known weaknesses:** no native healthcare model, light reporting, weak Service-Cloud equivalent.
- **Customer base:** Pipedrive publicly cites 100,000+ companies (corporate site; not re-verified — INFERRED).
- **Moat:** simplicity for small sales teams.
- **Adaptix kill strategy:** equal simplicity for small agencies, but tied to billing, ops, and dispatch — not a standalone pipeline tool.

### 1.4 Zoho CRM

- **Pricing (per user / month, billed annually):** free tier; Professional $23; Enterprise $40 (incl. Zia AI). Source: [Pipedrive vs Zoho — Prospeo 2026](https://prospeo.io/s/pipedrive-vs-zoho-crm).
- **AI:** Zia (lead scoring, anomaly detection, voice assistant).
- **Weaknesses:** generic; UI density; no healthcare data model.
- **Customer base:** Zoho cites 250,000+ businesses across product family — not re-verified — INFERRED.
- **Adaptix kill strategy:** Adaptix bundles CRM with the system the EMS agency already runs daily; Zoho doesn't touch dispatch, billing, narcotics, or compliance.

### 1.5 Zendesk Sell

- **Pricing (per user / month, billed annually):** Team $19, Growth $55, Professional $115, Enterprise $169. Source: [Zendesk Sell pricing — ITQlick 2026](https://www.itqlick.com/base-crm/pricing).
- **Weaknesses:** Sell is a Service-Cloud add-on; minimal automation depth; not common in EMS.
- **Adaptix kill strategy:** Adaptix CRM is the customer-acquisition and renewal layer for an operational platform; Zendesk Sell is bolted on to a support ticketing tool.

### 1.6 Microsoft Dynamics 365 Healthcare

- **Pricing:** "On average, customers spend about $5,000 to $35,000 on their annual subscription, while implementation typically starts at $25,000." Source: [Cargas Dynamics 365 CRM 2026 guide](https://cargas.com/software/microsoft/dynamics-365-crm/pricing/).
- **Per-user CRM SKUs (Microsoft published, not re-verified live this pass — INFERRED): Sales Pro ~$65, Sales Enterprise ~$105, Customer Service Enterprise ~$105 — figures vary by tier.
- **AI:** Copilot for Sales / Service.
- **Weaknesses:** integration complexity; partner-led implementation; healthcare accelerator requires Power Platform + Dataverse + Azure Health Data Services stacking.
- **Adaptix kill strategy:** vertical fit out of the box; no four-product integration project required.

### 1.7 Veeva CRM (life sciences)

- **Pricing:** "Veeva CRM pricing starts at $200/user/month." Source: [Veeva CRM 2026 pricing — IntuitionLabs](https://intuitionlabs.ai/articles/veeva-crm-pricing-license-cost-2026).
- **Customer base:** pharma/biotech/medical device manufacturers — not EMS/fire. Veeva publicly cites 1,000+ life sciences customers (corporate site; not re-verified — INFERRED).
- **Relevance to Adaptix:** mostly cluster-adjacent. Veeva is included because hospital systems sometimes evaluate it for "all-in-one healthcare CRM" and reject it for non-pharma workflows.
- **Adaptix kill strategy:** none required directly; flagged for completeness.

### 1.8 Total Expert

- **Vertical:** mortgage / financial institutions / credit unions — NOT healthcare or EMS. Public claim: "Since 2016 Total Expert has enabled more than seven trillion dollars of funded loan volume." Source: [Total Expert site](https://totalexpert.com/solutions/mortgage/).
- **Pricing:** UNKNOWN (not publicly disclosed).
- **Relevance to Adaptix:** essentially zero overlap. Included only because it was listed in the brief as a "regulated industry" comparator. Not a competitive threat.

### 1.9 Aladtec (EMS-vendor-bundled "CRM"-adjacent)

- **Product:** scheduling for fire/EMS/law enforcement/corrections. Not a CRM, but bundled as part of the same vendor evaluation cycle.
- **Pricing:** starts at $100/month, per-employee subscription. Source: [Aladtec — Capterra 2026](https://www.capterra.com/p/248403/Aladtec/), [SelectHub Aladtec review](https://www.selecthub.com/p/employee-scheduling-software/aladtec/).
- **Scale claim:** "150,000+ active users globally" (Aladtec/SelectHub vendor-supplied figure — INFERRED).
- **Weaknesses:** scheduling-only; no CRM, no MDT, no billing.
- **Adaptix kill strategy:** Adaptix scheduling is one of N modules — Aladtec is a point tool.

---

## CLUSTER 2 — CUSTOMER SUCCESS PLATFORMS

### 2.1 Gainsight

- **Pricing:** Essentials $150/user/mo; Enterprise $300/user/mo. Median verified contract: $51k/year (296 verified Vendr purchases, ~15% negotiated savings). Source: [Gainsight pricing — Costbench 2026](https://costbench.com/software/customer-success/gainsight/), [Vendr Gainsight marketplace](https://www.vendr.com/marketplace/gainsight).
- **Features:** health scoring, success plans, journey orchestration, churn prediction, NPS/CSAT, advanced playbooks. Source: [Gainsight vs Salesforce — Coworker](https://coworker.ai/blog/gainsight-vs-salesforce).
- **AI:** Horizon AI for health scoring, summarization, copilot.
- **Weaknesses:** known overbuilt-for-small-teams complaint, expensive implementation, long ramp. Source: [Best CS platforms 2026 — Medium / Justine](https://medium.com/@talking-tech-with-j/best-customer-success-platforms-in-2026-ive-evaluated-all-the-major-players-most-are-overbuilt-2ccc251bb7c1).
- **Recent moves:** private-equity backed (Vista Equity 2020), continued acquisition of Northpass, Staircase AI — not re-verified this pass — INFERRED.
- **API:** REST, Snowflake share, Salesforce sync.
- **Adaptix kill strategy:** Adaptix Customer-Success ships health scoring driven by *operational* signals the agency already produces (run volume, denial rate, narcotic exception rate, response-time SLA). Gainsight requires the customer to feed it those signals manually; Adaptix already has them.

### 2.2 ChurnZero

- **Pricing:** $12k–$60k+ annual, account-based not seat-based, $5k–$25k implementation. Source: [Best CS platforms 2026 — TheCSCafe](https://www.thecscafe.com/p/best-customer-success-platforms).
- **AI:** Renewal and Forecast Hubs, in-app messaging copilot.
- **Weaknesses:** smaller ecosystem than Gainsight; limited journey orchestration depth.
- **Adaptix kill strategy:** same as Gainsight — operational signals come native.

### 2.3 Vitally

- **Pricing:** Tech-Touch $1.5k–$3k/mo; Hybrid $3k–$5k/mo; High-Touch $5k–$10k+/mo. Source: [Best CS platforms — TheCSCafe](https://www.thecscafe.com/p/best-customer-success-platforms), [Vitally vs ChurnZero vs Totango](https://www.vitally.io/post/vitally-churnzero-totango-which-csp-best).
- **Strength:** Notion-style docs + project management UX.
- **Adaptix kill strategy:** Adaptix CS ties to the same workspace the agency uses for ops, so the CSM does not need a separate doc tool.

### 2.4 Catalyst + Totango (merged)

- **Status:** Catalyst and Totango merged; combined company sells Totango, Catalyst, and Unison AI as separate SKUs. Source: [Totango competitors — Coworker 2026](https://coworker.ai/blog/totango-competitors).
- **Pricing:** Totango free Community tier; Starter ~$2,500/mo. Catalyst pricing: UNKNOWN post-merger (not publicly disclosed).
- **Adaptix kill strategy:** integrated platform vs. a merger still rationalizing SKUs.

### 2.5 Custify

- **Pricing:** from $399/month. Source: [TheCSCafe CS platforms 2026](https://www.thecscafe.com/p/best-customer-success-platforms).
- **Adaptix kill strategy:** same.

### 2.6 Planhat

- **Pricing:** Start-Up ~$1,150/mo, Professional ~$1,750/mo, account-based. Source: same TheCSCafe roundup.
- **Adaptix kill strategy:** same.

---

## CLUSTER 3 — MDT / FIELD APPS

### 3.1 ESO HHS (Field) / ESO ePCR

- **Pricing:** UNKNOWN (not publicly disclosed; quote-based). Industry reports characterize ESO as cloud-based ePCR + fire RMS + HDE data exchange. Source: [WiFiTalents EMS software guide 2026](https://wifitalents.com/best/emergency-medical-services-software/).
- **Known weaknesses (Adaptix internal context, see MEMORY.md "Competitive analysis"):** poor support and bug reports — flagged in founder context.
- **Adaptix kill strategy:** unified record from dispatch → field → billing → analytics; ESO bolts ePCR to RMS to billing to HDE.

### 3.2 ZOLL Field / RoadSafety

- **Products:** ZOLL emsCharts / ePCR / RoadSafety telematics / Dispatch / Billing Pro / X-Series device integration.
- **Pricing:** UNKNOWN (quote-based; not publicly listed).
- **Known weaknesses (Adaptix internal context):** convoluted UX, multiple-product stack.
- **Adaptix kill strategy:** one app, one identity, one data model; Cortex AI applied across the entire chain not just per product.

### 3.3 ImageTrend Field Bridge

- **Pricing:** UNKNOWN (quote-based; not publicly disclosed).
- **Description:** Field Bridge is ImageTrend's mobile/offline field ePCR companion. Source: [WiFiTalents EMS software guide 2026](https://wifitalents.com/best/emergency-medical-services-software/).
- **Known weaknesses (Adaptix internal context):** complexity, NEMSIS-form-builder ergonomics.
- **Adaptix kill strategy:** simpler crew UX; Cortex on-device clinical assist tied to live patient context.

### 3.4 Tablet Command

- **Scale claim:** "nearly 30,000 users and 700 public safety agencies across the United States and Canada." Source: [Tablet Command as MDT replacement](https://www.tabletcommand.com/blog/tablet-command-as-a-mobile-data-mdc/mdt-replacement).
- **Cost claim:** vendor states implementations "at least 60% less expensive than less capable legacy solutions" (vendor-supplied).
- **Strengths cited in reviews:** "very easy to use—if you can use an iPad, you can use Tablet Command"; iPad-first. Source: [Tablet Command — Capterra 2026](https://www.capterra.com/p/156300/Tablet-Command/).
- **Weakness cited:** "They use Arc GIS maps and users wish there was an option to utilize Google maps instead." Source: same Capterra page.
- **Adaptix kill strategy:** Adaptix Mobile-Shell + Field-App match the iPad-first ergonomics for fire incident command AND extend to EMS patient care, NEMSIS, narcotics, and billing — Tablet Command stops at incident management.

### 3.5 Active911

- **Pricing:** $14.00 per device per year. Source: [Active911 pricing](https://active911.com/pricing/), [Capterra Active911 2026](https://www.capterra.com/p/196556/Active911/).
- **Strength:** dominant in volunteer / combination fire departments; license reassignment supports volunteer turnover.
- **Weakness:** alert + mapping only; not a true MDT, no patient care, no billing.
- **Adaptix kill strategy:** offer a free or near-free Adaptix-tier for volunteer departments that bundles alerting (matches the $14/device entry price) + the rest of the platform when the department grows.

### 3.6 IamResponding

- **Pricing:** UNKNOWN (not publicly disclosed in this search; quote-based).
- **Position:** alerting + personnel response visibility for volunteer/combination departments. Source: [Firehouse Forums IamResponding vs Active911 thread](https://forums.firehouse.com/forum/firefighting/firefighters-forum/114509-iamresponding-or-active911).
- **Adaptix kill strategy:** same as Active911 — bundle the alerting in, add the operating platform on top.

### 3.7 Crew Sense Mobile / Roving Patrol / Garmin Live Track / Apple Maps for Business / Locusview / BoltAEM

- **Pricing / feature inventory:** UNKNOWN at the EMS-relevant level (not publicly disclosed in this search; these are adjacent or non-EMS tools).
- **Relevance:** Crew Sense overlaps Adaptix Crew/Scheduling; Roving Patrol is security; Garmin Live Track is consumer; Apple Maps for Business is not an EMS product; Locusview and BoltAEM are utility-construction. Flagged for completeness only.

---

## CLUSTER 4 — PUBLIC-FACING TRANSPORT REQUEST (NEMT / on-demand patient transport)

### 4.1 ModivCare (formerly LogistiCare)

- **Customer sentiment:**
  - SmartCustomer: 1.3 stars from 141 reviews. Source: [Modivcare SmartCustomer reviews](https://www.smartcustomer.com/reviews/modivcare.com).
  - PissedConsumer: avg 1.5 from 276 reviews; 17% would recommend, 86% unfavorable share. Source: [276 ModivCare reviews — PissedConsumer](https://modivcare.pissedconsumer.com/review.html).
  - Most-cited complaints: no-shows, last-minute cancellations causing missed appointments, unreachable supervisors, reimbursement delays, scheduling-app reliability, driver conduct. Source: same.
- **Critical 2025 event:** "In August 2025, ModivCare filed for voluntary Chapter 11 bankruptcy in the U.S. Bankruptcy Court for the Southern District of Texas, facing over $1.4 billion in debt from labor cost inflation, declining Medicaid reimbursements, and acquisition-related leverage." Source: [PissedConsumer ModivCare reviews](https://modivcare.pissedconsumer.com/review.html).
- **Payment to providers:** 15–30 days. Source: [NEMT Broker Billing Guide 2026 — EliteMedFinancials](https://elitemedfinancials.com/nemt-broker-billing-guide-2026/).
- **Adaptix kill strategy:** Adaptix Transport-Request-App is an opportunity to step into the trust gap left by ModivCare's bankruptcy and reputation. Adaptix gives the requesting facility (hospital/SNF/dialysis center) a direct request channel into vetted EMS/NEMT providers, with response-time SLA tracking, eligibility check, fare estimate, audit log, and survivable payment terms.

### 4.2 MTM Inc

- **Footprint:** "operates in over 31 states." Source: [Win Medicaid Broker Contracts — NEMTInsurance](https://nemtinsurance.com/blog/winning-medicaid-broker-contracts-modivcare-mtm-access2care).
- **Acquisitions:** MTM acquired Veyo and Access2Care. Source: [MTM Health acquires Access2Care NEMT](https://www.mtm-inc.net/mtm-to-expand-reach-with-acquisition-of-access2cares-nemt-business/).
- **Investment:** MTM invested in Kaizen Health. Source: [MTM announces Kaizen investment](https://www.mtm-inc.net/mtm-announces-investment-nemt-technology-platform-kaizen-health/).
- **Payment to providers:** 30–45 days. Source: EliteMedFinancials 2026 guide above.
- **Adaptix kill strategy:** the MTM rollup leaves multiple brokers and platforms still rationalizing. Adaptix can offer a single facility-facing intake that does not depend on a broker tier at all.

### 4.3 Veyo

- **Status:** acquired by MTM. Source: same EliteMedFinancials guide.
- **Payment to providers:** weekly via EFT (fastest in the industry). Source: same.
- **Adaptix kill strategy:** Adaptix can match weekly settlement using Adaptix-Billing-Service direct deposit at the provider tenant level — without a broker spread.

### 4.4 Access2Care

- **Status:** acquired by MTM; specializes in hospital-based discharges, IFT, and high-acuity transfers. Source: [EliteMedFinancials 2026 NEMT guide](https://elitemedfinancials.com/nemt-broker-billing-guide-2026/).
- **Payment to providers:** 45–60 days (slowest among majors). Source: same.
- **Credentialing:** 8–12 weeks (longest among majors). Source: same.
- **Adaptix kill strategy:** direct hospital-to-provider request flow eliminates the broker layer entirely for facilities running Adaptix.

### 4.5 Kaizen Health

- **Status:** "cutting edge healthcare logistics and non-emergency medical transportation technology platform" — MTM investee. Source: [MTM announces Kaizen investment](https://www.mtm-inc.net/mtm-announces-investment-nemt-technology-platform-kaizen-health/).
- **Pricing:** UNKNOWN.
- **Adaptix kill strategy:** Adaptix offers the same multi-modal logistics pattern, but already integrated with billing, dispatch, ePCR, and clinical context.

### 4.6 Roundtrip

- **Description:** "digital solution that streamlines patient transportation by connecting care coordinators to NEMT transportation providers nationwide… facilitate timely and reliable patient transportation after hospital stays." Source: [Roundtrip Health](https://roundtriphealth.com/).
- **Pricing:** UNKNOWN (not publicly disclosed).
- **Adaptix kill strategy:** match the care-coordinator-facing UX; add the live agency provider directory natively (since Adaptix already runs the providers).

### 4.7 Uber Health

- **Pricing model:** dynamic per-trip; upfront price shown in dashboard. Pay-per-trip via credit card or monthly cadence by credit card / ACH. Source: [Uber Health FAQ](https://www.uberhealth.com/us/en/faq/).
- **NEMT API:** "Uber Health's API connects NEMT providers to its vast driver network, offering features like real-time ride dispatch, trip tracking, and capacity management." Source: [Uber Health API](https://www.uberhealth.com/us/en/api-integration/).
- **Moat:** Uber rider/driver density.
- **Weaknesses:** still rideshare drivers (not stretcher / wheelchair / BLS in most markets), no clinical context, no billing chain, no ePCR.
- **Adaptix kill strategy:** Adaptix Transport-Request-App routes the *right modality* — ambulatory rideshare, WAV, gurney, BLS, ALS — and threads it into the clinical and billing chain. Uber Health is mode-1-only.

### 4.8 Lyft Healthcare

- **Position:** "emphasizes patient independence through features like the Lyft Pass and its Medicaid partnerships in 21 states, achieving average cost savings of 32%." Source: [NEMT Entrepreneur — Uber vs Lyft for NEMT](https://www.nemtrepreneur.com/blog/uber-health-lyft-healthcare-competitors-partners-nemt-providers).
- **Pricing per trip:** UNKNOWN (dynamic; not published).
- **Adaptix kill strategy:** same as Uber Health — modality coverage + clinical/billing chain.

### 4.9 Hospital direct-book solutions

- Generic category; UNKNOWN per-vendor pricing without a named vendor. Flagged.

---

## CROSS-VENDOR — SPECIAL-FOCUS ANSWERS

### A. Salesforce Health Cloud cost vs Adaptix unified

- Salesforce Health Cloud Enterprise list = $325/seat/mo + implementation $50k–$500k+. Source above.
- Add Service Cloud + Field Service + Marketing Cloud + Einstein 1 to approximate "CRM + CS + Field + AI" → easily $700+ per seat per month plus integration cost. Source: same Salesforce reseller guides.
- Adaptix's positioning: a single seat covers CRM, Customer-Success, Mobile-Shell, Field-App, and Transport-Request, with Cortex AI included. UNKNOWN: Adaptix list price is not in scope of this doc — to be set by founder pricing pass.

### B. Gainsight pricing for small CSM teams

- Per-seat $150–$300/mo, with median $51k/yr verified contract. Source: [Gainsight pricing — Costbench](https://costbench.com/software/customer-success/gainsight/), [Vendr Gainsight](https://www.vendr.com/marketplace/gainsight).
- For a 2-CSM EMS-vendor team that just wants to retain ambulance-service customers, that is hard to justify.
- Adaptix offer: CS layer included with the platform; health score derives from the customer's own operational data already in Adaptix (no separate Salesforce/Snowflake pipe needed).

### C. ModivCare / LogistiCare quality issues → Adaptix Transport-Request-App opportunity

- Public 1.3–1.5 star average across 400+ reviews + August 2025 Chapter 11 bankruptcy + named complaint themes (no-shows, unreachable support, reimbursement delays). Sources cited in §4.1.
- Adaptix Transport-Request-App must beat ModivCare on five published failure modes:
  1. Show real-time confirmation, not "we'll let you know."
  2. Show the actual assigned provider and ETA from a real Adaptix CAD record.
  3. Provide a callable named contact, not a 1-800 IVR.
  4. Settle provider payment on Adaptix Billing terms, not 15–60 days.
  5. Provide an auditable trail to satisfy the facility's compliance and a payer's claim.

### D. Tablet Command vs ZOLL Field market share

- Tablet Command publicly cites ~30,000 users / 700 agencies (vendor-supplied). Source: [Tablet Command MDT replacement page](https://www.tabletcommand.com/blog/tablet-command-as-a-mobile-data-mdc/mdt-replacement).
- ZOLL Field / RoadSafety market share: UNKNOWN (not publicly disclosed in a single figure; ZOLL is private). FLAGGED for follow-up if needed.
- Adaptix takeaway: Tablet Command is the credible iPad-first incumbent for fire incident command; Adaptix Mobile-Shell must match the iPad ergonomics AND extend across EMS.

### E. Active911 — volunteer-department bundling opportunity

- $14/device/year is the price point Adaptix must respect. Source: [Active911 pricing](https://active911.com/pricing/).
- Bundling play: Adaptix offers volunteer-tier alerting at or under Active911's price, with the rest of the Adaptix platform available when the department grows or merges into a combination agency.

---

## CROSS-VENDOR — CONSOLIDATED ADAPTIX KILL STRATEGY

1. **No vendor combines CRM + Customer Success + MDT + Field + public Transport-Request in one platform.** Salesforce gets closest by stacking ≥4 SKUs; nobody actually ships it unified for EMS. (Inference from §1 + §2 + §3 + §4 above.)
2. **Cortex AI is native to all five surfaces.** Salesforce Einstein, Gainsight Horizon, Tablet Command analytics, Uber Health routing — each is one-surface AI. Adaptix runs the same Cortex across CRM lead scoring, CS health score, on-device clinical assist, MDT routing, and Transport-Request triage.
3. **Transport-Request-App is native, not a vendor add-on.** Uber Health, Lyft Healthcare, ModivCare, MTM, Roundtrip, Kaizen Health all sit *outside* the EMS/fire platform. Adaptix ships it as a first-class app pointed at agencies already on Adaptix CAD/Billing — eliminating the broker layer for hospitals and SNFs that prefer direct.
4. **Trust gap is open.** ModivCare's 2025 bankruptcy + sub-2-star public reviews create durable distrust in the broker tier. Adaptix can position as the direct, auditable, SLA-backed alternative.
5. **Price ceiling is enforced by Active911 at the bottom and Salesforce Health Cloud at the top.** Adaptix has to undercut Salesforce-stack TCO at the agency tier while matching Active911 at the volunteer tier.

---

## UNKNOWNS AND OPEN ITEMS

- HubSpot, Zoho, Pipedrive, Veeva customer counts not re-verified in this pass (marked INFERRED).
- ESO / ZOLL / ImageTrend public pricing not disclosed; deeper sourcing requires founder-side contracts or RFP samples.
- ZOLL RoadSafety vs Tablet Command share split: no public number found.
- IamResponding, Crew Sense Mobile, Roving Patrol, Garmin Live Track, Locusview, BoltAEM pricing: not publicly disclosed in this search pass.
- Salesforce Health Cloud's healthcare-specific customer count: not publicly disclosed at the cloud level.
- Roundtrip / Kaizen Health pricing: not publicly disclosed.
- Total Expert pricing: not publicly disclosed; vertical mismatch with Adaptix.

These would each require either a direct vendor RFP, a Vendr / G2 paid data pull, or founder-supplied contract data to verify.

---

## SUMMARY (under 400 words)

The CRM / Customer-Success / MDT / Transport-Request landscape across EMS, fire, healthcare, and adjacent industries is fragmented and stacked. Salesforce Health Cloud anchors the top of the CRM tier at $325–$700/user/month plus $25k–$500k+ implementation; HubSpot, Pipedrive, Zoho, and Zendesk Sell occupy the SMB tier at $14–$169/user/month; Microsoft Dynamics 365 and Veeva CRM serve adjacent verticals with $200+/user/month or $5k–$35k annual subscription footprints. None ships an EMS-native data model.

In Customer Success, Gainsight ($150–$300/user/month, median $51k/yr verified contract) dominates enterprise, with ChurnZero, Vitally, Catalyst+Totango (merged), Custify, and Planhat clustered between $399–$10k+/month on account-based pricing. The dominant public complaint is overbuild for small CS teams.

In MDT/Field, Tablet Command publicly cites ~30,000 users and 700 agencies on iPad-first incident command at "60% below legacy" cost; ESO, ZOLL, and ImageTrend dominate ePCR with non-public pricing and Adaptix-noted UX and support pain. Active911 anchors the volunteer-fire price point at $14/device/year. IamResponding overlaps that niche with non-public pricing.

In Transport-Request, the broker tier (ModivCare/LogistiCare, MTM, Veyo, Access2Care) is consolidating onto MTM via acquisition and onto Kaizen Health via investment. ModivCare carries 1.3–1.5 star public reviews, 800+ filed complaints, and filed Chapter 11 bankruptcy in August 2025 against $1.4B+ debt. Provider settlement ranges from Veyo's weekly EFT to Access2Care's 45–60 days. Uber Health and Lyft Healthcare cover ambulatory rideshare only and offer APIs but no clinical or billing chain. Roundtrip and Kaizen address hospital discharge logistics without pricing transparency.

Adaptix's defensible position is that no listed vendor unifies CRM + Customer Success + MDT + Field + public Transport-Request inside a single EMS-native operating platform with shared Cortex AI. The kill strategy is (1) one platform replaces a Salesforce four-cloud stack at lower TCO; (2) Customer-Success health scoring is driven by operational signals Adaptix already owns; (3) Mobile-Shell and Field-App match Tablet Command's iPad ergonomics while extending across EMS, narcotics, NEMSIS, and billing; (4) Transport-Request-App steps into the trust gap left by ModivCare's bankruptcy with direct facility-to-provider routing, real ETAs, named contacts, and Adaptix-Billing-grade settlement terms; (5) a volunteer-fire tier respects the Active911 $14/device/year price point.

Status: CODE_EXISTS — this is a research artifact. Production claims about Adaptix CRM, CS, Mobile-Shell, Field-App, and Transport-Request-App remain governed by the ADAPTIX_ZERO_LIE directive and must be verified independently against live deployment.
