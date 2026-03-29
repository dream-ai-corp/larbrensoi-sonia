import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Arbre En Soi — Sylvothérapie & Soins Énergétiques | Sonia | Aubinges",
  description:
    "Retrouvez équilibre, apaisement et vitalité avec Sonia. Séances de sylvothérapie et soins énergétiques près de Bourges. 55€ · 1h à 1h30. Réservez en ligne.",
  keywords:
    "sylvothérapie, soins énergétiques, bien-être, Aubinges, Bourges, Sonia, cristaux, 4 éléments, énergéticienne",
  openGraph: {
    title: "L'Arbre En Soi — Sylvothérapie & Soins Énergétiques",
    description:
      "Retrouvez équilibre et vitalité avec Sonia. Séances de bien-être holistique près de Bourges.",
    url: "https://www.larbrensoi-sonia.com",
    siteName: "L'Arbre En Soi",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
