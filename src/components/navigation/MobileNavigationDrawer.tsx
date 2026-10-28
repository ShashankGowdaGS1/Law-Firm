import React, { useState, useEffect } from "react";
import { Link } from "@/components/ui";
import { siteConfig } from "@/config/siteConfig";
import { LEGAL_SERVICES } from "@/data/services/servicesData";
import {
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

export interface MobileNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Ordered 8 canonical slugs matching the simplified plain-English structure
const MOBILE_SERVICE_SLUGS = [
  "corporate-advisory",
  "commercial-arbitration",
  "civil-appellate-litigation",
  "insolvency-bankruptcy",
  "intellectual-property",
  "regulatory-compliance",
  "real-estate-property",
  "cyber-technology-law"
];

export const MobileNavigationDrawer: React.FC<MobileNavigationDrawerProps> = ({
  isOpen,
  onClose
}) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [legalInfoExpanded, setLegalInfoExpanded] = useState(false);

  // Lock body scroll when mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Retrieve the 8 canonical services in order
  const orderedServices = MOBILE_SERVICE_SLUGS.map((slug) =>
    LEGAL_SERVICES.find((s) => s.slug === slug)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 top-[72px] sm:top-[80px] bg-white z-50 flex flex-col overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="flex-1 px-6 py-6 space-y-6">
        {/* Primary Links Hierarchy */}
        <nav className="space-y-1 divide-y divide-brand-navy/10 text-base font-heading font-medium text-brand-navy">
          {/* 1. Home */}
          <div className="pb-3">
            <Link
              href="/"
              onClick={onClose}
              className="block py-2 text-lg font-bold text-brand-navy hover:text-brand-indigo active:text-brand-indigo transition-colors"
            >
              Home
            </Link>
          </div>

          {/* 2. About Us */}
          <div className="py-3">
            <Link
              href="/about"
              onClick={onClose}
              className="block py-2 text-lg font-bold text-brand-navy hover:text-brand-indigo active:text-brand-indigo transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* 3. Legal Services (Single Expandable List) */}
          <div className="py-3">
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              aria-expanded={servicesExpanded}
              className="w-full flex items-center justify-between py-2 text-lg font-bold text-brand-navy hover:text-brand-indigo text-left cursor-pointer transition-colors"
            >
              <span>Legal Services</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 text-brand-indigo ${
                  servicesExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="mt-2 pl-3 space-y-1 border-l-2 border-brand-gold/60 animate-in fade-in duration-150">
                {orderedServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/legal-services/${service.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-2 text-sm font-sans font-medium text-brand-navy hover:text-brand-indigo active:bg-brand-champagne/20 rounded-sm transition-colors min-h-[44px]"
                  >
                    <span>{service.navLabel || service.shortTitle}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-brand-navy/35" />
                  </Link>
                ))}

                {/* View All Services Link */}
                <div className="pt-2 pl-2">
                  <Link
                    href="/legal-services"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-indigo hover:text-brand-navy py-1.5 transition-colors"
                  >
                    <span>View All Legal Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 4. How We Work */}
          <div className="py-3">
            <Link
              href="/how-we-work"
              onClick={onClose}
              className="block py-2 text-lg font-bold text-brand-navy hover:text-brand-indigo active:text-brand-indigo transition-colors"
            >
              How We Work
            </Link>
          </div>

          {/* 5. Our Team */}
          <div className="py-3">
            <Link
              href="/our-team"
              onClick={onClose}
              className="block py-2 text-lg font-bold text-brand-navy hover:text-brand-indigo active:text-brand-indigo transition-colors"
            >
              Our Team
            </Link>
          </div>

          {/* 6. Legal Guides */}
          <div className="py-3">
            <Link
              href="/legal-guides"
              onClick={onClose}
              className="block py-2 text-lg font-bold text-brand-navy hover:text-brand-indigo active:text-brand-indigo transition-colors"
            >
              Legal Guides
            </Link>
          </div>

          {/* 7. Our Work (Direct navigation link) */}
          <div className="py-3">
            <Link
              href="/our-work"
              onClick={onClose}
              className="block py-2 text-lg font-bold text-brand-navy hover:text-brand-indigo active:text-brand-indigo transition-colors"
            >
              Our Work
            </Link>
          </div>

          {/* 8. Legal Information / Policies (Clean Collapsible) */}
          <div className="py-3">
            <button
              type="button"
              onClick={() => setLegalInfoExpanded(!legalInfoExpanded)}
              aria-expanded={legalInfoExpanded}
              className="w-full flex items-center justify-between py-2 text-base font-bold text-brand-navy/80 hover:text-brand-indigo text-left cursor-pointer transition-colors"
            >
              <span>Legal Information</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 text-brand-indigo ${
                  legalInfoExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {legalInfoExpanded && (
              <div className="mt-2 pl-3 space-y-1 border-l-2 border-brand-navy/15 animate-in fade-in duration-150">
                <Link
                  href="/privacy-policy"
                  onClick={onClose}
                  className="block py-2 px-2 text-sm font-sans font-medium text-brand-text/80 hover:text-brand-navy active:bg-brand-champagne/20 rounded-sm transition-colors min-h-[44px] flex items-center"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal-disclaimer"
                  onClick={onClose}
                  className="block py-2 px-2 text-sm font-sans font-medium text-brand-text/80 hover:text-brand-navy active:bg-brand-champagne/20 rounded-sm transition-colors min-h-[44px] flex items-center"
                >
                  Legal Disclaimer
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Contact Chambers CTA */}
        <div className="pt-4 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            variant="button"
            buttonVariant="primary"
            className="w-full !py-3.5 !text-sm !font-bold tracking-wider uppercase text-center justify-center shadow-md min-h-[48px]"
          >
            Contact the Firm
          </Link>

          <div className="p-3 bg-brand-off-white rounded-sm text-xs text-brand-text/75 space-y-1">
            <p className="font-semibold text-brand-navy flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-indigo" />
              <span>{siteConfig.contact.phone}</span>
            </p>
            <p className="flex items-center gap-1.5 text-[11px]">
              <Mail className="w-3.5 h-3.5 text-brand-indigo" />
              <span>{siteConfig.contact.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
