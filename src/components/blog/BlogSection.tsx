import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import BlogImg from '@/assets/images/blogsectionIMG.jpg';

const BlogSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Marketing Tips');

  const tabs = ['All', 'Business Strategies', 'Marketing Tips'];

  const navItems = [
    { label: "BlogDetails", href: "/blogdetails" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-semi-bold  mb-2 tracking-wide">
            Blog <span className="text-muted-foreground">& Articles</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-20 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg lg:text-2xl transition-colors duration-200 ${
                activeTab === tab
                  ? ''
                  : 'text-muted-foreground hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Blog Content */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={BlogImg}
                alt="Modern office workspace with laptop showing video call"
                className="lg:w-[1000px] lg:h-[550px] object-cover "
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="relative mb-4 flex items-center justify-center w-20 h-8 rounded-lg" style={{ backgroundColor: '#D9D9D999'}}>
              <span className="relative text-sm lg:text-lg text-muted-foreground font-medium">
                News
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Maximizing Efficiency In Operations
            </h3>
            
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed mb-8">
              And Bring Your Vision To Life. Whether You're Building Your Next Product, Scaling Your Team, Or Driving Innovation, Our Network Of World-Class Tech Talent
            </p>
            
            <Link to={navItems[0].href}>
              <Button>
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;