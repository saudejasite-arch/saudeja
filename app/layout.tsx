import type { Metadata } from "next";
import { Allerta, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTag } from '@next/third-parties/google';
import Script from "next/script";
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
  // CONFIGURAÇÃO DE FAVICONS (Ícone do Google)
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
    shortcut: ['/icon.png'],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.saudeja.com.br",
    title: "Saúde Já | Sua saúde em primeiro lugar",
    description:
      "Atendimento humanizado, especialistas qualificados e exames modernos. Agende sua consulta pelo WhatsApp.",
    siteName: "Clínica Saúde Já",
    images: [
      {
        url: "/og-image.jpg",
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
    "telephone": "+558132045760",
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
      "latitude": -8.034,
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
      "https://www.instagram.com/clinica.saudeja/",
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

        {/* PIXEL DA META - NOVO GESTOR */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2885994798237464');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`font-sans ${aspekta.variable} ${poppins.variable} antialiased`}
      >
        {/* FALLBACK DO PIXEL DA META */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2885994798237464&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

        {/* GOOGLE TAG - NOVO GESTOR */}
        <GoogleTag gaId="GT-PBSXCT9F" />
      </body>
    </html>
  );
}