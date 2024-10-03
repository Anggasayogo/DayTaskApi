"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../../config/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DataTypes = _sequelize.Sequelize.DataTypes;
var Priority = _database["default"].define('priority', {
  id_priority: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  priority_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  // Keeps table name as 'priority'
  timestamps: true,
  // Adds 'createdAt' and 'updatedAt' fields
  underscored: true // Optional: use snake_case for column names
});
var _default = exports["default"] = Priority;