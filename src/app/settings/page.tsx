
"use client";
import { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Info, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const { setActiveTheme, isSoundEnabled, toggleSound, activeTheme } = useAppContext();

  useEffect(() => {
    setActiveTheme("modern");
  }, [setActiveTheme]);

  return (
    <main className="flex flex-col items-center min-h-full p-4">
      <Card className={cn("w-full max-w-md shadow-xl", activeTheme === "retro" ? "card retro-pixel-border" : "")}>
        <CardHeader className="text-center">
           <div className="flex justify-center mb-2">
             <Info className={cn("h-12 w-12", activeTheme === "retro" ? "text-accent" : "text-primary")} />
          </div>
          <CardTitle className={cn("text-3xl font-bold", activeTheme === "retro" ? "retro-text-shadow" : "")}>Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className={cn("p-4 border rounded-lg", activeTheme === "retro" ? "retro-pixel-border border-foreground" : "border-border")}>
            <h3 className={cn("text-xl font-semibold mb-3", activeTheme === "retro" ? "retro-text-shadow" : "")}>Audio</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="sound-toggle" className={cn("flex items-center text-base", activeTheme === "retro" ? "retro-text-shadow" : "")}>
                {isSoundEnabled ? <Volume2 className="mr-2 h-5 w-5" /> : <VolumeX className="mr-2 h-5 w-5" />}
                Sound Effects
              </Label>
              <Switch
                id="sound-toggle"
                checked={isSoundEnabled}
                onCheckedChange={toggleSound}
                aria-label="Toggle sound effects"
                className={cn(activeTheme === "retro" ? "[&>span]:bg-primary" : "")}
              />
            </div>
             <p className={cn("text-xs mt-2", activeTheme === "retro" ? "text-foreground/80 retro-text-shadow" : "text-muted-foreground")}>
              Toggle 8-bit sound effects for game actions. (Sound effects are placeholders for now)
            </p>
          </div>

          <div className={cn("p-4 border rounded-lg", activeTheme === "retro" ? "retro-pixel-border border-foreground" : "border-border")}>
            <h3 className={cn("text-xl font-semibold mb-2", activeTheme === "retro" ? "retro-text-shadow" : "")}>App Information</h3>
            <p className={cn(activeTheme === "retro" ? "retro-text-shadow" : "")}><strong>App Name:</strong> Retro Game Zone</p>
            <p className={cn(activeTheme === "retro" ? "retro-text-shadow" : "")}><strong>Version:</strong> 1.0.0</p>
            <p className={cn("mt-2", activeTheme === "retro" ? "retro-text-shadow" : "")}>
              Built with Next.js and love for retro gaming. This app is designed to be easily wrapped with Capacitor for Play Store deployment.
            </p>
            <p className={cn("text-xs mt-2", activeTheme === "retro" ? "text-foreground/80 retro-text-shadow" : "text-muted-foreground")}>
              (Placeholder for actual icons, splash screens, and full metadata needed for Play Store)
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
