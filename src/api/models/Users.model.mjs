// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../../config/database.mjs";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Users = db.define('users', {
  // Define attributes
  role_id: {
    type: DataTypes.INTEGER
  },
  divisi_id: {
    type: DataTypes.INTEGER
  },
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  avatar: {
    type: DataTypes.STRING
  },
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Users;