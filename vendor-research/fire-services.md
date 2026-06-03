# Fire Services Software — Vendor Research

**Cluster:** Fire CAD, RMS, NERIS reporting, prevention/inspections, training, key access.
**Author:** Adaptix vendor-research.
**Date:** 2026-06-01.
**Scope:** Per-vendor inventory + cross-vendor synthesis. Every claim cites a public source. Where a fact could not be confirmed from a public source it is marked `UNKNOWN`.

---

## 1. ESO Fire RMS (incl. Emergency Reporting)

### Product line
ESO Fire RMS bundle: Incidents, Properties & Inspections, Personnel Management, Scheduling, Activities, Permits, Asset Management, Checklists, Hydrants, Analytics, FH Sketch (pre-plans). Consolidated with the legacy Firehouse Software product after the Firehouse acquisition, and the legacy Emergency Reporting product after that acquisition (see below). ([eso.com — Fire Incidents](https://www.eso.com/fire/incidents-software/), [softwareadvice — ESO Fire RMS profile](https://www.softwareadvice.com/fleet-management/eso-fire-rms-profile/))

### Pricing
Public list price: not disclosed. Quote-based only. ([softwareadvice — ESO Fire RMS profile](https://www.softwareadvice.com/fleet-management/eso-fire-rms-profile/))

### NERIS readiness
ESO announced a "basic NERIS-compatible beta" in February 2025 and rolling updates throughout 2025; ESO states it is ready for the 2026 mandatory transition. ([eso.com — Prepare for NERIS with ESO](https://www.eso.com/neris/))

### Recent moves — Emergency Reporting consolidation
ESO acquired Emergency Reporting (~7,500 fire/EMS agencies) with a deal expected to close in Q3 of the announcement year. ESO subsequently shut Emergency Reporting down; the Mesilla (NM) fire chief publicly stated ESO had originally told him Emergency Reporting would not be shut down, then was. ([firehouse.com — ESO acquires Emergency Reporting](https://www.firehouse.com/technology/press-release/21231905/eso-solutions-eso-acquires-leading-fire-rms-emergency-reporting), [kdwalmsley.substack.com — Wall Street is stealing from volunteer fire departments](https://kdwalmsley.substack.com/p/wall-street-is-stealing-from-volunteer))

### Known weaknesses
Software Advice review aggregates show Customer Support 2.2 / Value 2.4 / Functionality 2.9. User comments report slow performance, long support response times ("2 weeks for a simple database question"), FH Sketch usable only by CAD professionals, and that the post-Firehouse replacement product is "not fully where it needs to be yet" with customers needing multiple add-ons to replace lost functionality. ([softwareadvice — ESO Fire RMS reviews](https://www.softwareadvice.com/fleet-management/eso-fire-rms-profile/reviews/))

### Customer base
Combined ESO + Emergency Reporting historical footprint exceeds 7,500 fire/EMS agencies (Emergency Reporting alone). ([firehouse.com — ESO acquires Emergency Reporting](https://www.firehouse.com/technology/press-release/21231905/eso-solutions-eso-acquires-leading-fire-rms-emergency-reporting))

### Moat
EMS RMS + ePCR + Fire RMS cross-sell across the same agency; size; state-relationships from Firehouse legacy installs; ESO Fire Service Index branded research. ([eso.com — Fire Service Index](https://www.eso.com/resources/fire-index/))

### API surface
Documented public REST API: `UNKNOWN`. Partner-only integrations are referenced on eso.com without a published OpenAPI document.

### Adaptix kill strategy
- Land displaced Emergency Reporting departments who feel "shut down on us" — pitch real same-vendor EMS+Fire continuity instead of acquisition churn.
- Cinematic command-center UI vs. ESO's "clunky/slow" reputation.
- Cortex pre-plan generation from CAD turnouts and prior incidents — replace FH Sketch's "CAD-professional-only" workflow.
- Free NERIS migration and import of legacy NFIRS exports.

---

## 2. FirstDue (First Due Software)

### Product line
End-to-end Fire & EMS platform: Pre-Incident Planning, Fire Prevention/Inspections, Scheduling & Personnel, Assets & Inventory, Mobile Response, ePCR, NFIRS/NERIS reporting. CAD-agnostic — ingests live incident data from major CAD vendors. ([firstdue.com — Fire](https://www.firstdue.com/fire), [firstdue.com — NERIS](https://www.firstdue.com/products/neris))

### Pricing
Modular pricing reportedly starting around $250–$500/month for core modules (third-party summary, not from FirstDue's own published price sheet). CAD/dispatch integrations: $2,000–$10,000. Advanced analytics & compliance reporting modules: $1,500–$7,500/year. No public free trial — demo-only. ([capterra — First Due](https://www.capterra.com/p/179338/First-Due/), [getapp — First Due](https://www.getapp.com/all-software/a/first-due/), [nerdisa — FirstDue review](https://nerdisa.com/firstdue/))

### NERIS readiness
"NERIS Ready from Day-One." FirstDue states NERIS went live nationwide January 1, 2026 with First Due agencies among those completing the transition. ([firstdue.com — NERIS](https://www.firstdue.com/products/neris), [firstdue.com — NERIS Transition FAQ](https://www.firstdue.com/news/firstdue-com-blog-nerisfaq))

### Known weaknesses
- Steep learning curve for workflows.
- Map/pre-plan layer "slow to load" — users have to reduce pre-plan density.
- Contact records not global across modules — re-entry required.
- Rapid product changes are hard for departments to keep up with.
- Support tickets occasionally sit without updates.
- Notification latency complaints.
([capterra — First Due reviews](https://www.capterra.com/p/179338/First-Due/reviews/), [g2 — First Due reviews](https://www.g2.com/products/first-due/reviews))

### Recent moves
Federal Fire & EMS line via Carahsoft for federal agencies; integration with CentralSquare CAD ("First Due in CentralSquare CAD dashboard click-of-a-button"). ([firstdue.com — Federal](https://www.firstdue.com/fd-federal), [centralsquare.com — Reimagining Fire and EMS Response](https://www.centralsquare.com/resources/recorded-webinars/reimagining-fire-and-ems-response-first-due-and-centralsquare), [carahsoft.com — First Due](https://www.carahsoft.com/first-due))

### API surface
Published OpenAPI / developer portal: `UNKNOWN` publicly. Integrations are vendor-paired (Carahsoft, CentralSquare) rather than self-serve.

### Customer base
Career, combination, and volunteer departments; federal agencies via Carahsoft. Exact count not published on site. ([firstdue.com — Customers](https://www.firstdue.com/customers))

### Moat
"End-to-end one platform" message + active CAD partnerships + fast product iteration + Carahsoft federal channel.

### Adaptix kill strategy
- Beat the "slow map / re-enter contacts" complaints with the unified Adaptix entity graph (one tenant, one contact, propagated).
- Real published API + webhooks (FirstDue's API surface is private).
- Public, transparent pricing tier vs. FirstDue's quote-only path.
- Faster, traceable support tickets backed by audit log.

---

## 3. ImageTrend (Elite for Fire / Continuum / Fire Bridge)

### Product line
ImageTrend Elite is the platform; the fire dataset within Elite covers NFIRS, fire incident reporting, and now NERIS. "Fire Bridge" is not currently surfaced as a distinct product line in ImageTrend's public NERIS materials — the term is colloquial; current branding is "ImageTrend Elite." ([imagetrend.com](https://www.imagetrend.com/), [imagetrend.com — NERIS](https://www.imagetrend.com/neris-fire-reporting/))

### NERIS readiness
ImageTrend implemented NERIS as a **new dataset inside Elite** rather than expanding the existing fire dataset — they state this minimizes provider change-management. Public policy statement on NERIS data flow has been issued. NERIS migration is no charge to existing customers. ([imagetrend.com — NERIS policy](https://www.imagetrend.com/press-releases/imagetrend-neris-policy-announcement/), [imagetrend.com — NFIRS to NERIS](https://www.imagetrend.com/blog/nfirs-to-neris-transition/))

### Pricing
Not publicly listed. Quote-based, typically state-level contracts because ImageTrend wins many state EMS contracts and bundles fire.

### Known weaknesses
Steep learning curve, "clunky" interface complaints especially in reporting module, training module hard to navigate, extensive customization requires a dedicated system administrator. Small volunteer departments find the complexity problematic. ([nerdisa — ImageTrend review](https://nerdisa.com/imagetrend/), [softwareworld — ImageTrend Elite for Fire reviews](https://www.softwareworld.co/software/imagetrend-elite-for-fire-reviews/), [g2 — ImageTrend reviews](https://www.g2.com/products/imagetrend/reviews))

### Moat
State EMS/Fire contracts (the data has to flow to ImageTrend by state mandate in many jurisdictions); deep customization; one of the few vendors with both Fire and EMS at scale.

### API surface
ImageTrend exposes integrations for state agencies; a fully public developer API: `UNKNOWN`.

### Adaptix kill strategy
- Match state NEMSIS/NERIS data flow but with an actually usable UI.
- Out-of-the-box configurations vs. "needs a dedicated sysadmin."
- Cortex auto-fill of fire incident narrative from CAD timeline + dispatch audio.
- Sell at the agency level, then capture the state contract — opposite of ImageTrend's top-down strategy.

---

## 4. Emergency Reporting (now under ESO)

### Status
Acquired by ESO; Emergency Reporting was a cloud-native fire RMS serving ~7,500 agencies. After acquisition, ESO shut the product down despite prior assurances to the contrary to at least one customer (Mesilla FD chief). ([firehouse.com — ESO acquires Emergency Reporting](https://www.firehouse.com/technology/press-release/21231905/eso-solutions-eso-acquires-leading-fire-rms-emergency-reporting), [eso.com — ESO acquires Emergency Reporting](https://www.eso.com/news/press-releases/eso-acquires-emergency-reporting-leading-fire-records-management-system-rms/), [crunchbase — acquisition](https://www.crunchbase.com/acquisition/eso-acquires-emergency-reporting--5026fb03), [kdwalmsley.substack.com — Wall Street is stealing from volunteer fire departments](https://kdwalmsley.substack.com/p/wall-street-is-stealing-from-volunteer))

### Adaptix kill strategy
- Dedicated displacement campaign to former Emergency Reporting customers being force-migrated to ESO. Promise: same-vendor stability, no roll-up risk, real migration tooling.

---

## 5. Tyler Technologies — Fire & EMS Suite (incl. Streamline / Fire Prevention Mobile / Enterprise Public Safety)

### Product line
Tyler Fire & EMS Suite covers Dispatch and Response, Fire Prevention Mobile (code enforcement / inspections), Reporting and Administration, Mobile Operations. Sold inside Tyler's broader Enterprise Public Safety stack (CAD + RMS + Mobile + Jail). Recent acquisition of Emergency Networking. ([tylertech.com — Fire & EMS](https://www.tylertech.com/solutions/courts-public-safety/public-safety/fire-ems), [tylertech.com — Dispatch and Response](https://www.tylertech.com/solutions/courts-public-safety/public-safety/fire-ems/fire-response-solutions), [tylertech.com — Fire Prevention and Preparedness](https://www.tylertech.com/solutions/courts-public-safety/public-safety/fire-ems/fire-prevention-and-preparedness))

### Pricing
Quote-only. Indicative contract values from public records:
- City of Moore: ~$738k first-fiscal-year cost, ~$952k vendor license, 12–18 month implementation.
- City of Overland Park: $170,372/year Hexagon CAD maintenance (comparable enterprise tier).
- Enterprise CAD+RMS+Mobile+multi-agency: $3M–$9.1M range across multi-year contracts.
([citizenportal — Moore council](https://citizenportal.ai/articles/7048810/moore-council-hears-plan-to-replace-aging-cadrms-with-tyler-technologies-product), [blogs.civiciq — Public Safety Software 2025 CAD RMS Pricing & Vendor Guide](https://blogs.civiciq.com/2025/12/16/blog-public-safety-software-cad-rms-pricing-vendor-guide-2026/))

### Lock-in dynamics (municipal)
Tyler dominates with ~11.5% public-sector software market share and 45,000+ installations. Mid-sized counties often find Tyler "over-engineered and overpriced." Tyler typically wins on finance/court/utility ERP first and pulls public safety in as a same-vendor extension — the lock-in is the municipal ERP, not the fire CAD itself. ([blogs.civiciq — Tyler Technologies analysis](https://blogs.civiciq.com/2026/01/07/tyler-technologies-government-contracts-is-the-industry-giant-right-for-mid-sized-counties-2025-analysis/))

### NERIS readiness
Not surfaced as a marketing pillar on Tyler's Fire & EMS pages as of this writing; `UNKNOWN` whether Tyler's RMS is NERIS-live for all customers.

### Adaptix kill strategy
- Tyler wins through city-hall procurement; Adaptix can't win procurement on price alone. Win on **operational outcomes** at the chief-of-department level and force the city to add Adaptix alongside Tyler ERP.
- "Cortex-on-top": Adaptix as the operations + analytics layer that consumes Tyler CAD via standard interfaces.
- Aggressive sub-$100k entry pricing for mid-sized departments who can't justify $738k.

---

## 6. Hexagon Public Safety — HxGN OnCall / CommandPoint CAD

### Product line
Hexagon's fire CAD supports agency-specific business rules, response plan creation, unit recommendations, incident perimeters, hospital routing, fire station alerting interfaces, RMS integration, and resource optimization. Hexagon's current branding leans on "HxGN OnCall Dispatch" and the Public Safety platform; "CommandPoint" is the older / partner-facing brand. ([hexagon.com — Fire & Rescue](https://hexagon.com/industries/public-safety/fire-rescue), [hexagon.com — Public Safety Platform](https://hexagon.com/products/product-groups/public-safety-platform), [police1 — Hexagon spotlight](https://www.police1.com/police-products/police-technology/software/cad/articles/spotlight-hexagons-software-helps-police-fire-ems-and-communications-agencies-with-incident-management-call-taking-capabilities-FpOBOxS9Jl7NBuGl/))

### Pricing
City of Ontario, CA expanded its Hexagon public-safety contract to $9.1M. City of Overland Park: $170,372/year Hexagon CAD maintenance — implying ~$1.7M maintenance over a decade for that one city. Per-station list pricing: not public. ([blogs.civiciq — Public Safety Software 2025 CAD RMS Pricing & Vendor Guide](https://blogs.civiciq.com/2025/12/16/blog-public-safety-software-cad-rms-pricing-vendor-guide-2026/))

### Known weaknesses
Independent aggregated reviews of Hexagon (corporate, not fire-specific) cite "clunky interface," outdated documentation, and customer-service friction. Fire-specific complaint corpus on public review sites: thin (most Hexagon Public Safety customers are large agencies who don't post on G2). ([trustpilot — Hexagon](https://www.trustpilot.com/review/www.hexagon.com), [softwareadvice — Hexagon reviews](https://www.softwareadvice.com/marketing/hexagon-profile/reviews/))

### NERIS readiness
Not surfaced as a marketing pillar on Hexagon's public fire pages. `UNKNOWN`.

### Moat
Tier-1 metro CAD installations (LA, Ontario CA, etc.). Geospatial pedigree (Hexagon = Intergraph lineage). Procurement entanglement at the city level.

### Adaptix kill strategy
- Don't fight Hexagon at the LA-tier metro level — fight at the suburban / regional level where the $9.1M Hexagon stack is overkill.
- Offer first-class GIS via Mapbox/Esri integration without Hexagon's pricing.
- Lead with NERIS-ready as a sharper wedge than Hexagon's geospatial story.

---

## 7. RedNMX / RedAlert (Alpine Software)

### Product line
RedNMX is Alpine Software's flagship fire RMS with 50+ modules: incident response, hydrants, NFPA reports, pre-plans, member messaging, weather, aerial property views. CAD integration via the RedAlert CAD layer. Mobile app "Responder" gives live incident data, maps, crew locations, building layouts. ([alpinesoftware.com](https://alpinesoftware.com/), [alpinesoftware.com — features](https://alpinesoftware.com/features/), [alpinesoftware.com — incident response](https://alpinesoftware.com/feature/incident-response/))

### Pricing
Aggregator (Goodfirms) reports $99/month entry price — significantly below FirstDue/ESO. Likely scales per modules. ([goodfirms — RedAlert NMX](https://www.goodfirms.co/software/redalert-nmx))

### Federal status
Listed in the VA TRM, indicating federal-grade deployment exposure. ([oit.va.gov — RedNMX TRM](https://www.oit.va.gov/Services/TRM/ToolPage.aspx?tid=16907))

### NERIS readiness
Not explicitly surfaced in their public materials at search time — `UNKNOWN`.

### Adaptix kill strategy
- RedNMX is the price-sensitive volunteer-department favorite. Match the $99 entry tier and beat them on cloud-native NERIS submission + Cortex narrative generation.
- Their differentiator is 50+ modules; Adaptix bundles equivalent functionality with one unified data model rather than 50 modules.

---

## 8. Crisis Track (Juvare)

### Product line
FEMA-grade damage assessment + disaster management + emergency management + survivor portal. Now part of Juvare; integrates with WebEOC. Sold as a damage-assessment + recovery tool, not a day-to-day fire RMS. ([juvare.com — Crisis Track](https://www.juvare.com/products/crisis-track/), [crisistrack.juvare.com](https://crisistrack.juvare.com/products/disaster-management/))

### Pricing
Quote-only. ([softwaresuggest — Crisis Track](https://www.softwaresuggest.com/crisis-track))

### Adaptix overlap
Adjacent, not direct competition. Adaptix only competes on the same axis if/when Adaptix offers FEMA Public Assistance damage assessment as a Fire-Service module. Recommended posture: integrate / interoperate, do not duplicate.

---

## 9. Knox Box / Knox Rapid Access

### Product line
Physical key-box hardware for emergency access to buildings, plus the Knox Rapid Access System for fire-department master-key management. Hardware + admin software, not a fire RMS competitor. ([knoxbox.com](https://www.knoxbox.com/), [knoxbox.com — Fire Departments](https://www.knoxbox.com/industries/fire-departments), [wikipedia — Knox Box](https://en.wikipedia.org/wiki/Knox_Box))

### Known weakness
"Single point of failure" — if a district's master key is copied, every Knox-protected building in the area is exposed. ([wikipedia — Knox Box](https://en.wikipedia.org/wiki/Knox_Box))

### Adaptix overlap
Not a competitor. Integration target: Knox Rapid Access System exposes admin functions Adaptix can surface inside the Fire Service module (which properties have Knox boxes, location, last-tested status).

### "Hometown Heroes" specifically
Public sources at search time did not return a Knox product line called "Hometown Heroes" — `UNKNOWN`. Possibly a Knox community-discount program or regional sub-brand.

---

## 10. CentralSquare (Public Safety Suite Enterprise + IMC)

### Product line
Public Safety Suite Enterprise: 911 + CAD + RMS + Mobile + Jail in one platform for large agencies. IMC: same stack scaled for small/mid agencies. Hosted on AWS GovCloud (CJIS-compliant). Integration with FirstDue Fire RMS launched via in-CAD launcher. ([centralsquare.com — Public Safety Suite Enterprise](https://www.centralsquare.com/solutions/public-safety-software/public-safety-suite/enterprise), [centralsquare.com — IMC](https://www.centralsquare.com/solutions/imc), [firstdue.com — First Due & CentralSquare](https://www.firstdue.com/bestpractices/first-due-central-square))

### Pricing
Quote-only enterprise subscriptions. Not publicly disclosed.

### Adaptix kill strategy
- CentralSquare's fire RMS story is weak enough that they partnered with FirstDue. Adaptix can directly displace the CAD + RMS pair by offering the unified stack at a single price.
- Cloud-native NERIS submission and Cortex narrative on top — CentralSquare partners out the fire workflow, so the experience is fragmented.

---

## 11. Vector Solutions / TargetSolutions (training + Check It)

### Product line
- **TargetSolutions Premier**: training LMS with 450+ hours NFPA/OSHA content and 250+ hours CAPCE EMS.
- **TargetSolutions Volunteer Edition**: scaled to ≤30 personnel — explicitly priced for volunteer agencies.
- **Vector Check It**: web + iOS + Android apparatus / equipment inspection checklists, custom or library-based, with automatic reports and graphs. Sold for Fire & EMS.
([vectorsolutions.com — Vector LMS Fire](https://www.vectorsolutions.com/solutions/vector-lms/fire/), [vectorsolutions.com — Vector Check It Fire & EMS](https://www.vectorsolutions.com/solutions/vector-check-it/fire-ems/), [prnewswire — Volunteer Edition](https://www.prnewswire.com/news-releases/vector-solutions-introduces-targetsolutions-volunteer-edition-to-expand-training-access-for-volunteer-fire-departments-302677435.html))

### Pricing
- Premier: quote-only. 10% IAFC VCOS member discount; setup fees waived for new customers.
- Volunteer Edition: lower tier, undisclosed.
- Individual EMS recert: $99 / 2 years in US, $89 / 1 year Alberta.
([vectorsolutions.com — request pricing](https://www.vectorsolutions.com/request-a-demo/fire-training-management-system/), [vectorsolutions.com — Volunteer Edition press](https://www.vectorsolutions.com/resources/newsroom/vector-solutions-introduces-targetsolutions-volunteer-edition-to-expand-training-access-for-volunteer-fire-departments/))

### Adaptix overlap
Direct competition on training + apparatus checks. Adaptix Training Service + Apparatus/Inventory inside Fire-Service can replace both, with the advantage of one auth + one audit log + one data plane.

### Adaptix kill strategy
- Bundle training credit-tracking, ISO compliance, and apparatus checklists into the Fire module — no separate Vector subscription.
- Cortex training-recommendation engine: "this firefighter is behind on N-hours of NFPA-1403, here's the queued course."
- Volunteer-friendly tier matching/beating the Volunteer Edition price.

---

## 12. The Compliance Engine (TCE / Brycer)

### Product line
Cloud platform that lets AHJs (authorities having jurisdiction) receive third-party fire-protection inspection reports (sprinkler, alarm, backflow, elevator) directly from contractors. Free to the fire department and to building owners; revenue is from contractor filing fees. ([thecomplianceengine.com](https://www.thecomplianceengine.com/), [thecomplianceengine.com — what-is-tce](https://www.thecomplianceengine.com/what-is-tce))

### Pricing
- AHJ / municipality / building owner: **$0** (free, including setup, training, ongoing service).
- Contractor: $18 per system type per site upload, $10/$20 late fees at 30/60 days. ([thecomplianceengine.com — fire](https://www.thecomplianceengine.com/fire))

### Adaptix overlap
Adjacent. TCE owns the "external contractor uploads reports" workflow. Adaptix should **integrate** (consume TCE-submitted reports into the Fire Prevention module) rather than try to displace — the contractor side is a hard-won network effect for TCE.

---

## 13. Hexagon adjacent / Locality / Geographic Solutions / FireCAD

- **Locality / Geographic Solutions**: search returned no qualifying fire-specific product. `UNKNOWN` as a fire CAD vendor at this name.
- **FireCAD (getfirecad.com)**: this is a **fire alarm design** AutoCAD add-in by Inspect Point ($250/mo, $350/mo monthly, <$2k/yr annual). **Not** a fire-department CAD. Out of cluster. ([getfirecad.com — pricing](https://www.getfirecad.com/pricing/))
- **FDNY FireCAD**: separately, FDNY launched a $22M dispatch system also called FireCAD — custom build, not commercial. ([firerescue1 — FDNY FireCAD](https://www.firerescue1.com/fire-products/computeraideddispatch/articles/fdny-launches-22m-firecad-system-qAGFSLSCTANJ1emZ/))
- **iLeads**: no qualifying fire-inspection product found in search results. `UNKNOWN`.

---

## 14. NERIS transition synthesis

### Federal mandate timeline (confirmed)
- January 1, 2026: NERIS becomes the only accepted submission path; CY26 incidents go to NERIS only.
- January 31, 2026: end date for edits to CY25 NFIRS records.
- February 2026: NFIRS sunset — permanently offline.
- ~27,000 fire departments impacted. Legacy NFIRS data is **not** migrated; departments had to download from the NFIRS Warehouse themselves.
([usfa.fema.gov — NFIRS sunset](https://www.usfa.fema.gov/nfirs/sunset/), [usfa.fema.gov — NERIS](https://www.usfa.fema.gov/nfirs/neris/), [lexipol — Switch from NFIRS to NERIS](https://www.lexipol.com/resources/blog/the-switch-from-nfirs-to-neris-is-here/), [hstoday — California NERIS](https://www.hstoday.us/subject-matter-areas/emergency-preparedness/california-fire-departments-prepare-for-transition-to-neris-as-nfirs-winds-down/))

### NERIS API model (confirmed)
NERIS exposes a RESTful API defined by an OpenAPI schema written in Python; CAD/RMS systems are the client, NERIS is the server. The API is publicly available to vendors. ([usfa.fema.gov — NERIS Integrations FAQ](https://www.usfa.fema.gov/nfirs/neris/faq/integrations/))

### NEMSIS unaffected (confirmed)
NEMSIS continues independently — NERIS does not affect EMS reporting paths. ([usfa.fema.gov — NERIS Integrations FAQ](https://www.usfa.fema.gov/nfirs/neris/faq/integrations/))

### Vendor readiness scoreboard
- **ImageTrend Elite**: NERIS live; new dataset, free transition. ([imagetrend.com — NERIS](https://www.imagetrend.com/neris-fire-reporting/))
- **FirstDue**: NERIS-ready day-one. ([firstdue.com — NERIS](https://www.firstdue.com/products/neris))
- **ESO**: NERIS-compatible beta as of Feb 2025; rolling updates through 2026. ([eso.com — NERIS](https://www.eso.com/neris/))
- **RedNMX / Alpine**: `UNKNOWN` publicly.
- **Tyler Fire & EMS**: `UNKNOWN` publicly.
- **Hexagon Public Safety**: `UNKNOWN` publicly.
- **CentralSquare**: `UNKNOWN` publicly; relies on FirstDue for the fire RMS layer in some deployments.

### Adaptix NERIS posture (required to compete)
1. Implement the NERIS OpenAPI as a first-class submission target inside Adaptix Fire-Service.
2. NFIRS warehouse importer for legacy data the federal system would not migrate.
3. Cortex automatic mapping of legacy NFIRS narratives → NERIS schema (Entity, CAD interface, Incident Data).
4. Customer-facing NERIS readiness dashboard inside the agency console.

---

## 15. Cross-vendor synthesis

### The macro pattern
ESO's Firehouse → Emergency Reporting → "shut down" trajectory has poisoned mid-market trust in roll-ups; departments are openly looking. Tyler and Hexagon win at the metro/ERP procurement level and are not displaceable on price alone. FirstDue is the modern challenger and the actual benchmark Adaptix must beat at the chief-of-department buying level. ImageTrend wins via state-level data-flow mandates. RedNMX is the volunteer/budget incumbent. Vector + TCE own training and external-inspector workflows respectively.

### Where every incumbent is weak (Adaptix wedge list)
1. **No vendor has a clean unified Fire + EMS + Billing + Compliance + Training stack** — ESO is the closest, but post-acquisition trust is low.
2. **NERIS handling is uneven** — only FirstDue, ImageTrend, and ESO publicly claim readiness; Tyler/Hexagon/CentralSquare/RedNMX leave the question unanswered.
3. **Volunteer-department pricing is gated** — RedNMX wins on price, but only TargetSolutions Volunteer Edition and TCE-for-AHJs are explicitly free or near-free; Adaptix can land volunteer departments aggressively.
4. **External-contractor inspection ingestion is fragmented** — TCE owns it, but no RMS natively reconciles TCE submissions into incident/prevention records inside the same UI.
5. **AI/Cortex equivalents are absent or marketing-thin** — none of the vendors above market a real prediction/prevention/routing AI surface; "AI" claims do not appear in their public product descriptions in the search results.

### Adaptix kill plan (top 7)
1. **NERIS day-one with the NFIRS warehouse importer + Cortex narrative-to-NERIS mapping.** Free to migrate.
2. **Displace Emergency Reporting refugees** with a same-vendor stability promise, audit log, and migration tooling for ER exports.
3. **Volunteer pricing tier** that beats RedNMX's $99/mo entry while including NERIS, training, and apparatus checks.
4. **Bundle Vector Check It + TargetSolutions equivalents** inside the Fire module so departments stop paying Vector.
5. **TCE inbound integration** — consume contractor-submitted fire-protection inspection reports into Adaptix Fire Prevention without making the department leave Adaptix.
6. **Unified EMS + Fire data plane** — the same incident, the same patient, the same audit trail, the same billing trigger (the response-to-reimbursement chain Adaptix already owns).
7. **Cortex inspection routing + predictive prevention** — actually use prior-incident/density/risk data to recommend next inspections; nothing in the incumbent set markets this today.

---

## Summary (under 400 words)

The fire-services software cluster is fractured and ripe for displacement. ESO has consolidated the legacy Firehouse and Emergency Reporting customer bases but is openly distrusted after shutting Emergency Reporting down post-acquisition (Mesilla FD chief on record), and ESO Fire RMS reviews show Customer Support 2.2 / Value 2.4 / Functionality 2.9 on Software Advice. FirstDue is the strongest modern challenger with day-one NERIS support and CAD-agnostic ingestion, but reviewers cite a slow map/pre-plan layer, non-global contact records, rapid-change overload, and support tickets that sit. ImageTrend Elite is NERIS-live via a new dataset (free transition) but still has the "clunky" complex-UI reputation that requires a dedicated sysadmin. Tyler and Hexagon win through municipal ERP / metro-CAD procurement at $738k–$9.1M contract scales and are not winnable on price — Adaptix must win at the chief-of-department level and force Tyler/Hexagon to coexist as the city stack. CentralSquare partnered out fire RMS to FirstDue, exposing weakness. RedNMX (Alpine) is the $99/mo volunteer-department incumbent without published NERIS readiness. Vector Solutions / TargetSolutions owns training plus the Vector Check It apparatus-checklist tier; The Compliance Engine owns contractor-submitted fire-protection inspection ingestion at $18/system/site (free to AHJs). Knox Box and Crisis Track are integration targets, not competitors.

NERIS transition is federally mandatory: January 1, 2026 cutover, NFIRS sunsets February 2026, no legacy data migration, ~27,000 departments affected, NERIS exposes a public OpenAPI. Only ImageTrend, FirstDue, and ESO publicly claim readiness; Tyler, Hexagon, RedNMX, and CentralSquare's fire path are unconfirmed.

Adaptix's seven-point kill plan: NERIS day-one plus NFIRS-warehouse importer plus Cortex narrative-to-NERIS mapping; targeted displacement of Emergency Reporting refugees with migration tooling; volunteer-department pricing that beats $99/mo and bundles NERIS, training, apparatus checks; native Vector Check It / TargetSolutions equivalents inside Fire-Service; inbound TCE integration so departments never have to leave Adaptix; unified EMS + Fire + Billing data plane (Adaptix's response-to-reimbursement chain extended to fire); and a real Cortex inspection-routing / predictive-prevention surface that no incumbent currently markets. No incumbent is simultaneously NERIS-ready, unified across Fire and EMS, transparently priced, and trusted post-roll-up — that is Adaptix's open lane.
