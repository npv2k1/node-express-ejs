class PasswordService {
  constructor() {
    this.bcrypt = require("bcrypt");
  }

  async hash(password) {
    return await this.bcrypt.hash(password, 10);
  }

  async compare(password, hash) {
    return await this.bcrypt.compare(password, hash);
  }
}

module.exports = new PasswordService();
