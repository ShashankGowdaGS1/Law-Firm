import React from "react";
import { Container, Link } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";
import { siteConfig } from "@/config/siteConfig";
import { ChevronRight, Scale, ShieldAlert, BookOpen, AlertCircle, FileCheck } from "lucide-react";

export const LegalDisclaimerPage: React.FC = () => {
  usePageTitle("Statutory Legal Disclaimer & BCI Regulatory Disclosure");

  return (
    <div className="w-full bg-[#F9F7F4] text-brand-text">
      {/* Top Header / Breadcrumb Section */}
      <section className="border-b border-brand-navy/10 py-10 sm:py-14 bg-white">
        <Container size="default">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
            <ol className="flex items-center gap-1.5 sm:gap-2 text-xs font-sans text-brand-text/65">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-navy transition-colors underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-brand-text/40" />
              </li>
              <li className="text-brand-navy font-semibold" aria-current="page">
                Legal Disclaimer
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo">
                Statutory Disclosure
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-navy mb-4">
              Bar Council of India Regulatory Compliance
            </h1>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-text/80">
              Statutory disclosure and conditions of access under Rule 36 of the Bar Council of
              India Rules governing legal practitioners in the Republic of India.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Document Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container size="narrow">
          <div className="bg-white border border-brand-navy/15 rounded-sm p-6 sm:p-10 lg:p-12 shadow-xs space-y-10">
            {/* Primary Statutory Callout Box */}
            <div className="p-5 sm:p-6 rounded-xs bg-[#181A54] text-white border border-brand-navy shadow-sm">
              <div className="flex items-start gap-3.5">
                <Scale className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h2 className="font-heading font-bold text-sm sm:text-base text-brand-gold uppercase tracking-wider">
                    Rule 36 Compliance Mandate &bull; Bar Council of India
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                    Under the rules of the Bar Council of India, advocates and law firms are strictly
                    prohibited from soliciting work, advertising professional capabilities, or publishing
                    promotional superiority claims in any media or format.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 01: Purpose of this Website */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-brand-indigo shrink-0" />
                <span>1. Educational &amp; Informational Purpose Only</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                This website is made available solely to provide general information regarding {siteConfig.identity.firmName},
                its practice verticals, and general legal developments in India. The materials published herein do
                not constitute legal advice, statutory opinion, or an invitation to enter into an advocate-client relationship.
              </p>
            </div>

            {/* Section 02: Voluntary User Request Affirmation */}
            <div className="space-y-3 border-t border-brand-navy/10 pt-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-brand-indigo shrink-0" />
                <span>2. Affirmation of Voluntary User Access</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                By accessing this website, the user explicitly acknowledges and confirms that:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-sans text-xs sm:text-sm text-brand-text/85">
                <li>
                  The user seeks information voluntarily for their own knowledge and educational reference;
                </li>
                <li>
                  There has been no advertisement, solicitation, personal communication, invitation, or inducement
                  of any sort whatsoever by {siteConfig.identity.firmName} or its members to solicit legal work;
                </li>
                <li>
                  Any material downloaded or obtained through this website is done entirely at the user&apos;s own
                  volition and discretion.
                </li>
              </ul>
            </div>

            {/* Section 03: No Advocate-Client Relationship */}
            <div className="space-y-3 border-t border-brand-navy/10 pt-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-brand-indigo shrink-0" />
                <span>3. No Advocate-Client Relationship Established</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                Neither receipt of information from this site nor the transmission of an electronic inquiry
                establishes an advocate-client relationship. Legal representation is undertaken exclusively
                subsequent to comprehensive conflict-of-interest clearance and formal execution of a written
                terms of engagement.
              </p>
            </div>

            {/* Section 04: Limitation of Liability */}
            <div className="space-y-3 border-t border-brand-navy/10 pt-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy">
                4. Limitation of Legal Liability
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                Indian law and judicial precedents evolve rapidly through legislative amendments and court judgments.
                While the firm endeavors to maintain accurate content, it provides no warranty regarding the completeness,
                timeliness, or applicability of any legal guide or summary to specific factual circumstances.
                Users facing active legal disputes must consult a qualified advocate admitted to the relevant High Court or Bar Council.
              </p>
            </div>

            {/* Pre-Launch Verification Alert */}
            <div className="border-t border-brand-navy/10 pt-8">
              <div className="p-4 rounded-xs bg-[#F9F7F4] border border-brand-navy/15 flex items-start gap-3 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand-navy block mb-0.5">
                    Pre-Launch Publication Safeguard
                  </span>
                  <span className="text-brand-text/75 text-xs">
                    This statutory disclosure is drafted strictly under Part VI, Chapter II of the Bar Council of
                    India Rules. Any commercial launch or live hosting requires final confirmation of firm name and
                    advocate registry records.
                  </span>
                </div>
              </div>
            </div>

            {/* Back Navigation Links */}
            <div className="border-t border-brand-navy/10 pt-6 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs font-semibold text-brand-indigo hover:text-brand-navy underline underline-offset-4"
              >
                &larr; View Data Privacy Policy
              </Link>
              <Link
                href="/legal-services"
                className="text-xs font-semibold text-brand-navy hover:text-brand-indigo underline underline-offset-4"
              >
                Explore Legal Practice Areas &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
