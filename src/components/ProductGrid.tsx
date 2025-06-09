
import { useState } from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Freedom Butterfly",
    backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png",
    frontImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png",
    price: 130,
    colors: [
      { name: "Brown", value: "#8B4513", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/a5a96b9d-9d60-4daa-989d-167dcdc6ac01.png" }
    ]
  },
  {
    id: 2,
    name: "Ship's Wheel",
    backImage: "/lovable-uploads/59b240c8-e63e-4997-bbba-8fff1175b01d.png",
    frontImage: "/lovable-uploads/59b240c8-e63e-4997-bbba-8fff1175b01d.png",
    price: 130,
    colors: [
      { name: "Charcoal", value: "#36454F", backImage: "/lovable-uploads/59b240c8-e63e-4997-bbba-8fff1175b01d.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/59b240c8-e63e-4997-bbba-8fff1175b01d.png" },
      { name: "Navy", value: "#000080", backImage: "/lovable-uploads/59b240c8-e63e-4997-bbba-8fff1175b01d.png" }
    ]
  },
  {
    id: 3,
    name: "Cherry Blossom Wave",
    backImage: "/lovable-uploads/5f0429cf-2d37-469a-9b1a-58050cfc5845.png",
    frontImage: "/lovable-uploads/5f0429cf-2d37-469a-9b1a-58050cfc5845.png",
    price: 130,
    colors: [
      { name: "Light Gray", value: "#D3D3D3", backImage: "/lovable-uploads/5f0429cf-2d37-469a-9b1a-58050cfc5845.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/5f0429cf-2d37-469a-9b1a-58050cfc5845.png" },
      { name: "Cream", value: "#F5F5DC", backImage: "/lovable-uploads/5f0429cf-2d37-469a-9b1a-58050cfc5845.png" }
    ]
  }
];

export const ProductGrid = () => {
  return (
    <section id="products" className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
