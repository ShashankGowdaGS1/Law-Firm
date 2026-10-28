import React from "react";
import { cn } from "@/utils/cn";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "display" | "h1" | "h2" | "h3" | "h4" | "h5";
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  size,
  className,
  children,
  ...props
}) => {
  const resolvedSize = size || (Component as "h1" | "h2" | "h3" | "h4" | "h5");

  const sizeClasses: Record<string, string> = {
    display: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.15]",
    h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.2]",
    h2: "text-xl sm:text-2xl md:text-3xl font-heading font-semibold tracking-tight leading-[1.25]",
    h3: "text-lg sm:text-xl md:text-2xl font-heading font-semibold leading-[1.3]",
    h4: "text-base sm:text-lg md:text-xl font-heading font-semibold leading-[1.35]",
    h5: "text-sm sm:text-base font-heading font-semibold leading-snug"
  };

  return (
    <Component
      className={cn("text-brand-text", sizeClasses[resolvedSize], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg" | "lead";
  muted?: boolean;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = "base",
  muted = false,
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: "text-xs sm:text-sm leading-relaxed",
    base: "text-sm sm:text-base leading-relaxed",
    lg: "text-base sm:text-lg leading-relaxed",
    lead: "text-lg sm:text-xl font-normal leading-relaxed"
  };

  return (
    <p
      className={cn(
        "font-sans",
        muted ? "text-brand-text/75" : "text-brand-text",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-indigo",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
