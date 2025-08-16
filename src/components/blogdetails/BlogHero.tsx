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
        <div className="max-w-4xl mx-auto flex text-center justify-center flex-col items-center">
          {/* Category */}
          <div className="relative mb-4 flex justify-center align-center w-20 rounded-lg" style={{ backgroundColor: '#D9D9D999'}}>
            <span className="relative text-sm lg:text-lg text-muted-foreground font-medium">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight lg:leading-tight">
            <span className="text-black">{title}</span>
            <br />
            <span className="text-muted-foreground">{subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg lg:leading-relaxed lg:tracking-wide mb-12 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40">
            <div className="text-center">
              <h3 className="text-black font-bold text-2xl mb-1">DATE</h3>
              <p className="text-muted-foreground text-lg">{date}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-black font-bold text-2xl mb-1">AUTHOR</h3>
              <p className="text-muted-foreground text-lg">{author}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-black font-bold text-2xl mb-1">READ</h3>
              <p className="text-muted-foreground text-lg">{readTime}</p>
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