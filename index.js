const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());
app.use(require("./routes/categories.route.js"));
app.use(require("./routes/comments.route.js"));
app.use(require("./routes/news.route.js"));

mongoose
  .connect("mongodb+srv://aber:code@cluster0.dtgtd.mongodb.net/test")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("Сервер запущен успешно");
});
