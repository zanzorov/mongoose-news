const { Router } = require("express");
const { commentController } = require("../controllers/comments.controller.js");

const router = Router();

router.post("/comments", commentController.postComment);
router.delete("/comments/:id", commentController.deleteComment);
router.get("/comments/news/:id", commentController.getCommentsFromOneNews);

module.exports = router;
