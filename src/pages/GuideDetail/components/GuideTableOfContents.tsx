import React, { useState, useEffect } from "react";
import { ArticleSection } from "@/data/guides/guidesData";
import { ListOrdered, ChevronDown } from "lucide-react";

interface GuideTableOfContentsProps {
  sections: ArticleSection[];
}

export const GuideTableOfContents: React.FC<GuideTableOfContentsProps> = ({ sections }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(sections[0]?.id || "");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSectionId(id);
      setIsOpenMobile(false);
    }
  };

  if (sections.length < 2) return null;

  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE COLLAPSIBLE DISCLOSURE: "On This Page"                             */}
      {/* ========================================================================= */}
      <div className="lg:hidden mb-8 p-4 bg-white border border-brand-navy/15 rounded-sm shadow-sm">
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          aria-expanded={isOpenMobile}
          className="w-full flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-brand-navy"
        >
          <div className="flex items-center gap-2">
            <ListOrdered className="w-4 h-4 text-brand-indigo" />
            <span>Table of Contents ({sections.length} Sections)</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-brand-indigo transition-transform ${
              isOpenMobile ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpenMobile && (
          <nav aria-label="Mobile Table of Contents" className="pt-4 border-t border-brand-navy/10 mt-3 space-y-2">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`block text-xs py-1 transition-colors ${
                  activeSectionId === sec.id
                    ? "font-bold text-brand-indigo pl-2 border-l-2 border-brand-indigo"
                    : "text-brand-text/75 hover:text-brand-navy"
                }`}
              >
                {sec.heading}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP STICKY SIDEBAR TABLE OF CONTENTS                                  */}
      {/* ========================================================================= */}
      <aside
        aria-label="Article Table of Contents"
        className="hidden lg:block sticky top-28 self-start space-y-4 pr-6"
      >
        <div className="flex items-center gap-2 pb-2 border-b border-brand-navy/10 text-xs font-bold uppercase tracking-wider text-brand-navy">
          <ListOrdered className="w-3.5 h-3.5 text-brand-indigo" />
          <span>In This Guide</span>
        </div>

        <nav aria-label="Table of Contents" className="space-y-2 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brand-navy/10 -z-0" />

          {sections.map((sec) => {
            const isActive = activeSectionId === sec.id;

            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`relative z-10 block text-xs leading-snug py-1 pl-4 transition-all ${
                  isActive
                    ? "font-bold text-brand-navy border-l-2 border-brand-gold -ml-[1px]"
                    : "text-brand-text/70 hover:text-brand-navy hover:pl-5"
                }`}
              >
                {sec.heading}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
