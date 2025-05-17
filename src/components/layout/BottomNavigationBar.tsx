
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Gamepad2, Trophy, Settings2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// useAppContext for activeTheme removed

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/play", label: "Play", icon: Gamepad2 },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/settings", label: "Settings", icon: Settings2 },
];

export default function BottomNavigationBar() {
  const pathname = usePathname();
  // activeTheme related logic removed

  return (
    <nav 
      className={cn(
        "fixed bottom-0 left-0 right-0 h-16 sm:h-20 border-t bg-card text-card-foreground shadow-lg",
        "flex items-center justify-around"
        // activeTheme specific classes removed
      )}
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full transition-colors",
              "text-muted-foreground hover:text-primary",
              isActive && "text-primary"
              // activeTheme specific classes removed
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <item.icon 
              className={cn(
                "h-6 w-6 sm:h-7 sm:w-7 mb-0.5 sm:mb-1"
                // activeTheme specific classes removed
              )} 
              strokeWidth={isActive ? 2.5 : 2} 
            />
            <span 
              className={cn(
                "text-xs sm:text-sm"
                // activeTheme specific classes removed
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
