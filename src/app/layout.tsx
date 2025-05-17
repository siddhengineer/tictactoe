
import type { Metadata } from "next";
// Old import: import { Geist_Sans, Geist_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import { Toaster } from "@/components/ui/toaster";

// For GeistSans and GeistMono from the 'geist' package,
// their .variable property provides a class name that sets the
// CSS variables (--font-geist-sans and --font-geist-mono).
// This matches the existing setup in globals.css.
// No need to call them as functions like with next/font/google.

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retro Game Zone",
  description: "A Tic Tac Toe game with a retro Pokémon twist!",
  manifest: "/manifest.json", // For PWA
  icons: { // Placeholder icons, actual files would be needed
    apple: "/icon-192x192.png", 
    icon: "/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${GeistSans.variable} ${GeistMono.variable} ${pressStart2P.variable} font-modern antialiased flex flex-col min-h-screen`}
      >
        <AppProvider>
          <div className="flex-grow pb-16 sm:pb-20"> {/* Padding for bottom nav */}
            {children}
          </div>
          <BottomNavigationBar />
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
