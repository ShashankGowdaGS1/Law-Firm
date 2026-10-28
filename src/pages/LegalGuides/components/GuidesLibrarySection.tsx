import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { LegalGuide, GUIDE_TOPICS } from "@/data/guides/guidesData";
import { Search, X, Clock, ArrowRight, Tag, BookOpen, RotateCcw } from "lucide-react";

interface GuidesLibrarySectionProps {
  guides: LegalGuide[];
}

export const GuidesLibrarySection: React.FC<GuidesLibrarySectionProps> = ({ guides }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("All Topics");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filtered and searched publications
  const filteredGuides = useMemo(() => {
    let result = guides;

    // Filter by topic category if not "All Topics"
    if (selectedTopic !== "All Topics") {
      result = result.filter(
        (g) => g.category.toLowerCase() === selectedTopic.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((g) => {
        const titleMatch = g.title.toLowerCase().includes(q);
        const excerptMatch = g.excerpt.toLowerCase().includes(q);
        const categoryMatch = g.category.toLowerCase().includes(q);
        const tagMatch = g.tags.some((t) => t.toLowerCase().includes(q));
        return titleMatch || excerptMatch || categoryMatch || tagMatch;
      });
    }

    return result;
  }, [guides, selectedTopic, searchQuery]);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedTopic("All Topics");
    setVisibleCount(6);
  };

  const visibleGuides = filteredGuides.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGuides.length;

  return (
    <section
      id="guides-library"
      aria-label="Legal Guides Knowledge Index"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-warm-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ========================================================================= */}
        {/* SECTION 03: SEARCH & TOPIC NAVIGATION CONTROLS                            */}
        {/* ========================================================================= */}
        <div className="space-y-6 bg-white p-6 sm:p-8 rounded-sm border border-brand-navy/10 shadow-sm">
          {/* Search Input Bar */}
          <div className="relative w-full">
            <label htmlFor="guide-search-input" className="sr-only">
              Search legal guides by title, category, or statutory keywords
            </label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-indigo">
              <Search className="w-5 h-5" />
            </div>

            <input
              id="guide-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search legal guides by subject, statute, or practice domain..."
              className="w-full pl-12 pr-12 py-3.5 bg-brand-champagne/15 border border-brand-navy/15 rounded-sm font-sans text-sm text-brand-navy placeholder:text-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search input"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-brand-text/50 hover:text-brand-navy transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Topic Category Selectors (Desktop wrapped chips / Mobile horizontally scrollable) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-brand-navy/10">
            <div
              role="radiogroup"
              aria-label="Filter legal guides by practice category"
              className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none"
            >
              {GUIDE_TOPICS.map((topic) => {
                const isSelected = selectedTopic === topic;

                return (
                  <button
                    key={topic}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setVisibleCount(6);
                    }}
                    className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-brand-navy text-white shadow-sm border border-brand-navy"
                        : "bg-white text-brand-navy/70 border border-brand-navy/15 hover:bg-brand-champagne/30 hover:text-brand-navy"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>

            {/* Results Count Announcement */}
            <div aria-live="polite" className="text-xs font-sans text-brand-text/70 shrink-0">
              Showing <span className="font-bold text-brand-navy">{filteredGuides.length}</span>{" "}
              {filteredGuides.length === 1 ? "guide" : "guides"}
              {selectedTopic !== "All Topics" && <span> in {selectedTopic}</span>}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 04: LEGAL GUIDES PUBLICATION INDEX                                */}
        {/* ========================================================================= */}
        {filteredGuides.length > 0 ? (
          <div className="space-y-10">
            {/* Grid of Publication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {visibleGuides.map((guide) => (
                <article
                  key={guide.id}
                  className="group flex flex-col justify-between bg-white border border-brand-navy/15 rounded-sm p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-indigo/40 transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* Header Metadata */}
                    <div className="flex items-center justify-between gap-3 text-xs text-brand-text/65 pb-3 border-b border-brand-navy/10">
                      <span className="font-sans font-bold uppercase tracking-wider text-brand-indigo">
                        {guide.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-brand-indigo" />
                        {guide.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy leading-snug group-hover:text-brand-indigo transition-colors">
                      <Link
                        to={`/legal-guides/${guide.slug}`}
                        className="hover:underline focus-visible:underline group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4"
                      >
                        {guide.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="font-sans text-xs sm:text-sm text-brand-text/80 leading-relaxed line-clamp-3">
                      {guide.excerpt}
                    </p>

                    {/* Tags */}
                    {guide.tags && guide.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {guide.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] font-sans px-2 py-0.5 rounded bg-brand-champagne/30 text-brand-navy/80 border border-brand-navy/10"
                          >
                            <Tag className="w-2.5 h-2.5 text-brand-indigo/60" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Bar: Date & Read Link */}
                  <div className="pt-6 mt-6 border-t border-brand-navy/10 flex items-center justify-between">
                    <span className="text-[11px] font-sans text-brand-text/60">
                      {guide.publishedDate}
                    </span>

                    <Link
                      to={`/legal-guides/${guide.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-indigo hover:text-brand-navy uppercase tracking-wider transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Progressive Pagination */}
            {hasMore && (
              <div className="text-center pt-6">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white border border-brand-navy/20 hover:border-brand-navy text-brand-navy text-xs sm:text-sm font-semibold rounded-sm shadow-sm transition-all"
                >
                  <span>Load More Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty Search & Filter State */
          <div className="text-center py-16 px-4 bg-white rounded-sm border border-brand-navy/15 space-y-4">
            <div className="p-3 rounded-full bg-brand-champagne/40 text-brand-indigo inline-block">
              <BookOpen className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-bold text-xl text-brand-navy">
              No guides match your search.
            </h3>

            <p className="font-sans text-xs sm:text-sm text-brand-text/75 max-w-md mx-auto leading-relaxed">
              We couldn&apos;t find any published legal guides matching &ldquo;{searchQuery}&rdquo; in the selected topic. Try adjusting your search query or reset filters.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-xs font-semibold rounded-sm hover:bg-brand-indigo transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
