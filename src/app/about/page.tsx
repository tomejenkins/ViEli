import { Pillars } from "@/components/home";
import { EditorialPage } from "@/components/layout";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/about/");

export default function About() {
  return <EditorialPage title="Our Story">
    <p>ViEli is an emerging movement and wellness brand inspired by the balance of strength and stillness. We’re building a collection of thoughtful essentials for the way you move, live, and become.</p>
    <h2>Movement is more than a practice.</h2>
    <p>We believe movement creates space to reconnect with yourself. These three ideas guide what we’re creating.</p>
    <Pillars />
  </EditorialPage>;
}
