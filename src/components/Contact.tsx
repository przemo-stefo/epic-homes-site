// src/components/Contact.tsx
// Purpose: Contact section with info, Google Maps embed, and quote form
"use client";

import { useState, FormEvent } from "react";
import { SITE } from "@/lib/site-config";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!data.get("name")?.toString().trim()) errs.name = "Name is required";
    const email = data.get("email")?.toString().trim() ?? "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Valid email required";
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Quote Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\n${message}`
    );
    const mailto = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your project? Contact us for a free consultation and estimate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <div className="fade-in">
            <div className="space-y-6 mb-10">
              <ContactItem
                icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                title="Phone"
                value={SITE.phone}
                href={SITE.phoneHref}
              />
              <ContactItem
                icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                title="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactItem
                icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                title="Address"
                value={SITE.address}
              />
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border border-dark-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5!2d-97.9469!3d30.3085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzMwLjYiTiA5N8KwNTYnNDguOCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                title="Epic Homes Construction office location on Google Maps"
              />
            </div>
          </div>

          {/* Quote form */}
          <div className="fade-in">
            {submitted ? (
              <div className="bg-dark-surface border border-gold/30 rounded-lg p-12 text-center" role="status">
                <div className="text-gold text-5xl mb-4" aria-hidden="true">&#10003;</div>
                <h3 className="font-display text-2xl text-white mb-2">Thank You!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="Your Name"
                      className="form-input"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      maxLength={20}
                      placeholder="Phone Number"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="Email Address"
                    className="form-input"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-service" className="sr-only">Select a Service</label>
                  <select id="contact-service" name="service" className="form-input">
                    <option value="">Select a Service</option>
                    <option value="custom-home">Custom Home Building</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="outdoor">Outdoor Living</option>
                    <option value="remodeling">General Remodeling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">Tell us about your project</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    maxLength={2000}
                    placeholder="Tell us about your project..."
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-dark font-bold text-lg rounded hover:bg-gold-light transition-colors"
                >
                  Request a Free Estimate
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon, title, value, href,
}: {
  icon: string; title: string; value: string; href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
        </svg>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{title}</div>
        <div className="text-white">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity" aria-label={`${title}: ${value}`}>{content}</a>
  ) : (
    <div>{content}</div>
  );
}
