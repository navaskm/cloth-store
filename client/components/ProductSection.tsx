import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { NEW_ARRIVALS } from "@/lib/mockData";

export default function ProductSection() {
  return (
    <section
      className="bg-[#EFECE6] py-20 lg:py-28"
      aria-labelledby="new-arrivals-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div className="max-w-md">
            <p className="text-[10px] tracking-[0.3em] text-[#9A7653] mb-4 font-medium uppercase">
              JUST IN
            </p>
            <h2
              id="new-arrivals-heading"
              className="font-editorial text-3xl md:text-4xl text-[#171717] leading-tight mb-3"
            >
              NEW ARRIVALS
            </h2>
            <p className="text-sm text-[#6B6862] leading-relaxed">
              Fresh pieces selected for the modern wardrobe.
            </p>
          </div>
          <Link
            href="/new-arrivals"
            className="hidden md:inline-block text-xs tracking-[0.15em] text-[#171717] hover:text-[#9A7653] transition-colors duration-200 font-medium border-b border-[#171717] hover:border-[#9A7653] pb-0.5 whitespace-nowrap ml-8"
          >
            VIEW ALL →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-5 lg:gap-x-6">
          {NEW_ARRIVALS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile VIEW ALL link */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/new-arrivals"
            className="inline-block text-xs tracking-[0.15em] text-[#171717] hover:text-[#9A7653] transition-colors duration-200 font-medium border-b border-[#171717] hover:border-[#9A7653] pb-0.5"
          >
            VIEW ALL →
          </Link>
        </div>
      </div>
    </section>
  );
}
