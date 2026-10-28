import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getApprovedWorkCategories, WorkCategoryItem } from "@/data/work/workData";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

export const WorkIndexSection: React.FC = () => {
  const categories: WorkCategoryItem[] = getApprovedWorkCategories();
  const [selectedId, setSelectedId] = useState<string>(
    categories[0]?.id || "legal-research-advisory"
  );

  const activeCategory: WorkCategoryItem =
    categories.find((c) => c.id === selectedId) || categories[0];

  return (
    <section
      id="work-index"
      aria-label="Areas of Legal Work Directory"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-brand-navy text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Region */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              AREAS OF LEGAL WORK
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-tight text-white">
            Explore How Chambers Operates.
          </h2>

          <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed mt-3 max-w-2xl">
            Select a category below to explore the drafting, advisory, and dispute resolution work conducted across our approved practice areas.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Split ~38% Category Index / ~62% Interactive Detail Panel   */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* LEFT: Category Navigation Index (~38%) */}
          <div
            role="tablist"
            aria-label="Legal Work Categories"
            className="lg:col-span-5 divide-y divide-white/15 border-t border-b border-white/15"
          >
            {categories.map((cat) => {
              const isActive = cat.id === selectedId;

              return (
                <button
                  key={cat.id}
                  id={`tab-${cat.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${cat.id}`}
                  onClick={() => setSelectedId(cat.id)}
                  className={`w-full py-4 px-4 text-left transition-all duration-200 flex items-center justify-between gap-4 group cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-white border-l-4 border-l-brand-gold pl-5"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-baseline gap-3.5 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold shrink-0 ${
                        isActive ? "text-brand-gold" : "text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      {cat.index}
                    </span>

                    <span
                      className={`font-heading font-bold text-base sm:text-lg truncate ${
                        isActive ? "text-white" : "text-white/85 group-hover:text-white"
                      }`}
                    >
                      {cat.displayTitle || cat.title}
                    </span>
                  </div>

                  <div className="shrink-0">
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive
                          ? "text-brand-gold translate-x-1"
                          : "text-white/30 group-hover:text-white/70"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Category Content Panel (~62%) */}
          <div
            id={`tabpanel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
            className="lg:col-span-7 bg-white/[0.04] border border-white/15 rounded-sm p-8 xl:p-10 space-y-6 shadow-xl"
          >
            {/* Active Header & Context Badge */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/15">
                <span className="font-mono text-xs font-bold text-brand-gold">
                  CATEGORY &bull; {activeCategory.index}
                </span>
                <span className="text-[11px] font-sans text-white/60 tracking-wider uppercase">
                  {activeCategory.statutoryContext}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white pt-2">
                {activeCategory.displayTitle || activeCategory.title}
              </h3>
              <p className="font-sans text-xs text-white/60 tracking-wide uppercase">
                Formal Practice: {activeCategory.title}
              </p>

              <p className="font-sans text-base sm:text-lg text-white/95 leading-relaxed font-medium pt-1">
                {activeCategory.shortDescription}
              </p>
            </div>

            {/* Detailed Description with comfortable readability */}
            <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed">
              {activeCategory.detailedDescription}
            </p>

            {/* Core Professional Activities List */}
            <div className="space-y-3 pt-2">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold block">
                Key Professional Activities
              </span>

              <div className="grid grid-cols-1 gap-2.5">
                {activeCategory.coreActivities.map((act, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-sm bg-white/[0.03] border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-white/90 leading-relaxed">
                      {act}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Approved Practice Area Links */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <span className="font-sans text-xs text-white/60">
                Related Practice Areas:
              </span>

              <div className="flex flex-wrap gap-2.5">
                {activeCategory.relatedPracticeSlugs.map((practice) => (
                  <Link
                    key={practice.slug}
                    to={`/legal-services/${practice.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-brand-gold/15 hover:bg-brand-gold text-brand-gold hover:text-brand-navy border border-brand-gold/30 text-xs font-semibold transition-colors"
                  >
                    <span>{practice.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Touch-Friendly Accordion Stack                               */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-4">
          {categories.map((cat) => {
            const isExpanded = cat.id === selectedId;

            return (
              <div
                key={cat.id}
                className="border border-white/15 rounded-sm overflow-hidden bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedId(isExpanded ? "" : cat.id)}
                  aria-expanded={isExpanded}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-baseline gap-3 min-w-0">
                    <span className="font-mono text-xs font-bold text-brand-gold">
                      {cat.index}
                    </span>
                    <h3 className="font-heading font-bold text-base text-white truncate">
                      {cat.displayTitle || cat.title}
                    </h3>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 text-brand-gold shrink-0 transition-transform ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-6 pt-2 border-t border-white/10 space-y-4 bg-white/[0.02]">
                    <p className="font-sans text-sm text-white/95 leading-relaxed font-medium">
                      {cat.shortDescription}
                    </p>

                    <p className="font-sans text-sm text-white/80 leading-relaxed">
                      {cat.detailedDescription}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold block">
                        Key Activities
                      </span>
                      {cat.coreActivities.map((act, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-white/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2.5">
                      {cat.relatedPracticeSlugs.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/legal-services/${p.slug}`}
                          className="inline-flex items-center gap-1 text-xs text-brand-gold hover:text-white underline underline-offset-4 py-1"
                        >
                          <span>{p.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
