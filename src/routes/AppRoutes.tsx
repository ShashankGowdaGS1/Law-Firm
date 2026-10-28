import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";

// Eagerly loaded primary landing page for optimal First Contentful Paint
import { HomePage } from "@/pages/Home/HomePage";

// Route-level code-splitting for inner pages
const AboutPage = lazy(() =>
  import("@/pages/About/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const LegalServicesPage = lazy(() =>
  import("@/pages/LegalServices/LegalServicesPage").then((m) => ({
    default: m.LegalServicesPage
  }))
);
const ServiceDetailPage = lazy(() =>
  import("@/pages/ServiceDetail/ServiceDetailPage").then((m) => ({
    default: m.ServiceDetailPage
  }))
);
const HowWeWorkPage = lazy(() =>
  import("@/pages/HowWeWork/HowWeWorkPage").then((m) => ({
    default: m.HowWeWorkPage
  }))
);
const OurTeamPage = lazy(() =>
  import("@/pages/OurTeam/OurTeamPage").then((m) => ({
    default: m.OurTeamPage
  }))
);
const AdvocateProfilePage = lazy(() =>
  import("@/pages/AdvocateProfile/AdvocateProfilePage").then((m) => ({
    default: m.AdvocateProfilePage
  }))
);
const OurWorkPage = lazy(() =>
  import("@/pages/OurWork/OurWorkPage").then((m) => ({
    default: m.OurWorkPage
  }))
);
const LegalGuidesPage = lazy(() =>
  import("@/pages/LegalGuides/LegalGuidesPage").then((m) => ({
    default: m.LegalGuidesPage
  }))
);
const GuideDetailPage = lazy(() =>
  import("@/pages/GuideDetail/GuideDetailPage").then((m) => ({
    default: m.GuideDetailPage
  }))
);
const ContactPage = lazy(() =>
  import("@/pages/Contact/ContactPage").then((m) => ({
    default: m.ContactPage
  }))
);
const PrivacyPolicyPage = lazy(() =>
  import("@/pages/Legal/PrivacyPolicyPage").then((m) => ({
    default: m.PrivacyPolicyPage
  }))
);
const LegalDisclaimerPage = lazy(() =>
  import("@/pages/Legal/LegalDisclaimerPage").then((m) => ({
    default: m.LegalDisclaimerPage
  }))
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFound/NotFoundPage").then((m) => ({
    default: m.NotFoundPage
  }))
);

/**
 * Minimal accessible fallback during asynchronous route transition
 */
const RouteLoadingFallback: React.FC = () => (
  <div
    role="status"
    aria-label="Loading page content"
    className="min-h-[50vh] flex items-center justify-center bg-brand-off-white"
  >
    <div className="w-6 h-6 border-2 border-brand-navy/20 border-t-brand-navy rounded-full animate-spin" />
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {/* Core Primary Route (Eager) */}
        <Route path="/" element={<HomePage />} />

        {/* Code-Split Inner Routes */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <AboutPage />
            </Suspense>
          }
        />

        {/* Practice Areas / Services */}
        <Route
          path="/legal-services"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <LegalServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/legal-services/:serviceSlug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <ServiceDetailPage />
            </Suspense>
          }
        />

        {/* Advisory Approach */}
        <Route
          path="/how-we-work"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <HowWeWorkPage />
            </Suspense>
          }
        />

        {/* Legal Team */}
        <Route
          path="/our-team"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <OurTeamPage />
            </Suspense>
          }
        />
        <Route
          path="/our-team/:memberSlug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <AdvocateProfilePage />
            </Suspense>
          }
        />

        {/* Sector Work & Matter Experience */}
        <Route
          path="/our-work"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <OurWorkPage />
            </Suspense>
          }
        />

        {/* Legal Guides & Knowledge Base */}
        <Route
          path="/legal-guides"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <LegalGuidesPage />
            </Suspense>
          }
        />
        <Route
          path="/legal-guides/:guideSlug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <GuideDetailPage />
            </Suspense>
          }
        />

        {/* Contact Chambers */}
        <Route
          path="/contact"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <ContactPage />
            </Suspense>
          }
        />

        {/* Regulatory Governance */}
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path="/legal-disclaimer"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <LegalDisclaimerPage />
            </Suspense>
          }
        />

        {/* 404 Catch-All */}
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
