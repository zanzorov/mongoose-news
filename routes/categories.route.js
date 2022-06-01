const { Router } = require("express");
const categoryController = require("../controllers/categories.controller");

const router = Router();

router.post("/categories", categoryController.postCategory);
router.delete("/categories/:id", categoryController.deleteCategory);
router.get("/categories", categoryController.getCategories);

module.exports = router;
