import Link from "next/link";
import { CATEGORIES } from "@/lib/catalogData";

interface CategoryNavigationProps {
  activeSlug: string;
}

export default function CategoryNavigation({
  activeSlug,
}: CategoryNavigationProps) {
  const items = [
    { label: "All", href: "/shop", slug: "all" },
    ...CATEGORIES.map((category) => ({
      label: category.name,
      href: `/category/${category.slug}`,
      slug: category.slug,
    })),
  ];

  return (
    <div className="border-y border-[#D9D5CE] bg-[#F7F5F1]">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10">
        <nav
          className="flex items-center gap-0 overflow-x-auto scrollbar-hide"
          aria-label="Browse by category"
        >
          {items.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative shrink-0 px-4 py-4 text-[10px] tracking-[0.2em] font-medium
                  transition-colors duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "text-[#171717] font-semibold after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-[#171717]"
                      : "text-[#6B6862] hover:text-[#171717]"
                  }
                `}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
