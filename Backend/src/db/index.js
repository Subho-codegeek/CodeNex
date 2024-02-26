import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log(typeof(process.env.MONGODB_URI))
        console.log(process.env.PORT)
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\nMongoDB connected to CodeNEX Atlas database! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB error",error);
        process.exit(1);
    }
}

export default connectDB;