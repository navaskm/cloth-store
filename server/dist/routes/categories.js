"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Category_js_1 = require("../models/Category.js");
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    try {
        const categories = await Category_js_1.Category.find().select(Category_js_1.CATEGORY_PUBLIC_FIELDS).sort({ slug: 1 }).lean();
        res.json({ success: true, data: categories });
    }
    catch (error) {
        console.error("Failed to load categories", error);
        res.status(500).json({ success: false, message: "Unable to load categories" });
    }
});
exports.default = router;
