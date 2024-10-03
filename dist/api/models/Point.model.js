"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../../config/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DataTypes = _sequelize.Sequelize.DataTypes;
var Point = _database["default"].define('point', {
  id_point: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Optional: if you want the column to auto-increment
  },
  point: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  // Use the table name as-is
  timestamps: true,
  // Optional: add `createdAt` and `updatedAt` fields
  underscored: true // Optional: use snake_case for column names
});
var _default = exports["default"] = Point;