import type { ProductDetail } from "@/lib/products";

interface ProductDetailsProps {
  product: ProductDetail;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const specs = [
    { label: "Material", value: product.material },
    { label: "Fit", value: product.fit },
    { label: "Pattern", value: product.pattern },
    { label: "Color", value: product.color },
    { label: "Collection", value: product.collection },
  ].filter((s) => s.value);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <p className="text-sm md:text-base text-[#6B6862] leading-relaxed max-w-lg">
          {product.detailsParagraph}
        </p>
        <dl className="space-y-5">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="grid grid-cols-[8rem_1fr] gap-4 border-b border-[#D9D5CE] pb-5 last:border-0"
            >
              <dt className="text-[10px] tracking-[0.2em] text-[#6B6862] font-semibold uppercase">
                {spec.label}
              </dt>
              <dd className="text-sm text-[#171717] tracking-wide">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
