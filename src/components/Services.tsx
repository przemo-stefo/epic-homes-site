// src/components/Services.tsx
// Purpose: Services grid with real project photos
import Image from "next/image";

const SERVICES = [
  {
    title: "Custom Home Building",
    description: "From ground-up luxury homes to complete custom builds — designed and built to your exact vision.",
    image: "/images/portfolio/exterior-prairie-modern.jpg",
    alt: "Prairie-modern custom home with stone and cedar — new construction by Epic Homes, Bee Cave TX",
  },
  {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen with custom cabinetry, marble countertops, and modern fixtures.",
    image: "/images/portfolio/kitchen-custom-cabinets-gold.jpg",
    alt: "Custom kitchen cabinetry with gold hardware and quartzite countertops — luxury remodel by Epic Homes",
  },
  {
    title: "Bathroom Renovation",
    description: "Spa-inspired bathrooms with premium marble, freestanding tubs, and frameless glass enclosures.",
    image: "/images/portfolio/bathroom-luxury-tub-chandelier.jpg",
    alt: "Freestanding soaking tub with crystal chandelier — spa master bath renovation by Epic Homes",
  },
  {
    title: "Outdoor Living",
    description: "Covered patios, outdoor kitchens, and entertainment areas that extend your living space.",
    image: "/images/portfolio/exterior-covered-patio.jpg",
    alt: "Covered patio with retractable glass doors for seamless indoor-outdoor living — Epic Homes",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="text-gold">Build</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Full-service construction from concept to completion.
            Every project reflects our commitment to quality craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group relative rounded-lg overflow-hidden h-80 img-zoom"
            >
              <Image
                src={svc.image}
                alt={svc.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl text-white font-bold mb-2">
                  {svc.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
