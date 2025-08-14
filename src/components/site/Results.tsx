import { useState } from "react";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  const [openId, setOpenId] = useState<number | null>(1);

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

      <div className="flex gap-6 w-full">
        {results.map((item) => {
          const isOpen = openId === item.id;

          return (
            <motion.article
              key={item.id}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`relative overflow-hidden shadow-sm bg-muted/60 cursor-pointer h-[520px] flex-shrink-0`}
              style={{
                flex: isOpen ? 2 : 1,
                borderRadius: isOpen ? 32 : 50, // animate border radius smoothly
              }}
            >
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

              {item.image && (
                <motion.div
                  layout="position" // makes button follow position smoothly
                  className="absolute top-4 right-4"
                  animate={{
                    right: isOpen ? 16 : 36, // px from the right (more inward when closed)
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{
                      width: isOpen ? 80 : 48, // animate size smoothly
                      height: isOpen ? 80 : 48,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-full h-full"
                      style={{
                        backgroundColor: isOpen ? "#FAC820" : "transparent",
                        color: isOpen ? "black" : "inherit",
                        border: isOpen ? "none" : "1px solid #ffffffff",
                      }}
                      onClick={() => toggleOpen(item.id)}
                    >
                      {isOpen ? (
                        <ArrowRight size={36} />
                      ) : (
                        <ArrowDownRight
                          size={36}
                          style={{ color: "#ffffffff" }}
                          />
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {isOpen && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p 
                    className="text-base md:text-lg lg:text-s leading-relaxed drop-shadow"
                    style={{ color: "#F1F1F1" }}
                    >
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
