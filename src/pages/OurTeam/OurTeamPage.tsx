import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  TeamPageHero,
  TeamIntroSection,
  TeamDirectorySection,
  TeamPracticeGroupsSection,
  TeamClosingCTA,
} from "./components";

export const OurTeamPage: React.FC = () => {
  usePageTitle("Our Legal Professionals & Advocates | Chambers Legal Counsel");

  return (
    <main className="min-h-screen bg-warm-white text-brand-text selection:bg-brand-gold/30 selection:text-brand-navy">
      {/* 01 — Editorial Team Hero */}
      <TeamPageHero />

      {/* 02 — Professional Introduction */}
      <TeamIntroSection />

      {/* 03 — Advocate Directory (Data-aware: State A / State B) */}
      <TeamDirectorySection />

      {/* 04 — Practice Groups & Collaboration */}
      <TeamPracticeGroupsSection />

      {/* 05 — Closing Navigation */}
      <TeamClosingCTA />
    </main>
  );
};

export default OurTeamPage;
