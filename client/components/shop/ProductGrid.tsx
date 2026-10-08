import ProductCard from "@/components/ProductCard";
import EmptyProducts from "@/components/shop/EmptyProducts";
import { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
  totalCount: number;
  onClearFilters: () => void;
}

export default function ProductGrid({
  products,
  totalCount,
  onClearFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyProducts onClearFilters={onClearFilters} />;
  }

  return (
    <div>
      {/* Product count */}
      <p className="text-[10px] tracking-[0.2em] text-[#6B6862] font-medium mb-8">
        SHOWING {products.length} OF {totalCount} PRODUCTS
      </p>

      {/* Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-5 lg:gap-x-6"
        role="list"
        aria-label="Products"
      >
        {products.map((product) => (
          <div key={product.id} role="listitem">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
