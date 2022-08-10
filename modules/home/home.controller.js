const express = require("express");
const router = express.Router();

const productService = require("../product/product.service");

router.get("/", async (req, res) => {
  const { search } = req.query;
  if (!search) {
    const products = await productService.getAll();
    return res.render("home", { products: products });
  }
  console.log("search", search);
  const products = await productService.find(search);

  return res.render("home", { products: products});
});

module.exports = router;
