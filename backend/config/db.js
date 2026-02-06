import mongoose from "mongoose";

console.log("🔥 db.js loaded"); // DEBUG A

const connectDB = async () => {
  console.log("🔥 connectDB() called"); // DEBUG B
  console.log("🔥 URI inside db.js =", process.env.MONGO_URI); // DEBUG C

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
