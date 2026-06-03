// Static metadata for the 8 vendor-research markdown files.
//
// We keep this in code (not frontmatter) because the markdown bodies are
// shipped raw to other Adaptix repos (Web App /vs/* pages) and we do not
// want to mutate the canonical research files with Astro-specific keys.
//
// Slug == file basename without extension.

export interface VendorResearchMeta {
  slug: string;
  title: string;
  cluster: string;
  summary: string;
  vendors: string[];
}

export const VENDOR_RESEARCH: VendorResearchMeta[] = [
  {
    slug: 'ems-operations',
    title: 'EMS Operations — CAD + ePCR + Field Ops',
    cluster: 'EMS Operations',
    summary:
      'ESO Suite, Zoll Data Systems, ImageTrend, Traumasoft, AngelTrack, HealthEMS — module inventory, pricing, weaknesses, Adaptix kill points.',
    vendors: ['ESO Suite', 'Zoll Data Systems', 'ImageTrend', 'Traumasoft', 'AngelTrack', 'HealthEMS'],
  },
  {
    slug: 'billing-rcm',
    title: 'EMS Billing, RCM, and Clearinghouse',
    cluster: 'Revenue Cycle',
    summary:
      'ESO Billing, Zoll AR Boost, Sweet-Billing, Waystar, Quadax, Patriot, R1 RCM, Office Ally, Change Healthcare, EMS|MC, Digitech — denial intel, EDI coverage, AI claims.',
    vendors: [
      'ESO Billing',
      'Zoll AR Boost',
      'Sweet-Billing',
      'Waystar',
      'Quadax',
      'Patriot Software',
      'R1 RCM',
      'Office Ally',
      'Change Healthcare',
      'EMS|MC',
      'Digitech',
    ],
  },
  {
    slug: 'fire-services',
    title: 'Fire Services — RMS + NFIRS + NERIS',
    cluster: 'Fire',
    summary:
      'ESO Fire RMS, ImageTrend Fire, Emergency Reporting, FirstDue, Streamline Health, Vector Solutions — NFIRS/NERIS export depth, inspections, mobile.',
    vendors: [
      'ESO Fire RMS',
      'ImageTrend Fire',
      'Emergency Reporting',
      'FirstDue',
      'Streamline Health',
      'Vector Solutions',
    ],
  },
  {
    slug: 'air-medical-hems',
    title: 'Air Medical / HEMS',
    cluster: 'Air Medical',
    summary:
      'Golden Hour, MEDEVAC tools, Air Methods proprietary stacks, Global Medical Response platforms — flight ops, dispatch, billing handoffs.',
    vendors: ['Golden Hour', 'Air Methods stacks', 'Global Medical Response stacks', 'MEDEVAC tools'],
  },
  {
    slug: 'hospital-interop-comms',
    title: 'Hospital Interop + Communications',
    cluster: 'Interop',
    summary:
      'Pulsara, Twiage, ESO HDE, Health Data Exchange platforms, Rave Mobile Safety, RapidSOS — hospital handoff, ED notification, closed-loop outcomes.',
    vendors: ['Pulsara', 'Twiage', 'ESO HDE', 'Rave Mobile Safety', 'RapidSOS'],
  },
  {
    slug: 'workforce-scheduling-hr',
    title: 'Workforce, Scheduling, and HR',
    cluster: 'Workforce',
    summary:
      'Aladtec, PlanIt Schedule, Kronos / UKG, When I Work, Crew Sense, Vector Scheduling — shift trade, certifications, payroll handoff, mobile.',
    vendors: ['Aladtec', 'PlanIt Schedule', 'Kronos / UKG', 'When I Work', 'Crew Sense', 'Vector Scheduling'],
  },
  {
    slug: 'narcotics-inventory-compliance',
    title: 'Narcotics, Inventory, and Compliance',
    cluster: 'Compliance',
    summary:
      'Operative IQ, Operative Compliance, Operative Patriot, Logis Inventory, Cipher Health controlled-substance audit, DEA-specific workflows.',
    vendors: ['Operative IQ', 'Operative Compliance', 'Logis Inventory', 'Cipher Health', 'OperativeIQ Narcotics'],
  },
  {
    slug: 'crm-cs-mobile',
    title: 'CRM, Customer Success, and Mobile Field Apps',
    cluster: 'CRM + Field',
    summary:
      'Salesforce Health Cloud, HubSpot for healthcare ops, Zendesk for EMS support, ESO Mobile, Zoll Inspire, ImageTrend Elite Field, AngelTrack Mobile.',
    vendors: [
      'Salesforce Health Cloud',
      'HubSpot',
      'Zendesk',
      'ESO Mobile',
      'Zoll Inspire',
      'ImageTrend Elite Field',
      'AngelTrack Mobile',
    ],
  },
];

export const VENDOR_RESEARCH_BY_SLUG: Record<string, VendorResearchMeta> = Object.fromEntries(
  VENDOR_RESEARCH.map((v) => [v.slug, v]),
);
