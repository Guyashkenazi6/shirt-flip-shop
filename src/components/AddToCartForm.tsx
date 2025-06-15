
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Minus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Color {
  name: string;
  value: string;
  frontImage?: string;
}

interface AddToCartFormProps {
  product: Product;
  selectedColor: Color;
}

export const AddToCartForm = ({ product, selectedColor }: AddToCartFormProps) => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    addToCart(product, selectedColor, size, quantity);
  };

  const updateQuantity = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Customize Your Order</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Size Selection */}
        <div className="space-y-2">
          <Label htmlFor="size" className="text-foreground">Size *</Label>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger className="bg-input border-border text-foreground">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {sizes.map((s) => (
                <SelectItem key={s} value={s} className="text-popover-foreground">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Quantity */}
        <div className="space-y-2">
          <Label className="text-foreground">Quantity</Label>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(-1)}
              disabled={quantity <= 1}
              className="border-border text-foreground hover:bg-accent"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center text-lg font-medium text-foreground">{quantity}</span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(1)}
              className="border-border text-foreground hover:bg-accent"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button onClick={handleAddToCart} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
