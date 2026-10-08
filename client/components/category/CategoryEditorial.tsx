import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types";

interface CategoryEditorialProps {
  category: Category;
}

export default function CategoryEditorial({ category }: CategoryEditorialProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(380px, 45vh, 560px)" }}
      aria-labelledby="category-editorial-heading"
    >
      <Image
        src={category.editorialImageUrl}
        alt={category.editorialImageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#171717]/60" aria-hidden="true" />
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="px-5 max-w-xl">
          <h2
            id="category-editorial-heading"
            className="font-editorial text-3xl md:text-4xl lg:text-5xl text-[#F7F5F1] leading-tight mb-5 tracking-tight"
          >
            {category.editorialHeading}
          </h2>
          <p className="text-sm text-[#D9D5CE] mb-10 tracking-wide font-light leading-relaxed">
            {category.editorialText}
          </p>
          <Link
            href={`/category/${category.slug}`}
            className="inline-block border border-[#F7F5F1] text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold px-8 py-4 hover:bg-[#F7F5F1] hover:text-[#171717] transition-all duration-300"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
