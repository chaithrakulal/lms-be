import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Not established");
  }
};

export default connectDB;
