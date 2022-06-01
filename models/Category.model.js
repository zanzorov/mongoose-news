const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String, // название категории
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
