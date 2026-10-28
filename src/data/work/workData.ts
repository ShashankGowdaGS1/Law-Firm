/**
 * Centralized Legal Work & Practice Activities Data Model
 * 
 * In strict compliance with the Advocates Act, 1961 and Bar Council of India (BCI) Rule 36:
 * - This model organizes factual categories of professional legal activity.
 * - It strictly excludes fictional case studies, invented client victories, financial settlement numbers,
 *   client logos, or promotional outcome statistics.
 * - All entries link directly to verified canonical practice areas.
 */

export interface WorkCategoryItem {
  id: string;
  index: string;
  title: string;
  displayTitle?: string;
  shortDescription: string;
  detailedDescription: string;
  coreActivities: string[];
  statutoryContext: string;
  relatedPracticeSlugs: { slug: string; label: string }[];
  publicationStatus: "approved_practice_information" | "restricted";
  displayOrder: number;
}

export const WORK_CATEGORIES: WorkCategoryItem[] = [
  {
    id: "legal-research-advisory",
    index: "01",
    title: "Legal Research & Statutory Advisory",
    displayTitle: "Legal Research & Opinions",
    shortDescription:
      "Statutory research, judicial precedent analysis, and formal legal opinions on regulatory and commercial questions.",
    detailedDescription:
      "Chambers provides detailed legal opinions and statutory research for corporate enterprises and instructing advocates. Work focuses on precedent analysis across constitutional benches, High Courts, and tribunals to clarify statutory rights, compliance duties, and potential legal exposure.",
    coreActivities: [
      "Judicial precedent analysis across Supreme Court & High Court rulings",
      "Drafting formal legal opinions on regulatory compliance and commercial exposure",
      "Statutory review of legislative amendments, rules, and sectoral notifications"
    ],
    statutoryContext: "Statutory interpretation & judicial precedent analysis",
    relatedPracticeSlugs: [
      { slug: "corporate-advisory", label: "Business Legal Advice" },
      { slug: "regulatory-compliance", label: "Business Compliance" }
    ],
    publicationStatus: "approved_practice_information",
    displayOrder: 1
  },
  {
    id: "documentation-drafting",
    index: "02",
    title: "Documentation & Pleadings Drafting",
    displayTitle: "Contracts & Court Documents",
    shortDescription:
      "Drafting court pleadings, commercial agreements, property deeds, and statutory notices.",
    detailedDescription:
      "Accurate drafting ensures that commercial intent is clearly documented and compliant with statutory requirements. Chambers drafts plaints, written statements, writ petitions, commercial contracts, and formal notices adhering to court registry rules and statutory mandates.",
    coreActivities: [
      "Drafting plaints, written statements, and special leave petitions (SLPs)",
      "Formulating statutory claim notices and arbitration invocation notices",
      "Drafting commercial agreements, joint development deeds, and leases"
    ],
    statutoryContext: "Code of Civil Procedure, 1908 & Commercial Courts Act, 2015",
    relatedPracticeSlugs: [
      { slug: "corporate-advisory", label: "Business Legal Advice" },
      { slug: "real-estate-property", label: "Property & Documents" }
    ],
    publicationStatus: "approved_practice_information",
    displayOrder: 2
  },
  {
    id: "dispute-arbitration-advocacy",
    index: "03",
    title: "Dispute Resolution & Arbitral Advocacy",
    displayTitle: "Business Disputes & Arbitration",
    shortDescription:
      "Advocacy and representation in commercial disputes, institutional arbitration, and court proceedings.",
    detailedDescription:
      "Chambers represents matters before civil courts, commercial benches, and arbitral tribunals. Representation encompasses domestic and institutional arbitrations, statutory appeals, statement of claims, and interim relief applications.",
    coreActivities: [
      "Preparation of statements of claim, defense pleadings, and counterclaims",
      "Advocacy in Section 9 interim relief applications and tribunal measures",
      "Conducting evidentiary examination and hearing arguments before tribunals"
    ],
    statutoryContext: "Arbitration & Conciliation Act, 1996 & Commercial Court Rules",
    relatedPracticeSlugs: [
      { slug: "commercial-arbitration", label: "Business Disputes" },
      { slug: "civil-appellate-litigation", label: "Civil Disputes" }
    ],
    publicationStatus: "approved_practice_information",
    displayOrder: 3
  },
  {
    id: "property-title-diligence",
    index: "04",
    title: "Property Diligence & Conveyancing",
    displayTitle: "Property Due Diligence & Deeds",
    shortDescription:
      "Title search verification, encumbrance checks, commercial leasing, and property conveyancing.",
    detailedDescription:
      "Property diligence centers on systematic examination of historical ownership documents, revenue records, and municipal approvals. Chambers delivers comprehensive title search reports and drafts conveyance instruments for institutional and commercial transactions.",
    coreActivities: [
      "Title search examination across local sub-registrar archives",
      "Encumbrance verification, mutation records inspection, and revenue search",
      "Drafting commercial lease deeds, sale agreements, and development deeds"
    ],
    statutoryContext: "Transfer of Property Act, 1882 & Real Estate (RERA) Act, 2016",
    relatedPracticeSlugs: [
      { slug: "real-estate-property", label: "Property & Documents" },
      { slug: "corporate-advisory", label: "Business Legal Advice" }
    ],
    publicationStatus: "approved_practice_information",
    displayOrder: 4
  },
  {
    id: "corporate-insolvency-regulatory",
    index: "05",
    title: "Corporate & Insolvency Matters",
    displayTitle: "Corporate & Insolvency Law",
    shortDescription:
      "Legal advice on insolvency proceedings, creditor claims, and statutory corporate compliance.",
    detailedDescription:
      "Chambers advises financial creditors, operational creditors, and corporate entities on proceedings before the National Company Law Tribunal (NCLT) and appellate forums under the Insolvency and Bankruptcy Code (IBC), alongside statutory company law compliances.",
    coreActivities: [
      "Advisory on corporate insolvency resolution processes (CIRP)",
      "Formulation and verification of operational and financial creditor claims",
      "Advisory on statutory resolution plans, priority rules, and director duties"
    ],
    statutoryContext: "Insolvency and Bankruptcy Code, 2016 & Companies Act, 2013",
    relatedPracticeSlugs: [
      { slug: "insolvency-bankruptcy", label: "Debt & Insolvency" },
      { slug: "corporate-advisory", label: "Business Legal Advice" }
    ],
    publicationStatus: "approved_practice_information",
    displayOrder: 5
  }
];

export function getApprovedWorkCategories(): WorkCategoryItem[] {
  return WORK_CATEGORIES.filter(
    (c) => c.publicationStatus === "approved_practice_information"
  );
}
