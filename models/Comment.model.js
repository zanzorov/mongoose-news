const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: String, // имя комментатора
  commentText: String, // текст комментария
  news: {
    ref: "News",
    type: mongoose.Schema.Types.ObjectId, // новость к которой он написан (ид)
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
