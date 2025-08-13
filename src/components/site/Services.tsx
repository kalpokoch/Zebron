import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  arrow: "up" | "down";
  image?: string;
}

const services: ServiceItem[] = [
  {
    number: "01.",
    title: "Logo Design",
    description:
      "We Create Impactful, Memorable Logos That Capture Your Brand's Identity And Values. Our Designs Are Crafted To Leave A Lasting Impression Across Digital And Print Platforms, Setting The Foundation For Strong Visual Recognition.",
    arrow: "down",
    image: "/Serviceimg.jpg", // move to public folder
  },
  {
    number: "02.",
    title: "Poster Design",
    description:
      "From Events To Promotions, We Design Eye-Catching Posters That Communicate Your Message Clearly And Creatively. Our Team Blends Color, Typography, And Layout To Ensure Your Brand Grabs Attention In Both Digital And Print Formats.",
    arrow: "down",
    image: "/Serviceimg.jpg",
  },
  {
    number: "03.",
    title: "UI/UX Design",
    description:
      "We Design Intuitive And Engaging User Interfaces For Web And Mobile Apps. Our UX Process Focuses On Usability, Clarity, And Aesthetics—Ensuring A Seamless Experience That Enhances Customer Satisfaction And Drives Business Results.",
    arrow: "down",
    image: "/Serviceimg.jpg",
  },
  {
    number: "04.",
    title: "Software Dev",
    description:
      "We Build Powerful, Scalable Software Tailored To Solve Specific Business Challenges. From Automation Tools To Enterprise Solutions, Our Process Ensures Flexibility, Functionality, And Long-Term Value Through Clean Code And Modern Architecture.",
    arrow: "down",
    image: "/Serviceimg.jpg",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleImage = (num: string) => {
    setExpanded((prev) => (prev === num ? null : num));
  };

  return (
    <section id="services" className="container py-16 md:py-24 space-y-10 scroll-mt-24">
      <header className="space-y-2 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-semibold">
          <span>Born To Build.</span>{" "}
          <span className="text-muted-foreground">Focused On Impact.</span>
        </h2>
      </header>

      <div className="lg:pt-[7rem] space-y-20">
        {services.map((s) => {
          const isOpen = expanded === s.number;
          return (
            <article
              key={s.number}
              className="border rounded-2xl shadow-sm bg-[#D9D9D94D] overflow-hidden"
            >
              {/* Content Area with Padding */}
              <div className={`lg:pt-20 lg:px-20 p-6 md:p-6 transition-all duration-300 ${
                      isOpen ? "pb-0" : "lg:pb-20 pb-6"
                    }`}>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl md:text-5xl font-medium tabular-nums">
                      {s.number}
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
                      {s.title}
                    </h3>
                  </div>
          
                  <div className="flex items-center gap-10">
                    <Button className="px-6 py-2 text-base">Learn More</Button>
                    {s.image && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full lg:h-20 lg:w-20 h-12 w-12"
                        onClick={() => toggleImage(s.number)}
                      >
                        {isOpen ? <ArrowUpRight size={36} /> : <ArrowDownRight size={36} />}
                      </Button>
                    )}
                  </div>
                </div>
                  
                <p className="text-muted-foreground lg:text-[20px] md:text-lg leading-relaxed mt-6">
                  {s.description}
                </p>
              </div>
                  
              {/* Image Section - No Padding */}
              {s.image && (
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden flex justify-center ${
                    isOpen ? "max-h-[450px]" : "max-h-0"
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-[500px] h-[250px] object-cover object-[center_20%] rounded-t-xl"
                  />
                </div>
              )}
            </article>
          );
        })}

      </div>
    </section>
  );
};

export default Services;
