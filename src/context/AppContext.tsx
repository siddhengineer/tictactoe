
"use client";
import type { ReactNode } from "react";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type Player = "X" | "O";
type Board = (Player | null)[][];

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number; // Wins
  winStreak: number;
  // avatarSeed removed
}

interface AppState {
  // activeTheme and setActiveTheme removed
  isSoundEnabled: boolean;
  toggleSound: () => void;
  isTutorialComplete: boolean;
  markTutorialComplete: () => void;
  
  // Tic Tac Toe State
  board: Board;
  currentPlayer: Player;
  winner: Player | "draw" | null;
  playerScores: { X: number; O: number }; // Session scores
  winStreaks: { X: number; O: number };
  makeMove: (row: number, col: number) => void;
  resetGame: () => void;
  
  // Leaderboard State
  leaderboard: LeaderboardEntry[];
  addLeaderboardEntry: (name: string) => void; // avatarSeed parameter removed
}

const AppContext = createContext<AppState | undefined>(undefined);

const initialBoard = () => [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const calculateWinner = (board: Board): Player | null => {
  const lines = [
    // Rows
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    // Columns
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    // Diagonals
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];
  for (const line of lines) {
    if (line[0] && line[0] === line[1] && line[0] === line[2]) {
      return line[0] as Player;
    }
  }
  return null;
};

const isBoardFull = (board: Board): boolean => {
  return board.every(row => row.every(cell => cell !== null));
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // activeTheme and setActiveThemeState removed
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);
  const [isTutorialComplete, setIsTutorialComplete] = useState<boolean>(false);

  const [board, setBoard] = useState<Board>(initialBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "draw" | null>(null);
  const [playerScores, setPlayerScores] = useState<{ X: number; O: number }>({ X: 0, O: 0 });
  const [winStreaks, setWinStreaks] = useState<{ X: number; O: number }>({ X: 0, O: 0 });
  
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // Set default theme classes on body if needed (though globals.css handles it now)
    document.body.classList.add('font-sans'); // Example, assuming GeistSans is the default

    const storedSound = localStorage.getItem("ticTacToeSoundEnabled"); // Updated key for clarity
    if (storedSound) setIsSoundEnabled(JSON.parse(storedSound));
    const storedTutorial = localStorage.getItem("ticTacToeTutorialComplete"); // Updated key
    if (storedTutorial) setIsTutorialComplete(JSON.parse(storedTutorial));
    const storedLeaderboard = localStorage.getItem("ticTacToeLeaderboard"); // Updated key
    if (storedLeaderboard) setLeaderboard(JSON.parse(storedLeaderboard));
  }, []);

  // setActiveTheme function removed

  const toggleSound = () => {
    setIsSoundEnabled(prev => {
      const newState = !prev;
      localStorage.setItem("ticTacToeSoundEnabled", JSON.stringify(newState));
      return newState;
    });
  };

  const markTutorialComplete = () => {
    setIsTutorialComplete(true);
    localStorage.setItem("ticTacToeTutorialComplete", JSON.stringify(true));
  };

  const makeMove = useCallback((row: number, col: number) => {
    if (board[row][col] || winner) return;

    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setPlayerScores(prev => ({ ...prev, [gameWinner]: prev[gameWinner] + 1 }));
      setWinStreaks(prev => ({
        ...prev,
        [gameWinner]: prev[gameWinner] + 1,
        [gameWinner === 'X' ? 'O' : 'X']: 0 // Reset opponent's streak
      }));
    } else if (isBoardFull(newBoard)) {
      setWinner("draw");
      setWinStreaks({ X: 0, O: 0 }); // Reset streaks on draw
    } else {
      setCurrentPlayer(prev => (prev === "X" ? "O" : "X"));
    }
  }, [board, currentPlayer, winner]);

  const resetGame = useCallback(() => {
    setBoard(initialBoard());
    setCurrentPlayer("X");
    setWinner(null);
  }, []);

  const addLeaderboardEntry = useCallback((name: string) => { // avatarSeed parameter removed
    if (!winner || winner === 'draw') return;

    const winningPlayer = winner;
    const score = playerScores[winningPlayer];
    const winStreak = winStreaks[winningPlayer];

    const newEntry: LeaderboardEntry = { 
      id: Date.now().toString(), 
      name: name || `Player ${winningPlayer}`, 
      score, 
      winStreak,
      // avatarSeed removed
    };
    
    setLeaderboard(prev => {
      const updatedLeaderboard = [...prev, newEntry]
        .sort((a, b) => b.score - a.score || b.winStreak - a.winStreak) 
        .slice(0, 10); 
      localStorage.setItem("ticTacToeLeaderboard", JSON.stringify(updatedLeaderboard));
      return updatedLeaderboard;
    });
  }, [playerScores, winStreaks, winner]);

  return (
    <AppContext.Provider value={{
      // activeTheme, setActiveTheme removed
      isSoundEnabled, toggleSound,
      isTutorialComplete, markTutorialComplete,
      board, currentPlayer, winner, playerScores, winStreaks, makeMove, resetGame,
      leaderboard, addLeaderboardEntry
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
