// src/components/Header.tsx
// Purpose: Fixed navigation with mobile menu and CTA
"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="font-display text-2xl text-gold font-bold tracking-wide" aria-label={SITE.name}>
          EPIC HOMES
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.phoneHref}
            className="ml-4 px-6 py-2.5 bg-gold text-dark font-semibold text-sm rounded hover:bg-gold-light transition-colors"
            aria-label={`Call us at ${SITE.phone}`}
          >
            {SITE.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gold p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-dark-surface/98 backdrop-blur-md border-t border-dark-border px-6 py-6 flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-2 px-6 py-3 bg-gold text-dark font-semibold text-center rounded"
          >
            Call {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
