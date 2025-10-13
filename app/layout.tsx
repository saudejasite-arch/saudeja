import type React from "react";
import type { Metadata } from "next";
import { Allerta as Aspekta } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const aspekta = Aspekta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aspekta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saúde Já - Clínica Médica",
  description:
    "Atendimento humanizado, especialistas qualificados e exames modernos. Agende sua consulta.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${aspekta.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
