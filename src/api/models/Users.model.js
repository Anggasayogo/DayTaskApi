// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Users = db.define('users', {
  // Define attributes
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Users;