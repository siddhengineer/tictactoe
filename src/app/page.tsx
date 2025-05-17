
"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { setActiveTheme, activeTheme } = useAppContext();

  useEffect(() => {
    setActiveTheme("modern");
  }, [setActiveTheme]);

  return (
    <main className="flex flex-col items-center justify-center min-h-full p-4 sm:p-8">
      <Card className={cn("w-full max-w-md shadow-xl", activeTheme === "retro" ? "card retro-pixel-border" : "")}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="https://placehold.co/150x150.png" 
              alt="Retro Game Zone Logo" 
              width={120} 
              height={120} 
              className={cn("rounded-full", activeTheme === "retro" ? "retro-pixel-border" : "border-4 border-primary")}
              data-ai-hint="gaming logo"
            />
          </div>
          <CardTitle className={cn("text-2xl sm:text-3xl md:text-4xl font-bold", activeTheme === "retro" ? "retro-text-shadow" : "")}>
            Retro Game Zone
          </CardTitle>
          <CardDescription className={cn("text-sm sm:text-base md:text-lg mt-2", activeTheme === "retro" ? "retro-text-shadow" : "")}>
            Your portal to classic gaming fun!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <p className={cn("text-center", activeTheme === "retro" ? "retro-text-shadow" : "")}>
            Ready to play some Tic Tac Toe with a Pokémon retro twist?
          </p>
          <Link href="/play" passHref>
            <Button 
              size="lg" 
              className={cn(
                "w-full sm:w-auto text-base sm:text-lg py-3 px-8", 
                activeTheme === "retro" ? "retro-button retro-pixel-border" : ""
              )}
              aria-label="Start a new game of Tic Tac Toe"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Quick Start
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
