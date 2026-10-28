import React, { useState, useEffect } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  ProcessPageHero,
  ChapterNavigation,
  InitialEnquiryChapter,
  PreliminaryReviewChapter,
  ScopeEngagementChapter,
  MatterHandlingChapter,
  EnquiryInformationSection,
  ProcessClosingCTA,
} from "./components";

export const HowWeWorkPage: React.FC = () => {
  usePageTitle("How We Work — The Legal Matter Journey | Chambers Legal Counsel");

  const [activeChapterId, setActiveChapterId] = useState<string>("stage-01");

  // Track active chapter as user scrolls naturally without scroll-jacking
  useEffect(() => {
    const stageIds = ["stage-01", "stage-02", "stage-03", "stage-04"];
    
    // IntersectionObserver to gracefully detect the current active chapter in the reading zone
    const observer = new IntersectionObserver(
      (entries) => {
        // Collect currently intersecting entries
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Select the one closest to the top of the reading viewport
          visibleEntries.sort(
            (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          );
          setActiveChapterId(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -45% 0px", // Focus on upper-middle viewport reading zone
        threshold: [0.05, 0.2, 0.5],
      }
    );

    stageIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-warm-white text-brand-text selection:bg-brand-gold/30 selection:text-brand-navy">
      {/* 01 — How We Work Hero */}
      <ProcessPageHero />

      {/* 02–06 — Process Overview & The 4 Chapters Narrative Container */}
      <section
        id="stages-narrative"
        aria-label="The Four Stages of Legal Engagement"
        className="py-12 sm:py-16 lg:py-20 border-b border-brand-navy/10 bg-warm-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Desktop Left Sticky Navigator / Mobile Top Navigator (lg:col-span-3 ~25%) */}
            <div className="lg:col-span-3">
              <ChapterNavigation
                activeChapterId={activeChapterId}
                onChapterSelect={setActiveChapterId}
              />
            </div>

            {/* Chapters 01 through 04 Editorial Narrative (lg:col-span-9 ~75%) */}
            <div className="lg:col-span-9 min-w-0">
              {/* 03 — Initial Enquiry */}
              <InitialEnquiryChapter />

              {/* 04 — Preliminary Review */}
              <PreliminaryReviewChapter />

              {/* 05 — Scope & Engagement */}
              <ScopeEngagementChapter />

              {/* 06 — Matter Handling */}
              <MatterHandlingChapter />
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Enquiry Information & Considerations ("Before Submitting an Enquiry") */}
      <EnquiryInformationSection />

      {/* 08 — Closing Contact Navigation */}
      <ProcessClosingCTA />
    </main>
  );
};

export default HowWeWorkPage;
