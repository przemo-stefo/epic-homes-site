// src/components/About.tsx
// Purpose: About section matching Wix layout — company story with DOM Properties mention + image
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div className="fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-gold">Us</span>
            </h2>
            <p className="text-gold font-semibold text-lg mb-2">
              Epic Homes Construction LLC.
            </p>
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
              A Division of DOM Properties Investment
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Epic Homes Construction is a division of Dom Properties Investment Group
              based in Chicago, IL. We have expanded our services to the Austin TX area,
              bringing our experienced team that specializes in innovative modern style.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Epic Homes specialize in contemporary and traditional new construction homes.
              We work closely with our clients and top architects to fulfill expectations
              and high standards. Our team services the Austin, TX area and its surrounding suburbs.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our clients deserve the best, which is why we hire only the most experienced
              contractors. Each member of our team has years of experience in construction
              and project design. If you are looking for a professional general contractor
              in Austin, TX or its suburbs, don&apos;t wait any longer &mdash; contact us today!
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="btn-gold text-center">
                Contact Us
              </a>
              <a href="#portfolio" className="btn-outline-gold text-center">
                View Projects
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="relative h-[500px] rounded-lg overflow-hidden fade-in">
            <Image
              src="/images/portfolio/kitchen-marble-waterfall-globe-pendants.jpg"
              alt="Luxury kitchen with calacatta marble waterfall island — Epic Homes Construction showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
