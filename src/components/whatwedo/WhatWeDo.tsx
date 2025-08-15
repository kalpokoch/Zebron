import React from 'react';
import OurServiesImg from "@/assets/images/capsule2.jpg";
import OurServiesImg2 from "@/assets/images/work2.jpg";

const ServicesPage: React.FC = () => {
  return (
    <div className="container bg-white">
      {/* Header Section */}
      <div className="text-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-2">
          Guided By Vision, <span className="text-muted-foreground">Powered By Purpose</span>
        </h1>
      </div>

      {/* First Image Section */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-3xl lg overflow-hidden shadow-lg">
          <img 
            src={OurServiesImg}
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
        </div>

      {/* Main Content Section */}
      <div className="mx-auto lg:py-24 lg:px-40">
        <div className="grid items-start">
          <div>
            <h2 className="gap-4 flex items-center text-3xl md:text-4xl lg:text-5xl mb-8">
              <span>We Provide Innovative, </span>
              <span className="lg:pt-10 text-lg text-muted-foreground lg:text-right lg:tracking-wide">
                Data-Driven Marketing Solutions <br />
                Designed To Accelerate Brand Growth
              </span>
            </h2>
          </div>

          <div>
            <h3 className="flex items-center mb-8">
                <span className="lg:w-[550px] lg:tracking-wide lg:text-lg text-muted-foreground">
                    In An Ever-Changing Digital World. From SEO And Paid 
                    Ads To Content Strategy, Branding, And Beyond – Our 
                    Approach Blends Creativity With Performance. We Don't 
                    Believe In One-Size-Fits-All; We Tailor Every Solution To 
                    Your Unique Goals, Helping You Scale.
                </span>
                <span className='lg:text-5xl text-right'>  
                    Smarter, Faster,<br />
                    And Stronger
                </span>
            </h3>
          </div>
        </div>
        <p className="text-muted-foreground text-sm lg:text-lg lg:text-right lg:mt-4 lg:pr-[130px]">
            In An Ever-Changing Digital World From SEO And Paid Ads To Content Strategy, Branding, And 
            Beyond – Our Approach Blends Creativity With Performance. We Don't Believe In One-Size-Fits-All; 
            We Tailor Every Solution To Your Unique Goals, Helping You Succeed. In An Ever-Changing Digital 
            World From SEO And Paid Ads To Content Strategy, Branding, And Beyond – Our Approach Blends 
            Creativity With Performance. We Don't Believe In One-Size-Fits-All.
        </p>
      </div>

      {/* Second Image Section */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-3xl lg overflow-hidden shadow-lg">
          <img 
            src={OurServiesImg2}
            alt="Team meeting" 
            className="w-full h-full object-cover"
          />
        </div>
      
    </div>
  );
};

export default ServicesPage;