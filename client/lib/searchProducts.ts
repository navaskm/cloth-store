import type { Product, SortOption } from "@/lib/types";

type SearchField = { value: string; weight: number };

function getSearchFields(product: Product): SearchField[] {
  return [
    { value: product.name, weight: 1 },
    { value: product.category, weight: 0.8 },
    { value: product.brand, weight: 0.7 },
    { value: product.description ?? "", weight: 0.5 },
    { value: product.color ?? "", weight: 0.6 },
    { value: product.material ?? "", weight: 0.6 },
    { value: product.fit ?? "", weight: 0.6 },
    { value: product.pattern ?? "", weight: 0.5 },
    { value: product.colors?.join(" ") ?? "", weight: 0.6 },
  ];
}

function scoreToken(product: Product, token: string): number {
  let score = 0;
  const fields = getSearchFields(product);

  for (const [index, field] of fields.entries()) {
    const value = field.value.toLowerCase();
    if (!value.includes(token)) continue;

    if (index === 0 && value === token) score = Math.max(score, 1000);
    else if (index === 0 && value.startsWith(token)) score = Math.max(score, 800);
    else if (index === 0) score = Math.max(score, 650);
    else score = Math.max(score, Math.round(450 * field.weight));
  }

  return score;
}

export function searchProducts(products: Product[], query: string): Product[] {
  const activeProducts = products.filter((product) => product.isActive !== false);
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return activeProducts;

  return activeProducts
    .map((product) => {
      const scores = tokens.map((token) => scoreToken(product, token));
      return {
        product,
        score: scores.every((score) => score > 0)
          ? scores.reduce((total, score) => total + score, 0)
          : 0,
      };
    })
    .filter((result) => result.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        Number(Boolean(b.product.isFeatured)) - Number(Boolean(a.product.isFeatured)),
    )
    .map((result) => result.product);
}

export function sortSearchProducts(products: Product[], sort: SortOption): Product[] {
  if (sort === "recommended") return products;

  return [...products].sort((a, b) => {
    switch (sort) {
      case "newest":
        return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
}
