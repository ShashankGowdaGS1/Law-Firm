import React from "react";
import { Container, Link } from "@/components/ui";
import { siteConfig } from "@/config/siteConfig";
import { ArrowUp, ShieldCheck, Scale, Building2 } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const SiteFooter: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer and Regulatory Disclosures"
      className="relative w-full bg-[#181A54] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-brand-indigo/20 blur-[140px] pointer-events-none"
      />

      <Container size="default" className="relative z-10 pt-16 sm:pt-20 pb-12">
        {/* LEVEL 01 — Brand Introduction & Professional Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10 items-start">
          {/* Brand Wordmark & Description (~58%) */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-sm bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Scale className="w-4 h-4 text-brand-gold" />
              </span>
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                  {siteConfig.identity.firmName}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                  {siteConfig.identity.descriptor}
                </p>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl mb-3">
              Explore the firm&apos;s practice areas, professional information, and legal resources.
            </p>

            <div className="flex items-center gap-2 text-xs text-brand-champagne font-sans">
              <Building2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>Chambers practice across civil, corporate, and commercial domains</span>
            </div>
          </div>

          {/* Regulatory Advisory Note (~42%) */}
          <div className="lg:col-span-5 xl:col-span-5 bg-white/5 border border-white/10 rounded-sm p-4 sm:p-5 backdrop-blur-xs">
            <div className="flex items-center gap-2 mb-2 text-brand-gold text-xs font-sans font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Professional Regulatory Standards</span>
            </div>
            <p className="font-sans text-xs text-white/85 leading-relaxed">
              In accordance with Bar Council of India regulations, this platform is strictly informational. Consultations and engagements proceed following formal conflict verification.
            </p>
          </div>
        </div>

        {/* LEVEL 02 — Four-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-10 sm:py-12 border-b border-white/10">
          {/* Column 01: The Firm */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold mb-4 sm:mb-5">
              The Firm
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans">
              <li>
                <Link href="/" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Our Legal Team
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Our Work & Practice
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 02: Legal Services */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold mb-4 sm:mb-5">
              Legal Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans">
              <li>
                <Link href="/legal-services" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  All Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-services/corporate-advisory"
                  className="text-white/85 hover:text-brand-gold transition-colors block py-0.5"
                >
                  Corporate & Commercial
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-services/commercial-arbitration"
                  className="text-white/85 hover:text-brand-gold transition-colors block py-0.5"
                >
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-services/civil-appellate-litigation"
                  className="text-white/85 hover:text-brand-gold transition-colors block py-0.5"
                >
                  Appellate Advocacy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-services/regulatory-compliance"
                  className="text-white/85 hover:text-brand-gold transition-colors block py-0.5"
                >
                  Regulatory Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-services/insolvency-bankruptcy"
                  className="text-white/85 hover:text-brand-gold transition-colors block py-0.5"
                >
                  Banking & Insolvency
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 03: Resources & Engagement */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold mb-4 sm:mb-5">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans">
              <li>
                <Link href="/legal-guides" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Legal Guides & Briefs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Contact Chambers
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Engagement Protocols
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Preliminary Intake Safeguards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 04: Legal Information & Compliance */}
          <div>
            <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-brand-gold mb-4 sm:mb-5">
              Legal Information
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans">
              <li>
                <Link href="/privacy-policy" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal-disclaimer" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal-disclaimer" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Bar Council Regulatory Notice
                </Link>
              </li>
              <li>
                <Link href="/legal-disclaimer" className="text-white/85 hover:text-brand-gold transition-colors block py-0.5">
                  Non-Solicitation Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* LEVEL 03 — Brand Signature Wordmark */}
        <div className="pt-8 pb-7 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-wider text-white uppercase">
              {siteConfig.identity.firmName}
            </span>
            <span className="block font-sans text-xs tracking-[0.25em] text-brand-gold uppercase mt-1">
              {siteConfig.identity.descriptor}
            </span>
          </div>

          {/* Back to Top Functional Button */}
          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top of page"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-white/20 bg-white/5 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-200 text-xs font-sans font-bold tracking-wider uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-gold group-hover:text-brand-navy transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* LEVEL 04 — Copyright, Regulatory Safeguard & Legal Links (High Contrast) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/85">
          <div className="text-center md:text-left space-y-1.5">
            <p className="font-semibold text-white/95">
              &copy; {currentYear} {siteConfig.identity.firmName}. All rights reserved.
            </p>
            <p className="text-xs text-white/80 max-w-2xl leading-relaxed">
              {siteConfig.regulatory.bciDisclaimer}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-[13px] shrink-0 font-medium text-brand-champagne">
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/40">&bull;</span>
            <Link href="/legal-disclaimer" className="hover:text-brand-gold transition-colors">
              Legal Disclaimer
            </Link>
            <span className="text-white/40">&bull;</span>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
