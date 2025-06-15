
import { ProductCard } from "./ProductCard";
import { Product } from "@/data/products";

interface ProductGridProps {
  title?: string;
  products: Product[];
  id?: string;
  className?: string;
}

export const ProductGrid = ({ title, products, id, className = "" }: ProductGridProps) => {
  return (
    <section id={id} className={`py-12 animate-fade-in-up ${className}`} style={{ animationDelay: '0.2s', opacity: 0 }}>
      {title && <h2 className="text-4xl font-bold text-center mb-12 text-white text-shadow">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
