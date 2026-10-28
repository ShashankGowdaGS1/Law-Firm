import React from "react";
import { Link } from "@/components/ui";
import { LegalServiceItem } from "@/data/services/servicesData";
import { ArrowRight } from "lucide-react";

export interface PracticeServiceRowProps {
  service: LegalServiceItem;
  index: string;
}

export const PracticeServiceRow: React.FC<PracticeServiceRowProps> = ({
  service,
  index
}) => {
  return (
    <Link
      variant="card"
      href={`/legal-services/${service.slug}`}
      className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 sm:py-6 px-4 -mx-4 rounded-sm transition-all duration-200 hover:bg-brand-off-white/80 cursor-pointer text-left w-full border-b border-brand-navy/10 hover:border-brand-navy/20 no-underline hover:no-underline focus-visible:no-underline"
    >
      {/* Left Area: Index + Title + Complete Description */}
      <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
        <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo group-hover:text-brand-navy transition-colors shrink-0 pt-0.5 no-underline">
          {index}
        </span>

        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors tracking-tight leading-snug mb-1">
            {service.title}
          </h4>
          <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed max-w-2xl no-underline">
            {service.description}
          </p>
        </div>
      </div>

      {/* Right Area: Directional Arrow Circle */}
      <div className="shrink-0 flex items-center pl-8 sm:pl-4 self-end sm:self-center">
        <span className="w-9 h-9 rounded-full bg-brand-off-white border border-brand-navy/10 group-hover:bg-brand-navy group-hover:text-brand-gold group-hover:border-brand-navy flex items-center justify-center text-brand-navy/50 transition-all duration-200 shadow-xs">
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>

      {/* Subtle Animated Warm-Gold Line Indicator */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-300 ease-out"
      />
    </Link>
  );
};
