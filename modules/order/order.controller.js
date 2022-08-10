const express = require("express");
const auth = require("../../common/middlewares/auth");
const cartService = require("../cart/cart.service");
const router = express.Router();


router.use(auth)

const orderService = require("./order.service");

router.get("/", async (req, res) => {
  const orders = await orderService.getByUser(req.user._id);
  return res.render("orders", { orders });
});
router.get("/:id", async (req, res) => {
  console.log("id", req.params.id);
  const order = await orderService.getById(req.params.id)
  console.log("order",order)
  return res.render("orderdetail", { order: order })
});
router.post("/", async (req, res) => {
  const carts = await cartService.getByUser(req.user._id);
  const { phone, address } = req.body;
  const orderProduct = carts.map((cart) => ({
    product: cart.product._id,
    quantity: cart.quantity,
  }));

  console.log("req.body", req.body, orderProduct);
  const order = await orderService.create({
    customerId: req.user._id,
    phone: phone,
    address: address,
    items: orderProduct,
  });

  await cartService.deleteCart(req.user._id);
  return res.redirect("/order");
});

module.exports = router;
