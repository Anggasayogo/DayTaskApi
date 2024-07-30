// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.mjs";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Roles = db.define('roles', {
  // Define attributes
  role_name: {
    type: DataTypes.STRING
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Roles
export default Roles;