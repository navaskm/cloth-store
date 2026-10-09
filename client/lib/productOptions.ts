import type { Product } from "@/lib/types";

export function getUniqueBrands(products: Product[]): string[] {
  return [...new Set(products.map((product) => product.brand))].sort();
}

export function getUniqueSizes(products: Product[]): string[] {
  return [...new Set(products.flatMap((product) => product.sizes ?? []))];
}

export function getUniqueColors(products: Product[]): string[] {
  return [...new Set(products.flatMap((product) => product.colors ?? []))].sort();
}

export function getUniqueFits(products: Product[]): string[] {
  return [
    ...new Set(
      products
        .map((product) => product.fit)
        .filter((fit): fit is string => Boolean(fit)),
    ),
  ].sort();
}

export function getUniqueMaterials(products: Product[]): string[] {
  return [
    ...new Set(
      products
        .map((product) => product.material)
        .filter((material): material is string => Boolean(material)),
    ),
  ].sort();
}
