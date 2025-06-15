
import React from 'react';

export const FeaturedDesigns = () => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden card-hover">
            <img 
              src="/lovable-uploads/6fd628f7-e189-4ee9-aec2-106dd9a363b6.png"
              alt="Customer wearing a t-shirt design at a festival"
              className="w-full h-full object-cover"
            />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">Express Yourself</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Our collections feature unique graphics and clean typography, allowing you to wear what you feel. Each design is printed on our signature premium fabric for a look and feel you'll love.
          </p>
          <a 
            href="#products" 
            className="text-white font-semibold border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all"
          >
            See all designs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
