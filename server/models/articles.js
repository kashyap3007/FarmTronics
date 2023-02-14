const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image: {
    data: Buffer,
  },
  category: {
    type: [String],
  },
  details: {
    required: true,
    type: String,
  },
  Author: {
    type: String,
  },
  year: {
    type: Date,
    default: new Date(),
  },
  likes:{
    type:[String],
    default: []
  }
});

module.exports = mongoose.model("Article", productSchema);
