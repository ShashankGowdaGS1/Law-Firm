import React from "react";
import { Link } from "react-router-dom";
import { ASSET_PATHS } from "@/utils/assets";
import { ChevronRight, ArrowDown } from "lucide-react";

export const TeamPageHero: React.FC = () => {
  return (
    <section
      aria-label="Our Legal Professionals Hero"
      className="relative w-full min-h-[62vh] sm:min-h-[68vh] lg:min-h-[75vh] flex flex-col justify-end overflow-hidden bg-brand-navy text-white"
    >
      {/* Background Documentary Photographic Scene */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_PATHS.nanoBanana.ourTeamHero}
          alt="Adult Indian legal professionals in advocate attire collaborating over documentation inside chambers"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.82] contrast-[1.05]"
        />

        {/* Sophisticated Editorial Vignette & Navy Gradient Overlays */}
        {/* Horizontal gradient: deeper on the left for maximum text contrast in negative space */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent sm:w-4/5 lg:w-3/5"
        />
        {/* Vertical bottom gradient to anchor content and transition into next section */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent"
        />
        {/* Top subtle vignette beneath navbar */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand-navy/80 to-transparent pointer-events-none"
        />
      </div>

      {/* Hero Foreground Content in Intentional Negative Space */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pb-16 lg:pb-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-5">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/70">
            <Link
              to="/"
              className="hover:text-brand-gold transition-colors focus:outline-none focus:underline"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-brand-gold font-medium" aria-current="page">
              Our Team
            </span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              OUR LEGAL PROFESSIONALS
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-white">
            The People Behind the Practice.
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-white/85 font-normal max-w-xl">
            Explore information about the legal professionals associated with the firm and the areas of practice represented in its approved directory.
          </p>

          {/* Quick Jump Anchor */}
          <div className="pt-2">
            <a
              href="#team-directory"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-xs sm:text-sm font-semibold text-white transition-all group"
            >
              <span>Explore Directory</span>
              <ArrowDown className="w-4 h-4 text-brand-gold transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Discreet Illustrative Photography Disclosure */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 w-full">
        <div className="flex justify-end">
          <span className="text-[10px] sm:text-[11px] font-sans text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
            Illustrative documentary imagery &mdash; not actual firm personnel.
          </span>
        </div>
      </div>
    </section>
  );
};
