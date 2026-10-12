import { getCategories, getProducts } from "@/lib/api";
import type { Category, Product } from "@/lib/types";

export { getCategories } from "@/lib/api";

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug);
}

export async function getAllCategorySlugs(): Promise<string[]> {
  const categories = await getCategories();
  return categories.map((category) => category.slug);
}

export function getProductsByCategorySlug(slug: string): Promise<Product[]> {
  return getProducts({ category: slug });
}
