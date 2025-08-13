import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroVideoThumbnail from "@/assets/images/hero-thumbnail.png";

const Hero = () => {
  return (
    <section id="home" className="container py-16 md:py-24 scroll-mt-24">
      {/* Main container with vertical flow */}
      <div className="flex flex-col gap-10">
        {/* Top row: Text and Button */}
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
              Unlock New Horizons <span aria-hidden>.</span>
            </h1>
            {/* Updated paragraph to split text across two lines */}
            <p className="text-muted-foreground text-2xl md:text-4xl lg:text-6xl">
              With Elite Global
              <br />
              Developers
            </p>
          </div>
          {/* Sign Up button is now here, visible on all screen sizes */}
          <div className="hidden md:block mr-[200px]">
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* Bottom row: Video Player */}
        <div 
          className="relative w-full rounded-2xl bg-muted shadow-sm aspect-video overflow-hidden bg-cover bg-center"
          // You can replace this placeholder with your actual video thumbnail
          style={{ backgroundImage: "url('https://placehold.co/1280x720/e2e8f0/e2e8f0')" }}
        >
          {/* You can add your actual thumbnail image here */}
          <img src={heroVideoThumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
          
          <button
            aria-label="Play video"
            className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-background/90 grid place-content-center shadow border text-foreground/80 hover:text-foreground transition-colors"
          >
            <Play className="h-6 w-6"/>
          </button>
        </div>
        
        {/* Sign Up button for mobile, placed below the video */}
        <div className="md:hidden flex justify-center">
            <Button className="rounded-full px-6 py-3 text-base">Sign Up</Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
