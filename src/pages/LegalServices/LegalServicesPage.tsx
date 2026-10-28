import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  LegalServicesHero,
  PracticeCategoryDirectory,
  LegalServicesClosingCTA
} from "./components";

export const LegalServicesPage: React.FC = () => {
  usePageTitle("Legal Services & Practice Areas");

  return (
    <div className="w-full">
      {/* 01 — Legal Services Split Hero (Editorial Text + Real Portrait Photography) */}
      <LegalServicesHero />

      {/* 02 — Three-Category Practice Directory (Sticky Navigator + Canonical Service Rows) */}
      <PracticeCategoryDirectory />

      {/* 03 — Closing Contact Navigation CTA */}
      <LegalServicesClosingCTA />
    </div>
  );
};

export default LegalServicesPage;
