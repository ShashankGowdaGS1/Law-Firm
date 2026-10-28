import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowUpRight, Lock, Users, HelpCircle, Send } from "lucide-react";

export const EnquiryInformationSection: React.FC = () => {
  return (
    <section
      id="enquiry-considerations"
      aria-label="Enquiry Information and Preliminary Considerations"
      className="scroll-mt-28 py-16 sm:py-20 border-b border-brand-navy/10 bg-warm-white text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Typographic Statement (~45%) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo block">
                IMPORTANT PRACTICAL GUIDANCE
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-brand-navy mt-2">
                Before Submitting an Enquiry
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy/90 font-medium">
              An overview of information that may be relevant when making an initial enquiry.
            </p>

            <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/80">
              To ensure that any initial dialogue is conducted responsibly and in alignment with professional guidelines, we ask potential clients and instructing entities to review these preliminary points.
            </p>

            {/* Safeguard Alert Box */}
            <div className="p-4 bg-amber-500/10 border-l-2 border-amber-600/70 text-brand-navy rounded-r-sm space-y-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-amber-900">
                  Data Handling & Discretion
                </span>
              </div>
              <p className="font-sans text-xs text-amber-950/85 leading-relaxed">
                Please do not submit confidential documents, strategic legal files, or sensitive proprietary details through preliminary web or email channels until a formal matter review and conflict check have been completed.
              </p>
            </div>

            {/* Quick Links */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-brand-indigo">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 hover:text-brand-navy underline underline-offset-4 decoration-brand-indigo/30 transition-colors"
              >
                <span>Direct Contact Channels</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-1.5 hover:text-brand-navy underline underline-offset-4 decoration-brand-indigo/30 transition-colors"
              >
                <span>Privacy & Data Policy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Information Rows Separated by Thin Lines (~55%) */}
          <div className="lg:col-span-7 divide-y divide-brand-navy/15 border-t border-b border-brand-navy/15">
            {/* 01 — General Nature of the Enquiry */}
            <div className="py-5 sm:py-6 group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo/60">
                  01
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-indigo/70" />
                  General Nature of the Enquiry
                </h3>
              </div>
              <p className="pl-8 sm:pl-9 font-sans text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                Provide a concise summary outlining whether your enquiry relates to corporate advisory, dispute resolution, contract drafting, regulatory compliance, or real estate diligence. Avoid including tactical litigation steps or internal deliberations.
              </p>
            </div>

            {/* 02 — Relevant Parties */}
            <div className="py-5 sm:py-6 group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo/60">
                  02
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-indigo/70" />
                  Relevant Parties & Entities
                </h3>
              </div>
              <p className="pl-8 sm:pl-9 font-sans text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                State the names of key individuals, affiliated corporate entities, or opposing parties. This enables chambers to conduct an internal conflict check prior to receiving detailed matter background.
              </p>
            </div>

            {/* 03 — Sensitive Information */}
            <div className="py-5 sm:py-6 group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo/60">
                  03
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy flex items-center gap-2">
                  <Lock className="w-4 h-4 text-brand-indigo/70" />
                  Sensitive & Confidential Materials
                </h3>
              </div>
              <p className="pl-8 sm:pl-9 font-sans text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                Reserve detailed evidentiary records, trade secrets, financial schedules, and privileged communications until chambers confirms capacity and formal engagement terms have been settled.
              </p>
            </div>

            {/* 04 — Appropriate Communication Channels */}
            <div className="py-5 sm:py-6 group">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo/60">
                  04
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy flex items-center gap-2">
                  <Send className="w-4 h-4 text-brand-indigo/70" />
                  Appropriate Communication Channels
                </h3>
              </div>
              <p className="pl-8 sm:pl-9 font-sans text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                Official enquiries should be directed through our published chambers email, registered telephone, or scheduled consultation appointments at our offices to ensure accurate record-keeping and data security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
