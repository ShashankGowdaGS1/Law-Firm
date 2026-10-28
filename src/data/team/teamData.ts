export interface TeamMemberItem {
  id: string;
  slug: string;
  name: string;
  role: string;
  designation: string;
  practiceArea: string;
  practiceFocus: string;
  barAdmissions: string[];
  education: string[];
  bio: string;
  isPlaceholder: boolean;
}

/**
 * Team Directory Data
 * Note: Under Bar Council of India rules, verified advocate biographies and admissions
 * are populated upon formal client confirmation. Fictional portraits or fabricated credentials
 * are never published.
 */
export const TEAM_MEMBERS: TeamMemberItem[] = [
  {
    id: "corporate-partner",
    slug: "corporate-partner",
    name: "[Partner — Corporate & Governance]",
    role: "Senior Partner",
    designation: "Senior Partner",
    practiceArea: "Corporate & Commercial Advisory",
    practiceFocus: "Corporate Advisory, Board Governance, Cross-Border Transactions",
    barAdmissions: ["Bar Council of Delhi", "Supreme Court Bar Association"],
    education: ["LL.B. (Hons.)", "LL.M. (Corporate Law)"],
    bio: "Advising corporate boards, multinational enterprises, and domestic conglomerates on statutory compliance, director disclosures, and joint venture documentation.",
    isPlaceholder: true
  },
  {
    id: "disputes-partner",
    slug: "disputes-partner",
    name: "[Partner — Dispute Resolution]",
    role: "Partner",
    designation: "Partner — Dispute Resolution",
    practiceArea: "Commercial Arbitration & Litigation",
    practiceFocus: "Institutional Arbitration, Interim Injunctions, Contractual Disputes",
    barAdmissions: ["Bar Council of Delhi", "Delhi High Court Bar Association"],
    education: ["B.A. LL.B. (Hons.)"],
    bio: "Extensive background in domestic and international institutional arbitrations, enforcement proceedings, and commercial injunctions.",
    isPlaceholder: true
  },
  {
    id: "appellate-counsel",
    slug: "appellate-counsel",
    name: "[Senior Counsel — Appellate Practice]",
    role: "Senior Counsel",
    designation: "Senior Counsel",
    practiceArea: "Constitutional & Appellate Law",
    practiceFocus: "Supreme Court SLPs, High Court Writs, Commercial Division Appeals",
    barAdmissions: ["Supreme Court Bar Association", "Bar Council of India"],
    education: ["LL.B.", "BCL (Oxford / Representative Placeholder)"],
    bio: "Appellate advocacy before the Supreme Court of India and various High Courts across commercial disputes and constitutional matters.",
    isPlaceholder: true
  },
  {
    id: "insolvency-partner",
    slug: "insolvency-partner",
    name: "[Partner — Insolvency & Restructuring]",
    role: "Partner",
    designation: "Partner — Insolvency & Restructuring",
    practiceArea: "Insolvency & Bankruptcy (IBC)",
    practiceFocus: "NCLT/NCLAT Proceedings, Creditor Committee Representation",
    barAdmissions: ["Bar Council of Maharashtra & Goa", "NCLT Bar Association"],
    education: ["B.Com.", "LL.B."],
    bio: "Specializing in corporate insolvency resolution processes, resolution plan diligence, and debt restructuring under the Insolvency & Bankruptcy Code.",
    isPlaceholder: true
  }
];

export function getTeamMemberBySlug(slug: string): TeamMemberItem | undefined {
  return TEAM_MEMBERS.find((m) => m.slug === slug);
}

export function getVerifiedTeamMembers(): TeamMemberItem[] {
  return TEAM_MEMBERS.filter((m) => !m.isPlaceholder);
}

export function hasVerifiedTeamMembers(): boolean {
  return TEAM_MEMBERS.some((m) => !m.isPlaceholder);
}
