import React from "react";
import { Container } from "@/components/ui";

interface GuidanceRow {
  index: string;
  title: string;
  description: string;
}

const GUIDANCE_ROWS: GuidanceRow[] = [
  {
    index: "01",
    title: "General Matter Context",
    description:
      "When initiating an enquiry, provide only the general subject matter (e.g., contractual arbitration, regulatory compliance, or appellate litigation). A high-level summary enables chambers to assess subject-matter competence and conduct requisite preliminary conflict verification."
  },
  {
    index: "02",
    title: "Exclusion of Privileged & Sensitive Materials",
    description:
      "Please avoid transmitting confidential case files, trade secrets, sensitive financial documentation, or privileged communications through preliminary electronic channels. Unsolicited matter materials cannot be treated as privileged work product prior to formal engagement."
  },
  {
    index: "03",
    title: "No Advocate-Client Relationship Created",
    description:
      "Transmitting an enquiry or communicating with our registry does not, by itself, create an advocate-client relationship or impose any fiduciary obligation on the firm under Bar Council of India rules. Formal representation commences exclusively upon execution of a written engagement letter."
  }
];

export const BeforeContactGuidance: React.FC = () => {
  return (
    <section
      aria-label="Before Making an Enquiry — Practical Guidance"
      className="relative w-full bg-white py-16 sm:py-20 border-b border-brand-navy/10 text-brand-text"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo">
              Communication Guidelines
            </span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-brand-navy mb-3">
            Before Making an Enquiry
          </h2>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/75">
            To ensure communications adhere to statutory legal professional ethics and conflict-check
            disciplines, please observe these three procedural guidelines.
          </p>
        </div>

        {/* Editorial Numbered Rows */}
        <div className="border-t border-brand-navy/15 divide-y divide-brand-navy/10">
          {GUIDANCE_ROWS.map((row) => (
            <div
              key={row.index}
              className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              {/* Numbered Indicator */}
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-heading font-bold text-xl sm:text-2xl text-brand-gold">
                  {row.index}
                </span>
                <span className="w-8 h-[1px] bg-brand-navy/20 inline-block hidden md:inline-block" />
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy">
                  {row.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/80">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
