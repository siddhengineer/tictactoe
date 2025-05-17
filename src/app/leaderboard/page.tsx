
"use client";
import { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import LeaderboardDisplay from "@/components/leaderboard/LeaderboardDisplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LeaderboardPage() {
  const { setActiveTheme, activeTheme } = useAppContext();

  useEffect(() => {
    setActiveTheme("modern");
  }, [setActiveTheme]);

  return (
    <main className="flex flex-col items-center min-h-full p-4">
      <Card className={cn("w-full max-w-2xl shadow-xl", activeTheme === "retro" ? "card retro-pixel-border" : "")}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
             <Trophy className={cn("h-12 w-12", activeTheme === "retro" ? "text-accent" : "text-primary")} />
          </div>
          <CardTitle className={cn("text-3xl font-bold", activeTheme === "retro" ? "retro-text-shadow" : "")}>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <LeaderboardDisplay />
        </CardContent>
      </Card>
    </main>
  );
}
