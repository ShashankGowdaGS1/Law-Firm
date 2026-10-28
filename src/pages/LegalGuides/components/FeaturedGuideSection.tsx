import React from "react";
import { Link } from "react-router-dom";
import { LegalGuide } from "@/data/guides/guidesData";
import { ASSET_PATHS } from "@/utils/assets";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

interface FeaturedGuideSectionProps {
  guide?: LegalGuide;
}

export const FeaturedGuideSection: React.FC<FeaturedGuideSectionProps> = ({ guide }) => {
  if (!guide) return null;

  return (
    <section
      aria-label="Featured Legal Guide"
      className="py-12 sm:py-16 bg-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-brand-champagne/20 p-6 sm:p-8 lg:p-12 rounded-sm border border-brand-navy/10 shadow-sm">
          {/* LEFT: Featured Publication Narrative (~55%) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 text-xs text-brand-text/75">
              <span className="px-2.5 py-0.5 rounded bg-brand-navy text-brand-gold text-[10px] font-sans font-bold uppercase tracking-wider">
                Featured Guide
              </span>
              <span>&bull;</span>
              <span className="font-sans font-bold uppercase tracking-wider text-brand-indigo">
                {guide.category}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Clock className="w-3.5 h-3.5 text-brand-indigo" />
                {guide.readTime}
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-brand-navy leading-snug">
              <Link
                to={`/legal-guides/${guide.slug}`}
                className="hover:text-brand-indigo hover:underline focus-visible:underline decoration-1 underline-offset-4 transition-colors"
              >
                {guide.title}
              </Link>
            </h2>

            <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed max-w-xl">
              {guide.excerpt}
            </p>

            <div className="pt-4 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-brand-text/60 font-sans">
                <span>Published {guide.publishedDate}</span>
                <span className="mx-2">&bull;</span>
                <span>{guide.authorNote}</span>
              </div>

              <Link
                to={`/legal-guides/${guide.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-indigo transition-colors group"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Featured Legal Research Imagery (~45%) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden bg-brand-navy shadow-md border border-brand-navy/15">
              <img
                src={ASSET_PATHS.nanoBanana.legalGuidesResearch}
                alt="Detailed view of Indian statutory code volumes and research materials"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-brand-navy/90 text-white border border-white/20 text-[10px] font-sans font-semibold tracking-wider uppercase backdrop-blur-xs">
                <BookOpen className="w-3 h-3 text-brand-gold" />
                <span>Statutory Practice Briefing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
