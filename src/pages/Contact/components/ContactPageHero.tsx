import React from "react";
import { Container, Link } from "@/components/ui";
import { ChevronRight, ArrowDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ASSET_PATHS } from "@/utils/assets";

export const ContactPageHero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScrollToChannels = () => {
    const el = document.getElementById("contact-channels");
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }
  };

  return (
    <section
      aria-label="Contact the Firm Hero"
      className="relative w-full bg-[#F9F7F4] pt-10 sm:pt-12 pb-14 sm:pb-16 lg:pb-20 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        {/* Accessible Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
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
              Contact Us
            </li>
          </ol>
        </nav>

        {/* Editorial Asymmetric Composition: Left ~52% / Right ~48% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Eyebrow, Large Headline, Context & Anchor Link (~52%) */}
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

            {/* Main Page Headline */}
            <h1
              className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] leading-[1.12] tracking-tight text-brand-navy mb-4 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100"
              }`}
            >
              Get in Touch With Our Firm.
            </h1>

            {/* Introductory Description */}
            <p
              className={`font-sans text-base sm:text-lg leading-relaxed text-brand-text/80 mb-8 max-w-xl ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
              }`}
            >
              Find the firm&apos;s approved contact information and details about
              submitting a professional enquiry.
            </p>

            {/* Small Contact Information Navigation Anchor */}
            <div
              className={`flex items-center gap-4 ${
                prefersReducedMotion
                  ? ""
                  : "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
              }`}
            >
              <button
                type="button"
                onClick={handleScrollToChannels}
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-sm bg-brand-navy text-white font-sans text-xs sm:text-sm font-semibold tracking-wide hover:bg-brand-indigo active:bg-brand-navy transition-all duration-150 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <span>View Contact Details</span>
                <ArrowDown className="w-4 h-4 text-brand-gold transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
              <span className="text-xs font-sans text-brand-text/60 hidden sm:inline">
                Chambers Registry & Inquiries
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Photorealistic Legal-Office Environment (~48%) */}
          <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-sm overflow-hidden bg-[#181A54] border border-brand-navy/15 shadow-xl">
              <img
                src={ASSET_PATHS.nanoBanana.contactReceptionHero}
                alt="Contemporary Indian legal office reception and consultation environment with warm walnut furniture"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />

              {/* Restrained Ambient Bottom Gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-transparent pointer-events-none"
              />

              {/* Mandatory Illustrative Model Disclaimer */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5 z-10">
                <span className="text-[10px] sm:text-[11px] font-sans text-white/85 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10 tracking-wide">
                  Illustrative photography &mdash; not actual firm personnel or chambers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
