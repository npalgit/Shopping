const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String },
  description: { type: String },
  quantity: { type: Number, default: 0 },
  isPurchased: { type: Boolean, default: false },
});

mongoose.model('Item', ItemSchema);
