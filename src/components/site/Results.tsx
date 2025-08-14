import { useState } from "react";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import img1 from "@/assets/images/capsule1.jpg";
import img2 from "@/assets/images/capsule2.jpg";
import img3 from "@/assets/images/capsule3.jpg";
import img4 from "@/assets/images/capsule4.jpg";


interface ResultItem {
  id: number;
  image: string;
  description: string;
}

const results: ResultItem[] = [
  {
    id: 1,
    image: img1,
    description:
      "Developed And Executed A Month-Long Content Plan Across Instagram And LinkedIn For A B2B Company, Resulting In Increased Follower Growth And Engagement Rates.",
  },
  {
    id: 2,
    image: img2,
    description:
      "Implemented a collaborative marketing strategy, boosting engagement by 30% in two weeks.",
  },
  {
    id: 3,
    image: img3,
    description:
      "Coordinated cross-department projects, leading to more efficient workflows and better results.",
  },
  {
    id: 4,
    image: img4,
    description:
      "Launched a successful product campaign that exceeded sales targets within the first month.",
  },
];

const Results = () => {
  const [openId, setOpenId] = useState(1);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <section
        id="results"
        className="max-w-7xl mx-auto py-16 md:py-24 space-y-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl lg:pb-20 font-semibold text-gray-900">
          Real Results, <span className="text-gray-500">Real Impact</span>
        </h2>

        <div className="flex gap-6 w-full">
          {results.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="relative overflow-hidden shadow-lg bg-gray-200 cursor-pointer h-[520px] flex-shrink-0 transition-all duration-500 ease-in-out"
                style={{
                  flex: isOpen ? 2 : 1,
                  borderRadius: isOpen ? '32px' : '50px',
                }}
                onClick={() => toggleOpen(item.id)}
              >
                {/* Image container with fixed positioning to prevent stretching */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    style={{
                      opacity: isOpen ? 1 : 0.85,
                      transformOrigin: 'center center',
                    }}
                  />
                </div>

                {/* Button */}
                <div
                  className="absolute top-4 transition-all duration-500 ease-in-out"
                  style={{
                    right: isOpen ? '16px' : '36px',
                  }}
                >
                  <div
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      width: isOpen ? '80px' : '48px',
                      height: isOpen ? '80px' : '48px',
                    }}
                  >
                    <button
                      className="w-full h-full rounded-full border transition-all duration-500 ease-in-out flex items-center justify-center"
                      style={{
                        backgroundColor: isOpen ? "#FAC820" : "transparent",
                        color: isOpen ? "black" : "white",
                        borderColor: isOpen ? "#FAC820" : "rgba(255, 255, 255, 0.8)",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleOpen(item.id);
                      }}
                    >
                      {isOpen ? (
                        <ArrowRight size={36} />
                      ) : (
                        <ArrowDownRight size={24} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Description overlay */}
                {isOpen && (
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 translate-y-5 transition-all duration-500 ease-in-out delay-200"
                    style={{
                      opacity: 1,
                      transform: 'translateY(0)',
                    }}
                  >
                    <p className="text-base md:text-lg leading-relaxed drop-shadow-lg text-gray-100">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Results;