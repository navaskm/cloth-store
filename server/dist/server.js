"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_js_1 = __importDefault(require("./app.js"));
const db_js_1 = require("./db.js");
dotenv_1.default.config();
const PORT = Number(process.env.PORT || 4000);
async function startServer() {
    await (0, db_js_1.connectDatabase)();
    app_js_1.default.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
startServer().catch((error) => {
    console.error("Unable to start server", error);
    process.exit(1);
});
