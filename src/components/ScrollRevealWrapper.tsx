// src/components/ScrollRevealWrapper.tsx
// Purpose: Client-side wrapper ONLY for scroll animations — keeps page.tsx server-rendered for SEO
"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ScrollRevealWrapper({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}
