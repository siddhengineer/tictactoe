
"use client";
import { useAppContext } from "@/context/AppContext";
import TicTacToeBoard from "./TicTacToeBoard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, RotateCcw } from "lucide-react"; // User, Users icons might not be needed
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TicTacToeGame() {
  const { 
    currentPlayer, 
    winner, 
    playerScores, 
    winStreaks,
    resetGame, 
    addLeaderboardEntry
    // activeTheme removed
  } = useAppContext();
  const [playerName, setPlayerName] = useState("");
  // avatarSeed and avatarOptions removed

  const handleGameEndLeaderboard = () => {
    if (winner && winner !== 'draw') {
      addLeaderboardEntry(playerName || `Player ${winner}`); // avatarSeed removed
    }
    resetGame();
  };
  
  // avatarOptions removed

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl my-4">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl sm:text-3xl font-bold">Tic Tac Toe</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-2 gap-4 w-full text-center mb-4 p-2 rounded-md bg-muted">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Player X Score</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">{playerScores.X}</p>
            <p className="text-xs text-muted-foreground">Streak: {winStreaks.X}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Player O Score</p>
            <p className="text-xl sm:text-2xl font-bold text-accent">{playerScores.O}</p> {/* Changed to accent for Player O */}
            <p className="text-xs text-muted-foreground">Streak: {winStreaks.O}</p>
          </div>
        </div>

        <TicTacToeBoard />

        {winner && (
          <div className={cn(
            "mt-4 p-3 rounded-md text-center w-full",
            winner === 'draw' ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground" // Adjusted colors for winner display
          )}>
            <p className="text-lg sm:text-xl font-semibold">
              {winner === "draw" ? "It's a Draw!" : `Player ${winner} Wins!`}
            </p>
          </div>
        )}

        {!winner && (
          <p className="mt-4 text-lg text-muted-foreground">
            Current Player: <span className={cn("font-bold", currentPlayer === 'X' ? "text-primary" : "text-accent")}>{currentPlayer}</span>
          </p>
        )}

        {winner && winner !== "draw" && (
          <div className="mt-4 space-y-3 p-4 border rounded-md w-full border-border bg-background">
            <Label htmlFor="playerName">Your Name (for Leaderboard):</Label>
            <Input 
              id="playerName" 
              value={playerName} 
              onChange={(e) => setPlayerName(e.target.value)} 
              placeholder={`Player ${winner} Name`}
            />
            {/* Avatar select dropdown removed */}
            <Button onClick={handleGameEndLeaderboard} className="w-full">
              <Award className="mr-2 h-4 w-4" />
              Save Score & Play Again
            </Button>
          </div>
        )}
        
        {winner && winner === "draw" && (
           <Button onClick={resetGame} className="mt-4 w-full">
            <RotateCcw className="mr-2 h-4 w-4" /> Play Again
          </Button>
        )}

        {!winner && (
          <Button onClick={resetGame} variant="outline" className="mt-4 w-full">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset Game
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
