import { Mail, MessageCircle } from "lucide-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { Logo } from "@/components/logo";
import { CONTACT_MESSAGE, getEmailUrl, getWhatsAppUrl } from "@/lib/contact";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              {SITE.mission}
            </p>
            <p className="mt-4 text-sm text-muted">
              Founded by{" "}
              <span className="text-white">{SITE.owner}</span>
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.3em] text-ice uppercase">
              Connect
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={getEmailUrl(
                    "Enquiry — Solz Designs",
                    "Hi, I'd like to get in touch about a project.\n\n",
                  )}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-ice" />
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(CONTACT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-white"
                >
                  <MessageCircle size={16} className="text-ice" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-white"
                >
                  <IconBrandFacebook size={16} className="text-ice" stroke={1.5} />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-widest text-muted/60">
            Design Beyond The Boundary
          </p>
        </div>
      </div>
    </footer>
  );
}
