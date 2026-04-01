// src/components/Portfolio.tsx
// Purpose: Filterable photo gallery with lightbox and "show more" pagination
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
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
  { src: "bathroom-wave-tile-shower.jpg", alt: "Custom wave-pattern tile shower with frameless glass enclosure — contemporary bath design", category: "Bathrooms" },
  { src: "bathroom-marble-glass-enclosure.jpg", alt: "Marble-clad shower with full glass enclosure and polished nickel fixtures — master bathroom remodel", category: "Bathrooms" },
  { src: "bathroom-marble-bench-shower.jpg", alt: "Oversized marble shower with built-in bench seat and niche shelving — spa-inspired bathroom", category: "Bathrooms" },
  { src: "bathroom-double-vanity-classic.jpg", alt: "Classic double vanity with framed mirrors and marble countertops — elegant master bathroom", category: "Bathrooms" },
  { src: "bathroom-double-vanity-oak.jpg", alt: "White oak floating double vanity with LED wall sconces and vessel sinks — modern bath design", category: "Bathrooms" },
  { src: "bathroom-powder-room-modern.jpg", alt: "Modern powder room with statement wallcovering and floating vanity — custom home detail", category: "Bathrooms" },
  { src: "bathroom-spa-wide-angle.jpg", alt: "Panoramic view of luxury master bath featuring dual vanities, soaking tub, and natural stone", category: "Bathrooms" },
  { src: "bathroom-freestanding-tub-window.jpg", alt: "Freestanding bathtub positioned beneath a picture window with garden views — relaxing retreat", category: "Bathrooms" },
  { src: "bathroom-calacatta-shower-bench.jpg", alt: "Calacatta marble walk-in shower with built-in bench and decorative niche — bronze fixtures, mosaic floor", category: "Bathrooms" },
  { src: "bathroom-hex-tile-powder-room.jpg", alt: "Designer powder room with metallic hexagonal accent tile, wall-mounted bidet, and chrome pendant trio", category: "Bathrooms" },
  { src: "bathroom-arched-mirrors-freestanding-tub.jpg", alt: "Master bath with triple arched gold mirrors, oak double vanity, and freestanding soaking tub on marble floor", category: "Bathrooms" },
  { src: "bathroom-spa-dark-accent-wall.jpg", alt: "Spa master suite — dark accent wall, freestanding tub with hill country views, frameless glass shower, walnut vanity", category: "Bathrooms" },
  { src: "bathroom-dark-vanity-textured-shower.jpg", alt: "Rich cherry wood double vanity with textured tile shower niche and arched mirrors — classic luxury remodel", category: "Bathrooms" },
  { src: "bathroom-stone-accent-chandelier.jpg", alt: "Statement master bath with stacked stone accent wall, modern chandelier, freestanding tub, and LED-lit dark vanity", category: "Bathrooms" },
  { src: "bathroom-modern-open-shower-wood.jpg", alt: "Contemporary open shower with half-wall design, natural wood accent panel, and matte black rain shower fixtures", category: "Bathrooms" },
  { src: "bathroom-geometric-wood-spa.jpg", alt: "Luxury spa bath — geometric wood feature wall with integrated LED lighting, freestanding tub, and frameless glass shower", category: "Bathrooms" },
  // Kitchens
  { src: "kitchen-custom-cabinets-gold.jpg", alt: "Custom kitchen cabinetry with brushed gold hardware and quartzite countertops — luxury home build", category: "Kitchens" },
  { src: "kitchen-island-marble-modern.jpg", alt: "Oversized marble waterfall island in a modern open-concept kitchen — custom home by Epic Homes", category: "Kitchens" },
  { src: "kitchen-island-barstools.jpg", alt: "Kitchen island with seating for four and pendant lighting — family gathering space", category: "Kitchens" },
  { src: "kitchen-open-concept-marble.jpg", alt: "Open-concept chef's kitchen with marble backsplash, professional appliances, and center island", category: "Kitchens" },
  { src: "kitchen-marble-waterfall-globe-pendants.jpg", alt: "Luxury kitchen with calacatta marble waterfall island, dark glass-front cabinets, globe pendants, herringbone hardwood", category: "Kitchens" },
  { src: "kitchen-white-marble-orb-pendants.jpg", alt: "Bright white kitchen with marble waterfall island, open floating shelves, orb cage pendants, and black steel windows", category: "Kitchens" },
  { src: "kitchen-wood-uppers-bar-stools.jpg", alt: "Modern kitchen with natural wood upper cabinets, black matte accents, marble backsplash, and upholstered bar stools", category: "Kitchens" },
  { src: "kitchen-walnut-island-high-ceiling.jpg", alt: "Vaulted ceiling kitchen — walnut and white two-tone cabinetry, marble waterfall island, orb pendant lighting", category: "Kitchens" },
  { src: "kitchen-copper-hood-wolf-range.jpg", alt: "Chef's kitchen detail — custom copper range hood, navy cabinetry with brushed gold hardware, Wolf professional range", category: "Kitchens" },
  { src: "kitchen-hilltop-view-marble.jpg", alt: "Hill country kitchen — walnut and white cabinets, patterned marble island, panoramic windows overlooking the hills", category: "Kitchens" },
  { src: "kitchen-dark-island-wine-cooler.jpg", alt: "Entertainer's kitchen — dark island with integrated wine cooler, bold white marble waterfall counters, matching backsplash", category: "Kitchens" },
  { src: "kitchen-white-shaker-open-shelves.jpg", alt: "Farmhouse-modern kitchen with white shaker cabinets, open display shelving, diamond tile backsplash, French door refrigerator", category: "Kitchens" },
  // Living
  { src: "living-fireplace-arched-niches.jpg", alt: "Living room fireplace flanked by arched display niches with custom lighting — architectural detail", category: "Living" },
  { src: "living-fireplace-walnut-wall.jpg", alt: "Floor-to-ceiling walnut feature wall with linear gas fireplace — modern living room by Epic Homes", category: "Living" },
  { src: "living-great-room-beams.jpg", alt: "Grand great room with exposed wood beams, vaulted ceiling, and wall of windows — custom build", category: "Living" },
  { src: "dining-room-dark-cabinet.jpg", alt: "Formal dining room with dark built-in cabinetry and statement chandelier — luxury interior", category: "Living" },
  // Exterior
  { src: "exterior-covered-patio.jpg", alt: "Covered patio with retractable glass doors opening to the backyard — indoor-outdoor living", category: "Exterior" },
  { src: "exterior-custom-home-front.jpg", alt: "Custom home taking shape during construction — steel framing and stone facade in progress", category: "Exterior" },
  { src: "exterior-finished-entrance.jpg", alt: "Grand entrance with stone columns and custom iron door — completed luxury home by Epic Homes", category: "Exterior" },
  { src: "exterior-prairie-modern.jpg", alt: "Prairie-modern custom home with clean lines, natural stone, and standing-seam metal roof", category: "Exterior" },
  { src: "exterior-home-night.jpg", alt: "Custom luxury home illuminated at dusk with landscape lighting — Epic Homes Construction showcase", category: "Exterior" },
  { src: "exterior-driveway-night.jpg", alt: "Paver driveway and three-car garage lit by uplights at night — curb appeal by Epic Homes", category: "Exterior" },
  { src: "exterior-home-front-day.jpg", alt: "Prairie-modern facade with mixed materials — stone, stucco, and cedar accents in Bee Cave TX", category: "Exterior" },
  { src: "exterior-landscaping-detail.jpg", alt: "Professional landscaping with native stone borders and white gravel pathways — finished project", category: "Exterior" },
  // In Progress
  { src: "kitchen-black-hood-in-progress.jpg", alt: "Kitchen taking shape — custom black and wood range hood installed, marble counters in place, pendant lighting awaiting final fitting", category: "In Progress" },
  { src: "bathroom-marble-shower-in-progress.jpg", alt: "Master bath mid-build — Carrara marble shower enclosure with glass walls, freestanding tub positioned, fixtures being installed", category: "In Progress" },
];

const CATEGORIES = ["All", "Bathrooms", "Kitchens", "Living", "Exterior", "In Progress"];
const PAGE_SIZE = 12;

function Lightbox({
  items,
  index,
  onClose,
  onNav,
}: {
  items: PortfolioItem[];
  index: number;
  onClose: () => void;
  onNav: (dir: -1 | 1) => void;
}) {
  const item = items[index];
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNav]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      onNav(diff > 0 ? -1 : 1);
    }
    touchStart.current = null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark-surface/80 flex items-center justify-center text-white hover:text-gold transition-colors"
        aria-label="Close lightbox"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="absolute left-4 z-10 w-12 h-12 rounded-full bg-dark-surface/80 flex items-center justify-center text-white hover:text-gold transition-colors"
        aria-label="Previous photo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={`/images/portfolio/${item.src}`}
          alt={item.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="absolute right-4 z-10 w-12 h-12 rounded-full bg-dark-surface/80 flex items-center justify-center text-white hover:text-gold transition-colors"
        aria-label="Next photo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Caption + counter */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-6">
        <p className="text-gray-300 text-sm mb-1">{item.alt}</p>
        <p className="text-gray-500 text-xs">{index + 1} / {items.length}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [showCount, setShowCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);
  const visible = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  function handleCategoryChange(cat: string) {
    setActive(cat);
    setShowCount(PAGE_SIZE);
  }

  const handleLightboxNav = useCallback((dir: -1 | 1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return filtered.length - 1;
      if (next >= filtered.length) return 0;
      return next;
    });
  }, [filtered.length]);

  const handleLightboxClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
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
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat
                    ? "bg-gold text-dark"
                    : "border border-dark-border text-gray-400 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">
                  ({(active === "All" && cat === "All" ? ITEMS : ITEMS.filter(i => cat === "All" || i.category === cat)).length})
                </span>
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {visible.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-square rounded-lg img-zoom cursor-pointer group"
                aria-label={`View: ${item.alt}`}
              >
                <Image
                  src={`/images/portfolio/${item.src}`}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Show more */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowCount((c) => c + PAGE_SIZE)}
                className="btn-outline-gold"
              >
                Show More ({filtered.length - showCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={handleLightboxClose}
          onNav={handleLightboxNav}
        />
      )}
    </>
  );
}
