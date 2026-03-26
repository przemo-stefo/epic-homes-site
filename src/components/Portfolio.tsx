// src/components/Portfolio.tsx
// Purpose: Filterable photo gallery with all real project photos
"use client";

import { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  src: string;
  alt: string;
  category: string;
}

const ITEMS: PortfolioItem[] = [
  // Bathrooms
  { src: "bathroom-luxury-tub-chandelier.jpg", alt: "Luxury freestanding soaking tub beneath a crystal chandelier — custom master bath by Epic Homes, Bee Cave TX", category: "Bathrooms" },
  { src: "bathroom-dark-marble-tub.jpg", alt: "Dark marble spa bathroom with deep soaking tub and floor-to-ceiling stone — Epic Homes custom build", category: "Bathrooms" },
  { src: "bathroom-dark-marble-shower.jpg", alt: "Walk-in glass shower with dark marble walls and rainfall showerhead — luxury bathroom renovation", category: "Bathrooms" },
  { src: "bathroom-wave-tile-shower.jpg", alt: "Custom wave-pattern tile shower with frameless glass enclosure — contemporary bath design", category: "Bathrooms" },
  { src: "bathroom-marble-glass-enclosure.jpg", alt: "Marble-clad shower with full glass enclosure and polished nickel fixtures — master bathroom remodel", category: "Bathrooms" },
  { src: "bathroom-marble-bench-shower.jpg", alt: "Oversized marble shower with built-in bench seat and niche shelving — spa-inspired bathroom", category: "Bathrooms" },
  { src: "bathroom-double-vanity-classic.jpg", alt: "Classic double vanity with framed mirrors and marble countertops — elegant master bathroom", category: "Bathrooms" },
  { src: "bathroom-double-vanity-oak.jpg", alt: "White oak floating double vanity with LED wall sconces and vessel sinks — modern bath design", category: "Bathrooms" },
  { src: "bathroom-powder-room-modern.jpg", alt: "Modern powder room with statement wallcovering and floating vanity — custom home detail", category: "Bathrooms" },
  { src: "bathroom-spa-master-suite.jpg", alt: "Full spa master suite with freestanding tub, walk-in shower, and custom cabinetry — Epic Homes", category: "Bathrooms" },
  { src: "bathroom-spa-wide-angle.jpg", alt: "Panoramic view of luxury master bath featuring dual vanities, soaking tub, and natural stone", category: "Bathrooms" },
  { src: "bathroom-freestanding-tub-window.jpg", alt: "Freestanding bathtub positioned beneath a picture window with garden views — relaxing retreat", category: "Bathrooms" },
  // Kitchens
  { src: "kitchen-custom-cabinets-gold.jpg", alt: "Custom kitchen cabinetry with brushed gold hardware and quartzite countertops — luxury home build", category: "Kitchens" },
  { src: "kitchen-island-marble-modern.jpg", alt: "Oversized marble waterfall island in a modern open-concept kitchen — custom home by Epic Homes", category: "Kitchens" },
  { src: "kitchen-island-barstools.jpg", alt: "Kitchen island with seating for four and pendant lighting — family gathering space", category: "Kitchens" },
  { src: "kitchen-open-concept-marble.jpg", alt: "Open-concept chef's kitchen with marble backsplash, professional appliances, and center island", category: "Kitchens" },
  // Living
  { src: "living-fireplace-arched-niches.jpg", alt: "Living room fireplace flanked by arched display niches with custom lighting — architectural detail", category: "Living" },
  { src: "living-fireplace-walnut-wall.jpg", alt: "Floor-to-ceiling walnut feature wall with linear gas fireplace — modern living room by Epic Homes", category: "Living" },
  { src: "living-great-room-beams.jpg", alt: "Grand great room with exposed wood beams, vaulted ceiling, and wall of windows — custom build", category: "Living" },
  { src: "dining-room-dark-cabinet.jpg", alt: "Formal dining room with dark built-in cabinetry and statement chandelier — luxury interior", category: "Living" },
  // Exterior
  { src: "exterior-covered-patio.jpg", alt: "Covered patio with retractable glass doors opening to the backyard — indoor-outdoor living", category: "Exterior" },
  { src: "exterior-patio-glass-doors.jpg", alt: "Panoramic patio with floor-to-ceiling glass doors and Hill Country views — Bee Cave TX", category: "Exterior" },
  { src: "exterior-custom-home-front.jpg", alt: "Custom home taking shape during construction — steel framing and stone facade in progress", category: "Exterior" },
  { src: "exterior-finished-entrance.jpg", alt: "Grand entrance with stone columns and custom iron door — completed luxury home by Epic Homes", category: "Exterior" },
  { src: "exterior-prairie-modern.jpg", alt: "Prairie-modern custom home with clean lines, natural stone, and standing-seam metal roof", category: "Exterior" },
  { src: "exterior-home-night.jpg", alt: "Custom luxury home illuminated at dusk with landscape lighting — Epic Homes Construction showcase", category: "Exterior" },
  { src: "exterior-driveway-night.jpg", alt: "Paver driveway and three-car garage lit by uplights at night — curb appeal by Epic Homes", category: "Exterior" },
  { src: "exterior-home-front-day.jpg", alt: "Prairie-modern façade with mixed materials — stone, stucco, and cedar accents in Bee Cave TX", category: "Exterior" },
  { src: "exterior-landscaping-detail.jpg", alt: "Professional landscaping with native stone borders and white gravel pathways — finished project", category: "Exterior" },
];

const CATEGORIES = ["All", "Bathrooms", "Kitchens", "Living", "Exterior"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-24 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real projects. Real craftsmanship. Browse our completed work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-gold text-dark"
                  : "border border-dark-border text-gray-400 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item) => (
            <div key={item.src} className="relative aspect-square rounded-lg img-zoom">
              <Image
                src={`/images/portfolio/${item.src}`}
                alt={item.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
