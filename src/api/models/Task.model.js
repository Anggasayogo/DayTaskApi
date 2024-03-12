// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Task = db.define('task', {
  // Define attributes
  id_point: {
    type: DataTypes.INTEGER
  },
  task_name: {
    type: DataTypes.STRING
  },
  task_progres: {
    type: DataTypes.STRING
  },
  task_date: {
    type: DataTypes.DATE
  },
  task_duedate: {
    type: DataTypes.DATE
  },
  task_docs: {
    type: DataTypes.STRING
  },
  id_pic: {
    type: DataTypes.INTEGER
  },
  id_svp: {
    type: DataTypes.INTEGER
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Task;