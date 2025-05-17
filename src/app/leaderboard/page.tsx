
"use client";
// useEffect and useAppContext for theme removed
import LeaderboardDisplay from "@/components/leaderboard/LeaderboardDisplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LeaderboardPage() {
  // activeTheme and setActiveTheme related logic removed

  return (
    <main className="flex flex-col items-center min-h-full p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
             <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold">Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <LeaderboardDisplay />
        </CardContent>
      </Card>
    </main>
  );
}
