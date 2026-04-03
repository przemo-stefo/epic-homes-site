// src/components/Hero.tsx
// Purpose: Full-screen hero section matching Wix layout — company name + subtitle + CTA
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio/exterior-home-front-day.jpg"
          alt="Epic Homes Construction — custom luxury home with stone and stucco facade, Bee Cave Texas"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight mb-4 tracking-wide">
          Epic Homes Construction
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 tracking-wider">
          New Build and Remodeling Services
        </p>
        <a href="#contact" className="btn-outline-gold text-center">
          Let&apos;s Build
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
