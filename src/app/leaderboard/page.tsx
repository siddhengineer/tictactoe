
"use client";
import LeaderboardDisplay from "@/components/leaderboard/LeaderboardDisplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LeaderboardPage() {
  return (
    <main className="flex flex-col items-center flex-grow p-4"> {/* Changed min-h-full to flex-grow */}
      <Card className="w-full shadow-xl"> {/* max-w-2xl removed, layout handles max-width */}
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
             <Trophy className="h-10 w-10 text-primary" /> {/* Reduced sm:h-12 sm:w-12 */}
          </div>
          <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle> {/* Reduced sm:text-3xl */}
        </CardHeader>
        <CardContent>
          <LeaderboardDisplay />
        </CardContent>
      </Card>
    </main>
  );
}
