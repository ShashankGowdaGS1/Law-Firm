/**
 * Centralized Asset Registry
 * 
 * Assets Structure:
 * 1. Photorealistic human-centered editorial assets in `/assets/images/nano-banana/`.
 * 2. Team photography in `/assets/images/team/`.
 * 3. Office & chambers imagery in `/assets/images/office/`.
 * 4. Legal service imagery in `/assets/images/services/`.
 * 5. Future video assets in `/assets/videos/`.
 * 6. Icons & symbols in `/assets/icons/`.
 */

export const ASSET_PATHS = {
  // Nano Banana Pro photorealistic human-centered assets
  nanoBanana: {
    heroLawyerConsultation: "/assets/images/nano-banana/hero-lawyers-desktop.jpg",
    heroLawyersDesktop: "/assets/images/nano-banana/hero-lawyers-desktop.jpg",
    heroLawyerMobile: "/assets/images/nano-banana/hero-lawyers-mobile.jpg",
    heroLawyersMobile: "/assets/images/nano-banana/hero-lawyers-mobile.jpg",
    whatWeDoConsultation: "/assets/images/nano-banana/what-we-do-consultation.jpg",
    whoWeAreLawyers: "/assets/images/nano-banana/who-we-are-group.jpg",
    whoWeAreGroup: "/assets/images/nano-banana/who-we-are-group.jpg",
    legalDocumentationDetail: "/assets/images/nano-banana/legal-services-documents.jpg",
    legalServicesDocuments: "/assets/images/nano-banana/legal-services-documents.jpg",
    howWeWorkCollab: "/assets/images/nano-banana/how-we-work-collab.jpg",
    ourTeamEditorial: "/assets/images/nano-banana/our-team-editorial.jpg",
    legalGuidesResearch: "/assets/images/nano-banana/legal-guides-research.jpg",
    contactLawyerPortrait: "/assets/images/nano-banana/contact-lawyer-portrait.jpg",
    aboutHeroLawyer: "/assets/images/nano-banana/about-hero-lawyer.jpg",
    aboutPeopleDiscussion: "/assets/images/nano-banana/about-people-discussion.jpg",
    legalServicesHero: "/assets/images/nano-banana/legal-services-hero.jpg",
    howWeWorkHero: "/assets/images/nano-banana/how-we-work-hero.jpg",
    preliminaryReviewDocs: "/assets/images/nano-banana/preliminary-review-docs.jpg",
    ourTeamHero: "/assets/images/nano-banana/our-team-hero.jpg",
    ourWorkHero: "/assets/images/nano-banana/our-work-hero.jpg",
    ourWorkDocumentation: "/assets/images/nano-banana/our-work-documentation.jpg",
    legalGuidesLibrary: "/assets/images/nano-banana/legal-guides-library.jpg",
    partnerDiscussion: "/assets/images/nano-banana/partner-discussion.jpg",
    chambersBriefing: "/assets/images/nano-banana/chambers-briefing.jpg",
    counselCourtPrep: "/assets/images/nano-banana/counsel-court-prep.jpg",
    contactReceptionHero: "/assets/images/nano-banana/contact-reception-hero.jpg"
  },

  // Approved real team photography
  team: {
    seniorPartner: "/assets/images/team/partner-placeholder.jpg",
    litigationHead: "/assets/images/team/litigation-placeholder.jpg",
    regulatoryLead: "/assets/images/team/regulatory-placeholder.jpg"
  },

  // Professional office & legal library
  office: {
    libraryChambers: "/assets/images/office/library-chambers.jpg",
    conferenceRoom: "/assets/images/office/conference-room.jpg",
    receptionChambers: "/assets/images/office/reception.jpg"
  },

  // Legal-service dedicated imagery
  services: {
    corporateCommercial: "/assets/images/services/corporate-commercial.jpg",
    disputeResolution: "/assets/images/services/dispute-resolution.jpg",
    regulatoryCompliance: "/assets/images/services/regulatory-compliance.jpg",
    bankingFinance: "/assets/images/services/banking-finance.jpg",
    realEstateInfrastructure: "/assets/images/services/real-estate.jpg",
    intellectualProperty: "/assets/images/services/intellectual-property.jpg"
  },

  // Future video assets
  videos: {
    firmOverview: "/assets/videos/firm-overview.mp4",
    chambersBroll: "/assets/videos/chambers-broll.mp4"
  },

  // Brand and icon assets
  branding: {
    logoIcon: "/assets/icons/favicon.svg",
    emblem: "/assets/icons/firm-emblem.svg"
  }
} as const;

export type AssetCategory = keyof typeof ASSET_PATHS;
