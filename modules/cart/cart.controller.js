const express = require("express");
const router = express.Router();

const cartService = require("./cart.service");

router.get("/",async (req,res)=>{
  const carts = await cartService.getByUser(req.user._id);
  res.render("cart", {carts: carts})
})
router.put("/:id", async (req, res) => {
  const productid = req.params.id;
  const userid = req.user._id;
  await cartService.addCart(productid, userid);
  res.sendStatus(200);
});


module.exports = router;
