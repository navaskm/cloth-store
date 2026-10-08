import ShopControls from "@/components/shop/ShopControls";
import type { FilterState, SortOption } from "@/lib/types";

interface CategoryControlsProps {
  categoryName: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortValue: SortOption;
  onSortChange: (value: SortOption) => void;
  onOpenFilter: () => void;
  activeFilterCount: number;
  filters: FilterState;
}

export default function CategoryControls({
  categoryName,
  ...controls
}: CategoryControlsProps) {
  return (
    <ShopControls
      {...controls}
      searchPlaceholder={`Search in ${categoryName}...`}
      searchInputId="category-search"
    />
  );
}
