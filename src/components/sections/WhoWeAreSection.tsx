import React from "react";
import { Container, Link } from "@/components/ui";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { InformationalLinkRow } from "./InformationalLinkRow";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const WhoWeAreSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="who-we-are"
      aria-label="Who We Are — The People Behind the Practice"
      className="relative w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Large Group Photograph of Indian Legal Professionals (~52%) */}
          <div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1 lg:pt-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-sm overflow-hidden bg-white border border-brand-navy/15 shadow-xl">
              {/* Actual Group Photographic Image */}
              <img
                src="/assets/images/nano-banana/who-we-are-group.jpg"
                alt="Group of Indian Legal Professionals — Two Women Advocates and One Male Senior Advocate in Formal Chambers Attire"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top lg:object-center"
              />

              {/* Understated Illustrative Photography Caption */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative imagery &mdash; not actual firm personnel.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Hierarchy, Navigation Rows & About CTA (~48%) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start order-1 lg:order-2">
            {/* Section Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 mb-3.5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-2 duration-500"
              }`}
            >
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                Who We Are
              </span>
            </div>

            {/* Confident Heading */}
            <h2
              className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] leading-[1.18] tracking-tight text-brand-navy mb-4 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              The People Behind the Practice
            </h2>

            {/* Introductory Paragraph */}
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/85 mb-3 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Discover the firm&apos;s background, the professionals associated with its practice, and the principles that inform its work.
            </p>

            {/* Supporting Text Paragraph */}
            <p
              className={`font-sans text-xs sm:text-sm leading-relaxed text-brand-text/70 mb-6 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-250"
              }`}
            >
              Learn more about our professional information, areas of practice, and approach to legal matters.
            </p>

            {/* Three Compact Informational Navigation Rows */}
            <div
              className={`border-t border-brand-navy/10 mb-7 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
              }`}
            >
              <InformationalLinkRow
                number="01"
                label="The Firm"
                destination="/about"
                description="Institutional background, advisory principles, and chambers philosophy."
              />
              <InformationalLinkRow
                number="02"
                label="Our Legal Professionals"
                destination="/our-team"
                description="Advocate credentials, bar admissions, and practice specializations."
              />
              <InformationalLinkRow
                number="03"
                label="Our Approach"
                destination="/how-we-work"
                description="Procedural diligence, statutory compliance, and matter governance."
              />
            </div>

            {/* Primary Action Button: More About the Firm */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/about"
                variant="button"
                buttonVariant="primary"
                className="group !py-3.5 !px-7 !text-xs !font-bold tracking-wider uppercase shadow-sm hover:shadow text-center justify-center shrink-0"
              >
                <span>More About the Firm</span>
                <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-brand-text/60">
                <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>Bar Council of India compliance standard</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
