import React from "react";
import { ShieldCheck, Scale, FileText } from "lucide-react";

export const WorkIntroSection: React.FC = () => {
  return (
    <section
      aria-label="Introduction to Chambers Practice Activities"
      className="py-16 sm:py-20 lg:py-24 bg-warm-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT: Section Label (~35%) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                PRACTICE ACTIVITIES
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
              An institutional framework explaining the core procedural, research, and drafting activities conducted across our practice areas.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-navy">
              <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
              <span>Advocates Act &amp; BCI Rule 36 Compliance</span>
            </div>
          </div>

          {/* RIGHT: Large Heading and Concise Body Text (~65%) */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-brand-navy">
              Understanding the Work Behind Legal Practice.
            </h2>

            <div className="space-y-4 text-brand-text/85 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                Professional legal practice encompasses distinct operational disciplines: analytical statutory research, careful evidentiary collation, precise pleadings drafting, transactional due diligence, and oral advocacy before judicial and arbitral tribunals.
              </p>
              <p className="text-sm sm:text-base text-brand-text/75">
                In strict adherence to the professional conduct rules established under the Advocates Act, 1961, our practice information highlights the objective nature of these legal activities rather than promotional client lists, confidential case summaries, or outcome claims.
              </p>
            </div>

            {/* Concise Editorial Pillars */}
            <div className="pt-6 border-t border-brand-navy/15 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-brand-navy">
                  <Scale className="w-4 h-4 text-brand-indigo shrink-0" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">
                    Precedent Analysis
                  </span>
                </div>
                <p className="font-sans text-sm text-brand-text/80 leading-relaxed">
                  Every legal opinion and pleading is grounded in judicial precedents and statutory frameworks.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-brand-navy">
                  <FileText className="w-4 h-4 text-brand-indigo shrink-0" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">
                    Procedural Precision
                  </span>
                </div>
                <p className="font-sans text-sm text-brand-text/80 leading-relaxed">
                  Court filings and legal agreements conform strictly to statutory limitation schedules and court rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
