const BaseService = require("../../common/base.service");

const Cart = require("./cart.schema");

class CartService extends BaseService {
  constructor() {
    super(Cart);
  }
  async addCart(productid, userid) {
    await Cart.findOneAndUpdate(
      { product: productid, user: userid },
      { $inc: { quantity: 1 } },
      { new: true, upsert: true }
    );
  }
  async getByUser(userId){
    return await Cart.find({user: userId}).populate("product")
  }
}

module.exports = new CartService();
