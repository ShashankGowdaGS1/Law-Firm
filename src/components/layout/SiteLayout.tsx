import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navigation";
import { SiteFooter } from "./SiteFooter";

export const SiteLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-off-white text-brand-text font-sans antialiased selection:bg-brand-gold/30 selection:text-brand-text">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-navy focus:text-white focus:outline-none focus:ring-2 focus:ring-brand-gold text-xs font-semibold uppercase tracking-wider"
      >
        Skip to main content
      </a>

      {/* Global Navigation Header with 3-Column Mega Menu */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Premium Global Site Footer */}
      <SiteFooter />
    </div>
  );
};
