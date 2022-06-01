const News = require("../models/News.model.js");

module.exports = newsController = {
  postNews: (req, res) => {
    News.create({
      title: req.body.title,
      text: req.body.text,
      category: req.body.category,
    })
      .then(() => {
        res.json("Новость добавлена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при добавлении новой новости" });
      });
  },
  deleteNews: (req, res) => {
    News.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Новость удалена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении новости" });
      });
  },
  patchNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      text: req.body.text,
      category: req.body.category,
    })
      .then(() => {
        res.json("Новость изменена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при изменении новости" });
      });
  },
  getOneNews: (req, res) => {
    News.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ error: "Ошибка при запросе определенной новости" });
      });
  },
  getNews: (req, res) => {
    News.find()
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ error: "Ошибка при запросе всех новостей" });
      });
  },
  getNewsFromCategory: (req, res) => {
    News.find({ category: req.params.id })
      .populate("category")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({
          error: "Ошибка при запросе всех новостей из определенной категории",
        });
      });
  },
};
 