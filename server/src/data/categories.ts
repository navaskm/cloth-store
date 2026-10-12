import type { CategoryDocument } from "../types/category.js";

const category = (
  id: string,
  name: string,
  slug: string,
  imageUrl: string,
  description: string,
  relatedSlugs: string[],
): CategoryDocument => ({
  id, name, slug, imageUrl, imageAlt: name, description,
  heroImageUrl: imageUrl, heroImageAlt: name,
  editorialHeading: name.toUpperCase(),
  editorialText: description,
  editorialImageUrl: imageUrl, editorialImageAlt: name,
  metaTitle: `${name} | FORMEN`, metaDescription: description, relatedSlugs,
});

export const categories: CategoryDocument[] = [
  category("cat-1", "Shirts", "shirts", "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", "Refined everyday shirts designed with timeless silhouettes, quality fabrics and effortless versatility.", ["t-shirts", "trousers", "jeans", "jackets"]),
  category("cat-2", "T-Shirts", "t-shirts", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80", "Essential everyday T-shirts built around comfort, clean silhouettes and effortless style.", ["shirts", "casual-wear", "jeans", "jackets"]),
  category("cat-3", "Jeans", "jeans", "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80", "Contemporary denim designed for everyday movement, comfort and lasting style.", ["trousers", "shirts", "casual-wear", "jackets"]),
  category("cat-4", "Trousers", "trousers", "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80", "Clean-cut trousers designed to move effortlessly between everyday and refined dressing.", ["jeans", "formal-wear", "shirts", "jackets"]),
  category("cat-5", "Casual Wear", "casual-wear", "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80", "Relaxed pieces designed for comfort, ease and unstudied everyday style.", ["t-shirts", "jeans", "shirts", "jackets"]),
  category("cat-6", "Formal Wear", "formal-wear", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", "Refined tailoring and polished essentials for considered dressing.", ["trousers", "shirts", "jackets", "jeans"]),
  category("cat-7", "Jackets", "jackets", "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", "Layering essentials that bring structure, texture and character to the modern wardrobe.", ["shirts", "jeans", "formal-wear", "casual-wear"]),
];
