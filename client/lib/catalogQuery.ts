import type { FilterState, Product, SortOption } from "@/lib/types";

export const DEFAULT_FILTERS: FilterState = {
  category: "",
  brand: "",
  size: "",
  color: "",
  material: "",
  priceMin: null,
  priceMax: null,
  fit: "",
};

export function countActiveFilters(filters: FilterState): number {
  let count = 0;
  if (filters.brand) count++;
  if (filters.size) count++;
  if (filters.color) count++;
  if (filters.material) count++;
  if (filters.fit) count++;
  if (filters.priceMin !== null || filters.priceMax !== null) count++;
  return count;
}

export function applyCatalogQuery(
  products: Product[],
  options: {
    searchQuery: string;
    filters: FilterState;
    sort: SortOption;
  },
): Product[] {
  let result = products.filter((p) => p.isActive !== false);

  if (options.searchQuery.trim()) {
    const q = options.searchQuery.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.color?.toLowerCase().includes(q) ?? false) ||
        (p.material?.toLowerCase().includes(q) ?? false) ||
        (p.colors?.some((c) => c.toLowerCase().includes(q)) ?? false),
    );
  }

  const { filters } = options;

  if (filters.brand) {
    result = result.filter((p) => p.brand === filters.brand);
  }
  if (filters.size) {
    result = result.filter((p) => p.sizes?.includes(filters.size));
  }
  if (filters.color) {
    result = result.filter(
      (p) => p.color === filters.color || p.colors?.includes(filters.color),
    );
  }
  if (filters.material) {
    result = result.filter((p) => p.material === filters.material);
  }
  if (filters.fit) {
    result = result.filter((p) => p.fit === filters.fit);
  }
  if (filters.priceMin !== null) {
    result = result.filter((p) => p.price >= (filters.priceMin as number));
  }
  if (filters.priceMax !== null) {
    result = result.filter((p) => p.price <= (filters.priceMax as number));
  }

  switch (options.sort) {
    case "newest":
      result = [...result].sort((a, b) =>
        a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1,
      );
      break;
    case "price-asc":
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      result = [...result].sort((a, b) =>
        a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1,
      );
  }

  return result;
}

/** Client-side page slice — replace with API pagination later */
export const CATALOG_PAGE_SIZE = 12;

export function paginateProducts<T>(
  items: T[],
  page: number,
  pageSize = CATALOG_PAGE_SIZE,
): { pageItems: T[]; totalPages: number; currentPage: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    pageItems: items.slice(start, start + pageSize),
    totalPages,
    currentPage,
  };
}
