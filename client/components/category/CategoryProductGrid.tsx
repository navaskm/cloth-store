import ProductGrid from "@/components/shop/ProductGrid";
import type { Product } from "@/lib/types";

interface CategoryProductGridProps {
  products: Product[];
  totalCount: number;
  onClearFilters: () => void;
}

export default function CategoryProductGrid(props: CategoryProductGridProps) {
  return <ProductGrid {...props} />;
}
