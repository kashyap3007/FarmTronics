const postArticle = require("./postArticle");
const getArticle = require("./getArticle");
const getoneArticle = require("./getoneArticle");
const updateArticle = require("./updateArticle");

const articleControllers = {
  postArticle,
  getArticle,
  getoneArticle,
  updateArticle,
};

module.exports = articleControllers;
