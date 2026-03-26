// src/components/Hero.tsx
// Purpose: Full-screen hero section with background image, headline, and dual CTA
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio/exterior-home-night.jpg"
          alt="Epic Homes Construction — custom luxury home illuminated at dusk with professional landscape lighting, Bee Cave Texas"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6 font-body">
          Bee Cave &bull; Kingsland &bull; Austin TX
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Building Your
          <span className="block text-gold-gradient">Dream Home</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-body">
          200+ luxury custom homes built since 2016. From concept to keys &mdash;
          we craft spaces that inspire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-gold text-center">
            Get a Free Estimate
          </a>
          <a href="#portfolio" className="btn-outline-gold text-center">
            View Our Work
          </a>
        </div>
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
