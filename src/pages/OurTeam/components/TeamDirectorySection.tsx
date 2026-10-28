import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getVerifiedTeamMembers, TeamMemberItem } from "@/data/team/teamData";
import { ASSET_PATHS } from "@/utils/assets";
import { ArrowRight, ChevronRight, ShieldCheck, Scale, BookOpen, Users } from "lucide-react";

export const TeamDirectorySection: React.FC = () => {
  const verifiedMembers = getVerifiedTeamMembers();
  const hasVerified = verifiedMembers.length > 0;

  // Active index for State A (verified interactive showcase)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeMember: TeamMemberItem | undefined = verifiedMembers[selectedIndex];

  return (
    <section
      id="team-directory"
      aria-label="Advocate Directory and Practice Leadership"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo block mb-2">
            DIRECTORY &amp; PRACTICE STRUCTURE
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-navy">
            {hasVerified ? "Advocate Directory" : "Chambers Directory & Practice Leadership"}
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-text/80 leading-relaxed mt-3">
            {hasVerified
              ? "Browse verified profiles of advocates and legal professionals associated with the firm."
              : "An overview of chambers organization, practice leadership domains, and verified advocate directory standards."}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* STATE A: VERIFIED ADVOCATES EXIST (Interactive split directory showcase)  */}
        {/* ========================================================================= */}
        {hasVerified && activeMember ? (
          <div>
            {/* Desktop Two-Column Editorial Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
              {/* LEFT: Directory Index (~60%) */}
              <div className="lg:col-span-7 xl:col-span-7 divide-y divide-brand-navy/15 border-t border-b border-brand-navy/15">
                {verifiedMembers.map((member, index) => {
                  const isSelected = selectedIndex === index;
                  const formattedIndex = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={member.id}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onFocus={() => setSelectedIndex(index)}
                      tabIndex={0}
                      role="button"
                      aria-pressed={isSelected}
                      className={`group py-5 px-4 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? "bg-brand-navy text-white pl-6 rounded-sm shadow-sm"
                          : "hover:bg-brand-champagne/20 text-brand-text"
                      }`}
                    >
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isSelected ? "text-brand-gold" : "text-brand-indigo/60"
                          }`}
                        >
                          {formattedIndex}
                        </span>

                        <div className="min-w-0">
                          <h3
                            className={`font-heading font-bold text-lg truncate ${
                              isSelected ? "text-white" : "text-brand-navy group-hover:text-brand-indigo"
                            }`}
                          >
                            {member.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5 text-xs">
                            <span className={isSelected ? "text-brand-gold" : "text-brand-indigo font-medium"}>
                              {member.designation}
                            </span>
                            <span className={isSelected ? "text-white/40" : "text-brand-navy/20"}>&bull;</span>
                            <span
                              className={`truncate ${
                                isSelected ? "text-white/80" : "text-brand-text/70"
                              }`}
                            >
                              {member.practiceArea}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <Link
                          to={`/our-team/${member.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className={`p-2 rounded transition-colors ${
                            isSelected
                              ? "bg-brand-gold text-brand-navy hover:bg-white"
                              : "text-brand-navy/40 group-hover:text-brand-indigo group-hover:translate-x-1"
                          }`}
                          aria-label={`View verified profile for ${member.name}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* RIGHT: Featured Advocate Portrait & Summary (~40%) */}
              <div className="lg:col-span-5 xl:col-span-5 sticky top-28 self-start">
                <div className="bg-brand-navy text-white rounded-sm overflow-hidden shadow-xl border border-brand-navy/20">
                  {/* Portrait Area */}
                  <div className="relative aspect-[4/5] bg-brand-indigo/30 overflow-hidden">
                    {/* Genuine Portrait if Available */}
                    <img
                      src={`/assets/images/team/${activeMember.slug}.jpg`}
                      alt={`${activeMember.name} — ${activeMember.designation}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-opacity duration-300"
                      onError={(e) => {
                        // Clean typography-led fallback if specific real portrait file is missing
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent"
                    />

                    {/* Badge and Name in Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-gold block">
                        {activeMember.designation}
                      </span>
                      <h4 className="font-heading font-bold text-2xl text-white mt-1">
                        {activeMember.name}
                      </h4>
                      <p className="font-sans text-xs text-white/85 mt-1">
                        {activeMember.practiceArea}
                      </p>
                    </div>
                  </div>

                  {/* Summary & Profile Link */}
                  <div className="p-6 space-y-4">
                    <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-3">
                      {activeMember.bio}
                    </p>

                    <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] text-white/60">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Verified Enrolment</span>
                      </div>

                      <Link
                        to={`/our-team/${activeMember.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-white transition-colors"
                      >
                        <span>Full Professional Profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Vertical Profile List */}
            <div className="lg:hidden divide-y divide-brand-navy/15 border-t border-b border-brand-navy/15">
              {verifiedMembers.map((member, index) => (
                <div key={member.id} className="py-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs font-bold text-brand-indigo block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-brand-navy mt-0.5">
                        {member.name}
                      </h3>
                      <p className="font-sans text-xs font-semibold text-brand-indigo mt-0.5">
                        {member.designation}
                      </p>
                    </div>

                    <Link
                      to={`/our-team/${member.slug}`}
                      className="p-2.5 rounded-sm bg-brand-navy text-white shrink-0 hover:bg-brand-indigo transition-colors"
                      aria-label={`View profile for ${member.name}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="text-[11px] font-sans text-brand-text/60">
                    <span className="font-semibold text-brand-navy">Practice Domain:</span> {member.practiceArea}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* STATE B: NO VERIFIED TEAM ROSTER (Polished Institutional Practice Layout)   */
          /* ========================================================================= */
          <div className="space-y-12 sm:space-y-16">
            {/* Two-Column Institutional Framework Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* LEFT: Illustrative Legal Photography (~50%) */}
              <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] rounded-sm overflow-hidden bg-brand-navy shadow-md border border-brand-navy/10">
                <img
                  src={ASSET_PATHS.nanoBanana.ourTeamEditorial}
                  alt="Adult Indian legal advocates collaborating in conference chambers"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"
                />
                {/* Understated Caption */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                  <span className="text-[10px] font-sans text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                    Illustrative imagery &mdash; not actual firm personnel.
                  </span>
                </div>
              </div>

              {/* RIGHT: Directory Policy & Statutory Compliance (~50%) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-brand-indigo">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">
                    Bar Council of India Compliance
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy leading-tight">
                  Chambers Practice &amp; Professional Standards
                </h3>

                <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed">
                  In accordance with the Advocates Act, 1961 and the Bar Council of India Rules governing advocate representation, individual professional credentials, enrollment particulars, and formal engagement terms are shared upon specific professional enquiry and conflict clearance.
                </p>

                <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed">
                  Chambers maintains dedicated practice leadership across appellate advocacy, corporate transactions, regulatory compliance, and domestic and international arbitration.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/legal-services"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-indigo transition-colors"
                  >
                    <span>Explore Practice Areas</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-brand-navy/20 text-brand-navy text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-navy/5 transition-colors"
                  >
                    <span>Chambers Registry</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Practice Leadership Divisions: Clean Typography Rows with Dividers */}
            <div className="border-t border-brand-navy/15 pt-10">
              <div className="mb-6">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
                  CHAMBERS SPECIALIZATIONS
                </span>
                <h4 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy mt-1">
                  Coordinated Practice Groups
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {/* 01: Appellate & Commercial Practice */}
                <div className="p-6 bg-warm-white rounded-sm border border-brand-navy/10 space-y-3">
                  <div className="p-2 rounded bg-brand-champagne/40 text-brand-indigo w-fit">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h5 className="font-heading font-bold text-base text-brand-navy">
                    Appellate &amp; Commercial Advocacy
                  </h5>
                  <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                    Representation before the Supreme Court of India, Delhi High Court, and appellate tribunals in complex commercial disputes, statutory appeals, and writ petitions.
                  </p>
                  <Link
                    to="/legal-services/commercial-disputes"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-indigo hover:text-brand-navy pt-2"
                  >
                    <span>View Appellate Practice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 02: Corporate & Regulatory Counsel */}
                <div className="p-6 bg-warm-white rounded-sm border border-brand-navy/10 space-y-3">
                  <div className="p-2 rounded bg-brand-champagne/40 text-brand-indigo w-fit">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h5 className="font-heading font-bold text-base text-brand-navy">
                    Corporate Governance &amp; Advisory
                  </h5>
                  <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                    Counsel on corporate statutory compliances, director liabilities, joint ventures, secretarial vetting, and statutory disclosures under the Companies Act, 2013.
                  </p>
                  <Link
                    to="/legal-services/corporate-advisory"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-indigo hover:text-brand-navy pt-2"
                  >
                    <span>View Corporate Practice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 03: Arbitration & Alternative Dispute Resolution */}
                <div className="p-6 bg-warm-white rounded-sm border border-brand-navy/10 space-y-3">
                  <div className="p-2 rounded bg-brand-champagne/40 text-brand-indigo w-fit">
                    <Users className="w-4 h-4" />
                  </div>
                  <h5 className="font-heading font-bold text-base text-brand-navy">
                    Arbitration &amp; Dispute Resolution
                  </h5>
                  <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                    Institutional (MCIA, DIAC, SIAC) and ad-hoc arbitrations, Section 9 interim measures, arbitral tribunal hearings, and enforcement proceedings.
                  </p>
                  <Link
                    to="/legal-services/arbitration"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-indigo hover:text-brand-navy pt-2"
                  >
                    <span>View Arbitration Practice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
