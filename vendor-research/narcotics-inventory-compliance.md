# Vendor Research: Narcotics + Medications + Inventory + Compliance

Cluster scope: EMS-focused controlled-substance tracking, medication management, EMS supply inventory, and compliance automation (HIPAA / SOC 2 / DEA / state).

Author: Adaptix research pass, 2026-06-01
Sourcing discipline: every factual claim is either (a) cited to a publicly observable source, (b) marked INFERRED with rationale, or (c) flagged UNKNOWN. No pricing, no DEA inspection counts, no churn data, and no customer counts are fabricated. Where the public web does not expose a number, this document says so.

---

## 0. How to read this document

Each vendor block uses the same structure:

- **What they are** (CONFIRMED from vendor public site / public filings / press / news where citable)
- **Product line + modules** (CONFIRMED / INFERRED)
- **Feature inventory** (CONFIRMED / INFERRED / UNKNOWN per feature)
- **AI/Cortex equivalents** (CONFIRMED / INFERRED / UNKNOWN)
- **Pricing** (CONFIRMED only if vendor publishes; otherwise UNKNOWN — public-RFP excerpts noted where available)
- **Known weaknesses** (CONFIRMED only where a citable public complaint, lawsuit, FDA/DEA action, recall, or moderated review exists; otherwise INFERRED from category dynamics)
- **Recent moves** (CONFIRMED with date / press source; otherwise UNKNOWN)
- **API surface** (CONFIRMED from public docs; otherwise UNKNOWN)
- **Customer base** (CONFIRMED only where vendor publishes logos / case studies)
- **Their moat** (INFERRED with reasoning)
- **Adaptix kill strategy** (INFERRED — what Adaptix Cortex / Narcotics / Medications / Inventory / Compliance must do to displace them)

Where a source is cited as "vendor site" without URL, it means the marketing claim is on their homepage / product page as of public web access patterns; treat as CONFIRMED-as-marketing-claim, not CONFIRMED-as-operational-truth.

---

## 1. Operative IQ (Operative IQ Inventory + Operative IQ Narcotics)

### What they are
EMS-focused inventory + asset + narcotics tracking SaaS run by EMS Technology Solutions, LLC. Marketed specifically to fire and EMS agencies. (Source: operativeiq.com vendor site.)

### Product line + modules
- Inventory Management
- Asset Management
- Vehicle Checks
- Narcotics Tracking
- Maintenance / Work Orders
(Source: vendor site product nav.)

INFERRED: Narcotics module is bundled with or upsold from the inventory module; this is the standard pattern across the category.

### Feature inventory
- Barcode scanning for stock and narcotics: CONFIRMED (marketing claim).
- Vault scoping (multi-vault, multi-vehicle): INFERRED-likely (standard EMS pattern, vendor markets to multi-station agencies).
- Two-person witness on narcotic transactions: INFERRED-likely (DEA practical requirement; vendor markets DEA compliance).
- Chain of custody log: CONFIRMED (marketing claim of "complete chain of custody").
- DEA Form 41 / 106 / 222 automation: UNKNOWN. Vendor does not publicly enumerate DEA form generation by form number on its public marketing pages. Public RFP responses from agencies sometimes describe Operative IQ as producing "DEA-ready reports"; that language does not equal automated 41/106/222 submission.
- Lot / expiration tracking: CONFIRMED (marketing claim).
- Recall management: CONFIRMED (marketing claim).
- MAR (medication admin record): UNKNOWN — MAR is typically the ePCR's responsibility, not Operative IQ's.
- Interaction checker / pediatric dose calc: UNKNOWN — not in their public marketing surface; this is ePCR / clinical decision support territory.
- Audit immutability (hash chain / append-only): UNKNOWN — vendor markets "audit trail" not "cryptographic hash chain". INFERRED: standard SaaS append-only DB logging, not cryptographic immutability.
- State-specific controlled-substance reporting (state PDMP push for EMS where mandated): UNKNOWN per state.

### AI / predictive features
- Predictive discrepancy detection: UNKNOWN — not publicly marketed as ML-based.
- Expiration forecasting: INFERRED-likely (basic expiration-date reporting is table stakes; "AI forecasting" of expiration risk is not publicly claimed).
- Dose safety scoring: UNKNOWN — not their domain.

### Pricing
UNKNOWN. Operative IQ does not publish pricing publicly. Pricing surfaces only through direct quotes and occasional public-agency RFP awards. Per-vault / per-vehicle / per-agency split is UNKNOWN.

### Known weaknesses
- INFERRED: Operative IQ is inventory-first; the narcotics module rides on the inventory data model. Agencies that want a true clinical chain of custody (tied to MAR, tied to ePCR patient encounter, tied to provider credential check) must integrate with their ePCR separately.
- INFERRED: As an inventory-centric product, the narcotics surface is reported by EMS forum chatter (r/ems, EMS1 comment threads) as workable but not clinical-first. CONFIRMED public-source weakness count: 0 specific FDA/DEA actions located in this research pass — treat absence of evidence as absence of evidence, not as endorsement.

### Recent moves
UNKNOWN in this research pass. No press release noted within scope.

### API surface
- Public API: UNKNOWN. Vendor markets integrations with ePCR systems (e.g., ESO) but does not publish an open OpenAPI spec on its marketing site.

### Customer base
- Fire + EMS agencies in the U.S. Customer logos: UNKNOWN at named-agency precision without scraping their case-study page. CONFIRMED-as-marketing-claim: "thousands of agencies" type language appears on vendor site.

### Their moat
INFERRED:
- Long-running EMS-specific inventory dataset.
- Integration relationships with ESO, ImageTrend, Zoll.
- DEA-form familiarity as a sales advantage to non-tech-fluent buyers.
- Hardware-agnostic (barcode, no proprietary cabinet).

### Adaptix kill strategy
- Adaptix Narcotics + Adaptix ePCR + Adaptix Billing already share a single tenant boundary, single audit stream, and single Cortex compliance engine. Operative IQ cannot do that — it is not the ePCR and not the billing system.
- Adaptix can produce DEA Form 41 / 106 / 222 from the same data store that wrote the MAR, the ePCR patient encounter, and the controlled-substance vault transaction. This is the unification Operative IQ structurally cannot match.
- Cryptographic hash-chain audit on every narcotic transaction (Adaptix capability per project memory: "Cortex chain-of-custody immutability already real (hash chain shipped)" — this is a memory claim, not yet independently verified in this research file; treat as **INTERNAL CLAIM, requires verification before public marketing**).
- Pricing leverage: a solo or 1–3 truck agency cannot economically run Operative IQ + ePCR + billing + compliance as four separate vendors. Adaptix wins on consolidation.

---

## 2. Cooper Atlas (narcotic tracking)

### What they are
Cooper Atlas markets a controlled-substance / narcotic tracking platform aimed at EMS / fire / public-safety. Public web footprint is smaller than Operative IQ.

### Product + features
- Chain of custody, two-person witness, vault tracking: INFERRED-standard for the category.
- Specific feature enumeration: UNKNOWN in this research pass at a citable level.

### Pricing
UNKNOWN.

### Known weaknesses
- INFERRED: Niche / small-vendor risk — smaller engineering velocity, smaller integration network, narrower ePCR connectors.
- CONFIRMED-citable weakness public source count: 0 in this research pass.

### API surface
UNKNOWN.

### Adaptix kill strategy
- Same as Operative IQ: structural unification of Narcotics + ePCR + Billing + Compliance under one tenant + one audit stream + one Cortex compliance evidence engine.
- For small agencies, Adaptix bundles narcotics into the platform subscription at no separate per-vault SKU — Cooper Atlas as a standalone is a line-item that competes for budget against Adaptix's bundle.

---

## 3. Logis Narcotics

### What they are
Logis Solutions markets EMS narcotic tracking. Publicly visible product page focuses on chain-of-custody and DEA recordkeeping for EMS.

### Product + features
- Chain of custody, two-person sign-off, vault transfers, waste documentation: INFERRED-standard.
- Specific DEA form automation (41 / 106 / 222): UNKNOWN at a citable level.
- Mobile capture: INFERRED-likely.

### Pricing
UNKNOWN.

### Known weaknesses
- INFERRED: Narrow product surface — narcotic tracking only, not ePCR, not billing, not full inventory.
- CONFIRMED-citable public weakness: 0 in this pass.

### Adaptix kill strategy
- Unification argument again. Logis as a single-purpose product is structurally beatable by Adaptix's cross-module evidence chain (ePCR encounter -> medication admin -> narcotic vault transaction -> DEA form -> immutable audit).

---

## 4. TraknGo Narcotics (RFID-based)

### What they are
TraknGo markets an RFID-based controlled-substance tracking system for EMS. The differentiator is RFID hardware on each vial / package so vault state is reconciled by scanning rather than by manual count.

### Product + features
- RFID-tagged controlled substances: CONFIRMED-marketing.
- Automatic vault reconciliation by RFID read: CONFIRMED-marketing.
- Two-person witness workflow: INFERRED-standard.
- DEA-aligned recordkeeping: CONFIRMED-marketing-language.

### Pricing
UNKNOWN at named amount. INFERRED: higher than software-only competitors because hardware tags and readers are part of the unit economics.

### Known weaknesses
- Hardware dependency: each new SKU / lot must be tagged; vendor or distributor must keep tag SKU coverage current. INFERRED weakness.
- Tag failure modes (read miss, peeled tag, tag on metallic surface) are well-documented in the RFID literature for healthcare in general; INFERRED applicability to EMS vault context.
- Capital cost: readers in every ambulance, every vault, every station. INFERRED weakness for small / mid agencies.
- CONFIRMED-citable EMS-specific RFID failure incident: UNKNOWN in this research pass.

### Adaptix kill strategy
- Adaptix uses a software-first hash-chain approach (per internal claim) — no per-vial hardware tag required, no reader capital cost, works on the smartphone every medic already carries.
- For agencies that already have RFID infrastructure, Adaptix should expose an RFID ingest endpoint so a TraknGo-style scan event can be written into the Adaptix hash chain — neutralizing TraknGo as a moat by absorbing its data.

---

## 5. MedicLogix

### What they are
MedicLogix markets EMS medication and controlled-substance tracking. Product surface and customer list are not heavily public-web indexed.

### Product + features
- INFERRED-standard: vault, two-person, chain of custody, expiration, lot.
- Citable feature enumeration: UNKNOWN.

### Pricing
UNKNOWN.

### Known weaknesses
- INFERRED: small vendor, narrow surface, niche customer base.
- CONFIRMED-citable: 0 in this pass.

### Adaptix kill strategy
- Same unification argument; MedicLogix has no ePCR, no billing, no compliance evidence engine attached.

---

## 6. eMedsResponder (medication tracking)

### What they are
EMS medication tracking product. Limited public-web disclosure.

### Product + features
- INFERRED-standard medication tracking; specific feature claims UNKNOWN at citable depth.

### Pricing
UNKNOWN.

### Known weaknesses
- INFERRED: narrow product surface; small engineering team risk.

### Adaptix kill strategy
- Bundle.

---

## 7. VeriPak EMS (medication tracking via barcode)

### What they are
Barcode-based EMS medication tracking. Differentiator is barcode scan on every package.

### Product + features
- Package-level barcode scanning: CONFIRMED-marketing.
- Lot / expiration via barcode: INFERRED-likely.
- Vault and chain-of-custody depth: UNKNOWN at citable depth.

### Pricing
UNKNOWN.

### Known weaknesses
- INFERRED: barcode scan flow is workable but slower than RFID and slower than a properly designed software-only workflow; depends on consistent supplier barcode quality.

### Adaptix kill strategy
- Accept barcode input as one of several intake modes (manual entry, barcode, RFID, NFC); do not require a single scan modality.

---

## 8. ePCR-native narcotic modules (ESO / Zoll / ImageTrend)

### What they are
ESO, Zoll, and ImageTrend each offer (or partner for) a narcotic / controlled-substance tracking module bolted onto their ePCR or fire/EMS records suite.

### Feature inventory (per public marketing)
- Chain of custody, vault, two-person witness: CONFIRMED-marketing for each.
- DEA form automation: UNKNOWN per vendor at citable depth.
- Tight coupling to ePCR patient encounter: CONFIRMED for ESO and Zoll (since it is the same product family).
- AI / predictive: UNKNOWN at citable depth for narcotics specifically.

### Pricing
UNKNOWN per module; typically bundled into the larger ePCR contract.

### Known weaknesses
- ESO: per project memory `project_competitive_analysis.md` — "poor support / bugs". This is a memory note, treat as INTERNAL OBSERVATION, not as a CONFIRMED public source for purposes of marketing copy.
- Zoll: per project memory — "convoluted UX". INTERNAL OBSERVATION.
- ImageTrend: per project memory — "complex". INTERNAL OBSERVATION.
- Across all three: the narcotic module is a feature inside a much larger suite, which means it inherits the suite's release cadence and support queue. INFERRED.

### Adaptix kill strategy
- Adaptix already unifies ePCR + narcotics + billing + compliance in one tenant; the structural difference is not "we also have a narcotics tab" — it is "the narcotic transaction, the MAR row, the ePCR encounter, the billing claim, the compliance evidence, and the immutable audit row are the same record from the same write".
- Cortex evidence: a single query proves, for any DEA inspection, that the dose administered to a patient at time T matched the vault withdrawal at time T-x by the credentialed provider with the witness signature, the waste accounted for, the lot number, and the expiration. Suite competitors can produce this only by joining across separate modules — Adaptix produces it from one row.

---

## 9. Pyxis (Becton Dickinson / BD)

### What they are
Automated dispensing cabinets — a hospital-side controlled-substance and medication-dispensing system. Widely deployed in U.S. hospitals. (CONFIRMED — BD is a public company, NYSE: BDX, and Pyxis is its flagship medication management product line.)

### Product + features
- Automated dispensing cabinets with biometric + PIN access: CONFIRMED-marketing.
- Integration with hospital EHR (Epic, Cerner / Oracle Health, Meditech): CONFIRMED-marketing.
- Controlled-substance reconciliation, diversion detection analytics: CONFIRMED-marketing.
- AI / ML diversion detection: CONFIRMED — BD markets "HealthSight" / advanced analytics for diversion detection.

### Pricing
UNKNOWN per cabinet to the public; enterprise sale.

### Known weaknesses (for the EMS handoff problem specifically)
- Pyxis is hospital-internal. The handoff to an ambulance crew is a paper / verbal / ePCR-side problem. CONFIRMED structural gap: Pyxis does not natively follow a controlled substance into an ambulance unit-dose because the ambulance is not on the hospital cabinet network.
- The EMS / hospital handoff for restock of ambulance narcotics from a hospital pharmacy is operationally manual at most U.S. agencies. INFERRED-widespread (this is the standard practical reality and is discussed in NAEMT / NASEMSO / state pharmacy board guidance threads).

### Adaptix kill strategy
- Adaptix is not trying to replace Pyxis inside the hospital. Adaptix wins by being the bridge: when a hospital pharmacy restocks an ambulance, the Adaptix vault transaction records the BD-side transfer ID, the receiving credentialed medic, the witnessing pharmacist, and writes one immutable record. Hospitals get a clean handoff trail; agencies get DEA-ready evidence.

---

## 10. Omnicell

### What they are
Public company (NASDAQ: OMCL). Automated dispensing + medication management, similar category to Pyxis, hospital-focused. (CONFIRMED.)

### Product + features
- Same category as Pyxis: cabinets, diversion analytics, EHR integration.
- IV workflow, central pharmacy automation, 340B, specialty pharmacy: CONFIRMED-marketing-from-public-vendor-site.

### Known weaknesses for EMS bridge
- Same structural gap as Pyxis — hospital-bounded. The ambulance is not a node on the Omnicell network.

### Adaptix kill strategy
- Same bridge play as Pyxis. Adaptix exposes a hospital-pharmacy-to-ambulance handoff API; absorbs the dispense transaction; produces unified evidence.

---

## 11. IntelliGuard

### What they are
IntelliGuard markets RFID-based controlled-substance and medication tracking with a strong hospital + perioperative footprint and a stated EMS / ambulance bridge product line. (CONFIRMED-marketing.)

### Product + features
- RFID-tagged unit-dose tracking: CONFIRMED-marketing.
- Real-time inventory at the package level: CONFIRMED-marketing.
- Diversion analytics: CONFIRMED-marketing.
- Hospital + ambulance bridge: CONFIRMED-marketing.

### Pricing
UNKNOWN — enterprise sale.

### Known weaknesses
- Hardware dependency, same category as TraknGo. INFERRED weakness for small agencies.
- Capital cost / per-tag cost. INFERRED.

### Adaptix kill strategy
- Adaptix accepts IntelliGuard tag events as ingest; does not require the agency to rip and replace; absorbs the data into the Adaptix hash chain so the audit + DEA evidence still resolves in Adaptix even if the physical infrastructure is IntelliGuard.

---

## 12. Bound Tree Medical inventory tools / Boundtree EMS inventory portal

### What they are
Bound Tree Medical is a distributor. Its "portal" is a procurement / ordering / catalog tool for EMS agencies buying disposables, equipment, and medications from Bound Tree. (CONFIRMED.)

### Product + features
- Procurement portal: CONFIRMED.
- Order history: CONFIRMED.
- Catalog browsing, contract pricing: CONFIRMED-marketing.
- Inventory management beyond what-you-bought-from-us: UNKNOWN; distributor portals are not a substitute for a true inventory system.

### Known weaknesses
- It is a distributor portal, not an inventory system. The agency still needs an inventory system to track what is on the shelf, in the truck, and at the station. CONFIRMED-structural.

### Adaptix kill strategy
- Adaptix Inventory ingests Bound Tree purchase records via OrderXML / order email / API where exposed, eliminating manual receipt entry. Bound Tree becomes a data source, not a competitor.

---

## 13. McKesson Medical-Surgical inventory portal

### What they are
Distributor portal. McKesson is the largest medical-surgical distributor in the U.S. (CONFIRMED — NYSE: MCK.)

### Product + features
- Procurement portal, catalog, contract pricing, order history: CONFIRMED-marketing.
- Inventory management beyond their own orders: UNKNOWN / not their product.

### Known weaknesses
- Same structural point as Bound Tree: it is a distributor portal, not an inventory system.

### Adaptix kill strategy
- Same: ingest McKesson order data; do not compete with the distributor; replace the inventory-management gap McKesson does not fill.

---

## 14. eStock (EMS supply tracking)

### What they are
EMS supply tracking product. Public-web footprint is small.

### Product + features
- Supply tracking, restock alerts: INFERRED-standard.
- Citable feature claims: UNKNOWN at depth.

### Pricing
UNKNOWN.

### Adaptix kill strategy
- Bundle.

---

## 15. HEMs Drug Bag (HEMS-specific)

### What they are
Helicopter EMS (HEMS) drug-bag tracking, with a narrow but specific use case — HEMS programs that fly with a sealed drug bag and need rapid recon of the bag contents on landing.

### Product + features
- Sealed-bag tracking, swap-out workflow, lot / expiration on each contents element: INFERRED-standard for HEMS bag use case.
- Specific HEMS workflow: CONFIRMED differentiator vs ground-EMS-focused vendors.

### Known weaknesses
- Narrow market: HEMS programs only. INFERRED.

### Adaptix kill strategy
- Adaptix Air-Service module already exists in the platform (per repo list: `Adaptix-Air-Service`, `Adaptix-Air-Service-Pilot`). Adding a sealed-bag-workflow type to Adaptix Inventory + Adaptix Narcotics covers HEMS as a variant, not as a separate product.

---

## 16. Vanta (compliance — SOC 2 / HIPAA automation)

### What they are
Compliance automation SaaS — SOC 2, ISO 27001, HIPAA, GDPR, PCI, and more. CONFIRMED — well-known venture-funded compliance automation vendor.

### Product + features
- Continuous control monitoring across cloud (AWS, GCP, Azure), identity (Okta, Google), code (GitHub), endpoint (MDM): CONFIRMED-marketing.
- Evidence collection automation: CONFIRMED-marketing.
- Auditor-ready reports: CONFIRMED-marketing.
- AI policy generation, AI risk assessment: CONFIRMED-marketing (Vanta AI).

### Pricing
- CONFIRMED-public: Vanta does not publish a price list. Public commentary in the early-stage founder community ranges in the low-to-mid five figures USD per year for early-stage, scaling up. The specific number for any given agency is UNKNOWN.

### Known weaknesses (Adaptix-relevant)
- Vanta is a horizontal compliance product, not EMS-specific. DEA, state EMS controlled-substance reporting, HIPAA-for-EMS-specifically, state PDMP integration: not in Vanta's scope. CONFIRMED-structural.
- Vanta cost for a 1–10 person EMS agency is INFERRED-prohibitive relative to agency operating margin.

### Adaptix kill strategy
- Adaptix Compliance must produce SOC-2-style evidence automatically as a side effect of running the platform — not as a separate vendor purchase.
- Adaptix bundles HIPAA + DEA + state EMS compliance evidence into the platform subscription; Vanta cannot do DEA / EMS state compliance at all.
- For agencies that already use Vanta at the corporate parent level, Adaptix exposes a Vanta-compatible evidence export so the SOC 2 audit pulls Adaptix evidence directly.

---

## 17. Drata

### What they are
Compliance automation SaaS, direct Vanta competitor. CONFIRMED.

### Product + features
- Same category as Vanta: continuous control monitoring, evidence collection, auditor portal.

### Pricing
- UNKNOWN published. Same opacity as Vanta.

### Known weaknesses
- Same horizontal-not-EMS structural gap. CONFIRMED-structural.

### Adaptix kill strategy
- Same as Vanta — bundle, export.

---

## 18. OneTrust

### What they are
Compliance + privacy + GRC platform. CONFIRMED — late-stage / private-with-public-comparables vendor.

### Product + features
- Privacy management, consent, DSAR (data-subject access requests), third-party risk, GRC, ESG: CONFIRMED-marketing.

### Pricing
- UNKNOWN published. Enterprise sale.

### Known weaknesses
- Enterprise-priced; HIPAA + DEA + EMS-specific not the product focus. INFERRED structural mismatch for small / mid EMS agencies.

### Adaptix kill strategy
- Not the same buyer; OneTrust is bought by enterprise compliance / privacy teams. Adaptix does not compete here for the OneTrust seat — Adaptix only competes for the EMS-compliance portion of the budget.

---

## 19. Drummond Group (HIPAA / ONC certification)

### What they are
Drummond is an ONC-Authorized Certification Body (ONC-ACB) — they certify EHR / health-IT products against ONC criteria, including HIPAA-adjacent privacy/security criteria and EHR interoperability criteria. CONFIRMED.

### Product + features
- Certification services, not a SaaS compliance monitoring product.

### Pricing
- UNKNOWN published. Certification fees per product.

### Known weaknesses for Adaptix-competition framing
- Drummond is not a competitor; Drummond is a certification body Adaptix may need to engage if Adaptix pursues ONC certification for any module that meets EHR criteria.

### Adaptix relationship
- INFERRED-strategic: if Adaptix pursues ONC certification on the ePCR / clinical / interoperability surface, Drummond is a likely ONC-ACB engagement.

---

## 20. Tugboat Logic

### What they are
Compliance automation, acquired by OneTrust in 2022. CONFIRMED-news (OneTrust press release, 2022).

### Product + features
- Now part of OneTrust's compliance / GRC stack. CONFIRMED.

### Adaptix kill strategy
- Roll up into OneTrust analysis.

---

## 21. ComplyAssistant (HIPAA)

### What they are
HIPAA / GRC compliance management product oriented at healthcare. CONFIRMED-marketing.

### Product + features
- HIPAA risk assessment, policy / procedure management, vendor risk, incident management: CONFIRMED-marketing.

### Pricing
- UNKNOWN published.

### Known weaknesses
- Healthcare-broad, not EMS-specific. INFERRED.

### Adaptix kill strategy
- Bundle EMS-specific HIPAA + DEA + state EMS compliance under Adaptix; do not try to compete with ComplyAssistant in non-EMS healthcare verticals.

---

## 22. HITRUST CSF assessors

### What they are
HITRUST is a security / compliance framework + certification ecosystem. Assessors are external firms credentialed to assess against the HITRUST CSF. CONFIRMED.

### Adaptix relationship
- If a hospital or large agency customer requires HITRUST certification of Adaptix, Adaptix engages a HITRUST CSF assessor. Adaptix does not compete with HITRUST; Adaptix may pursue HITRUST CSF certification as a sales enabler for hospital deals. INFERRED-strategic.

---

## 23. HealthIT.gov compliance tools

### What they are
HealthIT.gov publishes guidance, security risk assessment tools (SRA Tool), and reference material. It is U.S. government guidance, not a vendor. CONFIRMED.

### Adaptix relationship
- Adaptix Compliance Evidence Engine should map to HealthIT.gov SRA categories where the agency uses the SRA Tool for HIPAA risk assessment. INFERRED-strategic.

---

## 24. State-level compliance tools (e.g., WI DHS 110 e-submission portals)

### What they are
State EMS authorities (Wisconsin DHS 110 governs Wisconsin EMS personnel + service licensing; NEMSIS-aligned state submission portals exist in most states). CONFIRMED-regulatory.

### Adaptix relationship
- Adaptix must speak NEMSIS v3.5 / 3.5.1 to state portals (Adaptix already has `Adaptix-NEMSIS-Service` in the repo list). Adaptix Compliance Evidence Engine produces the WI DHS 110 evidence as a side effect of running ePCR + Crew + Training + Narcotics + Inventory. INFERRED-strategic.

---

## Cross-vendor synthesis

### Category map

| Category | Vendors | Adaptix posture |
|---|---|---|
| EMS-narrow narcotic SaaS | Operative IQ, Cooper Atlas, Logis, TraknGo, MedicLogix, eMedsResponder, VeriPak, HEMs Drug Bag | Displace via bundle + unified hash-chain audit + cross-module evidence (ePCR + billing + DEA from one row). |
| ePCR-native narcotic modules | ESO, Zoll, ImageTrend | Displace by being the only platform where narcotic transaction, MAR, ePCR encounter, billing claim, and compliance evidence are the same record. |
| Hospital dispensing systems | Pyxis (BD), Omnicell, IntelliGuard | Do not displace; bridge. Be the EMS-side endpoint of their dispense events. |
| Distributor portals | Bound Tree, McKesson | Do not displace; ingest. |
| Horizontal compliance automation | Vanta, Drata, OneTrust, Tugboat (OneTrust), ComplyAssistant | Do not directly compete; bundle EMS-specific compliance evidence into Adaptix; export to Vanta / Drata where corporate parent requires SOC 2. |
| Certification bodies / frameworks | Drummond, HITRUST | Engage as needed for ONC / HITRUST certification of Adaptix itself. |
| Government guidance | HealthIT.gov SRA, state portals (WI DHS 110, NEMSIS state submission) | Map Adaptix Compliance Evidence Engine to these. |

### Operative IQ market share for narcotics in EMS
UNKNOWN at a citable share-of-EMS-agencies number in this research pass. INFERRED: Operative IQ is one of the most visible EMS-specific inventory + narcotic SaaS products by web presence; it is plausibly a top-3 EMS-specific narcotic-tracking SaaS by agency count, but a hard number requires industry-survey or RFP-aggregator data that is not in this pass.

### Pyxis / Omnicell handoff problem to ambulances
CONFIRMED-structural. Hospital dispensing cabinets are network-bounded to the hospital. The transfer of a controlled substance from a hospital pharmacy to an ambulance unit is operationally a paper / verbal / scanned-form event in most agencies. This is a real, addressable problem that no incumbent EMS-narcotic vendor solves cleanly because they do not have the hospital-side relationship, and no hospital cabinet vendor solves it because they do not have the ambulance-side relationship. Adaptix is one of the few platforms positioned to be the bridge — the agency runs Adaptix, the hospital can use an Adaptix-supplied receipt endpoint, and the dispense / receive event is reconciled on both sides without either side rebuilding their core system.

### State PDMP mandates that affect EMS
- PDMP = Prescription Drug Monitoring Program. State-run. PDMP enrollment / query mandates have historically been prescriber-focused, but several states have expanded queries to dispensers and to EMS in defined scenarios. CONFIRMED-regulatory-trend (multiple state PDMP statute amendments across 2018–2025; the per-state list as of 2026 is UNKNOWN in this research pass at a citable enumeration level).
- INFERRED: Adaptix should plan a PDMP integration layer that can ingest a state PDMP query for an EMS controlled-substance administration where state law requires it, and produce the documentation needed for state EMS audit. This is not a feature any EMS-narcotic incumbent in the list above publicly markets at depth.

### RFID hardware reliance vs hash-chain software approach
- RFID (TraknGo, IntelliGuard) requires hardware tags + readers per package + per vault + per ambulance. Capital + per-SKU tagging cost. CONFIRMED-structural for the category.
- Hash-chain software approach (Adaptix internal claim): every controlled-substance transaction is hashed, the prior-hash is referenced, and any tamper is detectable. No per-package hardware required. The trade-off is that the software approach does not auto-detect a missing physical vial without a human read (manual count, barcode scan, or future RFID ingest).
- Adaptix posture: accept all three intake modes (manual, barcode, RFID) and rely on the hash chain for legal evidentiary integrity. This is the only way to serve solo / 1-truck agencies (who cannot afford RFID) and large agencies (who already have RFID) with the same product.

### Vanta / Drata pricing for solo agencies
- CONFIRMED-structural: Vanta and Drata do not publish prices and are widely understood (per public founder-community commentary) to start in the low five figures USD/year, scaling up. INFERRED: this is structurally unaffordable for a solo EMS agency operating on thin margins, which is a real Adaptix opportunity.
- Adaptix posture: bundle SOC-2-style evidence collection + HIPAA evidence + DEA evidence + state EMS compliance evidence into the Adaptix subscription so a solo agency does not have to buy Vanta + ComplyAssistant + a narcotic vendor + an inventory vendor + an ePCR + a billing system as six separate line items.

---

## What this research file does NOT prove

- Does NOT prove pricing for any of these vendors at a named-dollar amount.
- Does NOT prove DEA inspection history for any of these vendors at a named-incident level.
- Does NOT prove FDA recall intersections at a named-event level.
- Does NOT prove customer counts at named-agency precision.
- Does NOT prove Adaptix's internal claim of a shipped hash-chain on narcotics — that claim comes from project memory and must be independently verified against the Adaptix-Narcotics-Service repo + the live database schema + an actual end-to-end test before being used in any external marketing copy.

## Next required action

- Verify the Adaptix-Narcotics-Service hash-chain claim against live code and database schema; produce a CONFIRMED-or-NOT artifact in the Narcotics repo so this vendor file's Adaptix kill strategy can move from INFERRED to CONFIRMED.
- Run a per-state PDMP statute pass for the top 10 Adaptix target states; map each state's EMS-applicability and required query trigger to the Adaptix Cortex compliance engine.
- Engage a HITRUST CSF assessor scoping conversation; engage Drummond on ONC scoping conversation; both decisions are strategic, not engineering.
- Build a Bound Tree / McKesson order-ingest endpoint in Adaptix Inventory.
- Build an IntelliGuard / TraknGo / Pyxis / Omnicell dispense-event ingest endpoint in Adaptix Narcotics.

---

## Summary (under 400 words)

The EMS narcotics + medications + inventory + compliance vendor landscape splits into seven categories: EMS-narrow narcotic SaaS (Operative IQ, Cooper Atlas, Logis, TraknGo, MedicLogix, eMedsResponder, VeriPak, HEMs Drug Bag); ePCR-bundled narcotic modules (ESO, Zoll, ImageTrend); hospital dispensing systems (Pyxis / BD, Omnicell, IntelliGuard); distributor portals (Bound Tree, McKesson, eStock); horizontal compliance automation (Vanta, Drata, OneTrust, Tugboat-into-OneTrust, ComplyAssistant); certification bodies and frameworks (Drummond, HITRUST); and government guidance (HealthIT.gov SRA, state portals such as WI DHS 110). None of these vendors unifies the narcotic transaction, the medication administration record, the ePCR patient encounter, the billing claim, and the compliance evidence into a single auditable record under a single tenant boundary. That is the structural opening for Adaptix. Operative IQ leads the EMS-narrow narcotic SaaS category by web presence but is inventory-first and ePCR-blind. Pyxis and Omnicell own the hospital cabinet but do not follow controlled substances into ambulances — a long-standing handoff gap Adaptix can bridge. RFID-based vendors (TraknGo, IntelliGuard) carry hardware capital cost that excludes solo and small agencies, which is exactly the Adaptix economic wedge. Horizontal compliance automation (Vanta, Drata, OneTrust) is structurally not EMS-specific and economically out of reach for solo agencies, which means Adaptix can bundle SOC-2-style evidence collection alongside HIPAA + DEA + state EMS evidence inside the agency's existing Adaptix subscription. The kill strategy is unification, not feature parity: the agency does not buy Adaptix because it has a narcotic tab; the agency buys Adaptix because the narcotic transaction, the medication administration record, the patient encounter, the billing claim, the compliance evidence, and the immutable audit row are the same record written once. Pricing for every vendor in this list except Vanta-range-rumor and Drummond-per-certification is UNKNOWN at a citable level; this file deliberately does not fabricate numbers. Adaptix's internal hash-chain claim on narcotics is documented as a project memory note and is treated in this file as an internal claim requiring verification before external marketing. Next required action is verifying that hash-chain claim against the live Adaptix-Narcotics-Service code and database, then standing up ingest endpoints for hospital dispensing systems and distributor portals so Adaptix absorbs incumbent data instead of fighting it.
