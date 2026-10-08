import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative block overflow-hidden bg-[#EFECE6]"
      aria-label={`Browse ${category.name}`}
    >
      {/* Image container — 4:5 ratio */}
      <div className="relative w-full" style={{ paddingBottom: "125%" }}>
        <Image
          src={category.imageUrl}
          alt={category.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle bottom gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#171717]/50 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Category Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-sm tracking-[0.15em] font-semibold text-[#F7F5F1] mb-1">
          {category.name.toUpperCase()}
        </p>
        <p className="text-xs tracking-[0.1em] text-[#D9D5CE] group-hover:text-[#9A7653] transition-colors duration-200 font-medium">
          Explore →
        </p>
      </div>
    </Link>
  );
}
