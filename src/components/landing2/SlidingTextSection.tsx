export default function SlidingTextSection() {
  return (
    <>
      {/* Global styles for animations */}
      <style>
        {`
          @keyframes slide-right {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @keyframes slide-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes slide-right-mobile {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @keyframes slide-left-mobile {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-slide-right {
            animation: slide-right 15s linear infinite;
          }

          .animate-slide-left {
            animation: slide-left 15s linear infinite;
          }

          .animate-slide-right-mobile {
            animation: slide-right-mobile 10s linear infinite;
          }

          .animate-slide-left-mobile {
            animation: slide-left-mobile 10s linear infinite;
          }
        `}
      </style>

      <section className="w-full h-[300px] md:h-[387px] bg-white border-t border-b border-black/50 relative overflow-hidden md:mb-[300px]">
        <div className="container mx-auto relative w-full h-full">
          {/* Desktop Layout */}
          <div className="hidden md:block relative w-full h-full">
            {/* First Row - Slides Right */}
            <div className="absolute top-[61px] left-0 flex items-center whitespace-nowrap animate-slide-right">
              {/* Repeat the pattern multiple times for seamless loop */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center">
                  {/* Circle */}
                  <div className="w-10 h-10 rounded-full bg-black flex-shrink-0 ml-[126px]"></div>
                  
                  {/* Text with mixed colors */}
                  <div className="ml-[41px] font-fahkwang text-[60px] font-bold capitalize leading-normal">
                    <span className="text-black">/ UI DESIGN</span>
                  </div>

                  {/* Circle */}
                  <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[72px]"></div>
                  
                  {/* Faded text */}
                  <div className="ml-[41px] font-fahkwang text-[60px] font-bold text-black/20 capitalize leading-normal">
                    / UX DESIGN
                  </div>

                  {/* Circle */}
                  <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[72px]"></div>
                  
                  {/* Faded text */}
                  <div className="ml-[41px] font-fahkwang text-[60px] font-bold text-black/20 capitalize leading-normal">
                    / UI DESIGN
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Slides Left */}
            <div className="absolute top-[194px] left-0 flex items-center whitespace-nowrap animate-slide-left">
              {/* Repeat the pattern multiple times for seamless loop */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center">
                  {/* Circle */}
                  <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[126px]"></div>
                  
                  {/* Faded text */}
                  <div className="ml-[41px] font-fahkwang text-[60px] font-bold text-black/20 capitalize leading-normal">
                    / UI DESIGN
                  </div>

                  {/* Circle */}
                  <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[72px]"></div>
                  
                  {/* Faded text */}
                  <div className="ml-[41px] font-fahkwang text-[60px] font-bold text-black/20 capitalize leading-normal">
                    / UI DESIGN
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile responsive layout */}
          <div className="md:hidden absolute inset-0 flex flex-col justify-center space-y-6 px-4">
            {/* First Row Mobile - Slides Right */}
            <div className="flex items-center overflow-hidden">
              <div className="flex items-center space-x-3 whitespace-nowrap animate-slide-right-mobile">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-black flex-shrink-0"></div>
                    <div className="font-fahkwang text-xl sm:text-2xl font-bold capitalize">
                      <span className="text-black">/ UI DESIGN</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/20 flex-shrink-0"></div>
                    <div className="font-fahkwang text-xl sm:text-2xl font-bold text-black/20 capitalize">
                      / UX DESIGN
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/20 flex-shrink-0"></div>
                    <div className="font-fahkwang text-xl sm:text-2xl font-bold text-black/20 capitalize">
                      / UI DESIGN
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row Mobile - Slides Left */}
            <div className="flex items-center overflow-hidden">
              <div className="flex items-center space-x-3 whitespace-nowrap animate-slide-left-mobile">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-black/20 flex-shrink-0"></div>
                    <div className="font-fahkwang text-xl sm:text-2xl font-bold text-black/20 capitalize">
                      / UI DESIGN
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/20 flex-shrink-0"></div>
                    <div className="font-fahkwang text-xl sm:text-2xl font-bold text-black/20 capitalize">
                      / UI DESIGN
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
