import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config();
connectDB();




































// const app = express();

// (async () => {
//   try {
//     const mongoURI = `${process.env.URL}/${DB_NAME}`;
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     console.log("✅ MongoDB Connected Successfully");

//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`🚀 Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error);
//     process.exit(1); // Exit the process if DB connection fails
//   }
// })();

// // Listen for errors
// app.on("error", (error) => {
//   console.error("❌ Express App Error:", error);
// });
