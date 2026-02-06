import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

console.log("🔥 index.js file loaded"); // DEBUG 1

dotenv.config();
console.log("🔥 MONGO_URI =", process.env.MONGO_URI); // DEBUG 2

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("✅ Local server running");
});

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  console.log("🔥 startServer() called"); // DEBUG 3
  try {
    await connectDB();
    console.log("🔥 connectDB() finished"); // DEBUG 4

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server failed to start:", err);
  }
};

startServer();
