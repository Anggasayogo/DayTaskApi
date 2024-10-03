"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _taskRoute = _interopRequireDefault(require("./task.route.js"));
var _pointRoute = _interopRequireDefault(require("./point.route.js"));
var _productsRoute = _interopRequireDefault(require("./products.route.js"));
var _priorityRoute = _interopRequireDefault(require("./priority.route.js"));
var _authenticateRoute = _interopRequireDefault(require("./authenticate.route.js"));
var _authMiddleware = _interopRequireDefault(require("../../api/middleware/authMiddleware.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Import express

// Init express router
var router = (0, _express.Router)();

// Route get semua product
router.use('/auth', _authenticateRoute["default"]);
router.use('/products', _authMiddleware["default"], _productsRoute["default"]);
router.use('/task', _authMiddleware["default"], _taskRoute["default"]);
router.use('/point', _authMiddleware["default"], _pointRoute["default"]);
router.use('/priority', _authMiddleware["default"], _priorityRoute["default"]);

// export router
var _default = exports["default"] = router;