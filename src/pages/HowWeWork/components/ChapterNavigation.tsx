import React, { useEffect, useState } from "react";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface ChapterItem {
  id: string;
  number: string;
  title: string;
  summary: string;
}

export const CHAPTER_ITEMS: ChapterItem[] = [
  {
    id: "stage-01",
    number: "01",
    title: "Initial Enquiry",
    summary: "Introductory context & preliminary discussion",
  },
  {
    id: "stage-02",
    number: "02",
    title: "Preliminary Review",
    summary: "Conflict clearance & matter suitability",
  },
  {
    id: "stage-03",
    number: "03",
    title: "Scope & Engagement",
    summary: "Agreed terms & formal authorization",
  },
  {
    id: "stage-04",
    number: "04",
    title: "Matter Handling",
    summary: "Procedural diligence & continuous updates",
  },
];

interface ChapterNavigationProps {
  activeChapterId: string;
  onChapterSelect?: (id: string) => void;
}

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  activeChapterId,
  onChapterSelect,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const activeIndex = Math.max(
    0,
    CHAPTER_ITEMS.findIndex((item) => item.id === activeChapterId)
  );

  // Smooth progress calculation across the journey section
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const section = document.getElementById("stages-narrative");
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const scrollPosition = window.scrollY + 180; // reading zone offset

        if (scrollPosition < sectionTop) {
          setScrollProgress(0);
        } else if (scrollPosition > sectionTop + sectionHeight) {
          setScrollProgress(100);
        } else {
          const progress = ((scrollPosition - sectionTop) / (sectionHeight - 200)) * 100;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 84;
      const topOffset = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

      window.scrollTo({
        top: topOffset,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      if (onChapterSelect) {
        onChapterSelect(id);
      }
    }
  };

  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE / TABLET NAVIGATOR (Horizontal compact bar at top)    */}
      {/* ============================================================ */}
      <div className="lg:hidden mb-8 pb-5 border-b border-brand-navy/10">
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-brand-indigo">
            The Legal Journey
          </span>
          <span className="font-mono text-xs text-brand-text/60">
            Stage {String(activeIndex + 1).padStart(2, "0")} of 04
          </span>
        </div>

        <nav aria-label="Process Chapter Index" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CHAPTER_ITEMS.map((item, idx) => {
            const isActive = activeChapterId === item.id;
            const isCompleted = idx < activeIndex;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group flex flex-col p-2.5 rounded-sm border transition-all text-left no-underline hover:no-underline focus-visible:no-underline ${
                  isActive
                    ? "bg-brand-navy text-white border-brand-navy shadow-sm ring-2 ring-brand-gold/40"
                    : isCompleted
                    ? "bg-brand-navy/5 text-brand-navy border-brand-navy/20"
                    : "bg-white text-brand-text/75 border-brand-navy/15 hover:border-brand-indigo/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold no-underline ${
                      isActive
                        ? "text-brand-gold"
                        : isCompleted
                        ? "text-brand-indigo font-bold"
                        : "text-brand-text/50"
                    }`}
                  >
                    {item.number}
                  </span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  ) : isCompleted ? (
                    <CheckCircle2 className="w-3 h-3 text-brand-indigo" />
                  ) : null}
                </div>
                <span
                  className={`font-heading font-bold text-xs mt-1.5 truncate ${
                    isActive
                      ? "text-white"
                      : "text-brand-navy group-hover:underline decoration-1 underline-offset-4"
                  }`}
                >
                  {item.title}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP NAVIGATOR (Sticky left vertical index)               */}
      {/* ============================================================ */}
      <aside
        aria-label="Process Chapter Index"
        className="hidden lg:block sticky top-[108px] self-start space-y-7 pr-2 xl:pr-4"
      >
        {/* Section Intro Heading */}
        <div className="space-y-1.5">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            PROCESS INDEX
          </span>
          <h3 className="font-heading font-bold text-lg xl:text-xl text-brand-navy">
            The Legal Journey
          </h3>
          <p className="font-sans text-xs text-brand-text/75 leading-relaxed">
            A structured four-stage progression from preliminary enquiry to matter execution.
          </p>
        </div>

        {/* Numbered Chapter Navigator List with Connected Progress Line */}
        <nav aria-label="Chapter Index Navigation" className="relative space-y-2">
          {/* Subtle vertical track line */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-brand-navy/15 -z-0"
          />

          {/* Gold progress fill line */}
          <div
            aria-hidden="true"
            style={{
              height: `${Math.max(scrollProgress, (activeIndex / 3) * 100)}%`,
            }}
            className={`absolute left-[15px] top-4 w-0.5 bg-brand-gold -z-0 ${
              prefersReducedMotion ? "" : "transition-[height] duration-300 ease-out"
            }`}
          />

          {CHAPTER_ITEMS.map((item, idx) => {
            const isActive = activeChapterId === item.id;
            const isCompleted = idx < activeIndex;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative z-10 flex items-start gap-3.5 p-2.5 xl:p-3 rounded-sm transition-all group no-underline hover:no-underline focus-visible:no-underline cursor-pointer ${
                  isActive
                    ? "bg-brand-navy/5 text-brand-navy font-semibold"
                    : "text-brand-text/75 hover:bg-brand-champagne/25"
                }`}
              >
                {/* Number Node */}
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-all duration-200 no-underline ${
                    isActive
                      ? "bg-brand-gold text-brand-navy ring-4 ring-brand-gold/25 shadow-xs"
                      : isCompleted
                      ? "bg-brand-indigo text-white"
                      : "bg-white border border-brand-navy/20 text-brand-navy/50 group-hover:border-brand-navy/40 group-hover:text-brand-navy"
                  }`}
                >
                  {item.number}
                </span>

                {/* Title & Short Subtitle */}
                <div className="min-w-0 pt-0.5">
                  <span
                    className={`font-heading text-sm block leading-tight ${
                      isActive
                        ? "font-bold text-brand-navy group-hover:underline decoration-1 underline-offset-4"
                        : "font-medium text-brand-text/70 group-hover:text-brand-navy group-hover:underline decoration-1 underline-offset-4"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`font-sans text-[11px] block mt-0.5 leading-snug no-underline ${
                      isActive ? "text-brand-indigo font-medium" : "text-brand-text/50"
                    }`}
                  >
                    {item.summary}
                  </span>
                </div>
              </a>
            );
          })}
        </nav>

        {/* Quick Link to Preliminary Checklist */}
        <div className="pt-2 border-t border-brand-navy/10">
          <a
            href="#enquiry-considerations"
            className="group text-[11px] font-sans font-bold uppercase tracking-wider text-brand-indigo hover:text-brand-navy inline-flex items-center gap-1.5 transition-colors no-underline"
          >
            <span className="group-hover:underline decoration-1 underline-offset-4">Preliminary Checklist</span>
            <ArrowDown className="w-3 h-3 text-brand-indigo transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </aside>
    </>
  );
};
