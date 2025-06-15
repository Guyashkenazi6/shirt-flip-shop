
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/hooks/useCart";

export const OrderForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    zipCode: "",
    phone: "",
    notes: ""
  });

  const shippingCost = 15;
  const total = cartTotal + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.address || !formData.zipCode || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const orderDetailsForEmail = cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color.name
      }));
      
      const { error } = await supabase.functions.invoke('send-order-email', {
        body: { 
          orderData: formData,
          cartItems: orderDetailsForEmail,
          subtotal: cartTotal,
          shippingCost,
          total
        },
      });

      if (error) {
        throw error;
      }
      
      const orderNumber = `AG${Date.now().toString().slice(-6)}`;

      localStorage.setItem('orderDetails', JSON.stringify({
        orderNumber,
        product: `${cartItems.length} items`,
        total,
        customerName: formData.fullName
      }));

      const payboxUrl = `https://link.payboxapp.com/KWi44KQqaQsA28dc7`;
      
      toast({
        title: "Redirecting to Paybox...",
        description: "Your order details have been submitted."
      });

      clearCart();

      setTimeout(() => {
        window.location.href = payboxUrl;
      }, 1000);

    } catch (error) {
      console.error("Failed to send order email:", error);
      toast({
        title: "Order submission failed",
        description: "There was an error submitting your order. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Shipping Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
              <Input id="fullName" value={formData.fullName} onChange={handleChange} required className="bg-input border-border text-foreground" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="bg-input border-border text-foreground" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required className="bg-input border-border text-foreground" placeholder="+972 XX XXX XXXX" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-foreground">Address *</Label>
              <Input id="address" value={formData.address} onChange={handleChange} required className="bg-input border-border text-foreground" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-foreground">ZIP Code *</Label>
              <Input id="zipCode" value={formData.zipCode} onChange={handleChange} required className="bg-input border-border text-foreground" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-foreground">Notes for seller</Label>
              <Textarea id="notes" value={formData.notes} onChange={handleChange} placeholder="Any special requests or notes..." rows={3} className="bg-input border-border text-foreground" />
            </div>
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-foreground">
              <span>Subtotal:</span>
              <span>₪{cartTotal}</span>
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
            Proceed to Paybox
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Estimated delivery: 7-10 business days
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
