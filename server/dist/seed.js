"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_js_1 = require("./db.js");
const Product_js_1 = require("./models/Product.js");
const products_js_1 = require("./data/products.js");
dotenv_1.default.config();
async function seed() {
    await (0, db_js_1.connectDatabase)();
    await Product_js_1.Product.bulkWrite(products_js_1.products.map((product) => ({
        updateOne: {
            filter: { id: product.id },
            update: { $set: product },
            upsert: true,
        },
    })));
    console.log(`Seeded ${products_js_1.products.length} products`);
    process.exit(0);
}
seed().catch((error) => {
    console.error("Product seed failed", error);
    process.exit(1);
});
