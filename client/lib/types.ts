// Shared types used across the clothing store UI

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  productCount?: number;
  description: string;
  heroImageUrl: string;
  heroImageAlt: string;
  editorialHeading: string;
  editorialText: string;
  editorialImageUrl: string;
  editorialImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  relatedSlugs: string[];
}

export interface PriceRange {
  label: string;
  min: number | null;
  max: number | null;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  slug: string;
  price: number;
  /** Original price when on sale; display price uses `price` */
  compareAtPrice?: number;
  currency: string;
  imageUrl: string;
  imageAlt: string;
  hoverImageUrl?: string;
  /** Full set of gallery images used on the product detail page */
  images?: ProductImage[];
  sizes?: string[];
  colors?: string[];
  color?: string;           // primary / default display color
  material?: string;
  fit?: string;
  pattern?: string;
  collection?: string;
  description?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isActive?: boolean;
  /** Controls which size guide table to show on the detail page */
  sizeGuideType?: "shirt" | "trouser" | "jacket" | "tshirt";
}

export type SortOption =
  | "recommended"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "name-asc";

export interface FilterState {
  category: string;
  brand: string;
  size: string;
  color: string;
  material: string;
  priceMin: number | null;
  priceMax: number | null;
  fit: string;
}

// ── Size guide ───────────────────────────────────────────────────────────────

export interface SizeGuideRow {
  size: string;
  measurement: string;
  /** Optional second measurement column label */
  label2?: string;
  measurement2?: string;
}

export interface SizeGuide {
  type: "shirt" | "trouser" | "jacket" | "tshirt";
  heading: string;
  col1: string;
  col2: string;
  rows: SizeGuideRow[];
}
