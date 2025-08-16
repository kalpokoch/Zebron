import React from 'react';

interface RelatedArticle {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

interface BlogArticleProps {
  heroImage?: string;
  title: string;
  subtitle: string;
  content: string[];
  relatedArticles?: RelatedArticle[];
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  heroImage,
  title,
  subtitle,
  content,
  relatedArticles = []
}) => {
  const defaultRelatedArticles: RelatedArticle[] = [
    {
      id: 1,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'News',
      title: 'Business Strategies',
      description: 'Your Team Or Driving Innovation, Our Network Of World-Class Tech Talent',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const articlesToShow = relatedArticles.length > 0 ? relatedArticles : defaultRelatedArticles;

  return (
    <article className="bg-white">
      <div className="container">
        {/* Hero Image */}
        {heroImage && (
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt={`${title} ${subtitle}`}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto mb-20">
          {/* Article Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              <span className="text-black">{title} </span>
              <span className="text-muted-foreground">{subtitle}</span>
            </h1>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {content.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Articles Section */}
        <section className="py-16 border-t border-gray-100">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black mb-2">
              Read Our <span className="text-muted-foreground">Next Articles</span>
            </h2>
          </div>

          {/* Related Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesToShow.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-muted-foreground font-medium">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
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

// Default export with sample data
const BlogArticleWithDefaults: React.FC<Partial<BlogArticleProps>> = (props) => (
  <BlogArticle
    heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    title="The Influence Of"
    subtitle="Modern Architecture"
    content={[
      "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether",
      "The Influence Of Modern Architecture",
      "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent And Bring Your Vision To Life. Whether",
      "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent",
      "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent",
      "And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent"
    ]}
    {...props}
  />
);

export default BlogArticleWithDefaults;
export { BlogArticle };