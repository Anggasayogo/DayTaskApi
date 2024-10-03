"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var verifyToken = function verifyToken(req, res, next) {
  var token = req.header('Authorization');
  if (!token) return res.status(401).json({
    error: 'Access denied'
  });
  try {
    var decoded = _jsonwebtoken["default"].verify(token, 'RRQ');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Invalid token'
    });
  }
};
var _default = exports["default"] = verifyToken;