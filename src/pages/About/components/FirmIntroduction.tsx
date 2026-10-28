import React from "react";
import { Container } from "@/components/ui";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const FirmIntroduction: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="firm-introduction"
      aria-label="The Firm — Introduction & Background"
      className="relative w-full bg-[#F9F7F4] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        {/* Asymmetric Typography-Led Composition: Left ~35% / Right ~65% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Section Label & Authoritative Editorial Heading (~35%) */}
          <div className="lg:col-span-5 xl:col-span-4">
            {/* Eyebrow Label */}
            <div
              className={`inline-flex items-center gap-2 mb-3.5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-2 duration-500"
              }`}
            >
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                Who We Are
              </span>
            </div>

            {/* Prominent Statement Heading */}
            <h2
              className={`font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] leading-[1.18] tracking-tight text-brand-navy ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              A Practice Defined by Its Principles.
            </h2>
          </div>

          {/* RIGHT COLUMN: Three Concise Editorial Paragraphs (~65%) */}
          <div
            className={`lg:col-span-7 xl:col-span-8 space-y-6 text-brand-text/85 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            <p className="font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-brand-navy font-medium">
              This platform provides objective information regarding the firm&apos;s
              chambers practice, core legal focus areas, and the procedural frameworks
              governing our counsel.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/80">
              Our professional work centers on advisory and advocacy across corporate
              governance, commercial arbitration, civil dispute resolution, and regulatory
              compliance under Indian statutory law. We approach each brief through rigorous
              factual investigation, careful statutory research, and methodical legal drafting.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/80">
              Every matter is handled in strict compliance with the Advocates Act and the
              regulatory standards of the Bar Council of India. We prioritize intellectual
              clarity, thorough preparation, and transparent procedural communication throughout
              the advisory relationship.
            </p>

            {/* Subtle Editorial Accent Divider */}
            <div className="pt-4 border-t border-brand-navy/10 flex items-center gap-3 text-xs text-brand-text/60">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>Chambers practice in civil, commercial, and regulatory domains</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
