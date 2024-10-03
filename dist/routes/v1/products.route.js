"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ProductController = require("../../api/controller/ProductController.js");
var router = (0, _express.Router)();

// Route get semua product
router.get('/list', _ProductController.getProducts);
// Route get product by id
router.get('/products/:id', _ProductController.getProductById);
// Route create product baru
router.post('/products', _ProductController.createProduct);
// Route update product by id
router.put('/products/:id', _ProductController.updateProduct);
// Route delete product by id
router["delete"]('/products/:id', _ProductController.deleteProduct);
var _default = exports["default"] = router;