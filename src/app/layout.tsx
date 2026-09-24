import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BottomNav from "@/components/BottomNav";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://helloprobash.com"),
  title: {
    default: "Hello Probash | Latest News & Oman Updates",
    template: "%s | Hello Probash",
  },
  description: "Get the latest news, updates from Oman, Bangladesh, Middle East, and around the world on Hello Probash / Hello Oman Bangla.",
  keywords: ["Oman News", "Hello Probash", "Hello Oman Bangla", "Bangladesh News", "প্রবাসী খবর", "ওমান সংবাদ"],
  authors: [{ name: "Hello Probash" }],
  creator: "Hello Probash",
  publisher: "Hello Probash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hello Probash | Latest News",
    description: "Get the latest news and updates from Oman, Bangladesh, and around the world on Hello Probash.",
    siteName: "Hello Probash",
    type: "website",
    locale: "bn_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Probash | Latest News",
    description: "Get the latest news and updates from Oman, Bangladesh, and around the world on Hello Probash.",
  },
  verification: {
    google: [
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
      "2bnTZYoKMs3b7Cz5umkL_MP1PYSSsIk30tY8X_oYOlY",
      "BH8ETC-PJA-AI6rIil0HfPhpTxtU2lFiYQmTBAjfYB8",
    ].filter(Boolean) as string[],
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adSenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${hindSiliguri.className} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {adSenseClientId && (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          {children}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
