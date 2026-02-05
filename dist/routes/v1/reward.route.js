"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _RewardController = require("../../api/controller/RewardController.js");
var router = (0, _express.Router)();
router.get('/list', _RewardController.rewardList);
router.get('/:id', _RewardController.rewardById);
router.post('/create', _RewardController.createReward);
router.put('/update/:id', _RewardController.updateReward);
router["delete"]('/delete/:id', _RewardController.deleteReward);
var _default = exports["default"] = router;