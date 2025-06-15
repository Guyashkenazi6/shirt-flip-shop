
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { products } from "@/data/products";

const Index = () => {
  const newArrivals = products.filter(p => p.isNewArrival);
  const otherProducts = products.filter(p => !p.isNewArrival);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center min-h-[80vh] flex flex-col justify-center items-center animate-fade-in-up">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/f621a571-f1d0-485b-a45c-1f762898efee.png" 
              alt="AG Logo" 
              className="h-32 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight tracking-tighter text-shadow">
            Find your style and that’s it.
          </h1>
          <div className="mt-10">
            <a 
              href="#new-arrivals" 
              className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 rounded-sm"
            >
              Shop Collection
            </a>
          </div>
        </div>
        
        <ProductGrid title="New Arrivals" products={newArrivals} id="new-arrivals" />
        <ProductGrid title="Our Collection" products={otherProducts} id="products" />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
