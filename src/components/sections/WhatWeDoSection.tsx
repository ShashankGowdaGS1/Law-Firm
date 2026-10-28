import React from "react";
import { Container, Link } from "@/components/ui";
import { ArrowRight, BookOpenCheck, FileText } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const WhatWeDoSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="what-we-do"
      aria-label="What We Do — Understanding Legal Matters"
      className="relative w-full bg-brand-off-white py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Content & Integrated Information Rows (~48%) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            {/* Section Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 mb-3.5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-2 duration-500"
              }`}
            >
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                What We Do
              </span>
            </div>

            {/* Confident Heading */}
            <h2
              className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] leading-[1.18] tracking-tight text-brand-navy mb-4 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              Understanding Legal Matters
            </h2>

            {/* Short Supporting Paragraph */}
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-7 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Explore information about legal practice areas, the firm&apos;s
              professional background, and the kinds of matters covered by its
              services.
            </p>

            {/* Integrated Editorial Information Rows (No Generic White Cards) */}
            <div
              className={`border-t border-brand-navy/10 divide-y divide-brand-navy/10 mb-8 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
              }`}
            >
              {/* Row 1: Practice Area Information */}
              <div className="py-4.5 flex items-start gap-3.5">
                <span className="p-2 rounded-sm bg-brand-champagne/35 text-brand-navy shrink-0 mt-0.5">
                  <FileText className="w-4 h-4 text-brand-indigo" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-navy mb-1 tracking-tight">
                    Practice Area Information
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-brand-text/75 leading-relaxed">
                    Structured overviews of Indian statutory frameworks, commercial
                    guidelines, regulatory filings, and dispute proceedings.
                  </p>
                </div>
              </div>

              {/* Row 2: Professional Legal Resources */}
              <div className="py-4.5 flex items-start gap-3.5">
                <span className="p-2 rounded-sm bg-brand-champagne/35 text-brand-navy shrink-0 mt-0.5">
                  <BookOpenCheck className="w-4 h-4 text-brand-indigo" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-navy mb-1 tracking-tight">
                    Professional Legal Resources
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-brand-text/75 leading-relaxed">
                    Objective educational references covering corporate governance,
                    appellate procedures, and dispute resolution mechanisms.
                  </p>
                </div>
              </div>
            </div>

            {/* Directional Link with Animated Arrow Hover */}
            <div>
              <Link
                href="/legal-services"
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-heading font-bold text-brand-navy hover:text-brand-indigo underline-offset-8 hover:underline transition-colors cursor-pointer"
              >
                <span>Explore Our Practice Areas</span>
                <ArrowRight className="w-4 h-4 text-brand-indigo transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Large, Substantial Photographic Image (~52%) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-sm overflow-hidden bg-white border border-brand-navy/15 shadow-xl">
              {/* Actual Photographic Image */}
              <img
                src="/assets/images/nano-banana/what-we-do-consultation.jpg"
                alt="Professional Legal Consultation — Indian Woman Advocate in Formal Attire Reviewing Legal Documents with Client in Chambers"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />

              {/* Understated Illustrative Photography Caption */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative imagery &mdash; not actual firm personnel.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
