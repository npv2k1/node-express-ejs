const BaseService = require("../../common/base.service");

const Order = require("./order.schema");

class OrderService extends BaseService {
  constructor() {
    super(Order);
  }
  async getByUser(userId) {
    return await Order.find({ customerId: userId }).populate({
      path: "items",
      populate: {
        path: "product",
        model: "Product",
      },
    });
  }
  async getById(id) {
    return await Order.findById(id).populate({
      path: "items",
      populate: {
        path: "product",
        model: "Product",
      },
    });
  }
}

module.exports = new OrderService();
