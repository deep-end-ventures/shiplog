import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ShipLog — AI-Powered Changelog & Release Notes Generator",
    template: "%s | ShipLog",
  },
  description:
    "Auto-generate beautiful, human-readable changelogs from your GitHub commits and PRs. The AI changelog generator that saves developers hours every release.",
  keywords: [
    "AI changelog generator",
    "automated release notes",
    "changelog tool for developers",
    "release notes generator",
    "github changelog",
    "developer tools",
  ],
  authors: [{ name: "Deep End Ventures", url: "https://deependventures.com" }],
  creator: "Deep End Ventures",
  metadataBase: new URL("https://shiplog.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiplog.dev",
    siteName: "ShipLog",
    title: "ShipLog — AI-Powered Changelog & Release Notes Generator",
    description:
      "Auto-generate beautiful, human-readable changelogs from your GitHub commits and PRs.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipLog — AI-Powered Changelog & Release Notes Generator",
    description:
      "Auto-generate beautiful, human-readable changelogs from your GitHub commits and PRs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
