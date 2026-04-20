import { Gamepad2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-secondary py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <span className="text-lg">
              <span className="text-primary">HYPER</span>
              <span className="text-white"> GAMES</span>
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm mb-2">
              For Gamers, By Gamers
            </p>
            <p className="text-muted-foreground text-sm">
              Founded by Joshua Dunn & Erik's Dancitis
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary/50 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Hyper Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
