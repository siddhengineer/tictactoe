
"use client";
import { useAppContext } from "@/context/AppContext";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Simple SVG for X and O for modern theme
const ModernX = () => <svg viewBox="0 0 100 100" className="w-full h-full"><line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/><line x1="85" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/></svg>;
const ModernO = () => <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="12" fill="none" /></svg>;


export default function TicTacToeBoard() {
  const { board, makeMove, activeTheme, winner, currentPlayer } = useAppContext();

  const playerColorClass = currentPlayer === 'X' ? 
    (activeTheme === 'retro' ? 'text-yellow-400' : 'text-blue-500') : 
    (activeTheme === 'retro' ? 'text-red-500' : 'text-orange-500');

  return (
    <div 
      className={cn(
        "grid grid-cols-3 gap-1 sm:gap-2 p-1 sm:p-2 rounded-md shadow-md",
        activeTheme === "retro" ? "bg-primary/30 retro-pixel-border border-foreground" : "bg-primary/10 border-primary"
      )}
      style={activeTheme === "retro" ? { 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h5v5H0V0zm5 5h5v5H5V5z' fill='%230F380F' fill-opacity='0.1'/%3E%3C/svg%3E\")",
        imageRendering: "pixelated"
      } : {}}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            onClick={() => makeMove(rowIndex, colIndex)}
            disabled={!!cell || !!winner}
            className={cn(
              "aspect-square w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center text-5xl sm:text-6xl font-bold transition-all duration-150 ease-in-out rounded-sm",
              activeTheme === "retro" 
                ? "bg-background/80 hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-accent retro-pixel-border border-foreground/50" 
                : "bg-background hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent",
              cell ? (cell === "X" ? (activeTheme === "retro" ? "text-yellow-400" : "text-blue-500") : (activeTheme === "retro" ? "text-red-500" : "text-orange-500")) : `hover:${playerColorClass} opacity-50 hover:opacity-100`,
              winner && "opacity-70 cursor-not-allowed"
            )}
            aria-label={`Cell ${rowIndex}, ${colIndex}${cell ? `, marked ${cell}` : ', empty'}`}
          >
            {cell === "X" ? (
              activeTheme === "retro" ? 
                <Image src="https://placehold.co/64x64.png" alt="Pikachu X" width={48} height={48} data-ai-hint="pikachu pixelart" className="filter drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]"/> : 
                <ModernX />
            ) : cell === "O" ? (
              activeTheme === "retro" ? 
                <Image src="https://placehold.co/64x64.png" alt="Bulbasaur O" width={48} height={48} data-ai-hint="bulbasaur pixelart" className="filter drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]"/> : 
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
