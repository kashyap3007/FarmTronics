const express = require("express");
const router = express.Router();

const articleControllers = require("../controllers/articles/articleControllers");

router.post("/article/post", articleControllers.postArticle);
router.patch("/article/update/:id", articleControllers.updateArticle);
router.get("/article/get", articleControllers.getArticle);
router.get("/article/get/:id", articleControllers.getoneArticle);

module.exports = router;
