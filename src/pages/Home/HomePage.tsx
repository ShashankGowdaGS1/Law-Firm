import React from "react";
import {
  HeroSection,
  WhatWeDoSection,
  PracticeAreasSection,
  WhoWeAreSection,
  DetailedServicesSection,
  HowWeWorkSection,
  OurLegalTeamSection,
  LegalGuidesSection,
  ContactClosingSection
} from "@/components/sections";
import { usePageTitle } from "@/hooks/usePageTitle";

export const HomePage: React.FC = () => {
  // Sets clean document title with firm name & descriptor
  usePageTitle();

  return (
    <div className="w-full">
      {/* 01 — Primary Lawyer-Focused Hero Section (Deep Royal Navy) */}
      <HeroSection />

      {/* 02 — What We Do Section (Bright Off-White Editorial) */}
      <WhatWeDoSection />

      {/* 03 — Legal Services Showcase Section (Clean White Category Selector Grid) */}
      <PracticeAreasSection />

      {/* 04 — Who We Are Section (Warm Off-White Editorial with 3 Navigation Rows) */}
      <WhoWeAreSection />

      {/* 05 — What We Offer / Detailed Legal Services Section (Numbered Index + Detail Photography) */}
      <DetailedServicesSection />

      {/* 06 — How We Work Section (Interactive 4-Stage Legal Process + Editorial Collaboration Photography) */}
      <HowWeWorkSection />

      {/* 07 — Our Legal Team Section (Professional Profile Showcase + Editorial Atmosphere Photography) */}
      <OurLegalTeamSection />

      {/* 08 — Legal Guides & Resources Section (Authoritative Editorial Library + Research Photography) */}
      <LegalGuidesSection />

      {/* 09 — Contact the Firm Section (Asymmetric Editorial + Real Editorial Portrait + Approved Channels) */}
      <ContactClosingSection />
    </div>
  );
};
