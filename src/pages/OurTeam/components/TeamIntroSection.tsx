import React from "react";
import { ShieldCheck } from "lucide-react";

export const TeamIntroSection: React.FC = () => {
  return (
    <section
      aria-label="Professional Introduction & Practice Principles"
      className="py-16 sm:py-20 lg:py-24 bg-warm-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT: Section Eyebrow & Pillar Indicator (~35%) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                THE PRACTICE
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
              An institutional framework dedicated to professional diligence, statutory compliance, and rigorous matter advocacy under the Advocates Act, 1961.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-navy">
              <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
              <span>Bar Council of India Standards</span>
            </div>
          </div>

          {/* RIGHT: Large Editorial Heading & Body (~65%) */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-brand-navy">
              Professional Backgrounds &amp; Areas of Practice.
            </h2>

            <div className="space-y-4 text-brand-text/85 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                The directory provides verified information regarding the legal professionals and advocates associated with chambers, outlining their respective admissions, formal academic qualifications, and primary practice domains.
              </p>
              <p className="text-sm sm:text-base text-brand-text/75">
                Our practice is structured across specialized subject-matter groups—including corporate governance, commercial arbitration, appellate advocacy, and regulatory diligence. Work is conducted with direct accountability, collaborative research, and adherence to professional ethics.
              </p>
            </div>

            {/* Editorial Dividers with Concise Tenets (No Cards, No Stats) */}
            <div className="pt-4 border-t border-brand-navy/15 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              <div className="space-y-1">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  Statutory Enrolment
                </span>
                <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                  All advocates associated with chambers are enrolled with their respective State Bar Councils and maintain active standing.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-navy block">
                  Substantive Focus
                </span>
                <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                  Matters are addressed through dedicated subject-matter research and procedural preparation tailored to jurisdictional requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
