import Link from "next/link";
import { EditorialPage } from "@/components/layout";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = { ...pageMetadata("/terms/"), robots: { index: false } };

export default function Terms() {
  return <EditorialPage title="Terms of Use">
    <p className="draft-note"><strong>Draft for review.</strong> Have the legal content reviewed before production deployment.</p>
    <h2>Website operator</h2>
    <p>{site.legalBusinessName} operates the ViEli website, which introduces the ViEli brand and its approach to movement and wellbeing.</p>
    <h2>Website content</h2>
    <p>Review needed. Confirm the terms governing use of site content and ViEli brand assets.</p>
    <h2>Links to other websites</h2>
    <p>Review needed. Confirm terms for external links, including links to the future separate storefront.</p>
    <h2>Contact</h2>
    <p>See the <Link href="/contact/">contact page</Link> for business mailing details.</p>
  </EditorialPage>;
}
