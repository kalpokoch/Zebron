import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AboutUsCTAIMG from "@/assets/images/capsule2.jpg";

const AboutUsCTA = () => {
  return (
    <section id="cta" className="container py-16 md:py-24 scroll-mt-24 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-1 relative">
    
        <div className="w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={AboutUsCTAIMG}
            alt="Consultation with tech experts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:mt-20 lg:pl-40">
          
          {/* Row 1: Level Up + Tagline */}
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
              Level Up{" "}
              <span className="text-muted-foreground text-base md:text-xl font-semibold">
                Connect With Top-Tier Developers From Around The Globe
              </span>
            </h2>
          </div>

          {/* Row 2: Headline split into grid */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start">
            {/* Left side of headline */}
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight lg:w-[980px]">
              Your Future With Leading Global
            </h2>
            {/* Right side of headline */}
            <h3 className="text-5xl md:text-6xl font-semibold leading-tight lg:mt-20 lg:pl-4">
              Tech Talent
            </h3>
            
            {/* Paragraph sits under left headline part */}
            <p className="text-muted-foreground lg:text-2xl leading-relaxed max-w-[600px] lg:pl-10 lg:col-start-1 lg:row-start-2 lg:-mt-10 lg:mb-10">
              And Bring Your Vision To Life. Whether You're Building Your Next Product,
              Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech
              Talent Is Here To Help You Go Further—Faster.
            </p>
          </div>

          {/* Button */}
          <Button size="lg" className="lg:ml-40 text-sm gap-5 lg:w-full lg:w-[64%] lg:h-[20%] lg:text-3xl rounded-[20px] lg:gap-32">
            Book A Free Consultation
            <span className="flex items-center justify-center lg:w-20 lg:h-20 rounded-full" style={{ backgroundColor: "#D9D9D926" }}>
              <ArrowRight className="lg:ml-0 max-w-10 h-auto lg:w-20 lg:h-auto" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;
