import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui";
import {
  PRACTICE_CATEGORIES,
  getServicesByCategory,
  PracticeCategory
} from "@/data/services/servicesData";
import { PracticeServiceRow } from "./PracticeServiceRow";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ChevronRight } from "lucide-react";

export const PracticeCategoryDirectory: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    PRACTICE_CATEGORIES[0].id
  );

  // Scrollspy to highlight active category in the sticky sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = PRACTICE_CATEGORIES.length - 1; i >= 0; i--) {
        const cat = PRACTICE_CATEGORIES[i];
        const el = document.getElementById(`category-${cat.id}`);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveCategoryId(cat.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const el = document.getElementById(`category-${categoryId}`);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }
  };

  return (
    <section
      id="services-directory"
      aria-label="Practice Areas Directory"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-brand-navy/10 text-brand-text overflow-hidden"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Sticky Desktop Category Navigator (~30% / Col 4) */}
          <aside className="lg:col-span-4 xl:col-span-4 self-start lg:sticky lg:top-28">
            <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-sm border border-brand-navy/15 shadow-sm">
              <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-brand-indigo block mb-2">
                Services Directory
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy mb-4 tracking-tight">
                Practice Verticals
              </h3>
              <p className="font-sans text-xs text-brand-text/75 leading-relaxed mb-6">
                Chambers counsel is structured across three core advisory and contentious domains.
              </p>

              {/* Category Link List */}
              <nav aria-label="Category Jump Navigation" className="space-y-2">
                {PRACTICE_CATEGORIES.map((cat: PracticeCategory) => {
                  const isActive = activeCategoryId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`w-full text-left p-3 rounded-sm transition-all duration-200 flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                        isActive
                          ? "bg-brand-navy text-white shadow-xs font-semibold"
                          : "hover:bg-white text-brand-navy"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`font-mono text-xs font-bold shrink-0 ${
                            isActive ? "text-brand-gold" : "text-brand-indigo"
                          }`}
                        >
                          {cat.index}
                        </span>
                        <span className="font-heading text-xs sm:text-[13px] tracking-tight truncate">
                          {cat.shortTitle}
                        </span>
                      </div>

                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isActive
                            ? "text-brand-gold translate-x-0.5"
                            : "text-brand-navy/40 group-hover:text-brand-navy group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Regulatory Safeguard Note */}
              <div className="mt-6 pt-4 border-t border-brand-navy/10 text-[11px] text-brand-text/60 leading-normal font-sans">
                Professional counsel governed by the Advocates Act and Bar Council of India guidelines.
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Three-Category Main Directory Sections (~70% / Col 8) */}
          <main className="lg:col-span-8 xl:col-span-8 space-y-16 sm:space-y-20">
            {PRACTICE_CATEGORIES.map((cat: PracticeCategory) => {
              const services = getServicesByCategory(cat.id);

              return (
                <div
                  key={cat.id}
                  id={`category-${cat.id}`}
                  className="scroll-mt-28 border-t-2 border-brand-navy/15 pt-8 sm:pt-10 first:border-t-0 first:pt-0"
                >
                  {/* Category Header */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-brand-gold px-2 py-0.5 bg-brand-navy rounded-sm">
                        CATEGORY {cat.index}
                      </span>
                      <span className="w-4 h-[1px] bg-brand-navy/20 inline-block" />
                      <span className="text-xs font-sans uppercase font-bold tracking-widest text-brand-indigo">
                        {cat.shortTitle}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight mb-3">
                      {cat.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-brand-text/75 leading-relaxed max-w-2xl">
                      {cat.description}
                    </p>
                  </div>

                  {/* Service Rows List */}
                  <div className="border-t border-brand-navy/10">
                    {services.map((service, sIdx) => (
                      <PracticeServiceRow
                        key={service.id}
                        service={service}
                        index={`${cat.index}.${sIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </main>
        </div>
      </Container>
    </section>
  );
};
