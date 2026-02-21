import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import ModalProvider from "../components/providers/ModalProvider";
import CspHead from "../components/CspHead";

export const metadata: Metadata = {
  title: "Orion Conseil",
  description: "Professional solutions and services",
  keywords: ["professional", "services", "solutions", "business"],
  authors: [{ name: "Orion Conseil" }],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Logos/Logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/Logos/Logo.png",
  },
  openGraph: {
    title: "Orion Conseil",
    description: "Professional solutions and services",
    images: ["/Logos/Logo.png"],
    type: "website",
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
      <body className="antialiased">
        <CspHead />
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual GA ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
