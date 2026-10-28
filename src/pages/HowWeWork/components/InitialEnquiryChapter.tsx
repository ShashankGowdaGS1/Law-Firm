import React from "react";

export const InitialEnquiryChapter: React.FC = () => {
  return (
    <article
      id="stage-01"
      aria-label="Stage 01 — Initial Enquiry & Contact"
      className="scroll-mt-32 pt-2 pb-14 sm:pb-20 border-b border-brand-navy/10 text-brand-text"
    >
      {/* Chapter Eyebrow & Number */}
      <div className="flex items-baseline gap-4 sm:gap-6 mb-6">
        <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-indigo/25 select-none shrink-0">
          01
        </span>
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            STAGE 01 &bull; INITIAL CONTACT
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-brand-navy mt-1">
            Every Matter Begins With an Enquiry.
          </h2>
        </div>
      </div>

      {/* Main Narrative & Supporting Rows */}
      <div className="space-y-6 max-w-3xl">
        <p className="font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-brand-navy font-medium">
          Every legal engagement starts with a conversation. An initial enquiry gives you the opportunity to explain your legal requirements, circumstances, and objectives in plain language.
        </p>

        <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/80">
          At this exploratory stage, we review the general background of your matter, confirm who is involved, and assess whether our chambers has the right focus and capacity to advise you effectively.
        </p>

        {/* Two Concise Supporting Rows with Fine Dividers */}
        <div className="border-t border-brand-navy/10 divide-y divide-brand-navy/10 pt-2">
          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-heading font-bold text-sm text-brand-navy sm:w-48 shrink-0">
              Matter Overview
            </span>
            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
              A plain summary of your legal questions or commercial objectives, without sending confidential or strategic documents up front.
            </p>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-heading font-bold text-sm text-brand-navy sm:w-48 shrink-0">
              Party Details
            </span>
            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
              The names of all individuals, companies, or counterparties involved, so we can verify there are no conflicts of interest.
            </p>
          </div>
        </div>

        {/* Preliminary Safeguard Note */}
        <div className="p-4 sm:p-5 rounded-sm bg-brand-champagne/20 border-l-2 border-brand-indigo text-xs text-brand-text/80 leading-relaxed mt-4">
          <strong className="text-brand-navy font-semibold">Introductory Note:</strong> Initial communications are confidential and exploratory. Contacting chambers does not, in itself, establish a formal advocate-client relationship until conflict checks are cleared and engagement terms are agreed.
        </div>
      </div>
    </article>
  );
};
