
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 py-12">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/186d10f7-591f-42a3-b0e4-31b5a42328fa.png" 
              alt="Guy Ashkenazi Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            GUY ASHKENAZI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium custom t-shirt designs. Modern streetwear with artistic flair.
          </p>
          <div className="mt-8">
            <a 
              href="#products" 
              className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
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
