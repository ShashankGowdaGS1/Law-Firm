import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  AboutHero,
  FirmIntroduction,
  FirmPrinciples,
  AboutPeopleSection,
  PracticeNavigation,
  AboutClosingCTA
} from "./components";

export const AboutPage: React.FC = () => {
  usePageTitle("About the Firm");

  return (
    <div className="w-full">
      {/* 01 — Cinematic About Hero (Widescreen Editorial Photography + Controlled Navy Gradient) */}
      <AboutHero />

      {/* 02 — The Firm: Introduction (Warm Off-White Asymmetric Editorial Typography) */}
      <FirmIntroduction />

      {/* 03 — Our Principles (Full-Width Royal Navy with Horizontal Numbered Rows) */}
      <FirmPrinciples />

      {/* 04 — Our People (Candid Legal Discussion Photography + Team Directory CTA) */}
      <AboutPeopleSection />

      {/* 05 — Our Practice & Approach (Clean Cross-Linking Directory Navigation Rows) */}
      <PracticeNavigation />

      {/* 06 — Closing Contact Navigation (Refined Warm Champagne Accent CTA) */}
      <AboutClosingCTA />
    </div>
  );
};

export default AboutPage;
