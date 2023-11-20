const express = require("express");
const route = express.Router();
const {
  getProduct,
  addProduct,
  getProductById,
  deleteProduct,
  editProduct,
} = require("../controllers/Product.controllers");

route.get("/", getProduct);
route.get("/:id", getProductById);
route.post("/", addProduct);
route.delete("/:id", deleteProduct);
route.put("/:id", editProduct);

module.exports = route;
