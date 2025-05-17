
"use client";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// Image import removed
import { Share2, Star, TrendingUp, UserCircle2 } from "lucide-react"; // Added UserCircle2
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function LeaderboardDisplay() {
  const { leaderboard } = useAppContext(); // activeTheme removed
  const { toast } = useToast();

  const handleShareScore = async (entry: typeof leaderboard[0] | null) => {
    const shareData = {
      title: "Tic Tac Toe Score!", // Updated title
      text: entry 
        ? `I got ${entry.score} wins with a ${entry.winStreak} streak in Tic Tac Toe!` // Updated text, removed avatarSeed
        : "Check out this elegant Tic Tac Toe game!", // Updated text
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({ title: "Score Shared!", description: "Your score has been shared." });
      } else {
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
      <div className="text-center py-8 text-muted-foreground">
        <p className="text-base sm:text-lg">No scores yet. Be the first to make it to the leaderboard!</p>
        <Button onClick={() => handleShareScore(null)} className="mt-4">
          <Share2 className="mr-2 h-4 w-4" /> Share Game
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Rank</TableHead>
            <TableHead className="w-[50px]">Player</TableHead> {/* Changed from Avatar to Player Icon */}
            <TableHead>Name</TableHead>
            <TableHead className="text-right"><Star className="inline h-4 w-4 mr-1"/>Wins</TableHead>
            <TableHead className="text-right"><TrendingUp className="inline h-4 w-4 mr-1"/>Streak</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboard.map((entry, index) => (
            <TableRow key={entry.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {/* Replaced Image with a generic UserCircle2 icon */}
                <UserCircle2 
                  className="h-8 w-8 text-muted-foreground"
                />
              </TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell className="text-right">{entry.score}</TableCell>
              <TableCell className="text-right">{entry.winStreak}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleShareScore(entry)}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-center mt-6">
        <Button onClick={() => handleShareScore(leaderboard[0])} disabled={!leaderboard[0]}>
          <Share2 className="mr-2 h-4 w-4" /> Share Top Score
        </Button>
      </div>
    </div>
  );
}
