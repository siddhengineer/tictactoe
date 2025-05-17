
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// GeistMono removed as it's not actively used and we're simplifying fonts
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import { Toaster } from "@/components/ui/toaster";

// Actual icon files (icon-192x192.png, icon-512x512.png, apple-touch-icon.png) 
// need to be created and placed in the /public folder.
export const metadata: Metadata = {
  title: "Retro Game Zone - Tic Tac Toe",
  description: "Play a clean and elegant game of Tic Tac Toe in the Retro Game Zone.",
  manifest: "/manifest.json",
  icons: { 
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png", // Standard name for Apple touch icon
  },
  themeColor: "#3498db", // Primary color from PRD
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${GeistSans.variable} antialiased flex flex-col h-screen overflow-hidden`}
      >
        <AppProvider>
          <div className="flex-grow overflow-y-auto w-full max-w-md mx-auto pb-16 sm:pb-20"> {/* Constrained width, centered, allows internal scroll */}
            {children}
          </div>
          <BottomNavigationBar />
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
