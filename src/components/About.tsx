// src/components/About.tsx
// Purpose: About section 1:1 matching Wix — text left, image right
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text side */}
          <div className="fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              About Us
            </h2>
            <p className="text-gold font-semibold mb-1">
              Epic Homes Construction LLC.
            </p>
            <h4 className="text-gray-300 text-sm font-semibold mb-1">
              A Division of DOM Properties Investment
            </h4>
            <p className="text-gray-400 text-xs mb-6">
              <a
                href="http://dompropertiesinc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light underline transition-colors"
              >
                http://dompropertiesinc.com/
              </a>
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Epic Homes Construction is a division of Dom Properties Investment Group
              based in Chicago, IL. We have expanded our services to the Austin TX area,
              bringing our experienced team that specializes in innovative modern style.
              Epic Homes specialize in contemporary and traditional new construction homes.
              We work closely with our clients and top architects to fulfill expectations
              and high standards. Our team services the Austin, TX area and its surrounding
              suburbs. Our clients deserve the best, which is why we hire only the most
              experienced contractors. Each member of our team has years of experience in
              construction and project design. If you are looking for a professional general
              contractor in Austin, TX or its suburbs, don&apos;t wait any longer &ndash;
              contact us today!
            </p>
          </div>

          {/* Image side */}
          <div className="relative h-[450px] fade-in">
            <Image
              src="/images/portfolio/kitchen-marble-waterfall-globe-pendants.jpg"
              alt="Luxury kitchen with calacatta marble waterfall island — Epic Homes Construction"
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
