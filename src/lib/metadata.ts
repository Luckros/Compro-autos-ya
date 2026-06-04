import type { Metadata } from "next";

const BASE_URL = "https://comproautosya.com.ar";
const SITE_NAME = "ComproAutosYa";
const PHONE = "+541171576353";
const WHATSAPP_NUMBER = "5491171576353";

// ─── Schema Markup ────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: SITE_NAME,
  description:
    "Compramos tu auto usado al mejor precio. Pago inmediato, trámites ágiles y seriedad absoluta. Atendemos en Buenos Aires y GBA.",
  url: BASE_URL,
  telephone: PHONE,
  priceRange: "$$",
  image: `${BASE_URL}/og-image.jpg`,
  logo: `${BASE_URL}/logo.png`,
  areaServed: [
    { "@type": "City", name: "Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
    { "@type": "Country", name: "Argentina" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    `https://wa.me/${WHATSAPP_NUMBER}`,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Compra de autos usados",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tasación gratuita de auto usado",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Compra inmediata de autos usados",
        },
      },
    ],
  },
};

// ─── FAQ Schema ───────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tardan en hacer la oferta por mi auto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En menos de 24 horas te hacemos una oferta concreta. Si nos contactás por WhatsApp, la respuesta es inmediata durante el horario de atención.",
      },
    },
    {
      "@type": "Question",
      name: "¿Compran autos con deuda o con multas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, compramos autos en cualquier situación administrativa. Nuestro departamento de trámites se ocupa de resolver cualquier inconveniente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipos de autos compran?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compramos autos nacionales e importados de gama media y alta. No ponemos límite de kilómetros ni año, cotizamos cualquier vehículo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo recibo el pago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El pago es inmediato el mismo día de la operación, por transferencia bancaria o en efectivo según lo acordado.",
      },
    },
  ],
};

// ─── Default metadata ─────────────────────────────────────────
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vender Auto Usado en Buenos Aires | Pago Inmediato | ComproAutosYa",
    template: "%s | ComproAutosYa",
  },
  description:
    "Compramos tu auto usado al mejor precio en Buenos Aires y GBA. Tasación gratis, pago el mismo día, trámites incluidos. Llamanos ahora: (11) 7157-6353.",
  keywords: [
    "compro autos usados Buenos Aires",
    "vender auto usado rápido Argentina",
    "compra venta autos usados GBA",
    "tasación gratuita auto usado",
    "vendo mi auto urgente Buenos Aires",
    "compro autos gama alta Argentina",
    "comprar auto usado CABA",
    "vender auto con deuda Argentina",
  ],
  authors: [{ name: "ComproAutosYa" }],
  creator: "ComproAutosYa",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: "Vender Auto Usado en Buenos Aires | Pago Inmediato | ComproAutosYa",
    description:
      "Tasación gratis, pago el mismo día. Compramos autos usados en Buenos Aires y GBA con seriedad absoluta.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ComproAutosYa - Compramos tu auto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vender Auto Usado | ComproAutosYa",
    description: "Tasación gratis y pago inmediato. Buenos Aires y GBA.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: BASE_URL },
  verification: {
    // google: "TU_CODIGO_DE_VERIFICACION", // ← Activar al conectar Search Console
  },
};

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20vender%20mi%20auto.%20%C2%BFMe%20pueden%20hacer%20una%20tasaci%C3%B3n%3F`;
