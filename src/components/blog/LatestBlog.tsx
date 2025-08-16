import React from 'react';
import BlogImg1 from '@/assets/images/work2.jpg';
import BlogImg2 from '@/assets/images/capsule2.jpg';
import BlogImg3 from '@/assets/images/blogimg3.jpg';
import BlogImg4 from '@/assets/images/blogimg4.jpg';
import BlogImg5 from '@/assets/images/blogimg5.jpg';
import BlogImg6 from '@/assets/images/blogimg6.jpg';

interface BlogCard {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const LatestBlog: React.FC = () => {
  const blogCards: BlogCard[] = [
    {
      id: 1,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: BlogImg1,
    },
    {
      id: 2,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: BlogImg2,
    },
    {
      id: 3,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: BlogImg3,
    },
    {
      id: 4,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: BlogImg4,
    },
    {
      id: 5,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: BlogImg5,
    },
    {
      id: 6,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: BlogImg6,
    }
  ];

  return (
    <section className="lg:py-32 lg:mt-32 lg:mb-[20%]" style={{ backgroundColor: '#C9B68833' }}>
      <div className="container">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-2">
            Latest <span className="text-muted-foreground">Insights And Trends</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogCards.map((card) => (
            <article
              key={card.id}
              className="rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative">
                {/* Choose the look you want: 4/3 like your mock, or square */}
                <div className="aspect-[1] w-full overflow-hidden rounded-2xl">
                  {/* For perfect squares instead, swap aspect-[4/3] → aspect-square */}
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
        
              {/* Content */}
              <div className="p-6">
                <div className="mb-3 relative mb-4 flex items-center justify-center w-20 h-8 rounded-lg" style={{ backgroundColor: '#D9D9D999'}}>
                  <span className="text-sm text-muted-foreground font-medium">
                    {card.category}
                  </span>
                </div>
        
                <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                  {card.title}
                </h3>
        
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;