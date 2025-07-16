
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDetails } from "@/components/ProductDetails";
import { AddToCartForm } from "@/components/AddToCartForm";
import { products, Color } from "@/data/products";
import { SizeRecommender } from "@/components/SizeRecommender";
import { SaleBanner } from "@/components/SaleBanner";

const ProductPage = () => {
  const { id } = useParams();
  
  const product = products.find(p => p.id === parseInt(id || "1")) || products[0];
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);

  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <SaleBanner />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductDetails product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          <div>
            <AddToCartForm product={product} selectedColor={selectedColor} />
            <SizeRecommender />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
