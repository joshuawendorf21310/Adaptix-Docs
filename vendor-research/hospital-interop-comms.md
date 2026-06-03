# Hospital Interop + Pre-Arrival Comms + HIE — Vendor Research

Cluster: Adaptix-Hospital-Service, Adaptix-HL7-Service, Adaptix-Communications-Service
Date: 2026-06-01
Author: Adaptix vendor-research sweep
Honesty rule: every claim has an inline source. Where evidence is absent, the row says UNKNOWN. No fabrication.

---

## Cross-vendor summary (under 400 words)

The pre-arrival + hospital interop market splits into four tiers that Adaptix must beat as one platform:

1. **EMS-to-ED comms apps (Pulsara, TigerConnect/Twiage, General Devices CAREpoint).** Pulsara is the category leader: ~$46.6M raised, Bozeman-based, FirstNet-listed since 2019, and gives the Prehospital Alerting Package away free on FirstNet, which is a real pricing moat. TigerConnect bought Twiage on 2024-11-19 and shipped TigerConnect Pre-Hospital + Transfer at HIMSS 25, weaponizing Twiage inside a hospital messaging incumbent. General Devices CAREpoint 3 dominates legacy ED radio consoles with mobile + dashboard overlays. These are all comms apps - none own dispatch, billing, or full ePCR.

2. **Cardiac/device transmission (Stryker LIFENET, ZOLL X Series + Care Exchange).** LIFENET reached ~55% of PCI-capable U.S. hospitals as of the Physio-Control era (now Stryker after the $1.3B 2016 acquisition), giving Stryker the entrenched 12-lead STEMI rail. ZOLL Care Exchange is the bidirectional ePCR-to-EMR pipe built around the X Series. Both are device-tethered.

3. **EHR interop + TEFCA QHINs.** Epic owns 43.7% of acute care (Becker's 2025), 1,000+ Epic hospitals are live on TEFCA via Epic Nexus QHIN, and Particle Health's antitrust suit (filed Sep 23, 2024, partially survived dismissal Sept 2025) confirms Epic uses control of the network to throttle competing aggregators. Oracle Health's VA rollout has 800+ major performance incidents, 58% of users say safety got worse - their interop story is fragile. Meditech, Veradigm, athenahealth all have FHIR R4 + SMART on FHIR but no EMS-native pre-arrival workflows.

4. **HIE/FHIR aggregators + telemedicine.** Metriport (YC, open-source, $0.20 start, free-forever tier) and Health Gorilla (only dual QHIN+QHIO) are the modern aggregator path. Particle is encumbered by litigation. 11 QHINs are live as of 2025 covering 71,000+ sites. Avel eCare and StationMD provide tele-EM consults but are bolt-ons, not platforms.

**Adaptix kill thesis:** No single competitor delivers dispatch -> pre-arrival -> ePCR -> hospital handoff -> billing -> reimbursement in one tenant-isolated platform with Cortex AI doing acuity/STEMI/stroke prediction at the moment of CAD assignment. The competitors are point tools; Adaptix is the operating layer.

---

## Tier 1 — EMS-to-ED Communications

### Pulsara

| Field | Value |
|---|---|
| HQ / founded | Bozeman, MT; founded 2012 (Crunchbase via search) |
| Funding | $46.6M total raised; latest round Unattributed-V $6.75M on 2023-06-07; M&A with RetroComm Innovations 2024-04-01 (CB Insights/PitchBook via search) |
| Pricing model | Variable by ED volume + facility factors; **free to EMS + ED on FirstNet** (Pulsara FAQ + FirstNet data sheet) |
| Features | Mobile patient channel (audio, video, IM, data, images, ECG/photos/license embeds); 30% avg treatment-time reduction claimed by Pulsara; FHIR + HL7 + CCD + X12; EHR integration shipping; ZOLL emsCharts ePCR integration live (ems1.com press) |
| Pre-arrival | Single patient channel connects pre-hospital, intra-facility, inter-facility teams; FirstNet-listed since Feb 2019 |
| Vital streaming | Not real-time streaming - sends ECG/photos/data via channel posts (Pulsara docs) |
| Divert / bed status | UNKNOWN - not surfaced in search |
| Customer base | Florida DOH state-wide deployment; North Texas Regional EMS; partner with First Due CAD |
| Moat | FirstNet free tier; brand recognition in EMS; state-DOH purchases |
| Weaknesses | Not an ePCR; requires hospital + EMS both to adopt; no dispatch ownership; no billing |

### Twiage (now TigerConnect Pre-Hospital)

| Field | Value |
|---|---|
| Status | Acquired by TigerConnect 2024-11-19 (BusinessWire/Built In LA). Standalone Twiage brand sunsetting. |
| Product | TigerConnect Pre-Hospital + TigerConnect Transfer announced HIMSS 25 (Feb 2025), GA + early access (hitconsultant.net, ManilaTimes wire) |
| Features | Mobile EMS capture of symptoms, vitals, interventions, EKGs, secured photos/video, ETA; hospital dashboard + mobile app for incoming patients (TigerConnect press) |
| Moat | TigerConnect's existing hospital messaging install base (large hospital footprint pre-acquisition) - distribution muscle |
| Pricing | UNKNOWN - not disclosed publicly |
| Weakness | EMS adoption is new (acquisition only 18 months old); TigerConnect's roots are hospital-internal secure messaging, not 911 ops |

### General Devices CAREpoint 3

| Field | Value |
|---|---|
| Product | CAREpoint 3 ED workstation + CAREpoint Go (mobile) + Remote Monitor (web) + D-Scribe X Intelligence Hub (general-devices.com) |
| Features | Pre-arrival acknowledge button, ETA tracking, 12-lead receipt, EMS Caller ID, online medical control, configurable telehealth |
| Niche | Replaces legacy hospital radio consoles - dominant in ED radio-room workflow |
| Pricing | UNKNOWN |
| Weakness | Hospital-centric; weak EMS-side app footprint; not a platform |

---

## Tier 2 — Device-Tethered Transmission

### Stryker LIFENET (formerly Physio-Control)

| Field | Value |
|---|---|
| Ownership | Stryker acquired Physio-Control for $1.3B in 2016 (Fierce Biotech) |
| Market share | ~55% of PCI-capable U.S. hospitals used LIFENET (Physio-Control era statistic, DAIC) - latest current figure UNKNOWN |
| Features | Cloud platform for STEMI/stroke alerts; multi-vendor 12-lead receipt; LIFEPAK 15 + LIFEPAK 12 wireless gateway; CODE-STAT + ePCR integration (stryker.com) |
| Strength | Embedded with the LIFEPAK monitor/defibrillator install base - device tether is the moat |
| Weakness | Device-locked - if an agency standardizes on ZOLL X Series, LIFENET fades; no dispatch, no billing, no ePCR |

### ZOLL Care Exchange + X Series

| Field | Value |
|---|---|
| Product | ZOLL Care Exchange (bidirectional ePCR<->EMR pipe) + X Series monitor/defibrillator + RescueNet Live + emsCharts (zoll.com, zolldata.com) |
| Features | Wi-Fi + Bluetooth + USB cellular on X Series; one-button hospital transmit; ePCR-to-EMR auto-standardization; HL7-implemented since 2014 |
| Strength | ZOLL owns the largest ePCR + the device + the data integration platform - the closest vertical stack any competitor has |
| Weakness | ZOLL ecosystem lock-in; pricing UNKNOWN but historically premium; no native AI pre-arrival prediction surface |

---

## Tier 3 — EHR Interop Giants

### Epic Systems

| Field | Value |
|---|---|
| Market share | 43.7% of acute-care hospitals 2025, up from 42.3% in 2024 (Beckers Hospital Review); +77 hospitals in 2025 (Fierce Healthcare) |
| TEFCA / QHIN | Epic Nexus is one of 11 designated QHINs (CommonWell Alliance press 2025-11). 1,000+ Epic hospitals + 22,000 clinics live on TEFCA; 41% of Epic customers live, 43% implementing (Healthcare Dive). 316M care gaps closed via Nexus in last year. |
| Pre-arrival app support | Epic published "ED Pre-Arrival EMS Workflows" playbooks via Vendor Services (Topflightapps technical guide 2026) |
| App marketplace | Epic Showroom (formerly App Orchard). Initial 30% revenue share was reduced after startup pushback. App Orchard -> Vendor Services transition reduced developer support (Health API Guy / Substack analysis). Earlier integrators grandfathered with better support. |
| Pricing | Epic USCDI on FHIR is free for provider-facing apps; SMART on FHIR specs free (Topflightapps, Lifebit) |
| Weakness | Particle v. Epic antitrust suit filed Sep 23, 2024 SDNY - judge partially denied Epic motion to dismiss Sept 2025; case in discovery (Healthcare IT News, fiercehealthcare). Allegation: Epic blocks aggregators from "payer platform" market by denying "treatment" purpose-of-use. |
| Moat | EHR install base + Nexus QHIN + Care Everywhere network density |

### Oracle Health (Cerner)

| Field | Value |
|---|---|
| Market share | 21.9% of acute-care hospitals 2025 (Beckers) |
| Acquisition cost | Oracle bought Cerner for $28.3B in 2022 |
| TEFCA / QHIN | Oracle Health Information Network is a designated QHIN (Healthcare Dive) |
| New product | Oracle's AI-powered next-gen EHR received regulatory approval for ambulatory in 2025; acute coming (Fierce Healthcare, Advisory.com) |
| Weaknesses (documented) | 800+ major performance incidents at VA since launch (IG report Sept 2024). March 2025 outage hit 6 VA medical centers + 26 community clinics. GAO March 2025: only 13% of VA staff say it makes VA more efficient, 58% say it increases patient safety risk. Critical notes vanishing, prescriptions logged incorrectly, interface freezes (WebProNews). VA paused rollout 3 years; resumed April 2026 in Michigan |
| Bridge / Velos | UNKNOWN - search did not surface these specific product names |
| Moat | VA + DoD contracts; Cerner installed base |

### Veradigm (formerly Allscripts)

| Field | Value |
|---|---|
| Standards | HL7, X12, FHIR R4 (DSTU2 deprecated 2025-06-01), SMART on FHIR, REST APIs, eChart Integration (Veradigm dev portal) |
| Network | Carequality framework participant; TEFCA-aligned via Veradigm Connect |
| Weakness | Lost market share - not in top-5 list with notable presence in 2025 acute share. EMS-specific workflows UNKNOWN |

### MEDITECH Expanse

| Field | Value |
|---|---|
| Market share | 14.7% of acute-care hospitals 2025 (Beckers) |
| Standards | HL7 v2.x (MLLP) + FHIR STU3/R4/STU6/STU7, SMART on FHIR (6b.health technical guide) |
| Network | Traverse Exchange - 60+ orgs / 200+ facilities live by end of 2024; goal of all eligible Expanse customers by end of 2025 (Meditech blog) |
| Weakness | Smaller QHIN footprint than Epic Nexus; EMS pre-arrival integration UNKNOWN |

### athenahealth

| Field | Value |
|---|---|
| API surface | 800+ API endpoints; FHIR R4 multi-version (athenahealth dev portal) |
| Weakness | Ambulatory-first; weak hospital + ED pre-arrival footprint; ED-specific integration details UNKNOWN |
| Pricing | UNKNOWN publicly |

---

## Tier 4 — HIE / FHIR Aggregators

### Designated QHINs as of 2025 (11 total)

CommonWell Health Alliance, eClinicalWorks, eHealth Exchange, Epic Nexus, Health Gorilla, Kno2, KONZA National Network, MedAllies, Netsmart, Oracle Health Information Network, Surescripts. 71,000+ sites participating (Legal HIE, ehealthexchange.org, HCI Innovation Group, Sequoia Project).

CommonWell completed technical migration to ELLKAY in Nov 2025 for TEFCA + CMS Interoperability Framework alignment (BusinessWire). Carequality aligning strategy with TEFCA (Healthcare IT News).

### Metriport

| Field | Value |
|---|---|
| Model | Open-source (GitHub metriport/metriport), Y Combinator, FHIR-native universal API (metriport.com) |
| Pricing | Sliding scale by patient volume; **starts at $0.20**; **free-forever tier** (Invene.com, SaaSWorthy) |
| Networks | CommonWell, Carequality, eHealth Exchange |
| Formats | FHIR R4, C-CDA, PDF |
| Strength | Cheapest credible HIE access; open source; developer-friendly |
| Weakness | Not a QHIN itself - rides existing networks; no native EMS workflows |

### Particle Health

| Field | Value |
|---|---|
| Coverage | 90% of patients nationally; 250M unique patients claimed (Particle docs) |
| API | RESTful FHIR R4 + C-CDA, bidirectional |
| Pricing | Not public; per-rep negotiation (Particle reference docs) |
| Legal status | Antitrust suit against Epic filed Sep 23, 2024 SDNY; partial dismissal denied Sept 2025; discovery phase (Healthcare IT News, fiercehealthcare, healthapiguy Substack) |
| Risk | Litigation distraction + Epic blocking network access caused Spring 2024 outage in payer use case - operational risk for downstream callers |

### 1upHealth

| Field | Value |
|---|---|
| Architecture | FHIR-first lakehouse platform (1up.health) |
| Customers | 75+ regulated health plans for CMS compliance |
| Strength | Payer-side dominance; payer-to-payer exchange + provider directory products |
| Weakness | Payer-leaning; not EMS pre-arrival oriented |
| Pricing | Not public - "structured creatively" (1up.health) |

### Health Gorilla

| Field | Value |
|---|---|
| Status | Only dual QHIN + QHIO (Healthcare IT News); also TEFCA + CA DxF framework |
| API | FHIR + HL7 V3 XCA (cross-QHIN); Patient 360 |
| Pricing | Patient 360 base + additional QHIO connection fees; specifics UNKNOWN |
| Strength | Native QHIN status; California DxF moat |
| Weakness | No EMS pre-arrival workflows |

### CommonWell / Carequality / eHealth Exchange (frameworks)

CommonWell became QHIN in 2024 (Carequality + TEFCA-connected). eHealth Exchange is the oldest network, federal-agency heavy (VA, DoD). Both are infrastructure - not products.

---

## Tier 5 — Triage AI + Telemedicine Pre-Arrival

### TriageGO (Radiometer / Beyond Lucid)

| Field | Value |
|---|---|
| Product | AI + NLP conversational triage with severity scoring and clinician documentation (Radiometer America product page) |
| Customer | ED/EMS triage at point of intake |
| Weakness | Triage point tool; not platform; UNKNOWN pricing |

### Beyond Lucid Technologies (MEDIVIEW)

| Field | Value |
|---|---|
| Product | MEDIVIEW Fire/EMS ePCR + community paramedicine + POLST specialty database (beyondlucid.com) |
| Network | Selected MedAllies as QHIN partner (JEMS press) |
| Customer | Alameda County EMS community paramedicine |
| Position | Niche ePCR competitor; not pre-arrival specialist |

### Beam Healthcare

| Field | Value |
|---|---|
| Product | Tele-hospitalist + tele-case-management for critical access hospitals (beam.healthcare) |
| ED features | Virtual ED coverage, board monitoring, real-time provider consult |
| Weakness | Hospital-side telemedicine, not EMS pre-arrival per se; pricing UNKNOWN |

### StationMD

| Field | Value |
|---|---|
| Product | 24/7 urgent care + behavioral health telemedicine for EMS (stationmd.com) |
| Niche | IDD population especially - bypass unnecessary ED transports |
| Pricing | UNKNOWN |

### Avel eCare (Sioux Falls, SD)

| Field | Value |
|---|---|
| History | Nation's first virtual hospital (1993) - Avera spin-out (avelecare.com) |
| Product | Multipoint EMS Collaboration Model - virtual ED physicians from scene to hospital arrival |
| Footprint | Live in SD, NE, MN, KS (KS added Jan 2025) |
| Strength | Most-mature EMS telemedicine; documented rural impact (Wagner Community Memorial Hospital case) |
| Weakness | Service business, not a platform; per-consult/per-agency pricing UNKNOWN |

### Tablet Command (acquired by Genasys 2024)

| Field | Value |
|---|---|
| Product | Mobile incident command - 43,000+ users, 1,300+ public safety agencies, 210,000+ incidents managed (tabletcommand.com, Genasys partner page) |
| 2025 launch | Real-time incident sharing at FDIC International (FireFighter Nation) |
| Note: prompt cited "Genesis Industries" - actual parent is **Genasys** (NASDAQ: GNSS), not Genesis Industries. |
| Position | Incident command for fire suppression - expanding into law enforcement and EMS but not a hospital interop play |

### RapidAI

| Field | Value |
|---|---|
| Product | Clinical AI platform for ischemic stroke, LVO detection, perfusion (rapidai.com) |
| Market | Stroke AI market $0.32B 2025 -> $1.60B 2030 at 38.4% CAGR (MarketsAndMarkets); prehospital stroke AI $410M in 2024 at 18.7% CAGR (Dataintelo) |
| Strength | FDA-cleared LVO + perfusion; hospital adoption widespread |
| Weakness | Imaging-based - requires CT - so not truly pre-arrival; multiple regulatory clearances slow updates |

### Viz.ai (adjacent)

| Field | Value |
|---|---|
| Footprint | 1,700+ hospitals (viz.ai) |
| Strength | Auto-notifies care team on LVO/perfusion mismatch; teleneurologist on camera before ED arrival in documented cases (Frontiers in Stroke 2024 VALIDATE study) |
| Weakness | CT-tethered same as RapidAI |

---

## Adaptix Kill Strategy by Surface

### Hospital-Service kill strategy

1. **Open HL7 v2 ADT + MLLP + FHIR R4 on launch** - no Epic Showroom gatekeeping, no per-tenant negotiated pricing. Adaptix-HL7-Service already ships these per prior session memory (`platform_operational_services.md`).
2. **MPI federation through Adaptix-Patient-Identity-Service** (already shipped per session memory) - cross-tenant patient resolution with consent enforcement.
3. **Divert + bed-status intake** - Adaptix-Hospital-Service exposes divert/bed state via the same gateway pattern as other services; Pulsara doesn't own this surface (UNKNOWN in their docs).
4. **Transfer center workflow** built into Adaptix vs. dependent on Epic ATC + manual phone.

### HL7-Service kill strategy

1. **No middleman** - direct MLLP listener + FHIR R4 publisher; agencies don't need a Rhapsody/Mirth license or a Health Gorilla bridge.
2. **TEFCA-ready posture** - Adaptix joins as QHIN participant (via existing QHIN, not standalone designation - too early stage) for nationwide query while building toward future direct designation.

### Communications-Service kill strategy

1. **Pre-arrival channel built into the platform** - replaces Pulsara as a separate app. CAD assignment automatically opens the patient channel.
2. **Cortex pre-arrival acuity** - at the moment of CAD assignment, Cortex scores STEMI / stroke / sepsis probability from dispatch complaint + en-route vitals + history (from Patient-Identity-Service). Pulsara has no AI layer; LIFENET requires the device; Viz.ai/RapidAI require CT (in-hospital).
3. **Hospital divert intelligence** - publish divert in the same channel that CAD reads; route around diverted EDs automatically.

### Pricing kill

Pulsara is free on FirstNet but limited to FirstNet subscribers. Adaptix charges no per-agency, per-hospital, per-channel comms fee at all - bundled into the platform subscription that already covers dispatch + ePCR + billing. The competitor stack today costs: Pulsara (variable hospital tier) + LIFENET (device-tied) + Epic App Orchard fees + Particle/Health Gorilla aggregation + an ePCR + a CAD + a billing system. Adaptix is one number.

### Where Adaptix is NOT yet competitive (honest)

- **TEFCA QHIN status** - Adaptix is not a designated QHIN. Must ride an existing QHIN (Health Gorilla, Metriport, CommonWell) until eligible. CODE_EXISTS for client-side participation; not RUNTIME_VERIFIED at QHIN level.
- **Stroke AI clinical clearance** - RapidAI/Viz.ai have FDA clearance for LVO. Adaptix Cortex pre-arrival acuity is a triage *suggestion* surface, not an FDA-cleared diagnostic device. This is fine for EMS workflow but must NOT be marketed as a diagnostic.
- **LIFENET device displacement** - the LIFEPAK install base is real. Adaptix integrates with LIFENET (ingest via cloud API) rather than replacing the device. Same for X Series.
- **Particle/Epic litigation risk** - if Adaptix ever uses Particle as a downstream aggregator, the Epic blocking risk transfers. Prefer Metriport + Health Gorilla.

---

## Evidence package (highest-leverage citations)

All claims trace to sources surfaced during 2026-06-01 web research. Where pricing or installed-base figures are UNKNOWN, this document does not invent numbers.

- TigerConnect acquires Twiage 2024-11-19: BusinessWire / Built In LA / tigerconnect.com newsroom
- TigerConnect Pre-Hospital + Transfer GA at HIMSS 25: hitconsultant.net 2025-02-28
- Pulsara funding $46.6M total, latest $6.75M 2023-06-07: CB Insights / PitchBook
- Pulsara FirstNet free EMS+ED: firstnet.com data sheet, Pulsara FAQ
- Stryker $1.3B Physio-Control purchase: Fierce Biotech
- LIFENET 55% PCI-capable hospitals: DAIC (Physio-Control era)
- Epic market share 43.7% 2025 +77 hospitals: Beckers / Fierce Healthcare
- Epic Nexus 1000+ hospitals on TEFCA: Healthcare Dive / Fierce Healthcare
- Particle v. Epic antitrust filed 2024-09-23 SDNY, partial dismissal denied Sept 2025: Healthcare IT News, Fierce Healthcare, healthapiguy.substack
- Oracle Health VA 800+ incidents, GAO 13%/58% safety stat, March 2025 outage: Healthcare Dive, WebProNews, Federal News Network
- 11 QHINs as of 2025, 71,000+ sites: Legal HIE, eHealth Exchange, HCI Innovation Group
- CommonWell QHIN designation 2024 + ELLKAY migration Nov 2025: commonwellalliance.org, BusinessWire
- Metriport pricing $0.20 + free tier: Invene.com, SaaSWorthy, Y Combinator
- Health Gorilla dual QHIN+QHIO: Healthcare IT News, healthgorilla.com
- Avel eCare Multipoint EMS Model + Kansas launch Jan 2025: accessnewswire.com, avelecare.com
- Viz.ai 1,700+ hospitals + VALIDATE study: viz.ai, Frontiers in Stroke 2024
- Stroke AI market sizing: MarketsAndMarkets, Dataintelo
- Tablet Command 43,000+ users 1,300+ agencies: tabletcommand.com, Genasys partner page
- General Devices CAREpoint 3 features: general-devices.com, Medigy

## Open UNKNOWNs (do not fabricate)

- Pulsara 2025/2026 revenue
- Stryker LIFENET current (post-2010) PCI-hospital share
- ZOLL Care Exchange per-hospital pricing
- TigerConnect Pre-Hospital pricing post-Twiage acquisition
- Particle Health current per-patient query pricing
- Health Gorilla Patient 360 + QHIO connection fees
- Oracle "Bridge" / "Velos" - search returned no Oracle product by those names; the prompt may have meant Oracle Health Data Intelligence (formerly HealtheIntent). Flagged for founder confirmation.
- "Genesis Industries" parent of Tablet Command - actual parent is **Genasys** per Genasys partner page. Prompt likely conflated the names.
