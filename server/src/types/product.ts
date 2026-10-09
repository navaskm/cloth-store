export interface ProductDocument {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  imageUrl: string;
  imageAlt: string;
  hoverImageUrl?: string;
  images?: { src: string; alt: string }[];
  sizes?: string[];
  colors?: string[];
  color?: string;
  material?: string;
  fit?: string;
  pattern?: string;
  collection?: string;
  description?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isActive?: boolean;
}
