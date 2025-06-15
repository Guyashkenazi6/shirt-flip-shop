
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrderForm } from "@/components/OrderForm";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
       <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-muted-foreground mb-8">You have no items in your cart to check out.</p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name} (x{item.quantity})</p>
                    <p className="text-sm text-muted-foreground">{item.color.name}, {item.size}</p>
                  </div>
                  <p>₪{item.price * item.quantity}</p>
                </div>
              ))}
              <div className="border-t border-border my-4"></div>
              <div className="flex justify-between font-bold text-xl">
                <p>Total</p>
                <p>₪{cartTotal}</p>
              </div>
            </div>
          </div>
          <div>
            <OrderForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
