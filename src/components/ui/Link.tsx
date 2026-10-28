import React from "react";
import { Link as RouterLink, NavLink as RouterNavLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { cn } from "@/utils/cn";

export interface CustomLinkProps extends Omit<RouterLinkProps, "to"> {
  href: string;
  variant?: "primary" | "subtle" | "standalone" | "button" | "card";
  buttonVariant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  isNavLink?: boolean;
  children: React.ReactNode;
}

export const Link: React.FC<CustomLinkProps> = ({
  href,
  variant = "primary",
  buttonVariant = "primary",
  isNavLink = false,
  className,
  children,
  ...props
}) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");

  const variantStyles = {
    primary: "text-brand-navy hover:text-brand-indigo underline-offset-4 hover:underline font-medium",
    subtle: "text-brand-text/75 hover:text-brand-navy transition-colors no-underline hover:no-underline focus-visible:no-underline",
    card: "no-underline hover:no-underline focus-visible:no-underline transition-all",
    standalone: "inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-indigo underline-offset-4 hover:underline",
    button: cn(
      "inline-flex items-center justify-center font-sans text-sm px-5 py-2.5 rounded-sm gap-2 font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      buttonVariant === "primary" && "bg-brand-navy text-white hover:bg-brand-indigo active:bg-brand-navy shadow-sm focus-visible:ring-brand-indigo",
      buttonVariant === "secondary" && "bg-brand-indigo text-white hover:bg-brand-navy active:bg-brand-indigo shadow-sm focus-visible:ring-brand-navy",
      buttonVariant === "gold" && "bg-brand-gold text-brand-text hover:bg-brand-gold/90 font-semibold shadow-sm focus-visible:ring-brand-gold",
      buttonVariant === "outline" && "border border-brand-navy/20 bg-transparent text-brand-navy hover:bg-brand-navy/5 focus-visible:ring-brand-navy",
      buttonVariant === "ghost" && "bg-transparent text-brand-navy hover:bg-brand-navy/5 focus-visible:ring-brand-navy"
    )
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(variantStyles[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (isNavLink) {
    return (
      <RouterNavLink
        to={href}
        className={({ isActive }) =>
          cn(
            variantStyles[variant],
            isActive && "text-brand-navy font-semibold",
            className
          )
        }
        {...props}
      >
        {children}
      </RouterNavLink>
    );
  }

  return (
    <RouterLink
      to={href}
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </RouterLink>
  );
};
