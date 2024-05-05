import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  createProduct
} from "../controllers/client.js";

const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
