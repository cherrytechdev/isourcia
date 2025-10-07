import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Isourcia",
  description: "Nous sommes une entreprise spécialisée dans les solutions digitales complètes pour accompagner les TPE, PME et startups dans leur transformation numérique. Notre mission : simplifier le digital et accélérer votre croissance grâce à des services flexibles, modernes et parfaitement adaptés à vos besoins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
