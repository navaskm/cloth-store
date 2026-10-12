import dotenv from "dotenv";
import { connectDatabase } from "./db.js";
import { Product } from "./models/Product.js";
import { products } from "./data/products.js";
import { Category } from "./models/Category.js";
import { categories } from "./data/categories.js";

dotenv.config();

async function seed() {
  await connectDatabase();
  await Product.bulkWrite(
    products.map((product) => ({
      updateOne: {
        filter: { id: product.id },
        update: { $set: product },
        upsert: true,
      },
    })),
  );
  console.log(`Seeded ${products.length} products`);
  await Category.bulkWrite(
    categories.map((category) => ({
      updateOne: { filter: { id: category.id }, update: { $set: category }, upsert: true },
    })),
  );
  console.log(`Seeded ${categories.length} categories`);
  process.exit(0);
}

seed().catch((error) => {
  console.error("Product seed failed", error);
  process.exit(1);
});
