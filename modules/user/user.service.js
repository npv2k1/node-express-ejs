const BaseService = require("../../common/base.service");

const User = require("./user.schema");

class AuthService extends BaseService {
  constructor() {
    super(User);
  }
  findByEmail(email) {
    return this.model.findOne({ email });
  }
}

module.exports = new AuthService();
