import type { Metadata } from "next";
import { Allerta, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const aspekta = Allerta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aspekta",
  display: "swap",
});

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// SEO: Configuração Completa
export const metadata: Metadata = {
  title: {
    default: "Saúde Já | Clínica Médica em Recife - Cardiologia e Pediatria",
    template: "%s | Saúde Já",
  },
  description:
    "Agende sua consulta na Clínica Saúde Já em Campo Grande, Recife. Especialistas em Cardiologia, Pediatria e Ginecologia. Exames modernos e atendimento humanizado.",
  keywords: [
    "Clínica médica Recife",
    "Cardiologista Recife",
    "Pediatra Recife",
    "Ginecologista Recife",
    "Exames laboratoriais",
    "Campo Grande Recife",
    "Saúde Já",
    "Consulta médica popular",
  ],
  authors: [{ name: "Clínica Saúde Já" }],
  creator: "Saúde Já",
  publisher: "Saúde Já",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.saudeja.com.br", // Substitua pelo seu domínio real quando tiver
    title: "Saúde Já | Sua saúde em primeiro lugar",
    description:
      "Atendimento humanizado, especialistas qualificados e exames modernos. Agende sua consulta pelo WhatsApp.",
    siteName: "Clínica Saúde Já",
    images: [
      {
        url: "/og-image.jpg", // Recomendado: criar uma imagem 1200x630px com a logo para compartilhamento
        width: 1200,
        height: 630,
        alt: "Fachada da Clínica Saúde Já",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saúde Já | Clínica Médica em Recife",
    description: "Cardiologia, Pediatria e Exames em Campo Grande, Recife.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SCHEMA MARKUP (JSON-LD): Vital para SEO Local (Google Maps e Busca Local)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Clínica Saúde Já",
    "image": "https://www.saudeja.com.br/logo23.png",
    "@id": "https://www.saudeja.com.br",
    "url": "https://www.saudeja.com.br",
    "telephone": "+5581999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. N S da Glória, 203 - Campo Grande",
      "addressLocality": "Recife",
      "addressRegion": "PE",
      "postalCode": "52031-050",
      "addressCountry": "BR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.034, // Coordenadas aproximadas de Campo Grande/Recife (ajuste se tiver as exatas)
      "longitude": -34.89,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        "opens": "08:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00",
      },
    ],
    "priceRange": "$$",
    "medicalSpecialty": ["Cardiologia", "Pediatria", "Ginecologia", "Geriatria"],
    "sameAs": [
      "https://www.instagram.com/saudeja",
      "https://www.facebook.com/saudeja",
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* Injeção do Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#61B097" />
      </head>
      <body
        className={`font-sans ${aspekta.variable} ${poppins.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}