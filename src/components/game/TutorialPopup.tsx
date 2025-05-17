
"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";

interface TutorialPopupProps {
  onClose: () => void;
}

export default function TutorialPopup({ onClose }: TutorialPopupProps) {
  const { activeTheme } = useAppContext();
  return (
    <AlertDialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <AlertDialogContent className={cn(activeTheme === "retro" ? "retro-pixel-border card" : "")}>
        <AlertDialogHeader>
          <AlertDialogTitle className={cn("flex items-center", activeTheme === "retro" ? "retro-text-shadow" : "")}>
            <Lightbulb className="mr-2 h-6 w-6 text-yellow-400" /> Welcome to Retro Game Zone!
          </AlertDialogTitle>
          <AlertDialogDescription className={cn("text-left space-y-2 pt-2", activeTheme === "retro" ? "text-foreground" : "")}>
            <p>Here&apos;s a quick guide:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Play Tab:</strong> Tap here to start a Tic Tac Toe game. The theme will magically switch to retro Pokémon style!</li>
              <li><strong>Game Rules:</strong> Standard Tic Tac Toe. Get three in a row (horizontally, vertically, or diagonally) to win.</li>
              <li><strong>Leaderboard:</strong> Check top scores and win streaks.</li>
              <li><strong>Settings:</strong> Toggle sound effects and view app info.</li>
              <li><strong>Theme Change:</strong> The retro theme activates automatically when you go to the Play screen. Enjoy the 8-bit fun!</li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose} className={cn(activeTheme === "retro" ? "retro-button" : "")}>
            Got it! Let&apos;s Play!
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
