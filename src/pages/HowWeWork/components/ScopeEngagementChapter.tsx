import React from "react";

export const ScopeEngagementChapter: React.FC = () => {
  return (
    <article
      id="stage-03"
      aria-label="Stage 03 — Scope of Work & Formal Engagement"
      className="scroll-mt-32 my-10 sm:my-14"
    >
      {/* Generous Navy Editorial Panel — Integrated cleanly in right column */}
      <div className="bg-brand-navy text-white rounded-sm p-8 sm:p-10 lg:p-12 shadow-xl border border-white/10 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-indigo/30 blur-[90px] pointer-events-none"
        />

        {/* Chapter Header */}
        <div className="flex items-baseline gap-4 sm:gap-6 mb-7 relative z-10">
          <span className="font-mono text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-gold select-none shrink-0">
            03
          </span>
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block">
              STAGE 03 &bull; SCOPE & ENGAGEMENT
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-white mt-1">
              Establishing the Scope of Work.
            </h2>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="space-y-6 relative z-10">
          <p className="font-sans text-base sm:text-lg leading-relaxed text-white/95 font-medium max-w-2xl">
            Once conflict clearance is confirmed and engagement is agreed, we establish a clear written scope of work before beginning any substantive legal tasks.
          </p>

          <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/80 max-w-2xl">
            A defined engagement establishes shared expectations regarding legal strategy, expected milestones, document preparation, and formal representation instruments required under the Advocates Act.
          </p>

          {/* Three Engagement Pillars: High Contrast Separated Rows */}
          <div className="border-t border-white/15 divide-y divide-white/15 pt-2 max-w-2xl">
            <div className="py-4">
              <h3 className="font-heading font-bold text-sm text-brand-gold mb-1">
                Defined Deliverables
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Specifying the precise scope of legal advice, drafting requirements, agreement vetting, or court representation agreed upon.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-heading font-bold text-sm text-brand-gold mb-1">
                Liaison & Communications
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Designating client contact persons, documentation exchange protocols, and regular briefing schedules throughout the matter.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-heading font-bold text-sm text-brand-gold mb-1">
                Statutory Authorization (Vakalatnama)
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Execution of formal authorizations allowing chambers advocates to file pleadings and appear before judicial or arbitral forums.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
