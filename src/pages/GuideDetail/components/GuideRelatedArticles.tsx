import React from "react";
import { Link } from "react-router-dom";
import { LegalGuide } from "@/data/guides/guidesData";
import { ArrowLeft, ArrowRight, Clock, ChevronRight } from "lucide-react";

interface GuideRelatedArticlesProps {
  relatedGuides: LegalGuide[];
  relatedPracticeSlug?: string;
}

export const GuideRelatedArticles: React.FC<GuideRelatedArticlesProps> = ({
  relatedGuides,
  relatedPracticeSlug,
}) => {
  return (
    <section
      aria-label="Related Legal Guides and Practice Navigation"
      className="mt-16 pt-12 border-t border-brand-navy/15 space-y-8"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            CONTINUE READING
          </span>
          <h3 className="font-heading font-bold text-2xl text-brand-navy mt-1">
            Related Legal Guides
          </h3>
        </div>

        <Link
          to="/legal-guides"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-indigo hover:text-brand-navy transition-colors shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      {/* Related Article Rows */}
      {relatedGuides.length > 0 ? (
        <div className="divide-y divide-brand-navy/10 border-t border-b border-brand-navy/10">
          {relatedGuides.slice(0, 3).map((guide) => (
            <Link
              key={guide.id}
              to={`/legal-guides/${guide.slug}`}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-brand-champagne/20 px-2 -mx-2 rounded-sm transition-colors no-underline hover:no-underline focus-visible:no-underline"
            >
              <div className="min-w-0">
                <span className="text-[10px] font-sans uppercase font-bold text-brand-indigo tracking-wider block no-underline">
                  {guide.category}
                </span>
                <h4 className="font-heading font-bold text-base text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors truncate mt-0.5">
                  {guide.title}
                </h4>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-xs text-brand-text/60 no-underline">
                <span className="flex items-center gap-1 font-mono text-[11px] no-underline">
                  <Clock className="w-3 h-3 text-brand-indigo" />
                  {guide.readTime}
                </span>
                <ChevronRight className="w-4 h-4 text-brand-indigo group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-4 bg-brand-champagne/20 rounded-sm text-xs text-brand-text/80">
          <span>Explore our complete collection in the </span>
          <Link to="/legal-guides" className="font-bold text-brand-indigo underline">
            Legal Guides Library
          </Link>
          <span>.</span>
        </div>
      )}

      {/* Practice Area Connection */}
      {relatedPracticeSlug && (
        <div className="p-5 bg-white border border-brand-navy/15 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-indigo block">
              Related Practice Area
            </span>
            <p className="font-sans text-xs text-brand-text/80 mt-0.5">
              Review our specialized statutory advisory and courtroom representation in this domain.
            </p>
          </div>

          <Link
            to={`/legal-services/${relatedPracticeSlug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-navy text-white text-xs font-semibold rounded-sm hover:bg-brand-indigo transition-colors shrink-0"
          >
            <span>Explore Practice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
};
