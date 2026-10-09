"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = connectDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
let connectionPromise = null;
function connectDatabase() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not configured");
    }
    if (!connectionPromise) {
        connectionPromise = mongoose_1.default.connect(uri, {
            dbName: process.env.MONGODB_DB_NAME || "formen",
        });
    }
    return connectionPromise;
}
