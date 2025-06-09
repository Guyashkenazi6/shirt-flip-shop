
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
  const shippingCost = 15;
  const subtotal = product.price * formData.quantity;
  const total = subtotal + shippingCost;

  const sendOrderEmail = async (orderData: any) => {
    const emailBody = `
New Order from Guy Ashkenazi T-Shirts:

Product: ${product.name}
Size: ${formData.size}
Quantity: ${formData.quantity}
Subtotal: ₪${subtotal}
Shipping: ₪${shippingCost}
Total: ₪${total}

Customer Details:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Address: ${formData.address}
ZIP Code: ${formData.zipCode}

Notes: ${formData.notes || 'None'}
    `;

    // Create mailto link
    const mailtoLink = `mailto:guy0204@gmail.com?subject=New T-Shirt Order - ${product.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.size || !formData.fullName || !formData.email || !formData.address || !formData.zipCode) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Send order email
    await sendOrderEmail(formData);

    // Redirect to PayPal with the total amount
    const paypalUrl = `https://www.paypal.com/paypalme/Guy0204/${total}`;
    
    toast({
      title: "Redirecting to PayPal...",
      description: "Your order details have been sent via email."
    });

    // Open PayPal in new tab
    setTimeout(() => {
      window.open(paypalUrl, '_blank');
    }, 1000);
  };

  const updateQuantity = (change: number) => {
    const newQuantity = Math.max(1, formData.quantity + change);
    setFormData({ ...formData, quantity: newQuantity });
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Size Selection */}
          <div className="space-y-2">
            <Label htmlFor="size" className="text-foreground">Size *</Label>
            <Select value={formData.size} onValueChange={(value) => setFormData({ ...formData, size: value })}>
              <SelectTrigger className="bg-input border-border text-foreground">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {sizes.map((size) => (
                  <SelectItem key={size} value={size} className="text-popover-foreground">
                    {size}
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
                size="sm"
                onClick={() => updateQuantity(-1)}
                disabled={formData.quantity <= 1}
                className="border-border text-foreground hover:bg-accent"
              >
                -
              </Button>
              <span className="w-8 text-center font-medium text-foreground">{formData.quantity}</span>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => updateQuantity(1)}
                className="border-border text-foreground hover:bg-accent"
              >
                +
              </Button>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Shipping Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-foreground">Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-foreground">ZIP Code *</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                required
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-foreground">Notes for seller</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special requests or notes..."
                rows={3}
                className="bg-input border-border text-foreground"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-foreground">
              <span>Subtotal ({formData.quantity}x ₪{product.price}):</span>
              <span>₪{subtotal}</span>
            </div>
            <div className="flex justify-between text-foreground">
              <span>Shipping:</span>
              <span>₪{shippingCost}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-border pt-2 text-foreground">
              <span>Total:</span>
              <span>₪{total}</span>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Proceed to PayPal Payment
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Estimated delivery: 7-10 business days
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
