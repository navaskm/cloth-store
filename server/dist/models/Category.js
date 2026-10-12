"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    imageUrl: { type: String, required: true },
    imageAlt: { type: String, required: true },
    description: { type: String, required: true },
    heroImageUrl: { type: String, required: true },
    heroImageAlt: { type: String, required: true },
    editorialHeading: { type: String, required: true },
    editorialText: { type: String, required: true },
    editorialImageUrl: { type: String, required: true },
    editorialImageAlt: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    relatedSlugs: { type: [String], default: [] },
    isActive: { type: Boolean, default: true, index: true },
}, { timestamps: true, versionKey: false });
exports.Category = mongoose_1.models.Category || (0, mongoose_1.model)("Category", categorySchema);
