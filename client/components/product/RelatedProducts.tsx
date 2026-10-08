import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section
      className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 lg:py-20 border-t border-[#D9D5CE]"
      aria-labelledby="related-heading"
    >
      <div className="mb-10 md:mb-12">
        <h2
          id="related-heading"
          className="font-editorial text-2xl md:text-3xl text-[#171717] tracking-tight mb-3"
        >
          You May Also Like
        </h2>
        <p className="text-sm text-[#6B6862] tracking-wide">
          Explore more pieces from our collection.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
