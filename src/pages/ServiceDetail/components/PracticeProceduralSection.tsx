import React from "react";
import { Container } from "@/components/ui";
import { LegalServiceItem } from "@/data/services/servicesData";
import { FileCheck, ShieldAlert } from "lucide-react";

export interface PracticeProceduralSectionProps {
  service: LegalServiceItem;
}

export const PracticeProceduralSection: React.FC<
  PracticeProceduralSectionProps
> = ({ service }) => {
  if (!service.proceduralNotes || service.proceduralNotes.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Procedural & Documentation Considerations"
      className="relative w-full bg-[#FAF8F5] py-14 sm:py-16 lg:py-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded-sm bg-brand-champagne/40 text-brand-navy">
              <FileCheck className="w-3.5 h-3.5 text-brand-indigo" />
            </span>
            <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-indigo">
              Procedural Overview
            </span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight mb-3">
            Procedural & Documentation Diligence
          </h2>

          <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
            Standard analytical milestones typically undertaken during advisory or contentious representation.
          </p>
        </div>

        {/* Milestone Steps with Clean Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {service.proceduralNotes.map((note, nIdx) => (
            <div
              key={nIdx}
              className="bg-white p-6 rounded-sm border border-brand-navy/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-brand-gold px-2 py-0.5 bg-brand-navy rounded-sm mb-3 inline-block">
                  PHASE {String(nIdx + 1).padStart(2, "0")}
                </span>

                <h3 className="font-heading font-bold text-sm text-brand-navy mb-2 leading-snug">
                  {nIdx === 0
                    ? "Preliminary Factual Audit"
                    : nIdx === 1
                    ? "Drafting & Regulatory Vetting"
                    : "Statutory Coordination & Advocacy"}
                </h3>

                <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                  {note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Safeguard Notice */}
        <div className="p-4 sm:p-5 rounded-sm bg-white border border-brand-navy/15 text-xs text-brand-text/75 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-brand-navy font-semibold">Important Consideration:</strong> Procedural steps and timelines vary based on matter circumstances, tribunal schedules, and statutory limitation periods. General procedural descriptions do not constitute individualized legal advice.
          </p>
        </div>
      </Container>
    </section>
  );
};
