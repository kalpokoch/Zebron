import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="container py-16 md:py-24 scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Unlock New Horizons <span aria-hidden>.</span>
          </h1>
          <p className="text-muted-foreground text-2xl md:text-3xl">
            With Elite Global Developers
          </p>
          <div className="md:hidden">
            <Button className="rounded-full px-6">Sign Up</Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="hidden md:block">
            <Button className="rounded-full px-6">Sign Up</Button>
          </div>
          <div className="relative w-full rounded-2xl bg-muted shadow-sm aspect-video overflow-hidden">
            <button
              aria-label="Play video"
              className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-background/90 grid place-content-center shadow border text-foreground/80 hover:text-foreground transition-colors"
            >
              <Play />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
