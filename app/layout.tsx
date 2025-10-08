import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const interSans = Inter({
  variable: "--font-inter-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isourcia | Créativité, Stratégie & Innovation",
  description:
    "Avec nous, la différence, c’est l’impact. Nos talents vont bien au-delà d’une prestation : ils traduisent vos valeurs et donnent de la force à vos projets. Créativité, stratégie, innovation : nous transformons vos besoins en solutions concrètes, adaptées à vos ambitions.",
  keywords: [
    "Isourcia",
    "agence créative",
    "stratégie digitale",
    "innovation",
    "branding",
    "communication",
    "design",
    "marketing digital",
    "solutions sur mesure",
    "outsourcing",
  ],
  authors: [{ name: "Isourcia" }],
  creator: "Isourcia",
  publisher: "Isourcia",
  openGraph: {
    title: "Isourcia — Créativité, Stratégie & Innovation",
    description:
      "Avec nous, la différence, c’est l’impact. Nos talents vont bien au-delà d’une prestation : ils traduisent vos valeurs et donnent de la force à vos projets.",
    url: "https://isourcia.ca",
    siteName: "Isourcia",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "https://isourcia.ca/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Isourcia — Agence créative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isourcia — Créativité, Stratégie & Innovation",
    description:
      "Nos talents traduisent vos valeurs et donnent de la force à vos projets. Découvrez notre approche créative et stratégique.",
    site: "@isourcia",
    creator: "@isourcia",
    images: ["https://isourcia.ca/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Agence créative et stratégie digitale",
  metadataBase: new URL("https://isourcia.ca"),
  alternates: {
    canonical: "https://isourcia.ca",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        {children}
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </body>
    </html>
  );
}
