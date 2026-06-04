import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:  "Compro Autos Usados en Buenos Aires | Pago Inmediato | ComproAutosYa",
    template: "%s | ComproAutosYa",
  },
  description: SITE.description,
  keywords: [
    "compro autos usados Buenos Aires",
    "vender auto usado AMBA",
    "cotización auto usado gratis",
    "compra de autos usados Argentina",
    "vender auto rápido Buenos Aires",
    "compramos autos usados GBA",
    "mejor precio autos usados",
    "vendo mi auto Buenos Aires",
  ],
  authors:   [{ name: SITE.name, url: SITE.url }],
  creator:   SITE.name,
  publisher: SITE.name,
  robots:    { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type:        "website",
    locale:      "es_AR",
    url:         SITE.url,
    siteName:    SITE.name,
    title:       "Compro Autos Usados en Buenos Aires | Pago Inmediato",
    description: SITE.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ComproAutosYa" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Compro Autos Usados Buenos Aires | ComproAutosYa",
    description: SITE.description,
    images:      ["/og-image.jpg"],
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": SITE.name,
    "description": SITE.description,
    "url": SITE.url,
    "telephone": SITE.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": -34.6037, "longitude": -58.3816 },
    "areaServed": [
      { "@type": "City", "name": "Buenos Aires" },
      { "@type": "State", "name": "Gran Buenos Aires" }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }],
    "sameAs": [`https://wa.me/${SITE.whatsapp}`]
  };

  return (
    <html lang="es-AR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
