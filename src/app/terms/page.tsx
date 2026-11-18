import Link from "next/link";
import { EditorialPage } from "@/components/layout";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/terms/");

export default function Terms() {
  return <EditorialPage title="Terms of Use">
    <p><strong>Effective date: November 17, 2026.</strong> These Terms of Use govern access to <a href={site.siteUrl}>{site.siteUrl}</a> (the "Site"), operated by {site.legalBusinessName} under the ViEli brand ("ViEli," "we," "us"). By using the Site, you agree to these Terms. If you do not agree, please stop using the Site.</p>
    <h2>Purpose of the Site</h2>
    <p>The Site currently provides information about the ViEli brand and its movement and wellness philosophy. It is not an online store and does not presently offer purchases, accounts, or paid subscriptions. Product availability, descriptions, and launch details may change. Any future store may be subject to separate purchasing, shipping, return, and privacy terms.</p>
    <h2>Permitted use</h2>
    <p>You may browse the Site for lawful personal and informational purposes. You agree not to interfere with its security or availability, attempt unauthorized access, introduce malicious code, scrape it in a manner that disrupts service, or use it in violation of applicable laws or others' rights.</p>
    <h2>Brand and intellectual property</h2>
    <p>Unless otherwise indicated, website text, graphics, layouts, trademarks, logos, and other original content are owned by or licensed to {site.legalBusinessName} and protected by applicable law. You may not reproduce or use the ViEli name, logo, or content commercially without prior written permission, except as permitted by law.</p>
    <h2>Wellness information</h2>
    <p>Any yoga, Pilates, movement, or wellness-related content is provided for general information only and is not medical advice, diagnosis, or treatment. Exercise carries inherent risks; consider your circumstances and consult a qualified professional when appropriate. Stop any activity that causes pain or concerning symptoms.</p>
    <h2>Accuracy and availability</h2>
    <p>We aim to keep content useful and accurate, but the Site and its materials are provided on an "as available" basis. We do not guarantee uninterrupted access, the absence of errors, or that all descriptions remain current. To the extent permitted by law, we disclaim implied warranties, including merchantability, fitness for a particular purpose, and noninfringement. Nothing in these Terms excludes rights or warranties that cannot lawfully be excluded.</p>
    <h2>Third-party links</h2>
    <p>The Site may link to third-party websites, including a future separate ViEli storefront. Those sites may have their own terms and privacy policies. We are not responsible for third-party content or services except where applicable law requires otherwise.</p>
    <h2>Limitation of liability</h2>
    <p>To the fullest extent permitted by law, {site.legalBusinessName} and its personnel will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the Site. This limitation does not apply where prohibited by law, including for liability that cannot legally be restricted.</p>
    <h2>Applicable law</h2>
    <p>These Terms are governed by the laws of the State of California, without regard to conflicts-of-law principles, except where mandatory consumer-protection laws require otherwise. We do not restrict any right to bring a claim in a forum that applicable law makes available to you.</p>
    <h2>Changes</h2>
    <p>We may revise the Site and these Terms from time to time. Updated Terms will be posted with a revised effective date. Continued use after updated Terms take effect constitutes acceptance to the extent permitted by law.</p>
    <h2>Contact</h2>
    <p>{site.legalBusinessName} — ViEli<br />1401 21st ST<br />Sacramento, CA 95811<br />United States<br /><a href="mailto:admin@vieli.us">admin@vieli.us</a></p>
    <p>See also our <Link href="/privacy/">Privacy Policy</Link>.</p>
  </EditorialPage>;
}
