const Category = require("../models/Category.model.js");

module.exports = categoryController = {
  postCategory: (req, res) => {
    Category.create({
      name: req.body.name,
    })
      .then(() => {
        res.json("Категория добавлена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при добавлении новой категории" });
      });
  },
  deleteCategory: (req, res) => {
    Category.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Категория удалена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении категории" });
      });
  },
  getCategories: (req, res) => {
    Category.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ error: "Ошибка при запросе всех категорий" });
      });
  },
};
