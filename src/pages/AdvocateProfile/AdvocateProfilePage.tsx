import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getTeamMemberBySlug } from "@/data/team/teamData";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Award,
  Scale,
} from "lucide-react";

export const AdvocateProfilePage: React.FC = () => {
  const { memberSlug } = useParams<{ memberSlug: string }>();
  const member = memberSlug ? getTeamMemberBySlug(memberSlug) : undefined;

  // Under strict professional mandate, only approved/verified records are published
  const isPublished = member && !member.isPlaceholder;

  // Dynamic Page Title
  const pageTitle = isPublished
    ? `${member.name} — ${member.designation} | Chambers Legal Counsel`
    : "Advocate Profile Not Found | Chambers Legal Counsel";

  usePageTitle(pageTitle);

  // If missing or unpublished, render the project's proper Not Found / Unpublished state
  if (!isPublished) {
    return (
      <main className="min-h-[70vh] bg-warm-white py-20 lg:py-28 text-brand-text flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-brand-navy/5 text-brand-indigo mx-auto">
            <Scale className="w-8 h-8" />
          </div>

          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            DIRECTORY RECORD UNAVAILABLE
          </span>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy">
            Advocate Profile Not Published
          </h1>

          <p className="font-sans text-base sm:text-lg text-brand-text/80 max-w-xl mx-auto leading-relaxed">
            The requested professional profile is either unavailable or unpublished. Under Bar Council of India rules, individual advocate profiles and formal admissions are published strictly upon formal client verification.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/our-team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-indigo transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Our Team Directory</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-navy/20 text-brand-navy text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-navy/5 transition-colors"
            >
              <span>Contact Chambers Registry</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // =========================================================================
  // VERIFIED ADVOCATE PROFILE TEMPLATE
  // =========================================================================
  return (
    <main className="min-h-screen bg-warm-white text-brand-text selection:bg-brand-gold/30 selection:text-brand-navy">
      {/* 01 — Profile Introduction (Split Composition) */}
      <section
        aria-label={`Profile Header for ${member.name}`}
        className="pt-28 pb-16 sm:pb-20 bg-brand-navy text-white border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60 mb-8">
            <Link to="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link to="/our-team" className="hover:text-brand-gold transition-colors">
              Our Team
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-brand-gold font-medium truncate" aria-current="page">
              {member.name}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT: Advocate Name, Role, & Primary Practice (~65%) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2px] bg-brand-gold inline-block" />
                <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  {member.designation}
                </span>
              </div>

              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
                {member.name}
              </h1>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-white/85">
                <span className="font-medium text-brand-gold">
                  {member.practiceArea}
                </span>
                <span className="text-white/30">&bull;</span>
                <span className="text-white/70">
                  {member.practiceFocus}
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-xl pt-2">
                {member.bio}
              </p>

              {/* Regulatory Notice */}
              <div className="pt-4 flex items-center gap-2 text-xs text-white/60">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Enrolled Advocate &bull; Bar Council of India Standards</span>
              </div>
            </div>

            {/* RIGHT: Genuine Approved Portrait or Clean Typographic Identity (~35%) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-sm overflow-hidden bg-brand-indigo/30 border border-white/20 shadow-2xl">
                {/* Image tag with clean fallback to monogram if file not on disk */}
                <img
                  src={`/assets/images/team/${member.slug}.jpg`}
                  alt={`${member.name} — ${member.designation}`}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />

                {/* Typography-Led Fallback Overlay if photo is missing */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-brand-navy -z-0">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-gold/40 flex items-center justify-center font-heading text-2xl font-bold text-brand-gold mb-3">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <span className="font-heading font-bold text-lg text-white">
                    {member.name}
                  </span>
                  <span className="font-sans text-xs text-white/60 mt-1">
                    {member.designation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Professional Biography */}
      <section
        aria-label="Professional Biography"
        className="py-14 sm:py-18 bg-white border-b border-brand-navy/10 text-brand-text"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            BIOGRAPHICAL SUMMARY
          </span>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy">
            Professional Background &amp; Practice Focus
          </h2>

          <div className="space-y-4 font-sans text-base sm:text-lg text-brand-text/85 leading-relaxed">
            <p>{member.bio}</p>
            <p className="text-sm sm:text-base text-brand-text/75">
              Practice involves regular consultation with instructing solicitors, enterprise clients, and authorized officers, preparing pleadings, and delivering legal opinions in alignment with statutory frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — Approved Credentials (Hide empty fields) */}
      <section
        aria-label="Approved Professional Credentials"
        className="py-14 sm:py-18 bg-warm-white border-b border-brand-navy/10 text-brand-text"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-1">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
              VERIFIED RECORD
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy">
              Admissions &amp; Academic Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Bar Admissions */}
            {member.barAdmissions && member.barAdmissions.length > 0 && (
              <div className="p-6 bg-white border border-brand-navy/10 rounded-sm shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-brand-indigo">
                  <Award className="w-5 h-5 text-brand-indigo" />
                  <h3 className="font-heading font-bold text-base text-brand-navy">
                    Bar Admissions &amp; Enrolment
                  </h3>
                </div>
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-brand-text/80 divide-y divide-brand-navy/10">
                  {member.barAdmissions.map((admission, i) => (
                    <li key={i} className="pt-2 first:pt-0">
                      {admission}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Academic Qualifications */}
            {member.education && member.education.length > 0 && (
              <div className="p-6 bg-white border border-brand-navy/10 rounded-sm shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-brand-indigo">
                  <GraduationCap className="w-5 h-5 text-brand-indigo" />
                  <h3 className="font-heading font-bold text-base text-brand-navy">
                    Academic Qualifications
                  </h3>
                </div>
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-brand-text/80 divide-y divide-brand-navy/10">
                  {member.education.map((edu, i) => (
                    <li key={i} className="pt-2 first:pt-0">
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 04 — Areas of Practice */}
      <section
        aria-label="Primary Practice Areas"
        className="py-14 sm:py-18 bg-white border-b border-brand-navy/10 text-brand-text"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            PRACTICE FOCUS
          </span>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy">
            Related Practice Areas
          </h2>

          <div className="p-6 bg-brand-champagne/20 rounded-sm border border-brand-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy">
                {member.practiceArea}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-text/75 mt-0.5">
                {member.practiceFocus}
              </p>
            </div>

            <Link
              to="/legal-services"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-navy text-white text-xs font-semibold rounded-sm hover:bg-brand-indigo transition-colors shrink-0"
            >
              <span>Explore Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — Related Navigation */}
      <section
        aria-label="Related Navigation"
        className="py-12 bg-warm-white border-t border-brand-navy/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-brand-indigo">
          <Link
            to="/our-team"
            className="inline-flex items-center gap-2 hover:text-brand-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Legal Professionals</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/legal-services"
              className="hover:text-brand-navy underline underline-offset-4 decoration-brand-indigo/30 transition-colors"
            >
              Explore Legal Services
            </Link>

            <Link
              to="/contact"
              className="hover:text-brand-navy underline underline-offset-4 decoration-brand-indigo/30 transition-colors"
            >
              Contact Chambers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdvocateProfilePage;
