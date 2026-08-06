import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Turns a full URL into the bare domain for display — "https://madfutsal.co.zw"
 * becomes "madfutsal.co.zw".
 *
 * Showing the real domain is worth more than a generic "Visit site" label: a
 * prospect recognising a Zimbabwean business they have heard of is the proof
 * the portfolio is trying to deliver.
 */
export function formatDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    // Never let a malformed URL in the content data break a page render.
    return url;
  }
}
