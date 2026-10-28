import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-brand-navy text-white hover:bg-brand-indigo active:bg-brand-navy shadow-sm focus-visible:ring-brand-indigo",
      secondary:
        "bg-brand-indigo text-white hover:bg-brand-navy active:bg-brand-indigo shadow-sm focus-visible:ring-brand-navy",
      gold:
        "bg-brand-gold text-brand-text hover:bg-brand-gold/90 active:bg-brand-gold font-semibold shadow-sm focus-visible:ring-brand-gold",
      outline:
        "border border-brand-navy/20 bg-transparent text-brand-navy hover:bg-brand-navy/5 active:bg-brand-navy/10 focus-visible:ring-brand-navy",
      ghost:
        "bg-transparent text-brand-navy hover:bg-brand-navy/5 active:bg-brand-navy/10 focus-visible:ring-brand-navy"
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-sm gap-1.5 font-medium",
      md: "text-sm px-5 py-2.5 rounded-sm gap-2 font-medium",
      lg: "text-base px-6 py-3 rounded-sm gap-2.5 font-semibold"
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center font-sans transition-colors duration-150 ease-in-out cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
