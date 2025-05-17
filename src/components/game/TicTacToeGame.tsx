
"use client";
import { useAppContext } from "@/context/AppContext";
import TicTacToeBoard from "./TicTacToeBoard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, RotateCcw, User, Users } from "lucide-react";
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
    addLeaderboardEntry,
    activeTheme
  } = useAppContext();
  const [playerName, setPlayerName] = useState("");
  const [avatarSeed, setAvatarSeed] = useState("Pikachu"); // Default avatar

  const handleGameEndLeaderboard = () => {
    if (winner && winner !== 'draw') {
      addLeaderboardEntry(playerName || `Player ${winner}`, avatarSeed);
    }
    resetGame();
  };
  
  const avatarOptions = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Eevee", "Snorlax"];

  return (
    <Card className={cn("w-full max-w-md mx-auto shadow-xl my-4", activeTheme === "retro" ? "card retro-pixel-border" : "")}>
      <CardHeader className="text-center">
        <CardTitle className={cn("text-3xl font-bold", activeTheme === "retro" ? "retro-text-shadow" : "")}>Tic Tac Toe</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className={cn("grid grid-cols-2 gap-4 w-full text-center mb-4 p-2 rounded-md", activeTheme === "retro" ? "bg-primary/20 retro-pixel-border border-foreground" : "bg-muted")}>
          <div>
            <p className={cn("text-sm font-medium", activeTheme === "retro" ? "text-primary-foreground retro-text-shadow" : "text-muted-foreground")}>Player X Score</p>
            <p className={cn("text-2xl font-bold", activeTheme === "retro" ? "text-accent retro-text-shadow" : "text-primary")}>{playerScores.X}</p>
            <p className={cn("text-xs", activeTheme === "retro" ? "text-primary-foreground retro-text-shadow" : "text-muted-foreground")}>Streak: {winStreaks.X}</p>
          </div>
          <div>
            <p className={cn("text-sm font-medium", activeTheme === "retro" ? "text-primary-foreground retro-text-shadow" : "text-muted-foreground")}>Player O Score</p>
            <p className={cn("text-2xl font-bold", activeTheme === "retro" ? "text-accent retro-text-shadow" : "text-primary")}>{playerScores.O}</p>
            <p className={cn("text-xs", activeTheme === "retro" ? "text-primary-foreground retro-text-shadow" : "text-muted-foreground")}>Streak: {winStreaks.O}</p>
          </div>
        </div>

        <TicTacToeBoard />

        {winner && (
          <div className={cn("mt-4 p-3 rounded-md text-center w-full", activeTheme === "retro" ? "bg-accent text-accent-foreground retro-pixel-border border-foreground" : "bg-primary text-primary-foreground")}>
            <p className={cn("text-xl font-semibold", activeTheme === "retro" ? "retro-text-shadow" : "")}>
              {winner === "draw" ? "It's a Draw!" : `Player ${winner} Wins!`}
            </p>
          </div>
        )}

        {!winner && (
          <p className={cn("mt-4 text-lg", activeTheme === "retro" ? "text-foreground retro-text-shadow" : "text-muted-foreground")}>
            Current Player: <span className={cn("font-bold", activeTheme === "retro" ? "text-accent" : "text-primary")}>{currentPlayer}</span>
          </p>
        )}

        {winner && winner !== "draw" && (
          <div className={cn("mt-4 space-y-3 p-4 border rounded-md w-full", activeTheme === "retro" ? "retro-pixel-border border-foreground bg-primary/10" : "border-border bg-background")}>
            <Label htmlFor="playerName" className={cn(activeTheme === "retro" ? "text-foreground retro-text-shadow" : "")}>Your Name (for Leaderboard):</Label>
            <Input 
              id="playerName" 
              value={playerName} 
              onChange={(e) => setPlayerName(e.target.value)} 
              placeholder={`Player ${winner} Name`}
              className={cn(activeTheme === "retro" ? "retro-pixel-border" : "")}
            />
            <Label htmlFor="avatarSeed" className={cn(activeTheme === "retro" ? "text-foreground retro-text-shadow" : "")}>Choose Avatar:</Label>
            <select 
              id="avatarSeed" 
              value={avatarSeed} 
              onChange={(e) => setAvatarSeed(e.target.value)}
              className={cn(
                "w-full p-2 border rounded-md", 
                activeTheme === "retro" ? "retro-pixel-border" : "bg-background border-input" 
                // bg-input and text-foreground for retro are handled by global .theme-retro select rule
              )}
            >
              {avatarOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <Button onClick={handleGameEndLeaderboard} className={cn("w-full", activeTheme === "retro" ? "retro-button retro-pixel-border" : "")}>
              <Award className="mr-2 h-4 w-4" />
              Save Score & Play Again
            </Button>
          </div>
        )}
        
        {winner && winner === "draw" && (
           <Button onClick={resetGame} className={cn("mt-4 w-full", activeTheme === "retro" ? "retro-button retro-pixel-border" : "")}>
            <RotateCcw className="mr-2 h-4 w-4" /> Play Again
          </Button>
        )}

        {!winner && (
          <Button onClick={resetGame} variant="outline" className={cn("mt-4 w-full", activeTheme === "retro" ? "retro-button retro-pixel-border bg-secondary text-secondary-foreground" : "")}>
            <RotateCcw className="mr-2 h-4 w-4" /> Reset Game
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
