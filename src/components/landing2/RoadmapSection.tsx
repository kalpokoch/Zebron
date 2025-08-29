const ArrowIcon = () => (
  <svg 
    width="41" 
    height="42" 
    viewBox="0 0 41 42" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-[25px] h-[32px]"
  >
    <path 
      d="M1.32612 1.63673C1.94461 1.04451 2.77302 0.722241 3.62912 0.740816C4.48522 0.75939 5.29888 1.11729 5.89109 1.73577L33.2449 30.3029L33.6682 10.7058C33.6868 9.84822 34.0453 9.03315 34.6649 8.43991C35.2845 7.84666 36.1143 7.52383 36.9719 7.54244C37.8295 7.56105 38.6445 7.91956 39.2378 8.53912C39.831 9.15868 40.1539 9.98854 40.1353 10.8461L39.541 38.236C39.5325 38.6608 39.4402 39.0798 39.2695 39.469C39.0987 39.8581 38.8528 40.2097 38.5459 40.5036C38.239 40.7974 37.8771 41.0279 37.4809 41.1816C37.0847 41.3353 36.6621 41.4093 36.2373 41.3993L8.84744 40.8051C8.42281 40.7959 8.00414 40.7031 7.61536 40.5321C7.22658 40.3611 6.87529 40.1152 6.58154 39.8084C6.28779 39.5016 6.05735 39.14 5.90336 38.7441C5.74937 38.3483 5.67486 37.926 5.68407 37.5014C5.69328 37.0768 5.78604 36.6581 5.95706 36.2693C6.12807 35.8805 6.37398 35.5292 6.68076 35.2355C6.98753 34.9417 7.34916 34.7113 7.745 34.5573C8.14083 34.4033 8.56312 34.3288 8.98775 34.338L28.5809 34.7688L1.22707 6.2017C0.634851 5.58322 0.312581 4.7548 0.331155 3.89871C0.349732 3.04261 0.70763 2.22895 1.32612 1.63673Z" 
      fill="black"
    />
  </svg>
);

interface RoadmapStepProps {
  stepNumber: string;
  title: string;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
  titleStyle?: 'mixed' | 'black';
}

const RoadmapStep = ({ 
  stepNumber, 
  title, 
  description, 
  isFirst = false, 
  isLast = false,
  titleStyle = 'black'
}: RoadmapStepProps) => (
  <div className="relative">
    {/* Background Step Number */}
    <div className="absolute left-0 top-0 select-none pointer-events-none">
      <span className="font-fahkwang text-[130px] font-bold text-black/10 leading-none">
        {stepNumber}
      </span>
    </div>

    {/* Content Container */}
    <div className="relative pl-24 lg:pl-32 pt-8 pb-12">
      {/* Step Title */}
      <div className="mb-6">
        {titleStyle === 'mixed' && title === 'Deep Discovery' ? (
          <h3 className="font-fahkwang text-4xl lg:text-[60px] font-bold leading-normal capitalize">
            <span className="text-black">Deep D</span>
            <span className="text-black">iscovery</span>
          </h3>
        ) : (
          <h3 className="font-fahkwang text-4xl lg:text-[60px] font-bold text-black leading-normal capitalize">
            {title}
          </h3>
        )}
      </div>

      {/* Step Description */}
      <div className="mb-8 max-w-5xl">
        {titleStyle === 'mixed' && title === 'Deep Discovery' ? (
          <p className="font-fahkwang text-xl lg:text-[21px] font-bold leading-normal capitalize">
            <span className="text-black/50">We dive into your bus</span>
            <span className="text-black/50">iness goals, audience, and cha</span>
            <span className="text-black/50">llenges to uncover insights that guide everything we do.</span>
          </p>
        ) : (
          <p className="font-fahkwang text-xl lg:text-[21px] font-bold text-black/50 leading-normal capitalize">
            {description}
          </p>
        )}
      </div>
    

      {/* Arrow Button */}
      <div className="absolute right-0 top-8 lg:top-12">
        <div className="w-[72px] h-[72px]  rounded-full border border-black/10 flex items-center justify-center rotate-[120deg]  hover:border-black/30 transition-colors cursor-pointer">
          <div className="rotate-[-134deg]">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>

    {/* Horizontal Divider Line */}
    {!isLast && (
      <div className="w-full h-px bg-black mb-8 lg:mb-12"></div>
    )}
  </div>
);

export default function RoadmapSection() {
  const roadmapSteps = [
    {
      stepNumber: "1",
      title: "Deep Discovery",
      description: "We dive into your business goals, audience, and challenges to uncover insights that guide everything we do.",
      titleStyle: 'mixed' as const
    },
    {
      stepNumber: "2", 
      title: "Strategic Planning",
      description: "With clarity and data, we build a customized roadmap aligned with your objectives, timeline, and target market"
    },
    {
      stepNumber: "3",
      title: "Flawless Execution", 
      description: "From campaigns to content, our team activates the strategy with precision and creativity across all channels"
    },
    {
      stepNumber: "4",
      title: "Ongoing Optimization",
      description: "We monitor performance, analyze results, and refine our approach to keep your growth on track and scaling"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-16">
        {/* Heading */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="font-fahkwang text-6xl lg:text-[82px] font-bold leading-normal capitalize">
            <span className="text-black">The Road </span>
            <span className="text-black/50">to Results</span>
          </h2>
        </div>

        {/* Roadmap Steps */}
        <div className="space-y-0">
          {roadmapSteps.map((step, index) => (
            <RoadmapStep
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              titleStyle={step.titleStyle}
              isFirst={index === 0}
              isLast={index === roadmapSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
