
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
            <h1 className="text-5xl font-bold mb-4 text-green-400">Order Received!</h1>
            <p className="text-xl text-gray-300">Please complete your payment below</p>
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

          {/* Payment Instructions */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">✅ Thank you for your order!</h3>
            <div className="space-y-4 text-gray-300">
              <p>To complete your payment, please send the total amount of <strong className="text-white">₪{orderDetails.total}</strong> via PayBox to the following link:</p>
              <div className="bg-white/10 p-4 rounded border border-white/20">
                <p className="text-sm text-gray-400 mb-2">Payment Link:</p>
                <p className="font-mono text-blue-400 break-all">https://link.payboxapp.com/KWi44KQqaQsA28dc7</p>
              </div>
              <p className="text-sm">If PayBox doesn't load right away, you can return to this page and try again.</p>
              <p className="text-sm">Once payment is confirmed, your order will be processed and shipped to your nearest post office.</p>
            </div>
          </div>

          {/* PayBox Button */}
          <div className="mb-8">
            <Button 
              onClick={() => window.open('https://link.payboxapp.com/KWi44KQqaQsA28dc7', '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
            >
              🔗 Open PayBox Link
            </Button>
            <p className="text-xs text-gray-400 mt-2">Opens in a new window/tab</p>
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

          {/* Order Status */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Order Status</h4>
            <div className="space-y-2 text-left text-gray-300 text-sm">
              <p>✓ Order confirmation sent to your email</p>
              <p>⏳ Waiting for payment confirmation</p>
              <p>📦 Will be processed within 24 hours after payment</p>
              <p>🚚 Shipping takes 7 to 12 business days</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-400">
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
