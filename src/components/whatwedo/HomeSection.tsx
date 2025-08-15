import React from 'react';
import imageLeft from '@/assets/images/WhatWeDOFirst.jpg';
import imageRight from '@/assets/images/capsule3.jpg';

const HomeSection: React.FC = () => {
  return (
    <section className="container bg-white py-16 md:py-24">
      <div className="mx-auto">
        {/* Text content section */}
        <div className="mb-20">
          <p className="text-sm font-semibold uppercase mb-10  lg:pr-[44%] text-center lg:text-4xl">
            ABOUT US
          </p>
          <h1
            className=" md:text-center text-4xl lg:text-6xl font-semi-bold tracking-relaxed leading-relaxed"
            style={{ lineHeight: '1.2' }}
            >
            Who We Are. Why {" "}
            <span className='text-muted-foreground'>
                We Build.
            <br />
                What We Believe
            </span>.
          </h1>
        </div>

        {/* Image grid section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/3">
            <img
              src={imageLeft}
              alt="A smiling professional woman in a blue blazer working at her desk"
              className="w-full lg:h-[500px] object-cover rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
          {/* Right Image */}
          <div className="w-full md:w-2/3">
            <img
              src={imageRight}
              alt="A diverse team collaborating and shaking hands in a modern office"
              className="w-full lg:h-[500px] object-cover rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Decorative indicator dots */}
        <div className="flex justify-center lg:justify-start items-center gap-2 mt-8">
          <div className="w-10 h-6 rounded-full bg-gray-300"></div>
          <div className="w-10 h-6 rounded-full bg-gray-300"></div>
          <div className="w-20 h-6 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;