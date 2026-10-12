"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrendingProduct = void 0;
const mongoose_1 = require("mongoose");
const trendingProductSchema = new mongoose_1.Schema({
    productSlug: { type: String, required: true, unique: true, index: true },
    sortOrder: { type: Number, required: true, default: 0, index: true },
}, { timestamps: true, versionKey: false });
exports.TrendingProduct = mongoose_1.models.TrendingProduct ||
    (0, mongoose_1.model)("TrendingProduct", trendingProductSchema);
