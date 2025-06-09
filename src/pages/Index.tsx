
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            GUY ASHKENAZI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium custom t-shirt designs. Modern streetwear with artistic flair.
          </p>
        </div>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
