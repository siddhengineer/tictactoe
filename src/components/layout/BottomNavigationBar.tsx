
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Gamepad2, Trophy, Settings2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context/AppContext";

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
  const { activeTheme } = useAppContext();

  return (
    <nav 
      className={cn(
        "fixed bottom-0 left-0 right-0 h-16 sm:h-20 border-t bg-card text-card-foreground shadow-lg",
        "flex items-center justify-around",
        activeTheme === "retro" && "retro-pixel-border bg-primary" 
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
              isActive && "text-primary",
              activeTheme === "retro" && "hover:text-accent-foreground",
              activeTheme === "retro" && isActive && "text-accent-foreground"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <item.icon 
              className={cn(
                "h-6 w-6 sm:h-7 sm:w-7 mb-0.5 sm:mb-1",
                activeTheme === "retro" && "filter drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]"
              )} 
              strokeWidth={isActive ? 2.5 : 2} 
            />
            <span 
              className={cn(
                "text-xs sm:text-sm",
                activeTheme === "retro" ? "retro-text-shadow" : ""
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
