import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, ArrowUpRight } from "lucide-react";

export const EducationalNoticeSection: React.FC = () => {
  return (
    <section
      aria-label="Educational Notice and Regulatory Safeguard"
      className="py-10 bg-warm-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-amber-500/10 border-l-2 border-amber-600/70 rounded-r-sm space-y-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-amber-950">
              Educational &amp; Informational Resource Notice
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-amber-950/85 leading-relaxed">
            These publications and legal guides are prepared exclusively for general academic and educational orientation and do not constitute formal legal advice on any individual matter. Reading or interacting with these resources does not create an advocate-client relationship. Parties requiring specific legal analysis should consult legal counsel regarding their distinct factual and procedural circumstances.
          </p>

          <div className="pt-1">
            <Link
              to="/legal-disclaimer"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 hover:text-amber-950 underline underline-offset-4"
            >
              <span>Read Full Regulatory Disclaimer &amp; Bar Council Compliance Statement</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
