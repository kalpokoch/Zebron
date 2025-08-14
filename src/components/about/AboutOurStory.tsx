import React from 'react';

// A small component for the individual stats to keep the main component clean
const StatItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="text-center">
    <p className="text-md uppercase tracking-wider text-muted-foreground">{label}</p>
    <p className="text-5xl lg:text-8xl font-bold text-gray-800 mt-2">
      {value} <span className="text-primary">+</span>
    </p>
  </div>
);

const AboutOurStory: React.FC = () => {
  return (
    // Using bg-stone-50 to approximate the light beige background color
    <section 
        className="relative overflow-hidden"
        style={{ backgroundColor: "#C9B68833" }}
    >
      {/* Decorative semi-circle element */}
      <div 
        className="hidden lg:block absolute top-0 left-[40%] -translate-x-1/2 -mt-[2%] w-32 h-32 bg-white rounded-full"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto py-16 md:py-24">
        {/* Top section: Vision and Description */}
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-30 gap-y-10 mb-20 md:mb-32">
          {/* Left Column: Headings */}
          <div className="flex flex-col justify-start">
            <p className="text-lg lg:text-4xl font-semibold text-muted-foreground lg:mb-20">Our Story</p>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900" style={{ lineHeight: "1.4" }} >
              From A Bold Vision {" "} 
              <span className='text-muted-foreground'>
              To Real Impact {" "} 
              </span>
              That Builds Brands
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="flex flex-col lg:text-xl justify-center space-y-4 text-muted-foreground lg:pl-20">
            <p className="leading-relaxed lg:mt-10">
              What Started As A Small Idea Turned Into A Mission To Help Brands Grow Smarter In The Digital World. Our Story Is One Of Creativity, Hustle, And A Belief That Marketing Should Be Both Strategic And Human. Every Step We've Taken Has Shaped Who We Are – And How We Help Businesses Thrive Today. From Late-Night Brainstorms To Data-Driven Decisions.
            </p>
            <p className="leading-relaxed lg:pt-[4%]">
              We've Built A Team That Values Purpose, Innovation, And Measurable Results. As The Digital Landscape Evolves, So Do We – Adapting, Learning, And Leading With Passion In Everything We Do.
            </p>
          </div>
        </div>

        {/* Bottom section: Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0 gap-x-8">
          <StatItem label="Year Experience" value="12" />
          <StatItem label="Team Expert" value="534" />
          <StatItem label="Clients Worldwide" value="1000" />
        </div>
      </div>
      
      {/* Yellow decorative bar at the bottom */}
      <div className="h-14 md:h-20 bg-amber-400 lg:h-36 w-full"></div>
    </section>
  );
};

export default AboutOurStory;