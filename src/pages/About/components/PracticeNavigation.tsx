import React from "react";
import { Container, Link } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface PracticeNavItem {
  number: string;
  title: string;
  description: string;
  destination: string;
}

const NAVIGATION_ITEMS: PracticeNavItem[] = [
  {
    number: "01",
    title: "Areas of Practice",
    description:
      "Explore the firm's structured practice verticals, commercial advisory, and dispute resolution counsel.",
    destination: "/legal-services"
  },
  {
    number: "02",
    title: "How We Work",
    description:
      "An overview of our professional intake methodology, conflict clearance, and matter engagement protocols.",
    destination: "/how-we-work"
  },
  {
    number: "03",
    title: "Our Legal Professionals",
    description:
      "Information regarding the advocates associated with the firm, professional backgrounds, and bar admissions.",
    destination: "/our-team"
  }
];

export const PracticeNavigation: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="practice-navigation"
      aria-label="Explore the Practice — Key Chambers Portals"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 mb-3.5 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-2 duration-500"
            }`}
          >
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              Explore the Practice
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-brand-navy mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            Discover More About Our Work.
          </h2>

          <p
            className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            Navigate to dedicated sections of this website for detailed information
            on practice verticals, procedure, and personnel.
          </p>
        </div>

        {/* Three Large Horizontal Navigation Rows */}
        <div className="border-t border-brand-navy/10 divide-y divide-brand-navy/10">
          {NAVIGATION_ITEMS.map((item, idx) => (
            <Link
              key={item.number}
              href={item.destination}
              variant="card"
              className={`group relative flex flex-col md:flex-row md:items-center justify-between gap-6 py-7 sm:py-9 px-4 -mx-4 rounded-sm transition-all duration-200 hover:bg-brand-off-white/80 cursor-pointer no-underline hover:no-underline focus-visible:no-underline ${
                prefersReducedMotion
                  ? ""
                  : `animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${(idx + 3) * 100}`
              }`}
            >
              {/* Left Side: Number + Title + Description */}
              <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
                <span className="font-mono text-base sm:text-lg font-bold text-brand-indigo group-hover:text-brand-navy shrink-0 pt-0.5 transition-colors no-underline">
                  {item.number}
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors tracking-tight leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed max-w-2xl no-underline">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Directional Arrow Circle */}
              <div className="shrink-0 flex items-center pl-10 md:pl-4 self-end md:self-center">
                <span className="w-10 h-10 rounded-full bg-brand-off-white border border-brand-navy/10 group-hover:bg-brand-navy group-hover:text-brand-gold group-hover:border-brand-navy flex items-center justify-center text-brand-navy/60 transition-all duration-200 shadow-xs">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>

              {/* Subtle Animated Gold Bottom Indicator Line */}
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
