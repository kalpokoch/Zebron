import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AboutUsCTAIMG from "@/assets/images/capsule2.jpg";

const WhatWeDoCTA = () => {
  return (
    <section id="cta" className="container py-16 md:py-24 scroll-mt-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-1 relative">
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
            </div>
        </div>

        <div className="flex justify-end">
            <div className="hidden md:inline-flex items-center p-1 border border-solid border-neutral-800 rounded-xl">
              <input
                type="email"
                placeholder="Enter Email Here"
                className="lg:mr-10 bg-transparent px-3 py-2 outline-none text-sm placeholder-neutral-500"
              />
              <Button>Subscribe</Button>
            </div>
        </div>


    </section>
  );
};

export default WhatWeDoCTA;
