import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="container py-16 md:py-24 scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="rounded-3xl bg-muted aspect-[4/5] shadow-sm" aria-label="Consultation image placeholder" />

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Connect With Top-Tier Developers From Around The Globe
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Level Up Your Future With Leading Global Tech Talent
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent Is Here To Help You Go Further—Faster.
          </p>

          <Button className="rounded-full px-6">
            Book A Free Consultation <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
