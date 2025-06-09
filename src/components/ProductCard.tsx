
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  backImage: string;
  frontImage: string;
  price: number;
  colors: {
    name: string;
    value: string;
    backImage: string;
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

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-card border-border" onClick={handleCardClick}>
      <CardContent className="p-0">
        {/* Image Container */}
        <div 
          className="relative overflow-hidden bg-muted aspect-square rounded-t-lg"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={handleImageClick}
        >
          <img
            src={isFlipped ? product.frontImage : selectedColor.backImage}
            alt={`${product.name} - ${isFlipped ? 'Front' : 'Back'}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Flip Indicator */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-foreground">
            {isFlipped ? 'Front' : 'Back'}
          </div>

          {/* Mobile tap hint */}
          <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-muted-foreground md:hidden">
            Tap to flip
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">{product.name}</h3>
          <p className="text-2xl font-bold mb-4 text-foreground">₪{product.price}</p>

          {/* Color Swatches */}
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={(e) => handleColorClick(e, color)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                  selectedColor.name === color.name 
                    ? 'border-primary ring-2 ring-primary/20' 
                    : 'border-border'
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
