const BaseService = require("../../common/base.service");
const Product = require("./product.schema");



class ProductService extends BaseService {
  constructor() {
    super(Product);
  }
}

module.exports = new ProductService();
