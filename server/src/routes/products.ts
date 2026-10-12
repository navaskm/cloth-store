import { Router } from "express";
import { PRODUCT_PUBLIC_FIELDS, Product } from "../models/Product.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const query = typeof req.query.q === "string" ? req.query.q.trim() : "";
    const category = typeof req.query.category === "string" ? req.query.category : "";
    const sort = typeof req.query.sort === "string" ? req.query.sort : "recommended";

    const filter: Record<string, unknown> = {};
    if (category) filter.categorySlug = category;
    if (query) {
      const terms = query.split(/\s+/).filter(Boolean).map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      const expression = terms.join(".*");
      filter.$or = [
        { name: { $regex: expression, $options: "i" } },
        { category: { $regex: expression, $options: "i" } },
        { brand: { $regex: expression, $options: "i" } },
        { description: { $regex: expression, $options: "i" } },
      ];
    }

    const sortValue: Record<string, 1 | -1> =
      sort === "newest"
        ? { createdAt: -1 }
        : sort === "price-asc"
          ? { price: 1 }
          : sort === "price-desc"
            ? { price: -1 }
            : sort === "name-asc"
              ? { name: 1 }
              : { name: 1 };

    const products = await Product.find(filter).select(PRODUCT_PUBLIC_FIELDS).sort(sortValue).lean();
    res.json({ success: true, data: products });
  } catch (error) {
    console.error("Failed to load products", error);
    res.status(500).json({ success: false, message: "Unable to load products" });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).select(PRODUCT_PUBLIC_FIELDS).lean();
    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.json({ success: true, data: product });
  } catch (error) {
    console.error("Failed to load product", error);
    res.status(500).json({ success: false, message: "Unable to load product" });
  }
});

export default router;
