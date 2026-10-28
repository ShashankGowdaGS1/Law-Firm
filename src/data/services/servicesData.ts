export interface LegalContextData {
  statutoryFramework: string;
  keyProvisions: string[];
  complianceConsiderations: string;
}

export interface LegalServiceItem {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  shortTitle: string;
  navLabel?: string;
  category: string;
  categoryId: "corporate-commercial" | "dispute-resolution" | "regulatory-specialized";
  description: string;
  overview: string[];
  focusAreas: string[];
  legalContext?: LegalContextData;
  proceduralNotes?: string[];
  relatedServiceSlugs: string[];
  iconName: string;
  isFeatured: boolean;
  isPlaceholder?: boolean;
}

export interface PracticeCategory {
  id: "corporate-commercial" | "dispute-resolution" | "regulatory-specialized";
  index: string;
  title: string;
  shortTitle: string;
  description: string;
}

export interface DetailedServiceOffering {
  id: string;
  index: string;
  title: string;
  serviceSlug: string;
  category: string;
  shortDescription: string;
  isPlaceholder?: boolean;
}

export const PRACTICE_CATEGORIES: PracticeCategory[] = [
  {
    id: "corporate-commercial",
    index: "01",
    title: "Corporate & Commercial Advisory",
    shortTitle: "Corporate & Commercial",
    description:
      "Strategic corporate counsel, board fiduciary governance, statutory company law compliances, commercial agreements, and real estate diligence."
  },
  {
    id: "dispute-resolution",
    index: "02",
    title: "Dispute Resolution & Arbitration",
    shortTitle: "Dispute Resolution",
    description:
      "Domestic and international commercial arbitration, appellate advocacy, interim relief petitions, and contentious civil litigation across judicial forums."
  },
  {
    id: "regulatory-specialized",
    index: "03",
    title: "Regulatory & Specialized Practice",
    shortTitle: "Regulatory & Specialized",
    description:
      "Insolvency resolution under the IBC, competition law advisory, intellectual property portfolio protection, and cyber governance compliance."
  }
];

export const LEGAL_SERVICES: LegalServiceItem[] = [
  {
    id: "corporate-advisory",
    slug: "corporate-advisory",
    aliases: ["corporate-commercial-advisory"],
    title: "Corporate Advisory & Board Governance",
    shortTitle: "Corporate Advisory",
    navLabel: "Business Legal Advice",
    category: "Corporate & Commercial",
    categoryId: "corporate-commercial",
    description:
      "Counsel on corporate governance, statutory compliances under company law, director responsibilities, and commercial contracts.",
    overview: [
      "Our corporate advisory practice assists domestic enterprises, multinational subsidiaries, and board directors in navigating the statutory architecture of the Companies Act, 2013 and applicable commercial regulations in India.",
      "We advise on board fiduciary duties, secretarial audits, statutory disclosure frameworks, shareholder agreements, joint venture structuring, and day-to-day corporate governance mandates.",
      "Every matter is supported by rigorous legal diligence, ensuring that transactional documents, resolutions, and regulatory filings maintain legal validity and minimize liability exposure."
    ],
    focusAreas: [
      "Companies Act Statutory Filings & Secretarial Audits",
      "Board Advisory & Director Disclosure Compliance",
      "Commercial Contracts & Joint Venture Agreements",
      "Foreign Direct Investment (FDI) & FEMA Regulations",
      "Shareholders Agreements & Corporate Restructuring Charters"
    ],
    legalContext: {
      statutoryFramework: "Companies Act, 2013 & Foreign Exchange Management Act (FEMA), 1999",
      keyProvisions: [
        "Section 134 & 149: Board of Directors fiduciary disclosures and independent director governance standards",
        "Section 166: Statutory duties of directors and personal liability safeguards",
        "Section 186: Loans and investments by companies under corporate limits",
        "FEMA Foreign Direct Investment (FDI) Regulations and RBI reporting requirements"
      ],
      complianceConsiderations:
        "Maintaining updated secretarial records, annual RoC filings, and board minutes is essential to preserve corporate standing and avoid statutory penalties."
    },
    proceduralNotes: [
      "Initial charter and secretarial documentation review to ascertain corporate standing.",
      "Drafting and vetting of board resolutions, shareholder agreements, and disclosure certificates.",
      "Coordination of statutory filings before the Registrar of Companies (RoC) and regulatory authorities."
    ],
    relatedServiceSlugs: ["real-estate-property", "regulatory-compliance", "commercial-arbitration"],
    iconName: "Briefcase",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "real-estate-property",
    slug: "real-estate-property",
    aliases: ["real-estate", "property-law"],
    title: "Real Estate, Property & Conveyancing",
    shortTitle: "Property & Real Estate",
    navLabel: "Property & Documents",
    category: "Corporate & Commercial",
    categoryId: "corporate-commercial",
    description:
      "Title search diligence, commercial lease agreements, property conveyance documentation, and statutory regulatory compliance.",
    overview: [
      "Our property and real estate practice covers transactional title diligence, conveyance drafting, commercial leasing, and regulatory compliance under RERA and state-specific property enactments.",
      "We provide comprehensive title search reports across institutional properties, reviewing mutation records, revenue records, encumbrance certificates, and local municipal zoning permissions.",
      "Our documentation counsel ensures that deeds of conveyance, lease deeds, joint development agreements, and mortgage charges are drafted with precision and duly registered."
    ],
    focusAreas: [
      "Comprehensive Title Diligence & Encumbrance Verification",
      "RERA Regulatory Compliance & Builder-Buyer Diligence",
      "Commercial Lease Agreements & Joint Development Deeds",
      "Conveyancing & Registration before Sub-Registrar Offices",
      "Easement Rights & Property Mutation Protocols"
    ],
    legalContext: {
      statutoryFramework: "Transfer of Property Act, 1882 & Real Estate (Regulation and Development) Act (RERA), 2016",
      keyProvisions: [
        "Section 54: Sale and conveyance requirements of immovable property",
        "Section 105: Leases of immovable property and statutory terms",
        "Section 3 & 4 (RERA): Mandatory promoter registration and project disclosures",
        "Registration Act, 1908: Compulsory registration of title and lease instruments"
      ],
      complianceConsiderations:
        "Thorough title search covering an unbroken 30-year chain of title is standard practice to safeguard institutional and commercial investments against undisclosed liens."
    },
    proceduralNotes: [
      "Collection of historical revenue records, registered deeds, and municipal tax receipts.",
      "Title search inspection at local sub-registrar archives and encumbrance verification.",
      "Drafting of conveyance instruments with customary warranties and indemnities."
    ],
    relatedServiceSlugs: ["corporate-advisory", "civil-appellate-litigation", "regulatory-compliance"],
    iconName: "Building2",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "commercial-arbitration",
    slug: "commercial-arbitration",
    aliases: ["commercial-dispute-resolution", "arbitration"],
    title: "Commercial & International Arbitration",
    shortTitle: "Commercial Arbitration",
    navLabel: "Business Disputes",
    category: "Dispute Resolution",
    categoryId: "dispute-resolution",
    description:
      "Representation across domestic and international institutional arbitrations, interim measures, and arbitral award enforcement.",
    overview: [
      "Our commercial arbitration practice covers domestic and international arbitral proceedings governed by the Arbitration and Conciliation Act, 1996 and institutional arbitral rules.",
      "We formulate dispute strategy from the initial notice of invocation under Section 21 through to tribunal constitution, statement of claims, witness examination, and final hearing advocacy.",
      "We regularly advise on Section 9 and Section 17 interim measures of protection, emergency arbitrator proceedings, and post-award Section 34 challenge and Section 36 enforcement petitions."
    ],
    focusAreas: [
      "Arbitration Clause Strategy & Seat Selection",
      "Section 9 & Section 17 Interim Relief Measures",
      "Institutional Arbitrations (MCIA, SIAC, LCIA, ICC)",
      "Section 34 & 36 Award Challenge and Enforcement Petitions",
      "Appointment of Arbitrators under Section 11 Petitions"
    ],
    legalContext: {
      statutoryFramework: "Arbitration and Conciliation Act, 1996 (as amended)",
      keyProvisions: [
        "Section 9: Interim measures of protection by competent courts prior to tribunal constitution",
        "Section 11: Appointment of arbitrators upon failure of mutual appointment mechanisms",
        "Section 17: Interim measures ordered directly by the arbitral tribunal",
        "Section 34: Narrow statutory grounds for setting aside arbitral awards",
        "Section 36: Enforcement of domestic arbitral awards as civil court decrees"
      ],
      complianceConsiderations:
        "Strict adherence to statutory timelines and institutional fee schedules is required to maintain procedural standing during arbitral proceedings."
    },
    proceduralNotes: [
      "Analysis of contract dispute clause, governing law, and designated arbitral seat.",
      "Drafting and service of statutory Section 21 notice invoking arbitration.",
      "Filing of Section 9 applications where preservation of subject matter or interim relief is imperative."
    ],
    relatedServiceSlugs: ["civil-appellate-litigation", "corporate-advisory", "insolvency-bankruptcy"],
    iconName: "Scale",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "civil-appellate-litigation",
    slug: "civil-appellate-litigation",
    aliases: ["constitutional-appellate-advocacy", "litigation"],
    title: "Civil Litigation & Appellate Practice",
    shortTitle: "Civil Litigation",
    navLabel: "Civil Disputes",
    category: "Dispute Resolution",
    categoryId: "dispute-resolution",
    description:
      "Appellate advocacy, commercial division proceedings, statutory appeals, and writ petitions before competent courts.",
    overview: [
      "Our civil litigation and appellate practice provides representation across commercial division suits, statutory appeals, civil revision petitions, and constitutional writ proceedings.",
      "We prioritize meticulous case preparation, factual diligence, and analytical brief drafting to articulate complex commercial disputes clearly before appellate benches.",
      "Chambers handles original side suits, summary suits, injunction applications, and regular first and second appeals arising under diverse statutory frameworks."
    ],
    focusAreas: [
      "Special Leave Petitions & Appellate Filings",
      "Commercial Division Suits & Injunction Applications",
      "Writ Petitions under Articles 226 & 32",
      "Original & Appellate Side Jurisdiction Proceedings",
      "Statutory Appeals under Sectoral Enactments"
    ],
    legalContext: {
      statutoryFramework: "Code of Civil Procedure, 1908 (CPC) & Commercial Courts Act, 2015",
      keyProvisions: [
        "Section 9 (CPC): Jurisdiction of civil courts to try suits of a civil nature",
        "Order XXXIX Rules 1 & 2 (CPC): Temporary injunctions and interlocutory orders",
        "Section 12A (Commercial Courts Act): Mandatory pre-institution mediation and settlement",
        "Articles 226 & 32 of the Constitution: Extraordinary writ jurisdiction"
      ],
      complianceConsiderations:
        "Under the Commercial Courts Act, 2015, mandatory pre-institution mediation must be exhausted unless urgent interim relief is specifically contemplated and pleaded."
    },
    proceduralNotes: [
      "Case file examination, cause-of-action formulation, and limitation period verification.",
      "Drafting of plaints, written statements, affidavits, and interlocutory applications.",
      "Compliance with court registry filing standards, indexation, and court fee schedules."
    ],
    relatedServiceSlugs: ["commercial-arbitration", "insolvency-bankruptcy", "corporate-advisory"],
    iconName: "Landmark",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "insolvency-bankruptcy",
    slug: "insolvency-bankruptcy",
    aliases: ["banking-finance-insolvency", "ibc"],
    title: "Insolvency & Bankruptcy (IBC)",
    shortTitle: "Insolvency & Bankruptcy",
    navLabel: "Debt & Insolvency",
    category: "Regulatory & Specialized",
    categoryId: "regulatory-specialized",
    description:
      "Advising creditors, corporate debtors, and resolution applicants across statutory CIRP proceedings before company law tribunals.",
    overview: [
      "Our insolvency and restructuring practice advises financial creditors, operational creditors, corporate debtors, and resolution applicants under the Insolvency and Bankruptcy Code, 2016.",
      "We advise on initiating and defending corporate insolvency resolution processes (CIRP), formulating proof of claims, participating in Committee of Creditors (CoC) proceedings, and conducting resolution plan diligence.",
      "We also handle proceedings concerning avoidance transactions, preferential payments, undervaluation claims, and liquidation protocols before company law tribunals."
    ],
    focusAreas: [
      "Section 7 & 9 CIRP Petitions before NCLT",
      "Committee of Creditors (CoC) Advisory & Representation",
      "Resolution Plan Diligence & Submission Strategy",
      "Liquidation Proceedings & Avoidance Transaction Defense",
      "Personal Guarantor Insolvency Proceedings"
    ],
    legalContext: {
      statutoryFramework: "Insolvency and Bankruptcy Code (IBC), 2016",
      keyProvisions: [
        "Section 7: Initiation of CIRP by financial creditors",
        "Section 9: Initiation of CIRP by operational creditors after statutory demand notice",
        "Section 14: Statutory moratorium upon CIRP admission",
        "Section 29A: Eligibility criteria for resolution applicants",
        "Sections 43, 45 & 66: Avoidance of preferential, undervalued, and fraudulent transactions"
      ],
      complianceConsiderations:
        "Statutory demand notices under Section 8 must be precisely served prior to operational creditor petitions, and pre-existing disputes must be carefully evaluated."
    },
    proceduralNotes: [
      "Debt and default verification, financial records audit, and demand notice issuance.",
      "Drafting and filing of company petitions with statutory proof before company law benches.",
      "Representation through admission, moratorium imposition, and creditor committee deliberations."
    ],
    relatedServiceSlugs: ["corporate-advisory", "commercial-arbitration", "civil-appellate-litigation"],
    iconName: "FileText",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "intellectual-property",
    slug: "intellectual-property",
    aliases: ["ip-law", "trademark"],
    title: "Intellectual Property Protection & Strategy",
    shortTitle: "Intellectual Property",
    navLabel: "Trademarks & IP",
    category: "Regulatory & Specialized",
    categoryId: "regulatory-specialized",
    description:
      "Protection, licensing, prosecution, and enforcement of trademarks, copyrights, industrial designs, and trade secrets.",
    overview: [
      "Our intellectual property practice assists enterprises and creators in securing, monetizing, and defending their proprietary intangible assets across India.",
      "We advise on trademark availability clearance searches, filing strategies across multiple classes, responding to registry examination reports, and conducting opposition and rectification proceedings.",
      "Chambers also advises on copyright registration, software and technology licensing agreements, non-disclosure deeds, trade secret governance, and contentious IP infringement suits."
    ],
    focusAreas: [
      "Trademark Portfolio Strategy & Registry Filings",
      "Opposition & Rectification Proceedings",
      "IP Infringement Litigation & Passing Off Suits",
      "Licensing, Assignment & Technology Transfer Agreements",
      "Copyright Protection & Digital Content Governance"
    ],
    legalContext: {
      statutoryFramework: "Trade Marks Act, 1999 & Copyright Act, 1957",
      keyProvisions: [
        "Section 9 & 11 (Trade Marks Act): Absolute and relative grounds for refusal of registration",
        "Section 29: Registered trademark infringement actions and statutory remedies",
        "Section 51 & 55 (Copyright Act): Copyright infringement and civil remedies",
        "Common Law: Passing off protections for unregistered marks and commercial goodwill"
      ],
      complianceConsiderations:
        "Conducting comprehensive clearance searches across identical and phonetically similar marks before commercial rollout prevents costly opposition delays and litigation."
    },
    proceduralNotes: [
      "Prior-art and registry clearance search across classification indices.",
      "Application drafting, specification of goods/services, and registry filing.",
      "Preparation of evidence affidavits in support of distinctiveness, user claims, and opposition briefs."
    ],
    relatedServiceSlugs: ["cyber-technology-law", "corporate-advisory", "regulatory-compliance"],
    iconName: "Shield",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "regulatory-compliance",
    slug: "regulatory-compliance",
    aliases: ["regulatory-statutory-compliance", "compliance"],
    title: "Competition & Regulatory Compliance",
    shortTitle: "Regulatory Compliance",
    navLabel: "Business Compliance",
    category: "Regulatory & Specialized",
    categoryId: "regulatory-specialized",
    description:
      "Statutory compliance assessments, regulatory filings, data governance reviews, and representation before administrative forums.",
    overview: [
      "Our regulatory compliance practice helps corporate boards and regulated sector entities maintain conformity with evolving Indian administrative, sectoral, and competition frameworks.",
      "We conduct internal statutory compliance audits, review anti-competitive risk under the Competition Act, and advise on statutory disclosure obligations across multiple oversight authorities.",
      "We represent clients in administrative inquiries, show-cause notice responses, and appeals before specialized appellate and regulatory tribunals."
    ],
    focusAreas: [
      "Digital Personal Data Protection (DPDP) Readiness",
      "Sectoral Regulatory Filings & Advisory",
      "Administrative Tribunals (TDSAT, APTEL, NGT, CCI)",
      "Internal Compliance Audits & Statutory Risk Audits",
      "Competition Law Diligence & Merger Control Assessments"
    ],
    legalContext: {
      statutoryFramework: "Competition Act, 2002 & Sectoral Administrative Statutes",
      keyProvisions: [
        "Section 3: Prohibition of anti-competitive agreements and cartel conduct",
        "Section 4: Abuse of dominant market position regulations",
        "Section 5 & 6: Combination regulations and merger control notification thresholds",
        "Tribunal Jurisdiction: Statutory review standards before specialized regulatory bodies"
      ],
      complianceConsiderations:
        "Proactive internal compliance programs and regular compliance audits substantially mitigate enterprise liability under stringent regulatory enforcement regimes."
    },
    proceduralNotes: [
      "Comprehensive regulatory audit of corporate operations against applicable sectoral rules.",
      "Preparation of structured responses to regulatory notices and statutory clarification demands.",
      "Filing of representations, review petitions, and appeals before statutory appellate bodies."
    ],
    relatedServiceSlugs: ["corporate-advisory", "cyber-technology-law", "civil-appellate-litigation"],
    iconName: "FileCheck",
    isFeatured: true,
    isPlaceholder: false
  },
  {
    id: "cyber-technology-law",
    slug: "cyber-technology-law",
    aliases: ["technology-law", "data-privacy"],
    title: "Cyber, Information Technology & Data Privacy",
    shortTitle: "Cyber & Technology Law",
    navLabel: "Technology & Cyber Law",
    category: "Regulatory & Specialized",
    categoryId: "regulatory-specialized",
    description:
      "Advisory on information technology compliance, intermediary obligations, digital data frameworks, and cybersecurity governance.",
    overview: [
      "Our cyber, technology, and data privacy practice counsels technology platforms, digital enterprises, and corporate data fiduciaries on statutory compliance in the digital ecosystem.",
      "We advise on intermediary guidelines, CERT-In cybersecurity incident reporting directives, cloud service agreements, data processing contracts, and electronic evidence preservation.",
      "Chambers provides strategic readiness assessments under the Digital Personal Data Protection Act, 2023, structuring privacy policies, consent notices, and data governance frameworks."
    ],
    focusAreas: [
      "Intermediary Due Diligence under IT Rules",
      "CERT-In Cyber Incident Reporting & Compliance",
      "Cloud & SaaS Data Processing Agreements",
      "Digital Evidence & Cyber Crime Defense Advisory",
      "Digital Personal Data Protection (DPDP) Compliance Architecture"
    ],
    legalContext: {
      statutoryFramework: "Information Technology Act, 2000 & Digital Personal Data Protection (DPDP) Act, 2023",
      keyProvisions: [
        "Section 79 (IT Act): Intermediary safe-harbour protections and statutory due diligence",
        "Section 43A & 66: Data security obligations, compensation for failure, and computer offences",
        "Section 6 (DPDP Act): Notice and consent requirements for digital personal data processing",
        "Section 8 (DPDP Act): General obligations of data fiduciaries and security safeguards"
      ],
      complianceConsiderations:
        "CERT-In directives mandate reporting of specified cybersecurity incidents within 6 hours of identification, requiring robust incident response procedures."
    },
    proceduralNotes: [
      "Data mapping and gap analysis against statutory data protection and IT requirements.",
      "Drafting of user terms, privacy notices, consent architectures, and vendor data processing deeds.",
      "Establishing statutory incident response checklists to ensure compliance with reporting timelines."
    ],
    relatedServiceSlugs: ["intellectual-property", "regulatory-compliance", "corporate-advisory"],
    iconName: "ShieldAlert",
    isFeatured: true,
    isPlaceholder: false
  }
];

export const CORE_SERVICES = LEGAL_SERVICES;

/**
 * Featured Specific Legal Offerings (Section 05 Service Index)
 * Granular documentation, filing, and procedural legal services
 * linking to their parent practice areas.
 */
export const DETAILED_SERVICE_OFFERINGS: DetailedServiceOffering[] = [
  {
    id: "offering-commercial-contracts",
    index: "01",
    title: "Commercial Contract & Agreement Drafting",
    serviceSlug: "corporate-advisory",
    category: "Corporate & Commercial",
    shortDescription:
      "Drafting and vetting of commercial contracts, joint venture agreements, shareholder deeds, and vendor procurement frameworks.",
    isPlaceholder: false
  },
  {
    id: "offering-arbitration-notices",
    index: "02",
    title: "Arbitration Invocation & Interim Relief Petitions",
    serviceSlug: "commercial-arbitration",
    category: "Dispute Resolution",
    shortDescription:
      "Formulation of statutory Section 21 arbitration notices, urgent Section 9 interim relief petitions, and statement of claims.",
    isPlaceholder: false
  },
  {
    id: "offering-appellate-briefing",
    index: "03",
    title: "Appellate Briefing & Special Leave Petitions (SLP)",
    serviceSlug: "civil-appellate-litigation",
    category: "Dispute Resolution",
    shortDescription:
      "Preparation of Special Leave Petitions, statutory appeals, and civil revision petitions before appellate courts.",
    isPlaceholder: false
  },
  {
    id: "offering-insolvency-filing",
    index: "04",
    title: "Corporate Insolvency & CIRP Applications (IBC)",
    serviceSlug: "insolvency-bankruptcy",
    category: "Insolvency & Restructuring",
    shortDescription:
      "Structuring creditor applications, proof of claims verification, and resolution plan diligence before company law tribunals.",
    isPlaceholder: false
  },
  {
    id: "offering-trademark-prosecution",
    index: "05",
    title: "Trademark Prosecution & Opposition Filings",
    serviceSlug: "intellectual-property",
    category: "Regulatory & Specialized",
    shortDescription:
      "Comprehensive registry clearance searches, multi-class trademark filings, notice of opposition drafting, and IP portfolio defense.",
    isPlaceholder: false
  },
  {
    id: "offering-title-diligence",
    index: "06",
    title: "Property Title Verification & Conveyance Deeds",
    serviceSlug: "real-estate-property",
    category: "Property & Documentation",
    shortDescription:
      "Comprehensive title diligence reports, encumbrance verification, commercial lease drafting, and conveyance documentation.",
    isPlaceholder: false
  }
];

export function getServiceBySlug(slug: string): LegalServiceItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return LEGAL_SERVICES.find(
    (s) => s.slug === normalized || (s.aliases && s.aliases.includes(normalized))
  );
}

export function getServicesByCategory(
  categoryId: "corporate-commercial" | "dispute-resolution" | "regulatory-specialized"
): LegalServiceItem[] {
  return LEGAL_SERVICES.filter((s) => s.categoryId === categoryId);
}

export function getRelatedServices(currentSlug: string): LegalServiceItem[] {
  const service = getServiceBySlug(currentSlug);
  if (!service || !service.relatedServiceSlugs) {
    return LEGAL_SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);
  }
  const related = service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is LegalServiceItem => Boolean(s));

  if (related.length === 0) {
    return LEGAL_SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);
  }
  return related.slice(0, 3);
}
