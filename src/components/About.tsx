// src/components/About.tsx
// Purpose: Combined About + Process section — company info, stats, and build process
import { SITE } from "@/lib/site-config";

const STEPS = [
  { step: "01", title: "Consultation", description: "Free on-site consultation to understand your vision, budget, and timeline." },
  { step: "02", title: "Design & Planning", description: "Detailed plans, 3D renderings, material selection, and permit coordination." },
  { step: "03", title: "Construction", description: "Expert craftsmanship with regular progress updates and transparent communication." },
  { step: "04", title: "Final Walkthrough", description: "Thorough inspection, punch list completion, and keys to your new home." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto">
        {/* Top: About + Stats */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
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

        {/* Bottom: Process */}
        <div>
          <div className="text-center mb-16 fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              How We <span className="text-gold">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A proven process refined over 200+ projects.
            </p>
          </div>

          <div className="max-w-3xl mx-auto stagger-children">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex gap-6 md:gap-10 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
                    <span className="font-display text-gold text-lg font-bold">{s.step}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px h-full bg-dark-border mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-2xl text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
