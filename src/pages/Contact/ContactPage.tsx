import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  ContactPageHero,
  ContactChannelsSection,
  OfficeInformationSection,
  BeforeContactGuidance,
  ContactClosingCTA
} from "./components";

export const ContactPage: React.FC = () => {
  // Sets clean document title with firm identity
  usePageTitle("Contact Chambers & Enquiry Guidelines");

  return (
    <div className="w-full">
      {/* 01 — Contact Hero (Editorial Asymmetric + Real Nano Banana Pro Hero) */}
      <ContactPageHero />

      {/* 02 — Contact Channels & Functional Enquiry Form (Verified Data + Procedural Safeguards) */}
      <ContactChannelsSection />

      {/* 03 — Office & Chambers Information (Honest Coordinates & Visitor Coordination) */}
      <OfficeInformationSection />

      {/* 04 — Before You Contact Us (3 Editorial Procedural Principles) */}
      <BeforeContactGuidance />

      {/* 05 — Closing Navigation (Explore Services & Firm Information) */}
      <ContactClosingCTA />
    </div>
  );
};
