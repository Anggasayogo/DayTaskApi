import { Sequelize } from 'sequelize';
import db from '../../config/database.js';

const { DataTypes } = Sequelize;

const Priority = db.define('priority', {
  id_priority: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  priority_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  freezeTableName: true, // Keeps table name as 'priority'
  timestamps: true,     // Adds 'createdAt' and 'updatedAt' fields
  underscored: true     // Optional: use snake_case for column names
});

export default Priority;
