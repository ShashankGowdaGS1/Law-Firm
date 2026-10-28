import React from "react";
import { Container, Link } from "@/components/ui";
import { DETAILED_SERVICE_OFFERINGS } from "@/data/services/servicesData";
import { DetailedServiceRow } from "./DetailedServiceRow";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const DetailedServicesSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="detailed-services"
      aria-label="What We Offer — Detailed Legal Services"
      className="relative w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        {/* Top Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          {/* Eyebrow Label */}
          <div
            className={`inline-flex items-center gap-2 mb-3.5 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-2 duration-500"
            }`}
          >
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] leading-[1.18] tracking-tight text-brand-navy mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            Legal Services, Clearly Explained
          </h2>

          {/* Introduction */}
          <p
            className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 max-w-2xl ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            Explore information about specific legal services, documentation,
            and professional practice areas.
          </p>
        </div>

        {/* Asymmetric Content Split: Dominant Service Index (~64%) + Sticky Editorial Photo (~36%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12 sm:mb-16">
          {/* LEFT: Dominant Service Index List (~62%) */}
          <div
            className={`lg:col-span-7 xl:col-span-8 order-2 lg:order-1 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
            }`}
          >
            <div className="divide-y divide-brand-navy/10 border-t border-brand-navy/10">
              {DETAILED_SERVICE_OFFERINGS.map((offering) => (
                <DetailedServiceRow key={offering.id} offering={offering} />
              ))}
            </div>
          </div>

          {/* RIGHT: Supporting Legal Documentation Editorial Photograph (~38%) */}
          <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2 self-start lg:sticky lg:top-28">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] rounded-sm overflow-hidden bg-white border border-brand-navy/15 shadow-xl">
              {/* Actual Legal Documentation Photograph */}
              <img
                src="/assets/images/nano-banana/legal-services-documents.jpg"
                alt="Chambers Documentation Diligence — Indian Legal Professional Reviewing Legal Documents at Desk"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />

              {/* Understated Illustrative Photography Caption */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative imagery &mdash; not actual firm personnel.
                </span>
              </div>
            </div>

            {/* Subtle Typographic Caption Under Photo */}
            <p className="text-[11px] text-brand-text/60 italic text-center lg:text-left mt-2.5 font-sans">
              Matter diligence, statutory documentation, and contract vetting protocols.
            </p>
          </div>
        </div>

        {/* Final Section Action: View All Legal Services + BCI Regulatory Notice */}
        <div className="pt-8 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-xs text-brand-text/70 text-center sm:text-left">
            <BookOpenCheck className="w-4 h-4 text-brand-indigo shrink-0 hidden sm:block" />
            <span>
              Specific legal services are undertaken in strict compliance with the Advocates Act and Bar Council of India guidelines.
            </span>
          </div>

          <Link
            href="/legal-services"
            variant="button"
            buttonVariant="primary"
            className="group !py-3.5 !px-7 !text-xs !font-bold tracking-wider uppercase shrink-0 shadow-sm hover:shadow text-center justify-center"
          >
            <span>View All Legal Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
