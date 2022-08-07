/**
 * @param app {import('express').Express} - The express app object
 * @param path {string} - The path to the module.
 */
module.exports = function initModules(app) {
  require("./hello/hello.module")(app, "/hello");
  require("./product/product.module")(app, "/product");
  require("./auth/auth.module")(app, "/auth");
  require("./user/user.module")(app, "/user");
  require("./cart/cart.module")(app, "/cart");
  require("./order/order.module")(app, "/order");
  require("./home/home.module")(app, "/");
};
