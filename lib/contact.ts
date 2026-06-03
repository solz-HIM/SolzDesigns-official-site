const WHATSAPP_NUMBER = "263778231792";
const EMAIL = "mcgyver8605@gmail.com";

export function getEmailUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${EMAIL}?${query}` : `mailto:${EMAIL}`;
}

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getServiceInquiryMessage(title: string, price: string): string {
  return `Hi Solz Designs! I'm interested in your "${title}" service (${price}). Could you share more details?`;
}

export function getServiceWhatsAppUrl(title: string, price: string): string {
  return getWhatsAppUrl(getServiceInquiryMessage(title, price));
}

export const GENERAL_INQUIRY_MESSAGE =
  "Hi Solz Designs! I'd like to discuss a project with you.";

export const CONTACT_MESSAGE =
  "Hi Solz Designs! I'd like to get in touch about working together.";

export const QUOTE_MESSAGE =
  "Hi Solz Designs! I'd like to get a quote for a project.";
