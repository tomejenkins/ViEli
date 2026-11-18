import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { pages, site, tagline } from "@/config/site";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about/", label: pages["/about/"].title },
  { href: "/journal/", label: pages["/journal/"].title },
  { href: "/contact/", label: pages["/contact/"].title },
];

function NavigationLinks() {
  return <>
    {navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
    {site.storeEnabled && <a href={site.storeUrl}>Shop<span className="sr-only"> ViEli</span> →</a>}
  </>;
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand-name" href="/" aria-label="ViEli home"><Image src="/brand/vieli-logo.svg" alt="ViEli" width={84} height={84} priority /></Link>
        <nav className="desktop-nav" aria-label="Main"><NavigationLinks /></nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Main"><NavigationLinks /></nav>
        </details>
      </div>
    </header>
  );
}

export function Address() {
  const { street, city, region, zip, country } = site.businessAddress;
  return <address>{street}<br />{city}, {region} {zip}<br />{country}</address>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div><Link href="/" className="brand-name" aria-label="ViEli home"><Image src="/brand/vieli-logo.svg" alt="ViEli" width={92} height={92} /></Link><p className="eyebrow">{tagline}</p></div>
          <nav aria-label="Footer">
            <NavigationLinks />
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Use</Link>
          </nav>
          <div><p>ViEli is a brand operated by {site.legalBusinessName}.</p><p><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p><Address /></div>
        </div>
        <div className="footer-end">
          <small>© {new Date().getUTCFullYear()} {site.legalBusinessName}. All rights reserved.</small>
          {site.socialLinks.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
        </div>
      </div>
    </footer>
  );
}

export function EditorialPage({ title, children, label }: { title: string; children: ReactNode; label?: string }) {
  return (
    <article className="shell editorial">
      {label && <p className="eyebrow">{label}</p>}
      <h1>{title}</h1>
      <div className="editorial-body">{children}</div>
    </article>
  );
}
