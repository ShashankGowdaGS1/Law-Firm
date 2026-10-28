import React from "react";
import { Container, Section, Heading, Text, Eyebrow, Link } from "@/components/ui";
import { siteConfig } from "@/config/siteConfig";
import { ArrowLeft, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface PagePlaceholderProps {
  pageTitle: string;
  routePath: string;
  category?: string;
  description?: string;
  parentPath?: string;
  parentLabel?: string;
  highlights?: string[];
  dynamicParam?: {
    name: string;
    value: string;
  };
}

export const PagePlaceholder: React.FC<PagePlaceholderProps> = ({
  pageTitle,
  routePath,
  category = "Development Scaffold",
  description,
  parentPath,
  parentLabel,
  highlights = [
    "Clean routing & architecture established",
    "Brand typography (Raleway & Plus Jakarta Sans) active",
    "Contemporary Legal Confidence palette configured",
    "Centralized data models & BCI regulatory safeguards connected"
  ],
  dynamicParam
}) => {
  return (
    <Section background="off-white" padding="xl" className="min-h-[70vh] flex items-center">
      <Container size="narrow">
        <div className="bg-white border border-brand-navy/10 rounded-sm p-6 sm:p-10 shadow-sm">
          {/* Breadcrumb / Back Navigation */}
          {parentPath && parentLabel ? (
            <div className="mb-6">
              <Link
                href={parentPath}
                variant="subtle"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-brand-navy/70 hover:text-brand-navy"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to {parentLabel}
              </Link>
            </div>
          ) : (
            <div className="mb-6">
              <Link
                href="/"
                variant="subtle"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-brand-navy/70 hover:text-brand-navy"
              >
                <Compass className="w-3.5 h-3.5" />
                Return to Overview
              </Link>
            </div>
          )}

          {/* Eyebrow & Category */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <Eyebrow>{category}</Eyebrow>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-brand-champagne/40 text-brand-navy">
              {routePath}
            </span>
          </div>

          {/* Heading */}
          <Heading as="h1" size="h1" className="mb-4">
            {pageTitle}
          </Heading>

          {/* Description */}
          <Text size="lead" muted className="mb-6">
            {description ||
              `This route is operational in the Phase 1 React architecture for ${siteConfig.identity.firmName}. Full section layouts, photorealistic imagery, and interactive content will be integrated during approved sequential prompts.`}
          </Text>

          {/* Dynamic parameter notice if applicable */}
          {dynamicParam && (
            <div className="mb-6 p-4 rounded-sm bg-brand-champagne/30 border border-brand-champagne">
              <p className="text-xs font-mono text-brand-text">
                <span className="font-semibold text-brand-navy">Dynamic Parameter ({dynamicParam.name}):</span>{" "}
                <span className="text-brand-indigo font-bold">{dynamicParam.value}</span>
              </p>
            </div>
          )}

          {/* Phase 1 Verification Checklist */}
          <div className="mb-8 pt-6 border-t border-brand-navy/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/80 mb-3 font-sans">
              Foundation Specifications
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-brand-text/80">
                  <CheckCircle2 className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Route Switcher / Links */}
          <div className="pt-6 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Link href="/" variant="button" buttonVariant="primary">
                Home
              </Link>
              <Link href="/about" variant="button" buttonVariant="outline">
                About
              </Link>
              <Link href="/legal-services" variant="button" buttonVariant="outline">
                Services
              </Link>
              <Link href="/our-team" variant="button" buttonVariant="outline">
                Team
              </Link>
              <Link href="/contact" variant="button" buttonVariant="gold">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-brand-text/60">
              <ShieldCheck className="w-4 h-4 text-brand-navy" />
              <span>Phase 1 Scaffolding</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
