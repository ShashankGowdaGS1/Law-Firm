import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Compass, ArrowLeft, ArrowRight, ShieldAlert, Home, Briefcase, Users, Phone } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  usePageTitle("404 — Page Not Found");

  return (
    <main
      aria-label="404 — Requested Page Not Found"
      className="min-h-[75vh] bg-[#F9F7F4] py-16 sm:py-24 flex items-center text-brand-text"
    >
      <Container size="default">
        <div className="max-w-2xl mx-auto bg-white border border-brand-navy/15 rounded-sm p-8 sm:p-12 shadow-sm text-center">
          {/* Top Compass Icon */}
          <div className="w-14 h-14 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-indigo mx-auto mb-6">
            <Compass className="w-7 h-7 text-brand-indigo" />
          </div>

          {/* Eyebrow Label */}
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block mb-2">
            Error 404 &bull; Resource Not Found
          </span>

          {/* Heading */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
            Page or Legal Resource Not Found
          </h1>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/80 mb-8 max-w-lg mx-auto">
            The requested web address does not correspond to an active practice area, published legal guide,
            or verified chambers record. The page may have been relocated or updated during recent revisions.
          </p>

          {/* Quick Jump Buttons */}
          <div className="pt-2 pb-6 border-y border-brand-navy/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <Link
              to="/"
              className="group p-3 rounded-xs border border-brand-navy/10 hover:border-brand-navy/30 hover:bg-brand-off-white transition-colors flex items-center gap-3 no-underline hover:no-underline focus-visible:no-underline"
            >
              <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-indigo group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-bold text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4">
                  Chambers Overview
                </span>
                <span className="block text-[11px] text-brand-text/65 truncate no-underline">
                  Return to main homepage
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-brand-text/40 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>

            <Link
              to="/legal-services"
              className="group p-3 rounded-xs border border-brand-navy/10 hover:border-brand-navy/30 hover:bg-brand-off-white transition-colors flex items-center gap-3 no-underline hover:no-underline focus-visible:no-underline"
            >
              <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-indigo group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-bold text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4">
                  Practice Areas
                </span>
                <span className="block text-[11px] text-brand-text/65 truncate no-underline">
                  Explore corporate & disputes
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-brand-text/40 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>

            <Link
              to="/our-team"
              className="group p-3 rounded-xs border border-brand-navy/10 hover:border-brand-navy/30 hover:bg-brand-off-white transition-colors flex items-center gap-3 no-underline hover:no-underline focus-visible:no-underline"
            >
              <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-indigo group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-bold text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4">
                  Our Legal Team
                </span>
                <span className="block text-[11px] text-brand-text/65 truncate no-underline">
                  Verified advocates directory
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-brand-text/40 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>

            <Link
              to="/contact"
              className="group p-3 rounded-xs border border-brand-navy/10 hover:border-brand-navy/30 hover:bg-brand-off-white transition-colors flex items-center gap-3 no-underline hover:no-underline focus-visible:no-underline"
            >
              <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-indigo group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-xs font-bold text-brand-navy group-hover:text-brand-indigo group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4">
                  Contact Chambers
                </span>
                <span className="block text-[11px] text-brand-text/65 truncate no-underline">
                  Registry communication
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-brand-text/40 group-hover:text-brand-navy group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          </div>

          {/* Primary Action Button */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-11 rounded-xs bg-brand-navy text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs hover:bg-brand-indigo transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-brand-gold" />
              <span>Return to Chambers Homepage</span>
            </Link>

            <div className="flex items-center gap-1.5 text-[11px] text-brand-text/60">
              <ShieldAlert className="w-3.5 h-3.5 text-brand-indigo shrink-0" />
              <span>Bar Council of India Rule 36 compliant</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
