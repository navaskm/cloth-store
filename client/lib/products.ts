import { getProductBySlug as fetchProductBySlug, getProducts } from "@/lib/api";
import { PRODUCT_DETAIL_COPY, PRODUCT_GALLERIES, SIZE_GUIDES } from "@/lib/catalogData";
import type { Product, ProductImage, SizeGuide } from "@/lib/types";

export type ProductDetail = Product & {
  images: ProductImage[];
  description: string;
  detailsParagraph: string;
  pattern: string;
  color: string;
  collection: string;
  sizeGuideType: SizeGuide["type"];
};

function upscaleImageUrl(url: string): string {
  return url.replace(/w=\d+/, "w=1200").replace(/q=\d+/, "q=85");
}

function inferSizeGuideType(product: Product): SizeGuide["type"] {
  if (product.sizeGuideType) {
    return product.sizeGuideType;
  }
  if (product.categorySlug === "jeans" || product.categorySlug === "trousers") {
    return "trouser";
  }
  if (product.categorySlug === "jackets") {
    return "jacket";
  }
  if (product.categorySlug === "t-shirts") {
    return "tshirt";
  }
  if (
    product.categorySlug === "formal-wear" &&
    product.name.toLowerCase().includes("blazer")
  ) {
    return "jacket";
  }
  const firstSize = product.sizes?.[0];
  if (firstSize && /^\d+$/.test(firstSize) && Number(firstSize) >= 28) {
    return Number(firstSize) >= 36 ? "jacket" : "trouser";
  }
  return "shirt";
}

function buildDefaultGallery(product: Product): ProductImage[] {
  const images: ProductImage[] = [
    {
      src: upscaleImageUrl(product.imageUrl),
      alt: `${product.name} front view`,
    },
  ];
  if (product.hoverImageUrl) {
    images.push({
      src: upscaleImageUrl(product.hoverImageUrl),
      alt: `${product.name} alternate view`,
    });
  }
  if (images.length < 3) {
    images.push({
      src: upscaleImageUrl(product.imageUrl),
      alt: `${product.name} detail view`,
    });
  }
  return images;
}

function defaultDescription(product: Product): string {
  return `${product.name} from ${product.brand}. ${product.material ?? "Premium fabric"} with a ${product.fit?.toLowerCase() ?? "refined fit"} — designed for modern everyday wear.`;
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
    detailsParagraph:
      copy?.detailsParagraph ?? defaultDetailsParagraph(product),
    pattern: product.pattern ?? copy?.pattern ?? "Solid",
    color:
      product.color ??
      copy?.color ??
      product.colors?.[0] ??
      "—",
    collection: product.collection ?? copy?.collection ?? "Essentials",
    sizeGuideType: inferSizeGuideType(product),
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
    (item) => item.id !== product.id,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const allProducts = await getProducts();
  return allProducts.filter((item) => item.id !== product.id).slice(0, limit);
}

export function getSizeGuideForProduct(
  product: Pick<ProductDetail, "sizeGuideType">,
): SizeGuide {
  return SIZE_GUIDES[product.sizeGuideType];
}

export function formatProductPrice(product: Product): string {
  return `${product.currency}${product.price.toLocaleString("en-IN")}`;
}
