import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";
import categoriesRouter from "./routes/categories.js";
import trendingProductsRouter from "./routes/trendingProducts.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/trending-products", trendingProductsRouter);

// Test route
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

export default app;
