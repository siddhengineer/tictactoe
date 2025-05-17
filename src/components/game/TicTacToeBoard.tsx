
"use client";
import { useAppContext } from "@/context/AppContext";
import { cn } from "@/lib/utils";
// Image import removed

// Simple SVG for X and O for modern theme
const ModernX = () => <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/><line x1="85" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/></svg>;
const ModernO = () => <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="12" fill="none" /></svg>;


export default function TicTacToeBoard() {
  const { board, makeMove, winner, currentPlayer } = useAppContext(); // activeTheme removed

  // Updated playerColorClass for the new theme
  const playerColorClass = currentPlayer === 'X' ? 'text-primary' : 'text-accent';

  return (
    <div 
      className={cn(
        "grid grid-cols-3 gap-1 sm:gap-2 p-1 sm:p-2 rounded-md shadow-md",
        "bg-primary/10 border-primary" // Simplified, removed retro styles
      )}
      // Removed retro background image style
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            onClick={() => makeMove(rowIndex, colIndex)}
            disabled={!!cell || !!winner}
            className={cn(
              "aspect-square w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold transition-all duration-150 ease-in-out rounded-sm",
              "bg-background hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent", // Simplified styles
              // Updated cell color logic
              cell ? (cell === "X" ? "text-primary" : "text-accent") : `hover:${playerColorClass} opacity-50 hover:opacity-100`,
              winner && "opacity-70 cursor-not-allowed"
            )}
            aria-label={`Cell ${rowIndex}, ${colIndex}${cell ? `, marked ${cell}` : ', empty'}`}
          >
            {/* Always use ModernX and ModernO, removed Image and retro conditions */}
            {cell === "X" ? (
              <ModernX />
            ) : cell === "O" ? (
              <ModernO />
            ) : (
              <span className="sr-only">Empty</span>
            )}
          </button>
        ))
      )}
    </div>
  );
}
