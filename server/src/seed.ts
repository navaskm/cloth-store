import dotenv from "dotenv";
import { connectDatabase } from "./db.js";
import { Product } from "./models/Product.js";
import { products } from "./data/products.js";
import { categories } from "./data/categories.js";
import { Category } from "./models/Category.js";
import { TrendingProduct } from "./models/TrendingProduct.js";
import { trendingProducts } from "./data/trendingProducts.js";

dotenv.config();

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
  await connectDatabase();
  try {
    await Product.collection.dropIndex("id_1");
    console.log("Removed legacy products.id index");
  } catch (error) {
    const indexMissing = error && typeof error === "object" && "code" in error && error.code === 27;
    if (!indexMissing) {
      throw error;
    }
  }

  await Product.bulkWrite(
    products.map((product) => ({
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
    })),
  );
  await Product.collection.updateMany({}, { $unset: LEGACY_PRODUCT_FIELDS });
  console.log(`Seeded ${products.length} products`);
  try {
    await Category.collection.dropIndex("id_1");
    console.log("Removed legacy categories.id index");
  } catch (error) {
    const indexMissing = error && typeof error === "object" && "code" in error && error.code === 27;
    if (!indexMissing) throw error;
  }
  await Category.bulkWrite(
    categories.map((category) => ({
      updateOne: { filter: { slug: category.slug }, update: { $set: category }, upsert: true },
    })),
  );
  await Category.collection.updateMany({}, { $unset: LEGACY_CATEGORY_FIELDS });
  console.log(`Seeded ${categories.length} categories`);
  await TrendingProduct.bulkWrite(
    trendingProducts.map((product) => ({
      updateOne: { filter: { productSlug: product.productSlug }, update: { $set: product }, upsert: true },
    })),
  );
  console.log(`Seeded ${trendingProducts.length} trending products`);
  process.exit(0);
}

seed().catch((error) => {
  console.error("Product seed failed", error);
  process.exit(1);
});
