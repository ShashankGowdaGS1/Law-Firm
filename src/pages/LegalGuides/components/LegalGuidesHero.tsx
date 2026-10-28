import React from "react";
import { Link } from "react-router-dom";
import { ASSET_PATHS } from "@/utils/assets";
import { ChevronRight, ArrowDown } from "lucide-react";

export const LegalGuidesHero: React.FC = () => {
  return (
    <section
      aria-label="Legal Guides and Knowledge Library"
      className="relative w-full bg-[#F9F7F4] text-brand-text overflow-hidden border-b border-brand-navy/10 z-0 lg:h-[calc(100vh-84px)] lg:min-h-[650px] lg:max-h-[720px]"
    >
      {/* ========================================================================= */}
      {/* DESKTOP FULL-BLEED RIGHT-SIDE PHOTOGRAPH (Touches Top, Right, Bottom)    */}
      {/* ========================================================================= */}
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] xl:w-[52%] h-full z-0 overflow-hidden">
        <img
          src={ASSET_PATHS.nanoBanana.legalGuidesLibrary}
          alt="Contemporary Indian legal research library with statutory volumes and reference materials"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover object-[40%_center]"
        />
      </div>

      {/* ========================================================================= */}
      {/* LEFT CONTENT PANEL (Aligned with website horizontal max-w-7xl gutters)    */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full lg:w-[48%] xl:w-[48%] pt-8 pb-8 sm:pt-12 sm:pb-10 lg:py-16 flex flex-col justify-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-text/65 mb-4 sm:mb-5">
            <Link
              to="/"
              className="hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-text/30" />
            <span className="text-brand-navy font-semibold" aria-current="page">
              Legal Guides
            </span>
          </nav>

          {/* Eyebrow Label */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-6 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              LEGAL KNOWLEDGE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] leading-[1.14] tracking-tight text-brand-navy mb-4 sm:mb-5">
            Insights Into Legal Matters.
          </h1>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 max-w-xl mb-6 sm:mb-8 font-normal">
            Explore the firm&apos;s approved educational resources on legal concepts, documentation, procedures, and areas of practice.
          </p>

          {/* Jump Anchor */}
          <div className="pt-1">
            <a
              href="#guides-library"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-brand-indigo hover:text-brand-navy uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              <span className="group-hover:underline decoration-1 underline-offset-4">
                Browse Publication Library
              </span>
              <ArrowDown className="w-4 h-4 text-brand-indigo transition-transform duration-200 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET FULL-WIDTH PHOTOGRAPH (Stacked cleanly beneath text)     */}
      {/* ========================================================================= */}
      <div className="lg:hidden relative w-full h-[320px] sm:h-[400px] md:h-[440px] overflow-hidden bg-warm-white">
        <img
          src={ASSET_PATHS.nanoBanana.legalGuidesLibrary}
          alt="Contemporary Indian legal research library with statutory volumes and reference materials"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-[40%_center]"
        />
      </div>
    </section>
  );
};
