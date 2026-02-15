import mongoose, { mongo } from "mongoose";
const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB;
