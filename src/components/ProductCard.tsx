import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  backImage: string;
  frontImage: string;
  price: number;
  originalPrice?: number;
  colors: {
    name: string;
    value: string;
    backImage: string;
    frontImage?: string;
  }[];
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleColorClick = (e: React.MouseEvent, color: typeof selectedColor) => {
    e.stopPropagation();
    setSelectedColor(color);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const getFrontImage = () => {
    return selectedColor.frontImage || product.frontImage;
  };

  return (
    <Card className="group cursor-pointer card-hover bg-card border-border overflow-hidden" onClick={handleCardClick}>
      <CardContent className="p-0">
        {/* Image Container */}
        <div 
          className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-900 to-black"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={handleImageClick}
        >
          <img
            src={isFlipped ? getFrontImage() : selectedColor.backImage}
            alt={`${product.name} -${selectedColor.name} - ${isFlipped ? 'Front' : 'Back'}`}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />

          {product.originalPrice && (
            <Badge variant="destructive" className="absolute top-4 left-4 z-10 rounded-md">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </Badge>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Flip Indicator */}
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium">
            {isFlipped ? 'Front' : 'Back'}
          </div>

          {/* Mobile tap hint */}
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300 md:hidden">
            Tap to flip
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 bg-card">
          <h3 className="text-xl font-bold mb-2 text-foreground tracking-tight">{product.name}</h3>
          
          <div className="flex items-center gap-2 mb-4">
            <p className="text-2xl font-bold text-foreground">{product.price}₪</p>
            {product.originalPrice && (
                <p className="text-lg text-muted-foreground line-through">{product.originalPrice}₪</p>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={(e) => handleColorClick(e, color)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
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
      </CardContent>
    </Card>
  );
};
