import React from 'react';

interface BlogHeroProps {
  category?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({
  category = "News",
  title,
  subtitle,
  description,
  date,
  author,
  readTime
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category */}
          <div className="mb-6">
            <span className="text-sm text-muted-foreground font-medium">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-black">{title}</span>
            <br />
            <span className="text-muted-foreground">{subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <h3 className="text-black font-bold text-lg mb-1">DATE</h3>
              <p className="text-muted-foreground text-sm">{date}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-black font-bold text-lg mb-1">AUTHOR</h3>
              <p className="text-muted-foreground text-sm">{author}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-black font-bold text-lg mb-1">READ</h3>
              <p className="text-muted-foreground text-sm">{readTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Default export with sample data for easy implementation
const BlogHeroWithDefaults: React.FC<Partial<BlogHeroProps>> = (props) => (
  <BlogHero
    category="News"
    title="The Influence Of"
    subtitle="Modern Architecture"
    description="And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent"
    date="July 2024"
    author="Liam Patel"
    readTime="12 Min"
    {...props}
  />
);

export default BlogHeroWithDefaults;
export { BlogHero };