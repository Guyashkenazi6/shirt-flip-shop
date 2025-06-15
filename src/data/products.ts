
export interface Color {
  name: string;
  value: string;
  backImage: string;
  frontImage?: string;
}

export interface Product {
  id: number;
  name: string;
  backImage: string;
  frontImage: string;
  price: number;
  description: string;
  isNewArrival: boolean;
  colors: Color[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Freedom Butterfly",
    backImage: "/lovable-uploads/a03bc66d-06cf-4aac-99ae-374b3999f3c2.png",
    frontImage: "/lovable-uploads/888825ce-4dba-47dc-9b4e-227fe7f7362f.png",
    price: 130,
    description: "A modern take on freedom and transformation. This unique design features a melting butterfly effect that represents breaking free from constraints.",
    isNewArrival: true,
    colors: [
      { name: "Brown", value: "#8B4513", backImage: "/lovable-uploads/a03bc66d-06cf-4aac-99ae-374b3999f3c2.png", frontImage: "/lovable-uploads/888825ce-4dba-47dc-9b4e-227fe7f7362f.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/936f6dee-3bfd-4544-bd50-19dfa0876025.png", frontImage: "/lovable-uploads/a96d6f4d-84ba-4237-aa44-fed5403705e4.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/58b885b1-c476-46a6-a044-d892b4d81da7.png", frontImage: "/lovable-uploads/844f04d9-42ad-4212-8242-c1870dc149fb.png" }
    ]
  },
  {
    id: 2,
    name: "Ship's Wheel",
    backImage: "/lovable-uploads/b8a07df5-ffab-4062-a580-b01493d6f88a.png",
    frontImage: "/lovable-uploads/f4afd45c-0e2d-42de-a19e-42b6833b40c6.png",
    price: 130,
    description: "Navigate your style with this maritime-inspired design. The ship's wheel represents direction, control, and the journey of life.",
    isNewArrival: true,
    colors: [
      { name: "Gray", value: "#36454F", backImage: "/lovable-uploads/b8a07df5-ffab-4062-a580-b01493d6f88a.png", frontImage: "/lovable-uploads/f4afd45c-0e2d-42de-a19e-42b6833b40c6.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/1b9c853b-a443-40b7-8b9e-32561ea37756.png", frontImage: "/lovable-uploads/7a4fede2-2083-495d-a59d-104a67214fd1.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/4d173eb9-b02c-4242-93dd-4b39558ef278.png", frontImage: "/lovable-uploads/6a44930d-d79f-4e7e-9421-75148bae1bb8.png" }
    ]
  },
  {
    id: 5, // New Product ID
    name: "Angels",
    backImage: "/lovable-uploads/348f8da6-e309-47c6-ac4e-36befb85bf97.png",
    frontImage: "/lovable-uploads/cc74473a-f8f8-4881-b452-c29c5acb7168.png",
    price: 130,
    description: "A divine design that blends classical art with a modern streetwear aesthetic.",
    isNewArrival: true,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/348f8da6-e309-47c6-ac4e-36befb85bf97.png", frontImage: "/lovable-uploads/cc74473a-f8f8-4881-b452-c29c5acb7168.png" }
      // Black variant will be added here once images are provided
    ]
  },
  {
    id: 3,
    name: "Surfboard Wave",
    backImage: "/lovable-uploads/8c90c667-29cc-4d73-b3bc-25bdbef1ba32.png",
    frontImage: "/lovable-uploads/6282bab3-657d-4834-afe8-68dd48ddb118.png",
    price: 130,
    description: "Ride the wave of style with this surf-inspired design. Combines ocean vibes with street fashion for the ultimate beach-to-city look.",
    isNewArrival: false,
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
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/113e808b-30d5-4552-a7b6-6404a4a0ce79.png", frontImage: "/lovable-uploads/d091791b-caa6-49e7-ab65-0372b84b91d3.png" }
    ]
  }
];
