// src/components/About.tsx
// Purpose: About section with company stats and trust signals
import { SITE } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Building <span className="text-gold">Excellence</span>
              <br />Since 2016
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Epic Homes Construction is a full-service custom home builder serving
              the greater Austin area and beyond. Led by Adrian Glodz, our team
              brings over 9 years of experience in luxury residential construction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From elegant bathroom renovations to ground-up custom builds,
              we handle every detail with precision and care. Our portfolio of 200+
              completed projects speaks to our commitment to craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="btn-gold text-center">
                Get a Free Quote
              </a>
              <a
                href={SITE.phoneHref}
                className="btn-outline-gold text-center"
                aria-label={`Call Epic Homes at ${SITE.phone}`}
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 stagger-children">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "9+", label: "Years Experience" },
              { number: "3", label: "Service Areas" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-dark-surface border border-dark-border rounded-lg p-8 text-center"
              >
                <div className="font-display text-4xl text-gold font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
