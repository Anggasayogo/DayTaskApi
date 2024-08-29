// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Priority = db.define('priority', {
  // Define attributes
  priority: {
    priority_name: DataTypes.STRING
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Point
export default Priority;