import React from "react";
import { ArticleSection } from "@/data/guides/guidesData";
import { CheckCircle2 } from "lucide-react";

interface GuideArticleBodyProps {
  sections: ArticleSection[];
}

export const GuideArticleBody: React.FC<GuideArticleBodyProps> = ({ sections }) => {
  return (
    <div className="prose prose-slate max-w-none space-y-12 text-brand-text">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28 space-y-5"
          aria-labelledby={`heading-${section.id}`}
        >
          <h2
            id={`heading-${section.id}`}
            className="font-heading font-bold text-2xl sm:text-[26px] text-brand-navy leading-snug pt-4 border-t border-brand-navy/10 first:border-t-0 first:pt-0"
          >
            {section.heading}
          </h2>

          <div className="space-y-4 font-sans text-base sm:text-[17px] leading-[1.75] text-brand-text/85">
            {section.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {section.bulletPoints && section.bulletPoints.length > 0 && (
            <div className="p-5 sm:p-6 bg-brand-champagne/20 rounded-sm border border-brand-navy/10 space-y-2.5 my-4">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-navy block mb-1">
                Statutory Summary Points
              </span>
              <ul className="space-y-2 list-none p-0 m-0">
                {section.bulletPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text/90 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
