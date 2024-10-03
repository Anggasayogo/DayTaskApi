"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _PriorityController = require("../../api/controller/PriorityController.js");
var router = (0, _express.Router)();
router.get('/list', _PriorityController.getPrioList);
var _default = exports["default"] = router;