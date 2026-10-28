import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const GuidesClosingCTA: React.FC = () => {
  return (
    <section
      aria-label="Legal Practice Exploration and Registry Contacts"
      className="py-16 sm:py-20 lg:py-24 bg-brand-champagne/25 border-t border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Heading & Action CTA (~65%) */}
          <div className="lg:col-span-8 space-y-5">
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo block">
              PRACTICE CAPABILITIES
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-navy">
              Explore the Areas of Practice.
            </h2>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy/85 max-w-2xl">
              Find information about the firm&apos;s published legal practice areas and related professional services.
            </p>

            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed max-w-xl">
              Our chambers provides considered advisory and courtroom representation across commercial litigation, corporate governance, arbitration, and regulatory compliance.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/legal-services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-navy text-white text-xs sm:text-sm font-semibold rounded-sm shadow hover:bg-brand-indigo transition-colors"
              >
                <span>Explore Legal Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-brand-navy/20 text-brand-navy text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-navy/5 transition-colors"
              >
                <span>Contact Information</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Compliance Standard Info Box (~35%) */}
          <div className="lg:col-span-4 bg-white border border-brand-navy/15 rounded-sm p-6 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-brand-indigo pb-3 border-b border-brand-navy/10">
              <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-navy">
                Legal Publication Ethics
              </span>
            </div>

            <p className="font-sans text-xs text-brand-text/80 leading-relaxed">
              Publications maintain strict fidelity to legal texts and statutory authorities. Educational briefs are reviewed periodically to reflect statutory updates and judicial developments.
            </p>

            <div className="pt-1 text-[11px] text-brand-indigo font-semibold">
              <Link
                to="/how-we-work"
                className="inline-flex items-center gap-1 hover:text-brand-navy underline underline-offset-4 decoration-brand-indigo/30 transition-colors"
              >
                <span>Review chambers matter progression</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
