"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true, index: true },
    brand: { type: String, required: true, trim: true, index: true },
    category: { type: String, required: true, trim: true },
    categorySlug: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    price: { type: Number, required: true, min: 0 },
    compareAtPrice: { type: Number, min: 0 },
    currency: { type: String, required: true, default: "₹" },
    imageUrl: { type: String, required: true },
    imageAlt: { type: String, required: true },
    hoverImageUrl: String,
    images: [{ src: String, alt: String }],
    sizes: [String],
    colors: [String],
    color: String,
    material: String,
    fit: String,
    pattern: String,
    collection: String,
    description: String,
    isNew: Boolean,
    isFeatured: Boolean,
    isActive: { type: Boolean, default: true, index: true },
}, { timestamps: true, versionKey: false });
exports.Product = mongoose_1.models.Product || (0, mongoose_1.model)("Product", productSchema);
