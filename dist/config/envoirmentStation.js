"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.envStation = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _env$config;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var envStation = exports.envStation = _dotenv["default"] === null || _dotenv["default"] === void 0 || (_env$config = _dotenv["default"].config()) === null || _env$config === void 0 ? void 0 : _env$config.parsed;