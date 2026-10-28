import React from "react";


interface ConsiderationItem {
  number: string;
  title: string;
  description: string;
  statutoryNote: string;
}

const CONSIDERATIONS: ConsiderationItem[] = [
  {
    number: "01",
    title: "Legal Research & Precedent Analysis",
    description:
      "Statutory provisions and judicial decisions evolve continuously. Every legal matter demands fresh statutory verification against recent High Court and Supreme Court rulings to ensure that legal advice remains accurate and current.",
    statutoryNote: "Judicial Precedent & Statutory Rules of Construction",
  },
  {
    number: "02",
    title: "Documentation & Evidentiary Diligence",
    description:
      "A successful legal position relies on an organized evidentiary record. Systematic review of primary contracts, corporate resolutions, correspondence trails, and notices must be undertaken prior to initiating formal legal steps.",
    statutoryNote: "Indian Evidence Act / Bharatiya Sakshya Adhiniyam standards",
  },
  {
    number: "03",
    title: "Professional Responsibilities & Ethical Standards",
    description:
      "Advocates owe undivided professional duties to the court and to the client within the framework of the law. Matters proceed with transparent communication regarding procedural realities, potential costs, and alternative dispute avenues.",
    statutoryNote: "Bar Council of India Rules on Professional Conduct & Etiquette",
  },
  {
    number: "04",
    title: "Matter-Specific Procedural Considerations",
    description:
      "Different legal forums—including civil courts, company law tribunals, and arbitral panels—follow distinct procedural timelines, registry rules, and limitation requirements that dictate the pacing and structure of an engagement.",
    statutoryNote: "Civil Procedure Code, Commercial Courts Act, & Tribunal Rules",
  },
];

export const WorkConsiderationsSection: React.FC = () => {
  return (
    <section
      aria-label="Professional Considerations in Legal Practice"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-brand-navy/10 text-brand-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-brand-gold inline-block" />
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-brand-indigo">
              ETHICAL &amp; PROCEDURAL STANDARDS
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-brand-navy">
            Professional Considerations in Legal Work.
          </h2>

          <p className="font-sans text-base sm:text-lg text-brand-text/80 leading-relaxed mt-3">
            Core principles that govern how matters are evaluated, researched, and handled across chambers.
          </p>
        </div>

        {/* Numbered Editorial List with Thin Separators (No Cards) */}
        <div className="divide-y divide-brand-navy/15 border-t border-b border-brand-navy/15">
          {CONSIDERATIONS.map((item) => (
            <div
              key={item.number}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
            >
              {/* Left: Two-Digit Index (~20%) */}
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-indigo/30 group-hover:text-brand-indigo transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Middle: Title & Body (~70%) */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy">
                  {item.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-brand-text/80 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Right: Statutory Framework Reference (~30%) */}
              <div className="lg:col-span-3 lg:text-right pt-1 lg:pt-0">
                <span className="font-mono text-xs text-brand-indigo font-semibold bg-brand-champagne/30 px-3 py-1.5 rounded-sm inline-block border border-brand-navy/10">
                  {item.statutoryNote}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
