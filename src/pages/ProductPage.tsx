
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDetails } from "@/components/ProductDetails";
import { OrderForm } from "@/components/OrderForm";

const ProductPage = () => {
  const { id } = useParams();
  
  const products = [
    {
      id: 1,
      name: "Freedom Butterfly",
      backImage: "/lovable-uploads/819d9caa-451a-42a5-8c14-a6738b685bd6.png",
      frontImage: "/lovable-uploads/9f40ebe0-86d7-4f92-ae39-a97c6a938e33.png",
      price: 130,
      description: "A modern take on freedom and transformation. This unique design features a melting butterfly effect that represents breaking free from constraints.",
      colors: [
        { name: "Brown", value: "#8B4513", backImage: "/lovable-uploads/819d9caa-451a-42a5-8c14-a6738b685bd6.png" },
        { name: "Black", value: "#000000", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" },
        { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" }
      ]
    },
    {
      id: 2,
      name: "Ship's Wheel",
      backImage: "/lovable-uploads/3b82d443-8129-4d94-9389-c75eb7348325.png",
      frontImage: "/lovable-uploads/d7123e83-ba89-4a00-858f-34a975cd4bc5.png",
      price: 130,
      description: "Navigate your style with this maritime-inspired design. The ship's wheel represents direction, control, and the journey of life.",
      colors: [
        { name: "Charcoal", value: "#36454F", backImage: "/lovable-uploads/3b82d443-8129-4d94-9389-c75eb7348325.png" },
        { name: "Black", value: "#000000", backImage: "/lovable-uploads/59b240c8-e63e-4997-bbba-8fff1175b01d.png" },
        { name: "Navy", value: "#000080", backImage: "/lovable-uploads/59b240c8-e63e-4997-bbba-8fff1175b01d.png" }
      ]
    },
    {
      id: 3,
      name: "Surfboard Wave",
      backImage: "/lovable-uploads/9e9a6002-7050-4d7d-bcbf-4f195a3735e7.png",
      frontImage: "/lovable-uploads/0432decc-a957-46cb-a136-22c8b2afd64c.png",
      price: 130,
      description: "Ride the wave of style with this surf-inspired design. Combines ocean vibes with street fashion for the ultimate beach-to-city look.",
      colors: [
        { name: "Black", value: "#000000", backImage: "/lovable-uploads/9e9a6002-7050-4d7d-bcbf-4f195a3735e7.png" },
        { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/05693199-a77e-42ef-93d5-da54dd568b42.png" },
        { name: "Light Gray", value: "#D3D3D3", backImage: "/lovable-uploads/c3c21cef-b683-49a7-a0c4-5597a3a13546.png" }
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || "1")) || products[0];

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
