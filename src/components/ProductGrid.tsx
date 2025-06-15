
import { useState } from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Freedom Butterfly",
    backImage: "/lovable-uploads/819d9caa-451a-42a5-8c14-a6738b685bd6.png",
    frontImage: "/lovable-uploads/9f40ebe0-86d7-4f92-ae39-a97c6a938e33.png",
    price: 130,
    colors: [
      { name: "Brown", value: "#8B4513", backImage: "/lovable-uploads/819d9caa-451a-42a5-8c14-a6738b685bd6.png", frontImage: "/lovable-uploads/9f40ebe0-86d7-4f92-ae39-a97c6a938e33.png" }
    ]
  },
  {
    id: 2,
    name: "Ship's Wheel",
    backImage: "/lovable-uploads/3b82d443-8129-4d94-9389-c75eb7348325.png",
    frontImage: "/lovable-uploads/d7123e83-ba89-4a00-858f-34a975cd4bc5.png",
    price: 130,
    colors: [
      { name: "Gray", value: "#36454F", backImage: "/lovable-uploads/3b82d443-8129-4d94-9389-c75eb7348325.png", frontImage: "/lovable-uploads/d7123e83-ba89-4a00-858f-34a975cd4bc5.png" }
    ]
  },
  {
    id: 3,
    name: "Surfboard Wave",
    backImage: "/lovable-uploads/9e9a6002-7050-4d7d-bcbf-4f195a3735e7.png",
    frontImage: "/lovable-uploads/0432decc-a957-46cb-a136-22c8b2afd64c.png",
    price: 130,
    colors: [
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/9e9a6002-7050-4d7d-bcbf-4f195a3735e7.png", frontImage: "/lovable-uploads/0432decc-a957-46cb-a136-22c8b2afd64c.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/05693199-a77e-42ef-93d5-da54dd568b42.png", frontImage: "/lovable-uploads/9f7e160c-aeb7-4677-b2dc-1ce68a12aec3.png" }
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
    <section id="products" className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
