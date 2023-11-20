const express = require("express");
const mongoose = require("mongoose");

const product = require("./routes/Product.routes");

const app = express();
const port = 5000;

app.use(express.json());

const uri = "mongodb://127.0.0.1:27017/e-commerce";

mongoose.connect(uri);

app.get("/", (req, res) => {
    res.json("Welcome To API Services")
})

app.use("/products", product);

app.listen(port, () => {
  console.log(`listening server on port => http://localhost:${port}`);
});
