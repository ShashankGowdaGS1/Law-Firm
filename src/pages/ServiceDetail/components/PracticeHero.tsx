import React from "react";
import { Container, Link } from "@/components/ui";
import { LegalServiceItem } from "@/data/services/servicesData";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface PracticeHeroProps {
  service: LegalServiceItem;
}

export const PracticeHero: React.FC<PracticeHeroProps> = ({ service }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-label={`${service.title} Overview Hero`}
      className="relative w-full bg-[#F9F7F4] pt-10 sm:pt-12 pb-14 sm:pb-16 lg:pb-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Accessible Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-sans text-brand-text/65">
            <li>
              <Link
                href="/"
                className="hover:text-brand-navy transition-colors underline-offset-4 hover:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-brand-text/40" />
            </li>
            <li>
              <Link
                href="/legal-services"
                className="hover:text-brand-navy transition-colors underline-offset-4 hover:underline"
              >
                Legal Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-brand-text/40" />
            </li>
            <li
              className="text-brand-navy font-semibold truncate max-w-[200px] sm:max-w-none"
              aria-current="page"
            >
              {service.shortTitle}
            </li>
          </ol>
        </nav>

        {/* Hero Content Area */}
        <div className="max-w-3xl">
          {/* Category Badge & Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-2 duration-500"
            }`}
          >
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              {service.category}
            </span>
          </div>

          {/* Primary H1 Heading */}
          <h1
            className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.14] tracking-tight text-brand-navy mb-5 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            {service.title}
          </h1>

          {/* Concise Introduction Description */}
          <p
            className={`font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-brand-text/80 mb-6 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            {service.description}
          </p>

          {/* BCI Compliance & Diligence Indicator */}
          <div
            className={`flex items-center gap-2.5 text-xs text-brand-text/65 pt-4 border-t border-brand-navy/10 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
            <span>
              Advisory and procedural practice in compliance with the Advocates Act and Bar Council standards
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
