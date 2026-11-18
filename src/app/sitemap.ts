import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about/", "/journal/", "/contact/", "/privacy/", "/terms/"].map((path) => ({ url: `${site.siteUrl}${path}` }));
}
