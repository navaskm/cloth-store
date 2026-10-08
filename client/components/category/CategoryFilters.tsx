import FilterPanel from "@/components/shop/FilterPanel";
import type { FilterState, PriceRange } from "@/lib/types";

export const CATEGORY_PRICE_RANGES: PriceRange[] = [
  { label: "Under ₹1,000", min: null, max: 999 },
  { label: "₹1,000 – ₹1,500", min: 1000, max: 1500 },
  { label: "₹1,500 – ₹2,000", min: 1501, max: 2000 },
  { label: "Above ₹2,000", min: 2001, max: null },
];

interface CategoryFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  brands: string[];
  sizes: string[];
  colors: string[];
  fits: string[];
  materials: string[];
  onClearFilters: () => void;
}

export default function CategoryFilters(props: CategoryFiltersProps) {
  return <FilterPanel {...props} priceRanges={CATEGORY_PRICE_RANGES} />;
}
