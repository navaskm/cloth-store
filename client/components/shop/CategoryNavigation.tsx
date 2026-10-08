"use client";

interface CategoryNavigationProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const SHOP_CATEGORIES = [
  "All",
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Trousers",
  "Casual Wear",
  "Formal Wear",
  "Jackets",
];

export default function CategoryNavigation({
  activeCategory,
  onCategoryChange,
}: CategoryNavigationProps) {
  return (
    <div className="border-y border-[#D9D5CE] bg-[#F7F5F1]">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10">
        {/* Horizontal scroll on mobile, centered on desktop */}
        <nav
          className="flex items-center gap-0 overflow-x-auto scrollbar-hide"
          aria-label="Shop by category"
        >
          {SHOP_CATEGORIES.map((cat) => {
            const isActive =
              activeCategory === cat ||
              (activeCategory === "" && cat === "All");
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat === "All" ? "" : cat)}
                className={`
                  relative shrink-0 px-4 py-4 text-[10px] tracking-[0.2em] font-medium
                  transition-colors duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "text-[#171717] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-[#171717]"
                      : "text-[#6B6862] hover:text-[#171717]"
                  }
                `}
                aria-current={isActive ? "true" : undefined}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
