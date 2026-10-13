import type { Product } from "@/lib/types";

export const PRODUCT_GALLERIES: Record<string, Product["images"]> = {
  "premium-oxford-shirt": [
    { src: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=85", alt: "Premium Oxford Shirt front view" },
    { src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1200&q=85", alt: "Premium Oxford Shirt styled look" },
    { src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=85", alt: "Premium Oxford Shirt detail view" },
  ],
  "classic-linen-shirt": [
    { src: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=1200&q=85", alt: "Classic Linen Shirt front view" },
    { src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=85", alt: "Classic Linen Shirt back view" },
  ],
  "classic-straight-jeans": [
    { src: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=85", alt: "Classic Straight Jeans front view" },
    { src: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1200&q=85", alt: "Classic Straight Jeans full length" },
  ],
};

export const PRODUCT_DETAIL_COPY: Record<string, { description: string }> = {
  "premium-oxford-shirt": {
    description: "A refined Oxford shirt crafted for everyday versatility. Designed with a clean silhouette, soft cotton construction and timeless detailing.",
  },
};
