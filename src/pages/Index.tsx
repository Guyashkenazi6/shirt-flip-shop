
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 py-12">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/07d43972-fec5-42b2-97a1-a8515b577972.png" 
              alt="AG Logo" 
              className="h-32 w-auto animate-float"
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium custom t-shirt designs. Modern streetwear with artistic flair.
          </p>
          <div className="mt-8">
            <a 
              href="#products" 
              className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Shop Collection
            </a>
          </div>
        </div>
        
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
