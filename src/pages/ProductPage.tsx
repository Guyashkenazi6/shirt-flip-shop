
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDetails } from "@/components/ProductDetails";
import { OrderForm } from "@/components/OrderForm";

const ProductPage = () => {
  const { id } = useParams();
  
  // This would typically fetch product data based on ID
  const product = {
    id: parseInt(id || "1"),
    name: "Freedom Butterfly",
    backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png",
    frontImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png",
    price: 130,
    description: "A modern take on freedom and transformation. This unique design features a melting butterfly effect that represents breaking free from constraints.",
    colors: [
      { name: "Brown", value: "#8B4513", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductDetails product={product} />
          <OrderForm product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
