
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Grid3x3 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-4"> {/* Changed min-h-full to flex-grow */}
      <Card className="w-full max-w-md shadow-xl"> {/* max-w-md is on layout, this can be w-full */}
        <CardHeader className="text-center">
          <div className="flex justify-center mb-6">
            <Grid3x3 className="h-20 w-20 sm:h-24 sm:w-24 text-primary" /> {/* Slightly smaller icon */}
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground"> {/* Reduced md:text-5xl */}
            Tic Tac Toe
          </CardTitle>
          <CardDescription className="text-base sm:text-lg mt-2 text-muted-foreground"> {/* Reduced md:text-xl */}
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
