import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getGuideBySlug, getApprovedGuides } from "@/data/guides/guidesData";
import {
  GuideHeader,
  GuideTableOfContents,
  GuideArticleBody,
  GuideReferences,
  GuideRelatedArticles,
} from "./components";
import { BookOpen, ArrowLeft, ShieldAlert } from "lucide-react";

export const GuideDetailPage: React.FC = () => {
  const { guideSlug } = useParams<{ guideSlug: string }>();
  const guide = guideSlug ? getGuideBySlug(guideSlug) : undefined;

  // Only published, approved articles are publicly accessible
  const isPublished = guide && guide.publicationStatus === "published" && !guide.isPlaceholder;

  const pageTitle = isPublished
    ? `${guide.title} | Chambers Legal Guides`
    : "Legal Guide Not Found | Chambers Legal Counsel";

  usePageTitle(pageTitle);

  // If missing or unpublished, render the project's proper Not Found state
  if (!isPublished) {
    return (
      <main className="min-h-[70vh] bg-warm-white py-20 lg:py-28 text-brand-text flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-brand-navy/5 text-brand-indigo mx-auto">
            <BookOpen className="w-8 h-8" />
          </div>

          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo block">
            ARTICLE RECORD UNAVAILABLE
          </span>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy">
            Legal Guide Not Found
          </h1>

          <p className="font-sans text-base sm:text-lg text-brand-text/80 max-w-xl mx-auto leading-relaxed">
            The requested publication does not exist, has been revised, or is currently pending formal professional review. All legal guides are published strictly upon formal verification.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-guides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-indigo transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Legal Guides Library</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-navy/20 text-brand-navy text-xs sm:text-sm font-semibold rounded-sm hover:bg-brand-navy/5 transition-colors"
            >
              <span>Contact Chambers Registry</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Find related approved publications (excluding current)
  const allApproved = getApprovedGuides();
  const relatedGuides = allApproved
    .filter((g) => g.id !== guide.id && (g.category === guide.category || guide.relatedGuideSlugs.includes(g.slug)))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-warm-white text-brand-text selection:bg-brand-gold/30 selection:text-brand-navy">
      {/* 01 — Article Header */}
      <GuideHeader guide={guide} />

      {/* 02 & 03 — Reading Layout Container */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Desktop Left Table of Contents (~30%) / Mobile Disclosure */}
            <div className="lg:col-span-4 xl:col-span-3">
              <GuideTableOfContents sections={guide.sections} />
            </div>

            {/* Center Main Article Body (~70%) */}
            <div className="lg:col-span-8 xl:col-span-9 max-w-3xl">
              {/* Article Content Sections */}
              <GuideArticleBody sections={guide.sections} />

              {/* 04 — Sources & References */}
              <GuideReferences sources={guide.sources} />

              {/* 05 — Related Legal Guides & Practice Connection */}
              <GuideRelatedArticles
                relatedGuides={relatedGuides}
                relatedPracticeSlug={guide.relatedPracticeSlug}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 06 — Educational Disclaimer Safeguard Notice */}
      <section
        aria-label="Legal Disclaimer Notice"
        className="py-10 bg-warm-white border-t border-brand-navy/10 text-brand-text"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 bg-amber-500/10 border-l-2 border-amber-600/70 rounded-r-sm space-y-2 text-xs text-amber-950/85">
            <div className="flex items-center gap-2 text-amber-900 font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>General Legal Information Disclaimer</span>
            </div>
            <p className="leading-relaxed">
              This publication is intended strictly for educational orientation and should not be relied upon as legal advice for any specific commercial or litigation matter. For professional legal advice tailored to your matter, contact our chambers registry to arrange a formal consultation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuideDetailPage;
