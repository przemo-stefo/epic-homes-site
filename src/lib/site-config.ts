// src/lib/site-config.ts
// Purpose: Single source of truth for business info used across components
// NOT for: Component-specific data (keep in each component)

export const SITE = {
  name: "Epic Homes Construction",
  phone: "(773) 968-4573",
  phoneHref: "tel:+17739684573",
  email: "info@epichomesconstruction.com",
  address: "11805 Bee Cave Rd., Bee Cave, TX 78738",
  instagram: "https://www.instagram.com/epichomesconstruction/",
  areas: "Bee Cave, Kingsland, Austin TX and Schiller Park IL",
} as const;
