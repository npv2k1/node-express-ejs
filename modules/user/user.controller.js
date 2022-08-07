const express = require("express");
const router = express.Router();

const userService = require("./user.service");

router.get("/create", async (req, res) => {
  res.render("product/create");
});


module.exports = router;
