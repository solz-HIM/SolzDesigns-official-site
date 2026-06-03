"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { MagneticButton } from "@/components/magnetic-button";
import { QUOTE_MESSAGE, getWhatsAppUrl } from "@/lib/contact";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-700",
          scrolled
            ? "border-b border-white/5 bg-bg-primary/90 py-3 backdrop-blur-xl sm:py-4"
            : "bg-transparent py-4 sm:py-6 md:py-8",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <Logo />
          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <MagneticButton
              href={getWhatsAppUrl(QUOTE_MESSAGE)}
              external
              variant="white"
            >
              Get A Quote
            </MagneticButton>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-bg-primary px-6 pt-28 pb-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col gap-8" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-heading text-3xl text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <MagneticButton
                href={getWhatsAppUrl(QUOTE_MESSAGE)}
                external
                variant="white"
                className="w-full"
              >
                Get A Quote
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
