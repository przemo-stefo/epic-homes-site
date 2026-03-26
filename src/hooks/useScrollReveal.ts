// src/hooks/useScrollReveal.ts
// Purpose: Intersection Observer hook for fade-in-on-scroll animations
"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in, .stagger-children").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
