import React from "react";
import { Container } from "@/components/ui";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Communicating legal information in a manner that is understandable and relevant to the matter."
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "Recognizing professional duties, ethical responsibilities, and applicable standards of conduct."
  },
  {
    number: "03",
    title: "Diligence",
    description:
      "Approaching legal research, documentation, and procedural requirements with appropriate care."
  }
];

export const FirmPrinciples: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="firm-principles"
      aria-label="Our Principles — Standards That Guide Chambers Practice"
      className="relative w-full bg-brand-navy py-16 sm:py-20 lg:py-24 border-t border-white/10 text-white overflow-hidden"
    >
      {/* Background Subtle Ambient Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-brand-indigo/30 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/3 w-[450px] h-[350px] bg-[#181B57]/50 blur-[120px] pointer-events-none"
      />

      <Container size="default" className="relative z-10">
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
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Our Principles
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.15] tracking-tight text-white mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            Principles That Inform the Practice.
          </h2>

          <p
            className={`font-sans text-base sm:text-lg leading-relaxed text-white/80 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            Core professional standards that guide our research, advisory counsel,
            and procedural conduct.
          </p>
        </div>

        {/* Three Large Horizontal Information Rows (Clean Minimal Typography) */}
        <div className="border-t border-white/15 divide-y divide-white/15">
          {PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.number}
              className={`group relative py-8 sm:py-10 transition-colors duration-200 hover:bg-white/[0.03] px-4 -mx-4 rounded-sm ${
                prefersReducedMotion
                  ? ""
                  : `animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${(idx + 3) * 100}`
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Number & Title (~40% on desktop) */}
                <div className="md:col-span-5 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-brand-gold shrink-0">
                    {principle.number}
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-[28px] text-white tracking-tight group-hover:text-brand-champagne transition-colors">
                    {principle.title}
                  </h3>
                </div>

                {/* Description (~60% on desktop) */}
                <div className="md:col-span-7 pl-9 md:pl-0">
                  <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                    {principle.description}
                  </p>
                </div>
              </div>

              {/* Refined Gold Micro-Indicator along bottom border on hover */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-300 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Sub-note on Professional Standards */}
        <div className="pt-8 border-t border-white/15 mt-2 flex items-center justify-between text-xs text-white/60">
          <span>Standards observed in accordance with professional legal conduct guidelines</span>
          <span className="hidden sm:inline font-mono text-[11px] text-brand-gold/80">
            BAR COUNCIL OF INDIA GUIDELINES
          </span>
        </div>
      </Container>
    </section>
  );
};
