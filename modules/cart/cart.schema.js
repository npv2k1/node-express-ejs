const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});
cartSchema.index({ product: 1, user: 1 }, { unique: true });
module.exports = mongoose.model("Cart", cartSchema);
