const express = require("express");
const router = express.Router();

const productService = require("../product/product.service");

router.get("/", async (req, res) => {
  const products = await productService.getAll();
  res.render("home", { products: products });
});

module.exports = router;
