"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Category_js_1 = require("../models/Category.js");
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    try {
        const categories = await Category_js_1.Category.find({ isActive: { $ne: false } }).sort({ id: 1 }).lean();
        res.json({ success: true, data: categories });
    }
    catch (error) {
        console.error("Failed to load categories", error);
        res.status(500).json({ success: false, message: "Unable to load categories" });
    }
});
exports.default = router;
