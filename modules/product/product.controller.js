const express = require("express");
const router = express.Router();

const productService = require("./product.service");

router.get("/create", async (req, res) => {
  res.render("product/create");
});
router.get("/", async (req, res) => {
  const products = await productService.getAll();
  return res.send(products);
});

router.post("/create", async (req, res) => {
  console.log("req.body", req.body);
  const product = await productService.create(req.body);
  res.send(product);
});

// router.get("/:id", async (req, res) => {
//   // const product = await productService.getById(req.params.id);
// });

module.exports = router;
