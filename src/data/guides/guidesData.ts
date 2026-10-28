/**
 * Legal Guides & Knowledge Base Centralized Data
 * 
 * In strict compliance with the Advocates Act, 1961 and Bar Council of India regulations:
 * - Content is for general informational and educational purposes only.
 * - Articles do not constitute tailored legal advice nor create an advocate-client relationship.
 * - Contains verified statutory references and objective legal frameworks.
 */

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface LegalReference {
  title: string;
  citation: string;
  type: "Statute" | "Statutory Rule" | "Judicial Precedent" | "Regulatory Notice";
}

export interface LegalGuide {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryId: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  topicTag: string;
  tags: string[];
  authorNote: string;
  featured: boolean;
  publicationStatus: "published" | "draft" | "review" | "withdrawn";
  isPlaceholder: boolean;
  summary: string[];
  sections: ArticleSection[];
  sources: LegalReference[];
  relatedGuideSlugs: string[];
  relatedPracticeSlug?: string;
}

export const LEGAL_GUIDES: LegalGuide[] = [
  {
    id: "guide-corporate-governance",
    slug: "corporate-governance-statutory-compliance-india",
    title: "Key Statutory Compliance Protocols for Private Companies in India",
    category: "Corporate & Commercial",
    categoryId: "corporate-commercial",
    excerpt:
      "A systematic overview of statutory filings, board governance requirements, and secretarial compliance mandates under the Companies Act, 2013.",
    publishedDate: "October 2026",
    readTime: "7 min read",
    topicTag: "Compliance & Governance",
    tags: ["Companies Act", "Board Governance", "Secretarial Audit", "RoC Compliance"],
    authorNote: "Chambers Practice Research Group • Educational Information Only",
    featured: true,
    publicationStatus: "published",
    isPlaceholder: false,
    summary: [
      "Overview of annual statutory filing requirements (AOC-4, MGT-7) with the Registrar of Companies.",
      "Board composition standards, director disclosure requirements under Section 184, and committee structures.",
      "Internal secretarial audit obligations and preventive compliance frameworks."
    ],
    sections: [
      {
        id: "statutory-filing-architecture",
        heading: "1. The Statutory Filing Architecture Under Company Law",
        paragraphs: [
          "Private limited companies incorporated in India operate within the strict compliance framework of the Companies Act, 2013. Periodic filings before the Registrar of Companies (RoC) via the Ministry of Corporate Affairs (MCA) portal are not merely administrative formalities; they represent statutory disclosures essential to maintaining active corporate standing.",
          "Every private company must submit its audited financial statements (Form AOC-4) within 30 days of its Annual General Meeting (AGM) and its annual return (Form MGT-7/MGT-7A) within 60 days. In addition, significant beneficial ownership disclosures (BEN-2) and director KYC updates (DIR-3 KYC) are subject to mandatory annual schedules."
        ],
        bulletPoints: [
          "Form AOC-4: Balance sheet, statement of profit and loss, and auditor's report.",
          "Form MGT-7: Capital structure, shareholding pattern, and director remuneration particulars.",
          "Form DIR-3 KYC: Annual verification of Director Identification Numbers (DIN)."
        ]
      },
      {
        id: "director-duties-disclosures",
        heading: "2. Director Fiduciary Duties & Disclosure Mandates",
        paragraphs: [
          "Under Section 166 of the Companies Act, 2013, directors owe codified fiduciary duties to act in good faith to promote the objects of the company for the benefit of its members as a whole, while considering employee and stakeholder interests.",
          "Section 184 mandates that every director must disclose their concern or interest in any company, body corporate, firm, or association at the first meeting of the board each financial year (Form MBP-1). Failure to disclose disqualifies the director and renders related contracts voidable at the option of the company."
        ],
        bulletPoints: [
          "Annual disclosure of interest in Form MBP-1 at the first board meeting of each fiscal year.",
          "Mandatory intimation of disqualifications under Section 164(2) via Form DIR-8.",
          "Maintenance of the statutory register of contracts in which directors are interested (Form MBP-4)."
        ]
      },
      {
        id: "board-meetings-secretarial-records",
        heading: "3. Board Meetings & Secretarial Record Maintenance",
        paragraphs: [
          "Section 173 requires a minimum of four board meetings in every calendar year, with a maximum interval of 120 days between consecutive meetings. Minimum seven days' written notice must be dispatched to every director at their registered address.",
          "Maintenance of indexed minutes books—signed within thirty days of each meeting—is mandatory under Section 118 and the Secretarial Standards issued by the Institute of Company Secretaries of India (ICSI)."
        ]
      },
      {
        id: "preventive-compliance-audit",
        heading: "4. Preventive Compliance Health-Checks",
        paragraphs: [
          "Enterprise risks often stem from unrecorded loans between related parties (Section 185), unauthorized investments exceeding statutory net worth caps (Section 186), or delayed creation of charges on company assets (Form CHG-1). Conducting regular preventive legal audits protects boards and shareholders against retrospective compounding penalties."
        ]
      }
    ],
    sources: [
      {
        title: "Companies Act, 2013 (Act No. 18 of 2013)",
        citation: "Sections 118, 166, 173, 184, 185, 186",
        type: "Statute"
      },
      {
        title: "Companies (Management and Administration) Rules, 2014",
        citation: "Rules 11, 12, 13",
        type: "Statutory Rule"
      },
      {
        title: "Secretarial Standard on Meetings of the Board of Directors (SS-1)",
        citation: "Institute of Company Secretaries of India (ICSI)",
        type: "Regulatory Notice"
      }
    ],
    relatedGuideSlugs: [
      "commercial-arbitration-pre-institution-mediation",
      "digital-personal-data-protection-compliance-roadmap"
    ],
    relatedPracticeSlug: "corporate-advisory"
  },
  {
    id: "guide-commercial-dispute-resolution",
    slug: "commercial-arbitration-pre-institution-mediation",
    title: "Navigating Commercial Arbitration & Pre-Institution Mediation",
    category: "Dispute Resolution",
    categoryId: "dispute-resolution",
    excerpt:
      "Understanding statutory mediation requirements under Section 12A of the Commercial Courts Act, arbitral seat determination, and enforcement procedures.",
    publishedDate: "October 2026",
    readTime: "9 min read",
    topicTag: "Commercial Courts Act",
    tags: ["Arbitration", "Mediation", "Commercial Courts", "Section 9 Interim Relief"],
    authorNote: "Chambers Practice Research Group • Educational Information Only",
    featured: false,
    publicationStatus: "published",
    isPlaceholder: false,
    summary: [
      "Mandatory pre-institution mediation requirements under Section 12A of the Commercial Courts Act.",
      "Key considerations in drafting dispute resolution clauses and designating arbitral seats.",
      "Timelines and interim relief provisions under the Arbitration & Conciliation Act."
    ],
    sections: [
      {
        id: "pre-institution-mediation-mandate",
        heading: "1. The Mandatory Pre-Institution Mediation Requirement",
        paragraphs: [
          "Enacted to streamline commercial litigation and alleviate judicial backlogs, Section 12A of the Commercial Courts Act, 2015 establishes that a suit of commercial dispute shall not be instituted unless the plaintiff exhausts the remedy of pre-institution mediation, unless urgent interim relief is contemplated.",
          "The Supreme Court of India in Patil Automation Pvt. Ltd. v. Rakheja Engineers Private Ltd. (2022) affirmed that Section 12A is mandatory. A plaint instituted without exhausting mediation or without a genuine prayer for urgent interim relief is liable to be rejected under Order VII Rule 11 of the Code of Civil Procedure."
        ],
        bulletPoints: [
          "Mediation process administered by Legal Services Authorities within a 3-month window.",
          "Settlement arrived at during mediation acquires the status of an arbitral award under Section 30(4).",
          "Urgent interim relief applications must demonstrate substantive peril, not mere procedural convenience."
        ]
      },
      {
        id: "arbitration-clause-strategy",
        heading: "2. Strategic Drafting of Arbitration Agreements",
        paragraphs: [
          "The distinction between the 'seat' and 'venue' of an arbitration remains critical in Indian jurisprudence. While the venue signifies the physical place of hearings, the seat designates the juridical center of the arbitration, conferring exclusive supervisory jurisdiction upon the courts of that territory.",
          "Careful designation of institutional arbitration rules (e.g., MCIA, SIAC, DIAC) ensures procedural certainty, predictable tribunal appointment schedules, and emergency arbitrator availability."
        ]
      },
      {
        id: "interim-measures-section-9",
        heading: "3. Interim Measures: Section 9 & Section 17",
        paragraphs: [
          "Prior to tribunal constitution, parties may seek urgent interim measures under Section 9 of the Arbitration and Conciliation Act, 1996 before a competent court. Once the arbitral tribunal is formed, Section 9(3) stipulates that courts shall not entertain interim applications unless efficacious relief cannot be obtained under Section 17 before the arbitral panel."
        ]
      },
      {
        id: "enforcement-protocols",
        heading: "4. Enforcement & Challenge of Arbitral Awards",
        paragraphs: [
          "Domestic arbitral awards are enforceable as civil court decrees under Section 36 upon the expiry of the three-month period prescribed for filing a challenge under Section 34. Grounds for setting aside under Section 34 remain narrow, confined to patent illegality, public policy violations, and fundamental procedural breaches."
        ]
      }
    ],
    sources: [
      {
        title: "Commercial Courts Act, 2015 (Act No. 4 of 2016)",
        citation: "Section 12A & Commercial Division Provisions",
        type: "Statute"
      },
      {
        title: "Arbitration and Conciliation Act, 1996 (as amended)",
        citation: "Sections 9, 11, 17, 34, 36",
        type: "Statute"
      },
      {
        title: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Private Ltd.",
        citation: "(2022) 10 SCC 1 — Supreme Court of India",
        type: "Judicial Precedent"
      }
    ],
    relatedGuideSlugs: [
      "corporate-governance-statutory-compliance-india",
      "digital-personal-data-protection-compliance-roadmap"
    ],
    relatedPracticeSlug: "commercial-arbitration"
  },
  {
    id: "guide-data-protection-compliance",
    slug: "digital-personal-data-protection-compliance-roadmap",
    title: "Institutional Readiness under the Digital Personal Data Protection (DPDP) Regime",
    category: "Regulatory & Compliance",
    categoryId: "regulatory-compliance",
    excerpt:
      "Essential institutional obligations for data fiduciaries, consent notice architecture, and cross-border processing safeguards under the DPDP Act.",
    publishedDate: "September 2026",
    readTime: "6 min read",
    topicTag: "Data Privacy",
    tags: ["DPDP Act", "Data Fiduciary", "Consent Architecture", "Privacy Compliance"],
    authorNote: "Chambers Practice Research Group • Educational Information Only",
    featured: false,
    publicationStatus: "published",
    isPlaceholder: false,
    summary: [
      "Classification of data fiduciaries and verifiable parental consent obligations.",
      "Formulation of clear, itemized notice mechanisms for data principals.",
      "Grievance redressal frameworks and penalties for data breach reporting lapses."
    ],
    sections: [
      {
        id: "dpdp-statutory-architecture",
        heading: "1. The Statutory Architecture of the DPDP Act",
        paragraphs: [
          "The Digital Personal Data Protection Act, 2023 establishes an overhauled framework for processing digital personal data within India and extraterritorial data involving goods or services offered to individuals in India.",
          "The statute classifies entities determining the purpose and means of data processing as 'Data Fiduciaries,' while individuals to whom data relates are designated 'Data Principals.'"
        ],
        bulletPoints: [
          "Applies to digital personal data collected online or digitised from offline records.",
          "Excludes personal data made publicly available by the data principal themselves.",
          "Establishes the Data Protection Board of India as the statutory adjudicatory body."
        ]
      },
      {
        id: "consent-notice-framework",
        heading: "2. The Notice & Consent Architecture",
        paragraphs: [
          "Consent under Section 6 must be free, specific, informed, unconditional, and unambiguous, demonstrated through clear affirmative action. Every request for consent must be preceded by or accompanied by an itemized notice detailing the data collected, the purpose of processing, and grievance redressal mechanisms."
        ]
      },
      {
        id: "data-principal-rights",
        heading: "3. Rights of Data Principals & Grievance Redressal",
        paragraphs: [
          "Data principals enjoy statutory rights to access summaries of processed personal data, request correction or erasure, nominate representatives in the event of death or incapacity, and access independent grievance redressal before approaching the Data Protection Board."
        ]
      },
      {
        id: "penalties-enforcement",
        heading: "4. Penalty Frameworks & Breach Notification",
        paragraphs: [
          "Section 8(6) obligates data fiduciaries to notify the Data Protection Board and affected data principals of any personal data breach without delay. Statutory penalties for significant non-compliance and failure to implement reasonable security safeguards can reach up to ₹250 crore per instance."
        ]
      }
    ],
    sources: [
      {
        title: "Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023)",
        citation: "Sections 4, 5, 6, 8, 9, 33",
        type: "Statute"
      },
      {
        title: "MeitY Consultation Papers & Draft Rule Frameworks",
        citation: "Ministry of Electronics and Information Technology, Govt. of India",
        type: "Regulatory Notice"
      }
    ],
    relatedGuideSlugs: [
      "corporate-governance-statutory-compliance-india",
      "intellectual-property-portfolio-protection-diligence"
    ],
    relatedPracticeSlug: "regulatory-compliance"
  },
  {
    id: "guide-intellectual-property-audit",
    slug: "intellectual-property-portfolio-protection-diligence",
    title: "Conducting Intellectual Property Audits for Growing Enterprises",
    category: "Intellectual Property",
    categoryId: "intellectual-property",
    excerpt:
      "Methods for identifying, registering, and ring-fencing proprietary trade marks, industrial designs, copyrights, and trade secrets in India.",
    publishedDate: "September 2026",
    readTime: "8 min read",
    topicTag: "IP Portfolio Strategy",
    tags: ["Trade Marks Act", "Copyright", "IP Audit", "Confidential Information"],
    authorNote: "Chambers Practice Research Group • Educational Information Only",
    featured: false,
    publicationStatus: "published",
    isPlaceholder: false,
    summary: [
      "Distinction between registrable IP rights and un-registered proprietary assets.",
      "Best practices for employment IP assignments and non-disclosure covenants.",
      "Monitoring registry databases for conflicting trademark filings and infringement risk."
    ],
    sections: [
      {
        id: "ip-audit-scope",
        heading: "1. Defining the Scope of an IP Audit",
        paragraphs: [
          "An intellectual property audit is a systematic verification of all intangible assets owned, licensed, or utilized by an enterprise. Its objective is to uncover un-registered assets, identify title defects in proprietary works, evaluate licensing exposure, and ensure proper registration under Indian IP statutes.",
          "In transaction diligence—whether during equity fundraising, mergers, or joint ventures—an unblemished IP audit is essential to prevent valuation discounts and third-party infringement litigation."
        ],
        bulletPoints: [
          "Identification of registered trademarks, pending applications, and renewal calendars.",
          "Verification of copyright ownership in proprietary software, designs, and content.",
          "Audit of employee IP assignment agreements and consultant assignment deeds."
        ]
      },
      {
        id: "trademark-diligence",
        heading: "2. Trademark Clearance & Portfolio Maintenance",
        paragraphs: [
          "Under the Trade Marks Act, 1999, registration confers exclusive statutory rights and statutory remedies against infringement. Comprehensive search reports across all relevant NICE classes must be conducted before brand adoption to mitigate passing-off and opposition proceedings."
        ]
      },
      {
        id: "employment-ip-contracts",
        heading: "3. Employer Ownership & Assignment Deeds",
        paragraphs: [
          "Under Section 17 of the Copyright Act, 1957, works created by employees in the course of employment generally vest with the employer, unless an agreement to the contrary exists. However, for independent contractors and software developers, explicit, signed written assignment deeds are required under Section 19 to transfer legal title."
        ]
      },
      {
        id: "trade-secret-preservation",
        heading: "4. Trade Secret Protection Protocols",
        paragraphs: [
          "In the absence of a standalone Indian trade secrets enactment, confidential commercial information is protected through contract law under Section 27 of the Indian Contract Act, 1872 and common-law principles of breach of confidence. Strict access control, NDA execution, and non-compete reasonableness guidelines must be enforced."
        ]
      }
    ],
    sources: [
      {
        title: "Trade Marks Act, 1999 (Act No. 47 of 1999)",
        citation: "Sections 9, 11, 28, 29",
        type: "Statute"
      },
      {
        title: "Copyright Act, 1957 (as amended)",
        citation: "Sections 14, 17, 19",
        type: "Statute"
      },
      {
        title: "Indian Contract Act, 1872",
        citation: "Section 27 — Agreements in restraint of trade",
        type: "Statute"
      }
    ],
    relatedGuideSlugs: [
      "corporate-governance-statutory-compliance-india",
      "digital-personal-data-protection-compliance-roadmap"
    ],
    relatedPracticeSlug: "corporate-advisory"
  }
];

export function getGuideBySlug(slug: string): LegalGuide | undefined {
  return LEGAL_GUIDES.find((guide) => guide.slug === slug);
}

export function getApprovedGuides(): LegalGuide[] {
  return LEGAL_GUIDES.filter(
    (guide) => guide.publicationStatus === "published" && !guide.isPlaceholder
  );
}

export function hasApprovedGuides(): boolean {
  return LEGAL_GUIDES.some(
    (guide) => guide.publicationStatus === "published" && !guide.isPlaceholder
  );
}

export const GUIDE_TOPICS = [
  "All Topics",
  "Corporate & Commercial",
  "Dispute Resolution",
  "Regulatory & Compliance",
  "Intellectual Property"
] as const;
