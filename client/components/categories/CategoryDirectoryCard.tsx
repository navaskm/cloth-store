import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types";

interface CategoryDirectoryCardProps {
  category: Category;
  productCount?: number;
  featured?: boolean;
}

export default function CategoryDirectoryCard({
  category,
  productCount,
  featured = false,
}: CategoryDirectoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={`group block ${featured ? "md:col-span-2" : ""}`}
      aria-label={`Explore ${category.name}`}
    >
      <article className="border border-[#D9D5CE] bg-[#F3EFEA] transition-colors duration-300 hover:border-[#9A7653]">
        <div className="grid md:grid-cols-[1fr_0.9fr]">
          <div
            className={`relative overflow-hidden bg-[#EFECE6] ${
              featured ? "aspect-[4/3] md:aspect-auto md:min-h-[390px]" : "aspect-[4/5]"
            }`}
          >
            <Image
              src={category.imageUrl}
              alt={category.imageAlt}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>

          <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9A7653]">
                  {category.name}
                </p>
                {productCount !== undefined && (
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#6B6862]">
                    {productCount} {productCount === 1 ? "piece" : "pieces"}
                  </p>
                )}
              </div>
              <h3 className="max-w-sm font-editorial text-3xl leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-4xl">
                {category.name.toUpperCase()}.
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#6B6862] md:text-base">
                {category.description}
              </p>
            </div>

            <span className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] transition-colors duration-300 group-hover:text-[#9A7653]">
              Explore category
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
