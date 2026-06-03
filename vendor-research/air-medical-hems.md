# Air Medical / HEMS Operations Software — Vendor Research

**Date:** 2026-06-01
**Author:** Adaptix Core research agent
**Scope:** Air-Service + Air-Service-Pilot competitive map. Public sources only. Claims that could not be sourced are flagged UNKNOWN. No fabrication.

---

## Evidence boundary (CONFIRMED vs UNKNOWN)

- **CONFIRMED via public sources:** Golden Hour acquisition history, Air Methods 2023 bankruptcy, ARCH dispatch architecture, ForeFlight pricing tier ranges, Veryon/FlightDocs HEMS positioning, FAA 135.617/135.619 regulatory boundaries, Outerlink IRIS install base, ADS-B Out 2020 rule, NOAA HEMS Tool integration into GFA-Low.
- **UNKNOWN (vendor will not publish):** Per-aircraft enterprise pricing for Golden Hour, Outerlink IRIS, Ninth Brain, CAMP, IRIS, ATP/Veryon. All require sales contact. Pricing ranges below are either publicly listed or industry-reported estimates and are labeled as such.
- **NOT IN CLUSTER (could not find a real product matching the brief):** "Pro Trans MedSoft" returned no air-medical product. "DragonFly / Tactical Air Operations HEMS dispatch" returned no matching vendor. "BAART" returned nothing for FBO/HEMS. These are flagged below rather than fabricated.

---

## 1. Golden Hour (ZOLL Data Systems)

- **Ownership:** Founded 1997. Acquired by ZOLL Medical (Asahi Kasei) on 2019-03-04. Distinct from Digitech (separate ZOLL ground-EMS billing acquisition).
- **Product line:** Air-medical RCM, dispatch, transfer-center, clinical charting bundled as one suite. ZOLL markets it as covering "ground or air" medical transport billing.
- **Market position (vendor self-claim):** "Supports over 80% of the air medical market" per ZOLL/Golden Hour marketing — this is a vendor claim, not independently audited.
- **Feature inventory (public):** Dispatch + transfer-center, clinical charting tied to billing, analytics over 20+ years of A/R data, EMS-specific payer rules.
- **Pricing:** Not published. Enterprise contract via ZOLL sales.
- **AI / FRAT:** No publicly documented FRAT engine, no public ML-driven weather go/no-go automation. Strength is billing intelligence, not flight-ops automation.
- **Weakness signal:** Sits inside ZOLL, which also owns competing ePCR/RescueNet — repeated industry friction on slow integration cycles is widely discussed at AAMS/AMTC but not formally documented. Treat as INFERRED.
- **Adaptix kill vector:** Cortex billing intelligence with response-to-reimbursement traceability beginning at the 911/transfer call. Golden Hour billing starts at PCR submission; Adaptix starts at dispatch acceptance and ties the FRAT, weather minima, ADS-B track, and crew duty all to the eventual claim.

Sources: ZOLL press release (zoll.com/news-releases/2019/03/04), goldenhour.com, PitchBook profile, ZOLL Golden Hour RCM brochure on zolldata.com.

---

## 2. ARCH Air Medical (operated by Air Methods)

- **Status:** ARCH is a *program*, not a software vendor. Owned/operated by Air Methods. Dispatch is consolidated into Air Methods' Communications Center (formerly St. Louis, consolidated nationwide to Omaha, NE; new center opened April 2025 per Air Methods).
- **Tech stack (public):** Honeywell Tracker III real-time safety tracking on all Air Methods aircraft (above FAA minimum). NVIS, HTAWS, ADS-B, XM/GPS. No exposed external API.
- **Implication:** ARCH is a *customer-pattern* target, not a competing platform. Any ARCH/Air Methods program leaving GMR or Air Methods is a churn opportunity for Adaptix Air-Service.

Sources: airmethods.com/air-medical/program/arch-air-medical, en.wikipedia.org/wiki/ARCH_Air_Medical_Service, jems.com ARCH 30th anniversary.

---

## 3. Pro Trans MedSoft

- **Finding:** No product called "Pro Trans MedSoft" surfaces in the air-medical software space. There is a separate "MedTrans Pro" (NEMT dispatch) and unrelated "Medsoft-Pro" (general practice management).
- **Status:** Flagged as either retired, very small, or named differently. Will not list features I cannot verify.

Sources: medtransprofessional.com, medsoft-pro1.software.informer.com.

---

## 4. MedSled

- **What it actually is:** Med Sled is an **evacuation device**, not software. High-density plastic patient evacuation sled used by hospitals and first responders. Standard 36" up to 350 lb, 28" Youth, 48" Bariatric.
- **Implication:** Not an Air-Service software competitor. Mentioned here only because the brief asked. No further analysis.

Source: medsled.com.

---

## 5. REACH Air Medical (Global Medical Response)

- **Status:** Operator under Global Medical Response (GMR) alongside Air Evac Lifeteam, Guardian Flight, Med-Trans. As of August 2025 GMR operates 367 helicopters from 360 bases (GMR-published).
- **Tech stack (public):** Uses ForeFlight as their EFB (ForeFlight customer reference). Fleet includes EC135/EC145 with Helionix-class avionics where applicable. No publicly published proprietary HEMS dispatch SaaS — operations are run inside GMR's internal Communications Center.
- **Storm / diversion exposure:** REACH operates Colorado / Alaska mountains and California high-density-altitude environments; weather is the dominant operational risk. No public evidence of an AI-driven diversion engine — they rely on NOAA HEMS Tool + pilot judgment + OCC weather brief (FAA 135.619 mandate).
- **Adaptix kill vector:** Real-time Cortex-driven weather-minima reasoning that *explains* the go/no-go decision in audit-grade narrative, tied to FRAT, and saved as an immutable record for QA/safety review. GMR has scale but no public AI layer here.

Sources: globalmedicalresponse.com, reachair.com, airmedandrescue.com REACH provider profile, foreflight.com helicopter customer references.

---

## 6. Air Methods proprietary tools

- **Bankruptcy:** Filed prepackaged Chapter 11 on 2023-10-24 with ~$2.24B in debt. Emerged 2023-12-28 after cutting ~$1.7B in debt. Root causes per filings: high opex, rising rates, **No Surprises Act** restricting balance billing, and wage pressure.
- **Software relevance:** Air Methods' internal tools (dispatch, flight-following, scheduling) are non-public. Their billing collection model was destroyed by NSA; their software didn't fail, the *reimbursement model* failed.
- **Churn opportunity:** Post-restructuring Air Methods has shed bases and aircraft. Affiliated/spun-out community programs are actively shopping for non-GMR, non-Air-Methods stacks. **High-value Adaptix Air-Service ICP**.

Sources: airmedandrescue.com Air Methods Chapter 11, financierworldwide.com Jan 2024, airmethods.com restructuring press release, Epiq 11 case docket dm.epiq11.com/case/airmethod.

---

## 7. Med-Trans Corporation

- **Status:** GMR subsidiary. ~100 aircraft (Bell 407, H125, H135, H155) plus King Air 200/90 fixed-wing.
- **Tech stack (public):** Uses **Outerlink IRIS** (announced via Metro Aviation press) for flight data + voice + video + SATCOM into their OCC every 10 seconds. Internal scheduling/dispatch is GMR-internal.
- **Implication:** Same as REACH — operator, not vendor. The vendor exposure is Outerlink IRIS (see §13).

Sources: metroaviation.com Med-Trans/IRIS announcement, airmedandrescue.com Med-Trans provider profile, businessairnews.com handbook.

---

## 8. LifeNet

- **Status:** Air Methods-operated program brand in multiple states (NY, MD, SC, IL/WI). LifeNet of NY is independent.
- **Software:** Inherits Air Methods stack (Honeywell Tracker III, ADS-B, OCC).
- **Implication:** Same churn pattern as ARCH — a program brand, not a platform.

Sources: airmethods.com/lifenet-md-570488, lifenetny.com, prismahealth.org LifeNet South Carolina.

---

## 9. Bell / Airbus EMS mission systems

- **Airbus Helionix (H135, H145):** 4-axis autopilot, coupled approaches, flight envelope protection, up to three large EFIS displays, NVG-compatible, First Limit Indicator. EASA-certified for the H135 Helionix variant. Marketed explicitly for HEMS in "challenging conditions."
- **Bell:** Bell aircraft (407, 429, 412/429EMS) integrate Garmin G1000H NXi or similar suites; no Bell-proprietary "Helionix equivalent."
- **What this is:** OEM avionics, not SaaS. They are *the platform Adaptix Air-Service-Pilot runs alongside*, not a competitor. Mission-system integration (ARINC 429 / Ethernet bus pull of altitude, ground speed, fuel state into a tablet companion) is the actual Adaptix opportunity.

Sources: airbus.com H135 / H145 product and missions pages, airbus.com Helionix press release, verticalmag.com "Glass of its Own" H135.

---

## 10. ForeFlight (Boeing-owned)

- **Pricing (CONFIRMED, foreflight.com/pricing):** Basic Plus, Pro Plus, Performance Plus tiers, roughly $100–$360/yr at single-pilot level. Enterprise EFB pricing for Part 135 fleets is custom-quoted.
- **HEMS relevance:** ForeFlight has a published **Helicopter EFB** product. REACH Air Medical is named publicly as a customer. ForeFlight's 2016 blog walks operators through Part 135 air-ambulance obstacle (135.611) compliance using their hazard layer.
- **Strengths:** Best-in-class EFB UX, weather imagery, terrain/obstacle, plates, deep Garmin/Connext integration after Garmin's FltPlan integration, Apple-native.
- **Weaknesses (public threads, iPadPilotNews / AOPA):** Subscription cost stacking when also paying for Garmin Pilot or FltPlan, no native HEMS-mission record-keeping (it is an EFB, not a HAA OCC platform), no FRAT engine, no crew duty integration. Pilot-side only.
- **Adaptix kill vector:** Adaptix Air-Service-Pilot **complements** ForeFlight rather than replacing the EFB — captures FRAT, duty, mission acceptance, weather-minima evidence, and ties to dispatch/billing. Position as "the layer ForeFlight cannot ship because Boeing won't enter clinical/billing/OCC."

Sources: foreflight.com/solutions/helicopter, foreflight.com/pricing, blog.foreflight.com 2016 Part 135 obstacle post, aopa.org subscription advisor April 2024.

---

## 11. FltPlan.com (Garmin)

- **Status:** Free flight planning + filing, integrated into Garmin Connext. Cross-syncs with Garmin Pilot.
- **HEMS relevance:** Limited — FltPlan is fixed-wing/IFR-centric; HEMS rotor operations use it primarily for cross-country fixed-wing legs (King Air interfacility).
- **Pricing:** Free baseline, premium PDC / eAPIS via Garmin Pilot subscription.
- **Adaptix opportunity:** Not a competitor — an upstream integration target via Garmin Connext.

Sources: garmin.com/en-US/aviation/fltplan, fltplan.com, garmin.com Pilot/FltPlan integration blog.

---

## 12. Garmin Pilot

- **Status:** Garmin's competitor to ForeFlight. Direct integration with Garmin GTN/G1000H NXi panels common in HEMS Bell airframes.
- **HEMS relevance:** EFB only; same gap as ForeFlight — no FRAT, no OCC, no clinical, no billing.
- **Pricing:** Premium tier ~$199/yr (garmin.com).
- **Adaptix opportunity:** Integration target, not displacement target.

Sources: garmin.com/en-US/blog/aviation/garmin-pilot-expanded-fltplan-com-integration, ipadpilotnews ForeFlight vs Garmin Pilot.

---

## 13. Outerlink IRIS

- **What:** US-patented combined Voice + Video + Flight Data Recorder + SATCOM, sending ~hundreds of parameters every 10 seconds to OCC. Explicitly engineered for FAA 14 CFR 135.607 HEMS compliance.
- **Install base (vendor-claimed):** 500+ fixed- and rotary-wing aircraft. Customers include Apollo MedFlight (Bell 429), Classic Air Medical, GMR Med-Trans.
- **Pricing:** Not published. Hardware + service contract.
- **Weakness:** Hardware-heavy, OCC-tethered, closed ecosystem. No public API for third-party OCC platforms. Operators that want to keep IRIS *hardware* but switch *OCC software* face friction — that friction is an Adaptix wedge.
- **Adaptix kill vector:** Provide an OCC layer that *consumes* IRIS feed where present (operator's existing data) and adds Cortex FRAT, real-time weather-minima reasoning, audit-grade decision records, and ties into Adaptix dispatch + billing.

Sources: outerlink.com/iris, outerlink.com/products, airmedandrescue.com Apollo MedFlight + IRIS, helihub.com IRIS tag, Metro Aviation Med-Trans/IRIS announcement, outerlink.com IRIS brochure PDF.

---

## 14. AirDocs / ATP FlightDocs (Veryon Tracking)

- **Identity:** "FlightDocs" rebranded to **Veryon Tracking** after ATP/FlightDocs consolidation under Veryon.
- **What it is:** Cloud aviation maintenance tracking — scheduled maintenance, discrepancy reporting, workflow, inventory. Markets HEMS readiness as a use case.
- **Pricing (industry-reported, not on vendor site):** ~$2,400–$7,200/yr per aircraft, annual contract. Source: SourceForge / GetApp aggregates — treat as INFERRED.
- **Strengths:** Strong maintenance compliance, FAA-aligned recordkeeping.
- **Weaknesses:** Maintenance-only; no FRAT, no dispatch, no clinical, no billing.
- **Adaptix relationship:** Integration partner (consume maintenance status into FRAT and into mission acceptance), not displacement target.

Sources: veryon.com/flightdocs, capterra.com Flightdocs, sourceforge.net/software/product/Flightdocs, airmedandrescue.com ATP FlightDocs author page.

---

## 15. FlightDocs

- See §14 — same product, now Veryon Tracking. Listed separately in the brief but is one vendor.

---

## 16. CAMP Systems

- **What:** Digital maintenance / airworthiness / engine-health monitoring. Long-standing business aviation backbone.
- **HEMS relevance:** Used by some HEMS operators (especially BK117 / EC145 / King Air operators) for engine trend monitoring and airworthiness tracking.
- **Pricing:** Not published; enterprise-only.
- **Weakness:** Business-aviation DNA, not HEMS-mission DNA. No FRAT, no OCC, no clinical.
- **Adaptix relationship:** Integration target for maintenance status feed into FRAT.

Sources: avinode.com/camp-systems, gamaaviation.com special-mission HEMS page (references CAMP/maintenance tooling), CAMP corporate.

---

## 17. Ninth Brain

- **What:** Credential / certification tracking, scheduling, LMS, QI, digital forms — sold explicitly to air-medical programs. AAMS-affiliated vendor.
- **Features (vendor-published):** Cert tracker that blocks scheduling of expired credentials, crew bio data (flight suit, locker, emergency contact), risk-trend tracking with mitigation, debrief and peer-review forms. Recent additions: Open API, SSO.
- **Pricing:** Not published.
- **Weakness:** Workforce / compliance only — does not touch flight ops, FRAT, dispatch, or billing. Operators run Ninth Brain *and* Golden Hour *and* an EFB *and* OCC software.
- **Adaptix kill vector:** Unified Adaptix Crew + Compliance + Air-Service replaces Ninth Brain natively, removing one of 4–5 stacked vendor bills.

Sources: ninthbrain.com, ninthbrain.com/air-medical, ambulance.org Ninth Brain Open API / SSO 2024 announcement, serchen.com Ninth Brain profile.

---

## 18. SimAir / SimMed

- **Finding:** No single vendor named "SimAir / SimMed" surfaces clearly for HEMS. There are FAA-approved Level B/C/D HEMS simulators (e.g., Flight Safety International H135 / H145 sims; Metro Aviation has its own Helicopter Flight Training Center). No HEMS SaaS layer called SimAir is publicly documented.
- **Status:** Likely a training-simulator integration market, not a dispatch software market.
- **Adaptix opportunity:** Training records integration into Adaptix Training + Compliance.

Source: cannot source a specific vendor by this name — flagged as UNKNOWN to avoid fabrication.

---

## 19. DragonFly / Tactical Air Operations

- **Finding:** No HEMS dispatch product called "DragonFly" or "Tactical Air Operations" surfaces in public search. Possible internal/closed-program tooling.
- **Status:** Unverifiable. Will not invent features.

---

## 20. BAART / FBO Director

- **FBO Director:** Confirmed FBO-management SaaS (fuel, flight school, work orders, QuickBooks integration, launched 2017). Not HEMS-specific; FBOs serve HEMS as fuel stops.
- **BAART:** No FBO/HEMS product found. Likely confusion with the unrelated medical-services brand of the same acronym.
- **Adaptix relevance:** Indirect — fuel-stop status as an input to mission planning.

Sources: fbodirector.com, newswire.com FBO Director QuickBooks.

---

## Cross-vendor synthesis

### Regulatory backdrop (CONFIRMED)

- **14 CFR 135.617** — preflight risk analysis required before every HAA flight. This is the legal hook for FRAT.
- **14 CFR 135.619** — OCC required for any HAA certificate holder with ≥10 helicopter air ambulances. OCC must provide pilots with weather briefings covering current + forecasted weather along route.
- **14 CFR 91.225 (ADS-B Out)** — effective 2020-01-01. After the 2025 DCA midair collision, Congress is pushing **ADS-B In** mandates and tightening military / sensitive-flight exemptions (theaircurrent.com, flightglobal.com). HEMS operators that automated ADS-B compliance early are fine; many smaller programs are still equipped only to the minimum.
- **NOAA HEMS Tool** — folded into Graphical Forecasts for Aviation (Low Altitude) on the new aviationweather.gov framework. Operators must adapt OCC integrations; some legacy screen-scrape integrations broke and have not been re-wired.

### Where the market actually sits (INFERRED from vendor matrix)

A typical HEMS program stacks:

1. **EFB** (ForeFlight or Garmin Pilot) — pilot side
2. **OCC platform** (in-house, GMR-internal, or Air Methods-internal) — dispatch
3. **Flight tracking hardware** (Outerlink IRIS, Honeywell Tracker III) — surveillance
4. **Maintenance** (Veryon/FlightDocs or CAMP) — airworthiness
5. **Credential / scheduling / QI** (Ninth Brain) — workforce
6. **Billing / RCM** (Golden Hour / ZOLL) — revenue
7. **ePCR** (ImageTrend, ESO, or Golden Hour clinical) — clinical
8. **Weather decision support** (NOAA HEMS Tool screen) — manual

That is **eight separate vendors**. There is no unified HEMS operating layer in the market today. Closest unification attempts:

- ZOLL/Golden Hour covers RCM + clinical + some dispatch but does not ship FRAT, OCC, flight tracking, or maintenance.
- GMR-internal covers ops but is not licensable to outside programs.
- Air Methods proprietary same as GMR — internal, not sold.

### Air Methods bankruptcy fallout (CONFIRMED churn opportunity)

The 2023 Chapter 11 was driven by **No Surprises Act**, not software failure. But the reorganization has surfaced multiple downstream effects exploitable by Adaptix:

- Bases shed by Air Methods are looking for new operating models, frequently community / hospital-based programs that need their *own* OCC, FRAT, dispatch, clinical, and billing stack — exactly the Adaptix bundle.
- Pilot churn during restructuring (jetcareers.com forum) means programs are rebuilding crew records and credential systems — natural Ninth Brain displacement window.
- ainonline.com: "Is Air Methods bankruptcy a warning?" — broader question across all HEMS operators, meaning the industry is pricing risk for the *next* shoe to drop. Buyers are receptive to vendors who can demonstrate **billing-from-dispatch** intelligence that survives No Surprises Act scrutiny.

### Adaptix kill strategy (operational)

1. **Unify the eight-vendor stack** into Adaptix Air-Service (OCC) + Air-Service-Pilot (EFB-adjacent companion) + Crew + Compliance + Billing + ePCR. No competitor ships this.
2. **Cortex FRAT** that explains every go/no-go in audit-grade natural language tied to weather, NOTAMs, crew duty, aircraft status, ADS-B coverage, and obstacle data — replacing the manual FAA FAAST FRAT PDF / spreadsheet that the majority of small programs still use.
3. **OpenSky / ADS-B free integration** — provides national flight visibility without requiring Outerlink hardware lock-in for prospects evaluating Adaptix.
4. **Billing-from-dispatch traceability** that survives NSA scrutiny by chaining the dispatch acceptance decision (medical necessity, closest appropriate facility, weather minima, FRAT score) to the eventual claim, providing the documentation Golden Hour's pure-RCM model can't generate on its own.
5. **HEMS Tool API ingestion** so the operator doesn't watch a NOAA screen — the OCC reasons about the grid for them.
6. **Maintenance / cert integrations** rather than replacements for CAMP / Veryon / Ninth Brain initially, lowering switching cost while taking the OCC + FRAT + Billing layer where the moat is.

### Highest-confidence wedge

The **single most exploitable gap** across the cluster is that **no vendor ships an automated, AI-reasoned FRAT tied to the OCC weather briefing, the dispatch decision, the crew duty record, and the eventual claim — all in one immutable record**. FAA 135.617 + 135.619 + NSA documentation demands all converge on this exact artifact. Adaptix Air-Service is positioned to be the first.

---

## What is NOT confirmed in this document

- No pricing claim above is from a published price card unless explicitly attributed to foreflight.com/pricing or garmin.com. All others are sales-quote only and are flagged as such.
- "80% of air medical market" for Golden Hour is a **vendor self-claim**, not independently audited.
- The Adaptix kill-strategy section is a **plan**, not a shipped capability. Adaptix Air-Service and Air-Service-Pilot must still be runtime-verified to claim parity, let alone superiority. This document is research, not a completion claim.

---

## Sources (consolidated)

- ZOLL / Golden Hour: zoll.com/en-us/about/news-and-events/press-releases/press-release/2019/03/04, goldenhour.com, zolldata.com Golden Hour RCM brochure, pitchbook.com Golden Hour Data Systems profile.
- Air Methods bankruptcy: airmedandrescue.com Air Methods Chapter 11, financierworldwide.com Jan 2024 emergence, airmethods.com press release on restructuring, dm.epiq11.com/case/airmethod, ainonline.com Air Methods warning.
- ARCH / LifeNet: airmethods.com program pages, en.wikipedia.org/wiki/ARCH_Air_Medical_Service, jems.com ARCH 30th anniversary.
- GMR / REACH / Med-Trans: globalmedicalresponse.com, reachair.com, airmedandrescue.com REACH and Med-Trans provider profiles, metroaviation.com Med-Trans IRIS.
- Airbus Helionix: airbus.com H135 and H145 product pages, airbus.com Helionix EASA press release, verticalmag.com H135.
- ForeFlight: foreflight.com/solutions/helicopter, foreflight.com/pricing, blog.foreflight.com 2016 Part 135 obstacle post, aopa.org subscription advisor April 2024, ipadpilotnews ForeFlight vs Garmin Pilot.
- FltPlan / Garmin Pilot: garmin.com/en-US/aviation/fltplan, fltplan.com, garmin.com Pilot+FltPlan integration blog.
- Outerlink IRIS: outerlink.com/iris, outerlink.com/products, helihub.com IRIS coverage, airmedandrescue.com Apollo MedFlight IRIS, outerlink.com IRIS brochure PDF.
- FlightDocs / Veryon: veryon.com/flightdocs, capterra.com Flightdocs, sourceforge.net Flightdocs.
- CAMP: avinode.com/camp-systems, gamaaviation.com special-mission HEMS.
- Ninth Brain: ninthbrain.com, ninthbrain.com/air-medical, ambulance.org Ninth Brain Open API 2024.
- MedSled: medsled.com.
- FBO Director: fbodirector.com, newswire.com FBO Director QuickBooks integration.
- FAA regulation: ecfr.gov 14 CFR 135.617, 135.619, 91.225; faa.gov AC 135-14B Helicopter Air Ambulance Operations; faa.gov FAAST FRAT PDF.
- ADS-B post-2025-DCA push: theaircurrent.com dca-congress-ads-b-surveillance, flightglobal.com US lawmakers push ADS-B In.
- NOAA HEMS Tool: aviationweather.gov/hemst, ral.ucar.edu HEMS solutions page, vast.aero HEMS weather tool improvement.
