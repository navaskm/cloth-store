import { Category, Product, SizeGuide } from "@/lib/types";

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Shirts",
    slug: "shirts",
    imageUrl:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    imageAlt: "Men wearing premium Oxford shirts",
    description:
      "Refined everyday shirts designed with timeless silhouettes, quality fabrics and effortless versatility.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=85",
    heroImageAlt: "Men wearing premium Oxford shirts",
    editorialHeading: "THE SHIRT EDIT",
    editorialText:
      "From relaxed everyday pieces to refined essentials, discover shirts designed to work effortlessly across your wardrobe.",
    editorialImageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1800&q=85",
    editorialImageAlt: "Editorial look at contemporary men's shirts",
    metaTitle: "Men's Shirts | FORMEN",
    metaDescription:
      "Explore our collection of contemporary men's shirts — Oxford, linen and cotton essentials designed for everyday versatility.",
    relatedSlugs: ["t-shirts", "trousers", "jeans", "jackets"],
  },
  {
    id: "cat-2",
    name: "T-Shirts",
    slug: "t-shirts",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    imageAlt: "Contemporary casual men's T-shirts",
    description:
      "Essential everyday T-shirts built around comfort, clean silhouettes and effortless style.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=85",
    heroImageAlt: "Contemporary casual men's T-shirts",
    editorialHeading: "THE EVERYDAY ESSENTIAL.",
    editorialText:
      "Discover T-shirts designed for comfort, clean lines and unforced everyday style.",
    editorialImageUrl:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1800&q=85",
    editorialImageAlt: "Editorial look at men's essential T-shirts",
    metaTitle: "Men's T-Shirts | FORMEN",
    metaDescription:
      "Explore our collection of contemporary men's T-shirts — oversized, crew-neck and polo styles for everyday wear.",
    relatedSlugs: ["shirts", "casual-wear", "jeans", "jackets"],
  },
  {
    id: "cat-3",
    name: "Jeans",
    slug: "jeans",
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    imageAlt: "Denim-focused men's fashion",
    description:
      "Contemporary denim designed for everyday movement, comfort and lasting style.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=85",
    heroImageAlt: "Denim-focused men's fashion",
    editorialHeading: "DENIM, REFINED.",
    editorialText:
      "Explore contemporary denim designed for everyday confidence.",
    editorialImageUrl:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1800&q=85",
    editorialImageAlt: "Editorial look at contemporary men's denim",
    metaTitle: "Men's Jeans | FORMEN",
    metaDescription:
      "Explore our collection of contemporary men's jeans — straight and relaxed fits designed for everyday movement.",
    relatedSlugs: ["trousers", "shirts", "casual-wear", "jackets"],
  },
  {
    id: "cat-4",
    name: "Trousers",
    slug: "trousers",
    imageUrl:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    imageAlt: "Tailored men's trousers",
    description:
      "Clean-cut trousers designed to move effortlessly between everyday and refined dressing.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=85",
    heroImageAlt: "Tailored men's trousers",
    editorialHeading: "DEFINED BY FIT.",
    editorialText:
      "Discover clean silhouettes designed for modern dressing.",
    editorialImageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1800&q=85",
    editorialImageAlt: "Editorial look at men's tailored trousers",
    metaTitle: "Men's Trousers | FORMEN",
    metaDescription:
      "Explore our collection of contemporary men's trousers — slim and regular fits for everyday and formal dressing.",
    relatedSlugs: ["jeans", "formal-wear", "shirts", "jackets"],
  },
  {
    id: "cat-5",
    name: "Casual Wear",
    slug: "casual-wear",
    imageUrl:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80",
    imageAlt: "Relaxed contemporary men's casual wear",
    description:
      "Relaxed pieces designed for comfort, ease and unstudied everyday style.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1200&q=85",
    heroImageAlt: "Relaxed contemporary men's casual wear",
    editorialHeading: "EASY DOES IT.",
    editorialText:
      "Discover casual pieces designed to feel as good as they look.",
    editorialImageUrl:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1800&q=85",
    editorialImageAlt: "Editorial look at men's casual wear",
    metaTitle: "Men's Casual Wear | FORMEN",
    metaDescription:
      "Explore our collection of contemporary men's casual wear — relaxed pieces designed for everyday ease.",
    relatedSlugs: ["t-shirts", "jeans", "shirts", "jackets"],
  },
  {
    id: "cat-6",
    name: "Formal Wear",
    slug: "formal-wear",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    imageAlt: "Refined tailored men's formal wear",
    description:
      "Refined tailoring and polished essentials for considered dressing.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85",
    heroImageAlt: "Refined tailored men's formal wear",
    editorialHeading: "SHARP, CONSIDERED.",
    editorialText:
      "Explore formalwear designed for presence without pretension.",
    editorialImageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1800&q=85",
    editorialImageAlt: "Editorial look at men's formal wear",
    metaTitle: "Men's Formal Wear | FORMEN",
    metaDescription:
      "Explore our collection of contemporary men's formal wear — blazers and dress shirts for considered dressing.",
    relatedSlugs: ["trousers", "shirts", "jackets", "jeans"],
  },
  {
    id: "cat-7",
    name: "Jackets",
    slug: "jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    imageAlt: "Layered men's jacket and outerwear look",
    description:
      "Layering essentials that bring structure, texture and character to the modern wardrobe.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=85",
    heroImageAlt: "Layered men's jacket and outerwear look",
    editorialHeading: "LAYERED CHARACTER.",
    editorialText:
      "Discover jackets designed to bring structure and texture to the everyday wardrobe.",
    editorialImageUrl:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=1800&q=85",
    editorialImageAlt: "Editorial look at men's jackets and outerwear",
    metaTitle: "Men's Jackets | FORMEN",
    metaDescription:
      "Explore our collection of contemporary men's jackets — casual and bomber styles for modern layering.",
    relatedSlugs: ["shirts", "jeans", "formal-wear", "casual-wear"],
  },
];

// ---------------------------------------------------------------------------
// Full Product Catalog (used on the Shop page)
// ---------------------------------------------------------------------------

export const ALL_PRODUCTS: Product[] = [
  // ── Shirts ──────────────────────────────────────────────────────────────
  {
    id: "prod-1",
    name: "Premium Oxford Shirt",
    brand: "Van Heusen",
    category: "Shirts",
    categorySlug: "shirts",
    slug: "premium-oxford-shirt",
    price: 1299,
    compareAtPrice: 1499,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    imageAlt: "Premium Oxford Shirt in white",
    hoverImageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Navy"],
    material: "100% Premium Cotton",
    fit: "Regular Fit",
    isNew: true,
    isFeatured: true,
    isActive: true,
  },
  {
    id: "prod-2",
    name: "Classic Linen Shirt",
    brand: "Raymond",
    category: "Shirts",
    categorySlug: "shirts",
    slug: "classic-linen-shirt",
    price: 1599,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=600&q=80",
    imageAlt: "Classic Linen Shirt in beige",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "White", "Olive"],
    material: "100% Linen",
    fit: "Relaxed Fit",
    isNew: true,
    isActive: true,
  },
  {
    id: "prod-3",
    name: "Essential Cotton Shirt",
    brand: "Peter England",
    category: "Shirts",
    categorySlug: "shirts",
    slug: "essential-cotton-shirt",
    price: 1099,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&q=80",
    imageAlt: "Essential Cotton Shirt in light grey",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "White", "Black"],
    material: "100% Cotton",
    fit: "Slim Fit",
    isActive: true,
  },
  {
    id: "prod-4",
    name: "Relaxed Fit Overshirt",
    brand: "Mufti",
    category: "Shirts",
    categorySlug: "shirts",
    slug: "relaxed-fit-overshirt",
    price: 1899,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    imageAlt: "Relaxed Fit Overshirt in olive",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Olive", "Khaki", "Navy"],
    material: "Cotton Twill",
    fit: "Relaxed Fit",
    isNew: true,
    isActive: true,
  },
  // ── T-Shirts ─────────────────────────────────────────────────────────────
  {
    id: "prod-5",
    name: "Essential Oversized T-Shirt",
    brand: "Urban Basics",
    category: "T-Shirts",
    categorySlug: "t-shirts",
    slug: "essential-oversized-tshirt",
    price: 799,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    imageAlt: "Essential Oversized T-Shirt in black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Charcoal"],
    material: "100% Combed Cotton",
    fit: "Oversized Fit",
    isNew: true,
    isActive: true,
  },
  {
    id: "prod-6",
    name: "Classic Crew Neck T-Shirt",
    brand: "H&M",
    category: "T-Shirts",
    categorySlug: "t-shirts",
    slug: "classic-crew-neck-tshirt",
    price: 699,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    imageAlt: "Classic Crew Neck T-Shirt in white",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Grey"],
    material: "100% Cotton",
    fit: "Regular Fit",
    isActive: true,
  },
  {
    id: "prod-7",
    name: "Premium Polo T-Shirt",
    brand: "Lacoste",
    category: "T-Shirts",
    categorySlug: "t-shirts",
    slug: "premium-polo-tshirt",
    price: 2199,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80",
    imageAlt: "Premium Polo T-Shirt in navy",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "White", "Burgundy", "Forest Green"],
    material: "Piqué Cotton",
    fit: "Regular Fit",
    isFeatured: true,
    isActive: true,
  },
  // ── Jeans ─────────────────────────────────────────────────────────────────
  {
    id: "prod-8",
    name: "Classic Straight Jeans",
    brand: "Levi's",
    category: "Jeans",
    categorySlug: "jeans",
    slug: "classic-straight-jeans",
    price: 2499,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    imageAlt: "Classic Straight Jeans in dark wash",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Dark Wash", "Medium Wash", "Black"],
    material: "98% Cotton, 2% Elastane",
    fit: "Straight Fit",
    isNew: true,
    isFeatured: true,
    isActive: true,
  },
  {
    id: "prod-9",
    name: "Relaxed Fit Jeans",
    brand: "Wrangler",
    category: "Jeans",
    categorySlug: "jeans",
    slug: "relaxed-fit-jeans",
    price: 1999,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80",
    imageAlt: "Relaxed Fit Jeans in medium wash",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Medium Wash", "Light Wash"],
    material: "100% Denim Cotton",
    fit: "Relaxed Fit",
    isActive: true,
  },
  // ── Trousers ──────────────────────────────────────────────────────────────
  {
    id: "prod-10",
    name: "Slim Fit Trousers",
    brand: "Raymond",
    category: "Trousers",
    categorySlug: "trousers",
    slug: "slim-fit-trousers",
    price: 1799,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    imageAlt: "Slim Fit Trousers in charcoal grey",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Charcoal", "Navy", "Black"],
    material: "Wool Blend",
    fit: "Slim Fit",
    isNew: true,
    isActive: true,
  },
  {
    id: "prod-11",
    name: "Classic Formal Trousers",
    brand: "Van Heusen",
    category: "Trousers",
    categorySlug: "trousers",
    slug: "classic-formal-trousers",
    price: 1499,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    imageAlt: "Classic Formal Trousers in black",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Black", "Dark Grey", "Navy"],
    material: "Polyester-Viscose Blend",
    fit: "Regular Fit",
    isActive: true,
  },
  // ── Casual Wear ───────────────────────────────────────────────────────────
  {
    id: "prod-12",
    name: "Casual Linen Jogger",
    brand: "Mufti",
    category: "Casual Wear",
    categorySlug: "casual-wear",
    slug: "casual-linen-jogger",
    price: 1299,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
    imageAlt: "Casual Linen Jogger in beige",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Olive", "Slate Grey"],
    material: "Linen Blend",
    fit: "Tapered Fit",
    isNew: true,
    isActive: true,
  },
  // ── Formal Wear ───────────────────────────────────────────────────────────
  {
    id: "prod-13",
    name: "Premium Blazer",
    brand: "Raymond",
    category: "Formal Wear",
    categorySlug: "formal-wear",
    slug: "premium-blazer",
    price: 5999,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    imageAlt: "Premium Blazer in navy",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Navy", "Charcoal", "Black"],
    material: "Wool Blend",
    fit: "Slim Fit",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "prod-14",
    name: "Formal Dress Shirt",
    brand: "Peter England",
    category: "Formal Wear",
    categorySlug: "formal-wear",
    slug: "formal-dress-shirt",
    price: 1499,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    imageAlt: "Formal Dress Shirt in white",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue"],
    material: "Premium Cotton",
    fit: "Slim Fit",
    isActive: true,
  },
  // ── Jackets ───────────────────────────────────────────────────────────────
  {
    id: "prod-15",
    name: "Textured Casual Jacket",
    brand: "Mufti",
    category: "Jackets",
    categorySlug: "jackets",
    slug: "textured-casual-jacket",
    price: 3499,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    imageAlt: "Textured Casual Jacket in brown",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Olive", "Charcoal"],
    material: "Polyester Tweed",
    fit: "Regular Fit",
    isNew: true,
    isFeatured: true,
    isActive: true,
  },
  {
    id: "prod-16",
    name: "Minimal Bomber Jacket",
    brand: "H&M",
    category: "Jackets",
    categorySlug: "jackets",
    slug: "minimal-bomber-jacket",
    price: 2999,
    currency: "₹",
    imageUrl:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&q=80",
    imageAlt: "Minimal Bomber Jacket in olive",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Olive", "Black", "Navy"],
    material: "Nylon Shell",
    fit: "Regular Fit",
    isActive: true,
  },
];

// ---------------------------------------------------------------------------
// New Arrivals (subset used on Home page)
// ---------------------------------------------------------------------------

export const NEW_ARRIVALS: Product[] = ALL_PRODUCTS.filter((p) => p.isNew).slice(0, 4);

// ---------------------------------------------------------------------------
// Helper: unique values from product list
// ---------------------------------------------------------------------------

export function getUniqueBrands(products: Product[]): string[] {
  return [...new Set(products.map((p) => p.brand))].sort();
}

export function getUniqueSizes(products: Product[]): string[] {
  const all = products.flatMap((p) => p.sizes ?? []);
  return [...new Set(all)];
}

export function getUniqueColors(products: Product[]): string[] {
  const all = products.flatMap((p) => p.colors ?? []);
  return [...new Set(all)].sort();
}

export function getUniqueFits(products: Product[]): string[] {
  const all = products
    .map((p) => p.fit)
    .filter((fit): fit is string => Boolean(fit));
  return [...new Set(all)].sort();
}

export function getUniqueMaterials(products: Product[]): string[] {
  const all = products
    .map((p) => p.material)
    .filter((material): material is string => Boolean(material));
  return [...new Set(all)].sort();
}

// ---------------------------------------------------------------------------
// Size guides (structured for future API / category mapping)
// ---------------------------------------------------------------------------

export const SIZE_GUIDES: Record<SizeGuide["type"], SizeGuide> = {
  shirt: {
    type: "shirt",
    heading: "Shirt Size Guide",
    col1: "Size",
    col2: "Chest",
    rows: [
      { size: "S", measurement: '38"' },
      { size: "M", measurement: '40"' },
      { size: "L", measurement: '42"' },
      { size: "XL", measurement: '44"' },
      { size: "XXL", measurement: '46"' },
    ],
  },
  tshirt: {
    type: "tshirt",
    heading: "T-Shirt Size Guide",
    col1: "Size",
    col2: "Chest",
    rows: [
      { size: "XS", measurement: '36"' },
      { size: "S", measurement: '38"' },
      { size: "M", measurement: '40"' },
      { size: "L", measurement: '42"' },
      { size: "XL", measurement: '44"' },
      { size: "XXL", measurement: '46"' },
    ],
  },
  trouser: {
    type: "trouser",
    heading: "Trouser & Denim Size Guide",
    col1: "Size",
    col2: "Waist",
    rows: [
      { size: "28", measurement: '28"' },
      { size: "30", measurement: '30"' },
      { size: "32", measurement: '32"' },
      { size: "34", measurement: '34"' },
      { size: "36", measurement: '36"' },
      { size: "38", measurement: '38"' },
      { size: "40", measurement: '40"' },
    ],
  },
  jacket: {
    type: "jacket",
    heading: "Jacket Size Guide",
    col1: "Size",
    col2: "Chest",
    rows: [
      { size: "38", measurement: '38"' },
      { size: "40", measurement: '40"' },
      { size: "42", measurement: '42"' },
      { size: "44", measurement: '44"' },
      { size: "46", measurement: '46"' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Extended gallery images by slug (detail page)
// ---------------------------------------------------------------------------

export const PRODUCT_GALLERIES: Record<string, Product["images"]> = {
  "premium-oxford-shirt": [
    {
      src: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=85",
      alt: "Premium Oxford Shirt front view",
    },
    {
      src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1200&q=85",
      alt: "Premium Oxford Shirt styled look",
    },
    {
      src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=85",
      alt: "Premium Oxford Shirt detail view",
    },
    {
      src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=1200&q=85",
      alt: "Premium Oxford Shirt fabric close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=1200&q=85",
      alt: "Premium Oxford Shirt side profile",
    },
  ],
  "classic-linen-shirt": [
    {
      src: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=1200&q=85",
      alt: "Classic Linen Shirt front view",
    },
    {
      src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=85",
      alt: "Classic Linen Shirt back view",
    },
    {
      src: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=85",
      alt: "Classic Linen Shirt on model",
    },
    {
      src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=85",
      alt: "Classic Linen Shirt detail",
    },
  ],
  "classic-straight-jeans": [
    {
      src: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=85",
      alt: "Classic Straight Jeans front view",
    },
    {
      src: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1200&q=85",
      alt: "Classic Straight Jeans full length",
    },
    {
      src: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=85",
      alt: "Classic Straight Jeans detail",
    },
    {
      src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=85",
      alt: "Classic Straight Jeans fabric texture",
    },
  ],
};

/** Long-form copy and specs for the detail page editorial section */
export const PRODUCT_DETAIL_COPY: Record<
  string,
  { description: string; detailsParagraph: string; pattern?: string; color?: string; collection?: string }
> = {
  "premium-oxford-shirt": {
    description:
      "A refined Oxford shirt crafted for everyday versatility. Designed with a clean silhouette, soft cotton construction and timeless detailing.",
    detailsParagraph:
      "Designed for everyday versatility, the Premium Oxford Shirt combines classic construction with a contemporary silhouette. Finished with a structured collar and mother-of-pearl-inspired buttons for a polished look.",
    pattern: "Solid",
    color: "Sky Blue",
    collection: "Essentials",
  },
};
