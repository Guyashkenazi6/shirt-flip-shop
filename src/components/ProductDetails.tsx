
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  backImage: string;
  frontImage: string;
  price: number;
  description: string;
  colors: {
    name: string;
    value: string;
    backImage: string;
  }[];
}

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div 
        className="relative overflow-hidden bg-muted aspect-square rounded-lg cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <img
          src={isFlipped ? product.frontImage : selectedColor.backImage}
          alt={`${product.name} - ${isFlipped ? 'Front' : 'Back'}`}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        
        {/* Flip Indicator */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full">
          <span className="text-sm font-medium text-foreground">
            {isFlipped ? 'Front View' : 'Back View'}
          </span>
        </div>
        
        {/* Click hint */}
        <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full">
          <span className="text-xs text-muted-foreground">
            Click to flip
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
        <p className="text-2xl font-bold text-foreground">₪{product.price}</p>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        {/* Color Selection */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Color: {selectedColor.name}</h3>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
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

        {/* Features */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>✓ Premium cotton blend</p>
          <p>✓ Hand-printed design</p>
          <p>✓ Machine washable</p>
          <p>✓ Estimated delivery: 7-10 business days</p>
        </div>
      </div>
    </div>
  );
};
