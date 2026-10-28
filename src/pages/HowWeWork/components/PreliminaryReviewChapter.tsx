import React from "react";
import { ASSET_PATHS } from "@/utils/assets";

export const PreliminaryReviewChapter: React.FC = () => {
  return (
    <article
      id="stage-02"
      aria-label="Stage 02 — Preliminary Review & Conflict Clearance"
      className="scroll-mt-32 pt-14 sm:pt-20 pb-14 sm:pb-20 border-b border-brand-navy/10 text-brand-text"
    >
      {/* Chapter Number & Eyebrow */}
      <div className="flex items-baseline gap-4 sm:gap-6 mb-8">
        <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-indigo/25 select-none shrink-0">
          02
        </span>
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            STAGE 02 &bull; PRELIMINARY REVIEW
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-brand-navy mt-1">
            Understanding the Relevant Considerations.
          </h2>
        </div>
      </div>

      {/* Editorial Split: ~40% Image / ~60% Text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Photographic Evidence Image (~40%) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] rounded-sm overflow-hidden bg-brand-navy/5 border border-brand-navy/15 shadow-md">
            <img
              src={ASSET_PATHS.nanoBanana.preliminaryReviewDocs}
              alt="Hands of a legal professional reviewing statutory documents and legal records"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            {/* Understated Illustrative Photography Caption */}
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10">
              <span className="text-[10px] font-sans text-white/85 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 tracking-wide">
                Illustrative imagery &mdash; not actual firm personnel.
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & Consideration Rows (~60%) */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
          <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy font-medium">
            Before taking on any matter, chambers conducts thorough preliminary diligence to verify that we can act on your behalf lawfully, ethically, and effectively.
          </p>

          <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/80">
            We confirm the absence of adverse interests, review statutory limitation windows, and evaluate forum requirements in full alignment with Bar Council of India standards.
          </p>

          {/* Three Simplified Consideration Rows */}
          <div className="border-t border-brand-navy/10 divide-y divide-brand-navy/10 pt-1">
            <div className="py-3">
              <h3 className="font-heading font-bold text-sm text-brand-navy mb-0.5">
                Substantive Review
              </h3>
              <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                Evaluating the legal questions, applicable acts, and whether trial court, high court, or tribunal representation is needed.
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-heading font-bold text-sm text-brand-navy mb-0.5">
                Conflict Verification
              </h3>
              <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                Cross-checking our records to ensure chambers does not represent any adverse or competing interests in your matter.
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-heading font-bold text-sm text-brand-navy mb-0.5">
                Limitation & Urgency
              </h3>
              <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                Checking statutory filing windows, limitation periods, and whether immediate interim injunctions or relief are required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
