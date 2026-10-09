import type { Category, Product, SizeGuide } from "@/lib/types";

export const CATEGORIES: Category[] = [
  {
    id: "cat-1", name: "Shirts", slug: "shirts",
    imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", imageAlt: "Men wearing premium Oxford shirts",
    description: "Refined everyday shirts designed with timeless silhouettes, quality fabrics and effortless versatility.", heroImageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=85", heroImageAlt: "Men wearing premium Oxford shirts", editorialHeading: "THE SHIRT EDIT", editorialText: "From relaxed everyday pieces to refined essentials, discover shirts designed to work effortlessly across your wardrobe.", editorialImageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1800&q=85", editorialImageAlt: "Editorial look at contemporary men's shirts", metaTitle: "Men's Shirts | FORMEN", metaDescription: "Explore our collection of contemporary men's shirts — Oxford, linen and cotton essentials designed for everyday versatility.", relatedSlugs: ["t-shirts", "trousers", "jeans", "jackets"],
  },
  {
    id: "cat-2", name: "T-Shirts", slug: "t-shirts",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80", imageAlt: "Contemporary casual men's T-shirts", description: "Essential everyday T-shirts built around comfort, clean silhouettes and effortless style.", heroImageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=85", heroImageAlt: "Contemporary casual men's T-shirts", editorialHeading: "THE EVERYDAY ESSENTIAL.", editorialText: "Discover T-shirts designed for comfort, clean lines and unforced everyday style.", editorialImageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1800&q=85", editorialImageAlt: "Editorial look at men's essential T-shirts", metaTitle: "Men's T-Shirts | FORMEN", metaDescription: "Explore our collection of contemporary men's T-shirts — oversized, crew-neck and polo styles for everyday wear.", relatedSlugs: ["shirts", "casual-wear", "jeans", "jackets"],
  },
  {
    id: "cat-3", name: "Jeans", slug: "jeans",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80", imageAlt: "Denim-focused men's fashion", description: "Contemporary denim designed for everyday movement, comfort and lasting style.", heroImageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=85", heroImageAlt: "Denim-focused men's fashion", editorialHeading: "DENIM, REFINED.", editorialText: "Explore contemporary denim designed for everyday confidence.", editorialImageUrl: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1800&q=85", editorialImageAlt: "Editorial look at contemporary men's denim", metaTitle: "Men's Jeans | FORMEN", metaDescription: "Explore our collection of contemporary men's jeans — straight and relaxed fits designed for everyday movement.", relatedSlugs: ["trousers", "shirts", "casual-wear", "jackets"],
  },
  {
    id: "cat-4", name: "Trousers", slug: "trousers",
    imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80", imageAlt: "Tailored men's trousers", description: "Clean-cut trousers designed to move effortlessly between everyday and refined dressing.", heroImageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=85", heroImageAlt: "Tailored men's trousers", editorialHeading: "DEFINED BY FIT.", editorialText: "Discover clean silhouettes designed for modern dressing.", editorialImageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1800&q=85", editorialImageAlt: "Editorial look at men's tailored trousers", metaTitle: "Men's Trousers | FORMEN", metaDescription: "Explore our collection of contemporary men's trousers — slim and regular fits for everyday and formal dressing.", relatedSlugs: ["jeans", "formal-wear", "shirts", "jackets"],
  },
  {
    id: "cat-5", name: "Casual Wear", slug: "casual-wear",
    imageUrl: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80", imageAlt: "Relaxed contemporary men's casual wear", description: "Relaxed pieces designed for comfort, ease and unstudied everyday style.", heroImageUrl: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1200&q=85", heroImageAlt: "Relaxed contemporary men's casual wear", editorialHeading: "EASY DOES IT.", editorialText: "Discover casual pieces designed to feel as good as they look.", editorialImageUrl: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1800&q=85", editorialImageAlt: "Editorial look at men's casual wear", metaTitle: "Men's Casual Wear | FORMEN", metaDescription: "Explore our collection of contemporary men's casual wear — relaxed pieces designed for everyday ease.", relatedSlugs: ["t-shirts", "jeans", "shirts", "jackets"],
  },
  {
    id: "cat-6", name: "Formal Wear", slug: "formal-wear",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", imageAlt: "Refined tailored men's formal wear", description: "Refined tailoring and polished essentials for considered dressing.", heroImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85", heroImageAlt: "Refined tailored men's formal wear", editorialHeading: "SHARP, CONSIDERED.", editorialText: "Explore formalwear designed for presence without pretension.", editorialImageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1800&q=85", editorialImageAlt: "Editorial look at men's formal wear", metaTitle: "Men's Formal Wear | FORMEN", metaDescription: "Explore our collection of contemporary men's formal wear — blazers and dress shirts for considered dressing.", relatedSlugs: ["trousers", "shirts", "jackets", "jeans"],
  },
  {
    id: "cat-7", name: "Jackets", slug: "jackets",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", imageAlt: "Layered men's jacket and outerwear look", description: "Layering essentials that bring structure, texture and character to the modern wardrobe.", heroImageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=85", heroImageAlt: "Layered men's jacket and outerwear look", editorialHeading: "LAYERED CHARACTER.", editorialText: "Discover jackets designed to bring structure and texture to the everyday wardrobe.", editorialImageUrl: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=1800&q=85", editorialImageAlt: "Editorial look at men's jackets and outerwear", metaTitle: "Men's Jackets | FORMEN", metaDescription: "Explore our collection of contemporary men's jackets — casual and bomber styles for modern layering.", relatedSlugs: ["shirts", "jeans", "formal-wear", "casual-wear"],
  },
];

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

export const PRODUCT_DETAIL_COPY: Record<string, { description: string; detailsParagraph: string; pattern?: string; color?: string; collection?: string }> = {
  "premium-oxford-shirt": {
    description: "A refined Oxford shirt crafted for everyday versatility. Designed with a clean silhouette, soft cotton construction and timeless detailing.",
    detailsParagraph: "Designed for everyday versatility, the Premium Oxford Shirt combines classic construction with a contemporary silhouette. Finished with a structured collar and mother-of-pearl-inspired buttons for a polished look.",
    pattern: "Solid", color: "Sky Blue", collection: "Essentials",
  },
};
