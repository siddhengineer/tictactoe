
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// GeistMono removed as it's not actively used and we're simplifying fonts
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import BottomNavigationBar from "@/components/layout/BottomNavigationBar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Tic Tac Toe - Elegant Play",
  description: "Play a clean and elegant game of Tic Tac Toe.",
  manifest: "/manifest.json",
  icons: { 
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
