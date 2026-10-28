import React from "react";
import { cn } from "@/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  background?: "default" | "off-white" | "navy" | "indigo" | "champagne";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  as: Component = "section",
  background = "default",
  padding = "lg",
  className,
  children,
  ...props
}) => {
  const bgStyles = {
    default: "bg-white text-brand-text",
    "off-white": "bg-brand-off-white text-brand-text",
    navy: "bg-brand-navy text-white",
    indigo: "bg-brand-indigo text-white",
    champagne: "bg-brand-champagne/25 text-brand-text"
  };

  const paddingStyles = {
    none: "py-0",
    sm: "py-6 sm:py-8",
    md: "py-10 sm:py-14",
    lg: "py-14 sm:py-20 lg:py-24",
    xl: "py-20 sm:py-28 lg:py-32"
  };

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden",
        bgStyles[background],
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
