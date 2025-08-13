import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AboutSectionIMG from "@/assets/images/AboutSection.jpg";

const CTA = () => {
  return (
    <section id="cta" className="container py-16 md:py-24 scroll-mt-24 lg:py-32 ">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_4fr] relative">
        
        {/* Left Column - Image in Card Shape */}
        <div className="rounded-3xl overflow-hidden shadow-sm max-w-[800px] mx-auto lg:mx-2 lg:min-h-[600px]">
          <img
            src={AboutSectionIMG}
            alt="Consultation with tech experts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:mt-20">
          
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
          <div className="lg:grid">
            {/* Left side of headline */}
            <h2 className="text-5xl md:text-6xl lg:w-[200%] font-semibold leading-tight relative lg:col-start-1 lg:row-start-1 lg:pr-0 lg:mr-[-1500px]">
              Your Future With Leading Global
            </h2>
            {/* Right side of headline */}
            <h3 className="lg:mt-20 text-5xl md:text-6xl font-semibold leading-tight lg:col-start-2 lg:row-start-1">
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
          <Button size="lg" className="w-full lg:w-[64%] lg:h-[20%] lg:text-3xl rounded-[20px] gap-32">
            Book A Free Consultation
            <span className="flex items-center justify-center w-20 h-20 rounded-full" style={{ backgroundColor: "#D9D9D926" }}>
              <ArrowRight className="ml-0 w-20 h-auto" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
