import React, { useState } from 'react';
import BlogImg from '@/assets/images/blogsectionIMG.jpg';

const BlogSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Marketing Tips');

  const tabs = ['All', 'Business Strategies', 'Marketing Tips'];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black mb-2">
            Blog <span className="text-muted-foreground">& Articles</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-black border-b-2 border-black pb-1'
                  : 'text-muted-foreground hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Blog Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={BlogImg}
                alt="Modern office workspace with laptop showing video call"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground font-medium">
                News
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-black mb-6 leading-tight">
              Maximizing Efficiency In Operations
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent
            </p>
            
            <button className="button">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;