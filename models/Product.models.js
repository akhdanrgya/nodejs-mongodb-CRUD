const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  name: String,
  desc: String,
  price: Number,
  rate: Number,
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
