import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"));

import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "John Invisible Grills | Premium Invisible Grills Installation in Hyderabad",
    template: "%s | John Invisible Grills"
  },
  description: "Protect your family and pets without blocking your view. John Invisible Grills offers premium high-tensile SS 316 invisible safety grills installation across Hyderabad, headquartered in KPHB Kukatpally.",
  metadataBase: new URL("https://johninvisiblegrills.com"), // Placeholder URL
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "John Invisible Grills | Premium Invisible Safety Grills Hyderabad",
    description: "Keep balconies, windows, and stairs 100% safe. Nylon-shielded 316 marine-grade steel cables. Headquartered in KPHB, Kukatpally.",
    url: "https://johninvisiblegrills.com",
    siteName: "John Invisible Grills",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "John Invisible Grills | Balcony Safety Hyderabad",
    description: "Premium high-tensile invisible grills for apartments and villas in Hyderabad. Call 9912373373 for a free quote."
  },
  verification: {
    google: "1A54fFG-XF-TNmCho4lxLYeDiXB4EAB5tp1rjijjll8"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      >
        <head>
          <link rel="preload" href="/images/carousl2.webp" as="image" fetchPriority="high" />
        </head>
        <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <JsonLd />
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brass text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm z-50 focus:outline-none"
        >
          Skip to Content
        </a>

        {/* Sitewide Header — ContactBar + Navbar */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Actions */}
        <FloatingButtons />


      </body>
    </html>
  );
}
