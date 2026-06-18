import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
import connect from "./config/MongoDB.js";
import dotenv from "dotenv";
import cokkieParser from "cookie-parser"

import router from "./routes/productRoutes.js";
const app = express();
dotenv.config();
connect();
app.use(express.json());
app.use(cokkieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true
}));    
app.get("/", (req, res) => res.json({message: "Hi"}));
app.use("/api/user", userRoute);

app.use("/api/product",router)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app is running on ${port}`));
