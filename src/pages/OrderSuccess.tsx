
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const details = localStorage.getItem('orderDetails');
    if (details) {
      setOrderDetails(JSON.parse(details));
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Order Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-green-400">Order Confirmed!</h1>
            <p className="text-xl text-gray-300">Thank you for your purchase</p>
          </div>

          {/* Order Details */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Order Details</h2>
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-gray-300">Order Number:</span>
                <span className="font-mono text-green-400">#{orderDetails.orderNumber}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-gray-300">Product:</span>
                <span className="font-semibold">{orderDetails.product}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-gray-300">Customer:</span>
                <span className="font-semibold">{orderDetails.customerName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total:</span>
                <span className="font-bold text-xl">₪{orderDetails.total}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">What's Next?</h3>
            <div className="space-y-3 text-left text-gray-300">
              <p>✓ Order confirmation sent to your email</p>
              <p>✓ We'll process your order within 24 hours</p>
              <p>✓ Shipping takes 7-10 business days</p>
              <p>✓ You'll receive tracking information once shipped</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full mb-4 bg-primary text-primary-foreground hover:bg-primary/90">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/connect">
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions about your order?</p>
            <p>Contact us at <a href="mailto:guy0204@gmail.com" className="text-blue-400 hover:underline">guy0204@gmail.com</a></p>
            <p>or via <a href="https://wa.me/972546742982" className="text-green-400 hover:underline">WhatsApp</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
