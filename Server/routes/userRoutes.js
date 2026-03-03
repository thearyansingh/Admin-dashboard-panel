import express from "express";
import { authMe, getAllUser, login, register } from "../controller/UserController.js";
import protect from "../middleware/authMe.js";
import isAdmin from "../middleware/isAdmin.js";

const userRoute = express.Router();
userRoute.post("/register", register);
userRoute.post("/addUser",protect,isAdmin, register);

userRoute.post("/login", login);
userRoute.get("/getAllUser",protect,getAllUser);
userRoute.get("/authMe",protect,authMe);




export default userRoute;
