import { Address, EditorialPage } from "@/components/layout";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact/");

export default function Contact() {
  return <EditorialPage title="Contact">
    {site.contactEmail
      ? <p>Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
      : <p>Email contact details are coming soon. You can reach us by mail at the address below.</p>}
    <h2>Business mailing address</h2>
    <p>{site.legalBusinessName}</p>
    <Address />
  </EditorialPage>;
}
