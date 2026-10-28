import React from "react";
import { Container, Link } from "@/components/ui";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const LegalServicesClosingCTA: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="services-contact"
      aria-label="Closing Legal Services Contact"
      className="relative w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center justify-center gap-2 mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-2 duration-500"
            }`}
          >
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              Matter Enquiries
            </span>
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
          </div>

          {/* Headline */}
          <h2
            className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-brand-navy mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            Need Guidance on a Legal Matter?
          </h2>

          {/* Description */}
          <p
            className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-8 max-w-xl mx-auto ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            Contact our chambers to discuss procedural requirements or schedule a preliminary matter review.
          </p>

          {/* Action Button */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300"
            }`}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 h-12 rounded-sm bg-brand-navy text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:bg-brand-indigo active:bg-brand-navy transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shrink-0"
            >
              <span>Contact the Firm</span>
              <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Regulatory Safeguard Notice */}
          <div className="flex items-center justify-center gap-2 text-xs text-brand-text/65">
            <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
            <span>
              Consultations proceed following conflict clearance &bull; In compliance with Bar Council of India standards
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
