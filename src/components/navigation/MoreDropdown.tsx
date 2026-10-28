import React from "react";
import { Link } from "@/components/ui";
import { Briefcase, FileText, ShieldAlert, ChevronRight } from "lucide-react";

export interface MoreDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MORE_LINKS = [
  {
    title: "Our Work",
    href: "/our-work",
    icon: Briefcase
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    icon: FileText
  },
  {
    title: "Legal Disclaimer",
    href: "/legal-disclaimer",
    icon: ShieldAlert
  }
];

export const MoreDropdown: React.FC<MoreDropdownProps> = ({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Additional Information Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full right-0 w-64 bg-white border border-brand-navy/15 rounded-b-sm shadow-xl z-50 py-1.5 transition-all duration-150 animate-in fade-in slide-in-from-top-1"
    >
      <div className="divide-y divide-brand-navy/10">
        {MORE_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between px-4 py-3 hover:bg-brand-champagne/25 active:bg-brand-champagne/40 transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon className="w-4 h-4 text-brand-indigo shrink-0 group-hover:text-brand-navy transition-colors" />
                <span className="font-sans text-sm font-semibold text-brand-navy group-hover:text-brand-indigo transition-colors truncate">
                  {item.title}
                </span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-brand-navy/30 group-hover:text-brand-indigo group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
