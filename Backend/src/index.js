import connectDB from "./db";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB();