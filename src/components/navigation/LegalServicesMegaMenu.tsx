import React from "react";
import { Link } from "@/components/ui";
import { LEGAL_SERVICES } from "@/data/services/servicesData";
import { ArrowRight, ChevronRight } from "lucide-react";

export interface LegalServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Ordered list of 8 canonical slugs matching the two-column UX structure
const MENU_SERVICE_SLUGS = [
  // Column 1
  "corporate-advisory",
  "commercial-arbitration",
  "civil-appellate-litigation",
  "insolvency-bankruptcy",
  // Column 2
  "intellectual-property",
  "regulatory-compliance",
  "real-estate-property",
  "cyber-technology-law"
];

export const LegalServicesMegaMenu: React.FC<LegalServicesMegaMenuProps> = ({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave
}) => {
  if (!isOpen) return null;

  // Retrieve the 8 canonical services in order
  const orderedServices = MENU_SERVICE_SLUGS.map((slug) =>
    LEGAL_SERVICES.find((s) => s.slug === slug)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const col1 = orderedServices.slice(0, 4);
  const col2 = orderedServices.slice(4, 8);

  return (
    <div
      id="legal-services-mega-menu"
      role="region"
      aria-label="Legal Services Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[620px] max-w-[calc(100vw-32px)] bg-white border border-brand-navy/15 rounded-b-sm shadow-xl z-50 p-6 transition-all duration-150 animate-in fade-in slide-in-from-top-1"
    >
      {/* Top Header Label */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-navy/10">
        <span className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
          Legal Services
        </span>
        <span className="text-[11px] font-sans text-brand-text/60">
          Select a practice area to learn more
        </span>
      </div>

      {/* Two-Column Grid: 4 items per column */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        {/* Column 1 */}
        <div className="space-y-1">
          {col1.map((service) => (
            <Link
              key={service.id}
              href={`/legal-services/${service.slug}`}
              onClick={onClose}
              className="group flex items-center justify-between px-3 py-2.5 rounded-sm hover:bg-brand-champagne/25 active:bg-brand-champagne/40 transition-colors"
            >
              <span className="font-sans text-sm font-semibold text-brand-navy group-hover:text-brand-indigo transition-colors">
                {service.navLabel || service.shortTitle}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-brand-navy/30 group-hover:text-brand-indigo group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-1">
          {col2.map((service) => (
            <Link
              key={service.id}
              href={`/legal-services/${service.slug}`}
              onClick={onClose}
              className="group flex items-center justify-between px-3 py-2.5 rounded-sm hover:bg-brand-champagne/25 active:bg-brand-champagne/40 transition-colors"
            >
              <span className="font-sans text-sm font-semibold text-brand-navy group-hover:text-brand-indigo transition-colors">
                {service.navLabel || service.shortTitle}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-brand-navy/30 group-hover:text-brand-indigo group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Thin Separator & Clear Direct Link */}
      <div className="mt-4 pt-3 border-t border-brand-navy/10 flex items-center justify-end">
        <Link
          href="/legal-services"
          onClick={onClose}
          className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-indigo hover:text-brand-navy transition-colors"
        >
          <span>View All Legal Services</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-gold transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
