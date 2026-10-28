import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const ProcessClosingCTA: React.FC = () => {
  return (
    <section
      aria-label="Closing Contact & Further Process Information"
      className="py-16 sm:py-20 lg:py-24 bg-brand-champagne/25 border-t border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Asymmetric Editorial Heading & Text (~60%) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo block">
              CONTACT INFORMATION
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-navy">
              Further Information About the Process
            </h2>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy/85 max-w-2xl">
              Find the firm&apos;s contact details and information about submitting an enquiry.
            </p>

            <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/75 max-w-xl">
              Chambers welcomes professional enquiries from corporations, instructing advocates, in-house counsel, and private individuals seeking considered legal representation in Delhi NCR and across national forums.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-navy text-white text-sm font-semibold rounded-sm shadow hover:bg-brand-indigo transition-colors"
              >
                <span>Contact the Firm</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/legal-services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-brand-navy/20 text-brand-navy text-sm font-semibold rounded-sm hover:bg-brand-navy/5 transition-colors"
              >
                <span>Explore Practice Areas</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Quick Reference Chambers Box (~40%) */}
          <div className="lg:col-span-5 bg-white border border-brand-navy/15 rounded-sm p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-brand-indigo pb-3 border-b border-brand-navy/10">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-navy">
                Professional Engagement Standards
              </span>
            </div>

            <p className="font-sans text-xs text-brand-text/80 leading-relaxed">
              All communications and engagements proceed in strict compliance with the Advocates Act, 1961 and the Bar Council of India Rules. Consultations are arranged by prior appointment.
            </p>

            <div className="space-y-3 pt-2 text-xs text-brand-navy font-medium border-t border-brand-navy/10">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                <span>Supreme Court Bar Association Enclave & Barakhamba Road, New Delhi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>+91 11 2338 XXXX &bull; Chambers Registry</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>registry@legalchambers.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
