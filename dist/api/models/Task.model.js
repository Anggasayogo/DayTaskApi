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
var Task = _database["default"].define('task', {
  id_point: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  task_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  task_progres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  task_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  task_duedate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  task_docs: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_pic: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_svp: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  priority_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Freeze Table Name
  freezeTableName: true
});

// Export model Product
var _default = exports["default"] = Task;