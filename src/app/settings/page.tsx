
"use client";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Info, Volume2, VolumeX, Palette } from "lucide-react"; // Added Palette for theme switch
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const { isSoundEnabled, toggleSound } = useAppContext();

  return (
    <main className="flex flex-col items-center flex-grow p-4">
      <Card className="w-full shadow-xl">
        <CardHeader className="text-center">
           <div className="flex justify-center mb-2">
             <Info className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-lg border-border bg-card-foreground/5">
            <h3 className="text-lg font-semibold mb-3">Audio</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="sound-toggle" className="flex items-center text-base">
                {isSoundEnabled ? <Volume2 className="mr-2 h-5 w-5" /> : <VolumeX className="mr-2 h-5 w-5" />}
                Sound Effects
              </Label>
              <Switch
                id="sound-toggle"
                checked={isSoundEnabled}
                onCheckedChange={toggleSound}
                aria-label="Toggle sound effects"
              />
            </div>
             <p className="text-xs mt-2 text-muted-foreground">
              Toggle sound effects for game actions.
            </p>
          </div>
          
          {/* Theme switch removed as per single theme design */}

          <div className="p-4 border rounded-lg border-border bg-card-foreground/5">
            <h3 className="text-lg font-semibold mb-2">App Information</h3>
            <p><strong>App Name:</strong> Retro Game Zone</p>
            <p><strong>Version:</strong> 1.0.0</p>
            <p className="mt-2">
              Enjoy a classic game of Tic Tac Toe with an elegant touch.
            </p>
            <p className="text-xs mt-2 text-muted-foreground">
              For best experience, ensure your device supports modern web standards.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
