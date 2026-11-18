export const site: {
  siteName: string;
  siteUrl: string;
  storeUrl: string;
  storeEnabled: boolean;
  newsletterEnabled: boolean;
  newsletterUrl: string | null;
  contactEmail: string | null;
  legalBusinessName: string;
  businessAddress: { street: string; city: string; region: string; zip: string; country: string };
  socialLinks: { label: string; href: string }[];
} = {
  siteName: "ViEli",
  siteUrl: "https://vieli.us",
  storeUrl: "https://shop.vieli.us",
  storeEnabled: false,
  newsletterEnabled: false,
  newsletterUrl: null,
  contactEmail: null,
  legalBusinessName: "T & E LLC",
  businessAddress: { street: "1401 21st ST", city: "Sacramento", region: "CA", zip: "95811", country: "United States" },
  socialLinks: [],
};

export const tagline = "MOVE · BALANCE · BECOME";

export const pages = {
  "/": { title: "Move with Intention", description: "Discover ViEli, a movement and wellness brand preparing thoughtful essentials for movement, balance, and everyday wellbeing." },
  "/about/": { title: "Our Story", description: "Explore the philosophy behind ViEli and its three pillars of movement, balance, and becoming." },
  "/journal/": { title: "Journal", description: "The ViEli journal will explore movement, mindfulness, and everyday rituals." },
  "/contact/": { title: "Contact", description: "Find contact information and the business mailing address for ViEli." },
  "/privacy/": { title: "Privacy Policy", description: "Read ViEli’s draft website privacy policy." },
  "/terms/": { title: "Terms of Use", description: "Read ViEli’s draft website terms of use." },
} as const;
