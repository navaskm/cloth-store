import { Schema, model, models, type Model } from "mongoose";
import type { ProductDocument } from "../types/product.js";

const productSchema = new Schema<ProductDocument>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true, index: true },
    brand: { type: String, required: true, trim: true, index: true },
    category: { type: String, required: true, trim: true },
    categorySlug: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    price: { type: Number, required: true, min: 0 },
    compareAtPrice: { type: Number, min: 0 },
    currency: { type: String, required: true, default: "₹" },
    imageUrl: { type: String, required: true },
    imageAlt: { type: String, required: true },
    hoverImageUrl: String,
    images: [{ src: String, alt: String }],
    sizes: [String],
    colors: [String],
    color: String,
    material: String,
    fit: String,
    pattern: String,
    collection: String,
    description: String,
    isNew: Boolean,
    isFeatured: Boolean,
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true, versionKey: false },
);

export const Product = (models.Product as Model<ProductDocument>) || model<ProductDocument>("Product", productSchema);
