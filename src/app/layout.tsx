// src/app/layout.tsx
// Purpose: Root layout with SEO metadata, fonts, and LocalBusiness schema
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://epic-homes-site.vercel.app"),
  title: "Epic Homes Construction | Custom Home Builder in Bee Cave & Austin TX",
  description:
    "Luxury custom home builder with 200+ completed projects in Bee Cave, Kingsland & Austin TX. " +
    "New construction, remodeling, kitchens, bathrooms. Free estimates. Call (773) 968-4573.",
  keywords: [
    "custom home builder Bee Cave TX",
    "home remodeling Austin TX",
    "luxury bathroom remodel",
    "kitchen renovation Bee Cave",
    "custom home construction Texas",
  ],
  openGraph: {
    title: "Epic Homes Construction | Custom Home Builder",
    description: "Luxury custom homes & remodeling in Bee Cave, Austin TX. 200+ projects completed.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/portfolio/exterior-home-night.jpg",
        width: 1200,
        height: 800,
        alt: "Epic Homes Construction — custom luxury home at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Homes Construction | Custom Home Builder",
    description: "Luxury custom homes & remodeling in Bee Cave, Austin TX. 200+ projects completed.",
    images: ["/images/portfolio/exterior-home-night.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Epic Homes Construction",
  description: "Custom home builder specializing in luxury new construction and remodeling",
  url: "https://epichomesconstruction.com",
  telephone: "+1-773-968-4573",
  email: "info@epichomesconstruction.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11805 Bee Cave Rd.",
    addressLocality: "Bee Cave",
    addressRegion: "TX",
    postalCode: "78738",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.3085, longitude: -97.9469 },
  founder: { "@type": "Person", name: "Adrian Glodz", jobTitle: "President" },
  foundingDate: "2016",
  areaServed: ["Bee Cave, TX", "Kingsland, TX", "Austin, TX", "Schiller Park, IL"],
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 20 },
  priceRange: "$$$",
  image: "/images/portfolio/exterior-finished-entrance.jpg",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a custom home?",
      acceptedAnswer: { "@type": "Answer", text: "A typical custom home takes 10–14 months from permits to move-in, depending on size and complexity." },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: { "@type": "Answer", text: "We build primarily in Bee Cave, Kingsland, and the greater Austin TX area. We also serve the Schiller Park area in Illinois." },
    },
    {
      "@type": "Question",
      name: "Do you offer financing options?",
      acceptedAnswer: { "@type": "Answer", text: "While we don't provide direct financing, we work with several trusted lenders who specialize in construction loans." },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Epic Homes Construction is fully licensed and insured in the state of Texas with general liability and workers' compensation coverage." },
    },
    {
      "@type": "Question",
      name: "Do you handle permits and inspections?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. We manage the entire permitting process, schedule all required inspections, and ensure your project meets all local building codes." },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body className="font-body antialiased">
        <a href="#main" className="skip-to-content">Skip to content</a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
