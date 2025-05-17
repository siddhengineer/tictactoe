
"use client";
// useEffect removed as setActiveTheme is no longer used here
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// useAppContext removed as activeTheme is no longer used here
// Image removed, Rocket and Grid3x3 icons imported
import { Rocket, Grid3x3 } from "lucide-react";
// cn utility is still useful for general class management
import { cn } from "@/lib/utils";

export default function HomePage() {
  // activeTheme and setActiveTheme related logic removed

  return (
    <main className="flex flex-col items-center justify-center min-h-full p-4 sm:p-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-6">
            {/* Replaced Image with Grid3x3 icon */}
            <Grid3x3 className="h-24 w-24 sm:h-28 sm:w-28 text-primary" />
          </div>
          <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Tic Tac Toe
          </CardTitle>
          <CardDescription className="text-base sm:text-lg md:text-xl mt-2 text-muted-foreground">
            An elegant Tic Tac Toe experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <p className="text-center text-foreground/90">
            Ready to play a game of Tic Tac Toe?
          </p>
          <Link href="/play" passHref>
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg py-3 px-8"
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
