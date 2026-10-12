"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_js_1 = require("./db.js");
const Product_js_1 = require("./models/Product.js");
const products_js_1 = require("./data/products.js");
const categories_js_1 = require("./data/categories.js");
const Category_js_1 = require("./models/Category.js");
const TrendingProduct_js_1 = require("./models/TrendingProduct.js");
const trendingProducts_js_1 = require("./data/trendingProducts.js");
dotenv_1.default.config();
const LEGACY_PRODUCT_FIELDS = {
    id: 1,
    currency: 1,
    compareAtPrice: 1,
    imageAlt: 1,
    hoverImageUrl: 1,
    colors: 1,
    color: 1,
    material: 1,
    fit: 1,
    pattern: 1,
    collection: 1,
    isNew: 1,
    isFeatured: 1,
    isTrending: 1,
    isActive: 1,
};
const LEGACY_CATEGORY_FIELDS = {
    id: 1,
    description: 1,
    heroImageAlt: 1,
    editorialText: 1,
    editorialImageUrl: 1,
    editorialImageAlt: 1,
    relatedSlugs: 1,
    isActive: 1,
};
async function seed() {
    await (0, db_js_1.connectDatabase)();
    try {
        await Product_js_1.Product.collection.dropIndex("id_1");
        console.log("Removed legacy products.id index");
    }
    catch (error) {
        const indexMissing = error && typeof error === "object" && "code" in error && error.code === 27;
        if (!indexMissing) {
            throw error;
        }
    }
    await Product_js_1.Product.bulkWrite(products_js_1.products.map((product) => ({
        updateOne: {
            filter: { slug: product.slug },
            update: {
                $set: product,
                $unset: {
                    ...LEGACY_PRODUCT_FIELDS,
                },
            },
            upsert: true,
        },
    })));
    await Product_js_1.Product.collection.updateMany({}, { $unset: LEGACY_PRODUCT_FIELDS });
    console.log(`Seeded ${products_js_1.products.length} products`);
    try {
        await Category_js_1.Category.collection.dropIndex("id_1");
        console.log("Removed legacy categories.id index");
    }
    catch (error) {
        const indexMissing = error && typeof error === "object" && "code" in error && error.code === 27;
        if (!indexMissing)
            throw error;
    }
    await Category_js_1.Category.bulkWrite(categories_js_1.categories.map((category) => ({
        updateOne: { filter: { slug: category.slug }, update: { $set: category }, upsert: true },
    })));
    await Category_js_1.Category.collection.updateMany({}, { $unset: LEGACY_CATEGORY_FIELDS });
    console.log(`Seeded ${categories_js_1.categories.length} categories`);
    await TrendingProduct_js_1.TrendingProduct.bulkWrite(trendingProducts_js_1.trendingProducts.map((product) => ({
        updateOne: { filter: { productSlug: product.productSlug }, update: { $set: product }, upsert: true },
    })));
    console.log(`Seeded ${trendingProducts_js_1.trendingProducts.length} trending products`);
    process.exit(0);
}
seed().catch((error) => {
    console.error("Product seed failed", error);
    process.exit(1);
});
