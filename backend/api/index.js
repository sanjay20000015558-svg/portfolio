import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*", // localhost + vercel allowed
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

// Simple health check route
app.get("/", (req, res) => res.send("✅ Server is running!"));

// ✅ VERCEL SERVERLESS HANDLER
export default async function handler(req, res) {
  await connectDB();      // Connect DB per request (cached)
  return app(req, res);   // Let Express handle the request
}
