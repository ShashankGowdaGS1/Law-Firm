import React from "react";
import { Container } from "@/components/ui";
import { ChevronDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ASSET_PATHS } from "@/utils/assets";

export const AboutHero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScrollToIntro = () => {
    const el = document.getElementById("firm-introduction");
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }
  };

  return (
    <section
      aria-label="About the Firm Hero Overview"
      className="relative w-full min-h-[65vh] lg:min-h-[75vh] xl:min-h-[80vh] flex flex-col justify-end bg-brand-navy overflow-hidden text-white"
    >
      {/* Background Cinematic Widescreen Photograph */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={ASSET_PATHS.nanoBanana.aboutHeroLawyer}
          alt="Indian advocate studying legal documentation and case files in chambers library"
          className="w-full h-full object-cover object-[center_35%] lg:object-[60%_35%]"
          loading="eager"
          decoding="sync"
        />

        {/* Artfully Controlled Deep Navy Gradient Overlay:
            Darkens lower-left quadrant for pristine typography contrast
            while preserving natural warmth and clarity over advocate on right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent lg:bg-gradient-to-tr lg:from-brand-navy/95 lg:via-brand-navy/60 lg:to-transparent pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent pointer-events-none"
        />
      </div>

      {/* Hero Content: Positioned in Lower Portion / Bottom-Left */}
      <Container size="default" className="relative z-10 pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow Label */}
          <div
            className={`inline-flex items-center gap-2 mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-2 duration-500"
            }`}
          >
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              About the Firm
            </span>
          </div>

          {/* Primary Widescreen H1 Headline */}
          <h1
            className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] tracking-tight text-white mb-5 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            Built Around the Practice of Law.
          </h1>

          {/* Descriptive Context */}
          <p
            className={`font-sans text-base sm:text-lg leading-relaxed text-white/85 mb-8 max-w-xl ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            An introduction to the firm&apos;s professional background, guiding principles,
            and approach to legal matters.
          </p>

          {/* Understated Smooth Anchor Scroll to Introduction */}
          <div
            className={`${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
            }`}
          >
            <button
              type="button"
              onClick={handleScrollToIntro}
              className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider text-white/90 hover:text-brand-gold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold py-1.5"
            >
              <span>Explore the Firm</span>
              <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-brand-gold group-hover:text-brand-navy flex items-center justify-center transition-all duration-200">
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Understated Illustrative Photography Caption */}
      <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 z-20">
        <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
          Illustrative imagery &mdash; not actual firm personnel.
        </span>
      </div>
    </section>
  );
};
