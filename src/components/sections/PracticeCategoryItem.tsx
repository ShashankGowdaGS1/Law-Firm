import React from "react";
import { Link } from "@/components/ui";
import { LegalServiceItem } from "@/data/services/servicesData";
import {
  Briefcase,
  Scale,
  Landmark,
  FileText,
  Shield,
  FileCheck,
  Building2,
  ShieldAlert,
  ArrowRight,
  LucideIcon
} from "lucide-react";

// Lucide icon dictionary keyed by iconName string
const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase,
  Scale,
  Landmark,
  FileText,
  Shield,
  FileCheck,
  Building2,
  ShieldAlert
};

export interface PracticeCategoryItemProps {
  service: LegalServiceItem;
}

export const PracticeCategoryItem: React.FC<PracticeCategoryItemProps> = ({
  service
}) => {
  const IconComponent = ICON_MAP[service.iconName] || Scale;

  return (
    <Link
      variant="card"
      href={`/legal-services/${service.slug}`}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-sm bg-brand-off-white/70 border border-brand-navy/10 hover:border-brand-navy/25 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden text-left no-underline hover:no-underline focus-visible:no-underline"
    >
      <div>
        {/* Top: Icon + Directional Arrow */}
        <div className="flex items-center justify-between mb-5">
          <span className="w-11 h-11 rounded-sm bg-white border border-brand-navy/10 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold group-hover:border-brand-navy transition-colors duration-200 shadow-xs">
            <IconComponent className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
          </span>

          <span className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center text-brand-navy/40 group-hover:text-brand-navy group-hover:bg-brand-champagne/40 transition-all duration-200">
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>

        {/* Category Title — Only this element receives hover underline */}
        <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors duration-150 mb-2 leading-snug">
          {service.shortTitle}
        </h3>

        {/* Short Explanatory Line with Natural Complete Wrapping */}
        <p className="font-sans text-xs sm:text-[13px] text-brand-text/75 leading-relaxed no-underline">
          {service.description}
        </p>
      </div>

      {/* Refined Gold Indicator Animating Along Bottom Edge */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] bg-brand-gold w-0 group-hover:w-full transition-all duration-300 ease-out"
      />
    </Link>
  );
};
