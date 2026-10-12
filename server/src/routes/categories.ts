import { Router } from "express";
import { CATEGORY_PUBLIC_FIELDS, Category } from "../models/Category.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const categories = await Category.find().select(CATEGORY_PUBLIC_FIELDS).sort({ slug: 1 }).lean();
    res.json({ success: true, data: categories });
  } catch (error) {
    console.error("Failed to load categories", error);
    res.status(500).json({ success: false, message: "Unable to load categories" });
  }
});

export default router;
