import React from "react";
import { Container, Link } from "@/components/ui";
import {
  getApprovedGuides,
  LegalGuide
} from "@/data/guides/guidesData";
import {
  ArrowRight,
  BookOpen,
  FileText,
  ShieldCheck,
  Scale,
  Compass,
  Clock
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const LegalGuidesSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const approvedGuides = getApprovedGuides();
  const hasApproved = approvedGuides.length > 0;

  // Primary featured guide if approved guides exist
  const featuredGuide: LegalGuide | undefined = approvedGuides[0];
  const secondaryGuides: LegalGuide[] = approvedGuides.slice(1, 4);

  return (
    <section
      id="legal-guides"
      aria-label="Legal Guides and Educational Resources"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        {/* TOP INTRODUCTION: Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-8 border-b border-brand-navy/10 mb-10 sm:mb-12">
          {/* Left Column: Eyebrow + Heading (~65%) */}
          <div className="lg:col-span-8">
            <div
              className={`inline-flex items-center gap-2 mb-3.5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-2 duration-500"
              }`}
            >
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                Legal Knowledge
              </span>
            </div>

            <h2
              className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] leading-[1.15] tracking-tight text-brand-navy mb-4 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              Legal Guides & Resources
            </h2>

            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 max-w-2xl ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Explore educational information about legal procedures, documentation, and relevant areas of law.
            </p>
          </div>

          {/* Right Column: Explore All Guides Link (~35%) */}
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <Link
              href="/legal-guides"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-sm border border-brand-navy/20 bg-brand-off-white hover:bg-brand-navy hover:text-white transition-all duration-200 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase cursor-pointer"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-4 h-4 text-brand-indigo group-hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* MAIN COMPOSITION: Featured Publication Showcase */}
        {hasApproved && featuredGuide ? (
          /* OPTION A: Approved Live Publications Layout */
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-brand-off-white/80 p-6 sm:p-8 lg:p-12 rounded-sm border border-brand-navy/10 shadow-sm">
              {/* Left Column: Substantial Legal Research Editorial Image (~55%) */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-brand-navy/15 shadow-md group">
                  <img
                    src="/assets/images/nano-banana/legal-guides-research.jpg"
                    alt="Legal research library desk with open legal code and reference books"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-brand-navy/90 text-brand-gold text-[11px] font-sans font-bold uppercase tracking-wider backdrop-blur-xs">
                      Featured Guide
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Guide Editorial Metadata (~45%) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-brand-text/70 mb-3">
                  <span className="font-sans font-bold uppercase tracking-wider text-brand-indigo">
                    {featuredGuide.category}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-indigo" />
                    {featuredGuide.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-[28px] text-brand-navy leading-snug mb-4 hover:text-brand-indigo transition-colors">
                  <Link href={`/legal-guides/${featuredGuide.slug}`}>
                    {featuredGuide.title}
                  </Link>
                </h3>

                <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed mb-6">
                  {featuredGuide.excerpt}
                </p>

                <div className="pt-6 border-t border-brand-navy/10 flex items-center justify-between">
                  <span className="text-xs text-brand-text/60">
                    Published {featuredGuide.publishedDate}
                  </span>
                  <Link
                    href={`/legal-guides/${featuredGuide.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-sans font-bold text-brand-navy hover:text-brand-indigo uppercase tracking-wider"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-brand-indigo transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Secondary Editorial Resource Rows */}
            {secondaryGuides.length > 0 && (
              <div className="pt-8 border-t border-brand-navy/10">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-brand-navy/70 mb-6">
                  Additional Practice Briefings
                </h4>
                <div className="divide-y divide-brand-navy/10 border-b border-brand-navy/10">
                  {secondaryGuides.map((guide) => (
                    <Link
                      key={guide.id}
                      href={`/legal-guides/${guide.slug}`}
                      variant="card"
                      className="group py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-brand-off-white/60 px-3 -mx-3 rounded-sm no-underline hover:no-underline focus-visible:no-underline"
                    >
                      <div>
                        <span className="text-[11px] font-sans uppercase font-bold text-brand-indigo tracking-wider block mb-1 no-underline">
                          {guide.category}
                        </span>
                        <h5 className="font-heading font-bold text-base sm:text-lg text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors">
                          {guide.title}
                        </h5>
                      </div>
                      <div className="flex items-center gap-4 shrink-0 text-xs text-brand-text/70 no-underline">
                        <span className="no-underline">{guide.readTime}</span>
                        <ArrowRight className="w-4 h-4 text-brand-indigo transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* OPTION B: Professional Publication Knowledge Hub (Real Research Photography & Educational Framework) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F9F7F4] p-6 sm:p-8 lg:p-10 rounded-sm border border-brand-navy/15 shadow-sm">
            {/* Left Column: High-Resolution Legal Research Photograph (~55%) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-brand-navy/15 shadow-lg bg-white">
                <img
                  src="/assets/images/nano-banana/legal-guides-research.jpg"
                  alt="Chambers Legal Reference Desk with Open Statutory Code and Organized Documentation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle Refined Pill Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand-navy/90 backdrop-blur-sm text-white border border-white/20">
                  <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-white/95">
                    Legal Reference & Research
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Authoritative Editorial Resource Architecture (~45%) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Category Eyebrow */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-indigo" />
                <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-indigo">
                  Knowledge Publications & Briefs
                </span>
              </div>

              {/* Prominent Editorial Headline */}
              <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-[26px] text-brand-navy leading-snug mb-3">
                Analytical Perspectives on Legal Frameworks
              </h3>

              {/* Explanatory Context */}
              <p className="font-sans text-xs sm:text-sm text-brand-text/80 leading-relaxed mb-6">
                Chambers maintains educational reference resources, statutory compliance roadmaps, and procedural overviews to assist in understanding general legal requirements.
              </p>

              {/* Three Core Publication Pillars: Clean Typography-Led Rows with Dividers */}
              <div className="border-t border-brand-navy/10 divide-y divide-brand-navy/10 mb-6">
                <div className="py-3 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-navy">
                      Statutory Compliance Roadmaps
                    </h4>
                    <p className="font-sans text-[11px] text-brand-text/75 leading-normal mt-0.5">
                      Checklists covering corporate filings, data governance standards, and director mandates.
                    </p>
                  </div>
                </div>

                <div className="py-3 flex items-start gap-3">
                  <Scale className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-navy">
                      Arbitration & Commercial Procedure
                    </h4>
                    <p className="font-sans text-[11px] text-brand-text/75 leading-normal mt-0.5">
                      Procedural overviews on dispute resolution clauses, interim measures, and arbitral forums.
                    </p>
                  </div>
                </div>

                <div className="py-3 flex items-start gap-3">
                  <Compass className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-navy">
                      Regulatory & Jurisprudential Notes
                    </h4>
                    <p className="font-sans text-[11px] text-brand-text/75 leading-normal mt-0.5">
                      Objective educational summaries of statutory developments and procedural rulings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Action: Link to Guides Directory */}
              <div className="pt-4 border-t border-brand-navy/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-brand-text/65">
                  <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
                  <span>Educational material only &bull; BCI compliant</span>
                </div>

                <Link
                  href="/legal-guides"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-brand-navy text-white hover:bg-brand-indigo transition-colors duration-150 text-xs font-sans font-bold tracking-wider uppercase cursor-pointer"
                >
                  <span>Browse All Guides</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Section Footer: Editorial Disclaimer Notice */}
        <div className="mt-8 pt-6 border-t border-brand-navy/10 flex items-center justify-center text-center">
          <p className="text-xs text-brand-text/60 max-w-2xl font-sans leading-relaxed">
            All guides and publications are provided solely for general educational purposes and do not constitute formal legal counsel or create an advocate-client relationship.
          </p>
        </div>
      </Container>
    </section>
  );
};
