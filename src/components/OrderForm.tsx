
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const OrderForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart, cartCount } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    zipCode: "",
    phone: "",
    notes: ""
  });

  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedDiscountCode, setAppliedDiscountCode] = useState<string | null>(null);

  const summerSaleDiscount = cartCount * 20;
  const baseShippingCost = 15;
  const shippingCost = cartCount >= 2 ? 0 : baseShippingCost;
  const bundleDiscount = cartCount >= 3 ? 20 : 0;
  const total = cartTotal + shippingCost - discountAmount - bundleDiscount;

  const handleApplyDiscount = () => {
    if (appliedDiscountCode) {
      setDiscountCode('');
      setDiscountAmount(0);
      setAppliedDiscountCode(null);
      toast({
        title: "Discount removed",
      });
      return;
    }

    if (discountCode.toUpperCase() === 'GUY15') {
      const discountValue = 15;
      setDiscountAmount(discountValue);
      setAppliedDiscountCode(discountCode.toUpperCase());
      toast({
        title: "Discount Applied",
        description: `You saved ₪${discountValue}!`,
      });
    } else {
      toast({
        title: "Invalid Discount Code",
        description: "The code you entered is not valid.",
        variant: "destructive",
      });
    }
  };

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
          total,
          discounts: {
            summerSale: summerSaleDiscount,
            bundleOffer: bundleDiscount,
            coupon: appliedDiscountCode ? {
              code: appliedDiscountCode,
              amount: discountAmount,
            } : null,
          }
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
          
          <div className="space-y-2">
            <Label htmlFor="discountCode" className="text-foreground">Discount Code</Label>
            <div className="flex space-x-2">
              <Input
                id="discountCode"
                placeholder="Enter discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                disabled={!!appliedDiscountCode}
                className="bg-input border-border text-foreground"
              />
              <Button type="button" onClick={handleApplyDiscount} variant="outline" className="shrink-0">
                {appliedDiscountCode ? 'Remove' : 'Apply'}
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-foreground">
              <span>Subtotal:</span>
              <span>₪{cartTotal}</span>
            </div>
            <div className="flex justify-between text-foreground">
              <span>Shipping:</span>
              {cartCount >= 2 ? (
                 <span className="text-green-400 font-semibold">FREE</span>
              ) : (
                <span>₪{shippingCost}</span>
              )}
            </div>
            {cartCount >= 2 && (
               <p className="text-xs text-green-500 text-right -mt-1">Free shipping on 2+ items</p>
            )}
            {discountAmount > 0 && (
              <div className="flex justify-between text-green-500">
                <span>Discount ({appliedDiscountCode}):</span>
                <span>-₪{discountAmount}</span>
              </div>
            )}
            {bundleDiscount > 0 && (
              <div className="flex justify-between text-green-500">
                <span>Bundle Offer (3+ items):</span>
                <span>-₪{bundleDiscount}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-lg border-t border-border pt-2 text-foreground">
              <span>Total:</span>
              <span>₪{total}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                How to pay
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border text-foreground">
              <DialogHeader>
                <DialogTitle>Payment Instructions</DialogTitle>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <p className="text-muted-foreground">
                  After you proceed to PayBox, please transfer the exact payment amount shown at checkout to my PayBox account.
                </p>
                <p className="text-muted-foreground">
                  Once I receive your payment, I will send you a confirmation message that your order has been successfully placed and is on its way.
                </p>
              </div>
            </DialogContent>
          </Dialog>

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
