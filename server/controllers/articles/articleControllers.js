const postArticle = require("./postArticle");
const getArticle = require("./getArticle");
const getoneArticle = require("./getoneArticle");
const updateArticle = require("./updateArticle");
const deleteArticle= require("./deleteArticle");
const likeArticle= require("./likeArticle");

const articleControllers = {
  postArticle,
  getArticle,
  getoneArticle,
  updateArticle,
  deleteArticle,
  likeArticle
};

module.exports = articleControllers;
