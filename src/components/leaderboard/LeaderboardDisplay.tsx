
"use client";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Share2, Star, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function LeaderboardDisplay() {
  const { leaderboard, activeTheme } = useAppContext();
  const { toast } = useToast();

  const handleShareScore = async (entry: typeof leaderboard[0] | null) => {
    const shareData = {
      title: "Retro Game Zone Score!",
      text: entry 
        ? `I got ${entry.score} wins with a ${entry.winStreak} streak in Retro Game Zone using ${entry.avatarSeed}!`
        : "Check out Retro Game Zone for some fun Tic Tac Toe action!",
      url: window.location.origin, // Or a specific link to the game
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({ title: "Score Shared!", description: "Your score has been shared." });
      } else {
        // Fallback for browsers that don't support navigator.share
        navigator.clipboard.writeText(shareData.text + " Play at: " + shareData.url);
        toast({ title: "Link Copied!", description: "Score details copied to clipboard. Share it with your friends!" });
      }
    } catch (err) {
      console.error("Error sharing score:", err);
      toast({ title: "Sharing Failed", description: "Could not share score at this time.", variant: "destructive" });
    }
  };

  if (leaderboard.length === 0) {
    return (
      <div className={cn("text-center py-8", activeTheme === "retro" ? "text-foreground retro-text-shadow" : "text-muted-foreground")}>
        <p className={cn("text-base sm:text-lg", activeTheme === "retro" ? "retro-text-shadow" : "")}>No scores yet. Be the first to make it to the leaderboard!</p>
        <Button onClick={() => handleShareScore(null)} className={cn("mt-4", activeTheme === "retro" ? "retro-button" : "")}>
          <Share2 className="mr-2 h-4 w-4" /> Share Game
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Table className={cn(activeTheme === "retro" ? "retro-pixel-border border-foreground" : "")}>
        <TableHeader>
          <TableRow className={cn(activeTheme === "retro" ? "[&_th]:text-primary-foreground [&_th]:retro-text-shadow" : "")}>
            <TableHead className="w-[50px]">Rank</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right"><Star className="inline h-4 w-4 mr-1"/>Wins</TableHead>
            <TableHead className="text-right"><TrendingUp className="inline h-4 w-4 mr-1"/>Streak</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboard.map((entry, index) => (
            <TableRow key={entry.id} className={cn(activeTheme === "retro" ? "[&_td]:text-foreground [&_td]:retro-text-shadow" : "")}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <Image 
                  src={`https://placehold.co/40x40.png`} // Placeholder, ideally use avatarSeed for varied images
                  alt={`${entry.avatarSeed} avatar`} 
                  width={32} 
                  height={32} 
                  className={cn("rounded-sm", activeTheme === "retro" ? "retro-pixel-border" : "border")}
                  data-ai-hint={`${entry.avatarSeed} pixel art`}
                />
              </TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell className="text-right">{entry.score}</TableCell>
              <TableCell className="text-right">{entry.winStreak}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleShareScore(entry)} className={cn(activeTheme === "retro" ? "hover:bg-accent/20" : "")}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-center mt-6">
        <Button onClick={() => handleShareScore(leaderboard[0])} className={cn(activeTheme === "retro" ? "retro-button" : "")} disabled={!leaderboard[0]}>
          <Share2 className="mr-2 h-4 w-4" /> Share Top Score
        </Button>
      </div>
    </div>
  );
}
