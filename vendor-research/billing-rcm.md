# Vendor Research — EMS Billing, RCM, and Clearinghouse Cluster

Prepared 2026-06-01 for the Adaptix kill-strategy program. Every claim below is sourced. Where a claim could not be sourced inside the time-box, the entry is labeled `UNKNOWN` rather than guessed.

Scope: ESO Billing, ZOLL Billing / AR Boost / RescueNet, Sweet-Billing (TriTech / CentralSquare Respond Billing), Waystar (ZirMed), Quadax (incl. EMS|MC), Patriot Software, R1 RCM (Performant Recovery), Inteliquent, Office Ally, Change Healthcare / Optum (post-breach), ApolloMD billing services, Pinnacle Anesthesia / RCM bureaus, ePremis (Assurance), EMS|MC, Solutionreach, plus AmbuPro/Digitech as a known EMS-specific comparator surfaced during research.

---

## 1. ESO Billing (ESO Solutions + Logis Solutions)

### Product line
- ESO Billing (cloud EMS billing) integrated with ESO ePCR, ESO Fire RMS, and ESO Health Data Exchange.
- After acquiring Logis Solutions (announced 2024-04-18, closed 2024-07-02), ESO bundles CAD + dispatch + EMS billing under one stack.

### Feature inventory
- Charge capture from ePCR, claim build, denial management, payment posting, AR analytics, fee-schedule auto-update.
- Marketing language: "compliance, denial management, performance analytics" and automated workflows tracking real-time payments.
- 837P / 999 / 277 / 835 EDI: not explicitly disclosed on public site (UNKNOWN at this level of detail, but implied by "claim submissions" language).
- CMS-1500 PDF generation: UNKNOWN (not stated on public pages reviewed).

### AI / Cortex equivalents
- ESO markets "automated workflows" and "alerts for delayed payments." No public evidence of a dedicated denial-prediction model, documentation coach, or migration AI comparable to Cortex. UNKNOWN whether internal ML exists.

### Pricing
- Custom quote; reported around $5,000–$10,000/month for mid-sized agencies; varies with users and storage.

### Known weaknesses
- Public web search did not return primary EMS-operator complaint threads in the time-box (the term "ESO" is dominated by Elder Scrolls Online results, polluting Reddit/Trustpilot queries). UNKNOWN for first-hand denial rate data.
- Industry consolidation risk: ESO is now stitching together ePCR + CAD + Logis billing simultaneously, which historically produces integration drag.

### Recent moves
- 2024-04-18 announcement, 2024-07-02 close of Logis Solutions; positioned as the first vendor to "link CAD, dispatch, and billing across emergency response."
- Tracxn lists 11 ESO acquisitions to date.

### API / integration surface
- ESO Health Data Exchange and hospital outcomes linking are public; granular billing API docs are not published openly.

### Customer base
- Mid-to-large EMS agencies that adopt the ESO suite; specific count UNKNOWN.

### Their moat
- Owns the ePCR pipeline that feeds billing, plus now CAD via Logis. Closed-loop is the moat.

### Adaptix kill strategy
- Cortex Denial Predictor must score every claim at ePCR-save (Adaptix already starts billing intelligence at dispatch).
- Cortex Migration Whisperer to pull ESO Billing agencies that hate dual ePCR + Billing renewals.
- Documentation Coach embedded inside Adaptix-ePCR (already in flight) closes the documentation gap ESO leaves open by upselling external compliance modules.

Sources: [ESO Billing page](https://www.eso.com/ems/billing-software/), [ESO Logis press release](https://www.eso.com/news/press-releases/eso-acquires-logis-solutions/), [PrivSource deal summary](https://www.privsource.com/acquisitions/deal/eso-acquires-logis-solutions-to-link-cad-dispatch-and-billing-across-emergency-response-rJS3Zx), [Tracxn ESO acquisitions](https://tracxn.com/d/acquisitions/acquisitions-by-eso/__BljsnXt5sH1Kom7AW1ZOVn5lOKCdlhQNKSc9Y5L0cLA), [Capterra ESO listing](https://www.capterra.com/p/175575/EHR-Software/).

---

## 2. ZOLL Billing / AR Boost / RescueNet

### Product line
- ZOLL Billing (cloud emergency-transport billing), RescueNet Billing and RescueNet Billing Pro (legacy on-prem/hosted suite), ZOLL AR Boost (front-end revenue capture).

### Feature inventory
- Cloud claim processing with automatic code/fee-schedule updates.
- AR Boost: pre-billing demographic + insurance discovery; finds primary/secondary/tertiary coverage; No Surprises Act and price-transparency compliance; self-pay-to-billable conversion.
- Marketed: prevents up to 66% of denials caused by inaccurate insurance info, finds coverage on >40% of presumed self-pay accounts.
- 837P / 999 / 277 / 835 EDI: implied (clean-claim language) but not enumerated publicly.

### AI / Cortex equivalents
- AR Boost's discovery engine functions as an insurance-discovery model, not denial-prediction in the modern ML sense. No public claim of a denial predictor, doc coach, or migration AI on par with Cortex.

### Pricing
- Not published. ZOLL SaaS Addendum guarantees a 10% monthly fee service credit for SLA misses; standard maintenance windows Mon/Wed 7–11 p.m. MT with 24h notice.

### Known weaknesses
- BBB and Revdex complaints surfaced relate to ZOLL Lifecor (LifeVest medical device), not the billing software — not transferable evidence. UNKNOWN for first-hand billing complaints in the time-box.
- RescueNet legacy footprint is large, which historically slows feature velocity vs. cloud-native challengers.

### Recent moves
- ZOLL Data Systems is a division of ZOLL Medical Corporation. Search for a Battery Ventures take-private in 2024 returned no confirmation — UNKNOWN.
- Customer case: AAA Ambulance Service implementation of AR Boost in early 2022 reported "hundreds of thousands" in recovered revenue.

### API / integration surface
- Integration with ZOLL monitors/cardiac devices and ePCR; granular billing API docs not public.

### Customer base
- "Deep integration with clinical monitors" leadership position cited in market reports. Specific agency count UNKNOWN.

### Their moat
- Bundle with ZOLL cardiac monitors + RescueNet ePCR; switching cost is hardware + clinical, not just software.

### Adaptix kill strategy
- Adaptix Cortex Denial Predictor + dispatch-to-reimbursement chain beats AR Boost's pre-bill discovery alone (Adaptix scores from the moment of dispatch, not at billing handoff).
- Adaptix does not require ZOLL monitors. Position Adaptix as "monitor-agnostic, documentation-grade billing intelligence."
- Migration Whisperer ingests RescueNet exports — many legacy agencies want out of on-prem.

Sources: [ZOLL AR Boost page](https://www.zolldata.com/healthcare-financial-data/arboost), [ZOLL Billing page](https://www.zolldata.com/ems-software/billing-solutions), [ZOLL Billing low-volume page](https://www.zolldata.com/zoll-billing-cloud-based-emergency-transport-billing), [ZOLL SaaS Addendum](https://www.zoll.com/en-us/about/corporate-social-responsibility/legal-software/software-as-a-service-addendum), [EMS1 shutdown stress test](https://www.ems1.com/billing-and-administration/the-shutdown-stress-test-for-ems-billing).

---

## 3. Sweet-Billing / TriTech / CentralSquare Respond Billing

### Product line
- Sweet-Billing (originally Ortivus, then TriTech) — historically the market-leading EMS billing app moving paper-to-electronic; web/ASP and outsourced service variants.
- After the 2018 merger of Superion + TriTech + Zuercher + Aptean public-sector business, the rebrand is CentralSquare Technologies. CentralSquare's current EMS billing product is Respond Billing (>2,600 EMS providers historically cited).

### Feature inventory
- Respond Billing: electronic and paper claim submission, built-in claim scrubbing, denial workflow.
- Sweet-Billing legacy: reimbursement and collections, integrations with TriTech CAD/PCR.
- 837P / 999 / 277 / 835: implied but not enumerated in public sources reviewed.

### AI / Cortex equivalents
- No public AI/ML claims for either Sweet-Billing or Respond Billing in 2026 sources reviewed.

### Pricing
- Not published. UNKNOWN.

### Known weaknesses
- Sweet-Billing is positioned as a legacy install base feeding Respond Billing; CentralSquare support portal still hosts a Respond Billing group, but no public confirmation Sweet-Billing has been formally end-of-life. UNKNOWN on EOL date.
- CentralSquare's broader CAD/RMS line has historically attracted complaints around support responsiveness in public-sector deals; specific Respond Billing complaints not surfaced in time-box.

### Recent moves
- Payor Logic integration with CentralSquare (formerly TriTech) for ambulance billing payer-discovery flows is on record.

### API / integration surface
- Integration with TriTech / CentralSquare CAD, Payor Logic, third-party clearinghouses; public API docs UNKNOWN.

### Customer base
- "Over 2,600 EMS providers" cited historically for TriTech billing. Current Respond Billing count UNKNOWN.

### Their moat
- CentralSquare public-safety CAD bundle. EMS billing is a cross-sell from CAD, not a standalone leader.

### Adaptix kill strategy
- Adaptix has a CAD service in the polyrepo and a billing service starting at dispatch. Pitch is identical scope, with Cortex and no public-sector merger debt.
- Migration Whisperer should specifically target CentralSquare agencies that are running Sweet-Billing on legacy infrastructure.

Sources: [CentralSquare Respond Billing](https://www.centralsquare.com/solutions/healthcare/respondbilling), [TriTech Respond Billing](https://www.tritech.com/solutions/respond/respond-billing), [CentralSquare formation announcement](https://www.ems1.com/ems-products/software/press-releases/superion-tritech-zuercher-and-apteans-public-sector-business-merge-to-form-centralsquare-technologies-7blzy1vi22WzuJgR/), [Payor Logic + CentralSquare integration release](https://www.prnewswire.com/news-releases/payor-logic-integrates-with-centralsquare-technologies-formerly-tritech-software-300734757.html), [Sweet-Billing legacy install notes](https://www.firehousesoftware.com/webhelp/FH/Content/SweetBillingInstallation/00_Introduction.htm).

---

## 4. Waystar (formerly ZirMed)

### Product line
- Waystar Claim Manager (clearinghouse + claim management), Claim Monitoring, Authorization & Referral Status, eligibility, denial management, patient payments — single platform.

### Feature inventory
- 837 (Institutional, Professional, Dental), 270/271 eligibility, 276/277 claim status, 835 remittance — all supported.
- Per Waystar 2025 10-K: >7.5B transactions/year processed.
- AltitudeAI engine claims $15.5B in prevented denials cumulatively.
- Average first-pass clean-claim rate: 98.5%+ (vendor-stated).
- Integration toolkit: REST APIs, SOAP, SFTP batch, HL7. FHIR-specific claim endpoints UNKNOWN at the depth searched.

### AI / Cortex equivalents
- AltitudeAI: claim-edit + denial prevention. Direct overlap with Cortex Denial Predictor's positioning, though Waystar's AI is more enterprise-hospital tuned than EMS-specific.

### Pricing
- Custom; reported $200–$800/month for mid-sized (4–20 providers), ~$100–$300/provider/month for small practices, $2,000–$5,000+/month for mid-sized orgs. Clearinghouse transaction pricing reported around $0.11/claim and $0.14/eligibility check.

### Known weaknesses
- Enterprise-tuned, not EMS-tuned. Ambulance-specific edits (origin/destination, mileage, ALS vs. BLS modifiers) are not differentiated in Waystar marketing.
- KLAS Best-in-KLAS 2025 status reduces obvious complaint volume but does not equal EMS satisfaction.

### Recent moves
- Post-Change-Healthcare breach (Feb 2024), Waystar onboarded >30,000 providers in days; competitors (Stedi, Waystar) reported "300% client growth" via the breach surge per industry coverage. KLAS Best-in-KLAS 2025.

### API / integration surface
- Unified API layer; HL7; Epic EHR integration page exists; batch file interfaces.

### Customer base
- 30,000+ providers post-Change-breach migration; long-standing hospital + ambulatory base.

### Their moat
- Payer connection breadth (7.5B txns/yr), AltitudeAI denial corpus, enterprise sales motion, post-breach trust premium.

### Adaptix kill strategy
- Waystar wins enterprise hospitals. Adaptix wins EMS-native verticals because every Waystar edit is generic; Adaptix Denial Predictor is trained on EMS-only denial reasons (M16, CO-50, mileage modifiers, signature requirements).
- Adaptix should publish ambulance-specific clean-claim and denial benchmarks against Waystar's generic 98.5%.
- Position: "Waystar fits hospitals. Adaptix fits ambulances — from dispatch to deposit."

Sources: [Waystar Claim Manager](https://www.waystar.com/our-platform/claim-management/claim-manager/), [Waystar year-in-review 2024](https://www.waystar.com/blog-waystars-year-in-review-6-key-milestones-for-the-future-of-healthcare-payments/), [Modern Healthcare on Change opportunity](https://www.modernhealthcare.com/cybersecurity/change-breach-waystar-availity/), [Waystar pricing breakdown](https://www.verifytx.com/waystar-pricing/), [TATEEDA integration guide](https://tateeda.com/blog/integrate-waystar-with-custom-healthcare-applications), [G2 reviews](https://www.g2.com/products/waystar/reviews).

---

## 5. Quadax (incl. EMS|MC business unit)

### Product line
- Xpeditor (claims management/clearinghouse), Intelligence by Quadax (iQ AI framework), SafetyNet (backup clearinghouse), denial management, prior authorization. EMS|MC operates separately as a Quadax-associated EMS billing bureau per founder cluster framing.

### Feature inventory
- 99.6% first-pass clean-claim rate (vendor-stated via Xpeditor), 99.7% first-pass acceptance cited in third-party 2026 roundups.
- Denial prediction, prior-auth automation, payer-specific rule navigation via iQ.
- SafetyNet pre-configured backup clearinghouse — directly motivated by Change-Healthcare-era continuity concerns.

### AI / Cortex equivalents
- iQ: denial prediction + payer-rule automation. EMS-specific tuning not claimed.

### Pricing
- Not published; custom.

### Known weaknesses
- Mid-to-large hospitals and labs are the stated sweet spot, not EMS. EMS|MC is the EMS-specific channel — Quadax-cluster but operationally separate.
- UNKNOWN whether EMS|MC runs on Xpeditor or its own stack.

### Recent moves
- EMS|MC: 1996 founding, >750 FTEs, serves 31 FL EMS clients (340k+ transports/yr) and 1,500+ EMS agencies nationally (5.5M claims/yr). EMS|MC's most recent deal is a buyout/LBO with Health Services Integration on 2026-01-19.
- 5-time KLAS award winner for claims management.

### API / integration surface
- Connections to "1,500+ government and commercial payers" cited at the cluster level (note: this number appears in ePremis sources too — likely industry-typical, not Quadax-unique). Quadax-specific API docs UNKNOWN.

### Customer base
- Hospitals, health systems, labs (Quadax); EMS|MC: 1,500+ EMS agencies, 5.5M claims/yr.

### Their moat
- Xpeditor's measurable clean-claim metrics + SafetyNet differentiator + EMS|MC's dedicated EMS coding workforce.

### Adaptix kill strategy
- EMS|MC is the highest-value scalp in this cluster — 1,500 EMS agencies is a real target list. Cortex Migration Whisperer should be tuned to ingest EMS|MC outputs.
- Adaptix's promise: "you don't need a 750-person billing bureau because Cortex does the coding-and-denial-rework work."
- Adaptix needs its own SafetyNet equivalent: multi-clearinghouse failover. Without it, the Change-2024 trauma will keep buyers conservative.

Sources: [Quadax Claims Management](https://www.quadax.com/claims-management/), [Quadax clearinghouse features post](https://blog.quadax.com/7-must-have-clearinghouse-features-that-drive-rcm-success), [EMS|MC patient portal](https://emsmc.com/patient-portal/), [PitchBook on EMS|MC](https://pitchbook.com/profiles/company/12363-22), [SoftwareSuggest Quadax 2026](https://www.softwaresuggest.com/quadax).

---

## 6. Patriot Software (Patriot Billing)

### Product line
- Patriot Accounting and Patriot Payroll. Billing/invoicing inside Accounting; payroll add-on.

### Feature inventory
- General ledger, financial reporting, bank reconciliation, billing/invoicing, unlimited invoices/contractors/customers/payments.

### AI / Cortex equivalents
- None claimed in 2026 sources reviewed.

### Pricing
- Payroll: $17/mo + $4/employee or 1099. Accounting Basic: $20/mo. Accounting Premium: $30/mo. 50% off first three months, 30-day free trial.

### Known weaknesses
- Patriot is small-business accounting/payroll. It is not a medical billing or EMS RCM product. Including it in the EMS-billing cluster is a category mismatch — they do not compete with ESO/ZOLL/Waystar for ambulance claims.

### Recent moves
- Public pricing pages updated 2026; no M&A disclosed in the sources reviewed.

### API / integration surface
- Standard SMB accounting integrations; not relevant to 837P/EDI.

### Customer base
- SMB general accounting users; EMS overlap UNKNOWN and almost certainly negligible.

### Their moat
- Self-serve SMB pricing simplicity.

### Adaptix kill strategy
- Not a competitor in EMS RCM. The only relevance is that small fire departments using Patriot Accounting for general books still need a real medical-billing system — Adaptix can position as the medical-billing layer next to whatever GL the agency runs.

Sources: [Patriot pricing page](https://www.patriotsoftware.com/pricing/), [SoftwareFinder Patriot 2026 pricing](https://softwarefinder.com/resources/patriot-software-pricing), [SoftwareAdvice Patriot](https://www.softwareadvice.com/product/3746-Patriot-Software/), [Capterra Patriot 2026](https://www.capterra.com/p/116050/Patriot-Software/).

---

## 7. R1 RCM (Performant Recovery)

### Product line
- Enterprise RCM services for hospitals and physician groups: end-to-end revenue operating system with "agentic AI" and human expertise. R1 also operates Performant Recovery for collections.

### Feature inventory
- Billing, claims processing, denial resolution, revenue recovery, physician RCM.
- 30,000+ healthcare providers served; 30,000+ FTEs across U.S. and India.

### AI / Cortex equivalents
- R1 markets "agentic AI" in its revenue operating system. Specifics on denial prediction models are not publicly enumerated.

### Pricing
- Enterprise services; not published.

### Known weaknesses
- Hospital + physician scope, not EMS. EMS-specific tuning UNKNOWN.
- Now privately held: 2024-08-01 deal with TowerBrook + CD&R at $14.30/share, ~$8.9B enterprise value, 29% premium to Feb 2024 closing price.

### Recent moves
- Take-private 2024 expected to close end of 2024. Private-equity ownership often correlates with cost-out and reduced innovation tempo in the medium term.

### API / integration surface
- Enterprise integrations with major EHR/HIS systems; not consumer-grade documented APIs.

### Customer base
- 30,000+ providers, billions in revenue managed.

### Their moat
- Scale, labor arbitrage (India ops), enterprise contracts.

### Adaptix kill strategy
- R1 will not chase EMS specifically. Adaptix's wedge is the EMS niche with Cortex automating what R1 throws human labor at. The pitch: "R1 fixes denials with 30,000 people. Cortex fixes them before they happen."

Sources: [R1 RCM](https://www.r1rcm.com/), [R1 physician RCM](https://www.r1rcm.com/physician-revenue-cycle-management/), [SEC 8-K take-private announcement](https://www.sec.gov/Archives/edgar/data/0001910851/000119312524190603/d837241dex991.htm), [Healthcare Business Review profile](https://www.healthcarebusinessreview.com/r1).

---

## 8. Inteliquent

### Product line
- Voice services + communications platform, owned by Sinch.

### Feature inventory
- Voice trunking, business communications APIs. Not a healthcare clearinghouse.

### AI / Cortex equivalents
- N/A.

### Pricing
- Telecom enterprise pricing; not relevant.

### Known weaknesses
- Inteliquent is not a healthcare billing clearinghouse. It is a CPaaS/telecom provider. The cluster mention is likely a confusion with "Intelligent" clearinghouse marketing copy (Carisk Partners markets "Intelligent Clearinghouse"). FLAGGED: vendor list mismatch.

### Recent moves
- Sinch acquisition; not relevant to EMS billing.

### Adaptix kill strategy
- Not a competitor. If Adaptix needs voice for billing-related patient comms (collections calls, eligibility outreach), Inteliquent is a potential vendor, not a target.

Sources: [Inteliquent contact](https://www.inteliquent.com/contact-us), [Carisk Intelligent Clearinghouse](https://www.cariskpartners.com/intelligent-clearinghouse-provider/) (the likely confusion source).

---

## 9. Office Ally

### Product line
- Service Center (clearinghouse), EHR 24/7, Practice Mate, Reverbe (patient comms). Adaptix already integrates Office Ally per founder note.

### Feature inventory
- 270/271 eligibility, 837 Institutional/Professional/Dental, 276/277 claim status, 835 remittance, claim attachments. Ambulance claim scenarios supported per companion guide.
- Processes >1B transactions/yr.

### AI / Cortex equivalents
- Claim scrubbing is described as "basic — catches formatting and field-level errors but not complex coding issues" in third-party comparisons. No AI denial predictor publicly marketed.

### Pricing
- Par claims: $0 to submit electronically.
- Non-Par claim processing: $44.95 per unique Tax ID + Rendering NPI combination in any month a Non-Par claim is submitted.
- Positioned as the top free option for small practices in 2026 clearinghouse roundups.

### Known weaknesses
- Claim scrubbing is intentionally basic; complex denials (EMS modifiers, mileage, origin/destination) will leak through.
- Acceptance-rate metric not published. Competitor positioning (Waystar 98.5%, TriZetto ~98%, Quadax 99.6–99.7%) implies Office Ally underperforms on first-pass cleanliness, but Office Ally has not published a counter-number — UNKNOWN exact rate.

### Recent moves
- Continued positioning as a low-cost/free clearinghouse during and after the Change-Healthcare disruption.

### API / integration surface
- EDI clearinghouse for hospitals + health systems; SFTP/REST integration; companion guides public.

### Customer base
- Small practices nationally + many ambulance bureaus using it as a low-cost EDI on-ramp.

### Their moat
- Free Par-claim submission; broad payer connectivity. Price is the moat.

### Adaptix kill strategy
- Adaptix already uses Office Ally — keep the relationship as a transport channel. Cortex Denial Predictor + Adaptix's own scrubbing layer compensates for Office Ally's basic edits. Result: Office Ally pricing with Quadax-class first-pass cleanliness.
- Long-term: Adaptix should add a second clearinghouse (Waystar or Availity) for SafetyNet-style failover, then publish the multi-clearinghouse architecture as a buyer-confidence story.

Sources: [Office Ally Service Center](https://cms.officeally.com/products/service-center), [Office Ally pricing](https://cms.officeally.com/pricing), [Office Ally 837P companion guide PDF](https://cms.officeally.com/OfficeAlly/Forms/Forms/OA_Professional_837P_Companion_Guide_r060822.pdf), [TrustRadius reviews](https://www.trustradius.com/products/office-ally-service-center/reviews).

---

## 10. Change Healthcare / Optum (post-2024 breach)

### Product line
- Change Healthcare clearinghouse (Assurance/ePremis editor), Optum revenue cycle, claim attachments, eligibility, remittance. Now a UnitedHealth Group subsidiary.

### Feature inventory
- Historically the largest U.S. clearinghouse by transaction volume. Connectivity to 1,500+ payers, including direct Medicare connectivity via Assurance.
- ePremis 2.5/2.6 historic releases — payer claim status, CCI, NPI support, all-payer claims management.

### AI / Cortex equivalents
- Pre-breach Change had multiple AI/automation products; Optum continues to market AI across RCM. Specific 2026 denial-prediction product mapping UNKNOWN at this depth.

### Pricing
- Not publicly published; UNKNOWN.

### Known weaknesses (this is the headline section)
- 2024-02-21: nation-state-actor cyberattack. Systems offline for months. UnitedHealth paid a $22M ransom via Optum. 192.7M individuals affected (largest healthcare breach in U.S. history per HIPAA Guide).
- Providers were unable to submit claims, run eligibility, or process pharmacy benefit transactions; some clinics went into bankruptcy or laid off staff.
- 78 individual and class-action lawsuits filed; settlement discussions in front of Judge Foster in Minneapolis; expected payout larger than Anthem's $115M.
- Nebraska AG lawsuit survived motion to dismiss.
- Reputational damage is enduring; KLAS and industry coverage explicitly frames the breach as a "diversification" trigger for the market.

### Recent moves
- Continued breach-notification rollout into 2025–2026.
- Providers migrating off Change/Optum to Waystar, Availity, Stedi at scale (Waystar took 30,000+ providers in days; Availity + Stedi onboarded 40,000+ in weeks).

### API / integration surface
- Historically the deepest payer connectivity in the U.S. Whether all legacy integrations are restored to pre-breach functionality is contested in customer forums — UNKNOWN at the per-payer level.

### Customer base
- Pre-breach: nearly every major U.S. provider/health system touched Change in some way.
- Post-breach: provider concentration is migrating out.

### Their moat
- Payer connectivity breadth, UnitedHealth Group ownership. Breach has actively eroded the trust component of that moat.

### Adaptix kill strategy
- Buyer fear is the wedge. Sell Adaptix as "multi-clearinghouse, multi-region, zero-single-point-of-failure billing intelligence."
- Cortex Denial Predictor runs locally to Adaptix; even if a downstream clearinghouse goes offline, Adaptix still scores, scrubs, holds, and resubmits when the network is restored.
- Migration Whisperer should target any agency still on Change/Optum that wants a documented disaster-recovery story.

Sources: [HIPAA Guide breach summary](https://www.hipaaguide.net/change-healthcare-data-breach/), [Nixon Peabody alert](https://www.nixonpeabody.com/insights/alerts/2025/11/12/change-healthcare-cybersecurity-breach-impact-on-healthcare-providers), [HFMA coverage](https://www.hfma.org/technology/cybersecurity/cyberattack-on-change-healthcare-brings-turmoil-to-healthcare-operations-nationwide/), [Bleeping Computer UnitedHealth/Optum](https://www.bleepingcomputer.com/news/security/unitedhealth-confirms-optum-hack-behind-us-healthcare-billing-outage/), [Modern Healthcare on Waystar/Availity opportunity](https://www.modernhealthcare.com/cybersecurity/change-breach-waystar-availity/), [About Lawsuits class actions](https://www.aboutlawsuits.com/change-healthcare-lawsuit/), [HIPAA Journal Nebraska AG suit](https://www.hipaajournal.com/change-healthcare-responding-to-cyberattack/), [Compliancy Group lawsuit explainer](https://compliancy-group.com/change-healthcare-class-action-lawsuit/), [Kaspersky breach narrative](https://www.kaspersky.com/blog/unitedhealth-ransomware-attack/53065/).

---

## 11. ApolloMD (billing services)

### Product line
- Emergency medicine + hospital medicine + anesthesia + radiology staffing AND in-house RCM. Independent physician groups can buy RCM-only without staffing.

### Feature inventory
- Eligibility, coding, claims, denial management. Average client ED volume >40,000 visits/yr.
- Proprietary scheduling system referenced.

### AI / Cortex equivalents
- Marketing emphasizes "accuracy in coding" and "meticulous denial management" — no public ML/AI product disclosed.

### Pricing
- Not published; physician-group enterprise contracts.

### Known weaknesses
- Emergency-physician focus, not ambulance/EMS-agency focus. The denials they fight are ED facility/professional, not ALS/BLS transport.

### Recent moves
- Not disclosed in time-box.

### API / integration surface
- PaymentsMD portal for patient pay; provider APIs UNKNOWN.

### Customer base
- ED and hospital-medicine groups, primarily.

### Their moat
- Physician-owned, captive ED contracts.

### Adaptix kill strategy
- Not a head-on EMS-agency competitor. The relevance: ED groups + EMS share patient-handoff data. Adaptix could pitch to ApolloMD ED partners that closing the ePCR → ED loop reduces ED denials.

Sources: [ApolloMD RCM page](https://apollomd.com/services/revenue-cycle-management/), [ApolloMD ED solutions](https://apollomd.com/hospitals/services/emergency-medicine/), [Optum ED RCM comparison](https://business.optum.com/en/operations-technology/revenue-cycle-management/ambulatory-rcm-services/emergency-medicine.html).

---

## 12. Pinnacle Anesthesia / RCM bureaus servicing EMS

- Search returned no specific "Pinnacle Anesthesia" EMS-billing acquisition. "Pinnacle Financial Partners" is a bank holding company unrelated to RCM. UNKNOWN whether the founder's intended target is a different "Pinnacle"-branded RCM bureau.
- Adjacent: independent anesthesia RCM bureaus (PGM Billing, Coronis Health, RCM Matter, AffinityCore, Vigilant Billing) market specialized anesthesia coding. They are not direct EMS competitors but illustrate the bureau model Adaptix replaces with Cortex.

### Adaptix kill strategy
- Position Cortex as the bureau-killer. Pitch: "Your bureau is 60 coders in a building. Cortex is the coders, the denial appeals team, and the eligibility researcher, running 24/7, scored per-claim."

Sources: [PGM anesthesia billing](https://www.pgmbilling.com/anesthesia-billing-services-rcm-built-for-accuracy-speed-and-compliance/), [Coronis Health anesthesia](https://www.coronishealth.com/blog/anesthesia-medical-billing-rcm-what-to-know).

---

## 13. ePremis (Assurance) — owned by Change Healthcare

### Product line
- ePremis (Assurance Editor): all-payer claims management for hospital revenue cycle, web-ASP or turnkey.

### Feature inventory
- Connectivity to 1,500+ government and commercial payers.
- Direct Medicare connectivity via EHNAC-accredited clearinghouse — historically a differentiator.
- Payer edits + bridge routines to surface missing/invalid claim data pre-submit.
- Releases noted: ePREMIS 2.5 (payer claim status, CCI, NPI), ePREMIS 2.6 (new claim form transition support).

### AI / Cortex equivalents
- None publicly marketed; rule-based editing only.

### Pricing
- Not published. UNKNOWN.

### Known weaknesses
- Inherits all Change Healthcare breach exposure (see Section 10).
- Hospital revenue-cycle scope, not ambulance-specific.
- Public references to ePREMIS 2.5/2.6 read as a maturing/legacy product — version cadence relative to modern cloud peers UNKNOWN.

### Recent moves
- Tied to Change/Optum recovery narrative.

### Adaptix kill strategy
- Same as Section 10: lean on the breach trauma and the lack of ambulance-specific edits.

Sources: [Per-Se / insideARM ePREMIS 2.5](https://www.insidearm.com/news/00003884-per-se-technologies-releases-epremis-25-n/), [insideARM ePREMIS 2.6](https://www.insidearm.com/news/00015233-per-se-technologies-releases-epremis-26-t/), [Quizlet ePremis editor reference](https://quizlet.com/702652328/epremis-assurance-editor-review-flash-cards/).

---

## 14. EMS|MC

Already covered as part of Quadax cluster framing (Section 5). Standalone facts:
- 1996 founding, EMS-by-EMS-professionals branding.
- 750+ FTEs, 1,500+ EMS agency clients, 5.5M+ claims/yr nationally, 31 FL clients alone (340k+ transports/yr).
- 2026-01-19: buyout/LBO by Health Services Integration per PitchBook.

This is the single largest concentrated EMS-billing target in the cluster — capturing even 10% of EMS|MC's 1,500 agencies would meaningfully reshape the EMS-RCM market.

Sources: [EMS|MC patient portal](https://emsmc.com/patient-portal/), [PitchBook EMS|MC](https://pitchbook.com/profiles/company/12363-22).

---

## 15. Solutionreach

### Product line
- Patient engagement: two-way text, online scheduling, automated reminders, surveys, patient surveys, in-software patient payment screen.

### Feature inventory
- Two-way messaging, appointment reminders, surveys, secure patient payment.
- Revenue-cycle messaging is an add-on (priced separately).

### AI / Cortex equivalents
- None disclosed in 2026 sources reviewed.

### Pricing
- Starts $329–$400/mo. Three tiers: Essentials, Plus, Enterprise (50+ locations). Hidden costs flagged in reviews: setup, data migration, training. 3-year TCO estimated at $15,000–$30,000.

### Known weaknesses
- Most-cited complaint: customer support is "difficult to reach, unhelpful, slow." Larger practices flag cost.
- Not an ambulance/EMS product — designed for dental/optometry/medical practice engagement.

### Recent moves
- 2026 pricing pages refreshed; no M&A in sources reviewed.

### API / integration surface
- Practice-management integrations standard for ambulatory; EMS UNKNOWN.

### Their moat
- Patient-communication breadth + HIPAA-compliant texting.

### Adaptix kill strategy
- Adaptix already has a Communications service. Patient-billing texts, eligibility outreach, and collection comms should be Adaptix-native — no need for an add-on contract.
- Cite Solutionreach's "difficult support" pattern as the exact thing Adaptix avoids by being a real platform (founder note: support is part of the moat vs. ESO/Zoll/Traumasoft).

Sources: [SelectHub Solutionreach](https://www.selecthub.com/p/patient-engagement-software/solutionreach/), [Capterra Solutionreach](https://www.capterra.com/p/160916/Solutionreach/), [GetApp Solutionreach](https://www.getapp.com/all-software/a/solutionreach/), [SoftwareAdvice Solutionreach](https://www.softwareadvice.com/email-marketing/solutionreach-dental-profile/), [ITQlick TCO](https://www.itqlick.com/solutionreach/pricing).

---

## 16. AmbuPro / Digitech (surfaced during research; included for completeness)

### Product line
- Digitech: outsourced EMS billing + cloud billing/BI platform (founded 1984). AmbuPro EMS: ePCR + ambulance ops + billing-information generation.

### Feature inventory
- Digitech: full revenue cycle automation, customizable Dashboard for AR / forecasting / records transparency, encrypted scheduled reports.
- AmbuPro: ePCR documentation + billing-information generation + EHR integrations.

### AI / Cortex equivalents
- Not explicitly marketed.

### Pricing
- Not published; UNKNOWN.

### Known weaknesses
- AmbuPro is ePCR-first, billing-adjacent — billing is a feed, not the product.
- Digitech is outsourced-service-heavy; Adaptix-style automation could compress their cost-of-service moat.

### Adaptix kill strategy
- Digitech is the closest analogue to "EMS-specific billing intelligence." Adaptix Cortex must publish denial-rate and clean-claim benchmarks specifically against Digitech to be credible in this niche.

Sources: [Digitech EMS billing](https://digitechcomputer.com/), [Digitech testimonials](https://digitechcomputer.com/testimonials/), [AmbuPro Capterra](https://www.capterra.com/p/115329/AmbuPro-EMS/), [SoftwareWorld AmbuPro](https://www.softwareworld.co/software/ambupro-ems-reviews/).

---

## Cross-vendor synthesis

### Market structure 2026
- U.S. EMS billing software market valued at ~$537M in 2025 (one source); broader EMS billing services market ~$1.89B → $2.13B (2025 → 2026, second source). Different scopes — both cited for transparency.
- Top vendors hold >50% of EMS software deployments. ZOLL, ESO, ImageTrend, Digitech, AIM dominate per market reports.

### Stated clean-claim / first-pass rates (vendor-marketed; not independently audited)
- Quadax Xpeditor: 99.6–99.7% first-pass.
- Waystar: 98.5%+ first-pass.
- TriZetto: ~98%.
- Office Ally, ZOLL, ESO, Sweet/Respond Billing: not publicly disclosed.

### Change Healthcare aftermath
- Single most important driver of vendor selection in 2025–2026.
- Waystar, Availity, Stedi captured 30,000–70,000+ providers in weeks.
- Buyer requirement going forward: multi-clearinghouse failover, documented DR plan, no single-vendor dependency.
- Adaptix without a SafetyNet-equivalent is a CUSTOMER_READY blocker.

### M&A consolidation in the cluster
- 2024-04: ESO acquires Logis (CAD + billing integration).
- 2024-08: R1 RCM goes private (TowerBrook + CD&R, $8.9B EV).
- 2026-01: EMS|MC buyout/LBO by Health Services Integration.
- CentralSquare continues to roll up public-safety + EMS billing under Respond Billing.
- Net: incumbents are getting bigger and slower. Window for a Cortex-first EMS billing platform is open.

### AI capability gap
- None of the EMS-specific incumbents (ESO, ZOLL, Sweet/Respond, Digitech, AmbuPro, EMS|MC) publicly market a denial predictor, documentation coach, or migration AI at the depth Cortex is targeting.
- Waystar (AltitudeAI) and Quadax (iQ) have the closest AI postures but are hospital-tuned, not ambulance-tuned.
- This is the head-turner gap.

---

## Top features Adaptix Billing MUST have to win

1. Cortex Denial Predictor scoring every claim at ePCR-save AND at dispatch (start-of-call telemetry).
2. Cortex Documentation Coach inline in ePCR, pre-claim, that improves narrative compliance before signature.
3. Cortex Migration Whisperer that ingests ESO, ZOLL, RescueNet, Sweet/Respond, Digitech, and EMS|MC export formats.
4. Multi-clearinghouse failover (Office Ally + Waystar OR Availity), explicitly marketed as the Change-Healthcare-proof architecture.
5. Full 837P / 999 / 277 / 835 round-trip with audit trail per Adaptix CLAUDE.md zero-fake rule.
6. CMS-1500 PDF generation with payer-specific overlays.
7. AR aging by payer, by crew, by call type, by mileage band — surfaced to founder + agency admin.
8. Real-time eligibility (270/271) at dispatch, not at billing handoff.
9. Payment posting + EOB reconciliation that auto-routes denials to Cortex appeal generation.
10. Patient billing portal with HIPAA-grade texting (replaces Solutionreach add-on).
11. Per-payer rule engine that is editable by the agency without engineering involvement.
12. Full audit log queryable by founder, agency admin, billing operator.
13. EMS-specific denial benchmarks published publicly and updated quarterly — a number nobody in the cluster has dared publish openly.
14. Cortex appeal generator that drafts payer-specific appeal letters from the original ePCR + denial reason code.
15. Documented SLA + service-credit policy (match or beat ZOLL's 10% monthly credit).

## Head-turner features no one else has

1. Dispatch-to-Deposit Score: a single live number per call, predicting reimbursement before the ambulance arrives on scene.
2. Cortex Pre-Signature Compliance Lock: ePCR cannot be signed if Cortex predicts denial >X% — with a one-tap "show me what to fix."
3. Migration Whisperer "bring your bureau" mode: an agency uploads its EMS|MC or Digitech export and Adaptix back-fills 24 months of denial intelligence in hours.
4. Multi-clearinghouse self-healing: if Office Ally rejects, auto-retry through Waystar / Availity; published as the post-Change DR architecture.
5. Founder/Agency Command Center for billing: live AR aging, payer concentration, mileage modifier audit, signature compliance heatmap — none of the incumbents expose this at the executive layer.
6. Patient-friendly bill explainer driven by Cortex: every line item explained in plain English, drafted from the ePCR.
7. Open denial-rate benchmark: Adaptix publishes its first-pass acceptance and denial-overturn rates publicly and per-state per-payer. No incumbent does this.
8. Cortex Documentation Coach that learns per-crew patterns and coaches at handoff, not at billing — collapses the documentation-to-billing latency to near-zero.
9. Cortex Appeal Drafting tied to the payer's published rule + the original ePCR — appeal letters drafted in under 60 seconds with full citation.
10. SafetyNet-class fail-open clearinghouse routing, advertised with breach-era language: "Your billing does not stop because someone else's clearinghouse did."

---

## Status tier of this document

Tier 1 — DISCOVERED. This is sourced vendor intelligence. It is not deployed product, not an Adaptix runtime change. No CUSTOMER_READY claim is made.

Items marked UNKNOWN above are honest evidence gaps surfaced inside the time-box; closing them requires either vendor demos under NDA, paid analyst access (KLAS, Gartner), or direct customer references.
