import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import your images
import img1 from "@/assets/images/capsule1.jpg";
import img2 from "@/assets/images/capsule2.jpg";
import img3 from "@/assets/images/capsule3.jpg";
import img4 from "@/assets/images/capsule4.jpg";


const CLOSED_ARROW_DEG = 75; 

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
  const [openId, setOpenId] = useState<number | null>(1); // default open

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="results"
      className="container py-16 md:py-24 space-y-10 scroll-mt-24"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl lg:pb-20 font-semibold">
        Real Results, <span className="text-muted-foreground">Real Impact</span>
      </h2>

      {/* Flex row instead of grid */}
      <div className="flex gap-6 w-full">
        {results.map((item) => {
          const isOpen = openId === item.id;

          return (
            <motion.article
              key={item.id}
              layout
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
              className={`relative overflow-hidden shadow-sm bg-muted/60 cursor-pointer h-[520px]
                ${isOpen ? "rounded-[32px]" : "rounded-[50px]"} 
                flex-shrink-0`}
              style={{
                flex: isOpen ? 2 : 1, // Open capsule is wider
              }}
              onClick={() => toggleOpen(item.id)}
            >
              {/* Background Image */}
              <motion.img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
                initial={false}
                animate={{
                  scale: isOpen ? 1.05 : 1,
                  opacity: isOpen ? 1 : 0.85,
                  transition: { duration: 0.4 },
                }}
              />

              {/* Arrow Button with rotation */}
              <motion.div
                className={`absolute top-4 right-4 grid place-content-center
                  ${isOpen 
                    ? "h-14 w-14 bg-[#FAC820] text-black" 
                    : "h-10 w-10 border border-foreground/30 text-foreground/80"} 
                  rounded-full`}
                layout
                animate={{ rotate: isOpen ? 90 : 0 }} // rotate 90° when open
                transition={{ duration: 0.3 }}
              >
                <ArrowRight />
              </motion.div>


              {/* Description when open */}
              {isOpen && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-base md:text-lg leading-relaxed drop-shadow">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Results;
