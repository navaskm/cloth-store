import { Schema, model, models, type Model } from "mongoose";
import type { CategoryDocument } from "../types/category.js";

const categorySchema = new Schema<CategoryDocument>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    imageUrl: { type: String, required: true },
    imageAlt: { type: String, required: true },
    heroImageUrl: { type: String, required: true },
    editorialHeading: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const CATEGORY_PUBLIC_FIELDS = "_id name slug imageUrl imageAlt heroImageUrl editorialHeading metaTitle metaDescription";

export const Category = (models.Category as Model<CategoryDocument>) || model<CategoryDocument>("Category", categorySchema);
