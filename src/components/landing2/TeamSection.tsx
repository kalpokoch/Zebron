interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
}

// const TeamMember = ({ name, title, image }: TeamMemberProps) => (
//   <div className="flex flex-col items-start">
//     <img
//       src={image}
//       alt={name}
//       className="w-full h-[354px] rounded-[30px] object-cover mb-4"
//     />
//     <h3 className="font-fahkwang text-2xl font-bold text-black capitalize leading-normal mb-2">
//       {name}
//     </h3>
//     <p className="font-fahkwang text-lg font-bold text-black/50 capitalize leading-normal">
//       {title}
//     </p>
//   </div>
// );
const TeamMember = ({ name, title, image }: TeamMemberProps) => (
  <div className="relative w-full h-[354px] rounded-[30px] overflow-hidden">
    {/* Background Image */}
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* Text Inside Image */}
    <div className="absolute bottom-0 left-0 p-4">
      <h3 className="font-fahkwang text-2xl font-bold text-white capitalize leading-normal">
        {name}
      </h3>
      <p className="font-fahkwang text-sm font-bold text-white/50 capitalize leading-normal whitespace-nowrap">
        {title}
      </p>
    </div>
  </div>
);

const PaginationDots = () => (
  <div className="flex items-center justify-center gap-[10px]">
    <div className="w-[46px] h-[29px] rounded-[20px] bg-gray-300"></div>
    <div className="w-[46px] h-[29px] rounded-[20px] bg-gray-300"></div>
    <div className="w-[93px] h-[29px] rounded-[20px] bg-gray-300"></div>
  </div>
);

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Olivia Carter",
      title: "Digital Marketing Strategist",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0868e301992df63753130b20783138d432787b56?width=758"
    },
    {
      name: "Emily Brooks", 
      title: "Content & Social Media Manager",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/58e06509f097568354d1039b026b327a8690eb6c?width=758"
    },
    {
      name: "James Walker",
      title: "Performance Marketing Lead", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a950f3a0e8ca967578f4e31c612ccc5776fc7cdc?width=758"
    },
    {
      name: "Sophia Bennett",
      title: "UI/UX Designer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/845c7e170c22b4a33e149204d9d2f25345d7aedd?width=758"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-16">
        {/* Heading */}
        <div className="mb-12 lg:mb-20 text-center">
          <h2 className="font-fahkwang text-4xl lg:text-[60px] font-bold leading-normal capitalize max-w-[870px] mx-auto">
            <span className="text-black">Meet The Team That </span>
            <span className="text-black/50">Turns This Dream Into Reality</span>
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 mb-12 lg:mb-12">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center">
          <PaginationDots />
        </div>
      </div>
    </section>
  );
}
