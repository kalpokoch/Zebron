const ContentCard = ({ 
  title, 
  description, 
  buttonText = "View More",
  className = "" 
}: {
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
}) => (
  <div className={`border border-black rounded-[30px] p-8 lg:p-12 bg-white ${className}`}>
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full">
      <div className="flex-1">
        <h3 className="font-fahkwang text-2xl lg:text-[28px] font-bold text-black capitalize leading-normal mb-6 lg:mb-8">
          {title}
        </h3>
        <p className="font-fahkwang text-lg lg:text-2xl font-bold text-black/50 capitalize leading-normal max-w-[618px]">
          {description}
        </p>
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
        <button className="bg-black text-white font-fahkwang text-base font-bold capitalize rounded-[20px] px-14 py-5 hover:bg-gray-800 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

const PaginationDots = () => (
  <div className="flex items-center space-x-2 lg:space-x-3">
    <div className="w-8 lg:w-12 h-6 lg:h-7 bg-gray-300 rounded-[20px]"></div>
    <div className="w-8 lg:w-12 h-6 lg:h-7 bg-gray-300 rounded-[20px]"></div>
    <div className="w-16 lg:w-24 h-6 lg:h-7 bg-gray-300 rounded-[20px]"></div>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
      <main className="px-4 lg:px-16">
        <div className="container">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start py-8 lg:py-16">
            {/* Left Column - Text and Image */}
            <div className="space-y-8 lg:space-y-12">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-fahkwang text-4xl lg:text-[60px] font-bold leading-tight lg:leading-normal capitalize">
                  <span className="text-black">We Don't Just Market — </span>
                  <span className="text-black/50">We Make You Matter</span>
                </h1>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative rounded-[30px] overflow-hidden">
                  {/* Blur background layer */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-[65px] opacity-50"
                    style={{
                      backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/83fe7ca0a9bda4c8d9885e487baf896c07bde0d7?width=1056')"
                    }}
                  ></div>
                  {/* Main image */}
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/47989ff5f5d6ef31d7d22e69796b13ec3a2d354f?width=1056"
                    alt="Professional workspace with person working on laptop"
                    className="relative w-full h-[400px] lg:h-[711px] object-cover rounded-[30px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Description and Cards */}
            <div className="space-y-8 lg:space-y-12 lg:pt-20">
              {/* Description Text */}
              <div className="space-y-8">
                <p className="font-fahkwang text-lg lg:text-2xl font-bold text-black/50 capitalize leading-normal">
                  We're a results-driven digital agency helping brands grow fast. From SEO and ads to content and campaigns — we don't just drive traffic, we create impact. Let's turn your business into a brand people remember.
                </p>
              </div>

              {/* Mission Card */}
              <ContentCard
                title="Our Mission"
                description="To make noise in the digital world — not for attention, but for real, lasting brand impact"
                className="mb-8 lg:mb-12"
              />

              {/* What Drives Us Card */}
              <ContentCard
                title="What Drives Us"
                description="Purpose. Creativity. Results. These are the values that fuel every move we make — driving brands forward with clarity and impact"
              />

              {/* Pagination Dots */}
              <div className="flex justify-center lg:justify-start pt-8">
                <PaginationDots />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
