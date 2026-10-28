import React from "react";
import { Link } from "react-router-dom";
import { LegalGuide } from "@/data/guides/guidesData";
import { ChevronRight, Clock, ShieldCheck } from "lucide-react";

interface GuideHeaderProps {
  guide: LegalGuide;
}

export const GuideHeader: React.FC<GuideHeaderProps> = ({ guide }) => {
  return (
    <header className="pt-28 pb-12 sm:pb-16 bg-warm-white border-b border-brand-navy/10 text-brand-text">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-text/60">
          <Link to="/" className="hover:text-brand-indigo transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-text/30" />
          <Link to="/legal-guides" className="hover:text-brand-indigo transition-colors">
            Legal Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-text/30" />
          <span className="text-brand-navy font-semibold truncate max-w-xs sm:max-w-md" aria-current="page">
            {guide.title}
          </span>
        </nav>

        {/* Metadata Chips: Category, Date, Read Time */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-brand-text/75 pt-1">
          <span className="px-2.5 py-0.5 rounded bg-brand-navy text-brand-gold text-[11px] font-sans font-bold uppercase tracking-wider">
            {guide.category}
          </span>
          <span className="text-brand-navy/30">&bull;</span>
          <span className="font-sans font-semibold text-brand-indigo">
            {guide.topicTag}
          </span>
          <span className="text-brand-navy/30">&bull;</span>
          <span className="flex items-center gap-1 font-mono text-xs">
            <Clock className="w-3.5 h-3.5 text-brand-indigo" />
            {guide.readTime}
          </span>
          <span className="text-brand-navy/30">&bull;</span>
          <span className="text-brand-text/60 font-sans">
            Published {guide.publishedDate}
          </span>
        </div>

        {/* Article Title (H1) */}
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.18] tracking-tight text-brand-navy">
          {guide.title}
        </h1>

        {/* Executive Excerpt */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-brand-text/85 leading-relaxed font-normal max-w-3xl">
          {guide.excerpt}
        </p>

        {/* Attribution & Ethical Standard Bar */}
        <div className="pt-4 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-text/65">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="font-sans font-medium text-brand-navy">{guide.authorNote}</span>
          </div>

          <div className="flex items-center gap-1.5 text-brand-indigo font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-indigo" />
            <span>Advocates Act Educational Guidelines</span>
          </div>
        </div>
      </div>
    </header>
  );
};
