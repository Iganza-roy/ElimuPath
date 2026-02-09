import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
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
  title: "ElimuPath",
  description: "Navigate your university journey with AI-powered guidance.",
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
