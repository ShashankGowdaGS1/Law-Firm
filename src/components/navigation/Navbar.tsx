import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Link } from "@/components/ui";
import { siteConfig } from "@/config/siteConfig";
import { LegalServicesMegaMenu } from "./LegalServicesMegaMenu";
import { MoreDropdown } from "./MoreDropdown";
import { MobileNavigationDrawer } from "./MobileNavigationDrawer";
import { ChevronDown, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLElement | null>(null);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMoreOpen(false);
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Handle global Escape key and outside click to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        setIsMoreOpen(false);
        setIsMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
        setIsMoreOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Hover handlers for Legal Services with slight delay to prevent flickering
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setIsMoreOpen(false);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  // Hover handlers for More Dropdown
  const handleMoreMouseEnter = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(false);
    setIsMoreOpen(true);
  };

  const handleMoreMouseLeave = () => {
    moreTimeoutRef.current = setTimeout(() => {
      setIsMoreOpen(false);
    }, 150);
  };

  const isLegalServicesActive = location.pathname.startsWith("/legal-services");
  const isMoreActive =
    location.pathname === "/our-work" ||
    location.pathname === "/privacy-policy" ||
    location.pathname === "/legal-disclaimer";

  return (
    <header
      ref={navContainerRef}
      className="sticky top-0 z-50 w-full bg-white border-b border-brand-navy/10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    >
      <Container size="default">
        <div className="flex items-center justify-between h-20 lg:h-[84px]">
          {/* LEFT: Clean Typographic Wordmark (No generic scales icon) */}
          <Link
            href="/"
            variant="subtle"
            className="group flex flex-col justify-center text-left py-1"
          >
            <span className="font-heading font-bold text-lg sm:text-xl md:text-[22px] tracking-tight text-brand-navy group-hover:text-brand-indigo transition-colors leading-tight">
              {siteConfig.identity.firmName}
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-indigo mt-0.5 leading-none">
              Advocates & Legal Consultants
            </span>
          </Link>

          {/* CENTER: Desktop Navigation Menu */}
          <nav
            aria-label="Primary Chambers Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-brand-navy"
          >
            {/* Home */}
            <Link
              href="/"
              isNavLink
              variant="subtle"
              className="px-3 py-2 rounded-sm text-brand-navy/90 hover:text-brand-navy hover:bg-brand-off-white transition-colors relative"
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              isNavLink
              variant="subtle"
              className="px-3 py-2 rounded-sm text-brand-navy/90 hover:text-brand-navy hover:bg-brand-off-white transition-colors relative"
            >
              About Us
            </Link>

            {/* Legal Services Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsMoreOpen(false);
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="legal-services-mega-menu"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                  isServicesOpen || isLegalServicesActive
                    ? "text-brand-navy bg-brand-off-white font-semibold"
                    : "text-brand-navy/90 hover:text-brand-navy hover:bg-brand-off-white"
                }`}
              >
                <span>Legal Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-brand-indigo" : "text-brand-navy/60"
                  }`}
                />
              </button>

              {/* Compact Two-Column Legal Services Dropdown */}
              <LegalServicesMegaMenu
                isOpen={isServicesOpen}
                onClose={() => setIsServicesOpen(false)}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              />
            </div>

            {/* How We Work */}
            <Link
              href="/how-we-work"
              isNavLink
              variant="subtle"
              className="px-3 py-2 rounded-sm text-brand-navy/90 hover:text-brand-navy hover:bg-brand-off-white transition-colors"
            >
              How We Work
            </Link>

            {/* Our Team */}
            <Link
              href="/our-team"
              isNavLink
              variant="subtle"
              className="px-3 py-2 rounded-sm text-brand-navy/90 hover:text-brand-navy hover:bg-brand-off-white transition-colors"
            >
              Our Team
            </Link>

            {/* Legal Guides */}
            <Link
              href="/legal-guides"
              isNavLink
              variant="subtle"
              className="px-3 py-2 rounded-sm text-brand-navy/90 hover:text-brand-navy hover:bg-brand-off-white transition-colors"
            >
              Legal Guides
            </Link>

            {/* More Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMoreMouseEnter}
              onMouseLeave={handleMoreMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  setIsMoreOpen(!isMoreOpen);
                  setIsServicesOpen(false);
                }}
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                  isMoreOpen || isMoreActive
                    ? "text-brand-navy bg-brand-off-white font-semibold"
                    : "text-brand-navy/90 hover:text-brand-navy hover:bg-brand-off-white"
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMoreOpen ? "rotate-180 text-brand-indigo" : "text-brand-navy/60"
                  }`}
                />
              </button>

              {/* More Dropdown Menu */}
              <MoreDropdown
                isOpen={isMoreOpen}
                onClose={() => setIsMoreOpen(false)}
                onMouseEnter={handleMoreMouseEnter}
                onMouseLeave={handleMoreMouseLeave}
              />
            </div>
          </nav>

          {/* RIGHT: Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              variant="button"
              buttonVariant="primary"
              className="hidden sm:inline-flex !py-2.5 !px-5 !text-xs !font-semibold tracking-wider uppercase shadow-sm"
            >
              Contact the Firm
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileOpen}
              className="lg:hidden p-2 rounded-sm text-brand-navy hover:bg-brand-off-white transition-colors cursor-pointer"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <MobileNavigationDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  );
};
