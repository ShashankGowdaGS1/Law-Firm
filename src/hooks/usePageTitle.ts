import { useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

/**
 * Custom hook to update document title per route
 */
export function usePageTitle(title?: string): void {
  useEffect(() => {
    const baseTitle = `${siteConfig.identity.firmName} | ${siteConfig.identity.descriptor}`;
    if (title && title.trim().length > 0) {
      document.title = `${title} — ${siteConfig.identity.firmName}`;
    } else {
      document.title = baseTitle;
    }
  }, [title]);
}
