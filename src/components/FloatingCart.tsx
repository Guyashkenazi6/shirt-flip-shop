
import { ShoppingCart, X, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";

export function FloatingCart() {
  const { 
    cartItems, 
    cartCount, 
    cartTotal, 
    removeFromCart, 
    updateItemQuantity, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="relative h-16 w-16 rounded-full shadow-2xl" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart className="h-8 w-8" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white animate-pulse">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
      <DrawerContent className="bg-background border-border text-foreground">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader className="flex justify-between items-center">
            <DrawerTitle className="text-2xl">Your Cart</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4 overflow-y-auto max-h-[60vh]">
            {cartItems.length === 0 ? (
              <p className="text-center text-muted-foreground py-10">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                    <div className="flex-grow">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.color.name}, Size: {item.size}</p>
                      <p className="text-lg font-bold">₪{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                       <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                       <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <DrawerFooter className="border-t border-border mt-4">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total:</span>
                <span>₪{cartTotal}</span>
              </div>
              <Button onClick={handleCheckout} size="lg" className="w-full">Proceed to Checkout</Button>
            </DrawerFooter>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
