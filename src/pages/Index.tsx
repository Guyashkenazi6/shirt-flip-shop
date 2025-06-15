import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { products } from "@/data/products";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Hero } from "@/components/Hero";
import { FeaturedDesigns } from "@/components/FeaturedDesigns";
import { QualityPromise } from "@/components/QualityPromise";
import { SaleBanner } from "@/components/SaleBanner";

const Index = () => {
  const newArrivals = products.filter(p => p.isNewArrival);
  const otherProducts = products.filter(p => !p.isNewArrival);

  return (
    <div className="min-h-screen bg-black text-white">
      <SaleBanner />
      <MarqueeBanner />
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-16 space-y-24">
        <ProductGrid title="New Arrivals" products={newArrivals} id="new-arrivals" />
        <FeaturedDesigns />
        <QualityPromise />
        <ProductGrid title="Our Collection" products={otherProducts} id="products" />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
