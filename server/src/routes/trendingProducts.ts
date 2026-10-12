import { Router } from "express";
import { PRODUCT_PUBLIC_FIELDS, Product } from "../models/Product.js";
import { TrendingProduct } from "../models/TrendingProduct.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const selections = await TrendingProduct.find().sort({ sortOrder: 1 }).lean();
    const products = await Product.find({ slug: { $in: selections.map((item) => item.productSlug) } }).select(PRODUCT_PUBLIC_FIELDS).lean();
    const bySlug = new Map(products.map((product) => [product.slug, product]));
    res.json({
      success: true,
      data: selections.map((item) => bySlug.get(item.productSlug)).filter(Boolean),
    });
  } catch (error) {
    console.error("Failed to load trending products", error);
    res.status(500).json({ success: false, message: "Unable to load trending products" });
  }
});

export default router;
