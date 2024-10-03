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
var Users = _database["default"].define('users', {
  // Define attributes
  role_id: {
    type: DataTypes.INTEGER
  },
  divisi_id: {
    type: DataTypes.INTEGER
  },
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  avatar: {
    type: DataTypes.STRING
  }
}, {
  // Freeze Table Name
  freezeTableName: true
});

// Export model Product
var _default = exports["default"] = Users;