import { useState } from "react";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/images/work1.jpg";
import img2 from "@/assets/images/work2.jpg";
import img3 from "@/assets/images/work3.jpg";
import img4 from "@/assets/images/work4.jpg";
import img5 from "@/assets/images/work5.jpg";
import img6 from "@/assets/images/work6.jpg";

interface workItem {
  id: number;
  image: string;
  description: string;
}

const works: workItem[] = [
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
  {
    id: 5,
    image: img5,
    description:
      "Launched a successful product campaign that exceeded sales targets within the first month.",
  },
  {
    id: 6,
    image: img6,
    description:
      "Launched a successful product campaign that exceeded sales targets within the first month.",
  },
];

const Works = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="works"
      className="container py-16 md:py-24 space-y-60 scroll-mt-24 lg:mb-32"
    >
        
      {/* <div className="flex gap-6 w-full"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {works.map((item) => {
          const isOpen = openId === item.id;

          return (
            <motion.article
              key={item.id}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`relative overflow-hidden shadow-sm bg-muted/60 cursor-pointer h-[300px] sm:h-[350px] lg:h-[450px] w-[320px] sm:w-[300px] lg:w-[650px]  `}
              style={{
                borderRadius: isOpen ? 38 : 50
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

      <div className="space-y-6 mt-19 lg:mt-20 lg:pl-40">
          
          {/* Row 1: Level Up + Tagline */}
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
              Level Up{" "}
              <span className="text-muted-foreground text-base md:text-xl font-semibold">
                Connect With Top-Tier Developers From Around The Globe
              </span>
            </h2>
          </div>

          {/* Row 2: Headline split into grid */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start">
            {/* Left side of headline */}
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight lg:w-[980px]">
              Your Future With Leading Global
            </h2>
            {/* Right side of headline */}
            <h3 className="text-5xl md:text-6xl font-semibold leading-tight lg:mt-20 lg:pl-4">
              Tech Talent
            </h3>
            
            {/* Paragraph sits under left headline part */}
            <p className="text-muted-foreground lg:text-2xl leading-relaxed max-w-[600px] lg:pl-10 lg:col-start-1 lg:row-start-2 lg:-mt-10 lg:mb-10">
              And Bring Your Vision To Life. Whether You're Building Your Next Product,
              Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech
              Talent Is Here To Help You Go Further—Faster.
            </p>
          </div>

          {/* Button */}
          {/* <Button size="lg" className="lg:ml-40 text-sm gap-5 lg:w-full lg:w-[64%] lg:h-[20%] lg:text-3xl rounded-[20px] lg:gap-32">
            Book A Free Consultation
            <span className="flex items-center justify-center lg:w-20 lg:h-20 rounded-full" style={{ backgroundColor: "#D9D9D926" }}>
              <ArrowRight className="lg:ml-0 max-w-10 h-auto lg:w-20 lg:h-auto" />
            </span>
          </Button> */}
        </div>
    </section>
  );
};

export default Works;