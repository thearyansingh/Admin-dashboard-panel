import express from "express"
import {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

const router = express.Router();
router.post("/add", addProduct);
router.get("/", getProducts);
router.get("/getProId:id", getProductById);
router.patch("/updatePro/:id", updateProduct);
router.delete("/deletePro/:id", deleteProduct);

export default router