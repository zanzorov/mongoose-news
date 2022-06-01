const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String, // заголовок новости
  text: String, // тескт новости
  category: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
