import React from "react";
import { Container, Link } from "@/components/ui";
import { ChevronRight, ArrowDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ASSET_PATHS } from "@/utils/assets";

export const ProcessPageHero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }
  };

  return (
    <section
      aria-label="Our Approach & Process Hero"
      className="relative w-full bg-[#F9F7F4] pt-10 sm:pt-12 pb-14 sm:pb-16 lg:pb-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Accessible Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-1.5 sm:gap-2 text-xs font-sans text-brand-text/65">
            <li>
              <Link
                href="/"
                className="hover:text-brand-navy transition-colors underline-offset-4 hover:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-brand-text/40" />
            </li>
            <li className="text-brand-navy font-semibold" aria-current="page">
              How We Work
            </li>
          </ol>
        </nav>

        {/* Editorial Split Composition: Left ~55% / Right ~45% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Eyebrow, Large Headline, Descriptive Context & Quick Jump (~55%) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center order-2 lg:order-1">
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
                Our Approach
              </span>
            </div>

            {/* Confident Headline */}
            <h1
              className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] leading-[1.14] tracking-tight text-brand-navy mb-5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              A Considered Approach to Every Matter.
            </h1>

            {/* Descriptive Context */}
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-8 max-w-xl ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              An overview of the stages through which an initial enquiry may progress,
              from preliminary communication to an accepted legal engagement.
            </p>

            {/* Quick Stage Jump Buttons */}
            <div
              className={`pt-6 border-t border-brand-navy/10 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
              }`}
            >
              <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-text/60 block mb-3">
                The Four Engagement Stages:
              </span>

              <div className="flex flex-wrap gap-2.5">
                {[
                  { id: "stage-01", num: "01", label: "Initial Enquiry" },
                  { id: "stage-02", num: "02", label: "Preliminary Review" },
                  { id: "stage-03", num: "03", label: "Scope & Terms" },
                  { id: "stage-04", num: "04", label: "Matter Handling" }
                ].map((stg) => (
                  <button
                    key={stg.id}
                    type="button"
                    onClick={() => handleScrollToChapter(stg.id)}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white border border-brand-navy/15 hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-150 text-xs font-sans font-semibold text-brand-navy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-xs"
                  >
                    <span className="font-mono text-brand-indigo group-hover:text-brand-gold transition-colors">
                      {stg.num}
                    </span>
                    <span>{stg.label}</span>
                    <ArrowDown className="w-3 h-3 text-brand-indigo group-hover:text-brand-gold transition-transform duration-200 group-hover:translate-y-0.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Real Photographic Chamber Image (~45%) */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-sm overflow-hidden bg-white border border-brand-navy/15 shadow-xl">
              <img
                src={ASSET_PATHS.nanoBanana.howWeWorkHero}
                alt="Indian female advocate organizing matter files and documentation at walnut chambers desk"
                loading="eager"
                decoding="sync"
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
