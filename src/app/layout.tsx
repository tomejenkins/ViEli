import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/manrope";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import { Footer, Header } from "@/components/layout";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: site.siteName, template: `%s | ${site.siteName}` },
  icons: { icon: "/brand/vieli-logo.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}>{children}</main>
    <Footer />
  </body></html>;
}
