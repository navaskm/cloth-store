import CategoryCard from "@/components/CategoryCard";
import { CATEGORIES } from "@/lib/catalogData";

export default function CategorySection() {
  return (
    <section
      className="bg-[#F7F5F1] py-20 lg:py-28"
      aria-labelledby="category-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-lg">
          <p className="text-[10px] tracking-[0.3em] text-[#9A7653] mb-4 font-medium uppercase">
            THE WARDROBE
          </p>
          <h2
            id="category-heading"
            className="font-editorial text-3xl md:text-4xl text-[#171717] leading-tight mb-4"
          >
            SHOP BY CATEGORY
          </h2>
          <p className="text-sm text-[#6B6862] leading-relaxed">
            Explore carefully selected pieces for every part of your wardrobe.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
