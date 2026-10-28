import React from "react";
import { Container } from "@/components/ui";
import { siteConfig } from "@/config/siteConfig";
import { Building2, Navigation, Clock, ShieldCheck, CalendarCheck2 } from "lucide-react";

export const OfficeInformationSection: React.FC = () => {
  const isAddressPending = siteConfig.contact.address.line1.includes("[");

  return (
    <section
      aria-label="Chambers and Office Information"
      className="relative w-full bg-[#F9F7F4] py-16 sm:py-20 border-b border-brand-navy/10 text-brand-text"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo">
              Chambers &amp; Location
            </span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-brand-navy mb-3">
            Chambers Location &amp; Visitor Coordination
          </h2>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/75">
            Physical consultations and chamber conferences proceed by prior appointment.
            Find details regarding chamber administration, access protocols, and scheduling.
          </p>
        </div>

        {/* 3-Card Architectural Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 01: Physical Chambers Address & Status */}
          <div className="p-6 sm:p-7 rounded-sm bg-white border border-brand-navy/15 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xs bg-brand-navy/5 flex items-center justify-center text-brand-navy border border-brand-navy/10 mb-5">
                <Building2 className="w-5 h-5 text-brand-indigo" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                Chambers Designation
              </h3>
              {isAddressPending ? (
                <div className="space-y-2 text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                  <p className="font-semibold text-brand-navy">
                    Chambers of Legal Counsel
                  </p>
                  <p>High Court &amp; Appellate Chambers Precinct</p>
                  <p className="text-[11px] text-brand-text/60 italic pt-1">
                    Specific chamber wing details and entrance instructions are provided upon
                    matter registration and confirmed appointment.
                  </p>
                </div>
              ) : (
                <div className="space-y-1 text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                  <p className="font-semibold text-brand-navy">
                    {siteConfig.contact.address.line1}
                  </p>
                  <p>
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.postalCode}
                  </p>
                </div>
              )}
            </div>
            <div className="pt-5 mt-5 border-t border-brand-navy/10 text-[11px] font-sans text-brand-text/60 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-indigo shrink-0" />
              <span>Restricted judicial precinct access</span>
            </div>
          </div>

          {/* Card 02: Office Timings & Registry Hours */}
          <div className="p-6 sm:p-7 rounded-sm bg-white border border-brand-navy/15 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xs bg-brand-navy/5 flex items-center justify-center text-brand-navy border border-brand-navy/10 mb-5">
                <Clock className="w-5 h-5 text-brand-indigo" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                Registry Timings
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                <p className="font-semibold text-brand-navy">
                  Monday to Friday
                </p>
                <p>9:30 AM &ndash; 6:30 PM (Formal Registry)</p>
                <p className="font-semibold text-brand-navy pt-1">
                  Saturday Consultations
                </p>
                <p className="text-brand-text/70">
                  By prior coordination for urgent court listings
                </p>
              </div>
            </div>
            <div className="pt-5 mt-5 border-t border-brand-navy/10 text-[11px] font-sans text-brand-text/60 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-indigo shrink-0" />
              <span>Court recess schedules observed</span>
            </div>
          </div>

          {/* Card 03: In-Person Consultation Protocol */}
          <div className="p-6 sm:p-7 rounded-sm bg-white border border-brand-navy/15 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xs bg-brand-navy/5 flex items-center justify-center text-brand-navy border border-brand-navy/10 mb-5">
                <CalendarCheck2 className="w-5 h-5 text-brand-indigo" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">
                Visit Coordination
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-brand-text/80 leading-relaxed">
                <p>
                  To preserve client confidentiality and court schedule discipline, walk-in
                  consultations are strictly discouraged.
                </p>
                <p className="text-[11px] text-brand-text/70 pt-1">
                  Visiting advocates, corporate counsel, and clients are issued entry clearance
                  following registry scheduling.
                </p>
              </div>
            </div>
            <div className="pt-5 mt-5 border-t border-brand-navy/10 text-[11px] font-sans text-brand-text/60 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-brand-indigo shrink-0" />
              <span>Registry gate clearance required</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
