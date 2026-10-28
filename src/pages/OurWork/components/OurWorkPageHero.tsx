import React from "react";
import { Link } from "react-router-dom";
import { ASSET_PATHS } from "@/utils/assets";
import { ChevronRight, ArrowDown } from "lucide-react";

export const OurWorkPageHero: React.FC = () => {
  return (
    <section
      aria-label="Our Work and Practice Activities Overview"
      className="pt-28 pb-12 sm:pb-16 lg:pb-20 bg-warm-white text-brand-text border-b border-brand-navy/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
        {/* TOP: Typographic Region (Breadcrumbs, Eyebrow, Headline, Description) */}
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-text/60">
            <Link
              to="/"
              className="hover:text-brand-indigo transition-colors focus:outline-none focus:underline"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-text/30" />
            <span className="text-brand-navy font-semibold" aria-current="page">
              Our Work
            </span>
          </nav>

          {/* Section Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              OUR WORK / PRACTICE INFORMATION
            </span>
          </div>

          {/* Confident Editorial Headline */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] tracking-tight text-brand-navy">
            The Nature of Our Work.
          </h1>

          {/* Descriptive Intro Body */}
          <p className="font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-brand-text/85 font-normal max-w-2xl">
            Explore information about the legal activities and practice areas represented in the firm&apos;s approved professional information.
          </p>

          {/* Quick Jump Action */}
          <div className="pt-1">
            <a
              href="#work-index"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-indigo hover:text-brand-navy transition-colors group"
            >
              <span>Explore Practice Activities Directory</span>
              <ArrowDown className="w-4 h-4 text-brand-indigo group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* BELOW: Wide Cinematic Documentary Photographic Region */}
        <div className="relative w-full rounded-sm overflow-hidden bg-brand-navy shadow-md border border-brand-navy/15">
          <div className="relative aspect-[16/8] sm:aspect-[21/9] lg:aspect-[2.4/1] w-full overflow-hidden">
            <img
              src={ASSET_PATHS.nanoBanana.ourWorkHero}
              alt="Indian legal professional in advocate attire reviewing organized documents and law references in chambers"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-[center_35%]"
            />

            {/* Subtle Gradient Framing */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
            />
          </div>

          {/* Understated Regulatory Attribution Caption */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
            <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
              Illustrative documentary photography &mdash; not actual client files or matters.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
