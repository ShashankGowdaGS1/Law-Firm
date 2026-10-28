import React from "react";
import { Link } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export interface InformationalLinkRowProps {
  number: string;
  label: string;
  destination: string;
  description?: string;
}

export const InformationalLinkRow: React.FC<InformationalLinkRowProps> = ({
  number,
  label,
  destination,
  description
}) => {
  return (
    <Link
      variant="card"
      href={destination}
      className="group relative flex items-center justify-between gap-4 py-3.5 sm:py-4 border-b border-brand-navy/10 hover:border-brand-navy/30 transition-colors cursor-pointer text-left w-full no-underline hover:no-underline focus-visible:no-underline"
    >
      <div className="flex items-start gap-3.5 sm:gap-5 flex-1 min-w-0">
        <span className="font-mono text-xs sm:text-sm font-bold text-brand-indigo group-hover:text-brand-navy transition-colors shrink-0 pt-0.5 no-underline">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <span className="font-heading font-bold text-base sm:text-lg text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors block leading-snug">
            {label}
          </span>
          {description && (
            <span className="font-sans text-xs text-brand-text/70 block mt-0.5 leading-normal no-underline">
              {description}
            </span>
          )}
        </div>
      </div>

      <div className="shrink-0 flex items-center pl-2">
        <span className="w-8 h-8 rounded-full bg-brand-off-white group-hover:bg-brand-navy group-hover:text-brand-gold flex items-center justify-center text-brand-navy/50 transition-all duration-200">
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>

      {/* Subtle gold line indicator animating on hover */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-300 ease-out"
      />
    </Link>
  );
};
