
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// Removed Press_Start_2P import
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Tic Tac Toe - Elegant Play",
  description: "Play a clean and elegant game of Tic Tac Toe.",
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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased flex flex-col min-h-screen`}
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
