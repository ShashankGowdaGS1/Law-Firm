import React from "react";
import { Link } from "@/components/ui";
import { DetailedServiceOffering } from "@/data/services/servicesData";
import { ArrowRight } from "lucide-react";

export interface DetailedServiceRowProps {
  offering: DetailedServiceOffering;
}

export const DetailedServiceRow: React.FC<DetailedServiceRowProps> = ({
  offering
}) => {
  return (
    <Link
      variant="card"
      href={`/legal-services/${offering.serviceSlug}`}
      className="group relative block py-5 sm:py-6 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-sm transition-colors duration-200 hover:bg-white/70 border-b border-brand-navy/10 text-left no-underline hover:no-underline focus-visible:no-underline"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 sm:gap-6 flex-1">
          {/* Understated Two-Digit Index */}
          <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo/80 group-hover:text-brand-navy transition-colors shrink-0 pt-0.5 sm:pt-1 no-underline">
            {offering.index}
          </span>

          <div className="flex-1">
            {/* Header: Title + Category Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 className="font-heading font-semibold sm:font-bold text-base sm:text-lg md:text-xl text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors leading-snug">
                {offering.title}
              </h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider bg-brand-champagne/30 text-brand-navy/70 no-underline">
                {offering.category}
              </span>
            </div>

            {/* Short Supporting Description */}
            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed max-w-2xl no-underline">
              {offering.shortDescription}
            </p>
          </div>
        </div>

        {/* Minimal Directional Arrow */}
        <div className="flex items-center shrink-0 pt-1">
          <span className="w-8 h-8 rounded-full bg-brand-off-white group-hover:bg-brand-navy group-hover:text-brand-gold flex items-center justify-center text-brand-navy/40 transition-all duration-200">
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {/* Smooth Gold Bottom Accent Indicator */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-300 ease-out"
      />
    </Link>
  );
};
