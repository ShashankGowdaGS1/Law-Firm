import React from "react";
import { ASSET_PATHS } from "@/utils/assets";
import { BookOpen, Layers } from "lucide-react";

export const LegalDocumentationFeature: React.FC = () => {
  return (
    <section
      aria-label="Legal Documentation and Research Feature"
      className="py-16 sm:py-20 lg:py-24 bg-warm-white border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Large Photographic Legal Documentation Scene (~58%) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] rounded-sm overflow-hidden bg-white shadow-xl border border-brand-navy/15">
              <img
                src={ASSET_PATHS.nanoBanana.ourWorkDocumentation}
                alt="Detailed Indian legal research workspace with organized reference materials and fountain pen"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />

              {/* Regulatory Caption */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                <span className="text-[10px] font-sans text-white/85 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative research photography &mdash; documentary representation.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content (~42%) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div>
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo block">
                DOCUMENTATION &amp; RESEARCH
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight text-brand-navy mt-2">
                Attention to the Details.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy/90 font-medium">
              Legal documents form the substantive foundation of every advisory opinion, contractual transaction, and contentious proceeding.
            </p>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/80">
              Our chambers approaches documentation with rigorous scrutiny—verifying statutory timelines, cross-referencing judicial authorities, and ensuring that every clause or pleading reflects factual accuracy and legal coherence under governing law.
            </p>

            {/* Factual Research Disciplines */}
            <div className="border-t border-brand-navy/15 pt-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="p-1.5 rounded-sm bg-brand-champagne/40 text-brand-indigo shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-navy">
                    Precedent Analysis &amp; Citations
                  </h3>
                  <p className="font-sans text-sm text-brand-text/75 leading-relaxed">
                    Systematic examination of binding Supreme Court and High Court judgments governing each point of law.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="p-1.5 rounded-sm bg-brand-champagne/40 text-brand-indigo shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-navy">
                    Evidentiary Chronologies &amp; Indexes
                  </h3>
                  <p className="font-sans text-sm text-brand-text/75 leading-relaxed">
                    Constructing structured master chronologies of correspondence, contractual notices, and institutional records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
