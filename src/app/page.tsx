import { CollectionPreview, Hero, LaunchAnnouncement, Philosophy } from "@/components/home";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/");

export default function Home() {
  const { businessAddress: address } = site;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.siteName,
    legalName: site.legalBusinessName,
    url: site.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.zip,
      addressCountry: "US",
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
    <Hero />
    <Philosophy />
    <CollectionPreview />
    <LaunchAnnouncement />
  </>;
}
