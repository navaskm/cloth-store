"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.PRODUCT_PUBLIC_FIELDS = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
}, { timestamps: true, versionKey: false });
exports.PRODUCT_PUBLIC_FIELDS = "_id name brand category categorySlug slug price imageUrl images sizes description";
exports.Product = mongoose_1.models.Product || (0, mongoose_1.model)("Product", productSchema);
