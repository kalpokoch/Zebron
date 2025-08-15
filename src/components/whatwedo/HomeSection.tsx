import React from 'react';

// Importing the images using the specified paths (assuming '@' is an alias for 'src')
import imageLeft from '@/assets/images/WhatWeDOFirst.jpg';
import imageRight from '@/assets/images/capsule3.jpg';

const HomeSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Text content section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            ABOUT US
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
            Who We Are. Why We Build.
            <br />
            What We Believe.
          </h1>
        </div>

        {/* Image grid section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          {/* Left Image */}
          <div className="w-full md:w-1/3">
            <img
              src={imageLeft}
              alt="A smiling professional woman in a blue blazer working at her desk"
              className="w-full h-auto object-cover rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
          {/* Right Image */}
          <div className="w-full md:w-2/3">
            <img
              src={imageRight}
              alt="A diverse team collaborating and shaking hands in a modern office"
              className="w-full h-auto object-cover rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Decorative indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-5 h-2 rounded-full bg-gray-600"></div>
          <div className="w-5 h-2 rounded-full bg-gray-300"></div>
          <div className="w-5 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;