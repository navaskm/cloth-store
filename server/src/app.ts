import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

export default app;