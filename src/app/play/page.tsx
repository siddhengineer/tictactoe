
"use client";
import { useAppContext } from "@/context/AppContext";
import TicTacToeGame from "@/components/game/TicTacToeGame";
import TutorialPopup from "@/components/game/TutorialPopup";

export default function PlayPage() {
  const { isTutorialComplete, markTutorialComplete } = useAppContext();

  return (
    <main className="flex flex-col items-center justify-center flex-grow p-2 sm:p-4"> {/* Changed min-h-full to flex-grow */}
      {!isTutorialComplete && <TutorialPopup onClose={markTutorialComplete} />}
      <TicTacToeGame />
    </main>
  );
}
