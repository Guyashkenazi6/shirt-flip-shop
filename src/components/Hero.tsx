
import React from 'react';

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tighter">
              Crafted for Comfort. <br /> Designed for Style.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
              Discover premium essentials that are built to last. Our commitment is to quality, comfort, and timeless design.
            </p>
            <a 
              href="#new-arrivals" 
              className="inline-block bg-white text-black px-10 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 rounded-sm"
            >
              Explore Collection
            </a>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-white/5">
              <img 
                src="/lovable-uploads/4ef3a371-e710-4ce6-9e54-3c0bda258034.png"
                alt="Model wearing AG t-shirt"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
