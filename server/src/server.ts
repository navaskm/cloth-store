import dotenv from "dotenv";
import app from "./app.js";
import { connectDatabase } from "./db.js";

dotenv.config();

const PORT = Number(process.env.PORT || 4000);

async function startServer() {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Unable to start server", error);
  process.exit(1);
});
