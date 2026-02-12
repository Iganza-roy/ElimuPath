import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import AiChatbot from "./components/AiChatbot";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elimupath - Find Your Path to University",
  description: "Elimupath - Find Your Path to University. Get fast, AI-powered guidance to match your grades with the perfect course.",
  keywords: ["kcse", "edtech", "university", "career", "elimupath"],
  openGraph: {
    title: "Elimupath - Find Your Path to University",
    description: "Elimupath - Find Your Path to University. Get fast, AI-powered guidance to match your grades with the perfect course.",
    url: "https://elimupath.com", // Keeping it generic as no domain provided
    siteName: "ElimuPath",
    images: [
      {
        url: "/Elimu_path_prev.jpg",
        width: 1200,
        height: 630,
        alt: "ElimuPath Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elimupath - Find Your Path to University",
    description: "Elimupath - Find Your Path to University. Get fast, AI-powered guidance to match your grades with the perfect course.",
    images: ["/Elimu_path_prev.jpg"],
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

export const viewport: Viewport =  {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${raleway.variable} antialiased font-sans`}
        >
          {children}
          <AiChatbot />
        </body>
      </html>
    </ClerkProvider>
  );
}
