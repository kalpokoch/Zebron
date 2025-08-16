import React from 'react';
import BlogArticleImge from "@/assets/images/work5.jpg";

// Import Blog Images for related section
import BlogImg1 from '@/assets/images/work2.jpg';
import BlogImg2 from '@/assets/images/capsule2.jpg';
import BlogImg3 from '@/assets/images/blogimg3.jpg';

const BlogArticle = () => {
  // First three blog cards
  const relatedArticles = [
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
  ];

  return (
    <article className="bg-white lg:mb-[20%]">
      <div className="container">
        {/* Hero Image */}
        <div className="mb-16">
          <div className="w-full h-[400px] md:h-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src={BlogArticleImge}
              alt="The Influence Of Modern Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mb-20">
          {/* Article Title */}
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-wide">
              The Influence of{' '}
              <span className="text-muted-foreground font-semibold">Modern Architecture</span>
            </h1>
          </div>

          {/* Article Body */}
          <div className="max-w-[60rem]">
            <p className="text-muted-foreground lg:text-lg leading-7 tracking-wide capitalize mb-6">
              and bring your vision to life. whether you're building your next product, scaling your team, 
              or driving innovation, our network of world-class tech talent and bring your vision to life.
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        <section className="py-16 border-t border-gray-100">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black mb-2">
              Read Our <span className="text-muted-foreground">Next Articles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((card) => (
              <article
                key={card.id}
                className="rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[1] w-full overflow-hidden rounded-2xl">
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
                  <div
                    className="mb-3 relative mb-4 flex items-center justify-center w-20 h-8 rounded-lg"
                    style={{ backgroundColor: '#D9D9D999'}}
                  >
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
        </section>
      </div>
    </article>
  );
};

export default BlogArticle;
