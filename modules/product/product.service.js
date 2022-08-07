const BaseService = require("../../common/base.service");
const Product = require("./product.schema");

class ProductService extends BaseService {
  constructor() {
    super(Product);
  }
  async find(text) {
    return await Product.find({ name: { $regex: text } });
  }
}

module.exports = new ProductService();
