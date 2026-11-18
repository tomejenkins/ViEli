import Link from "next/link";
import { EditorialPage } from "@/components/layout";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = { ...pageMetadata("/privacy/"), robots: { index: false } };

export default function Privacy() {
  return <EditorialPage title="Privacy Policy">
    <p className="draft-note"><strong>Draft for review.</strong> Confirm the deployed site’s data practices before publishing this policy.</p>
    <p>{site.legalBusinessName} operates the ViEli website.</p>
    <h2>Hosting and site visits</h2>
    <p>Review needed. Confirm whether the hosting provider logs visitor information, what it records, and how long it retains those records.</p>
    <h2>Analytics and cookies</h2>
    <p>Review needed. If analytics or cookies are introduced, identify the tools, their purposes, and any applicable visitor choices.</p>
    <h2>Email and newsletters</h2>
    <p>Review needed. If email marketing launches, document the provider, information collected, retention practices, and how readers can unsubscribe.</p>
    <h2>External links and shopping</h2>
    <p>Review needed. When the separate storefront launches, confirm its privacy disclosures and how the brand site will link to them.</p>
    <h2>Contact</h2>
    <p>See the <Link href="/contact/">contact page</Link> for business mailing details.</p>
  </EditorialPage>;
}
