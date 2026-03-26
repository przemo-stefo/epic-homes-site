// src/components/Process.tsx
// Purpose: "How We Work" timeline showing the build process
const STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "Free on-site consultation to understand your vision, budget, and timeline.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Detailed plans, 3D renderings, material selection, and permit coordination.",
  },
  {
    step: "03",
    title: "Construction",
    description: "Expert craftsmanship with regular progress updates and transparent communication.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description: "Thorough inspection, punch list completion, and keys to your new home.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            How We <span className="text-gold">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven process refined over 200+ projects.
          </p>
        </div>

        <div className="stagger-children">
          {STEPS.map((s, i) => (
            <div key={s.step} className="flex gap-6 md:gap-10 mb-12 last:mb-0">
              {/* Step number + line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
                  <span className="font-display text-gold text-lg font-bold">{s.step}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px h-full bg-dark-border mt-3" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-display text-2xl text-white font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
