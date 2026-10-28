import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  OurWorkPageHero,
  WorkIntroSection,
  WorkIndexSection,
  LegalDocumentationFeature,
  WorkConsiderationsSection,
  RelatedPracticesSection,
  WorkClosingCTA,
} from "./components";

export const OurWorkPage: React.FC = () => {
  usePageTitle("Our Work — Legal Practice Activities & Diligence | Chambers Legal Counsel");

  return (
    <main className="min-h-screen bg-warm-white text-brand-text selection:bg-brand-gold/30 selection:text-brand-navy">
      {/* 01 — Our Work Editorial Hero */}
      <OurWorkPageHero />

      {/* 02 — Introduction to Practice Activities */}
      <WorkIntroSection />

      {/* 03 — Interactive Legal Work Index */}
      <WorkIndexSection />

      {/* 04 — Legal Documentation Feature */}
      <LegalDocumentationFeature />

      {/* 05 — Professional Considerations */}
      <WorkConsiderationsSection />

      {/* 06 — Related Practice Areas */}
      <RelatedPracticesSection />

      {/* 07 — Closing Information & Contact */}
      <WorkClosingCTA />
    </main>
  );
};

export default OurWorkPage;
