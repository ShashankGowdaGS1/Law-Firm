import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getApprovedGuides } from "@/data/guides/guidesData";
import {
  LegalGuidesHero,
  FeaturedGuideSection,
  GuidesLibrarySection,
  EducationalNoticeSection,
  GuidesClosingCTA,
} from "./components";

export const LegalGuidesPage: React.FC = () => {
  usePageTitle("Legal Guides & Educational Resources | Chambers Legal Counsel");

  const approvedGuides = getApprovedGuides();
  const featuredGuide = approvedGuides.find((g) => g.featured) || approvedGuides[0];

  return (
    <main className="min-h-screen bg-warm-white text-brand-text selection:bg-brand-gold/30 selection:text-brand-navy">
      {/* 01 — Editorial Library Hero */}
      <LegalGuidesHero />

      {/* 02 — Featured Publication */}
      {featuredGuide && <FeaturedGuideSection guide={featuredGuide} />}

      {/* 03 & 04 — Search & Topic Navigation + Legal Guides Index */}
      <GuidesLibrarySection guides={approvedGuides} />

      {/* 05 — Educational Information Note */}
      <EducationalNoticeSection />

      {/* 06 — Closing Navigation */}
      <GuidesClosingCTA />
    </main>
  );
};

export default LegalGuidesPage;
