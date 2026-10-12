import { Schema, model, models, type Model } from "mongoose";
import type { TrendingProductDocument } from "../types/trendingProduct.js";

const trendingProductSchema = new Schema<TrendingProductDocument>(
  {
    productSlug: { type: String, required: true, unique: true, index: true },
    sortOrder: { type: Number, required: true, default: 0, index: true },
  },
  { timestamps: true, versionKey: false },
);

export const TrendingProduct =
  (models.TrendingProduct as Model<TrendingProductDocument>) ||
  model<TrendingProductDocument>("TrendingProduct", trendingProductSchema);
