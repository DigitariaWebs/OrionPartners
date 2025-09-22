import type { Metadata, Viewport } from "next";
import "./globals.css";
import ModalProvider from "../components/providers/ModalProvider";

export const metadata: Metadata = {
  title: "Orion Conseil",
  description: "Professional solutions and services",
  keywords: ["professional", "services", "solutions", "business"],
  authors: [{ name: "Orion Conseil" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
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
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
