import React from "react";
import { Container, Link } from "@/components/ui";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ASSET_PATHS } from "@/utils/assets";

export const AboutPeopleSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="our-people"
      aria-label="Our People — The Professionals Associated with the Practice"
      className="relative w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Asymmetric 55/45 Composition: Left Candid Photography / Right Typographic Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Substantial Candid Legal Discussion Photography (~55%) */}
          <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/4] lg:aspect-[3/4] max-h-[580px] rounded-sm overflow-hidden bg-white border border-brand-navy/15 shadow-xl">
              <img
                src={ASSET_PATHS.nanoBanana.aboutPeopleDiscussion}
                alt="Two Indian advocates in authentic professional attire reviewing legal files in chamber conference room"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top lg:object-center"
              />

              {/* Understated Illustrative Photography Caption */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative imagery &mdash; not actual firm personnel.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Typographic Introduction & CTA (~45%) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center order-1 lg:order-2">
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
                Our People
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-brand-navy mb-5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              The People Behind the Work.
            </h2>

            {/* Description */}
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-6 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Learn about the legal professionals associated with the firm, their approved
              professional backgrounds, and their areas of practice.
            </p>

            <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/70 mb-8">
              Chambers coordinates advocates across corporate advisory, dispute resolution,
              and statutory regulatory practice. Advocate credentials and bar admissions
              are maintained in accordance with professional regulatory guidelines.
            </p>

            {/* Action Button to Full Team Directory */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/our-team"
                variant="button"
                buttonVariant="primary"
                className="group !py-3.5 !px-7 !text-xs !font-bold tracking-wider uppercase shadow-sm hover:shadow text-center justify-center shrink-0"
              >
                <span>Explore Our Team</span>
                <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-brand-text/60">
                <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>Bar Council of India compliance standard</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
