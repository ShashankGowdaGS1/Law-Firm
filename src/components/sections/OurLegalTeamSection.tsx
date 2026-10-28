import React, { useState } from "react";
import { Container, Link } from "@/components/ui";
import { getVerifiedTeamMembers, TeamMemberItem } from "@/data/team/teamData";
import { ArrowRight, ChevronRight, ShieldCheck, Scale, Users, BookOpen } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const OurLegalTeamSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const verifiedMembers = getVerifiedTeamMembers();
  const hasVerified = verifiedMembers.length > 0;

  // Active index for Option A interactive showcase (when verified profiles exist)
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const activeProfile: TeamMemberItem | undefined = verifiedMembers[activeProfileIndex];

  return (
    <section
      id="our-team"
      aria-label="Our Legal Team — Legal Professionals & Practice Leadership"
      className="relative w-full bg-[#F9F7F4] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        {/* TOP INTRODUCTION: Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-14">
          {/* Left: Eyebrow + Prominent Heading (~60%) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div
              className={`inline-flex items-center gap-2 mb-3.5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-2 duration-500"
              }`}
            >
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                The People Behind the Practice
              </span>
            </div>

            <h2
              className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] leading-[1.15] tracking-tight text-brand-navy ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              Meet Our Legal Professionals
            </h2>
          </div>

          {/* Right: Description + Quick Directory Link (~40%) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end">
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-3 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Explore information about the legal professionals associated with the firm and their areas of practice.
            </p>

            <Link
              href="/our-team"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-brand-indigo hover:text-brand-navy transition-colors cursor-pointer"
            >
              <span>Explore Full Directory</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* MAIN SHOWCASE */}
        {hasVerified && activeProfile ? (
          /* OPTION A: Verified Real Advocate Profiles Interactive Showcase */
          <div className="relative rounded-sm overflow-hidden bg-brand-navy text-white shadow-2xl border border-brand-navy/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              {/* Left Column: Substantial Verified Advocate Portrait (~45%) */}
              <div className="lg:col-span-5 relative bg-[#181A54] overflow-hidden min-h-[380px] lg:min-h-full">
                <img
                  src={`/assets/images/team/${activeProfile.slug}.jpg`}
                  alt={`${activeProfile.name} — ${activeProfile.designation}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80 pointer-events-none"
                />
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-gold mb-1 block">
                    {activeProfile.designation}
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    {activeProfile.name}
                  </h3>
                  <p className="font-sans text-xs text-white/80 mt-1">
                    {activeProfile.practiceArea}
                  </p>
                </div>
              </div>

              {/* Right Column: Typography-Led Interactive List of Verified Advocates (~55%) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div className="divide-y divide-white/10">
                  {verifiedMembers.map((member, idx) => {
                    const isSelected = activeProfileIndex === idx;
                    return (
                      <button
                        key={member.id}
                        type="button"
                        onClick={() => setActiveProfileIndex(idx)}
                        onMouseEnter={() => setActiveProfileIndex(idx)}
                        className={`w-full text-left py-4 sm:py-5 px-4 rounded-sm transition-all duration-200 flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                          isSelected ? "bg-white/10 shadow-inner" : "hover:bg-white/5"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                            )}
                            <h4
                              className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                                isSelected ? "text-brand-gold" : "text-white group-hover:text-white"
                              }`}
                            >
                              {member.name}
                            </h4>
                          </div>
                          <p className="font-sans text-xs text-white/70">
                            {member.designation} &bull; {member.practiceArea}
                          </p>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isSelected
                              ? "text-brand-gold translate-x-1"
                              : "text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Bar Council of India compliance standard</span>
                  </div>
                  <Link
                    href={`/our-team/${activeProfile.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
                  >
                    <span>View Professional Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* OPTION B: Professional Editorial Showcase (Real Photography & Practice Structure) */
          <div className="relative rounded-sm overflow-hidden bg-brand-navy text-white shadow-2xl border border-brand-navy/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Side: Large Real Photographic Image (~56%) */}
              <div className="lg:col-span-6 xl:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden bg-[#181A54]">
                <img
                  src="/assets/images/nano-banana/our-team-editorial.jpg"
                  alt="Adult Indian Legal Professionals Collaborating and Reviewing Documents in Chambers"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_30%]"
                />

                {/* Understated Mandatory Disclaimer Caption */}
                <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                  <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                    Illustrative imagery &mdash; not actual firm personnel.
                  </span>
                </div>
              </div>

              {/* Right Side: Structured Practice Leadership & Chambers Overview (~44%) */}
              <div className="lg:col-span-6 xl:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Eyebrow badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-gold">
                      Practice Structure & Chambers
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2.5 tracking-tight">
                    Dedicated Counsel Across Specialised Practice Areas
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
                    Chambers practice is organized across dedicated advisory and dispute resolution domains, coordinating procedural diligence, statutory compliance, and matter advocacy.
                  </p>

                  {/* Chambers Leadership Pillars: Typography-Led Rows with Dividers (High Contrast) */}
                  <div className="border-t border-white/15 divide-y divide-white/15 mb-6">
                    <div className="py-3.5 flex items-start gap-3">
                      <Scale className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-white leading-snug">
                          Appellate & Commercial Practice
                        </h4>
                        <p className="font-sans text-xs text-white/80 leading-normal mt-0.5">
                          Advisory and advocacy across commercial suits, statutory appeals, and writ proceedings.
                        </p>
                      </div>
                    </div>

                    <div className="py-3.5 flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-white leading-snug">
                          Corporate & Regulatory Advisory
                        </h4>
                        <p className="font-sans text-xs text-white/80 leading-normal mt-0.5">
                          Counsel on corporate governance, statutory compliances, secretarial vetting, and transactional contracts.
                        </p>
                      </div>
                    </div>

                    <div className="py-3.5 flex items-start gap-3">
                      <Users className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-white leading-snug">
                          Arbitration & Dispute Resolution
                        </h4>
                        <p className="font-sans text-xs text-white/80 leading-normal mt-0.5">
                          Institutional and ad-hoc arbitrations, Section 9 interim measures, and arbitral award enforcement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Action Button + BCI Rule 36 Compliance Notice */}
                <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Bar Council of India compliance standard</span>
                  </div>

                  <Link
                    href="/our-team"
                    className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-sm bg-brand-gold text-brand-text font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:bg-brand-gold/90 transition-all duration-150 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>Meet Our Team</span>
                    <ArrowRight className="w-4 h-4 text-brand-text transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
