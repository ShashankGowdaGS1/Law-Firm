import React from "react";
import { Container, Link } from "@/components/ui";
import { LEGAL_SERVICES } from "@/data/services/servicesData";
import { PracticeCategoryItem } from "./PracticeCategoryItem";
import { ArrowRight, BookOpenCheck } from "lucide-react";

export const PracticeAreasSection: React.FC = () => {
  // Display up to 8 practice categories in a 4x2 desktop grid
  const displayServices = LEGAL_SERVICES.slice(0, 8);

  return (
    <section
      id="legal-services"
      aria-label="Our Practice Areas — Explore Legal Services"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              Our Practice Areas
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] leading-[1.18] tracking-tight text-brand-navy mb-4">
            Explore Legal Services
          </h2>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 max-w-2xl">
            Browse legal subjects and available information by practice area.
          </p>
        </div>

        {/* 4x2 Integrated Category Grid (Desktop: 4 cols, Tablet: 2 cols, Mobile: 1-2 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {displayServices.map((service) => (
            <PracticeCategoryItem key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Bar: Action Button + BCI Compliance Notice */}
        <div className="pt-8 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-xs text-brand-text/70 text-center sm:text-left">
            <BookOpenCheck className="w-4 h-4 text-brand-indigo shrink-0 hidden sm:block" />
            <span>
              Detailed practice overviews, statutory references, and dispute mechanisms are available across individual practice pages.
            </span>
          </div>

          {/* View All Legal Services Action */}
          <Link
            href="/legal-services"
            variant="button"
            buttonVariant="primary"
            className="group !py-3.5 !px-7 !text-xs !font-bold tracking-wider uppercase shrink-0 shadow-sm hover:shadow"
          >
            <span>View All Legal Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
