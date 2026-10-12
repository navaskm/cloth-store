import { Schema, model, models, type Model } from "mongoose";
import type { ProductDocument } from "../types/product.js";

const productSchema = new Schema<ProductDocument>(
  {
    name: { type: String, required: true, trim: true, index: true },
    brand: { type: String, trim: true, index: true },
    category: { type: String, required: true, trim: true },
    categorySlug: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    price: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true },
    images: [{ src: String, alt: String }],
    sizes: [String],
    description: String,
  },
  { timestamps: true, versionKey: false },
);

export const PRODUCT_PUBLIC_FIELDS = "_id name brand category categorySlug slug price imageUrl images sizes description";

export const Product = (models.Product as Model<ProductDocument>) || model<ProductDocument>("Product", productSchema);
