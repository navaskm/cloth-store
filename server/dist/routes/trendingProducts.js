"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_js_1 = require("../models/Product.js");
const TrendingProduct_js_1 = require("../models/TrendingProduct.js");
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    try {
        const selections = await TrendingProduct_js_1.TrendingProduct.find().sort({ sortOrder: 1 }).lean();
        const products = await Product_js_1.Product.find({ slug: { $in: selections.map((item) => item.productSlug) } }).select(Product_js_1.PRODUCT_PUBLIC_FIELDS).lean();
        const bySlug = new Map(products.map((product) => [product.slug, product]));
        res.json({
            success: true,
            data: selections.map((item) => bySlug.get(item.productSlug)).filter(Boolean),
        });
    }
    catch (error) {
        console.error("Failed to load trending products", error);
        res.status(500).json({ success: false, message: "Unable to load trending products" });
    }
});
exports.default = router;
