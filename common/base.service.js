const { ObjectId } = require("mongodb");

module.exports = class BaseService {
  /**
   * The constructor function is a special function that is called when a new instance of the class is
   * created
   * @param model {import("mongoose").Model} - The model that the controller is going to be using.
   */
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await this.model.find();
  }

  async getById(id) {
    return await this.model.findById(new ObjectId(id));
  }

  async create(product) {
    return await this.model.create(product);
  }

  async update(id, product) {
    return await this.model.findByIdAndUpdate(id, product, { new: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
};
