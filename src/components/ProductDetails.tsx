import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  backImage: string;
  frontImage: string;
  price: number;
  originalPrice?: number;
  description: string;
  colors: {
    name: string;
    value: string;
    backImage: string;
    frontImage?: string;
  }[];
}

interface Color {
  name: string;
  value: string;
  backImage: string;
  frontImage?: string;
}

interface ProductDetailsProps {
  product: Product;
  selectedColor: Color;
  setSelectedColor: (color: Color) => void;
}

export const ProductDetails = ({ product, selectedColor, setSelectedColor }: ProductDetailsProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const getFrontImage = () => {
    return selectedColor.frontImage || product.frontImage;
  };

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div 
        className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black aspect-square rounded-lg cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <img
          src={isFlipped ? getFrontImage() : selectedColor.backImage}
          alt={`${product.name} - ${isFlipped ? 'Front' : 'Back'}`}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Flip Indicator */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-white">
            {isFlipped ? 'Front View' : 'Back View'}
          </span>
        </div>
        
        {/* Click hint */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-xs text-gray-300">
            Click to flip
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tight">{product.name}</h1>
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-bold text-foreground">₪{product.price}</p>
            {product.originalPrice && (
              <p className="text-2xl text-muted-foreground line-through">₪{product.originalPrice}</p>
            )}
            {product.originalPrice && (
              <Badge variant="destructive" className="text-base">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed text-lg">
          {product.description}
        </p>

        {/* Color Selection */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Color: {selectedColor.name}</h3>
          <div className="flex gap-4">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-14 h-14 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                  selectedColor.name === color.name 
                    ? 'border-white ring-2 ring-white/30' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Premium cotton blend
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Hand-printed design
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Machine washable
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Estimated delivery: 7-10 business days
          </p>
        </div>

        {/* Bundle Offer */}
        <div className="mt-6 bg-secondary/50 border border-border p-4 rounded-lg text-center animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <p className="font-semibold text-lg text-foreground">
            ✨ Bundle Offers ✨
          </p>
          <p className="text-muted-foreground mt-1">
            Buy 2 shirts → get <span className="text-green-400 font-bold">FREE SHIPPING!</span>
          </p>
          <p className="text-muted-foreground mt-1">
            Add 3 shirts → <span className="text-green-400 font-bold">save 20₪!</span>
          </p>
        </div>
      </div>
    </div>
  );
};
