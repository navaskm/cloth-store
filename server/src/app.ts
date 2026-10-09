import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);

// Test route
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

export default app;
