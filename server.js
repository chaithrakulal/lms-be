import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const app = express();
connectDB();
app.get("/", (req, res) => res.send("API is running"));
// app1.use("/api/login", login);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
