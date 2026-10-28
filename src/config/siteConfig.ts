/**
 * Centralized Firm Identity & Publication Safeguards Configuration
 *
 * NOTE: In accordance with Bar Council of India guidelines, all firm data,
 * advocate details, court representations, and office locations will be verified
 * prior to public deployment. Fictional credentials or promotional superiority claims
 * are strictly prohibited.
 */

export interface SiteConfig {
  identity: {
    firmName: string;
    descriptor: string;
    jurisdiction: string;
    establishmentYear: string;
  };
  contact: {
    phone: string;
    email: string;
    officeHours: string;
    address: {
      line1: string;
      city: string;
      state: string;
      postalCode: string;
    };
  };
  regulatory: {
    bciDisclaimer: string;
    status: "development" | "approved";
  };
  // Flat legacy convenience properties
  firmName: string;
  subTitle: string;
  bciDisclaimer: {
    title: string;
    notice: string;
  };
}

export const siteConfig: SiteConfig = {
  identity: {
    firmName: "[FIRM NAME]",
    descriptor: "Advocates & Legal Consultants",
    jurisdiction: "Civil, Commercial & Appellate Forums",
    establishmentYear: "2026"
  },
  contact: {
    phone: "+91 [TEL PENDING VERIFICATION]",
    email: "chambers@firmplaceholder.in",
    officeHours: "Monday to Friday: Formal Enquiries by Designated Channels",
    address: {
      line1: "[Chambers Address Pending Verification]",
      city: "[City]",
      state: "[State]",
      postalCode: "[Pin]"
    }
  },
  regulatory: {
    bciDisclaimer:
      "As per the rules of the Bar Council of India, advocates and law firms are not permitted to solicit work or advertise. The information provided on this website is made available solely for informational and educational purposes upon request. It does not constitute legal advice or establish an advocate-client relationship.",
    status: "development"
  },
  firmName: "[FIRM NAME]",
  subTitle: "Advocates & Legal Consultants",
  bciDisclaimer: {
    title: "Statutory Regulatory Disclosure — Bar Council of India",
    notice:
      "As per the rules of the Bar Council of India, advocates and law firms are not permitted to solicit work or advertise. The information provided on this website is made available solely for informational and educational purposes upon request. It does not constitute legal advice or establish an advocate-client relationship."
  }
};

export const SITE_CONFIG = siteConfig;
