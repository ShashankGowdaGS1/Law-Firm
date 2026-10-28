import React from "react";
import { ArrowRight } from "lucide-react";

export const MatterHandlingChapter: React.FC = () => {
  return (
    <article
      id="stage-04"
      aria-label="Stage 04 — Matter Handling & Professional Execution"
      className="scroll-mt-32 pt-14 sm:pt-18 pb-14 sm:pb-18 border-b border-brand-navy/10 text-brand-text"
    >
      {/* Chapter Number & Eyebrow */}
      <div className="flex items-baseline gap-4 sm:gap-6 mb-8">
        <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-indigo/25 select-none shrink-0">
          04
        </span>
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            STAGE 04 &bull; MATTER HANDLING
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-brand-navy mt-1">
            Continuing With Clarity and Care.
          </h2>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="space-y-6 max-w-3xl">
        <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-navy font-medium">
          Once engagement terms are settled, substantive work proceeds with structured research, evidence collation, and continuous communication at each procedural stage.
        </p>

        <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/80">
          Chambers approaches every matter with methodical preparation—ensuring documents are properly indexed, statutory deadlines are closely tracked, and you are kept informed as proceedings unfold.
        </p>

        {/* Three Horizontally Separated Information Rows with Fine Dividers */}
        <div className="border-t border-brand-navy/10 divide-y divide-brand-navy/10 pt-2">
          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-heading font-bold text-sm text-brand-navy sm:w-44 shrink-0">
              Communication
            </span>
            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
              Direct updates with instructing clients or corporate representatives, keeping you clearly informed of hearing dates, filings, and substantive developments.
            </p>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-heading font-bold text-sm text-brand-navy sm:w-44 shrink-0">
              Documentation
            </span>
            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
              Rigorous indexing of contracts, case laws, and evidence, ensuring all pleadings and agreements are grounded in verified factual records.
            </p>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="font-heading font-bold text-sm text-brand-navy sm:w-44 shrink-0">
              Next Steps
            </span>
            <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
              Execution of planned milestones—such as court filings, statutory notices, contract finalization, or tribunal appearances governed by procedural law.
            </p>
          </div>
        </div>

        {/* Transition Link to Practical Guidance */}
        <div className="pt-4">
          <a
            href="#enquiry-considerations"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold text-brand-indigo hover:text-brand-navy uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
          >
            <span className="group-hover:underline decoration-1 underline-offset-4">
              Review practical guidelines before making an enquiry
            </span>
            <ArrowRight className="w-4 h-4 text-brand-indigo transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};
