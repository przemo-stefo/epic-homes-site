// src/components/MobileCallButton.tsx
// Purpose: Sticky floating call button on mobile — always visible CTA
"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/site-config";

export default function MobileCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={SITE.phoneHref}
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold shadow-lg shadow-gold/30 flex items-center justify-center hover:bg-gold-light transition-colors"
      aria-label={`Call ${SITE.phone}`}
    >
      <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>
  );
}
