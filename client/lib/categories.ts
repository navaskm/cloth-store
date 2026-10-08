import { ALL_PRODUCTS, CATEGORIES } from "@/lib/mockData";
import type { Category, Product } from "@/lib/types";

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return CATEGORIES.map((category) => category.slug);
}

export function getProductsByCategorySlug(slug: string): Product[] {
  return ALL_PRODUCTS.filter(
    (product) => product.categorySlug === slug && product.isActive !== false,
  );
}

export function getRelatedCategories(category: Category): Category[] {
  return category.relatedSlugs
    .map((relatedSlug) => getCategoryBySlug(relatedSlug))
    .filter((related): related is Category => related !== undefined)
    .slice(0, 4);
}
