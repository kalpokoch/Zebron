import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AboutSectionIMG from "@/assets/images/AboutSection.jpg";

const CTA = () => {
  return (
    <section id="cta" className="container py-16 md:py-24 scroll-mt-24">
      <div className="grid gap-0 lg:grid-cols-[1fr_4.3fr]">
        
        {/* Left Column - Image in Card Shape */}
        <div className="rounded-3xl overflow-hidden shadow-sm max-w-[200px] mx-auto lg:mx-0">
          <img
            src={AboutSectionIMG}
            alt="Consultation with tech experts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Row 1: Level Up + Tagline */}
          <div className="flex flex-wrap items-baseline gap-x-3">
              <h2 className="text-5xl md:text-7xl font-semibold leading-tight">
                Level Up{" "}
                <span className="text-muted-foreground text-base md:text-lg font-semibold">
                  Connect With Top-Tier Developers From Around The Globe
                </span>
              </h2>
          </div>


          {/* Row 2: Full sentence heading */}
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight max-w-8xl">
            Your Future With Leading Global <br />
            <span className="lg:pl-[610px]">Tech Talent</span>
          </h2>

          {/* Row 3: Body paragraph */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            And Bring Your Vision To Life. Whether You're Building Your Next Product,
            Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech
            Talent Is Here To Help You Go Further—Faster.
          </p>

          {/* Button */}
          <Button size="lg">
            Book A Free Consultation <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
