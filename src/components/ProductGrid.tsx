
import { useState } from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Freedom Butterfly",
    backImage: "/lovable-uploads/a03bc66d-06cf-4aac-99ae-374b3999f3c2.png",
    frontImage: "/lovable-uploads/888825ce-4dba-47dc-9b4e-227fe7f7362f.png",
    price: 130,
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
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/113e808b-30d5-4552-a7b6-6404a4a0ce79.png", frontImage: "/lovable-uploads/d091791b-caa6-49e7-ab65-0372b84b91d3.png" }
    ]
  }
];

export const ProductGrid = () => {
  return (
    <section id="products" className="py-12 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
