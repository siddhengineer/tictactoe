
"use client";
// useEffect and setActiveTheme removed from useAppContext import
import { useAppContext } from "@/context/AppContext";
import TicTacToeGame from "@/components/game/TicTacToeGame";
import TutorialPopup from "@/components/game/TutorialPopup";

export default function PlayPage() {
  const { isTutorialComplete, markTutorialComplete } = useAppContext();

  // useEffect for setActiveTheme removed

  return (
    <main className="flex flex-col items-center justify-center min-h-full p-2 sm:p-4">
      {!isTutorialComplete && <TutorialPopup onClose={markTutorialComplete} />}
      <TicTacToeGame />
    </main>
  );
}
