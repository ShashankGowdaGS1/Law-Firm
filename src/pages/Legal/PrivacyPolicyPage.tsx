import React from "react";
import { Container, Link } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";
import { siteConfig } from "@/config/siteConfig";
import { ChevronRight, ShieldCheck, Lock, FileText, AlertCircle, Mail } from "lucide-react";

export const PrivacyPolicyPage: React.FC = () => {
  usePageTitle("Data Privacy & Information Protection Policy");

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
                Privacy Policy
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo">
                Regulatory Governance
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-navy mb-4">
              Data Privacy &amp; Information Security Policy
            </h1>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-text/80">
              Information handling, client confidentiality, and digital privacy practices
              governing preliminary inquiries and electronic communications with {siteConfig.identity.firmName}.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Document Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container size="narrow">
          <div className="bg-white border border-brand-navy/15 rounded-sm p-6 sm:p-10 lg:p-12 shadow-xs space-y-10">
            {/* Pre-Launch Verification Disclosure Alert */}
            <div className="p-4 sm:p-5 rounded-xs bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-950 mb-1">
                  Statutory Publication Notice &bull; Pre-Launch Policy Review
                </p>
                <p className="text-amber-900/90 text-xs">
                  This document reflects the firm&apos;s digital handling standards in alignment with the
                  Digital Personal Data Protection Act, 2023 (DPDP Act) and the Bar Council of India Rules.
                  Final operational data retention schedules and designated Grievance Officer details are
                  subject to formal partner sign-off prior to commercial deployment.
                </p>
              </div>
            </div>

            {/* Section 01: Scope & Statutory Framework */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-indigo shrink-0" />
                <span>1. Statutory Framework &amp; Scope</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                {siteConfig.identity.firmName} (&quot;the Firm&quot;) conducts its practice in accordance with the
                Advocates Act, 1961, the Bar Council of India Rules, and the provisions of the Digital Personal
                Data Protection Act, 2023 (&quot;DPDP Act&quot;). This policy governs the receipt, processing, and
                handling of preliminary information submitted by users accessing this informational website.
              </p>
            </div>

            {/* Section 02: Information Collected via Website Inquiries */}
            <div className="space-y-3 border-t border-brand-navy/10 pt-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-brand-indigo shrink-0" />
                <span>2. Information Handled During Preliminary Inquiries</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                The firm collects only minimal, proportionate personal data necessary to assess general
                matter classification and conduct conflict clearance. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-sans text-xs sm:text-sm text-brand-text/85">
                <li>
                  <strong className="text-brand-navy">Contact Identifiers:</strong> Name, professional email address,
                  and optional telephone number provided voluntarily by the sender.
                </li>
                <li>
                  <strong className="text-brand-navy">General Subject Matter:</strong> High-level classification
                  of the inquiry (e.g., commercial arbitration, corporate compliance, property diligence).
                </li>
              </ul>
              <div className="mt-4 p-4 rounded-xs bg-[#F9F7F4] border border-brand-navy/10 text-xs text-brand-text/80">
                <strong className="text-brand-navy block mb-1">Confidentiality Exclusion:</strong>
                Website visitors are instructed not to transmit confidential matter records, proprietary trade secrets,
                financial account credentials, or privileged communications through preliminary website inquiries.
                Privileged matter materials are accepted strictly following execution of a formal engagement terms.
              </div>
            </div>

            {/* Section 03: Purpose of Processing */}
            <div className="space-y-3 border-t border-brand-navy/10 pt-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-brand-indigo shrink-0" />
                <span>3. Lawful Purpose &amp; Non-Disclosure Standards</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                All communications received through website channels are treated with strict professional discretion:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-sans text-xs sm:text-sm text-brand-text/85">
                <li>
                  Data is processed exclusively for the purpose of communicating regarding preliminary consultation availability and conflict checks.
                </li>
                <li>
                  The firm does not sell, rent, monetize, or commercialize visitor data, nor does it deploy commercial behavioral advertising trackers.
                </li>
                <li>
                  No personal data is disclosed to third parties except where required by a court of competent jurisdiction or statutory authority under Indian law.
                </li>
              </ul>
            </div>

            {/* Section 04: Data Principal Rights */}
            <div className="space-y-3 border-t border-brand-navy/10 pt-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy">
                4. Data Principal Rights under DPDP Act, 2023
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85">
                In compliance with the Digital Personal Data Protection Act, individuals who have submitted preliminary inquiries have the right to request:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 font-sans text-xs sm:text-sm text-brand-text/85">
                <li>Confirmation and summary of personal data held by the firm&apos;s registry;</li>
                <li>Correction, completion, or updating of inaccurate personal data;</li>
                <li>Erasure of preliminary inquiry communications where no ongoing legal representation exists.</li>
              </ul>
            </div>

            {/* Section 05: Grievance Redressal & Registry Contact */}
            <div className="border-t border-brand-navy/10 pt-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy mb-3">
                5. Grievance Redressal &amp; Registry Inquiries
              </h2>
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-text/85 mb-4">
                Inquiries regarding data protection, access requests, or privacy protocols may be addressed to the Chambers Registry:
              </p>
              <div className="p-4 rounded-xs bg-[#F9F7F4] border border-brand-navy/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-brand-navy block">Chambers Registry &mdash; Information Governance</span>
                  <span className="text-brand-text/75">{siteConfig.identity.firmName}</span>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Privacy%20Grievance%20Enquiry`}
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-indigo hover:text-brand-navy transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-gold" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Back Navigation Links */}
            <div className="border-t border-brand-navy/10 pt-6 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/legal-disclaimer"
                className="text-xs font-semibold text-brand-indigo hover:text-brand-navy underline underline-offset-4"
              >
                View Regulatory Legal Disclaimer &rarr;
              </Link>
              <Link
                href="/contact"
                className="text-xs font-semibold text-brand-navy hover:text-brand-indigo underline underline-offset-4"
              >
                Return to Contact Chambers
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
