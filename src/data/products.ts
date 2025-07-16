
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
  originalPrice?: number;
  description: string;
  isNewArrival: boolean;
  colors: Color[];
}

export const products: Product[] = [
  {
    id: 5,
    name: "Angels",
    backImage: "/lovable-uploads/833c136c-37d1-4d70-b596-4d033ce20310.png",
    frontImage: "/lovable-uploads/09d5213b-e377-4054-a4df-525dfc67bee4.png",
    price: 130,
    originalPrice: 150,
    description: "A divine design that blends classical art with a modern streetwear aesthetic.",
    isNewArrival: true,
    colors: [
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/833c136c-37d1-4d70-b596-4d033ce20310.png", frontImage: "/lovable-uploads/09d5213b-e377-4054-a4df-525dfc67bee4.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/09d5213b-e377-4054-a4df-525dfc67bee4.png", frontImage: "/lovable-uploads/833c136c-37d1-4d70-b596-4d033ce20310.png" }
    ]
  },
  {
    id: 3,
    name: "Surfboard Wave",
    backImage: "/lovable-uploads/fd42e409-0531-40e4-9609-1fba869a9cbb.png",
    frontImage: "/lovable-uploads/089442be-6678-423d-a0a6-f80e8c14be79.png",
    price: 130,
    originalPrice: 150,
    description: "Ride the wave of style with this surf-inspired design. Combines ocean vibes with street fashion for the ultimate beach-to-city look.",
    isNewArrival: true,
    colors: [
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/fd42e409-0531-40e4-9609-1fba869a9cbb.png", frontImage: "/lovable-uploads/089442be-6678-423d-a0a6-f80e8c14be79.png" },
      { name: "Navy", value: "#202A44", backImage: "/lovable-uploads/fa20bce7-f7d3-4ec4-a54a-0ca1b073ef5a.png", frontImage: "/lovable-uploads/f6d9b09a-6d75-4d0b-a6b1-5cc06f249972.png" }
    ]
  },
  {
    id: 2,
    name: "Ship's Wheel",
    backImage: "/lovable-uploads/56feff94-d854-4d45-be88-35ed05e8d43f.png",
    frontImage: "/lovable-uploads/93d0690c-a3f2-462b-9f64-ba225911670d.png",
    price: 130,
    originalPrice: 150,
    description: "Navigate your style with this maritime-inspired design. The ship's wheel represents direction, control, and the journey of life.",
    isNewArrival: true,
    colors: [
      { name: "Gray", value: "#36454F", backImage: "/lovable-uploads/56feff94-d854-4d45-be88-35ed05e8d43f.png", frontImage: "/lovable-uploads/93d0690c-a3f2-462b-9f64-ba225911670d.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/1b9c853b-a443-40b7-8b9e-32561ea37756.png", frontImage: "/lovable-uploads/7a4fede2-2083-495d-a59d-104a67214fd1.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/4d173eb9-b02c-4242-93dd-4b39558ef278.png", frontImage: "/lovable-uploads/6a44930d-d79f-4e7e-9421-75148bae1bb8.png" },
      { name: "Navy", value: "#202A44", backImage: "/lovable-uploads/0b98dda1-3281-4d0a-b1f7-9ce5bfdb4092.png", frontImage: "/lovable-uploads/2b2455b6-5b84-4d5e-9669-4bb40e01e883.png" }
    ]
  },
  {
    id: 1,
    name: "Freedom Butterfly",
    backImage: "/lovable-uploads/c63e0397-5b6a-4adf-b9ea-57aa2cad8269.png",
    frontImage: "/lovable-uploads/8dff6775-bbba-48e8-bdde-204a74d2d906.png",
    price: 130,
    originalPrice: 150,
    description: "A modern take on freedom and transformation. This unique design features a melting butterfly effect that represents breaking free from constraints.",
    isNewArrival: true,
    colors: [
      { name: "Brown", value: "#8B4513", backImage: "/lovable-uploads/c63e0397-5b6a-4adf-b9ea-57aa2cad8269.png", frontImage: "/lovable-uploads/8dff6775-bbba-48e8-bdde-204a74d2d906.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/936f6dee-3bfd-4544-bd50-19dfa0876025.png", frontImage: "/lovable-uploads/a96d6f4d-84ba-4237-aa44-fed5403705e4.png" },
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/58b885b1-c476-46a6-a044-d892b4d81da7.png", frontImage: "/lovable-uploads/844f04d9-42ad-4212-8242-c1870dc149fb.png" },
      { name: "Navy", value: "#202A44", backImage: "/lovable-uploads/bffc6065-9d9b-4338-8ab7-572891514eee.png", frontImage: "/lovable-uploads/84c24e42-24fa-420e-9d74-b7dba87a3209.png" }
    ]
  },
  {
    id: 4,
    name: "Japanese Garden",
    backImage: "/lovable-uploads/da91ca1d-7dc8-4a89-ae34-2c25a9e53690.png",
    frontImage: "/lovable-uploads/b3581bfe-548a-41ec-be48-9f91f3850ab7.png",
    price: 130,
    originalPrice: 150,
    description: "Embrace the zen aesthetic with this beautiful Japanese-inspired design featuring traditional elements like cherry blossoms, waves, and the rising sun.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/da91ca1d-7dc8-4a89-ae34-2c25a9e53690.png", frontImage: "/lovable-uploads/b3581bfe-548a-41ec-be48-9f91f3850ab7.png" }
    ]
  },
  {
    id: 6,
    name: "Don't Lose Your Fire",
    backImage: "/lovable-uploads/64044b0d-18dc-4134-9496-ff062b973700.png",
    frontImage: "/lovable-uploads/3bba62a4-3261-4d29-ac83-de610bd569e9.png",
    price: 130,
    originalPrice: 150,
    description: "A powerful message paired with iconic imagery. This design serves as a reminder to keep your inner passion alive.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/64044b0d-18dc-4134-9496-ff062b973700.png", frontImage: "/lovable-uploads/3bba62a4-3261-4d29-ac83-de610bd569e9.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/84991122-be2a-4643-b454-ca6db7cd5dd3.png", frontImage: "/lovable-uploads/7e5a0c47-f0a1-484c-8c57-0d7e21282b82.png" }
    ]
  },
  {
    id: 7,
    name: "Chess",
    backImage: "/lovable-uploads/64bc7694-8dc1-4b4e-8be9-301454d29859.png",
    frontImage: "/lovable-uploads/aa562d8a-6b86-4aa4-ac04-5377a0163c42.png",
    price: 130,
    originalPrice: 150,
    description: "A strategic design that speaks to vision and ambition. The pawn sees a king in the mirror, representing the potential within.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/64bc7694-8dc1-4b4e-8be9-301454d29859.png", frontImage: "/lovable-uploads/aa562d8a-6b86-4aa4-ac04-5377a0163c42.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/dc4bb375-e0d1-4689-9e3c-077b488db99b.png", frontImage: "/lovable-uploads/f2822c2b-2351-4f3c-8c9a-18adfa0044c4.png" }
    ]
  },
  {
    id: 8,
    name: "Balance",
    backImage: "/lovable-uploads/181ac141-ba2c-4416-b24f-d24e54d88206.png",
    frontImage: "/lovable-uploads/e3134f55-c059-467b-81b5-4fe36d6b3121.png",
    price: 130,
    originalPrice: 150,
    description: "The state of balancing your mind, body, and spirit, where priorities align with your true self, leading to inner peace, clarity, and fulfillment.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/181ac141-ba2c-4416-b24f-d24e54d88206.png", frontImage: "/lovable-uploads/e3134f55-c059-467b-81b5-4fe36d6b3121.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/12a3539a-2465-45a8-91f8-622a452d807a.png", frontImage: "/lovable-uploads/58830503-4389-45d8-ac00-6e96d0639c00.png" }
    ]
  },
  {
    id: 11,
    name: "Don't Quit",
    backImage: "/lovable-uploads/469467b8-5e16-4671-aeba-6f778d16548a.png",
    frontImage: "/lovable-uploads/ae59d19f-108c-47d4-ade5-fdf4732945d3.png",
    price: 130,
    originalPrice: 150,
    description: "A message of perseverance. The simple 'Don't Quit' on the front is a personal reminder, while the frayed rope on the back symbolizes holding on through tension. A powerful statement piece.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/469467b8-5e16-4671-aeba-6f778d16548a.png", frontImage: "/lovable-uploads/ae59d19f-108c-47d4-ade5-fdf4732945d3.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/ddceb057-8333-43b7-be77-a21ef4ae0025.png", frontImage: "/lovable-uploads/60b49a59-af8c-4794-8bcc-352b1711dcac.png" }
    ]
  },
  {
    id: 10,
    name: "Camera",
    backImage: "/lovable-uploads/01f4c27e-be3f-4f5f-b8c4-fcc497953029.png",
    frontImage: "/lovable-uploads/3a28efb3-0800-4d2d-a58c-9491a91d9278.png",
    price: 130,
    originalPrice: 150,
    description: "Capture the moment. This design juxtaposes the mechanical precision of a vintage camera on the front with the natural beauty of a daisy on the back, a tribute to finding art in the everyday.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/01f4c27e-be3f-4f5f-b8c4-fcc497953029.png", frontImage: "/lovable-uploads/3a28efb3-0800-4d2d-a58c-9491a91d9278.png" }
    ]
  },
  {
    id: 9,
    name: "Fallen Angel",
    backImage: "/lovable-uploads/5e7d78e8-10fd-4c0e-8003-8d2be86d8ef9.png",
    frontImage: "/lovable-uploads/92c595d4-4645-4c1d-974d-67d9b46f29a7.png",
    price: 130,
    originalPrice: 150,
    description: "A poignant design blending sorrow and divinity. The single tear on the front gives way to the powerful image of a fallen angel on the back, a story of beautiful tragedy.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/5e7d78e8-10fd-4c0e-8003-8d2be86d8ef9.png", frontImage: "/lovable-uploads/92c595d4-4645-4c1d-974d-67d9b46f29a7.png" }
    ]
  },
  {
    id: 12,
    name: "Zen Figures",
    backImage: "/lovable-uploads/666f801d-2c5e-48eb-9c7a-58559bf7ba2a.png",
    frontImage: "/lovable-uploads/9a93f1e8-bf89-469c-bf52-aa2546472d98.png",
    price: 130,
    originalPrice: 150,
    description: "A minimalist design featuring meditative figures representing inner peace and mindfulness.",
    isNewArrival: false,
    colors: [
      { name: "White", value: "#FFFFFF", backImage: "/lovable-uploads/666f801d-2c5e-48eb-9c7a-58559bf7ba2a.png", frontImage: "/lovable-uploads/9a93f1e8-bf89-469c-bf52-aa2546472d98.png" },
      { name: "Black", value: "#000000", backImage: "/lovable-uploads/9a93f1e8-bf89-469c-bf52-aa2546472d98.png", frontImage: "/lovable-uploads/666f801d-2c5e-48eb-9c7a-58559bf7ba2a.png" }
    ]
  }
];
