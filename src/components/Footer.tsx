// src/components/Footer.tsx
// Purpose: Footer matching Wix — contact info + nav links on left, form on right
"use client";

import { useState, FormEvent } from "react";
import { SITE } from "@/lib/site-config";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const address = data.get("address") as string;
    const message = data.get("message") as string;

    try {
      const res = await fetch("https://n8n-epic.feedmasters.org/webhook/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, address, message }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const subject = encodeURIComponent(`Quote Request from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n\n${message}`);
        window.open(`mailto:${SITE.email}?subject=${subject}&body=${body}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      const subject = encodeURIComponent(`Quote Request from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n\n${message}`);
      window.open(`mailto:${SITE.email}?subject=${subject}&body=${body}`, "_blank");
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer id="contact" className="bg-dark-card border-t border-dark-border pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Contact info + nav */}
          <div>
            {/* Contact Us */}
            <h2 className="font-display text-2xl font-semibold text-white mb-6">
              Contact Us
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-300 text-sm">
                  <p>&quot;11805 Bee Caves Rd Suite #600&quot;</p>
                  <p>Bee Cave, TX 78738</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${SITE.email}`} className="text-gray-300 text-sm hover:text-gold transition-colors">
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-sm">{SITE.phone}</span>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3 mb-8">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <span className="text-white font-semibold text-sm">Instagram</span>
            </div>

            {/* Nav links + CALL NOW */}
            <div className="flex items-center gap-6 flex-wrap">
              <nav className="flex gap-4 text-sm text-gray-400" aria-label="Footer navigation">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </nav>
              <a href={SITE.phoneHref} className="btn-gold text-xs">Call Now</a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-gold text-4xl mb-3">&#10003;</div>
                <h3 className="font-display text-xl text-white mb-2">Thank You!</h3>
                <p className="text-gray-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Full Name</label>
                  <input name="name" required maxLength={100} className="form-input" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Email *</label>
                  <input name="email" type="email" required maxLength={254} className="form-input" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Phone</label>
                  <input name="phone" type="tel" maxLength={20} className="form-input" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Address</label>
                  <input name="address" maxLength={200} className="form-input" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Message *</label>
                  <textarea name="message" rows={3} maxLength={2000} className="form-input resize-none" />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full text-center disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
