"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _TaskController = require("../../api/controller/TaskController.js");
var router = (0, _express.Router)();
router.get('/list', _TaskController.getTaskList);
router.get('/detail/:id', _TaskController.getTaskById);
router.get('/user/list/:id', _TaskController.getTaskListByUserId);
router.post('/create', _TaskController.createNassignTask);
router["delete"]('/destroy/:id', _TaskController.destroyTask);
router.put('/update', _TaskController.updateTask);
var _default = exports["default"] = router;