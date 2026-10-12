export interface ProductDocument {
  _id?: string;
  name: string;
  brand?: string;
  category: string;
  categorySlug: string;
  slug: string;
  price: number;
  imageUrl: string;
  images?: { src: string; alt: string }[];
  sizes?: string[];
  description?: string;
}
