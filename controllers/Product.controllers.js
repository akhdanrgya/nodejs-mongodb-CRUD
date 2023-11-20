const productModel = require("../models/Product.models");

const getProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addProduct = async (req, res) => {
  const { name, price, desc, rate } = req.body;

  try {
    const product = await productModel.create({ name, price, desc, rate });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await productModel.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await productModel.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.json(deletedProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  try {
    const existingProduct = await productModel.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getProduct,
  addProduct,
  getProductById,
  deleteProduct,
  editProduct,
};
