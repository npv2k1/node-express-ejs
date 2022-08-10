const express = require("express");
const router = express.Router();

const productService = require("./product.service");

router.get("/create", async (req, res) => {
  res.render("product/create");
});
router.get("/", async (req, res) => {
  const { search } = req.query;
  if (!search) {
    return res.send(await productService.getAll());
  }
  console.log("search", search);
  const product = await productService.find(search);
  res.send(product);
});

router.get("/", async (req, res) => {
  const products = await productService.getAll();
  return res.send(products);
});

router.post("/create", async (req, res) => {
  console.log("req.body", req.body);
  const product = await productService.create(req.body);
  res.redirect("/");
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productService.getById(id);
  return res.render("productdetail", { product: product});
});


module.exports = router;
