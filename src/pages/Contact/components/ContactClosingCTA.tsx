import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui";

export const ContactClosingCTA: React.FC = () => {
  return (
    <section
      aria-label="Explore the Firm Closing Navigation"
      className="relative w-full bg-brand-champagne/25 py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text"
    >
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 mb-3.5">
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              Explore the Firm
            </span>
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight text-brand-navy mb-4">
            Learn More About the Practice.
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-8 max-w-2xl mx-auto">
            Explore available information about the firm&apos;s practice areas and legal professionals.
          </p>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/legal-services"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-12 rounded-sm bg-brand-navy text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:bg-brand-indigo active:bg-brand-navy transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span>Explore Legal Services</span>
              <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-12 rounded-sm bg-white border border-brand-navy/25 text-brand-navy font-sans text-xs sm:text-sm font-semibold tracking-wide hover:bg-brand-navy/5 active:bg-white transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-xs"
            >
              <Compass className="w-4 h-4 text-brand-indigo" />
              <span>About the Firm</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
