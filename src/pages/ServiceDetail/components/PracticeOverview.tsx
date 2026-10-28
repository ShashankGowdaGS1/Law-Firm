import React from "react";
import { Container } from "@/components/ui";
import { LegalServiceItem } from "@/data/services/servicesData";

export interface PracticeOverviewProps {
  service: LegalServiceItem;
}

export const PracticeOverview: React.FC<PracticeOverviewProps> = ({ service }) => {
  if (!service.overview || service.overview.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Practice Overview & Scope"
      className="relative w-full bg-white py-14 sm:py-16 lg:py-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Section Title & Anchor (~35%) */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-indigo block mb-2">
              Practice Overview
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight mb-4">
              Legal Context & Scope of Counsel
            </h2>
            <p className="font-sans text-xs sm:text-sm text-brand-text/70 leading-relaxed">
              An overview of the legal framework, statutory considerations, and commercial context relevant to this practice area.
            </p>
          </div>

          {/* Right Column: Editorial Paragraphs (~65%) */}
          <div className="lg:col-span-8 space-y-5 text-brand-text/85">
            {service.overview.map((paragraph, idx) => (
              <p
                key={idx}
                className={`font-sans leading-relaxed ${
                  idx === 0
                    ? "text-base sm:text-lg text-brand-navy font-medium"
                    : "text-sm sm:text-base text-brand-text/80"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
