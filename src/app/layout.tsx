import type { Metadata } from "next";
import { Geist, Geist_Mono, Love_Ya_Like_A_Sister, Ms_Madi } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lylas = Love_Ya_Like_A_Sister({
  variable: "--font-love",
  weight: ['400'],
});

const madi = Ms_Madi({
  variable: "--font-madi",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Onboarding docente de Canoas",
  description: "ONBOARDING DOS DOCENTES DA REDE DO MUNICÍPIO DE CANOAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lylas.variable} ${madi.variable} h-full antialiased`}
    >
      <GoogleAnalytics gaId="G-2SJF7EQSS3" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
