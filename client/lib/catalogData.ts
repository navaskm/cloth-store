import type { Product, SizeGuide } from "@/lib/types";

export const SIZE_GUIDES: Record<SizeGuide["type"], SizeGuide> = {
  shirt: { type: "shirt", heading: "Shirt Size Guide", col1: "Size", col2: "Chest", rows: ["S:38\"", "M:40\"", "L:42\"", "XL:44\"", "XXL:46\""].map((row) => { const [size, measurement] = row.split(":"); return { size, measurement }; }) },
  tshirt: { type: "tshirt", heading: "T-Shirt Size Guide", col1: "Size", col2: "Chest", rows: ["XS:36\"", "S:38\"", "M:40\"", "L:42\"", "XL:44\"", "XXL:46\""].map((row) => { const [size, measurement] = row.split(":"); return { size, measurement }; }) },
  trouser: { type: "trouser", heading: "Trouser & Denim Size Guide", col1: "Size", col2: "Waist", rows: ["28:28\"", "30:30\"", "32:32\"", "34:34\"", "36:36\"", "38:38\"", "40:40\""].map((row) => { const [size, measurement] = row.split(":"); return { size, measurement }; }) },
  jacket: { type: "jacket", heading: "Jacket Size Guide", col1: "Size", col2: "Chest", rows: ["38:38\"", "40:40\"", "42:42\"", "44:44\"", "46:46\""].map((row) => { const [size, measurement] = row.split(":"); return { size, measurement }; }) },
};

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

export const PRODUCT_DETAIL_COPY: Record<string, { description: string; detailsParagraph: string }> = {
  "premium-oxford-shirt": {
    description: "A refined Oxford shirt crafted for everyday versatility. Designed with a clean silhouette, soft cotton construction and timeless detailing.",
    detailsParagraph: "Designed for everyday versatility, the Premium Oxford Shirt combines classic construction with a contemporary silhouette. Finished with a structured collar and mother-of-pearl-inspired buttons for a polished look.",
  },
};
