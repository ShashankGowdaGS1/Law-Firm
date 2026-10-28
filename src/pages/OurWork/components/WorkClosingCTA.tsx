import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Mail, MapPin } from "lucide-react";

export const WorkClosingCTA: React.FC = () => {
  return (
    <section
      aria-label="Further Practice Information and Chambers Registry"
      className="py-16 sm:py-20 lg:py-24 bg-brand-champagne/25 border-t border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Typographic Callout (~65%) */}
          <div className="lg:col-span-8 space-y-5">
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo block">
              CHAMBERS INFORMATION
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-navy">
              Further Information About the Practice.
            </h2>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy/85 max-w-2xl">
              Explore the firm&apos;s published practice areas and approved contact information.
            </p>

            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed max-w-xl">
              Inquiries regarding practice scope, representation before judicial or arbitral forums, and preliminary conflict clearance may be addressed to our chambers registry in New Delhi.
            </p>

            {/* Action Buttons */}
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
                <span>Contact the Firm</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Compliance & Registry Information Box (~35%) */}
          <div className="lg:col-span-4 bg-white border border-brand-navy/15 rounded-sm p-6 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-brand-indigo pb-3 border-b border-brand-navy/10">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-navy">
                Statutory Regulatory Standard
              </span>
            </div>

            <p className="font-sans text-xs text-brand-text/80 leading-relaxed">
              All communications proceed in conformity with Bar Council of India standards. Initial inquiries should refrain from transmitting confidential or privileged case documents prior to formal engagement clearance.
            </p>

            <div className="space-y-2 pt-2 text-xs text-brand-navy font-medium border-t border-brand-navy/10">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-indigo shrink-0 mt-0.5" />
                <span>Supreme Court Bar Association Enclave, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-indigo shrink-0" />
                <span>registry@legalchambers.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
