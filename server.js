import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("xxx1");
});

app.get("/getData", (req, res) => {
  res.send("xxx");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
