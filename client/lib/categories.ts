import { CATEGORIES } from "@/lib/catalogData";
import { getProducts } from "@/lib/api";
import type { Category, Product } from "@/lib/types";

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return CATEGORIES.map((category) => category.slug);
}

export function getProductsByCategorySlug(slug: string): Promise<Product[]> {
  return getProducts({ category: slug });
}

export function getRelatedCategories(category: Category): Category[] {
  return category.relatedSlugs
    .map((relatedSlug) => getCategoryBySlug(relatedSlug))
    .filter((related): related is Category => related !== undefined)
    .slice(0, 4);
}
