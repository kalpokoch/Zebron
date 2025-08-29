import { useState } from "react";

const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 22 22" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transform-gpu transition-transform duration-300 ${isOpen ? 'rotate-[-90deg]' : 'rotate-[5deg]'}`}

  >
    <path 
      d="M1.35837 0.547559C1.6871 0.232791 2.12741 0.0615029 2.58243 0.0713762C3.03745 0.0812481 3.46991 0.271472 3.78468 0.600202L18.3234 15.7838L18.5484 5.36782C18.5583 4.91201 18.7488 4.4788 19.0781 4.16349C19.4074 3.84817 19.8485 3.67659 20.3043 3.68648C20.7601 3.69637 21.1933 3.88692 21.5086 4.21622C21.8239 4.54552 21.9955 4.98659 21.9856 5.4424L21.6698 20.0003C21.6653 20.2261 21.6162 20.4488 21.5255 20.6556C21.4347 20.8624 21.304 21.0493 21.1409 21.2055C20.9778 21.3617 20.7854 21.4842 20.5748 21.5659C20.3643 21.6476 20.1396 21.6869 19.9139 21.6816L5.356 21.3657C5.1303 21.3608 4.90778 21.3115 4.70114 21.2207C4.4945 21.1298 4.30779 20.9991 4.15166 20.836C3.99553 20.6729 3.87305 20.4807 3.7912 20.2704C3.70936 20.06 3.66975 19.8355 3.67465 19.6098C3.67955 19.3841 3.72885 19.1616 3.81974 18.955C3.91064 18.7483 4.04134 18.5616 4.20439 18.4055C4.36745 18.2494 4.55965 18.1269 4.77004 18.045C4.98043 17.9632 5.20488 17.9236 5.43057 17.9285L15.8444 18.1575L1.30573 2.97387C0.99096 2.64514 0.819671 2.20483 0.829544 1.74981C0.839417 1.29479 1.02964 0.862326 1.35837 0.547559Z" 
      fill="black"
    />
  </svg>
);

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="w-full">
    {/* Question Container */}
    <div 
      className={`w-full h-[131px] rounded-[35px] border border-transparent bg-transparent flex items-center justify-between px-12 cursor-pointer transition-all duration-300 ${isOpen ? 'mb-6' : 'mb-0'}`}
      onClick={onToggle}
    >
      <h3 className="font-fahkwang text-[20px] font-bold text-black capitalize leading-normal text-left whitespace-nowrap ">
        {question}
      </h3>


      
      {/* Arrow Button */}
      <div className="w-[72px] h-[72px] rounded-full border border-black flex items-center justify-center flex-shrink-0 ml-8">
        <ArrowIcon isOpen={isOpen} />
      </div>
    </div>
    
    {/* Answer Container */}
    {isOpen && answer && (
      <div className="px-12 pb-8 transition-all duration-300 ease-in-out">
        <p className="font-fahkwang text-[21px] font-bold text-black/70 capitalize leading-normal max-w-[783px]">
          {answer}
        </p>
      </div>
    )}
  </div>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Start with second item open

  const faqData = [
    {
      question: "What Kind Of Project Do You Specialize ?",
      answer: "We blend strategy with creativity. We don't just make things look good — we make them meaningful, aligned with your goals, and built to perform"
    },
    {
      question: "What Sets Your Agency Apart From Others?",
      answer: "We blend strategy with creativity. We don't just make things look good — we make them meaningful, aligned with your goals, and built to perform"
    },
    {
      question: "How Involved Will I Be In The Process?",
      answer: "We blend strategy with creativity. We don't just make things look good — we make them meaningful, aligned with your goals, and built to perform"
    },
    {
      question: "Do You Work With Startups ?",
      answer: "We blend strategy with creativity. We don't just make things look good — we make them meaningful, aligned with your goals, and built to perform"
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <section className="w-full py-16 lg:py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 lg:px-16">

      {/* Heading row (spans both columns) */}
      <div className="mb-12 lg:mb-16 text-center">
        <h2 className="font-fahkwang text-6xl lg:text-[80px] font-bold leading-normal capitalize  whitespace-nowrap">
          <span className="text-black">Got </span>
          <span className="text-black/50">Questions ?</span>
        </h2>
      </div>

      {/* Two-column content */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"> */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start">

        {/* Left: FAQ */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Right: Image */}
        <div className="lg:ml-8">
          {/* <div className="w-full h-[300px] lg:h-[550px] rounded-[30px] overflow-hidden"> */}
          <div className="w-full aspect-[3/4] rounded-[30px] overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/081a4387dbe56f3d0678bd87c83d49db116e38e0?width=1082"
              alt="Professional team members collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

}
