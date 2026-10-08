import CategoryCard from "@/components/CategoryCard";
import type { Category } from "@/lib/types";

interface RelatedCategoriesProps {
  categories: Category[];
}

export default function RelatedCategories({
  categories,
}: RelatedCategoriesProps) {
  if (!categories.length) {
    return null;
  }

  return (
    <section
      className="max-w-screen-xl mx-auto px-5 lg:px-10 py-16 lg:py-24"
      aria-labelledby="related-categories-heading"
    >
      <div className="mb-10 md:mb-12">
        <h2
          id="related-categories-heading"
          className="font-editorial text-2xl md:text-3xl text-[#171717] tracking-tight mb-3"
        >
          Explore More
        </h2>
        <p className="text-sm text-[#6B6862] tracking-wide">
          Continue through the wardrobe.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
