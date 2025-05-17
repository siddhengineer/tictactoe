
"use client";
import { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import TicTacToeGame from "@/components/game/TicTacToeGame";
import TutorialPopup from "@/components/game/TutorialPopup";

export default function PlayPage() {
  const { setActiveTheme, isTutorialComplete, markTutorialComplete } = useAppContext();

  useEffect(() => {
    setActiveTheme("retro");
    // No cleanup needed to set back to modern, as other pages will do that.
  }, [setActiveTheme]);

  return (
    <main className="flex flex-col items-center justify-center min-h-full p-2 sm:p-4">
      {!isTutorialComplete && <TutorialPopup onClose={markTutorialComplete} />}
      <TicTacToeGame />
    </main>
  );
}
