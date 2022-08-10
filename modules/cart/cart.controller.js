const express = require("express");
const auth = require("../../common/middlewares/auth");
const router = express.Router();

const cartService = require("./cart.service");

router.use(auth);

router.get("/", async (req, res) => {
  const carts = await cartService.getByUser(req.user._id);
  const total = carts.reduce((acc, cur) => {
    return acc + cur.product.price * cur.quantity;
  }, 0);
  console.log(total)
  res.render("cart", { carts: carts, total });
});


router.get('/count', async (req,res)=>{
  const carts = await cartService.getByUser(req.user._id);
  res.send({count: carts.length});
})


router.put("/:id", async (req, res) => {
  const productid = req.params.id;
  const userid = req.user._id;
  await cartService.addCart(productid, userid);
  const cart = await cartService.getByUser(userid);
  res.send(cart);
});

module.exports = router;
