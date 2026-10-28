import React from "react";
import { Container } from "@/components/ui";
import { LegalServiceItem } from "@/data/services/servicesData";
import { BookOpen, Scale, AlertCircle } from "lucide-react";

export interface PracticeLegalContextProps {
  service: LegalServiceItem;
}

export const PracticeLegalContext: React.FC<PracticeLegalContextProps> = ({
  service
}) => {
  if (!service.legalContext) {
    return null;
  }

  const { statutoryFramework, keyProvisions, complianceConsiderations } =
    service.legalContext;

  return (
    <section
      aria-label="Relevant Legal Context & Statutory Framework"
      className="relative w-full bg-white py-14 sm:py-16 lg:py-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded-sm bg-brand-champagne/40 text-brand-navy">
              <BookOpen className="w-3.5 h-3.5 text-brand-indigo" />
            </span>
            <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-indigo">
              Statutory Context
            </span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight mb-3">
            Relevant Legal Framework & Statutory Provisions
          </h2>

          <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
            General legal architecture and statutory authorities governing matters within this practice area in India.
          </p>
        </div>

        {/* Framework & Provisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Governing Enactments (~40%) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-7 rounded-sm border border-brand-navy/15 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-3">
              <Scale className="w-4 h-4 text-brand-indigo" />
              <span>Primary Enactments</span>
            </div>

            <p className="font-heading font-bold text-base sm:text-lg text-brand-navy mb-4 leading-snug">
              {statutoryFramework}
            </p>

            <div className="pt-4 border-t border-brand-navy/10">
              <div className="flex items-start gap-2.5 text-xs text-brand-text/70 leading-relaxed">
                <AlertCircle className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                <p>
                  <strong className="text-brand-navy font-semibold">Regulatory Note:</strong> Applicable statutory provisions and judicial precedents are interpreted based on the specific facts and jurisdictional forum of each matter.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Provisions & Compliance Considerations (~60%) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-navy mb-3">
                Key Statutory Considerations
              </h3>

              <ul className="space-y-3">
                {keyProvisions.map((provision, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 p-3.5 rounded-sm bg-brand-off-white/60 border border-brand-navy/10 text-xs sm:text-[13px] text-brand-text/80 leading-relaxed font-sans"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo shrink-0 mt-2" />
                    <span>{provision}</span>
                  </li>
                ))}
              </ul>
            </div>

            {complianceConsiderations && (
              <div className="p-4 sm:p-5 rounded-sm bg-brand-navy text-white shadow-sm">
                <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold mb-1.5">
                  Compliance Diligence
                </h4>
                <p className="font-sans text-xs sm:text-[13px] text-white/85 leading-relaxed">
                  {complianceConsiderations}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
