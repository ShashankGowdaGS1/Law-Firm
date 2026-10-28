import React, { useState } from "react";
import { Container } from "@/components/ui";
import { siteConfig } from "@/config/siteConfig";
import { PRACTICE_CATEGORIES } from "@/data/services/servicesData";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldAlert,
  Send,
  AlertCircle,
  ExternalLink,
  Info
} from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  privacyConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  category?: string;
  message?: string;
  privacyConsent?: string;
}

export const ContactChannelsSection: React.FC = () => {
  // Controlled form state
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    privacyConsent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionNotice, setSubmissionNotice] = useState<{
    type: "info" | "error";
    message: string;
    mailtoUrl?: string;
  } | null>(null);

  // Configuration check: No server-side transmission endpoint is configured in this Vite frontend
  const IS_BACKEND_CONFIGURED = false;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a brief message regarding your general enquiry.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message should be at least 15 characters to provide context.";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Please acknowledge that an initial enquiry does not create an advocate-client relationship.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear specific field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionNotice(null);

    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    if (!IS_BACKEND_CONFIGURED) {
      // Backend is not configured. As required by prompt:
      // Do not fake a successful network call.
      // Generate a structured mailto link using the user's verified input.
      const subject = encodeURIComponent(
        `Legal Enquiry: ${formData.category || "General"} — ${formData.fullName}`
      );
      const body = encodeURIComponent(
        `Chambers of Legal Counsel\n\n` +
          `Sender: ${formData.fullName}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone || "Not provided"}\n` +
          `Matter Category: ${formData.category || "General Legal Communication"}\n\n` +
          `Enquiry Summary:\n${formData.message}\n\n` +
          `---\n[Notice: Submitted via website direct registry draft. Confirmed no confidential documents attached.]`
      );

      const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmissionNotice({
          type: "info",
          message:
            "Direct web transmission requires server-side API integration. Your enquiry details have been formatted for transmission via your mail client to the Chambers Registry.",
          mailtoUrl
        });
      }, 350);
      return;
    }
  };

  // Check if contact items are pending verification
  const isAddressPending = siteConfig.contact.address.line1.includes("[");
  const isPhonePending = siteConfig.contact.phone.includes("[");

  return (
    <section
      id="contact-channels"
      aria-label="Contact Channels and Professional Enquiry"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-brand-navy/10 text-brand-text scroll-mt-28"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Verified Contact Channels & Procedural Safeguards (~42%) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Section Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-brand-gold inline-block" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-indigo">
                  Official Channels
                </span>
              </div>

              {/* Subheading */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[32px] leading-tight text-brand-navy mb-4">
                Chambers Registry &amp; Communications
              </h2>

              <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-text/75 mb-8">
                Professional communications, court hearing coordination, and general
                matter inquiries may be directed through the firm&apos;s designated registry.
              </p>

              {/* Editorial Contact Information Rows */}
              <div className="border-t border-brand-navy/10 divide-y divide-brand-navy/10 mb-8">
                {/* 01 — EMAIL */}
                <div className="py-4 flex items-start gap-3.5">
                  <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-navy shrink-0 mt-0.5 border border-brand-navy/10">
                    <Mail className="w-4 h-4 text-brand-indigo" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-brand-indigo mb-0.5">
                      Professional Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-sans text-sm sm:text-base font-semibold text-brand-navy hover:text-brand-indigo transition-colors break-all inline-flex items-center gap-1.5 group"
                    >
                      <span>{siteConfig.contact.email}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                    </a>
                    <p className="font-sans text-xs text-brand-text/65 mt-0.5">
                      Chambers registry inbox for formal matter correspondence
                    </p>
                  </div>
                </div>

                {/* 02 — TELEPHONE */}
                <div className="py-4 flex items-start gap-3.5">
                  <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-navy shrink-0 mt-0.5 border border-brand-navy/10">
                    <Phone className="w-4 h-4 text-brand-indigo" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-brand-indigo mb-0.5">
                      Chambers Telephone
                    </span>
                    {isPhonePending ? (
                      <div>
                        <span className="font-sans text-sm sm:text-base font-semibold text-brand-navy">
                          Chambers Registry Line
                        </span>
                        <span className="inline-block ml-2 px-2 py-0.5 text-[10px] font-medium bg-amber-50 text-amber-800 rounded border border-amber-200">
                          Direct Line Verification Pending
                        </span>
                      </div>
                    ) : (
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="font-sans text-sm sm:text-base font-semibold text-brand-navy hover:text-brand-indigo transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    )}
                    <p className="font-sans text-xs text-brand-text/65 mt-0.5">
                      Available during designated registry hours for hearing listings
                    </p>
                  </div>
                </div>

                {/* 03 — OFFICE ADDRESS */}
                <div className="py-4 flex items-start gap-3.5">
                  <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-navy shrink-0 mt-0.5 border border-brand-navy/10">
                    <MapPin className="w-4 h-4 text-brand-indigo" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-brand-indigo mb-0.5">
                      Primary Chambers
                    </span>
                    {isAddressPending ? (
                      <div>
                        <p className="font-sans text-sm font-semibold text-brand-navy">
                          Chambers of Legal Counsel
                        </p>
                        <p className="font-sans text-xs text-brand-text/75 mt-0.5">
                          High Court &amp; Appellate Chambers Precinct
                        </p>
                        <p className="font-sans text-[11px] text-brand-text/60 italic mt-0.5">
                          Specific chamber address provided upon scheduled consultation confirmation
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-sans text-sm font-semibold text-brand-navy">
                          {siteConfig.contact.address.line1}
                        </p>
                        <p className="font-sans text-xs text-brand-text/75">
                          {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                          {siteConfig.contact.address.postalCode}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* 04 — HOURS */}
                <div className="py-4 flex items-start gap-3.5">
                  <div className="p-2 rounded-xs bg-brand-navy/5 text-brand-navy shrink-0 mt-0.5 border border-brand-navy/10">
                    <Clock className="w-4 h-4 text-brand-indigo" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-brand-indigo mb-0.5">
                      Registry &amp; Consultation Hours
                    </span>
                    <p className="font-sans text-sm text-brand-navy font-medium">
                      {siteConfig.contact.officeHours}
                    </p>
                    <p className="font-sans text-xs text-brand-text/65 mt-0.5">
                      Saturday consultations by prior arrangement only
                    </p>
                  </div>
                </div>
              </div>

              {/* Preliminary Enquiry & Confidentiality Notice Box */}
              <div className="p-4 sm:p-5 rounded-xs bg-[#F9F7F4] border border-brand-navy/15">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy mb-1">
                      Preliminary Enquiry Notice
                    </h3>
                    <p className="font-sans text-xs leading-relaxed text-brand-text/80">
                      Please avoid sharing confidential or sensitive matter details through an initial
                      website enquiry. Contacting the firm does not by itself establish an advocate-client
                      relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Enquiry Form (~58%) */}
          <div className="lg:col-span-7 bg-[#F9F7F4] p-6 sm:p-8 lg:p-9 rounded-sm border border-brand-navy/15 shadow-sm">
            {/* Form Header */}
            <div className="border-b border-brand-navy/10 pb-5 mb-6">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-indigo block mb-1">
                Matter Inquiry Protocol
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy">
                Submit a Professional Enquiry
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-text/75 mt-1.5 leading-relaxed">
                Provide preliminary details regarding your general area of enquiry. Privileged
                materials should not be submitted prior to formal engagement clearance.
              </p>
            </div>

            {/* Submission Status Alert (Truthful, No Fake Success) */}
            {submissionNotice && (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 p-4 rounded-xs border text-xs leading-relaxed transition-all bg-brand-navy/5 border-brand-navy/20 text-brand-navy"
              >
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Notice on Transmission Protocol</p>
                    <p className="text-brand-text/80 mb-3">{submissionNotice.message}</p>
                    {submissionNotice.mailtoUrl && (
                      <a
                        href={submissionNotice.mailtoUrl}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy text-white font-sans text-xs font-semibold rounded-xs hover:bg-brand-indigo transition-colors shadow-xs"
                      >
                        <Mail className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Launch Mail Application with this Enquiry</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Accessible Enquiry Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row 1: Full Name & Email Address (Desktop 2-col) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 01 — Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-sans text-xs font-semibold text-brand-navy mb-1.5"
                  >
                    Full Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    placeholder="e.g. Rameshwar Gupta"
                    className={`w-full h-11 px-3.5 rounded-xs bg-white border text-sm text-brand-navy placeholder:text-brand-text/40 transition-colors focus:outline-none ${
                      errors.fullName
                        ? "border-red-600 focus:border-red-700 focus:ring-1 focus:ring-red-600"
                        : "border-brand-navy/20 focus:border-brand-navy focus:ring-1 focus:ring-brand-gold/60"
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-1 text-xs text-red-700 font-medium flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* 02 — Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs font-semibold text-brand-navy mb-1.5"
                  >
                    Email Address <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="e.g. counsel@clientdomain.com"
                    className={`w-full h-11 px-3.5 rounded-xs bg-white border text-sm text-brand-navy placeholder:text-brand-text/40 transition-colors focus:outline-none ${
                      errors.email
                        ? "border-red-600 focus:border-red-700 focus:ring-1 focus:ring-red-600"
                        : "border-brand-navy/20 focus:border-brand-navy focus:ring-1 focus:ring-brand-gold/60"
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-xs text-red-700 font-medium flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone Number & General Enquiry Category (Desktop 2-col) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 03 — Phone Number (Optional) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs font-semibold text-brand-navy mb-1.5"
                  >
                    Telephone Number <span className="text-brand-text/50 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full h-11 px-3.5 rounded-xs bg-white border border-brand-navy/20 text-sm text-brand-navy placeholder:text-brand-text/40 transition-colors focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-gold/60"
                  />
                </div>

                {/* 04 — General Enquiry Category (Derived from canonical practice data) */}
                <div>
                  <label
                    htmlFor="category"
                    className="block font-sans text-xs font-semibold text-brand-navy mb-1.5"
                  >
                    General Practice Category <span className="text-brand-text/50 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-xs bg-white border border-brand-navy/20 text-sm text-brand-navy transition-colors focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-gold/60"
                  >
                    <option value="">Select Practice Classification...</option>
                    {PRACTICE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.title}>
                        {cat.title}
                      </option>
                    ))}
                    <option value="General Corporate / Other">
                      General Legal Communications / Other
                    </option>
                  </select>
                </div>
              </div>

              {/* 05 — Brief Message (Required) */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-xs font-semibold text-brand-navy mb-1.5"
                >
                  Brief Summary of Enquiry <span className="text-red-700">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Please state the general nature of your enquiry (e.g. commercial contract review or High Court arbitration listing). Do not paste confidential documents."
                  className={`w-full p-3.5 rounded-xs bg-white border text-sm text-brand-navy placeholder:text-brand-text/40 transition-colors focus:outline-none resize-y ${
                    errors.message
                      ? "border-red-600 focus:border-red-700 focus:ring-1 focus:ring-red-600"
                      : "border-brand-navy/20 focus:border-brand-navy focus:ring-1 focus:ring-brand-gold/60"
                  }`}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-xs text-red-700 font-medium flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
                <p className="mt-1 font-sans text-[11px] text-brand-text/60">
                  Please do not transmit privileged case files, financial credentials, or identity proofs.
                </p>
              </div>

              {/* 06 — Privacy & Engagement Acknowledgment Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    aria-invalid={!!errors.privacyConsent}
                    aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined}
                    className="mt-1 w-4 h-4 rounded-xs border-brand-navy/30 text-brand-navy focus:ring-brand-gold accent-brand-navy"
                  />
                  <span className="font-sans text-xs text-brand-text/80 leading-relaxed">
                    I understand that submitting this enquiry does not create an advocate-client
                    relationship or impose any fiduciary obligation on the firm until a formal letter of
                    engagement has been executed. <span className="text-red-700">*</span>
                  </span>
                </label>
                {errors.privacyConsent && (
                  <p
                    id="privacyConsent-error"
                    className="mt-1 text-xs text-red-700 font-medium flex items-center gap-1 ml-6"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.privacyConsent}</span>
                  </p>
                )}
              </div>

              {/* Form Action Controls */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-brand-navy/10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-6 h-11 rounded-xs bg-brand-navy text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs hover:bg-brand-indigo active:bg-brand-navy transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5 text-brand-gold transition-transform duration-200 group-hover:translate-x-0.5" />
                  <span>{isSubmitting ? "Processing..." : "Submit Enquiry"}</span>
                </button>

                <div className="flex items-center gap-1.5 text-[11px] font-sans text-brand-text/60">
                  <Clock className="w-3.5 h-3.5 text-brand-indigo shrink-0" />
                  <span>Enquiries processed during formal registry hours</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
