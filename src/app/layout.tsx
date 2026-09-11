import type { Metadata } from "next";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { config } from "@/data/config";
export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <span
          hidden
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!-- THESIS: Real software leads Bruce Vo's portfolio. OWN-WORLD: Chalk, moss, Hanken Grotesk, open project rows. STORY: Inspect work, trace skills to projects, contact Bruce. FIRST VIEWPORT: Large name left; selectable RootLens application views right. FORM: User-pinned Aman-inspired work index, seed 3b7f2a6b constrained by the approved reference. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->`,
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <Toaster />
        {process.env.UMAMI_DOMAIN && process.env.UMAMI_SITE_ID && (
          <Script
            src={process.env.UMAMI_DOMAIN}
            data-website-id={process.env.UMAMI_SITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
