import React from "react";
import { Link } from "react-router-dom";
import { LEGAL_SERVICES } from "@/data/services/servicesData";
import { ArrowRight, ChevronRight } from "lucide-react";

export const RelatedPracticesSection: React.FC = () => {
  // Read from existing canonical service dataset (filter non-placeholders, take top 5)
  const practices = LEGAL_SERVICES.filter((s) => !s.isPlaceholder).slice(0, 5);

  return (
    <section
      aria-label="Related Practice Areas Navigation"
      className="py-16 sm:py-20 lg:py-24 bg-warm-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Link to Full Directory */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo block mb-2">
              CANONICAL PRACTICE AREAS
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy">
              Related Areas of Practice.
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-text/80 mt-2">
              Explore the detailed statutory frameworks, focus areas, and procedural notes across our published practice areas.
            </p>
          </div>

          <Link
            to="/legal-services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-indigo hover:text-brand-navy transition-colors shrink-0 group"
          >
            <span>View All Practice Areas</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Clean Editorial Link Rows with Thin Dividers (No Large Card Grids) */}
        <div className="divide-y divide-brand-navy/15 border-t border-b border-brand-navy/15">
          {practices.map((practice, index) => (
            <Link
              key={practice.slug}
              to={`/legal-services/${practice.slug}`}
              className="group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-brand-champagne/20 transition-colors px-3 -mx-3 rounded-sm no-underline hover:no-underline focus-visible:no-underline"
            >
              <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo/60 group-hover:text-brand-indigo transition-colors shrink-0 no-underline">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-indigo/75 no-underline">
                      {practice.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors mt-0.5 truncate">
                    {practice.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-brand-text/70 line-clamp-1 mt-0.5 max-w-2xl no-underline">
                    {practice.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-brand-indigo shrink-0 pl-10 sm:pl-0">
                <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                  Practice Details
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
