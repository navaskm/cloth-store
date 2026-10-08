import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = `${product.currency}${product.price.toLocaleString("en-IN")}`;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      aria-label={`${product.name} by ${product.brand} — ${formattedPrice}`}
    >
      {/* Product Image — 4:5 ratio */}
      <div
        className="relative w-full overflow-hidden bg-[#EFECE6] mb-4"
        style={{ paddingBottom: "125%" }}
      >
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#171717] text-[#F7F5F1] text-[9px] tracking-[0.2em] px-2.5 py-1 font-semibold">
            NEW
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-[9px] tracking-[0.2em] text-[#9A7653] font-semibold uppercase">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-[#171717] tracking-wide group-hover:text-[#9A7653] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-xs text-[#6B6862] tracking-wide">{product.brand}</p>
        <p className="text-sm font-semibold text-[#171717] pt-1">
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}
