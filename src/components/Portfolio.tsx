// src/components/Portfolio.tsx
// Purpose: Simple project gallery matching Wix layout — no filters, grid + VIEW ALL
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

interface PortfolioItem {
  src: string;
  alt: string;
}

const ITEMS: PortfolioItem[] = [
  { src: "bathroom-luxury-tub-chandelier.jpg", alt: "Luxury freestanding soaking tub beneath a crystal chandelier" },
  { src: "kitchen-custom-cabinets-gold.jpg", alt: "Custom kitchen cabinetry with brushed gold hardware" },
  { src: "bathroom-dark-marble-tub.jpg", alt: "Dark marble spa bathroom with deep soaking tub" },
  { src: "kitchen-island-marble-modern.jpg", alt: "Oversized marble waterfall island in modern kitchen" },
  { src: "bathroom-wave-tile-shower.jpg", alt: "Custom wave-pattern tile shower with frameless glass" },
  { src: "exterior-covered-patio.jpg", alt: "Covered patio with retractable glass doors" },
  { src: "bathroom-marble-glass-enclosure.jpg", alt: "Marble-clad shower with full glass enclosure" },
  { src: "kitchen-marble-waterfall-globe-pendants.jpg", alt: "Luxury kitchen with calacatta marble waterfall island" },
  { src: "living-fireplace-arched-niches.jpg", alt: "Living room fireplace flanked by arched display niches" },
  { src: "exterior-home-night.jpg", alt: "Custom luxury home illuminated at dusk" },
  { src: "bathroom-stone-accent-chandelier.jpg", alt: "Master bath with stacked stone accent wall" },
  { src: "kitchen-copper-hood-wolf-range.jpg", alt: "Custom copper range hood with navy cabinetry" },
  { src: "bathroom-spa-dark-accent-wall.jpg", alt: "Spa master suite with dark accent wall" },
  { src: "exterior-prairie-modern.jpg", alt: "Prairie-modern custom home with natural stone" },
  { src: "kitchen-hilltop-view-marble.jpg", alt: "Hill country kitchen with panoramic windows" },
  { src: "living-fireplace-walnut-wall.jpg", alt: "Floor-to-ceiling walnut feature wall with gas fireplace" },
  { src: "bathroom-geometric-wood-spa.jpg", alt: "Luxury spa bath with geometric wood feature wall" },
  { src: "exterior-finished-entrance.jpg", alt: "Grand entrance with stone columns and custom iron door" },
  { src: "kitchen-walnut-island-high-ceiling.jpg", alt: "Vaulted ceiling kitchen with walnut island" },
  { src: "bathroom-calacatta-shower-bench.jpg", alt: "Calacatta marble walk-in shower with bench" },
  { src: "living-great-room-beams.jpg", alt: "Grand great room with exposed wood beams" },
  { src: "exterior-home-front-day.jpg", alt: "Prairie-modern facade with mixed materials" },
  { src: "bathroom-double-vanity-classic.jpg", alt: "Classic double vanity with marble countertops" },
  { src: "kitchen-dark-island-wine-cooler.jpg", alt: "Dark island with integrated wine cooler" },
];

const INITIAL_COUNT = 10;

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
    if (Math.abs(diff) > 50) onNav(diff > 0 ? -1 : 1);
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
      <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark-surface/80 flex items-center justify-center text-white hover:text-gold transition-colors" aria-label="Close">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNav(-1); }} className="absolute left-4 z-10 w-12 h-12 rounded-full bg-dark-surface/80 flex items-center justify-center text-white hover:text-gold transition-colors" aria-label="Previous">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <div className="relative max-w-[90vw] max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
        <Image src={`/images/portfolio/${item.src}`} alt={item.alt} fill className="object-contain" sizes="90vw" priority />
      </div>
      <button onClick={(e) => { e.stopPropagation(); onNav(1); }} className="absolute right-4 z-10 w-12 h-12 rounded-full bg-dark-surface/80 flex items-center justify-center text-white hover:text-gold transition-colors" aria-label="Next">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-4 left-0 right-0 text-center px-6">
        <p className="text-gray-300 text-sm mb-1">{item.alt}</p>
        <p className="text-gray-500 text-xs">{index + 1} / {items.length}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = showAll ? ITEMS : ITEMS.slice(0, INITIAL_COUNT);

  const handleLightboxNav = useCallback((dir: -1 | 1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return ITEMS.length - 1;
      if (next >= ITEMS.length) return 0;
      return next;
    });
  }, []);

  const handleLightboxClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <>
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Recent Projects
            </h2>
          </div>

          {/* Simple grid — no filters, matching Wix */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {visible.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-square img-zoom cursor-pointer group"
                aria-label={`View: ${item.alt}`}
              >
                <Image
                  src={`/images/portfolio/${item.src}`}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors" />
              </button>
            ))}
          </div>

          {/* VIEW ALL button */}
          {!showAll && (
            <div className="text-center mt-10">
              <button onClick={() => setShowAll(true)} className="btn-outline-gold">
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox items={ITEMS} index={lightboxIndex} onClose={handleLightboxClose} onNav={handleLightboxNav} />
      )}
    </>
  );
}
