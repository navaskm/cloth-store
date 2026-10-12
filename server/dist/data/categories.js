"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
const category = (name, slug, imageUrl) => ({
    name,
    slug,
    imageUrl,
    imageAlt: name,
    heroImageUrl: imageUrl,
    editorialHeading: name.toUpperCase(),
    metaTitle: `${name} | FORMEN`,
    metaDescription: `Explore the FORMEN ${name.toLowerCase()} collection.`,
});
exports.categories = [
    category("Shirts", "shirts", "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80"),
    category("T-Shirts", "t-shirts", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"),
    category("Jeans", "jeans", "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"),
    category("Trousers", "trousers", "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"),
    category("Casual Wear", "casual-wear", "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80"),
    category("Formal Wear", "formal-wear", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"),
    category("Jackets", "jackets", "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"),
];
