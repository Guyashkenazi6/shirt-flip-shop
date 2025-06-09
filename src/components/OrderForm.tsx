
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface OrderFormProps {
  product: Product;
}

export const OrderForm = ({ product }: OrderFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    size: "",
    quantity: 1,
    fullName: "",
    email: "",
    address: "",
    zipCode: "",
    phone: "",
    notes: ""
  });

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const total = product.price * formData.quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.size || !formData.fullName || !formData.email || !formData.address || !formData.zipCode) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Order submitted!",
      description: "You will be redirected to payment shortly."
    });

    // Here you would integrate with your payment processor
    console.log("Order data:", { ...formData, product, total });
  };

  const updateQuantity = (change: number) => {
    const newQuantity = Math.max(1, formData.quantity + change);
    setFormData({ ...formData, quantity: newQuantity });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Size Selection */}
          <div className="space-y-2">
            <Label htmlFor="size">Size *</Label>
            <Select value={formData.size} onValueChange={(value) => setFormData({ ...formData, size: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <Label>Quantity</Label>
            <div className="flex items-center gap-3">
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => updateQuantity(-1)}
                disabled={formData.quantity <= 1}
              >
                -
              </Button>
              <span className="w-8 text-center font-medium">{formData.quantity}</span>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => updateQuantity(1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Shipping Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes for seller</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special requests or notes..."
                rows={3}
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₪{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>₪15</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total:</span>
              <span>₪{total + 15}</span>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Proceed to Payment
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Estimated delivery: 7-10 business days
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
