// src/components/Services.tsx
// Purpose: Services section matching Wix layout — image + list + feature icons row
import Image from "next/image";

const FEATURES = [
  {
    title: "Vast Experience",
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Professional Team",
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "High Quality Products",
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Reliable Service",
    icon: (
      <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Services: Image + Text side by side */}
        <div className="grid md:grid-cols-2 gap-0 mb-20 rounded-lg overflow-hidden border border-dark-border fade-in">
          {/* Image side */}
          <div className="relative h-80 md:h-auto min-h-[400px]">
            <Image
              src="/images/portfolio/exterior-custom-home-front.jpg"
              alt="Epic Homes Construction team at work on a custom home build"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text side */}
          <div className="bg-dark-card p-10 md:p-14 flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-gold">Services</span>
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-300 text-lg">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                New Construction Residential Services
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-lg">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                Remodeling Services
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-lg">
                <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                General Contractor Services
              </li>
            </ul>
            <div>
              <a href="#portfolio" className="btn-outline-gold">
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* Feature icons row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark-card border border-dark-border rounded-lg p-8 text-center hover:border-gold/30 transition-colors"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <p className="text-white font-semibold text-sm uppercase tracking-wider">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
