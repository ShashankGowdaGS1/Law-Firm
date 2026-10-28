import React, { useState, useRef } from "react";
import { Container, Link } from "@/components/ui";
import { PROCESS_STAGES, ProcessStageItem } from "@/data/process/processData";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const HowWeWorkSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeStage: ProcessStageItem = PROCESS_STAGES[activeStageIndex];

  // Keyboard navigation for ARIA tablist
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % PROCESS_STAGES.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + PROCESS_STAGES.length) % PROCESS_STAGES.length;
    } else if (e.key === "Home") {
      newIndex = 0;
    } else if (e.key === "End") {
      newIndex = PROCESS_STAGES.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setActiveStageIndex(newIndex);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <section
      id="how-we-work"
      aria-label="How We Work — Legal Advisory & Engagement Process"
      className="relative w-full bg-[#F9F7F4] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        {/* Section Header: Eyebrow + Heading + Short Overview */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          {/* Eyebrow Label with Warm Gold Accent */}
          <div
            className={`inline-flex items-center gap-2 mb-3.5 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-2 duration-500"
            }`}
          >
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              How We Work
            </span>
          </div>

          {/* Section Main Heading */}
          <h2
            className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] leading-[1.18] tracking-tight text-brand-navy mb-4 ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
            }`}
          >
            A Clear Approach to Every Stage
          </h2>

          {/* Section Subtitle Description */}
          <p
            className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 max-w-2xl ${
              prefersReducedMotion
                ? ""
                : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
            }`}
          >
            An overview of how an initial enquiry may progress into a formal legal
            engagement.
          </p>
        </div>

        {/* Integrated Composite: Wide Collaborative Photograph + Royal Navy Process Navigator */}
        <div className="relative rounded-sm overflow-hidden shadow-2xl border border-brand-navy/15 bg-white">
          {/* TOP HALF: Wide 16:9 Editorial Collaboration Photograph */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/7] overflow-hidden bg-brand-navy">
            <img
              src="/assets/images/nano-banana/how-we-work-collab.jpg"
              alt="Indian Legal Professionals Collaboratively Reviewing Case Files and Legal Research Documents around Chambers Worktable"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-[center_35%]"
            />

            {/* Subtle Gradient Overlay at bottom for harmonious blend into the navy process unit */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent pointer-events-none"
            />

            {/* Understated Illustrative Photography Caption */}
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
              <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                Illustrative imagery &mdash; not actual firm personnel.
              </span>
            </div>
          </div>

          {/* BOTTOM HALF: Restrained Royal Navy Process Navigator Unit */}
          <div className="w-full bg-brand-navy text-white p-6 sm:p-8 lg:p-10">
            {/* Desktop / Tablet Horizontal Four-Stage Navigator Tabs */}
            <div
              role="tablist"
              aria-label="Legal engagement stages"
              className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 pb-6 sm:pb-8 border-b border-white/15"
            >
              {PROCESS_STAGES.map((stage, idx) => {
                const isActive = activeStageIndex === idx;

                return (
                  <button
                    key={stage.id}
                    ref={(el) => (tabRefs.current[idx] = el)}
                    role="tab"
                    id={`process-tab-${stage.stepNumber}`}
                    aria-selected={isActive}
                    aria-controls={`process-panel-${stage.stepNumber}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveStageIndex(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`group relative flex flex-col text-left p-3 sm:p-3.5 rounded-sm transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                      isActive
                        ? "bg-white/10 shadow-inner"
                        : "bg-white/5 hover:bg-white/[0.08]"
                    }`}
                  >
                    {/* Active Thin Progress Line Indicator in Warm Gold */}
                    <div
                      aria-hidden="true"
                      className="w-full h-[2px] rounded-full overflow-hidden bg-white/20 mb-2.5"
                    >
                      <div
                        className={`h-full transition-all duration-300 ease-out ${
                          isActive
                            ? "bg-brand-gold w-full"
                            : "w-0 group-hover:w-1/3 group-hover:bg-brand-gold/60"
                        }`}
                      />
                    </div>

                    {/* Stage Number & Label */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={`text-[10px] sm:text-[11px] font-sans font-bold tracking-widest uppercase transition-colors ${
                          isActive ? "text-brand-gold" : "text-white/60 group-hover:text-white/80"
                        }`}
                      >
                        STAGE {stage.stepNumber}
                      </span>

                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      )}
                    </div>

                    {/* Stage Short Title */}
                    <span
                      className={`font-heading text-xs sm:text-sm font-bold transition-colors leading-snug ${
                        isActive
                          ? "text-white"
                          : "text-white/75 group-hover:text-white"
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Dynamic Information Panel (Clean Typography-Led Content Area) */}
            <div
              role="tabpanel"
              id={`process-panel-${activeStage.stepNumber}`}
              aria-labelledby={`process-tab-${activeStage.stepNumber}`}
              className="pt-6 sm:pt-8 min-h-[130px] max-w-3xl"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                  STAGE {activeStage.stepNumber}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-tight">
                  {activeStage.title}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed mb-2.5">
                {activeStage.shortDescription}
              </p>

              <p className="font-sans text-xs sm:text-[13px] text-white/75 leading-relaxed">
                {activeStage.detailedDescription}
              </p>
            </div>

            {/* Action Bar: Link to Full Process Page + BCI Rule Disclosure */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Compliance & Safeguard Note */}
              <div className="flex items-center gap-2.5 text-xs text-white/60 text-center sm:text-left">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>
                  General procedural methodology. Consultations proceed following conflict clearance.
                </span>
              </div>

              {/* CTA Link to Full How We Work Page */}
              <Link
                href="/how-we-work"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-sm bg-brand-gold text-brand-text font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:bg-brand-gold/90 transition-all duration-150 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Learn More About Our Process</span>
                <ArrowRight className="w-4 h-4 text-brand-text transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
