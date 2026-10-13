// Shared types used across the clothing store UI

export interface Category {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  productCount?: number;
  heroImageUrl: string;
  editorialHeading: string;
  metaTitle: string;
  metaDescription: string;
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
  _id: string;
  name: string;
  brand?: string;
  category: string;
  categorySlug: string;
  slug: string;
  price: number;
  imageUrl: string;
  /** Full set of gallery images used on the product detail page */
  images?: ProductImage[];
  sizes?: string[];
  description?: string;
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
