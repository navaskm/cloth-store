"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.CATEGORY_PUBLIC_FIELDS = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    imageUrl: { type: String, required: true },
    imageAlt: { type: String, required: true },
    heroImageUrl: { type: String, required: true },
    editorialHeading: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
}, { timestamps: true, versionKey: false });
exports.CATEGORY_PUBLIC_FIELDS = "_id name slug imageUrl imageAlt heroImageUrl editorialHeading metaTitle metaDescription";
exports.Category = mongoose_1.models.Category || (0, mongoose_1.model)("Category", categorySchema);
