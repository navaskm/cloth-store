import dotenv from "dotenv";
import { connectDatabase } from "./db.js";
import { Product } from "./models/Product.js";
import { products } from "./data/products.js";

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
  process.exit(0);
}

seed().catch((error) => {
  console.error("Product seed failed", error);
  process.exit(1);
});
