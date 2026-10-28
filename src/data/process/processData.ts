/**
 * Process Data for "How We Work" Section & Page
 * 
 * Note: These are proposed general descriptions of a legal engagement workflow,
 * not verified firm-specific policies. Compliant with Bar Council of India guidelines.
 */

export interface ProcessStageItem {
  id: string;
  stepNumber: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  aspectHighlights: string[];
}

export const PROCESS_STAGES: ProcessStageItem[] = [
  {
    id: "initial-enquiry",
    stepNumber: "01",
    title: "Initial Enquiry",
    shortDescription: "An initial communication provides general information regarding the subject matter of an enquiry.",
    detailedDescription: "The process typically begins with an exploratory communication outlining general subject matter context and interested parties. Confidential or sensitive case documents should be withheld prior to formal conflict clearance.",
    aspectHighlights: [
      "Subject matter identification",
      "Party and conflict entity identification",
      "Preliminary informational intake"
    ]
  },
  {
    id: "preliminary-review",
    stepNumber: "02",
    title: "Preliminary Review",
    shortDescription: "Relevant information is reviewed, including potential conflicts of interest and applicable regulatory standards.",
    detailedDescription: "Chambers undertakes professional conflict checks and considers jurisdictional suitability and professional practice requirements before confirming availability for a matter.",
    aspectHighlights: [
      "Conflict-of-interest assessment",
      "Jurisdictional forum review",
      "Professional standards evaluation"
    ]
  },
  {
    id: "scope-engagement",
    stepNumber: "03",
    title: "Scope & Engagement",
    shortDescription: "Where representation is agreed upon, professional engagement terms and specific scope are documented.",
    detailedDescription: "Upon completion of preliminary clearance, the scope of professional representation is formally documented, outlining the proposed procedural stages, terms of engagement, and required filings.",
    aspectHighlights: [
      "Clear engagement scope definition",
      "Procedural stage documentation",
      "Formal authorization and representation instruments"
    ]
  },
  {
    id: "matter-handling",
    stepNumber: "04",
    title: "Matter Handling",
    shortDescription: "Subsequent advisory, documentation, and hearings proceed according to the agreed terms and matter requirements.",
    detailedDescription: "Drafting, statutory filing, procedural compliance, and forum appearances proceed in accordance with listing dates and procedural requirements, accompanied by regular communication with instructing parties.",
    aspectHighlights: [
      "Document drafting & diligence",
      "Procedural filing & forum representation",
      "Periodic status updates"
    ]
  }
];
