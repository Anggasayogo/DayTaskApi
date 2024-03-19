// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;

const Task = db.define('task', {
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
  }
}, {
   // Freeze Table Name
   freezeTableName: true
});
 
// Export model Product
export default Task;