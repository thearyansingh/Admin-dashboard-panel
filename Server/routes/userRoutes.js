import express from "express";
import { authMe, getAllUser, login, register } from "../controller/UserController.js";
import protect from "../middleware/authMe.js";

const userRoute = express.Router();
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/getAllUser", getAllUser);
userRoute.get("/authMe",protect,authMe);




export default userRoute;
