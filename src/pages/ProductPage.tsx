import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDetails } from "@/components/ProductDetails";
import { AddToCartForm } from "@/components/AddToCartForm";

const ProductPage = () => {
  const { id } = useParams();
  
  const products = [
    {
      id: 1,
      name: "Freedom Butterfly",
      backImage: "/lovable-uploads/a03bc66d-06cf-4aac-99ae-374b3999f3c2.png",
      frontImage: "/lovable-uploads/888825ce-4dba-47dc-9b4e-227fe7f7362f.png",
      price: 130,
      description: "A modern take on freedom and transformation. This unique design features a melting butterfly effect that represents breaking free from constraints.",
      colors: [
        { name: "Brown", value: "#8B4513", backImage: "/lovable-uploads/a03bc66d-06cf-4aac-99ae-374b3999f3c2.png", frontImage: "/lovable-uploads/888825ce-4dba-47dc-9b4e-227fe7f7362f.png" }
      ]
    },
    {
      id: 2,
      name: "Ship's Wheel",
      backImage: "/lovable-uploads/b8a07df5-ffab-4062-a580-b01493d6f88a.png",
      frontImage: "/lovable-uploads/f4afd45c-0e2d-42de-a19e-42b6833b40c6.png",
      price: 130,
      description: "Navigate your style with this maritime-inspired design. The ship's wheel represents direction, control, and the journey of life.",
      colors: [
        { name: "Gray", value: "#36454F", backImage: "/lovable-uploads/b8a07df5-ffab-4062-a580-b01493d6f88a.png", frontImage: "/lovable-uploads/f4afd45c-0e2d-42de-a19e-42b6833b40c6.png" }
      ]
    },
    {
      id: 3,
      name: "Surfboard Wave",
      backImage: "/lovable-uploads/8c90c667-29cc-4d73-b3bc-25bdbef1ba32.png",
      frontImage: "/lovable-uploads/6282bab3-657d-4834-afe8-68dd48ddb118.png",
      price: 130,
      description: "Ride the wave of style with this surf-inspired design. Combines ocean vibes with street fashion for the ultimate beach-to-city look.",
      colors: [
        { name: "Black", value: "#000000", backImage: "/lovable-uploads/8c90c667-29cc-4d73-b3bc-25bdbef1ba32.png", frontImage: "/lovable-uploads/6282bab3-657d-4834-afe8-68dd48ddb118.png" },
        { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/c33762e0-2d7f-4347-8df8-a9bc890d7731.png", frontImage: "/lovable-uploads/eb490c53-e406-474d-929b-cbbcefb0bd72.png" }
      ]
    },
    {
      id: 4,
      name: "Japanese Garden",
      backImage: "/lovable-uploads/113e808b-30d5-4552-a7b6-6404a4a0ce79.png",
      frontImage: "/lovable-uploads/d091791b-caa6-49e7-ab65-0372b84b91d3.png",
      price: 130,
      description: "Embrace the zen aesthetic with this beautiful Japanese-inspired design featuring traditional elements like cherry blossoms, waves, and the rising sun.",
      colors: [
        { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/113e808b-30d5-4552-a7b6-6404a4a0ce79.png", frontImage: "/lovable-uploads/d091791b-caa6-49e7-ab65-0372b84b91d3.png" }
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || "1")) || products[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductDetails product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
          <AddToCartForm product={product} selectedColor={selectedColor} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
