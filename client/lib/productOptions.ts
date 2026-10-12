import type { Product } from "@/lib/types";

export function getUniqueBrands(products: Product[]): string[] {
  return [...new Set(products.map((product) => product.brand).filter((brand): brand is string => Boolean(brand)))].sort();
}

export function getUniqueSizes(products: Product[]): string[] {
  return [...new Set(products.flatMap((product) => product.sizes ?? []))];
}

export function getUniqueColors(products: Product[]): string[] {
  return [];
}

export function getUniqueFits(products: Product[]): string[] {
  return [];
}

export function getUniqueMaterials(products: Product[]): string[] {
  return [];
}
