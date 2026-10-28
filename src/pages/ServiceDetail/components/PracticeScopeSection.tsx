import React from "react";
import { Container } from "@/components/ui";
import { LegalServiceItem } from "@/data/services/servicesData";
import { CheckCircle2 } from "lucide-react";

export interface PracticeScopeSectionProps {
  service: LegalServiceItem;
}

export const PracticeScopeSection: React.FC<PracticeScopeSectionProps> = ({
  service
}) => {
  if (!service.focusAreas || service.focusAreas.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Scope of Practice & Key Services"
      className="relative w-full bg-[#FAF8F5] py-14 sm:py-16 lg:py-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-indigo block mb-2">
            Scope of Practice
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight mb-3">
            Core Focus Areas & Matter Capabilities
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
            Detailed legal services, documentation review, and advocacy undertaken within {service.shortTitle}.
          </p>
        </div>

        {/* Editorial Rows with Numbered Indices & Fine Separators */}
        <div className="border-t border-brand-navy/15 divide-y divide-brand-navy/10">
          {service.focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="py-4.5 sm:py-5 flex items-start sm:items-center justify-between gap-4 transition-colors hover:bg-white/60 px-3 -mx-3 rounded-sm"
            >
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
                <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo shrink-0 pt-0.5 sm:pt-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className="font-heading font-semibold text-sm sm:text-base text-brand-navy leading-snug">
                  {area}
                </span>
              </div>

              <div className="shrink-0 flex items-center text-brand-gold">
                <CheckCircle2 className="w-4 h-4 text-brand-indigo/60" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
