import { getProductBySlug as fetchProductBySlug, getProducts } from "@/lib/api";
import { PRODUCT_DETAIL_COPY, PRODUCT_GALLERIES } from "@/lib/catalogData";
import type { Product, ProductImage } from "@/lib/types";

export type ProductDetail = Product & {
  images: ProductImage[];
  description: string;
};

function upscaleImageUrl(url: string): string {
  return url.replace(/w=\d+/, "w=1200").replace(/q=\d+/, "q=85");
}

function buildDefaultGallery(product: Product): ProductImage[] {
  const images: ProductImage[] = [
    {
      src: upscaleImageUrl(product.imageUrl),
      alt: `${product.name} front view`,
    },
  ];
  if (images.length < 3) {
    images.push({
      src: upscaleImageUrl(product.imageUrl),
      alt: `${product.name} detail view`,
    });
  }
  return images;
}

function defaultDescription(product: Product): string {
  return `${product.name}${product.brand ? ` from ${product.brand}` : ""}. Designed for modern everyday wear.`;
}

function defaultDetailsParagraph(product: Product): string {
  return `Crafted with attention to fit and finish, this ${product.category.toLowerCase()} piece reflects our approach to contemporary menswear — understated, versatile, and made to last beyond the season.`;
}

export function enrichProduct(product: Product): ProductDetail {
  const copy = PRODUCT_DETAIL_COPY[product.slug];
  const gallery =
    product.images?.length
      ? product.images
      : PRODUCT_GALLERIES[product.slug] ?? buildDefaultGallery(product);

  return {
    ...product,
    images: gallery,
    description: product.description ?? copy?.description ?? defaultDescription(product),
  };
}

export async function getProductBySlug(slug: string): Promise<ProductDetail | undefined> {
  try {
    return enrichProduct(await fetchProductBySlug(slug));
  } catch {
    return undefined;
  }
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  const sameCategory = (await getProducts({ category: product.categorySlug })).filter(
    (item) => item._id !== product._id,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const allProducts = await getProducts();
  return allProducts.filter((item) => item._id !== product._id).slice(0, limit);
}

export function formatProductPrice(product: Product): string {
  return `₹${product.price.toLocaleString("en-IN")}`;
}
