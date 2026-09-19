import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site, isPlaceholder } from "@/data/site";
import { instagramUrl } from "@/lib/links";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  ...(isPlaceholder(site.siteUrl) ? {} : { metadataBase: new URL(site.siteUrl) }),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.shortName,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

/** Restaurant structured data. Address and phone are only included once real values are set. */
function jsonLd() {
  const c = site.contact;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.shortName,
    description: site.description,
    slogan: site.tagline,
    servesCuisine: ["Hyderabadi", "Biryani"],
    sameAs: [instagramUrl],
    ...(isPlaceholder(site.siteUrl) ? {} : { url: site.siteUrl }),
    ...(isPlaceholder(c.phone) ? {} : { telephone: c.phone }),
    ...(isPlaceholder(c.address)
      ? {}
      : { address: { "@type": "PostalAddress", streetAddress: c.address } }),
    ...(isPlaceholder(c.hours) ? {} : { openingHours: c.hours }),
    ...(isPlaceholder(c.orderUrl) ? {} : { acceptsReservations: false, potentialAction: { "@type": "OrderAction", target: c.orderUrl } }),
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Manrope:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
