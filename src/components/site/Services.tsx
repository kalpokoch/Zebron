import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  arrow: "up" | "down";
}

const services: ServiceItem[] = [
  {
    number: "01.",
    title: "Logo Design",
    description:
      "We Create Impactful, Memorable Logos That Capture Your Brand's Identity And Values. Our Designs Are Crafted To Leave A Lasting Impression Across Digital And Print Platforms, Setting The Foundation For Strong Visual Recognition.",
    arrow: "up",
  },
  {
    number: "02.",
    title: "Poster Design",
    description:
      "From Events To Promotions, We Design Eye-Catching Posters That Communicate Your Message Clearly And Creatively. Our Team Blends Color, Typography, And Layout To Ensure Your Brand Grabs Attention In Both Digital And Print Formats.",
    arrow: "down",
  },
  {
    number: "03.",
    title: "UI/UX Design",
    description:
      "We Design Intuitive And Engaging User Interfaces For Web And Mobile Apps. Our UX Process Focuses On Usability, Clarity, And Aesthetics—Ensuring A Seamless Experience That Enhances Customer Satisfaction And Drives Business Results.",
    arrow: "down",
  },
  {
    number: "04.",
    title: "Software Dev",
    description:
      "We Build Powerful, Scalable Software Tailored To Solve Specific Business Challenges. From Automation Tools To Enterprise Solutions, Our Process Ensures Flexibility, Functionality, And Long-Term Value Through Clean Code And Modern Architecture.",
    arrow: "down",
  },
];

const Services = () => {
  return (
    <section id="services" className="container py-16 md:py-24 space-y-10 scroll-mt-24">
      <header className="space-y-2">
        <h2 className="text-4xl md:text-6xl font-semibold">
          <span>Born To Build.</span>{" "}
          <span className="text-muted-foreground">Focused On Impact.</span>
        </h2>
      </header>

      <div className="space-y-8">
        {services.map((s) => (
          <article
            key={s.number}
            className="rounded-2xl border bg-card shadow-sm p-6 md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-12 md:items-start">
              <div className="md:col-span-9 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-5xl font-medium tabular-nums">
                    {s.number}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-semibold">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {s.description}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Button className="rounded-full px-5">Learn More</Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    {s.arrow === "up" ? <ArrowUpRight /> : <ArrowDownRight />}
                  </Button>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="aspect-video md:aspect-[4/3] rounded-xl bg-muted shadow-sm" aria-label={`${s.title} image placeholder`} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
