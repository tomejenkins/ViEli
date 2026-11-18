import Link from "next/link";
import { site, tagline } from "@/config/site";

const pillars = [
  { title: "Move", description: "Explore strength, mobility, and purposeful movement." },
  { title: "Balance", description: "Create room for recovery, mindfulness, and everyday wellbeing." },
  { title: "Become", description: "Embrace progress, personal growth, and the journey ahead." },
];

export function Pillars() {
  return <ul className="pillars">
    {pillars.map(({ title, description }) => (
      <li key={title}><h3>{title}</h3><p>{description}</p></li>
    ))}
  </ul>;
}

export function Hero() {
  return <section className="shell hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Move with intention</p>
      <h1 id="hero-title">Find your balance.<br /><em>Become your best.</em></h1>
      <p className="hero-description">Thoughtfully considered essentials for movement, balance, and everyday wellbeing.</p>
      <div className="actions">
        <a className="button" href="#discover">Discover ViEli <span aria-hidden="true">↓</span></a>
        <Link className="text-link" href="/about/">Our Philosophy <span aria-hidden="true">→</span></Link>
      </div>
    </div>
    <div className="hero-panel">
      <div className="panel-frame" />
      <div className="panel-orbit" />
      <div className="panel-orbit panel-orbit-cross" />
      <p className="panel-brand">{site.siteName}</p>
      <p className="panel-tagline eyebrow">{tagline}</p>
    </div>
  </section>;
}

export function Philosophy() {
  return <section id="discover" className="philosophy" aria-labelledby="philosophy-title">
    <div className="shell section-inner">
      <div className="section-heading">
        <p className="eyebrow">Our philosophy</p>
        <h2 id="philosophy-title">Movement is more<br className="desktop-break" /> than a <em>practice.</em></h2>
        <p>At ViEli, we believe movement creates space to reconnect with yourself. Inspired by the balance of strength and stillness, we are building a collection of thoughtful essentials for the way you move, live, and become.</p>
      </div>
      <Pillars />
    </div>
  </section>;
}

export function CollectionPreview() {
  return <section className="shell section-inner collection" aria-labelledby="collection-title">
    <div className="collection-art" aria-hidden="true"><span /><span /><span /></div>
    <div>
      <p className="eyebrow">{site.storeEnabled ? "The collection" : "Collection coming soon"}</p>
      <h2 id="collection-title">Essentials for<br /><em>your practice.</em></h2>
      {site.storeEnabled ? <a className="button" href={site.storeUrl}>Shop ViEli →</a> : <p>Thoughtfully selected movement essentials are on their way.</p>}
    </div>
  </section>;
}

export function LaunchAnnouncement() {
  const newsletterUrl = site.newsletterEnabled && site.newsletterUrl;
  return <section className="launch" aria-labelledby="launch-title">
    <div className="shell section-inner">
      <p className="eyebrow">The ViEli newsletter</p>
      <h2 id="launch-title">Something intentional<br /> <em>is taking shape.</em></h2>
      <p>We’re preparing to introduce ViEli, a new approach to everyday movement essentials.</p>
      {newsletterUrl ? <a className="button" href={newsletterUrl}>Stay in the loop →</a> : <p className="launch-status">Newsletter coming soon</p>}
    </div>
  </section>;
}
