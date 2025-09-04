import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const MONGO_CLUSTER_URI = process.env.MONGO_CLUSTER_URI;

export async function connectDB() {
    try {
        await mongoose.connect(MONGO_CLUSTER_URI ?? MONGO_URI!);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}
