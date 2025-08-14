import React from "react";
import AboutRoadmapImage from "@/assets/images/AboutRoadmap.jpg";

export default function AboutRoadmap() {
  const items = [
    {
      label: "Our Purpose",
      title: "What We Stand For",
      description:
        "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent Is Here",
    },
    {
      label: "Why We Exist",
      title: "The Reason We’re Here",
      description:
        "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent Is Here",
    },
    {
      label: "The Spark Behind Us",
      title: "Where It All Begins",
      description:
        "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent Is Here",
    },
    {
      label: "Foundation Of Our Work",
      title: "What Drives Our Vision",
      description:
        "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent Is Here",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="container mx-auto lg:mb-20">
        {/* Top Heading */}
        <h2 className="text-center text-4xl lg:text-6xl md:text-4xl font-semibold">
          Highlights From
        </h2>
        <p className="text-center text-muted-foreground text-xl lg:text-6xl md:text-2xl mt-1">
          Our Journey
        </p>

        {/* Sections */}
        <div className="mt-16 space-y-12">
          {items.map((item, idx) => (
            <div key={idx}>
              {/* Small Label */}
              <p className="text-sm text-muted-foreground lg:text-lg">{item.label}</p>

              {/* Divider */}
              <div className="border-t border-black mt-1 pt-6 grid grid-cols-1 md:grid-cols-[2fr_1.2fr] items-start lg:pb-20">
                {/* Left Column: Title */}
                <h3 className="text-2xl md:text-3xl lg:text-6xl font-semibold leading-relaxed">
                  {item.title}
                </h3>

                {/* Right Column: Description */}
                <p className="text-muted-foreground text-base lg:text-lg pr-28 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
