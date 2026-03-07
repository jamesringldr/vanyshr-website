import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanyshr — AI-Powered Data Removal & Privacy Protection",
  description:
    "Vanyshr uses AI to find and remove your personal data from 100+ data brokers. Protect yourself from scammers, spammers, and identity thieves. Start with a free QuickScan.",
  keywords:
    "data removal, data broker removal, privacy protection, personal data removal, digital privacy, online privacy, data protection, identity theft prevention, remove personal information",
  authors: [{ name: "Vanyshr" }],
  creator: "Vanyshr",
  publisher: "Vanyshr",
  robots: "index, follow",
  openGraph: {
    title: "Vanyshr — AI-Powered Data Removal & Privacy Protection",
    description:
      "Vanyshr uses AI to find and remove your personal data from 100+ data brokers. Start with a free QuickScan — no credit card required.",
    type: "website",
    locale: "en_US",
    siteName: "Vanyshr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanyshr — AI-Powered Data Removal & Privacy Protection",
    description:
      "Vanyshr uses AI to find and remove your personal data from 100+ data brokers. Start free.",
  },
  icons: {
    icon: "/assets/LogoFiles/PrimaryIcon-outline.svg",
    shortcut: "/assets/LogoFiles/PrimaryIcon-outline.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/LogoFiles/PrimaryIcon-outline.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-brand-bg text-white font-ubuntu">
        {children}
      </body>
    </html>
  );
}
