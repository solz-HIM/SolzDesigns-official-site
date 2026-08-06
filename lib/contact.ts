import { SITE } from "@/lib/site";

/**
 * Contact link builders.
 *
 * The number and address come from lib/site.ts rather than being repeated
 * here. They were duplicated, which is the exact drift that breaks local SEO:
 * change the phone number in one place and the site quietly shows two
 * different numbers to customers and to Google.
 */

export function getEmailUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${SITE.email}?${query}` : `mailto:${SITE.email}`;
}

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

function getServiceInquiryMessage(title: string, price: string): string {
  return `Hi Solz Designs! I'm interested in your "${title}" service (${price}). Could you share more details?`;
}

export function getServiceWhatsAppUrl(title: string, price: string): string {
  return getWhatsAppUrl(getServiceInquiryMessage(title, price));
}

export const CONTACT_MESSAGE =
  "Hi Solz Designs! I'd like to get in touch about working together.";

export const QUOTE_MESSAGE =
  "Hi Solz Designs! I'd like to get a quote for a project.";
