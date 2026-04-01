// src/components/Testimonials.tsx
// Purpose: Social proof — client reviews with star ratings
"use client";

import { useState } from "react";

interface Review {
  name: string;
  location: string;
  text: string;
  stars: number;
  project: string;
}

// NOTE: These are placeholder reviews — replace with real client testimonials from Adrian
const REVIEWS: Review[] = [
  {
    name: "Happy Homeowner",
    location: "Bee Cave, TX",
    text: "Adrian and his team built our dream home from the ground up. The attention to detail in every room — especially the marble master bath — exceeded our expectations. They were on schedule and communicated throughout the entire process.",
    stars: 5,
    project: "Custom Home Build",
  },
  {
    name: "Satisfied Client",
    location: "Austin, TX",
    text: "We hired Epic Homes for a full kitchen remodel and couldn't be happier. The calacatta marble island is the centerpiece of our home now. Professional, clean, and the final result looks like it belongs in a magazine.",
    stars: 5,
    project: "Kitchen Remodel",
  },
  {
    name: "Returning Customer",
    location: "Kingsland, TX",
    text: "From design to final walkthrough, Epic Homes made our lake house renovation seamless. The outdoor living area they built is where we spend most of our time now. Highly recommend for anyone in the Hill Country.",
    stars: 5,
    project: "Renovation & Outdoor Living",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function switchReview(next: number) {
    setFading(true);
    setTimeout(() => {
      setActive(next);
      setFading(false);
    }, 250);
  }

  return (
    <section className="py-24 px-6" aria-label="Client Reviews">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hear from homeowners we&apos;ve worked with.
          </p>
        </div>

        {/* Featured review */}
        <div className={`bg-dark-surface border border-dark-border rounded-2xl p-8 md:p-12 mb-8 fade-in transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
          <Stars count={REVIEWS[active].stars} />
          <blockquote className="mt-6 mb-8">
            <p className="text-white text-lg md:text-xl leading-relaxed italic">
              &ldquo;{REVIEWS[active].text}&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">{REVIEWS[active].name}</div>
              <div className="text-gray-500 text-sm">{REVIEWS[active].location} &bull; {REVIEWS[active].project}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => switchReview(active === 0 ? REVIEWS.length - 1 : active - 1)}
                className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
                aria-label="Previous review"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => switchReview(active === REVIEWS.length - 1 ? 0 : active + 1)}
                className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
                aria-label="Next review"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => switchReview(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-gold" : "bg-dark-border hover:bg-gray-600"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
