import Image from "next/image";
import type { Category } from "@/lib/types";

interface CategoryHeroProps {
  category: Category;
  productCount: number;
}

export default function CategoryHero({
  category,
  productCount,
}: CategoryHeroProps) {
  return (
    <header className="max-w-screen-xl mx-auto px-5 lg:px-10 pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-16 items-center">
        <div>
          <p className="text-[10px] tracking-[0.3em] text-[#9A7653] mb-5 font-medium uppercase">
            Men&apos;s Collection
          </p>
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#171717] leading-tight tracking-tight mb-5">
            {category.name.toUpperCase()}
          </h1>
          <p className="text-sm text-[#6B6862] leading-relaxed max-w-md mb-8">
            {category.description}
          </p>
          <p className="text-xs tracking-[0.2em] text-[#6B6862] font-medium">
            {productCount} PRODUCTS
          </p>
        </div>

        <div className="relative w-full overflow-hidden bg-[#EFECE6] max-h-[420px] lg:max-h-none">
          <div className="relative w-full" style={{ paddingBottom: "125%" }}>
            <Image
              src={category.heroImageUrl}
              alt={category.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
