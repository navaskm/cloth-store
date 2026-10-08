import Link from "next/link";
import type { ProductDetail } from "@/lib/products";
import { formatProductPrice } from "@/lib/products";
import ProductAttributes from "@/components/product/ProductAttributes";
import SizeSelector from "@/components/product/SizeSelector";

interface ProductInfoProps {
  product: ProductDetail;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const formattedPrice = formatProductPrice(product);
  const compareAt =
    product.compareAtPrice != null
      ? `${product.currency}${product.compareAtPrice.toLocaleString("en-IN")}`
      : null;

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="space-y-6">
        <div>
          {product.isNew && (
            <p className="text-[10px] tracking-[0.25em] text-[#9A7653] font-medium uppercase mb-3">
              New Arrival
            </p>
          )}
          <p className="text-[10px] tracking-[0.2em] text-[#9A7653] font-semibold uppercase mb-2">
            {product.category}
          </p>
          <h1 className="font-editorial text-3xl md:text-4xl lg:text-[2.75rem] text-[#171717] leading-tight tracking-tight mb-3">
            {product.name}
          </h1>
          <p className="text-sm text-[#6B6862] tracking-wide">{product.brand}</p>
        </div>

        <div className="flex items-baseline gap-3 flex-wrap">
          <p className="text-xl font-semibold text-[#171717] tracking-wide">
            {formattedPrice}
          </p>
          {compareAt && (
            <p className="text-sm text-[#6B6862] line-through tracking-wide">
              {compareAt}
            </p>
          )}
        </div>

        <p className="text-sm text-[#6B6862] leading-relaxed max-w-md">
          {product.description}
        </p>

        <ProductAttributes
          attributes={[
            { label: "Brand", value: product.brand },
            { label: "Material", value: product.material ?? "—" },
            { label: "Fit", value: product.fit ?? "—" },
            { label: "Color", value: product.color },
            { label: "Pattern", value: product.pattern },
          ]}
        />

        {product.sizes && product.sizes.length > 0 && (
          <SizeSelector
            sizes={product.sizes}
            productName={product.name}
            productSlug={product.slug}
          />
        )}

        <div className="pt-2 space-y-4">
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto text-center bg-[#171717] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-10 py-4 hover:bg-[#9A7653] transition-all duration-300"
          >
            Contact Store
          </Link>
          <p className="text-xs text-[#6B6862] leading-relaxed max-w-sm">
            Interested in this product? Contact us for availability and more
            information.
          </p>
        </div>
      </div>
    </div>
  );
}
