export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Ballistic exe Wiki",
  shortName: "Ballistic exe",
  logoText: "B",
  tagline: "Fast-Paced Ballistic Action Combat Guides & Weapons",
  description: "Explore Ballistic exe Wiki with detailed weapon guides, gameplay tips, combat mechanics, updates, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ballistic-exe.wiki",
  supportEmail: "support@ballistic-exe.wiki",
  gameUrl: "https://store.steampowered.com/app/3432980/exe/",
  heroVideoId: "qRYkVnxOXG4",
  social: {
    discord: "https://store.steampowered.com/app/3432980/exe/",
    youtube: "https://www.youtube.com/@TicTacToeDigital",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
