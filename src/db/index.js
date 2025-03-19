import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const connectDB = async () => {
    try {
        if (!process.env.URL) {
            throw new Error("❌ MONGO_URI is not defined in environment variables");
        }

        const conn = await mongoose.connect(process.env.URL, {
            dbName: process.env.DB_NAME, // Ensure it picks the correct database
        });

        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
