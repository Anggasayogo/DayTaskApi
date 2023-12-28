const { DB, USER, PASSWORD, HOST, dialect, pool } = require('./var.js');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  operatorsAliases: false,

  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("../models/tutorial.model.js")(sequelize, Sequelize);

module.exports = db;