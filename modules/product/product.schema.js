const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});
// productSchema.indexes({ name: "text", description: "text" });

module.exports = mongoose.model("Product", productSchema);
