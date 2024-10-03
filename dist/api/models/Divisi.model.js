"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../../config/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import sequelize 

// import connection 

// init DataTypes
var DataTypes = _sequelize.Sequelize.DataTypes;

// Define schema
var Divisi = _database["default"].define('divisi', {
  // Define attributes
  divisi_name: {
    type: DataTypes.STRING
  }
}, {
  // Freeze Table Name
  freezeTableName: true
});

// Export model Divisi
var _default = exports["default"] = Divisi;