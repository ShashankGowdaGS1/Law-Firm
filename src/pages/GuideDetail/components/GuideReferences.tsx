import React from "react";
import { LegalReference } from "@/data/guides/guidesData";
import { BookMarked, Scale, FileText } from "lucide-react";

interface GuideReferencesProps {
  sources?: LegalReference[];
}

export const GuideReferences: React.FC<GuideReferencesProps> = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <section
      aria-label="Statutory Authorities and Source Citations"
      className="mt-12 pt-8 border-t border-brand-navy/15 space-y-4"
    >
      <div className="flex items-center gap-2 text-brand-navy">
        <BookMarked className="w-4 h-4 text-brand-indigo" />
        <h3 className="font-heading font-bold text-lg text-brand-navy">
          Statutory Sources &amp; Legal Authorities
        </h3>
      </div>

      <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
        The provisions, enactments, and judicial precedents referenced in this educational guide include:
      </p>

      <div className="divide-y divide-brand-navy/10 border-t border-b border-brand-navy/10">
        {sources.map((src, i) => (
          <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-brand-champagne/40 text-brand-indigo shrink-0">
                {src.type === "Judicial Precedent" ? (
                  <Scale className="w-3.5 h-3.5" />
                ) : (
                  <FileText className="w-3.5 h-3.5" />
                )}
              </span>
              <span className="font-semibold text-brand-navy">{src.title}</span>
            </div>

            <div className="flex items-center gap-2 pl-6 sm:pl-0">
              <span className="font-mono text-xs text-brand-text/70">{src.citation}</span>
              <span className="text-[10px] uppercase font-bold text-brand-indigo/80 bg-brand-navy/5 px-2 py-0.5 rounded">
                {src.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
