import { Sequelize } from 'sequelize';
import db from '../../config/database.js';

const { DataTypes } = Sequelize;

const Point = db.define('point', {
  id_point: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Optional: if you want the column to auto-increment
  },
  point: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  freezeTableName: true, // Use the table name as-is
  timestamps: true, // Optional: add `createdAt` and `updatedAt` fields
  underscored: true, // Optional: use snake_case for column names
});

export default Point;
