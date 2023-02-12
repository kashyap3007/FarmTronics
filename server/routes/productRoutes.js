const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products/productController");
router.post("/product/post", productControllers.postProduct);
router.get("/product/get", productControllers.getProduct);
router.get("/product/get/:id", productControllers.getoneProduct);

module.exports = router;
