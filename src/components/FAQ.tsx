// src/components/FAQ.tsx
// Purpose: Frequently asked questions — SEO + trust builder
"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How long does it take to build a custom home?",
    a: "A typical custom home takes 10–14 months from permits to move-in, depending on size and complexity. We provide a detailed timeline during the planning phase and keep you updated every step of the way.",
  },
  {
    q: "What areas do you serve?",
    a: "We build primarily in Bee Cave, Kingsland, and the greater Austin TX area. We also serve the Schiller Park area in Illinois. Contact us if you're in a nearby area — we're happy to discuss your project.",
  },
  {
    q: "Do you offer financing options?",
    a: "While we don't provide direct financing, we work with several trusted lenders who specialize in construction loans. We can connect you with a financing partner during your free consultation.",
  },
  {
    q: "What is included in a free estimate?",
    a: "Our free estimate includes an on-site consultation, project scope discussion, preliminary cost breakdown, and a realistic timeline. There's no obligation — it's our way of understanding your vision before we begin.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Epic Homes Construction is fully licensed and insured in the state of Texas. We carry general liability insurance and workers' compensation coverage for your protection.",
  },
  {
    q: "Can I make changes during construction?",
    a: "Yes, within reason. We build in decision checkpoints so you can adjust finishes, fixtures, and minor layout details. Major structural changes may affect timeline and cost, which we'll discuss transparently before proceeding.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Absolutely. We manage the entire permitting process, schedule all required inspections, and ensure your project meets all local building codes. You don't have to worry about paperwork.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-dark-card" aria-label="Frequently Asked Questions">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Common <span className="text-gold">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know before starting your project.
          </p>
        </div>

        <div className="space-y-3 fade-in">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-dark-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-surface/50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gold shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
