import React from 'react';
import AboutSectionImage from '@/assets/images/AboutSection.jpg'; // Vite will handle this path if you have aliases configured

const AboutHomeSection: React.FC = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto px-">
        {/* Top section with text content */}
        <div className="grid md:grid-cols-2 items-start mb-12">
          {/* Column 1: Heading */}
          <div >
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              The Story Behind
              <br />
              <span className="text-muted-foreground">The Strategy</span>
            </h1>
          </div>

          {/* Column 2: Description */}
          <div className="pt-8">
            <p className="text-lg lg:text-3xl text-muted-foreground">
              We're A Team Of Strategists, Designers, And Marketers Driven By One Mission – To Help Brands Grow With Purpose. From Bold Ideas To Measurable Results. Our Journey Is Rooted In Passion, Performance, And People. This Is Who We Are
            </p>
          </div>
        </div>

        {/* Bottom section with the image */}
        <div className="w-full">
          <img
            src={AboutSectionImage}
            alt="Team of strategists and designers in a meeting"
            className="w-full h-auto rounded-lg object-cover"
            loading="lazy" // Use native browser lazy loading for better performance
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHomeSection;