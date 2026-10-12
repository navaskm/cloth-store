import type { ProductDetail } from "@/lib/products";

interface ProductDetailsProps {
  product: ProductDetail;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section
      className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 lg:py-24"
      aria-labelledby="product-details-heading"
    >
      <h2
        id="product-details-heading"
        className="text-[10px] tracking-[0.25em] text-[#6B6862] font-semibold uppercase mb-8"
      >
        Product Details
      </h2>
      <p className="text-sm md:text-base text-[#6B6862] leading-relaxed max-w-lg">
        {product.detailsParagraph}
      </p>
    </section>
  );
}
