import type { Metadata } from "next";
import { pages, site } from "@/config/site";

export function pageMetadata(path: keyof typeof pages): Metadata {
  const { title, description } = pages[path];
  const socialTitle = `${title} | ${site.siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: socialTitle, description, url: path, siteName: site.siteName, type: "website", locale: "en_US" },
    twitter: { card: "summary", title: socialTitle, description },
  };
}
