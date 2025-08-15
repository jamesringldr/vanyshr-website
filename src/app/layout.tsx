import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanyshr - Privacy & Data Removal SaaS",
  description: "Protect your privacy with Vanyshr's comprehensive data removal service. Remove your personal information from data brokers and regain control of your digital footprint.",
  keywords: "privacy, data removal, data brokers, personal information, digital privacy, online privacy, data protection",
  authors: [{ name: "Vanyshr" }],
  creator: "Vanyshr",
  publisher: "Vanyshr",
  robots: "index, follow",
  openGraph: {
    title: "Vanyshr - Privacy & Data Removal SaaS",
    description: "Protect your privacy with Vanyshr's comprehensive data removal service. Remove your personal information from data brokers and regain control of your digital footprint.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanyshr - Privacy & Data Removal SaaS",
    description: "Protect your privacy with Vanyshr's comprehensive data removal service.",
  },
  icons: {
    icon: '/vanyshr-website/assets/Logo/Favicon.svg',
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
        <link rel="icon" href="/vanyshr-website/assets/Logo/Favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
