import React from "react";
import { Container, Link } from "@/components/ui";
import { LegalServiceItem, getRelatedServices } from "@/data/services/servicesData";
import { ArrowRight, ChevronRight } from "lucide-react";

export interface PracticeRelatedServicesProps {
  currentService: LegalServiceItem;
}

export const PracticeRelatedServices: React.FC<PracticeRelatedServicesProps> = ({
  currentService
}) => {
  const relatedServices = getRelatedServices(currentService.slug);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Related Practice Areas"
      className="relative w-full bg-white py-14 sm:py-16 lg:py-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-brand-navy/10">
          <div>
            <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-indigo block mb-1">
              Cross-Practice Navigation
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
              Related Practice Areas
            </h2>
          </div>

          <Link
            href="/legal-services"
            className="group inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-brand-indigo hover:text-brand-navy transition-colors shrink-0"
          >
            <span>View All Practice Areas</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 3 Related Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Link
              variant="card"
              key={service.id}
              href={`/legal-services/${service.slug}`}
              className="group relative flex flex-col justify-between p-6 rounded-sm bg-[#FAF8F5] border border-brand-navy/15 hover:border-brand-navy/30 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden text-left no-underline hover:no-underline focus-visible:no-underline"
            >
              <div>
                <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-brand-indigo block mb-2 no-underline">
                  {service.category}
                </span>

                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="font-sans text-xs text-brand-text/75 leading-relaxed no-underline">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-navy/10 flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-indigo no-underline">
                <span>Explore Practice</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>

              {/* Animated Warm-Gold Bottom Border */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-300 ease-out"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
