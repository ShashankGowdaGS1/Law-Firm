import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PracticeLinkItem {
  number: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
}

const FEATURED_PRACTICES: PracticeLinkItem[] = [
  {
    number: "01",
    title: "Corporate Governance & Commercial Advisory",
    slug: "corporate-advisory",
    category: "Corporate & Commercial",
    summary: "Director duties, shareholder agreements, corporate restructuring, and statutory filings under the Companies Act, 2013.",
  },
  {
    number: "02",
    title: "Commercial Litigation & Dispute Resolution",
    slug: "commercial-disputes",
    category: "Dispute Resolution",
    summary: "Commercial suits, contractual breaches, interim injunctions, and appellate advocacy before High Courts and tribunals.",
  },
  {
    number: "03",
    title: "Domestic & International Arbitration",
    slug: "arbitration",
    category: "Dispute Resolution",
    summary: "Institutional and ad-hoc arbitral proceedings, Section 9 interim measures, challenge to arbitral awards, and enforcement.",
  },
  {
    number: "04",
    title: "Regulatory Compliance & Statutory Diligence",
    slug: "regulatory-compliance",
    category: "Regulatory & Specialized",
    summary: "Statutory environmental, labor, industrial licenses, foreign direct investment compliances, and sectoral regulator liaison.",
  },
];

export const TeamPracticeGroupsSection: React.FC = () => {
  return (
    <section
      aria-label="Practice Groups and Published Practice Areas"
      className="py-16 sm:py-20 lg:py-24 bg-brand-navy text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Large Editorial Heading (~45%) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-gold block">
                PRACTICE DOMAINS
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-white mt-2">
                Explore the Areas of Practice.
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-white/85 max-w-lg">
              Find information about the firm&apos;s published practice areas and related legal services.
            </p>

            <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/70 max-w-lg">
              Our advocates and counsel collaborate across dedicated statutory disciplines, delivering disciplined legal opinions, precision drafting, and robust courtroom advocacy.
            </p>

            <div className="pt-2">
              <Link
                to="/legal-services"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-gold text-brand-navy text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors"
              >
                <span>Complete Practice Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Clean Vertical Practice-Area Index Derived from Published Data (~55%) */}
          <div className="lg:col-span-7 divide-y divide-white/15 border-t border-b border-white/15">
            {FEATURED_PRACTICES.map((item) => (
              <Link
                key={item.slug}
                to={`/legal-services/${item.slug}`}
                className="group py-6 block transition-colors hover:bg-white/5 px-2 -mx-2 rounded-sm no-underline hover:no-underline focus-visible:no-underline"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-brand-gold no-underline">
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-brand-gold/80 no-underline">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-brand-gold group-hover:underline group-focus-visible:underline decoration-1 underline-offset-4 transition-colors mt-0.5">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mt-1 max-w-xl no-underline">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 p-2 text-white/40 group-hover:text-brand-gold group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
