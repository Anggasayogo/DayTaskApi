"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _AutenticateController = require("../../api/controller/AutenticateController.js");
var _authMiddleware = _interopRequireDefault(require("../../api/middleware/authMiddleware.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post('/register', _AutenticateController.register);
router.post('/login', _AutenticateController.login);
router.get('/test', _AutenticateController.test);
router.get('/user/list', _authMiddleware["default"], _AutenticateController.getUsersList);
router.put('/user/update/:id', _authMiddleware["default"], _AutenticateController.updateProfile);
var _default = exports["default"] = router;