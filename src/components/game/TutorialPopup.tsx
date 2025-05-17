
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
// useAppContext for activeTheme removed
// cn utility might still be useful
import { cn } from "@/lib/utils";
import { Lightbulb } from "lucide-react";

interface TutorialPopupProps {
  onClose: () => void;
}

export default function TutorialPopup({ onClose }: TutorialPopupProps) {
  // activeTheme removed
  return (
    <AlertDialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <AlertDialogContent> {/* Removed retro-pixel-border and card class based on theme */}
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-yellow-400" /> Welcome to Tic Tac Toe!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left pt-2">
            Here&apos;s a quick guide:
          </AlertDialogDescription>
          <ul className="list-disc list-inside space-y-1 pl-5 text-sm text-left text-muted-foreground pt-2">
              <li><strong>Play Tab:</strong> Tap here to start a Tic Tac Toe game.</li>
              <li><strong>Game Rules:</strong> Standard Tic Tac Toe. Get three in a row (horizontally, vertically, or diagonally) to win.</li>
              <li><strong>Leaderboard:</strong> Check top scores and win streaks.</li>
              <li><strong>Settings:</strong> Toggle sound effects and view app info.</li>
            </ul>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>
            Got it! Let&apos;s Play!
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
