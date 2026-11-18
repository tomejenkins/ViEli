import Link from "next/link";
import { EditorialPage } from "@/components/layout";
import { journalArticles } from "@/config/journal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("/journal/");

export default function Journal() {
  return <EditorialPage label="Journal" title="Stories for a more intentional practice.">
    <p>Movement, mindfulness, and the everyday rituals that bring us back to balance.</p>
    {journalArticles.length ? <ul className="journal-list">
      {journalArticles.map(({ slug, title, description, publishedOn }) => (
        <li key={slug}>
          <time dateTime={publishedOn}>{publishedOn}</time>
          <h2><Link href={`/journal/${slug}/`}>{title}</Link></h2>
          <p>{description}</p>
        </li>
      ))}
    </ul> : <p className="eyebrow">Journal coming soon.</p>}
  </EditorialPage>;
}
