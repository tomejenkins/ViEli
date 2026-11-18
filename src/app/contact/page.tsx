import { Address, EditorialPage } from "@/components/layout";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/contact/");

export default function Contact() {
  return <EditorialPage title="Contact">
    <p>Questions about ViEli? Reach us at <a href="mailto:admin@vieli.us">admin@vieli.us</a>.</p>
    <h2>Business mailing address</h2>
    <p>{site.legalBusinessName}</p>
    <Address />
  </EditorialPage>;
}
