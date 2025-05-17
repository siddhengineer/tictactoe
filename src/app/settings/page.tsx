
"use client";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Info, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const { isSoundEnabled, toggleSound } = useAppContext();

  return (
    <main className="flex flex-col items-center flex-grow p-4"> {/* Changed min-h-full to flex-grow */}
      <Card className="w-full shadow-xl"> {/* max-w-md removed, layout handles max-width */}
        <CardHeader className="text-center">
           <div className="flex justify-center mb-2">
             <Info className="h-10 w-10 text-primary" /> {/* Reduced sm:h-12 sm:w-12 */}
          </div>
          <CardTitle className="text-2xl font-bold">Settings</CardTitle> {/* Reduced sm:text-3xl */}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-lg border-border">
            <h3 className="text-lg font-semibold mb-3">Audio</h3> {/* Reduced sm:text-xl */}
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

          <div className="p-4 border rounded-lg border-border">
            <h3 className="text-lg font-semibold mb-2">App Information</h3> {/* Reduced sm:text-xl */}
            <p><strong>App Name:</strong> Tic Tac Toe - Elegant Play</p>
            <p><strong>Version:</strong> 1.0.0</p>
            <p className="mt-2">
              Built with Next.js for a clean and elegant gaming experience.
            </p>
            <p className="text-xs mt-2 text-muted-foreground">
              (Placeholder for actual icons, splash screens, and full metadata needed for Play Store)
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
