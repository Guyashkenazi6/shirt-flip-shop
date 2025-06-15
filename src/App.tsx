
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { FloatingCart } from "@/components/FloatingCart";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import ConnectPage from "./pages/ConnectPage";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import ShippingAndReturnsPage from "./pages/ShippingAndReturnsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/track-order" element={<TrackOrderPage />} />
            <Route path="/shipping-and-returns" element={<ShippingAndReturnsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingCart />
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
