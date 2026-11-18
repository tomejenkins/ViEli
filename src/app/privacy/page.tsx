import Link from "next/link";
import { EditorialPage } from "@/components/layout";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/privacy/");

export default function Privacy() {
  return <EditorialPage title="Privacy Policy">
    <p><strong>Effective date: November 17, 2026.</strong> This Privacy Policy describes how {site.legalBusinessName}, operating the ViEli brand ("ViEli," "we," "us"), handles information in connection with <a href={site.siteUrl}>{site.siteUrl}</a> (the "Site"). It does not cover a future separate online store, which will have its own applicable notices.</p>
    <h2>Information we receive</h2>
    <p><strong>Information you provide.</strong> If you email us at <a href="mailto:admin@vieli.us">admin@vieli.us</a>, we receive your email address and any information you include in your message. Please avoid sending sensitive personal information.</p>
    <p><strong>Technical information.</strong> Our web hosting and network service providers may automatically process information necessary to deliver and secure the Site, including IP address, browser and device details, request dates and times, requested pages, referral information, and security or diagnostic logs. The precise information and retention period depend on provider settings.</p>
    <p>At the time this policy was drafted, the Site does not provide accounts, a checkout, an on-site contact form, or an active email newsletter signup. We will update this policy before introducing features that materially change our data practices.</p>
    <h2>How information is used</h2>
    <p>We use information to respond to inquiries, operate and secure the Site, detect misuse, troubleshoot technical problems, meet legal obligations, and protect our rights. We do not use your email correspondence to enroll you in marketing messages without an appropriate basis or consent.</p>
    <h2>How information is disclosed</h2>
    <p>We may share information with service providers that help us host, secure, and operate the Site or manage business email; with authorities where required by law; or when reasonably necessary to protect people, rights, or the security of our services. We do not sell personal information or share it for cross-context behavioral advertising as part of the current Site's intended functionality. This statement must be reassessed if advertising, tracking, or commerce integrations are added.</p>
    <h2>Cookies and analytics</h2>
    <p>The Site does not intentionally implement advertising cookies or a marketing-tracking system in its application code. Our infrastructure provider may use necessary security technologies or process technical request data. If optional analytics or additional cookies are enabled in hosting settings, we will update this notice and provide any required choices.</p>
    <h2>Data retention and security</h2>
    <p>We keep email correspondence for as long as reasonably needed to address inquiries, maintain relevant business records, resolve disputes, or comply with legal obligations, then delete it when no longer needed. Hosting and security logs are retained under the applicable provider configuration. We use reasonable safeguards, but no transmission or storage system is completely secure.</p>
    <h2>Your privacy choices and rights</h2>
    <p>You may request information about, correction of, or deletion of personal information associated with your correspondence by emailing <a href="mailto:admin@vieli.us">admin@vieli.us</a>. We will review and respond as required by applicable law and may need to verify your identity. Residents of certain jurisdictions, including California where applicable, may have additional rights relating to access, correction, deletion, and limits on certain disclosures. Whether particular statutory rights apply depends on the legal requirements and our business practices.</p>
    <h2>Children</h2>
    <p>The Site is intended for a general audience and is not directed to children under 13. We do not knowingly seek personal information from children under 13 through this Site. If you believe a child has supplied information to us, contact us so we can review and address it.</p>
    <h2>External websites</h2>
    <p>Links to third-party websites are governed by those websites' separate privacy practices. Please review their policies before providing information.</p>
    <h2>Changes to this policy</h2>
    <p>We may update this policy as our Site or services change. We will post the updated policy with a revised effective date and provide additional notice when required.</p>
    <h2>Contact us</h2>
    <p>{site.legalBusinessName} — ViEli<br />1401 21st ST<br />Sacramento, CA 95811<br />United States<br /><a href="mailto:admin@vieli.us">admin@vieli.us</a></p>
    <p>For general questions, see our <Link href="/contact/">contact page</Link>.</p>
  </EditorialPage>;
}
