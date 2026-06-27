import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Rubani Hub | Your Flight Begins Here",
    template: "%s | Rubani Hub",
  },
  description:
    "Kenya's premier aviation mentorship and pilot training hub. PPL, CPL ground school, helicopter training, simulator sessions, and career guidance for aspiring pilots in Kenya and Africa.",
  keywords: [
    "pilot training Kenya",
    "aviation school Nairobi",
    "PPL ground school Kenya",
    "how to become a pilot in Kenya",
    "CPL Kenya",
    "helicopter pilot course Africa",
    "aviation mentorship Kenya",
    "Rubani Hub",
  ],
  openGraph: {
    title: "Rubani Hub | Your Flight Begins Here",
    description:
      "Kenya's premier aviation mentorship and pilot training hub.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
