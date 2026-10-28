import React from "react";
import { Container, Link } from "@/components/ui";
import {
  ArrowRight,
  Clock,
  ShieldAlert,
  ShieldCheck,
  FileCheck2
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ASSET_PATHS } from "@/utils/assets";

export const ContactClosingSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="contact"
      aria-label="Contact the Firm — Professional Communications"
      className="relative w-full bg-[#F9F7F4] py-16 sm:py-20 lg:py-24 border-t border-brand-navy/10 text-brand-text overflow-hidden scroll-mt-24"
    >
      <Container size="default">
        {/* Asymmetric Desktop Layout: Left 52% Editorial Info, Right 48% Editorial Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Section Overview, Editorial Contact Channels, Confidentiality Note (~52%) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow Label */}
            <div
              className={`inline-flex items-center gap-2 mb-3.5 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-2 duration-500"
              }`}
            >
              <span className="w-5 h-[2px] bg-brand-gold inline-block" />
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
                Contact the Firm
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] leading-[1.15] tracking-tight text-brand-navy mb-4 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              Connect With Our Firm
            </h2>

            {/* Supporting Text */}
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-7 max-w-xl ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Find the firm&apos;s professional contact information and details about
              submitting an enquiry.
            </p>

            {/* Clean Editorial Contact Rows (Thin Dividers, Professional Typography) */}
            <div className="border-t border-brand-navy/10 divide-y divide-brand-navy/10 mb-7">
              {/* Row 01: Professional Communications */}
              <div className="py-3.5 flex items-start gap-3.5">
                <span className="p-2 rounded-sm bg-brand-navy/5 text-brand-navy shrink-0 mt-0.5 border border-brand-navy/10">
                  <FileCheck2 className="w-4 h-4 text-brand-indigo" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-navy mb-0.5">
                    Professional Communications & Enquiries
                  </h3>
                  <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                    General communications and preliminary enquiries may be initiated through our designated contact channels.
                  </p>
                </div>
              </div>

              {/* Row 02: Conflict Verification & Scheduling */}
              <div className="py-3.5 flex items-start gap-3.5">
                <span className="p-2 rounded-sm bg-brand-navy/5 text-brand-navy shrink-0 mt-0.5 border border-brand-navy/10">
                  <Clock className="w-4 h-4 text-brand-indigo" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-navy mb-0.5">
                    Engagement Clearance
                  </h3>
                  <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                    Consultations and formal matter discussions proceed following appropriate conflict-of-interest clearance.
                  </p>
                </div>
              </div>
            </div>

            {/* Preliminary Enquiry & Confidentiality Notice Box */}
            <div className="p-4 sm:p-5 rounded-sm bg-white border border-brand-navy/15 shadow-xs mb-7">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
                  <strong className="text-brand-navy font-semibold">Important Safeguard:</strong> Please avoid submitting confidential or sensitive case information through preliminary enquiries. Contacting the firm does not, by itself, establish an advocate-client relationship.
                </p>
              </div>
            </div>

            {/* Main Action Link / Button to /contact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-12 rounded-sm bg-brand-navy text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:bg-brand-indigo active:bg-brand-navy transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shrink-0"
              >
                <span>View Contact Information</span>
                <ArrowRight className="w-4 h-4 text-brand-gold transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-brand-text/60">
                <ShieldCheck className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>Compliance with Bar Council of India standards</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Substantial Real Editorial Portrait (~48%) */}
          <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4] rounded-sm overflow-hidden bg-[#181A54] border border-brand-navy/15 shadow-2xl">
              {/* Real Generated Photograph */}
              <img
                src={ASSET_PATHS.nanoBanana.contactLawyerPortrait}
                alt="Indian Female Advocate in Black Court Coat and White Neck Bands Standing Beside Contemporary Office Desk"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />

              {/* Restrained Ambient Bottom Gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent pointer-events-none"
              />

              {/* Mandatory Understated Illustrative Model Caption */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                <span className="text-[10px] sm:text-[11px] font-sans text-white/80 bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative photography &mdash; not actual firm personnel.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
