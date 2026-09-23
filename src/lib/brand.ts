/**
 * Centralized brand configuration for this template.
 *
 * Remixers: change the values here to rebrand the entire app — copy in
 * sidebar/topbar lockups, login screen, head meta, email templates,
 * onboarding copy, AI placeholders, etc. all read from BRAND.
 */
export const BRAND = {
  /** Full product name shown in lockups, titles, and email "from" lines. */
  name: "AvniSH",
  /** Short label for tight spaces (mobile nav, collapsed sidebar tooltips). */
  shortName: "AvniSH",
  /** One-line tagline used in headers and email footers. */
  tagline: "AvniSh",
  /** Short marketing description for meta tags and onboarding. */
  description:
    "Plan, launch, and track digital marketing campaigns end to end — launch checklists, standardized campaign names, UTM tracking links, and performance dashboards in one shared workspace.",
  /**
   * Placeholder domain used in example URLs (Commander AI input hints, etc.).
   * Keep this neutral — it should NOT match the email-sending domain.
   */
  domain: "example.com",
  /**
   * Optional support inbox surfaced in error/empty states.
   * Not set for this deployment — put a real address here to surface a
   * "Contact support" link in error and empty states.
   */
  supportEmail: undefined,
} as const;

export type Brand = typeof BRAND;
