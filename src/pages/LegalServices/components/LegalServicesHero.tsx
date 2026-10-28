import React from "react";
import { Container } from "@/components/ui";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ASSET_PATHS } from "@/utils/assets";
import { ArrowDown } from "lucide-react";

export const LegalServicesHero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScrollToDirectory = (categoryId?: string) => {
    const targetId = categoryId ? `category-${categoryId}` : "services-directory";
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }
  };

  return (
    <section
      aria-label="Practice Areas Overview Hero"
      className="relative w-full bg-[#F9F7F4] py-12 sm:py-16 lg:py-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Editorial Split Composition: Left ~55% Content / Right ~45% Substantial Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Eyebrow, Large Balanced Headline, Overview & Category Shortcuts (~55%) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow Label */}
            <div
              className={`inline-flex items-center gap-2 mb-3.5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-2 duration-500"
              }`}
            >
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                Our Practice Areas
              </span>
            </div>

            {/* Confident Large Headline */}
            <h1
              className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.14] tracking-tight text-brand-navy mb-5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              Legal Practice, Clearly Defined.
            </h1>

            {/* Supporting Description */}
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-8 max-w-xl ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Explore information about the firm&apos;s areas of legal practice,
              relevant statutory frameworks, and structured advisory counsel.
            </p>

            {/* Subtle Category Navigation Quick-Jump Indicators */}
            <div
              className={`pt-6 border-t border-brand-navy/10 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
              }`}
            >
              <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-text/60 block mb-3">
                Jump to Practice Vertical:
              </span>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => handleScrollToDirectory("corporate-commercial")}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white border border-brand-navy/15 hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-150 text-xs font-sans font-semibold text-brand-navy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-xs"
                >
                  <span className="font-mono text-brand-indigo group-hover:text-brand-gold transition-colors">01</span>
                  <span>Corporate & Commercial</span>
                  <ArrowDown className="w-3 h-3 text-brand-indigo group-hover:text-brand-gold transition-transform duration-200 group-hover:translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollToDirectory("dispute-resolution")}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white border border-brand-navy/15 hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-150 text-xs font-sans font-semibold text-brand-navy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-xs"
                >
                  <span className="font-mono text-brand-indigo group-hover:text-brand-gold transition-colors">02</span>
                  <span>Dispute Resolution</span>
                  <ArrowDown className="w-3 h-3 text-brand-indigo group-hover:text-brand-gold transition-transform duration-200 group-hover:translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollToDirectory("regulatory-specialized")}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white border border-brand-navy/15 hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-150 text-xs font-sans font-semibold text-brand-navy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-xs"
                >
                  <span className="font-mono text-brand-indigo group-hover:text-brand-gold transition-colors">03</span>
                  <span>Regulatory & Specialized</span>
                  <ArrowDown className="w-3 h-3 text-brand-indigo group-hover:text-brand-gold transition-transform duration-200 group-hover:translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Photorealistic Advocate Portrait (~45%) */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4] max-h-[560px] rounded-sm overflow-hidden bg-white border border-brand-navy/15 shadow-2xl">
              <img
                src={ASSET_PATHS.nanoBanana.legalServicesHero}
                alt="Indian Advocate in Authentic Black Coat and White Neck Bands Standing Near Chambers Desk with Case File"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover object-top lg:object-center"
              />

              {/* Understated Illustrative Photography Caption */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative imagery &mdash; not actual firm personnel.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
