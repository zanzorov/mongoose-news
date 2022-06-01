const Comment = require("../models/Comment.model.js");

module.exports.commentController = {
  postComment: async (req, res) => {
    try {
      const comm = await Comment.create({
        name: req.body.name,
        commentText: req.body.commentText,
        news: req.body.news,
      });
      res.json(`Комментарий дабавлен: ${comm}`);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteComment: (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Комментарий удален");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении комментария" });
      });
  },
  getCommentsFromOneNews: (req, res) => {
    Comment.find({ news: req.params.id })
      .populate("news")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({
          error: "Ошибка при выводе всех комментариев определенной новости",
        });
      });
  },
};
