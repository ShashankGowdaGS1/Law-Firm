import React from "react";
import { useParams } from "react-router-dom";
import { getServiceBySlug } from "@/data/services/servicesData";
import { usePageTitle } from "@/hooks/usePageTitle";
import { NotFoundPage } from "@/pages/NotFound/NotFoundPage";
import {
  PracticeHero,
  PracticeOverview,
  PracticeScopeSection,
  PracticeLegalContext,
  PracticeProceduralSection,
  PracticeRelatedServices,
  PracticeDetailClosingCTA
} from "./components";

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  // If service slug is invalid, render the proper 404 page (never fallback to first service)
  if (!service) {
    return <NotFoundPage />;
  }

  // Set dedicated document title for published practice area
  usePageTitle(service.title);

  return (
    <article className="w-full">
      {/* 01 — Practice Hero with Semantic Breadcrumbs & Category Eyebrow */}
      <PracticeHero service={service} />

      {/* 02 — Comprehensive Legal Overview & Scope of Counsel */}
      <PracticeOverview service={service} />

      {/* 03 — Granular Scope of Practice Focus Areas (Numbered Rows) */}
      <PracticeScopeSection service={service} />

      {/* 04 — Researched Indian Statutory Context & Enactments */}
      <PracticeLegalContext service={service} />

      {/* 05 — Procedural Diligence & Documentation Considerations */}
      <PracticeProceduralSection service={service} />

      {/* 06 — Data-Driven Related Practice Areas Navigation */}
      <PracticeRelatedServices currentService={service} />

      {/* 07 — Closing Contact & Matter Enquiry Action */}
      <PracticeDetailClosingCTA practiceTitle={service.shortTitle} />
    </article>
  );
};

export default ServiceDetailPage;
