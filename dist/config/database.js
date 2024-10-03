"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _envoirmentStation = require("./envoirmentStation.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import sequelize

// create connection
var db = new _sequelize["default"].Sequelize(_envoirmentStation.envStation === null || _envoirmentStation.envStation === void 0 ? void 0 : _envoirmentStation.envStation.DB_NAME, _envoirmentStation.envStation === null || _envoirmentStation.envStation === void 0 ? void 0 : _envoirmentStation.envStation.DB_USERNAME, _envoirmentStation.envStation === null || _envoirmentStation.envStation === void 0 ? void 0 : _envoirmentStation.envStation.DB_PASSWORD, {
  host: _envoirmentStation.envStation === null || _envoirmentStation.envStation === void 0 ? void 0 : _envoirmentStation.envStation.DB_HOST,
  dialect: _envoirmentStation.envStation === null || _envoirmentStation.envStation === void 0 ? void 0 : _envoirmentStation.envStation.DB_DIALEC,
  port: _envoirmentStation.envStation === null || _envoirmentStation.envStation === void 0 ? void 0 : _envoirmentStation.envStation.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  retry: {
    max: 3
  }
});

// export connection
var _default = exports["default"] = db;