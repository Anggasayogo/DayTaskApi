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
var Product = _database["default"].define('products', {
  // Define attributes
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  }
}, {
  // Freeze Table Name
  freezeTableName: true
});

// Export model Product
var _default = exports["default"] = Product;