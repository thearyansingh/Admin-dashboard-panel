import express from "express";
import { getAllUser, login, register } from "../controller/UserController.js";

const userRoute = express.Router();
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/getAllUser", getAllUser);



export default userRoute;
