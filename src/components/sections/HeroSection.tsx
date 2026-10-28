import React from "react";
import { Link } from "@/components/ui";
import { ArrowRight, ChevronRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-label="Chambers Introduction and Practice Overview"
      className="relative w-full bg-brand-navy text-white overflow-hidden z-0"
    >
      {/* Subtle background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-indigo/25 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#181B57]/50 blur-[120px] pointer-events-none"
      />

      {/* ========================================================================= */}
      {/* DESKTOP FULL-BLEED RIGHT-SIDE PHOTOGRAPH (Touches Top, Right, Bottom)    */}
      {/* ========================================================================= */}
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] xl:w-[52%] h-full z-0 overflow-hidden">
        {/* Subtle Royal Navy gradient blending left edge into the text panel */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-28 xl:w-44 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent z-10 pointer-events-none"
        />

        {/* Full-bleed desktop hero image */}
        <img
          src="/assets/images/nano-banana/hero-lawyers-desktop.jpg"
          alt="Indian Legal Professionals — Senior Advocates in Formal Chambers Attire"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-[50%_16%] brightness-[0.98] contrast-[1.02]"
        />

        {/* Understated Illustrative Photography Caption */}
        <div className="absolute bottom-4 right-6 xl:bottom-6 xl:right-8 z-20">
          <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
            Illustrative imagery &mdash; not actual firm personnel.
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LEFT CONTENT PANEL (Aligned with website horizontal max-w-7xl gutters)    */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-0 lg:min-h-[640px] xl:min-h-[680px] lg:h-[calc(100vh-84px)] lg:max-h-[760px] flex items-center">
        <div className="w-full lg:w-[48%] xl:w-[46%] pt-10 pb-8 sm:pt-14 sm:pb-12 lg:py-20 flex flex-col justify-center">
          {/* Eyebrow Label */}
          <div
            className={`inline-flex items-center gap-2 mb-4 sm:mb-5 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-2 duration-500"
            }`}
          >
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Advocates & Legal Consultants
            </span>
          </div>

          {/* Confident Large Headline with Fluid Balanced Typography */}
          <h1
            className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] leading-[1.14] tracking-tight text-white mb-5 sm:mb-6 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            Legal guidance.
            <span className="block text-white/95 mt-1 sm:mt-1.5">
              Built on understanding.
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            className={`font-sans text-base sm:text-lg leading-relaxed text-white/80 max-w-lg mb-8 sm:mb-9 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            Explore legal practice areas, learn about the firm, and access
            information about legal matters.
          </p>

          {/* Two Clear Navigation Action Buttons with Strictly Equal Height */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
            }`}
          >
            {/* Primary CTA: Explore Legal Services */}
            <Link
              href="/legal-services"
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-12 rounded-sm bg-brand-gold text-brand-text font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:bg-brand-gold/90 active:bg-brand-gold transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Legal Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA: About the Firm */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 h-12 rounded-sm border border-white/25 bg-white/5 hover:bg-white/10 active:bg-white/15 text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span>About the Firm</span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET FULL-WIDTH PHOTOGRAPH (Stacked cleanly beneath text)     */}
      {/* ========================================================================= */}
      <div className="lg:hidden relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden bg-brand-navy">
        {/* Subtle top edge gradient to blend smoothly from text block */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-brand-navy via-brand-navy/50 to-transparent z-10 pointer-events-none"
        />

        {/* Responsive picture element */}
        <picture className="w-full h-full block">
          <source
            media="(max-width: 640px)"
            srcSet="/assets/images/nano-banana/hero-lawyers-mobile.jpg"
          />
          <img
            src="/assets/images/nano-banana/hero-lawyers-desktop.jpg"
            alt="Indian Legal Professionals — Senior Advocates in Formal Chambers Attire"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-[center_14%] brightness-[0.98] contrast-[1.02]"
          />
        </picture>

        {/* Understated Illustrative Photography Caption */}
        <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-20">
          <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
            Illustrative imagery &mdash; not actual firm personnel.
          </span>
        </div>
      </div>
    </section>
  );
};
