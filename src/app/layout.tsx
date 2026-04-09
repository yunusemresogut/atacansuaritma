import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://berkaysu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/atacan-logo.ico",
    shortcut: "/atacan-logo.ico",
    apple: "/atacan-logo.ico",
  },
  title: {
    default: "Atacan Su Arıtma Teknolojileri | Su Arıtma Cihazları",
    template: "%s | Atacan Su Arıtma Teknolojileri",
  },
  description:
    "Ev tipi ve endüstriyel su arıtma cihazları. Sağlıklı ve temiz su için profesyonel çözümler. Reverse osmoz, UV sterilizasyon ve alkali su sistemleri.",
  keywords: ["su arıtma", "su arıtma cihazı", "ev tipi su arıtma", "reverse osmoz", "su arıtma cihazları", "içme suyu"],
  authors: [{ name: "Atacan Su Arıtma Teknolojileri" }],
  creator: "Atacan Su Arıtma Teknolojileri",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Atacan Su Arıtma Teknolojileri",
    title: "Atacan Su Arıtma Teknolojileri | Su Arıtma Cihazları",
    description: "Ev tipi ve endüstriyel su arıtma cihazları. Sağlıklı ve temiz su için profesyonel çözümler.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
