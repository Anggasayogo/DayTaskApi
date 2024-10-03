"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _PointController = require("../../api/controller/PointController.js");
var router = (0, _express.Router)();
router.get('/rank', _PointController.getRankList);
router.get('/list', _PointController.getPointList);
var _default = exports["default"] = router;