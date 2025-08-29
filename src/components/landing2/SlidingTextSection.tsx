export default function SlidingTextSection() {
  return (
    <section className="w-full h-[387px] bg-white border-t border-b border-black/50 relative overflow-hidden mb-[220px]">

      {/* Sliding Text Container */}
      <div className="relative w-full h-full ">
        {/* First Row */}
        <div className="absolute top-[61px] left-0 flex items-center whitespace-nowrap">
          {/* Circle */}
          <div className="w-10 h-10 rounded-full bg-black flex-shrink-0 ml-[126px]"></div>
          
          {/* Text with mixed colors */}
          <div className="ml-[41px] font-fahkwang text-[60px] lg:text-[60px] font-bold capitalize leading-normal">
            <span className="text-black">/ UI DESIGN</span>
          </div>

          {/* Circle */}
          <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[72px]"></div>
          
          {/* Faded text */}
          <div className="ml-[41px] font-fahkwang text-[60px] lg:text-[60px] font-bold text-black/20 capitalize leading-normal">
            / UX DESIGN
          </div>

          {/* Circle */}
          <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[72px]"></div>
          
          {/* Faded text */}
          <div className="ml-[41px] font-fahkwang text-[60px] lg:text-[60px] font-bold text-black/20 capitalize leading-normal">
            / UI DESIGN
          </div>
        </div>

        {/* Second Row */}
        <div className="absolute top-[194px] left-0 flex items-center whitespace-nowrap">
          {/* Circle */}
          <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[126px]"></div>
          
          {/* Faded text */}
          <div className="ml-[41px] font-fahkwang text-[60px] lg:text-[60px] font-bold text-black/20 capitalize leading-normal">
            / UI DESIGN
          </div>

          {/* Circle */}
          <div className="w-10 h-10 rounded-full bg-black/20 flex-shrink-0 ml-[72px]"></div>
          
          {/* Faded text */}
          <div className="ml-[41px] font-fahkwang text-[60px] lg:text-[60px] font-bold text-black/20 capitalize leading-normal">
            / UI DESIGN
          </div>

        </div>

        {/* Mobile responsive layout */}
        <div className="lg:hidden absolute inset-0 flex flex-col justify-center space-y-8 px-4">
          <div className="flex items-center space-x-4 overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-black flex-shrink-0"></div>
            <div className="font-fahkwang text-3xl font-bold capitalize whitespace-nowrap">
              <span className="text-black">/ UI D</span>
              <span className="text-white">ESIGN</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-black/20 flex-shrink-0"></div>
            <div className="font-fahkwang text-3xl font-bold text-black/20 capitalize whitespace-nowrap">
              / UX DESIGN
            </div>
          </div>
          <div className="flex items-center space-x-4 overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-black/20 flex-shrink-0"></div>
            <div className="font-fahkwang text-3xl font-bold text-black/20 capitalize whitespace-nowrap">
              / UI DESIGN
            </div>
            <div className="w-12 h-12 rounded-full bg-black/20 flex-shrink-0"></div>
            <div className="font-fahkwang text-3xl font-bold text-black/20 capitalize whitespace-nowrap">
              / UI DESIGN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
